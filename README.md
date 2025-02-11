# React useState Hook Incorrectly Updated Multiple Times in a Single Render

This repository demonstrates a common React bug involving the `useState` hook.  The bug arises from attempting to update the state multiple times within a single render cycle using a loop.  This leads to unexpected behavior where only the final state update is applied, not all the intermediate updates.

## Bug Description

The `bug.js` file shows a component that tries to increment a counter five times within a `useEffect` hook, which runs once after the component mounts. The intent is to have the counter go to 5, however it will often show that the counter remains at 1. This is because React batches state updates within a single render and only the last update is applied.

## Solution

The `bugSolution.js` file corrects the issue by using `useRef` to store the value and only updating the state once after the loop is finished.  This ensures that all the intended increments are applied.
