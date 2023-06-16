import { StyleSheet, Text, View, Button , ScrollView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [text, setText] = useState('value')
  const [value, onChangeText] = useState('');
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


    return(
      <View style={styles.container} >
        <View style={{padding: 15, display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent:'space-between', padding: 10,  borderWidth:2,borderBottomColor: '#7ED957'}}>
          <Text style={{color: '#7ED957', fontWeight: 900, fontSize: 20, padding: 10}} >
            Soccer News
          </Text>
        
          <View style={{padding: 15, display: 'flex', flexDirection: 'row', alignContent: 'center', padding: 10}}>
            <Text
            style={{color: 'white', padding: 5}}
            >Search</Text>
           </View>
        </View>
        

        {/* <View style={styles.navbar}>
            <TextInput
              editable
              maxLength={30}
              placeholder='Search...'
              onChangeText={text => onChangeText(text)}
              value={value}
              style={styles.input}
            />

            
        </View> */}

        <View style={{padding: 20, marginTop: 20}} >
            
            <Text style={{fontWeight: 800, color: '#7ED957', fontSize: 52, textAlign: 'center'}} >SoccerNews</Text>
            <Text style={{fontWeight: 600, color: 'white', fontSize: 20, textAlign:'justify', padding: 18}} >"Unleash your soccer passion with our app - where every kick counts!"</Text>
            {/* OBS: Soccer ball image here */}
           
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    display: 'flex',
    borderWidth: 2,
    backgroundColor: 'black',
  },
  navbar:{
    padding:10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
  },
  buttonsContainer:{
    padding:10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgb(57, 255, 44)',
    borderRadius:3,
    padding:5,
  },
  buttonText:{
    textAlign: 'center',
    textTransform:'uppercase',
    fontWeight:800,
    marginVertical: 'auto'
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 3,
    padding: 10,
    borderRadius:5,
    borderColor: 'rgb(57, 255, 44)',
    backgroundColor: 'white',
    textDecorationLine:'none'
  },
  text: {
    fontFamily: 'Nunito',
  },
});