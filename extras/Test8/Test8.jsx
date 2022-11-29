import './Test8.css'
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import { useState } from 'react';

const Test8 = () => {

    const [lightMode, setLightMode] = useState(true)

    const changeTheme = () => {
        setLightMode(!lightMode)
    }

    return (
        <div style={{
            backgroundColor: lightMode ? 'white' : 'black'
        }}
            className='iconsPage' >
            {
                lightMode
                    ?
                    <FiMoon onClick={changeTheme} style={{ color: 'black' }} className='icon' size={100} />
                    :
                    <BsSun onClick={changeTheme} style={{ color: 'white' }} className='icon' size={100} />
            }
        </div >
    )
}

export default Test8
















// const [lightMode, setLightMode] = useState(false)

// const changeLight = () => {
//     setLightMode(!lightMode)
// }

// return (
//     <div style={{ backgroundColor: lightMode ? 'white' : 'black' }} className='iconsPage' >
//         {
//             lightMode ?
//                 <FiMoon onClick={changeLight} style={{ color: lightMode ? 'black' : 'white' }} className='icon' size={100} />
//                 :
//                 <BsSun onClick={changeLight} style={{ color: lightMode ? 'black' : 'white' }} className='icon' size={100} />
//         }
//     </div>
// )
