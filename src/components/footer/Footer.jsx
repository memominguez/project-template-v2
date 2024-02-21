import { NavLink } from "react-router-dom";
import logoImg from "../../assets/aritmetiquis.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillPlaySquare } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
  
  return (
    <div className={styles.container}>
      <div className={styles.leftbox}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="logo image" />
          <h1>LOGO</h1>
        </div>

        <div className={styles.copyright}>
          <p>Copyright 2024 &#169; All Right Reserved</p>
          <p>Design by Memominguez</p>
        </div>

        <div className={styles.leftIcons}>
          <div className={styles.iconBox}>
            <FaFacebookSquare className={styles.icons} />
          </div>
          <div className={styles.iconBox}>
            <FaTwitterSquare className={styles.icons} />
          </div>
          <div className={styles.iconBox}>
            <FaInstagramSquare className={styles.icons} />
          </div>
          <div className={styles.iconBox}>
            <AiFillPlaySquare className={styles.icons} />
          </div>
        </div>
      </div>

      <div className={styles.rightbox}>
        <div className={styles.leftColumn}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/testimonial">Testimonial</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.centerColumn}>
          <h3>Services</h3>
          <ul>
            <li>Website Development</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
            <li>PPC & Online Advertising</li>
            <li>Analytics & Data Analysis</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        <div className={styles.rightColumn}>
          <h3>Information</h3>
          <p>
            <FaPhone className={styles.infoIcons} />
            <span>+123-234-1234</span>
          </p>
          <p>
            <FaRegEnvelope className={styles.infoIcons} />
            <span>hello@awesomesite.com</span>
          </p>
          <p>
            <FaMapMarkerAlt className={styles.infoIcons} />
            <span>99 Roving St., Big City, PKU 23456</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
