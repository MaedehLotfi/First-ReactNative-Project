import React, { useState, useEffect } from 'react';
import {
  Alert,FlatList,SafeAreaView,ScrollView,
  StatusBar,StyleSheet,Text,TextInput,
  TouchableOpacity,useColorScheme,View,Image, ImageBackground,
} from 'react-native';
import PhysiologicalData from './PhysiologicalData';
import Drugs from './Drugs';
import SelfManagement from './SelfManagement';
import Social from './Social';
import styles from './Sty';
import Physical from './Physical'
import Cognition from './Cognition';
import DailyReport from './DailyReport';
const Home = ({navigation})=>{
  return(
    <SafeAreaView >
      <TouchableOpacity onPress={()=>{navigation.navigate("DailyReport")}} style={styles.homeItemDaily}>
        <Text style={styles.homeTouchable}>گزارش روزانه</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Drugs")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>بخش داروها</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>{navigation.navigate("PhysiologicalData")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>ویژگی های فیزیولوژیکی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Cognition")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>فعالیت های شناختی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Physical")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>فعالیت های فیزیکی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Social")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>فعالیت های اجتماعی</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("SelfManagement")}} style={styles.homeItem}>
        <Text style={styles.homeTouchable}>فعالیت های خودمدیریتی</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  
  );
}


export default Home;

