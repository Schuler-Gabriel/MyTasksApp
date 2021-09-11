import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";

import Button from "../components/Button";
import Input from "../components/Input";
import { TaskData } from "./HomeScreen";

type AddNewTaskProp = StackNavigationProp<
  RootStackParamList,
  "AddNewTaskScreen"
>;

export default function AddNewTaskScreen() {
  const [newTask, setNewTask] = useState<TaskData>();

  const navigation = useNavigation<AddNewTaskProp>();

  const task = {
    id: "1",
    name: "Estudar React Native",
  };

  function handleSaveTask() {
    navigation.navigate("HomeScreen");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>

      <Text style={styles.detailName}>Due date:</Text>

      <Text style={styles.detailName}>Description:</Text>

      <Input inputDescription={"enter a description"} multiline={true} />

      <Button title={"Save task"} onPress={handleSaveTask} />
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
