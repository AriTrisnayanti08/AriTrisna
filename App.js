import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F8BBD0' }}>
        <View style={{ backgroundColor: '#EC407A' }}>
           <Text style={{ padding: 25, fontSize: 22, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 25, padding: 10, backgroundColor: '#FCE4EC' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan  Lebar"
            onChangeText={(lebar) => this.setState({ lebar })}
            keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan  Tinggi"
            onChangeText={(tinggi) => this.setState({ tinggi })}
            keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik Untuk Menghitung"
            />
       </View>

        <View style={{ margin: 25, backgroundColor: '#F48FB1' }}>
          <Text style={{ padding: 20, fontSize: 22, textAlign: 'justify' }} >
              Diketahui : {'\n'}
              Panjang Balok = { this.state.panjang} {'\n'}
              Lebar Balok    = { this.state.lebar} {'\n'}
              Tinggi Balok   = {this.state.tinggi} {'\n'} {'\n'}
              Maka : {'\n'}
              Volume Balok adalah {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
