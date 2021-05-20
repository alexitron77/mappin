import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Alert from '../alert/alert';
import styles from './map.module.css'

const Map = ({ weatherData }) => {
  const listPointer = () => {
    return weatherData.area_metadata.map((area) => {
      let position = [
        area.label_location.latitude,
        area.label_location.longitude,
      ];
      return (
        <Marker position={position}>
          <Popup>
            <div className={styles.popup}>
              <div className={styles.area}>{area.name}</div>
              <Alert weatherData={weatherData} areaName={area.name}></Alert>
            </div>
          </Popup>
        </Marker>
      );
    });
  };

  return (
    <MapContainer
      center={[ 1.340, 103.832]}
      zoom={11.5}
      scrollWheelZoom={false}
      style={{ height: "700px", width: "1200px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {listPointer()}
    </MapContainer>
  );
};

export default Map;
