import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function LiveMatch(){
    return (
        <View style={match.container} >
            <Text style={match.text} >Live</Text>
            <View style={match.teams} >
                <View style={match.shield} >
                    <Image style={{width: 80, height: 80}} source={require("../images/arsenal-logo.png")} />
                    <Text style={{color: 'white', fontSize: 16}} >Arsenal</Text>
                </View>

                <View style={match.score} >
                   <Text style={match.scoreText} > 1 - 3</Text>
                </View>

                <View style={match.shield} >
                    <Image style={{width: 80, height: 80}} source={require("../images/chelsea-logo.png")} />
                      <Text style={{color: 'white', fontSize: 16}} >Chelsea</Text>
                </View>
            </View>
        </View>
    )
}

const match = StyleSheet.create({
    container: {
        backgroundColor: '#474849',
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,

    },
    text:{
        color: 'white',
        fontWeight: 600,
        backgroundColor: 'black',
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        padding: 2
    },
    teams: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    shield: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    score: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
    },
    scoreText: {
        color: 'white',
        fontSize: 20,
        fontWeight:800
    }
})