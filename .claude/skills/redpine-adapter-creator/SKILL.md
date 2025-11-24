---
name: redpine-adapter-creator
description: Adapter creator for Red Pine frontend projects. Generates adapter functions that bridge API services and domain logic by calling API services and transforming responses into domain types. Creates complete adapter structure in modules/[mod]/adapters/[AdapterName]/ including: main adapter function, TypeScript type definitions, transformer functions (toType converters), and proper exports. Follows Red Pine's architectural pattern separating API concerns from business logic. Handles response transformation, error propagation, and type safety between API layer and application domain. Organizes files with consistent naming (adapterGetUsers, adapterCreateOrder) and includes transformer utilities for data mapping. Use when: creating new adapters for API endpoints, implementing data transformation layers, setting up module adapter infrastructure, or bridging API services to domain models. Ensures separation of concerns and maintains Red Pine's layered architecture standards.
---

# Adapter Creator: Red Pine Adapter Creator SKILL

## Red Pine Adapter Architecture

### File Structure

Every adapter you create must follow this exact structure:

```text
modules/[moduleName]/adapters/[AdapterName]/
  ├── [adapterName].ts          # Main adapter function
  ├── types.ts                   # Adapter parameter types
  └── index.ts                   # Barrel export
```

### Adapter Implementation Pattern

1. **Main Adapter Function** (`[adapterName].ts`):
   - Must be an async function
   - Import the corresponding service from `../../services/[serviceName]`
   - Import transformers from `../transformers/[transformerName]`
   - Call the API service with provided parameters
   - Apply transformer functions to convert API types to domain types
   - Preserve pagination or metadata from API responses
   - Return structured data matching domain expectations

2. **Type Definitions** (`types.ts`):
   - Define parameter types as `Adapter[AdapterName]Params`
   - Include all query parameters, filters, pagination options
   - Use precise TypeScript types (string literals for enums, optional fields with `?`)
   - Keep types aligned with the service's expected parameters

3. **Barrel Export** (`index.ts`):
   - Export the main adapter function
   - Export all type definitions from types.ts

### Transformer Pattern

When transformation is needed:

1. **Create Transformer Structure**:

```text
modules/[moduleName]/adapters/transformers/[transformerName]/
  ├── [transformerName].ts
  └── index.ts
```

2. **Transformer Function**:
   - Takes API type (from `domain/api.types.ts`) as input
   - Returns domain type (from `domain/types.ts`)
   - Handles field mapping, type conversions (especially Date objects)
   - Renames fields when API and domain models differ (e.g., `_id` → `id`)
   - Maintains data integrity and type safety

## Implementation Guidelines

### When to Transform

- Transform when API response structure differs from domain model
- Transform when field names need normalization (e.g., MongoDB's `_id`)
- Transform when type conversions are needed (string dates to Date objects)
- Skip transformation if API response already matches domain types perfectly

### Code Quality Standards

- Use clear, descriptive naming: `adapterFindFunds`, `toFund`, `AdapterFindFundsParams`
- Maintain consistent naming conventions: camelCase for functions, PascalCase for types
- Destructure response objects for clarity: `const { data, pagination } = response;`
- Use `map` for array transformations when applying transformers
- Keep adapters focused on orchestration, not business logic
- Preserve all relevant metadata (pagination, counts, etc.)

### Error Handling

- Let service-layer errors propagate naturally
- Ensure transformers handle all required fields
- Validate that domain types are fully satisfied

### Type Safety

- Import API types from `modules/[mod]/domain/api.types.ts`
- Import domain types from `modules/[mod]/domain/types.ts`
- Ensure parameter types are exported and reusable
- Make optional fields explicit with `?` operator

## Workflow

When creating an adapter:

1. **Analyze Requirements**: Understand which service is being called and what domain type is needed
2. **Check Domain Types**: Verify the target domain type exists in `domain/types.ts`
3. **Determine Transformation Needs**: Compare API response shape with domain type
4. **Create Transformer First** (if needed): Build the transformation logic before the adapter
5. **Implement Adapter**: Write the main adapter function with proper imports
6. **Define Types**: Create comprehensive parameter types
7. **Set Up Exports**: Create barrel exports for clean imports
8. **Verify Integration**: Ensure all imports, types, and exports align correctly

## Communication Style

- Confirm your understanding of the adapter's purpose before implementation
- Ask about specific transformation rules if domain/API type differences are unclear
- Suggest creating transformers when you identify type mismatches
- Provide clear explanations of the file structure you're creating
- Highlight any assumptions you're making about service contracts or domain types

## Quality Checklist

Before finalizing any adapter, verify:

- [ ] Adapter resides in correct module path
- [ ] Service import path is correct (`../../services/`)
- [ ] Transformer imports are correct (`../transformers/`)
- [ ] Types are properly defined and exported
- [ ] Barrel exports (index.ts) are in place
- [ ] Async/await is used correctly
- [ ] Response data is properly transformed
- [ ] Metadata (pagination, etc.) is preserved
- [ ] TypeScript types are complete and accurate

Your adapters must be production-ready, following Red Pine's established patterns exactly. When in doubt about domain types or API contracts, ask for clarification rather than making assumptions.
