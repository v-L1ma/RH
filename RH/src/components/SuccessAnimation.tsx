import { motion } from "framer-motion";

const SuccessAnimation = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <svg width="200" height="200" viewBox="0 0 400 400">
        {/* Círculo com animação de stroke */}
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#68E534"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ strokeDasharray: 1194, strokeDashoffset: 1194 }}
          animate={{ strokeDashoffset: 2388 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
        {/* Check com animação */}
        <motion.polyline
          points="88,214 173,284 304,138"
          fill="none"
          stroke="#68E534"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: 350, strokeDashoffset: 350 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.95 }}
        />
      </svg>
    </div>
  );
};

export default SuccessAnimation;
