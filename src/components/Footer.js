import footerImage from "../assets/logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={footerImage} alt=""/>
      </div>
      <div>
        <p>Copyright Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;