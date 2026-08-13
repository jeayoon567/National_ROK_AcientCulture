import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        {type === 'error' ? (
          <AlertCircle size={18} color="#fca5a5" />
        ) : (
          <CheckCircle2 size={18} color="#6ee7b7" />
        )}
        <span>{message}</span>
      </div>
    </div>
  );
}
