import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './sty';

const App = ()=>{

  const [user,setUser] = useState();
  const [pass,setPass] = useState();

  const LoginInfo =()=>{
    if (user==='admin' && pass==='123'){
      savingData('isLogin','true');
      navigation.navigate('HomeScreen');
    }
    else{
      Alert.alert('خطا!',"نام کاربری یا رمز عبور اشتباه می باشد!");
    }
   }
  return(
    <SafeAreaView style={styles.main}>

        <TextInput placeholder='نام کاربری'
        value={user}
        onChangeText={input => setUser(input)}
        style={styles.textInput}/>
  
        <TextInput placeholder='رمز عبور'
        keyboardType='password'
        value={pass}
        secureTextEntry={true}
        onChangeText={input => setPass(input)}
        style={styles.textInput}/>
  
        <TouchableOpacity onPress={LoginInfo} style={styles.button}>
        <Text style={styles.buttonText} >ورود</Text>
        </TouchableOpacity>
        
      </SafeAreaView>
  )
}


export default App;
