(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/UconnectA-landing/assets/icon-t9sn9UIx.png`;function t(){let e=document.createElement(`a`);e.href=`./assets/app-release.apk`,e.download=`UconnectA.apk`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}function n(){return`
    <header
      id="header"
      class="w-full fixed top-0 left-0 right-0 z-40 glass-panel border-b-0 transition-all duration-300 section-clickable"
    >
      <div
        class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <img src="${e}" alt="Logo" width="32px" class="aspect-square" />
          <span class="text-xl font-bold tracking-tight text-white" contenteditable="false"
            >Uconnect<span class="text-brand-accent" contenteditable="false">A</span></span>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <a href="#how-it-works" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Як це працює</a>
          <a href="#benefits" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Переваги</a>
          <a href="#use-cases" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">Кейси</a>
          <a href="#qr-concept" class="text-sm font-medium text-gray-300 hover:text-white transition-colors" contenteditable="false">QR-код</a>
        </nav>

        <div class="hidden lg:flex items-center gap-4">
          <a href="#" class="text-sm font-medium text-white hover:text-brand-accent transition-colors" contenteditable="false">Увійти</a>
          <button
            class="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-glow flex items-center gap-2"
          >
            <span contenteditable="false">Завантажити</span>
          </button>
        </div>

        <div class="flex lg:hidden items-center gap-3">
          <button
            id="mobile-download-btn"
            class="bg-brand-accent hover:bg-brand-accentHover text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-glow"
          >
            <span contenteditable="false">Завантажити</span>
          </button>
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
    </header>`}function r(){return`
    <section
      id="hero"
      class="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark min-h-screen flex items-center section-clickable"
    >
      <div class="absolute inset-0 bg-grid opacity-20"></div>
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"
      ></div>

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div class="flex flex-col gap-6 sm:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0"
            >
              <span class="flex h-2 w-2 rounded-full bg-brand-accent relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              </span>
              <span class="text-xs font-medium text-gray-300 uppercase tracking-wider" contenteditable="false">Анонімна комунікація</span>
            </div>

            <h1
              class="text-3xl sm:text-4xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              contenteditable="false"
            >
              Зв'яжись з водієм <br />
              <span class="gradient-text" contenteditable="false">без особистих</span>
              <br />
              контактних даних
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0" contenteditable="false">
              Просто введи номер авто та почни безпечне та
              анонімне спілкування за лічені секунди.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                id="download-btn"
                class="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-[14px] text-base font-semibold transition-all shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <i class="text-xl text-brand-accent" data-fa-i2svg=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#FFF" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path fill="#FFF" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path fill="#FFF" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
</svg
                ></i>
                <div class="text-left leading-tight">
                  <div class="text-[10px] opacity-80" contenteditable="false">Завантажити на</div>
                  <div contenteditable="false">Android</div>
                </div>
              </button>
            </div>

            <div class="flex items-center gap-4 mt-4 pt-6 border-t border-white/10 justify-center lg:justify-start">
              <div class="flex -space-x-3">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" class="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />
                <div class="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-accent flex items-center justify-center text-xs font-bold text-white" contenteditable="false">+2k</div>
              </div>
              <div class="text-sm text-gray-400" contenteditable="false">
                <span class="text-white font-bold" contenteditable="false">4.9/5</span>
                рейтинг від водіїв
              </div>
            </div>
          </div>

          <div class="relative mx-auto lg:ml-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none">
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-brand-blue/20 rounded-[40px] transform rotate-3 blur-xl"></div>
            <div class="relative glass-panel rounded-[32px] p-2 shadow-2xl flex flex-col overflow-hidden border border-white/20">
              <img src="./src/assets/chat_image.png" alt="Chat image" class="w-full rounded-[28px]">
            </div>
          </div>

        </div>
      </div>
    </section>`}function i(){return`
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
    </section>`}function a(){return`
    <footer
      id="footer"
      class="bg-black pt-16 sm:pt-24 pb-10 sm:pb-12 border-t border-white/10 relative overflow-hidden section-clickable"
    >
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[min(1000px,100vw)] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          <div class="col-span-2 sm:col-span-2 lg:col-span-1">
            <div class="flex items-center gap-2 mb-4 sm:mb-6">
              <img src="${e}" alt="Logo" width="32px" class="aspect-square" />
              <span class="text-xl font-bold tracking-tight text-white" contenteditable="false"
                >Uconnect<span class="text-brand-accent" contenteditable="false">A</span></span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs" contenteditable="false">
              Революція в комунікації між водіями. Безпечно, швидко та повністю анонімно.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all"><i data-fa-i2svg=""><svg class="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all"><i data-fa-i2svg=""><svg class="svg-inline--fa fa-instagram" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></i></a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all"><i data-fa-i2svg=""><svg class="svg-inline--fa fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></i></a>
            </div>
          </div>

          <div>
            <h4 class="text-white font-bold mb-4 sm:mb-6" contenteditable="false">Продукт</h4>
            <ul class="space-y-3 sm:space-y-4">
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Як це працює</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Замовити QR</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Для бізнесу</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Ціни</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-bold mb-4 sm:mb-6" contenteditable="false">Компанія</h4>
            <ul class="space-y-3 sm:space-y-4">
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Про нас</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Блог</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Кар'єра</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-brand-accent transition-colors" contenteditable="false">Контакти</a></li>
            </ul>
          </div>

        </div>

        <div class="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500 text-center sm:text-left" contenteditable="false">
            © 2026 UconnectA. Всі права захищені.
          </p>
          <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-white transition-colors" contenteditable="false">Політика конфіденційності</a>
            <a href="#" class="text-sm text-gray-500 hover:text-white transition-colors" contenteditable="false">Умови використання</a>
          </div>
        </div>

      </div>
    </footer>`}document.querySelector(`#app`).innerHTML=`
    ${n()}
    ${r()}
    ${i()}
    ${a()}
`,document.querySelector(`#header .hidden.lg\\:flex button`)?.addEventListener(`click`,t),document.querySelector(`#mobile-download-btn`)?.addEventListener(`click`,t),document.querySelector(`#download-btn`)?.addEventListener(`click`,t);var o=document.querySelector(`#mobile-menu-btn`),s=document.querySelector(`#mobile-nav`);o&&s&&(o.addEventListener(`click`,()=>{s.style.maxHeight!==`0px`&&s.style.maxHeight!==``?(s.style.maxHeight=`0px`,o.setAttribute(`aria-expanded`,`false`)):(s.style.maxHeight=s.scrollHeight+`px`,o.setAttribute(`aria-expanded`,`true`))}),s.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{s.style.maxHeight=`0px`,o.setAttribute(`aria-expanded`,`false`)})}));