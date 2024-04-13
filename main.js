'use strict';

const btn = document.querySelector('.gen-btn');
const quote = document.querySelector('.quote');
const adviceCount = document.querySelector('.quote-count');

let count = 0;

async function getAdvice() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    if(!res.ok) {
      throw new Error('Problem fetching advice');
    }
    const data = await res.json();
    quote.textContent = `"${data.slip.advice}"`;
    count++;
    updateCount();
  } catch (e) {
    throw e
  }
}

function updateCount() {
  return adviceCount.textContent = `You have read ${count} piece${count !== 1 ? 's' : ''} of advice`;
}

getAdvice();

btn.addEventListener('click', getAdvice)

