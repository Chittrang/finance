import { FaRupeeSign, FaUsers, FaClock, FaUniversity } from 'react-icons/fa';
import Link from 'next/link';
import styles from "../styles/HeroBanner.module.css";

export default function Hero() {
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1>Welcome to The <span style={{color:"#5123a6"}}>Perfect Capital</span></h1>
                <p>Your trusted partner for quick and secure loans.</p>
                <a
                    href="https://forms.gle/KUHxQggNT6mrHMGBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.applyNowButton}
                >
                    Apply Now
                </a>
            </div>

            <div className="statsGrid">
                <div className="statCard">
                    <FaRupeeSign className="icon" />
                    <h3>₹500 Cr+ Loans Disbursed</h3>
                    <p>Trusted by thousands</p>
                </div>
                <div className="statCard">
                    <FaUsers className="icon" />
                    <h3>50K+ Happy Customers</h3>
                    <p>Fast & Secure Loans</p>
                </div>
                <div className="statCard">
                    <FaClock className="icon" />
                    <h3>24 Hours Approval</h3>
                    <p>Quick processing</p>
                </div>
                <div className="statCard">
                    <FaUniversity className="icon" />
                    <h3>100+ Partner Banks</h3>
                    <p>Easy & Flexible Loans</p>
                </div>
            </div>

            <style jsx>{`
        .heroSection {
          padding: 4rem 2rem;
          background: #f5f8ff;
          text-align: center;
        }
        .heroContent h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .heroContent p {
          color: #555;
          font-size: 1.1rem;
        }
        .statsGrid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .statCard {
          background: white;
          border-radius: 12px;
          padding: 2rem 1rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }
        .icon {
          font-size: 2.2rem;
          color: #004080;
          margin-bottom: 0.8rem;
        }
        .statCard h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .statCard p {
          color: #666;
        }
      `}</style>
        </section>
    );
}
