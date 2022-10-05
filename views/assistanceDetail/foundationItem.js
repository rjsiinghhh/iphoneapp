import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const localFoundations = [
    {
        name:"First Foundation",
        image_url: "url",
        category: "category",
        email: "email",
        phone: "phone_number",
        address: "address",
        url: "url.com",
        rating: "rating"
    }
]

  const FoundationItems =({ navigation, ...props })=> (
    <ScrollView>
    {props.foundationData?.map((foundation, index) => (
      <TouchableOpacity
        key={index}
        activeOpacity={1}
        style={{ marginBottom: 30 }}
        onPress={() =>
          navigation.navigate("FoundationDetail", {
            name: foundation.name,
            img_url: foundation.image_url,
            rating: foundation.rating,
            category: foundation.categorty,
            url: foundation.url,
            address: foundation.address,
            email: foundation.email
          })
        }
      >
        <View
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <FoundationImage image={foundation.image_url} />
          <FoundationInfo name={foundation.name} rating={foundation.rating} />
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
)
  export default FoundationItems

  const FoundationImage = (props) => (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
  
  const FoundationInfo = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );