import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../components/styles";
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { SairaSB } from '../components/StyledText2';
//import { Text, View } from './Themed';
//import EditScreenInfo from '../components/EditScreenInfo';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { NavigationContainer } from '@react-navigation/native';

//global.current = "ethereum";

export default function TabTwoScreen() {

  let symbol = global.currentcrypto;
  let coinname = global.currentcrypto;
  let lastloadedcrypto = "";

  const DataContainer = styled.View`
flex:0.23;
border:2px solid #f0f0f0;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #eaeaea;
background-color:#fff;
width:90%;
padding:18px;
padding-top:5px;
padding-bottom:7px;
height:20px;
line-height:10px;`;

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [crypto, setCrypto] = useState(null);

  const getCrypto = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${global.currentcrypto}`);
    const data = await response.json();
    setCrypto(data);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  if(lastloadedcrypto != global.currentcrypto){
    //getCrypto();
  }
  
  const loaded = () => {
    let marketcapnumber = numberWithCommas(parseInt(crypto['market_data']['market_cap']['usd']));
    let marketcap = "$" + marketcapnumber;
    let currentprice = "$" + numberWithCommas(crypto['market_data']['current_price']['usd']);
    let twentyfourhourchange = crypto['market_data']['price_change_24h'] + "%";
    let marketcaprank = crypto['market_cap_rank'];
    let twentyfourhourvolume = 233;

    let formalname =  crypto['name'];
    let coinsymbol =  crypto['symbol'];

    lastloadedcrypto = global.currentcrypto;

    return (

      <View style={styles.container}>
        <Text style={styles.symbolheader}>{formalname}</Text>
        <Text style={styles.coinsubdetails}>{marketcaprank} &middot; {coinsymbol}</Text>

        <DataContainer>
          <Text style={styles.dataheader}>current price (USD)</Text>
          <SairaSB style={styles.priceNumber}>{currentprice}</SairaSB>
        </DataContainer>

        <DataContainer>
          <Text style={styles.dataheader}>24hr change</Text>
          <Text style={styles.priceNumber}>{twentyfourhourchange}</Text>
        </DataContainer>

        <DataContainer>
          <Text style={styles.dataheader}>24hr Volume</Text>
          <Text style={styles.priceNumber}>{twentyfourhourvolume}</Text>
        </DataContainer>

        <DataContainer>
          <Text style={styles.dataheader}>market cap</Text>
          <SairaSB style={styles.priceNumber}>{marketcap}</SairaSB>
        </DataContainer>

        <DataContainer>
          <Text style={styles.dataheader}>Market Cap Rank</Text>
          <SairaSB style={styles.priceNumber}>{marketcaprank}</SairaSB>
        </DataContainer>

        <UniversalFooter />
      </View>
    );

    global.currentcrypto = "";
  } // end of return function

  const loading = () => {
    getCrypto();
    return <Text>Loading...</Text> ;
  }

  return crypto ? loaded() : loading();
}
