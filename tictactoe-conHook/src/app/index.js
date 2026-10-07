
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useTicTacToe } from '../hooks/useTicTacToe';

export default function Index() {
  const { activePlayer, board, isFinished, move, moves, restart, winner } = useTicTacToe();

  function jugar(indice){
    if(isFinished || !moves.includes(indice)) return;
    move(activePlayer, indice);
  }

  let mensaje;
  if(winner){
    mensaje = `¡Ganó ${winner}!`;
  } else if (isFinished){
    mensaje = "¡Empate!"
  } else {
    mensaje = `Turno de: ${activePlayer}`
  }

  const tablero = [...board];

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titulo}>TaTeTi</Text>
        <Text style={styles.subtitulo}>Utilizando el hook de los profes</Text>
        <Text style={styles.mensaje}> {mensaje} </Text>
      </View>

      <View style={styles.tablero}>
        {tablero.map((valor, indice) => (
          <TouchableOpacity key={indice} style={styles.casilla}  onPress={() => jugar(indice)}>
            <Text style={styles.ficha}>{valor === '_' ? '' : valor}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.botonReiniciar}>
        <Button title="Reiniciar" onPress={() => restart()} />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9cf0e3"
  },
  titulo: {
    marginBottom:30, 
    fontSize:40,
    color: "#000080",
    textAlign: "center"
  },
   subtitulo: {
    marginBottom:30, 
    fontSize:30,
    color: "#6d6da9",
    textAlign: "center"
  },
  mensaje: {
    marginBottom: 30,
    fontSize: 18,
    color: "#1a9c89",
    textAlign: "center"
  },
  botonReiniciar: {
    marginTop:30, 
    fontSize:20,
  },
  tablero: {
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  casilla: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81a1b5",
    padding: 10
  },
  ficha: {
    fontSize: 50,
    color: "#00ff3cfa"
  },
});