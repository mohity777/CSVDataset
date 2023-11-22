import { memo } from 'react';
import {Text, View, Pressable} from 'react-native';

interface PaginationProps {
  pageNo: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
}
const Pagination = ({pageNo, onNext, onPrev, totalPages}: PaginationProps) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {pageNo > 1 && (
        <Pressable onTouchStart={onPrev}>
          <Text style={{color: 'black', marginRight: 4}}>{'<'}</Text>
        </Pressable>
      )}
      <Text style={{color: 'black'}}>
        {pageNo}/{totalPages}
      </Text>
      {pageNo < totalPages && (
        <Pressable onTouchStart={onNext}>
          <Text style={{color: 'black', marginLeft: 4}}>{'>'}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default memo(Pagination);
