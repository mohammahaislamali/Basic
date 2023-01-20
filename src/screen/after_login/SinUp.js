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
import {POST} from '../../bakend/Backend'
import Clickable from '../../componet/HOC/Clickable'
import Toast  from 'react-native-simple-toast'
const SinUp = ({navigation}) => {
   const [firstname,setfirstname]=useState('')
   const [lastname,setlastname]=useState('')
   const [email,setemail]=useState('')
   const [number,setnumber]=useState('')
   const[device_id,setdevice_id]=useState('')
   const[model_name,setmodel_name]=useState('')
   const[manufacturer,setmanufacturer]=useState('')
  const [error,seterror]=useState({})
    const sinupup =async()=>{
     const form={
      first_name:validators.checkRequire('firstname',firstname),
      last_name:validators.checkRequire('lastname',lastname),
      email:validators.checkEmail('email',email),
      mobile_number:validators.checkNumber('number ',number),
      device_id:validators.checkNumber('device_id',device_id),
      model_name:validators.checkRequire('model-name',model_name),
      manufacturer:validators.checkRequire('manufacturer',manufacturer)
            
      }
      seterror(form)
      if(isValidForm){
          let body=
          {
            email:email,
            first_name:firstname,
            last_name:lastname,
            mobile_number:number,
            device_id:device_id,
            model_name:model_name,
            manufacturer:manufacturer,
            device_information: {  
              os_name: "Android",  
              os_version: "10",
              app_version: "1.3.0",
              total_memory: "5860327424",
              fcm_token: "12345"
          }
          }
          POST(
            'http://54.144.109.80:5000/api/v1/signup',
            body, 
           {'authorization': 'Basic YWRtaW46YWRtaW4='},
            res=>{
              console.log('res==>',res)
              if(res?.ok){

                navigation.navigate('Verfiyotp',{number})
              } 
              else{
                Toast.showWithGravity(res.Error.toString(), Toast.LONG, Toast.TOP);
              }
              
            },
           err=>{
            console.log('res==>',err)
            let error = JSON.parse(err.res1);
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
           },
           fail=>{
           console.log('fail===',fail)
           Toast.showWithGravity('Api failed');
           }
          ) 
    // navigation.navigate('Login')
   } 
    }
 // 'Authorization':'Basic YWRtaW46YWRtaW4='
  return (
    
    <ScrollContaineriew>
         
      <View style={styles.mainbox}>
      
      <Image  source={icons.mandilvery} />
      </View>
      <View style ={styles.loginform}>
      <Paragraph style={{margin:10}} size={40}>SinUp</Paragraph>
      <View>  
      <Input onchange={(t)=>setfirstname(t)} placeholder='enter the firstname' error={error?.first_name}/>
      <Input onchange={(t)=>setlastname(t)} placeholder='enter the lastemail' error={error?.last_name} />
      <Input onchange={(t)=>setemail(t)} placeholder='enter the email' error={error?.email}/>
      <Input onchange={(t)=>setnumber(t)} placeholder='enter the mobail number' error={error?.mobile_number}/>
      <Input onchange={(t)=>setdevice_id(t)} placeholder='enter the device-id' error={error?.device_id}/>
      <Input onchange={(t)=>setmodel_name(t)} placeholder='enter the model-name' error={error?.model_name}/>
      <Input onchange={(t)=>setmanufacturer(t)} placeholder='enter the manufacturer' error={error?.manufacturer}/>
      <Paragraph style={{margin:10}}  color='red' size={20} textAlign='right' >forgot password ?</Paragraph>
      <View style={styles.inputbox}>
        <View>
      <UiButton  onPress= {sinupup} style={styles.buttan}  txtSize = {30} text='SinUp' backgroundColor = {colors.pink}  />
      </View>
      <View>
        <Paragraph color='gray' style={{marginVertical:10}}>Dont’t have an account ? <Clickable onPress={()=>navigation.navigate('Login')}>
             <Paragraph>Login</Paragraph>
            </Clickable> </Paragraph>
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
    height:FULL_HEIGHT*2,
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