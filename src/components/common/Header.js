import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const navList = [
        {logo:true},
        {title: 'platform'},
        {title: 'products'},
        {title: 'resources'},
        {title: 'for individuaIs'},
    ]

    return (
        <div className="header md:px-10">
            <div className="container-lg mx-auto">
                <ul className="ul-df">
                    {navList.map( (item, i) => {
                        return (
                        <li className="li-df" key={i}>
                            {item.logo ? 
                            <Link className="nav-logo"/>
                            :
                            <Link className="nav-btn capitalize" to="/">{item.title}</Link>
                            }
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header
