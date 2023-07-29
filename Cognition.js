import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';

const Cognition = ({navigation})=>{
  const id = useSelector(state=> state.places.Id);
  const [cognitionData,setCognitionData]= useState([]);

  const LoadACognitionDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetACognitions/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! ACognitionData received with id in : \n"+JSON.stringify(json));
    setCognitionData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadACognitionDataFromServer(); 
      
   },[]);

   const [reading, setReading] = useState(false)
   const [watching, setWatching] = useState(false)
   const [quiz, setQuiz] = useState(false)
   const [game, setGame] = useState(false)
   const [other, setOther] = useState(false)
   const [discription,setDiscription]=useState('');

   var sendData={
    reading: reading,
    watching : watching,
    quiz: quiz,
    game: game,
    other: other,
    discription: discription,
    Pid: id,}

    const SendCognitionDataToServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/PostCognitionActivityRecord/" , {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(sendData)
      })
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! Cognition Data Sent : \n"+JSON.stringify(json));
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}

  const SendToServer=()=>{
    SendCognitionDataToServer();
    Alert.alert('اطلاعات ارسال شد!', "اطلاعات امروز ارسال شد");
  }

    const [isSelected, setSelection] = useState(false);
    
    return(
        <SafeAreaView>
          <ScrollView>
<View style={{padding:10 ,}}>
<Text  style={styles.textInfo}>فعالیت های شناختی شامل فعالیت هایی جهت تحریک عملکردهای شناختی مانند حل جدول، خواندن کتاب، خواندن روزنامه، حل مسئله و.. می باشد.
</Text>

{cognitionData.map((item)=>{
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
                    <Text  style={styles.textLevel}>{item.SocialDescription}</Text>
                  </View>
                )
               })}

<View style={styles.ProfileView}>
        <View style={{flexDirection:'row', }} >
            <CheckBox
              disabled={false}
              value={reading}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setReading(newValue)}
            /> 
            <Text style={styles.textLevel}>خواندن کتاب، مجله، روزنامه</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={watching}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setWatching(newValue)}
            /> 
            <Text style={styles.textLevel}>پیگیری اخبار در شبکه های اجتماعی</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={quiz}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setQuiz(newValue)}
            /> 
            <Text style={styles.textLevel}>انجام بازی</Text>
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

export default Cognition;