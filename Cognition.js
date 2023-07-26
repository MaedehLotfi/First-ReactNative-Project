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


    const [isSelected, setSelection] = useState(false);
    
    return(
        <SafeAreaView>

<Text  style={styles.textInfo}>فعالیت های شناختی شامل فعالیت هایی جهت تحریک عملکردهای شناختی مانند حل جدول، خواندن کتاب، خواندن روزنامه، حل مسئله و.. می باشد.
</Text>

{cognitionData.map((item)=>{
                return(
                  <View style={{ marginTop:10}}>
                    
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
                  </View>
                    
                    
                    <Text  style={styles.textLevel}>توضیحات دکتر معالج: {item.SocialDescription}</Text>
                  </View>
                )
               })}




        </SafeAreaView>
  );
};

export default Cognition;