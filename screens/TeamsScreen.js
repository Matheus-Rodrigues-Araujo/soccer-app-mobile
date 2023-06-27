import { View, Text } from "react-native"
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner"
import InputField from "../components/InputField";

export default function TeamsScreen(){
    const [searchTeams, setSearchTeams] = useState('')
    
    const handleSearch = (text) => {
        setSearchValue(text);
        const filteredData = leagues.filter((item) =>
          item.league['name'].toLowerCase().includes(text.toLowerCase())
        );
        setLeagues(filteredData);
      };

    
    return(
        <View style={{backgroundColor: 'black'}} >
            <InputField inputValue={searchTeams} searchInput={handleSearch} />
        </View>
    )
    
}