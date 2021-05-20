import { Button } from '@material-ui/core'
import getConfig from 'next/config'
import { areaForecastMapping } from '../../controllers/area';

const Alert = ({weatherData, areaName}) => {
  return (
    <Button color="primary" variant="contained" onClick={(e) => createAlert(e, weatherData, areaName)}>
      Create Alert
    </Button>
  )
}

const createAlert = async (e, weatherData, areaName) => {
  const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  let forecast = areaForecastMapping(weatherData, areaName);
  let alert = {
    from: areaName,
    forecast: forecast
  }
  
  await fetch(publicRuntimeConfig.api.createAlert, {
    method: 'POST', 
    headers:{ 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(alert)});
}


export default Alert;