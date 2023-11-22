import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Table from './src/Table';
import {COLUMNS, DATA, PAGE_SIZE} from './src/utils';
import {DataContext, setDataProps} from './src/Table/context/rowContext';

function App(): JSX.Element {
  const [data, setData] = useState(DATA);

  const onChange = ({rowId, field, value}: setDataProps) => {
    setData(d =>
      d.map((row) => {
        if (rowId == row.id)
          return {
            ...row,
            [field]: value,
          };
        return row;
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DataContext.Provider value={{data, setData: onChange}}>
        <Table columns={COLUMNS} pageSize={PAGE_SIZE} />
      </DataContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
