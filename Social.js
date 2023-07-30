import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';

const Social = ({navigation})=>{

  const id = useSelector(state=> state.places.Id);
  const [socialData,setSocialData]= useState([]);

  const LoadASocialDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetASocials/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! SocialData received with id in : \n"+JSON.stringify(json));
    setSocialData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadASocialDataFromServer(); 
      
   },[]);

   const [walking, setWalking] = useState(false)
   const [party, setParty] = useState(false)
   const [picnic, setPicnic] = useState(false)
   const [outsideCity, setOutsideCity] = useState(false)
   const [groupActivity, setGroupActivity] = useState(false)
   const [helping, setHelping] = useState(false)
   const [pray, setPray] = useState(false)
   const [art, setArt] = useState(false)
   const [travel, setTravel] = useState(false)
   const [family, setFamily] = useState(false)
   const [other, setOther] = useState(false)
   const [discription,setDiscription]=useState('');

   var sendData={
    walking: walking,
    party : party,
    picnic: picnic,
    outsideCity: outsideCity,
    groupActivity : groupActivity,
    helping: helping,
    pray: pray,
    art : art,
    travel: travel,
    family: family,
    other: other,
    discription: discription,
    Pid: id,}

    const SendSocialDataToServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/PostSocialActivityRecord/" , {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(sendData)
      })
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! Social Data Sent : \n"+JSON.stringify(json));
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}

  const SendToServer=()=>{
    SendSocialDataToServer();
    Alert.alert('اطلاعات امروز ارسال شد!', "اطلاعات فعالیت های اجتماعی ارسال شد");
    setWalking(false);
    setParty (false);
    setPicnic(false);
    setOutsideCity(false);
    setGroupActivity(false);
    setHelping(false);
    setPray(false);
    setArt (false);
    setTravel(false);
    setFamily(false);
    setOther(false);
    setDiscription("");
  }
  

    return(
        <SafeAreaView>
          <ScrollView>
<View style={{padding:10 ,}}>

        <Text  style={styles.textInfo}>فعالیت های اجتماعی شامل فعالیت هایی مانند ارتباط و پیاده روی با دوستان، ارتباطات خانوداگی، مهمانی و مسافرت، تفریحات دسته جمعی، انجام کاهای هنری و انجام کارهای معنوی می باشد.</Text>
        
          {socialData.map((item)=>{
                return(
                  
                  <View style={{ marginTop:10, marginBottom:10}}>
{/*                     
                  <View style={styles.levelView}>
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

                    <Text  style={styles.textLevel}>{item.SocialDescription}</Text>
                  </View>
                )
               })}

<View style={styles.ProfileView}>
        <View style={{flexDirection:'row', }} >
            <CheckBox
              disabled={false}
              value={walking}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setWalking(newValue)}
            /> 
            <Text style={styles.textLevel}>پیاده روی با دوستان</Text>
        </View>
        <View style={{flexDirection:'row', }} >
            <CheckBox
              disabled={false}
              value={party}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setParty(newValue)}
            /> 
            <Text style={styles.textLevel}>مهمانی و دورهمی</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={picnic}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setPicnic(newValue)}
            /> 
            <Text style={styles.textLevel}>پیک نیک رفتن</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={outsideCity}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setOutsideCity(newValue)}
            /> 
            <Text style={styles.textLevel}>گردش در بیرون شهر</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={groupActivity}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setGroupActivity(newValue)}
            /> 
            <Text style={styles.textLevel}>تفریحات دسته جمعی</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={helping}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setHelping(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام فعالیت های معنوی به جماعت</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={pray}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setPray(newValue)}
            /> 
            <Text style={styles.textLevel}>شرکت در مراسم های مذهبی</Text>
        </View>


        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={art}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setArt(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام کارهای هنری مثل موسیقی، نقاشی، کاردستی و ...</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={travel}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setTravel(newValue)}
            /> 
            <Text style={styles.textLevel}>مسافرت</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={family}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setFamily(newValue)}
            /> 
            <Text style={styles.textLevel}>ارتباطات خانوادگی</Text>
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

export default Social;