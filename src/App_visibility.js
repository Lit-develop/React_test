// Bottom Menu
function BottomMenu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
  src="https://cdn.dribbble.com/userupload/23831354/file/original-0df6ac50ca127e53a44223e3886e7fa5.jpg?resize=1600x1200"
  width={68}
  height={50}
  style={{marginTop:'20px'}}
/>
      ДикиеЯгоды </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'flex-end'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Отзывы
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Доставка
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Удалить WB
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

function App2() {
  return (
    <div className="App2">
      <BottomMenu/>
      {/*
      <div className="container text-center" style={{marginTop:'20px'}}>
        <button type="button" className="btn btn-primary" style={{marginRight:'10px'}}>
          Показать еще
        </button> 
      </div>
      */}
    </div>
  );
}

export default App2;
