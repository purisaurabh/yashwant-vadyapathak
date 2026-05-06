import { useState, useEffect } from "react";
import { Instagram, Youtube, Share2, X } from "lucide-react";
import { usePhotoLightbox } from "../context/PhotoLightboxContext";

const whatsappNumber = (
  import.meta.env.VITE_CONTACT_PHONE_2 || "+917972269030"
).replace(/\D/g, "");

const whatsappLink = `https://wa.me/${whatsappNumber}`;

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.45Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.97 1-3.64-.24-.37a9.86 9.86 0 0 1-1.53-5.25c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.61.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.11-.27-.18-.57-.33Z" />
  </svg>
);

const iconsInfo = [
  { icon: WhatsAppIcon, label: "WhatsApp", link: whatsappLink, isFill: false },
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/yashwant_vadhyapathak",
    isFill: false,
  },
  {
    icon: Youtube,
    label: "YouTube",
    link: "https://www.youtube.com/@yashwantvadhyapathak",
    isFill: false,
  },
];

const SocialDock = () => {
  const { photoLightboxOpen } = usePhotoLightbox();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hideForDesktopLightbox = photoLightboxOpen ? "md:hidden" : "";

  useEffect(() => {
    if (isCollapsed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isCollapsed]);

  return (
    <>
      <div
        className={`fixed z-50 bottom-4 left-1/2 -translate-x-1/2 flex flex-row items-center
                   md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col 
                   bg-[#e77218] shadow-[0_8px_30px_rgba(231,114,24,0.4)] border border-[#ff8a33]
                   rounded-full md:rounded-4xl
                   px-4 py-2.5 md:px-3 md:py-6 gap-3 md:gap-4
                   transition-all duration-500 backdrop-blur-md
                   ${hideForDesktopLightbox}
                   ${
                     isCollapsed
                       ? "md:-translate-x-[150%] md:opacity-0 md:pointer-events-none md:left-0"
                       : "md:translate-x-0 md:opacity-100 md:hover:opacity-100 md:left-6"
                   }`}
      >
        {iconsInfo.map((info) => {
          const IconComponent = info.icon;

          return (
            <a
              key={info.label}
              href={info.link}
              target={
                info.label === "YouTube" ||
                info.label === "WhatsApp" ||
                info.label === "Instagram"
                  ? "_blank"
                  : "_self"
              }
              rel={
                info.label === "YouTube" ||
                info.label === "WhatsApp" ||
                info.label === "Instagram"
                  ? "noopener noreferrer"
                  : ""
              }
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white hover:bg-[#fff9f5] transition-all duration-300 ease-out hover:scale-110 shadow-md text-[#e77218]"
              aria-label={info.label}
            >
              <div className="transition-all duration-300 ease-out flex items-center justify-center">
                <IconComponent
                  size={18}
                  fill={info.isFill ? "currentColor" : "none"}
                  className={info.isFill ? "stroke-none" : "stroke-[2.5]"}
                />
              </div>
            </a>
          );
        })}

        <button
          onClick={() => setIsCollapsed(true)}
          className={`hidden md:flex w-8 h-8 md:w-9 md:h-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-500
                     ${
                       isCollapsed
                         ? "opacity-0 scale-90 pointer-events-none"
                         : "opacity-100 scale-100"
                     }`}
          aria-label="Close Social Links"
        >
          <X size={16} />
        </button>
      </div>

      <button
        onClick={() => setIsCollapsed(false)}
        className={`fixed z-60 hidden md:flex items-center justify-center
                   ${hideForDesktopLightbox}
                   left-0 top-1/2 -translate-y-1/2 w-10 h-16 bg-linear-to-b from-[#f08a32] to-[#d9650b] text-white
                   rounded-r-2xl border border-[#ff9b52] border-l-0
                   shadow-[0_10px_24px_rgba(231,114,24,0.45)]
                   transition-all duration-500 cursor-pointer hover:w-9
                   ${
                     isCollapsed
                       ? "-translate-x-[20%] opacity-100"
                       : "-translate-x-[150%] opacity-0 pointer-events-none"
                   }`}
        aria-label="Open Social Links"
      >
        <Share2 size={18} className="drop-shadow-sm" />
      </button>
    </>
  );
};

export default SocialDock;
