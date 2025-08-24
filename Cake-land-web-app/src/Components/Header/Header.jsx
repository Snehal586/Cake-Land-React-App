import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.util';
import './Header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selector';


const Header = ({currentUser,hidden}) => {
    return ( 
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                {
                    currentUser ? <div className="option">{`Hello, ${currentUser.displayName}..`}</div> : <Link to="/" className="option">HOME</Link>
                }
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link className="option" to="/orders">
                    MY ORDERS
                </Link>
                <Link className="option" to="/about">
                    ABOUT
                </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown/>
            }
        </div>
     );
}
 


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});


export default connect(mapStateToProps)(Header);