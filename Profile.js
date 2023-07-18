
import React, { useState, useEffect } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import styles from './Sty';
import DiseaseRecords from './DiseaseRecords';
import MedicationRecords from './MedicationRecords';
import PatientLimitations from './PatientLimitations';

import {gettingData,savingData} from './Utility';
import {useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';
import CheckBox from '@react-native-community/checkbox';


const Profile = ({navigation})=>{
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [apiSpecificData,setApiSpecificData]= useState([]);
  const [diseaseRecordData,setDiseaseRecordData]= useState([]);
  const [medicationRecordData,setMedicationRecordData]= useState([]);
  const [patientLimitationData,setPatientLimitationData]= useState([]);

  const dispatch = useDispatch();
  const id = useSelector(state=> state.places.Id);
  const api_address = useSelector(state=> state.places.api_address);

  const LoadFromServer= async()=>{
    fetch(api_address+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! data received with id in Profile page : \n"+JSON.stringify(json));
    setApiSpecificData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadFromServer(); 
      LoadDiseaseRecordFromServer(); 
      LoadpatientLimitationsFromServer();
      LoadMedicationRecordFromServer();
   },[]);

  

    const LoadDiseaseRecordFromServer= async()=>{
        fetch("http://moshavermoslemi.ir/api/App/GetDiseaseRecord/"+id)
        .then((response)=>response.json())
        .then((json)=>{
        console.log("\n\n!!!!!!!!! DiseaseRecords received with id : \n"+JSON.stringify(json));
        setDiseaseRecordData(json);
    })
        .catch((error)=>{
        console.log("Error:", error);
        })
        .finally(()=>{});}
        
      const LoadpatientLimitationsFromServer= async()=>{
          fetch("http://moshavermoslemi.ir/api/App/GetPatientlimitation/"+id)
          .then((response)=>response.json())
          .then((json)=>{
          console.log("\n\n!!!!!!!!! patientLimitation received with id : \n"+JSON.stringify(json));
          setPatientLimitationData(json);
      })
          .catch((error)=>{
          console.log("Error:", error);
          })
          .finally(()=>{});}

 
const LoadMedicationRecordFromServer= async()=>{
        fetch("http://moshavermoslemi.ir/api/App/GetMedicationRecord/"+id)
        .then((response)=>response.json())
        .then((json)=>{
        console.log("\n\n!!!!!!!!! MedicationRecord received with id : \n"+JSON.stringify(json));
        setMedicationRecordData(json);
    })
        .catch((error)=>{
        console.log("Error:", error);
        })
        .finally(()=>{});}

  const Logout= async()=>{
    const result= await gettingData('isLogin');
    console.log("*****for logout it should be true=> LoginInfo: "+result);
    if (result != null && result== 'true'){
      navigation.navigate('Login');
      
    }
  } 
  

  return(
   
    <SafeAreaView style={{direction:'rtl'}}>
      <ScrollView>
      <View style={styles.ProfileView}>
      <Text style={styles.title}>نمایش اطلاعات کاربری</Text>
      <FlatList
      data={apiSpecificData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <>
        <Text style={styles.textLevel}>شماره پرونده: {item.id}</Text>
        <Text style={styles.textLevel}>نام و نام خانوادگی: {item.FullName}</Text>
        <Text style={styles.textLevel}>شماره ملی: {item.NationalCode}</Text>
        <Text style={styles.textLevel}>جنسیت: {item.gender}</Text>
        <Text  style={styles.textLevel}>سن: {item.age}</Text>
        </>
      )}/>

      </View>


      <View style={styles.ProfileView}>
      <Text style={styles.title}>سوابق بیماری</Text>
      <FlatList
      data={diseaseRecordData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <>
        <Text  style={styles.textLevel}>نام بیماری : {item.DiseaseTitle}</Text>
        <Text  style={styles.textLevel}>توضیحات بیماری : {item.DiseaseDescription}</Text>
        </>
      )}/>
      
      </View>

      

      <View style={styles.ProfileView}>
      <Text style={styles.title}>سوابق مصرف دارو</Text>
      <FlatList
      data={medicationRecordData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <>
        <Text  style={styles.textLevel}>نام دارو : {item.MedicationTitle}</Text>
        <Text  style={styles.textLevel}>توضیحات مصرف دارو : {item.MedicationDescription}</Text>
        </>
      )}/>

      

</View>

<View style={styles.ProfileView}>
      <Text style={styles.title}>محدودیت های بیمار</Text>
      <FlatList
      data={patientLimitationData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <>
        <View style={{flexDirection:'row'}}>
          <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'black', false: 'black' }} value={item.movementRestriction}/>
                    <Text style={styles.textLevel} >حرکتی</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'black', false: 'black' }} value={item.physicalRestriction}/>
                    <Text  style={styles.textLevel} >جسمی</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'black', false: 'black' }} value={item.foodRestriction}/>
                    <Text style={styles.textLevel} >غذایی</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'black', false: 'black' }} value={item.otherRestriction}/>
                    <Text  style={styles.textLevel}>سایر محدودیتها</Text>
                  </View>

                  </View>
        <Text  style={styles.textLevel}> توضیح محدودیت : {item.limitationDescription}</Text>
        
        </>
      )}/>






      {/* <View  style={styles.editView}>
      <TouchableOpacity onPress={()=>{navigation.navigate("PatientLimitations")}}>
        <Text style={styles.editText}>ویرایش</Text>
      </TouchableOpacity>
      </View> */}
      </View>
      
      <TouchableOpacity onPress={Logout} style={styles.button}>
        <Text style={styles.buttonText}>خروج</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    
  
  );
}


export default Profile;
