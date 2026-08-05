"use client";

import { useState } from "react";

export default function ClientMessagesPage() {
  const [activeChat, setActiveChat] = useState("sunita");

  return (
    <div className="flex-grow flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Conversation List (Left Pane) */}
      <aside className="w-full md:w-1/3 lg:w-96 border-r border-outline-variant bg-surface flex flex-col overflow-hidden">
        <div className="p-4 border-b border-outline-variant">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-2">Conversations</h2>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm transition-all"
              placeholder="Search messages..."
              type="text"
            />
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {/* Conversation Item 1 */}
          <div 
            onClick={() => setActiveChat("sunita")}
            className={`flex items-start gap-4 p-4 cursor-pointer border-l-4 transition-colors ${
              activeChat === "sunita" 
                ? "bg-surface-container border-primary" 
                : "bg-surface hover:bg-surface-container-low border-transparent"
            }`}
          >
            <div className="relative shrink-0">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                alt="Sunita Maharjan" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDei-zez38ijxJFu0MmyGXBskHTiJxuit4mEUikXHtiCO6WJgAjtvzOCwmfNdMI0YknH4omWbUe-4fHcRaMCMKOwavjbeQMQiQDULPgZNmiyk3mIGFPVl9BR4cMJB2wqpBKd8I1nZwxi_L8FZMEVApd53V_NcdCDIp3iEED5xULmNCKVQQu8-8pHfIPW0u3UdIkOxUn8h9u59q2w192sMwcaabEjr2Ji0DfKG4719Xa3I6UZlkMjq64" 
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface"></span>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Sunita Maharjan</h3>
                <span className="font-label-sm text-label-sm text-primary whitespace-nowrap">10:42 AM</span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary mb-1">Cleaning</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">I'll be there in 15 minutes.</p>
            </div>
          </div>

          {/* Conversation Item 2 */}
          <div 
            onClick={() => setActiveChat("ramesh")}
            className={`flex items-start gap-4 p-4 cursor-pointer border-l-4 transition-colors ${
              activeChat === "ramesh" 
                ? "bg-surface-container border-primary" 
                : "bg-surface hover:bg-surface-container-low border-transparent"
            }`}
          >
            <div className="relative shrink-0">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                alt="Ramesh Shrestha" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxALmlOXLRxpBvUY0mZ9lB6iw5UQLir0VrGti_l-CCufWO_oRq7yryN_GxrQORuf2DB3nnyao6i-tPPzDSU12BeNm8RNd6S_jAmCkQab26CZS-qZlCFapt1HKBt_LmQCdg-ZdzATCLScSGG76yVxKyYXgy-Dyg13ulwP1c0ioF75mRJI3JdzLxsc4Zn4V4d1i0WPbw40m0zKpJV70fxNV1017BtVjANOf8gSv8kycxH7Z8fMozWiEN" 
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-label-md text-label-md text-on-surface truncate pr-2">Ramesh Shrestha</h3>
                <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Yesterday</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Plumbing</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">The pipe is fixed now. Thanks!</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Active Chat Area (Right Pane) */}
      <section className="flex-grow flex flex-col bg-surface-container-lowest relative">
        {/* Chat Header */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-outline-variant bg-surface sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <img 
              className="w-10 h-10 rounded-full object-cover shrink-0" 
              alt="Sunita Maharjan" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQwEmOzqn2Q69ND-dbZPZIqHZLUPv9-Cd_VFc9t0lUkyLXOFQHa3s4LSkXcHF_2zq2R3PI2nI8iHWdAcIR3Z73dzfiR9R7m2SWIOvzHR20T8pH8kBg8IaA_BYqVzNYAAKbdRJVIJjvjjrVGd4VC3PqDtYVPCPz93GooGiD8kvDZz8LcTm7pJ4nyk5Z2vZ1FoxDGS-Aku9C_fbKv1Lhb7w3sBa6yyTdYKVeYafqanEs6176RRJdNWF" 
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Sunita Maharjan</h2>
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Pro
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button aria-label="Call" className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer">
              <span className="material-symbols-outlined">call</span>
            </button>
            <button aria-label="More options" className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-surface-container-lowest">
          <div className="text-center my-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Today, 9:00 AM</span>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end mb-2">
            <div className="max-w-[75%] lg:max-w-[60%]">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-xl rounded-tr-none shadow-sm font-body-md text-body-md mb-1">
                Hi Sunita, are we still on for 11 AM today for the deep cleaning?
              </div>
              <div className="text-right font-label-sm text-label-sm text-on-surface-variant flex items-center justify-end gap-1">
                9:05 AM <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
              </div>
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex justify-start mb-2">
            <div className="flex items-end gap-2 max-w-[75%] lg:max-w-[60%]">
              <div>
                <div className="bg-surface-container text-on-surface p-3 rounded-xl rounded-tl-none shadow-sm font-body-md text-body-md mb-1 border border-outline-variant">
                  Hello! Yes, absolutely. I have all the supplies ready.
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">9:12 AM</div>
              </div>
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex justify-start mb-2">
            <div className="flex items-end gap-2 max-w-[75%] lg:max-w-[60%]">
              <div>
                <div className="bg-surface-container text-on-surface p-3 rounded-xl rounded-tl-none shadow-sm font-body-md text-body-md mb-1 border border-outline-variant">
                  I might actually arrive a few minutes early if traffic is light.
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">9:13 AM</div>
              </div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end mb-2">
            <div className="max-w-[75%] lg:max-w-[60%]">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-xl rounded-tr-none shadow-sm font-body-md text-body-md mb-1">
                That's great. See you soon! Let me know when you are close.
              </div>
              <div className="text-right font-label-sm text-label-sm text-on-surface-variant flex items-center justify-end gap-1">
                9:30 AM <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
              </div>
            </div>
          </div>

          <div className="text-center my-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">10:42 AM</span>
          </div>

          {/* Incoming Message */}
          <div className="flex justify-start mb-2">
            <div className="flex items-end gap-2 max-w-[75%] lg:max-w-[60%]">
              <div>
                <div className="bg-surface-container text-on-surface p-3 rounded-xl rounded-tl-none shadow-sm font-body-md text-body-md mb-1 border border-outline-variant">
                  I'll be there in 15 minutes.
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">10:42 AM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input Area */}
        <footer className="p-4 bg-surface border-t border-outline-variant mt-auto">
          <div className="flex items-center gap-2 bg-surface-container-lowest rounded-full border border-outline-variant p-1 pr-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-1 focus-within:ring-primary transition-all">
            <button aria-label="Attach file" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shrink-0 cursor-pointer">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <input
              className="flex-grow bg-transparent border-none outline-none font-body-md text-body-md text-on-surface px-2 py-2 focus:ring-0"
              placeholder="Type a message..."
              type="text"
            />
            <button aria-label="Add emoji" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shrink-0 hidden sm:flex cursor-pointer">
              <span className="material-symbols-outlined">mood</span>
            </button>
            <button aria-label="Send message" className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-surface-tint hover:text-on-primary transition-colors shrink-0 shadow-sm cursor-pointer">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}