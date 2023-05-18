//put all areas of the map in an array
const areas = document.querySelectorAll("map area");
console.log(areas);

const img = document.getElementsByClassName("image-container")[0];
console.log(img);

const title = document.querySelectorAll(".title-container >h2")[0];
console.log(title);

const desc = document.querySelectorAll(".desc-container>p")[0];
console.log(desc);

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
  img.classList.add(e.target.title);
  console.log(e.target.title);

  switch(e.target.title){
    case "chapel":
      title.textContent = "Chapel";
      desc.textContent = "This is where PUPians go to say their prayers";
      break;

    case "oval":
      title.textContent = "PUP Oval";
      desc.textContent = "Football field that is unfriendly to play football";
      break;

    case "main":
      title.textContent = "Main Building";
      desc.textContent = "The hot and humid study rooms of the PUPian student";
      break;

    case "pool":
      title.textContent = "Swimming Pool";
      desc.textContent = "Swimming pool for... swimming. I have never used this TBH";
      break;

    case "canteen":
      title.textContent = "Canteen";
      desc.textContent = "Canteen where the students eat. Walk a few steps towards the rive and you will smell smoke and the unforgetable scent of the Pasig river 🥰 ";
      break;

    case "charlie":
      title.textContent = "Charlie Del Rosario Bldg.";
      desc.textContent = "Haunted house 👻 lookin ahhh building. I heard its important though ";
      break;
    
    case "lagoon":
      title.textContent = "Lagoon";
      desc.textContent = "Ahhhh Gooo lagooon 🧽 This is where students go to relax and eat lunch.";
      break;

    case "lab-high":
      title.textContent = "Laboratory High";
      desc.textContent = "Students are taught in a laboratory in High School";
      break;

    case "freedom-park":
      title.textContent = "Freedom Parm";
      desc.textContent = "Freedom park where PUPian dances and trains arnis. PUPIAN KALAYAAN! RRAAAAHHH!!! 🦅";
      break;

    case "pylon":
      title.textContent = "Pylon";
      desc.textContent = "THE Pylon. It is a symbol for PUP. It is THE landmark for PUP. (not to be confused with Pylon run)";
      break;

  }
}

function exit(e) {
  //do the same but for when the mous exits the element
  img.classList.remove(e.target.title);
  title.textContent= "Hover";
  desc.textContent = "Hover over a place to see it in more detail"
  console.log("EXIT " + e.target.title);
}
