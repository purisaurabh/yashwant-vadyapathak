import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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

const Footer = () => {
  const { t, i18n } = useTranslation();
  const whatsappNumber = (
    import.meta.env.VITE_CONTACT_PHONE_2 || "+917972269030"
  ).replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const locationLink =
    "https://www.google.com/maps/search/?api=1&query=YashOne+Society+Maan+Road+Hinjewadi+Pune+411057";

  const isMarathi = i18n.language === "mr";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toLocalNumbers = (text: string) => {
    if (isMarathi) {
      const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
      return text.replace(/\d/g, (d) => marathiDigits[parseInt(d)]);
    }
    return text;
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-6 mt-auto relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 max-w-[1600px] mx-auto px-6 md:px-8 lg:px-4 relative z-10">
        <div className="flex flex-col items-start text-left col-span-1 md:col-span-2 lg:col-span-1 mb-2 lg:mb-0 pr-4">
          <img
            src="/logos/logo.png"
            alt="Yashwant Pathak Logo"
            loading="eager"
            fetchPriority="high"
            className="w-[220px] md:w-full max-w-[240px] md:max-w-[280px] object-contain drop-shadow-sm mb-4 -mt-8 md:-mt-4 brightness-0 invert opacity-90 transform origin-left md:origin-center -translate-x-12 sm:-translate-x-16 md:-translate-x-6 scale-[1.20] md:scale-125"
          />
          <p className="text-white/95 text-[15px] md:text-[16px] leading-relaxed mb-4 font-['Tiro_Devanagari_Marathi',serif] font-normal tracking-wide max-w-sm">
            {t("Home.Bg")}
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[18px] md:text-[16px] mb-3 tracking-wide drop-shadow-sm relative pb-2 inline-block">
            {t("Nav.Home")}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-white/70 rounded-full" />
          </h4>
          <ul className="space-y-4 font-['Tiro_Devanagari_Marathi',serif] font-normal tracking-wide text-[16px] md:text-[16px] mt-2">
            <li>
              <NavLink
                to="/about"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Nav.About")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/social-activities"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Nav.Social")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Nav.Gallery")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vadans"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Nav.Vadans")}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[18px] md:text-[16px] mb-3 tracking-wide drop-shadow-sm relative pb-2 inline-block">
            {t("Footer.OrgInfo")}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-white/70 rounded-full" />
          </h4>
          <ul className="space-y-4 font-['Tiro_Devanagari_Marathi',serif] font-normal tracking-wide text-[16px] md:text-[16px] mt-2">
            <li>
              <NavLink
                to="/registration"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Nav.Register")}
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Footer.Terms")}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={scrollToTop}
                className="flex items-center text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white mr-3 group-hover:scale-125 transition-all shrink-0" />
                {t("Footer.Privacy")}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[18px] md:text-[16px] mb-3 tracking-wide drop-shadow-sm relative pb-2 inline-block">
            {t("Nav.Contact")}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-white/70 rounded-full" />
          </h4>
          <ul className="space-y-6 text-white/90 font-['Tiro_Devanagari_Marathi',serif] text-[16px] md:text-[16px] font-normal tracking-wide mt-2">
            <li>
              <a
                href={locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors duration-300 shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)] mt-0.5">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <span className="leading-normal group-hover:text-white hover:text-white transition-colors duration-300">
                  {t("Footer.AddressLine1")} <br />
                  {t("Footer.AddressLine2")}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${import.meta.env.VITE_CONTACT_PHONE_1 || "+919921773172"}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors duration-300 shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <Phone size={18} strokeWidth={2} />
                </div>
                <span className="hover:text-white transition-all duration-300 flex-1 whitespace-nowrap">
                  {toLocalNumbers(
                    import.meta.env.VITE_CONTACT_PHONE_DISPLAY ||
                      "+91 9921773172, +91 7972269030",
                  )}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors duration-300 shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <span className="hover:text-white transition-all duration-300 flex-1 whitespace-nowrap">
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-4 md:mb-0">
          <h4 className="text-white font-bold text-[18px] md:text-[16px] mb-3 tracking-wide drop-shadow-sm relative pb-2 inline-block">
            {t("Footer.SocialMedia")}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-white/70 rounded-full" />
          </h4>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/yashwant_vadhyapathak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@yashwantvadhyapathak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-12 pt-5 border-t border-white/20 text-white/90 text-[14px] md:text-[15px] tracking-wide font-['Tiro_Devanagari_Marathi',_serif]">
        <div className="flex justify-center items-center max-w-[1600px] mx-auto px-2 md:px-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} {t("Footer.Rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
