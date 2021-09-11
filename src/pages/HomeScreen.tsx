import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Routes";

import Button from "../components/Button";
import TaskCard from "../components/TaskCard";
import Input from "../components/Input";

export interface ShortTasksData {
  id: string;
  name: string;
}
export interface TaskData {
  id: string;
  name: string;
  dueDate: Date;
  description: string;
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

export default function HomeScreen() {
  const [newTask, setNewTask] = useState("");
  const [myTasks, setMyTasks] = useState<ShortTasksData[]>([]);

  const navigation = useNavigation<HomeScreenProp>();

  function handleAddTask() {
    const data = {
      id: String(new Date().getTime()),
      name: newTask,
    };
    setMyTasks((oldState) => [...oldState, data]);
    navigation.navigate("AddNewTaskScreen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome,</Text>

      <Input inputDescription={"New Task"} onChangeText={setNewTask} />

      <Button title="Add" onPress={handleAddTask} />

      <Text
        style={[
          styles.title,
          {
            marginVertical: 50,
          },
        ]}
      >
        My Tasks
      </Text>

      <FlatList
        data={myTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            cardTitle={item.name}
            onPress={() => navigation.navigate("TaskDetailsScreen")}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },
});
