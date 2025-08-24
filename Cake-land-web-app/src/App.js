import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import React, { Component } from 'react';
import { auth, createUserProfileDocument } from './Firebase/firebase.util';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user.actions';
import {createStructuredSelector} from 'reselect'; 
import { selectCurrentUser } from './Redux/User/user.selector';
import CheckoutPage from './Pages/Checkout/Checkout';
import Orders from './Components/Orders/Orders';
import AllTransactions from './Pages/AllOrders/All_Transaction';
import Aboutus from './Pages/About Us/about';



class App extends Component {
  constructor(){
    super();
    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    const {setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user});
      // createUserProfileDocument(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        });
        
      }
      setCurrentUser(userAuth);
});
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() { 
    return ( 
      
      <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route  exact path='/signin' render={
            () => 
            this.props.currentUser ? (
            <Redirect to="/"/>
            ) :(<SignInAndSignUp />)
          }/>
          <Route exact path="/all_transaction" component={AllTransactions} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/about" component={Aboutus} />
          </Switch>
      </div>
      
     );
  }
}

//To get the current user of state
const mapStateProps = createStructuredSelector({
  currentUser : selectCurrentUser,
})

//using for set State of current user in Redux
const mapDispatchProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


 
export default connect(mapStateProps,mapDispatchProps)(App);