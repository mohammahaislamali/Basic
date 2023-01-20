import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';

import icons from '../../constanst/icons';
import colors from '../../constanst/colors';
import {
  FULL_WIDTH,
  FULL_HEIGHT,
  STANDARD_WIDTH,
  RADIUS,
  PADDING,
} from '../../constanst/layout';
import ScrollContainer from '../../componet/HOC/ScrollContainer';
import Paragraph from '../../componet/Ui/Paragraph';
import Input from '../../componet/Ui/Input';
import UiButton from '../../componet/Ui/UiButton';
import {POST} from '../../bakend/Backend';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Clickable from '../../componet/HOC/Clickable';
const Otp = ({route, navigation}) => {
  let mob = route?.params?.mobail;
  console.log('==>', mob);
  const [Otp, setOtp] = useState('');
  const singup = async() => {
    let body = {
      otp: Otp,
      mobile_number: mob,
    };
    POST(
      'http://54.144.109.80:5000/api/v1/verify-otp',
      body, 
      {'Authorization:Basic': 'YWRtaW46YWRtaW4='},
      res => {
        console.log('....res.>', res)
        if(res.status == 'approved'){
          navigation.navigate("Home")
        }else{
          console.warn('okkkkkkkk');
        }
      }
    //   res => {
    //     if(res.status == 'approved'){
    //       navigation.navigate("Home")
     
    //   }
    // },
    //   error => {
    //     console.log(error);
    //   },
    //   feld => {
    //     console.log(feld);
    //   },
    // );
   // navigation.navigate('Home')
    )
  };

  return (
    <ScrollContainer>
      <View style={styles.mainbox}>
        <Image source={icons.girl} />
      </View>

      <View style={styles.loginform}>
        <View>
          <Paragraph style={{marginHorizontal: 10}} size={40}>
            OTP
          </Paragraph>
        </View>
        <View>
          <Paragraph style={{marginHorizontal: 10, marginVertical: 10}}>
            Enter OTP Send To 9529730884
          </Paragraph>
        </View>

        <View style={styles.input}>
          <OTPInputView
            style={{width: '80%', height: 100}}
            pinCount={6}
             code={Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
             onCodeChanged = {code => {setOtp(code)}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.one}
            codeInputHighlightStyle={styles.two}
            onCodeFilled={code => {
              setOtp(code)
              // console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          {/* <Input style={{width:300}} onchange={setOtp}  placeholder='enter the otp'  />  */}
        </View>
        <View>
          <UiButton
            style={styles.buttan}
            onPress={() => singup()}
            txtSize={30}
            text="Submit"
            backgroundColor={colors.pink}
          />
        </View>
        <View style={{alignSelf: 'center', marginVertical: 19}}>
          <Paragraph>Did’t Receive the  <Clickable onPress={()=>navigation.navigate('Verfiyotp')}><Paragraph>Resent otp </Paragraph></Clickable></Paragraph>
          
        </View>
      </View>
    </ScrollContainer>
  );
};

export default Otp;

const styles = StyleSheet.create({
  mainbox: {
    height: FULL_HEIGHT * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    width: FULL_WIDTH,
    backgroundColor: colors.pink,
    borderBottomLeftRadius: 100,
  },
  loginform: {
    height: FULL_HEIGHT,
    width: FULL_WIDTH * 0.9,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginVertical: -50,
    borderWidth: 1,
    elevation: 30,
  },
  input: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: -4,
  },
  buttan: {
    width: FULL_WIDTH / 2,
    padding: PADDING - 10,
    alignSelf: 'center',
    borderRadius: RADIUS * 3,
    alignItems: 'center',
  },
  one: {
    backgroundColor: colors.pink,
    height: 70,
    width: 50,
    margin: 5,
    fontSize:30
  },
});
