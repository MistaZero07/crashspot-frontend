import MapView from "./MapView";

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "3rem auto", padding: "0 1rem" }}>
      <h1>🚗 Crashspot Web App</h1>
      <p>Interactive crash visualization (starter).</p>
      <MapView />
    </div>
  );
}
