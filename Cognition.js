import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';

const Cognition = ({navigation})=>{
    const [isSelected, setSelection] = useState(false);

    return(
        <SafeAreaView>
            <View style={styles.checkboxContainer}>
                <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}/>
                <Text style={styles.checkboxLabel}>Cognition</Text>
            </View>
            
        </SafeAreaView>
  );
};

export default Cognition;