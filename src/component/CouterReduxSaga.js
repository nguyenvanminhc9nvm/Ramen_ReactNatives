import React from 'react';
import { Text, Button, View } from 'react-native';

const CouterReduxSaga = (props) => {
  return (
    <View>
        <Button
            onPress={() => {
                props.increment()
            }}
            title="+"
        />
        <Text>
            count
        </Text>
        <Button
              onPress={() => {
                props.decrement()
            }}
            title="-"
        />
    </View>
  );
}

export default CouterReduxSaga;