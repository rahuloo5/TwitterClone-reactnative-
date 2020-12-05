import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './Styles'
import { Entypo } from '@expo/vector-icons';
import Footer from '../Footer/index'
import moment from 'moment'
import { S3Image } from 'aws-amplify-react-native/dist/Storage';

const MainContent = ({tweet}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerNames}>
                    <Text style={styles.name}>{tweet.user.username}</Text>
                    <Text style={styles.userName}>{tweet.user.name}</Text>
    <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                     </View>
                     <Entypo name={"chevron-down"} size={16} color={'grey'}/>
            </View>
            <View>
            <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && <S3Image style={styles.image} imgKey={tweet.image}/>}
    </View>
    <Footer tweet={tweet} />
        </View>
    )
}

export default MainContent
