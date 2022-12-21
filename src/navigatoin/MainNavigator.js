import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
/*

 Always use stack navigation at the root of your project

*/

const MainNavigator = () => {
  
    let  navigate  = React.useRef(null)
console.log("====>",navigate.current)
const gettoken = async()=>{
let tokan = await AsyncStorage.getItem('Token')
if(tokan){
 navigate.current.reset({
index:0,
routes:[{name:'Add'}]    
 })
}

} 
 React.useEffect(()=>{
   gettoken()
 },
 [])
    return (
        <NavigationContainer ref={navigate} >
            <StackNavigator  />
        </NavigationContainer>
    )
}
export default MainNavigator