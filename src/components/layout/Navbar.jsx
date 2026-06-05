'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, quickLinks } from '@/data/siteData';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <span className="logo">⚽</span>
            <span>Immortal Warriors FC</span>
          </Link>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
            <button className="btn btn-soft" onClick={() => setMega(true)} type="button">Other</button>
          </div>
          <button className="menu-btn" onClick={() => setOpen(!open)} type="button">☰</button>
        </div>
      </nav>
      {mega && (
        <div onClick={() => setMega(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,.55)',zIndex:80,display:'grid',placeItems:'center',padding:20}}>
          <div onClick={(e)=>e.stopPropagation()} style={{width:'min(760px,96%)',background:'#fff',borderRadius:28,padding:24,boxShadow:'0 30px 80px rgba(0,0,0,.3)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginBottom:18}}>
              <h2 style={{margin:0}}>Explore Pages</h2>
              <button className="btn btn-primary" onClick={() => setMega(false)} type="button">Close</button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:12}}>
              {quickLinks.map((item)=> <Link key={item.href} href={item.href} onClick={()=>setMega(false)} style={{padding:16,borderRadius:16,background:'#f2f8ef',fontWeight:800,color:'#0b6b3a'}}>{item.label}</Link>)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
