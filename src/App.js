import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

/**
* class based Component
* must override render
* render must return JSX
* this is the root of our app
*
* lifecycle callbacks:
*/

class App extends Component {
  state = { loggedIn: null };

  //lifecycle method for firebase initialization
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA70ZyjNmZpjATrbOdyzq_3Hy0XtTvXXho',
      authDomain: 'react-auth-f0788.firebaseapp.com',
      databaseURL: 'https://react-auth-f0788.firebaseio.com',
      projectId: 'react-auth-f0788',
      storageBucket: 'react-auth-f0788.appspot.com',
      messagingSenderId: '1074126730655'
    });

    //The app component should track is user is logged in or out
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    }
    );
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
