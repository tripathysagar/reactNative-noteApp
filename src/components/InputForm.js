import {useRef} from "react"
import {
    TextInput,
} from "react-native"



const InputForm = ({setFunc,  placeholder, value, formStyle }) => {
    //console.log(`indside of the inputform   ${setFunc}, ${objDefault}`)
    //const {setFunc, obj, objDefault, formStyle} = props

    //console.log("hello from InputForm func")
    //console.log(value)

    if(placeholder !== ""){ // triggered to redener when data is recived by test
        //console.log("inside of if")
        return (
            <TextInput
                    style={formStyle}
                    //value={noteObj[0].title}
                    editable
                    multiline
                    value={value}
                    onChange={(event) => {
                        //console.log(event.nativeEvent.text)
                        setFunc(event.nativeEvent.text)
                        
                    }}
            />
        )
    }
    
    else{
        //console.log("inside of else")
    return (        //for handling new forms
        <TextInput
                style={formStyle}
                //value={noteObj[0].title}
                editable
                multiline
                placeholder={value}
                
                
                onChange={(event) => {
                    //console.log(event.nativeEvent.text)
                    setFunc(event.nativeEvent.text)
                    
                }}
            />
    )
    }
}

export default InputForm