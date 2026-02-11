import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { RootTabParamList } from '../navigation/types';

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
      {!hasSubmissions && <Text style={styles.emptyText}>{device.repairFlow.emptyTitle}</Text>}

      <View style={styles.formCard}>
        <Text style={styles.label}>{device.repairFlow.intakeLabel}</Text>
        <TextInput
          style={styles.input}
          placeholder={device.repairFlow.intakePlaceholder}
          placeholderTextColor="#7B879A"
          value={intake}
          onChangeText={setIntake}
        />

        <Text style={styles.label}>{device.repairFlow.symptomsLabel}</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder={device.repairFlow.symptomsPlaceholder}
          placeholderTextColor="#7B879A"
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
    backgroundColor: '#F5F8FF',
    padding: 20
  },
  emptyText: {
    color: '#0E1828',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#DFE7F7'
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#41516D',
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderColor: '#CAD7EE',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
    color: '#0E1828',
    backgroundColor: '#F8FAFF'
  },
  multilineInput: {
    minHeight: 110,
    textAlignVertical: 'top'
  },
  submitButton: {
    marginTop: 4,
    backgroundColor: '#0E1828',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  submitLabel: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16
  }
});
