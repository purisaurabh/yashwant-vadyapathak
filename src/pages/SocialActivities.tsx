import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useCallback } from "react";

const SocialActivities = () => {
  const { t, i18n } = useTranslation();

  const isMarathi = i18n.language === "mr";

  const toLocalNumbers = useCallback(
    (value: number) => {
      const text = value.toString().padStart(2, "0");
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

  const activities = [
    {
      title: t("Social.Act1Title"),
      date: t("Social.Act1Date"),
      desc: t("Social.Act1Desc"),
      image: "/social-activities/1.png",
    },
    {
      title: t("Social.Act2Title"),
      date: t("Social.Act2Date"),
      desc: t("Social.Act2Desc"),
      image: "/social-activities/2.png",
    },
    {
      title: t("Social.Act3Title"),
      date: t("Social.Act3Date"),
      desc: t("Social.Act3Desc"),
      image: "/social-activities/3.png",
    },
    {
      title: t("Social.Act4Title"),
      date: t("Social.Act4Date"),
      desc: t("Social.Act4Desc"),
      image: "/social-activities/4.png",
    },
    {
      title: t("Social.Act5Title"),
      date: t("Social.Act5Date"),
      desc: t("Social.Act5Desc"),
      image: "/social-activities/5.png",
    },
  ];

  return (
    <div
      className="animate-fade-in section-alt"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        minHeight: "100vh",
      }}
    >
      <div className="w-full px-4 md:px-8 xl:px-12 mx-auto max-w-[1700px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4 text-[#e77218] bg-[#e77218]/10 border border-[#e77218]/20 shadow-sm uppercase">
            {t("Social.Badge")}
          </span>
          <h1 className="text-3xl md:text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-4 text-[#e77218] drop-shadow-sm">
            {t("Social.Title")}
          </h1>
          <div className="mx-auto w-24 border-t-4 border-[#e77218] rounded-full shadow-[0_2px_4px_rgba(231,114,24,0.3)] mb-6" />
          <p className="subtitle text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            {t("Social.Subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24 w-full p-2 py-4 mt-8 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e77218]/10 via-[#e77218]/20 to-transparent -translate-x-1/2 z-0 rounded-full" />

          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              className="relative flex flex-col md:flex-row items-center justify-center w-full group"
            >
              <div
                className={`w-full md:w-[60%] lg:w-[55%] overflow-hidden rounded-[2rem] shadow-xl md:shadow-2xl relative z-10 border-4 border-white flex-shrink-0 ${
                  idx % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-[320px] sm:h-[400px] md:h-[500px] xl:h-[550px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/fcd34d/b86205?text=${encodeURIComponent(
                      activity.title.substring(0, 25),
                    )}`;
                  }}
                />
              </div>

              <div
                className={`w-[92%] md:w-[55%] lg:w-[55%] bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-8 lg:p-12 relative z-20 md:mt-0 -mt-16 border border-gray-100/50 backdrop-blur-sm ${
                  idx % 2 === 0
                    ? "md:order-2 md:-ml-16 lg:-ml-24 xl:-ml-32"
                    : "md:order-1 md:-mr-16 lg:-mr-24 xl:-mr-32"
                }`}
              >
                <div
                  className={`absolute -top-6 md:-top-12 ${
                    idx % 2 === 0
                      ? "-right-2 md:-right-6"
                      : "-left-2 md:-left-6"
                  } text-[7rem] md:text-[14rem] font-black text-[#e77218]/5 select-none z-0 pointer-events-none tracking-tighter mix-blend-multiply`}
                >
                  {toLocalNumbers(idx + 1)}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#e77218] to-[#c75e0e] text-white font-extrabold text-xl md:text-2xl shadow-[0_4px_15px_rgba(231,114,24,0.4)] shrink-0 border-2 border-white">
                      {toLocalNumbers(idx + 1)}
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#e77218] drop-shadow-sm leading-tight">
                      {activity.title}
                    </h3>
                  </div>

                  {activity.date && (
                    <div className="flex items-center text-[#e77218] font-bold mb-6 text-sm bg-orange-50 w-fit px-4 py-2 rounded-full border border-orange-100/50 shadow-sm">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {activity.date}
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed text-[15px] md:text-lg text-justify font-medium">
                    {activity.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialActivities;
