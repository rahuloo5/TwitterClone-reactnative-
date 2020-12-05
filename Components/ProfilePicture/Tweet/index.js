import React from 'react'
import { View, Text } from 'react-native'
import LeftContent from './LeftContent'
import MainContent from './MainContent'
import styles from './Style'

const Tweet = ({tweet}) => {
    return (
        <View style={styles.container}>
            <LeftContent  user={tweet.user}/>
            <MainContent tweet={tweet}
            />
        </View>
    )
}

export default Tweet
