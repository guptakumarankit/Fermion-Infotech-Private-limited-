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

```Jsx
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

# React Redux Toolkit Overview
## 1. What is Redux?

Redux is a state management library for JavaScript apps (commonly React). It helps you **manage global state** — data that multiple components need to access or update.

The basic Redux pattern involves:

- **Store:** Holds the app’s state.
- **Actions:** Describe “what happened.”
- **Reducers:** Decide “how the state changes” based on actions.

> Note: Traditional Redux often requires a lot of boilerplate code, such as writing action types, action creators, and switch statements.

---

## 2. Why Redux Toolkit?

Redux Toolkit solves the boilerplate problem and adds best practices by providing **built-in utilities**.

It offers:

- **`configureStore`** → Sets up the Redux store with good defaults.
- **`createSlice`** → Generates reducers and actions automatically.
- **`createAsyncThunk`** → Handles async operations like API calls easily.
- **Immer integration** → Lets you write "mutating" code safely while keeping state immutable under the hood.

---

## 3. Key Benefits

- **Less boilerplate** → simpler, cleaner code.
- **Built-in best practices** → avoids common Redux mistakes.
- **Supports async actions easily** with `createAsyncThunk`.
- **Fully compatible with React** and other libraries.
- **Widely adopted** in modern React projects.

# Key Points 
- ✔ Global state → Separate Redux slice files.
- ✔ Local state → Inside the current component.

- That is the proper way to structure apps using Redux Toolkit.

# ✅ Correct Way: Use getState() in Thunks
If you need one global state inside another (for logic), use a thunk.


```jsx
export const addItemIfLoggedIn = (item) => (dispatch, getState) => {
  const state = getState();
  const user = state.auth.user;

  if (user) {
    dispatch(addItem(item));
  } else {
    console.log("User not logged in");
  }
};
```

- getState() gives full global store.
- state.auth.user accesses another slice.


# Custom Hook in React

A **custom hook** in React is a JavaScript function that:

- Starts with the word `use`
- Uses one or more built-in React hooks (like `useState`, `useEffect`, etc.)
- Lets you reuse stateful logic across multiple components

It’s simply a way to **extract and share logic between components**.

---

## 🔹 Why Do We Need Custom Hooks?

In React, sometimes multiple components need the same logic (for example: handling forms, fetching data, managing counters).

Instead of copying the same code everywhere, we create a **custom hook** and reuse it.

# Don’t call hooks inside loops, conditions, or nested functions.

# React Folder structure 

```jsx

my-react-app/
├── public/
│   └── index.html           # HTML entry point
├── src/
│   ├── assets/              # images, fonts, icons
│   ├── components/          # reusable UI components
│   │   └── Button.jsx
│   ├── pages/               # full pages (used with routing)
│   │   └── Home.jsx
│   ├── hooks/               # custom React hooks
│   │   └── useFetch.js
│   ├── context/             # React Context for global state
│   │   └── AuthContext.jsx
│   ├── services/            # API calls / backend integration
│   │   └── api.js
│   ├── utils/               # helper functions
│   │   └── formatDate.js
│   ├── App.jsx              # main app structure & routes
│   └── main.jsx             # React app entry point
├── package.json
└── README.md

```

# Redux Toolkit 

```jsx
my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # images, fonts, icons
│   ├── components/       # reusable UI components
│   ├── pages/            # page-level components
│   ├── features/         # Redux feature modules
│   │   └── counter/
│   │       ├── Counter.jsx
│   │       ├── counterSlice.js
│   │       └── counterAPI.js
│   ├── app/
│   │   └── store.js      # Redux store configuration
│   ├── hooks/            # custom hooks
│   ├── context/          # optional, for React Context
│   ├── utils/            # helper functions
│   ├── App.jsx           # main app layout & routes
│   └── main.jsx          # app entry point
├── package.json
└── README.md

```

# Form Validation 
- Form validation is the process of verifying that user-entered data in a web form is accurate, complete, and properly formatted before it is submitted to a server.