//Header Component

//Step 1: Import libs for making a  Component
import React from 'react';
import { Text, View } from 'react-native';

//Step 2: Make a Component
const Header = (props) => { //props is a JavaScript object! With props we can reuse components
  const { textStyle, viewStyle } = styles;

  return (    // multi-line JSX!
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Step 3: Make component avilable to othe parts of the App
export { Header };
