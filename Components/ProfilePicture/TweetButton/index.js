import React from 'react';
import {TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './Styles'

import {useNavigation} from '@react-navigation/native'

const TweetButton=()=>{

    const navigation = useNavigation()

    const press=()=>{
        navigation.navigate('newTweet')
    }
    return(
        <TouchableOpacity style={styles.button} onPress={press}>
            <MaterialCommunityIcons name ={"feather"} size= {30} color="white"/>


        </TouchableOpacity>
    )

}

export default TweetButton;