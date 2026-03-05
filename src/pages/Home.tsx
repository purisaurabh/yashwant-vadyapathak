import { useState, useEffect, useCallback } from "react";
import type { TouchEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, History, PlayCircle, Music } from "lucide-react";
import CountUp from "react-countup";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) =>
        prev === 0 ? carouselImages.length - 1 : prev - 1,
      );
    }
  };

  const isMarathi = i18n.language === "mr";

  const toLocalNumbers = useCallback(
    (value: number) => {
      const text = value.toString();
      if (isMarathi) {
        const marathiDigits = [
          "०",
          "१",
          "२",
          "३",
          "४",
          "५",
          "६",
          "७",
          "८",
          "९",
        ];
        return text.replace(/\d/g, (d) => marathiDigits[parseInt(d)]);
      }
      return text;
    },
    [isMarathi],
  );

  const carouselImages = [
    "/carousel/1.jpg",
    "/carousel/2.jpeg",
    "/carousel/3.jpg",
    "/carousel/4.jpeg",
    "/carousel/5.jpeg",
    "/carousel/6.jpeg",
    "/carousel/7.jpeg",
    "/carousel/8.jpeg",
    "/carousel/9.jpg",
    "/carousel/10.jpeg",
  ];

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="animate-fade-in">
      <section
        className="min-h-[100dvh] h-[100dvh] relative overflow-hidden pt-0 mt-0 mb-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full overflow-hidden">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100 z-[1]"
                  : "opacity-0 scale-110 z-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-black/60 z-[2]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] text-center w-full px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              <div className="mx-auto mb-3 w-full max-w-2xl border-t-2 border-[#FF9933] border-dashed opacity-80" />
              <h1 className="text-[clamp(1.5rem,4vw,3.25rem)] sm:text-[clamp(1.75rem,4.5vw,3.75rem)] font-extrabold leading-tight tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                {t("Home.CarouselTagline")
                  .split(" | ")
                  .map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="whitespace-nowrap">
                          <span className="hidden sm:inline"> | </span>
                          <span className="sm:hidden">
                            {" "}
                            |<br />
                          </span>
                        </span>
                      )}
                    </span>
                  ))}
              </h1>
              <div className="mx-auto mt-3 w-full max-w-2xl border-t-2 border-[#FF9933] border-dashed opacity-80" />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 border-white/50 bg-transparent cursor-pointer transition-all duration-300 hover:bg-white/50 hover:scale-125 ${
                  index === currentSlide ? "w-8 rounded-md" : ""
                }`}
                style={
                  index === currentSlide
                    ? { backgroundColor: "#FF9933", borderColor: "#FF9933" }
                    : undefined
                }
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e77218] pt-10 pb-16 md:pt-12 md:pb-20 relative overflow-hidden flex flex-col items-center">
        <img
          src="/drummer-left.svg"
          alt="Drummer Left"
          className="absolute left-[-2%] bottom-0 h-[50%] md:h-[80%] opacity-70 object-contain object-left-bottom pointer-events-none mix-blend-multiply flex-shrink-0"
        />
        <img
          src="/drummer-right.svg"
          alt="Drummer Right"
          className="absolute right-[-2%] bottom-0 h-[50%] md:h-[80%] opacity-70 object-contain object-right-bottom pointer-events-none mix-blend-multiply flex-shrink-0"
        />

        <motion.img
          initial={{ opacity: 0.15, rotate: -10 }}
          animate={{ opacity: 0.15, rotate: 10 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/dhol_corner_tr.png"
          alt="Dhol"
          className="absolute top-[8%] left-[7%] md:left-[10%] w-32 md:w-48 object-contain pointer-events-none z-0 mix-blend-multiply"
        />
        <motion.img
          initial={{ opacity: 0.15, rotate: 15 }}
          animate={{ opacity: 0.15, rotate: -5 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/tasha_corner_tr.png"
          alt="Tasha"
          className="absolute top-[35%] right-[7%] md:right-[10%] w-32 md:w-48 object-contain pointer-events-none z-0 mix-blend-multiply"
        />
        <motion.img
          initial={{ opacity: 0.15, y: 10 }}
          animate={{ opacity: 0.15, y: -20 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/flag_corner_tr.png"
          alt="Flag"
          className="absolute bottom-[20%] left-[8%] md:left-[12%] w-28 md:w-40 object-contain pointer-events-none z-0 mix-blend-multiply"
        />
        <motion.img
          initial={{ opacity: 0.15, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1.1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/cymbals_corner_tr.png"
          alt="Cymbals"
          className="absolute bottom-[2%] right-[10%] md:right-[15%] w-28 md:w-44 object-contain pointer-events-none z-0 mix-blend-multiply"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0 mb-4 md:mb-6 pt-4 md:pt-0"
          >
            <img
              src="/about.png"
              alt="About Pathak Logo"
              className="max-w-[450px] md:max-w-[600px] w-auto h-auto max-h-[140px] md:max-h-[160px] object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[950px] w-full mx-auto text-center pr-2 pb-2 flex flex-col"
          >
            <div>
              <p className="text-white text-sm md:text-base lg:text-[1.1rem] leading-snug lg:leading-relaxed mb-3 md:mb-5 font-medium tracking-wide">
                {t("Home.AboutPathakText")} {t("Home.AboutPathakObjectiveText")}
              </p>

              <p className="text-white text-sm md:text-base lg:text-[1.1rem] leading-snug lg:leading-relaxed mb-3 md:mb-5 font-medium tracking-wide">
                {t("Home.AboutPathakFeature1")} {t("Home.AboutPathakFeature2")}{" "}
                {t("Home.AboutPathakFeature3")}
              </p>

              <p className="text-white text-sm md:text-base lg:text-[1.1rem] leading-snug lg:leading-relaxed mb-3 md:mb-5 font-medium tracking-wide">
                {t("Home.AboutPathakPerformanceText")}{" "}
                {t("Home.AboutPathakFamilyText")}
              </p>

              <p className="text-white text-sm md:text-base lg:text-[1.1rem] leading-snug lg:leading-relaxed mb-2 font-medium tracking-wide">
                {t("Home.AboutPathakCTA")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="shrink-0 mt-4 pb-6 md:pb-0"
          >
            <Link
              to="/about"
              className="inline-block px-10 py-3 border-[2px] border-[#4a1202] text-white text-lg font-bold rounded-md transition-all duration-300 shadow-sm hover:bg-[#ffffff] hover:text-[#e77218] hover:-translate-y-0.5 hover:shadow-md"
            >
              {t("Home.MoreInfoBtn")}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#fffaf0] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#e77218]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#e77218]/10 text-[#e77218] text-xs md:text-sm font-bold mb-3 border border-[#e77218]/30 tracking-widest shadow-sm">
              {t("Home.Journey")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-[#e77218] tracking-wide font-sans mb-4 drop-shadow-sm">
              {t("Home.HistoryTitle")}
            </h2>
            <div className="mx-auto w-16 border-t-4 border-[#e77218] rounded-full shadow-[0_2px_4px_rgba(231,114,24,0.3)] mb-4" />
          </motion.div>

          <div className="relative max-w-[1300px] mx-auto pb-16 px-4 md:px-0">
            <div className="absolute left-[44px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-1 bg-gradient-to-b from-[#e77218] via-[#e77218] to-transparent rounded-full shadow-[0_0_10px_rgba(231,114,24,0.3)] z-0" />

            <div className="relative mb-20 flex w-full">
              <div className="absolute left-[44px] md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex justify-center items-center z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2,
                  }}
                  className="bg-white border-4 border-[#e77218] text-[#e77218] w-full h-full rounded-full flex items-center justify-center font-extrabold text-lg shadow-[0_0_20px_rgba(231,114,24,0.3)]"
                >
                  2023
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row w-full items-stretch">
                <div className="w-full md:w-1/2 pl-[80px] md:pl-0 md:pr-14 flex items-center justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 hover:shadow-[0_15px_40px_rgba(231,114,24,0.1)] transition-all duration-300 relative group"
                  >
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 w-0 h-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-white border-b-[12px] border-b-transparent drop-shadow-[3px_0_3px_rgba(0,0,0,0.03)]" />
                    <div className="md:hidden absolute top-10 -translate-y-1/2 -left-4 w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-white border-b-[12px] border-b-transparent drop-shadow-[-3px_0_3px_rgba(0,0,0,0.03)]" />

                    <h3 className="text-2xl font-bold text-[#e77218] mb-3">
                      {t("Home.History2023")}
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-5 text-justify">
                      {t("Home.History2023Text")}
                    </p>
                    <div className="p-4 bg-orange-50/70 rounded-xl border-l-4 border-[#e77218] transition-colors duration-300 group-hover:bg-orange-50">
                      <h4 className="text-base font-bold text-[#e77218] mb-2 flex items-center gap-2">
                        {t("Home.History2023Special")}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        {t("Home.History2023SpecialText")}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 pl-[80px] md:pl-14 mt-6 md:mt-0 flex items-center justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full max-h-[250px] md:max-h-[350px] overflow-hidden rounded-2xl shadow-lg relative group"
                  >
                    <div className="absolute inset-0 bg-[#e77218]/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                    <img
                      src="/timeline.jpg"
                      alt="Timeline 2023"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative mb-20 flex w-full">
              <div className="absolute left-[44px] md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex justify-center items-center z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2,
                  }}
                  className="bg-white border-4 border-[#e77218] text-[#e77218] w-full h-full rounded-full flex items-center justify-center font-extrabold text-lg shadow-[0_0_20px_rgba(231,114,24,0.3)]"
                >
                  2024
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row w-full items-stretch">
                <div className="hidden md:flex w-full md:w-1/2 pr-14 items-center justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full max-h-[350px] overflow-hidden rounded-2xl shadow-lg relative group"
                  >
                    <div className="absolute inset-0 bg-[#e77218]/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                    <img
                      src="/timeline.jpg"
                      alt="Timeline 2024"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 pl-[80px] md:pl-14 flex items-center justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 hover:shadow-[0_15px_40px_rgba(231,114,24,0.1)] transition-all duration-300 relative group"
                  >
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-white border-b-[12px] border-b-transparent drop-shadow-[-3px_0_3px_rgba(0,0,0,0.03)]" />
                    <div className="md:hidden absolute top-10 -translate-y-1/2 -left-4 w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-white border-b-[12px] border-b-transparent drop-shadow-[-3px_0_3px_rgba(0,0,0,0.03)]" />

                    <h3 className="text-2xl font-bold text-[#e77218] mb-3">
                      {t("Home.History2024")}
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-5 text-justify">
                      {t("Home.History2024Text")}
                    </p>
                    <div className="p-4 bg-orange-50/70 rounded-xl border-l-4 border-[#e77218] transition-colors duration-300 group-hover:bg-orange-50">
                      <h4 className="text-base font-bold text-[#e77218] mb-2 flex items-center gap-2">
                        {t("Home.History2024Ganeshotsav")}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        {t("Home.History2024GaneshotsavText")}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex md:hidden w-full pl-[80px] mt-6 items-center justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full max-h-[250px] overflow-hidden rounded-2xl shadow-lg relative group"
                  >
                    <div className="absolute inset-0 bg-[#e77218]/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                    <img
                      src="/timeline.jpg"
                      alt="Timeline 2024"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full">
              <div className="absolute left-[44px] md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 flex justify-center items-center z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2,
                  }}
                  className="bg-[#e77218] text-white w-full h-full rounded-full flex items-center justify-center font-extrabold text-2xl shadow-[0_0_0_6px_rgba(255,255,255,1),_0_0_20px_rgba(231,114,24,0.4)]"
                >
                  ∞
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row w-full items-stretch">
                <div className="w-full md:w-1/2 pl-[80px] md:pl-0 md:pr-14 flex items-center justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 hover:shadow-[0_15px_40px_rgba(231,114,24,0.1)] transition-all duration-300 relative group"
                  >
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 w-0 h-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-white border-b-[12px] border-b-transparent drop-shadow-[3px_0_3px_rgba(0,0,0,0.03)]" />
                    <div className="md:hidden absolute top-10 -translate-y-1/2 -left-4 w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-white border-b-[12px] border-b-transparent drop-shadow-[-3px_0_3px_rgba(0,0,0,0.03)]" />

                    <h3 className="text-2xl font-bold text-[#e77218] mb-3">
                      {t("Home.HistoryConclusion")}
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed text-justify">
                      {t("Home.HistoryConclusionText")}
                    </p>
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 pl-[80px] md:pl-14 mt-6 md:mt-0 flex items-center justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full max-h-[250px] md:max-h-[350px] overflow-hidden rounded-2xl shadow-lg relative group"
                  >
                    <div className="absolute inset-0 bg-[#e77218]/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                    <img
                      src="/timeline.jpg"
                      alt="Timeline Conclusion"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e77218] py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-white/20 relative z-10 text-white">
          <div className="flex flex-col items-center justify-center text-center p-2 group">
            <Users
              size={36}
              className="mb-3 text-white/90 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-1 flex items-center justify-center">
              <CountUp
                start={0}
                end={100}
                formattingFn={toLocalNumbers}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </h3>
            <p className="text-sm md:text-base font-medium text-white/90">
              {t("Home.Stat1")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-2 group">
            <History
              size={36}
              className="mb-3 text-white/90 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-1 flex items-center justify-center">
              <CountUp
                start={0}
                end={3}
                formattingFn={toLocalNumbers}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </h3>
            <p className="text-sm md:text-base font-medium text-white/90">
              {t("Home.Stat2")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-2 group">
            <PlayCircle
              size={36}
              className="mb-3 text-white/90 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-1 flex items-center justify-center">
              <CountUp
                start={0}
                end={20}
                formattingFn={toLocalNumbers}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </h3>
            <p className="text-sm md:text-base font-medium text-white/90">
              {t("Home.Stat3")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-2 group">
            <Music
              size={36}
              className="mb-3 text-white/90 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-1 flex items-center justify-center">
              <CountUp
                start={0}
                end={100}
                formattingFn={toLocalNumbers}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </h3>
            <p className="text-sm md:text-base font-medium text-white/90">
              {t("Home.Stat4")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/timeline.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e77218]/40 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(2.5rem,5vw,5rem)] font-extrabold mb-6 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] tracking-wide leading-tight font-sans">
              {t("Home.RegistrationCTATitle")}
            </h2>
            <p className="text-xl md:text-3xl text-gray-200 max-w-[900px] mx-auto mb-12 font-medium drop-shadow-lg leading-relaxed">
              {t("Home.RegistrationCTAText")}
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/registration"
                className="inline-flex items-center justify-center px-12 py-5 bg-[#ff0000] hover:bg-[#cc0000] text-white text-xl md:text-2xl font-black rounded-full shadow-[0_0_30px_rgba(255,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] border-2 border-red-400/30 hover:border-red-400 tracking-wide"
              >
                {t("Home.RegistrationCTAButton")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
