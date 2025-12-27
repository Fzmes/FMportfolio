import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./LoaderLogo.css";

const easeOut = [0.22, 1, 0.36, 1];

const Loader = ({ onComplete, duration = 4000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const nameParts = ["Meskine", "Fatima", "Ezzahra"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 600);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  // Generate neural network nodes
  const neuralNodes = [...Array(12)].map((_, i) => ({
    x: 10 + (i % 4) * 28,
    y: 15 + Math.floor(i / 4) * 30,
    delay: i * 0.15,
  }));

  // Generate neural lines connecting nodes
  const neuralLines = [
    { x1: 10, y1: 15, x2: 38, y2: 45, delay: 0.3 },
    { x1: 38, y1: 15, x2: 66, y2: 45, delay: 0.5 },
    { x1: 66, y1: 15, x2: 94, y2: 45, delay: 0.7 },
    { x1: 10, y1: 45, x2: 38, y2: 75, delay: 0.9 },
    { x1: 38, y1: 45, x2: 66, y2: 75, delay: 1.1 },
    { x1: 66, y1: 45, x2: 94, y2: 15, delay: 1.3 },
  ];

  let letterIndex = 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader-container"
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: easeOut },
          }}
        >
          {/* Neural network background */}
          <div className="neural-network">
            {neuralNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="neural-node"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.6, 0.4],
                }}
                transition={{
                  delay: node.delay,
                  duration: 0.8,
                  ease: easeOut,
                }}
              />
            ))}
            {neuralLines.map((line, i) => (
              <motion.div
                key={`line-${i}`}
                className="neural-line"
                style={{
                  left: `${line.x1}%`,
                  top: `${line.y1}%`,
                  width: `${Math.sqrt(
                    Math.pow(line.x2 - line.x1, 2) +
                      Math.pow(line.y2 - line.y1, 2)
                  )}%`,
                  transform: `rotate(${
                    Math.atan2(line.y2 - line.y1, line.x2 - line.x1) *
                    (180 / Math.PI)
                  }deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  delay: line.delay,
                  duration: 0.6,
                  ease: easeOut,
                }}
              />
            ))}
          </div>

          {/* Flowing data dots */}
          <div className="flowing-dots">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="flow-dot"
                style={{
                  left: `${5 + i * 5}%`,
                  top: `${30 + (i % 5) * 10}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 10, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="loader-content">
            {/* Name container */}
            <div className="name-container">
              <div className="name-row">
                {nameParts.map((part, partIndex) => (
                  <div key={partIndex} className="name-part">
                    {part.split("").map((letter, i) => {
                      const currentIndex = letterIndex++;
                      return (
                        <motion.span
                          key={`${partIndex}-${i}`}
                          className="letter"
                          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                              delay: 0.8 + currentIndex * 0.06,
                              duration: 0.5,
                              ease: easeOut,
                            },
                          }}
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Data pulse bars */}
            <div className="data-pulse-container">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="data-bar"
                  initial={{ height: 4 }}
                  animate={{
                    height: [4, 12 + Math.random() * 12, 4],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 1.8 + i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2.2, duration: 0.6, ease: easeOut },
              }}
            >
              Data Scientist & AI Engineer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
