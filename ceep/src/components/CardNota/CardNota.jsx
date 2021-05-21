import React, { Component } from "react";
import "./estilo.css";
import DeleteIcon from '@material-ui/icons/Delete';
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={DeleteIcon}></img>
        </header>
        <p className="card-nota_texto">{this.props.descricao}</p>
      </section>
    );
  }
}

export default CardNota;
