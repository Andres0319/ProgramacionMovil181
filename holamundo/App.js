import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto =(props)=>{
  const [contenido, setContenido]= useState('Hola :)')
  const actualizarTexto= ()=>{ setContenido('contenido actualizado ')}
  return(
    <Text onPress={actualizarTexto}> {contenido} </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto> uno </Texto>
      <Texto> dos </Texto>

      <Texto/>

      <Button title='saludar' color="#841584"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
