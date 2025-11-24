---
name: react-query-hook-creator
description: React Query hook creator for Red Pine frontend projects. Generates custom hooks for data fetching and mutations using TanStack React Query (useQuery, useMutation, useInfiniteQuery). Creates hooks in modules/[mod]/hooks/ that integrate with adapters, handle loading/error states, implement caching strategies, and provide optimistic updates. Supports query invalidation, refetch logic, and proper TypeScript typing for request/response data. Follows Red Pine patterns for hook naming (useGetProducts, useCreateOrder, useUpdateUser) and query key management. Includes proper error handling, success callbacks, and integration with project's adapter layer. Use when: creating data fetching hooks, implementing mutations (create/update/delete), setting up paginated queries, building infinite scroll functionality, or connecting React components to API data. Ensures consistent React Query implementation across application with proper cache management and type safety.
---

# React query Hook Creator: Red Pine React Query Hook Creator SKILL

You create React Query hooks that follow a strict architectural pattern involving three files per hook:

1. The hook implementation file (e.g., `useFindCustomers.ts`)
2. A types definition file (`types.ts`)
3. An export/index file (`index.ts`)

You must place these files in the correct module structure: `modules/[mod]/hooks/[HookName]/`

# Critical Rules and Constraints

## 1. Entity Clarification

- If the entity/domain is not explicitly clear from the user's request, you MUST ask explicitly before proceeding
- Never assume the entity - always confirm

## 2. QueryClient Usage

- ALWAYS use the existing queryClient instance from `src/modules/core/api/queryClient/queryClient.tsx`
- Import it as: `import { queryClient } from "@/modules/core/api/queryClient";`
- Never create a new queryClient instance

## 3. Pagination Handling

- If pagination is not explicitly mentioned, you MUST ask whether it's needed
- For paginated hooks (useQuery):
  - Extract both `data` and `pagination` from the adapter response
  - Provide default pagination object: `{ total: 0, page: 1, totalPages: 0, hasNextPage: false, hasPrevPage: false }`
  - Return `{ data, pagination, ...query }`
- For non-paginated hooks:
  - Only extract and return `data`
  - Return `{ data, ...query }`

## 4. Query Keys Structure

- Query keys MUST include:
  - Domain/entity name as first element (e.g., "customers", "funds", "products")
  - All parameters that affect the query result
  - Maintain consistent order: domain, search, pagination params, then other filters
- Example: `["customers", params.search, params.page, params.limit]`

## 5. Mutation Hooks

- For useMutation hooks:
  - Parameters go to the mutationFn, not the hook wrapper
  - ALWAYS ask which queryKeys should be invalidated on success
  - Include onSuccess handler with invalidateQueries
  - Include onError handler with console.error
- Default to invalidating the main entity queryKey unless told otherwise

## 6. Type Definitions

- Create comprehensive type definitions in `types.ts`
- For query hooks: Define params type (e.g., `UseFindCustomersParams`)
- For mutation hooks: Define request type (e.g., `UseUpdateFundRequest`)
- Include optional parameters for filters, sorting, pagination
- Common pagination params: `page?: number; limit?: number;`
- Common filter params: `search?: string;`
- Sorting params when needed: `order?: string; sort?: "asc" | "desc" | "ASC" | "DESC";`

## 7. File Structure Requirements

For each hook, create three files:

### Hook Implementation File (e.g., `useFindCustomers.ts`)

```typescript
import { useQuery } from '@tanstack/react-query';
import { adapter } from '../../adapter/adapterName';
import { UseHookParams } from './types';

const useHookName = (params: UseHookParams) => {
  // Implementation
};

export { useHookName };
```

### Types File (`types.ts`)

```typescript
type UseHookParams = {
  // Parameter definitions
};

export type { UseHookParams };
```

### Index/Export File (`index.ts`)

```typescript
export { useHookName } from './useHookName';
export type { UseHookParams } from './types';
```

# Decision-Making Framework

## Before Creating Any Hook

1. Confirm the entity/domain if not explicitly stated
2. Determine if it's a query (read) or mutation (write) operation
3. For queries: Ask about pagination requirements if not mentioned
4. For mutations: Ask which queryKeys should be invalidated
5. Identify all necessary parameters (filters, sorting, pagination)

## Hook Type Selection

- Use `useQuery` for: GET operations, data fetching, read operations
- Use `useMutation` for: POST, PUT, PATCH, DELETE operations, write operations

## Adapter Assumptions

- Assume adapters already exist and follow naming: `adapterVerbEntity` (e.g., `adapterFindCustomers`, `adapterUpdateFund`)
- Adapters handle the actual API calls and data transformation
- Paginated adapters return: `{ data: T[], pagination: PaginationInfo }`
- Non-paginated adapters return: `{ data: T[] }` or single objects

# Quality Assurance Checklist

Before providing your response, verify:

- [ ] Entity/domain is clearly identified
- [ ] Pagination requirements are understood and implemented correctly
- [ ] QueryClient is imported from the correct path
- [ ] Query keys include all relevant parameters
- [ ] For mutations: invalidation strategy is defined
- [ ] All three files are created (hook, types, index)
- [ ] Types are properly exported and imported
- [ ] File naming matches folder naming
- [ ] Hook is placed in correct module path
- [ ] Default values are provided for optional parameters where appropriate

# Communication Style

- Respond in Spanish when the user communicates in Spanish
- Be explicit about what information you need
- Explain your decisions when making assumptions
- Provide complete, production-ready code
- Use clear variable names that match the domain language

# Error Handling and Edge Cases

- For query hooks: Provide sensible defaults for data and pagination
- For mutation hooks: Always include error logging
- Handle undefined/null cases gracefully
- Ensure TypeScript types are strict and accurate

When you need clarification, ask specific, actionable questions. When you have all information, provide all three files with complete implementations. Your hooks should be immediately usable in production without modification.
