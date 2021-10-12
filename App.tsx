import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Class Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
