import svgPaths from "./svg-o1stykekh4";

function PTextXs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.text-xs">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[3.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">pagefordesign</p>
      </div>
    </div>
  );
}

function H1Text3Xl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.text-3xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[36px] whitespace-pre-wrap">Каталог текстов и состояний</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Страница для копирайтера и дизайнера: все элементы, тексты и состояния в одном месте.</p>
      </div>
    </div>
  );
}

function HeaderSpaceY() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="header.space-y-2">
      <PTextXs />
      <H1Text3Xl />
      <P />
    </div>
  );
}

function SectionRounded2Xl() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[85px] relative rounded-[16px] shrink-0 w-[725px]" data-name="section.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Black',sans-serif] h-[46px] justify-center leading-[0] left-[21px] not-italic text-[18px] text-white top-[44px] w-[736px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[28px]">{`Игру можно протестировать тут `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] underline" href="https://05-ru-tech-tower.vercel.app/">
            <span className="decoration-solid leading-[28px]" href="https://05-ru-tech-tower.vercel.app/">
              https://05-ru-tech-tower.vercel.app/
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function H2TextXl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Онбординг — Шаг 1 (история)</p>
      </div>
    </div>
  );
}

function PRelative() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.relative">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Рамадан — время заботы и добрых дел</p>
      </div>
    </div>
  );
}

function H1Relative() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h1.relative">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[40px] text-center tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Башня доброты</p>
      </div>
    </div>
  );
}

function DivMb2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[25px] right-[25px] top-[25px]" data-name="div.mb-6">
      <PRelative />
      <H1Relative />
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
        <p className="mb-0">Эта игра — ваш небольшой, но значимый вклад.</p>
        <p className="mb-0">Постройте ровную и высокую башню из коробок</p>
        <p>и зарабатывайте баллы.</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.625px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
        <p className="mb-0">В конце месяца Рамадан все набранные баллы будут</p>
        <p>направлены на благотворительные цели.</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.75px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Будьте терпеливы, и всё обязательно <em>сложится</em>.</p>
      </div>
    </div>
  );
}

function DivMb4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[141.175px] items-start left-[25px] pb-[10px] right-[25px] top-[130.87px]" data-name="div.mb-8">
      <P1 />
      <P2 />
      <P3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1d055380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-2, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SpanFlex() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="span.flex">
      <Frame />
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Построить башню!</p>
      </div>
    </div>
  );
}

function ButtonWFull() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[25px] px-[24px] py-[16px] right-[25px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] top-[309.87px]" data-name="button.w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 398 60\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-28.686 -5.704 162.48 -22.111 267.64 52.323)\'><stop stop-color=\'rgba(255,0,0,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,11,0,0.875)\' offset=\'0.125\'/><stop stop-color=\'rgba(255,23,0,0.75)\' offset=\'0.25\'/><stop stop-color=\'rgba(255,46,0,0.5)\' offset=\'0.5\'/><stop stop-color=\'rgba(255,92,0,0)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%)" }}>
      <SpanFlex />
      <div className="absolute inset-0 rounded-[12px]" data-name="div.absolute">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p34d63080} id="Vector" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 15.75H14.25" id="Vector_2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMt1() {
  return (
    <div className="absolute bg-[#b4d3ff] content-stretch flex gap-[8px] items-center justify-center left-[25px] px-[17px] py-[13px] right-[25px] rounded-[12px] top-[385.5px]" data-name="button.mt-4">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <Frame1 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
      </div>
    </div>
  );
}

function ButtonMt() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[443px]" data-name="button.mt-3">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
        <p className="leading-[16px]">Правила участия</p>
      </div>
    </div>
  );
}

function DivWFull() {
  return (
    <div className="bg-[#f2f5f6] h-[486.5px] overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[448px]" data-name="div.w-full">
      <DivMb2 />
      <DivMb4 />
      <ButtonWFull />
      <ButtonMt1 />
      <ButtonMt />
    </div>
  );
}

function SectionSpaceY() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl />
      <DivWFull />
    </div>
  );
}

function H2TextXl1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Правила участия (попап)</p>
      </div>
    </div>
  );
}

function ButtonTextXs() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="button.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Закрыть</p>
      </div>
    </div>
  );
}

function DivFlex() {
  return (
    <div className="relative shrink-0 w-[406px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[18px] whitespace-nowrap">
          <p className="leading-[28px]">Правила участия</p>
        </div>
        <ButtonTextXs />
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Здесь будут юридические правила участия в акции.</p>
      </div>
    </div>
  );
}

function P5() {
  return <div className="h-[20px] shrink-0 w-full" data-name="p" />;
}

function P6() {
  return <div className="h-[20px] shrink-0 w-full" data-name="p" />;
}

function DivMt1() {
  return (
    <div className="relative shrink-0 w-[406px]" data-name="div.mt-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <P4 />
        <P5 />
        <P6 />
      </div>
    </div>
  );
}

function DivWFull1() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex flex-col gap-[12px] items-start max-w-[448px] overflow-clip p-[20px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[448px]" data-name="div.w-full">
      <DivFlex />
      <DivMt1 />
    </div>
  );
}

function SectionSpaceY1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl1 />
      <DivWFull1 />
    </div>
  );
}

function H2TextXl2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Онбординг — Шаг 2 (правила и награды)</p>
      </div>
    </div>
  );
}

function PUppercase() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.uppercase">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Шаг 2 из 2</p>
      </div>
    </div>
  );
}

function H2Text2Xl() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.text-2xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Правила и награды</p>
      </div>
    </div>
  );
}

function DivMb() {
  return (
    <div className="relative shrink-0 w-[398px]" data-name="div.mb-4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <PUppercase />
        <H2Text2Xl />
      </div>
    </div>
  );
}

function H3TextXs() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="h3.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
          <p className="leading-[16px]">Какие же правила?</p>
        </div>
      </div>
    </div>
  );
}

