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

             
               {physicalData.map((item)=>{
                return(
                  
                  <View style={{direction:'rtl',}}>
                    
                    <Text>سطح یک :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level1}/>
                    </Text>

                    <Text>سطح دو :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level2}/>
                    </Text>

                    <Text>سطح سه :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level3}/>
                    </Text>

                    <Text>سطح چهار :
                      <CheckBox disabled={false} tintColors={{ true: 'blue', false: 'black' }} value={item.Level4}/>
                    </Text>

                    
                    <Text>توضیحات: {item.PhysicalDescription}</Text>
                  </View>
                )
               })}


            

        </SafeAreaView>
  );
};

export default Physical;