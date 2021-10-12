import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

interface State {}

export default class SignUpScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUpScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
