import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'

import { playBackService,setUpPlayer,addTrack } from '../musicService'
const App = () => {
  const [isPlayerReady,setIsPlayerReady]=useState(false);
  
  async function setup() {
    let isSetup=await setUpPlayer();

    if(isSetup)
      {
       await addTrack();
      }
      setIsPlayerReady(isSetup);
    
  }
  
  useEffect(() => {

    setup();
  
  }, [])
  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar/>
      <Text>Testing</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})