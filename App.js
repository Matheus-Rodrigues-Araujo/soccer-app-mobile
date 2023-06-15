import { StyleSheet, Text, View, Button , ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';



export default function App() {
  const [text, setText] = useState('')

  const iconsList = {
        thunder: <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#39ff2c" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
      </svg>
    }


    const xml = `
      <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#39ff2c" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
      </svg>
    `


    return(
      <View style={styles.container} >
        <View
        style={{
          backgroundColor: 'black',
          height: '10%',
          padding: 10
        }}
        >
          <Text style={{color: 'white', textAlign: 'center', fontWeight: 700, fontSize: 20, padding: 10}}>
            Soccer{}News
          </Text>
        </View>

        <View
        style={{
          height: '10',
          padding:10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
        }}
        >

          <Button title='Leagues' style={styles.button} color='rgb(57, 255, 44)' onPress={()=> setText('Leagues page')} />
          <Button title='Teams' style={styles.button} color='rgb(57, 255, 44)' onPress={()=> setText('Teams page')}/>
          <Button title='Players' style={styles.button} color='rgb(57, 255, 44)' onPress={()=> setText('Players')}/>
          <Button title='Matches'  style={styles.button} color='rgb(57, 255, 44)' onPress={()=> setText('Matches')}/>

        </View>

        <View>
            {text && text}
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
    paddingTop: 30
  },
  button: {
    flex: 1,
    height: '30px',
  }
});