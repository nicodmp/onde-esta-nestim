import React from 'react';
import {
  Radio,
  Clock,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RefreshCw,
  Compass
} from 'lucide-react';

interface HeaderProps {
  isAutoUpdating: boolean;
  onToggleAutoUpdate: () => void;
  updateIntervalSec: number;
  onIntervalChange: (sec: number) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onManualRefresh: () => void;
  countdown: number;
}

export const Header: React.FC<HeaderProps> = ({
  isAutoUpdating,
  onToggleAutoUpdate,
  updateIntervalSec,
  onIntervalChange,
  soundEnabled,
  onToggleSound,
  onManualRefresh,
  countdown
}) => {
  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title & Live Status */}
        <div className="flex items-center gap-3.5">
          {/* Minas Gerais Red Triangle stylized emblem */}
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-amber-600 flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
            {/* White Minas triangle symbol */}
            <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[16px] border-b-white drop-shadow-sm -mt-0.5" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Onde está Nestim agora?
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                Ao Vivo em MG
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Rastreador oficial pelas 853 cidades de Minas Gerais
            </p>
          </div>
        </div>

        {/* Real-time controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Countdown & status badge */}
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs text-slate-300">
            {isAutoUpdating ? (
              <>
                <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Nova cidade em <strong className="text-amber-400 font-mono">{countdown}s</strong></span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-slate-400">Atualização pausada</span>
              </>
            )}
          </div>

          {/* Interval selector */}
          <div className="flex items-center bg-slate-800/80 border border-slate-700/60 rounded-xl p-0.5 text-xs">
            {[8, 15, 30].map((sec) => (
              <button
                key={sec}
                onClick={() => onIntervalChange(sec)}
                className={`px-2 py-1 rounded-lg font-medium transition ${
                  updateIntervalSec === sec
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={`Atualizar a cada ${sec} segundos`}
              >
                {sec}s
              </button>
            ))}
          </div>

          {/* Pause / Resume Button */}
          <button
            onClick={onToggleAutoUpdate}
            className={`p-2 rounded-xl border transition ${
              isAutoUpdating
                ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700'
                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
            }`}
            title={isAutoUpdating ? 'Pausar rastreamento automático' : 'Retomar rastreamento automático'}
          >
            {isAutoUpdating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>

          {/* Sound On / Off */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition ${
              soundEnabled
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                : 'bg-slate-800/50 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={soundEnabled ? 'Silenciar avisos sonoros' : 'Ativar avisos sonoros de viagem'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Manual Jump Now */}
          <button
            onClick={onManualRefresh}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition transform active:scale-95"
            title="Sortear cidade imediatamente"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sortear</span>
          </button>
        </div>
      </div>
    </header>
  );
};
