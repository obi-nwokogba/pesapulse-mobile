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


export default function TabTwoScreen() {

  let symbol = global.currentcrypto;
  let coinname = global.currentcrypto;
  let lastloadedcrypto = "";

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [crypto, setCrypto] = useState(null);

  const getCrypto = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${symbol}`);
      const data = await response.json();
      lastloadedcrypto == global.currentcrypto;
      setCrypto(data);
  }

  useEffect(() => {
    getCrypto();
  }, []);

  if (lastloadedcrypto != global.currentcrypto) {
    getCrypto();
  }

  const loaded = () => {
    let marketcapnumber = numberWithCommas(parseInt(crypto['market_data']['market_cap']['usd']));
    let marketcap = "$" + marketcapnumber;

    // Format the current price and add commas if its more than $100
    let currentprice = crypto['market_data']['current_price']['usd'];
    if (currentprice < 100) {
      currentprice = "$" + currentprice;
    }
    else {
      currentprice = "$" + numberWithCommas(crypto['market_data']['current_price']['usd']);
    }

    let twentyfourhourchangepercentage = crypto['market_data']['price_change_percentage_24h'];
    let twentyfourhourchangenumber = crypto['market_data']['price_change_24h'];
    let twentyfourhourchange = "$" + crypto['market_data']['price_change_24h'];
    let sevendaychangepercentage = crypto['market_data']['price_change_percentage_7d'];
    let thirtydaychangepercentage = crypto['market_data']['price_change_percentage_30d'];
    let sevendaychangepriceusd = crypto['market_data']['price_change_percentage_7d_in_currency']['usd'];
    let sevendaychangepricestring = "$" + sevendaychangepriceusd;
    let marketcaprank = crypto['market_cap_rank'];
    let blocktimeinminutes = crypto['block_time_in_minutes'];
    let formalname = crypto['name'];
    let coinsymbol = crypto['symbol'];
    let description = crypto['description']['en'];

    lastloadedcrypto = global.currentcrypto;

    return (
      <ScrollView style={styles.cryptocontainer}>

        <Text style={styles.symbolheader}>{formalname}</Text>
        <Text style={styles.coinsubdetails}>{marketcaprank} &middot; {coinsymbol}</Text>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Current Price ($ USD)</Text>
          <SairaSB style={styles.priceNumber}>{currentprice}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>24-hour Change</Text>

          {/* <Text 
            style={[twentyfourhourchangenumber > 0 ? styles.greenPriceNumber : styles.redPriceNumber]}
          >
            {twentyfourhourchange}
          </Text>  */}


          {twentyfourhourchangenumber >= 0 ? (

            <Text style={styles.greenPriceNumber}>
              <AntDesign style={styles.indicatorarrow} name="caretup" size={24} color="#22a824" />
              {twentyfourhourchangepercentage}%{"\n"}
              <Text style={styles.posgreen}>&nbsp;&nbsp;&nbsp;&nbsp;{twentyfourhourchange} </Text>
            </Text>

          ) : (
            <Text style={styles.redPriceNumber} >
              <AntDesign style={styles.indicatorarrow} name="caretdown" size={24} color="#ff2033" />&nbsp;
              {twentyfourhourchangepercentage}%{"\n"}
              <Text style={styles.posred}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{twentyfourhourchange} </Text>
            </Text>)
          }
        </View>

        {/* SEVEN DAY PRICE CHANGE */}
        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>7-day Change %</Text>

          {sevendaychangepriceusd >= 0 ? (

            <Text style={styles.greenPriceNumber}>
              <AntDesign style={styles.indicatorarrow} name="caretup" size={24} color="#22a824" />&nbsp;
              {sevendaychangepercentage}%
            </Text>
          ) : (
            <Text style={styles.redPriceNumber} >
              <AntDesign style={styles.indicatorarrow} name="caretdown" size={24} color="#ff2033" />&nbsp;
              {sevendaychangepercentage}%
            </Text>)
          }
        </View>

        {/* THIRTY DAY PRICE CHANGE */}
        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>30-day Change %</Text>
          {thirtydaychangepercentage >= 0 ? (
            <Text style={styles.greenPriceNumber}>
              <AntDesign style={styles.indicatorarrow} name="caretup" size={24} color="#22a824" />&nbsp;
              {thirtydaychangepercentage}%
            </Text>
          ) : (
            <Text style={styles.redPriceNumber} >
              <AntDesign style={styles.indicatorarrow} name="caretdown" size={24} color="#ff2033" />&nbsp;
              {thirtydaychangepercentage}%
            </Text>)
          }

        </View>



        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>market cap</Text>
          <SairaSB style={styles.priceNumber}>{marketcap}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Market Cap Rank</Text>
          <SairaSB style={styles.priceNumber}>{marketcaprank}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>block time in minutes</Text>
          <Text style={styles.priceNumber}>{blocktimeinminutes}</Text>
        </View>

        <View style={styles.datacontainer}>
          <Hyperlink linkDefault={true}>
            <Text style={styles.descriptiontext}>{description}</Text></Hyperlink>
        </View>
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