import React, { useState, useEffect } from 'react'
import './Nav.css';
import user_avatar from './user avatar icon.jpg'
import netflix_logo from './netflix_logo.png'
import { useHistory } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false); 
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else
                handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo'
                src={netflix_logo}
                alt="Netflix Logo" />

            <img className="nav__avatar"
                onClick={() => history.push('/profile')}
                src={user_avatar}
                alt='User Avatar' />
        </div>
    )
}

export default Nav
