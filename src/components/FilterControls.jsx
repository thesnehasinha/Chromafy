import { motion } from 'framer-motion';

const filters = [
  { label: 'None', value: 'none' },
  { label: 'Sepia', value: 'sepia(1)' },
  { label: 'Grayscale', value: 'grayscale(1)' },
  { label: 'Blur', value: 'blur(3px)' },
  { label: 'Brightness', value: 'brightness(1.4)' },
  { label: 'Contrast', value: 'contrast(1.5)' },
];

export default function FilterControls({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map(filter => (
        <motion.button
          key={filter.value}
          onClick={() => onSelect(filter.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
            selected === filter.value
              ? 'bg-indigo-600 text-white shadow-[0_0_8px_#6366f1]'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}
