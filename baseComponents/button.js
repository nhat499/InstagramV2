import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Edit profile' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#ededed",
  },
  text: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: 'black',
  },
});