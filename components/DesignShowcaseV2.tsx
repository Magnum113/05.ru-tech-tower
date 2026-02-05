import React from 'react';
import '../styles/designv2-fonts.css';
import DivMxAuto from '../newdesign/src/imports/DivMxAuto';

const gradientStyles = `
.designv2 [data-name="button.w-full"] {
  background: radial-gradient(ellipse 800px 300px at 67% 87%,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 11, 0, 0.875) 12.5%,
    rgba(255, 23, 0, 0.75) 25%,
    rgba(255, 46, 0, 0.5) 50%,
    rgba(255, 92, 0, 0) 100%
  ), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%) !important;
}

.designv2 [data-name="button.px-8"] {
  background: radial-gradient(ellipse 400px 200px at 67% 87%,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 11, 0, 0.875) 12.5%,
    rgba(255, 23, 0, 0.75) 25%,
    rgba(255, 46, 0, 0.5) 50%,
    rgba(255, 92, 0, 0) 100%
  ), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%) !important;
}

.designv2 [data-name="div.h-full"] {
  background: radial-gradient(ellipse 350px 150px at 67% 87%,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 11, 0, 0.875) 12.5%,
    rgba(255, 23, 0, 0.75) 25%,
    rgba(255, 46, 0, 0.5) 50%,
    rgba(255, 92, 0, 0) 100%
  ), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%) !important;
}
`;

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
      <style>{gradientStyles}</style>
      <DivMxAuto />
    </div>
  );
}
