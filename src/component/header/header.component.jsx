import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';
import Logo  from "../../assets/Bathlete-logo.png";
import {logo} from '../../assets/Bathlete-logo.png'
import { auth } from '../../firebase/firebase.utility'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({ currentUser ,hidden}) => {
    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                <img src={Logo} alt={"logo"} width='100px' height='100px'/>
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
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
         </div>
    )
}

const mapStateToProps = ({user : {currentUser},cart :{hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);