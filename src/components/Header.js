import iconUrl from "../assets/icon.png";
import { downloadApk } from "../download_apk";

export function Header() {
  return `
    <header
      id="header"
      class="w-full fixed top-0 left-0 right-0 z-40 glass-panel border-b-0 transition-all duration-300 section-clickable"
    >
      <div
        class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <img src="${iconUrl}" alt="Logo" width="32px" class="aspect-square" />
          <span class="text-xl font-bold tracking-tight text-white" contenteditable="false"
            >Uconnect<span class="text-brand-accent" contenteditable="false">A</span></span>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <a href="#how-it-works" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Як це працює</a>
          <a href="#benefits" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Переваги</a>
          <a href="#use-cases" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Кейси</a>
          <a href="#qr-concept" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">QR-код</a>
        </nav>


          <button
            aria-label="Toggle menu"
            id="mobile-menu-btn"
            class="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/10 transition-colors"
          >
            <span class="block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center" id="ham-line-1"></span>
            <span class="block w-5 h-0.5 bg-white rounded transition-all duration-300" id="ham-line-2"></span>
            <span class="block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center" id="ham-line-3"></span>
          </button>
      </div>

      <div
        id="mobile-nav"
        class="lg:hidden overflow-hidden border-t border-white/10"
        style="max-height: 0; transition: max-height 0.3s ease-in-out;"
      >
        <nav class="flex flex-col gap-1 px-4 py-4">
          <a href="#how-it-works" class="mobile-nav-link text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors px-3 py-2.5 rounded-lg" contenteditable="false">Як це працює</a>
          <a href="#benefits" class="mobile-nav-link text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors px-3 py-2.5 rounded-lg" contenteditable="false">Переваги</a>
          <a href="#use-cases" class="mobile-nav-link text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors px-3 py-2.5 rounded-lg" contenteditable="false">Кейси</a>
          <a href="#qr-concept" class="mobile-nav-link text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors px-3 py-2.5 rounded-lg" contenteditable="false">QR-код</a>
          <div class="border-t border-white/10 mt-2 pt-3">
            <a href="#" class="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors px-3 py-2.5 rounded-lg block" contenteditable="false">Увійти</a>
          </div>
        </nav>
      </div>
    </header>`;
}
