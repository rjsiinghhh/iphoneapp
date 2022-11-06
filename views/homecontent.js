import { SafeAreaView, Text } from 'react-native';
import Navbar from './navbar.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

export default function Homecontent({navigation}) {
    const [user, setUser] = useState({})
    useEffect(()=> {
        AsyncStorage.getItem('user').then(data=>{
            const userData = JSON.parse(data)
            console.log(userData)
            if (userData.id) {
                setUser(userData)
            } else {
                throw new Error('no user found')
            }
        }).catch(err=>{
            console.log(err)
            navigation.navigate('Register')
        })
    },[])

    return (
      <SafeAreaView>
       <Navbar navigation={navigation} />
      </SafeAreaView>
    );
  }
  