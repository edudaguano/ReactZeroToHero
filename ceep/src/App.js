import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, descricao) {
    console.log("Título: " + titulo + " e Descrição: " + descricao);
    const novaNota = {titulo, descricao};
    const listaNotas = [...this.state.notas,novaNota];
    const newState = {notas:listaNotas}
    this.setState(newState);
  }

  limparNotas() {
    const newState = {notas:[]}
    this.setState(newState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}  limparNotas={this.limparNotas.bind(this)}/>
        <ListaDeNotas  novaNota={this.state.notas}/>
      </section>
    );
  }
}