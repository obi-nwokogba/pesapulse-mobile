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

//ALPHAVANTAGE KEY 1: 9CFWZAQA1FJTFRED
//API KEY 2 YJ8ISH38VVWSWGN5

export default function TabThreeScreen() {

  let symbol = global.currentstock;
  //let stock = global.currentstock;
  let lastloadedstock = "";
  let apikey = "";

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if(Math.floor(Math.random() * 101) > 50){
    apikey = "9CFWZAQA1FJTFRED";
  }
  else{
    apikey = "YJ8ISH38VVWSWGN5";
  }

  const [stock, setStock] = useState({});

  const getStock = async () => {
    const response = 
    await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apikey}`);
    const data = await response.json();
    setStock(data);
  }

  useEffect(() => {
    if (lastloadedstock != global.currentstock) {
      getStock();
    }
  }, []);

  if (lastloadedstock != global.currentstock) {
    getStock();
  }

  const loaded = () => {

    /*
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
    
    let coinsymbol = crypto['symbol'];
    let description = crypto['description']['en'];

    */

    let formalname = stock['Name'];
    let exchange = stock['Exchange'];
    let officialsymbol = stock['Symbol'];
    let sector = stock['Sector'];
    let description = stock['Description'];
    let dividendpershare = stock['DividendPerShare'];
    let profitmargin = stock['ProfitMargin'];

    let marketcapnumber = numberWithCommas(parseInt(stock['MarketCapitalization']));
    let marketcap = "$" + marketcapnumber;

    lastloadedstock = global.exchange;

    return (
      <ScrollView style={styles.cryptocontainer}>

        <Text style={styles.symbolheader}>{formalname}</Text>
        <Text style={styles.coinsubdetails}>{officialsymbol} &middot; {exchange} &middot; {sector}</Text>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Market Capitalization ($ USD)</Text>
          <SairaSB style={styles.priceNumber}>{marketcap}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Dividend Per Share</Text>
          <SairaSB style={styles.priceNumber}>${dividendpershare}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Profit Margin</Text>
          <SairaSB style={styles.priceNumber}>{profitmargin}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
        <Hyperlink linkDefault={ true }>
          <Text style={styles.descriptiontext}>{description}</Text></Hyperlink>
          </View>

        <UniversalFooter />
      </ScrollView>
    );
  } 

  const loading = () => {
    getStock();
    return <Text>Loading...</Text>;
  }

  return stock ? loaded() : loading();
}