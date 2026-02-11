import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
};

export const ActionButton = ({ label, onPress }: ActionButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EDF3FF',
    borderRadius: 14,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#D7E4FF'
  },
  label: {
    color: '#0E1828',
    fontSize: 15,
    fontWeight: '600'
  }
});
