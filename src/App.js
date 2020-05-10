import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth , createUserProfile} from './firebase/firebase.utility'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentWillMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      console.log('user inside the componentwillmount onAuthStateChanged>>>>>>>>>>>', user);
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log('this.state>>>>>>>>>>>>',this.state)
        })
      }
    })  
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
      )
  }
}

export default App;
