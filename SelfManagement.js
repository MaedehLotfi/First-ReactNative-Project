import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
import Icon from 'react-native-vector-icons/EvilIcons';
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
 
        <Text>در اینجا دکتر معالج با توجه به اطلاعات ارسال شده توسط شما یک سطح به شما اختصاص میدهد</Text>
        {selfManagementData.map((item)=>{
                return(
                  
                  <View style={{direction:'rtl',}}>
                    
                    <Text>سطح یک :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level1}/>
                    </Text>

                    <Text>سطح دو :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level2}/>
                    </Text>

                    <Text>سطح سه :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level3}/>
                    </Text>

                    <Text>سطح چهار :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level4}/>
                    </Text>

                    
                    <Text>توضیحات: {item.SelfManagementDescription}</Text>
                  </View>
                )
               })}

        </SafeAreaView>
  );
};

export default SelfManagement;

