import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,Keyboard
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState()
  const [taskItems,setTaskItems] = useState([])

  const handleTask = ()=>{
      Keyboard.dismiss()
      setTaskItems([...taskItems,task])
      setTask(null)
  }

  const completeTask = (index)=>{
      let itemsCopy = [...taskItems]
      itemsCopy.splice(index,1)
      setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {taskItems.map((taskItem,index) => (
            <TouchableOpacity key={index}  onPress={()=>completeTask(index)}>
              <Task title={taskItem} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.taskWrapper}
      >

      <TextInput style={styles.input} placeholder={'Write a task...'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() =>handleTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  taskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  input: {
    paddingVertical:15,
    width: 250,
    backgroundColor:"#fff",
    paddingHorizontal:15,
    borderRadius:60,
    borderWidth:1,
    borderColor:"#C0C0C0"
  },
  addWrapper: {
    width: 60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:60,
    borderWidth:1,
    borderColor:"#C0C0C0"
  },
  addText: {
    fontSize:30,
  },
});
