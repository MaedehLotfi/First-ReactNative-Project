import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';

const PhysiologicalData = ({navigation})=>{
  const id = useSelector(state=> state.places.Id);
  const [physiologicalData,setPhysiologicalData]= useState([]);

  const LoadPhysiologicalDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetPhysiologicalData/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! PhysiologicalData received with id in : \n"+JSON.stringify(json));
    setPhysiologicalData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadPhysiologicalDataFromServer(); 
      
   },[]);

    return(
        
        <SafeAreaView >
          <View style={styles.ProfileView}>
      <Text style={styles.title}>نمایش اطلاعات</Text>
      <FlatList
      data={physiologicalData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <>
        <Text>وزن: {item.Weight}</Text>
        <Text>قد: {item.Height}</Text>
        <Text>فشارخون: {item.bPressure}</Text>
        <Text>ضربان قلب: {item.hBeat}</Text>
        <Text>قندخون: {item.bSugar}</Text>
        </>
      )}/>

      </View>

         

  
</SafeAreaView>
    );
}
export default PhysiologicalData;