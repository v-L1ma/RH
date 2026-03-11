<h1 align="center" style="font-weight: bold;">FACILITA RH 💻</h1>
<p align="center">
 <a href="#sobre">Sobre</a> • 
 <a href="#funcionalidades">Funcionalidades</a> • 
  <a href="#rotas">Rotas</a>
</p>


<p align="center">
    <img src="https://github.com/user-attachments/assets/a8b7cf17-5ad2-4e0e-8c01-e47c509354de" alt="Image" width="400px">
    <img src="https://github.com/user-attachments/assets/9d634761-221c-4bf0-bc78-825ff83fe6b7" alt="Image Example" width="400px">
    <img src="https://github.com/user-attachments/assets/270720a9-4d65-4397-8f96-0fa88c2995c4" alt="Image Example" width="400px">
    <img src="https://github.com/user-attachments/assets/9d21ab49-e03d-403f-a3cb-b335d6a7437b" alt="Image Example" width="400px">
</p>

<h2 id="sobre">📌 Sobre</h2>

O facilita RH, é um sistema voltado para solucionar problemas no processo de recrutamento e seleção, integrando um portal de vagas para quem busca uma oportunidade com um painel para os recrutadores poderem criar vagas, gerenciar as vagas criadas, ver informações dos candidatos, analisar métricas relacionadas ao recrutamento.

<a href="https://facilita-rh.netlify.app">[Link para o projeto]</a> 

<h2 id="funcionalidades">🚀 Funcionalidades</h2>

Aqui você irá encontrar as principais funcionalidades do sistema.

<ul>
 <li>Criar uma nova vaga</li>
 <li>Exibir todas as vagas já criadas.</li>
 <li>Ver quem se candidatou a essa vaga.</li>
 <li>Editar informações de uma vaga já criada.</li>
 <li>Excluir uma vaga já criada.</li>
 <li>Gerar métricas para avaliar o desempenho do recrutamento.</li
 <li>Disponibilizar vagas criadas em um portal para os candidatos.</li>
 <li>Exibir todas as informações de uma vaga especifica.</li>
 <li>Formulário para candidatar-se a uma vaga.</li>
</ul>

<h2 id="rotas">📍 Rotas da aplicação</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| Rota                                        | Descrição                                                |
|--------------------------------------------|------------------------------------------------------------|
| <kbd>/</kbd>                               | Página inicial                                            |
| <kbd>/login</kbd>                          | Página de login                                          |
| <kbd>/cadastro</kbd>                       | Página de cadastro                                       |
| <kbd>/portal-vagas</kbd>                   | Portal de vagas                                           |
| <kbd>/portal-vagas/vaga/:id</kbd>          | Página de detalhes da vaga                              |
| <kbd>/painel</kbd>                         | Painel (rota protegida)                                   |
| <kbd>/painel/</kbd>                        | Página de estatísticas                                  |
| <kbd>/painel/gestao-vagas</kbd>            | Página de gestão de vagas                              |
| <kbd>/painel/gestao-vagas/nova-vaga</kbd>  | Página para criar nova vaga                            |
| <kbd>/painel/gestao-vagas/vaga/:id</kbd>   | Gestão de candidatos para uma vaga específica          |
| <kbd>/painel/gestao-vagas/vaga/:id/editar</kbd> | Página para editar a vaga                          |
| <kbd>/painel/banco-de-talentos</kbd>       | Página do banco de talentos                            |
| <kbd>/*</kbd>                              | Página de erro 404 (Não encontrado)                   |

