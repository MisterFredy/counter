/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Row0: 0,
      Row1: 0,
      Row2: 0,
    };
    this.likeAll = this.likeAll.bind(this);
    this.dislikeAll = this.dislikeAll.bind(this);
    this.ResetAll = this.ResetAll.bind(this);
  }

  componentDidMount() {}

  likeAll(){
    this.setState({Row0:this.state.Row0+1,Row1:this.state.Row1+1,Row2:this.state.Row2+1})
  }
  dislikeAll(){
    this.setState({Row0:this.state.Row0-1,Row1:this.state.Row1-1,Row2:this.state.Row2-1})
  }
  ResetAll(){
    this.setState({Row0:0,Row1:0,Row2:0})
  }
 

  render() {
    return (
      <>
      <ScrollView>
      <View style={{backgroundColor:'#ebebeb',height:'100%'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() =>this.likeAll()}>
            <View style={{marginTop: 30,marginLeft: 20,width: 96,height: 48,backgroundColor: '#2B72C4',borderRadius: 15,}}>
              <Text style={{margin:10,paddingLeft:15,paddingTop:5,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                Like All
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => this.ResetAll()}>
            <View style={{ marginTop: 30,marginLeft: 20,width: 96,height: 48,backgroundColor: '#fff',borderRadius: 15,}}>
              <Text style={{margin:10,paddingLeft:10,paddingTop:5,fontSize: 14,color: 'black',fontWeight: 'bold',}}>
                Reset All
              </Text>
            </View>
          </TouchableOpacity>
        </View>

       <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => this.dislikeAll()}>
            <View style={{ marginTop: 30,marginLeft: 20,width: 96,height: 48,backgroundColor: '#DB2C2C',borderRadius: 15,}}>
              <Text style={{margin:10,paddingLeft:5,paddingTop:5,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                Dislike All
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width:360,height:240,borderRadius:20,backgroundColor: '#fff',margin:20}}>
          <Image source={require('./assets/fake.jpeg')} style={{width:360,height:180,borderTopLeftRadius:20,borderTopRightRadius:20}}></Image>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,}}>
              <View style={{marginTop: 10,marginLeft:20,borderRadius:10,width:96,height:38,borderWidth: 0.5,flexDirection:'row'}}>
                <Text style={{marginTop:5,marginLeft:5,fontSize:18}}>{this.state.Row0}</Text>
                <Text style={{fontSize:18,marginTop:5}}>Like</Text>
              </View>
            </View>
              <TouchableOpacity onPress={() => this.setState({Row0:this.state.Row0+1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,width: 86,height: 38,backgroundColor: '#2B72C4',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:20,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Like
                    </Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({Row0:this.state.Row0-1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,marginRight:10,width: 86,height: 38,backgroundColor: '#DB2C2C',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:15,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Dislike
                    </Text>
                  </View>
            </TouchableOpacity>
      </View>
      </View>

       <View style={{width:360,height:240,borderRadius:20,backgroundColor: '#fff',margin:20}}>
          <Image source={require('./assets/ocean.jpeg')} style={{width:360,height:180,borderTopLeftRadius:20,borderTopRightRadius:20}}></Image>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,}}>
              <View style={{marginTop: 10,marginLeft:20,borderRadius:10,width:96,height:38,borderWidth: 0.5,flexDirection:'row'}}>
                <Text style={{marginTop:5,marginLeft:5,fontSize:18}}>{this.state.Row1}</Text>
                <Text style={{fontSize:18,marginTop:5}}>Like</Text>
              </View>
            </View>
              <TouchableOpacity onPress={() => this.setState({Row1:this.state.Row1+1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,width: 86,height: 38,backgroundColor: '#2B72C4',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:20,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Like
                    </Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({Row1:this.state.Row1-1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,marginRight:10,width: 86,height: 38,backgroundColor: '#DB2C2C',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:15,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Dislike
                    </Text>
                  </View>
            </TouchableOpacity>
      </View>
      </View>

      <View style={{width:360,height:240,borderRadius:20,backgroundColor: '#fff',margin:20}}>
          <Image source={require('./assets/room.jpeg')} style={{width:360,height:180,borderTopLeftRadius:20,borderTopRightRadius:20}}></Image>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,}}>
              <View style={{marginTop: 10,marginLeft:20,borderRadius:10,width:96,height:38,borderWidth: 0.5,flexDirection:'row'}}>
                <Text style={{marginTop:5,marginLeft:5,fontSize:18}}>{this.state.Row2} </Text>
                <Text style={{fontSize:18,marginTop:5}}>Like</Text>
              </View>
            </View>
              <TouchableOpacity onPress={() => this.setState({Row2:this.state.Row2+1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,width: 86,height: 38,backgroundColor: '#2B72C4',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:20,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Like
                    </Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>  this.setState({Row2:this.state.Row2-1})}>
                  <View style={{ marginTop: 10,marginLeft: 20,marginRight:10,width: 86,height: 38,backgroundColor: '#DB2C2C',borderRadius: 10,}}>
                    <Text style={{margin:10,paddingLeft:15,fontSize: 14,color: 'white',fontWeight: 'bold',}}>
                      Dislike
                    </Text>
                  </View>
            </TouchableOpacity>
      </View>
      </View>

      </View>
      </ScrollView>
      </>
    );
  }
}
