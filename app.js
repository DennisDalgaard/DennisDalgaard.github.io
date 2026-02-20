/* ============================================
   Shelly Device Selector — Application Logic
   Data-driven from shelly_products.json
   ============================================ */

// ─── State ──────────────────────────────────────────────────
let products = [];
let activeFilters = {
    anvendelse: [],
    type_lysstyring: [],
    installationsmetode: [],
    forsyningsspaending: [],
    effektmaaling: [],
    antal_kanaler: [],
    protokol: []
};

// ─── Filter Definitions ─────────────────────────────────────
// Defined order and metadata for each filter group
const filterConfig = [
    {
        key: 'anvendelse',
        title: 'Anvendelse',
        icon: '🎯',
        desc: 'Hvad skal enheden bruges til?',
        multiSelect: true,
        values: [
            'Adgangskontrol',
            'Energimåling 1 fase',
            'Energimåling 3 faser',
            'Garageport',
            'Hastighedsstyring af ventilatorer',
            'Inputlæser for afbrydere, sensorer og lignende',
            'Kontrolpanel',
            'Lysstyring',
            'Motorstyring',
            'Pumper',
            'Solafskærmning',
            'Stikkontakter',
            'Varmepumpe',
            'Varmestyring',
            'Ventilatorer'
        ]
    },
    {
        key: 'type_lysstyring',
        title: 'Type lysstyring',
        icon: '💡',
        desc: 'Hvilken type lysstyring har du brug for?',
        multiSelect: true,
        conditional: true, // Only show when relevant
        values: [
            '0/1-10V',
            'DALI',
            'Fasedæmp (standard lysdæmpning)',
            'LED-bånd',
            'Lavvoltsbelysning (12V/24V)',
            'Lysstyring (tænd/sluk)'
        ]
    },
    {
        key: 'installationsmetode',
        title: 'Installationsmetode',
        icon: '🔧',
        desc: 'Hvor skal enheden monteres?',
        multiSelect: true,
        values: [
            'Dåsemontering (EU dåse)',
            'Indbygning (bag kontakt eller i dåse)',
            'Tavlemontering (DIN-skinne)'
        ]
    },
    {
        key: 'forsyningsspaending',
        title: 'Forsyningsspænding',
        icon: '⚡',
        desc: 'Hvilken spænding er tilgængelig?',
        multiSelect: true,
        values: [
            '200-240V AC',
            '24V DC',
            '12V DC',
            '9-28 VDC',
            '8-24 VAC',
            '5 VDC'
        ]
    },
    {
        key: 'protokol',
        title: 'Protokol',
        icon: '📡',
        desc: 'Hvilke protokoller er vigtige?',
        multiSelect: true,
        values: [
            'WiFi',
            'Bluetooth',
            'LAN (ethernet)',
            'Matter',
            'Zigbee'
        ]
    },
    {
        key: 'effektmaaling',
        title: 'Effektmåling',
        icon: '📊',
        desc: 'Skal enheden kunne måle forbrug?',
        multiSelect: false, // single-select
        values: [
            'Ja',
            'Nej'
        ]
    },
    {
        key: 'antal_kanaler',
        title: 'Antal kanaler',
        icon: '🔢',
        desc: 'Hvor mange kanaler har du brug for?',
        multiSelect: true,
        values: ['1', '2', '3', '4', '5']
    }
];

// ─── DOM References ─────────────────────────────────────────
const filtersList = document.getElementById('filtersList');
const resultsGrid = document.getElementById('resultsGrid');
const noResults = document.getElementById('noResults');
const resultsTotal = document.getElementById('resultsTotal');
const activeFiltersEl = document.getElementById('activeFilters');
const activeFilterCountEl = document.getElementById('activeFilterCount');
const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobileOverlay');

// ─── Initialize ─────────────────────────────────────────────
async function init() {
    await loadProducts();
    renderFilters();
    applyFiltersAndRender();
    bindEvents();
}

// ─── Load Products ──────────────────────────────────────────
async function loadProducts() {
    try {
        const response = await fetch('shelly_products.json');
        products = await response.json();
        // Normalize protocol values (remove extra info in parentheses)
        products.forEach(p => {
            p.protokol = p.protokol.map(proto => {
                if (proto.toLowerCase().startsWith('bluetooth')) return 'Bluetooth';
                return proto;
            });
        });
    } catch (e) {
        console.error('Failed to load products:', e);
        products = [];
    }
}

// ─── Render: Filters ────────────────────────────────────────
function renderFilters() {
    filtersList.innerHTML = filterConfig.map(config => {
        const isHidden = config.conditional && !shouldShowConditionalFilter(config.key);
        return `
        <div class="filter-group ${isHidden ? 'filter-hidden' : ''}" data-filter-key="${config.key}" id="filterGroup_${config.key}">
            <button class="filter-group-toggle" aria-expanded="true">
                <div class="filter-group-left">
                    <span class="filter-group-icon">${config.icon}</span>
                    <div>
                        <h3>${config.title}</h3>
                        <p class="filter-group-desc">${config.desc}</p>
                    </div>
                </div>
                <svg class="filter-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="filter-options" data-filter-key="${config.key}">
                ${config.values.map(val => `
                    <button class="filter-chip" data-filter-key="${config.key}" data-value="${val}">
                        <span class="filter-chip-check">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        ${val}
                    </button>
                `).join('')}
            </div>
        </div>`;
    }).join('');
}

