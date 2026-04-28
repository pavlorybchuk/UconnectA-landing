import iconUrl from '../assets/icon.png';
import { downloadApk } from '../download_apk';

export function Header() {
  return `<!-- Header -->
    <header
      id="header"
      class="w-full fixed top-10 left-0 right-0 z-40 glass-panel border-b-0 transition-all duration-300 section-clickable"
    >
      <div
        class="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
        <img src="${iconUrl}" alt="Logo" width="32px" class="aspect-square" />
          <span
            class="text-xl font-bold tracking-tight text-white"
            contenteditable="false"
            >Uconnect<span class="text-brand-accent" contenteditable="false"
              >A</span
            ></span
          >
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <a
            href="#how-it-works"
            class="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            contenteditable="false"
            >Як це працює</a
          >
          <a
            href="#benefits"
            class="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            contenteditable="false"
            >Переваги</a
          >
          <a
            href="#use-cases"
            class="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            contenteditable="false"
            >Кейси</a
          >
          <a
            href="#qr-concept"
            class="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            contenteditable="false"
            >QR-код</a
          >
        </nav>

        <div class="flex items-center gap-4">
          <a
            href="#"
            class="hidden md:block text-sm font-medium text-white hover:text-brand-accent transition-colors"
            contenteditable="false"
            >Увійти</a
          >
          <button
            class="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-glow flex items-center gap-2"
          >
            <span contenteditable="false">Завантажити</span>
          </button>
        </div>
      </div>
    </header>`;
}
