import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const appContext = createContext();
//===PROVIDER
function ContextProvider({ children }) {
  // estado para estabelecimentos
  const [establecimentosState, setEstablecimentosState] = useState([]);
  // variaveis para formulario de establecimento
  const [logadouro, setLogadouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  // estados para produtos e busca de produtos
  const [produtos, setProdutos] = useState([]);
  const [produtoBuscados, setProdutoBuscados] = useState([]);
  // variavel para imagem de medicamento padrao
  const imagemMedicamento = 
  "https://img.freepik.com/free-photo/first-medical-aid-symbol-form-jar-with-cross-generative-ai_169016-29777.jpg?w=900&t=st=1681784879~exp=1681785479~hmac=a6c5d4e3a67c4e2ed9357fbec7ccd4ca8d0fbaa343471047d417b509994ec140"
  //estado para controlar o estado de validação dos formulários controlados
  const [validated, setValidated] = useState(false);
  //estado para controlar o estado de login para as rotas privadas
  const [loggedIn, setLoggedIn] = useState(false);
  // variaves para o endereco do API
  const url = "https://farmacia.luisfederico.repl.co";
  // variaves para os endpoints da API
  const endpointEstablecimentos = "/establecimentos";
  const endpointProdutos = "/produtos";

  //função para obter estabelecimentos do banco de dados
  function getEstablecimentos() {
    return establecimentosState;
  }
  //funcao para carregar estabelecimentos do banco de dados
  function loadEstablecimentos() {
    //obter establecimentos do banco de dados
    axios
      .get(url + endpointEstablecimentos)
      .then((response) => {
        //atualizar estado de estabelecimentos
        setEstablecimentosState(response.data);
      })
      .catch((error) => {
        //caso ocorra um erro
        console.log(error);
      });
  }
  //função para adicionar um estabelecimento ao banco de dados
  const postEstablecimento = (establecimento) => {
    //adicionar establecimento ao banco de dados
    axios
      .post(url + endpointEstablecimentos, establecimento)
      .then((response) => {
        //alert para mensagem de sucesso caso estabelecimento seja adicionado ao banco de dados
        alert(
          `Establecimento  ${establecimento.nomeFantasia} foi adiccionado!`
        );
      })
      .catch((error) => {
        //alert para mensagem de erro caso establecimento nao seja adicionado ao banco de dados
        alert(
          `Infelizmente   ${establecimento.nomeFantasia} não foi adiccionado!`
        );
        console.log(error);
      });
  };
  //funcao para submeter formulário de um novo establecimento
  const handleSubmitEstablecimento = (event) => {
    //obter formulário
    const form = event.currentTarget;
    //variavel para guardar os dados do formulário para criação de um novo objeto establecimento;
    let establecimento;
    // se formulário nao valido
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //mostra os errores dos inputs no formulário
    setValidated(true);
    event.preventDefault();

    //quando formulario e valido cria um objeto estabelecimento para ser guardado na base de dados
    if (form.checkValidity() === true) {
      event.preventDefault();
      //captura de dados do formulário para criação de objeto establecimento
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
     //adicionar establecimento ao banco de dados
      postEstablecimento(establecimento);
      //limpar formulário e estado de validação dos campos controlados do formulário
      setValidated(false);
      event.target.reset();
    }
  };
  // Limpa formulario utilizando referencia
  function handleLimpar(event, ref) {
    //limpar formulário e estado de validação dos campos controlados do formulário
    event.preventDefault();
    ref.current.reset();
    //limpar estado de validação dos campos controlados do formulário de  establecimento
    setLogadouro("");
    setCidade("");
    setEstado("");
    setBairro("");
    setCep("");
    setValidated(false);
  }
  //função para adicionar um novo produto no banco de dados
  const postProduto = (produto) => {
    //adicionar produto ao banco de dados
    axios
      .post(url + endpointProdutos, produto)
      .then((response) => {
        //alert para mensagem de sucesso caso produto seja adicionado ao banco de dados
        alert(`Produto  ${produto.medicamento} foi adiccionado!`);
      })
      .catch((error) => {
        //alert para mensagem de erro caso produto nao seja adicionado ao banco de dados
        alert(
          `Infelizmente o produto  ${produto.medicamento} não foi adiccionado!`
        );
        console.log(error);
      });
  };
  //função para submeter formulário de novo produto
  const handleSubmitProduto = (event) => {
    //obter formulário
    const form = event.currentTarget;
    //variável para guardar os dados do formulário para criação de um novo objeto produto;
    let produto;
    //se formulario nao e valido
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //mostra os errores dos inputs no formulário
    setValidated(true);
    event.preventDefault();
    //quando formulário e valido cria um objeto estabelecimento para   ser guardado na base de dados
    if (form.checkValidity() === true) {
      event.preventDefault();
      //captura de dados do formulário para criação de objeto produto
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
        imagem:imagemMedicamento,
      };
      // post produto na base de dados fake json-server
      postProduto(produto);
      //limpar formulário  e estado de validação dos campos controlados do formulário
      setValidated(false);
      event.target.reset();
    }
  };
  //função para atualizar os campos do formulário de estabelecimentos
  const atualizarCampos = (cep) => {
    //obter dados da api viacep e atualizar os campos do formulário de estabelecimentos
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { data } = response;
        setLogadouro(data.logradouro);
        setCidade(data.localidade);
        setEstado(data.uf);
        setBairro(data.bairro);
      })
      .catch((error) => {
        //alert para mensagem de erro caso o cep nao seja encontrado
        console.error( `${error} na consulta do cep ${cep}`); 
      });
  };
  //função para capturar o cep do formulário de estabelecimentos
  const handleCepChange = (e) => {

    const novoCep = e.target.value;
    console.log(novoCep);
    setCep(novoCep);
    atualizarCampos(novoCep);
  };

  //controla o estado de login

  function login() {
    setLoggedIn(true);
    console.log("login");
  }

  function logout() {
    setLoggedIn(false);
    console.log("logout");
  }
  //função para validar senha
  function validaSenha(senha) {
    // este regex e para validar senha com pelo menos 8 caracteres, uma letra maiúscula e uma minuscula
    const regex =
      /^(?=.*[0-9])(?=.*[a-zA-Z\u00C0-\u00FF])[a-zA-Z0-9\u00C0-\u00FF]{8,}$/;
    if (!regex.test(senha)) {
      alert(
        "Senha incorreta, verificar se  possui 8 ou mais caracteres e se há pelo menos uma letra (maiúscula ou minúscula) na senha."
      );
    }
    return regex.test(senha);
  }
  //funçao para validar email
  function validaEmail(email) {
    // este regex e para validar email com domínio .com, .br, .net, etc
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
      alert(
        "Email incorreto, verificar se e um e-mail valido, ex: name@example.com"
      );
    }
    return regex.test(email);
  }

  //função  de validação de usuário
  const validarUsuario = (email, senha) => {
    if (validaEmail(email) && validaSenha(senha)) {
      login();
      return true;
    } else {
      return false;
    }
  };

  //funçao para obter todos os produtos
  const getProdutos = () => {
    axios
      .get(url + endpointProdutos)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        //alert para mensagem de erro caso nao seja possível obter os produtos
        console.log(error);
      });
  };
  //funçao  busca um produto pelo nome
  const handleSubmitBuscarProduto = (event) => {
    event.preventDefault();
    //obtém o valor do input
    const buscar = event.target.elements["medicamentoBuscado"].value;
    //busca o produto no array
    const busqueda = produtos.filter((produto) => {
      //se tiver algo no input retorna o/os produto/s que contem a sequencia de caracteres do input
      //toLowerCase() transforma tudo em minusculo para nao dar erro de case sensitive
      return produto.medicamento.toLowerCase().includes(buscar.toLowerCase());
    });
    //seta o array de produtos buscados
    setProdutoBuscados(busqueda);
    //se o array de produtos buscados estiver vazio mostra um alerta
    if (busqueda.length === 0) {
      alert(`A busca não retornou nenhum resultado com a palavra : ${buscar} `);
    }
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
    handleCepChange,
    login,
    logout,
    loggedIn,
    validaSenha,
    validarUsuario,
    produtos,
    produtoBuscados,
    handleSubmitBuscarProduto,
    getProdutos,
    setProdutoBuscados,
  };
  //retorna o contexto
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default ContextProvider;
