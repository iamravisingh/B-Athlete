import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';
import { ReactComponent as Logo } from "../../assets/sports.svg";
import {logo} from '../../assets/Bathlete-logo.png'
import {auth} from '../../firebase/firebase.utility'


const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                {/* <img src={'../../assets/Bathlete-logo.png'} alt={"logo"}/> */}
                <Logo/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/shop'>Contact</Link>
                {
                    currentUser ? 
                        <div className ='option' onClick = {()=>auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;