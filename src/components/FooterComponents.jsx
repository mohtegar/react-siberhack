import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo-SH.png";

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <div className="d-flex align-items-center">
              <img src={Logo} alt="logo"  className="me-2" width="40" height="40" />
          <h3 className="fw-bold">SiberHack.</h3>
          </div>
          <p className="desc">SiberHack adalah Platform Belajar Hacking & Progammer di Indonesia</p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <p className="m-0">+62 895-3342-99567</p>
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">whoamitegar@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe Untuk Info Lebih Menarik</h5>
          <div className="subscribe">
            <input type="text" placeholder="subscribe...." />
            <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright { new Date().getFullYear()} By <span className="fw-bold text-danger">SiberHack</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponents