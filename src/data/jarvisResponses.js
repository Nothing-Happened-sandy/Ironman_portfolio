export const jarvisQuickPrompts = [
  { label: "Status Report", command: "status report", text: "J.A.R.V.I.S., give me a full system status report." },
  { label: "Armor Mark 85", command: "mark 85", text: "Tell me about the Mark 85 nano suit." },
  { label: "Test Repulsors", command: "test repulsors", text: "Initiate repulsor capacitor charge sequence." },
  { label: "Arc Reactor Specs", command: "arc reactor", text: "What is current Arc Reactor output?" },
  { label: "Protocol House Party", command: "house party", text: "Activate Protocol House Party." },
  { label: "Time Travel GPS", command: "time travel", text: "Explain how you solved time travel." },
  { label: "Who is Tony Stark?", command: "who is tony", text: "Give me Tony Stark's dossier." }
];

export function getJarvisResponse(query) {
  const q = query.toLowerCase().trim();

  if (q.includes("status") || q.includes("diagnostic") || q.includes("system")) {
    return {
      text: "All primary systems are operating at peak efficiency, sir. Arc Reactor core temperature is steady at 3,200 Kelvin, power output is at 100% capacity with 3.2 gigawatts continuous yield. Perimeter defenses are fully operational.",
      audioText: "All primary systems operating at peak efficiency, sir. Arc Reactor power output is at 100 percent. Perimeter defenses are secure.",
      sound: "reactor"
    };
  }

  if (q.includes("85") || q.includes("mark 85") || q.includes("endgame")) {
    return {
      text: "Mark LXXXV represents the apex of your engineering career, Mr. Stark. Incorporating smart fluid nanotechnology, enhanced with vibranium matrix reinforcement. Capable of withstanding gamma-level cosmic energy discharges.",
      audioText: "Mark 85 represents the apex of your engineering career, sir. Fluid nanotechnology with vibranium matrix reinforcement.",
      sound: "target"
    };
  }

  if (q.includes("repulsor") || q.includes("fire") || q.includes("shoot") || q.includes("test")) {
    return {
      text: "Repulsor capacitors at 100% charge. High-frequency plasma ionization channels aligned. Targeting reticle calibrated. Firing on your command, sir.",
      audioText: "Repulsor capacitors charged and aligned, sir. Ready to fire on your mark.",
      sound: "repulsor"
    };
  }

  if (q.includes("arc") || q.includes("reactor") || q.includes("power") || q.includes("energy")) {
    return {
      text: "The Arc Reactor is currently generating 3.2 gigawatts per second with zero carbon emission. Magnetic containment toroids are stabilizing at 99.98% efficiency. Enough energy to power Stark Tower and three municipal districts.",
      audioText: "The Arc Reactor is generating 3.2 gigawatts per second with zero emission. Containment fields are stable.",
      sound: "reactor"
    };
  }

  if (q.includes("house party") || q.includes("protocol")) {
    return {
      text: "Protocol House Party standby sequence activated. 34 remote combat chassis detected in the subterranean vault. Awaiting your voice authorization code to scramble all units, Mr. Stark.",
      audioText: "Protocol House Party activated, sir. 34 armors on standby. Awaiting your authorization to scramble all units.",
      sound: "armor"
    };
  }

  if (q.includes("time") || q.includes("gps") || q.includes("quantum")) {
    return {
      text: "As you deduced in 2023, sir: by inverting the eigenvalue and applying a Möbius strip topology inside the quantum manifold, chronal navigation without quantum decoherence became mathematically reproducible.",
      audioText: "Eigenvalue inverted, sir. Applying Möbius strip quantum topology successfully eliminated temporal decoherence.",
      sound: "target"
    };
  }

  if (q.includes("who") || q.includes("tony") || q.includes("stark") || q.includes("bio")) {
    return {
      text: "Anthony Edward Stark: Master of Science from MIT at age 19, inventor of the clean Arc Reactor, leader of Stark Industries, and Earth's chief armored Avenger. Genius, billionaire, playboy, philanthropist.",
      audioText: "Anthony Edward Stark. MIT graduate at 19, inventor of the Arc Reactor, and founding member of the Avengers.",
      sound: "beep"
    };
  }

  if (q.includes("switch") || q.includes("iron man") || q.includes("transform") || q.includes("suit up")) {
    return {
      text: "Suit deployment protocol ready. Click the Arc Reactor toggle in the navigation header to toggle between Stark Industries Executive portal and Iron Man Combat HUD.",
      audioText: "Suit deployment protocol ready, sir. Click the Arc Reactor to initiate full armor transformation.",
      sound: "armor"
    };
  }

  // Default intelligent response
  return {
    text: `Processing query: "${query}". Analysis indicates optimal operational efficiency. Always at your service, Mr. Stark. Would you like to inspect the Hall of Armor or test the repulsor telemetry?`,
    audioText: `Processing request. All systems at your service, Mr. Stark.`,
    sound: "beep"
  };
}
