import { VehicleType } from './vehicleType';

export type Manufacturer = {
  Mfr_ID: number;
  Mfr_CommonName: string;
  Country: string;
  VehicleTypes?: VehicleType[];
};
