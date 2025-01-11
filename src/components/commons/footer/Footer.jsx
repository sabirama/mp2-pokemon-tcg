const Footer = () => {
  return (
    <footer className="footer">
      <ul className="external-links-container">
        <h4>External Links</h4>
        <li>
          <a href="https://www.pokemon.com/us/pokemon-news" className="external-link">
            Latest Pokemon News
          </a>
        </li>
        <li>
          <a href="https://disqus.com/" className="external-link">
            Discussions
          </a>
        </li>
        <li>
          <a href="https://www.gamenerdz.com/pokemon" className="external-link">
            Buy Latest Sets
          </a>
        </li>
      </ul>

      <span className="copyright">
        &copy; 2023, All rights reserved. This website is not affiliated with any company related to Pokemon.
      </span>
    </footer>
  );
};

export default Footer;
