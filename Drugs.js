import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
  FlatList,Alert,TouchableOpacity,Image,Button,TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Sty';
const Drugs = ({navigation})=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isSelected, setSelection] = useState(false);

    return(
        <SafeAreaView>
            <View style={styles.checkboxContainer}>
                <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text style={styles.checkboxLabel}>Drug1</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}/>
                <Text style={styles.checkboxLabel}>Drug2</Text>
            </View>
        </SafeAreaView>
  );
};

export default Drugs;