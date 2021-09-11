import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

import Moment from "moment";

import DetailCard from "../components/detailCard";
import { TaskData } from "./HomeScreen";
import { RootStackParamList } from "../Routes";

type TaskDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "TaskDetailsScreen"
>;

const initialTask = {
  id: "1",
  name: "Estudar React Native",
  dueDate: String(Moment(new Date().getTime()).format("MMM DD, yyyy")),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. ",
};

export default function TaskScreen() {
  const [taskDetails, setTaskDetails] = useState<TaskData>(initialTask);
  const route = useRoute<TaskDetailsScreenRouteProp>();

  useEffect(() => {
    const task = {
      id: route.params.id,
      name: route.params.name,
      dueDate: route.params.dueDate,
      description: route.params.description,
    };
    setTaskDetails(task);
  }, []);

  Moment.locale("en");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskName}>{route.params.name}</Text>

      <Text style={styles.detailName}>Due date:</Text>

      <DetailCard
        cardTitle={String(Moment(taskDetails.dueDate).format("MMM DD, yyyy"))}
      />

      <Text style={styles.detailName}>Description:</Text>

      <DetailCard cardTitle={taskDetails.description} />
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
