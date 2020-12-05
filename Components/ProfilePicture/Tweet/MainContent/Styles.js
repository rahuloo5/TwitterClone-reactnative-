import {StyleSheet} from 'react-native'
    const styles =StyleSheet.create({
        container:{
            flex:1
        },
        headerContainer:{
            flexDirection:'row',
            justifyContent:'space-between'

        },
        headerNames:{
            flexDirection:"row"
        },
        name:{
              marginHorizontal:5,
              fontWeight:'bold'
        },
        userName:{
            marginHorizontal:5,
            color:'grey'
        },
        createdAt:{
            marginHorizontal:5,
            color:'grey'
        },
        content: {
            marginTop: 5,
            lineHeight: 18,
            marginLeft:4
          },
          image: {
            marginVertical: 10,
            width: "100%",
            height: 200,
            resizeMode: 'cover',
            borderRadius: 15,
            overflow: 'hidden',
          }

    });

    export default styles;