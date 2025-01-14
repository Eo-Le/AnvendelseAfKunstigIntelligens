console.log("loaded: assets/js/updateSiteOnDeployment.js");

// Fetch the current update timestamp from the meta tag
const currentUpdate = document.querySelector('meta[name="last-update"]').getAttribute('content');

// Retrieve the previous update timestamp from localStorage. If no key 'lastUpdate' is found then the value will be null
const previousUpdate = localStorage.getItem('lastUpdate');

// Compare timestamps to detect updates
if (previousUpdate && previousUpdate !== currentUpdate) {
    alert(`Hjemmesiden er opdateret!\nGamle version, dato: ${previousUpdate}\nNy version, dato: ${currentUpdate}`);

    // Reload the page if the update is new
    location.reload();
} else {
}

// Store the latest timestamp in localStorage. https://www.w3schools.com/js/js_api_web_storage.asp
localStorage.setItem('lastUpdate', currentUpdate);