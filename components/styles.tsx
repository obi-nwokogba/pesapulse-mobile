import { StyleSheet } from "react-native"

export default StyleSheet.create({
    scrolllistheader: {
        color: '#9f9f9f',
        fontSize: 16,
        fontWeight: "200",
        textTransform:"uppercase",
        letterSpacing:10,
        paddingLeft:16,
        paddingTop:17,
        paddingBottom:10
    },
    assetlistitem:
        {flex: 0.2, 
        borderWidth: 2,
        borderColor: '#F0F0F0' ,
        margin: 2,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 8,
        lineHeight: 30
    },
    listscrollview:{
        paddingTop:10,
        paddingBottom:300,
        lineHeight:150,
        flex:1,
        display:'flex',
    },
    homelistcontainer: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        backgroundColor: "#f0f0f0",
        flexDirection:'column'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-start',
        textAlign: 'left',
        backgroundColor: "#f0f0f0"
    }, symbol: {
        color: '#68C2FF',
        fontSize: 50,
        fontWeight: "700"
    },
    symbolheader: {
        color: '#8d8d8d',
        fontSize: 40,
        fontWeight: "700",
        paddingTop:60
    },
    listingBigName:
    {
        color: '#1872F0',
        fontSize: 32,
        fontFamily: 'sairaextracondensedsemibold',
        lineHeight:50
    },

    priceNumber:
    {
        color: '#1872F0',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },
    greenPriceNumber: {
        color: '#10C471',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },
    redPriceNumber: {
        color: '#ff4550',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },

    dataheader: {
        fontSize: 16,
        marginBottom: -10,
        color: '#5a5a5a'
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
        fontFamily: 'space-mono',
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