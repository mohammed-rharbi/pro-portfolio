# Mohammed Rharbi - Full Stack Developer Portfolio

A modern, high-performance portfolio website built with **Next.js 15** and **Tailwind CSS**. Designed to showcase projects, skills, and professional experience with a clean aesthetic and smooth animations.

## 🚀 Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</div>

## ✨ Features

- **⚡ Modern Architecture**: Powered by Next.js 15 (App Router) and React 19.
- **🎨 Stunning Design**: Custom UI components styled with Tailwind CSS v4.
- **🎭 Smooth Animations**: Engaging transitions and scroll effects using Framer Motion.
- **📱 Fully Responsive**: Flawless experience across all screen sizes.
- **📧 Working Contact Form**: Integrated with Nodemailer for real-time email delivery.
- **❓ FAQ Section**: Accordion-style FAQ for common queries.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammed-rharbi/pro-portfolio.git
   cd pro-portfolio/mohammed-rharbi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your email credentials (required for the contact form):
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/
│   ├── actions/       # Server actions (e.g., email sending)
│   ├── components/    # Reusable UI components (Hero, About, Projects, etc.)
│   ├── fonts/         # Custom fonts
│   ├── globals.css    # Global styles and Tailwind directives
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main landing page
├── services/          # Data services (e.g., FAQ data)
└── ...
```

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/mohammed-rharbi">Mohammed Rharbi</a>
</div>
