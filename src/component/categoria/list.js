import React from 'react';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class listComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCategoria: []
        }
    }


    componentDidMount() {
        const url = 'http://localhost:4000/categoria/list'


        axios.get(url).then(res => {
            console.log(res);
            if (res.data.success) {
                const data = res.data.data;
                this.setState({ listCategoria: data })
            } else {
                alert("error en el servicio web");
            }
        }).catch(error => {
            alert("error de servidor" + error)
        });

    }

    render() {
        return (

            <table class="table table-hover table-striped">
                <thead class="thead-dark">
                    <tr>

                        <th scope="col">nombre</th>
                        <th colspan="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.loadFillData()}
                </tbody>
            </table>


        );
    }

    loadFillData() {
        return this.state.listCategoria.map((data) => {
            return (<tr>
                <td>{data.nombre}</td>
                <td>
                   <Link to={"/create-producto/" + data.id}>agregar producto </Link>
                </td>
                
            </tr>);
        })
    }


}
export default listComponent;