function SpanFlexShrink() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="span.flex-shrink-0">
          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
          <path d={svgPaths.p2c9b1700} fill="var(--fill-0, #FF2C00)" id="1" />
        </g>
      </svg>
    </div>
  );
}

function PTextXs1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20.98px] relative shrink-0" data-name="p.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="mb-0">«Отпускайте» ящик, когда он окажется над башней,</p>
        <p>одним нажатием на экран;</p>
      </div>
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <SpanFlexShrink />
        <PTextXs1 />
      </div>
    </div>
  );
}

function SpanFlexShrink1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="span.flex-shrink-0">
          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
          <path d={svgPaths.p20eb9d00} fill="var(--fill-0, #FF2C00)" id="2" />
        </g>
      </svg>
    </div>
  );
}

function PTextXs2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[11.16px] relative shrink-0" data-name="p.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="mb-0">Старайтесь собирать башню ровно. Если края выйдут</p>
        <p>за границы, они будут обрезаны;</p>
      </div>
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <SpanFlexShrink1 />
        <PTextXs2 />
      </div>
    </div>
  );
}

function SpanFlexShrink2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="span.flex-shrink-0">
          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
          <path d={svgPaths.p2cea7a00} fill="var(--fill-0, #FF2C00)" id="3" />
        </g>
      </svg>
    </div>
  );
}

function PTextXs3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[73.25px] relative shrink-0" data-name="p.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="mb-0">Чем выше башня, тем больше баллов будет</p>
        <p>направлено на благотворительность.</p>
      </div>
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <SpanFlexShrink2 />
        <PTextXs3 />
      </div>
    </div>
  );
}

function DivRoundedXl() {
  return (
    <div className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[398px]" data-name="div.rounded-xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
        <H3TextXs />
        <DivFlex1 />
        <DivFlex2 />
        <DivFlex3 />
      </div>
    </div>
  );
}

function H3TextXs1() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="h3.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
          <p className="leading-[16px]">Награды за уровни</p>
        </div>
      </div>
    </div>
  );
}

function SpanTextXs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">10 очков</p>
      </div>
    </div>
  );
}

function SpanFontSemibold() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Скидка 500 ₽</p>
      </div>
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="bg-[rgba(180,211,255,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <SpanTextXs />
          <SpanFontSemibold />
        </div>
      </div>
    </div>
  );
}

function SpanTextXs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">20 очков</p>
      </div>
    </div>
  );
}

function SpanFontSemibold1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Скидка 1000 ₽</p>
      </div>
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="bg-[rgba(180,211,255,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <SpanTextXs1 />
          <SpanFontSemibold1 />
        </div>
      </div>
    </div>
  );
}

function SpanTextXs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">30 очков</p>
      </div>
    </div>
  );
}

function SpanFontSemibold2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Скидка 1500 ₽</p>
      </div>
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="bg-[rgba(180,211,255,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <SpanTextXs2 />
          <SpanFontSemibold2 />
        </div>
      </div>
    </div>
  );
}

function DivSpaceY() {
  return (
    <div className="relative shrink-0 w-[364px]" data-name="div.space-y-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <DivFlex4 />
        <DivFlex5 />
        <DivFlex6 />
      </div>
    </div>
  );
}

function DivRoundedXl1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[398px]" data-name="div.rounded-xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[17px] py-[25px] relative w-full">
        <H3TextXs1 />
        <DivSpaceY />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1d055380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-2, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SpanFlex1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="span.flex">
      <Frame2 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Начать игру</p>
      </div>
    </div>
  );
}

function ButtonWFull1() {
  return (
    <div className="relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] shrink-0 w-[398px]" data-name="button.w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 398 60\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-28.686 -5.704 162.48 -22.111 267.64 52.323)\'><stop stop-color=\'rgba(255,0,0,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,11,0,0.875)\' offset=\'0.125\'/><stop stop-color=\'rgba(255,23,0,0.75)\' offset=\'0.25\'/><stop stop-color=\'rgba(255,46,0,0.5)\' offset=\'0.5\'/><stop stop-color=\'rgba(255,92,0,0)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[24px] py-[16px] relative w-full">
        <SpanFlex1 />
        <div className="absolute inset-0 rounded-[12px]" data-name="div.absolute">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ButtonMt2() {
  return (
    <div className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[398px]" data-name="button.mt-4">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[13px] relative w-full">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Назад</p>
        </div>
      </div>
    </div>
  );
}

function DivWFull2() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex flex-col gap-[16px] items-start max-w-[448px] overflow-clip p-[24px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[448px]" data-name="div.w-full">
      <DivMb />
      <DivRoundedXl />
      <DivRoundedXl1 />
      <ButtonWFull1 />
      <ButtonMt2 />
    </div>
  );
}

function SectionSpaceY2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl2 />
      <DivWFull2 />
    </div>
  );
}

function H2TextXl3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">HUD и прогресс награды (во время игры)</p>
      </div>
    </div>
  );
}

function SpanTextXs3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="span.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#f2f5f6] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Этаж</p>
      </div>
    </div>
  );
}

function SpanTextWhite() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="span.text-white">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">12</p>
      </div>
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.flex">
      <SpanTextXs3 />
      <SpanTextWhite />
    </div>
  );
}

function SpanTextXs4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-xs">
      <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Рекорд</p>
      </div>
    </div>
  );
}

function SpanTextYellow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-yellow-400">
      <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffd466] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">23</p>
      </div>
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="div.flex">
      <SpanTextXs4 />
      <SpanTextYellow />
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div.flex">
      <DivFlex8 />
      <DivFlex9 />
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">До награды</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">8 этажей</p>
      </div>
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="relative shrink-0 w-[526px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Span />
        <Span1 />
      </div>
    </div>
  );
}

function SpanFontSemibold3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[20px]">{`Скидка `}</span>
          <span className="leading-[20px] text-[#ffd466]">1000 ₽</span>
        </p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
        <p className="leading-[20px]">12/20</p>
      </div>
    </div>
  );
}

