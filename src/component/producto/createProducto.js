import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const baseUrl = "http://localhost:4000";

class CreateProductoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campnombre: "",
            campprecio: "",
            campcantidad: 0,
            categoriaId: 0,
            listProducto: []

        }
    }

    componentDidMount() {

        const url = baseUrl + "/producto/list";



        //PARAMETROS PARA ENVIAR DATOS
        const datapost = {
            id: this.props.match.params.idCategoria,
        }
        axios.post(url, datapost).then(response => {


            const data = response.data.data;

            this.setState({ listProducto: data })

            console.log(this.state.listProducto)

        }).catch(error => {
            alert("error 325")
        })

    }



    render() {
        return (
            <div>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="inputnombre">Nombre de Producto</label>
                        <input type="text" class="form-control" placeholder="Nombre de producto"
                            value={this.state.campnombre} onChange={(value) => this.setState({ campnombre: value.target.value })} id="inputnombre"
                        />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputprecio">Precio</label>
                        <input type="text" class="form-control" placeholder="Precio" id="inputprecio"
                            value={this.state.campprecio} onChange={(value) => this.setState({ campprecio: value.target.value })} />
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputcantidad">Cantidad</label>
                        <input type="text" class="form-control" placeholder="Cantidad" id="inputcantidad"
                            value={this.state.campcantidad} onChange={(value) => this.setState({ campcantidad: value.target.value })} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => this.sendSave()} >Agregar</button>

                </div>
                <br></br>

                <div class="row">
                    <table class="table table-hover table-striped">
                        <thead class="thead-dark">
                            <tr>

                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th colSpan="2">Accion</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.loadFillData()}
                        </tbody>
                    </table>
                </div>




            </div>

        );
    }

    loadFillData() {
        return this.state.listProducto.map((data) => {
            return (<tr>
                <td>{data.nombre}</td>
                <td>{data.precio}</td>
                <td>{data.cantidad}</td>

                <td><button class="btn btn-danger" onClick={() => this.onDelete(data.id)}>Eliminar</button></td>
                <td><Link class="btn btn-success" to={"/edit-producto/"+data.id}>Editar   </Link>   </td>
            </tr>);
        })
    }

    sendSave() {

        const url = baseUrl + "/producto/create";



        //PARAMETROS PARA ENVIAR DATOS
        const datapost = {
            nombre: this.state.campnombre,
            precio: this.state.campprecio,
            cantidad: this.state.campcantidad,
            categoria: this.props.match.params.idCategoria
        }
        axios.post(url, datapost).then(response => {
            console.log(response);
            if (response.data.success) {
                alert(response.data.mensaje);
                //para actualizar la pagina
                window.location.reload();
            } else {
                alert("error");
            }
        }).catch(error => {
            alert("error 325")
        })
    }

    onDelete(id) {
        const baseUrl = "http://localhost:4000/producto/delete"    // parameter data post
        // network
        axios.post(baseUrl, {
            id: id
        })
            .then(response => {

               alert("eliminado");
                //para actualizar la pagina
                window.location.reload();
            })
            .catch(error => {
                alert("Error 325 ")
            })
    }
}
export default CreateProductoComponent;