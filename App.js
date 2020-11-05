import React from 'react';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {PlayerScreen} from './screens/Player'


function FilterScreen() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>filtros de café em pó</Text>
    </View>
  )
}

function DiscoverScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Descubra um mundo novo</Text>
    </View>
  )
}

function ProfileScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>perfil do usuario</Text>
    </View>
  )
}

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator shifting={true}>
        <Tab.Screen  
          name="Home" 
          component={PlayerScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),}}
        />

        <Tab.Screen 
          name="Filtros"
          component={FilterScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="filter-variant" color={color} size={26} />
            ),}}
        />

        <Tab.Screen 
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="search-web" color={color} size={28} />
            ),}}
        />

        <Tab.Screen 
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}