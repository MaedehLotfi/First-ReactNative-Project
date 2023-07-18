import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {gettingData,savingData} from './Utility';
import {useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';


  const Login = ({navigation})=>{

    const api_address = useSelector(state=> state.places.api_address);

    const GettingData= async()=>{
      const result= await gettingData('isLogin');
      console.log("*****LoginInfo: "+result);
      if (result != null && result== 'true'){
        navigation.navigate('HomeScreen');
      }
    } 
    useEffect(()=>{GettingData},[]);

    const [apiData,setApiData]= useState([]);

  const LoadFromServer= async()=>{
    fetch(api_address)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n all data received in firstpage: \n"+JSON.stringify(json));
    setApiData(json); })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

  useEffect(()=>{
    LoadFromServer(); 
 },[]);

    const [user,setUser] = useState();
    const [pass,setPass] = useState();
    
  
    const dispatch = useDispatch();
    const LoginInfo =()=>{
      if(
        apiData.map((item)=>{
      if (user===item.userName && pass===item.password){
        var id = item.id;
        console.log ("\n \n got id for specidic user => "+ item.id)
        dispatch({
          type: Id,
          payload : id,
        })
        
      
      savingData('isLogin','true');
      navigation.navigate('HomeScreen');
      }  
      })
      ){null}
      else {Alert.alert('خطا!',"نام کاربری یا رمزعبور اشتباه وارد شده است!");}
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
