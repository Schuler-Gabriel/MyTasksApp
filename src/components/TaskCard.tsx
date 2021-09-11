import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface TaskCardProps extends TouchableOpacityProps {
  cardTitle: string;
}

export default function TaskCard({ cardTitle, ...rest }: TaskCardProps) {
  return (
    <TouchableOpacity style={styles.buttonTasks} activeOpacity={0.7} {...rest}>
      <Text style={styles.textTask}>{cardTitle}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonTasks: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textTask: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
