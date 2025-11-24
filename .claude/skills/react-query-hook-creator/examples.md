# Examples of React Query Hook Creator Skill Usage

## Example 1: Creating a "useFindCustomers" Query Hook

```typescript
import { useQuery } from '@tanstack/react-query';

import { adapterFindCustomers } from '../../adapter/adapterFindCustomers';
import { UseFindCustomersParams } from './types';

const useFindCustomers = (params: UseFindCustomersParams) => {
  const { data, ...query } = useQuery({
    queryFn: () => adapterFindCustomers(params),
    queryKey: ['customers', params.search, params.page, params.limit],
  });

  const pagination = data?.pagination ?? {
    total: 0,
    page: 1,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  };
  const cc = data?.data ?? [];

  return {
    data: cc,
    pagination,
    ...query,
  };
};

export { useFindCustomers };

// types.ts
type UseFindCustomersParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export type { UseFindCustomersParams };
```

## Example 2: Creating a "useUpdateFund" Mutation Hook

```typescript
import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient';

import { adapterUpdateFund } from '../../adapters/adapterUpdateFund';
import { UseUpdateFundRequest } from './types';

const useUpdateFund = () => {
  return useMutation({
    mutationFn: (request: UseUpdateFundRequest) => adapterUpdateFund(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['funds'],
      });
    },
    onError: error => {
      console.error('Error al actualizar el fondo', error);
    },
  });
};

export { useUpdateFund };
// types.ts
import { Fund } from '../../domain/types';

type UseUpdateFundRequest = {
  id: string;
  params: Partial<Fund>;
};

export type { UseUpdateFundRequest };
```

## Example 3: Creating a "useRenderFundToSupplierWithAccounts" Mutaion Hook

This hook are more complex but definetly represent the full potential of the React Query Hook Creator Skill for business logic.

```typescript
import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient';
import { renderFundToSupplierWithAccounts } from '@/modules/funds/services/renderToSupplier/renderFundToSupplierWithAccounts';

import { UseRenderFundToSupplierWithAccountsParams } from './types';

const useRenderFundToSupplierWithAccounts = (params: {
  onSuccess?: () => void;
}) => {
  const mutation = useMutation({
    mutationFn: (params: UseRenderFundToSupplierWithAccountsParams) =>
      renderFundToSupplierWithAccounts(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['funds'],
      });
      queryClient.invalidateQueries({
        queryKey: ['purchase-invoices'],
      });
      params?.onSuccess?.();
    },
  });

  return mutation;
};

export { useRenderFundToSupplierWithAccounts };

// types.ts

type UseRenderFundToSupplierWithAccountsParams = {
  supplierId: string;
  renderDate: string;
  expectedPaymentDate: string;
  fundNumber: number;
  fundDescription: string;
  notes?: string;
  advanceAmount?: number;
  accountMap: {
    accountId: number;
    costCenterId?: string;
    amount: number;
    relatedToId?: number;
    relatedToType?: string;
    journalEntryLineDescription: string;
  }[];
};

export type { UseRenderFundToSupplierWithAccountsParams };
```

## Example 4: Creating a "useUpdateSupplierById" Mutation Hook

```typescript
import { useQuery } from '@tanstack/react-query';

import { AdapterGetSupplierById } from '../../adapters/adapterGetSupplierById';
import { UseGetSupplierByIdParams } from './types';

const useGetSupplierById = (params: UseGetSupplierByIdParams) => {
  const { data, ...query } = useQuery({
    queryKey: ['supplier', params.id],
    queryFn: () => AdapterGetSupplierById(params),
    staleTime: 1000 * 60 * 5,
  });

  return { data, ...query };
};

export { useGetSupplierById };

// types.ts
type UseGetSupplierByIdParams = {
  id: string;
};

export type { UseGetSupplierByIdParams };
```
