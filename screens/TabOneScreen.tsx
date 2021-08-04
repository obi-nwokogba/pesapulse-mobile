import * as React from 'react';
import styles from "../components/styles"
import { StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { SairaSB } from '../components/StyledText2';
import UniversalFooter from '../components/UniversalFooter';
import { Text, View } from '../components/Themed';
import currencies from '../assets/currencies.json';

global.currentcrypto = "bitcoin";
global.currentstock = "AAPL";
global.lastloadedstock = "";
global.stockloadcount = false;
global.currencies = currencies;

export default function TabOneScreen({ navigation: { navigate } }) {

  function setcurrentcrypto(newcurrentcrypto) {
    global.currentcrypto = newcurrentcrypto;
    navigate('CryptoCurrencies');
  }

  function setcurrentstock(newcurrentstock) {
    global.currentstock = newcurrentstock;
    navigate('Stocks');
  }

  return (
    <View style={styles.homelistcontainer}>
      <ScrollView style={styles.listscrollview}>
        <Text style={styles.scrolllistheader}>cryptos</Text>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('aave');
        }}>
          <Text style={styles.dataheader}>AAVE</Text>
          <SairaSB style={styles.listingBigName}>AAVE</SairaSB>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('binancecoin');
        }}>
          <Text style={styles.dataheader}>BNB</Text>
          <SairaSB style={styles.listingBigName}>Binance Coin</SairaSB>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('binance-usd');
        }}>
          <Text style={styles.dataheader}>BUSD</Text>
          <SairaSB style={styles.listingBigName}>Binance USD</SairaSB>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('bitcoin');
        }}>
          <Text style={styles.dataheader}>BTC</Text>
          <SairaSB style={styles.listingBigName}>Bitcoin</SairaSB>
        </TouchableOpacity>

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
          setcurrentcrypto('chainlink');
        }}>
          <Text style={styles.dataheader}>LINK</Text>
          <Text style={styles.listingBigName}>Chainlink</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('crypto-com-chain');
        }}>
          <Text style={styles.dataheader}>CRO</Text>
          <Text style={styles.listingBigName}>Crypto.com Coin</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('dai');
        }}>
          <Text style={styles.dataheader}>DAI</Text>
          <Text style={styles.listingBigName}>Dai</Text>
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
          setcurrentcrypto('ethereum-classic');
        }}>
          <Text style={styles.dataheader}>ETC</Text>
          <Text style={styles.listingBigName}>Ethereum Classic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('filecoin');
        }}>
          <Text style={styles.dataheader}>FIL</Text>
          <Text style={styles.listingBigName}>Filecoin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('ftx-token');
        }}>
          <Text style={styles.dataheader}>FTT</Text>
          <Text style={styles.listingBigName}>FTX Token</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('golem');
        }}>
          <Text style={styles.dataheader}>GLM</Text>
          <Text style={styles.listingBigName}>Golem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('internet-computer');
        }}>
          <Text style={styles.dataheader}>ICP</Text>
          <Text style={styles.listingBigName}>Internet Computer</Text>
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
          setcurrentcrypto('pancakeswap-token');
        }}>
          <Text style={styles.dataheader}>CAKE</Text>
          <Text style={styles.listingBigName}>PancakeSwap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('polkadot');
        }}>
          <Text style={styles.dataheader}>DOT</Text>
          <Text style={styles.listingBigName}>Polkadot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('polygon');
        }}>
          <Text style={styles.dataheader}>MATIC</Text>
          <Text style={styles.listingBigName}>Polygon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('ripple');
        }}>
          <Text style={styles.dataheader}>XRP</Text>
          <Text style={styles.listingBigName}>Ripple</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('solana');
        }}>
          <Text style={styles.dataheader}>SOL</Text>
          <Text style={styles.listingBigName}>Solana</Text>
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

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('terra-luna');
        }}>
          <Text style={styles.dataheader}>LUNA</Text>
          <Text style={styles.listingBigName}>Terra</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('the-graph');
        }}>
          <Text style={styles.dataheader}>GRT</Text>
          <Text style={styles.listingBigName}>The Graph</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('theta');
        }}>
          <Text style={styles.dataheader}>THETA</Text>
          <Text style={styles.listingBigName}>Theta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('tron');
        }}>
          <Text style={styles.dataheader}>TRON</Text>
          <Text style={styles.listingBigName}>TRON</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('uniswap');
        }}>
          <Text style={styles.dataheader}>UNI</Text>
          <Text style={styles.listingBigName}>Uniswap</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('vechain');
        }}>
          <Text style={styles.dataheader}>VET</Text>
          <Text style={styles.listingBigName}>VeChain</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('wrapped-bitcoin');
        }}>
          <Text style={styles.dataheader}>WBTC</Text>
          <Text style={styles.listingBigName}>Wrapped Bitcoin</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentcrypto('zcash');
        }}>
          <Text style={styles.dataheader}>ZEC</Text>
          <Text style={styles.listingBigName}>ZCash</Text>
        </TouchableOpacity>

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
          setcurrentstock('BABA');
        }}>
          <Text style={styles.dataheader}>BABA</Text>
          <Text style={styles.listingBigName}>Alibaba Group</Text>
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
          setcurrentstock('BA');
        }}>
          <Text style={styles.dataheader}>BA</Text>
          <Text style={styles.listingBigName}>Boeing Co</Text>
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
          setcurrentstock('FB');
        }}>
          <Text style={styles.dataheader}>FB</Text>
          <Text style={styles.listingBigName}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('F');
        }}>
          <Text style={styles.dataheader}>F</Text>
          <Text style={styles.listingBigName}>Ford Motor Co.</Text>
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


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('TSLA');
        }}>
          <Text style={styles.dataheader}>TSLA</Text>
          <Text style={styles.listingBigName}>Tesla</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('V');
        }}>
          <Text style={styles.dataheader}>V</Text>
          <Text style={styles.listingBigName}>VISA</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.assetlistitem} onPress={() => {
          setcurrentstock('WMT');
        }}>
          <Text style={styles.dataheader}>WMT</Text>
          <Text style={styles.listingBigName}>Walmart</Text>
        </TouchableOpacity>

        {/* { name: "3M", symbol: "MMM" },
    { name: "Alphabet", symbol: "GOOG" },
    { name: "Alibaba Group", symbol: "BABA" },
    { name: "Apple", symbol: "AAPL" },
    { name: "Bank of America Corp.", symbol: "BAC" },
    { name: "Blackberry Holdings", symbol: "BB" },
    { name: "The Boeing Company", symbol: "BA" },
    { name: "Facebook", symbol: "FB" },
    { name: "Ford Motor Company", symbol: "F" },
    { name: "Sirius XM Holdings", symbol: "SIRI" },
    { name: "JPMorgan Chase", symbol: "JPM" },
    { name: "Mastercard Inc.", symbol: "MA" },
    { name: "Microsoft", symbol: "MSFT" },
    { name: "NVIDIA Corporation", symbol: "NVDA" },
      { name: "Walgreens Boots Alliance", symbol: "WBA" },  */}

        <UniversalFooter />
      </ScrollView>

    </View>
    // </ImageBackground>
  );
}
