// Task 1: Highlight words over 8 characters in the paragraph with a yellow background.
const paragraph = document.getElementById('paragraph');
const words = paragraph.innerHTML.split(' ');
const highlightedWords = words.map(word => {
  if (word.length > 8) {
    return `<span style="background-color: yellow;">${word}</span>`;
  } else {
    return word;
  }
});
paragraph.innerHTML = highlightedWords.join(' ');

// Task 2: Add a link back to the source after the paragraph.
const sourceLink = document.createElement('a');
sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
sourceLink.textContent = 'Source';
document.body.appendChild(sourceLink);

// Task 3: Split each sentence onto a separate line.
const sentences = paragraph.innerHTML.split('. ');
paragraph.innerHTML = sentences.join('.<br>');

// Task 4: Count the number of words and display the count after the heading.
const wordCount = words.length;
const heading = document.querySelector('h1');
heading.insertAdjacentHTML('afterend', `<p>Word Count: ${wordCount}</p>`);

// Task 5: Replace question marks and exclamation marks with emojis.
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '\u{1F914}').replace(/!/g, '\u{1F632}');
