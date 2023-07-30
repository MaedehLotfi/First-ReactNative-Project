import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';

const Physical = ({navigation})=>{

  const id = useSelector(state=> state.places.Id);
  const [physicalData,setPhysicalData]= useState([]);

  const LoadAPhysicalDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetAPhysical/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! APhysicalData received with id in : \n"+JSON.stringify(json));
    setPhysicalData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadAPhysicalDataFromServer(); 
      
   },[]);

   const [walking, setWalking] = useState(false)
   const [walkingMore, setWalkingMore] = useState(false)
   const [softness, setSoftness] = useState(false)
   const [running, setRunning] = useState(false)
   const [building, setBuilding] = useState(false)
   const [fitness, setFitness] = useState(false)
   const [exercise, setExercise] = useState(false)
   const [other, setOther] = useState(false)
   const [discription,setDiscription]=useState('');

   var sendData={
    walking: walking,
    walkingMore : walkingMore,
    softness: softness,
    running: running,
    building : building,
    fitness: fitness,
    exercise: exercise,
    other: other,
    discription: discription,
    Pid: id,}

    const SendPhysicalDataToServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/PostPhysicalActivityRecord/" , {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(sendData)
      })
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! Physical Data Sent : \n"+JSON.stringify(json));
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}

  const SendToServer=()=>{
    SendPhysicalDataToServer();
    Alert.alert('اطلاعات امروز ارسال شد!', "اطلاعات فعالیت های فیزیکی ارسال شد");
    setWalking(false);
    setWalkingMore(false);
    setSoftness(false);
    setRunning(false);
    setBuilding (false);
    setFitness(false);
    setExercise(false);
    setOther(false);
    setDiscription("");
  }



    return(
        <SafeAreaView>
<ScrollView>
<View style={{padding:10 ,}}>


<Text  style={styles.textInfo}>فعالیت های فیزیکی شامل فعالیت هایی مانند پیاده روی سریع، انجام فعالیت های هوازی مانند: دو، نرمش، کار با وزنه، آمادگی جسمانی و  فعالیت های ورزشی مانند: دوچرخه سواری، دو، کوهنوردی، تردمیل، بدنسازی، آمادگی جسمانی و... می باشد.</Text>
             
               {physicalData.map((item)=>{
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
                    
                    <Text  style={styles.textLevel}>{item.PhysicalDescription}</Text>
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
            <Text style={styles.textLevel}>پیاده روی روزانه 45 دقیقه</Text>
        </View>
        <View style={{flexDirection:'row', }} >
            <CheckBox
              disabled={false}
              value={walkingMore}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setWalkingMore(newValue)}
            /> 
            <Text style={styles.textLevel}>پیاده روی روزانه بیشتر از 45 دقیقه</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={softness}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setSoftness(newValue)}
            /> 
            <Text style={styles.textLevel}>نرمش و حرکات کششی</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={running}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setRunning(newValue)}
            /> 
            <Text style={styles.textLevel}>پیاده روی سریع و یا دو آهسته</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={building}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setBuilding(newValue)}
            /> 
            <Text style={styles.textLevel}>بدنسازی و کار با وزنه</Text>
        </View>
        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={fitness}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setFitness(newValue)}
            /> 
            <Text style={styles.textLevel}>آمادگی جسمانی</Text>
        </View>

        <View style={{flexDirection:'row'}} >
            <CheckBox
              disabled={false}
              value={exercise}
              tintColors={{ true: '#00008B', false: '#191970' }}
              onValueChange={(newValue) => setExercise(newValue)}
            /> 
            <Text style={styles.textLevel}>فعالیت ورزشی(دوچرخه سواری،دو تردمیل و کوهنوردی...)</Text>
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

export default Physical;