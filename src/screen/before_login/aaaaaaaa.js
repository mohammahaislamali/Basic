import {SafeAreaView, StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../componet/Ui/Paragraph';
// import UiButton from '../../components/UI/UiButton'
import Card from '../../componet/Ui/Card';
import Clickable from '../../componet/HOC/Clickable';
import Loader from '../../componet/Ui/Loader';
import ModalContainer from '../../componet/HOC/ModalContainer';
const Home = ({navigation}) => {
  const [data, setdata] = useState([]);


  const getData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/albums');
    let abc = await data.json(); // deta fetch k liye
    console.log('-------->',abc);
    setdata(abc);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Clickable onPress={getData}>
     <Paragraph size={50}>getData</Paragraph>
      </Clickable>


      <FlatList
        data={data}
        renderItem={({item, index}) => {
            if(item?.id%2==0){
                return (
                      <Paragraph style={{marginVertical:10}} size={20} type="bold">
                        {item?.id}{item?.title}
                      </Paragraph>
              );
            }
       
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    img:{
        height:200,
        width:200
    }
});
