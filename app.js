// --- JAVASCRIPT: DASHBOARD LOGIC (SIMULATION) ---

// Simulated data retrieved from Firebase after login
const PLAYER_DATA = {
    name: 'Captain Valerius',
    shipName: 'The Star Weaver',
    stats: {
        INT: 68, // Pneumatic Lore (Vocabulary)
        WIS: 75, // Celestial Navigation (Pragmatics)
        STR: 62, // Arcane Forging (Grammar)
    },
    campaignProgress: 40,
    currentLOTarget: "B1 Comparative Structures and Phrasal Verbs"
};

function renderDashboardStats() {
    const statDisplayEl = document.getElementById('stat-display');
    statDisplayEl.innerHTML = '';
    
    // Iterating through the stats object
    const statMap = {
        'INT': 'Pneumatic Lore (Vocabulary)',
        'WIS': 'Celestial Navigation (Pragmatics)',
        'STR': 'Arcane Forging (Grammar)',
    };
    
    for (const [key, value] of Object.entries(PLAYER_DATA.stats)) {
        const item = document.createElement('div');
        item.className = 'stat-item';
        item.innerHTML = `
            <label>${statMap[key]}:</label>
            <progress value="${value}" max="100"></progress>
            <span class="stat-value">${value}/100</span>
        `;
        statDisplayEl.appendChild(item);
    }
    
    // Update player identification elements
    document.getElementById('player-name').textContent = PLAYER_DATA.name;
    document.getElementById('ship-name').textContent = PLAYER_DATA.shipName;
    
    // Update Pre-Flight Briefing
    document.querySelector('#prep-module p strong').textContent = PLAYER_DATA.currentLOTarget;

    // Update Campaign Progress
    const progressEl = document.querySelector('#status-bar progress');
    progressEl.value = PLAYER_DATA.campaignProgress;
    document.querySelector('#status-bar span').textContent = `${PLAYER_DATA.campaignProgress}% Complete`;

}

// We assume this function is called after the login is successful
// and the ship naming/character creation sequence is complete.
// For the local demo, you would call this function directly after showing the dashboard container.
// renderDashboardStats();
