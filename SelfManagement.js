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

   
   const [drug, setDrug] = useState(false)
   const [reports, setReports] = useState(false)
   const [reminders, setReminders] = useState(false)
   const [daily, setDaily] = useState(false)
   const [shopping, setShopping] = useState(false)
   const [other, setOther] = useState(false)
   const [discription,setDiscription]=useState('');

   var sendData={
    drug: drug,
    reports : reports,
    reminders: reminders,
    daily: daily,
    shopping: shopping,
    other: other,
    discription: discription,
    Pid: id,}

    const SendCSelfDataToServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/PostSelfManagementActivityRecord/" , {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(sendData)
      })
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! Self Data Sent : \n"+JSON.stringify(json));
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}

  const SendToServer=()=>{
    SendCSelfDataToServer();
    Alert.alert('اطلاعات امروز ارسال شد!', "اطلاعات فعالیت های خودمدیریتی ارسال شد");
    setDrug(false);
    setReports(false);
    setReminders(false);
    setDaily(false);
    setShopping(false);
    setOther(false);
    setDiscription("");
  }

    return(
        <SafeAreaView>
          <ScrollView>
 <View style={{padding:10 ,}}>
        <Text  style={styles.textInfo}>دکتر معالج با توجه به اطلاعات ارسال شده توسط شما در گزارش روزانه یک سطح به شما اختصاص می دهد.</Text>
        {selfManagementData.map((item)=>{
                return(
                  
                  <View style={{ marginTop:10, marginBottom:10}}>
                    
                  {/* <View style={styles.levelView}>
                    <CheckBox disabled={true} tintColors={{ true: 'red', false: 'red' }} value={item.Level1}/>
                    <Text style={styles.textLevel}>سطح یک</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={true} tintColors={{ true: 'orange', false: 'orange' }} value={item.Level2}/>
                    <Text  style={styles.textLevel}>سطح دو</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={true} tintColors={{ true: 'yellow', false: 'yellow' }} value={item.Level3}/>
                    <Text  style={styles.textLevel}>سطح سه</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={true} tintColors={{ true: 'green', false: 'green' }} value={item.Level4}/>
                    <Text style={styles.textLevel}>سطح چهار</Text>
                  </View> */}
                    
                    <Text style={styles.textInfo}>توضیحات دکتر معالج برای شما: </Text>
                    
                    <Text  style={styles.textLevel}>{item.SelfManagementDescription}</Text>
                  </View>
                )
               })}
<View style={styles.ProfileView}>
        <View style={{flexDirection:'row', }} >
            <CheckBox
              disabled={false}
              value={drug}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setDrug(newValue)}
            /> 
            <Text style={styles.textLevel}>مصرف دارو بصورت منظم</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={reports}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setReports(newValue)}
            /> 
            <Text style={styles.textLevel}>ثبت علائم و گزارشات</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={reminders}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setReminders(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام یادآورها</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={daily}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setDaily(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام کارهای روزمره</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={shopping}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setShopping(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام خرید</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={other}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setOther(newValue)}
            /> 
            <Text style={styles.textLevel}>سایر</Text>
        </View>

        <TextInput
            style={styles.discriptionTextInput}
            placeholder="توضیحات" 
            value={discription}
            onChangeText={input=> setDiscription(input)}/>

        <TouchableOpacity onPress={SendToServer}  style={styles.button} >
          <Text  style={styles.buttonText}>ارسال اطلاعات</Text>
        </TouchableOpacity>

        </View>

</View>
</ScrollView>
        </SafeAreaView>
  );
};

export default SelfManagement;

