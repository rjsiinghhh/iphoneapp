import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useRef } from 'react';
import { VStack, ListItem, Avatar } from '@react-native-material/core';



export default function Message() {
    const flatListRef = useRef();
    const [messages, setMessages] = useState([{
        id:1, 
        senderid:1,
        recieverid:2,
        message:"first chat message",
        datesent: "01/01/27" 
    },
{
    id:2, 
    senderid:2,
    recieverid:1,
    message:"second chat message",
    datesent: "01/01/27" 
}]);
    const userId = 2;


    return (
        <View>
            <FlatList
                //inverted
                style={{ backgroundColor: "#eeeeee" }}
                data={messages}
                ref={flatListRef} // assign the flatlist's ref to your component's FlatListRef...

                renderItem={({ item, index }) => {
                    // rowId = { item.id }
                    if (item.senderid === userId) { //change as per your code logic
                        return (
                            <View style={{
                                backgroundColor: "#0078fe",
                                padding: 10,
                                marginLeft: '45%',
                                borderRadius: 5,

                                marginTop: 5,
                                marginRight: "5%",
                                maxWidth: '50%',
                                alignSelf: 'flex-end',
                                borderRadius: 20,
                            }} key={item.id}>


                                <Text style={{ fontSize: 16, color: "#fff", }}> {item.message}</Text>

                                <View style={styles.rightArrow}>

                                </View>
                                <View style={styles.rightArrowOverlap}></View>



                            </View>
                        )




                    } else {


                        return (
                            <View style={{
                                backgroundColor: "#dedede",
                                padding: 10,
                                borderRadius: 5,
                                marginTop: 5,
                                marginLeft: "5%",
                                maxWidth: '50%',
                                alignSelf: 'flex-start',
                                //maxWidth: 500,
                                //padding: 14,

                                //alignItems:"center",
                                borderRadius: 20,
                            }} key={item.id}>



                                <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }}> {item.message}</Text>
                                <View style={styles.leftArrow}>

                                </View>
                                <View style={styles.leftArrowOverlap}></View>



                            </View>
                        )


                    }

                }

                }
        
        keyExtractor={(item, index) => item.id.toString()}
            />

        </View>

    );


}

          
const styles = StyleSheet.create({
    rightArrow: {
      position: "absolute",
      backgroundColor: "#0078fe",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomLeftRadius: 25,
      right: -10
    },
    
    rightArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomLeftRadius: 18,
      right: -20
    
    },
    
    /*Arrow head for recevied messages*/
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#eeeeee",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    
    },
    })