const picker = document.querySelectorAll('.jscolor')[0];
const liquid = document.querySelectorAll('#liquid path')[0];
const code = document.getElementsByTagName('h1')[0];

function onColorChange() {
  const col = picker.value;
  const name = ntc.name(col)[1];
  liquid.style.fill = `#${col}`;
  liquid.style.stroke = `#${col}`;

  code.innerHTML = col;
  console.log(name);
}

function keepPickerOpen() {
  picker.jscolor.show();
  const overlay = document.getElementById('picker');
}
