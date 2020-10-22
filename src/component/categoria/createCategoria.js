import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';


const baseUrl = "http://localhost:4000";

class CreateCategoriaComponent extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            campName: "",
        }
    }


    render() {
        return (
            <div>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Nombre de categoria</label>
                        <input type="text" class="form-control" placeholder="Nombre de categoria" 
                         value={this.state.campName} onChange={(value) => this.setState({ campName: value.target.value })}/>
                    </div>

                </div>
                <button type="submit" class="btn btn-primary" onClick={() => this.sendSave()}>Agregar</button>

            </div>

            


        );
    }


    sendSave() {

        const url = baseUrl + "/categoria/create";

        //PARAMETROS PARA ENVIAR DATOS
        const datapost = {
            nombre: this.state.campName
        }
        axios.post(url, datapost).then(response => {
            console.log(response);
            if (response.data.success) {
                alert("Creado Exitosamente");
            } else {
                alert("error");
            }
        }).catch(error => {
            alert("error 325")
        })
    }
}

export default CreateCategoriaComponent;