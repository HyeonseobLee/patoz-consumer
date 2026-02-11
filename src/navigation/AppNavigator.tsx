import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HomeScreen } from '../screens/HomeScreen';
import { MaintenanceHistoryScreen } from '../screens/MaintenanceHistoryScreen';
import { RepairFlowScreen } from '../screens/RepairFlowScreen';
import { RootStackParamList, RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabsNavigator = () => {
  const { device } = useAppContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#F5F8FF' },
        headerShadowVisible: false,
        headerTitleStyle: { color: '#0E1828', fontWeight: '700', fontSize: 20 },
        tabBarStyle: {
          height: 74,
          paddingTop: 8,
          paddingBottom: 12,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E7EDF8'
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600'
        },
        tabBarActiveTintColor: '#0E1828',
        tabBarInactiveTintColor: '#7E8AA0'
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: device.tabs.home, tabBarLabel: device.tabs.home }} />
      <Tab.Screen
        name="RepairFlow"
        component={RepairFlowScreen}
        options={{ title: device.tabs.repair, tabBarLabel: device.tabs.repair }}
      />
      <Tab.Screen
        name="MaintenanceHistory"
        component={MaintenanceHistoryScreen}
        options={{ title: device.tabs.history, tabBarLabel: device.tabs.history }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
