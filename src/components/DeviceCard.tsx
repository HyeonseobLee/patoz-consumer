import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DeviceCardProps = {
  name: string;
  serialLabel: string;
  serialNumber: string;
  registeredYearLabel: string;
  registeredYear: string;
};

export const DeviceCard = ({ name, serialLabel, serialNumber, registeredYearLabel, registeredYear }: DeviceCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.row}>
        <Text style={styles.metaLabel}>{serialLabel}</Text>
        <Text style={styles.metaValue}>{serialNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.metaLabel}>{registeredYearLabel}</Text>
        <Text style={styles.metaValue}>{registeredYear}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0E1828',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  name: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18
  },
  row: {
    marginBottom: 10
  },
  metaLabel: {
    color: '#AFC3E8',
    fontSize: 12,
    marginBottom: 2
  },
  metaValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  }
});
