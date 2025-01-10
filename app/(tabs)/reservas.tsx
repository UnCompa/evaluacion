import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import { router } from "expo-router";
const reservasForm = () => {
  const [idUsuario, setUsuario] = useState("");
  const [idHabitacion, setHabitacion] = useState("");
  const [FechaEntrada, setEntrada] = useState("");
  const [FechaSalida, setSalida] = useState("");

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Ingreso Reservas
      </Text>
      <Input
        placeholder="ID Usuario"
        value={idUsuario}
        onChangeText={setUsuario}
      />
      <Input
        placeholder="ID Habitación"
        value={idHabitacion}
        onChangeText={setHabitacion}
      />
      <Input
        placeholder="Fecha Entrada"
        value={FechaEntrada}
        onChangeText={setEntrada}
      />
      <Input
        placeholder="Fecha Salida"
        value={FechaSalida}
        onChangeText={setSalida}
      />
      <Button style={styles.button} title="Guardar" />
      <Button style={styles.button} title="Visualizar Reservas" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, padding: 15, backgroundColor: "#fff" },
  title: { textAlign: "center", marginBottom: 20 },
  button: { padding: 10 },
});

export default reservasForm;
