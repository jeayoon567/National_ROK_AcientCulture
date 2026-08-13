import React, { useState, useEffect } from 'react';
import {
  FileText, ShieldCheck, LogOut, Edit3, Save, XCircle,
  CheckCircle, Shield, ShieldAlert, AlertTriangle, Eye, RefreshCw, FileCheck
} from 'lucide-react';
import ArtifactSurveillance from './ArtifactSurveillance';
import Toast from './Toast';

export default function IntranetDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('press-release');
  const [currentTime, setCurrentTime] = useState('');
  
  // Document state (Image 1 replica)
  const [isEditing, setIsEditing] = useState(false);
  const [docTitle, setDocTitle] = useState(
    "[긴급] 국립고대문화박물관 특별전 개막 당일 보물 '언약의 토기' 외부 침입 도난 사건 발생의 건"
  );
  const [docBody, setDocBody] = useState(
    `'국립고대문화박물관에서 알려드립니다.

오늘(8월 20일 목요일) 특별전 개막 및 유물 공개 행사 과정에서, 박물관 제1기획전시실에 보관 중이던 보물 '언약의 토기'가 정체불명의 외부 침입자에 의해 도난당했음을 확인했습니다.

현장 확인 결과 전시함은 파손되어 있었으며 복제품의 파편만 남겨진 상태였습니다.

박물관 측은 사건 확인 즉시 관할 경찰서에 신고 조치하였으며, 보안 시스템의 외부 침입 흔적을 바탕으로 수사에 적극 협조하고 있습니다.

박물관을 아껴주시는 국민 여러분께 심려를 끼쳐드려 깊이 사과드리며, 경찰 수사를 통해 유물이 조속히 회수될 수 있도록 최선을 다하겠습니다.`
  );

  const [lastSaved, setLastSaved] = useState('2026-08-19 22:43:05');
  const [isReserved, setIsReserved] = useState(true);
  const [progressVal, setProgressVal] = useState(95);
  const [toastMessage, setToastMessage] = useState('');
  const [showOriginalScan, setShowOriginalScan] = useState(false);

  // Live Korean government system time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
      showToast('문서 편집 모드가 활성화되었습니다.');
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    const now = new Date();
    const formatted = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');
    setLastSaved(formatted);
    showToast('보도자료 초안이 박물관 전산망 서버에 정상 저장되었습니다.');
  };

  const handleToggleReservation = () => {
    if (isReserved) {
      setIsReserved(false);
      setProgressVal(0);
      showToast('보도자료 예약 발송이 취소되었습니다.');
    } else {
      setIsReserved(true);
      setProgressVal(95);
      showToast('2026-08-20(목) 개막식 이후 자동 발송 예약이 설정되었습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--gov-bg)' }}>
      <Toast message={toastMessage} />

      {/* Top Security Status Line */}
      <div className="gov-top-bar">
        <div className="container gov-top-bar-content">
          <div className="gov-top-bar-left">
            <span className="security-tag">보안 1급망</span>
            <span>국립고대문화박물관 행정망 (접속 세션: GPKI-SEC-2026-0819)</span>
          </div>
          <div className="gov-top-bar-right">
            <span>서버 표준 시각: {currentTime}</span>
            <span style={{ color: '#86efac', fontWeight: '700' }}>● 전산 세션 정상</span>
          </div>
        </div>
      </div>

      {/* Government Institution Header */}
      <header className="gov-header">
        <div className="container gov-header-inner">
          <div className="gov-brand">
            <img src="/museum_logo.png" alt="국립고대문화박물관" className="gov-logo-img" />
            <div className="gov-title-group">
              <div className="gov-title-main">
                국립고대문화박물관
                <span style={{ fontSize: '14px', color: 'var(--gov-blue-accent)', fontWeight: '600' }}>
                  | 내부 전산망 통합시스템
                </span>
              </div>
              <div className="gov-title-sub">NATIONAL MUSEUM OF ANCIENT CULTURE INTRANET</div>
            </div>
          </div>

          <div className="user-info-box">
            <div style={{ textAlign: 'right' }}>
              <div>
                <span className="user-name">강은아</span>
                <span style={{ fontSize: '12px', color: 'var(--gov-text-sub)', marginLeft: '4px' }}>관장</span>
              </div>
              <div className="user-role">국립고대문화박물관 행정실 (eunah_kang)</div>
            </div>
            <button className="btn btn-sm btn-danger" onClick={onLogout} title="안전 로그아웃">
              <LogOut size={14} />
              로그아웃
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="gov-nav">
          <div className="container">
            <ul className="gov-nav-list">
              <li
                className={`gov-nav-item ${activeTab === 'press-release' ? 'active' : ''}`}
                onClick={() => setActiveTab('press-release')}
              >
                <FileText size={16} />
                보도자료 작성 및 예약 시스템
              </li>
              <li
                className={`gov-nav-item ${activeTab === 'surveillance' ? 'active' : ''}`}
                onClick={() => setActiveTab('surveillance')}
              >
                <ShieldAlert size={16} color={activeTab === 'surveillance' ? '#dc2626' : '#fca5a5'} />
                유물 관제 및 보안 현황
                <span className="badge badge-red" style={{ marginLeft: '4px', fontSize: '10px' }}>경보</span>
              </li>
              <li className="gov-nav-item" onClick={() => showToast('현재 진행 중인 전자결재 문서가 2건 있습니다.')}>
                <FileCheck size={16} />
                행정 결재함 (2)
              </li>
              <li className="gov-nav-item" onClick={() => showToast('접속 IP: 10.124.89.201 (강은아 관장 전용 단말기)')}>
                <ShieldCheck size={16} />
                보안 접속 로그
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container main-dashboard">
        {activeTab === 'surveillance' ? (
          <ArtifactSurveillance />
        ) : (
          <div>
            {/* Dashboard Sub-Header */}
            <div className="dashboard-title-bar">
              <div className="dashboard-page-title">
                <FileText size={20} color="var(--gov-blue)" />
                [박물관 내부 전산망 - 보도자료 작성 및 예약 시스템]
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-sm" onClick={() => setShowOriginalScan(!showOriginalScan)}>
                  <Eye size={14} />
                  {showOriginalScan ? '스캔 원본 닫기' : '원본 스캔 문서 보기'}
                </button>
                <span className="badge badge-blue" style={{ alignSelf: 'center' }}>
                  예약 시스템 v2.4 (GPKI 연동)
                </span>
              </div>
            </div>

            {/* Original Scan Reference Toggle View */}
            {showOriginalScan && (
              <div className="original-scan-toggle" style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--gov-navy)' }}>
                  📄 전산 수신 원본 공문서 스캔 (첨부파일)
                </div>
                <img
                  src="/document_ref.jpg"
                  alt="전산 수신 원본 문서"
                  style={{ maxWidth: '100%', borderRadius: '4px', border: '1px solid var(--gov-border-dark)' }}
                />
              </div>
            )}

            {/* Document & Metadata Grid (Exact layout of Image 1) */}
            <div className="document-system-grid">
              {/* Left Document Paper (Image 1 Main Area) */}
              <div className="doc-outer-card">
                <div className="doc-system-header-title">
                  [박물관 내부 전산망 - 보도자료 작성 및 예약 시스템]
                </div>

                <div className="doc-inner-border">
                  {/* Document Title */}
                  {isEditing ? (
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--gov-blue-accent)' }}>제목 수정:</label>
                      <input
                        type="text"
                        className="doc-edit-input"
                        value={docTitle}
                        onChange={(e) => setDocTitle(e.target.value)}
                      />
                    </div>
                  ) : (
                    <h2 className="doc-main-heading">{docTitle}</h2>
                  )}

                  {/* Metadata Header Table */}
                  <table className="doc-meta-table">
                    <tbody>
                      <tr>
                        <td className="doc-meta-label">■ 발 신 :</td>
                        <td>국립고대문화박물관 행정실 (관장 강은아)</td>
                      </tr>
                      <tr>
                        <td className="doc-meta-label">■ 수 신 :</td>
                        <td>각 언론사 문화부 및 사회부 담당 기자</td>
                      </tr>
                      <tr>
                        <td className="doc-meta-label">■ 배 포 일 :</td>
                        <td>2026년 8월 20일 (목요일)</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Document Body */}
                  {isEditing ? (
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--gov-blue-accent)' }}>본문 내용 수정:</label>
                      <textarea
                        className="doc-edit-textarea"
                        value={docBody}
                        onChange={(e) => setDocBody(e.target.value)}
                      />
                    </div>
                  ) : (
                    <div className="doc-content-body">{docBody}</div>
                  )}

                  {/* Document Footer Signature & Date */}
                  <div className="doc-footer-date">2026년 8월 20일</div>
                  <div className="doc-footer-sign">
                    국립고대문화박물관장 강 은 아
                    <span className="official-seal-stamp">
                      국립고대<br />문화박물<br />관장의인
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side Metadata Panel (Image 1 Right Side Box) */}
              <div className="metadata-panel-card">
                <div className="metadata-panel-title">
                  <span>전산 속성 및 예약 정보</span>
                  <span className="badge badge-amber">보도자료 초안</span>
                </div>

                <div className="meta-info-list">
                  <div className="meta-info-item">
                    <span className="meta-info-key">- 파일명:</span>
                    <span className="meta-info-val">[보도자료]_특별전_개막_당일_도난_사건_발생</span>
                  </div>

                  <div className="meta-info-item">
                    <span className="meta-info-key">- 작성자:</span>
                    <span className="meta-info-val">관장 강은아 (eunah_kang)</span>
                  </div>

                  <div className="meta-info-item">
                    <span className="meta-info-key">- 최초 생성:</span>
                    <span className="meta-info-val">2026-08-19 22:38:12</span>
                  </div>

                  <div className="meta-info-item">
                    <span className="meta-info-key">- 최종 저장:</span>
                    <span className="meta-info-val" style={{ color: 'var(--gov-blue-accent)', fontWeight: '700' }}>
                      {lastSaved}
                    </span>
                  </div>

                  <div className="meta-info-item" style={{ marginTop: '6px' }}>
                    <span className="meta-info-key">- 상태:</span>
                    {isReserved ? (
                      <div className="meta-status-highlight">
                        [예약 발송] 2026-08-20(목) 개막식 이후 자동 발송 설정됨.
                      </div>
                    ) : (
                      <div className="meta-status-canceled">
                        [예약 취소] 2026-08-20(목) 자동 발송 설정 취소됨.
                      </div>
                    )}
                  </div>
                </div>

                {/* Interactive Action Buttons (Matching Image 1: 수정 / 저장 / 예약취소) */}
                <div className="action-buttons-group">
                  <button
                    className={`btn ${isEditing ? 'btn-primary' : ''}`}
                    onClick={handleToggleEdit}
                    title="문서 수정"
                  >
                    <Edit3 size={14} />
                    {isEditing ? '완료' : '수정'}
                  </button>

                  <button className="btn btn-primary" onClick={handleSave} title="서버 저장">
                    <Save size={14} />
                    저장
                  </button>

                  <button
                    className={`btn ${isReserved ? 'btn-danger' : 'btn-success'}`}
                    onClick={handleToggleReservation}
                    title={isReserved ? '발송 예약 취소' : '발송 예약 재개'}
                  >
                    {isReserved ? (
                      <>
                        <XCircle size={14} />
                        예약취소
                      </>
                    ) : (
                      <>
                        <RefreshCw size={14} />
                        예약재개
                      </>
                    )}
                  </button>
                </div>

                {/* Progress Bar (Image 1 95% progress indicator) */}
                <div className="progress-panel-box">
                  <div className="progress-panel-label">
                    <span>시스템 발송 준비율</span>
                    <span style={{ color: isReserved ? 'var(--gov-blue-accent)' : '#dc2626' }}>
                      {progressVal}%
                    </span>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill-blue"
                      style={{
                        width: `${progressVal}%`,
                        backgroundColor: isReserved ? 'var(--gov-blue-accent)' : '#dc2626'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="gov-footer">
        <div className="container gov-footer-content">
          <div>
            <div style={{ fontWeight: '700', color: '#f8fafc', marginBottom: '4px' }}>
              국립고대문화박물관 행정 전산망 (NATIONAL MUSEUM OF ANCIENT CULTURE)
            </div>
            <div>[03045] 서울특별시 종로구 고대박물관길 100 국립고대문화박물관 행정실 | 전산 보안 콜센터: 02-111</div>
            <div style={{ marginTop: '4px', fontSize: '11px', color: '#64748b' }}>
              Copyright ⓒ 2026 National Museum of Ancient Culture. All Rights Reserved. (정부통합전산망 1급 보안 구역)
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="security-tag" style={{ backgroundColor: '#1e3a8a' }}>GPKI 인증 완료</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
