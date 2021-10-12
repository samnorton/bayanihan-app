import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

interface State {}

export default class EditProfileScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>EditProfileScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
