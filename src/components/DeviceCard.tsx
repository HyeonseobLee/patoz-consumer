import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

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
    backgroundColor: theme.colors.navy,
    borderRadius: theme.radius.xl,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl
  },
  name: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: theme.spacing.md
  },
  row: {
    marginBottom: theme.spacing.sm
  },
  metaLabel: {
    color: '#BFCCE4',
    fontSize: 12,
    marginBottom: 2
  },
  metaValue: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600'
  }
});
