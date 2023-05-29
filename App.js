import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
export default function App() {
  const [data, setData] = useState([])

  const getData = async()=>{

    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      headers: {
        'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    }


    useEffect(()=>{
      getData()
    }, [])

    return (
      <>
        <View style={styles.container}>
          {/* <Text>Type of data: {data?.response && data?.response[0].league.name}</Text> */}
          <StatusBar style="auto" />
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app right now!</Text>
          <StatusBar style="auto" />
        </View>
      </>
    );

   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
