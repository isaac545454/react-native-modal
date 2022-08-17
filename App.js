import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import {useState} from "react"
import { ActionModal } from "./src/ActionModal"

export default function App() {
  const [VisibleModal, setVisibleModal] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React native</Text>
      <TouchableOpacity style={styles.button} onPress={()=>setVisibleModal(true)}>
        <Text>abrir</Text>
      </TouchableOpacity>

      <Modal 
      visible={VisibleModal}
      transparent={true}
      anRequestClose={()=> setVisibleModal(false)}
      animationType="slide"
      >
        <ActionModal 
        handle={()=> setVisibleModal(false)} 
        edit={()=>alert("CLICOU NO EDITAR")}
        handledelete={()=>alert("CLICOU NO EXCLUIR")}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold"
  },
  button: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: '50%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  }
});
