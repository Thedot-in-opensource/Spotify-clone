import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const HomeScreen = () => {
    return(
        <View
        
        style={styles.homeSection}
        >
            <View
            style={{
                flexDirection: 'row',
                marginTop: 18,
                justifyContent: 'space-between'
            }}
            >
<Text
            style={[styles.greetingTxt, {flex:5}]}
            >
                Good evening
            </Text>
            <Ionicons name="ios-notifications-outline" color='#FFF' size={26} style={{flex:1}}/>
            <MaterialCommunityIcons name="history" color='#FFF' size={26} style={{flex:1}}/>
            <AntDesign name="setting" color='#FFF' size={26} style={{flex:1}}/>

         
            </View>

            
        </View>
    )
}


const styles = StyleSheet.create({

    homeSection: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },

    greetingTxt: {
        color: '#FFF',
        fontStyle: 'normal',
        fontFamily: 'GothamBook',
        fontSize: 23
    }
})  


export default HomeScreen;