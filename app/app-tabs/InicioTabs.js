import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InicioTabsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Bienvenido a la aplicacion con Tabs</Text>
      <Text style={styles.description}>
        Esta es la pantalla de inicio usando Tab Navigation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});