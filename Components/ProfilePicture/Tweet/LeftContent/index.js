import React from 'react'
import { View, Text } from 'react-native'
import ProfilePic from '../../../ProfilePicture/index'

const LeftContent = ({user}) => {
    return (
        <View>
            <ProfilePic image={user.image}/>
        </View>
    )
}

export default LeftContent
