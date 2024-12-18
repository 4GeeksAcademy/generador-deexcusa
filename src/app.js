window.onload = function() {
  // array with the words
  let first = "A ";
  let adjective = [
    "two headed ",
    "nuclear ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old "
  ];
  let noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone "
  ];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possetion = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];

  // declaring random variables
  let indexAdjective = Math.floor(Math.random() * adjective.length);
  let indexNoun = Math.floor(Math.random() * noun.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexPossetion = Math.floor(Math.random() * possetion.length);
  let indexWhere = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adjective[indexAdjective] +
    noun[indexNoun] +
    action[indexAction] +
    possetion[indexPossetion] +
    where[indexWhere];
};
