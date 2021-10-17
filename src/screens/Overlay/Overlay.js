import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    shadowColor: COLORS.dark,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 1,
    },
  },

  text: {
    textAlign: 'center',
  },
});

const Overlay = ({ componentId, text }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Button title="CLose this Overlay" onPress={() => Navigation.dismissOverlay(componentId)} />
        <Text style={styles.text}>or</Text>
        <Button title="CLose all Overlays" onPress={() => Navigation.dismissAllOverlays()} />
      </View>
    </View>
  );
};

export default Overlay;
