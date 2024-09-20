import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setInput(enteredText);
  };

  function addGoalHandler() {
    setGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: input, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <View style={styles.goalIem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} 
        alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 50,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalIem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
});