function DivMt() {
  return (
    <div className="relative shrink-0 w-[526px]" data-name="div.mt-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <SpanFontSemibold3 />
        <Span2 />
      </div>
    </div>
  );
}

function DivRelative() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[8px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-[172.66px]" data-name="div.relative">
      <div className="flex-[1_0_0] min-h-px min-w-px rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(255,44,0,0.6)] w-full" data-name="div.h-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 172.66 8\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-12.444 -0.76053 70.487 -2.9481 116.11 6.9764)\'><stop stop-color=\'rgba(255,0,0,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,11,0,0.875)\' offset=\'0.125\'/><stop stop-color=\'rgba(255,23,0,0.75)\' offset=\'0.25\'/><stop stop-color=\'rgba(255,46,0,0.5)\' offset=\'0.5\'/><stop stop-color=\'rgba(255,92,0,0)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%)" }} />
    </div>
  );
}

function DivRelative1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[172.67px]" data-name="div.relative">
      <div className="absolute bg-[#f2f5f6] inset-[0_80%_0_0] rounded-[9999px]" data-name="div.h-full" />
    </div>
  );
}

function DivRelative2() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-[8px] rounded-[9999px] shrink-0 w-[172.67px]" data-name="div.relative" />;
}

function DivMt2() {
  return (
    <div className="relative shrink-0 w-[526px]" data-name="div.mt-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start justify-center pt-[4px] relative w-full">
        <DivRelative />
        <DivRelative1 />
        <DivRelative2 />
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[15px]">Прогресс</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[15px]">40%</p>
      </div>
    </div>
  );
}

function DivMt3() {
  return (
    <div className="relative shrink-0 w-[526px]" data-name="div.mt-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Span3 />
        <Span4 />
      </div>
    </div>
  );
}

function DivRounded2Xl() {
  return (
    <div className="backdrop-blur-[4px] bg-[#15252b] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.35)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pt-[12px] px-[17px] relative w-full">
        <DivFlex10 />
        <DivMt />
        <DivMt2 />
        <DivMt3 />
      </div>
    </div>
  );
}

function DivMxAuto1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[560px]" data-name="div.mx-auto">
      <DivRounded2Xl />
    </div>
  );
}

function DivRoundedFull() {
  return (
    <div className="backdrop-blur-[4px] bg-[#ffd466] content-stretch flex flex-col items-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0 w-[560px]" data-name="div.rounded-full">
      <div aria-hidden="true" className="absolute border border-[#ffd466] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Все награды получены. Продолжайте играть!</p>
      </div>
    </div>
  );
}

function DivSpaceY2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="div.space-y-4">
      <DivFlex7 />
      <DivMxAuto1 />
      <DivRoundedFull />
    </div>
  );
}

function SectionSpaceY3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[565px]" data-name="section.space-y-4">
      <H2TextXl3 />
      <DivSpaceY2 />
    </div>
  );
}

function H2TextXl4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Фон игры (звёзды и полумесяцы)</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="blur-[1px] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">В игре фон рисуется на Canvas (градиент + мерцающие звёзды + полумесяцы). Это не DOM‑элемент, поэтому ниже —</p>
        <p>макет‑подсказка и описание для дизайнера.</p>
      </div>
    </div>
  );
}

function DivRelative3() {
  return (
    <div className="h-[192px] relative rounded-[16px] shrink-0 w-full" data-name="div.relative" style={{ backgroundImage: "linear-gradient(129.535deg, rgb(21, 37, 43) 19.017%, rgb(38, 71, 83) 140.73%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-[36px] size-[2px] top-[26.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1026" opacity="0.2" r="1" />
          </svg>
        </div>
        <div className="absolute left-[71px] size-[2px] top-[89.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1026" opacity="0.2" r="1" />
          </svg>
        </div>
        <div className="absolute left-[101px] size-[4px] top-[28.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[54px] size-[4px] top-[96.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[110px] size-[4px] top-[163.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[199px] size-[4px] top-[89.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[310px] size-[4px] top-[20.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[320px] size-[4px] top-[167.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[456px] size-[4px] top-[46.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[424px] size-[4px] top-[87.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[526px] size-[4px] top-[158.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[567px] size-[4px] top-[46.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[675px] size-[4px] top-[117.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[782px] size-[4px] top-[26.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[791px] size-[4px] top-[150.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 1049" opacity="0.2" r="2" />
          </svg>
        </div>
        <div className="absolute left-[159px] size-[2px] top-[24.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[135px] size-[2px] top-[111.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[38px] size-[2px] top-[164.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[254px] size-[2px] top-[134.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[253px] size-[2px] top-[80.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[373px] size-[2px] top-[34.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[529px] size-[2px] top-[11.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[617px] size-[2px] top-[144.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[635px] size-[2px] top-[36.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[665px] size-[2px] top-[66.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[772px] size-[2px] top-[78.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[724px] size-[2px] top-[115.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[686px] size-[2px] top-[166.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[726px] size-[2px] top-[12.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[829px] size-[2px] top-[76.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[827px] size-[2px] top-[154.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[774px] size-[2px] top-[178.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[308px] size-[2px] top-[82.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[383px] size-[2px] top-[156.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[482px] size-[2px] top-[113.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
        <div className="absolute left-[427px] size-[2px] top-[180.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 1028" r="1" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Текущее: градиент #15252B → #0F1B20, звёзды и полумесяцы.</p>
      </div>
    </div>
  );
}

function PFontSemibold() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="p.font-semibold">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
          <p className="leading-[16px]">Что можно сделать:</p>
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Заменить градиент на любой другой или сделать однотонный фон.</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Звёзды и луна — отдельные элементы, их можно заменить на любые декоративные.</p>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Можно упростить фон до плоской заливки или сделать сложный атмосферный градиент.</p>
      </div>
    </div>
  );
}

function UlGrid() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="ul.grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Li1 />
        <Li2 />
        <Li3 />
      </div>
    </div>
  );
}

