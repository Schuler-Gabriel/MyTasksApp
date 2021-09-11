import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

import Button from "../components/Button";
import Input from "../components/Input";
import { TaskData } from "./HomeScreen";

type AddNewTaskProp = StackNavigationProp<
  RootStackParamList,
  "AddNewTaskScreen"
>;

export default function AddNewTaskScreen() {
  const [newDate, setNewDate] = useState<String>(
    Moment(new Date().getTime()).format("MMM DD, yyyy")
  );
  const [dateVisibility, setDateVisibility] = useState(false);
  const [newTask, setNewTask] = useState<TaskData>();

  const navigation = useNavigation<AddNewTaskProp>();

  const task = {
    id: "1",
    name: "Estudar React Native",
  };

  function showDatePicker() {
    setDateVisibility(true);
  }

  function hideDatePicker() {
    setDateVisibility(false);
  }

  function handleConfirm(date: Date) {
    setNewDate(Moment(date).format("MMM DD, yyyy"));
    hideDatePicker();
  }

  function handleSaveTask() {
    navigation.navigate("HomeScreen");
    // navigation.navigate("HomeScreen", {
    //   id: new Date().getTime(),
    //   name: string,
    //   dueDate: Date,
    //   description: string,
    // });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>

      <Text style={styles.detailName}>Due date:</Text>

      <TouchableOpacity style={styles.buttonData} onPress={showDatePicker}>
        <Text style={styles.buttonDataText}>{newDate}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={dateVisibility}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

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
  buttonData: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonDataText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
