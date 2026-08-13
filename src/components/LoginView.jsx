import React, { useState } from 'react';
import { ShieldCheck, Lock, User, AlertTriangle, KeyRound, CheckSquare } from 'lucide-react';

export default function LoginView({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const targetEmail = 'dmsdk0224@korea.kr';
    const targetPassword = 'jesus101#!';

    if (email.trim() === targetEmail && password.trim() === targetPassword) {
      onLoginSuccess();
    } else {
      setErrorMsg('인증 오류: 행정전산망 계정 정보가 일치하지 않습니다. (무단 접속 시 국가정보보안 기본지침에 의해 처벌될 수 있습니다.)');
    }
  };

  const handleFillDemo = () => {
    setEmail('dmsdk0224@korea.kr');
    setPassword('jesus101#!');
    setErrorMsg('');
  };

  return (
    <div className="login-page-wrapper">
      {/* Top Security Status Bar */}
      <div className="login-header-banner">
        <div className="container gov-top-bar-content">
          <div className="gov-top-bar-left">
            <span className="security-tag">보안 1급망</span>
            <span>국가통합행정전산망 (GPKI 서명 인증 통합)</span>
          </div>
          <div className="gov-top-bar-right">
            <span>시스템 상태: 정상 작동 중</span>
            <span>모니터링 IP: 10.124.89.201</span>
          </div>
        </div>
      </div>

      <div className="login-main-container">
        <div className="login-box">
          <div className="login-box-header">
            <img src="/museum_logo.png" alt="국립고대문화박물관" className="login-logo" />
            <h1 className="login-system-name">국립고대문화박물관 행정 전산망</h1>
            <p className="login-system-sub">NATIONAL MUSEUM OF ANCIENT CULTURE INTRANET</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form-body">
            {errorMsg && (
              <div className="login-error-alert">
                <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>{errorMsg}</div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <User size={15} color="#1e4b85" />
                행정망 공직자 ID (이메일)
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="dmsdk0224@korea.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                <Lock size={15} color="#1e4b85" />
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="security-options-box">
              <div className="security-option-item">
                <CheckSquare size={13} color="#16a34a" />
                <span>GPKI 행정전자서명 키보드 보안 프로그램 동작 중</span>
              </div>
              <div className="security-option-item">
                <ShieldCheck size={13} color="#2563eb" />
                <span>접속 IP 보안 모니터링 실시간 연동 완료</span>
              </div>
            </div>

            <button type="submit" className="login-submit-btn">
              <KeyRound size={18} />
              행정 전산망 로그인 (GPKI 인증)
            </button>

            <div style={{ marginTop: '12px', textIndent: '0', textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn-sm"
                onClick={handleFillDemo}
                style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1' }}
              >
                관장 강은아 계정 정보 자동 입력 (dmsdk0224@korea.kr)
              </button>
            </div>
          </form>

          <div className="login-footer-notice">
            ※ 본 시스템은 국립고대문화박물관 내부 관계자 전용 전산 망입니다.<br />
            인가되지 않은 사용자의 접근은 관련 법률에 의하여 엄격히 금지됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
