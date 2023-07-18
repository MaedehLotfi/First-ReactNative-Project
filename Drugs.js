import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
import {useDispatch, useSelector} from 'react-redux';

const Drugs = ({navigation})=>{
  const id = useSelector(state=> state.places.Id);
  const [drugData,setDrugData]= useState([]);

  const LoadDrugDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetDrugs/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! DrugData received with id in : \n"+JSON.stringify(json));
    setDrugData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadDrugDataFromServer(); 
      
   },[]);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isSelected, setSelection] = useState(false);

    return(
        <SafeAreaView>
                 <Text  style={styles.textInfo}>دارو های تجویز شده توسط دکتر برای شما</Text>

            <FlatList
            data={drugData}
            keyExtractor={item=> item.id} 
            renderItem={({item})=>
                
                <View style={{backgroundColor:'#7e98cc', alignItems:'center', padding:10,borderRadius:20, margin:20}}>
                <Text style={styles.textLevel}>نام دارو: {item.drugName}</Text>

                
                <Text  style={styles.textLevel}>دوز دارو: {item.drugDosage}</Text>
                <Text style={styles.textLevel}>نام بیماری: {item.diseaseName}</Text>
                <Text style={styles.textLevel}>نحوه مصرف: {item.usingDescription}</Text>

                </View>
                

            }/>
            
            
            

      
      

        </SafeAreaView>
  );
};

export default Drugs;