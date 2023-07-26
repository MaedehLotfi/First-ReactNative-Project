/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigation from './AppForNav';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Navigation);

import PushNotification, {Importance} from 'react-native-push-notification';

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
      console.log("NOTIFICATION clicked:", notification);
    //   notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: "channel-daily", // (required)
      channelName: "My Daily Report channel", // (required)
      channelDescription: "A channel to categorise your daily report notifications", // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel daily report returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.getChannels(function (channel_ids) {
    console.log("Channel ids existed: "+channel_ids); 
  });

  
  
  