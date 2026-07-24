import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function ScrollReveal({ children, className = "", delay = 0 }) {
  // Se nenhum delay for passado via prop, usamos 0.15s como padrão para dar um "respiro" na rolagem
  const defaultDelay = delay || 0.15;

  const ref = useRef(null);
  // useInView detecta corretamente o que já está visível no carregamento (acima da dobra).
  // O whileInView não disparava de forma confiável para esses elementos após a hidratação do SSG,
  // deixando o conteúdo preso em opacity:0 (o "espaço branco").
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }} // Aumentamos levemente a distância (de 40 para 50) para o movimento ficar mais perceptível
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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