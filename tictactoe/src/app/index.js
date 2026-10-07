
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Index() {

  const tableroInicial = ["", "", "", "", "", "", "", "", ""];
  const [tablero, setTablero] = useState(tableroInicial);
  const [valorTurno, setValorTurno] = useState('X');
  const [ganador, setGanador] = useState(null);

  function jugar(indice){
    if (tablero[indice] !== "" || ganador) return;

    const elTablero = [...tablero];
    elTablero[indice] = valorTurno;
    setTablero(elTablero);
    verGanador(elTablero);
    
    if (valorTurno === "X"){
      setValorTurno("O");
    } else {
      setValorTurno("X");
    }
  }

  function verGanador(arrayTablero){

    //GANADOR X
    if (arrayTablero[0]  === "X" && arrayTablero[1]  === "X" && arrayTablero[2] === "X"){
      setGanador("X");
    }
    if (arrayTablero[3]  === "X" && arrayTablero[4]  === "X" && arrayTablero[5] === "X"){
      setGanador("X");
    }
    if (arrayTablero[6]  === "X" && arrayTablero[7]  === "X" && arrayTablero[8] === "X"){
      setGanador("X");
    }
      if (arrayTablero[0] === "X" && arrayTablero[3]  === "X" && arrayTablero[6] === "X"){
      setGanador("X");
    }
      if (arrayTablero[1] === "X" && arrayTablero[4]  === "X" && arrayTablero[7] === "X"){
      setGanador("X");
    }
      if (arrayTablero[2] === "X" && arrayTablero[5] === "X" && arrayTablero[8] === "X"){
      setGanador("X");
    }
      if (arrayTablero[2] === "X" && arrayTablero[4] === "X" && arrayTablero[6] === "X"){
      setGanador("X");
    }
      if (arrayTablero[0] === "X" && arrayTablero[4] === "X" && arrayTablero[8] === "X"){
      setGanador("X");
    }

     //GANADOR O
    if (arrayTablero[0]=== "O" && arrayTablero[1]=== "O" && arrayTablero[2] === "O"){
      setGanador("O");
    }
    if (arrayTablero[3]=== "O" && arrayTablero[4]=== "O" && arrayTablero[5] === "O"){
      setGanador("O");
    }
    if (arrayTablero[6]=== "O" && arrayTablero[7]=== "O" && arrayTablero[8] === "O"){
      setGanador("O");
    }
      if (arrayTablero[0]=== "O" && arrayTablero[3]=== "O" && arrayTablero[6] === "O"){
      setGanador("O");
    }
      if (arrayTablero[1]=== "O" && arrayTablero[4]=== "O" && arrayTablero[7] === "O"){
      setGanador("O");
    }
      if (arrayTablero[2]=== "O" && arrayTablero[5]=== "O" && arrayTablero[8] === "O"){
      setGanador("O");
    }
      if (arrayTablero[2]=== "O" && arrayTablero[4]=== "O" && arrayTablero[6] === "O"){
      setGanador("O");
    }
      if (arrayTablero[0]=== "O" && arrayTablero[4]=== "O" && arrayTablero[8] === "O"){
      setGanador("O");
    }

  }

  function reiniciar() {
    setTablero(tableroInicial);
    setValorTurno('X');
    setGanador(null);
  }

  

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titulo}>TaTeTi</Text>
      </View>

      <Text style={styles.mensaje}>
        {ganador ? `¡Ganó ${ganador}!` : `Turno de ${valorTurno}`}
      </Text>

      <View style={styles.tablero}>
        {tablero.map((valor, indice) => (
          <TouchableOpacity key={indice} style={styles.casilla}  onPress={() => jugar(indice)}>
            <Text style={styles.ficha}>{valor}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.botonReiniciar}>
        <Button title="Reiniciar" onPress={reiniciar} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom:30, 
    fontSize:20
  },
  mensaje: {
    marginBottom: 20,
    fontSize: 18,
  },
  botonReiniciar: {
    marginTop:30, 
    fontSize:20
  },
  tablero: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  casilla: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "yellow"
  },
  ficha: {
    fontSize: 48,
  },
});