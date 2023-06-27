import { View, Text, Button, Pressable } from "react-native";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import LoadingSpinner from "../components/LoadingSpinner";
import InputField from "../components/InputField";
import MyContext from "../features/MyContext";

export default function PlayersScreen(){
    const [id, setId] = useState()
    const [season, setSeason] = useState()
    const [player, setPlayer] = useState()

    let loading = false

    const searchPlayer = async () =>{
        loading = true

        const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
            id: 12,
            season: 2021
        },
        headers: {
            'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
        };

        try {
            const result = await axios.request(options);
            const {response} = result.data
            setPlayer(response)
        
        } catch (error) {
            console.error(error);
        }
    }

    // const handleSearch = (text) => {
    //     setSearchValue(text);
    //     const filteredData = leagues.filter((item) =>
    //       item.league['name'].toLowerCase().includes(text.toLowerCase())
    //     );
    //     setLeagues(filteredData);
    //   };

    useEffect(()=>{
        searchPlayer()
    }, [])

    return(
        <View  >
            <View style={{marginBottom:10}} >
                <View >
                    <InputField inputValue={id} searchInput={()=> setId(id)} placeholder={'Id'}/>
                </View>

                <View>
                    <InputField inputValue={season} searchInput={()=> setSeason(season)} placeholder={'Season'}/>
                </View>

                {/* <Pressable style={{backgroundColor:'#00BF63', color: 'white', marginHorizontal:30}} onPress={searchPlayer} >
                    <Text style={{color: 'white', fontWeight:700, fontSize:20, textAlign: 'center'}} >Search</Text>
                </Pressable> */}
                <Button title='press me' onPress={()=>searchPlayer()} />
            </View>

            {
                player?.['0']?.player && <Text style={{color: 'black'}} >{player['0'].player.name}</Text>
            }
        </View>
    )
}

// import axios from 'axios'
// import { useContext, useEffect, useState } from 'react';

// export const Players = () =>{
//     const [players, setPlayers] = useState([])
//     const {leagues} = useContext(ThemeContext)
    
//     const getPlayer = async(id)=>{
//         const options = {
//             method: 'GET',
//             url: 'https://api-football-v1.p.rapidapi.com/v3/players',
//             params: {
//               league: id,
//               season: '2020'
//             },
//             headers: {
//               'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           };
          
//           try {
//               const response = await axios.request(options);
//               setPlayers(response.data);
//           } catch (error) {
//               console.error(error);
//           }
//     }

//     const InputSearch = () =>{
//         return(
//             <>
//                 <div class="input-group mb-3 mx-auto" style={{width: '50%'}} >
//                     <span class="input-group-text bg-dark input-span fs-5" id="basic-addon1">Teams</span>
//                     <input 
//                         type="text" 
//                         className="form-control" 
//                         placeholder="Search the teams..." 
//                         aria-label="Search the teams..." 
//                         aria-describedby="basic-addon1"
                        
                        
//                     />
//                 </div>
//                 <p>Must have at least 3 letters</p>
//             </>
//         )
//     }

//     return(
//         <table class="table caption-top bg-dark text-white">
//         <caption className="fs-4">Seasons</caption>
//         <thead>
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">League</th>
//                 <th scope="col">Teams</th>
//                 <th scope="col">Current</th>
//             </tr>
//         </thead>
//         <tbody>
        
//         </tbody>
//     </table>
        
//     )
   
// }

// console.log(leagues.response[0].league.id)
    // if(player.response){
    //     return(
    //         <div>
    //             <p>Name: {player.response[0]['player'].name}</p>
    //             <p>Firstname: {player.response[0]['player'].firstname}</p>
    //             <p>Lastname: {player.response[0]['player'].lastname}</p>
    //             {/* <p>Team: {player.response['player']}</p> */}
    //             <img src={player.response[0]['player'].photo} alt='a neymer photo' />
    //             <img src={player.response[0]['statistics'][0].team.logo} alt='a team' />

    //         </div>

            
    //     )
    // }else{
    //     return (
    //         <Spinner/>
    //     )
    // }