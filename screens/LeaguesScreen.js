import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react"
import axios from 'axios';
import LeagueCard from '../components/LeagueCard'

const LeaguesScreen = () =>{
    const [leagues, setLeagues] = useState([])
    // const [value, setValue] = useState("")
    // const [filteredArray, setFilteredArray] = useState(array1);
    const [searchValue, setSearchValue] = useState('');
   
    
   
    //   const array1 = [
    //     { name: 'John Doe', age: 25 },
    //     { name: 'Jane Smith', age: 30 },
    //     { name: 'Mark Johnson', age: 35 },
    //     { name: 'Sara Anderson', age: 28 },
    //   ];
    
    
      const handleSearch = (text) => {
        setSearchValue(text);
        const filteredData = leagues?.response.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        setLeagues(filteredData);
      };
    
  
    };
    

    function searchLeagues(){
        if(leagues && leagues.response){
            const matches = leagues.response.filter(item => {
                item.name.includes('E')
            }
            )
    
            setLeagues(matches.response)
        }
        
    }

    useEffect(()=>{
        searchLeagues()
    }, [])
    // function search(arr, str){arr.filter(item => {for(let name in item){if(item.name.includes(str)){return console.log(item)}}return false})}


    const getLeagues = async (newData=null) =>{

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
            const {data} = response
            setLeagues(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getLeagues()
    },[])

    // function Render (){
    //     const {response} = leagues[0]
    //     return(
    //         <View style={{padding: 10}} >
    //         {
    //         response && response.map(
    //             (e, index)=>(<LeagueCard
    //                 key={index}
    //                 name={e.league.name}
    //                 logo={e.league.logo}
    //             />))
    //         }
    //         </View>
    //     )
    // }


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
                  value={'E'}
                  onChangeText = {searchLeagues}
                  
                />
                 <View style={{padding: 10}} >
                    {leagues.response && leagues.response.map(
                        (e, index)=>(<LeagueCard
                            key={index}
                            name={e.league.name}
                            logo={e.league.logo}
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