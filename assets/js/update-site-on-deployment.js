console.log("loaded: assets/js/update-site-on-deployment.js");

document.addEventListener('DOMContentLoaded', () => {
    
    // Fetch the meta tag for the last update timestamp
    const metaTag = document.querySelector('meta[name="last-update"]');

    // Validate the existence of the meta tag
    if (!metaTag) {
        console.warn("Meta tag with name 'last-update' not found. Exiting script.");
        return;
    }

    // Retrieve the current update timestamp from the meta tag
    const currentUpdate = metaTag.getAttribute('content');
    if (!currentUpdate) {
        console.warn("Meta tag 'last-update' has no content. Exiting script.");
        return;
    }

    // Retrieve the previous update timestamp from localStorage
    const previousUpdate = localStorage.getItem('lastUpdate');

    // Compare timestamps to detect updates
    if (previousUpdate && previousUpdate !== currentUpdate) {
        alert(`Hjemmesiden er opdateret!\nGamle version, dato: ${previousUpdate}\nNy version, dato: ${currentUpdate}`);

        // Reload the page if the update is new
        location.reload();
    }

    // Store the latest timestamp in localStorage
    localStorage.setItem('lastUpdate', currentUpdate);
});
