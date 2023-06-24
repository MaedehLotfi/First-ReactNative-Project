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
import PhysiologicalData from './PhysiologicalData';
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
