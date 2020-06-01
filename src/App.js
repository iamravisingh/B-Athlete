import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch ,Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfile,addCollectionAndDocuments } from './firebase/firebase.utility'
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import CheckoutPage from './component/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillMount() { 
    const { setCurrentUser,collectionArray } = this.props;
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
}); 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
