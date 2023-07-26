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

  const [isSelected, setSelection] = useState(false);

    return(
        <SafeAreaView>
        <Text  style={styles.textInfo}>فعالیت های اجتماعی شامل فعالیت هایی مانند ارتباط و پیاده روی با دوستان، ارتباطات خانوداگی، مهمانی و مسافرت، تفریحات دسته جمعی، انجام کاهای هنری و انجام کارهای معنوی می باشد.</Text>
        
          {socialData.map((item)=>{
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

export default Social;