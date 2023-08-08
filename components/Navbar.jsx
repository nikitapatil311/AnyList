// components/Footer.js
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <h2> Any List</h2>
      <br />

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
        <br />
      </div>
      <hr />

      <hr />

      <div className="bg-gray-200 border-t border-gray-900 py-4 px-4 md:px-0 text-sm text-black text-center">
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

          background: linear-gradient(#ff9f45, #ffbc80);
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
          color: #322e2e;
          font-size: 0.8rem;
        }
        @media (max-width: 300px) {
          .footer {
            height: 1005px;
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
