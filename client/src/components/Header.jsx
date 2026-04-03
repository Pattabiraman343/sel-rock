import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Seller Rocket</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}