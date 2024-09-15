document.addEventListener("DOMContentLoaded", function() {
    // Focus Area (drop1_b)
    const drop1_btn_b = document.getElementById('drop1_b');
    const mega1_b = document.getElementById('mega1_b');

    drop1_btn_b.addEventListener('click', function() {
        if (mega1_b.style.display === 'block') {
            mega1_b.style.display = 'none';
            mega1_b.style.backgroundColor = 'transparent';
        } else {
            mega1_b.style.display = 'block';
            mega1_b.style.backgroundColor = '#9E9E9E';
        }
    });

    mega1_b.addEventListener('mouseleave', function() {
        mega1_b.style.display = 'none';
        mega1_b.style.backgroundColor = 'transparent';
    });

    // Technologies (tech-btn_b)
    const tech_btn_b = document.getElementById('tech-btn_b');
    const tech_drop_b = document.getElementById('tech-drop_b');

    tech_btn_b.addEventListener('click', function() {
        if (tech_drop_b.style.display === 'block') {
            tech_drop_b.style.display = 'none';
            tech_drop_b.style.backgroundColor = 'transparent';
        } else {
            tech_drop_b.style.display = 'block';
            tech_drop_b.style.backgroundColor = '#9E9E9E';
        }
    });

    tech_drop_b.addEventListener('mouseleave', function() {
        tech_drop_b.style.display = 'none';
        tech_drop_b.style.backgroundColor = 'transparent';
    });

    // Industries (industries-btn_b)
    const industries_btn_b = document.getElementById('industries-btn_b');
    const industries_drop_b = document.getElementById('industries-drop_b');

    industries_btn_b.addEventListener('click', function() {
        if (industries_drop_b.style.display === 'block') {
            industries_drop_b.style.display = 'none';
            industries_drop_b.style.backgroundColor = 'transparent';
        } else {
            industries_drop_b.style.display = 'block';
            industries_drop_b.style.backgroundColor = '#9E9E9E';
        }
    });

    industries_drop_b.addEventListener('mouseleave', function() {
        industries_drop_b.style.display = 'none';
        industries_drop_b.style.backgroundColor = 'transparent';
    });

    // Insights (insights-btn_b)
    const insights_btn_b = document.getElementById('insights-btn_b');
    const insights_drop_b = document.getElementById('insights-drop_b');

    insights_btn_b.addEventListener('click', function() {
        if (insights_drop_b.style.display === 'block') {
            insights_drop_b.style.display = 'none';
            insights_drop_b.style.backgroundColor = 'transparent';
        } else {
            insights_drop_b.style.display = 'block';
            insights_drop_b.style.backgroundColor = '#9E9E9E';
        }
    });

    insights_drop_b.addEventListener('mouseleave', function() {
        insights_drop_b.style.display = 'none';
        insights_drop_b.style.backgroundColor = 'transparent';
    });
});
