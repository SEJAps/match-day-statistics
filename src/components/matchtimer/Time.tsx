import React, { useState, useEffect } from 'react';
import currentTimeCSS from './currentTime.module.css';
const TIMER_KEY = 'timer_end';
const SCHEDULED_MS = 45 * 60 * 1000; // 45 minutes in ms

interface Time {
    hours: string;
    minutes: string;
    seconds: string;
}

const CurrentTime: React.FC = () => {
    const [time, setTime] = useState<Time>({ hours: '00', minutes: '00', seconds: '00' });
    const [remaining, setRemaining] = useState<number | null>(null);
    const [paused, setPaused] = useState(false);
    const [pausedRemaining, setPausedRemaining] = useState<number | null>(null);

    // Actualiza la hora actual
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        setTime({ hours, minutes, seconds });
    };

    // Actualiza el tiempo restante (puede ser negativo cuando excede)
    const updateRemaining = () => {
        if (paused) return;
        const endStr = localStorage.getItem(TIMER_KEY);
        if (endStr) {
            const endTime = new Date(endStr).getTime();
            const now = Date.now();
            setRemaining(endTime - now);
        } else {
            setRemaining(null);
        }
    };

    // Inicia el contador de 45 minutos
    const startTimer = () => {
        const end = new Date(Date.now() + SCHEDULED_MS);
        localStorage.setItem(TIMER_KEY, end.toISOString());
        setPaused(false);
        setPausedRemaining(null);
        setRemaining(SCHEDULED_MS);
    };

    // Pausa el contador
    const pauseTimer = () => {
        if (remaining !== null) {
            setPaused(true);
            setPausedRemaining(remaining);
            localStorage.removeItem(TIMER_KEY);
        }
    };

    // Reanuda el contador
    const resumeTimer = () => {
        if (pausedRemaining !== null) {
            const end = new Date(Date.now() + pausedRemaining);
            localStorage.setItem(TIMER_KEY, end.toISOString());
            setPaused(false);
            setPausedRemaining(null);
        }
    };

    // Resetea el temporizador
    const resetTimer = () => {
        localStorage.removeItem(TIMER_KEY);
        setPaused(false);
        setPausedRemaining(null);
        setRemaining(null);
    };

    // Formatea milisegundos a mm:ss
    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(Math.abs(ms) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        updateTime();
        updateRemaining();
        const intervalId = setInterval(() => {
            updateTime();
            updateRemaining();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [paused]);

    return (
        <div className={currentTimeCSS.container}>
            <div className="text-2xl">
                Hora actual: {time.hours}:{time.minutes}:{time.seconds}
            </div>

            {/* Sin temporizador */}
            {remaining === null ? (
                <button
                    onClick={startTimer}
                    className={currentTimeCSS.start}
                >
                    Iniciar 45´
                </button>
            ) : (
                <>
                    {/* Contador activo */}
                    {!paused && remaining !== null && remaining >= 0 && (
                        <div className={currentTimeCSS.item}>
                            <span className="text-xl">Tiempo restante: {formatTime(remaining)}</span>
                            <button
                                onClick={pauseTimer}
                                className={currentTimeCSS.pause}
                            >
                                Pausar
                            </button>
                        </div>
                    )}

                    {/* Contador en tiempo extra */}
                    {!paused && remaining !== null && remaining < 0 && (
                        <div className={currentTimeCSS.item}>
                            <div className="text-xl text-orange-500">
                                Tiempo cumplido: {formatTime(SCHEDULED_MS)}
                            </div>
                            <div className="text-xl text-red-500">
                                Tiempo extra: {formatTime(remaining)}
                            </div>
                            <button
                                onClick={resetTimer}
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg mt-2"
                            >
                                Finalizar y resetear
                            </button>
                        </div>
                    )}

                    {/* Pausado */}
                    {paused && pausedRemaining !== null && (
                        <div className={currentTimeCSS.item}>
                            <span className="text-xl">Pausado: {formatTime(pausedRemaining)}</span>
                            <button
                                onClick={resumeTimer}
                                className={currentTimeCSS.resumeTimer}
                            >
                                Reanudar
                            </button>
                            <button
                                onClick={resetTimer}
                                className={currentTimeCSS.resetTimer}
                            >
                                Resetear
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CurrentTime;
