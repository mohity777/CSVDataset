import {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {DataContext} from '../context/rowContext';

interface CellProps {
  text: string | number;
  cellWidth: number;
  backgroundColor?: string;
  textColor?: string;
  textWeight?: TextStyle['fontWeight'];
  editable?: boolean;
  field?: string;
  rowId?: string | number;
}
const Cell = ({
  text,
  textColor,
  textWeight,
  cellWidth,
  backgroundColor,
  editable,
  field,
  rowId,
}: CellProps) => {
  const [val, setValue] = useState(text);
  const valRef = useRef(text);

  const {setData} = useContext(DataContext);

  useEffect(() => {
    return onBlur;
  }, [])

  const onBlur = () => {
    if (rowId!= undefined && field && text !== valRef.current) {
      setData({rowId, field, value: valRef.current});
    }
  };
  return (
    <TextInput
      style={[
        styles.cell,
        styles.cellText,
        {color: textColor, fontWeight: textWeight},
        {width: cellWidth, backgroundColor},
      ]}
      value={val.toString()}
      onChangeText={e =>{ 
        setValue(e);
        valRef.current = e;
      }}
      scrollEnabled={false}
      multiline={true}
      editable={editable}
      onBlur={onBlur}
    />
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: {
    minHeight: 50,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {color: 'black'},
});
