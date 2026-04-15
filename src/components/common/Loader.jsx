import { loaderConfig } from '../../data/loader';

export const Loader = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{
      background:
        'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)',
    }}
    role="status"
    aria-live="polite"
  >
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-solid" />
        <span
          className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-blue-400 font-mono"
          aria-hidden="true"
        >
          XP
        </span>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-white font-semibold text-xl font-mono">{loaderConfig.name}</p>
        <p className="text-blue-300 text-sm animate-pulse font-mono">{loaderConfig.message}</p>
      </div>
    </div>
  </div>
);
