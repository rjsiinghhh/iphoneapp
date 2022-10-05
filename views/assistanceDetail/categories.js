import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const items = [
    {
        // image: require(""),
        text: "Therapy"
    },
    {
        // image: require(""),
        text: "Social"
    },
    {
        // image: require(""),
        text: "Hospital"
    }, 
    {
        // image: require(""),
        text: "Meetings"
    },
    {
        // image: require(""),
        text: "Living"
    },
    {
        // image: require(""),
        text: "Think about some more, or what other shit i needz ta put in hur"
    }
];

export default function Categories() {
    return(
        <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View> 
    )
}