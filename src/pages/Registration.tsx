import { useTranslation } from "react-i18next";
import {
  AlertCircle,
  UserPlus,
  CheckCircle2,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const CustomSelect = ({
  name,
  options,
  placeholder,
  required,
}: {
  name: string;
  options: { label: string; value: string }[];
  placeholder: string;
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === selected)?.label || placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <select
        name={name}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        required={required}
        className="absolute bottom-1/2 left-1/2 -z-10 w-1 h-1 opacity-0 pointer-events-none"
        tabIndex={-1}
      >
        <option value="" disabled></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 rounded-2xl border-2 transition-all outline-none bg-gray-50 hover:bg-white cursor-pointer flex justify-between items-center font-medium ${
          isOpen
            ? "ring-4 ring-primary/10 border-primary"
            : "border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
        }`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span
          className={selected ? "text-gray-800" : "text-gray-400 font-normal"}
        >
          {selectedLabel}
        </span>
        <ChevronDown
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={24}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
                className={`px-5 py-4 cursor-pointer transition-colors font-medium ${
                  selected === option.value
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Registration = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  /** Remount CustomSelect after reset — form.reset() does not clear its React state. */
  const [instrumentSelectKey, setInstrumentSelectKey] = useState(0);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    success: true,
    message: "",
  });
  const isMarathi = i18n.language === "mr";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[90px] pb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-primary/5 rounded-bl-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-yellow-500/5 rounded-tr-full -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-3 border border-primary/30 tracking-widest shadow-sm uppercase">
            {t("Registration.Title")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[clamp(2.5rem,4vw,4rem)] font-extrabold text-primary tracking-wide font-sans mb-4 drop-shadow-sm">
            {t("Registration.Header")}
          </h1>
          <div className="mx-auto w-24 border-t-4 border-primary rounded-full shadow-[0_2px_4px_rgba(217,119,6,0.3)] mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative h-[600px] lg:h-auto"
          >
            <div className="h-full w-full lg:absolute lg:inset-0">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-xl shadow-orange-900/5 p-8 md:p-10 border border-orange-100/50 relative flex flex-col h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50/50 rounded-tr-full -z-10 opacity-70"></div>

                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 flex items-center gap-4">
                    <div className="p-3 bg-red-50 text-red-500 rounded-2xl shadow-sm border border-red-100">
                      <AlertCircle size={28} />
                    </div>
                    {t("Registration.Rules")}
                  </h3>
                  <p className="text-gray-500 font-medium ml-1">
                    {isMarathi
                      ? "कृपया सर्व नियम काळजीपूर्वक वाचा"
                      : "Please read all rules carefully"}
                  </p>
                </div>

                <div
                  className="flex-1 overflow-y-auto pr-4 custom-scrollbar relative z-10"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#fb923c transparent",
                  }}
                >
                  <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      display: block;
                      width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background-color: #fb923c;
                      border-radius: 20px;
                    }
                  `}</style>
                  <ul className="space-y-6 text-gray-700 pb-16">
                    {Array.from({ length: 10 }, (_, i) =>
                      t(`Registration.Rule${i + 1}`),
                    ).map((rule, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-orange-50/30 transition-colors"
                      >
                        <CheckCircle2
                          className="text-primary shrink-0 mt-0.5 shadow-sm rounded-full"
                          size={22}
                        />
                        <span className="leading-relaxed font-medium text-gray-800">
                          {rule}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20 flex items-end justify-center pb-8">
                  <span className="text-xs text-gray-400 font-medium tracking-wider uppercase animate-pulse bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
                    {isMarathi
                      ? "अधिक वाचण्यासाठी खाली स्क्रोल करा"
                      : "Scroll down to read more"}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl shadow-orange-900/10 p-8 md:p-10 border border-gray-100 h-full relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -z-10"></div>

              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary shadow-sm border border-primary/20">
                    <UserPlus size={28} />
                  </div>
                  {t("Registration.Form")}
                </h3>
                <p className="text-gray-500 font-medium ml-1">
                  {isMarathi
                    ? "कृपया खालील माहिती अचूक भरा"
                    : "Please fill in the details carefully"}
                </p>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const searchParams = new URLSearchParams();
                  formData.forEach((value, key) => {
                    searchParams.append(key, value.toString());
                  });

                  const GOOGLE_SCRIPT_URL = import.meta.env
                    .VITE_REGISTRATION_SCRIPT_URL;
                  try {
                    const response = await fetch(GOOGLE_SCRIPT_URL, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: searchParams.toString(),
                    });

                    const result = await response.json();
                    console.log("Result", result);

                    if (result.status === "duplicate") {
                      setModalConfig({
                        isOpen: true,
                        success: false,
                        message: isMarathi
                          ? "हा मोबाईल नंबर आधीच नोंदणीकृत आहे. कृपया दुसरा मोबाईल नंबर वापरा."
                          : "You have already submitted the form with this phone number. Please use a different phone number.",
                      });
                    } else if (result.status === "success") {
                      setModalConfig({
                        isOpen: true,
                        success: true,
                        message: isMarathi
                          ? "नोंदणी यशस्वीरित्या पूर्ण झाली! आम्ही लवकरच आपल्याशी संपर्क साधू."
                          : "Registration submitted successfully! We will get in touch with you soon.",
                      });

                      form.reset();
                      setInstrumentSelectKey((k) => k + 1);
                    } else {
                      setModalConfig({
                        isOpen: true,
                        success: false,
                        message:
                          typeof result.message === "string"
                            ? result.message
                            : isMarathi
                              ? "सबमिट अयशस्वी. कृपया पुन्हा प्रयत्न करा."
                              : "Submission failed. Please try again.",
                      });
                    }
                  } catch (error) {
                    console.error("Form submission error:", error);

                    setModalConfig({
                      isOpen: true,
                      success: false,
                      message: isMarathi
                        ? "अर्ज सबमिट करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा."
                        : "Error submitting the form. Please try again.",
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-7 flex-1 flex flex-col justify-center"
              >
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    {t("Registration.FullName")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-gray-50 hover:bg-white text-gray-800 font-medium text-lg placeholder:font-normal"
                    placeholder={
                      isMarathi ? "पहिले नाव, आडनाव" : "First Name, Last Name"
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 tracking-wide">
                      {t("Registration.Phone")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-5 text-gray-500 font-bold border-r-2 border-gray-200 pr-4 text-lg">
                        {isMarathi ? "+९१" : "+91"}
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full pl-20 pr-5 py-4 rounded-2xl border-2 border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-gray-50 hover:bg-white text-gray-800 font-medium text-lg placeholder:font-normal"
                        required
                        placeholder={isMarathi ? "००००००००००" : "0000000000"}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        minLength={10}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9]/g,
                            "",
                          );
                        }}
                        title={
                          isMarathi
                            ? "कृपया १० अंकी मोबाईल नंबर टाका"
                            : "Please enter a 10-digit mobile number"
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-3 relative z-40">
                    <label className="text-sm font-bold text-gray-700 tracking-wide">
                      {t("Registration.Instrument")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="custom-select-wrapper text-lg">
                      <CustomSelect
                        key={instrumentSelectKey}
                        name="instrument"
                        required
                        placeholder={
                          isMarathi ? "वाद्य निवडा" : "Select Instrument"
                        }
                        options={[
                          { label: isMarathi ? "ढोल" : "Dhol", value: "Dhol" },
                          {
                            label: isMarathi ? "ताशा" : "Tasha",
                            value: "Tasha",
                          },
                          {
                            label: isMarathi ? "ध्वज" : "Dhwaj",
                            value: "Dhwaj",
                          },
                          { label: isMarathi ? "झांज" : "Zanj", value: "Zanj" },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    {t("Registration.Experience")}
                  </label>
                  <textarea
                    name="experience"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none bg-gray-50 hover:bg-white text-gray-800 font-medium text-lg placeholder:font-normal resize-none"
                    placeholder={
                      t("Registration.ExpPlaceholder") ||
                      "Any previous experience?"
                    }
                    rows={4}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 mt-6 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3"
                >
                  <UserPlus size={24} />{" "}
                  {isSubmitting
                    ? isMarathi
                      ? "सबमिट करत आहे..."
                      : "Submitting..."
                    : t("Registration.Submit")}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalConfig.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 ${
                  modalConfig.success ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <button
                onClick={() =>
                  setModalConfig({ ...modalConfig, isOpen: false })
                }
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                <div
                  className={`p-4 rounded-full mb-4 ${
                    modalConfig.success
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {modalConfig.success ? (
                    <CheckCircle2 size={40} />
                  ) : (
                    <X size={40} />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {modalConfig.success
                    ? isMarathi
                      ? "यशस्वी!"
                      : "Success!"
                    : isMarathi
                      ? "त्रुटी"
                      : "Error"}
                </h3>
                <p className="text-gray-600 mb-8">{modalConfig.message}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setModalConfig({ ...modalConfig, isOpen: false })
                  }
                  className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${
                    modalConfig.success
                      ? "bg-green-500 hover:bg-green-600 shadow-green-500/30"
                      : "bg-red-500 hover:bg-red-600 shadow-red-500/30"
                  } shadow-lg`}
                >
                  {isMarathi ? "ठीक आहे" : "Okay"}
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Registration;
