import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from "./src/components/CurrentPrice"
import HistoryGraphic from "./src/components/HistoryGraphic"
import QuotationsList from "./src/components/QuotationsList"
import QuotationsItems from "./src/components/QuotationsList/QuotationsItem"
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

  return `https://api.coindesk.com/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#ffff"
        barStyle="dark-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <QuotationsItems/>
    </SafeAreaView>
  );
}