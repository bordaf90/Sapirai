// pages/about.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-8 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-purple-200">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          We are a business solutions company that leverages artificial intelligence to drive continuous improvement and scalable growth. Our mission is to empower organizations with cutting-edge technology that streamlines operations, enhances decision-making, and unlocks new opportunities.
        </p>
        <Link href="/" className="text-purple-400 underline hover:text-purple-200">
          ← Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
