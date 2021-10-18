import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from './styles'
import SwiperItem from './SwiperItem';

const IndexSwiper = (props)=>{
    const { swiperData,navigation } = props
    return (
        <View
            height={styles.swiperSize.height}
        >
            <Swiper
                key={swiperData.length}
                height={styles.swiperSize.height}
                autoplay={true}
                loop={true}
                paginationStyle={styles.pagination}
                activeDotColor={'#fff'}
            >
                {
                    swiperData.map((item,index)=>{
                        return <SwiperItem 
                            data={item}
                            key={index}
                            navigation={navigation}
                            styles={styles}
                        />
                    })
                }
            </Swiper>
        </View>
    )
}

export default IndexSwiper;
