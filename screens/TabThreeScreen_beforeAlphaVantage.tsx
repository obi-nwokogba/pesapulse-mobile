import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../components/styles"
import { SairaSB } from '../components/StyledText2';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';

let pageloadcount = true;

export default function TabThreeScreen() {

  let apiKey = "c2qq5lqad3ickc1m1gsg";
  let symbol = global.currentstock;
  // let lastloadedstock = global.lastloadedstock;

  //const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  //const url2 = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`;

  const [stock, setStock] = useState({});
  //const [stock2, setStock2] = useState({});

  const getStock = async () => {

    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c2qq5lqad3ickc1m1gsg`);

    /*
    const response2 = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=c2qq5lqad3ickc1m1gsg`); */

    const data = await response.json();
    // const data2 = await response2.json();

    global.lastloadedstock = global.currentstock;
    setStock(data);
    //setStock2(data2);
  }

  useEffect(() => {
    getStock();
  }, []);
  

  if(global.lastloadedstock != global.currentstock){
  
}

  const loaded = () => {
    console.log(stock);
    //console.log(stock2);
    //console.log(stock2.exchange);
    console.log(symbol);
    let openingprice = stock.o;
    let currentprice = stock.c;
    let todayshighprice = stock.h;

    //let companyname = stock2.name;
    // let exchange = stock2.exchange;
    //let ticker = stock2.ticker;
    //let finnhubIndustry = stock2.finnhubIndustry;


    return (
      <View style={styles.cryptocontainer}>
        {/* <Text style={styles.symbolheader}>{companyname}</Text> */}
        <Text style={styles.symbolheader}>{symbol}</Text>
        {/* <Text style={styles.coinsubdetails}>{ticker} &middot; {finnhubIndustry}</Text> */}

        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>current price</Text>
          <Text style={styles.priceNumber}>{currentprice}</Text>
        </View>
        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>today's high price</Text>
          <SairaSB style={styles.priceNumber}>{todayshighprice}</SairaSB>
        </View>
        <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>opening price</Text>
          <SairaSB style={styles.priceNumber}>{openingprice}</SairaSB>
        </View>
        {/* <View style={styles.datacontainer}>
          <Text style={styles.dataheader}>exchange</Text>
          <SairaSB style={styles.priceNumber}>{exchange}</SairaSB>
        </View> */}

        <UniversalFooter />
      </View>
    );
  } // end of return function

  const loading = () => {
    return <Text>Loading...</Text>;
  }

  return stock ? loaded() : loading();
}