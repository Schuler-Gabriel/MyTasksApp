import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface DetailCardProps extends TouchableOpacityProps {
  cardTitle: string;
}

export default function DetailCard({ cardTitle, ...rest }: DetailCardProps) {
  return (
    <TouchableOpacity style={styles.buttonTitle} activeOpacity={1}>
      <Text style={styles.title}>{cardTitle}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonTitle: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
