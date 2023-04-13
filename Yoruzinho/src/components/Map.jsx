import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Map = () => {
  const [establecimentos, setEstablecimentos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/establecimentos")
      .then((response) => {
        setEstablecimentos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const florianopolis = [-27.5969, -48.5495];
  const zoomLevel = 15;

  return (
    <MapContainer zoom={zoomLevel} center={florianopolis} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      //recorre a la lista de establecimientos y crea un marcador por cada uno
      {establecimentos.map((establecimento) => (
        <Marker key={establecimento.cnpj} position={[establecimento.latitude, establecimento.longitude]}>
          <Popup>
            <h4>{establecimento.razaoSocial}</h4>
            <p>{`CNPJ : ${establecimento.cnpj}`}</p>
            <p>{`Nome Fantasia : ${establecimento.nomeFantasia}`}</p>
            <p>{`E-mail : ${establecimento.email}`}</p>
            {establecimento.telefone && (<p>{`Telefone : ${establecimento.celular}`}</p>)}
            <p>Celular :{<Link to={`https://wa.me/55${establecimento.celular}`} >{`${establecimento.celular}`}</Link>}</p>
            <p>{`CEP : ${establecimento.cep}`}</p>
            <p>{`Logradouro : ${establecimento.logradouro}`}</p>
            <p>{`Número : ${establecimento.numero}`}</p>
            {establecimento.complemento && (<p>{`Complemento : ${establecimento.complemento}`}</p>)}
            <p>{`Bairro : ${establecimento.bairro}`}</p>
            <p>{`Cidade : ${establecimento.cidade}`}</p>
            <p>{`Estado : ${establecimento.estado}`}</p>
          </Popup>
        </Marker>
      ))}
     
    </MapContainer>
  );
};
