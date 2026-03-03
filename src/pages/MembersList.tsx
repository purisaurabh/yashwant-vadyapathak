import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const MembersList = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="animate-fade-in" style={{ paddingBottom: "100px" }}>
      <section className="pt-[90px] pb-14 bg-gradient-to-b from-[#fffaf0] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#e77218]/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10"
        >
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary md:text-sm text-xs font-bold mb-3 border border-primary/30 tracking-widest shadow-sm">
              {t("Members.Badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[clamp(2.5rem,4vw,4rem)] font-extrabold text-primary tracking-wide font-sans mb-4 drop-shadow-sm">
              {t("Members.Title")}
            </h1>
            <div className="mx-auto w-24 border-t-4 border-primary rounded-full shadow-[0_2px_4px_rgba(217,119,6,0.3)] mb-4" />
          </div>
        </motion.div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 relative z-20 -mt-12 mb-20 lg:-mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              end: 200,
              label: t("Members.StatMembers"),
            },
            {
              end: 28,
              label: t("Members.StatPerformances"),
            },
            {
              end: 111,
              label: t("Members.StatInstruments"),
            },
            {
              end: 1100,
              label: t("Members.StatFollowers"),
            },
          ].map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] p-6 md:p-10 flex flex-col items-center justify-center border border-orange-50/50 hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl md:text-[3.5rem] font-extrabold text-[#e77218] mb-2 tracking-tight leading-none drop-shadow-sm flex items-center justify-center">
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  formattingFn={(value) => {
                    const numStr = value.toString();
                    if (i18n.language === "mr") {
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
                      return numStr.replace(
                        /\d/g,
                        (d) => marathiDigits[parseInt(d)],
                      );
                    }
                    return numStr;
                  }}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                <span>+</span>
              </div>
              <div className="text-[0.65rem] md:text-sm font-bold text-[#2a2a2a] tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          backgroundColor: "var(--bg-main)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "6rem" }}
        >
          <h2
            className="text-center"
            style={{
              color: "var(--primary)",
              marginBottom: "3rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {t("Members.SpecialThanksTitle")}
          </h2>
          <div
            style={{
              display: "flex",
              background: "var(--bg-secondary)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
            className="flex-col md:flex-row"
          >
            <div
              style={{
                flex: "1",
                backgroundColor: "#a6b0c6",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingTop: "2rem",
              }}
            >
              <img
                src="/members/1.jpg"
                alt={t("Members.SarveshName")}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  maxHeight: "500px",
                  objectPosition: "bottom",
                }}
              />
            </div>
            <div
              style={{
                flex: "1.2",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  color: "var(--text-main)",
                }}
              >
                {t("Members.SarveshName")}
              </h3>
              <p
                style={{
                  marginBottom: "1.25rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {t("Members.SarveshDesc1")}
              </p>
              <p
                style={{
                  marginBottom: "1.25rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {t("Members.SarveshDesc2")}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {t("Members.SarveshDesc3")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "6rem" }}
        >
          <h2
            className="text-center"
            style={{
              color: "var(--primary)",
              marginBottom: "3rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {t("Members.ExecutiveMembersTitle")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {[
              {
                id: 2,
                name: t("Members.DattaName"),
                role: t("Members.DattaRole"),
                ext: "jpg",
              },
              {
                id: 3,
                name: t("Members.SumitName"),
                role: t("Members.SumitRole"),
                ext: "jpg",
              },
              {
                id: 4,
                name: t("Members.SonaliName"),
                role: t("Members.SonaliRole"),
                ext: "jpeg",
              },
              {
                id: 5,
                name: t("Members.VinitaName"),
                role: t("Members.VinitaRole"),
                ext: "jpeg",
              },
              {
                id: 6,
                name: t("Members.Member6Name"),
                role: t("Members.Member6Role"),
                ext: "jpeg",
              },
              {
                id: 7,
                name: t("Members.Member7Name"),
                role: t("Members.Member7Role"),
                ext: "jpeg",
              },
            ].map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={member.id}
                style={{
                  background: "var(--bg-secondary)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  cursor: "default",
                }}
                className="hover:-translate-y-2"
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/members/${member.id}.${member.ext}`}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "var(--text-main)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "6rem" }}
        >
          <h2
            className="text-center"
            style={{
              color: "var(--primary)",
              marginBottom: "3rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {t("Members.CooperationTitle")}
          </h2>
          <div
            style={{
              display: "flex",
              background: "var(--bg-secondary)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
            className="flex-col md:flex-row-reverse"
          >
            <div style={{ flex: "1", display: "flex" }}>
              <img
                src="/members/8.jpg"
                alt={t("Members.CooperationTitle")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "350px",
                }}
              />
            </div>
            <div
              style={{
                flex: "1.2",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  marginBottom: "1.5rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.9",
                  textAlign: "justify",
                  fontSize: "1.05rem",
                }}
              >
                {t("Members.CooperationDesc1")}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.9",
                  textAlign: "justify",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                }}
              >
                {t("Members.CooperationDesc2")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MembersList;
