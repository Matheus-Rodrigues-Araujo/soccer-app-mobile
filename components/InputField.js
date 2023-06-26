import { StyleSheet, TextInput } from "react-native"

export default function InputField({inputValue, searchInput}){
  return (
    <TextInput
      editable
      maxLength={30}
      placeholder='Search...'
      style={styles.input}
      value={inputValue}
      onChangeText={searchInput}
    />
)}


const styles = StyleSheet.create({
  input: {
      height: 40,
      marginHorizontal: 30,
      borderWidth: 3,
      padding: 10,
      borderRadius:3,
      backgroundColor: 'white',
      textDecorationLine:'none'
    }
  }
)