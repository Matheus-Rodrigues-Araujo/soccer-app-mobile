import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
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
                  <StatusBar barStyle="light-content" backgroundColor="black" />
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
        drawerStyle:{
          backgroundColor: 'black'
        },
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
