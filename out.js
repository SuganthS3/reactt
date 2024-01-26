import React from 'react';
import  "./Out.css";
import {Outlet,Link} from "react-router-dom"

export default function Out() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">
                    About
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/contact">
                    Contact
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/Counter">
                  Counter
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/Effect">
                  Effect
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/Reducer">
                  Reducer
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}