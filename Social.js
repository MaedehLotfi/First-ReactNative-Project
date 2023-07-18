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
          
          {socialData.map((item)=>{
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

                    
                    <Text>توضیحات: {item.SocialDescription}</Text>
                  </View>
                )
               })}

            

        </SafeAreaView>
  );
};

export default Social;