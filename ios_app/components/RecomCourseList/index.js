import React from 'react';
import { View } from 'react-native';
import CourseItem from './CourseItem';
import styles from './styles'
export default (props)=>{
    const { data,naviation } = props
    return (
        <View style={styles.recomCourseBoard}>
            {
                data.map((item,index)=>{
                    return <CourseItem 
                        styles={styles}
                        index={index}
                        naviation={naviation}
                        key={index}
                    />
                })
            }
        </View>
    )
};
