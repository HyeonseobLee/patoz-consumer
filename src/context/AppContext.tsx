import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import deviceDataJson from '../data/device.json';
import maintenanceDataJson from '../data/maintenance.json';
import { DeviceData, MaintenanceRecord, RepairRecord } from '../types';

type AppContextValue = {
  device: DeviceData;
  maintenanceHistory: MaintenanceRecord[];
  repairSubmissions: RepairRecord[];
  addRepairSubmission: (intake: string, symptoms: string) => Promise<void>;
};

const REPAIR_STORAGE_KEY = 'patoz_repair_submissions';

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [repairSubmissions, setRepairSubmissions] = useState<RepairRecord[]>([]);

  useEffect(() => {
    const loadRepairs = async () => {
      const cached = await AsyncStorage.getItem(REPAIR_STORAGE_KEY);
      if (!cached) return;
      setRepairSubmissions(JSON.parse(cached) as RepairRecord[]);
    };

    void loadRepairs();
  }, []);

  const addRepairSubmission = async (intake: string, symptoms: string) => {
    const nextRecord: RepairRecord = {
      id: `${Date.now()}`,
      intake,
      symptoms,
      createdAt: new Date().toISOString()
    };

    const next = [nextRecord, ...repairSubmissions];
    setRepairSubmissions(next);
    await AsyncStorage.setItem(REPAIR_STORAGE_KEY, JSON.stringify(next));
  };

  const value = useMemo<AppContextValue>(
    () => ({
      device: deviceDataJson as DeviceData,
      maintenanceHistory: maintenanceDataJson as MaintenanceRecord[],
      repairSubmissions,
      addRepairSubmission
    }),
    [repairSubmissions]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
