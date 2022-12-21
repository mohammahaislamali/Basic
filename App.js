import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import MainNavigator from './src/navigatoin/MainNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
    <MainNavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})