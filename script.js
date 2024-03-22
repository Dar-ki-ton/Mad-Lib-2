// Mad Lib with Javascript

// Event Listener
document.getElementById("btn").addEventListener("click", madLib);

// Event Function
function madLib() {
  // Input
  let pluralNoun = document.getElementById("plural").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  // Process
  let result = `"There are too many ${pluralNoun} on this ${adjective} 
airplane!", I screamed. "Somebody has to ${verb}
on the ${noun} to solve this problem." Meanwhile one of the passengers named
${name} tells the pilots to land in ${city}`;

  // Output
  document.getElementById("result").innerHTML = result;

  document.getElementById("result").style.fontFamily = "Arial";
  document.getElementById("result").style.fontWeight = "normal";
  document.getElementById("result").style.border = "2px solid orange";
  document.documentElement.style.background =
    "url('images/plane.jpg') no-repeat";
  document.documentElement.style.backgroundSize = "cover";
}

document.getElementById("btn2").addEventListener("click", madLib2);

function madLib2() {
  let pluralNoun = document.getElementById("plural").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  let result2 = `This particular ${noun} was first discovered in an unusual place among 
  the ${pluralNoun}. The people behind it in ${city} have to ${verb} their best efforts 
  into reseach. And we have one of the people, ${name}, behind this ${adjective} work.`;

  document.getElementById("result").innerHTML = result2;

  document.getElementById("result").style.fontFamily = "Courier New";
  document.getElementById("result").style.fontWeight = "bold";
  document.getElementById("result").style.border = "5px solid purple";
  document.documentElement.style.background =
    "url('images/discovery.jpg') no-repeat";
  document.documentElement.style.backgroundSize = "cover";
}
