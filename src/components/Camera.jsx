import { useEffect, useRef, useState } from 'react';

export default function Camera({ filter, onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [snapshotUrl, setSnapshotUrl] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch(err => console.error('Camera access denied:', err));
  }, []);

  const takeSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.filter = filter;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      setSnapshotUrl(url);
      onCapture(url);
    }, 'image/png');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl border border-[#00ffe5]/30">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl"
          style={{ filter }}
          autoPlay
          muted
          playsInline
        />
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={takeSnapshot}
          className="px-6 py-2 bg-black text-[#00ffe5] border border-[#00ffe5]/50 rounded-full hover:shadow-[0_0_12px_#00ffe5] transition duration-300"
        >
          📸 Take Snapshot
        </button>

        {snapshotUrl && (
          <a
            href={snapshotUrl}
            download="chromafy-snapshot.png"
            className="px-6 py-2 bg-black text-[#00ffe5] border border-[#00ffe5]/50 rounded-full hover:shadow-[0_0_12px_#00ffe5] transition duration-300"
          >
            💾 Download
          </a>
        )}
      </div>
    </div>
  );
}
