"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ZONES = [
  { name: "Quilmes", lat: -34.7205, lng: -58.2542 },
  { name: "Avellaneda", lat: -34.6626, lng: -58.3647 },
  { name: "Lomas de Zamora", lat: -34.7547, lng: -58.4044 },
  { name: "Banfield", lat: -34.7447, lng: -58.3908 },
  { name: "Adrogué", lat: -34.8005, lng: -58.3834 },
  { name: "Rafael Calzada", lat: -34.7833, lng: -58.3667 },
] as const;

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function ZonesMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const map = L.map(container, {
      center: [-34.75, -58.35],
      zoom: 11,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const bounds = L.latLngBounds(ZONES.map((z) => [z.lat, z.lng] as [number, number]));
    map.fitBounds(bounds.pad(0.15));

    ZONES.forEach((zone) => {
      const marker = L.marker([zone.lat, zone.lng], { icon: markerIcon }).addTo(map);
      marker.bindPopup(
        `<span class="font-semibold text-slate-800">${zone.name}</span><br><span class="text-sm text-slate-600">Zona de cobertura</span>`
      );
    });

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/5"
    />
  );
}
