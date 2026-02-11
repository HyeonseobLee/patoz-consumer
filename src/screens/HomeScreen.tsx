import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { DeviceCard } from '../components/DeviceCard';
import { useAppContext } from '../context/AppContext';
import { RootTabParamList } from '../navigation/types';
import { theme } from '../styles/theme';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const { device } = useAppContext();

  const onActionPress = (id: string) => {
    if (id === 'repair') {
      navigation.navigate('RepairFlow');
      return;
    }

    if (id === 'history') {
      navigation.navigate('MaintenanceHistory');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.brandHeader}>PATOZ</Text>
      <DeviceCard
        name={device.name}
        serialLabel={device.serialLabel}
        serialNumber={device.serialNumber}
        registeredYearLabel={device.registeredYearLabel}
        registeredYear={device.registeredYear}
      />
      <View>
        {device.actions.map((action) => (
          <ActionButton key={action.id} label={action.label} onPress={() => onActionPress(action.id)} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: 32,
    backgroundColor: theme.colors.background
  },
  brandHeader: {
    color: theme.colors.brand,
    fontWeight: '800',
    fontSize: 30,
    marginBottom: theme.spacing.md
  }
});
