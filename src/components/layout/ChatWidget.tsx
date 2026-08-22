"use client";

import { useEffect } from "react";
import Script from "next/script";

export function ChatWidget() {
  useEffect(() => {
    // Observer to enhance and inject a custom header overlay to the chat container
    const observer = new MutationObserver(() => {
      const container = document.getElementById("spc-chat-container");
      if (container && !document.getElementById("spc-header-overlay")) {
        // 1. Create header overlay bar
        const header = document.createElement("div");
        header.id = "spc-header-overlay";
        header.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 56px;
          background-color: #FDFBF7;
          border-bottom: 1px solid #EAE6DF;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          z-index: 999999;
          box-shadow: 0 1px 3px rgba(31, 41, 55, 0.05);
        `;

        header.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="position: relative; width: 8px; height: 8px; border-radius: 50%; background-color: #10B981; flex-shrink: 0;">
              <span style="position: absolute; inset: 0; border-radius: 50%; background-color: #10B981; animation: spcPulse 1.8s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.75;"></span>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-family: var(--font-mono), var(--font-open-sans), sans-serif; font-weight: 700; font-size: 14px; color: #1F2937; line-height: 1.2; letter-spacing: -0.01em;">
                Publishing Consultant
              </span>
              <span style="font-family: var(--font-sans), var(--font-open-sans), sans-serif; font-weight: 500; font-size: 11px; color: #F97316; line-height: 1.1;">
                Online • Instantly responds
              </span>
            </div>
          </div>
          <button id="spc-header-close-btn" aria-label="Close Chat" style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #F3EFE6; border: 1px solid #EAE6DF; cursor: pointer; color: #1F2937; transition: all 0.2s ease;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `;

        // Prepend header to container
        container.insertBefore(header, container.firstChild);

        // Add event listener to the custom close button
        const closeBtn = document.getElementById("spc-header-close-btn");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            const bubble = document.getElementById("spc-chat-bubble");
            if (bubble) {
              bubble.click(); // Triggers the default close action on the script's bubble
            }
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* Floating Chat Bubble Button Custom Styling */
        #spc-chat-bubble {
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%) !important;
          box-shadow: 0 8px 24px -4px rgba(249, 115, 22, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          bottom: 24px !important;
          right: 24px !important;
        }

        #spc-chat-bubble:hover {
          transform: scale(1.08) translateY(-2px) !important;
          box-shadow: 0 12px 32px -4px rgba(249, 115, 22, 0.65), 0 0 0 1.5px rgba(249, 115, 22, 0.5) !important;
        }

        #spc-chat-bubble:active {
          transform: scale(0.95) !important;
        }

        /* Hide the bubble when active (panel is open) as close button is now in top-right */
        #spc-chat-bubble.active {
          display: none !important;
        }

        /* Iframe Container Overrides */
        #spc-chat-container {
          border-radius: 24px !important;
          box-shadow: 0 25px 60px -15px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(234, 230, 223, 0.8) !important;
          border: none !important;
          background-color: #FDFBF7 !important;
          overflow: hidden !important;
          bottom: 24px !important; /* Move it down since the bubble is hidden */
          right: 24px !important;
          z-index: 999998 !important;
          height: 620px !important; /* Adjust height slightly to accommodate the top header */
        }

        /* Style the iframe to fit underneath our custom absolute header */
        #spc-chat-iframe {
          margin-top: 56px !important;
          height: calc(100% - 56px) !important;
          border: none !important;
          background-color: #FDFBF7 !important;
        }

        /* Pulse Animation for Status Indicator */
        @keyframes spcPulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        /* Custom Header Close Button Hover State */
        #spc-header-close-btn:hover {
          background-color: #EAE6DF !important;
          transform: scale(1.05);
        }
        #spc-header-close-btn:active {
          transform: scale(0.95);
        }

        /* Mobile Adjustments */
        @media (max-width: 480px) {
          #spc-chat-container {
            width: 100% !important;
            height: 100% !important;
            bottom: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      <Script
        src="https://multi-tenant-chatbot-production-55f0.up.railway.app/frontend/widget.js?bot_id=kandle_direct&api_key=sk_kandle_direct_live&api_base=https://multi-tenant-chatbot-production-55f0.up.railway.app"
        data-bot-id="kandle_direct"
        data-api-key="sk_kandle_direct_live"
        data-api-base="https://multi-tenant-chatbot-production-55f0.up.railway.app"
        strategy="afterInteractive"
      />
    </>
  );
}
