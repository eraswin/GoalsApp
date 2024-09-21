import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);
  const [mod, setMod] = useState(false);

  function addGoal () {
    setMod(true);
  }

  function deleteGoalHandler(id) {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={addGoal} />
        <GoalInput input={input} setInput={setInput} setGoals={setGoals} visible={mod} setMod={setMod} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }} 
          alwaysBounceVertical={false} />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1e085a',
    paddingTop: 70,
    paddingHorizontal: 50,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
});
