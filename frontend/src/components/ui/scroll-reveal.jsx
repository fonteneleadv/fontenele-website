import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

export function ScrollReveal({ children, className = "", delay = 0 }) {
  // Se nenhum delay for passado via prop, usamos 0.15s como padrão para dar um "respiro" na rolagem
  const defaultDelay = delay || 0.15;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Fail-safe para VISÍVEL: o conteúdo começa visível (o SSG entrega tudo sem opacity:0).
  // Só "armamos" a animação de revelação para o que começa TOTALMENTE abaixo da dobra —
  // esse esconde no cliente (fora da tela, sem flash) e revela na rolagem.
  // Conteúdo acima da dobra permanece sempre visível; se o JS falhar, o pior caso é
  // "visível sem animação" — nunca preso invisível (o bug do "espaço branco").
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top >= window.innerHeight) {
      setArmed(true);
    }
  }, []);

  const hidden = armed && !inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 50 : 0 }}
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