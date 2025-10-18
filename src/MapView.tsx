import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function GeoJsonLayer() {
  const map = useMap();
  useEffect(() => {
    fetch("/Crashspot-frontend/data/crashes.geojson")
      .then(r => r.json())
      .then(geojson => {
        const layer = L.geoJSON(geojson, {
          pointToLayer: (f, latlng) => L.marker(latlng, { icon }),
          onEachFeature: (feature, layer) => {
            const { id, date, severity } = feature.properties || {};
            layer.bindPopup(
              `<b>Crash</b><br/>ID: ${id ?? "–"}<br/>Date: ${date ?? "–"}<br/>Severity: ${severity ?? "–"}`
            );
          }
        }).addTo(map);
        try { map.fitBounds(layer.getBounds()); } catch {}
        return () => { map.removeLayer(layer); };
      });
  }, [map]);
  return null;
}

export default function MapView() {
  const center: [number, number] = [32.5093, -92.1193];
  return (
    <div style={{ height: "70vh", width: "100%", borderRadius: 12, overflow: "hidden" }}>
      <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution="&copy; OpenStreetMap contributors" />
        <GeoJsonLayer />
      </MapContainer>
    </div>
  );
}
