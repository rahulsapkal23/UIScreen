import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  WebView,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './../styles/screen2';
import Dash from 'react-native-dash';
import chart from '../assets/chart.html';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

export default class screen2 extends Component {

  static navigationOptions = {
    title: 'Privilege Center'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.VWcontainer}>

        <ScrollView contentContainerStyle={styles.SWcontainer}>
          <View style={styles.VWcontainer1}>
            <View style={styles.VWcontainer11}>
              <Text style={styles.TextStyle1}>182</Text>
              <Text style={styles.TextStyle2}>Available quota</Text>
            </View>
            <View style={styles.VWcontainer12}>
              <Text style={styles.TextStyle3}>End</Text>
              <Text style={styles.TextStyle4}>2016.12.12</Text>

            </View>
          </View>
          <Dash
            style={{
            width: "100%",
            height: 1,
            marginTop: 1
          }}
            dashColor='rgba(61, 179, 250, 100)'/>

          <View style={styles.VWcontainer2}>
             <WebView 
      source={chart}
        style={{marginTop: 2}}
      />
          </View>
          <View style={styles.VWcontainerDay}>
            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Sun</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Mon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Tue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnContainerDayActive}>
              <Text style={styles.BtnTxtDayActive}>Wed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Thu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Fri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BtnContainerDay}>
              <Text style={styles.BtnTxtDay}>Sat</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.VWcontainer31}>
            <View style={styles.VWcontainer311}>
              <View style={styles.VWcontainer3}>
                <Dash
                  style={{
                  width: 1,
                  flexDirection: 'column',
                  height: 60
                }}
                  dashColor='rgba(61, 179, 250, 100)'/>
              </View>

              <Image
                style={styles.SWcontainerIMG}
                source={require('../img/i352^cimgpsh_orig.png')}>
                <View style={styles.VWcontainer7}>

                  <View style={styles.VWcontainer4}>
                    <View style={styles.VWcontainer5}>
                      <View style={styles.VWcontainer6}>
                        <Text style={styles.TextStyle6}>549</Text>
                        <Text style={styles.TextStyle7}>Day collection</Text>
                      </View>
                    </View>
                  </View>

                </View>
              </Image>

              <View style={styles.SWcontainerBottom}>
                <View style={styles.VWcontainer422}>

                  <Text style={styles.TextStyle8}>
                    12.12-12.19 (Term of validity)</Text>
                  <Text style={styles.TextStyle9}>
                    Discounts are available
                  </Text>
                  <Text style={styles.TextStyle9}>
                    this week
                  </Text>

                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('screen1')}
                  style={styles.BtnContainer}>
                  <Text style={styles.BtnTxt}>Package</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}
