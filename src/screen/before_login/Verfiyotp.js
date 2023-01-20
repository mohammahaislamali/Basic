import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React, { useState,useRef } from 'react'
import ViewContainer from '../../componet/HOC/ViewContainer'
import icons from '../../constanst/icons'
import colors from '../../constanst/colors'
import {FULL_WIDTH,FULL_HEIGHT,STANDARD_WIDTH,RADIUS,PADDING}  from '../../constanst/layout'
import ScrollContainer from '../../componet/HOC/ScrollContainer'
import Paragraph from '../../componet/Ui/Paragraph'
import Card from '../../componet/Ui/Card'
import Input from '../../componet/Ui/Input'
import UiButton from '../../componet/Ui/UiButton'
import { POST } from '../../bakend/Backend'
import { Toast } from ''
const Verfiyotp = ({route,navigation}) => {
  let mobail = route?.params?.number
  console.log('mob==>',mobail)
  
   
   const Otp = () => {

    let body = {
        mobile_number:mobail,
        }
    POST(
        'http://54.144.109.80:5000/api/v1/send-otp',
        body,
        {'Authorization:Basic': 'YWRtaW46YWRtaW4='},
        res=>{
          // if(res?.ok){
          //   navigation.navigate('Otp',{mobail})
          // }
          // else{

          // }
            console.log('res==>',res)
        },
        error=>{
            console.log(error);
        },
        feld=>{
            console.log(feld);
        }
    )
    navigation.navigate('Otp',{mobail})
   }

  return (
 <ScrollContainer>
   <View style={styles.mainbox}>
     <Image  source={icons.girl} />
 </View>

 <View style ={styles.loginform}>
 <View >
<Paragraph style={{marginHorizontal:10}} size={40}>OTP</Paragraph>
  </View> 
  <View>
  <Paragraph style={{marginHorizontal:10,marginVertical:10}}>Enter OTP Send To 9529730884</Paragraph> 
  </View>

  <View style={styles.input}>
     <Input style={{width:300}} value={mobail}  placeholder='enter the number'  /> 
  </View> 
  <View>
  <UiButton style={styles.buttan} onPress={  
   Otp}  txtSize = {30} text='SendOTP' backgroundColor = {colors.pink}  />
  </View>
  <View style={{alignSelf:'center',marginVertical:19}}>
    <Paragraph>Did’t Receive the OTP? RESEND</Paragraph>
  </View>
 </View>

 

 </ScrollContainer>


  )
}

export default Verfiyotp

const styles = StyleSheet.create({
    mainbox:{
        height:FULL_HEIGHT*.45,
        justifyContent:'center',alignItems:'center' ,
        width:FULL_WIDTH,
        backgroundColor:colors.pink,
        borderBottomLeftRadius:100
        
      },
      loginform:{
        height:FULL_HEIGHT,
        width:FULL_WIDTH*0.90,
        backgroundColor:colors.white,
        alignSelf:'center',
        marginVertical:-50,
        borderWidth:1,
        elevation:30,
      },
      input:{
        flexDirection:'row',
        marginVertical:20,
        marginHorizontal:-4
      },
      buttan:{
        width:FULL_WIDTH/2,
        padding:PADDING-10,
        alignSelf:'center',
        borderRadius:RADIUS*3,
        alignItems:'center'
      },

})