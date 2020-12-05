import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Colors from '../Constant/Color'
import HomeScreen from '../Screens/Home'
import NotificationScreen from '../Screens/Notification'
import React ,{useState,useEffect} from 'react'
//import { useColorScheme } from 'react-native'
import {API, garphql, graphqlOperation} from 'aws-amplify'

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePic from '../Components/ProfilePicture'
import { getUser } from '../graphql/queries'




const BottomTab = createBottomTabNavigator();

export default BottomNavigator=()=>{
    //const colorSchema = useColorScheme();



    return(
        <BottomTab.Navigator
        intialRouteName="Home"
        tabBarOptions = {{showLabel:false}}
        
        >
            <BottomTab.Screen
            name="Home"
            component ={Home}
            options={{
                tabBarIcon: ({color})=><AntDesign name="home" size={24} color="black" />
            }}
            />

<BottomTab.Screen
            name="Search"
            component ={Home}
            options={{
                tabBarIcon: ({color})=><EvilIcons name="search" size={24} color="black" />
            }}
            />

<BottomTab.Screen
            name="Notification"
            component ={Home}
            options={{
                tabBarIcon: ({color})=><Ionicons name="ios-notifications-outline" size={24} color="black" />
            }}
            />

<BottomTab.Screen
            name="Message"
            component ={Home}
            options={{
                tabBarIcon: ({color})=><Feather name="mail" size={24} color="black" />
            }}
            />
            </BottomTab.Navigator>
            )
}


const HomeStack = createStackNavigator();

const Home =()=>{

    const [user, setUser] = useState(null)

    useEffect(() => {
        
        const fetchUser=async()=>{

            const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
            if(!userInfo){
                return;
            }
            try{

                const userData =await API.graphql(graphqlOperation(getUser, {id:userInfo.attributes.sub}))

                if(userData){
                    setUser(userData.data.getUser)
                }

            }catch(e){

            }

        }

        fetchUser();
       
    }, [])
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
            name ="Home"
            component={HomeScreen}
            options={{
            headerTitle:()=><AntDesign name="twitter" size={24} color="#1DA1F2" />,
        headerTitleAlign:'center',
    headerRight:()=><MaterialCommunityIcons name="star-four-points-outline" size={24} color="black" />,
    headerLeft: ()=>
        <ProfilePic image ={user?.image} />
    ,
    headerLeftContainerStyle:{
        marginLeft:10
    }
}
        }/>
        </HomeStack.Navigator>
    )
}

const SearchStack = createStackNavigator();

const Search =()=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen
            name ="Search"
            component={SearchScreen}
            options={{headerTitle:"Search"}
        }/>
        </SearchStack.Navigator>
    )
}

const NotificationStack = createStackNavigator();

const Notification =()=>{
    return(
        <NotificationStack.Navigator>
            <NotificationStack.Screen
            name ="Notification"
            component={NotificationScreen}
            options={{headerTitle:"Notifiaction "}
        }/>
        </NotificationStack.Navigator>
    )
}

const MessageStack = createStackNavigator();

const Message =()=>{
    return(
        <MessageStack.Navigator>
            <MessageStack.Screen
            name ="Message"
            component={HomeScreen}
            options={{headerTitle:"Message"}
        }/>
        </MessageStack.Navigator>
    )
}