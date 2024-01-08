import React from 'react';
import { useState, useEffect } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState(1);
    useEffect(() => {
        let timeOutId = setInterval(() => {
            if (direction === 1) setCount((count) => count + 1);
            else setCount((count) => count - 1);
        }, 1000);
        return () => {
            clearInterval(timeOutId);
        };
    }, [direction]);
    useEffect(() => {
        if (count >= 3) setDirection(0);
        if (count <= 0) setDirection(1)
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}
