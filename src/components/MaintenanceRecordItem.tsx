import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E4EAF5'
  },
  date: {
    fontSize: 12,
    color: '#56647D',
    marginBottom: 6
  },
  summary: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E1828',
    marginBottom: 4
  },
  center: {
    fontSize: 14,
    color: '#2D3E57'
  }
});
