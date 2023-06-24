import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {gettingData,savingData} from './Utility';

  const Login = ({navigation})=>{

  

    const GettingData= async()=>{
      const result= await gettingData('isLogin');
      console.log("*****LoginInfo: "+result);
      if (result != null && result== 'true'){
        navigation.navigate('HomeScreen');
      }
    } 
    useEffect(()=>{GettingData},[]);

    
    const [user,setUser] = useState();
    const [pass,setPass] = useState();

    const LoginInfo =()=>{
    if (user==='admin' && pass==='123'){
      savingData('isLogin','true');
      navigation.navigate('HomeScreen');}
    else{
      Alert.alert('خطا!',"نام کاربری یا رمزعبور اشتباه وارد شده است!");}
    }
     
      return(

        <SafeAreaView style={styles.main}>
          <TextInput placeholder='نام کاربری'
          value={user}
          onChangeText={input => setUser(input)}
          style={styles.textInput}/>
  
          <TextInput placeholder='رمزعبور'
          value={pass}
          secureTextEntry={true}
          onChangeText={input => setPass(input)}
          style={styles.textInput}/>
      
          <TouchableOpacity onPress={LoginInfo} style={styles.button}>
            <Text style={styles.buttonText} >ورود</Text>
          </TouchableOpacity>
           
        </SafeAreaView>
      );
  };
  
export default Login;
