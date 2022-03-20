import React from "react";
import logo from './images/Logo-Tractian.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      units: [],
      companies: [],
      users: [],
      DataisLoaded: false
    };
  }
  
  componentDidMount() {
    this.fetchApi();
    this.fetchUnits();
    this.fetchCompanies();
    this.fetchUsers();
  }

  async fetchApi() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/assets")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchCompanies() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/companies")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        companies: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchUnits() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/units")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        units: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchUsers() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          users: json,
          DataisLoaded: true,
        });
      })
  }

  render() {
    const { DataisLoaded, items, units, companies, users } = this.state;
    if (!DataisLoaded) return <div>
      <h1>Por favor espere um pouco....</h1>
    </div>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Desafio Front-End Software Engineer
          </h1>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <menu>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ativos
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Empresas
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gráficos
              </a>
            </li>
        </menu>
        <div className="objective">
          <p>
            - Mostrar todas as características do ativos; ✔<br />
            - Mostrar empresas, unidades e usuários; ✔<br />
            - Ações como delegar responsável, atualizar ativo, empresa, unidade e usuários<br />
            - Utilizar gráficos para mostrar os níveis de saúde, status e etc<br />
            - Consumir API (https://github.com/tractian/fake-api)<br />
          </p>
          <h1>Mostrar todas as características do ativos</h1>
        </div>
        <section>
          {
            items.map((item) => (
              <div >
              <div key={ item.id } className="card">
                <img src={ item.image } alt="item.name" className="thumb" />
                <article>
                  <p>Item: <span>{ item.name }</span></p>
                  <p>Modelo:  <span>{ item.model }</span></p>
                  <p>Especificações (maxTemp): <span>{ item.specifications.maxTemp }</span></p>
                  <p>Status: <span>{ item.status }</span></p>
                  <p>Avaliação: <span>{ item.healthscore }</span></p>
                  <p>Métricas:<br />
                    - <span>Atividade maxima: { item.metrics.totalCollectsUptime }</span><br />
                    - <span>Tempo de Atividade: { item.metrics.totalUptime }</span><br />
                    - <span>Última atividade: { item.metrics.lastUptimeAt }</span><br />
                  </p>
                  <p>Unidade: <span>{ item.unitId }</span></p>
                  <p>Empresa: <span>{ item.companyId }</span></p>
                </article>
                <div className="thumb">
                  Grafico
                </div>
              </div>
              </div>
            ))
          }
        </section>

        <div className="objective">
        <h1>Mostrar empresas, unidades e usuários;</h1>
        </div>
        <section>
          {
            companies.map((compani) => (
              <div>
                <div key={ compani.id } className="card">
                  <article>
                    <p>Empresa</p>
                    <p>Nome: <span>{ compani.name }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
          {
            units.map((unit) => (
              <div>
                <div key={ unit.id } className="card">
                  <article>
                    <p>Endereço</p>
                    <p>Local: <span>{ unit.name }</span></p>
                    <p>Id:  <span>{ unit.id }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
          {
            users.map((user) => (
              <div>
                <div key={ user.id } className="card">
                  <article>
                    <p>Funcionário</p>
                    <p>Nome: <span>{ user.name }</span></p>
                    <p>Email: <span>{ user.email }</span></p>
                    <p>Empresa Id: <span>{ user.unitId }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
        </section>

        <div className="objective">
          <h1>Ações como delegar responsável, atualizar ativo, empresa, unidade e usuários</h1>
        </div>

        <div className="objective">
          <h1>Utilizar gráficos para mostrar os níveis de saúde, status e etc</h1>
        </div>

        <div className="objective">
          <h1>Consumir API (https://github.com/tractian/fake-api)</h1>
        </div>
      </div>
    );
  }
}

export default App;
