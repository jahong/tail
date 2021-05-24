import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const navList = [
        {logo:true},
        {title: 'platform'},
        {title: 'products'},
        {title: 'resources'},
        {title: 'for individuaIs'},
    ]

    const [navState, setNavState] = useState(false)

    return (
        <div className="header md:px-10">
            <div className="container-lg mx-auto">
                <ul className="ul-df">
                    {navList.map( (item, i) => {
                        return (
                        <li className="li-df" key={i}>
                            {item.logo ? 
                            <Link className="nav-logo" to="/"/>
                            :
                            <div>
                                <Link className="nav-btn capitalize" to="/" onClick={() => setNavState(true)}>{item.title}</Link>
                                {/* {navState ? 
                                <div className="" >
                                    <ul>
                                        {item.subList.map}
                                        <li>
                                            <Link className="btn btn-line capitalize" to="/" >{item.title}</Link>
                                        </li>
                                    </ul>
                                </div>
                                : null} */}
                            </div>
                            }
                        </li>
                        )
                    })}
                </ul>
                <div className="absolute right-0">
                    <Link className="btn btn-line" to="/"></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
