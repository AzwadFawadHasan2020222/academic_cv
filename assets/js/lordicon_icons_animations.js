window.addEventListener('load', function() {
    // Set a timeout to wait for 1500ms
    setTimeout(function() {
        // Select the icon element
        const achievementsIcon = document.getElementById('achievements-icon');
        
        // Show the icon by setting display to 'inline-block'
        achievementsIcon.style.display = 'inline-block';
    }, 1500); // 1500ms = 1.5 seconds
});
// Wait for the window to fully load
window.addEventListener('load', function() {
    // Set a timeout to wait for 1 second after the load event
    setTimeout(function() {
        // Select the icon element
        const aboutIcon = document.getElementById('about-icon');
        const eduIcon = document.getElementById('edu-icon');
        const workIcon = document.getElementById('work-icon');
        const pubIcon = document.getElementById('pub-icon');
        const codingIcon = document.getElementById('coding-icon');
        
        const achievementsIcon = document.getElementById('achievements-icon');
        const research_interestIcon = document.getElementById('research_interest-icon');
        const volunteeringIcon = document.getElementById('volunteering-icon');
        const tech_stackIcon = document.getElementById('tech_stack-icon');
        const certIcon = document.getElementById('cert-icon');
        const blogIcon = document.getElementById('blog-icon');
        const miscIcon = document.getElementById('misc-icon');
        
        
        // Remove the delay and state attributes
        aboutIcon.removeAttribute('delay');
        aboutIcon.removeAttribute('state');

        // Remove the delay and state attributes
        eduIcon.removeAttribute('delay');
        eduIcon.removeAttribute('state');

        // Remove the delay and state attributes
        workIcon.removeAttribute('delay');
        workIcon.removeAttribute('state');

        // Remove the delay and state attributes
        pubIcon.removeAttribute('delay');
        pubIcon.removeAttribute('state');

        // achievementsIcon.style.display = 'inline-block';

        // Remove the delay and state attributes
        codingIcon.removeAttribute('delay');
        codingIcon.removeAttribute('state');

        // Remove the delay and state attributes
        achievementsIcon.removeAttribute('delay');
        achievementsIcon.removeAttribute('state');

        // Remove the delay and state attributes
        research_interestIcon.removeAttribute('delay');
        research_interestIcon.removeAttribute('state');

        // Remove the delay and state attributes
        volunteeringIcon.removeAttribute('delay');
        volunteeringIcon.removeAttribute('state');

        // Remove the delay and state attributes
        tech_stackIcon.removeAttribute('delay');
        tech_stackIcon.removeAttribute('state');

        // Remove the delay and state attributes
        certIcon.removeAttribute('delay');
        certIcon.removeAttribute('state');

        // Remove the delay and state attributes
        blogIcon.removeAttribute('delay');
        blogIcon.removeAttribute('state');

        // Remove the delay and state attributes
        miscIcon.removeAttribute('delay');
        miscIcon.removeAttribute('state');

        
        // Change the trigger to 'boomerang'
        aboutIcon.setAttribute('trigger', 'boomerang');
        eduIcon.setAttribute('trigger', 'boomerang');
        workIcon.setAttribute('trigger', 'boomerang');
        pubIcon.setAttribute('trigger', 'boomerang');
        codingIcon.setAttribute('trigger', 'boomerang');
        achievementsIcon.setAttribute('trigger', 'boomerang');
        research_interestIcon.setAttribute('trigger', 'boomerang');
        volunteeringIcon.setAttribute('trigger', 'boomerang');
        tech_stackIcon.setAttribute('trigger', 'boomerang');
        certIcon.setAttribute('trigger', 'boomerang');
        blogIcon.setAttribute('trigger', 'boomerang');
        miscIcon.setAttribute('trigger', 'boomerang');
    }, 4300); // 1000ms = 1 second
});
