import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from "./src/components/CurrentPrice"
import HistoryGraphic from "./src/components/HistoryGraphic"
import QuotationsList from "./src/components/QuotationsList"
import styles from "./styles"

function addNumber0(number){
  if(number <= 9){
    return "0" + number;
  }
  return number;
}

function url (days) {
  const date = new Date();
  const listLastDays = days;
  const endDate = `${date.getFullYear()}-${addNumber0(date.getMonth()+1)}-${addNumber0(date.getDay())}`;
  date.setDate(date.getDate() - listLastDays);
  const startDate = `${date.getFullYear()}-${addNumber0(date.getMonth()+1)}-${addNumber0(date.getDay())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectList = returnApi.bpi;

  const queryCoins = Object.keys(selectList).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectList[key]
    };
  });

  let data = queryCoins.reverse();
  return data;
}


async function getPriceCoinsGhapic(url) {
  let responseGraph = await fetch(url);
  let returnApiGraph = await responseGraph.json();
  let selectListGraph = returnApiGraph.bpi;

  const queryCoinsGraph = Object.keys(selectListGraph).map((key) => {
    return selectListGraph[key]
  });

  let dataGraph = queryCoinsGraph;
  return dataGraph;
}

export default function App() {

  const [ coinsList, setCoinsList] = useState([]);
  const [ coinsGraphList, setCoinsGraphList] = useState([0]);
  const [ days, setDays ] = useState(30);
  const [ updateData, setUpdateData ] = useState(true);
  const [ price, setPrice ] = useState();

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  function priceCotation(){
    setPrice(coinsGraphList.pop());
  };

  useEffect(() => {

    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceCoinsGhapic(url(days)).then((dataGraph) => {
      setCoinsGraphList(dataGraph);
    });

    priceCotation();

    if(updateData){
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#ffff"
        barStyle="dark-content"
      />
      <CurrentPrice
        lastCotation={price}
      />
      <HistoryGraphic
        infoDataGraph={coinsGraphList}
      />
      <QuotationsList 
        filterDay={updateDay}
        listTransactions={coinsList}
      />
    </SafeAreaView>
  );
}