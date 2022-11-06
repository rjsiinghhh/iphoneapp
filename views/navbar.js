import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
} from "@react-native-material/core";
import { StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const Navbar = ({navigation}) => {
  return (
    <AppBar 
    style={styles.navbar}
      title="Home"
      trailing={props =>
       
          <IconButton
            icon={<Avatar  image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} label="Yaman KATBY" size={45} />}
            onPress={() => navigation.navigate('Settings')}
            {...props}
          />
      }
    />
  );
};

const styles = StyleSheet.create({
    navbar: {
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Navbar;