import React, { useState,useEffect } from 'react';
import {
    View,
    Text,
    Button,
    PermissionsAndroid,
    Image,
    SafeAreaView,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    Alert,
    Linking,
    TouchableOpacity,
  } from 'react-native';

  import Lottie from 'lottie-react-native';
import Navigation from './AppForNav';
import styles from './Sty';

  const Splash = ({navigation}) => {

    
      

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
       setTimeout(() => {
        setShowSplash(false);
         },3000);
    },[]);

    

    if(showSplash){
    return (
        <SafeAreaView style={styles.main}>
        {showSplash ?

        <View style={styles.splashView}>
              <Lottie source={require('./drugdata.json')} style={styles.lottieSty} autoPlay loop /> 
              </View>
        :null}
  </SafeAreaView>
    );
}
    
        navigation.navigate("Login")
        return null;
    
}

  export default Splash;