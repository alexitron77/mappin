export const areaForecastMapping = (weatherData, areaName) => {
   let item = weatherData.items[0].forecasts.filter(
     forecast => forecast.area === areaName
   )
   return item[0].forecast;
}

export default { areaForecastMapping };