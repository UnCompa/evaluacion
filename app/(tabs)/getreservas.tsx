import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Input, Text } from "@rneui/base";

const GetReservas = () => {
  const [idUsuario, setUsuario] = useState("");
  const [idHabitacion, setHabitacion] = useState("");
  const [FechaEntrada, setEntrada] = useState("");
  const [FechaSalida, setSalida] = useState("");

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Visualizar Reservas" />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, padding: 15, backgroundColor: "#fff" },
  title: { textAlign: "center", marginBottom: 20 },
  button: { padding: 10 },
});

export default GetReservas;
