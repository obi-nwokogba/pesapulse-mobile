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

export default function TabThreeScreen() {

  let apiKey = "c2qq5lqad3ickc1m1gsg";
  let symbol = global.currentstock;
  let lastloadedstock = "";

  const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  const url2 = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`;

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

  const [stock, setStock] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  const getStock = async () => {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c3d04bqad3i868don970`);
    /*
    const response2 = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c3d04bqad3i868don970`); */

    setStock(data);
    //setCompanyData(data2);
    const data = await response.json();
    //const data2 = await response.json();
  }

  useEffect(() => {
    getStock();
  }, []);

  if (lastloadedstock != global.currentstock) {
    getStock();
  }

  const loaded = () => {

    let openingprice = stock.o;
    let currentprice = stock.c;
    let todayshighprice = stock.h;
    let companyName = companyData.finnhubIndustry;

    return (
      <View style={styles.container}>
         <Text style={styles.symbolheader}> <small>{symbol}</small></Text>
        <Text style={styles.symbolheader}></Text>
        {/* <Text style={styles.title}>Symbol</Text> */}
        <DataContainer>
          <Text style={styles.dataheader}>current price</Text>
          <Text style={styles.priceNumber}>{currentprice}</Text>
        </DataContainer>
        <DataContainer>
          <Text style={styles.dataheader}>today's high price</Text>
          <SairaSB style={styles.priceNumber}>{todayshighprice}</SairaSB>
        </DataContainer>
        <DataContainer>
          <Text style={styles.dataheader}>opening price</Text>
          <SairaSB style={styles.priceNumber}>{openingprice}</SairaSB>
        </DataContainer>
        <UniversalFooter />
      </View>
    );
  } // end of return function

  const loading = () => {
    return <Text>Loading...</Text>;
  }

  return stock ? loaded() : loading();
}