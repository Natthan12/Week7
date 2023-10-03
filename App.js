import react from 'react';
//import ColumnItem from './column-item';//
//import LayOut from './layout';
//import LayOut2 from './layout2';
//import Question from './Question';
//import TouchableDemo from './touchable-demo2';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import Home from './home'
//import About from './about'
//import Contact from './contact';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './List';
import Subject from './Subject';

export default function App() {
    const Stack = createStackNavigator()
  return (
        //<ColumnItem/>//
      //<RowItem/>//
     //<Question/>
     //<TouchableDemo/>
     /*const Stack = createStackNavigator()
     return (
       <NavigationContainer>
          <Stack.Navigator initialRoutName='Home'>
            <Stack.Screen name="Home" component={Home}
              options={{headerTitle: 'หน้าแรก', hederbackTitle:''}}
            />
            <Stack.Screen name="About" component={About}
              options={{headerTitle: 'เกี่ยวกับฉัน', hederbackTitle:''}}
            />
            <Stack.Screen name="Contact" component={Contact}
              options={{headerTitle: 'ข้อมูลส่วนตัว', hederbackTitle:''}}
            />

          </Stack.Navigator>
       </NavigationContainer>
     )*/
    <NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name="List" component={List}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="Subject" component={Subject}
          options={{headerTitle: 'รายละเอียดสินค้า', headerBackTitle:''}}
          />

        </Stack.Navigator>
      </NavigationContainer>
  
      
  );
}
