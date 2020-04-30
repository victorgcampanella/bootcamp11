import React, {useState, useEffect} from 'react';
import { View, ScrollView, SafeAreaView, FlatList, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo projecto ${Date.now()}`,
      owner: 'Victor'
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor= "#7159c1"/>

    <SafeAreaView style={styles.view}>
      <FlatList 
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({item: project}) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />

      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
    </SafeAreaView>
    {/* <ScrollView style={styles.view}>
     {projects.map(project => (
      <Text style={styles.project} key={project.id}>{project.title}</Text>
      ))}
    </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#7159c1",
    padding: 20
  },

  project: {
    fontSize: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15
  },

  button: {
    backgroundColor: "#988BC4",
    margin: 10,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16
  }
})
