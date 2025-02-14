const studentFullName= 'Kashina Jian Roguel';
const studentNumber = 1180435;
const output = `${studentFullName}-${studentNumber}`;

console.log(output);

const headerContent = document.querySelector('h1');
console.log(headerContent.textContent);
headerContent.classList.add('headingPrimary');
headerContent.textContent = output;