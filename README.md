Cities Lookup API
============

Cities Lookup is a simple tool for looking up city data. It returns the city name, population, and more.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Cities Lookup API](https://apiverve.com/marketplace/api/citieslookup)

---

## Installation
	npm install @apiverve/citieslookup --save

---

## Configuration

Before using the citieslookup API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Cities Lookup API documentation is found here: [https://docs.apiverve.com/api/citieslookup](https://docs.apiverve.com/api/citieslookup).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var citieslookupAPI = require('@apiverve/citieslookup');
var api = new citieslookupAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  city: "San Francisco"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "search": "San Francisco",
    "foundCities": [
      {
        "cityId": 5391959,
        "name": "San Francisco",
        "altName": "",
        "country": "US",
        "featureCode": "PPLA2",
        "population": 864816,
        "loc": {
          "type": "Point",
          "coordinates": [
            -122.41942,
            37.77493
          ]
        }
      },
      {
        "cityId": 3493146,
        "name": "San Francisco de Macorís",
        "altName": "",
        "country": "DO",
        "featureCode": "PPLA",
        "population": 124763,
        "loc": {
          "type": "Point",
          "coordinates": [
            -70.25259,
            19.30099
          ]
        },
        "muni": "060101",
        "muniSub": "06010101"
      },
      {
        "cityId": 3986984,
        "name": "San Francisco del Rincón",
        "altName": "",
        "country": "MX",
        "featureCode": "PPLA2",
        "population": 71139,
        "loc": {
          "type": "Point",
          "coordinates": [
            -101.85515,
            21.01843
          ]
        }
      },
      {
        "cityId": 5397765,
        "name": "South San Francisco",
        "altName": "",
        "country": "US",
        "featureCode": "PPL",
        "population": 67271,
        "loc": {
          "type": "Point",
          "coordinates": [
            -122.40775,
            37.65466
          ]
        }
      },
      {
        "cityId": 3837675,
        "name": "San Francisco",
        "altName": "",
        "country": "AR",
        "featureCode": "PPLA2",
        "population": 59062,
        "loc": {
          "type": "Point",
          "coordinates": [
            -62.08266,
            -31.42797
          ]
        }
      },
      {
        "cityId": 3621911,
        "name": "San Francisco",
        "altName": "",
        "country": "CR",
        "featureCode": "PPL",
        "population": 55923,
        "loc": {
          "type": "Point",
          "coordinates": [
            -84.12934,
            9.99299
          ]
        },
        "muni": "40103"
      },
      {
        "cityId": 3590219,
        "name": "San Francisco El Alto",
        "altName": "",
        "country": "GT",
        "featureCode": "PPLA2",
        "population": 54493,
        "loc": {
          "type": "Point",
          "coordinates": [
            -91.4431,
            14.9449
          ]
        }
      },
      {
        "cityId": 3519290,
        "name": "San Francisco Acuautla",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 27960,
        "loc": {
          "type": "Point",
          "coordinates": [
            -98.86034,
            19.34564
          ]
        }
      },
      {
        "cityId": 3827263,
        "name": "San Francisco Cuaxusco",
        "altName": "",
        "country": "MX",
        "featureCode": "PPLX",
        "population": 24900,
        "loc": {
          "type": "Point",
          "coordinates": [
            -99.61925,
            19.26755
          ]
        }
      },
      {
        "cityId": 3519249,
        "name": "San Francisco Tlalcilalcalpan",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 16509,
        "loc": {
          "type": "Point",
          "coordinates": [
            -99.76771,
            19.29474
          ]
        }
      },
      {
        "cityId": 3583747,
        "name": "San Francisco",
        "altName": "",
        "country": "SV",
        "featureCode": "PPLA",
        "population": 16152,
        "loc": {
          "type": "Point",
          "coordinates": [
            -88.1,
            13.7
          ]
        }
      },
      {
        "cityId": 3986985,
        "name": "San Francisco de los Romo",
        "altName": "",
        "country": "MX",
        "featureCode": "PPLA2",
        "population": 16124,
        "loc": {
          "type": "Point",
          "coordinates": [
            -102.2714,
            22.07748
          ]
        }
      },
      {
        "cityId": 3590197,
        "name": "San Francisco Zapotitlán",
        "altName": "",
        "country": "GT",
        "featureCode": "PPLA2",
        "population": 13855,
        "loc": {
          "type": "Point",
          "coordinates": [
            -91.52144,
            14.58939
          ]
        }
      },
      {
        "cityId": 3522454,
        "name": "San Francisco Ocotlán",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 11636,
        "loc": {
          "type": "Point",
          "coordinates": [
            -98.28345,
            19.13411
          ]
        }
      },
      {
        "cityId": 8858142,
        "name": "San Francisco Tecoxpa",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 11456,
        "loc": {
          "type": "Point",
          "coordinates": [
            -99.00639,
            19.19167
          ]
        }
      },
      {
        "cityId": 3519255,
        "name": "San Francisco Telixtlahuaca",
        "altName": "",
        "country": "MX",
        "featureCode": "PPLA2",
        "population": 10618,
        "loc": {
          "type": "Point",
          "coordinates": [
            -96.90529,
            17.29684
          ]
        }
      },
      {
        "cityId": 3519250,
        "name": "San Francisco Tetlanohcan",
        "altName": "",
        "country": "MX",
        "featureCode": "PPLA2",
        "population": 9858,
        "loc": {
          "type": "Point",
          "coordinates": [
            -98.1637,
            19.2602
          ]
        }
      },
      {
        "cityId": 3530852,
        "name": "San Francisco Chimalpa",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 8953,
        "loc": {
          "type": "Point",
          "coordinates": [
            -99.34398,
            19.44279
          ]
        }
      },
      {
        "cityId": 3706575,
        "name": "Altos de San Francisco",
        "altName": "",
        "country": "PA",
        "featureCode": "PPL",
        "population": 8189,
        "loc": {
          "type": "Point",
          "coordinates": [
            -79.79,
            8.86167
          ]
        }
      },
      {
        "cityId": 3519243,
        "name": "San Francisco Zacacalco",
        "altName": "",
        "country": "MX",
        "featureCode": "PPL",
        "population": 7420,
        "loc": {
          "type": "Point",
          "coordinates": [
            -98.98279,
            19.92875
          ]
        }
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.