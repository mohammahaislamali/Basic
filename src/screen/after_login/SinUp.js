import { StyleSheet, Text, View,Image } from 'react-native'
import colors from '../../constanst/colors'
import  React,{useEffect, useState} from 'react'
import {isValidForm, validators} from '../../constanst/validation'
import Input from '../../componet/Ui/Input'
import Paragraph from '../../componet/Ui/Paragraph'
import icons from '../../constanst/icons'
import UiButton from '../../componet/Ui/UiButton'
import {FULL_WIDTH,FULL_HEIGHT,STANDARD_WIDTH,RADIUS,PADDING}  from '../../constanst/layout'
import ScrollContaineriew from '../../componet/HOC/ScrollContainer'
const SinUp = ({navigation}) => {
   const [firstname,setfirstname]=useState('')
   const [lastname,setlastname]=useState('')
   const [email,setemail]=useState('')
   const [number,setnumber]=useState('')
  const [error,seterror]=useState({})
 
  
    const sinup =async()=>{
  
      console.log('----->,body')
      
      const form={
        firstname:validators.checkRequire('firstname',firstname),
        lastname:validators.checkRequire('lastname',lastname),
         email:validators.checkEmail('Email',email),
         password:validators.checkPhoneNumber('Password',number)
        }
        seterror(form)
        if(isValidForm(form)){ 
          let body=
          JSON.stringify({
            email:email,
            first_name:firstname,
            last_name:lastname,
            mobile_number:number,
          })

    let reslut =await fetch('http://54.144.109.80:5000/api/v1/signup',{
     method:'post',
    //  headers:{
    //   authorization:"your token"},

     body:body
 
    })
    console.log('res===>',reslut)

  } } 
// useEffect(()=>{
//   sinup()
// },[])
  return (
    
    <ScrollContaineriew>
         
      <View style={styles.mainbox}>
      
      <Image  source={icons.mandilvery} />
      </View>
      <View style ={styles.loginform}>
      <Paragraph style={{margin:10}} size={40}>SinUp</Paragraph>
      <View>  
      <Input onchange={(t)=>setfirstname(t)} placeholder='enter the firstname' error={error?.firstname}/>
      <Input onchange={(t)=>setlastname(t)} placeholder='enter the lastemail' error={error?.lastname}/>
      <Input onchange={(t)=>setemail(t)} placeholder='enter the email' error={error?.email}/>
      <Input onchange={(t)=>setnumber(t)} placeholder='enter the mobail number' error={error?.number}/>
      <Paragraph style={{margin:10}}  color='red' size={20} textAlign='right'>forgot password ?</Paragraph>
      <View style={styles.inputbox}>
        <View>
      <UiButton  onPress= {()=>navigation.navigate('Add')} style={styles.buttan}  txtSize = {30} text='SinUp' backgroundColor = {colors.pink}  />
      </View>
      <View>
        <Paragraph color='gray' style={{marginVertical:10}}>Dont’t have an account ? Register</Paragraph>
      </View>
      </View>
      </View >
    </View>
  
    </ScrollContaineriew>
  
  )
}

export default SinUp

const styles = StyleSheet.create({
  mainbox:{
    height:FULL_HEIGHT*.45,
    justifyContent:'center',alignItems:'center' ,
    width:FULL_WIDTH,
    backgroundColor:colors.pink,
    
  },
  loginform:{
    height:FULL_HEIGHT,
    width:FULL_WIDTH*0.90,
    backgroundColor:colors.white,
    alignSelf:'center',
    margin:-90,
    borderWidth:1,
    elevation:30 
    
  },
  buttan:{
    width:FULL_WIDTH/2,
    padding:PADDING-10,
    alignSelf:'center',
    borderRadius:RADIUS*3,
    alignItems:'center'
  },
  inputbox:{
    justifyContent:'center',alignItems:'center' ,
  },
})