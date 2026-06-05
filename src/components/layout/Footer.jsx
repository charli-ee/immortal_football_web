import Link from 'next/link';

export default function Footer(){
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div><h3>Football Club</h3><p>Your destination for football updates, match highlights, team stories and exclusive club news.</p></div>
        <div><h3>Captain’s Desk</h3><p>Every match is a test of passion, unity and spirit. Together we are Immortal Warriors.</p></div>
        <div><h3>Connect With Us</h3><p>Follow the journey and support the club.</p><div className="socials"><a>f</a><a>x</a><a>ig</a><a>▶</a></div></div>
      </div>
      <div style={{textAlign:'center',marginTop:30}}><Link className="btn btn-primary" href="/contact">Contact Me</Link></div>
      <div className="copyright">“Football is not just a game — it’s a passion that unites hearts.”<br/>© 2026 Immortal Warriors FC. All rights reserved.</div>
    </div>
  </footer>
}
