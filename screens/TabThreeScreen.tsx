// Ask about conditionals in render JSX

import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../components/styles";
import { SairaSB } from '../components/StyledText2';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';

export default function TabThreeScreen() {

  let lastloadedstock = "";
  let thiscurrentstock = global.currentstock;


  function randominteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let apikey = "c2qq5lqad3ickc1m1gsg";

  if(randominteger(1,1000) > 500){
    apikey="sandbox_c2qq5lqad3ickc1m1gt0";
  }

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [stock, setStock] = useState(null);

  async function getStock() {
    try {
      if(randominteger(1,1000) > 600){
        apikey="sandbox_c2qq5lqad3ickc1m1gt0";
      }
      if(randominteger(1,1000) < 400){
        apikey="c44veeaad3i82cba265g";
      }

      let response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${global.currentstock}&token=${apikey}`,);

      let responseJSON = await response.json();
      console.log(responseJSON);
      //lastloadedstock = global.currentstock;
      setStock(responseJSON);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStock();
  }, []);

  if (String(lastloadedstock) != String(global.currentstock)) {
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
    if (String(lastloadedstock) != String(global.currentstock)) {
      getStock();
    }
    return <Text>Loading...</Text>;
  }

  return stock ? loaded() : loading();
}