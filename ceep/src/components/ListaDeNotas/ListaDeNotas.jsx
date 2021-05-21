import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {



  render() {
    return (
      <ul className="lista-notas">
        {this.props.novaNota.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} descricao={nota.descricao} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
