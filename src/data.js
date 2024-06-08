export const jsonData = {
  id: 1,
  numero: 1,
  total: "1250,00",
  status: "Fechado",
  dataLancamento: "2023-09-25",
  tipoDocumento: 23,
  documentosDestino: [
    {
      id: 122,
      numero: 2,
      total: "725,00",
      status: "Fechado",
      dataLancamento: "2023-09-02",
      tipoDocumento: 17,
      documentosDestino: [
        {
          id: 111,
          numero: 3,
          total: "625,00",
          status: "Fechado",
          dataLancamento: "2023-09-25",
          tipoDocumento: 13,
        },
      ],
    },
    {
      id: 122,
      numero: 2,
      total: "725,00",
      status: "Em aberto",
      dataLancamento: "2023-09-02",
      tipoDocumento: 17,
      documentosDestino: [],
    },
  ],
};