function DivRounded2Xl1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <PFontSemibold />
        <UlGrid />
      </div>
    </div>
  );
}

function DivSpaceY1() {
  return (
    <div className="relative shrink-0 w-[854px]" data-name="div.space-y-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <P7 />
        <DivRelative3 />
        <Li />
        <DivRounded2Xl1 />
      </div>
    </div>
  );
}

function DivWFull3() {
  return (
    <div className="bg-[#15252b] max-w-[896px] relative rounded-[16px] shrink-0 w-[896px]" data-name="div.w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[21px] relative rounded-[inherit] w-full">
        <DivSpaceY1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SectionSpaceY4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl4 />
      <DivWFull3 />
    </div>
  );
}

function H2TextXl5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Коробки и их состояния (дизайн блоков)</p>
      </div>
    </div>
  );
}

function P8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">Блоки рисуются на Canvas как «картонные» коробки: светлая верхняя грань, тёмная боковая, «скотч» по центру и лёгкие</p>
        <p>линии гофры.</p>
      </div>
    </div>
  );
}

function PTextXs4() {
  return (
    <div className="relative shrink-0 w-[240px]" data-name="p.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Основной блок</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-[215.5px]">
      <div className="absolute inset-[-11.17%_-6.5%_-15.64%_-4.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239.5 113.5">
          <g filter="url(#filter0_d_1_639)" id="Group 4">
            <rect fill="var(--fill-0, #EDD098)" height="64" id="Rectangle 13" width="199" x="10" y="29.5" />
            <rect fill="url(#paint0_linear_1_639)" height="20" id="Rectangle 1" width="49" x="10" y="30.5" />
            <rect fill="url(#paint1_linear_1_639)" height="20" id="Rectangle 17" width="49" x="10" y="51.5" />
            <rect fill="url(#paint2_linear_1_639)" height="20" id="Rectangle 21" width="49" x="10" y="72.5" />
            <rect fill="url(#paint3_linear_1_639)" height="20" id="Rectangle 15" width="49" x="110" y="30.5" />
            <rect fill="url(#paint4_linear_1_639)" height="20" id="Rectangle 18" width="49" x="110" y="51.5" />
            <rect fill="url(#paint5_linear_1_639)" height="20" id="Rectangle 22" width="49" x="110" y="72.5" />
            <rect fill="url(#paint6_linear_1_639)" height="20" id="Rectangle 14" width="49" x="60" y="30.5" />
            <rect fill="url(#paint7_linear_1_639)" height="20" id="Rectangle 19" width="49" x="60" y="51.5" />
            <rect fill="url(#paint8_linear_1_639)" height="20" id="Rectangle 23" width="49" x="60" y="72.5" />
            <rect fill="url(#paint9_linear_1_639)" height="20" id="Rectangle 16" width="49" x="160" y="30.5" />
            <rect fill="url(#paint10_linear_1_639)" height="20" id="Rectangle 20" width="49" x="160" y="51.5" />
            <rect fill="url(#paint11_linear_1_639)" height="20" id="Rectangle 24" width="49" x="160" y="72.5" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 27" width="199" x="10" y="93.5" />
            <path d={svgPaths.p192d200} fill="var(--fill-0, #CACACA)" id="Rectangle 34" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 31" width="199" x="10" y="23.5" />
            <path d={svgPaths.p2fef1cf0} fill="var(--fill-0, #F5F5F5)" id="Rectangle 33" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 28" stroke="var(--stroke-0, #D2D2D2)" width="194" x="12.5" y="95" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 32" stroke="var(--stroke-0, #D2D2D2)" width="194" x="12.5" y="25" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113.5" id="filter0_d_1_639" width="239.5" x="0" y="-4.76837e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_639" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_639" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_639" x1="34.5" x2="34.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_639" x1="34.5" x2="34.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_639" x1="34.5" x2="34.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_639" x1="134.5" x2="134.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_639" x1="134.5" x2="134.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_639" x1="134.5" x2="134.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_639" x1="84.5" x2="84.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_639" x1="84.5" x2="84.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_639" x1="84.5" x2="84.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_639" x1="184.5" x2="184.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_639" x1="184.5" x2="184.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_639" x1="184.5" x2="184.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DivRounded2Xl2() {
  return (
    <div className="bg-[#0f1b20] content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[16px] self-stretch shrink-0 w-[275px]" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PTextXs4 />
      <Group />
    </div>
  );
}

function PTextXs5() {
  return (
    <div className="relative shrink-0 w-[240px]" data-name="p.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Обрезанный блок</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[89.5px] relative shrink-0 w-[165.5px]">
      <div className="absolute inset-[-11.17%_-8.46%_-15.64%_-6.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.5 113.5">
          <g filter="url(#filter0_d_1_621)" id="Group 5">
            <rect fill="var(--fill-0, #EDD098)" height="64" id="Rectangle 13" width="149" x="10" y="29.5" />
            <rect fill="url(#paint0_linear_1_621)" height="20" id="Rectangle 15" width="49" x="60" y="30.5" />
            <rect fill="url(#paint1_linear_1_621)" height="20" id="Rectangle 18" width="49" x="60" y="51.5" />
            <rect fill="url(#paint2_linear_1_621)" height="20" id="Rectangle 22" width="49" x="60" y="72.5" />
            <rect fill="url(#paint3_linear_1_621)" height="20" id="Rectangle 14" width="49" x="10" y="30.5" />
            <rect fill="url(#paint4_linear_1_621)" height="20" id="Rectangle 19" width="49" x="10" y="51.5" />
            <rect fill="url(#paint5_linear_1_621)" height="20" id="Rectangle 23" width="49" x="10" y="72.5" />
            <rect fill="url(#paint6_linear_1_621)" height="20" id="Rectangle 16" width="49" x="110" y="30.5" />
            <rect fill="url(#paint7_linear_1_621)" height="20" id="Rectangle 20" width="49" x="110" y="51.5" />
            <rect fill="url(#paint8_linear_1_621)" height="20" id="Rectangle 24" width="49" x="110" y="72.5" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 27" width="149" x="10" y="93.5" />
            <path d={svgPaths.p11845a00} fill="var(--fill-0, #CACACA)" id="Rectangle 34" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 31" width="149" x="10" y="23.5" />
            <path d={svgPaths.p13824980} fill="var(--fill-0, #F5F5F5)" id="Rectangle 33" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 28" stroke="var(--stroke-0, #D2D2D2)" width="146" x="11.5" y="95" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 32" stroke="var(--stroke-0, #D2D2D2)" width="146" x="11.5" y="25" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113.5" id="filter0_d_1_621" width="189.5" x="0" y="-4.76837e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_621" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_621" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_621" x1="84.5" x2="84.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_621" x1="84.5" x2="84.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_621" x1="84.5" x2="84.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_621" x1="34.5" x2="34.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_621" x1="34.5" x2="34.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_621" x1="34.5" x2="34.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_621" x1="134.5" x2="134.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_621" x1="134.5" x2="134.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_621" x1="134.5" x2="134.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DivRounded2Xl3() {
  return (
    <div className="bg-[#0f1b20] content-stretch flex flex-col gap-[8px] items-center p-[17px] relative rounded-[16px] self-stretch shrink-0 w-[274px]" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PTextXs5 />
      <Group1 />
    </div>
  );
}

function PTextXs6() {
  return (
    <div className="relative shrink-0 w-[240px]" data-name="p.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Падающий осколок</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[89.5px] relative w-[65.5px]">
      <div className="absolute inset-[-11.17%_-21.37%_-15.64%_-15.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.5 113.5">
          <g filter="url(#filter0_d_1_609)" id="Group 5">
            <rect fill="var(--fill-0, #EDD098)" height="64" id="Rectangle 13" width="49" x="10" y="29.5" />
            <rect fill="url(#paint0_linear_1_609)" height="20" id="Rectangle 16" width="49" x="10" y="30.5" />
            <rect fill="url(#paint1_linear_1_609)" height="20" id="Rectangle 20" width="49" x="10" y="51.5" />
            <rect fill="url(#paint2_linear_1_609)" height="20" id="Rectangle 24" width="49" x="10" y="72.5" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 27" width="49" x="10" y="93.5" />
            <path d={svgPaths.p34ea2680} fill="var(--fill-0, #CACACA)" id="Rectangle 34" />
            <rect fill="var(--fill-0, #E9E9E9)" height="6" id="Rectangle 31" width="49" x="10" y="23.5" />
            <path d={svgPaths.p1c2a7b80} fill="var(--fill-0, #F5F5F5)" id="Rectangle 33" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 28" stroke="var(--stroke-0, #D2D2D2)" width="48" x="10.5" y="95" />
            <rect fill="var(--fill-0, #E9E9E9)" height="3" id="Rectangle 32" stroke="var(--stroke-0, #D2D2D2)" width="48" x="10.5" y="25" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113.5" id="filter0_d_1_609" width="89.5" x="0" y="-4.76837e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_609" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_609" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_609" x1="34.5" x2="34.5" y1="30.5" y2="33.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_609" x1="34.5" x2="34.5" y1="51.5" y2="54.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_609" x1="34.5" x2="34.5" y1="72.5" y2="75.5">
              <stop stopColor="#FFFAF1" />
              <stop offset="1" stopColor="#FFE5B8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DivRounded2Xl4() {
  return (
    <div className="bg-[#0f1b20] content-stretch flex flex-col gap-[8px] items-center pl-[18px] pr-[17px] py-[17px] relative rounded-[16px] self-stretch shrink-0 w-[275px]" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PTextXs6 />
      <div className="flex h-[110.259px] items-center justify-center relative shrink-0 w-[101.475px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-30">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function DivGrid() {
  return (
    <div className="content-stretch flex gap-[15px] items-start justify-center relative shrink-0 w-full" data-name="div.grid">
      <DivRounded2Xl2 />
      <DivRounded2Xl3 />
      <DivRounded2Xl4 />
    </div>
  );
}

function PFontSemibold1() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="p.font-semibold">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
          <p className="leading-[16px]">Состояния:</p>
        </div>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Perfect: блок точно совпал по ширине.</p>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Cut: лишняя часть отрезается и падает как осколок.</p>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">• Debris: осколки падают с вращением.</p>
      </div>
    </div>
  );
}

function UlGrid1() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="ul.grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Li4 />
        <Li5 />
        <Li6 />
      </div>
    </div>
  );
}

function DivRounded2Xl5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <PFontSemibold1 />
        <UlGrid1 />
      </div>
    </div>
  );
}

function DivSpaceY3() {
  return (
    <div className="relative shrink-0 w-[854px]" data-name="div.space-y-4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <P8 />
        <DivGrid />
        <DivRounded2Xl5 />
      </div>
    </div>
  );
}

function DivWFull5() {
  return (
    <div className="bg-[#15252b] max-w-[896px] relative rounded-[16px] shrink-0 w-[896px]" data-name="div.w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[21px] relative rounded-[inherit] w-full">
        <DivSpaceY3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function DivWFull4() {
  return (
    <div className="bg-[#15252b] max-w-[896px] relative rounded-[16px] shrink-0 w-[896px]" data-name="div.w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[21px] relative rounded-[inherit] w-full">
        <DivWFull5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SectionSpaceY5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl5 />
      <DivWFull4 />
    </div>
  );
}

function H2TextXl6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Экран результата (есть очки)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Frame">
          <path d={svgPaths.p10c19f00} fill="var(--fill-0, #FF2C00)" id="Vector" stroke="var(--stroke-3, #FF2C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="bg-[rgba(255,44,0,0.2)] content-stretch flex h-[48px] items-center justify-center relative rounded-[16px] shrink-0 w-[39.7px]" data-name="div.flex">
      <Frame3 />
    </div>
  );
}

function PFontBold() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-bold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] tracking-[1.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Благотворительность</p>
      </div>
    </div>
  );
}

