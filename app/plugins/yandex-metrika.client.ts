declare global {
  interface Window {
    ym: any;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === 'production') {
    // Используем более агрессивную задержку для улучшения метрик производительности
    const loadMetrika = () => {
      if (!document.getElementById('yandex-metrika')) {
        const script = document.createElement('script');
        // Используем локальный прокси для кеширования
        script.src = '/api/proxy/metrika';
        script.async = true;
        script.defer = true;
        script.id = 'yandex-metrika';

        document.head.appendChild(script);

        // Инициализируем ym функцию
        window.ym =
          window.ym ||
          function (...args: any[]) {
            (window.ym.a = window.ym.a || []).push(args);
          };
        window.ym.l = Date.now();

        // Инициализация метрики после загрузки скрипта
        script.onload = () => {
          window.ym(93029202, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
        };
      }
    };

    // Загружаем метрику только после полной загрузки страницы
    if (document.readyState === 'complete') {
      setTimeout(loadMetrika, 3000); // 3 секунды задержки
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadMetrika, 3000);
      });
    }
  }
});
