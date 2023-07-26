import React, { useState, useEffect } from 'react';
import {
  Alert,FlatList,SafeAreaView,ScrollView,
  StatusBar,StyleSheet,Text,TextInput,
  TouchableOpacity,useColorScheme,View,Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Splash from './splash';
import Drugs from './Drugs';
import PhysiologicalData from './PhysiologicalData';
import SelfManagement from './SelfManagement';
import Social from './Social';
import Physical from './Physical';
import Cognition from './Cognition';
import DiseaseRecords from './DiseaseRecords';
import MedicationRecords from './MedicationRecords';
import PatientLimitations from './PatientLimitations';
import DailyReport from './DailyReport';
import configureStore from './store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';


const Navigation = ()=>{
  const Stack = createStackNavigator();
  const store = configureStore();
  return(
    <Provider store = { store }>
    <SafeAreaView style={{flexGrow:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Spalsh'>

        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false}}/>
        
        {/* HomePage */}
        <Stack.Screen name='DailyReport' component={DailyReport} options={{title:"گزارش روزانه"}}/>
        <Stack.Screen name='PhysiologicalData' component={PhysiologicalData} options={{title:"ویژگی های فیزیولوژیکی"}}/>
        <Stack.Screen name='Drugs' component={Drugs} options={{title:"داروها"}}/>
        <Stack.Screen name='SelfManagement' component={SelfManagement} options={{title:"فعالیت های خودمدیریتی"}}/>
        <Stack.Screen name='Social' component={Social} options={{title:"فعالیت های اجتماعی"}}/>
        <Stack.Screen name='Physical' component={Physical} options={{title:"فعالیت های فیزیکی"}}/>
        <Stack.Screen name='Cognition' component={Cognition} options={{title:"فعالیت های شناختی"}}/>
        
        {/* profilePage */}
        <Stack.Screen name='DiseaseRecords' component={DiseaseRecords} options={{title:"سوابق بیماری"}}/>
        <Stack.Screen name='MedicationRecords' component={MedicationRecords} options={{title:"سوابق مصرف دارو"}}/>
        <Stack.Screen name='PatientLimitations' component={PatientLimitations} options={{title:"محدودیت های بیمار"}}/>
        
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
   </Provider>
  );


function HomeScreen({navigation}) {
  
  // const api_address = useSelector(state => state.places.api_address);
  
  const [userData,setUserData]= useState([]);
  const dispatch = useDispatch();
  const id = useSelector(state=> state.places.Id);
  const api_address = useSelector(state=> state.places.api_address);

  const LoaduserFromServer= async()=>{
    fetch(api_address+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n data received with userid: \n"+JSON.stringify(json));
    setUserData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}


  useEffect(()=>{
    LoaduserFromServer(); 
 },[]);



  const Tab = createBottomTabNavigator();
  return(
<Tab.Navigator
        // screenOptions={({ route }) => ({

        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       iconName = focused ? 'home' : 'home';
        //     } 
        //     else if (route.name === 'profile') {
        //       iconName = focused ? 'add-alert' : 'add-alert';
        //     }
            
        //     return <Icon name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: 'black',
        //   tabBarInactiveTintColor: 'gray',
        // })}
      >
        <Tab.Screen name="خانه" component={Home}
        options={{ tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={'blue'} size={28} />)}} />
        <Tab.Screen name="پرونده من" component={Profile}
        options={{ tabBarIcon: ({ color, size }) => (
          <Icon name="account-box" color={'blue'} size={28} />)}} 
       />
      </Tab.Navigator>
      )
      }
    
    }

export default Navigation;
