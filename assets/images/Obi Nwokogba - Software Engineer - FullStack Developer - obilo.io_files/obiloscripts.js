function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function randomInteger(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function displayneutrals() {
    let currentInt = 255;
    let endingInt = 0;
    let currentColorInHex;
    for (let i = 0; i < 120; i++) {
        if (currentInt >= 0) {
            currentColorInHex = rgbToHex(currentInt, currentInt, currentInt);
            var elm = `<div class="colorbox" onClick="copyToClipboard(${currentColorInHex})" 
         data-clipboard-text="${currentColorInHex}"
        style="background:${currentColorInHex};"> ${currentColorInHex} </div>`;
            $(elm).appendTo($("#neutralscontainer"));
            currentInt = currentInt - 3;
        }
    }
}

function displaymorecolors() {
    const factor = [-4, -3, -2, 0, 2, 3, 4];
    let currentR = randomInteger(0, 255);
    let currentG = randomInteger(0, 255);
    let currentB = randomInteger(0, 255);
    let randomRFactor = randomInteger(2, 6);
    let randomGFactor = randomInteger(2, 6);
    let randomBFactor = randomInteger(2, 6);
    let endingInt = 0;
    let currentColorInHex;
    // FIRST ITERATION
    for (let i = 0; i < 1500; i++) {
        if (randomInteger(0, 10) == 1) {

            let j = 0;

            while (j < 20) {
                currentR = currentR + j;
                currentG = currentG + j;
                currentB = currentB + j;
                currentColorInHex = rgbToHex(currentR, currentG, currentB);
                var elm = `<div class="colorbox" onClick="copyToClipboard(${currentColorInHex})" 
         data-clipboard-text="${currentColorInHex}"
        style="background:${currentColorInHex};"> ${currentColorInHex} </div>`;
                $(elm).appendTo($("#morecolorscontainer"));
                j = j + 3;
            }
        }
        // End of IF conditional to lighten color 

        else {
            currentColorInHex = rgbToHex(currentR, currentG, currentB);
            var elm = `<div class="colorbox" onClick="copyToClipboard(${currentColorInHex})" 
         data-clipboard-text="${currentColorInHex}"
        style="background:${currentColorInHex};"> ${currentColorInHex} </div>`;
            $(elm).appendTo($("#morecolorscontainer"));
            currentR = currentR + randomRFactor;
            currentG = currentG - randomGFactor;
            currentB = currentB + randomBFactor;
        }
        if (currentR <= 0) {
            currentR = randomInteger(0, 255);
            randomRFactor = factor[Math.floor(Math.random() * factor.length)];
        }
        if (currentG <= 0) {
            currentG = randomInteger(0, 255);
            randomGFactor = factor[Math.floor(Math.random() * factor.length)];
        }
        if (currentB <= 0) {
            currentB = randomInteger(0, 255);
            randomBFactor = factor[Math.floor(Math.random() * factor.length)];
        }
        if (currentR >= 255) {
            currentR = randomInteger(0, 255);
            randomRFactor = factor[Math.floor(Math.random() * factor.length)];
        }
        if (currentG >= 255) {
            currentG = randomInteger(0, 255);
            randomGFactor = factor[Math.floor(Math.random() * factor.length)];
        }
        if (currentB >= 255) {
            currentB = randomInteger(0, 255);
            randomBFactor = factor[Math.floor(Math.random() * factor.length)];
        }
    }
    /*
        currentR = randomInteger(20,235);
        currentG = randomInteger(10,235);
        currentB = randomInteger(20,245);

        randomRFactor = randomInteger(1,4);
        randomGFactor = randomInteger(1,4);
        randomBFactor = randomInteger(1,4);

        // SECOND ITERATION
        for (let i = 0; i < 300; i++) {
          if(currentR >=0 && currentG >=0 && currentB >= 0){
            currentColorInHex = rgbToHex(currentR, currentG, currentB);
            var elm = `<div class="colorbox" onClick="copyToClipboard(${currentColorInHex})" 
             data-clipboard-text="${currentColorInHex}"
            style="background:${currentColorInHex};"> ${currentColorInHex} </div>`;
            $(elm).appendTo($("#morecolorscontainer"));
            currentR = currentR + randomRFactor;
            currentG = currentG - randomGFactor;
            currentB = currentB + randomBFactor;
            }
        }


    // THIRD SET OF ADDITIONS
        currentR = randomInteger(20,235);
        currentG = randomInteger(10,235);
        currentB = randomInteger(20,245);

        randomRFactor = randomInteger(1,4);
        randomGFactor = randomInteger(1,4);
        randomBFactor = randomInteger(1,4);

        */
}

function getPriceOfCoin(coinTicker) {
    var coinTicker2 = coinTicker;
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://coingecko.p.rapidapi.com/simple/price?ids=" + coinTicker2 + "&vs_currencies=USD",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "de9f03c511msh409345b99ecf623p16aa52jsnc3bf33da52c6",
            "x-rapidapi-host": "coingecko.p.rapidapi.com"
        }
    };
    $.ajax(settings).done(function(response) {
        let coinPrice = response[coinTicker2].usd;
        console.log(response[coinTicker2].usd);
        $("#httpscontent3").append(`<div class="coinPanel1"><h1> ${coinTicker2} ${coinPrice} </h1></div>`);
    });
} // END OF GETPRICEOFCOIN FUNCTION
/*
 getPriceOfCoin("bitcoin");
 getPriceOfCoin("ripple");
 getPriceOfCoin("EOS");
 getPriceOfCoin("binance");
 getPriceOfCoin("ethereum");
 getPriceOfCoin("dodgecoin");
 getPriceOfCoin("litecoin"); */