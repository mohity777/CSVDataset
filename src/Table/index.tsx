import { ScrollView, View} from 'react-native';
import Row from './components/Row';
import {useCallback, useContext, useState} from 'react';
import Pagination from './components/Pagination';
import { DataContext } from './context/rowContext';

export interface Column {
  label: string;
  key: string;
}

export interface RowObj {
  [key: string]: string | number;
}

interface TableProps {
  pageSize: number;
  columns: Column[];
}
function Table({columns, pageSize}: TableProps) {
  const [pageNo, setPageNo] = useState(1);
  const { data } = useContext(DataContext)

  if (columns.length <= 0) return null;
  const totalPages = Math.ceil(data.length / pageSize);
  const start = (pageNo - 1) * pageSize;
  const end = start + pageSize;

  const onNext = useCallback(() => {
    setPageNo(p => p + 1)
  }, [])

  const onPrev = useCallback(() => {
    setPageNo(p => p - 1)
  }, [])

  return (
    <ScrollView>
      <Pagination
        totalPages={totalPages}
        pageNo={pageNo}
        onNext={onNext}
        onPrev={onPrev}
      />
      <View style={{borderBottomWidth: 1, borderRightWidth: 1}}>
        <Row columns={columns} key={'header'} />
        {data.slice(start, end).map((row, rI) => (
          <Row row={row} rowId={row.id} columns={columns} key={row.id} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Table;
