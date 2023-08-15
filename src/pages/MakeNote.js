import  {useState, useContext, useEffect} from "react";
import {  
    StatusBar,
    StyleSheet,
    TextInput, 
    View, 
    Text,
    Button,
    Switch
}  from 'react-native'

import InputForm from "../components/InputForm";
import Context from '../utils/context';





const MakeNote = ({ route, navigation }) => {
    
    
    // get context value
    const MyNotes = useContext(Context)
    console.log("hello from the MakeNote function")

    let dataToBeInit = {
        date: '',
        title: '',
        note: '',
        isDone: false
    }
    
    //let gotValueForTitle  = firstTitleRenderRef() ? false  : true// for handling the if we recive the input

    //let gotValueForNote  = firstNoteRenderRef() ? false  : true// for handling the if we recive the input

    
    
    console.log(route)
    //extract the data passed that passed
    const {date } = route?.params
    console.log(`got the date to MakeNote page is : ${date} `)

    
    //console.log(navigation.get)
    if(date !== ''){ 
        // if the component recives the dete it filters it from the list of notes
        dataToBeInit = MyNotes.filter((item) => {
            if(item.date === date){ return item}})[0]
        console.log(`data to be init in makenote : ${dataToBeInit.date}`)
        
    }

     // it will initilize firstRenderRef.currnt to 1 at the first render
    
    

    
    const [noteObj, setNoteObj] = useState({
        
        date: dataToBeInit.date,
        title: dataToBeInit.title,
        note: dataToBeInit.note,
        isDone: dataToBeInit.isDone
    })
        const setDate = (date) => {
            setNoteObj((prev) => {
                return {...prev, date: date }
            })
        }
        const setTitle = (text)=>{
            setNoteObj((prev) => {
                return {...prev, title: text }
            })
        }

        const setNote = (text) => {
            setNoteObj((prev) => {
                return {...prev, note: text }
            })
        }

        const toggleSwitch = () => {
            setNoteObj((prev) => {
                return {...prev, isDone: !prev.isDone }
            })
        }
        
    if(noteObj.date !== date){ // for over writing the ewxisting data after clicking from card list 
        setDate( dataToBeInit.date)
        setTitle(dataToBeInit.title)
        setNote(dataToBeInit.note)
        toggleSwitch( dataToBeInit.isDone)
    }

    console.log(noteObj)
    
    
    const emptyInputCheck = () => {
        // -----> handle user entering empty title and note
        
            return (noteObj.title === '' || noteObj.note === '') ? true : false


    }

    const {
        container, 
        titleStyle, 
        noteStyle, 
        footSection,
        saveStyle, 
        isDoneWrapper,
        isDoneSwitchStyle,
        isDoneLabelStyle } = styles

    const updateMyList = (date) => {
        for(let i= 0; i< MyNotes.length; i++){
            if(MyNotes[i].date === date){
                console.log(`MyNotes[i] is : ${MyNotes[i]} \n noteObj is : ${noteObj} `)
                MyNotes[i] = noteObj
            }
        }
    }

        
    /*

                    <InputForm setFunc={setTitle} objDefault="title" formStyle={titleStyle} dummyData={gotValue} />
                    <InputForm setFunc={setNote} objDefault="plese rnter note" formStyle={noteStyle} dummyData={gotValue} />
            
    */
    
    return (
        <View style={container}>
            {(()=>{
                if(date === ''){
                    //triggered when form page did not receive date
                    return (<>
                        <InputForm setFunc={setTitle} placeholder="" value="Title" formStyle={titleStyle}  />
                        <InputForm setFunc={setNote} placeholder="" value="Notes" formStyle={noteStyle}  />
                    
                    </>)
                }
                else{
                    //triggered when date is received   
                    return (<>
                        <InputForm setFunc={setTitle} placeholder="Title" value={noteObj.title} formStyle={titleStyle}  />
                        <InputForm setFunc={setNote} placeholder="Notes" value={noteObj.note} formStyle={noteStyle}  />
                    </>)
                }
            })()}
            
            
            
           
             
        
            
            <View style={footSection}>
                <View style={isDoneWrapper}>
                    
                    <Switch
                        style={isDoneSwitchStyle}
                        trackColor={{false: 'red', true: 'black'}}
                        thumbColor={noteObj.isDone ? 'black' : 'red'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={noteObj.isDone}
                        
                    />
                    <Text style={isDoneLabelStyle}> {noteObj.isDone ? `ToDo` : `Done`}</Text>

                </View>
                <Button 
                    style={ saveStyle}
                    color="green"
                    onPress={() => {
                        console.log(`AFTER save butoon pressed \n title : ${noteObj.title} \n note : ${noteObj.note} \n isDone : ${noteObj.isDone}\n`)
                        //console.log(emptyInputCheck() ? "Missing mandotary field" : "done")

                        if(emptyInputCheck()){
                            console.log("Expect the title and notes to be filled ")
                            return
                        }
                        if(date===''){
                            noteObj.date = Date.now()
                            console.log(noteObj)
                            MyNotes.push(noteObj)
                            console.log(MyNotes)
                        }
                        else{
                            
                            updateMyList(date)
                        }
                    }} 
                    title="Save" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        //marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'column',
        backgroundColor: 'white',

    },
    titleStyle:{
        flex: 1,
        fontSize: 40,
        
    },
    noteStyle:{
        flex: 6,
        backgroundColor: 'green',
        fontSize: 25,
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Align content to the top
        paddingTop: 20, // Add some padding at the top
    },
    footSection :{
        flex: 1,
    },
    saveStyle : {
        flex: 1,
        backgroundColor: 'blue',
        marginBottom : 0
    }, 
    isDoneWrapper :{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    isDoneSwitchStyle : {
        flex: 1,
        alignContent: 'flex-start',
        paddingVertical: "auto",
    },
    isDoneLabelStyle : {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: "auto",
    }
    
})



export default MakeNote