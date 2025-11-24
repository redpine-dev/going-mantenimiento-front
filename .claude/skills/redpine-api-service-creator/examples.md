# Examples of Service Creator Skill Usage

## Example 1: Creating a "Find Orders" Service

```typescript
// modules/orders/services/findOrders/findOrders.ts
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';
import { ApiOrder } from '@/modules/orders/domain/api.types.ts';
import { FindOrdersRequest } from './types';

const findOrders = async (
  request: FindOrdersRequest,
): Promise<WithPagination<ApiOrder[]>> => {
  const response = await fetchWithAuth('/orders', {
    method: 'GET',
    params: request,
  });
  return response;
};

export { findOrders };
```

## Example 2: Get Supplier By ID Service

```typescript
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';

import { ApiSupplier } from '../getSuppliers';
import { GetSupplierByIdRequest } from './types';

const getSupplierById = async (
  request: GetSupplierByIdRequest,
): Promise<ApiSupplier> => {
  const response = await fetchWithAuth(`/suppliers/${request.id}`, {
    method: 'GET',
  });
  return response;
};

export { getSupplierById };
```

## Example 3: Update Transaction Service

```typescript
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';

import { ApiTransaction, UpdateTransactionParams } from './types';

const updateTransaction = async (
  id: string,
  params: UpdateTransactionParams,
): Promise<ApiTransaction> => {
  const response = await fetchWithAuth(`/transactions/${id}`, {
    method: 'PATCH',
    data: {
      laudusEntryNumber: params.laudusEntryNumber,
    },
  });

  return response;
};

export { updateTransaction };
```

## Example 4: Delete Expected Document Service

```typescript
import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';

import { DeleteExpectedDocumentRequest } from './types';

const deleteExpectedDocument = async (
  request: DeleteExpectedDocumentRequest,
): Promise<void> => {
  await fetchWithAuth(`/expected-documents/${request.id}`, {
    method: 'DELETE',
  });
};

export { deleteExpectedDocument };
```