function H2Text2Xl1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-2xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[26px] not-italic relative shrink-0 text-[#15252b] text-[24px] whitespace-nowrap">
        <p className="mb-0">{`Каждая игра — `}</p>
        <p>шаг к добру</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <PFontBold />
      <H2Text2Xl1 />
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.flex">
      <DivFlex12 />
      <Div />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[14.001px] relative shrink-0 w-[11.47px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.47 14.0015">
        <g id="Frame">
          <path d={svgPaths.p17d743e8} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
          <path d={svgPaths.p2a89eb80} id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
          <path d={svgPaths.p54eb100} id="Vector_3" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
          <path d="M1.91167 11.7799H9.55753" id="Vector_4" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
          <path d={svgPaths.p57a9b00} id="Vector_5" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
          <path d={svgPaths.p17482af0} id="Vector_6" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="bg-[rgba(255,212,102,0.2)] content-stretch flex items-center justify-between pl-[13px] pr-[41.84px] py-[5px] relative rounded-[9999px] shrink-0 w-[120.31px]" data-name="div.flex">
      <div aria-hidden="true" className="absolute border border-[#ffd466] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame4 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[12px] not-italic relative shrink-0 text-[#ffd466] text-[12px] whitespace-nowrap">
        <p className="mb-0">Новый</p>
        <p>рекорд</p>
      </div>
    </div>
  );
}

