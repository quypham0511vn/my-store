import React from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import styles from './style';

function Avatar({ label, goBack, rightButton, rightComponent }) {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'></StatusBar>
            <View style={styles.container}>
                {goBack && <TouchableOpacity onPress={goBack} style={styles.back}>
                    <Text>Back</Text>
                </TouchableOpacity>}
                <Text style={styles.header} numberOfLines={1}>{label}</Text>
                {rightButton && <TouchableOpacity onPress={rightButton} style={styles.right}>
                    <Text>{rightComponent}</Text>
                </TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}   
Avatar.defaultProps = {
    label: 'Avatar',
    goBack: null,
    rightButton: null
}

export default Avatar;