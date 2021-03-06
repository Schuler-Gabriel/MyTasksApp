import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Routes";

import Moment from "moment";

import Button from "../components/Button";
import TaskCard from "../components/TaskCard";
import Input from "../components/Input";

export interface ShortTasksData {
  name: string;
}
export interface TaskData {
  id: string;
  name: string;
  dueDate: string;
  description: string;
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, "HomeScreen">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "HomeScreen">;

export default function HomeScreen() {
  const [newTask, setNewTask] = useState<string>("");
  const [myTasks, setMyTasks] = useState<TaskData[]>([]);

  const navigation = useNavigation<HomeScreenProp>();
  const route = useRoute<HomeScreenRouteProp>();

  function handleAddTask() {
    navigation.navigate("AddNewTaskScreen", { name: newTask });
  }

  useEffect(() => {
    if (route.params?.id) {
      const task = {
        id: route.params.id,
        name: route.params.name,
        dueDate: route.params.dueDate,
        description: route.params.description,
      };
      setMyTasks((oldState) => [...oldState, task]);
    }
  }, [route.params?.id]);

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
            onPress={() =>
              navigation.navigate("TaskDetailsScreen", {
                id: item.id,
                name: item.name,
                dueDate: item.dueDate,
                description: item.description,
              })
            }
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
