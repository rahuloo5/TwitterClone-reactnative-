import React from 'react'
import{Text,View,StyleSheet} from 'react-native'
import Tweet from '../Components/ProfilePicture/Tweet'
import TweetButton from '../Components/ProfilePicture/TweetButton'
import tweets from '../Data/tweets'
import Feed from '../Components/ProfilePicture/Feed/Feed'


function Home() {
    return (
        <View style={styles.container}>
          <Feed />  
          <TweetButton/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


