

import React, {useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  
} from 'react-native';


import Card from '../components/Card';
import Context from '../utils/context';


//const notes = useContext(MyContext)



const Notes = ({navigation}) => {
    const {container} = styles
    const notes = useContext(Context)

    console.log(notes)
    
    //console.log(notes)
  
    return (
            <SafeAreaView style={container}>
            <FlatList
                data={notes}
                renderItem={({item}) => <Card date={item.date} title={item.title} note={item.note} isDone={item.isDone}  />}
                keyExtractor={item => item.date}
            />
            </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    container: {
        //marginTop: StatusBar.currentHeight || 0,
        flexDirection: "row",
        alignItems: 'center', // Aligns the cards in the center of the screen
        justifyContent: 'center', // Centers vertically as well     
      },
    
});

export default Notes;