import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import InicioScreen from './app/Inicio';
import BuscarScreen from './app/Buscar';
import PerfilScreen from './app/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={BuscarScreen}
          options={{
            title: 'Buscar',
            tabBarIcon: () => <Text>🔍</Text>,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            title: 'Perfil',
            tabBarIcon: () => <Text>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
