import React from 'react';
import { View,Text } from 'react-native';
import styles from './styles';


export default (props)=>{
    const {title} = props
    return (
        <View style={styles.mainTitle}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};
