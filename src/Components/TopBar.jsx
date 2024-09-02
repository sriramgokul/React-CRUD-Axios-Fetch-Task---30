import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-info">
      <Container className='d-flex justify-content-center'>
        <div >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/home/users")}  className="fs-3">HOME</Nav.Link>
            <Nav.Link onClick={()=>navigate("/")}  className="fs-3">DASHBOARD</Nav.Link>
            <Nav.Link onClick={()=>navigate("/add/users")}  className="fs-3">ADD USERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopBar;