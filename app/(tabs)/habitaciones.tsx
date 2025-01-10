import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import { router } from 'expo-router'
const HabitacionesForm = () => {
  const [idUsuario, setUsuario] = useState("");
  const [idHabitacion, setHabitacion] = useState("");
  const [FechaEntrada, setEntrada] = useState("");
  const [FechaSalida, setSalida] = useState("");

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Registro Habitaciones
      </Text>
      <Input
        placeholder="Numero Habitacion"
        value={idUsuario}
        onChangeText={setUsuario}
        keyboardType="numeric"
      />
      <Input
        placeholder="Capacidad"
        value={idHabitacion}
        onChangeText={setHabitacion}
        keyboardType="numeric"
      />
      <Input
        placeholder="Tipo de Habitación"
        value={FechaSalida}
        onChangeText={setSalida}
      />
      <Button style={styles.button} title="Guardar" />
      <Button
        style={styles.button}
        title="Visualizar Habitaciones"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, padding: 15, backgroundColor: "#fff" },
  title: { textAlign: "center", marginBottom: 20 },
  button: { padding: 10 },
});

export default HabitacionesForm;
