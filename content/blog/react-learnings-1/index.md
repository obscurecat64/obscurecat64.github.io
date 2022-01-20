---
title: Don't do this!
date: "2022-01-20T14:39:09.132Z"
---

Hi :)

For this post I'd to share what you should probably not do which is to define (and use) functional components inside `render()`.

Today Gan and I were discussing whether or not it is okay to write code like this:

```
const App = () => {
 const renderContentA = () => <div>Content A</div>

 return (
  <div>
    {renderContentA()}
  </div>
 )
}
```

So this works fine; we define a function `renderContentA` and to be invoked in the return statement to retrieve some `JSX.Element`s. When this could be helpful is when we want to conditionally render some content:

```
const App = () => {
 const renderContentA = () => <div>Content A</div>
 const renderContentB = () => <div>Content B</div>

 return (
  <div>
    {Math.random > 0.5 ? renderContentA() : renderContentB()}
  </div>
 )
}
```

You could do this too

```
const App = () => {
 return (
  <div>
    {Math.random > 0.5 ? <div>Content A</div> : <div>Content B</div>}
  </div>
 )
}
```

but perhaps for code readability reasons you might want to consider the former.

So... it should be fine defining functions that return `JSX.Element`s in a component, but what about the following?

```
const App = () => {
 const ComponentA = () => <div>Content A</div>

 return (
  <div>
    <ComponentA />
  </div>
 )
}
```

At first glance, I'd say they look quite similar. `renderContentA` is now renamed to `ComponentA`, but that's just a name change. The real difference is in the return statement where instead of `renderContentA()` it is now `<ComponentA />`. And it is a huge difference!

We first need to understand what `<ComponentA />` means. From the React docs:

>>> Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function.

We can see this by pasting the code into [Babel](https://babeljs.io), it is compiled down to:

```
const App = () => {
  const ComponentA = () => /*#__PURE__*/React.createElement("div", null, "Content A");

  return /*#__PURE__*/React.createElement(
    "div",
    null, 
    /*#__PURE__*/React.createElement(ComponentA, null)
  );
};
```

Let's look at what's different between 2 renders. An important thing to note here is that in each render, `ComponentA` is recreated. That means that between the two renders, the **identity** of `ComponentA` is not stable, that is `ComponentA` in the first render is `!==` `ComponentA` in the second render. Why is that so? Well that's just how Javascript works!

Now, during the [reconcillation](https://reactjs.org/docs/reconciliation.html) phase, React tries to figure out what has changed between the 2 renders, in order to update the UI to the most recent tree (of React elements from the latest render). What we have to know here is that for [elements of different types](https://reactjs.org/docs/reconciliation.html#elements-of-different-types), React will tear down the old tree and build the new tree from scratch. As we've discussed, since our `ComponentA`'s identity is not stable, React **will** treat it as they are elements of different types, and build the new tree from scratch. That is why you really shouldn't do this.

To fix this we can simply lift the definition of `ComponentA` out of `App`.

```
const ComponentA = () => <div>Content A</div>

const App = () => {
 return (
  <div>
    <ComponentA />
  </div>
 )
}
```

This makes sense because `ComponentA` is created once and not on every render of `App`. This way, in every render of `App`, React knows that they are elements of the same type.

With this, let's look at the result from Babel when using `renderContentA()` instead of `<ComponentA />`:

```
const App = () => {
  const renderContentA = () => /*#__PURE__*/React.createElement("div", null, "Content A");

  return /*#__PURE__*/React.createElement("div", null, renderContentA());
};
```

Notice that no `React.createElement(ComponentA, ...)` or the likes of it is formed here. This is why we do not get the same issue as when using `<ComponentA />`.

I'd also like to add that it's not just a performance thing, and we can demonstrate it with this example [here](https://codesandbox.io/s/optimistic-ully-z92j1?from-embed). Try incrementing `ComponentA`'s state via `Component A button`, then try having `App` rerender by clicking on `App button`. You should see that the state of `ComponentA` is lost everytime `App` rerenders. Now try lifting `ComponentA` out of `App`. Everything should work as expected now.

And that's all I have to share for today! It was for me, quite interesting experimenting with the different results and behaviour between invoking a function (`renderContentA()`) and using JSX (`<ComponentA />`).

If you've read this I thank you very much and I hope you learnt something from this too! If you noticed an error in my explanation or any gaps in my understading, or if you simply have some feedback, feel free to drop me an email at wailun18b@gmail.com.

Thanks and check back soon again!
