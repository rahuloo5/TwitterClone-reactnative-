import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from './Navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/index'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import {getUser} from './graphql/queries'
import {createUser} from './graphql/mutations';

Amplify.configure(config)



 function App() {

  const getRandomImage=()=>{
    return 'https://source.unsplash.com/random'
  }


  const saveUserToDB=async(user)=>{

    await API.graphql(graphqlOperation(createUser,{input:user}))

  }

  useEffect(() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if(userInfo) {
        // Check if user already exists in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
        console.log(userData)
        if(!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user);
        } else {
          console.log('User already exists');
        }
      }


      // If it doesn't, create the user in the database
    }
    updateUser();
  }, [])

  
    return (
      <SafeAreaProvider>
        <Navigation  />
        <StatusBar />
      </SafeAreaProvider>
    );
  
}

export default withAuthenticator(App);