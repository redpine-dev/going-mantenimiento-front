---
name: redpine-api-service-creator
description: Frontend API service creator for Red Pine projects. Generates TypeScript API service functions that follow Red Pine's specific patterns and conventions. Creates properly typed service methods using fetchWithAuth for authenticated requests, includes error handling, request/response type definitions, and follows project's API integration structure. Organizes services in src/services/api/ with consistent naming conventions (getById, list, create, update, delete). Handles query parameters, request bodies, and response transformations according to Red Pine standards. Includes proper TypeScript interfaces for API contracts and integrates with project's authentication layer. Use when: creating new API endpoints integration, building CRUD operations for frontend modules, setting up authenticated API calls, or scaffolding services for new features. Ensures consistency across frontend API layer with standardized patterns for data fetching, mutations, and error handling.
---

# Service Creator: Red Pine API Service Creator SKILL

## Core Responsibilities

Your primary task is to create frontend API services that integrate seamlessly with Red Pine's architecture. Each service you create must:

1. Use the `fetchWithAuth` wrapper from `@/modules/core/api/client/fetchWithAuth` for all HTTP requests
2. Follow the strict folder structure: `modules/[mod]/services/[ServiceName]/`
3. Implement proper TypeScript typing with API types defined in `modules/[mod]/domain/api.types.ts`
4. Export all types through the service's `index.ts` for clean imports

## Service Structure Requirements

### Folder Organization

Each service must live in its own folder:

```text
modules/[moduleName]/services/[ServiceName]/
├── [ServiceName].ts(x)    # Main service file
├── types.ts               # Request/response parameter types
└── index.ts              # Public exports
```

### Main Service File ([ServiceName].ts)

- Export a single async function named in `camelCase` matching the service purpose
- Import `fetchWithAuth` from the core API client
- Import API types from `modules/[mod]/domain/api.types.ts`
- Import request parameter types from local `./types`
- Use clear, descriptive names that reflect the action (e.g., `findOrders`, `createInvoice`, `updateProduct`)

### Type Definitions

**Request Types (types.ts):**

- Define input parameters as interfaces or types
- Name request types as `[ServiceName]Request` (e.g., `FindOrdersRequest`)
- Include all query parameters, path parameters, and body data
- Use optional properties appropriately

**API Response Types (api.types.ts):**

- All API entity types must be defined in `modules/[mod]/domain/api.types.ts`
- Always prefix API types with `Api` (e.g., `ApiOrder`, `ApiProduct`, `ApiInvoice`)
- Before creating a new API type, CHECK if it already exists in the domain file
- If the exact structure is unknown, ASK the user for clarification about the API response shape
- Never assume or invent API type structures

### Export Pattern (index.ts)

```typescript
export { serviceName } from './serviceName';
export type { ServiceNameRequest } from './types';
```

## fetchWithAuth Usage

The `fetchWithAuth` wrapper unifies authentication, parameter handling, and request formatting. Use it with this signature:

```typescript
fetchWithAuth(endpoint: string, options?: {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: Record<string, any>;  // Query parameters
  body?: any;                     // Request body
  headers?: Record<string, string>;
})
```

## Service Creation Workflow

1. **Clarify Requirements**: If the user's request lacks critical information, ask:
   - What is the HTTP method?
   - What is the API endpoint path?
   - What parameters does the service accept?
   - Does the API type already exist, or do you know its structure?

2. **Check Existing Types**: Before creating API types, verify if `Api[Entity]` already exists in the domain file

3. **Generate Service Files**: Create all three files (main service, types, index) following the exact structure

4. **Validate Consistency**:
   - Function name matches file name (camelCase)
   - All imports are correct and complete
   - Types are properly exported
   - API types follow the `Api[Entity]` naming convention

5. **Provide Context**: Explain where each file should be created and how to use the service

## Example Reference

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

## Quality Assurance

- **Never** create services without proper typing
- **Always** use `fetchWithAuth` - never use axios or fetch directly
- **Verify** that service names are clear and action-oriented
- **Confirm** API type definitions before proceeding if uncertain
- **Ensure** consistent naming: file names, function names, and type names should all align
- **Check** that all exports go through the service's `index.ts`

## Error Handling & Edge Cases

- If the module doesn't exist yet, create the full path structure
- If api.types.ts doesn't exist in the module, create it with proper exports
- For paginated responses, use the `WithPagination<T>` wrapper type
- For services with no request parameters, use an empty interface or omit the parameter
- If the endpoint requires path parameters, include them in the endpoint string and the request type

Your goal is to produce production-ready, type-safe API services that integrate seamlessly into Red Pine's existing architecture. Always prioritize consistency, clarity, and maintainability.
