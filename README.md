# 🌌 Black Hole Simulation

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://pankajtiwari-art.github.io/Blackhole/)

A mesmerizing, high-performance visual black hole simulation built entirely from scratch using **HTML5, CSS3, and Vanilla JavaScript**. 

This project renders hundreds of glowing particles orbiting a central event horizon, creating the stunning illusion of an accretion disk around a supermassive black hole. Powered by the **HTML5 Canvas API**, the simulation uses advanced layered rendering, trigonometry, and procedural animation to create depth, motion trails, and a realistic cosmic glow—all without the need for external libraries like Three.js.

---

## 🔗 Live Preview

Experience the simulation directly in your browser:  
👉 **[Click here to view the Live Demo](https://pankajtiwari-art.github.io/Blackhole/)**

---

## ✨ Key Features

* **Procedural Particle System:** Hundreds of autonomous particles generated and animated dynamically using JavaScript.
* **Realistic Accretion Disk:** Simulates matter spiraling around a gravitational singularity using elliptical orbital math.
* **Depth Illusion (Z-Sorting):** Particles are strategically drawn on different canvas layers depending on their orbital angle, creating the illusion that particles pass both *in front of* and *behind* the black hole.
* **Dynamic Motion Trails:** Particles store their previous positions to render fading trails, simulating the high-velocity blur of cosmic dust.
* **Zero Dependencies:** Built entirely with pure Vanilla JS, ensuring lightweight and fast execution.
* **Fluid Animation:** Utilizes `requestAnimationFrame` for a smooth, screen-synced 60FPS render cycle.
* **Fully Responsive:** The canvas automatically recalculates and adapts to any screen size or window resize event.

---

## 🛠️ Technologies Used

* **HTML5:** Structure and Canvas element rendering.
* **CSS3:** Styling, layout, and pitch-black cosmic background integration.
* **JavaScript (Vanilla):** Core logic, particle physics, mathematics (Trigonometry), and Canvas 2D Context API manipulation.

---

## 🧠 How It Works (Under the Hood)

At its core, the simulation relies on simple but powerful mathematics:

1.  **Particle Kinematics:** Each particle is initialized with a random radius, angle, and speed. Using sine and cosine functions, the polar coordinates are converted to Cartesian coordinates `(x, y)` to map their elliptical orbits around the center.
2.  **Trail Generation:** Instead of clearing the entire canvas every frame, a semi-transparent black rectangle is drawn over the previous frame (`ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'`). This creates the fading "glow" and motion trail effect.
3.  **Layered Rendering:** To create 3D depth on a 2D canvas, the script continuously checks the particle's angle. If the particle is in the "back" half of its orbit, it is rendered first. The black hole's event horizon is rendered next, followed by the particles in the "front" half of the orbit.

---

## 🚀 Getting Started (Run Locally)

Want to explore or modify the code on your local machine? Follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/PankajTiwari-Art/Blackhole.git](https://github.com/PankajTiwari-Art/Blackhole.git)
2. **Navigate to the project directory:**
   ```bash
   cd Blackhole
3. **Run the project:**
   Simply open the index.html file in your preferred web browser. No local server or build tools are required!

---
## Future Enhancements

* [ ] Add interactive mouse/touch controls to distort gravity.
* [ ] Implement dynamic color palettes based on particle temperature/speed.
* [ ] Add a gravitational lensing effect using advanced canvas pixel manipulation.
---
## Author
Pankaj Tiwari
* GitHub: @PankajTiwari-Art
