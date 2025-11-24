# Examples of adapter Creator Skill Usage

## Example 1: Creating a "Get Transactions" Adapter

```typescript
import { PaginatedResponse } from '@/modules/shared/types/query.types';
import { Transaction } from '@/modules/transactions/domain/types';
import { getTransactions } from '@/modules/transactions/services/getTransactions';
import { toTransaction } from '../transformers/toTransaction';

import { AdapterGetTransactionsRequest } from './types';

const adapterGetTransactions = async (
  request: AdapterGetTransactionsRequest,
): Promise<PaginatedResponse<Transaction[]>> => {
  const data = await getTransactions(request);

  const { transactions, ...pagination } = data;

  const formattedTransactions: Transaction[] = transactions.map(toTransaction);

  return {
    data: formattedTransactions,
    pagination,
  };
};

export { adapterGetTransactions };
```

## Example 2: Crating a "Create Expected Document" Adapter

```typescript
import { createExpectedDocument } from '../../services/createExpectedDocument';
import { AdapterCreateExpectedDocumentRequest } from './types';

const adapterCreateExpectedDocument = async (
  request: AdapterCreateExpectedDocumentRequest,
): Promise<void> => {
  await createExpectedDocument(request);
};

export { adapterCreateExpectedDocument };
```

## Example 3: Creating a "Update Customer" Adapter

```typescript
import { updateCustomer } from '../../services/updateCustomer';
import { AdapterUpdateCustomerParams } from './types';

const adapterUpdateCustomer = async (params: AdapterUpdateCustomerParams) => {
  await updateCustomer(params);
  return;
};

export { adapterUpdateCustomer };
```
