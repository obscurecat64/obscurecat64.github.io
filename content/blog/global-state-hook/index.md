---
title: A global state hook
date: "2022-08-28T11:56:52.213Z"
---

My goal was to have 12 posts by the end of the year (a post a month) but obviously I haven't been posting in a long time :sweat_smile:. But there's still some time left, and I'll make up for it in the remaining months!

For this post I'd like to share about how to write a simple global state hook. Using the hook would look something like:

```
// createGlobalHook is a function that creates a react hook
const useGlobalCount = createGlobalHook(0)
const useGlobalFlag = createGlobalHook(false)

const MyComponentA = () => {
  // component has access to the states via their respective hooks
  const [globalCount, setGlobalCount] = useGlobalCount()
  const [globalFlag, setGlobalFlag] = useGlobalFlag()

  // ...
}
```

I first saw the idea of such a global state hook while reading through code at work, and while doing some research I found [`react-hooks-global-state`](https://github.com/dai-shi/react-hooks-global-state) and then [`zustand`](https://github.com/pmndrs/zustand) that uses this same idea. `react-hooks-global-state` is actually implemented with `zustand` now (both libraries are written by the same author), and would I recommend you try out `zustand` if you're interested in such a hook. It deals with more complicated stuffs like React concurrency which for this simple example hook I will not delve into. Disclaimer: I haven't gotten to using `zustand` just yet (I will soon)!

Now let's look at how we could implement a simplified version of such a hook. `createGlobalHook` is a function that accepts an initial state and returns a custom react hook. In it, we need to maintain state which is our new global state. Whenever our global state is updated, we need to inform components that use this state to rerender so as to use the updated state.

Firstly, in `createGlobalHook` we initialise a variable `state` to `initialState` and create an initially empty array of `listeners`.

```
const createGlobalHook = (initialState) => {
  let state = initialState
  const listeners = []

  // ...
}
```

Then, we start writing our custom hook `useGlobalState`. In `useGlobalState`, we will use React's built-in `useState` hook for its `setState` function. We talked about how we need to inform components to rerender when the state is changed, and by using `setState` React will rerender the component when `setState` is called with a new state. To do so, we add a new listener to `listeners` when the component is mounted to inform the component to rerender when state changes. When the component is unmounted, we unsubscribe it as a listener.

```
const createGlobalHook = (initialState) => {
  let state = initialState
  const listeners = []

  const useGlobalState = () = {
    const [, setState] = useState(state)

    useEffect(() => {
      const listener = () => setState(state)
      listeners.push(listener)

      // remove listener from listeners when component unmounts
      return () => listeners.splice(listeners.indexOf(listener), 1)
    }, [])

    // ...
  }

  return useGlobalState
}

```

We need to have a custom `setGlobalState` function that updates the global state. When doing so, we get the current and other components to rerender by going through our `listeners`. We wrap `setGlobalState` in a `useCallback` to ensure that it is stable across rerenders, just like `setState` from the `useState` hook. Lastly, we return `state` (which is our global state) and `setGlobalState` just like the `useState` hook.

```
const createGlobalHook = (initialState) => {
  let state = initialState
  const listeners = []

  const useGlobalState = () = {
    const [, setState] = useState(state)

    useEffect(() => {
      const listener = () => setState(state)
      listeners.push(listener)

      // remove listener from listeners when component unmounts
      return () => listeners.splice(listeners.indexOf(listener), 1)
    }, [])

    const setGlobalState = useCallback((newState) => {
      state = newState
      setState(newState)
      listeners.forEach((listener) => listener())
    }, [])

    return [state, setGlobalState]
  }

  return useGlobalState
}

```

Now let's run through what happens when a component uses `createGlobalHook` and its returned hook:

```
const useGlobalCount = createGlobalHook(0)

const Counter = () => {
  const [globalCount, setGlobalCount] = useGlobalCount()

  useEffect(() => {
    console.log('Rendered')
  })

  return (
    <div>
      <button onClick={() => setGlobalCount(globalCount + 1)}>Click me</button>
      count: {globalCount}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  )
}
```

`createGlobalHook` is called, and an initial state is initialised with a value of 0. The returned hook `useGlobalCount` is used in the `Counter` component.

We create a `useGlobalCount` hook using `createGlobalHook`. Now in the `Counter` component, we use our new `useGlobalCount` hook. The component will show the value of `globalCount`, as well as call `setGlobalCount` to increment its value when the button is clicked.

When `App` is rendered, so are our 2 `Counter` components. By using the `useGlobalCount` hook, they are each registered as a listener in `listeners`. When the button in the first `Counter` is clicked, the global state is updated and the components that use `useGlobalCount` are informed to rerender. Since all components that read `globalCount` are rerendered, they will now use (and show) the updated value.

I created a small working example [here](https://codesandbox.io/s/peaceful-jang-7dczdu?file=/src/createGlobalHook.js) if you'd like to see it in action! With Concurrent React a basic implementation like this can result in undesired behaviour such as [tearing](https://stackoverflow.com/questions/54891675/what-is-tearing-in-the-context-of-the-react-redux), and so using a global state management library that handles them for you might be more practical. Still, it's interesting to see how things work underneath!

If you haven't seen a hook like this, I hope this post was helpful to you :smile:. That's all for this post; check back again soon and see ya!
