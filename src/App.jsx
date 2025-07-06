import { useState } from 'react';
import Camera from './components/Camera';
import FilterControls from './components/FilterControls';
import SnapshotPreview from './components/SnapshotPreview';
import { motion } from 'framer-motion';

function App() {
  const [filter, setFilter] = useState('none');
  const [snapshot, setSnapshot] = useState(null);

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-[rgba(18,18,18,0.7)] backdrop-blur-md rounded-3xl p-6 sm:p-8 
                   border border-[#00ffe5]/30 shadow-[0_0_30px_rgba(0,255,229,0.2)] 
                   text-[#00ffe5] space-y-6"
      >
        <div className="text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-[0_0_10px_#00ffe5]">
            Chromafy
          </h1>
          <p className="text-lg text-[#7afcff] mt-2">Snap. Filter. Shine.</p>
        </div>

        <div className="flex justify-center items-center w-full">
          <Camera filter={filter} onCapture={setSnapshot} />
        </div>

        <FilterControls selected={filter} onSelect={setFilter} />
        {snapshot && <SnapshotPreview src={snapshot} />}
      </motion.div>
    </div>
  );
}

export default App;
