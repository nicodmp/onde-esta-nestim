import React, { useEffect, useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
  MapCameraChangedEvent
} from '@vis.gl/react-google-maps';
import { MGCity } from '../data/mgCities';
import {
  MapPin,
  Compass,
  Layers,
  Sparkles,
  Maximize2,
  RefreshCw,
  Navigation
} from 'lucide-react';

interface NestimMapProps {
  currentCity: MGCity;
  avatarUrl: string;
  isAutoUpdating: boolean;
  onRefresh: () => void;
  nextUpdateSeconds: number;
}

// Controller component to smoothly pan and zoom the map camera
function MapCameraController({
  targetCity,
  zoomLevel
}: {
  targetCity: MGCity;
  zoomLevel: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.panTo({ lat: targetCity.lat, lng: targetCity.lng });
    map.setZoom(zoomLevel);
  }, [map, targetCity, zoomLevel]);

  return null;
}

export const NestimMap: React.FC<NestimMapProps> = ({
  currentCity,
  avatarUrl,
  isAutoUpdating,
  onRefresh,
  nextUpdateSeconds
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [mapTypeId, setMapTypeId] = useState<'roadmap' | 'satellite' | 'hybrid' | 'terrain'>('roadmap');
  const [zoomLevel, setZoomLevel] = useState<number>(12);
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Keep info window open when city changes to display current status
  useEffect(() => {
    setShowInfoWindow(true);
  }, [currentCity]);

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  const centerCoords = { lat: currentCity.lat, lng: currentCity.lng };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-4 z-50 rounded-2xl bg-slate-900'
          : 'w-full bg-slate-900/80 backdrop-blur-xl'
      }`}
      style={{ height: isFullscreen ? 'calc(100vh - 2rem)' : '520px' }}
    >
      {/* Top Map Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* City live pill badge */}
        <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-white">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 flex items-center gap-1">
              <Navigation className="w-3 h-3 inline animate-pulse" /> Localização Atual
            </span>
            <span className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              {currentCity.name} <span className="text-xs font-normal text-slate-400">({currentCity.region})</span>
            </span>
          </div>
        </div>

        {/* Map Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 shadow-lg">
          {/* Map style selector */}
          <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 text-xs text-slate-300">
            <button
              onClick={() => setMapTypeId('roadmap')}
              className={`px-2.5 py-1 rounded-lg font-medium transition ${
                mapTypeId === 'roadmap' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-white'
              }`}
              title="Visão Vetorial de Ruas"
            >
              Mapa
            </button>
            <button
              onClick={() => setMapTypeId('hybrid')}
              className={`px-2.5 py-1 rounded-lg font-medium transition ${
                mapTypeId === 'hybrid' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-white'
              }`}
              title="Satélite com Ruas"
            >
              Satélite
            </button>
            <button
              onClick={() => setMapTypeId('terrain')}
              className={`px-2.5 py-1 rounded-lg font-medium transition ${
                mapTypeId === 'terrain' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-white'
              }`}
              title="Relevo de Montanhas"
            >
              Relevo
            </button>
          </div>

          {/* Quick random city jump button */}
          <button
            onClick={onRefresh}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs shadow-md transition transform active:scale-95"
            title="Sortear nova cidade de Minas Gerais"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Mudar Cidade</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition"
            title={isFullscreen ? 'Sair da tela cheia' : 'Expandir mapa'}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Auto-update progress indicator bar at top of map */}
      {isAutoUpdating && (
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-slate-800/50 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 transition-all duration-1000 ease-linear"
            style={{ width: `${Math.max(0, Math.min(100, (1 - nextUpdateSeconds / 10) * 100))}%` }}
          />
        </div>
      )}

      {/* Google Maps View */}
      {apiKey ? (
        <APIProvider apiKey={apiKey} region="BR" language="pt-BR">
          <Map
            mapId="DEMO_MAP_ID"
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            defaultCenter={centerCoords}
            defaultZoom={12}
            mapTypeId={mapTypeId}
            gestureHandling="greedy"
            disableDefaultUI={false}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
            onCameraChanged={(ev: MapCameraChangedEvent) => {
              setZoomLevel(ev.detail.zoom);
            }}
          >
            <MapCameraController targetCity={currentCity} zoomLevel={12} />

            {/* Custom Nestim Advanced Marker */}
            <AdvancedMarker
              position={centerCoords}
              onClick={() => setShowInfoWindow(true)}
              title={`Nestim está em ${currentCity.name}`}
            >
              <div className="relative flex flex-col items-center cursor-pointer group">
                {/* Radar pulse ripples */}
                <div className="absolute -inset-4 bg-amber-400/25 rounded-full animate-ping pointer-events-none" />
                <div className="absolute -inset-2 bg-amber-500/35 rounded-full animate-pulse pointer-events-none" />

                {/* Avatar Pin Container */}
                <div className="relative z-10 w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-400 to-emerald-400 shadow-2xl ring-2 ring-slate-900 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                    <img
                      src={avatarUrl}
                      alt="Nestim"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}nestim_avatar.jpg`;
                      }}
                    />
                  </div>
                  {/* Floating coffee/cheese mini badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-amber-400 flex items-center justify-center text-[10px] shadow">
                    🧀
                  </div>
                </div>

                {/* Pin pointer tip triangle */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-500 drop-shadow -mt-0.5" />

                {/* Ground shadow */}
                <div className="w-8 h-2 bg-black/40 rounded-full blur-[2px] mt-0.5" />
              </div>
            </AdvancedMarker>

            {/* Live Interactive InfoWindow */}
            {showInfoWindow && (
              <InfoWindow
                position={centerCoords}
                onCloseClick={() => setShowInfoWindow(false)}
                pixelOffset={[0, -56]}
              >
                <div className="p-1 max-w-[260px] text-slate-800 font-sans">
                  <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-200">
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-amber-500">
                      <img
                        src={avatarUrl}
                        alt="Nestim"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Nestim está em {currentCity.name}!
                      </h4>
                      <p className="text-[10px] text-amber-700 font-medium">
                        {currentCity.tag}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-700 leading-snug mb-2 font-normal">
                    "{currentCity.activity}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] bg-slate-100 rounded-lg p-1.5 text-slate-600">
                    <span className="font-semibold text-slate-700">🍽️ Petisco:</span>
                    <span className="truncate ml-1 text-slate-800">{currentCity.typicalFood}</span>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      ) : (
        /* Fallback if API Key not present */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-slate-300">
          <MapPin className="w-12 h-12 text-amber-400 mb-3 animate-bounce" />
          <h3 className="text-lg font-bold text-white mb-2">Google Maps não inicializado</h3>
          <p className="text-sm text-slate-400 max-w-md">
            Chave da API do Google Maps não configurada no ambiente. Adicione a chave para visualizar o mapa interativo.
          </p>
        </div>
      )}

      {/* Bottom overlay with quick stats */}
      <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-2">
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl px-3.5 py-2 text-xs text-slate-300 shadow-xl flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-medium text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            {currentCity.altitude} de altitude
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span className="text-slate-300">
            {currentCity.distanceFromBH}
          </span>
        </div>

        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl px-3.5 py-2 text-xs text-slate-300 shadow-xl flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Coordenadas: <code className="text-amber-300 font-mono text-[11px]">{currentCity.lat.toFixed(4)}, {currentCity.lng.toFixed(4)}</code></span>
        </div>
      </div>
    </div>
  );
};
