import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TextInput, Image, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react';
import concertImage from './assets/concert.png';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000)

export default function App() {
  const [ticketAmt, setTicketAmt] = React.useState('');
  const [ticketTotal, setTicketTotal] = React.useState(0);
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  let calculateTickets = () => {

      setTicketTotal(parseFloat(ticketAmt) * 99.99);
      setIsDisplayed(true);
    

  }
  



  /* if(ticketTotal !== 0) {
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
  } */
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Ticket Vault</Text>
    <TextInput
        style={styles.input}
        placeholder="Number of Tickets"
        keyboardType='numeric'
        defaultValue={null}
        onChangeText={newText => setTicketAmt(newText)}
      />
    <TouchableOpacity onPress={calculateTickets} style={styles.button} >
      <Text styles={styles.buttonText}>Find the Cost</Text>
    </TouchableOpacity>

    <Text style={styles.totalArea}>{isDisplayed ? ('Ticket Cost: $' + {ticketTotal}.ticketTotal.toFixed(2) ) : ''}</Text>

    <Image source={concertImage} style={styles.logo} />
    <StatusBar style="auto" />
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F98B88",
    padding: 10,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 2,
    color: '#fff'
  },
  input: {
    height: 40,
    width: 160,
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  totalArea: {
  marginBottom: 60,
  fontSize: 20
  },
  logo: {
    bottom: 0,
    width: 305,
    height: 159
  }
});
