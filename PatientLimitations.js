import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';



const PatientLimitations= ()=>{
    const [apiSpecificData,setApiSpecificData]= useState([]);
    const dispatch = useDispatch();
    const id = useSelector(state=> state.places.Id);
    const api_address = useSelector(state=> state.places.api_address);
        
    const LoadFromServer= async()=>{
        fetch(api_address+id)
        .then((response)=>response.json())
        .then((json)=>{
        console.log("\n\n!!!!!!!!! data received with id in plimitation page : \n"+JSON.stringify(json));
        setApiSpecificData(json);
    })
        .catch((error)=>{
        console.log("Error:", error);
        })
        .finally(()=>{});}

        useEffect(()=>{
        LoadFromServer(); 
    },[]);
    
    apiSpecificData.map((item)=>{
        

    })


    return(
        <SafeAreaView>
        <Text>PatientLimitations</Text>


        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>ذخیره</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}
export default PatientLimitations;