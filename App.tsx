import Task from './screens/Task';


import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

function App(): JSX.Element {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([""]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask("")
  }

  const completeTask = (index:number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Todays Task</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => {completeTask(index)}}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
          }
        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >

        <TextInput style={styles.input} 
          value={task}
          placeholder='Write a Task'
          onChangeText={text => setTask(text) }
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper} >
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop:30
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f378ed",
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
    width:250,
  },
  addWrapper: {
    width:60,
    height:60,
    marginRight: 20,
    backgroundColor: "#f378ed",
    borderRadius:60,
    justifyContent:'center',
    alignItems: 'center'
  },
  addText: {
  },
});

export default App;
