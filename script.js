const drop1_btn = document.getElementById('drop1');
const mega1 = document.getElementById('mega1');

drop1_btn.addEventListener('mouseenter', function() {
    mega1.style.display = 'block';
    mega1.style.backgroundColor = '#202020';
});

drop1_btn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!mega1.matches(':hover')) {
            mega1.style.display = 'none';
            mega1.style.backgroundColor = 'transparent';
        }
    }, 200);
});

mega1.addEventListener('mouseleave', function() {
    mega1.style.display = 'none';
    mega1.style.backgroundColor = 'transparent';
});

// Tech dropdown
const tech_btn = document.getElementById('tech-btn');
const tech_drop = document.getElementById('tech-drop');

tech_btn.addEventListener('mouseenter', function() {
    tech_drop.style.display = 'block';
    tech_drop.style.backgroundColor = '#202020';
});

tech_btn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!tech_drop.matches(':hover')) {
            tech_drop.style.display = 'none';
            tech_drop.style.backgroundColor = 'transparent';
        }
    }, 200);
});

tech_drop.addEventListener('mouseleave', function() {
    tech_drop.style.display = 'none';
    tech_drop.style.backgroundColor = 'transparent';
});

// Industries dropdown
const industries_btn = document.getElementById('industries-btn');
const industries_drop = document.getElementById('industries-drop');

industries_btn.addEventListener('mouseenter', function() {
    industries_drop.style.display = 'block';
    industries_drop.style.backgroundColor = '#202020';
});

industries_btn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!industries_drop.matches(':hover')) {
            industries_drop.style.display = 'none';
            industries_drop.style.backgroundColor = 'transparent';
        }
    }, 200);
});

industries_drop.addEventListener('mouseleave', function() {
    industries_drop.style.display = 'none';
    industries_drop.style.backgroundColor = 'transparent';
});

// Insights dropdown
const insights_btn = document.getElementById('insights-btn');
const insights_drop = document.getElementById('insights-drop');

insights_btn.addEventListener('mouseenter', function() {
    insights_drop.style.display = 'block';
    insights_drop.style.backgroundColor = '#202020';
});

insights_btn.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!insights_drop.matches(':hover')) {
            insights_drop.style.display = 'none';
            insights_drop.style.backgroundColor = 'transparent';
        }
    }, 200);
});

insights_drop.addEventListener('mouseleave', function() {
    insights_drop.style.display = 'none';
    insights_drop.style.backgroundColor = 'transparent';
});

const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const items = document.querySelectorAll('.item'); // Get all items
let currentIndex = 0; // Start at the first item

// Function to scroll to the current item based on the currentIndex
function scrollToItem(index) {
    items[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
}

// Next button click event
nextButton.addEventListener("click", function() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        scrollToItem(currentIndex);
    }
});

// Previous button click event
prevButton.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToItem(currentIndex);
    }
});


