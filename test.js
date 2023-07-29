import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';


const Test = ()=>{
    const [selfManagementData,setSelfManagementData]= useState([]);

  const LoadSelfManagementDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetASelfManagement/"+1)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! SelfManagement received  : \n"+JSON.stringify(json));
    setSelfManagementData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    useEffect(()=>{
      LoadSelfManagementDataFromServer(); 
      LoadACognitionDataFromServer(); 
      LoadASocialDataFromServer();
      LoadAPhysicalDataFromServer();
   },[]);
   const [socialData,setSocialData]= useState([]);

   const LoadASocialDataFromServer= async()=>{
     fetch("http://moshavermoslemi.ir/api/App/GetASocials/"+1)
     .then((response)=>response.json())
     .then((json)=>{
     console.log("\n\n!!!!!!!!! SocialData received with id in : \n"+JSON.stringify(json));
     setSocialData(json);
    })
     .catch((error)=>{
       console.log("Error:", error);
     })
     .finally(()=>{});}
 
     

    const [physicalData,setPhysicalData]= useState([]);

    const LoadAPhysicalDataFromServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/GetAPhysical/"+1)
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! APhysicalData received with id in : \n"+JSON.stringify(json));
      setPhysicalData(json);
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}
  
     

     const [cognitionData,setCognitionData]= useState([]);

     const LoadACognitionDataFromServer= async()=>{
       fetch("http://moshavermoslemi.ir/api/App/GetACognitions/"+1)
       .then((response)=>response.json())
       .then((json)=>{
       console.log("\n\n!!!!!!!!! ACognitionData received with id in : \n"+JSON.stringify(json));
       setCognitionData(json);
      })
       .catch((error)=>{
         console.log("Error:", error);
       })
       .finally(()=>{});}
   
       
    return(
<View>
<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, backgroundColor:'gray'}}><Text style={{textAlign:'center',}}>X</Text></View>
<View style={{width:50,height:50, margin:10, backgroundColor:'yellow'}}><Text style={{textAlign:'center',}}>1</Text></View>
<View style={{width:50,height:50, margin:10, borderColor:'orange', borderWidth:1 }}><Text style={{textAlign:'center',}}>2</Text></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}><Text style={{textAlign:'center',}}>3</Text></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}><Text style={{textAlign:'center',}}>4</Text></View>
</View>

    {/* <Text>selfManagementData</Text>
{selfManagementData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
    console.log('Level1,Level2,Level3,Level4 == '+Level1,Level2,Level3,Level4)
if (Level1===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, backgroundColor:'yellow'}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'orange', borderWidth:1 }}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'orange'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, backgroundColor:'red'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'green', borderWidth:1}}></View>
</View>)}

})}

<Text>SocialData</Text>
{socialData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
    console.log('Level1,Level2,Level3,Level4 == '+Level1,Level2,Level3,Level4)
if (Level1===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, backgroundColor:'yellow'}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'orange', borderWidth:1 }}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'orange'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, backgroundColor:'red'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'green',}}></View>
</View>)}

})}

<Text>physicalData</Text>
{physicalData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
    console.log('Level1,Level2,Level3,Level4 == '+Level1,Level2,Level3,Level4)
if (Level1===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, backgroundColor:'yellow'}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'orange', borderWidth:1 }}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'orange'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, backgroundColor:'red'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'green',}}></View>
</View>)}

})}

<Text>cognitionData</Text>
{cognitionData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
    console.log('Level1,Level2,Level3,Level4 == '+Level1,Level2,Level3,Level4)
if (Level1===true){return(<View style={{flexDirection:'row'}}>
    <Text>cognitionData</Text>
<View style={{width:50,height:50, margin:10, backgroundColor:'yellow'}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'orange', borderWidth:1 }}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'orange'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, backgroundColor:'red'}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'green', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(<View style={{flexDirection:'row'}}>
<View style={{width:50,height:50, margin:10, borderColor:'yellow', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  borderColor:'orange', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10, borderColor:'red', borderWidth:1}}></View>
<View style={{width:50,height:50, margin:10,  backgroundColor:'green',}}></View>
</View>)}

})} */}
</View>
    );
}
export default Test;