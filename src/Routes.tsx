import React from "react";
import {} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen, { ShortTasksData, TaskData } from "./pages/HomeScreen";
import TaskScreen from "./pages/TaskDetailsScreen";
import AddNewTaskScreen from "./pages/AddNewTaskScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: TaskData;
  TaskDetailsScreen: TaskData;
  AddNewTaskScreen: ShortTasksData;
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="TaskDetailsScreen"
          component={TaskScreen}
          options={{ title: "Task" }}
        />
        <Stack.Screen
          name="AddNewTaskScreen"
          component={AddNewTaskScreen}
          options={{ title: "New Task" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
