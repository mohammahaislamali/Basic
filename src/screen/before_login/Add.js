import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UiButton from '../../componet/Ui/UiButton'
import Clickable from '../../componet/HOC/Clickable'
import Paragraph from '../../componet/Ui/Paragraph'
import { FlatList } from 'react-native-gesture-handler'
import ViewContainer from '../../componet/HOC/ViewContainer'
import Card from '../../componet/Ui/Card'
import Loader from '../../componet/Ui/Loader'
import ModalContainer from '../../componet/HOC/ModalContainer'
const Add = ({navigation}) => {
     const logeout=async({navigation})=>{
     await AsyncStorage.clear()
     Add()
     navigation.reset({
     idex:0,
     routes:[{name:'Login'}]
     })
     }   
  // Api  
   const [data,setdata]=useState([])
   const [loder,setloder]=useState(true)
   const[modal,setmaodal]=useState(true)
   const getdata =async()=>{
  
   let ikm = await fetch('https://jsonplaceholder.typicode.com/posts',{headers:{
    authurizatoin:"your token"
   },
   method:"post",
   body:JSON.stringify({})
  
  })
   let abc =await ikm.json()
   setdata(abc)
   setloder(false)

   }  
   useEffect(()=>{
    getdata()     

  },[])  
     
  return (
      <Card>
     <Loader loading={loder}/>
     <ModalContainer show={modal}/>
      <UiButton style={{marginVertical:10}} text='Logout' onPress={logeout}/>
      <UiButton text='Add' onPress={()=>navigation.navigate('First')}/>
      <Clickable onPress={()=>getdata}>
        <Paragraph size={30}>Add data</Paragraph>
      </Clickable>
     <FlatList
       data={data}
       renderItem={({item,index})=>{
        return(

          <View>
          <Paragraph>{item?.title}</Paragraph>
          <Paragraph>{item?.body}</Paragraph>
          </View>
        )
    
       }}
     /> 
    
    </Card>
  )
}

export default Add

const styles = StyleSheet.create({})