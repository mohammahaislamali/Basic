import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import colors from '../../constanst/colors';
import icons from '../../constanst/icons';
import Clickable from '../../componet/HOC/Clickable';
import {
  FULL_WIDTH,
  FULL_HEIGHT,
  STANDARD_WIDTH,
  RADIUS,
  PADDING,
} from '../../constanst/layout';
import Paragraph from '../../componet/Ui/Paragraph';
import Input from '../../componet/Ui/Input';
import UiButton from '../../componet/Ui/UiButton';
import {useState} from 'react';
import Icon from '../../componet/Ui/Icon';
import Card from '../../componet/Ui/Card';
import {isValidForm, validators} from '../../constanst/validation'
import { POST } from '../../bakend/Backend';
import Toast from 'react-native-simple-toast'
const Login = ({navigation}) => {
  // tokan tokan
  // let tokan= 'demo token'
  // const login =async()=>{
  // await AsyncStorage.setItem('Token',tokan)
  //   navigation.reset({
  //     index:0,
  //     routes:[{name:'First'}]
  //   })
  // }
  // input value 
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
  const[error,seterror]=useState({})
 
  
  const loginform =async()=>{
    const from={
      number:validators.checkNumber('mobile_number',number),
      password:validators.checkPassword('password',password)
   
     }
     seterror(from)
    if(isValidForm(from)){
     let body= {
      mobile_number:number,
      
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
      console.warn('body===>',body)
    POST(
    'http://54.144.109.80:5000/api/v1/login',
    body,
    {'authorization': 'Basic YWRtaW46YWRtaW4='},
    res=>{
       if(res?.ok){
          navigation.navigate('Home')
       }else{
        Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
       }
      console.log('res==>',res) 
      
    },
   
    err=>{
      console.log('err===>',err)
    },
    fail=>{
     console.log('fail ===>',fail)
    }
    )
   //  navigation.navigate('Otp',{mobile_number})
    }
   
  }
   

  return (
    <View style={{flex:1}}>
      <View style={styles.mainbox}>
        <View>
          <Image style={styles.mixxchaimin} source={icons.mixxchaimin} />
        </View>
      </View>
      <View style={styles.loginform}>
        <Paragraph style={{margin: 10}} size={50}>
          LOGIN
        </Paragraph>
        <View>
          {/* <Paragraph>{email}</Paragraph>
        <Paragraph>{password}</Paragraph> */}
          <View>
            {/* <View style={{alignSelf: 'flex-end'}}>
              <Icon style={styles.icon} source={icons.look} />
            </View> */}
            <Input onchange={t => setnumber(t)} placeholder="enter the mobail number"  error={error?.number}/>
          </View>

          <View>
            <Input
              onchange={t => setpassword(t)}
              placeholder="enter the password" error={error?.password}
            />
          </View>
          <Clickable >
          <Paragraph
            style={{margin: 10}}
            color="red"
            size={20}
            textAlign="right">
            forgot password ?
          </Paragraph>
          </Clickable>
        </View>
        <View style={styles.or}>
          <Clickable onPress={()=>navigation.navigate('SinUp')}>
             <Paragraph color="white">OR</Paragraph>
            </Clickable>

        </View>
        <View style={styles.inputbox}>
          <View>
            <UiButton
           onPress={()=>loginform()}
              style={styles.buttan}
              txtSize={30}
              text="Login"
              backgroundColor={colors.pink}
            />
          </View>
          <View>
            <Paragraph color="gray" >
              Dont’t have an account ?<Clickable onPress={()=>navigation.navigate('SinUp')}>
             <Paragraph>Register</Paragraph>
            </Clickable>
            </Paragraph>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainbox: {
    height: FULL_HEIGHT * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    width: FULL_WIDTH,
    backgroundColor: colors.pink,
    borderBottomStartRadius:50
  },
  loginform: {
    height: FULL_HEIGHT,
    width: FULL_WIDTH * 0.9,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderWidth: 1,
    elevation: 30,
    margin: -20,
  },
  buttan: {
    width: FULL_WIDTH / 2,
    padding: PADDING - 10,
    alignSelf: 'center',
    borderRadius: RADIUS * 3,
    alignItems: 'center',
  },
  inputbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  or: {
    borderRadius: RADIUS + 50,
    backgroundColor: colors.gray,
    width: FULL_WIDTH * 0.1,
    height: FULL_HEIGHT * 0.04,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
