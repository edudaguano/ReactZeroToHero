import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  
  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
  }

  getTitulo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  getDescricao(event) {
    event.preventDefault();
    event.stopPropagation();
    this.descricao = event.target.value;
    console.log(this.descricao);
  }

  criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.props);
    this.props.criarNota
    (this.titulo, this.descricao);
  }
  
  limparNotas(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.limparNotas();
  }

  render() {
    return (
      <form className="form-cadastro ">
        <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this.getTitulo.bind(this)}/>
        <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input" onChange={this.getDescricao.bind(this)}/>
        <button className="form-cadastro_input form-cadastro_submit" onClick={this.criarNota.bind(this)}> Criar Nota </button>
        <button className="form-cadastro_input form-cadastro_submit" onClick={this.limparNotas.bind(this)}> Limpar Notas </button>
      </form>
    );
  }
}

export default FormularioCadastro;
