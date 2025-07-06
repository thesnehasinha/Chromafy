export default function SnapshotPreview({ src }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-3 text-indigo-700">Your Snapshot</h2>

      <div className="bg-white rounded-xl shadow-xl p-4 mx-auto max-w-md transition hover:shadow-2xl">
        <img
          src={src}
          alt="Snapshot"
          className="rounded-xl shadow-lg mx-auto max-w-[500px] w-full"
        />

      </div>
    </div>
  );
}
