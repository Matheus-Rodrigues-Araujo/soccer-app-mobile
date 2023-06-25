import { View, Text, Image, StyleSheet } from "react-native"

export default LeagueCard = ({name, country, code, logo, flag}) =>{
//    const navigate = useNavigate()
//    const leagueId = id
    return(
        <View style={league.container} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap:5}} >
            { logo && <Image style={{width:50, height:50, objectFit: 'contain'}}  source={{uri: logo}} /> }
            <Text style={league.title} >{name}</Text>
            </View>
        </View>
        )
}

const league = StyleSheet.create({
     container: {
        backgroundColor: '#474849',
        margin: 3,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 3,
        gap: 5,
        flex:1,
        height: 80,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 700
    }
})