/* eslint-disable no-unused-vars */
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import styles from "./getintouch.module.css";

function GetInTouch() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.overtitle}>CONTACT</p>
        <h1>Get In Touch with Us</h1>
        <p className={styles.paragraph}>
          Vivamus molestie, eros a consequat blandit, ante augue porttitor ex,
          vel sagittis tellus eros vel augue. Nulla convallis ligula ac odio
          pulvinar interdum. Nulla congue lorem in libero rhoncus condimentum
          amatug lorem ipsum.
        </p>

        <div className={styles.contactMedia}>
          <div className={styles.infoBox}>
            <FaPhone className={styles.icon} />
            <div className={styles.infoText}>
              <h4>Phone Number</h4>
              <p>+123-234-1234</p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <CgWebsite className={styles.icon} />
            <div className={styles.infoText}>
              <h4>Website</h4>
              <p>www.awesomesite.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaRegEnvelope className={styles.icon} />
            <div className={styles.infoText}>
              <h4>Email Address</h4>
              <p>hello@awesomesite.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <div className={styles.infoText}>
              <h4>Office Address</h4>
              <p>99 Roving St., Big City, PKU 23456</p>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <FaFacebookSquare className={styles.iconSocial} />
          <FaSquare className={styles.iconBack} />
          <FaTwitterSquare className={styles.iconSocial} />
          <FaSquare className={styles.iconBack} />
          <FaInstagramSquare className={styles.iconSocial} />
          <FaSquare className={styles.iconBack} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.formContainer}>
        <form>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Your Email"/>
          <input type="text" placeholder="Subject"/>
          <textarea placeholder="Your Message"/>
          <button type="submit" className={styles.submitButton}>
            <FaSquare className={styles.submitSquare}/>
            <span>SUBMIT MESSAGE</span>
        </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
