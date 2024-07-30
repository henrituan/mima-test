import React from 'react';
import {
  Modal,
  SectionList,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

type DiaryModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const DiaryModal = ({ isVisible, onClose }: DiaryModalProps) => {
  const theme = useColorScheme() ?? 'light';
  const bgColor = theme === 'light' ? '#f0def3' : '#5c5d5e';

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={{ ...styles.modalContent, backgroundColor: bgColor }}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <ThemedText>{item}</ThemedText>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <ThemedText>{title}</ThemedText>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    padding: 35,
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    shadowOffset: {
      width: 4,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
