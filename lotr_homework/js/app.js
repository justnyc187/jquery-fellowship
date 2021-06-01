console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
console.log("Hi Justin");
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $newSectionMiddle = $("<section id='middle-earth'></section>");
  // 2. append the section to the body of the DOM.
  $("body").append($newSectionMiddle);
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  // I am still getting used to jquery so this took me awhile. I struggled adding the individual lands to an h1 for about a solid 45min. Syntax is still something I need to practice on, badly. Finally got it to work tho...I think
  //realized i didnt have the id's as each land so had to go back and finish
  for (let i = 0; i < lands.length; i++){
      console.log("Are lands working?");
      const $landsArticle = $(`<article id=${lands[i]}><h1>${lands[i]}</h1></article>`);
      $("#middle-earth").append($landsArticle);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Is Chapter 2 working?');
  


  // 1. display an unordered list of the hobbits in the shire.
  const hobbitsTag = $("<ul></ul>");
  // appends the ul to The Shire
  $("#The-Shire").append(hobbitsTag);
  // 2. give each hobbit a class of "hobbit"
  // for loop to loop through hobbits array
  for(let i = 0; i <hobbits.length; i++) {
  // class of hobbit added to the list of each hobbit list item
    const hobbitsList = $(`<ul><li class="hobbit">${hobbits[i]}</li></ul>`);
    // append new list to The Shire
    $("#The-Shire").append(hobbitsList)
  }
    
// Worked on this for too long and then realized I still had to click the middle earth button in order for the hobbits function to work. at least I only wasted 2 hours on that smh

};



    
    




  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id



// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  // created empty div called ringDiv with the id of the-ring
  const divTheRing = $("<div id='the-ring'></div>");
  console.log("Is Chapter 3 working?");
  // 2. add the ring as a child of Frodo
  // was stumped on this so I went to google and asked a few classmates who pointed me in the direction of the class notes
  // 
  $(".hobbit").eq(0).append(divTheRing);
  
  
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  // created new ul called baddiesList
  const baddieList = $("<ul></ul>")
  console.log("Baddies List");
  // 2. give each of the baddies a class of "baddy"
  // for loop for our baddies array, which pulls out the baddies indices and puts the into a ul with li class of "baddy", and then appends them to the ul baddiesList which is appended to mordor
  for (let i = 0; i < baddies.length; i++){
    const specificBaddiesList = $(`<ul><li class ="baddy">${baddies[i]}</li></ul>`);
  // appends new li to baddielist ul
    $(baddieList).append(specificBaddiesList);
  }
  $("#Mordor").append(baddieList);

  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  // aside tag called asideTag
  const asideTag = $("<aside></aside>");
  // apoended to Mordor
  $("#Mordor").after(asideTag);
  // Test
  console.log("Chapter 5 working?");
  // 2. display an unordered list of buddies in the aside
  // for loop for out buddies array that will take all of the idices of buddies and place them into our buddiesAside that we are giving a class of "buddy"
  for (let i = 0; i < buddies.length; i++){
    const buddiesAside = $(`<ul class="buddy">${buddies[i]}></ul>`);
  // append our new buddies aside
    $(asideTag).append(buddiesAside);
  }
  // 3. give each of the buddies a class of "buddy"
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // we can grab the hobbits by using .children and grabbing the children of the id The-Shire, which is the article's id
  // I realized right before i was about to submit that the entire h1 The Shire moves when i try to move the hobbits list to Rivendell, i think i did something wrong in Chapter 1 but i cant figure it out 
  // thought this would grab the children of the the id=The-Shire??
 /*
  
  const hobbitsOnTheMove = $("#The-Shire").children();
  console.log("Is Chapter 6 working");
  // append hobbitsOnTheMove to Rivendell
  $("#Rivendell").append(hobbitsOnTheMove);
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
*/
// not sure if this is what we are looking for here, but after a long long time trying to figure it out i finally got this to move just the hobbits and not the h1 and the hobbits. realized i could also add an id tag to the hobbits and pull them that way also

  $(".hobbit").appendTo("#Rivendell");

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // We can use .eq() here again to target the 3rd index of the buddy aside, we can grab buddy by the .buddy class tag
  $(".buddy").eq(3).html("Aragorn")
  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  const newDiv = $(`<div id=the-fellowship> <h1>The Fellowship<h1> <div>`);
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // appended our newly created h1 'The Fellowship' to middle-earth
  $("#middle-earth").append(newDiv);
  console.log("Is Chapter 8 working?");
  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  // I cant for the life of me get this to work, I have tried appending by grabbing the class of the buddies and hobbits lists, i tried .appendTo, i tried creating id's for the hobbits and i cant seem to grab them correctly 
  
  let $Hobbit = $(".hobbit");
  let $Buddies = $(".buddy");
  $("#the-fellowship").append($Hobbit, $Buddies);
  //$("#hobbits").appendTo(fellowShip);
  //$(fellowShip).append(".hobbit");
  //$(fellowShip).append(".buddy");



  //$(".buddy").eq(4).attr('id', 'Boromir');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // grab our buddy aside using the class .buddy and can access the first index of aside using eq(0) and change the html to Gandalf the White using the .html method
  $(".buddy").eq(0).html("Gandalf the White");
  // again we can access the aside using the .buddy class tag and addClass of the-white to the newly chanfed Gandalf the White element. I believe this is right but the buddy class is also still attached to the Gandlaf the White, sooooooo I am not 100% on this one, maybe i used the wrong method?? Maybe .eq doesnt work here???
  $(".buddy").eq(0).addClass("the-white");
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  /* It doesnt look the best but I think this is what we were asked to do, copied here to make it easier
  .the-white {
  background-color: rgb(255, 255, 255);
  border: rgb(128, 128, 128);
}
*/


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  window.alert("The Horn of Gndor has blown")
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // not gonna lie, answering this one was big. I was struggling on it for a long time. Big victory
  // so i accessed the asside again using my new favoirte friend eq(), then gave Boromir an id of Borimor so i could access it in css and put a line through. Since it already had a class of buddy i had to make it more specific so i could only access Borimor in the aside as opposed to the whole class.
  $(".buddy").eq(4).attr('id', 'Boromir');
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  // access the list of baddies using the baddy class and remove the Uruk-Hai using .remove
  $(".baddy").eq(2).remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // struggled with this a bit cause i forgot that when you use appendTo the order is reversed and the selector precedes the method. i think you can use .splice here to pull Fordo and Sam but i couldnt figure that out and i am obviously getting comfortable with .eq()
  $(".hobbit").eq(0).appendTo("#Mordor");
  
  $(".hobbit").eq(1).appendTo("#Mordor");
  //$(".hobbit").eq(0, 1).appendTo("#Mordor");
  // 2. add a div with an id of 'mount-doom' to Mordor
  // pretty straight forward 
  $("#Mordor").append("<div id='mount-doom'></div>");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  //created another div with the id of gollum appended it to Mordor
  $("#Mordor").append("<div id='gollum'.</div>");
  // 2. Move the ring from Frodo and give it to Gollum
  // used appendTo again, appendTo is starting to  makes more logical sense when i read it out in my head
  $("#the-ring").appendTo("#gollum");
  // 3. Move Gollum into Mount Doom
  // used appendTo again and got this creepy little gollum pic to apppend to mount-doom
  $("#gollum").appendTo("#mount-doom")

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  // made this so much harder than it needed to be. 
  //$("#middle-earth").remove("#the-ring");
  //$("#middle-earth").remove("#the-ring");
  $("#gollum").remove();
  
  // 2. remove all the baddies from the DOM
  // called on the baddies list by the class .baddy and removed using the .remove method
  // still need to get better at remembering what to call on
  $(".baddy").remove();
  // 3. Move all the hobbits back to the shire
$(".hobbit").appendTo("#The-Shire");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