function DivMb1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="div.mb-5">
      <DivFlex11 />
      <DivFlex13 />
    </div>
  );
}

function PUppercase1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.uppercase">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Очки</p>
      </div>
    </div>
  );
}

function PText3Xl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.text-3xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">23</p>
      </div>
    </div>
  );
}

function DivFlex14() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[21px] right-[21px] top-[21px]" data-name="div.flex">
      <PUppercase1 />
      <PText3Xl />
    </div>
  );
}

function PUppercase2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.uppercase">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Пожертвование</p>
      </div>
    </div>
  );
}

function PText4Xl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.text-4xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[36px] whitespace-nowrap">
        <p className="leading-[40px]">23 ₽</p>
      </div>
    </div>
  );
}

function DivMt4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[21px] right-[21px] top-[69px]" data-name="div.mt-3">
      <PUppercase2 />
      <PText4Xl />
    </div>
  );
}

function PMt() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[117px]" data-name="p.mt-2">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[14px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
        <p className="mb-0">{`В конце Рамадана эта сумма будет направлена `}</p>
        <p>на благотворительность</p>
      </div>
    </div>
  );
}

function DivMb3() {
  return (
    <div className="bg-[#b4d3ff] h-[170px] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.mb-4">
      <DivFlex14 />
      <DivMt4 />
      <PMt />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-[17.7px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7 17.9968">
        <g id="Frame">
          <path d={svgPaths.p3f949880} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
          <path d="M14.75 1.62342V4.57394" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
          <path d="M16.2255 3.09842H13.275" id="Vector_3" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
          <path d={svgPaths.p2491c700} id="Vector_4" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
        </g>
      </svg>
    </div>
  );
}

function SvgLucideMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[17.7px]" data-name="svg.lucide:margin">
      <Frame5 />
    </div>
  );
}

function PFontSemibold2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Каждый балл — вклад в копилку добра.</p>
      </div>
    </div>
  );
}

function P9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-none not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
        <p className="mb-0">Можно сыграть ещё раз и увеличить сумму</p>
        <p>пожертвования</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start min-w-[398.29998779296875px] relative shrink-0" data-name="div">
      <PFontSemibold2 />
      <P9 />
    </div>
  );
}

function DivFlex15() {
  return (
    <div className="relative shrink-0 w-[428px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <SvgLucideMargin />
        <Div1 />
      </div>
    </div>
  );
}

function DivMb5() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="div.mb-6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start pb-[17px] pt-[13px] px-[17px] relative w-full">
        <DivFlex15 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p34d63080} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 15.75H14.25" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgLucideMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="svg.lucide:margin">
      <Frame6 />
    </div>
  );
}

function PFontSemibold3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ваша награда:</p>
      </div>
    </div>
  );
}

function P10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Скидка на 1000 ₽ при покупке от 25 000 ₽</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <PFontSemibold3 />
      <P10 />
    </div>
  );
}

function DivFlex16() {
  return (
    <div className="relative shrink-0 w-[428px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <SvgLucideMargin1 />
        <Div2 />
      </div>
    </div>
  );
}

function PUppercase3() {
  return (
    <div className="relative shrink-0 w-[402px]" data-name="p.uppercase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Промокод</p>
        </div>
      </div>
    </div>
  );
}

function SpanFontMono() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-mono">
      <div className="flex flex-col font-['Menlo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[20px] tracking-[2px] whitespace-nowrap">
        <p className="leading-[28px]">HJKL</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p216f800} id="Vector" opacity="0.2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" opacity="0.2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex17() {
  return (
    <div className="relative shrink-0 w-[402px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative w-full">
        <SpanFontMono />
        <Frame7 />
      </div>
    </div>
  );
}

function DivMt5() {
  return (
    <div className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[428px]" data-name="div.mt-3">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <PUppercase3 />
        <DivFlex17 />
      </div>
    </div>
  );
}

function DivMb6() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="div.mb-6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[21px] px-[17px] relative w-full">
        <DivFlex16 />
        <DivMt5 />
      </div>
    </div>
  );
}

