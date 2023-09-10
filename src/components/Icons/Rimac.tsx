import { motion } from "framer-motion";
import {memo} from 'react'
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 28, 68, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 28, 68, 1)"
  }
};

const RimacSVGIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={99}
    height={16}
    variants={icon}
    viewport={{once: true, amount: 0.5}}
    transition={{delay: 0.4, duration:0.5}}
  >
    <motion.path
      fill="#FF1C44"
      d="M56.289 0c-.906 0-1.584.252-2.32 1.211l-9.164 11.105-3.508-10.852C40.901.354 40.11 0 39.374 0c-1.132 0-1.697.404-2.263 1.363l-8.09 14.435h4.526l5.487-9.943 3.395 9.943h3.79l8.26-9.893-.057 9.893h3.847l-.057-13.88C58.212.555 57.25.05 56.289 0ZM23.59 2.574l-3.62 13.224h4.13l3.563-13.224H23.59ZM8.938 8.58H6.053l1.075-3.987h3.055c1.64 0 2.489.656 2.32 1.918-.17 1.312-1.585 2.07-3.565 2.07Zm7.637-2.22c.227-1.767-.905-3.786-5.034-3.786H3.564L0 15.798h4.073l1.358-4.946h2.093l3.62 4.946h4.47l-4.073-5.25c3.62-.807 4.808-2.472 5.034-4.188ZM68.904 10.902l3.62-4.845 1.358 4.845h-4.978Zm6.336 4.896h3.903L75.41 3.634c-.51-1.413-1.471-1.766-2.49-1.666-.622.05-1.3.303-1.98 1.11l-9.786 12.77h4.016l1.98-2.675h7.298l.792 2.625ZM91.59 13.375c-3.339-.05-5.205-1.716-4.923-3.836.34-2.877 3.282-4.593 7.411-4.593 1.188 0 2.772.101 4.187.404L99 2.675c-1.131-.252-3.111-.454-4.413-.454-7.014 0-11.484 2.877-12.05 7.217C82.03 13.274 85.084 16 91.59 16c1.301 0 2.433-.1 4.073-.353l.792-2.877c-1.64.404-2.885.605-4.865.605Z"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 1, ease: "easeInOut" },
        fill: { duration: 0.3, ease: [1, 0, 0.8, 1] }
      }}

    />
  </motion.svg>
)

const RimacSVG = memo(RimacSVGIcon)
export default RimacSVG