const map = document.getElementById("map");
console.log(map);

const areas = document.querySelectorAll("map area");
console.log(areas);

for (let i = 0; i < areas.length; i++) {
  area = areas[i];
  area.addEventListener("mouseover", (e) => hover(e));
}

function hover(e) {
  console.log(e.target.title);
}
