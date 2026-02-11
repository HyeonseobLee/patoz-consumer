import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { DeviceCard } from '../components/DeviceCard';
import { useAppContext } from '../context/AppContext';
import { RootTabParamList } from '../navigation/types';

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
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 32,
    backgroundColor: '#F5F8FF'
  }
});
