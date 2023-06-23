import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Match(){
    return (
        <View style={match.container} >
            <Text style={match.text} >Live</Text>
            <View style={match.teams} >
                <View style={match.shield} >
                    <Image style={{width: 80, height: 80}} source={require("../arsenal-logo.png")} />
                    <Text style={{color: 'black', fontSize: 16}} >Arsenal</Text>
                </View>

                <View style={match.score} >
                   <Text style={match.scoreText} > 1 - 3</Text>
                </View>

                <View style={match.shield} >
                    <Image style={{width: 80, height: 80}} source={require("../chelsea-logo.png")} />
                      <Text style={{color: 'black', fontSize: 16}} >Chelsea</Text>
                </View>
            </View>
        </View>
    )
}

const match = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,

    },
    text:{
        color: 'white',
        fontWeight: 600,
        backgroundColor: '#00BF63',
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
        color: 'black',
        fontSize: 20,
        fontWeight:700
    }
})
