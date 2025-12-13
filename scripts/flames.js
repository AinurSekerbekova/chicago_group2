
(function() {
    const overlay = document.getElementById('dialogue-overlay');
    if (!overlay) return;

    const minInterval = 120;
    const maxInterval = 500;
    const minSize = 2;
    const maxSize = 8;

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function spawnSpark() {
        // не создаём, если оверлей скрыт
        if (overlay.classList.contains('d-none')) return;

        const s = document.createElement('div');
        s.className = 'spark';

        const size = Math.round(rand(minSize, maxSize));
        s.style.width = size + 'px';
        s.style.height = size + 'px';

        // случайная горизонтальная позиция в пределах 10..90% (чтобы не вылезало за край)
        const leftPct = Math.round(rand(8, 92));
        s.style.left = leftPct + '%';

        // тоновая палитра: центр светло-жёлтый -> краешки оранжевый
        s.style.background = 'radial-gradient(circle at 30% 30%, #ffc2a1 0%, #fa6d46 40%, rgba(255,140,30,0.9) 70%, transparent 100%)';
        s.style.boxShadow = '0 0 ' + (size * 0.6) + 'px rgba(181,76,2,0.7)';

        // случайное смещение по X и вращение
        const dx = Math.round(rand(-40, 40));
        const rot = Math.round(rand(-90, 90));
        s.style.setProperty('--dx', dx + 'px');
        s.style.setProperty('--rot', rot + 'deg');

        // случайная длительность для естественности
        const dur = rand(1300, 2500);
        s.style.animationDuration = dur + 'ms';

        overlay.appendChild(s);

        // удалить элемент по окончании анимации
        s.addEventListener('animationend', () => {
            if (s.parentNode) s.parentNode.removeChild(s);
        }, { once: true });
    }

    // таймер-спавнер с небольшими случайными паузами
    let spawning = true;
    (function loop() {
        if (spawning) spawnSpark();
        const next = Math.round(rand(minInterval, maxInterval));
        setTimeout(loop, next);
    })();

    // опционально: при скрытии оверлея чистим старые искры
    const observer = new MutationObserver(() => {
        if (overlay.classList.contains('d-none')) {
            overlay.querySelectorAll('.spark').forEach(el => el.remove());
        }
    });
    observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });
})();

const fireSound = document.getElementById("fireSound");
// Попытка автозапуска при загрузке страницы
window.addEventListener("load", () => {
    const playPromise = fireSound.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Автозапуск заблокирован, ждем взаимодействия");
        });
    }
});

// Запуск при первом взаимодействии пользователя
const startSound = () => {
    fireSound.play();
    document.removeEventListener("click", startSound);
    document.removeEventListener("keydown", startSound);
};

document.addEventListener("click", startSound);
document.addEventListener("keydown", startSound);

// Остановка при уходе со страницы
window.addEventListener("beforeunload", () => {
    fireSound.pause();
    fireSound.currentTime = 0;
});