import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import Moment from "moment";

import DetailCard from "../components/detailCard";
import { TaskData } from "./HomeScreen";

const initialTask = {
  id: "",
  name: "",
  dueDate: new Date("sept 13, 2021"),
  description: "",
};

export default function TaskScreen() {
  const [taskDetails, setTaskDetails] = useState<TaskData>(initialTask);

  const task = {
    id: "1",
    name: "Estudar React Native",
    dueDate: new Date("2021/09/13"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  useEffect(() => {
    setTaskDetails(task);
  }, []);

  Moment.locale("en");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskName}>{taskDetails.name}</Text>

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
