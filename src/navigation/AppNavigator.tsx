import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HomeScreen } from '../screens/HomeScreen';
import { MaintenanceHistoryScreen } from '../screens/MaintenanceHistoryScreen';
import { RepairFlowScreen } from '../screens/RepairFlowScreen';
import { theme } from '../styles/theme';
import { RootStackParamList, RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const tabIcons: Record<keyof RootTabParamList, keyof typeof Ionicons.glyphMap> = {
  Home: 'home-outline',
  RepairFlow: 'construct-outline',
  MaintenanceHistory: 'document-text-outline'
};

const TabsNavigator = () => {
  const { device } = useAppContext();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: theme.colors.background },
        headerShadowVisible: false,
        headerTitleStyle: { color: theme.colors.textPrimary, fontWeight: '700', fontSize: 20 },
        tabBarStyle: {
          height: 74,
          paddingTop: theme.spacing.xs,
          paddingBottom: theme.spacing.sm,
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.borderSoft
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600'
        },
        tabBarActiveTintColor: theme.colors.brand,
        tabBarInactiveTintColor: theme.colors.textSubtle,
        tabBarIcon: ({ color, size }) => <Ionicons name={tabIcons[route.name]} size={size} color={color} />
      })}
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
