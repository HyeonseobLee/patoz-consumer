import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MaintenanceRecordItem } from '../components/MaintenanceRecordItem';
import { useAppContext } from '../context/AppContext';
import { RootTabParamList } from '../navigation/types';

type Props = BottomTabScreenProps<RootTabParamList, 'MaintenanceHistory'>;

export const MaintenanceHistoryScreen = ({}: Props) => {
  const { maintenanceHistory, device } = useAppContext();

  if (!maintenanceHistory.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{device.maintenance.emptyTitle}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={maintenanceHistory}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MaintenanceRecordItem date={item.date} center={item.center} summary={item.summary} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    backgroundColor: '#F5F8FF'
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0E1828'
  }
});
