import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoatInput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (title) => {
    setCourseGoals(courseGoal => [...courseGoal, {
      id: Math.random().toString(),
      value: title
    }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(item => item.id !== goalId);
    })
  }
  const cancleGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={{ padding: 30 }}>
      <Button title="Add your goal" onPress={() => setIsAddMode(true) }></Button>
      <GoatInput visible={isAddMode} onAddGoal={addGoalHandler} onCancle={cancleGoalAdditionHandler} ></GoatInput>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal} renderItem={
          itemData => (
            <GoalItem
              delId={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}></GoalItem>
          )
        } />
    </View>
  );
}