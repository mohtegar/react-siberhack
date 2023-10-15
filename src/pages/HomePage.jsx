import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/bnm.png";

import {  kelasTerbaru, dataSwiper  } from "../data/index";
import Imagelayanan from "../assets/img/layanan/layanan.svg"
import Imagecoding from "../assets/img/layanan/coding-website.svg"
import Imagekoumitas from "../assets/img/layanan/komunitas.svg"
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import FaqComponents from "../components/FaqComponents";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {
  let navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/62895334299567?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20SiberHack", "_blank");
  };

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5">
              <Col lg="6">
              <h1 className="mb-4 animate__animated animate__backInLeft animate__delay-1s">
                Belajar <span className="text-danger">Hacking</span><br />
                &<span className="text-danger"> Programmer</span> dari nol sampai <span className="text-danger">Profesional</span><br />
                Bersama Kami!
              </h1>
              <p className="mb-4 animate__animated animate__backInLeft animate__delay-1s">SiberHack Community | Mari bergabung dengan kami Sebagai Cybersecurity & Programmer.</p>
              <button className="btn btn-danger btn-md rounded-3 me-2 mb-xs-0 mb-2 animate__animated animate__backInLeft animate__delay-1s" onClick={() => navigate("/kelas")}>Llihat Kelas</button>
              <button className="btn btn-outline-primary btn-md rounded-3 mb-xs-0 mb-2 animate__animated animate__backInLeft animate__delay-1s" onClick={() => navigate("/kelas")}>Lihat Promo</button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="bnm.png" className="animate__animated animate__backInUp"/>
              </Col>
            </Row>
          </Container>
        </header>
        <div className="program w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold">Program & Layanan <span className="text-danger">SiberHack</span></h1>
              <p className="text-center"style={{ fontSize: "14px"}}>Program Layanan Kami adalah yang terbaik untuk kalian semua.</p>
              </Col>
            </Row>
            <Row>
              {/* Elemen 1 dan Elemen 2 */}
              <Col lg="4" md="6" sm="12">
                <img src={Imagelayanan} alt="layanan.svg" className="d-block mx-auto mb-3" width="100" height="100" />
                <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Bangun Karir Hacking & Programming dari nol</h1>
                <p className="text-center" style={{ fontSize: "12px" }}>SiberHack membantu kamu membangun karir Hacking & programming tanpa harus memiliki background IT, melalui pembelajaran interaktif & fleksibel bersama instruktur berpengalaman.</p>
                </Col>
                
                {/* Elemen 3 */}
                <Col lg="4" md="6" sm="12">
                  <img src={Imagecoding} alt="coding-website.svg" className="d-block mx-auto mb-3" width="100" height="100" />
                  <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Jasa Pembuatan Website Perusahaan</h1>
                  <p className="text-center" style={{ fontSize: "12px" }}>SiberHack membantu perusahaan dalam membuat website sistem digital melalui Consultation via WhatsApp kami.</p>
                  </Col>
                  
                  {/* Elemen 3 */}
                   <Col lg="4" md="6" sm="12">
                    <img src={Imagekoumitas} alt="komunitas.svg" className="d-block mx-auto mb-3" width="100" height="100" />
                    <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Komunitas Siber & Programmer</h1>
                    <p className="text-center" style={{ fontSize: "12px" }}>SiberHack memiliki basis komunitas yang aktif yang terhubung dengan komunitas siber dari seluruh Indonesia. Kamu bisa mulai menghasilkan.</p>
                    </Col>
                    </Row>
            </Container>
            <div className="skill w-100 min-vh-100">
              <Container>
                <Row>
                  <Col>
                  <h1 className="text-center fw-bold">Pilih Berdasarkan <span className="text-danger">Tingkatan SKillmu</span></h1>
                  <p className="text-center" style={{ fontSize: "14px"}}>kami memiliki 3 metode pembelajar yang bisa bikin kamu paham tentang Hacking & Programmer</p>
                  </Col>
                </Row>
                <Row>
                <Col lg="6" md="6" sm="12 bd" className="card-container">
                  <div className="card">
                    <h3 className="card-number rounded-circle">1</h3>
                    <div className="card-content">
                      <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Beginner</h1>
                      <p className="text-center" style={{ fontSize: "13px" }}>Belajar dari nol tanpa Background IT. Direkomendasikan untuk mereka yang baru mulai belajar Hacking & Programmer</p>
                      <button className="btn btn-danger btn-md rounded-3 me-2 mb-xs-0 mb-2" onClick={handleWhatsAppClick}>Tanya SiberAdmin</button>
                      </div>
                    </div>
                  </Col>
                <Col lg="6" md="6" sm="6 bd" className="card-container">
                  <div className="card">
                    <h3 className="card-number rounded-circle">2</h3>
                    <div className="card-content">
                      <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Intermediate</h1>
                      <p className="text-center" style={{ fontSize: "13px" }}>Direkomendasikan untuk mereka yang telah memiliki pemahaman dasar Hacking & Programmer dan telah mengikuti kelas Beginner.</p>
                      <button className="btn btn-danger btn-md rounded-3 me-2 mb-xs-0 mb-2" onClick={handleWhatsAppClick}>Tanya SiberAdmin</button>
                      </div>
                     </div>
                   </Col>
                <Col lg="6" md="6" sm="6 bd" className="card-container">
                  <div className="card">
                    <h3 className="card-number rounded-circle">3</h3>
                    <div className="card-content">
                      <h1 className="text-center fw-bold" style={{ fontSize: "20px" }}>Advance</h1>
                      <p className="text-center" style={{ fontSize: "13px" }}>Untuk mereka yang telah paham dasar Hacking & Programmer di beberapa topik tertentu dan telah mengikuti kelas Beginner & Intermediate.</p>
                      <button className="btn btn-danger btn-md rounded-3 me-2 mb-xs-0 mb-2" onClick={handleWhatsAppClick}>Tanya SiberAdmin</button>
                      </div>
                      </div>
                      </Col>
                </Row>
              </Container>
              <div className="kelas w-100 min-vh-100">
                <Container>
                  <Row>
                    <Col>
                    <h1 className="text-center fw-bold">Kelas SiberHack <span className="text-danger">Banyak Diminati</span></h1>
                    <p className="text-center">Live Class</p>
                    </Col>
                  </Row>
                  <Row>
                    {kelasTerbaru.map((kelas) => {
                      return (
                        <Col key={kelas.id} className="shadow-sm rounded" data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1000"
                        data-aos-delay={kelas.delay}>
                        <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                        <div className="star mb-2 px-3" >
                          <i className={kelas.star1}></i>
                          <i className={kelas.star2}></i>
                          <i className={kelas.star3}></i>
                          <i className={kelas.star4}></i>
                          <i className={kelas.star5}></i>
                        </div>
                        <h5 className="mb-5 px-3">{kelas.title}</h5>
                        <div className="ket d-flex justify-content-between align-item-center px-3 pb-3">
                          <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                          <button className="btn btn-danger rounded-4" >{kelas.buy}</button>
                        </div>
                      </Col>       
                      );
                    })}             
                  </Row>
                  <Row>
                    <Col className="text-center">
                    <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1000" onClick={() => navigate("/kelas")}>Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-1"></i></button>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="testimonial py-5">
                <Container>
                  <Row>
                  <Col>
                     <h1 className="text-center fw-bold">Testimonial <span className="text-danger">SiberHack</span></h1>
                  </Col>
                  </Row>
                  <Row>
                  <Swiper
         slidesPerView={1}
         spaceBetween={10}
         pagination={{
         clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {dataSwiper.map((data) => {
        return (
        <SwiperSlide key={data.id} className="shadow-sm">
          <p className="desc">{data.desc}</p>
          <div className="people">
          <img src={data.image} alt="" />
          <h5 className="mb-1">{data.name}</h5>
          <p className="m-0 fw-bold">{data.skill}</p>
          <p>{data.people}</p>
           </div>
           </SwiperSlide>
           );
            })}
            </Swiper>
                  </Row>
                </Container>
              </div>
            </div>
        </div>

        {/* Section FAQ */}
        <FaqComponents />
        {/* Section FAQ */}
    </div>
  );
};

export default HomePage;