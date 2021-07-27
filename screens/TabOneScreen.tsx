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
import { ScrollView } from 'react-native';

export default function TabOneScreen() {

  let apiKey = "c2qq5lqad3ickc1m1gsg";
  let symbol = "AAPL";
  var currentprice, responseobject = "";

  const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  const url2 = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`;

  const AssetListItem = styled.View`
flex:0.23;
border:2px solid #f0f0f0;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #eaeaea;
background-color:#fff;
width:98%;
padding:18px;
padding-top:5px;
padding-bottom:7px;
height:90px;
line-height:10px;`;

  const HomeListContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: stretch;
`;

  const [stock, setStock] = useState(null);

  const getStock = async () => {
    const response = await fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=c3d04bqad3i868don970');
    const data = await response.json();
    setStock(data);
  }

  useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    let openingprice = stock.o;
    let currentprice = stock.c;
    let todayshighprice = stock.h;

    return (
      <HomeListContainer>

        <ScrollView style={styles.listscrollview}>
          <Text style={styles.scrolllistheader}>cryptos</Text>

          <AssetListItem>
            <Text style={styles.dataheader}>BTC</Text>
            <SairaSB style={styles.listingBigName}>Bitcoin</SairaSB>
          </AssetListItem>

          <AssetListItem >
            <Text style={styles.dataheader}>BCH</Text>
            <SairaSB style={styles.listingBigName}>Bitcoin Cash</SairaSB>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>ADA</Text>
            <Text style={styles.listingBigName}>Cardano</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>DASH</Text>
            <Text style={styles.listingBigName}>Dash</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>DOGE</Text>
            <Text style={styles.listingBigName}>Dogecoin</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>EOS</Text>
            <Text style={styles.listingBigName}>EOS</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>ETH</Text>
            <Text style={styles.listingBigName}>Ethereum</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>GNT</Text>
            <Text style={styles.listingBigName}>Golem</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>IOTA</Text>
            <Text style={styles.listingBigName}>IOTA</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>LTC</Text>
            <Text style={styles.listingBigName}>Litecoin</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>XMR</Text>
            <Text style={styles.listingBigName}>Monero</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>NEO</Text>
            <Text style={styles.listingBigName}>Neo</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>OMG</Text>
            <Text style={styles.listingBigName}>OMG Network</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>DOT</Text>
            <Text style={styles.listingBigName}>Polkadot</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>XRP</Text>
            <Text style={styles.listingBigName}>Ripple</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>XLM</Text>
            <Text style={styles.listingBigName}>Stellar</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>USDT</Text>
            <Text style={styles.listingBigName}>Tether</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>TRON</Text>
            <Text style={styles.listingBigName}>TRON</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>USDC</Text>
            <Text style={styles.listingBigName}>USD Coin</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>ZEC</Text>
            <SairaSB style={styles.priceNumber}>Zcash</SairaSB>
          </AssetListItem>

        </ScrollView>
        <ScrollView style={styles.listscrollview}>

          <Text style={styles.scrolllistheader}>stocks</Text>

          <AssetListItem>
            <Text style={styles.dataheader}>opening price</Text>
            <SairaSB style={styles.priceNumber}>{openingprice}</SairaSB>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>today's high price</Text>
            <SairaSB style={styles.priceNumber}>{todayshighprice}</SairaSB>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>current price</Text>
            <Text style={styles.priceNumber}>{currentprice}</Text>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>today's high price</Text>
            <SairaSB style={styles.priceNumber}>{todayshighprice}</SairaSB>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>current price</Text>
            <Text style={styles.priceNumber}>{currentprice}</Text>
          </AssetListItem>

          <UniversalFooter />
        </ScrollView>

      </HomeListContainer>
    );
  } // end of return function

  const loading = () => {
    return <Text>Loading...</Text>;
  }

  return stock ? loaded() : loading();
}
