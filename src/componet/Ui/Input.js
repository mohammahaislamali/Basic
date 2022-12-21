import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../../constanst/colors';
import Paragraph from './Paragraph';
const Input = ({input, placeholder = 'enter the name', onchange, value,error}) => {
  return (
    <View>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onchange}>
        {input}
      </TextInput>
      <Paragraph color='red'>{error}</Paragraph>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor:colors.red,
    width: '90%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    
  },
});
