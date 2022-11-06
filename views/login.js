import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button } from "@react-native-material/core";
import React, { useEffect, useState } from 'react';
import { fireDB } from '../firebase.js';
import CryptoJS from 'crypto-js';
const salt = '53453453';

const db = fireDB.collection('users')
export default function Login({ navigation }) {
  const [fdata, setFdata] = useState({})
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] =useState('')

  const onSubmit = () => {
    setLoading(true)
    const hash = CryptoJS.HmacSHA1(fdata.password, salt).toString()
    if (hash) {
      console.log(fdata)
      db.where('username', '==', fdata.username).get().then(querySnapshot => {
        let user={}
        querySnapshot.forEach((doc) => {
        user = doc.data()
      });
        if (!user.username){
          setError('Account Not Found')
          setLoading(false)
          return
        }
        if (user.password===hash){
        
          const userData = {
            id: user.id, 
            username: user.username,
            email: user.email
          }
          AsyncStorage.setItem('user', JSON.stringify(userData)).then(()=>{
            navigation.navigate('Home')
          })
        } else{
          setError('Invalid Password')
          setLoading(false)
        }
      }).catch(err => {
        setError(err.message)
        setLoading(false)
      })
    }
  }
  return (
    <View>
      <TextInput defaultValue={fdata.username || user.username} label="Username" style={{ margin: 16 }} onChangeText={(event) => {
        setFdata({ ...fdata, username: event })
        console.log(event)
      }} />
      <TextInput label="Password" style={{ margin: 16 }} onChangeText={(event) => {
        setFdata({ ...fdata, password: event })
      }} />
      <Button disabled={loading} title="Save" color="primary" onPress={onSubmit} />
      <Text>{error}</Text>
    </View>
  );
}
