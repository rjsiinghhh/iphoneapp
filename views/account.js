import { View, Text, StyleSheet } from 'react-native';
import { AysncStorage } from '@react-native-community/async-storage'
import { TextInput, Button, Alert } from "@react-native-material/core";
import React, { useEffect, useState } from 'react';
import { fireDB } from '../firebase.js';
import CryptoJS from 'crypto-js';
const salt= '53453453';

const dbRef = fireDB.collection('users')
 
export default function Account({navigation}) {
    const [user, setUser] = useState({})
    const [fdata, setFdata] = useState({})
    const [loading, setLoading] =useState(false)
    useEffect(()=> {
        AsyncStorage.getItem('user').then(data=>{
            const userData = JSON.parse(data)
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


  const onSubmit = () => {
    setLoading(true)
    const hash= fdata.password? CryptoJS.HmacSHA1(fdata.password, salt).toString():userData.password
      if (hash) {
        dbRef.doc(user.id).update({...user,...fdata,password:hash})
        .then(res=> {
          console.log(res.id)
          const userData = {
            id: res.id, 
            username: res.username,
            email: res.email
          }
          AsyncStorage.setItem('user', JSON.stringify(userData))
          setUser(userData)
          .then(()=> {
            console.log('Home')
            setLoading(false)
          })
          .catch(err=> {
            console.error(error)
            Alert.alert(error.message)
            setLoading(false)
          })
        })
      } else{
        console.error(error)
        Alert.alert(error.message)
        setLoading(false)
      }
  }
console.log(user)
    return (
      <View>
          <TextInput defaultValue={fdata.email || user.email} label="email" style={{margin: 16 }} onChangeText={(event)=>{
          setFdata({...fdata,email:event})
         
        }}/>
        <TextInput defaultValue={fdata.username || user.username}  label="Username" style={{ margin: 16 }} onChangeText={(event)=>{
          setFdata({...fdata,username:event})
          console.log(event)
        }} />
        <TextInput label="Password" style={{ margin: 16 }} onChangeText={(event)=> {
          setFdata({...fdata,password:event})
        }} />
         <Button disabled={loading} title="Save" style={styles.button} color="primary" onPress={onSubmit} />
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    button: {
      width: "100%"
    }})