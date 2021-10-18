import { View,StyleSheet} from 'react-native';
import screenSize from '../../utils/tools';
const styles=StyleSheet.create({
    recomCourseBoard:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5
    },
    courseItem:{
        backgroundColor:'red',
        justifyContent:'center',
        flexDirection:'row',
        width:(screenSize.width-10)/2-5
    }
})

export default styles;
