import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
// import CheckBox from 'react-native-check-box'
import styles from './../styles/screen1';
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-checkbox';
// import ScrollableTabView, { ScrollableTabBar, } from
// 'react-native-scrollable-tab-view';  import ScrollableTabView, {
// DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

// import ScrollableTabView from 'react-native-scrollable-tab-view';
var d = new Date();
var datetext = d.toTimeString();
datetext = datetext.split(' ')[0];
export default class screen1 extends Component {
  static navigationOptions = {
    title: 'Package'
  };
  constructor(props) {
    super(props);
    this.checkbox = this
      .checkbox
      .bind(this);
    this.state = {
      check: false,
      dateText: datetext
    }
  }

  checkbox() {
    if (this.state.check === true) {
      this.setState({check: false});
    } else {
      this.setState({check: false});

    }
  }
  render() {

    return (
      <View style={styles.VWcontainer}>
        <View style={styles.SWcontainer123}>
          <TouchableOpacity style={styles.BtnContainer}>
            <Text style={styles.BtnTxt}>Package</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnContainer1}>
            <Text style={styles.BtnTxt1}>increment</Text>
          </TouchableOpacity>
        </View>
        <Dash
          style={{
          width: "100%",
          height: 1,
          marginTop: 1
        }}
          dashColor='rgba(61, 179, 250, 100)'/>
        <ScrollableTabView
          style={{
          marginTop: 0,
          height: 100,
          borderColor: "red",
          borderRadius: 1
        }}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar/>}>
          <ScrollView tabLabel='month' style={styles.tabView}>
            <Image
              style={styles.Imgcontainer}
              source={require('../i322^pimgpsh_fullsize_distr.png')}/>
            <View style={styles.TextContainer}>
              <Text style={styles.TextStyle4}>You have a coupon, which will expire soon!</Text>
              <Text style={styles.TextStyle3}>You can enjoy half price discount when you buy</Text>

            </View>
            <Dash
              style={{
              width: "100%",
              height: 1,
              marginTop: 10
            }}
              dashColor='rgba(61, 179, 250, 100)'/>
            <View style={styles.TextContainer123321}>

              <CheckBox
                label='Discount'
                checked={this.state.check}
                height={20}
                width={20}
                color='rgba(223, 223, 223, 100)'
                underlayColor='rgba(223, 223, 223, 100)'
                checkboxStyle={{
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                color: 'rgba(223, 223, 223, 100)'
              }}
                onChange={() => this.checkbox()}/>

              <Icon name="jpy" style={styles.TxtIP123321}/>
              <Text style={styles.TextStyle123321}>500</Text>
              <Text style={styles.DateStyle123321}>{this.state.dateText}</Text>

            </View>
            <View style={styles.SWcontainer123}>
              <View style={styles.VWcontainer422}>

                <Text style={styles.TextStyle311}>Payment</Text>
                <View style={styles.VWcontainer122}>

                  <Icon name="jpy" style={styles.TxtIP}/>
                  <Text style={styles.TextStyle122}>500</Text>

                </View>
              </View>

              <TouchableOpacity style={styles.BtnContainer22}>
                <Text style={styles.BtnTxt22}>Buy</Text>
              </TouchableOpacity>
            </View>

           
          </ScrollView>
          <ScrollView tabLabel='season' style={styles.tabView}>
            <Image
              style={styles.Imgcontainer}
              source={require('../i319^pimgpsh_fullsize_distr.png')}/>
            <View style={styles.TextContainer}>
              <Text style={styles.TextStyle4}>You have a coupon, which will expire soon!</Text>
              <Text style={styles.TextStyle3}>You can enjoy half price discount when you buy</Text>

            </View>

            <Dash
              style={{
              width: "100%",
              height: 1,
              marginTop: 10
            }}
              dashColor='rgba(61, 179, 250, 100)'/>
            <View style={styles.TextContainer123321}>

              <CheckBox
                label='Discount'
                checked={this.state.check}
                height={20}
                width={20}
                color='rgba(223, 223, 223, 100)'
                underlayColor='rgba(223, 223, 223, 100)'
                checkboxStyle={{
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                color: 'rgba(223, 223, 223, 100)'
              }}
                onChange={() => this.checkbox()}/>

              <Icon name="jpy" style={styles.TxtIP123321}/>
              <Text style={styles.TextStyle123321}>500</Text>
              <Text style={styles.DateStyle123321}>{this.state.dateText}</Text>

            </View>
            <View style={styles.SWcontainer123}>
              <View style={styles.VWcontainer422}>

                <Text style={styles.TextStyle311}>Payment</Text>
                <View style={styles.VWcontainer122}>

                  <Icon name="jpy" style={styles.TxtIP}/>
                  <Text style={styles.TextStyle122}>500</Text>

                </View>
              </View>

              <TouchableOpacity style={styles.BtnContainer22}>
                <Text style={styles.BtnTxt22}>Buy</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ScrollView tabLabel='year' style={styles.tabView}>
            <Image
              style={styles.Imgcontainer}
              source={require('../i321^pimgpsh_fullsize_distr.png')}/>
            <View style={styles.TextContainer}>
              <Text style={styles.TextStyle4}>You have a coupon, which will expire soon!</Text>
              <Text style={styles.TextStyle3}>You can enjoy half price discount when you buy</Text>

            </View>
            <Dash
              style={{
              width: "100%",
              height: 1,
              marginTop: 10
            }}
              dashColor='rgba(61, 179, 250, 100)'/>
            <View style={styles.TextContainer123321}>

              <CheckBox
                label='Discount'
                checked={this.state.check}
                height={20}
                width={20}
                color='rgba(223, 223, 223, 100)'
                underlayColor='rgba(223, 223, 223, 100)'
                checkboxStyle={{
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                color: 'rgba(223, 223, 223, 100)'
              }}
                onChange={() => this.checkbox()}/>

              <Icon name="jpy" style={styles.TxtIP123321}/>
              <Text style={styles.TextStyle123321}>500</Text>
              <Text style={styles.DateStyle123321}>{this.state.dateText}</Text>

            </View>
            <View style={styles.SWcontainer123}>
              <View style={styles.VWcontainer422}>

                <Text style={styles.TextStyle311}>Payment</Text>
                <View style={styles.VWcontainer122}>

                  <Icon name="jpy" style={styles.TxtIP}/>
                  <Text style={styles.TextStyle122}>500</Text>

                </View>
              </View>

              <TouchableOpacity style={styles.BtnContainer22}>
                <Text style={styles.BtnTxt22}>Buy</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

        </ScrollableTabView>
        {/* <View style={styles.TextContainer}>
                                <Text style={styles.TextStyle3}>You have a coupon, which will expire soon!</Text>
                                <Text style={styles.TextStyle3}>You can enjoy half price discount when you buy</Text>

    </View>   */}
      </View>

    );
  }
}
