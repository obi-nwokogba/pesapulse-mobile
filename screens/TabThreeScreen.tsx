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

//ALPHAVANTAGE 
// API KEY 1: 9CFWZAQA1FJTFRED
// API KEY 2 YJ8ISH38VVWSWGN5

export default function TabThreeScreen() {

  let apikey = "";

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [stock, setStock] = useState(null);

  async function getStock() {
    try {
      let response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${global.currentstock}&token=c2qq5lqad3ickc1m1gsg`,
      );
      let responseJSON = await response.json();
      console.log(responseJSON);
      //return response;
      //alert(JSON.stringify(responseJSON));
      setStock(responseJSON);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStock();
  }, []);

  if (String(global.lastloadedstock) != String(global.currentstock)) {
    getStock();
  }

  const loaded = () => {

    //alert(`Last Loaded:${global.lastloadedstock} and Global ${global.currentstock}`)

    let currentprice = stock['c'];
    let change = stock['d'];
    let percentchange = stock['dp'];
    let highoftheday = stock['h'];
    let description = stock['l'];
    let openpriceoftheday = stock['o'];
    let previouscloseprice = stock['pc'];
    let profitmargin = stock['t'];

    let marketcapnumber = numberWithCommas(parseInt(stock['MarketCapitalization']));
    let marketcap = "$" + marketcapnumber;

    global.lastloadedstock = global.currentstock;

    return (
      <ScrollView style={styles.cryptocontainer}>

        <Text style={styles.symbolheader}>{global.currentstock}</Text>
        <Text style={styles.coinsubdetails}>{global.currentstock}</Text>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Current Price</Text>
          <SairaSB style={styles.priceNumber}>${currentprice}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Change</Text>
          <SairaSB style={styles.priceNumber}>${change}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Percent Change</Text>
          <SairaSB style={styles.priceNumber}>{percentchange}%</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>High Price of the Day</Text>
          <SairaSB style={styles.priceNumber}>{highoftheday}</SairaSB>
        </View>

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>Previous Close Price</Text>
          <SairaSB style={styles.priceNumber}>{previouscloseprice}</SairaSB>
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