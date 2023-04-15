import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const appContext = createContext();
//===PROVIDER
function ContextProvider({ children }) {
  //START====Cadastro de Establecimentos=====================>>>>>

  const [establecimentosState, setEstablecimentosState] = useState([]);
  const [logadouro, setLogadouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");

  const [validated, setValidated] = useState(false);

  //funcao para obter establecimentos do banco de dados
  function getEstablecimentos() {
    return establecimentosState;
  }
  //funcao para carregar establecimentos do banco de dados
  function loadEstablecimentos() {
    axios
      .get("http://localhost:3000/establecimentos")
      .then((response) => {
        setEstablecimentosState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //funcao para adicionar um establecimento ao banco de dados
  const postEstablecimento = (establecimento) => {
    axios
      .post("http://localhost:3000/establecimentos", establecimento)
      .then((response) => {
        alert(
          `Establecimento  ${establecimento.nomeFantasia} foi adiccionado!`
        );

        console.log(response.data);
      })
      .catch((error) => {
        alert(
          `Infelizmente   ${establecimento.nomeFantasia} não foi adiccionado!`
        );
        console.log(error);
      });
  };
  //funcao para submeter formulario de novo establecimento
  const handleSubmitEstablecimento = (event) => {
    const form = event.currentTarget;
    let establecimento;
    //formulario nao valido
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //mostra os errores dos imputs no formulario
    setValidated(true);
    event.preventDefault();

    //quando formulario e valido cria um objeto establecimiento para   ser guardado na base de dados

    if (form.checkValidity() === true) {
      event.preventDefault();
      //captura de dados do formulario para criaçao de objeto establecimento
      establecimento = {
        id: event.target.elements["cnpj"].value,
        razaoSocial: event.target.elements["razãosocial"].value,
        cnpj: event.target.elements["cnpj"].value,
        nomeFantasia: event.target.elements["nomeFantasia"].value,
        email: event.target.elements["email"].value,
        telefone: event.target.elements["telefone"].value,
        celular: event.target.elements["celular"].value,
        cep: event.target.elements["cep"].value,
        logradouro: event.target.elements["logradouro"].value,
        numero: event.target.elements["numero"].value,
        complemento: event.target.elements["complemento"].value,
        bairro: event.target.elements["bairro"].value,
        cidade: event.target.elements["cidade"].value,
        estado: event.target.elements["estado"].value,
        latitude: event.target.elements["latitude"].value,
        longitude: event.target.elements["longitude"].value,
      };
      // Precisa modificar para chamar uma
      // funcao  addicionar um establecimento
      // ao banco de dados sejaLocalStorage ou json-server
      // console.log(establecimento);
      postEstablecimento(establecimento);
      //limpar formulario
      setValidated(false);
      event.target.reset();
    }
  };
  // Limpa formulario utilizando referencia
  function handleLimpar(event, ref) {
    event.preventDefault();
    ref.current.reset();
    setLogadouro("");
    setCidade("");
    setEstado("");
    setBairro("");
    setCep("");
    setValidated(false);
  }
  //funcao para adicionar um novo produto no banco de dados
  const postProduto = (produto) => {
    axios
      .post("http://localhost:3000/produtos", produto)
      .then((response) => {
        alert(`Produto  ${produto.medicamento} foi adiccionado!`);

        console.log(response.data);
      })
      .catch((error) => {
        alert(
          `Infelizmente o roduto  ${produto.medicamento} não foi adiccionado!`
        );
        console.log(error);
      });
  };
  //funcao para submeter formulario de novo produto
  const handleSubmitProduto = (event) => {
    const form = event.currentTarget;
    let produto;
    //formulario nao valido
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //mostra os errores dos imputs no formulario
    setValidated(true);
    event.preventDefault();

    //quando formulario e valido cria um objeto establecimiento para   ser guardado na base de dados

    if (form.checkValidity() === true) {
      event.preventDefault();
      //captura de dados do formulario para criaçao de objeto produto

      produto = {
        id:
          event.target.elements["medicamento"].value +
          event.target.elements["laboratorio"].value +
          event.target.elements["dosagem"].value,
        medicamento: event.target.elements["medicamento"].value,
        laboratorio: event.target.elements["laboratorio"].value,
        dosagem: event.target.elements["dosagem"].value,
        valorUnitario: event.target.elements["valorUnitario"].value,
        tipo: event.target.elements["tipo"].value,
        descricao: event.target.elements["descricao"].value,
        //poderia se desenvolver um sistema para upload de imagem
        imagem:
          "https://img.freepik.com/psd-gratuitas/marca-de-medicacao-e-maquete-de-embalagem_53876-65886.jpg?w=740&t=st=1681400504~exp=1681401104~hmac=37fc5b256fc392531a8a5ce3317a2aee9b9da27aa9ea9e05436b106bda239976",
      };
      // post produto na base de dados fake json-server
      postProduto(produto);
      //limpar formulario
      setValidated(false);
      event.target.reset();
    }
  };
  //funcao para atualizar os campos do formulario de establecimentos
  const atualizarCampos = (codigoPostal) => {
    axios
      .get(`https://viacep.com.br/ws/${codigoPostal}/json/`)
      .then((response) => {
        const { data } = response;
        setLogadouro(data.logradouro);
        setCidade(data.localidade);
        setEstado(data.uf);
        setBairro(data.bairro);
      })
      .catch((error) => {
        console.error("Error al obtener información del código postal:", error);
      });
  };
  //funcao para capturar o codigo postal do formulario de establecimentos
  const handleCodigoPostalChange = (e) => {
    const novoCodigoPostal = e.target.value;
    console.log(novoCodigoPostal);
    setCep(novoCodigoPostal);
    atualizarCampos(novoCodigoPostal);
  };

  const value = {
    getEstablecimentos,
    loadEstablecimentos,
    postEstablecimento,
    handleSubmitEstablecimento,
    handleLimpar,
    validated,
    setValidated,
    postProduto,
    handleSubmitProduto,
    logadouro,
    cidade,
    estado,
    bairro,
    cep,
    atualizarCampos,
    handleCodigoPostalChange,
  };
  //retorna o contexto
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default ContextProvider;
