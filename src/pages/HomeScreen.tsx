import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Task,
  FlatList,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

import Button from "../components/Button";
import TaskCard from "../components/TaskCard";
import { RootStackParamList } from "../Routes";
import Input from "../components/Input";

export interface TasksData {
  id: string;
  name: string;
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

export default function HomeScreen() {
  const [newTask, setNewTask] = useState("");
  const [myTasks, setMyTasks] = useState<TasksData[]>([]);

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
