document.addEventListener("DOMContentLoaded", function() {
    // Focus Area (drop1)
    const drop1_btn = document.getElementById('drop1');
    const mega1 = document.getElementById('mega1');

    drop1_btn.addEventListener('mouseenter', function() {
        mega1.style.display = 'block';
        mega1.style.backgroundColor = '#9E9E9E';
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

    // Technologies (tech-btn)
    const tech_btn = document.getElementById('tech-btn');
    const tech_drop = document.getElementById('tech-drop');

    tech_btn.addEventListener('mouseenter', function() {
        tech_drop.style.display = 'block';
        tech_drop.style.backgroundColor = '#9E9E9E';
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

    // Industries (industries-btn)
    const industries_btn = document.getElementById('industries-btn');
    const industries_drop = document.getElementById('industries-drop');

    industries_btn.addEventListener('mouseenter', function() {
        industries_drop.style.display = 'block';
        industries_drop.style.backgroundColor = '#9E9E9E';
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

    // Insights (insights-btn)
    const insights_btn = document.getElementById('insights-btn');
    const insights_drop = document.getElementById('insights-drop');

    insights_btn.addEventListener('mouseenter', function() {
        insights_drop.style.display = 'block';
        insights_drop.style.backgroundColor = '#9E9E9E';
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
});

