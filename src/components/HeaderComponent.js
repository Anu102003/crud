import React from 'react'
import "../App.css"

const HeaderComponent = () => {
    return (
        <div>
            <header>
                    
                <nav className = "navbar navbar-expand-md navbar-dark bg-white">
                        <div className='logo-container'>
                        <a href = "https://divum.in/" className = "navbar-brand">
                            <img src="./divumlogo.jpeg" height="150px" className='logo'/>
                        </a>                       
                       
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent