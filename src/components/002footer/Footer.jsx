import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <ul className="links-container">
        Links
        <li>Facebook</li>
        <li>X</li>
        <li>Discus</li>
        <li>...</li>
      </ul>

      <span className="copyright">
        &copy; 2023, All rights reserved. This fanmade website is an independent
        creation and is not affiliated with any company related to Pokemon.
      </span>
    </footer>
  );
};

export default Footer;
