import React from 'react';
import { AlertOctagon, ShieldAlert, Radio, Video, Lock, Info } from 'lucide-react';

export default function ArtifactSurveillance() {
  return (
    <div className="surveillance-container">
      <div className="alarm-alert-banner">
        <AlertOctagon size={24} color="#dc2626" />
        <div>
          <div style={{ fontSize: '15px', fontWeight: '800' }}>[긴급 경보] 제1기획전시실 보안 센서 감지됨</div>
          <div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.9 }}>
            보물 '언약의 토기' 보관 유리 진열함 파손 및 이탈 감지 (2026-08-20 22:35:02) — 관할 경찰서 긴급 수사 접수 완료
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--gov-navy)' }}>
          전시실 및 유물 실시간 관제 현황
        </h3>
        <span className="badge badge-red">비상 모니터링 가동 중</span>
      </div>

      <div className="surveillance-grid">
        <div className="cctv-card">
          <div className="cctv-header">
            <span>CAM-01: 제1기획전시실 (메인 유물관)</span>
            <span style={{ color: '#ef4444', fontWeight: '700' }}>[신호 손실 / 경보]</span>
          </div>
          <div className="cctv-screen breached">
            <ShieldAlert size={42} color="#dc2626" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fca5a5' }}>센서 이탈 / 침입 흔적 감지</div>
            <div style={{ fontSize: '11px', color: '#cbd5e1', marginTop: '4px' }}>유물 명칭: 보물 '언약의 토기'</div>
            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px' }}>상태: 파손 복제품 파편 수거 완료</div>
          </div>
        </div>

        <div className="cctv-card">
          <div className="cctv-header">
            <span>CAM-02: 제2기획전시실 (삼국시대 관)</span>
            <span style={{ color: '#22c55e' }}>[정상 작동]</span>
          </div>
          <div className="cctv-screen">
            <Radio size={36} color="#64748b" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>CCTV 2번 모니터링 중</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>보안 상태 1급 유지</div>
          </div>
        </div>

        <div className="cctv-card">
          <div className="cctv-header">
            <span>CAM-03: 중앙 수장고 출입구</span>
            <span style={{ color: '#22c55e' }}>[정상 작동]</span>
          </div>
          <div className="cctv-screen">
            <Lock size={36} color="#64748b" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>수장고 이중 잠금 시스템 정상</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>출입 통제 상태: 폐쇄 완료</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '24px', padding: '14px', backgroundColor: '#f8fafc', border: '1px solid var(--gov-border)', borderRadius: '4px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--gov-navy)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Info size={16} color="#2563eb" />
          경찰 수사대 조치 상황
        </div>
        <p style={{ fontSize: '12px', color: 'var(--gov-text-sub)', lineHeight: '1.6' }}>
          관할 경찰서 형사과 수사팀 현장 도착 완료. 현장 지문 채취 및 침입 경로 분석 진행 중.<br />
          관장 강은아 행정실 작성 보도자료는 2026년 8월 20일 개막식 직후 언론사에 자동 발송되도록 예약 설정되어 있습니다.
        </p>
      </div>
    </div>
  );
}
