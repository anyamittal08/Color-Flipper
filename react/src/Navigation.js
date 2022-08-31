import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className='nav-center'>
                <h4> Color Flipper </h4>
                <ul className='nav-links'>
                <li> 
                    <Link to='/'> Simple </Link> 
                </li>
                <li>
                    <Link to='/hex'> Hex </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;