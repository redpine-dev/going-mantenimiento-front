# Red Pine Tanstack Table Creator SKILL

## Example 1: Fee Bills Table Componentes

### Data Manager

```typescript
"use client";
import { useMemo, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { useEnterpriseContext } from "@/modules/auth/contexts/EnterpriseContext";
import { ExcelDownloadButton } from "@/modules/documents/components/ExcelDownloadButton";
import { FeeBillDataTableManager } from "@/modules/documents/components/FeeBillDataTableManager";
import { PeriodSelector } from "@/modules/documents/components/PeriodSelector";
import { SummaryCard } from "@/modules/documents/components/SummaryCard";
import { useDownloadFeeBillsExcel } from "@/modules/documents/hooks/fee-bill/useDownloadFeeBillsExcel";
import { useFeeBills } from "@/modules/documents/hooks/fee-bill/useFeeBills";
import { useSyncFeeBills } from "@/modules/documents/hooks/fee-bill/useSyncFeeBills";
import { useDebounceFunction } from "@/modules/shared/hooks/useDebounceFunction";

import { columns } from "./columns";

export const FeeBillsDataManager = () => {
  const { enterprise } = useEnterpriseContext("FeeBillsDataManager");
  const [month, setMonth] = useState(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [pending, setPending] = useState<boolean>(false);
  const debouncedSetSearchQuery = useDebounceFunction(
    (query: string) => setDebouncedSearchQuery(query),
    500
  );

  const {
    data: feeBills,
    isLoading,
    isError,
    refetch,
  } = useFeeBills({
    month,
    year,
    enterpriseRut: enterprise.enterpriseRut,
    searchQuery: debouncedSearchQuery,
    pending: pending === true ? true : undefined,
  });
  const syncFeeBillsMutation = useSyncFeeBills();

  const handleSync = async () => {
    if (!enterprise) return;
    await syncFeeBillsMutation.mutateAsync({
      month,
      year,
      enterpriseRut: enterprise.enterpriseRut,
    });
  };

  const summaryItems = useMemo(() => {
    if (!feeBills) return [];
    const summary = {
      netTotal: feeBills.reduce((sum, bill) => sum + bill.netAmount, 0),
      taxTotal: feeBills.reduce((sum, bill) => sum + bill.tax, 0),
      totalAmount: feeBills.reduce((sum, bill) => sum + bill.totalAmount, 0),
      pendingTotal: feeBills.reduce(
        (sum, bill) => sum + (bill.pendingAmount || 0),
        0
      ),
      pendingDocumentsTotal: feeBills.filter(
        (bill) => (bill.pendingAmount || 0) > 0
      ).length,
    };

    return [
      {
        title: "Total Neto",
        value: summary?.netTotal || 0,
        description: "Monto neto total",
      },
      {
        title: "Total",
        value: summary?.totalAmount || 0,
        description: "Monto total facturado",
        highlighted: true,
      },
      {
        title: "Pendiente de Pago",
        value: summary?.pendingTotal || 0,
        description: "Monto total pendiente",
        warning: true,
      },
      {
        title: "Docs. Pendientes",
        value: summary?.pendingDocumentsTotal || 0,
        description: "Documentos sin pagar",
        isCount: true,
        warning: (summary?.pendingDocumentsTotal || 0) > 0,
      },
    ];
  }, [feeBills]);

  const { mutateAsync: downloadExcel } = useDownloadFeeBillsExcel();

  const handleDownload = async () => {
    return await downloadExcel({
      enterpriseRut: enterprise.enterpriseRut,
      month,
      year,
    });
  };

  return (
    <div className="space-y-4">
      <Card className="mb-6 flex flex-col items-start justify-between gap-4 rounded-lg p-4 sm:flex-row sm:items-center">
        <PeriodSelector
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
          onSync={handleSync}
          isSyncing={syncFeeBillsMutation.isPending}
        />
        <ExcelDownloadButton
          enterpriseRut={enterprise.enterpriseRut}
          month={month}
          year={year}
          documentType="fee-bill"
          onDownload={handleDownload}
        />
      </Card>
      <div
        className="mb-6 grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${summaryItems.length}, minmax(0, 1fr))`,
        }}
      >
        {summaryItems.map((item) => (
          <SummaryCard key={item.title} {...item} loading={isLoading} />
        ))}
      </div>
      <Card>
        <Card.Header>
          <Card.Title>
            Boletas de Honorarios - {month}/{year}
          </Card.Title>
        </Card.Header>
        <Card.Content className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="filter-pending"
              checked={pending}
              onCheckedChange={(checked) => setPending(!!checked)}
            />
            <label
              htmlFor="filter-pending"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Solo pendientes
            </label>
          </div>

          <Input
            placeholder="Buscar por RUT, Nombre o Número de Boleta"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              debouncedSetSearchQuery(e.target.value);
            }}
          />
          <Card>
            <FeeBillDataTableManager
              data={feeBills || []}
              columns={columns}
              isLoading={isLoading}
              isError={isError}
              onRetry={refetch}
            />
          </Card>
        </Card.Content>
      </Card>
    </div>
  );
};
```

### Data Table Manager

```typescript
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { FeeBillTable } from "../FeeBillTable";
import { FeeBillDataTableManagerProps } from "./types";

