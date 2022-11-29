import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    return (
        <>
            <div className="counter">{counter}</div>

            <Button increment={increment} />
        </>
    )
}

export default Counter