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
import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = ({navigation})=>{
  const [cognitionData,setCognitionData]= useState([]);
  const LoadACognitionDataFromServer= async()=>{
    fetch("http://moshavermoslemi.ir/api/App/GetACognitions/"+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! ACognitionData received with id in : \n"+JSON.stringify(json));
    setCognitionData(json);
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

  const id = useSelector(state=> state.places.Id);
  const api_address = useSelector(state=> state.places.api_address);
  const [apiSpecificData,setApiSpecificData]= useState([]);

  const LoadInfoFromServer= async()=>{
    fetch(api_address+id)
    .then((response)=>response.json())
    .then((json)=>{
    console.log("\n\n!!!!!!!!! Info data received with id in Home page : \n"+JSON.stringify(json));
    setApiSpecificData(json);
    Test();
   })
    .catch((error)=>{
      console.log("Error:", error);
    })
    .finally(()=>{});}

    const [selfManagementData,setSelfManagementData]= useState([]);

    const LoadSelfManagementDataFromServer= async()=>{
      fetch("http://moshavermoslemi.ir/api/App/GetASelfManagement/"+id)
      .then((response)=>response.json())
      .then((json)=>{
      console.log("\n\n!!!!!!!!! SelfManagement received  : \n"+JSON.stringify(json));
      setSelfManagementData(json);
      
     })
      .catch((error)=>{
        console.log("Error:", error);
      })
      .finally(()=>{});}
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

      const Test = ()=>{
      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: "Newchannel-daily", // (required) channelId, if the channel doesn't exist, notification will not trigger.
        ticker: "My Notification Ticker", // (optional)
        showWhen: true, // (optional) default: true
        autoCancel: true, // (optional) default: true
        largeIcon: "ic_launcher", // (optional) default: "ic_launcher". Use "" for no large icon.
        largeIconUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
        smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
        bigText: "گزارش روزانه یادتان نرود! لطفا هرشب گزارش روز و فعالیت ها را ثبت کنید", // (optional) default: "message" prop
        bigPictureUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
        bigLargeIcon: "ic_launcher", // (optional) default: undefined
        bigLargeIconUrl: "https://www.example.tld/bigicon.jpg", // (optional) default: undefined
        vibrate: true, // (optional) default: true
        vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        tag: "some_tag", // (optional) add tag to message
        group: "group", // (optional) add group to message
        groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
        ongoing: false, // (optional) set whether this is an "ongoing" notification
        priority: "high", // (optional) set notification priority, default: high
        visibility: "private", // (optional) set notification visibility, default: private
        ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
        shortcutId: "shortcut-id", // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
        onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false
        
        when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
        usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
        timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
      
        messageId: "google:message_id", // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module. 
      
        invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
      
        
        /* iOS and Android properties */
        id: "0", // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: "یادآور", // (optional)
        message: "گزارش روزانه و ثبت اطلاعات فراموش نشود!", // (required)
        picture: "https://www.example.tld/picture.jpg", // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
        userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
        repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
      });
      PushNotification.removeAllDeliveredNotifications(); 
      }

  useEffect(()=>{
    LoadInfoFromServer(); 
    LoadSelfManagementDataFromServer(); 
    LoadACognitionDataFromServer(); 
    LoadASocialDataFromServer();
    LoadAPhysicalDataFromServer();
    
 },[]);
 
//  PushNotification.localNotificationSchedule({
//     //... You can use all the options from localNotifications
//     channelId: "channel-daily",
//     repeatType: 'day',
//     message: "گزارش روزانه یادتان نرود! لطفا هرشب گزارش روز و فعالیتها را ثبت کنید", // (required)
//     date: new Date(Date.now() + 30 * 1000), // in 30 secs
//     allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
  
//     /* Android Only Properties */
//     //repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
//     //showWhen:true,
//   });
  //PushNotification.removeAllDeliveredNotifications();

  return(
    <SafeAreaView >
      {/* <Text>{new Date().toLocaleString()}</Text> */}
      <ScrollView>
      
      <View style={styles.ProfileView}>
      <FlatList
      data={apiSpecificData}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <View style={{flexDirection:'row'}}>
          <View>
        <Icon name="person" color={'#000080'} size={60} />
        </View>
        <View>
        <Text style={styles.textLevel}>نام و نام خانوادگی: {item.FullName}</Text>
        <Text style={styles.textLevel}>شماره ملی: {item.NationalCode}</Text>
        <Text style={styles.textLevel}>شماره پرونده: {item.id}</Text>
        </View>
        </View>
      )}/>
</View>

{/* table */}
<View style={styles.ProfileView}>
<View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >عنوان فعالیت</Text>
    </View>
    <View style={{height:30, width:'20%',  backgroundColor:'yellow' ,borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح یک</Text></View>
    <View style={{height:30, width:'20%',backgroundColor:'orange' , borderColor:'black', borderWidth:1 }}><Text style={{textAlign:'center'}}>سطح دو</Text></View>
    <View style={{height:30, width:'20%', backgroundColor:'red' , borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح سه</Text></View>
    <View style={{height:30, width:'20%', backgroundColor:'green' , borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح چهار</Text></View>
</View>

{cognitionData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
if (Level1===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >شناختی</Text>
    </View>
    <View style={{height:30, width:'20%',  backgroundColor:'yellow' ,borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1 }}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >شناختی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'orange', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >شناختی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'red', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >شناختی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'green', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
</View>)}
})} 

{physicalData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
if (Level1===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >فیزیکی</Text>
    </View>
    <View style={{height:30, width:'20%',  backgroundColor:'yellow' ,borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1 }}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >فیزیکی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'orange', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >فیزیکی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'red', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >فیزیکی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'green', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
</View>)}
})} 

{socialData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
if (Level1===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >اجتماعی</Text>
    </View>
    <View style={{height:30, width:'20%',  backgroundColor:'yellow' ,borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1 }}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >اجتماعی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'orange', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >اجتماعی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'red', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >اجتماعی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'green', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
</View>)}
})} 

{selfManagementData.map((item)=>{
    let Level1 = item.Level1 ;
    let Level2 = item.Level2 ;
    let Level3 = item.Level3 ;
    let Level4 = item.Level4 ;
if (Level1===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >خودمدیریتی</Text>
    </View>
    <View style={{height:30, width:'20%',  backgroundColor:'yellow' ,borderColor:'black', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1 }}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
    <View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level2===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >خودمدیریتی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'orange', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level3===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >خودمدیریتی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'red', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
</View>)}

if (Level4===true){return(
  <View style={{ width:'95%', height:30,flexDirection:'row',margin:5}}>
    <View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}>
      <Text >خودمدیریتی</Text>
    </View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%',  borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', borderWidth:1}}></View>
<View style={{height:30, width:'20%', borderColor:'black', backgroundColor:'green', borderWidth:1}}><Text style={{textAlign:'center'}}>سطح شما</Text></View>
</View>)}
})} 



</View>


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
      </ScrollView>
    </SafeAreaView>
    
  
  );
}


export default Home;

