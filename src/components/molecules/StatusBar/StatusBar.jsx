import './StatusBar.css';

export default function StatusBar({ time = '09:41' }) {
  return (
    <div className="status-bar">
      <span className="status-bar__time">{time}</span>

      <div className="status-bar__icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>

        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 4.2a10 10 0 0 1 14 0" />
          <path d="M3.5 6.8a6.5 6.5 0 0 1 9 0" />
          <path d="M6 9.3a3 3 0 0 1 4 0" />
        </svg>

        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" fill="none" stroke="#fff" opacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="2.2" fill="#fff" />
          <path d="M24.5 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2z" fill="#fff" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}