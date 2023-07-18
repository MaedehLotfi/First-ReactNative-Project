import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import styles from './Sty';
const MedicationRecords= ()=>{
    return(
        <SafeAreaView>
        <Text>MedicationRecords</Text>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>ذخیره</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}
export default MedicationRecords;