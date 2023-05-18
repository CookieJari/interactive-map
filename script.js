//put all areas of the map in an array
const areas = document.querySelectorAll("map area");
console.log(areas);

//give event listener to all the areas
for (let i = 0; i < areas.length; i++) {
  area = areas[i];
  //e passes the EVENT
  area.addEventListener("mouseover", (e) => hover(e));
  area.addEventListener("mouseleave", (e) => exit(e));
}

function hover(e) {
  //e.target gets the element where the event was fired
  //I use .title bc title is what defines each <area>
  console.log(e.target.title);
}

function exit(e) {
  //do the same but for when the mous exits the element
  console.log("EXIT " + e.target.title);
}
