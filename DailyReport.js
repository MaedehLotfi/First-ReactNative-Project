import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import {gettingData,savingData} from './Utility';
import {useDispatch, useSelector} from 'react-redux';
import {USERINFO, API_ADDRESS, Id} from './constString';
import PushNotification from 'react-native-push-notification';
import CheckBox from '@react-native-community/checkbox';

  const DailyReport = ({navigation})=>{

    const id = useSelector(state=> state.places.Id);
    const [morningDrug, setMorningDrug] = useState(false)
    const [eveningDrug, setEveningDrug] = useState(false)
    const [nightDrug, setNightDrug] = useState(false)
    const [Cognition, setCognition] = useState(false)
    const [physical, setPhysical] = useState(false)
    const [social, setSocial] = useState(false)


    const[weight,setWeight]=useState('');
    const[height,setHeight]=useState('');
    const[bPressure,setBPressure]=useState('');
    const[hBeat,setHBeat]=useState('');
    const[bSugar,setBSugar]=useState('');

        var sendData={
          morningDrug: morningDrug,
          eveningDrug : eveningDrug,
          nightDrug: nightDrug,
          ACognition: Cognition,
          APhysical: physical,
          ASocial: social,
          Weight: weight,
          Height: height,
          bPressure: bPressure,
          hBeat: hBeat,
          bSugar: bSugar,
          iid: id,}

    const SendPhysiologicalDataToServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/PostDailyRecord/" , {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(sendData)
      })
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! Data Sent : \n"+JSON.stringify(json));
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}

  const SendToServer=()=>{
    SendPhysiologicalDataToServer();
    Alert.alert('اطلاعات ارسال شد!',"ارسال شد");
  }

   
      return(

        <SafeAreaView>
<ScrollView>
          <View style={{flexDirection: 'row',alignContent:'center',flexWrap:'wrap',}}>
        <View style={{borderRadius:10, borderWidth:3,borderColor:'pink', margin:5 ,width:'30%', height:60, alignItems:'center',}}>
            <CheckBox
              disabled={false}
              value={morningDrug}
              onValueChange={(newValue) => setMorningDrug(newValue)}
            /> 
            <Text>دارو صبح</Text>
        </View>
        <View style={{borderRadius:10, borderWidth:3,borderColor:'pink', margin:5 ,width:'30%', height:60,alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={eveningDrug}
              onValueChange={(newValue) => setEveningDrug(newValue)}
            /> 
            <Text>دارو عصر</Text>
          </View>

          <View style={{borderRadius:10, borderWidth:3,borderColor:'pink', margin:5 ,width:'30%', height:60,alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={nightDrug}
              onValueChange={(newValue) => setNightDrug(newValue)}
            /> 
            <Text>دارو شب</Text>
            </View>

            <View style={{borderRadius:10, borderWidth:3,borderColor:'green', margin:5 ,width:'30%', height:60,alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={Cognition}
              onValueChange={(newValue) => setCognition(newValue)}
            /> 
            <Text>فعالیت شناختی</Text>
            </View>

            <View style={{borderRadius:10, borderWidth:3,borderColor:'green', margin:5 ,width:'30%', height:60,alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={physical}
              onValueChange={(newValue) => setPhysical(newValue)}
            /> 
            <Text>فعالیت فیزیکی</Text>
            </View>

            <View style={{borderRadius:10, borderWidth:3,borderColor:'green', margin:5 ,width:'30%', height:60,alignItems:'center'}}>
            <CheckBox
              disabled={false}
              value={social}
              onValueChange={(newValue) => setSocial(newValue)}
            /> 
            <Text>فعالیت اجتماعی</Text>
            </View>

  
  </View>
        <Text style={styles.title}>ویژگی های فیزیولوژیکی روزانه</Text>
        {/* Weight */}
        
            <TextInput
            style={styles.textInput}
            placeholder='وزن خود را وارد کنید' 
            value={weight}
            keyboardType='numeric'
            onChangeText={input=> setWeight(input)}/>

        {/* Height */}
        <TextInput
        style={styles.textInput}
        placeholder='قد خود را وارد کنید' 
        value={height}
        keyboardType='numeric'
        onChangeText={input=> setHeight(input)}/>

        {/* bPressure */}
        <TextInput
            style={styles.textInput}
        placeholder='فشار خون خود را وارد کنید' 
        value={bPressure}
        keyboardType='numeric'
        onChangeText={input=> setBPressure(input)}/>

        {/* hBeat */}
        <TextInput
        style={styles.textInput}
        placeholder='ضربان قلب خود را وارد کنید' 
        value={hBeat}
        keyboardType='numeric'
        onChangeText={input=> setHBeat(input)}/>

        {/* bSugar */}
        <TextInput
        style={styles.textInput}
        placeholder='قند خون خود را وارد کنید' 
        value={bSugar}
        keyboardType='numeric'
        onChangeText={input=> setBSugar(input)}/>


  <TouchableOpacity onPress={SendToServer}  style={styles.button} >
    <Text  style={styles.buttonText}>ارسال اطلاعات</Text>
  </TouchableOpacity>
  </ScrollView>
        </SafeAreaView>
      );
  };
  
export default DailyReport;
