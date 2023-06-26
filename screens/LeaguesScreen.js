import { View, Text, ScrollView, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react"
import axios from 'axios';
import LeagueCard from '../components/LeagueCard'
import InputField from '../components/InputField'

const LeaguesScreen = () =>{
    const [leagues, setLeagues] = useState([])
    const [searchValue, setSearchValue] = useState('');

    
      const handleSearch = (text) => {
        setSearchValue(text);
        const filteredData = leagues.filter((item) =>
          item.league['name'].toLowerCase().includes(text.toLowerCase())
        );
        setLeagues(filteredData);
      };
    
  
    // function search(arr, str){arr.filter(item => {for(let name in item){if(item.name.includes(str)){return console.log(item)}}return false})}


    const getLeagues = async () =>{

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            headers: {
                'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        try {
            const result = await axios.request(options)
            const {response} = result.data
            setLeagues(response)
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getLeagues()
    },[])

   
    if(leagues){
        return(
            <ScrollView style={{backgroundColor: '#0B0B0B'}} >
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}} >Find your favorite Leagues</Text>
                <Text style={{color: 'gray', fontSize: 20, textAlign: 'center'}} >Choose a league to explore!</Text>
                
                <InputField inputValue={searchValue}  searchInput={handleSearch} />
                 <View style={{padding: 10}} >
                    {
                    leagues && leagues.map(
                        (e, index)=>(<LeagueCard
                            key={index}
                            name={e.league.name}
                            logo={e.league.logo}
                        />))
                    }
                </View>
           
            </ScrollView>
         )
    }
}

const leagueScreenStyle = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 30,
        borderWidth: 3,
        padding: 10,
        borderRadius:3,
        backgroundColor: 'white',
        textDecorationLine:'none'
      },
      container: {
            flex: 1,
            justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
     },
})



export default LeaguesScreen;