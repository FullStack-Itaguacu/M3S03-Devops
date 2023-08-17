import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import AppContainer from "../pages/AppContainer";
import ListaEstablecimento from "../pages/ListaEstablecimento";
import ListaProdutos from "../pages/ListaProdutos";
import CadastroEstablecimento from "../pages/CadastroEstablecimento";
import CadastroProduto from "../pages/CadastroProduto"





const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement : <ErrorPage/>,

    },
    {
        path: "/app",
        element :<AppContainer/>,
        errorElement : <ErrorPage/>,
        children: [
            {
              path: "/app/",
              element: <ListaEstablecimento/>,
            },
            {
              path: "/app/listaprodutos",
              element: <ListaProdutos />,
            },
      
            {
              path: "/app/cadastroestablecimento",
              element: < CadastroEstablecimento/>,
            },
            {
                path : "/app/cadastroproduto",
                element : <CadastroProduto/>
            }
          ],
}
])


export default router;
