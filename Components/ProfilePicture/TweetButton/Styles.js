import {StyleSheet} from 'react-native';
import Colors from '../../../Constant/Color'

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.light.tint,
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        bottom:50,
        right:50,
borderRadius:50,
position:"absolute"
    }

})

export default styles