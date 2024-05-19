import './Counter.css';
import { useCallback, useMemo, useRef, useState } from 'react';


function Counter() {
    const [number, setNumber] = useState(10); // number is what we want to change and its initial value is 0
    const num = useRef(0); // initial value of num is 0
    function handleClick() {
        setNumber(number + 1); // update state and rerender the whole Counter function
        num.current++; // update state but does not rerender, if Counter is rerendered then it updates
        // console.log(num.current);
        // console.log(number);
        // setTimeout(() => {
            //     setNumber(number => number + 1);
            //     setNumber(number + 1);
            // }, 500);
            // console.log(number);
        }
        const fibFunction = useCallback(function fib(n) {
            if (n < 1) return 0;
            if (n === 1 || n === 2) return 1;
            return fib(n - 1) + fib(n - 2);
        },[]);
    // useMemo prevents recomputation of first argument until second argument changes
    const fibValue = useMemo(()=>fibFunction(number),[number,fibFunction]);
    return (
        <div className='counter'>
            <div className="number">{number} | {fibValue}</div>
            <button className="button" onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Counter;