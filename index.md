---
layout: default
title: My Technology Radar
---

# 🌐 My Technology Radar

> Inspired by ThoughtWorks' Radar — personalized for learning, tracking, and applying tech.

---

## 📊 Quadrants

- **Techniques**
- **Tools**
- **Platforms**
- **Languages & Frameworks**

---

## 🏹 Rings

| Ring | Meaning |
|------|---------|
| ✅ **Adopt** | I use it regularly and recommend it. |
| 🧪 **Trial** | Actively experimenting with it in projects. |
| 🔬 **Assess** | On my radar, learning/researching. |
| ⚠️ **Hold** | Avoid for now or replace if used. |

---

## 🔄 Change Log

| Date | Tech | From → To | Reason |
|------|------|-----------|--------|
| 2025-07-26 | Astro | Assess → Trial | Static sites, better dev experience than Next.js. |
| 2025-07-18 | Docker Compose | Adopt → Hold | Switched to Kubernetes for dev parity. |

---

## 🧠 Techniques

### ✅ Test-Driven Development (TDD)
- **Why**: Leads to modular, testable code.
- **Where Used**: Rust CLI tools, backend APIs.

---

## 🛠️ Tools

### ✅ Obsidian
- **Why**: Personal knowledge management.
- **Use**: Notes, journaling, daily review.

### 🧪 Zed Editor
- **Why**: Native Rust performance, collaborative.

---

## 🖥️ Platforms

### 🔬 K3s (Lightweight Kubernetes)
- **Why**: Ideal for edge computing and IoT.

---

## 💻 Languages & Frameworks

### ✅ Rust
- **Use**: Systems programming, WebAssembly.

### 🧪 Svelte
- **Use Case**: Fast dashboards, low-bundle UIs.

---

## 🗂️ Archive

| Tech | Why Dropped |
|------|-------------|
| Jenkins | Replaced with GitHub Actions. |
| Backbone.js | Legacy, no longer maintained. |
---

## 🧭 Interactive Radar Map

<div id="radar" style="margin-top: 2rem;"></div>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="/assets/radar-data.js"></script>
<script src="/assets/radar.js"></script>