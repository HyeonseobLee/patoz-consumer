import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { RootTabParamList } from '../navigation/types';
import { theme } from '../styles/theme';

type Props = BottomTabScreenProps<RootTabParamList, 'RepairFlow'>;

export const RepairFlowScreen = ({}: Props) => {
  const { device, repairSubmissions, addRepairSubmission } = useAppContext();
  const [intake, setIntake] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const hasSubmissions = useMemo(() => repairSubmissions.length > 0, [repairSubmissions.length]);

  const onSubmit = async () => {
    if (!intake.trim() || !symptoms.trim()) {
      return;
    }

    await addRepairSubmission(intake.trim(), symptoms.trim());
    setIntake('');
    setSymptoms('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{device.repairFlow.title}</Text>
      {!hasSubmissions && <Text style={styles.emptyText}>{device.repairFlow.emptyTitle}</Text>}

      <View style={styles.formCard}>
        <Text style={styles.label}>{device.repairFlow.intakeLabel}</Text>
        <TextInput
          style={styles.input}
          placeholder={device.repairFlow.intakePlaceholder}
          placeholderTextColor={theme.colors.textSubtle}
          value={intake}
          onChangeText={setIntake}
        />

        <Text style={styles.label}>{device.repairFlow.symptomsLabel}</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder={device.repairFlow.symptomsPlaceholder}
          placeholderTextColor={theme.colors.textSubtle}
          value={symptoms}
          onChangeText={setSymptoms}
          multiline
        />

        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitLabel}>{device.repairFlow.submitLabel}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg
  },
  title: {
    fontSize: 32,
    color: theme.colors.textPrimary,
    fontWeight: '800',
    marginBottom: theme.spacing.sm
  },
  emptyText: {
    color: theme.colors.textMuted,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: theme.spacing.md
  },
  formCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.xl,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.borderSoft
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.xs
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.borderInput,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    fontSize: 15,
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.white
  },
  multilineInput: {
    minHeight: 120,
    textAlignVertical: 'top'
  },
  submitButton: {
    marginTop: theme.spacing.xs,
    backgroundColor: theme.colors.navy,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56
  },
  submitLabel: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 18
  }
});
