import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch ,Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfile } from './firebase/firebase.utility'
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import CheckoutPage from './component/checkout/checkout.component'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({  
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      setCurrentUser(user);
    })  
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
      )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
}); 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
