import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import CreateCategoriaComponent from './component/categoria/createCategoria';
import listCategoriaComponent from './component/categoria/list';
import CreateProductComponent from './component/producto/createProducto';
import EditProductComponent from './component/producto/editProducto';

function App() {
  return (
    <Router>

      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/create-categoria"> Crear categoria</Link>
              </li>
            </ul>
          <Link class="btn btn-info " to="/list-categoria">lista de categorias</Link>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">

          <Route path="/edit-producto/:idproducto" exact component={EditProductComponent} />
            <Route path="/create-categoria" exact component={CreateCategoriaComponent} />
            <Route path="/list-categoria" exact component={listCategoriaComponent} />
            <Route path="/create-producto/:idCategoria" exact component={CreateProductComponent} />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
