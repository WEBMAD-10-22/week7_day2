import './Test.css'
import { useState } from "react"
import Button from '../../Button/Button'

// TEST 1 => LIST SQUARE ROOT NUMBERS 
const Test1 = () => {

    const numbersArr = [1, 2, 3, 4, 5]

    const [numbers, setNumbers] = useState(numbersArr)

    const square = () => {
        const powers = numbers.map(number => number ** 2)
        setNumbers(powers)
    }

    const root = () => {
        const roots = numbers.map(number => Math.sqrt(number))
        setNumbers(roots)
    }

    return (
        <div className="Test">
            <h1>Soy el primer test</h1>
            {
                numbers.map(number => <p>{number}</p>)
            }
            <Button genericFunction={square}>Gimme some ²</Button>
            <Button genericFunction={root}>Also some √</Button>
        </div>
    )
}

export default Test1

