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
const Login = ({navigation}) => {
  // tokan tokan
  let tokan= 'demo token'
  const login =async()=>{
  await AsyncStorage.setItem('Token',tokan)
    navigation.reset({
      index:0,
      routes:[{name:'First'}]
    })
    
  }
  // input value 
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const[error,seterror]=useState({})
 
  
  const loginform =async()=>{
    const from={
      email:validators.checkEmail('EMAIL',email),
      password:validators.checkNumber('PASSWORD',password)
   
     }
     seterror(from)
    if(isValidForm(from)){
      
    }
  }
  useEffect(()=>{
    loginform()
  },)

  return (
    <View>
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
            <View style={{alignSelf: 'flex-end'}}>
              <Icon style={styles.icon} source={icons.look} />
            </View>
            <Input onchange={t => setemail(t)} placeholder="enter the email"  error={error?.email}/>
          </View>

          <View>
            <Input
              onchange={t => setpassword(t)}
              placeholder="enter the password" error={error?.password}
            />
          </View>
          <Paragraph
            style={{margin: 10}}
            color="red"
            size={20}
            textAlign="right">
            forgot password ?
          </Paragraph>
        </View>
        <View style={styles.or}>
          <Clickable>
             <Paragraph color="white">OR</Paragraph>
            </Clickable>

        </View>
        <View style={styles.inputbox}>
          <View>
            <UiButton
           onPress={()=>navigation.navigate('SinUp')}
              style={styles.buttan}
              txtSize={30}
              text="Login"
              backgroundColor={colors.pink}
            />
          </View>
          <View>
            <Paragraph color="gray" style={{marginVertical: 10}}>
              Dont’t have an account ? Register
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
