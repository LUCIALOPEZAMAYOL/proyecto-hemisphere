import React from 'react';
import ReactDOM from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  
  state = { latitude:null, error:'' }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude:position.coords.latitude })
      },
      (error)=>{
        this.setState({errorMessage:error.message})
      }
    )
  };

  render () {
    if(this.state.errorMessage && !this.state.latitude){
      return <div>{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
    }
    else{
      return <div>Loading...</div>
    }
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
