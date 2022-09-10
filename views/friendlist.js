import { View, Text, StyleSheet } from 'react-native';
import { VStack, ListItem, Avatar, TextInput, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function Friendlist({ navigation }) {
    return (
        <View>
             <IconButton  icon={props => <Icon name="plus" {...props} />} />
             <TextInput label="Search" style={{ margin: 16 }} />
            <VStack>
                <ListItem onPress={() => {
                navigation.navigate('Message')
             }} leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />

            </VStack>
        </View>
  
    );
  }
  