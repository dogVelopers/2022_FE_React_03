function Clock() {
  const clock = document.querySelector<HTMLSpanElement>(".clock");

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = String(currentTime.getMinutes()).padStart(2, "0");
  const currentSecond = String(currentTime.getSeconds()).padStart(2, "0");

  if (clock) {
    clock.innerText = `${currentHour} : ${currentMinutes} : ${currentSecond}`;
  }
  setInterval(Clock);

  return (
    <>
      <span className="clock">00 : 00 : 00</span>
    </>
  );
}

export default Clock;