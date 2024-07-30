import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Modal,
  SectionList,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {
  type AdverseEvent,
  adverseEventsStore,
} from '@/stores/adverse-events.store';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const getListDataFromEvents = (adverseEvents: AdverseEvent[]) => {
  return adverseEvents.map((event) => ({
    title: event.date,
    data: event.events,
  }));
};

type DiaryModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const DiaryModal = observer(
  ({ isVisible, onClose }: DiaryModalProps) => {
    const theme = useColorScheme() ?? 'light';
    const bgColor = theme === 'light' ? '#f0def3' : '#5c5d5e';

    const {
      data: { events },
    } = adverseEventsStore;

    const listData = getListDataFromEvents(events);

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
              sections={listData}
              keyExtractor={(item, index) => item + index}
              renderSectionHeader={({ section: { title } }) => (
                <ThemedText type="subtitle">{title}</ThemedText>
              )}
              renderItem={({ item }) => (
                <ThemedView style={[styles.item]}>
                  <ThemedText>{item}</ThemedText>
                </ThemedView>
              )}
              SectionSeparatorComponent={Seperator}
            />
          </View>
        </View>
      </Modal>
    );
  },
);

const Seperator = () => <View style={{ height: 1, marginVertical: 10 }} />;

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
    shadowOffset: {
      width: 4,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  item: {
    marginVertical: 2,
    backgroundColor: 'transparent',
  },
});
