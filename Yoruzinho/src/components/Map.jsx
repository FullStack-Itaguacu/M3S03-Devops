import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

export const Map = () => {
  const razãosocial = "LABPharmacy Inc"; //(obrigatório)
  const cnpj = "1312455-465456"; //(obrigatório)
  const nomeFantasia = "Farmacia do Ze"; //(obrigatório)
  const eMail = "farmacy1@labpharmacy.com"; //(obrigatório)
  const telefone = "483555-555"; //(opcional)
  const celular = "48988588895"; // (obrigatório)
  const endereço = "Hoepcke "; //(obrigatório)
  const cep = "88010-130"; // (obrigatório)
  const logradouro = "Rua"; // (obrigatório)
  const número = "92"; //(obrigatório)
  const bairro = "Centro"; // (obrigatório)
  const cidade = "Florianopolis"; //(obrigatório);
  const estado = "SC"; //(obrigatório);
  const complemento = ""; //(opcional);
  const Latitude = -27.5935;
  const Longitude = -48.55854;

  const position = [Latitude, Longitude];
  const zoomLevel = 15;

  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <h4>{razãosocial}</h4>
          <p>{`CNPJ : ${cnpj}`}</p>
          <p>{`Nome Fantasia : ${nomeFantasia}`}</p>
          <p>{`E-mail : ${eMail}`}</p>
          {telefone && <p>{`Telefone : ${telefone}`}</p>}
          <p>Celular : {<Link to={`https://wa.me/55${celular}`}>{`${celular}`}</Link>}</p> 
          <p>{`CEP : ${cep}`}</p>
          <p>{`Endereço : ${endereço}`}</p>
          <p>{`Logradouro : ${logradouro}`}</p>
          <p>{`Número : ${número}`}</p>
          {complemento && <p>{`Complemento : ${complemento}`}</p>}
          <p>{`Bairro : ${bairro}`}</p>
          <p>{`Cidade : ${cidade}`}</p>
          <p>{`Estado : ${estado}`}</p>
         
        </Popup>
      </Marker>
    </MapContainer>
  );
};
