import React, { useRef } from 'react';
import { MGCity } from '../data/mgCities';
import {
  Coffee,
  MapPin,
  Utensils,
  Sparkles,
  Share2,
  Clock,
  Compass,
  CheckCircle2,
  Upload,
  History,
  TrendingUp,
  Heart
} from 'lucide-react';

interface NestimProfileCardProps {
  currentCity: MGCity;
  avatarUrl: string;
  onAvatarChange: (newUrl: string) => void;
  visitedCities: { city: MGCity; timestamp: string }[];
  onSelectCity: (city: MGCity) => void;
  onManualJump: () => void;
  cheeseCount: number;
  coffeeCount: number;
  lastUpdatedTime: string;
}

export const NestimProfileCard: React.FC<NestimProfileCardProps> = ({
  currentCity,
  avatarUrl,
  onAvatarChange,
  visitedCities,
  onSelectCity,
  onManualJump,
  cheeseCount,
  coffeeCount,
  lastUpdatedTime
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    const text = `🔍 Onde está Nestim agora? Ele acabou de ser visto em ${currentCity.name} (${currentCity.region})! Atividade: "${currentCity.activity}" 🧀☕`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onAvatarChange(url);
    }
  };

  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Main Profile Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo & Core Identity */}
        <div className="lg:col-span-4 flex flex-col items-center text-center">
          {/* Avatar Container with glowing frame */}
          <div className="relative group mb-4">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-slate-800 border-2 border-amber-400/80 shadow-2xl">
              <img
                src={avatarUrl}
                alt="Foto de perfil do Nestim"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/nestim_avatar.jpg';
                }}
              />
            </div>

            {/* Quick change photo badge */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 p-2.5 rounded-xl bg-slate-800/95 border border-slate-700 text-amber-400 hover:text-amber-300 shadow-xl transition hover:scale-110"
              title="Trocar ou atualizar foto"
            >
              <Upload className="w-4 h-4" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Name & Titles */}
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Nestim
            </h2>
            <span
              className="inline-flex items-center text-amber-400"
              title="Explorador Oficial Verificado"
            >
              <CheckCircle2 className="w-5 h-5 fill-amber-400 text-slate-900" />
            </span>
          </div>

          <p className="text-amber-400 font-medium text-sm mb-2">
            Embaixador das Alterosas & Caçador de Pão de Queijo
          </p>

          <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-4">
            Viajando incansavelmente por cada um dos 853 municípios de Minas Gerais. Onde quer que tenha um café passado na hora, Nestim estará lá.
          </p>

          {/* Share & Randomize buttons */}
          <div className="w-full flex items-center gap-2 max-w-xs">
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>

            <button
              onClick={onManualJump}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Onde ele foi?</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Location Details & Cultural Fun Facts */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Main Status Banner */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Paradeiro Atual Confirmado
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Atualizado às {lastUpdatedTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {currentCity.name}
              </h3>
              <span className="text-sm font-semibold text-amber-400 bg-amber-400/10 px-3 py-0.5 rounded-full w-fit">
                {currentCity.tag}
              </span>
            </div>

            <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-3.5 mb-4">
              <p className="text-sm md:text-base text-slate-200 font-medium italic">
                "{currentCity.activity}"
              </p>
            </div>

            {/* Micro details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1 flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-amber-400" /> Prato do Momento
                </span>
                <span className="text-xs font-bold text-slate-200">
                  {currentCity.typicalFood}
                </span>
              </div>

              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-amber-400" /> Região & Altitude
                </span>
                <span className="text-xs font-bold text-slate-200">
                  {currentCity.region} • {currentCity.altitude}
                </span>
              </div>

              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" /> Distância de BH
                </span>
                <span className="text-xs font-bold text-slate-200">
                  {currentCity.distanceFromBH}
                </span>
              </div>
            </div>

            {/* City Curiosity / Fun Fact */}
            <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-start gap-2.5 text-xs text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Você sabia? </strong>
                <span>{currentCity.funFact}</span>
              </div>
            </div>
          </div>

          {/* Gamified Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Cidades Hoje</span>
                <span className="text-lg font-black text-white">{visitedCities.length}</span>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400">
                <span className="text-xl">🧀</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Pães de Queijo</span>
                <span className="text-lg font-black text-white">{cheeseCount}</span>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-700/10 text-amber-400">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Cafés Coados</span>
                <span className="text-lg font-black text-white">{coffeeCount}</span>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Hospitalidade</span>
                <span className="text-lg font-black text-white">100% Mineira</span>
              </div>
            </div>
          </div>

          {/* Travel Diary: Recent Stops */}
          <div className="bg-slate-800/30 border border-slate-800/70 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <History className="w-3.5 h-3.5 text-amber-400" /> Diário de Bordo Recente
              </span>
              <span className="text-[11px] text-slate-500">
                {visitedCities.length} paradas registradas
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {visitedCities.slice(-6).reverse().map((item, idx) => (
                <button
                  key={`${item.city.id}-${idx}`}
                  onClick={() => onSelectCity(item.city)}
                  className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-left border transition ${
                    item.city.id === currentCity.id
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                      : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight truncate max-w-[120px]">
                      {item.city.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {item.timestamp}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
