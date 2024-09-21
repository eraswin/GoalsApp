import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  function deleteGoalHandler(id) {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput input={input} setInput={setInput} setGoals={setGoals} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 50,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
});
