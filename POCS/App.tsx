import React from 'react';

import { NativeEventEmitter,Platform, View,Text, TouchableOpacity,SafeAreaView,Linking } from 'react-native'


class App extends React.Component {
  //notificationEngObj: NotificationEngine
  state = {
    message: "",
    permissions: {}
  };
  



  componentDidMount() {
    // PushNotificationIOS.addEventListener('register', this._onRegistered);
    // alert(PushNotificationIOS)
    // PushNotificationIOS.addEventListener('register', this._onRegistered);
    // PushNotificationIOS.addEventListener(
    //   'registrationError',
    //   this._onRegistrationError,
    // );
    // PushNotificationIOS.addEventListener(
    //   'notification',
    //   this._onRemoteNotification,
    // );
    // PushNotificationIOS.addEventListener(
    //   'localNotification',
    //   this._onLocalNotification,
    // );

    // PushNotificationIOS.requestPermissions();

    // PushNotificationIOS.configure({
    //   // (optional) Called when Token is generated (iOS and Android)
    //   onRegister: function(token) {
    //     console.log("TOKEN:", token);
    //   },
     
    //   // (required) Called when a remote or local notification is opened or received
    //   onNotification: function(notification) {
    //     console.log("NOTIFICATION:", notification);
     
    //     // process the notification
     
    //     // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
    //   //  notification.finish(PushNotificationIOS.FetchResult.NoData);
    //   },
     
    //   // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    //   senderID: "YOUR GCM (OR FCM) SENDER ID",
     
    //   // IOS ONLY (optional): default: all - Permissions to register.
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true
    //   },
     
    //   // Should the initial notification be popped automatically
    //   // default: true
    //   popInitialNotification: true,
     
    //   /**
    //    * (optional) default: true
    //    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //    */
    //   requestPermissions: true
    // });

   
   
    console.disableYellowBox = true;
    //this.notificationEngObj = NotificationEngine.getInstance(this)
    // if (Platform.OS === 'android'){
    //     PushNotificationEmitter = new NativeEventEmitter(NotificationHubAndroid);
    //     PushNotificationEmitter.addListener(DEVICE_NOTIF_EVENT, this._onRemoteNotification);
    //   }else{
    //     NotificationHubIOS.addEventListener('notification', this._onRemoteNotification);
    //     NotificationHubIOS.addEventListener('localNotification', this._onLocalNotification);
    //   }

  }
  render() {
    return (
      <SafeAreaView>
     <View style={{justifyContent:"center"}}>
       <TouchableOpacity  onPress={()=>{Linking.openURL('demo://').catch(err => console.error('An error occurred', err));}}>
      <Text>GO TO OTHER APP</Text>
      </TouchableOpacity>
       </View>
       </SafeAreaView>
       )
  }
  



  


}
export default App

