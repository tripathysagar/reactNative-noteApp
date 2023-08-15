
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Context from './src/utils/context';
import Notes from './src/pages/Notes';
import MakeNote from './src/pages/MakeNote';


const MyNotes = [
  {
      date: 1691776162615,
      title: "Note 123 hgduqghdavihaidhviqc still doesn't work, it may be due to the router configuratio ",
      note: "blah blah If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the Tunnel connection type when starting the development serveblah blah If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the Tunnel connection type when starting the development serve",
      isDone: true
  },
  {
      date: 1691778117458,
      title: "Note 123ajdbchvav  bjbcjascugaugcuac ",
      note: "When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information",
      isDone: true
  },
  {
      date: 1691778171637,
      title: "Note 123 jabcxjabxj bajasgcjasg ",
      note: "blah blah If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the Tunnel connection type when starting the development serve",
      isDone: true
  },
  {
      date: 1691778178203,
      title: "Note 123 ASCGUgacjsB UGUGUJsc",
      note: "When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information",
      isDone: true
  },
  {
    date: 1691778171607,
    title: "Note 123 jabcxjabxj bajasgcjasg  hdavj",
    note: "blah blah If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the Tunnel connection type when starting the development serve",
    isDone: true
},
{
    date: 1691778178293,
    title: "Note 123 ASCGUgacjsB UGUGUJscs jdabvjab",
    note: "When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information",
    isDone: true
},
{
  date: 16917781716079,
  title: "Note 123 jabcxjabxj bajasgcjasg  hdavj",
  note: "blah blah If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the Tunnel connection type when starting the development serve",
  isDone: true
},
{
  date: 169177817829309,
  title: "Note 123 ASCGUgacjsB UGUGUJscs jdabvjab",
  note: "When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how Expo Development Server works for more information",
  isDone: false
},
]


const Tab = createBottomTabNavigator()

export default function MyApp() {
  console.log("hello from the myapp" )
  return (
    
      
      
      <Context.Provider value={MyNotes}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="MyNotes" component={Notes}/>
            
            <Tab.Screen 
            name="Create Notes" 
            component={MakeNote} 
            initialParams={{
              date: ''
            }}  
            />

          </Tab.Navigator>
        
        </NavigationContainer>
      </Context.Provider>
    
  )
}

 