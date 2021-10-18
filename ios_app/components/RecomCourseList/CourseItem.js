import React from 'react';
import { View,TouchableWithoutFeedback,Image,Text } from 'react-native';
import { directToPage} from '../../utils/ext'

const toDetailPage=()=>{
    directToPage(navigation,'Detail',{
        courseId:data.course_id
    })
}
export default (props)=>{
    const { index,naviation,styles } = props
    return (
        <TouchableWithoutFeedback onPress={toDetailPage}>
            <View style={styles.courseItem}>
                <Text>{index}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};