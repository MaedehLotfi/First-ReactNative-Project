import React, { useState, useEffect } from 'react';
import {
  Alert,FlatList,SafeAreaView,ScrollView,
  StatusBar,StyleSheet,Text,TextInput,
  TouchableOpacity,useColorScheme,View,Image,
} from 'react-native';

import EvilIcons from "react-native-vector-icons/EvilIcons";
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

const Navigation = ()=>{
  const Stack = createStackNavigator();

  return(
    <SafeAreaView style={{flexGrow:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name='PhysiologicalData' component={PhysiologicalData} options={{title:"ویژگی های فیزیولوژیکی"}}/>
        <Stack.Screen name='Drugs' component={Drugs} options={{title:"داروها"}}/>
        <Stack.Screen name='SelfManagement' component={SelfManagement} options={{title:"فعالیت های خودمدیریتی"}}/>
        <Stack.Screen name='Social' component={Social} options={{title:"فعالیت های اجتماعی"}}/>
        <Stack.Screen name='Physical' component={Physical} options={{title:"فعالیت های فیزیکی"}}/>
        <Stack.Screen name='Cognition' component={Cognition} options={{title:"فعالیت های شناختی"}}/>
        
        
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
   
  );


function HomeScreen() {
  const Tab = createBottomTabNavigator();
  return(
<Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'play' : 'play';
            } 
            else if (route.name === 'Profile') {
              iconName = focused ? 'heart' : 'heart';
            }
            
            return <EvilIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="خانه" component={Home} />
        <Tab.Screen name="پروفایل" component={Profile} />
      </Tab.Navigator>
      )
      }
    
    
    }

export default Navigation;
