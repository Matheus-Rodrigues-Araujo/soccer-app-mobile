import { View, Text, ScrollView, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import LeagueCard from '../components/LeagueCard'
import InputField from '../components/InputField'
import MyContext from "../features/MyContext";

const LeaguesScreen = () =>{
    const [leagues, setLeagues] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const contextValue = useContext(MyContext)
    
      const handleSearch = (text) => {
        setSearchValue(text);
        const filteredData = leagues.filter((item) =>
          item.league['name'].toLowerCase().includes(text.toLowerCase())
        );
        setLeagues(filteredData);
      };

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
                {/* <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}} >Find your favorite Leagues</Text>
                <Text style={{color: 'gray', fontSize: 20, textAlign: 'center'}} >Choose a league to explore!</Text>
                 */}
                <InputField value={searchValue} handleChange={handleSearch} placeholder={'Search...'}/>
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

export default LeaguesScreen;