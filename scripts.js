let gamepadIndex = null;

window.addEventListener("gamepadconnected", (e) => {
    console.log( 
        "Gamepad connected at index %d: %s. %d buttons, %d axes.", 
        e.gamepad.index, 
        e.gamepad.id, 
        e.gamepad.buttons.length, 
        e.gamepad.axes.length, 
    );
  gamepadIndex = e.gamepad.index;
  document.getElementById("status").innerText = "Controle conectado";
});

window.addEventListener("gamepaddisconnected", (e) => {
    console.log( 
        "Gamepad disconnected from index %d: %s", 
        e.gamepad.index, 
        e.gamepad.id, 
    );
  gamepadIndex = null;
  document.getElementById("status").innerText = "Nenhum controle";
});

function loop() {
  if (gamepadIndex !== null) {
    const gp = navigator.getGamepads()[gamepadIndex];

    if (gp) {
      const x = gp.axes[0];
      const y = gp.axes[1];

      const dot = document.getElementById("dot");
      dot.style.left = (75 + x * 60) + "px";
      dot.style.top = (75 + y * 60) + "px";

    }
  }

  requestAnimationFrame(loop);
}

loop();