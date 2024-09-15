document.addEventListener("DOMContentLoaded", function() {
    const verticalContainer = document.querySelector('.horizontal'); 
    const items = verticalContainer.querySelectorAll('.item');
    let currentIndex = 0;
    const scrollInterval = 2000; 

    function autoScroll() {

        const itemHeight = items[currentIndex].offsetHeight;

   
        verticalContainer.scrollTo({
            top: itemHeight * currentIndex, 
            behavior: 'smooth' 
        });

     
        currentIndex = (currentIndex + 1) % items.length;
    }

    setInterval(autoScroll, scrollInterval);
});




document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        scrollToNextItem();
    } else if (event.key === 'ArrowLeft') {
        scrollToPrevItem();
    }
});







