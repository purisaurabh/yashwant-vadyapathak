import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 pt-[90px] pb-20 overflow-hidden font-sans relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="text-[clamp(6rem,15vw,12rem)] font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-500 leading-none drop-shadow-sm mb-4"
        >
          {t("NotFound.Title")}
        </motion.div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide mb-6">
          {t("NotFound.Subtitle")}
        </h2>

        <div className="mx-auto w-24 border-t-4 border-primary rounded-full shadow-[0_2px_4px_rgba(217,119,6,0.3)] mb-8" />

        <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">
          {t("NotFound.Desc")}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark hover:shadow-[0_10px_20px_rgba(217,119,6,0.2)] transition-all duration-300 hover:-translate-y-1 transform"
        >
          <Home className="w-6 h-6" />
          {t("NotFound.BackHome")}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
