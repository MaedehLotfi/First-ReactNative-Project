import React, { useState, useEffect } from 'react';
import {
  Alert,FlatList,SafeAreaView,ScrollView,
  StatusBar,StyleSheet,Text,TextInput,
  TouchableOpacity,useColorScheme,View,Image, ImageBackground,
} from 'react-native';
import PhysiologicalData from './PhysiologicalData';

const Home = ({navigation})=>{
  return(
    <SafeAreaView style={style.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Food")}} style={style.item}>
        <Text style={style.Touchable}>بخش داروها</Text>
      </TouchableOpacity>
    

      <TouchableOpacity onPress={()=>{navigation.navigate("PhysiologicalData")}} style={style.item}>
        <Text style={style.Touchable}>ویژگی های فیزیولوژیکی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}} style={style.item}>
        <Text style={style.Touchable}>فعالیت های شناختی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}} style={style.item}>
        <Text style={style.Touchable}>فعالیت های فیزیکی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}} style={style.item}>
        <Text style={style.Touchable}>فعالیت های اجتماعی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}} style={style.item}>
        <Text style={style.Touchable}>فعالیت های خودمدیریتی</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  
  );
}


export default Home;



export const style=StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  item:{
    height:200,
    width:'45%',
    padding:10,
    justifyContent:'center', 
    backgroundColor:'#6495ed',
    borderRadius:10,
    margin:10,
    
  },
  Touchable:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  
});

