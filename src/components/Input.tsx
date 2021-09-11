import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface InputProps extends TextInputProps {
  inputDescription: string;
}

export default function Input({ inputDescription, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={inputDescription}
      placeholderTextColor="#555"
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    borderRadius: 7,
    padding: 10,
    marginTop: 30,
  },
});
