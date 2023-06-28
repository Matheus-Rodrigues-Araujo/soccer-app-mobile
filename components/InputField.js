import { StyleSheet, TextInput } from "react-native"

export default function InputField({value, handleChange, placeholder}){
  return (
    <TextInput
      editable
      maxLength={30}
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={handleChange}
    />
)}


const styles = StyleSheet.create({
  input: {
      height: 40,
      marginHorizontal: 30,
      marginVertical: 20,
      borderWidth: 3,
      padding: 10,
      borderRadius:3,
      backgroundColor: 'white',
      textDecorationLine:'none'
    }
  }
)