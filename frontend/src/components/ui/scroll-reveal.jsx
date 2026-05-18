import { motion } from "motion/react";

export function ScrollReveal({ children, className = "", delay = 0 }) {
  // Se nenhum delay for passado via prop, usamos 0.15s como padrão para dar um "respiro" na rolagem
  const defaultDelay = delay || 0.15;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }} // Aumentamos levemente a distância (de 40 para 50) para o movimento ficar mais perceptível
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }} // Agora a animação só dispara quando 25% do elemento está visível
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: defaultDelay
      }}
    >
      {children}
    </motion.div>
  );
}