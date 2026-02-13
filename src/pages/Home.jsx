import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(null);
  const sad = ["/sad1.jpg", "/sad2.jpg", "/sad3.jpg"];

  const openEnvelope = () => {
    setOpen(true);
    setTimeout(() => {
      setShowButton(true);
    }, 1000);
  };

  const trigger = (e) => {
    e.stopPropagation();

    const pick = sad[Math.floor(Math.random() * sad.length)];
    setCurrent(pick);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className={`flex flex-col text-center ${open ? "opacity-0" : ""} `}>
        <span className="text-[40px]">You've got mail!</span>
        <span className="text-[24px]">Click to open</span>
      </div>
      <div
        className="relative aspect-square w-[min(80vw,320px)] cursor-pointer"
        onClick={!open ? openEnvelope : undefined}
      >
        {/* isi surat — hidden dulu */}
        <img
          src="/isi.png"
          className={`absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-all delay-200 duration-700 ${
            open
              ? "-translate-y-8 scale-105 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          } `}
        />
        <div
          className={`absolute bottom-[40%] left-1/2 flex -translate-x-1/2 gap-12 transition-all delay-200 duration-700 ${
            showButton
              ? "-translate-y-4 scale-105 opacity-100"
              : "pointer-events-none translate-y-4 scale-95 opacity-0"
          } `}
        >
          <button
            onClick={() => navigate("/about")}
            className="w-14 rounded-sm bg-slate-50 text-lg"
          >
            YES!
          </button>
          <button
            onClick={trigger}
            className="w-14 rounded-sm bg-slate-50 text-lg"
          >
            no
          </button>
        </div>

        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-150 ${
            show
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } `}
        >
          <img src={current} className="w-[60vw] max-w-md" />
        </div>

        {/* amplop */}
        <img
          src="/amplop.png"
          className={`pointer-events-none absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-all duration-700 ${open ? "-translate-y-6 scale-90 opacity-0" : ""} `}
        />
      </div>
    </div>
  );
}
