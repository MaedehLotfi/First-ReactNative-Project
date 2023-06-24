import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
import SQLite from 'react-native-sqlite-storage';

const PhysiologicalData = ({navigation})=>{

  
const db= SQLite.openDatabase(
    {name:"myDataBase.db",
  location:"default",}
  ,()=>{console.log("Successful Opening DataBase:");},
  error=>{
    console.log("Error Opening DataBase:"+ error);
  },
  );
    const[weight,setWeight]=useState('');
    const[height,setHeight]=useState('');
    const[bPressure,setBPressure]=useState('');
    const[hBeat,setHBeat]=useState('');
    const[bSugar,setBSugar]=useState('');

    const[items,setItems]= useState([]);
  

    //create database
    useEffect(()=>{
        db.transaction(tx=>{
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY AUTOINCREMENT , weight INTEGER, height INTEGER, bPressure INTEGER, hBeat INTEGER, bSugar INTEGER)'
            ,[]
          );
        });
    fetchItems();
      },[]);

      const addItem= ()=>{
        console.log("Clicked on add item button");
        db.transaction(tx=>{
          tx.executeSql("INSERT INTO items (weight, height, bPressure, hBeat, bSugar) VALUES (?,?,?,?,?)",[weight,height,bPressure,hBeat,bSugar]);
        });
        setWeight("");
        setHeight("");
        setBPressure("");
        setHBeat("");
        setBSugar("");
      }
      
      const fetchItems=()=>{
        db.transaction(tx=>{
          tx.executeSql("SELECT * FROM items",[], (trans, results)=>{
            console.log("selected items**** "+results);
            var len = results.rows.length;
            var dt=[];
            for(let i =0; i<len; i++){
              let row = results.rows.item(i);
              console.log(row.id+"***"+row.value);
              dt.push({id:row.id, weight:row.weight, height:row.height, bPressure:row.bPressure, hBeat:row.hBeat, bSugar:row.bSugar});
            }
            setItems(dt);
    
          }
          , (error)=>{
            console.log("execute error"+ JSON.stringify(error));
          }
          )
        })
      }


    return(
        
        <SafeAreaView style={{flex:1, padding:20}}>
        <Text style={styles.title}>ویژگی های فیزیولوژیکی</Text>
        {/* Weight */}
            <TextInput
            style={styles.textInput}
            placeholder='وزن خود را وارد کنید' 
            value={weight}
            keyboardType='numeric'
            onChangeText={input=> setWeight(input)}/>

        {/* Height */}
        <TextInput
        style={styles.textInput}
        placeholder='قد خود را وارد کنید' 
        value={height}
        keyboardType='numeric'
        onChangeText={input=> setHeight(input)}/>

        {/* bPressure */}
        <TextInput
            style={styles.textInput}
        placeholder='فشار خون خود را وارد کنید' 
        value={bPressure}
        keyboardType='numeric'
        onChangeText={input=> setBPressure(input)}/>

        {/* hBeat */}
        <TextInput
        style={styles.textInput}
        placeholder='ضربان قلب خود را وارد کنید' 
        value={hBeat}
        keyboardType='numeric'
        onChangeText={input=> setHBeat(input)}/>

        {/* bSugar */}
        <TextInput
        style={styles.textInput}
        placeholder='قند خون خود را وارد کنید' 
        value={bSugar}
        keyboardType='numeric'
        onChangeText={input=> setBSugar(input)}/>

  <TouchableOpacity onPress={addItem}  style={styles.button} >
    <Text  style={styles.buttonText}>ذخیره</Text>
  </TouchableOpacity>

  <FlatList
  data={items}
  keyExtractor={item=> item.id.toString()}
  renderItem={({item})=>(
    <>
    <Text>وزن: {item.weight}</Text>
    <Text>قد: {item.height}</Text>
    <Text>فشارخون: {item.bPressure}</Text>
    <Text>ضربان قلب: {item.hBeat}</Text>
    <Text>قند خون: {item.bSugar}</Text>
    </>
  )}
  />

</SafeAreaView>
    );
}
export default PhysiologicalData;