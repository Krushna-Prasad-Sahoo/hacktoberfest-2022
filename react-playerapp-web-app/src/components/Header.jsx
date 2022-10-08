import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <>
                    <ul>
                        <li><NavLink to="/addplayer">Addplayer</NavLink></li>
                        <li><NavLink to="/showplayer">Showplayer</NavLink></li>
                    </ul>
                </>
            </div>

        </nav>
    )
}
