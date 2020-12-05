import React ,{useState,useEffect}from 'react'
import { View, Text ,FlatList} from 'react-native'
import Tweet from '../Tweet/index'
import tweets from './../../../Data/tweets'
import {API,  Auth, graphqlOperation} from 'aws-amplify'
import {listTweets} from '../../../graphql/queries'


const Feed = () => {
const [tweet , setTweet] = useState([])
const[loading , setLoading] = useState(false)

const fetchTweet=async()=>{
    setLoading(true)
    try{
        const tweetData = await API.graphql(graphqlOperation(listTweets));
        setTweet(tweetData.data.listTweets.items)

    }catch(e){
        console.log(e)
    }
    finally{

        setLoading(false)
    }
}

useEffect(()=>{
    fetchTweet();

},[])

    return (
        <View style={{width:'100%'}}>
        <FlatList
        data={tweet}
        renderItem={({item})=><Tweet tweet={item} />}
        keyExtractor={(item)=>item.id}
        refreshing={loading}
        onRefresh={fetchTweet}
        />
        </View>
    )
}

export default Feed
