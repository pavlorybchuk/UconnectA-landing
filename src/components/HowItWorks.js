export function HowItWorks() {
  return `
    <section
      id="how-it-works"
      class="py-16 sm:py-24 bg-brand-darker relative section-clickable"
    >
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" contenteditable="false">
            Як це працює
          </h2>
          <p class="text-lg sm:text-xl text-gray-400" contenteditable="false">
            Всього кілька кроків для швидкого зв'язку з будь-яким водієм.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div class="glass-panel p-6 sm:p-8 rounded-[24px] relative group hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/50 transition-colors">
              <i class="text-2xl text-white group-hover:text-brand-accent transition-colors" data-fa-i2svg=""><svg class="svg-inline--fa fa-qrcode" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="qrcode" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"></path></svg></i>
            </div>
            <div class="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl font-black text-white/5" contenteditable="false">01</div>
            <h3 class="text-xl font-bold mb-3 sm:mb-4 text-white" contenteditable="false">Завантаження</h3>
            <p class="text-gray-400 text-sm leading-relaxed" contenteditable="false">Скануй QR-код на лобовому склі та завантажуй додаток</p>
          </div>

          <div class="glass-panel p-6 sm:p-8 rounded-[24px] relative group hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:bg-brand-blue/20 group-hover:border-brand-blue/50 transition-colors">
              <i class="text-2xl text-white group-hover:text-brand-blue transition-colors" data-fa-i2svg=""><svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></i>
            </div>
            <div class="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl font-black text-white/5" contenteditable="false">02</div>
            <h3 class="text-xl font-bold mb-3 sm:mb-4 text-white" contenteditable="false">Пошук водія</h3>
            <p class="text-gray-400 text-sm leading-relaxed" contenteditable="false">Наш алгоритм миттєво знаходить зареєстрованого водія за номером авто.</p>
          </div>

          <div class="glass-panel p-6 sm:p-8 rounded-[24px] relative group hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:bg-[#FFAD00]/20 group-hover:border-[#FFAD00]/50 transition-colors">
              <i class="text-2xl text-white group-hover:text-[#FFAD00] transition-colors" data-fa-i2svg=""><svg class="svg-inline--fa fa-comments" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path></svg></i>
            </div>
            <div class="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl font-black text-white/5" contenteditable="false">03</div>
            <h3 class="text-xl font-bold mb-3 sm:mb-4 text-white" contenteditable="false">Початок розмови</h3>
            <p class="text-gray-400 text-sm leading-relaxed" contenteditable="false">Вибери зручний канал зв'язку: захищений внутрішній чат, анонімний дзвінок або email.</p>
          </div>

          <div class="glass-panel p-6 sm:p-8 rounded-[24px] relative group hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/50 transition-colors">
              <i class="text-2xl text-white group-hover:text-brand-accent transition-colors" data-fa-i2svg=""><svg class="svg-inline--fa fa-user-shield" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"></path></svg></i>
            </div>
            <div class="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl font-black text-white/5" contenteditable="false">04</div>
            <h3 class="text-xl font-bold mb-3 sm:mb-4 text-white" contenteditable="false">Спілкуйся безпечно</h3>
            <p class="text-gray-400 text-sm leading-relaxed" contenteditable="false">Вирішуй питання швидко, при цьому твої особисті дані залишаються повністю прихованими.</p>
          </div>
        </div>
      </div>
    </section>`;
}
