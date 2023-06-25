import { StyleSheet, Text, View, Button, Image} from 'react-native';
import newsList from '../newsList'
const Information = ({image, title}) =>{
    return(
           <View style={news.information} >
               <Image style={{width: 300, height: 250}} source={image} />
               <Text style={news.informationTitle} >
                   {title}
               </Text>
           </View>
    )
}

export default function News(){
    return (
        <View style={news.container} >
            <Text style={news.text} >News</Text>
            <View style={news.contents} >

              {
                newsList.map( (item, index) => (
                    <Information key={index} image={item.image} title={item.title} />
                ))
              }

            </View>
        </View>
    )
}

const news = StyleSheet.create({
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
        padding: 2,
        marginBottom: 10
    },
    contents: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    information:{
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        borderColor: 'gray',
        borderTopWidth: 0.5,
        margin: 5,
        borderRadius: 3,


    },
    informationText: {
        color: 'black',
        padding: 10,
        textAlign: 'justify',

    },
    informationTitle: {
        fontWeight: 700,
        fontSize: 20,
        color: 'white',
        textAlign: 'justify',
        width: '100%'
    }
})
