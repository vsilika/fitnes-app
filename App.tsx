import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useCashedResources from './hooks/useCashedResources';
import Navigation from './navigation';

export default function App() {

const isLoaded = useCashedResources();

if(isLoaded){
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );

}else{
  return null;
}

}


