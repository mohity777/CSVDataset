import {createContext} from 'react';
import {RowObj} from '..';

export interface setDataProps {
  rowId: string | number;
  field: string;
  value: string | number;
}

export const DataContext = createContext<{
  data: RowObj[];
  setData: (v: setDataProps) => void;
}>({data: [], setData: () => {}});
