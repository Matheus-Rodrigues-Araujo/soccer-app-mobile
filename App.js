// import { } from 'react-native';
// import { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
// import { Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LeaguesScreen from './screens/LeaguesScreen';
import PlayersScreen from './screens/PlayersScreen';
import MatchesScreen from './screens/MatchesScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  // const [text, setText] = useState('value')
  // const [value, onChangeText] = useState('');


    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home', headerShown: true, headerStyle:{backgroundColor: 'black'}, headerTintColor: '#7ED957'}} />
          <Stack.Screen name='Leagues' component={LeaguesScreen} options={{title: 'Leagues', headerShown: true, headerStyle:{backgroundColor: 'black'}, headerTintColor: '#7ED957'}}/>
          <Stack.Screen name='Players' component={PlayersScreen} options={{title: 'Players', headerShown: true, headerStyle:{backgroundColor: 'black'}, headerTintColor: '#7ED957'}}/>
          <Stack.Screen name='Matches' component={MatchesScreen} options={{title: 'Matches', headerShown: true, headerStyle:{backgroundColor: 'black'}, headerTintColor: '#7ED957'}}/>
        </Stack.Navigator>

      </NavigationContainer>
    )
}

