import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchStore } from '../redux/actions/StoreActions';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const StoreScreen = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.store_name} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => { fetchStore() }}
        title="fetch" />
      <FlatList
        data={props.items}
        renderItem={renderItem}
        keyExtractor={item => item.store_name}
      />
    </SafeAreaView>
  );
}


const mapStateToProps = (state) => ({
  items: state.storeReducer.stores
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

export default connect(mapStateToProps)(StoreScreen);