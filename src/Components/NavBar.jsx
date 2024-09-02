function NavBar(){
    return(
        <div>
    <nav className="navbar navbar-expand-lg bg-primary">
     <div className="container-fluid">
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" d-flex justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active" aria-current="page" href="#">HOME</a>
        <a className="nav-link" href="#">DASHBOARD</a>
        <a className="nav-link" href="#">ADD</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;