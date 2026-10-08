/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { NestimMap } from './components/NestimMap';
import { NestimProfileCard } from './components/NestimProfileCard';
import { MG_CITIES, MGCity, getRandomCity } from './data/mgCities';
import { playLocationChime } from './utils/sound';
import { Compass, Sparkles, Heart, Coffee, MapPin } from 'lucide-react';

export default function App() {
  const [currentCity, setCurrentCity] = useState<MGCity>(() => getRandomCity());
  const [avatarUrl, setAvatarUrl] = useState<string>(
    () => `${import.meta.env.BASE_URL}nestim_avatar.jpg`
  );
  const [isAutoUpdating, setIsAutoUpdating] = useState<boolean>(true);
  const [updateIntervalSec, setUpdateIntervalSec] = useState<number>(10);
  const [countdown, setCountdown] = useState<number>(10);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [cheeseCount, setCheeseCount] = useState<number>(3);
  const [coffeeCount, setCoffeeCount] = useState<number>(2);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string>(() => {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  });

  const [visitedCities, setVisitedCities] = useState<{ city: MGCity; timestamp: string }[]>([
    {
      city: currentCity,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  // Jump to next random city
  const jumpToRandomCity = useCallback(() => {
    setCurrentCity((prevCity) => {
      const nextCity = getRandomCity(prevCity.id);
      const timeStr = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      });

      setVisitedCities((prev) => [...prev, { city: nextCity, timestamp: timeStr }]);
      setLastUpdatedTime(new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));

      // Increment culinary metrics
      setCheeseCount((c) => c + Math.floor(Math.random() * 2) + 1);
      setCoffeeCount((k) => k + 1);

      // Play audio chime if sound enabled
      playLocationChime(soundEnabled);

      return nextCity;
    });

    setCountdown(updateIntervalSec);
  }, [soundEnabled, updateIntervalSec]);

  // Timer countdown hook for real-time updates
  useEffect(() => {
    if (!isAutoUpdating) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          jumpToRandomCity();
          return updateIntervalSec;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAutoUpdating, updateIntervalSec, jumpToRandomCity]);

  // Handle manual jump
  const handleManualJump = () => {
    jumpToRandomCity();
  };

  // Select city from travel log
  const handleSelectCity = (city: MGCity) => {
    setCurrentCity(city);
    setLastUpdatedTime(new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
    playLocationChime(soundEnabled);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Header */}
      <Header
        isAutoUpdating={isAutoUpdating}
        onToggleAutoUpdate={() => setIsAutoUpdating((prev) => !prev)}
        updateIntervalSec={updateIntervalSec}
        onIntervalChange={(sec) => {
          setUpdateIntervalSec(sec);
          setCountdown(sec);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        onManualRefresh={handleManualJump}
        countdown={countdown}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col gap-8">
        {/* Intro banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔺</span>
            <div>
              <p className="text-sm font-bold text-white">
                Rastreamento Ativo em Minas Gerais
              </p>
              <p className="text-xs text-slate-400">
                Acompanhe o trajeto em tempo real de Nestim pelas cidades mineiras e suas paradas gastronômicas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleManualJump}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-amber-400 hover:text-amber-300 text-xs font-semibold transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sortear Cidade</span>
            </button>
          </div>
        </div>

        {/* 1. Google Maps Platform Section */}
        <section aria-label="Mapa do paradeiro do Nestim" className="w-full">
          <NestimMap
            currentCity={currentCity}
            avatarUrl={avatarUrl}
            isAutoUpdating={isAutoUpdating}
            onRefresh={handleManualJump}
            nextUpdateSeconds={countdown}
          />
        </section>

        {/* 2. Nestim Profile Section (Directly Below the Map as requested) */}
        <section aria-label="Perfil do Nestim" className="w-full">
          <NestimProfileCard
            currentCity={currentCity}
            avatarUrl={avatarUrl}
            onAvatarChange={(newUrl) => setAvatarUrl(newUrl)}
            visitedCities={visitedCities}
            onSelectCity={handleSelectCity}
            onManualJump={handleManualJump}
            cheeseCount={cheeseCount}
            coffeeCount={coffeeCount}
            lastUpdatedTime={lastUpdatedTime}
          />
        </section>

        {/* 3. Cultural Mineiro Footer Showcase */}
        <footer className="mt-4 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Onde está Nestim agora?</span>
            <span>•</span>
            <span className="text-amber-400/90 font-medium italic">"Trem bão é coisa boa!"</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Coffee className="w-3.5 h-3.5 text-amber-500" /> Café sempre passado na hora
            </span>
            <span>•</span>
            <span className="text-slate-400">Minas Gerais, Brasil</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
