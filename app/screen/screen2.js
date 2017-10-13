import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Button,
   TouchableOpacity,
  View
} from 'react-native';



import styles from './../styles/screen2';
import Dash from 'react-native-dash';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class screen2 extends Component {


  static navigationOptions = {
    title: 'Privilege Center',
  };
  render() {
    const { navigate } = this.props.navigation;
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
<Dash style={{width:"100%", height:1,marginTop:1}} dashColor='rgba(61, 179, 250, 100)'/>
    {/* <View style={styles.dash}>
</View> */}

<View style={styles.VWcontainer2}>
</View>
<View style={styles.VWcontainer31}>
  <ScrollableTabView
    style={{marginTop:0,   }}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
       
  
      <ScrollView tabLabel='Sun'style={styles.tabView}>
         <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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

 <View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
 </View> 

      </ScrollView>
         <ScrollView tabLabel='Mon'style={styles.tabView}>
            <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
         </ScrollView>
          <ScrollView tabLabel='Tue' style={styles.tabView}>
            <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
          </ScrollView>
           <ScrollView tabLabel='Wed' style={styles.tabView}>
              <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
           </ScrollView>
             <ScrollView tabLabel='Thu' style={styles.tabView}>
                <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
             </ScrollView>
             <ScrollView tabLabel='Fri' style={styles.tabView}>
                <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
             </ScrollView>
              <ScrollView tabLabel='Sat' style={styles.tabView}>
                 <View style={styles.VWcontainer311}>
        <View style={styles.VWcontainer3}>
     <Dash style={{width:1,  flexDirection:'column', height:60}} dashColor='rgba(61, 179, 250, 100)'/>
</View>
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
<View style={styles.SWcontainer123}> 
 <View style={styles.VWcontainer422}> 
  
      <Text style={styles.TextStyle8}> 12.12-12.19 (Term of validity)</Text>
      <Text style={styles.TextStyle9}> Discounts are available </Text>
      <Text style={styles.TextStyle9}> this week </Text>
      
   </View> 
 
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('screen1')}
        style={styles.BtnContainer}>
                                <Text style={styles.BtnTxt}>Package</Text>
                            </TouchableOpacity>
</View>
</View>
                </ScrollView> 
               </ScrollableTabView>
</View>



                               </ScrollView>
         </View>      
    );
  }
}



