import './Button.css'

const Button = ({ increment }) => {
    return (
        <a className="button" onClick={increment} href="#"></a>
    )
}

export default Button