const FeeBillDataTableManager = ({
  data,
  columns,
  ...props
}: FeeBillDataTableManagerProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });
  return <FeeBillTable table={table} {...props} />;
};

export { FeeBillDataTableManager };
```

### Fee Bill Table

```typescript

import { DataTableBody } from "@/components/DataTable/DataTableBody";
import { DataTableHeader } from "@/components/DataTable/DataTableHeader";
import { DataTableRows } from "@/components/DataTable/DataTableRows";
import { Table } from "@/components/ui/Table/Table";

import { FeeBillTableProps } from "./types";

const FeeBillTable = ({
  table,
  isError = false,
  isLoading = false,
  onRetry,
}: FeeBillTableProps) => {
  return (
    <Table id="fee-bills-table">
      <DataTableHeader table={table} />
      <DataTableBody
        table={table}
        isLoading={isLoading}
        isError={isError}
        onRetry={onRetry}
        emptyMessage="No existen boletas de honorarios disponibles"
      >
        <DataTableRows rows={table.getRowModel().rows} />
      </DataTableBody>
    </Table>
  );
};

export { FeeBillTable };
```

### Columns Definition

```typescript
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import { Currency } from "@/components/Currency";
import { EllipsisText } from "@/components/EllipsisText";
import { Badge } from "@/components/ui/Badge";
import { FeeBill } from "@/modules/documents/domain/FeeBill";

const columns: ColumnDef<FeeBill>[] = [
  {
    header: "Fecha",
    accessorKey: "billDate",
    cell: ({ row }) => {
      return (
        <span>{format(new Date(row.original.billDate), "dd/MM/yyyy")}</span>
      );
    },
  },
  {
    header: "Número",
    accessorKey: "billNumber",
  },
  {
    header: "Emisor",
    accessorKey: "issuerName",
    cell: ({ row }) => {
      return <EllipsisText>{row.original.issuerName}</EllipsisText>;
    },
  },
  {
    header: "RUT Emisor",
    accessorKey: "issuerRut",
  },
  {
    header: "Neto",
    accessorKey: "netAmount",
    cell: ({ row }) => {
      return <Currency>{row.original.netAmount}</Currency>;
    },
  },
  {
    header: "Retención",
    accessorKey: "tax",
    cell: ({ row }) => {
      return <Currency>{row.original.tax}</Currency>;
    },
  },
  {
    header: "Total",
    accessorKey: "totalAmount",
    cell: ({ row }) => {
      return <Currency>{row.original.totalAmount}</Currency>;
    },
  },
  {
    header: "Pendiente",
    accessorKey: "pendingAmount",
    cell: ({ row }) => {
      return <Currency>{row.original.pendingAmount}</Currency>;
    },
  },
  {
    header: "Estado",
    accessorKey: "paymentStatus",
    cell: ({ row }) => {
      const getStatusStyle = (status: string) => {
        switch (status) {
          case "Pagado":
            return "default";
          case "Parcialmente Pagado":
            return "outline";
          case "Pendiente":
          default:
            return "destructive";
        }
      };
      return (
        <Badge variant={getStatusStyle(row.original.paymentStatus)}>
          {row.original.paymentStatus}
        </Badge>
      );
    },
  },
];

export { columns };
```
