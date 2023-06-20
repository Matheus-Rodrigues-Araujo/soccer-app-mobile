// import { StyleSheet, Text, Button , ScrollView } from 'react-native';
// import { useEffect, useState, useCallback } from 'react';
// import { TextInput } from 'react-native';
// import { Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LeaguesScreen from './screens/LeaguesScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  // const [text, setText] = useState('value')
  // const [value, onChangeText] = useState('');


    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Leagues' component={LeaguesScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    )
}

