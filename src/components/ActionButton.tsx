import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../styles/theme';

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
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.borderSoft
  },
  label: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  }
});
