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
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

global.currentcrypto = "bitcoin";
global.currentstock = "AAPL";

export default function TabOneScreen({ navigation: { navigate } }) {


  const HomeListContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: stretch;
`;

  function setcurrentcrypto(newcurrentcrypto) {
    global.currentcrypto = newcurrentcrypto;
    navigate('CryptoCurrencies');
  }

  function setcurrentstock(newcurrentstock) {
    global.currentstock = newcurrentstock;
    navigate('Stocks');
  }

  return (
    <HomeListContainer>
      <ScrollView style={styles.listscrollview}>
        <Text style={styles.scrolllistheader}>cryptos</Text>

       

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('bitcoin-cash');
        }}>
          <Text style={styles.dataheader}>BCH</Text>
          <SairaSB style={styles.listingBigName}>Bitcoin Cash</SairaSB>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('cardano');
        }}>
          <Text style={styles.dataheader}>ADA</Text>
          <Text style={styles.listingBigName}>Cardano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('dash');
        }}>
          <Text style={styles.dataheader}>DASH</Text>
          <Text style={styles.listingBigName}>Dash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('dogecoin');
        }}>
          <Text style={styles.dataheader}>DOGE</Text>
          <Text style={styles.listingBigName}>Dogecoin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('eos');
        }}>
          <Text style={styles.dataheader}>EOS</Text>
          <Text style={styles.listingBigName}>EOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('ethereum');
        }}>
          <Text style={styles.dataheader}>ETH</Text>
          <Text style={styles.listingBigName}>Ethereum</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('golem');
        }}>
          <Text style={styles.dataheader}>GLM</Text>
          <Text style={styles.listingBigName}>Golem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('iota');
        }}>
            <Text style={styles.dataheader}>IOTA</Text>
            <Text style={styles.listingBigName}>IOTA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('litecoin');
        }}>
            <Text style={styles.dataheader}>LTC</Text>
            <Text style={styles.listingBigName}>Litecoin</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('monero');
        }}>
            <Text style={styles.dataheader}>XMR</Text>
            <Text style={styles.listingBigName}>Monero</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('neo');
        }}>
            <Text style={styles.dataheader}>NEO</Text>
            <Text style={styles.listingBigName}>Neo</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('omisego');
        }}>
            <Text style={styles.dataheader}>OMG</Text>
            <Text style={styles.listingBigName}>OMG Network</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('polkadot');
        }}>
            <Text style={styles.dataheader}>DOT</Text>
            <Text style={styles.listingBigName}>Polkadot</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('ripple');
        }}>
            <Text style={styles.dataheader}>XRP</Text>
            <Text style={styles.listingBigName}>Ripple</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('stellar');
        }}>
            <Text style={styles.dataheader}>XLM</Text>
            <Text style={styles.listingBigName}>Stellar</Text>
          </TouchableOpacity> 


          <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('tether');
        }}>
            <Text style={styles.dataheader}>USDT</Text>
            <Text style={styles.listingBigName}>Tether</Text>
          </TouchableOpacity> 





        {/* 

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
          </AssetListItem>  */}

      </ScrollView>
      <ScrollView style={styles.listscrollview}>

        <Text style={styles.scrolllistheader}>stocks</Text>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('MMM');
        }}>
          <Text style={styles.dataheader}>MMM</Text>
          <Text style={styles.listingBigName}>3M Co</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('AXP');
        }}>
          <Text style={styles.dataheader}>AXP</Text>
          <Text style={styles.listingBigName}>American Express</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('AAPL');
        }}>
          <Text style={styles.dataheader}>AAPL</Text>
          <Text style={styles.listingBigName}>Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('CAT');
        }}>
          <Text style={styles.dataheader}>CAT</Text>
          <Text style={styles.listingBigName}>Caterpillar Inc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('KO');
        }}>
          <Text style={styles.dataheader}>KO</Text>
          <Text style={styles.listingBigName}>Cocal-Cola Co</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('HD');
        }}>
          <Text style={styles.dataheader}>HD</Text>
          <Text style={styles.listingBigName}>Home Depot Inc</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('INTC');
        }}>
          <Text style={styles.dataheader}>INTC</Text>
          <Text style={styles.listingBigName}>Intel Corp</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('INTC');
        }}>
          <Text style={styles.dataheader}>JNJ</Text>
          <Text style={styles.listingBigName}>Johnson & Johnson</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('MSFT');
        }}>
          <Text style={styles.dataheader}>MSFT</Text>
          <Text style={styles.listingBigName}>Microsoft</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('MSFT');
        }}>
          <Text style={styles.dataheader}>NKE</Text>
          <Text style={styles.listingBigName}>Nike Inc</Text>
        </TouchableOpacity>

        {/* <AssetListItem>
            <Text style={styles.dataheader}>AAPL</Text>
            <SairaSB style={styles.priceNumber}>Apple</SairaSB>
          </AssetListItem>

          <AssetListItem>
            <Text style={styles.dataheader}>TSLA</Text>
            <SairaSB style={styles.priceNumber}>Tesla</SairaSB>
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
          </AssetListItem> */}

        <UniversalFooter />
      </ScrollView>
    </HomeListContainer>
  );
}
