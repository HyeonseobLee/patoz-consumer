import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

type MaintenanceRecordItemProps = {
  date: string;
  center: string;
  summary: string;
};

export const MaintenanceRecordItem = ({ date, center, summary }: MaintenanceRecordItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.summary}>{summary}</Text>
      <Text style={styles.center}>{center}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: theme.spacing.lg,
    marginVertical: 10
  },
  date: {
    fontSize: 12,
    color: theme.colors.textSubtle,
    marginBottom: theme.spacing.xs
  },
  summary: {
    fontSize: 21,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs
  },
  center: {
    fontSize: 15,
    color: theme.colors.textMuted,
    fontWeight: '500'
  }
});
