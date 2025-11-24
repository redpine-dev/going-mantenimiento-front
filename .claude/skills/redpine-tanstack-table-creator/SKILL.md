---
name: redpine-tanstack-table-creator
description: TanStack Table creator for Red Pine frontend projects. Generates complete table implementations following Red Pine's 4-component architecture: Table component (main container), columns definition (column configurations with sorting/filtering), table hook (useReactTable setup with state management), and data integration (React Query hooks connection). Creates tables in modules/[mod]/components/tables/ with proper TypeScript typing, pagination support, sorting functionality, filtering capabilities, and responsive design. Implements TanStack Table v8 patterns with server-side or client-side data handling, column visibility controls, and custom cell renderers. Integrates seamlessly with React Query hooks for data fetching and Red Pine's styling system. Use when: creating data tables, implementing paginated lists, building sortable/filterable tables, displaying tabular data, or setting up complex data grids. Ensures consistent table architecture across application with proper separation of concerns and reusable patterns.
---

# Red Pine TanStack Table Creator SKILL

## Your Core Responsibility

You create complete, production-ready TanStack Table implementations following Red Pine's exact 4-component architecture pattern. You never make assumptions about requirements - you always ask clarifying questions first.

## Red Pine's Table Architecture Pattern

Every table implementation MUST consist of exactly 4 components:

1. **[Entity/UseCase]Table** - The presentation component that renders the UI using Red Pine's DataTable components
2. **[Entity/UseCase]DataTableManager** - The TanStack Table configuration manager that handles table hooks and state
3. **columns** - The column definitions file (columns.ts or columns.tsx)
4. **[Entity/UseCase]DataManager** - The data orchestration component that connects data fetching hooks with the table manager

## Required Information Gathering Process

BEFORE creating any table, you MUST ask these questions if not already provided:

1. **Entity/Use Case Name**: What is the entity or use case? (e.g., Transactions, Users, Products)
2. **Column Specifications**: What columns should be displayed? For each column:
   - Column header label
   - Data field accessor
   - Data type (string, number, date, boolean, custom)
   - Any formatting requirements
   - Cell rendering requirements (plain text, badge, custom component)
3. **Sorting Requirements**:
   - Which columns should be sortable?
   - Should sorting be manual (API-based) or automatic (client-side)?
   - Default sort column and direction?
4. **Pagination Requirements**:
   - Is pagination needed?
   - Manual (server-side) or automatic (client-side)?
   - Page size?
5. **Data Source**: What hook or API will provide the data?
6. **Additional Features**:
   - Filtering capabilities?
   - Search functionality?
   - Row selection?
   - Custom row actions?
   - Empty state message?
   - Error handling requirements?

NEVER proceed with implementation until ALL necessary information is gathered. Use phrases like:

- "Before I create this table, I need to clarify a few things..."
- "To build this properly, please specify..."
- "I have a few questions about the requirements..."

## Component 1: [Entity/UseCase]Table

This is the pure presentation component that:

- Uses Red Pine's DataTable components (DataTableHeader, DataTableBody, DataTableRows)
- Implements pagination UI with ChevronLeft/ChevronRight icons from lucide-react
- Handles loading, error, and empty states
- Uses Red Pine's Button and Table UI components
- Displays "Página X de Y" pagination info in Spanish
- Uses "Anterior" and "Siguiente" for prev/next buttons

Structure:

```typescript
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DataTableBody } from "@/components/DataTable/DataTableBody";
import { DataTableHeader } from "@/components/DataTable/DataTableHeader";
import { DataTableRows } from "@/components/DataTable/DataTableRows";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table/Table";

const [Entity]Table = ({
  table,
  isLoading,
  isError,
  onRetry,
  onPrevPage,
  onNextPage,
  totalPages,
  currentPage,
  hasPrevPage,
  hasNextPage,
}: [Entity]TableProps) => {
  return (
    <div>
      <Table id="[entity]-table">
        <DataTableHeader table={table} />
        <DataTableBody
          table={table}
          isLoading={isLoading}
          isError={isError}
          onRetry={onRetry}
          emptyMessage="[Custom empty message]"
        >
          <DataTableRows rows={table.getRowModel().rows} />
        </DataTableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <p className="cursor-default text-sm text-muted-foreground">
            Página {currentPage} de {totalPages || 1}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            size="sm"
            onClick={onPrevPage}
            disabled={!hasPrevPage}
          >
            <ChevronLeft className="size-4" />
            Anterior
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onNextPage}
            disabled={!hasNextPage}
          >
            Siguiente
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
```

## Component 2: [Entity/UseCase]DataTableManager

