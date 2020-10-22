import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


const baseUrl = "http://localhost:4000";

class EditProductoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campnombre: "",
            campprecio: 0,
            campcantidad: 0, producto:[]
        
        }
    }

    componentDidMount() {

        //parametros de id de usuario
        let idproducto = this.props.match.params.idproducto;
        console.log(this.props.match.params);
        const url = baseUrl + "/producto/obtenerproducto"

     //PARAMETROS PARA ENVIAR DATOS
     const datapost = {
        id: this.props.match.params.idproducto,
    }
    axios.post(url, datapost).then(response => {


        const data = response.data.data[0];

        this.setState({ producto: data,
            campnombre: data.nombre,
            campprecio: data.precio,
            campcantidad: data.cantidad
        })

        console.log(this.state.producto)

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
                    <button type="submit" class="btn btn-primary" onClick={() => this.sendUpdate()} >Actualizar</button>

                </div>
                <br></br>

                <div class="row">
                    
                </div>
            </div>

        );
    }

    sendUpdate() {

        const url = baseUrl + "/producto/edit/"+this.props.match.params.idproducto;



        //PARAMETROS PARA ENVIAR DATOS
        const datapost = {
            nombre: this.state.campnombre,
            precio: this.state.campprecio,
            cantidad: this.state.campcantidad
            
        }
        axios.post(url, datapost).then(response => {
            console.log(response.data.data);
            if (response.data.success) {
                alert(response.data.mensaje);
                //para actualizar la pagina
               // window.location.reload();
            } else {
                alert("error");
            }
        }).catch(error => {
            alert("error 325")
        })
    }

}
export default EditProductoComponent;