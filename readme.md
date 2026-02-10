# Virtual Dom

- The Virtual DOM (VDOM) is a lightweight copy of the real DOM kept in memory.
- It’s a JavaScript object representation of the UI.
- React converts JSX into JavaScript objects called the Virtual DOM.

## Representation

```javaScript
const vDom = {
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hello React!'
        }
      },
      {
        type: 'button',
        props: {
          children: 'Click me'
        }
      }
    ]
  }
};
```

# How Virtual Dom Work

## 1️⃣ First Time React App Runs (Initial Render)

1. React Component is Written

### Example:

```javaScript
function App() {
  return <h1>Hello React!</h1>;
}
```

2. JSX Conversion
   React converts JSX into JavaScript objects called the Virtual DOM.

### Example:

```javaScript
{ type: 'h1', props: { children: 'Hello React!' } }
```

3. Render Virtual DOM to Real DOM
   React takes the Virtual DOM and creates actual HTML elements in the browser.

- Browser shows: Hello React!

# 2️⃣ When App Updates Later (State/Props Change)

1. State or Props Change
   Example: Clicking a button updates a counter.

```jsx
const [count, setCount] = React.useState(0);
```

2. React Creates New Virtual DOM

- React generates a new Virtual DOM with the updated data.

3. Diffing (Compare Old & New Virtual DOM)

- React checks what has changed in the new Virtual DOM compared to the old one.

4. Reconciliation

- Only the changed parts are updated in the real DOM.
- Unchanged parts are left as-is for efficiency.

5. UI Updates in Browser

- User sees the changes instantly without the whole page reloading.

## Summary (Flow)

First Load:

```jsx
JSX -> Virtual DOM -> Real DOM -> UI shown
```

## Later Updates:

```
  State/Props change -> New Virtual DOM -> Diffing -> Update changed parts in Real DOM -> UI updated
```

# 3. Lists & Keys

- This is how React efficiently renders multiple items.
- Rendering a list.

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

# What is a key?

- A key is a unique identifier React uses to track list items when updating UI.

### Correct version..

```jsx
{
  fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
}
```

# Context Api

- Context API is a React feature used for global data sharing, and useContext is the hook that consumes it.

# Props Rule

- Props are passed with a name → accessed with the same name unless you explicitly rename them while destructuring.

- access with different name

```jsx
// Parent
<Profile name="Alex" />;

// Child
function Profile({ name: userName }) {
  return <p>{userName}</p>;
}
```

# memo

- Memorization the components

# UseMemo

- Memorization the function return values

# UseCallBack

- Memorization the function

# useReducer

- It is use to basically state Management..

# Lazy Loading

- Lazy loading is a technique to load parts of your application only when they are needed, instead of loading everything upfront.

# Suspense

- It tells React this component is loading, show something else until it’s ready.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
```

# fallback

- This is what you want to show while the component is loading.

# Key Point

- React.lazy = load component only when needed.
- Suspense = wait for lazy component to load.
- fallback = show this while waiting.
