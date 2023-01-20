import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Paragraph from '../../components/UI/Paragraph'
import ViewContainer from '../../components/HOC/ViewContainer'
import Colors from '../../constants/Colors'
import Card from '../../components/UI/Card'
import RADIUS from '../../constants/layout'
import Input from '../../components/UI/UiInput'
import UiButton from '../../components/UI/UiButton'
import { PADDING } from '../../constants/layout'
import {Imagepath } from '../../constants/image'
import { Dimensions } from 'react-native'
import { FULL_HEIGHT } from '../../constants/layout'
import Clickable from '../../components/HOC/Clizkable'
import Loder from '../../components/UI/Loder'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import viewcont, { isValidForm, validators } from '../../constants/Validation'
import { POST } from '../../backend/Backend'
const Login = ({navigation}) => {
  const [username,setusername]=useState('')
  const [Number,setNumber]=useState('')
  const [error,seterror]=useState('')
  const logindata=async()=>{
    let data= await AsyncStorage.getItem("user");
    // console.log('======>',data);
    newdata=JSON.parse(data);
    if(newdata.email==email&& newdata.password==password){
      navigation.navigate('Wellcome')
      Login()
    }
    else{
      seterror('Invalide Email')
    }
  }
  let token = 'demotoken'
  const Login = async() => {
    await AsyncStorage.setItem('TOKEN',token)
    navigation.reset({
      index:0,
      routes:[{name:'Wellcome'}]
    });
  }
  const login = () => {
    const form = {
      username:validators.checkRequire('first_name',username),
      Number:validators.checkPhoneNumber('mobile_numaber',Number,12),
    }
    seterror(form)
    if(isValidForm(form)){
    let body = {
      mobile_number:Number,
      device_information: {
          device_id: "12345",
          os_name: "Android",
          model_name: "SM-M307F",
          os_version: "10",
          app_version: "1.3.0",
          manufacturer: "samsung",
          total_memory: "5860327424",
          fcm_token: "1234"
      }
    }
    POST(
      'http://54.144.109.80:5000/api/v1/login',
      body,
      {'Authorization':'Basic YWRtaW46YWRtaW4='},
      res => {
        console.log('======>',res);
      },
      eror => {
        console.log('======>',eror);
      },
      feld => {
        console.log('=======>',feld);
      }
    )
    navigation.navigate('Wellcome')
  }
 
}

  return (
    <ScrollContainer>
      <ViewContainer backgroundColor='white'>
      <ImageBackground source={Imagepath.bacgroundTop} resizeMode="cover" style={styles.image}>
      <Image source={Imagepath.logo}/>
      </ImageBackground>
      <ViewContainer backgroundColor='#fff' style={styles.main}>
[4:19 PM, 12/22/2022] Firoz Peeplad: <Card>
        <Paragraph size={50} type='bold'>Hi..</Paragraph>
        <Paragraph size={20}>Sing in to your Account</Paragraph>
        <Input onChangeText={setusername} placeholder='Enter the username' error={error?.username}/>
        <Input placeholder='Enter the Phone Number' onChangeText={setNumber} error={error?.Number}/>
        <Clickable onPress={()=>navigation.navigate('Otp')}>
        <Paragraph  textAlign='right'>Forgetpassword?</Paragraph>
        </Clickable>
        <UiButton text='Sign in' onPress={()=>login()} />
          <Paragraph textAlign='center' size={20} color={'#000'}>Don't have an Account <Clickable  onPress={()=>navigation.navigate('Singup')}><Paragraph textAlign='center' size={20} style={{top:3}} color={'red'}>create</Paragraph></Clickable></Paragraph>
        </Card>
      </ViewContainer>
      </ViewContainer>
      </ScrollContainer>
  )
}
export default Login
const styles = StyleSheet.create({
image:{
  width:Dimensions.width,
  height:FULL_HEIGHT/3,
  resizeMode:"cointant",
  alignItems:"center",
  justifyContent:"center"
},

})