export type ActionItem = {
  id: string;
  label: string;
};

export type DeviceData = {
  name: string;
  serialLabel: string;
  serialNumber: string;
  registeredYearLabel: string;
  registeredYear: string;
  actions: ActionItem[];
  tabs: {
    home: string;
    repair: string;
    history: string;
  };
  repairFlow: {
    title: string;
    emptyTitle: string;
    intakeLabel: string;
    intakePlaceholder: string;
    symptomsLabel: string;
    symptomsPlaceholder: string;
    submitLabel: string;
  };
  maintenance: {
    title: string;
    emptyTitle: string;
  };
};

export type MaintenanceRecord = {
  id: string;
  date: string;
  center: string;
  summary: string;
};

export type RepairRecord = {
  id: string;
  intake: string;
  symptoms: string;
  createdAt: string;
};
