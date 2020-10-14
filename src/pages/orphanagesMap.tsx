import React from 'react';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/Map-mark.svg';
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanagesMap.css';
import { Map, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

const orphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </header>

                <footer>
                    <strong>Recife</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>

            <Map
                center={[-8.1197944, -34.8966936]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}>

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />

            </Link>
        </div>
    );
};
export default orphanagesMap;