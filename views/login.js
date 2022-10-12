import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button } from "@react-native-material/core";
import React, { useEffect, useState } from 'react';
import { fireDB } from '../firebase.js';
import CryptoJS from 'crypto-js';
const salt= '53453453';

const db = fireDB.collection('users')

const [fdata, setFdata] = useState({})

export default function Login() {
    return (
      <View>
        <TextInput label="Username" style={{ margin: 16 }} />
        <TextInput label="Password" style={{ margin: 16 }} />
        <Button title="Login" color="primary" />
      </View>
    );
  }
  