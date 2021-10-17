import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

export const Avatar = () => (
  <Image
    source={{ uri: 'https://picsum.photos/200' }}
    style={styles.image}
  />
);
