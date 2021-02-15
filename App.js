import React, { Component } from 'react'
import { 
Text, 
StyleSheet, 
View, 
Image, 
ScrollView, 
TextInput,
TouchableOpacity} from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       nama : "Dafrin Maulana"
    }
  }

  ubahState() {
    this.state({
      nama : "Abdurahman"
    })
  }
  
  render() {
    const { nama } = this.state
    return (
      <ScrollView>
      <View style= {styles.container}>
        <Text style={styles.textLabel}> Nama saya Dafrin </Text>
        <Image style={styles.imgFluid}
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
        />
      </View>
        <View>
          <Text style={styles.textLabel} style={{ color: "blue", textAlign : "center", marginTop : 20 }}>Belajar Flex</Text>
        </View>

      <View style={{ flexDirection: "row"}}>
        <View style={{width: 50, flex : 1, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, flex : 2, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, flex: 3, height: 50, backgroundColor: 'steelblue'}} />
      </View>

      <View>
          <Text style={styles.textLabel} style={{ color: "blue", textAlign : "center", marginTop : 20 }}>State and Props</Text>
      </View>

      <View>
        <Text>ini adalah state {nama}</Text>
        <TouchableOpacity 
          style={styles.btn} 
          onPress = { () => this.ubahState()}>
          <Text 
            style={{color : '#fff', textAlign : 'center' }}>Klik Dong</Text>
        </TouchableOpacity>
      </View>
      {/* <TextInput style={styles.formControl}></TextInput> */}
      </ScrollView>
    )
  }
}

// style css
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#ccc",
    alignItems : "center",
    justifyContent : "center"
  },
  textLabel : {
    color : "red",
    fontSize : 30
  },
  formControl : {
    padding :12
  },
  imgFluid : {
    width: 300,
    height : 300
  },
  btn : {
    backgroundColor : "#3737ff",
    padding : 10,
    borderRadius : 15,
    shadowRadius : 4,
    marginTop : 20
  }
})