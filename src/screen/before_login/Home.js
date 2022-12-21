import { StyleSheet, Text, View,Image,FlatList} from 'react-native'
import React from 'react'
import Input from '../../componet/Ui/Input'
import Paragraph from '../../componet/Ui/Paragraph'
import icons from '../../constanst/icons'
import UiButton from '../../componet/Ui/UiButton'
import colors from '../../constanst/colors'

import {FULL_WIDTH,FULL_HEIGHT,STANDARD_WIDTH,RADIUS,PADDING}  from '../../constanst/layout'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({navigation}) => {


  const Data =[
    {
      image:icons.bargar,
      name:"Burgur"
    },
    {
      image:icons.sanks,
      name:"sanks"
    },
    {
      image:icons.pizaa,
      name:"pizaa"
    },
    {
      image:icons.handi,
      name:"khokha"
    },
    {
      image:icons.sanks,
      name:"panire"
    },

  ]
  const Item =({item})=>{
    return(
    <View style={styles.flatelistone}> 
     <Image style={{height:50,width:70}} source={item.image} />
    <Text >{item.name}</Text>
    </View>
    )
  }
  const Islam = [
    {
    Image:icons.pudy,
     name:'cheese pizza'
    
    },
    {
      Image:icons.pudy,
       name:'cheese pizza'
      },
      {
        Image:icons.pudy,
         name:'cheese pizza'
     },
  ]

   const Ali = ({item})=>{
  return(
    <View style={styles.four}>
    <Image style={styles.pudy} source={item.Image} />
    <Text style={styles.pizzzz}>{item.name}</Text>
    <Text>olive food</Text>
    <Text>*4.3(940 Ratings</Text>
  </View>
  )

   }

  return (
    <ScrollView>
    <View >
       <View style={styles.mainbox}>
       <View style={styles.homepage}> 
      <Paragraph>DELIVER TO </Paragraph>
      <Paragraph > Home. Mansorovar jaipur</Paragraph>
      </View>
      <View>
       <Input placeholder='Search for food'/>
      </View>
      </View>
      <View>
        <Image  source={icons.upto}/> 
      </View>
      <View >
      <View style={{margin:10}}>
        <Paragraph>Categories</Paragraph>
      </View>
     <View>
     <FlatList 
      data={Data}
      renderItem={Item}
      horizontal
      showsHorizontalScrollIndicator={false}
     />
   </View>
   <View>
   <FlatList 
      data={Islam}
      renderItem={Ali}
      horizontal
      showsHorizontalScrollIndicator={false}
     />
   </View>
   <View>
   <UiButton onPress= {()=>navigation.navigate('Login')} style={styles.buttan}  txtSize = {30} text='EXPLORE Food' backgroundColor = {colors.pink}  />
   </View>
   </View>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    mainbox:{
    height:FULL_HEIGHT/5,
    width:FULL_WIDTH,
     },
    homepage:{
    margin:20
    },

   flatelistone:{
    width:FULL_WIDTH*.30,
    height:FULL_HEIGHT*.08,
    backgroundColor: '#FF0059',
    margin:1,
    borderRadius:RADIUS*2,
    justifyContent:'center',alignItems:'center' ,
   } ,
   four:{height:FULL_HEIGHT/3,margin:10,borderRadius:RADIUS*2,},
   pudy: { marginVertical:10,
    width:FULL_WIDTH*.80,
    height: FULL_HEIGHT*.20,
    borderRadius: 10,
    borderRadius:RADIUS*2,
  }, 
  buttan:{
    width:FULL_WIDTH*.70,
    padding:PADDING-10,
    alignSelf:'center',
    borderRadius:RADIUS*3,
    alignItems:'center'
  },
  
})