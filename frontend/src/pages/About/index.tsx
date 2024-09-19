import './styles.css';

function About() {
    return (
        <div className="container ">

            
                <h1>Projeto CineNine</h1>

                <p>Este é um projeto de filmes e avaliações de filmes, onde os usuários podem visualizar informações sobre os filmes e registrar suas avaliações. O sistema foi desenvolvido usando Spring Boot no backend e React no frontend.</p>

                <h2>Funcionalidades</h2>

                <ul>
                    <li><strong>Visualização de Dados de Filmes:</strong> Os dados dos filmes estão disponíveis publicamente e podem ser visualizados sem a necessidade de login.</li>
                    <li><strong>Avaliações de Filmes:</strong> Os usuários podem registrar avaliações para os filmes. Cada avaliação consiste em uma nota de 0 a 5.</li>
                    <li><strong>Cálculo de Média de Notas:</strong> Sempre que uma nova avaliação é registrada, o sistema calcula automaticamente a média das notas de todos os usuários para o filme em questão e armazena essa média na entidade Movie, junto com a contagem de votos.</li>
                </ul>

                <figure>
                    <img src="https://github.com/Sammy192/desafioDSMovie_restAssured/assets/53224915/bf46628b-77ca-4a16-96a2-e01fafb7821e" alt="Diagrama de Classes do Backend"></img>
                        <figcaption>Figura 2: Diagrama de Classes do Backend</figcaption>
                </figure>

                <h2>Tecnologias Utilizadas</h2>

                <ul>
                    <li><strong>Backend:</strong> Spring Boot, JUnit 5</li>
                    <li><strong>Frontend:</strong> React</li>
                </ul>

                <h2>Configuração do Ambiente de Desenvolvimento</h2>

                <ol>
                    <li><strong>Clonar o Repositório:</strong></li>
                    <li><strong>Configurar o Backend:</strong>
                        <ul>
                            <li>Navegue até o diretório <code>backend</code> do projeto.</li>
                            <li>Importe o diretório como projeto Maven com o <a href="https://spring.io/tools">SpringTools</a>.</li>
                        </ul>
                    </li>
                    <li><strong>Configurar o Frontend:</strong>
                        <ul>
                            <li>Navegue até o diretório <code>frontend</code> do projeto.</li>
                            <li>Execute o comando <code>yarn install</code> para instalar as dependências do React.</li>
                            <li>Execute o comando <code>yarn start</code> para iniciar o servidor de desenvolvimento do React.</li>
                        </ul>
                    </li>
                    <li><strong>Acessar o Aplicativo:</strong>
                        <ul>
                            <li>O aplicativo estará disponível em <code>http://localhost:3000</code> por padrão.</li>
                        </ul>
                    </li>
                </ol>

                <h2>Testes (Backend)</h2>
                <ul>
                    <li>O backend deste projeto inclui testes para os serviços <code>ScoreService</code> e <code>MovieService</code> utilizando JUnit 5 e Mockito.</li>
                    <li><strong>ScoreServiceTest:</strong> Testes para as funcionalidades do <code>ScoreService</code>.</li>
                    <li><strong>MovieServiceTest:</strong> Testes para as funcionalidades do <code>MovieService</code>.</li>
                </ul>

                <h2>API Endpoints (Backend)</h2>
                <ul>
                    <li><strong>GET /movies:</strong> Retorna todos os filmes.</li>
                    <li><strong>GET /movies?size=12&page=0:</strong> Retorna uma lista de filmes de tamanho 12 começando no índice 0.</li>
                    <li><strong>GET /movies/ID</strong> Retorna detalhes de um filme específico.</li>
                    <li><strong>POST /scores:</strong> Registra uma nova avaliação para um filme.</li>
                </ul>

                <h2>Contribuição</h2>
                <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>

                <h2>Licença</h2>
                <p>Este projeto é licenciado sob a Licença <a href="https://opensource.org/licenses/MIT">MIT</a>.</p>


            <div className="col" data-bs-theme="dark">
                    <h5>Desenvolvido por:</h5>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://media.licdn.com/dms/image/D4D03AQEnc4IwngkYBw/profile-displayphoto-shrink_200_200/0/1683237888020?e=2147483647&v=beta&t=vNqOVKG7Wl-TVcPLWFyz3oYLf96k1nxf3bFvH6hO91s" className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Heitor Brunini</h5>
                                    <p className="card-text">Desenvolvedor de software, estudante de Engenharia da Computação no Instituto Federal da Paraíba.</p>
                                    <p className="card-text"><small className="text-body-secondary"><a href='https://github.com/heitorbrunini'>Github.com</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
        </div>
    );
}

export default About;