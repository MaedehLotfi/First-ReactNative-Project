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
          <View style={{padding:10 ,}}>
      <Text style={styles.textInfo}>اطلاعات فیزیولوژیکی شما ثبت شده توسط دکتر معالج</Text>
      <FlatList
      data={physiologicalData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <View style={{backgroundColor:'#7e98cc', alignItems:'center', padding:10,borderRadius:20, margin:20}}>
        <Text style={styles.textLevel}>وزن: {item.Weight}</Text>
        <Text style={styles.textLevel}>قد: {item.Height}</Text>
        <Text style={styles.textLevel}>فشارخون: {item.bPressure}</Text>
        <Text style={styles.textLevel}>ضربان قلب: {item.hBeat}</Text>
        <Text style={styles.textLevel}>قندخون: {item.bSugar}</Text>
        </View>
      )}/>

   

         

</View>
</SafeAreaView>
    );
}
export default PhysiologicalData;