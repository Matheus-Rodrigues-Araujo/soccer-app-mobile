import {View, StyleSheet, ActivityIndicator} from 'react-native'

export default function LoadingSpinner(){
    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size='large' color='#00BF63' />
        </View>
    )
}


const styles = StyleSheet.create({
      container: {
            backgroundColor: 'black',
            flex: 1,
            justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
     },
})