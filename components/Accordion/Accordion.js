// import React, { useState } from "react";
// import AccordionStyles from "./Accordion.styled";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Accordion({
//   i,
//   expanded,
//   setExpanded,
//   subtitle,
//   Content
// }) {
//   const isOpen = expanded.includes(i);

// By using `AnimatePresence` to mount and unmount the contents, we can animate
// them in and out while also only rendering the contents of open accordions
//   return (
//     <AccordionStyles className="accordion">
//       <motion.button initial={false} onClick={() => setExpanded(i)}>
//         <span className="subtitle">{subtitle}</span>
//         <div className={`circle-plus closed ${isOpen ? "opened" : ""}`}>
//           <div className="circle">
//             <div className="horizontal" />
//             <div className="vertical" />
//           </div>
//         </div>
//       </motion.button>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 }
//             }}
//             transition={{ duration: 0.3, ease: [0.83, 0, 0.37, 1] }}
//             className="accordion-content"
//           >
//             <Content />
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </AccordionStyles>
//   );
// }
