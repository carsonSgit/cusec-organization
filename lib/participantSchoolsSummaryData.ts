export type HistoricSummaryMetric = {
  label: string;
  value: number;
  detail?: string;
};

export type HistoricSummaryDataset = {
  title: string;
  lede: string;
  footnote?: string;
  metrics: HistoricSummaryMetric[];
};

export const historicStudyMix: HistoricSummaryDataset = {
  title: "What fields do our attendees study?",
  lede: "",
  footnote: "Programs may be multi-tagged when students listed combined studies.",
  metrics: [
    { label: "Computer science", value: 50 },
    { label: "Software engineering", value: 31.3 },
    { label: "Computer engineering", value: 9.4 },
    { label: "Math, statistics, data", value: 5 },
    { label: "Other", value: 6.6 },
    { label: "Electrical engineering", value: 2.9 },
  ],
};

export const historicDegreeMix: HistoricSummaryDataset = {
  title: "What degree stage are attendees in?",
  lede: "",
  metrics: [
    { label: "Bachelor's", value: 93.2 },
    { label: "Master's", value: 2.3 },
    { label: "Other", value: 4.5 },
  ],
};
