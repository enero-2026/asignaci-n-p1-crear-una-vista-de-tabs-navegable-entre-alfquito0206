import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BuscarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <Text style={styles.subtitle}>Esta es la pantalla de busqueda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

//ScrollView
//View 
