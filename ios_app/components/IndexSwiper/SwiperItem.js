import React from 'react';
import { View,TouchableWithoutFeedback,Image, ImageEditor } from 'react-native';
import { directToPage} from '../../utils/ext'
const SwiperItem = (props)=>{
    const { data,styles,navigation } = props
    const toDetailPage=()=>{
        directToPage(navigation,'Detail',{
            courseId:data.course_id
        })
    }
    return (
        <TouchableWithoutFeedback
            styles={styles.swiperSize}
            onPress={toDetailPage}
        >
            <Image
                style={styles.swiperSize}
                source={{uri:'https://p.qpic.cn/qqconadmin/0/eac9168265444ed6b8b2ad06f35559db/0?tp=webp'}}
            >

            </Image>
        </TouchableWithoutFeedback>
    )
}

export default SwiperItem;
