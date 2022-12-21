import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Clickable from '../../componet/HOC/Clickable'
import Paragraph from '../../componet/Ui/Paragraph'
import { FlatList } from 'react-native-gesture-handler'

const scond = () => {
    const[data,setdata]=useState('')
 const getdata =async()=>{
   let abc =await fetch('https://jsonplaceholder.typicode.com/albums')
   let ikm = await abc.json()
   setdata(ikm)
 }   
 useEffect(()=>{
 getdata()
},[])
  return (
    <View>
      <Clickable onPress={()=>getdata}>
        <Paragraph>get data</Paragraph>
      </Clickable>
    <FlatList
    data={data}
    renderItem={(item,index)=>{
   return(
   <View>
   <Paragraph>{item?.title}</Paragraph>


   </View>


   )


    }}
    />
    </View>
  )
}

export default scond

const styles = StyleSheet.create({})