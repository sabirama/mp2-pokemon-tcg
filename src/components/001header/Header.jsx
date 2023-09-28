import mainroutes from '../00pages/mainrouter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import pokemon from '../../assets/images/pokemon.png'
import rotom from '../../assets/images/rotom-pokedex.png'
import './Header.css'

const Header = () => {
    const [isActive, setisActive] = useState(true)

    const toggleActive = () => {
        setisActive(!isActive)
    }

    const falseActive = () => {
        setisActive(true)
    }

    return (
        <header className="main-header">
            <Link to="/" className="logo">
                <img
                    src={pokemon}
                    alt=""
                    className="home-img"
                    onClick={falseActive}
                />
            </Link>

            <nav className="nav">
                <button className="nav-button" onClick={toggleActive}>
                    <img src={rotom} height="30px" />
                </button>
                <ul className={isActive == true ? 'nav-hidden' : 'nav-show'}>
                    {mainroutes.map((route, index) => {
                        if (route.name == 'HOME') {
                            return null
                        }
                        return (
                            <li key={index}>
                                <Link
                                    to={route.path}
                                    className="links"
                                    onClick={falseActive}
                                >
                                    <img
                                        src={route.icon}
                                        alt=""
                                        height="40px"
                                    />
                                    {route.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header
