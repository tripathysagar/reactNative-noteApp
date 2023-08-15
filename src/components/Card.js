import React from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Dimensions
} from "react-native"

import { useNavigation } from '@react-navigation/native'



const windowDimensions = Dimensions.get('window');

const Card = (props ) => {

    
    const {card, cardTitle, cardContent} = styles
    const {date, title, note, isDone} = props

    const navigation = useNavigation()
    const handleItemPress = (item) => {
      navigation.navigate("Create Notes", {date: item});
    };
    return (
            <Pressable 
            onPress = {() => {  
              console.log(`in Card component ${date} is clicked`)
              handleItemPress(date)
            }}
            >
                <View style={card}>
                    <Text style={cardTitle}>{title}</Text>
                    <Text style={cardContent}>{note}</Text>
                </View>
              
            </Pressable>
    )
            
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0033cc',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        padding: 16,
        width: windowDimensions.width - 30,
        marginBottom: 20,
        marginLeft: 15,
    },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    overflow: 'hidden',
    lineHeight: 24,
  },
})


export default Card