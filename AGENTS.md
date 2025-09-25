# AGENTS.md

A README for coding agents working on this K-Pop Demon Hunters visual novel project.

## Project Overview
This is a React TypeScript visual novel game featuring responsive design and mobile-first approach.

## Code Quality & Best Practices
Default to these rules to keep the codebase clean, maintainable, and layered.

### Code Duplication
- Extract shared behavior into reusable functions, hooks, or utilities.
- Follow the DRY principle so fixes happen in one place.

```typescript
// ✅ Reuse shared logic
const useApiCall = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // ... common API logic
  return { data, loading, refetch };
};

// ❌ Duplicated async handling
const fetchUsers = async () => {
  setLoading(true);
  try {
    const response = await api.get("/users");
    setUsers(response.data);
  } finally {
    setLoading(false);
  }
};

const fetchPosts = async () => {
  setLoading(true);
  try {
    const response = await api.get("/posts");
    setPosts(response.data);
  } finally {
    setLoading(false);
  }
};
```

### Conditional Rendering
- Ensure JSX conditions evaluate to booleans; coerce nullable values explicitly.
- Avoid truthy checks for values that could be `0`, `''`, or `{}`.

```typescript
// ✅ Explicit booleans
{isLoading && <Spinner />}
{items.length > 0 && <ItemList />}
{user?.name != null && <UserName />}

// ❌ Ambiguous truthiness
{data && <DataComponent />}
{count && <Counter />}
{option && <OptionComponent />}
```

### Variable and Function Naming
- Prefer descriptive names that communicate intent, e.g. `calculateTotalPrice`, `validateEmailAddress`.
- Skip vague identifiers such as `flag`, `handler`, or `calc`.

### Null Comparison
- Use loose equality for nullish checks (`value == null` / `value != null`) to cover both `null` and `undefined`.
- Reserve strict equality for cases where only one specific value matters.

### Layered Architecture
- Keep presentation, business logic, data access, and infrastructure concerns separate.
- Route API calls through services or hooks instead of embedding them in components.

```typescript
// Presentation
const UserProfile = () => {
  const { user, updateUser } = useUserService();
  return <ProfileForm user={user} onSubmit={updateUser} />;
};

// Business logic
const useUserService = () => {
  const { data: user, mutate } = useSWR('/api/user', userApi.getUser);
  const updateUser = useCallback(async (data) => {
    await userApi.updateUser(data);
    mutate();
  }, [mutate]);
  return { user, updateUser };
};

// Data access
const userApi = {
  getUser: () => fetch('/api/user').then(res => res.json()),
  updateUser: (data) => fetch('/api/user', { method: 'PUT', body: JSON.stringify(data) })
};
```

### Nullish Comparisons & Ternaries
- Prefer explicit nullish comparisons (`value == null ? defaultValue : value`).
- Use ternary operators for simple conditional assignments; avoid deep nesting.

```typescript
// ✅ Clear intent
const result = value == null ? defaultValue : value;
const displayText = user?.name != null ? user.name : "Anonymous";
const status = isActive ? "active" : "inactive";

// ❌ Implicit fallbacks
const result = value || defaultValue;
const message = count || "No items";

// ❌ Nested ternaries
const result = condition1
  ? value1
  : condition2
    ? value2
    : condition3
      ? value3
      : defaultValue;
```

## Project-Specific Guidelines

### Component Architecture
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components focused on single responsibility

### Responsive Design
- Mobile-first approach (320px+)
- Breakpoints: `sm:640px`, `md:768px`, `xl:1024px`
- Character sprites: 45vw (mobile), 30vw (desktop)

### File Structure
```
components/
├── CharacterSprite.tsx
├── DialogueBox.tsx
└── GameScreen.tsx
```

### Styling
- Use Tailwind CSS for styling
- Maintain consistent spacing and typography
- Implement proper hover and focus states

## Build & Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- GitHub Pages deployment via GitHub Actions on `main` branch

## Testing
- Test responsive design across different screen sizes
- Verify character sprite scaling on mobile devices
- Use Chrome DevTools device simulation for mobile testing