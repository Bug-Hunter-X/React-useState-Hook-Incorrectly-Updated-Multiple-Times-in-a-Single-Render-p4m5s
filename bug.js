```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempts to update count multiple times in a single render
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  }, []);

  return <div>Count: {count}</div>;
}
```