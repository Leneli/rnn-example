import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  topText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },

  title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export const CustomTopBar = ({ titleText }) => (
  <View>
    <Text numberOfLines={1} style={styles.topText}>Custom top bar:</Text>
    <Text numberOfLines={1} style={styles.title}>{titleText}</Text>
  </View>
);