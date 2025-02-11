```javascript
import { useState, useRef, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const targetCount = useRef(5);

  useEffect(() => {
    for (let i = 0; i < targetCount.current; i++) {
      // Use a ref to store the changes and update the count only once
      targetCount.current = targetCount.current +1
    }
    setCount(targetCount.current);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent; 
```