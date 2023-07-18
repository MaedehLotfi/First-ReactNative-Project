import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';


const DiseaseRecords= ()=>{
    const id = useSelector(state=> state.places.Id);
    const [diseaseRecordData,setDiseaseRecordData]= useState([]);
    const [value,setValue]= useState([]);
    const [title,setTitle]= useState();
    const [description,setDescription]= useState();

    
    const LoadDiseaseRecordFromServer= async()=>{
        fetch("http://moshavermoslemi.ir/api/App/GetDiseaseRecord/"+id)
        .then((response)=>response.json())
        .then((json)=>{
        console.log("\n\n!!!!!!!!! data received with id in DiseaseRecords page : \n"+JSON.stringify(json));
        setDiseaseRecordData(json);
    })
        .catch((error)=>{
        console.log("Error:", error);
        })
        .finally(()=>{});}

        useEffect(()=>{
            LoadDiseaseRecordFromServer(); 
    },[]);

    return(
        <SafeAreaView>
            <ScrollView>
        <Text>ویرایش سوابق بیماری</Text>
        <FlatList
        // horizontal={true}
        
      data={diseaseRecordData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <View style={styles.ProfileView}>
        
        <Text>نام بیماری</Text>
        <TextInput placeholder='نام بیماری'
          value={item.DiseaseTitle}
          onChangeText={input => setTitle(input)}
          style={styles.textInput}/>


        <Text>توضیحات بیماری</Text>
        <TextInput placeholder='توضیحات بیماری'
          value={item.DiseaseDescription}
          onChangeText={input => setDescription(input)}
          style={styles.textInput}/>
        </View>

      )}/>


        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>ذخیره</Text>
        </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    );
}
export default DiseaseRecords;