function ButtonWFull2() {
  return (
    <div className="relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] shrink-0 w-full" data-name="button.w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 462 48\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-33.298 -4.5632 188.61 -17.689 310.68 41.858)\'><stop stop-color=\'rgba(255,0,0,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,11,0,0.875)\' offset=\'0.125\'/><stop stop-color=\'rgba(255,23,0,0.75)\' offset=\'0.25\'/><stop stop-color=\'rgba(255,46,0,0.5)\' offset=\'0.5\'/><stop stop-color=\'rgba(255,92,0,0)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative w-full">
          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Сыграть ещё раз</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p10a7d900} id="Vector" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 14H12.6667" id="Vector_2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonWFull3() {
  return (
    <div className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-full" data-name="button.w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[25px] py-[13px] relative w-full">
          <Frame8 />
          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFlex18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[4px] relative shrink-0 w-full" data-name="div.flex">
      <ButtonWFull2 />
      <ButtonWFull3 />
    </div>
  );
}

function DivRelative5() {
  return (
    <div className="relative shrink-0 w-[462px]" data-name="div.relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <DivMb1 />
        <DivMb3 />
        <DivMb5 />
        <DivMb6 />
        <DivFlex18 />
      </div>
    </div>
  );
}

function DivRelative4() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex flex-col items-start max-w-[512px] overflow-clip p-[24px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[512px]" data-name="div.relative">
      <div className="absolute bg-[rgba(59,130,246,0.1)] blur-[32px] bottom-[-79px] left-[-79px] rounded-[9999px] size-[192px]" data-name="div.absolute" />
      <DivRelative5 />
    </div>
  );
}

function SectionSpaceY6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl6 />
      <DivRelative4 />
    </div>
  );
}

function H2TextXl7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Экран результата (очков 0)</p>
      </div>
    </div>
  );
}

function H2Text4Xl() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.text-4xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[40px]">Ваша башня упала</p>
      </div>
    </div>
  );
}

function PMb() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.mb-4">
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
        <p className="leading-[24px]">Но можно попробовать ещё раз</p>
      </div>
    </div>
  );
}

function DivFlex19() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[0] not-italic px-[170px] relative text-center w-full">
          <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] h-[28px] justify-center relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-[70.007px]">
            <p className="leading-[28px] whitespace-pre-wrap">Высота:</p>
          </div>
          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] h-[48px] justify-center relative shrink-0 text-[#ff2c00] text-[48px] w-[33.711px]">
            <p className="leading-[48px] whitespace-pre-wrap">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pd0f9a00} id="Vector" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 2.5V6.66667H13.3333" id="Vector_2" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPx1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[32px] py-[12px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="button.px-8" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 241 52\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-17.37 -4.9435 98.387 -19.163 162.06 45.347)\'><stop stop-color=\'rgba(255,0,0,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,11,0,0.875)\' offset=\'0.125\'/><stop stop-color=\'rgba(255,23,0,0.75)\' offset=\'0.25\'/><stop stop-color=\'rgba(255,46,0,0.5)\' offset=\'0.5\'/><stop stop-color=\'rgba(255,92,0,0)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 92, 0) 0%, rgb(255, 92, 0) 100%)" }}>
      <Frame9 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5f6] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Попробовать снова</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p10a7d900} id="Vector" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 14H12.6667" id="Vector_2" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPx() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0" data-name="button.px-6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame10 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5f6] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
      </div>
    </div>
  );
}

function DivFlex20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pt-[24px] relative shrink-0 w-full" data-name="div.flex">
      <ButtonPx1 />
      <ButtonPx />
    </div>
  );
}

function DivWFull6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="div.w-full">
      <H2Text4Xl />
      <PMb />
      <DivFlex19 />
      <DivFlex20 />
    </div>
  );
}

function SectionSpaceY7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl7 />
      <DivWFull6 />
    </div>
  );
}

function H2TextXl8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Рейтинг игроков (с результатами)</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p2f60c500} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M4.58333 19.25H17.4167" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex22() {
  return (
    <div className="bg-[rgba(255,212,102,0.3)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[44px]" data-name="div.flex">
      <Frame11 />
    </div>
  );
}

function PFontBold1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-bold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Топ игроков</p>
      </div>
    </div>
  );
}

function H2Text2Xl2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-2xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Рейтинг игроков</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <PFontBold1 />
      <H2Text2Xl2 />
    </div>
  );
}

function DivFlex21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.flex">
      <DivFlex22 />
      <Div3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p2c0cbc0} id="Vector" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 7H2.91667" id="Vector_2" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFlex() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[9999px] shrink-0" data-name="button.flex">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame12 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Назад</p>
      </div>
    </div>
  );
}

function DivMb7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.mb-5">
      <DivFlex21 />
      <ButtonFlex />
    </div>
  );
}

function DivFlex25() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="div.flex">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SpanFontSemibold4() {
  return (
    <div className="font-['PP_Right_Grotesk:Medium',sans-serif] h-[24px] leading-[0] not-italic relative shrink-0 w-[167.2px]" data-name="span.font-semibold">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#15252b] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Сильный Енот</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[115px] text-[10px] text-[rgba(21,37,43,0.5)] top-[14px] tracking-[1px] uppercase w-[47.625px]">
        <p className="leading-[15px] whitespace-pre-wrap">это вы</p>
      </div>
    </div>
  );
}

function DivFlex24() {
  return (
    <div className="relative shrink-0" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <DivFlex25 />
        <SpanFontSemibold4 />
      </div>
    </div>
  );
}

function DivTextSm() {
  return (
    <div className="relative shrink-0" data-name="div.text-sm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">23</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex23() {
  return (
    <div className="bg-[#ffd466] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <DivFlex24 />
          <DivTextSm />
        </div>
      </div>
    </div>
  );
}

function DivFlex28() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="div.flex">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SpanFontSemibold5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Лунный Филин</p>
      </div>
    </div>
  );
}

function DivFlex27() {
  return (
    <div className="relative shrink-0" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <DivFlex28 />
        <SpanFontSemibold5 />
      </div>
    </div>
  );
}

