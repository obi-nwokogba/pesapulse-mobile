import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import styles from "../components/styles"
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { SairaSB } from '../components/StyledText2';
//import { Text, View } from './Themed';
//import EditScreenInfo from '../components/EditScreenInfo';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import styled from 'styled-components';

export default function TabTwoScreen() {

  let symbol = "bitcoin";

  const DataContainer=styled.View`
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
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`);
    const data = await response.json();
    setCrypto(data);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  const loaded = () => {
    let marketcapnumber = numberWithCommas(parseInt(crypto[symbol].usd_market_cap));
    //marketcapnumber = marketcapnumber.toLocaleString(undefined, {maximumFractionDigits:2});
    let marketcap = "$" + marketcapnumber;

    let currentprice = "$" + crypto[symbol].usd;
    let twentyfourhourchange = Math.round(crypto[symbol].usd_24h_change * 1000) / 1000 + "%";

    let twentyfourhourvolume = numberWithCommas(parseInt(crypto[symbol].usd_24h_vol));

    let twentyfourhourcoloredchange = "";
    if (twentyfourhourchange >=0){
      twentyfourhourcoloredchange = '<SairaSB style={styles.priceNumber, styles.greenPriceNumber}>{currentprice}</SairaSB>';
    }
    else{
      twentyfourhourcoloredchange = '<SairaSB style={styles.redPriceNumber, styles.redPriceNumber}>{currentprice}</SairaSB>';
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.title}>Symbol</Text>

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

        <UniversalFooter />
      </View>
    );
  } // end of return function

  const loading = () => {
    return <Text>Loading...</Text>;
  }

  return crypto ? loaded() : loading();
}
