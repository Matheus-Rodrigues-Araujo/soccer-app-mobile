import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './screens/HomeScreen';
import LeaguesScreen from './screens/LeaguesScreen';
import PlayersScreen from './screens/PlayersScreen';
import MatchesScreen from './screens/MatchesScreen';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={styles.navigator}>
        <Drawer.Screen name="Home" component={HomeScreen}
         options={{
            headerTitle: () => (
                <View  style={{display: 'flex', width: '100%',flexDirection: 'row', alignItems: 'center'}} >
                    {/*<Image style={{width: 40, height: 40, marginLeft: '52%'}} source={require("./soccer-ball-logo.png")} />*/}

                    {/*<Text style={{color: '#7ED959', fontSize: 21}} >APP__V1.0</Text>*/}
                </View>
            )
         }}
         />
        <Drawer.Screen name="Leagues" component={LeaguesScreen} />
        <Drawer.Screen name="Players" component={PlayersScreen} />
        <Drawer.Screen name="Matches" component={MatchesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    navigator: {
        drawerStyle:{backgroundColor: 'black'},
        headerStyle:{
            borderBottomWidth: 0,
            backgroundColor: 'black',
            borderBottomColor: 'red',

        },
        headerTintColor: 'white',
        drawerTintColor: 'yellow',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
    }
})

{/*backgroundColor: '#044694', */}