// ─── Check if conditional filter should be visible ──────────
function shouldShowConditionalFilter(key) {
    if (key !== 'type_lysstyring') return true;

    // Show type_lysstyring if:
    // 1. Any type_lysstyring filter is already active, OR
    // 2. Current filtered results include products with type_lysstyring values
    if (activeFilters.type_lysstyring.length > 0) return true;

    const currentResults = getFilteredProducts();
    return currentResults.some(p => p.type_lysstyring && p.type_lysstyring.length > 0);
}

// ─── Filter Logic ───────────────────────────────────────────
function getFilteredProducts() {
    return products.filter(product => {
        // Each active filter category must match (AND between categories)
        for (const [key, selectedValues] of Object.entries(activeFilters)) {
            if (selectedValues.length === 0) continue; // No filter active = pass

            const productValue = product[key];

            if (key === 'effektmaaling') {
                // Single value comparison — product value can be "Ja", "Nej", or null
                // If filter is set and product value is null, skip this product
                if (productValue === null) return false;
                if (!selectedValues.includes(productValue)) return false;
            } else if (key === 'antal_kanaler') {
                // Numeric comparison — OR within category
                if (productValue === null) return false;
                const numericValues = selectedValues.map(Number);
                if (!numericValues.includes(productValue)) return false;
            } else {
                // Array fields — OR within category
                // Product matches if at least one element in its array matches a selected filter
                const productArray = productValue || [];
                if (productArray.length === 0) return false;
                const hasMatch = productArray.some(item => selectedValues.includes(item));
                if (!hasMatch) return false;
            }
        }
        return true;
    });
}

// ─── Apply Filters & Render ─────────────────────────────────
function applyFiltersAndRender() {
    const results = getFilteredProducts();

    // Update results count
    resultsTotal.textContent = `${results.length} ${results.length === 1 ? 'enhed' : 'enheder'} fundet`;

    // Show/hide type_lysstyring filter
    updateConditionalFilters();

    // Update active filter chips in toolbar
    renderActiveFilterTags();

    // Update mobile badge
    updateMobileFilterCount();

    // Render results
    if (results.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'flex';
    } else {
        noResults.style.display = 'none';
        resultsGrid.style.display = 'grid';
        renderResults(results);
    }
}

