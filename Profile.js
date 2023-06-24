
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
import {gettingData,savingData} from './Utility';

const Profile = ({navigation})=>{

  const Logout= async()=>{
    const result= await gettingData('isLogin');
    console.log("*****LoginInfo: "+result);
    if (result != null && result== 'true'){
      navigation.navigate('Login');
      

    }
  } 

  return(
   
    <SafeAreaView>
      <View style={styles.ProfileView}>
      <Text style={styles.title}>نمایش اطلاعات کاربری</Text>
      <FlatList
      data={[{"name":"Maedeh Lotfi", "age":26, "gender":"زن", "nNum":2080000000}]}
      keyExtractor={(item)=>item.name}
      renderItem={({item})=>(
        <>
        <Text>نام و نام خانوادگی: {item.name}</Text>
        <Text>سن: {item.age}</Text>
        <Text>جنسیت: {item.gender}</Text>
        <Text>شماره ملی/پسورد: {item.nNum}</Text>
        </>
      )}/>
      </View>


      <View style={styles.ProfileView}>
      <Text style={styles.title}>سوابق بیماری</Text>
      <FlatList
      data={['عدم توانایی حرکت','بیماری روانی']}
      keyExtractor={(item, index)=>index}
      renderItem={({item,index})=>(
        <>
        <Text>{item}</Text>
        </>
      )}/>
      </View>

      

      <View style={styles.ProfileView}>
      <Text style={styles.title}>سوابق مصرف دارو</Text>
      <FlatList
      data={["سرماخوردگی","استامنفین"]}
      keyExtractor={(item, index)=>index}
      renderItem={({item,index})=>(
        <>
        <Text>{item}</Text>
        </>
      )}/>
 
</View>

<View style={styles.ProfileView}>
      <Text style={styles.title}>محدودیت های بیمار</Text>
      <FlatList
      data={['عدم توانایی حرکت']}
      keyExtractor={(item, index)=>index}
      renderItem={({item,index})=>(
        <>
        <Text>{item}</Text>
        </>
      )}/>
      </View>
      
      <TouchableOpacity onPress={Logout} style={styles.button}>
        <Text style={styles.buttonText}>خروج</Text>
      </TouchableOpacity>

    </SafeAreaView>
    
  
  );
}


export default Profile;
