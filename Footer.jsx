import '../styles/Footer.css'

function Footer() {
  return (
    <div id="copyright">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section-logo">
          <img src='./logo-dbesto.png'/>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Kemitraan</a></li>
              <li><a href="#">Berita</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Order</h4>
            <ul>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Hubungi</h4>
            <ul>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="mailto:bd@dbesto.co.id">Email</a></li>
            </ul>
          </div>
          <div className="footer-section address">
            <h4>Address</h4>
            <p>bd@dbesto.co.id</p>
            <p>0896-5371-3149</p>
            <p>
              Jl. M Kahfi 1 Gg. Pembangunan No.55, RT.2/RW.2,<br />
              Cipedak, Kec. Jagakarsa, Kota Jakarta Selatan,<br />
              Daerah Khusus Ibukota Jakarta 12630
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
