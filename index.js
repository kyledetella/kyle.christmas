(() => {
  const daysUntilChristmas = Math.floor(
    (new Date(`Dec 25, ${new Date().getFullYear()}`) - new Date()) /
      1000 /
      60 /
      60 /
      24
  );
  const dayOfChristmas = 11 - daysUntilChristmas;

  const daysOfChristmas = [
    "A partridge in a pear tree",
    "Two Turtle Doves",
    "Three french hens",
    "Four calling birds",
    "Five golden rings",
    "Six geese a laying",
    "Seven swans a swimming",
    "Eight maids a milking",
    "Nine ladies dancing",
    "Ten lords a leaping",
    "Eleven pipers piping",
    "Twelve drummers drumming"
  ];

  const bg = document.getElementById("bg");
  bg.innerHTML =
    daysOfChristmas[dayOfChristmas - 1] || `${daysUntilChristmas} days`;
})();
