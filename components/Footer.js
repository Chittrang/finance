export default function Footer() {
    return (
        <footer className="footer">
            <div className="socialIcons">
                <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z" />
                    </svg>
                </a>
                <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.1.9A4.9 4.9 0 0 0 22.4.4a9.8 9.8 0 0 1-3.1 1.2A4.9 4.9 0 0 0 11 7.9a13.9 13.9 0 0 1-10-5.2 4.9 4.9 0 0 0 1.5 6.6A4.9 4.9 0 0 1 2 8v.1a4.9 4.9 0 0 0 4 4.8 4.9 4.9 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4 9.8 9.8 0 0 1-6 2.1A9.7 9.7 0 0 1 1 19a13.9 13.9 0 0 0 7.5 2.2c9 0 13.9-7.5 13.9-14v-.6A9.9 9.9 0 0 0 23 3z" />
                    </svg>
                </a>
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm5.5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
                    </svg>
                </a>
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 4h4v12H4V7zm6 0h3.5v1.5h.1a3.8 3.8 0 0 1 3.4-1.8c3.6 0 4.3 2.4 4.3 5.6V19h-4v-6.2c0-1.5 0-3.4-2-3.4s-2.3 1.6-2.3 3.3V19h-4V7z" />
                    </svg>
                </a>
                <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 15l5.19-3L10 9v6zm12-6.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7z" />
                    </svg>
                </a>
            </div>

            <p>© 2025 The Perfect Capital</p>

            <style jsx>{`
        .footer {
          background-color: #004080;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }
        .socialIcons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .socialIcons a {
          color: white;
          transition: color 0.3s;
        }
        .socialIcons a:hover {
          color: #fcb900;
        }
        .socialIcons svg {
          width: 28px;
          height: 28px;
          fill: currentColor;
        }
      `}</style>
        </footer>
    );
}
