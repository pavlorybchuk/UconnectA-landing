export function TopBanner() {
  return `<!-- Top Banner -->
    <div
      id="promo-banner"
      class="w-full bg-[#FFAD00] text-black py-2 px-4 text-center text-sm font-semibold flex justify-center items-center gap-4 z-50 relative section-clickable"
    >
      <span contenteditable="false"
        >Новий рівень безпеки на дорозі. Отримай безкоштовний QR-код
        сьогодні!</span
      >
      <button
        class="bg-black text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors"
        contenteditable="false"
      >
        Отримати
      </button>
    </div>`;
}
