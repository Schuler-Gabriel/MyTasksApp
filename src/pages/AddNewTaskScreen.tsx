import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Input from "../components/Input";

export interface TaskProps {
  id: string;
  name: string;
  dueDate: Date;
  description: string;
}

export default function AddNewTaskScreen() {
  const [newDate, setNewDate] = useState();
  const task = {
    id: "1",
    name: "Estudar React Native",
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>

      <Text style={styles.detailName}>Due date:</Text>

      <Text style={styles.detailName}>Description:</Text>

      <Input inputDescription={"enter a description"} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  taskName: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  detailName: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
});
