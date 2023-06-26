import { View, Text } from "react-native"
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner"
import InputField from "../components/InputField";

export default function TeamsScreen(){
    const [searchTeams, setSearchTeams] = useState('')
    let handleSearch;


    
    return(
        <View style={{backgroundColor: 'black'}} >
            <InputField inputValue={searchPlayer} searchInput={setSearchPlayer} />
        </View>
    )
    
}