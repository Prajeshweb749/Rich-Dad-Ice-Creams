function imgSlider(anything){
    document.querySelector('.starbucks').src=anything;
}
document.getElementById('van').addEventListener('mouseover', changeColor1);

function changeColor1() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') { // Skip elements with id="span1"
    textElements[i].style.color = '#864b9d';
}

        btn.style.backgroundColor = '#864b9d';
        img.style.filter = 'drop-shadow(20px 20px 50px #2e1937)';
    }
}
document.getElementById('choco').addEventListener('mouseover', changeColor2);

function changeColor2() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') { // Skip elements with id="span1"
        textElements[i].style.color = 'chocolate'; 
}
        
        btn.style.backgroundColor = 'chocolate';
        img.style.filter = 'drop-shadow(20px 20px 50px rgb(53 26 7))';
    }
}
document.getElementById('straw').addEventListener('mouseover', changeColor3);

function changeColor3() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#FB2943'; 
    }
        btn.style.backgroundColor = '#FB2943';
        img.style.filter = 'drop-shadow(20px 20px 50px #570d16)';
    }
}
document.getElementById('mango').addEventListener('mouseover', changeColor4);

function changeColor4() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#f9f537'; 
    }
        btn.style.backgroundColor = '#f9f537';
        img.style.filter = 'drop-shadow(20px 20px 50px rgb(57 55 13))';
    }
}
document.getElementById('butter').addEventListener('mouseover', changeColor5);

function changeColor5() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#fdb147'; 
    }
        btn.style.backgroundColor = '#fdb147';
        img.style.filter = 'drop-shadow(20px 20px 50px #593e19)';
    }
}
document.getElementById('coco').addEventListener('mouseover', changeColor6);

function changeColor6() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#74a31f'; 
    }
        btn.style.backgroundColor = '#74a31f';
        img.style.filter = 'drop-shadow(20px 20px 50px rgb(63 89 17))';
    }
}

document.getElementById('pista').addEventListener('mouseover', changeColor7);

function changeColor7() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#8cef4a'; 
    }
        btn.style.backgroundColor = '#8cef4a';
        img.style.filter = 'drop-shadow(20px 20px 50px rgb(31 53 16))';
    }
}
document.getElementById('chik').addEventListener('mouseover', changeColor8);

function changeColor8() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#e49061'; 
    }
        btn.style.backgroundColor = '#e49061';
        img.style.filter = 'drop-shadow(rgb(69 43 28) 20px 20px 50px)';
    }
}
document.getElementById('rose').addEventListener('mouseover', changeColor9);

function changeColor9() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#ff8a90'; 
    }
        btn.style.backgroundColor = '#ff8a90';
        img.style.filter = 'drop-shadow(20px 20px 50px #3b1e1f)';
    }
}
document.getElementById('span').addEventListener('mouseover', changeColor10);

function changeColor10() {
    const textElements = document.getElementsByTagName('span');
    const btn = document.getElementById('btn');
    const img = document.getElementById('starbucks');
    for (let i = 0; i < textElements.length; i++) {
        if (textElements[i].id === 'span1') {
        textElements[i].style.color = '#0cbddb'; 
    }
        btn.style.backgroundColor = '#0cbddb';
        img.style.filter = 'drop-shadow(20px 20px 50px #02262d)';
    }
}
const element = document.getElementById('loads');

// Set a timeout to delete the element after 5 seconds
setTimeout(() => {
    // Remove the element from the DOM
    if (element) {
        element.remove();
        console.log('Element deleted');
    }
}, 5000);

function changeCSS() {
    document.body.style.overflowY = 'scroll';
    document.querySelector('nav').style.display = 'block';
    
}
setTimeout(function() {
    document.getElementById('thumbList').classList.add('flex');
}, 5000);

// Set timeout to change CSS properties after 5 seconds (5000 milliseconds)
setTimeout(changeCSS, 5000);
function closeMenu() {
    document.getElementById('check').checked = false;
}
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.parentNode.classList.add('sibling-hover');
        });

        element.addEventListener('mouseout', function() {
            this.parentNode.classList.remove('sibling-hover');
        });
    });
});
const sections = document.querySelectorAll('section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSection = 1; // Start with the assumption that s1 is the first relevant section

function updateButtons() {
  if (currentSection === 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
  } else if (currentSection === sections.length - 1) {
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
  }
}

prevBtn.addEventListener('click', () => {
  if (currentSection > 1) {
    currentSection--;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    updateButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    updateButtons();
  }
});

window.addEventListener('scroll', () => {
  const sectionTops = Array.from(sections).map(section => section.offsetTop);
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  currentSection = sectionTops.findIndex((top, index) => {
    if (index === sectionTops.length - 1) return true;
    return scrollPosition >= top && scrollPosition < sectionTops[index + 1];
  });
  currentSection = Math.max(currentSection, 1); // Ensure we don't go below section 1
  updateButtons();
});

updateButtons();

function showForm() {
    const h2 = document.getElementById('h21');
    const p = document.getElementById('p1');
    const button = document.getElementById('btn21');
    const form = document.getElementById('contact-form');

    h2.classList.add('slide-out-left');
    setTimeout(() => {
        p.classList.add('slide-out-right');
    }, 500);
    setTimeout(() => {
        button.classList.add('slide-out-down');
    }, 1000);
    setTimeout(() => {
        h2.style.display = 'none';
        p.style.display = 'none';
        button.style.display = 'none';
        form.classList.remove('hidden');
        form.classList.add('slide-in-up');
    }, 1500);
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn21');

    button.addEventListener('click', () => {
        document.getElementById('cng').style.backgroundColor = "black"; 
    });
});