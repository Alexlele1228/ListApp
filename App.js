import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import './components/Items';
import { Item } from './components/Items';
export default class App extends Component{
    render(){
      return (
           <SafeAreaView>
           <Item>

             
           </Item>
           </SafeAreaView>
      )
    }

}

const styles=StyleSheet.create({
  main:{
    paddingHorizontal:10,

  }

})
 