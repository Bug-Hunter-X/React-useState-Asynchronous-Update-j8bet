```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p> {/* The updated value is reflected here after re-render */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```