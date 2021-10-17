import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },

  title: {
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export const ScreenContent = ({ children, title, description }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content} contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

ScreenContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
};
ScreenContent.defaultProps = {
  children: null,
};
