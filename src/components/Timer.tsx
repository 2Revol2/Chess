import { useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface Props {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer = ({ currentPlayer, restart }: Props) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const [isStartTimer, setIsStartTimer] = useState(false);
  const timer = useRef<null | ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isStartTimer) {
      startTimer();
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [currentPlayer, isStartTimer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTime() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTime() {
    setWhiteTime((prev) => prev - 1);
  }
  function restartHandler() {
    setWhiteTime(300);
    setBlackTime(300);
    setIsStartTimer(false);
    restart();
  }
  function startHandler() {
    setIsStartTimer(true);
  }
  return (
    <div>
        <h2 className="timer">Таймер</h2>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
      <div className="button-wrapper">
        <button className="start-btn" onClick={startHandler}>Начать</button>
        <button className="restart-btn" onClick={restartHandler}>Рестарт</button>
      </div>
    </div>
  );
};
