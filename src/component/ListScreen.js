import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {actionWithList} from '../redux/actions/ListActions';

const Item = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.text}</Text>
    <Text style={styles.title}>{props.id}</Text>
  </View>
);

const ListScreen = (props) => {
  const renderItem = ({item}) => <Item text={item.name} id={item.id} />;
  const {dispatch} = props;
  const [state, setState] = React.useState({
    idInput: '',
    nameInput: '',
  });

  const handleChange = (name, {nativeEvent: {eventCount, target, text}}) => {
    setState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="id"
        onChange={(event) => handleChange('idInput', event)}
        value={state.idInput}
      />
      <TextInput
        placeholder="name"
        onChange={(event) => handleChange('nameInput', event)}
        value={state.nameInput}
      />
      <Button
        title="add item"
        onPress={() =>
          dispatch(actionWithList.add({
              id: state.idInput,
              name: state.nameInput
          }))
        }
      />
      <FlatList
        data={props.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  items: state.listReducer.users,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default connect(mapStateToProps)(ListScreen);
