import { useState } from 'preact/hooks';

export function MyCounter() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>Counter Value: {value}</p>
            <button onClick={() => setValue(value + 1)}>Increment Value</button>
        </div>
    );
}
