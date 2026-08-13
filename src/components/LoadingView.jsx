import React, { useEffect, useState } from 'react';
import { ShieldAlert, ShieldCheck, Lock } from 'lucide-react';

export default function LoadingView({ onComplete }) {
  const [progress, setProgress] = useState(15);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'GPKI 행정전자서명 및 암호화 인증 확인 중...',
    '국가통합행정전산망 보안 1급 세션 연결 중...',
    '사용자 접근 권한 확인: 관장 강은아 (국립고대문화박물관)',
    '보도자료 예약 발송 시스템 데이터 동기화 완료'
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(40);
      setStepIndex(1);
    }, 400);

    const timer2 = setTimeout(() => {
      setProgress(75);
      setStepIndex(2);
    }, 900);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStepIndex(3);
    }, 1400);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="loading-overlay">
      <div className="loading-card">
        <div className="loading-spinner-ring"></div>
        <div className="loading-title">국립고대문화박물관 행정 전산망</div>
        <div className="loading-step-text">{steps[stepIndex]}</div>

        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div style={{ marginTop: '16px', fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <Lock size={12} color="#2563eb" />
          <span>보안 프로토콜 TLS 1.3 | GPKI RSA-4096</span>
        </div>
      </div>
    </div>
  );
}
