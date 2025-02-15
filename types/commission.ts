export enum CommissionType {
  icon = "ICON",
  full = "FULL",
  sketchpage = "SKETCH_PAGE",
  reference = "REF_SHEET",
  other = "OTHER",
}

export type CommissionData = {
  email: string;
  name: string;
  type: CommissionType;
  reference?: string;
  referenceSource?: File;
  contact?: string;
  idea?: string;
  background: boolean;
  characters: number;
  estimatedPricing: number;
};
