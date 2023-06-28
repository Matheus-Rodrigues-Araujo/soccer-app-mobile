import { View, Text } from "react-native"
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner"
import InputField from "../components/InputField";

export default function MatchesScreen(){
    const [searchMatchs, setSearchMatches] = useState('')
    
    const handleSearch = (text) => {
        setSearchValue(text);
        const filteredData = leagues.filter((item) =>
          item.league['name'].toLowerCase().includes(text.toLowerCase())
        );
        // setLeagues(filteredData);
      };

    
    return(
        <View style={{flex:1,backgroundColor: 'black'}} >
            <InputField value={searchMatchs} handleChange={handleSearch} placeholder={'Matches'} />
            <View style={{flex:1, backgroundColor: 'gray'}} >
                <LoadingSpinner />
            </View>
        </View>
    )
    
}