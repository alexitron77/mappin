import React from 'react';
import "../styles/global.css";
import getConfig from 'next/config'

export default function App({ Component, pageProps, weatherData}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} weatherData={weatherData}/>
}
 
App.getInitialProps =  async({Component, ctx}) => {
  const apiCall = await fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast');
  const weatherData = await apiCall.json();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, weatherData };
}