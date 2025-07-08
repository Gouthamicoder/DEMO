import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count = state variable

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
const Test = () => {
    return (
        <div>
            <ol>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
            </ol>
        </div>
    );
};

export default Test;