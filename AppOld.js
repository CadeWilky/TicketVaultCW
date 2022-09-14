import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TextInput, Image, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000)

export default function App() {
  const [ticketAmt, setTicketAmt] = React.useState('');
  let ticketTotal = 0;

  let calculateTickets = () => {
    this.ticketTotal.value = parseInt(ticketAmt.valueOf) * 99.99;
  }
  



  if(ticketTotal !== 0) {
    return(
      <View style={styles.container}>
      <Text>Ticket Vault</Text>
      <TextInput 
      placeholder='Number of Tickets'
      keyboardType='numeric'
      onChangeText={setTicketAmt}
      value={ticketAmt}>

      </TextInput>
      <TouchableOpacity onPress={this.calculateTickets}>
        <Text>Find the Cost</Text>
      </TouchableOpacity>
      <Text>Ticket Cost: ${TicketTotal}</Text>
  
      <Image source={{ uri: './assets/concert.png' }} />
      <StatusBar style="auto" />
    </View>
    );
  }
  return (
    <View style={styles.container}>
    <Text>Ticket Vault</Text>
    <TextInput
        style={styles.input}
        placeholder="Number of Tickets"
        keyboardType='numeric'
        defaultValue={null}
      />
    <TouchableOpacity onPress={calculateTickets}>
      <Text>Find the Cost</Text>
    </TouchableOpacity>


    <Image source={{ uri: './assets/concert.png' }} style={styles.logo} />
    <StatusBar style="auto" />
  </View>
);





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 18
  },
  button: {
    backgroundColor: '#f98b88',
    justifyContent: 'center'

  },
  input: {
    height: 30,
    margin: 10,
    borderwidth: 1,
    padding: 7
  }
});
