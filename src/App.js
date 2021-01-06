import React from 'react';
import styles from  './App.module.css';
import { Cards,Chart,CountryPicker, Header } from "./components";
import { fetchData } from "./api";

class App extends React.Component{

  state={
    data:{},
    country:'',

  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async(country)=>{
    
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
  }

  render(){

    const {data,country} = this.state
    return(
      <React.Fragment>
      <Header/>
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
      </React.Fragment>
    )
  }
}

export default App;


