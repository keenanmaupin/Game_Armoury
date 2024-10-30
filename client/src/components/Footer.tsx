const Footer = () => {

  return (
<div className="footer">
<span className="footer-text">2024</span>
<span className="footer-logo">
  {/* <!-- Multi-colored "Armoury" --> */}
  {"Armoury".split("").map((char, index) => (
    <span key={index} className={`colored-letter letter-${index}`}>
      {char}
    </span>
  ))}
</span>
</div>
  );
};

export default Footer;