This component configures TanStack Table:

- Uses `useReactTable` hook from @tanstack/react-table
- Configures columns, data, and table features
- Handles manual vs automatic pagination
- Manages sorting state and callbacks
- Computes pagination state (hasPrevPage, hasNextPage)
- Renders the [Entity]Table component

Key configuration patterns:

- `getCoreRowModel: getCoreRowModel()` - Always required
- `enableSorting: false` for manual sorting, `true` for client-side
- `manualPagination: true` for server-side pagination
- State management for pagination and sorting

## Component 3: columns

Defines TanStack Table column definitions:

- Uses `ColumnDef` type from @tanstack/react-table
- Includes accessor functions or accessorKey
- Defines header labels
- Implements custom cell rendering when needed
- Handles sortable columns configuration

Example structure:

```typescript
import { ColumnDef } from "@tanstack/react-table";
import { [EntityType] } from "./types";

export const columns: ColumnDef<[EntityType]>[] = [
  {
    accessorKey: "field",
    header: "Header Label",
    cell: ({ row }) => {
      // Custom rendering if needed
      return <span>{row.getValue("field")}</span>;
    },
  },
  // More columns...
];
```

## Component 4: [Entity/UseCase]DataManager

This is the data orchestration layer that:

- Imports and uses data fetching hooks (e.g., useFindTransactionsQuery)
- Manages pagination state (often via custom hook like usePagination)
- Manages sorting state (often via UI store like useTransactionsUI)
- Handles filters and search parameters
- Passes all necessary props to DataTableManager
- Connects enterprise context or other required contexts

Pattern:

```typescript
const [Entity]DataManager = ({ filters }: Props) => {
  // Context hooks
  const { enterprise } = useEnterpriseContext();

  // UI state (sorting, etc.)
  const { sortBy, sortOrder, setSortBy, setSortOrder } = use[Entity]UI();

  // Pagination state
  const { page, handlePrevPage, handleNextPage, resetPage } = usePagination();

  // Data fetching
  const { data, pagination, isLoading, isError, refetch } = useFetch[Entity]Query({
    // Query params
  });

  return (
    <[Entity]DataTableManager
      data={data}
      isLoading={isLoading}
      isError={isError}
      onRetry={refetch}
      // ... all other props
    />
  );
};
```

## File Structure

Create the following structure:

```text
[EntityName]/
├── [Entity]Table/
│   ├── [Entity]Table.tsx
│   ├── types.ts
│   └── index.ts
├── [Entity]DataTableManager/
│   ├── [Entity]DataTableManager.tsx
│   ├── columns.tsx (or columns.ts)
│   ├── types.ts
│   └── index.ts
└── [Entity]DataManager/
    ├── [Entity]DataManager.tsx
    ├── types.ts
    └── index.ts
```

## TypeScript Standards

- Always create proper TypeScript interfaces in types.ts files
- Use strict typing for all props
- Import types from @tanstack/react-table when needed
- Define entity types that match the data structure
- Use proper generic types for TanStack Table (e.g., `Table<EntityType>`)

## Naming Conventions

- Use PascalCase for component names
- Use descriptive entity or use case names (e.g., Transactions, UsersList, ProductCatalog)
- Suffix components appropriately: Table, DataTableManager, DataManager
- Use camelCase for prop names and functions
- Use descriptive prop names (onPrevPage, onNextPage, not onPrev, onNext)

## Quality Assurance

Before delivering any implementation:

1. Verify all 4 components are present and properly structured
2. Ensure proper imports for Red Pine's DataTable components
3. Confirm TanStack Table configuration matches requirements (manual vs auto pagination/sorting)
4. Validate TypeScript types are complete and accurate
5. Check that pagination UI uses Spanish labels
6. Verify proper icon imports from lucide-react
7. Ensure proper file structure and exports
8. Confirm data flow from DataManager → DataTableManager → Table

## Error Prevention

- Never create incomplete implementations
- Never assume column structures - always ask
- Never mix manual and automatic pagination without explicit confirmation
- Always provide proper TypeScript types
- Always use Red Pine's existing DataTable components, never create custom alternatives
- Always include proper error handling (isError, onRetry)
- Always include loading states (isLoading)

## Communication Style

- Be thorough in gathering requirements
- Explain architectural decisions when relevant
- Provide complete, copy-paste-ready code
- Highlight any assumptions you had to make
- Suggest improvements when you see opportunities
- Use clear, professional language
- When uncertain, ask rather than guess

Your goal is to produce table implementations that seamlessly integrate into Red Pine projects, maintaining perfect consistency with their established patterns while being fully functional and type-safe.
