import React from 'react';
import '../styles/designv2-fonts.css';
import '../styles/designv2-overrides.css';
import DivMxAuto from '../newdesign/src/imports/DivMxAuto';

export default function DesignShowcaseV2() {
  React.useEffect(() => {
    document.title = 'Page For Design V2 — 05.ru Tech Tower';
  }, []);

  React.useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyTouch = document.body.style.touchAction;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
    document.documentElement.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.touchAction = prevBodyTouch;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  return (
    <div className="designv2 min-h-screen bg-[#0f1b20] text-white overflow-auto">
      <DivMxAuto />
    </div>
  );
}
