import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import CustomComponent from './CustomComponent';

const BottomPopup = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.closeButtonContainer}>
          <Button title="Snap To 50%" onPress={() => handleSnapPress(0)} />
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          enablePanDownToClose={true}
          enableDynamicSizing={true}
          backdropComponent={renderBackdrop}
          // handleHeight={50}
          // containerHeight={300}
          // contentHeight={500}
          handleIndicatorStyle={{backgroundColor: 'blue', width: '100%'}}
          backgroundStyle={{backgroundColor: 'orange'}}
          handleStyle={{
            backgroundColor: 'black',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
          enableDynamicSizingc={true}>
          <BottomSheetView style={styles.bottomSheetView} index={0}>
            <Button title="Close" onPress={() => handleClosePress()} />
            <CustomComponent />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  bottomSheetView: {
    padding: 16,
    width: '100%',
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
  },
});

export default BottomPopup;
