import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
export default function App() {
  // const [data, setData] = useState([])

  const iconsList = {
        thunder: <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#39ff2c" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
      </svg>
    }

  /* const getData = async()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  //   };
    
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   }


  //   useEffect(()=>{
  //     getData()
   }, [])*/

    return(
      <View style={styles.container} >
        <View
        style={{
          backgroundColor: 'black',
          height: '8%',
          padding: 10
        }}
        >
          <Text style={{color: 'white', textAlign: 'center', fontWeight: 700, fontSize: 20, padding: 10}}>Soccer
          News</Text>
        </View>

        <View
        style={{
          height: '90%',
          padding:10
        }}
        >

          <Text style={{color: 'black', fontWeight: 700,textAlign: 'center', fontSize: 25}}>
            Soccer information everyday!
          </Text>
          <Text style={{color: 'black', marginTop: 5}}>
            Get to know all the statistics, news and curiosities of soccer around the world. With our website you will have in real time the most precious data of sports around the world!
          </Text>
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
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingTop: 30,
  },
});