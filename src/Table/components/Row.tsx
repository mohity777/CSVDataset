import {Dimensions, StyleSheet, View} from 'react-native';
import {Column, RowObj} from '..';
import Cell from './Cell';

interface RowProps {
  columns: Column[];
  row?: RowObj;
  rowId?: string | number
}

const Row = ({columns, row, rowId}: RowProps) => {
  const CellWidth = Dimensions.get('screen').width / columns.length;
  return (
    <View style={styles.row}>
      {columns.map((col) => (
        <Cell
          cellWidth={CellWidth}
          text={row ? row[col.key] : col.label}
          key={col.key}
          field={row ? col.key : "label"}
          textWeight={row ? "400" : "800"}
          textColor='white'
          backgroundColor='red'
          editable={!!row}
          rowId={rowId}
        />
      ))}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
    row: {flexDirection: 'row'},
})
