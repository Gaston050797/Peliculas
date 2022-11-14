import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Tus Peliculas
            </Link>
            <Link 
                className="navbar-brand ms-3" 
                to="agregar"
            >
                Apregar Peliculas
            </Link>
        </nav>
    )
}