function DivTextSm1() {
  return (
    <div className="relative shrink-0" data-name="div.text-sm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">18</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex26() {
  return (
    <div className="bg-[rgba(255,212,102,0.4)] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <DivFlex27 />
          <DivTextSm1 />
        </div>
      </div>
    </div>
  );
}

function DivFlex31() {
  return (
    <div className="bg-[#f2f5f6] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="div.flex">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function SpanFontSemibold6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-semibold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Северный Барс</p>
      </div>
    </div>
  );
}

function DivFlex30() {
  return (
    <div className="relative shrink-0" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <DivFlex31 />
        <SpanFontSemibold6 />
      </div>
    </div>
  );
}

function DivTextSm2() {
  return (
    <div className="relative shrink-0" data-name="div.text-sm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">12</p>
        </div>
      </div>
    </div>
  );
}

function DivFlex29() {
  return (
    <div className="bg-[rgba(255,212,102,0.4)] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[15.99px] py-[12px] relative w-full">
          <DivFlex30 />
          <DivTextSm2 />
        </div>
      </div>
    </div>
  );
}

function DivSpaceY4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.space-y-2">
      <DivFlex23 />
      <DivFlex26 />
      <DivFlex29 />
    </div>
  );
}

function Span5() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[0px] whitespace-nowrap">
          <p className="text-[14px]">
            <span className="font-['PP_Right_Grotesk:Regular',sans-serif] leading-[20px]">Ваш ник:</span>
            <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]">{` `}</span>
            <span className="font-['PP_Right_Grotesk:Medium',sans-serif] leading-[20px]">Сильный Енот</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[0px] whitespace-nowrap">
          <p className="text-[14px]">
            <span className="font-['PP_Right_Grotesk:Regular',sans-serif] leading-[20px]">Рекорд:</span>
            <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]">{` `}</span>
            <span className="font-['PP_Right_Grotesk:Medium',sans-serif] leading-[20px]">23</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DivMt6() {
  return (
    <div className="bg-[#b4d3ff] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.mt-5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[15.99px] py-[12px] relative w-full">
          <Span5 />
          <Span6 />
        </div>
      </div>
    </div>
  );
}

function DivRelative6() {
  return (
    <div className="relative shrink-0 w-[462px]" data-name="div.relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <DivMb7 />
        <DivSpaceY4 />
        <DivMt6 />
      </div>
    </div>
  );
}

function DivWFull7() {
  return (
    <div className="bg-[#f2f5f6] max-w-[512px] relative rounded-[24px] shrink-0 w-[512px]" data-name="div.w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[25px] relative rounded-[inherit] w-full">
        <DivRelative6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f5f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SectionSpaceY8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl8 />
      <DivWFull7 />
    </div>
  );
}

function H2TextXl9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Рейтинг игроков (пустой)</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p2f60c500} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M4.58333 19.25H17.4167" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function DivFlex33() {
  return (
    <div className="bg-[rgba(255,212,102,0.3)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[44px]" data-name="div.flex">
      <Frame13 />
    </div>
  );
}

function PFontBold2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-bold">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Топ игроков</p>
      </div>
    </div>
  );
}

function H2Text2Xl3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-2xl">
      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Рейтинг игроков</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <PFontBold2 />
      <H2Text2Xl3 />
    </div>
  );
}

function DivFlex32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.flex">
      <DivFlex33 />
      <Div4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d={svgPaths.p2c0cbc0} id="Vector" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 7H2.91667" id="Vector_2" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFlex1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[9999px] shrink-0" data-name="button.flex">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame14 />
      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Назад</p>
      </div>
    </div>
  );
}

function DivMb8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.mb-5">
      <DivFlex32 />
      <ButtonFlex1 />
    </div>
  );
}

function DivRounded2Xl6() {
  return (
    <div className="bg-[#ffd466] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[17px] py-[25px] relative w-full">
          <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Игроков в списке пока нет, но вы можете стать первым :)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivRelative7() {
  return (
    <div className="relative shrink-0 w-[462px]" data-name="div.relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <DivMb8 />
        <DivRounded2Xl6 />
      </div>
    </div>
  );
}

function DivWFull8() {
  return (
    <div className="bg-[#f2f5f6] max-w-[512px] relative rounded-[24px] shrink-0 w-[512px]" data-name="div.w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[25px] relative rounded-[inherit] w-full">
        <DivRelative7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SectionSpaceY9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl9 />
      <DivWFull8 />
    </div>
  );
}

function H2TextXl10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.text-xl">
      <div className="flex flex-col font-['SF_Pro_Text:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Всплывающие тексты в игре</p>
      </div>
    </div>
  );
}

function DivFlex34() {
  return (
    <div className="relative shrink-0 w-[436px]" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] gap-[8px] items-center leading-[0] not-italic relative text-[#ffd466] text-[24px] text-center w-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">ВАУ</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">Молодец</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">Идеально!</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">Ровненько!</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">Больше баллов!</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[32px]">Удачно!</p>
        </div>
      </div>
    </div>
  );
}

function DivRounded2Xl7() {
  return (
    <div className="bg-[#15252b] relative rounded-[16px] shrink-0 w-[470px]" data-name="div.rounded-2xl">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[25px] relative w-full">
        <DivFlex34 />
      </div>
    </div>
  );
}

function DivWFull9() {
  return (
    <div className="bg-[rgba(21,37,43,0.5)] max-w-[512px] relative rounded-[16px] shrink-0 w-[512px]" data-name="div.w-full">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[21px] relative rounded-[inherit] w-full">
        <DivRounded2Xl7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SectionSpaceY10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="section.space-y-4">
      <H2TextXl10 />
      <DivWFull9 />
    </div>
  );
}

export default function DivMxAuto() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center px-[20px] py-[40px] relative size-full" data-name="div.mx-auto">
      <HeaderSpaceY />
      <SectionRounded2Xl />
      <SectionSpaceY />
      <SectionSpaceY1 />
      <SectionSpaceY2 />
      <SectionSpaceY3 />
      <SectionSpaceY4 />
      <SectionSpaceY5 />
      <SectionSpaceY6 />
      <SectionSpaceY7 />
      <SectionSpaceY8 />
      <SectionSpaceY9 />
      <SectionSpaceY10 />
    </div>
  );
}
