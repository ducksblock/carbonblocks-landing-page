'use client'
import { motion, AnimatePresence, delay } from 'framer-motion'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div>
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default PageWrapper
