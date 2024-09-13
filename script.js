const drop1_btn = document.getElementById('drop1');
const mega1 = document.getElementById('mega1');

drop1_btn.addEventListener('click', function() {
    if (mega1.style.display === 'none' || mega1.style.display === '') {
        mega1.style.display = 'block'; // Show the element
        mega1.style.backgroundColor = '#202020'; // Change color to gray when visible
    } else {
        mega1.style.display = 'none';  // Hide the element
        mega1.style.backgroundColor = 'transparent'; // Change color to transparent when hidden
    }
});

const drop2_btn = document.getElementById('drop2');
const mega2 = document.getElementById('mega2');

drop2_btn.addEventListener('click', function() {
    if (mega2.style.display === 'none' || mega1.style.display === '') {
        mega2.style.display = 'block'; // Show the element
        mega2.style.backgroundColor = '#202020'; // Change color to gray when visible
    } else {
        mega2.style.display = 'none';  // Hide the element
        mega2.style.backgroundColor = 'transparent'; // Change color to transparent when hidden
    }
});