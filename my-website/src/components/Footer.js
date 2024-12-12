// src/components/Footer.js
"use client";
import Link from 'next/link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>Disclaimer:</strong> This website uses video game imagery and content from Final Fantasy XIV, which is © 2024 Square Enix Co., Ltd. All Rights Reserved. This content is used under Square Enix’s guidelines for personal and non-commercial purposes. No copyright infringement is intended.
        </p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Samuel Kim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
