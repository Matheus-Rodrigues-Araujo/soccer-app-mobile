import { StyleSheet, Text, View, Button , ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';

export default function App() {
  const [text, setText] = useState('value')
  const [value, onChangeText] = useState('');

    return(
      <View style={styles.container} >
        <View style={{padding: 10,}}>
          <Text style={{color: 'white', textAlign: 'center', fontWeight: 900, fontSize: 25, padding: 10}} >
            Soccer News
          </Text>
        </View>

        <View style={styles.navbar}>
            <TextInput
              editable
              maxLength={30}
              placeholder='Search...'
              onChangeText={text => onChangeText(text)}
              value={value}
              style={styles.input}
            />

            <View style={styles.buttonsContainer} >
              <Pressable
                style={styles.button} 
                backgroundColor='white'
                onPress={()=> setText('Leagues page')}> 
                <Text style={styles.buttonText}>Leagues</Text>
              </Pressable>
              
              <Pressable 
                style={styles.button} 
                backgroundColor='white'
                onPress={()=> setText('Teams page')}
                
                >
                <Text style={styles.buttonText}>Teams</Text>
              </Pressable>
              
              <Pressable 
                style={styles.button} 
                backgroundColor='white'
                onPress={()=> setText('Players')}>
                <Text style={styles.buttonText}>Players</Text>
               </Pressable>

              <Pressable
                style={styles.button} 
                backgroundColor='white'
                onPress={()=> setText('Matches')}>
                <Text style={styles.buttonText}>Matches</Text>
              </Pressable> 
            </View>
        </View>

        <View>
            {text && value && <Text style={{color:'white'}} > {text + ' '+value} </Text>}
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    backgroundColor: 'black',
    padding:10,
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
  }
});