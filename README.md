# Покемоны

В настоящий момент реализован рендер сетов. Компонент рендера набора карт реализован и при дальнейшей разработке
должен получать в пропсах состояние сета, содержащее его код и передавать в метод fetch(). 
В настоящий момент рендер сетов или набора карт может осуществляться только если вручную прописать код набора карт в его fetch() и поменять передаваемый компонет в ReactDOM.render с <App/> на <Card/>. На данный момент трудность заключается в передачи состояний в пропсы. 