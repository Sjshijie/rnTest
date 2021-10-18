import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import IndexSwiper from '../components/IndexSwiper';
import IndexModel from '../models';
import ListModel from '../models/list';
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseList';
const indexModel = new IndexModel()
const listModel = new ListModel()
export default (props) => {
    const navigation = useNavigation()
    const [swiperData, fieldData, courseData, recomCourseData] = useHomeDataHook()
    return (
        <ScrollView
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
        >
            <IndexSwiper
                swiperData={swiperData}
                navigation={navigation}
            />
            <MainTitle
                title={'推荐课程'}
            />

            <RecomCourseList data={fieldData}/>

            {
                fieldData.map(item => {
                    return <MainTitle
                        dataSet={ {name:'xxx'} }
                        key={item.field_name+'100'}
                        title={item.field_name}
                    />
                })
            }
        </ScrollView>
    )
};

const useHomeDataHook = () => {
    const [swiperData, setSwiperData] = useState([])
    const [fieldData, setFieldData] = useState([])
    const [courseData, setCourseData] = useState([])
    const [recomCourseData, setRecomCourseData] = useState([])
    useEffect(() => {
        indexModel.getCourseDatas().then(res => {
            const data = res.result
            setSwiperData(data.swipers)
            setFieldData(data.fields)
            setCourseData(data.courses)
            setRecomCourseData(data.recomCourses)
        })
        return () => {
            console.log(11)
        }
    }, [])

    return [swiperData, fieldData, courseData, recomCourseData]

}
