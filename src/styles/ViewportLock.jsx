import React from "react";

//규칙
//≥1200px: 가로 스크롤 불가, 세로 스크롤 동작, <1200px : 가로·세로 스크롤 모두 가능(두 바 모두 보임)

export default function ViewportLock({ className = "", children }) {
  return (
    <>
      <style>{`
        .vl-outer {
        position: relative;
        isolation: isolate;
        width: 100%;
        max-width: 100vw;
-       min-height: 100dvh;
+       height: 100dvh;             
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;
        touch-action: pan-y;
        overscroll-behavior-y: contain;
        }
        .vl-hscroll {
          width: 100%;
-         min-height: 100dvh;
+         /* 내부는 높이 고정하지 말고 콘텐츠에 맡김 */
          overflow-x: auto;
          overflow-y: visible;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
          box-sizing: border-box;
        }
        .vl-content {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 1200px) {
          .vl-outer {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .vl-outer::-webkit-scrollbar {
-           width: 0; height: 0; display: none;
+           /* 필요시 주석 해제해서 감추되, 디버깅 중엔 보이게 두세요 */
+           /* width: 0; height: 0; display: none; */
          }
          .vl-hscroll {
            overflow-x: hidden;
          }
          .vl-content {
            min-width: 0;
          }
        }
      `}</style>

      <div className="vl-outer">
        <div className="vl-hscroll">
          <div className={`vl-content ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
