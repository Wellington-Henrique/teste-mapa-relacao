import "./App.css";
import React from "react";
import { jsonData } from "./data";

function getDocDescriptionByType(type) {
  switch (type) {
    case 23:
      return "Cotação";
    case 17:
      return "Pedido";
    case 13:
      return "Nota Fiscal";
    default:
      return "Desconhecido";
  }
}

function Card({ data }) {
  return (
    <div className="card">
      <div className="doc-num-container">
        <span>{getDocDescriptionByType(data.tipoDocumento)} Nº</span>
        <span>{data.numero}</span>
      </div>

      <div className="doc-date-container">
        {getDocDescriptionByType(data.tipoDocumento) === "Cotação" && (
          <span>Validade</span>
        )}
        {getDocDescriptionByType(data.tipoDocumento) === "Pedido" && (
          <span>Embarque</span>
        )}
        {getDocDescriptionByType(data.tipoDocumento) === "Nota Fiscal" && (
          <span>Vencimento</span>
        )}
        <span>{data.dataLancamento}</span>
      </div>

      <div className="doc-total-container ">
        <span>Total</span>
        <span>{data.total}</span>
      </div>

      <div className="doc-status-container">
        <span>{data.status}</span>
      </div>
    </div>
  );
}

function CardConnection() {
  return (
    <div className="connection">
      <div class="arrow"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M262.62 336L342 256l-79.38-80M330.97 256H170"
        />
        <path
          d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
      </svg>
    </div>
  );
}

function CardTree({ data }) {
  return (
    <div className="card-tree">
      <Card data={data} />
      {data.documentosDestino?.length > 0 && (
        <div>
          {data.documentosDestino.map((destino) => (
            <div key={destino.id} className="card-connection">
              <CardConnection />
              <CardTree data={destino} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <h1>Mapa de Relação</h1>
        <CardTree data={jsonData} />
      </div>
    </div>
  );
}

export default App;
