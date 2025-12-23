export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo placeholder */}
        <div className="w-32 h-12 bg-neutral-800 rounded animate-pulse" />
        
        {/* Loading spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#d97e00] animate-spin"></div>
        </div>
        
        <p className="text-neutral-400 text-sm">טוען...</p>
      </div>
    </div>
  );
}

