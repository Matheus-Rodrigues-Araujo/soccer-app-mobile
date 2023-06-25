import { StyleSheet, Text, View, Button , ScrollView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import { Pressable, TouchableOpacity } from 'react-native';
import LiveMatch from '../components/LiveMatch';
import News from '../components/News';

export default function HomeScreen({navigation}) {
  const [text, setText] = useState('value')
  const [value, onChangeText] = useState('');


    return(
      <View style={styles.container} >



        <ScrollView >
            <LiveMatch />
            <News />



        </ScrollView>



      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#292929',
    borderColor: '#044694'
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
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  button: {
    flex: 1,
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