import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Paragraph from '../../componet/Ui/Paragraph'
// import UiButton from '../../components/UI/UiButton'
import Card from '../../componet/Ui/Card'
import Clickable from '../../componet/HOC/Clickable'
import Loader from '../../componet/Ui/Loader'
import ModalContainer from '../../componet/HOC/ModalContainer'
const Home = ({navigation}) => {
    const [data, setdata] = useState([])
    const [loder,setloder]=useState(true)
    const  [model,setmodel]=useState(true)
    const getData = async () => {
     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
     let abc=  await data.json()              // deta fetch k liye
       setdata(abc)
       setloder(false)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <View>
        <Loader loading={loder}/>
        <ModalContainer show={model}/>
        <Clickable onPress={()=>setmodel(!model)}></Clickable>
        <Paragraph>Home</Paragraph>
        <Clickable onPress={()=>getData}>
        <Paragraph size={20} >getData</Paragraph>
        </Clickable>

        <Paragraph size={50} onPress={()=> navigation.navigate('Login')}>getData</Paragraph>
        
      <FlatList  
       data={data}
             
       renderItem={({item , index }) =>{
      return(
                        <Card>
                            <Paragraph size={20} type='bold'>{item?.title}</Paragraph>
                            <Paragraph size={14} type='light'>{item?.body}</Paragraph>
                        </Card>
                    )
                  }}
             />
             
            </View> 

        
    )
}

export default Home

const styles = StyleSheet.create({})