import { View, Text } from 'react-native'
import React from 'react'

const In = ({navigation}) => {
    let obj ={
       name :'home' 
    }
  return (
    <View>
      <Text onPress={navigation.navigat('Abc',{data:obj})}></Text>
    </View>
  )
}

export default In