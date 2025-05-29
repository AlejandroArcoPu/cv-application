import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer className="ecv-footer">
      <p className="ecv-footer-para">
        App by{" "}
        <a
          className="ecv-footer-links"
          href="https://www.linkedin.com/in/alejandro-arco-10a081227/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Alejandro Arco
        </a>{" "}
        // Icons by{" "}
        <a
          className="ecv-footer-links"
          href="https://lucide.dev/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Lucide
        </a>{" "}
        // Logo by{" "}
        <a
          className="ecv-footer-links"
          href="https://shipfa.st/tools/logo-fast"
          target="_blank"
          rel="noreferrer noopener"
        >
          LogoFast
        </a>
      </p>
    </footer>
  );
}
