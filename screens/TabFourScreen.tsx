// Ask about conditionals in render JSX

import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../components/styles";
import { SairaSB } from '../components/StyledText2';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import { StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import { AntDesign } from '@expo/vector-icons';


export default function TabFourScreen() {


  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [crypto, setCrypto] = useState(null);

  const getCrypto = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/global`);
    const data = await response.json();
    setCrypto(data);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  const loaded = () => {


    let activecryptocurrencies = crypto['data']['active_cryptocurrencies'];
    let ongoingicos = crypto['data']['ongoing_icos'];
    let markets = crypto['data']['markets'];
    let marketcappercentage = crypto['data']['market_cap_percentage'];


    return (
      <ScrollView style={styles.cryptocontainer}>

        <Text style={styles.symbolheader}>trends</Text>
        <Text style={styles.coinsubdetails}>crypto summary</Text>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Active CryptoCurrencies</Text>
          <SairaSB style={styles.priceNumber}>{activecryptocurrencies}</SairaSB>
        </View>
        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Ongoing ICOs</Text>
          <SairaSB style={styles.priceNumber}>{ongoingicos}</SairaSB>
        </View>

        <Text style={styles.coinsubdetails}>MARKET CAP SHARE</Text>


        <Text style={styles.mktcapheader}>BTC : {marketcappercentage.btc.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Bitcoin</Text>

        <Text style={styles.mktcapheader}>ETH : {marketcappercentage.eth.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Ethereum</Text>

        <Text style={styles.mktcapheader}>USDT : {marketcappercentage.usdt.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Tether</Text>

        <Text style={styles.mktcapheader}>BNB : {marketcappercentage.bnb.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Binance Coin</Text>

        <Text style={styles.mktcapheader}>ADA : {marketcappercentage.ada.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Cardano</Text>

        <Text style={styles.mktcapheader}>XRP : {marketcappercentage.bnb.toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>Ripple</Text>



        <UniversalFooter />
      </ScrollView>
    );
  } 

  const loading = () => {
    getCrypto();
    return <Text>Loading...</Text>;
  }

  return crypto ? loaded() : loading();
}