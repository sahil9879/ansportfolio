export const ease = [0.22, 1, 0.36, 1];

// Use: <motion.div {...fadeUp(0.1)}>
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease },
});