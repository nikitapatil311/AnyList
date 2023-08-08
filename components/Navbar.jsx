// components/Footer.js
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/nikita_.s._patil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nikita-s-patil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/nikitapatil311"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="copyright">
        © Any List - A grocery Shop {new Date().getFullYear()}. All rights
        reserved.
      </div>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          /* background-color: #dcb7a2; */
          background: linear-gradient(0.25turn, #f79453, #cf935a, #ffbc80);
          height: 300px;
        }

        .social-icons {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .social-icons a {
          margin: 0 0.5rem;
          color: #292626;
          font-size: 2.5rem;
        }

        .copyright {
          color: #888;
          font-size: 0.8rem;
        }
        @media (max-width: 400px) {
          .footer {
            height: 1000px;
          }
          .social-icons {
            flex-direction: column;
          }

          .social-icons a {
            margin: 0.5rem;
          }

          .copyright {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
