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

//    for (let key of physicalData) {
//     if(key=6){ console.log('value true is '+key);}
   
// }

  const [isSelected, setSelection] = useState(false);

    return(
        <SafeAreaView>

<Text  style={styles.textInfo}>فعالیت های فیزیکی شامل فعالیت هایی مانند پیاده روی سریع، انجام فعالیت های هوازی مانند: دو، نرمش، کار با وزنه، آمادگی جسمانی و  فعالیت های ورزشی مانند: دوچرخه سواری، دو، کوهنوردی، تردمیل، بدنسازی، آمادگی جسمانی و... می باشد.</Text>
             
               {physicalData.map((item)=>{
                return(
                  <View style={{ marginTop:10}}>
                    
                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'red', false: 'red' }} value={item.Level1}/>
                    <Text style={styles.textLevel}>سطح یک</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'orange', false: 'orange' }} value={item.Level2}/>
                    <Text  style={styles.textLevel}>سطح دو</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'yellow', false: 'yellow' }} value={item.Level3}/>
                    <Text  style={styles.textLevel}>سطح سه</Text>
                  </View>

                  <View style={styles.levelView}>
                    <CheckBox disabled={false} tintColors={{ true: 'green', false: 'green' }} value={item.Level4}/>
                    <Text style={styles.textLevel}>سطح چهار</Text>
                  </View>
                    
                    
                    <Text  style={styles.textLevel}>توضیحات دکتر معالج: {item.PhysicalDescription}</Text>
                  </View>
                )
               })}


            

        </SafeAreaView>
  );
};

export default Physical;