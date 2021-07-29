import { StyleSheet } from "react-native"

export default StyleSheet.create({
    scrolllistheader: {
        color: '#9f9f9f',
        fontSize: 16,
        fontWeight: "200",
        textTransform: "uppercase",
        letterSpacing: 10,
        paddingLeft: 16,
        paddingTop: 17,
        paddingBottom: 10,
        fontFamily:'mplus1regular'
    },
    coinsubdetails: {
        color: '#7b7b7b',
        fontSize: 16,
        fontWeight: "200",
        textTransform: "uppercase",
        letterSpacing: 3,
        padding: 8,
        borderTopWidth:2,
        borderTopColor:'#d8d8d8',
        paddingBottom: 10,
        fontFamily:'mplus1regular',
        textAlign:'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    assetlistitem:
    {
        flex: 0.2,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        margin: 2,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 8,
        lineHeight: 30,
        minHeight:82
    },

    datacontainer:{
        marginTop:7,
        borderRadius:13,
        padding:13,
        paddingBottom:7,
        paddingTop:7,
        backgroundColor:'#ffffff',
        lineHeight:10
    },
    centeredtext:{
        textAlign:'center'
    },


    listscrollview: {
        paddingTop: 10,
        paddingBottom: 300,
        lineHeight: 150,
        flex: 1,
        display: 'flex',
    },
    homelistcontainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        backgroundColor: "#f0f0f0",
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        backgroundColor: "#f0f0f0"
    },
    // SCROLL VIEW containing cryptos
    cryptocontainer: {
        flex:1,
        marginHorizontal: 20,
        textAlign: 'center',
        backgroundColor: "#f0f0f0",
        height:1200,
    },
    symbol: {
        color: '#68C2FF',
        fontSize: 50,
        fontWeight: "700"
    },
    symbolheader: {
        color: '#7e7e7e',
        fontSize: 38,
        fontWeight: "700",
        paddingTop: 50,
        fontFamily:'mplus1bold',
        textAlign:'center'
    },

    mktcapheader: {
        color: '#636363',
        fontSize: 34,
        fontWeight: "700",
        paddingTop: 5,
        fontFamily:'mplus1bold',
        textAlign:'center'
    },

    listingBigName:
    {
        color: '#1872F0',
        fontSize: 32,
        fontFamily: 'sairaextracondensedsemibold',
        lineHeight: 50
    },
    priceNumber:
    {
        color: '#1872F0',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },
    greenPriceNumber: {
        color: '#22a824',
        fontSize: 40,
        fontFamily: 'sairaextracondensedsemibold'
    },
    posgreen:{
        marginLeft:200,
        paddingLeft:200,
        borderRightWidth:30,
        fontSize:40,
        lineHeight:40,
        color: '#22a824',
    },
    redPriceNumber: {
        color: '#ff2033',
        fontSize: 40,
        fontFamily: 'sairaextracondensedsemibold',
        lineHeight:70
    },
    posred:{
        marginLeft:200,
        paddingLeft:200,
        borderRightWidth:30,
        fontSize:40,
        lineHeight:40,
        color: '#ff2033',
    },
    indicatorarrow:{
        paddingRight:20
    },

    dataheader: {
        fontSize: 15,
        marginBottom: -10,
        color: '#5a5a5a',
        fontFamily:'mplus1regular'
    },

    descriptiontext: {
        fontSize: 16,
        marginBottom: -10,
        color: '#2a2a2a',
        fontFamily:'mplus1regular',
        padding:13
    },

    dataContainer: {
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    footerText: {
        borderRadius: 3,
        paddingHorizontal: 4,
        fontFamily: 'mono',
        backgroundColor: "#f0f0f0",
        fontSize: 13,
        color: "#b7b7b7"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});