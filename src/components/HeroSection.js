import imageUrl from './../assets/chat_image.png';

export function HeroSection() {
  return `
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
              <img src="${imageUrl}" alt="Chat image" class="w-full rounded-[28px]">
            </div>
          </div>

        </div>
      </div>
    </section>`;
}
