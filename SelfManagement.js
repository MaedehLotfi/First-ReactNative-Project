import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';

import {gettingData,savingData} from './Utility';
import Fonts from './Font';
import {useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';

const SelfManagement = ({navigation})=>{

  const id = useSelector(state=> state.places.Id);
  const [selfManagementData,setSelfManagementData]= useState([]);

  const LoadSelfManagementDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetASelfManagement/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! SelfManagement received with id in : \n"+JSON.stringify(json));
    setSelfManagementData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadSelfManagementDataFromServer(); 
      
   },[]);
    return(
        <SafeAreaView>
 
        <Text  style={styles.textInfo}>دکتر معالج با توجه به اطلاعات ارسال شده توسط شما در گزارش روزانه یک سطح به شما اختصاص می دهد.</Text>
        {selfManagementData.map((item)=>{
                return(
                  
                  <View style={{ marginTop:10}}>
                    
                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'red', false: 'red' }} value={item.Level1}/>
                    <Text style={styles.textLevel}>سطح یک</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'orange', false: 'orange' }} value={item.Level2}/>
                    <Text  style={styles.textLevel}>سطح دو</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'yellow', false: 'yellow' }} value={item.Level3}/>
                    <Text  style={styles.textLevel}>سطح سه</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'green', false: 'green' }} value={item.Level4}/>
                    <Text style={styles.textLevel}>سطح چهار</Text>
                  </View>
                    
                    
                    <Text  style={styles.textLevel}>توضیحات دکتر معالج: {item.SelfManagementDescription}</Text>
                  </View>
                )
               })}

        </SafeAreaView>
  );
};

export default SelfManagement;

