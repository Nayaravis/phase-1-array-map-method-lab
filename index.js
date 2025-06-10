const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const parts = tutorial.split(" ").map((word) => {
      const newWord = []
      for (let i=0; i < word.length; i++) {
        if (i === 0) {
          newWord.push(word[0].toUpperCase())
        } else {
          newWord.push(word[i])
        }
      }
      return newWord.join("")
    })
    return parts.join(" ")
  })
}