import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../components/styles";
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import obicurrencies from '../assets/obicurrencies.json';

export default function TabFourScreen() {

  // Additional function for formatting numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function randominteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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
    let marketcappercentagekeys = Object.keys(marketcappercentage);


    return (
      <ScrollView style={styles.cryptocontainer}>

        <Text style={styles.symbolheader}>trends</Text>
        <Text style={styles.coinsubdetails}>crypto summary</Text>

        <Text style={styles.cointrendheader}>MARKET OVERVIEW</Text>


        <Text style={styles.mktcapheader}>
          {activecryptocurrencies}</Text>
        <Text style={styles.coinsubdetails}>
          Active Cryptocurrencies
        </Text>

        <Text style={styles.mktcapheader}>
          {ongoingicos}</Text>
        <Text style={styles.coinsubdetails}>
          Ongoing ICOs
        </Text>

        <Text style={styles.cointrendheader}>Market Cap Percentage</Text>

        <Text style={styles.mktcapheader}>
          1 &middot; {marketcappercentagekeys[0]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[0]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[0]]}
        </Text>

        <Text style={styles.mktcapheader}>
          2 &middot; {marketcappercentagekeys[1]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[1]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[1]]}
        </Text>

        <Text style={styles.mktcapheader}>
          3 &middot; {marketcappercentagekeys[2]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[2]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[2]]}
        </Text>

        <Text style={styles.mktcapheader}>
          4 &middot; {marketcappercentagekeys[3]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[3]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[3]]}
        </Text>

        <Text style={styles.mktcapheader}>
          5 &middot; {marketcappercentagekeys[4]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[4]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[4]]}
        </Text>

        <Text style={styles.mktcapheader}>
          6 &middot; {marketcappercentagekeys[5]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[5]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[5]]}
        </Text>

        <Text style={styles.mktcapheader}>
          7 &middot; {marketcappercentagekeys[6]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[6]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[6]]}
        </Text>

        <Text style={styles.mktcapheader}>
          8 &middot; {marketcappercentagekeys[7]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[7]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[7]]}
        </Text>

        <Text style={styles.mktcapheader}>
          9 &middot; {marketcappercentagekeys[8]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[8]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[9]]}
        </Text>

        <Text style={styles.mktcapheader}>
          10 &middot; {marketcappercentagekeys[9]}&nbsp;
          {marketcappercentage.[marketcappercentagekeys[9]].toFixed(3)}%</Text>
        <Text style={styles.coinsubdetails}>
          {obicurrencies[marketcappercentagekeys[9]]}
        </Text>

        <Text style={styles.cointrendheader}>Popular Cryptos</Text>

        <View style={styles.coinmegalistcontainer}>

          <Text>
            {Object.keys(obicurrencies).map((obj, key) => (
              <Text style={styles.coinmegalistitem} key={randominteger(1000, 100000)}>
                {obicurrencies[obj]} &middot; </Text>
            ))}

          </Text>
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