// ─── Render: Results ────────────────────────────────────────
function renderResults(results) {
    resultsGrid.innerHTML = results.map(product => {
        const series = extractSeries(product.navn);
        return `
        <div class="result-card">
            <div class="result-card-body">
                <div class="result-card-top">
                    <div>
                        <div class="result-card-series">${series}</div>
                        <div class="result-card-name">${product.navn}</div>
                    </div>
                </div>

                <div class="result-card-specs">
                    ${product.antal_kanaler !== null ? `
                    <div class="spec-item">
                        <span class="spec-label">Kanaler</span>
                        <span class="spec-value">${product.antal_kanaler}</span>
                    </div>` : ''}
                    ${product.effektmaaling !== null ? `
                    <div class="spec-item">
                        <span class="spec-label">Effektmåling</span>
                        <span class="spec-value">${product.effektmaaling}</span>
                    </div>` : ''}
                    ${product.forsyningsspaending.length > 0 ? `
                    <div class="spec-item spec-wide">
                        <span class="spec-label">Forsyningsspænding</span>
                        <span class="spec-value">${product.forsyningsspaending.join(', ')}</span>
                    </div>` : ''}
                    <div class="spec-item spec-wide">
                        <span class="spec-label">Installation</span>
                        <span class="spec-value">${product.installationsmetode.join(', ')}</span>
                    </div>
                </div>

                <div class="result-card-tags">
                    ${product.anvendelse.map(a => `<span class="tag tag-blue">${a}</span>`).join('')}
                    ${product.type_lysstyring.map(t => `<span class="tag tag-green">${t}</span>`).join('')}
                    ${product.protokol.map(p => `<span class="tag tag-gray">${p}</span>`).join('')}
                </div>

                <div class="result-card-ids">
                    ${product.ean ? `<span class="id-item"><span class="id-label">EAN</span> ${product.ean}</span>` : ''}
                    ${product.se_enummer ? `<span class="id-item"><span class="id-label">SE</span> ${product.se_enummer}</span>` : ''}
                    ${product.fi_enummer ? `<span class="id-item"><span class="id-label">FI</span> ${product.fi_enummer}</span>` : ''}
                    ${product.no_elnummer ? `<span class="id-item"><span class="id-label">NO</span> ${product.no_elnummer}</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
}

// ─── Extract series name from product name ──────────────────
function extractSeries(name) {
    if (name.includes('Gen4')) return 'Gen4';
    if (name.includes('Gen3')) return 'Gen3';
    if (name.includes('Plus')) return 'Plus';
    if (name.includes('Pro')) return 'Pro';
    return '';
}

// ─── Render: Active Filter Tags ─────────────────────────────
function renderActiveFilterTags() {
    const tags = [];
    for (const [key, values] of Object.entries(activeFilters)) {
        for (const val of values) {
            tags.push({ key, val });
        }
    }

    if (tags.length === 0) {
        activeFiltersEl.innerHTML = '';
        return;
    }

    activeFiltersEl.innerHTML = tags.map(({ key, val }) => `
        <button class="active-filter-tag" data-filter-key="${key}" data-value="${val}">
            ${val}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    `).join('');
}

// ─── Update conditional filter visibility ───────────────────
function updateConditionalFilters() {
    const lysstyringGroup = document.getElementById('filterGroup_type_lysstyring');
    if (!lysstyringGroup) return;

    if (shouldShowConditionalFilter('type_lysstyring')) {
        lysstyringGroup.classList.remove('filter-hidden');
    } else {
        lysstyringGroup.classList.add('filter-hidden');
    }
}

// ─── Update mobile filter count badge ───────────────────────
function updateMobileFilterCount() {
    const total = Object.values(activeFilters).reduce((sum, arr) => sum + arr.length, 0);
    if (total > 0) {
        activeFilterCountEl.textContent = total;
        activeFilterCountEl.style.display = 'inline-flex';
    } else {
        activeFilterCountEl.style.display = 'none';
    }
}

// ─── Event Binding ──────────────────────────────────────────
function bindEvents() {
    // Filter chip clicks
    filtersList.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (chip) {
            handleFilterChipClick(chip);
            return;
        }

        const toggle = e.target.closest('.filter-group-toggle');
        if (toggle) {
            handleFilterGroupToggle(toggle);
            return;
        }
    });

    // Active filter tag removal
    activeFiltersEl.addEventListener('click', (e) => {
        const tag = e.target.closest('.active-filter-tag');
        if (!tag) return;
        const key = tag.dataset.filterKey;
        const val = tag.dataset.value;
        removeFilter(key, val);
    });

    // Reset / Clear all
    document.getElementById('resetBtn').addEventListener('click', resetAll);
    document.getElementById('clearAllBtn').addEventListener('click', resetAll);

    // Mobile filter toggle
    mobileFilterToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
        mobileOverlay.classList.toggle('overlay-visible');
    });
    mobileOverlay.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
        mobileOverlay.classList.remove('overlay-visible');
    });
}

// ─── Handle Filter Chip Click ───────────────────────────────
function handleFilterChipClick(chip) {
    const key = chip.dataset.filterKey;
    const val = chip.dataset.value;
    const config = filterConfig.find(c => c.key === key);

    if (config.multiSelect) {
        // Toggle value in array
        const idx = activeFilters[key].indexOf(val);
        if (idx > -1) {
            activeFilters[key].splice(idx, 1);
            chip.classList.remove('active');
        } else {
            activeFilters[key].push(val);
            chip.classList.add('active');
        }
    } else {
        // Single select — toggle or switch
        const optionsContainer = chip.closest('.filter-options');
        const allChips = optionsContainer.querySelectorAll('.filter-chip');

        if (chip.classList.contains('active')) {
            // Deselect
            chip.classList.remove('active');
            activeFilters[key] = [];
        } else {
            // Select this one, deselect others
            allChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeFilters[key] = [val];
        }
    }

    applyFiltersAndRender();
}

// ─── Handle Filter Group Toggle (collapse/expand) ───────────
function handleFilterGroupToggle(toggle) {
    const group = toggle.closest('.filter-group');
    const options = group.querySelector('.filter-options');
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !isExpanded);
    options.style.display = isExpanded ? 'none' : 'flex';
    group.classList.toggle('collapsed', isExpanded);
}

// ─── Remove a specific filter ───────────────────────────────
function removeFilter(key, val) {
    const idx = activeFilters[key].indexOf(val);
    if (idx > -1) {
        activeFilters[key].splice(idx, 1);
    }
    // Update chip visual state
    const chip = filtersList.querySelector(`.filter-chip[data-filter-key="${key}"][data-value="${val}"]`);
    if (chip) chip.classList.remove('active');

    applyFiltersAndRender();
}

// ─── Reset All Filters ──────────────────────────────────────
function resetAll() {
    for (const key of Object.keys(activeFilters)) {
        activeFilters[key] = [];
    }
    filtersList.querySelectorAll('.filter-chip.active').forEach(c => c.classList.remove('active'));
    applyFiltersAndRender();
}

// ─── Start ──────────────────────────────────────────────────
init();
