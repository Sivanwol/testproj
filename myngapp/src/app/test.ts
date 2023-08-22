const weirdSortOfArray = (paragraph: string) => {
  const hebrewAlphabet : string = "אבגדהוזחטיכלמנסעפצקרשתץףןם";
  const words : string[] = paragraph.replace(/[^\w\s]/g, "").split(" ");
  const sortedWords : string[] = words.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    for (let i = 0; i < Math.min(aLower.length, bLower.length); i++) {
      const idxA = hebrewAlphabet.indexOf(aLower[i]);
      const idxB = hebrewAlphabet.indexOf(bLower[i]);
      if (idxA !== idxB) {
        return idxA - idxB;
      }
    }
    return aLower.localeCompare(bLower);
  });
  return sortedWords.join(" ");
}


console.log(weirdSortOfArray("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"));

