interface AnimationConfig {
    initial: { [key: string]: any };
    animate: { [key: string]: any };
    transition: { [key: string]: any };
  }
  
  export function useAnimationConfig(): AnimationConfig {
    return {
      initial: { x: 200, y: 0, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" }
    };
  }
  