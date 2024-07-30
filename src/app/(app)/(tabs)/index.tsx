import { useState } from 'react';
import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { DiaryModal } from '@/screens/home/DiaryModal';

export default function HomeScreen() {
  const [isDiaryModalVisible, setDiaryModalVisible] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@assets/images/home-cover.png')}
            style={styles.coverImage}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Morning !</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Your health diary</ThemedText>
          <ThemedText style={styles.paragraph}>
            Your daily reports will be consulted by your doctor for your next
            medical visit.
          </ThemedText>
          <Button
            title="Open my diary"
            onPress={() => setDiaryModalVisible(true)}
          />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Need to record something ?</ThemedText>
          <ThemedText style={styles.paragraph}>
            Simply click this button and tell us everything. A report will be
            auto generated and add to you diary.
          </ThemedText>
          <TouchableOpacity onPress={() => setIsSpeaking(!isSpeaking)}>
            <Image
              source={
                isSpeaking
                  ? require('@assets/images/stop-icon.png')
                  : require('@assets/images/micro-icon.png')
              }
              style={styles.speakButton}
            />
          </TouchableOpacity>
        </ThemedView>
      </ParallaxScrollView>
      <DiaryModal
        isVisible={isDiaryModalVisible}
        onClose={() => setDiaryModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '',
    lineHeight: 1,
  },
  paragraph: {
    textAlign: 'justify',
  },
  coverImage: {
    height: '100%',
    width: '100%',
  },
  speakButton: {
    marginTop: 16,
    alignSelf: 'center',
    height: 60,
    width: 60,
  },
});
