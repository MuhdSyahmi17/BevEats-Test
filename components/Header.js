import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Headerpic from './Headerpic.png'


const Header = ({ title }) => {
    const location = useLocation()
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
        
        <img src={Headerpic}  alt="Header Picture" />

            <h1>{title}</h1>
            
        {location.pathname === '/' &&
            <Link to='/checkout'>
            <Button color='green' text='Checkout' onClick
            ={onClick}></Button>
            </Link>    
        } 
           
        
        </header>
    )
}

Header.defaultProps = {
    title: 'Speedy Foodchain',
    
}

Header.propTypes = {
    tile: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroudColor: 'black',
// }

export default Header
