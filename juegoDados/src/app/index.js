import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Index() {

  const dados = [  "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const [dado, setDado] = useState(null);

  function elementoRandom(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Tirá el dado</Text>
      <Text style={{fontSize: 30}}>Posibles resultados:</Text>
      <Text style={{fontSize: 25}}>⚀ ⚁ ⚂ ⚃ ⚄ ⚅</Text>
      <Text style={{fontSize: 80}}>{dado}</Text>

      <Button title="Tirar dado" onPress={() => setDado(elementoRandom(dados))} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"'#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});