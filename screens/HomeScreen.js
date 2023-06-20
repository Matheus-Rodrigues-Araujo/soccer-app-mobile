import { StyleSheet, Text, View, Button , ScrollView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import { Pressable, TouchableOpacity } from 'react-native';



export default function HomeScreen() {
  const [text, setText] = useState('value')
  const [value, onChangeText] = useState('');


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

        <View style={{flex:10, padding: 20, marginTop: 20, justifyContent: 'flex-start', display: 'flex', marginTop: 50}} >
            
            <Text style={{fontWeight: 800, color: '#7ED957', fontSize: 52, textAlign: 'center'}} >SoccerNews</Text>
            <Text style={{fontWeight: 600, color: 'white', fontSize: 20, textAlign:'justify', padding: 18}} >"Unleash your soccer passion with our app - where every kick counts!"</Text>
            {/* OBS: Soccer ball image here */}
           
        </View>

        <View style={{flex:1, flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly'}}>

          <TouchableOpacity onPress={this._onPressButton} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Leagues</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Players</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Matches</Text>
            </View>
          </TouchableOpacity>


        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    // display: 'flex',
    justifyContent: 'space-between',
    borderWidth: 2,
    // flexDirection: 'column',
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
    width:'100%',
    // padding:10,
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  button: {
    flex: 1,
    // width:'25%',
    // backgroundColor: 'rgb(57, 255, 44)',
    borderRadius:3,
    padding:10,
    display: 'flex',
    justifyContent: 'center'
  },
  buttonText:{
    textAlign: 'center',
    textTransform:'uppercase',
    fontWeight:600,
    marginVertical: 'auto',
    fontSize: 10,
    color: 'white'
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