/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");
// console.log(`hi`);
// STEP 3a: Create the asynchronous function populate()
async function populate() {
  // Introducing JavaScript Object Notation (JSON): https://json.org/
  // STEP 4: Store the URL of a JSON file in a variable */
  const requestURL =
    "https://sahitya1707.github.io/COMP-1073---Javascript---Lesson--10/js/i-scream.json";
  // STEP 5: Use the new URL to create a new request object
  const request = new Request(requestURL);
  // STEP 6: Make a network request with the fetch() function, which returns a Response object
  const response = await fetch(request);
  console.log(response);

  // STEP 7: Capture the returned Response object and covert to a JSON object using json()
  const iScreen = await response.json();
  // STEP 8: Output the iScream JSON object to the console
  console.log(iScreen);
  // STEP 9a: Invoke the populateHeader function here, then build it below
  populateHeader(iScreen);

  // STEP 10a: Invoke the showTopFlavors function here, then build it below
  showTopFlavors(iScreen);
}
// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(json) {
  // Create the H1 element
  let headerH1 = document.createElement("H1");
  // Grab the company name from the JSON object and use it for the text node
  headerH1.textContent = json.companyName;
  // Inject the complete H1 element into the DOM, inside the HEADER
  header.appendChild(headerH1);
}
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
  // STEP 10c: Attache the JSON topFlavors object to a variable
  //let topFlavors = jsonObj.topFlavors;
  let topFlavors = jsonObj.topFlavors;

  // STEP 10d: Loop through the topFlavors object
  for (let i = 0; i < topFlavors.length; i++) {
    console.log(topFlavors[i]);
    // STEP 10e: build HTML elements for the content
    let article = document.createElement("article"),
      h2 = document.createElement("h2"),
      image = document.createElement("img"),
      ul = document.createElement("ul"),
      paragraphCalories = document.createElement("p"),
      paragraphType = document.createElement("p");

    // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
    h2.textContent = topFlavors[i].name;

    image.setAttribute("src", `images/${topFlavors[i].image}`);

    // lab
    paragraphCalories.textContent = `${topFlavors[i].calories} calories`;
    paragraphType.textContent = `Type: ${topFlavors[i].type} `;

    // STEP 10g: Build a loop for the ingredients array in the JSON
    // add the ingredient to the UL
    let ingredients = topFlavors[i].ingredients;

    ingredients.forEach((e) => {
      let listItem = document.createElement("li");
      listItem.textContent = e;

      // STEP 10h: Append each of the above HTML elements to the ARTICLE element
      ul.appendChild(listItem);
    });
    // STEP 10i: Append each complete ARTICLE element to the SECTION element
    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(ul);
    // lab
    article.appendChild(paragraphCalories);
    article.appendChild(paragraphType);

    section.appendChild(article);
  }
}
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
