import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../config/Api';

const initialPosition = {
  lat: 51.505, 
  lng: -0.09
}

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
}


const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
  const response = await fetchLocalMapBox(inputValue);

  const places = response.data.features.map((item: any) => {
    return ({
      label: item.place_name,
      value: item.place_name,
      position: {
        lat: item.center[1],
        lng: item.center[0]
      },
      place: item.place_name,
    });
  });

  callback(places);
};

const handleChangeSelect = (place: Place) => {
  // setAddress(place);
  // onChangeLocation({
  //   latitude: place.position.lat,
  //   longitude: place.position.lng,
  //   address: place.label!
  // });
};

function OrderLocation(){
  return(
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Selecione onde o pedido deve ser entregue:
        </h3>
        <div className="filter-container">
          <AsyncSelect
            placeholder="Digite um endereço para entrega do pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>
          <MapContainer 
            center={initialPosition} 
            zoom={15} 
            scrollWheelZoom
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={initialPosition}>
            <Popup>
              Lugar zuado
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default OrderLocation;