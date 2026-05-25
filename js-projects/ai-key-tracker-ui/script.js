const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
      <div class="label">event.key</div>
      <div class="value">
        ${event.key === " " ? "Space" : event.key}
      </div>
    </div>

    <div class="key">
      <div class="label">event.keyCode</div>
      <div class="value">
        ${event.keyCode}
      </div>
    </div>

    <div class="key">
      <div class="label">event.code</div>
      <div class="value">
        ${event.code}
      </div>
    </div>
  `;
});