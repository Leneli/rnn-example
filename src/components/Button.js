import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
});

const ButtonCustom = ({ title, onPress }) => (
  <View style={styles.wrapper}>
    <Button title={title} onPress={onPress} />
  </View>
);

ButtonCustom.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { ButtonCustom as Button };
