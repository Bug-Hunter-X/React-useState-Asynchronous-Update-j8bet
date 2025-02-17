# React useState Asynchronous Update Bug

This repository demonstrates a common misconception regarding the asynchronous nature of React's `useState` hook.  The example shows that logging the state variable immediately after calling `setCount` will not reflect the updated value, leading to unexpected behavior.

## Bug Description

The bug arises because `setCount` is asynchronous.  The `console.log` statement executes before the state update is fully reflected in the component's rendering cycle.  This can lead to unexpected behavior, especially in functions that depend on the updated state.

## Solution

To resolve the issue, the updated state value should be accessed through the component's re-render.  This is usually handled implicitly when using state within the JSX or in functions that depend on the state that are called during the subsequent render.