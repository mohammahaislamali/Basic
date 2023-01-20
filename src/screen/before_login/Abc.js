import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Abc = ({navigition,route}) => {
    let abc =route?.param?.data
    console.log('abc==>',abc)
  return (
    <View>
      <Text>Abc</Text>
    </View>
  )
}

export default Abc

const styles = StyleSheet.create({})