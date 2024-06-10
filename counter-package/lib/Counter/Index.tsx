import useCounter from "./useCounter";

export default function Counter() {
    const [count, { increment, decrement }] = useCounter()

    return <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
}