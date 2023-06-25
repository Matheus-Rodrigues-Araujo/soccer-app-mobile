import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react"
import axios from 'axios';
import LeagueCard from '../components/LeagueCard'

const LeaguesScreen = () =>{
    const [leagues, setLeagues] = useState([])


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
            const response = await axios.request(options);
            setLeagues(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getLeagues()
    },[])


    if(leagues.response){
        return(
            <ScrollView style={{backgroundColor: '#0B0B0B'}} >
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}} >Find your favorite Leagues</Text>
                <Text style={{color: 'gray', fontSize: 20, textAlign: 'center'}} >Choose a league to explore!</Text>
                <TextInput
                  editable
                  maxLength={30}
                  placeholder='Search...'
                  style={leagueScreenStyle.input}
                />
                 <View style={{padding: 10}} >
                    {leagues.response && leagues.response.map(
                        (e, index)=>(<LeagueCard
                            key={index}
                            /*id={e.league.id}*/
                            name={e.league.name}
                            logo={e.league.logo}
                            /*country={e.country.name}
                            code={e.country.code}
                            flag={e.country.flag}*/
                        />))}
                </View>
            </ScrollView>
         )
    }else{
        return(
        <View style={{flex: 1, backgroundColor: '#0B0B0B', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}} >Loading...</Text>
           </View>
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
})



export default LeaguesScreen;