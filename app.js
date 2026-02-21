/* ============================================
   Shelly Device Selector — 3-Step Wizard
   Data-driven from shelly_products.json
   ============================================ */

// ─── Product KB URLs and image URLs ─────────────────────────
const PRODUCT_KB_URLS = {
    'Shelly Wall Display': 'https://kb.shelly.cloud/knowledge-base/shelly-wall-display',
    'Shelly Wall Display X2i': 'https://kb.shelly.cloud/knowledge-base/shelly-wall-display-x2i',
    'Shelly Wall Display XL': 'https://kb.shelly.cloud/knowledge-base/shelly-wall-display-xl',
    'Shelly Plus RGBW PM': 'https://kb.shelly.cloud/knowledge-base/shelly-plus-rgbw-pm',
    'Shelly Plus I4 DC': 'https://kb.shelly.cloud/knowledge-base/shelly-plus-i4dc',
    'Shelly i4 Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-i4-gen3',
    'Shelly Dimmer 0/1-10V PM Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-dimmer-0-1-10v-pm-gen3',
    'Shelly DALI Dimmer Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-dali-dimmer-gen3-1',
    'Shelly 1L Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-1l-gen3',
    'Shelly 2L Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-2l-gen3',
    'Shelly Plus Uni': 'https://kb.shelly.cloud/knowledge-base/shelly-plus-uni',
    'Shelly 1 Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-1-gen4',
    'Shelly 1PM Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-1pm-gen4',
    'Shelly 2PM Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-2pm-gen4',
    'Shelly Dimmer Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-dimmer-gen4',
    'Shelly 1 Mini Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-1-mini-gen4',
    'Shelly 1PM Mini Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-1pm-mini-gen4',
    'Shelly EM Mini Gen4': 'https://kb.shelly.cloud/knowledge-base/shelly-em-mini-gen4',
    'Shelly Pro 1': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-1',
    'Shelly Pro 2': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-2',
    'Shelly Pro 1PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-1pm',
    'Shelly Pro 2PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-2pm',
    'Shelly Pro 3': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-3-v1',
    'Shelly Pro 4PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-4pm-v2',
    'Shelly Pro Dual Cover PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-dual-cover-pm',
    'Shelly Pro Dimmer 1PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-dimmer-1pm',
    'Shelly Pro Dimmer 2PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-dimmer-2pm',
    'Shelly Pro Dimmer 0/1-10V PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-dimmer-0-1-10v-pm',
    'Shelly Pro RGBWW PM': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-rgbww-pm',
    'Shelly EM Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-em-gen3',
    'Shelly 3EM-63T Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-3em-63-gen3',
    'Shelly 3EM-63W Gen3': 'https://kb.shelly.cloud/knowledge-base/shelly-3em-63-gen3',
    'Shelly Pro 3EM CT63': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-3em-3ct63',
    'Shelly Pro 3EM 120A': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-3em',
    'Shelly Pro 3EM 400A': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-3em-400',
    'Shelly Pro EM - 50A': 'https://kb.shelly.cloud/knowledge-base/shelly-pro-em-50'
};

const PRODUCT_IMAGES = {
    'Shelly Wall Display': 'https://www.shelly.com/cdn/shop/files/Wall_Display_Front_W_300x300.webp',
    'Shelly Wall Display X2i': 'https://www.shelly.com/cdn/shop/files/Wall_Display_X2i_B_Front_300x300.webp',
    'Shelly Wall Display XL': 'https://www.shelly.com/cdn/shop/files/Wall_Display_XL_B_Front_300x300.webp',
    'Shelly Plus RGBW PM': 'https://www.shelly.com/cdn/shop/files/plus-rgbw-pm_300x300.webp',
    'Shelly Plus I4 DC': 'https://www.shelly.com/cdn/shop/files/Plus_i4_DC_300x300.webp',
    'Shelly i4 Gen3': 'https://www.shelly.com/cdn/shop/files/i4_Gen3_300x300.webp',
    'Shelly Dimmer 0/1-10V PM Gen3': 'https://www.shelly.com/cdn/shop/files/Dimmer_0_10V_Gen3_300x300.webp',
    'Shelly DALI Dimmer Gen3': 'https://www.shelly.com/cdn/shop/files/DALI_Dimmer_Gen3_300x300.webp',
    'Shelly 1L Gen3': 'https://www.shelly.com/cdn/shop/files/1L_Gen3_300x300.webp',
    'Shelly 2L Gen3': 'https://www.shelly.com/cdn/shop/files/2L_Gen3_300x300.webp',
    'Shelly Plus Uni': 'https://www.shelly.com/cdn/shop/files/Plus_Uni_300x300.webp',
    'Shelly 1 Gen4': 'https://www.shelly.com/cdn/shop/files/1_Gen4_300x300.webp',
    'Shelly 1PM Gen4': 'https://www.shelly.com/cdn/shop/files/1PM_Gen4_300x300.webp',
    'Shelly 2PM Gen4': 'https://www.shelly.com/cdn/shop/files/2PM_Gen4_300x300.webp',
    'Shelly Dimmer Gen4': 'https://www.shelly.com/cdn/shop/files/Dimmer_Gen4_300x300.webp',
    'Shelly 1 Mini Gen4': 'https://www.shelly.com/cdn/shop/files/1_Mini_Gen4_300x300.webp',
    'Shelly 1PM Mini Gen4': 'https://www.shelly.com/cdn/shop/files/1PM_Mini_Gen4_300x300.webp',
    'Shelly EM Mini Gen4': 'https://www.shelly.com/cdn/shop/files/EM_Mini_Gen4_300x300.webp',
    'Shelly Pro 1': 'https://www.shelly.com/cdn/shop/files/Pro_1_300x300.webp',
    'Shelly Pro 2': 'https://www.shelly.com/cdn/shop/files/Pro_2_300x300.webp',
    'Shelly Pro 1PM': 'https://www.shelly.com/cdn/shop/files/Pro_1PM_300x300.webp',
    'Shelly Pro 2PM': 'https://www.shelly.com/cdn/shop/files/Pro_2PM_300x300.webp',
    'Shelly Pro 3': 'https://www.shelly.com/cdn/shop/files/Pro_3_300x300.webp',
    'Shelly Pro 4PM': 'https://www.shelly.com/cdn/shop/files/Pro_4PM_300x300.webp',
    'Shelly Pro Dual Cover PM': 'https://www.shelly.com/cdn/shop/files/Pro_Dual_Cover_300x300.webp',
    'Shelly Pro Dimmer 1PM': 'https://www.shelly.com/cdn/shop/files/Pro_Dimmer_1PM_300x300.webp',
    'Shelly Pro Dimmer 2PM': 'https://www.shelly.com/cdn/shop/files/Pro_Dimmer_2PM_300x300.webp',
    'Shelly Pro Dimmer 0/1-10V PM': 'https://www.shelly.com/cdn/shop/files/Pro_Dimmer_0_10V_300x300.webp',
    'Shelly Pro RGBWW PM': 'https://www.shelly.com/cdn/shop/files/Pro_RGBWW_PM_300x300.webp',
    'Shelly EM Gen3': 'https://www.shelly.com/cdn/shop/files/EM_Gen3_300x300.webp',
    'Shelly 3EM-63T Gen3': 'https://www.shelly.com/cdn/shop/files/3EM_Gen3_300x300.webp',
    'Shelly 3EM-63W Gen3': 'https://www.shelly.com/cdn/shop/files/3EM_Gen3_300x300.webp',
    'Shelly Pro 3EM CT63': 'https://www.shelly.com/cdn/shop/files/Pro_3EM_300x300.webp',
    'Shelly Pro 3EM 120A': 'https://www.shelly.com/cdn/shop/files/Pro_3EM_300x300.webp',
    'Shelly Pro 3EM 400A': 'https://www.shelly.com/cdn/shop/files/Pro_3EM_400_300x300.webp',
    'Shelly Pro EM - 50A': 'https://www.shelly.com/cdn/shop/files/Pro_EM_50_300x300.webp'
};

// ─── State ──────────────────────────────────────────────────
let products = [];
let state = {
    currentStep: 1,
    selectedUseCases: [],
    filters: {
        type_lysstyring: [],
        installationsmetode: [],
        forsyningsspaending: [],
        protokol: [],
        effektmaaling: [],
        antal_kanaler: []
    }
};

// ─── Filter config (step 2 — excludes 'anvendelse' which is step 1) ──
const filterConfig = [
    {
        key: 'type_lysstyring',
        icon: '💡',
        conditional: true,
        values: ['0/1-10V', 'DALI', 'Fasedæmp (standard lysdæmpning)', 'LED-bånd', 'Lavvoltsbelysning (12V/24V)', 'Lysstyring (tænd/sluk)']
    },
    {
        key: 'installationsmetode',
        icon: '🔧',
        values: ['Dåsemontering (EU dåse)', 'Indbygning (bag kontakt eller i dåse)', 'Tavlemontering (DIN-skinne)']
    },
    {
        key: 'forsyningsspaending',
        icon: '⚡',
        values: ['200-240V AC', '24V DC', '12V DC', '9-28 VDC', '8-24 VAC', '5 VDC']
    },
    {
        key: 'protokol',
        icon: '📡',
        values: ['WiFi', 'Bluetooth', 'LAN (ethernet)', 'Matter', 'Zigbee']
    },
    {
        key: 'effektmaaling',
        icon: '📊',
        multiSelect: false,
        values: ['Ja', 'Nej']
    },
    {
        key: 'antal_kanaler',
        icon: '🔢',
        values: ['1', '2', '3', '4', '5']
    }
];

// ─── Initialize ─────────────────────────────────────────────
async function init() {
    await loadProducts();
    renderUseCases();
    renderFilters();
    bindEvents();
    applyTranslations();
}

// ─── Load Products ──────────────────────────────────────────
async function loadProducts() {
    try {
        const res = await fetch('shelly_products.json');
        products = await res.json();
        products.forEach(p => {
            p.protokol = p.protokol.map(proto =>
                proto.toLowerCase().startsWith('bluetooth') ? 'Bluetooth' : proto
            );
        });
    } catch (e) {
        console.error('Failed to load products:', e);
        products = [];
    }
}

// ─── Get KB URL for product ─────────────────────────────────
function getProductKbUrl(productName) {
    // Try exact match first
    if (PRODUCT_KB_URLS[productName]) return PRODUCT_KB_URLS[productName];
    // Try partial match (for color variants)
    for (const [key, url] of Object.entries(PRODUCT_KB_URLS)) {
        if (productName.includes(key)) return url;
    }
    // Generate URL from name
    const slug = productName.toLowerCase()
        .replace(/\s*\+\s*.*/g, '') // Remove " + BLU H&T" etc.
        .replace(/\s*\(.*?\)/g, '') // Remove parenthetical
        .replace(/black|white|silver|ivory/gi, '').trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    return `https://kb.shelly.cloud/knowledge-base/${slug}`;
}

// ─── Get image URL for product ──────────────────────────────
function getProductImage(productName) {
    if (PRODUCT_IMAGES[productName]) return PRODUCT_IMAGES[productName];
    for (const [key, url] of Object.entries(PRODUCT_IMAGES)) {
        if (productName.includes(key)) return url;
    }
    return null;
}

// ─── Render: Use Cases (Step 1) ─────────────────────────────
function renderUseCases() {
    const allUseCases = [
        'Lysstyring', 'Garageport', 'Solafskærmning', 'Energimåling 1 fase',
        'Energimåling 3 faser', 'Varmestyring', 'Varmepumpe', 'Kontrolpanel',
        'Stikkontakter', 'Ventilatorer', 'Pumper', 'Motorstyring',
        'Hastighedsstyring af ventilatorer', 'Adgangskontrol',
        'Inputlæser for afbrydere, sensorer og lignende'
    ];

    const grid = document.getElementById('usecaseGrid');
    grid.innerHTML = allUseCases.map(uc => {
        const icon = getUseCaseIcon(uc);
        return `
        <div class="usecase-card" data-usecase="${uc}">
            <div class="usecase-icon">${icon}</div>
            <h3 class="usecase-title" data-uc="${uc}">${tUseCase(uc)}</h3>
            <p class="usecase-desc" data-uc-desc="${uc}">${tUseCaseDesc(uc)}</p>
        </div>`;
    }).join('');
}

// ─── Render: Filters (Step 2) ───────────────────────────────
function renderFilters() {
    const container = document.getElementById('filtersContainer');
    container.innerHTML = filterConfig.map(config => {
        const isHidden = config.conditional && !shouldShowFilter(config.key);
        return `
        <div class="filter-group ${isHidden ? 'filter-hidden' : ''}" id="filterGroup_${config.key}">
            <div class="filter-group-header">
                <div class="filter-group-icon">${config.icon}</div>
                <div>
                    <h3 data-i18n="filterTitle_${config.key}">${t('filterTitle_' + config.key)}</h3>
                    <p data-i18n="filterDesc_${config.key}">${t('filterDesc_' + config.key)}</p>
                </div>
            </div>
            <div class="filter-options">
                ${config.values.map(val => `
                    <button class="filter-chip" data-filter="${config.key}" data-value="${val}">
                        <span class="chip-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
                        ${tFilterValue(val)}
                    </button>
                `).join('')}
            </div>
        </div>`;
    }).join('');
}

// ─── Should show conditional filter ─────────────────────────
function shouldShowFilter(key) {
    if (key !== 'type_lysstyring') return true;
    if (state.filters.type_lysstyring.length > 0) return true;
    // Show if any product matching current use cases has type_lysstyring
    const useCaseFiltered = filterByUseCases();
    return useCaseFiltered.some(p => p.type_lysstyring && p.type_lysstyring.length > 0);
}

// ─── Filter: By use cases only ──────────────────────────────
function filterByUseCases() {
    if (state.selectedUseCases.length === 0) return products;
    return products.filter(p =>
        p.anvendelse.some(a => state.selectedUseCases.includes(a))
    );
}

// ─── Filter: Full filter logic ──────────────────────────────
function getFilteredProducts() {
    return products.filter(product => {
        // Step 1: Use case filter (OR)
        if (state.selectedUseCases.length > 0) {
            if (!product.anvendelse.some(a => state.selectedUseCases.includes(a))) {
                return false;
            }
        }

        // Step 2: Spec filters (AND between categories, OR within)
        for (const [key, selected] of Object.entries(state.filters)) {
            if (selected.length === 0) continue;

            const val = product[key];

            if (key === 'effektmaaling') {
                if (val === null) return false;
                if (!selected.includes(val)) return false;
            } else if (key === 'antal_kanaler') {
                if (val === null) return false;
                if (!selected.map(Number).includes(val)) return false;
            } else {
                const arr = val || [];
                if (arr.length === 0) return false;
                if (!arr.some(item => selected.includes(item))) return false;
            }
        }
        return true;
    });
}

// ─── Render: Results (Step 3) ───────────────────────────────
function renderResults() {
    const results = getFilteredProducts();
    const grid = document.getElementById('resultsGrid');
    const noRes = document.getElementById('noResults');

    // Summary tags
    const summary = document.getElementById('resultsSummary');
    const tags = [];
    state.selectedUseCases.forEach(uc => tags.push(tUseCase(uc)));
    Object.entries(state.filters).forEach(([key, vals]) => {
        vals.forEach(v => tags.push(tFilterValue(v)));
    });
    summary.innerHTML = tags.map(tag => `
        <span class="summary-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
            ${tag}
        </span>
    `).join('');

    // Subtitle
    const subtitle = document.getElementById('resultsSubtitle');
    if (results.length === 1) {
        subtitle.textContent = t('deviceFound');
    } else {
        subtitle.textContent = t('devicesFound').replace('{n}', results.length);
    }

    if (results.length === 0) {
        grid.style.display = 'none';
        noRes.style.display = 'flex';
        return;
    }

    noRes.style.display = 'none';
    grid.style.display = 'grid';

    grid.innerHTML = results.map(product => {
        const series = extractSeries(product.navn);
        const kbUrl = getProductKbUrl(product.navn);
        const imgUrl = getProductImage(product.navn);
        const imgHtml = imgUrl
            ? `<div class="result-card-image"><img src="${imgUrl}" alt="${product.navn}" loading="lazy" onerror="this.parentElement.classList.add('img-error')"></div>`
            : `<div class="result-card-image img-error"><div class="img-placeholder">${series || '📦'}</div></div>`;

        return `
        <div class="result-card">
            ${imgHtml}
            <div class="result-card-body">
                <div class="result-card-series">${series}</div>
                <div class="result-card-name">${product.navn}</div>

                <div class="result-card-specs">
                    ${product.antal_kanaler !== null ? `
                    <div class="spec-item">
                        <span class="spec-label">${t('specChannels')}</span>
                        <span class="spec-value">${product.antal_kanaler}</span>
                    </div>` : ''}
                    ${product.effektmaaling !== null ? `
                    <div class="spec-item">
                        <span class="spec-label">${t('specPowerMon')}</span>
                        <span class="spec-value">${product.effektmaaling === 'Ja' ? t('yes') : t('no_word')}</span>
                    </div>` : ''}
                    ${product.forsyningsspaending.length > 0 ? `
                    <div class="spec-item spec-wide">
                        <span class="spec-label">${t('specVoltage')}</span>
                        <span class="spec-value">${product.forsyningsspaending.join(', ')}</span>
                    </div>` : ''}
                    <div class="spec-item spec-wide">
                        <span class="spec-label">${t('specInstall')}</span>
                        <span class="spec-value">${product.installationsmetode.join(', ')}</span>
                    </div>
                    <div class="spec-item spec-wide">
                        <span class="spec-label">${t('specProtocols')}</span>
                        <span class="spec-value">${product.protokol.join(', ')}</span>
                    </div>
                </div>

                <div class="result-card-tags">
                    ${product.anvendelse.map(a => `<span class="tag tag-blue">${tUseCase(a)}</span>`).join('')}
                    ${product.type_lysstyring.map(tl => `<span class="tag tag-green">${tl}</span>`).join('')}
                </div>

                <div class="result-card-ids">
                    ${product.ean ? `<span class="id-item"><span class="id-label">EAN</span> ${product.ean}</span>` : ''}
                    ${product.se_enummer ? `<span class="id-item"><span class="id-label">SE</span> ${product.se_enummer}</span>` : ''}
                    ${product.fi_enummer ? `<span class="id-item"><span class="id-label">FI</span> ${product.fi_enummer}</span>` : ''}
                    ${product.no_elnummer ? `<span class="id-item"><span class="id-label">NO</span> ${product.no_elnummer}</span>` : ''}
                </div>

                <a class="result-card-link" href="${kbUrl}" target="_blank" rel="noopener">
                    <span data-i18n="viewSpecs">${t('viewSpecs')}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
            </div>
        </div>`;
    }).join('');
}

function extractSeries(name) {
    if (name.includes('Gen4')) return 'Gen4';
    if (name.includes('Gen3')) return 'Gen3';
    if (name.includes('Plus')) return 'Plus';
    if (name.includes('Pro')) return 'Pro';
    if (name.includes('Wall Display')) return 'Display';
    return '';
}

// ─── Step Navigation ────────────────────────────────────────
function goToStep(step) {
    state.currentStep = step;

    // Update step indicator
    document.querySelectorAll('.step').forEach(el => {
        const s = parseInt(el.dataset.step);
        el.classList.remove('active', 'completed');
        if (s === step) el.classList.add('active');
        if (s < step) el.classList.add('completed');
    });

    // Show/hide step content
    document.querySelectorAll('.step-content').forEach((el, i) => {
        el.classList.toggle('active', i + 1 === step);
    });

    if (step === 2) {
        updateConditionalFilters();
        updateFilterAvailability();
        updatePreviewCount();
    }
    if (step === 3) {
        renderResults();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAll() {
    state.selectedUseCases = [];
    state.filters = {
        type_lysstyring: [],
        installationsmetode: [],
        forsyningsspaending: [],
        protokol: [],
        effektmaaling: [],
        antal_kanaler: []
    };

    document.querySelectorAll('.usecase-card.selected').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.filter-chip.active').forEach(c => c.classList.remove('active'));
    document.getElementById('toStep2').disabled = true;
    goToStep(1);
}

// ─── Update conditional filters ─────────────────────────────
function updateConditionalFilters() {
    const group = document.getElementById('filterGroup_type_lysstyring');
    if (!group) return;
    group.classList.toggle('filter-hidden', !shouldShowFilter('type_lysstyring'));
}

// ─── Update filter availability (hide zero-result options) ──
function updateFilterAvailability() {
    // Get products matching current use cases
    const baseProducts = filterByUseCases();

    filterConfig.forEach(config => {
        const groupEl = document.getElementById('filterGroup_' + config.key);
        if (!groupEl || groupEl.classList.contains('filter-hidden')) return;

        const chips = groupEl.querySelectorAll('.filter-chip');
        let visibleCount = 0;

        chips.forEach(chip => {
            const filterKey = chip.dataset.filter;
            const filterVal = chip.dataset.value;

            // Count how many products would match if this option were considered,
            // applying all OTHER current filter selections
            const count = countMatchesForOption(baseProducts, filterKey, filterVal);
            const isActive = chip.classList.contains('active');

            if (count === 0 && !isActive) {
                chip.classList.add('filter-unavailable');
            } else {
                chip.classList.remove('filter-unavailable');
                visibleCount++;
            }
        });

        // Hide entire group if no options are available (and none are selected)
        const hasActiveChips = state.filters[config.key].length > 0;
        groupEl.classList.toggle('filter-hidden', visibleCount === 0 && !hasActiveChips);
    });
}

// ─── Count matches for a specific filter option ─────────────
function countMatchesForOption(baseProducts, targetKey, targetValue) {
    return baseProducts.filter(product => {
        // Check all OTHER active filters (not targetKey)
        for (const [key, selected] of Object.entries(state.filters)) {
            if (key === targetKey) continue;
            if (selected.length === 0) continue;

            const val = product[key];
            if (key === 'effektmaaling') {
                if (val === null || !selected.includes(val)) return false;
            } else if (key === 'antal_kanaler') {
                if (val === null || !selected.map(Number).includes(val)) return false;
            } else {
                const arr = val || [];
                if (arr.length === 0 || !arr.some(item => selected.includes(item))) return false;
            }
        }

        // Check if this product matches the target option
        const val = product[targetKey];
        if (targetKey === 'effektmaaling') {
            return val === targetValue;
        } else if (targetKey === 'antal_kanaler') {
            return val === Number(targetValue);
        } else {
            const arr = val || [];
            return arr.includes(targetValue);
        }
    }).length;
}

// ─── Update preview count ───────────────────────────────────
function updatePreviewCount() {
    const count = getFilteredProducts().length;
    const el = document.getElementById('previewCount');
    el.textContent = `(${count})`;
}

// ─── Event Binding ──────────────────────────────────────────
function bindEvents() {
    // Use case selection (multi-select)
    document.getElementById('usecaseGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.usecase-card');
        if (!card) return;

        const uc = card.dataset.usecase;
        const idx = state.selectedUseCases.indexOf(uc);

        if (idx > -1) {
            state.selectedUseCases.splice(idx, 1);
            card.classList.remove('selected');
        } else {
            state.selectedUseCases.push(uc);
            card.classList.add('selected');
        }

        document.getElementById('toStep2').disabled = state.selectedUseCases.length === 0;
    });

    // Step navigation
    document.getElementById('toStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('toStep3').addEventListener('click', () => goToStep(3));
    document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));
    document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('startOver').addEventListener('click', resetAll);
    document.getElementById('resetBtn').addEventListener('click', resetAll);

    // Filter chips
    document.getElementById('filtersContainer').addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        const key = chip.dataset.filter;
        const val = chip.dataset.value;
        const config = filterConfig.find(c => c.key === key);
        const isMulti = config.multiSelect !== false;

        if (isMulti) {
            const idx = state.filters[key].indexOf(val);
            if (idx > -1) {
                state.filters[key].splice(idx, 1);
                chip.classList.remove('active');
            } else {
                state.filters[key].push(val);
                chip.classList.add('active');
            }
        } else {
            const group = chip.closest('.filter-group');
            if (chip.classList.contains('active')) {
                chip.classList.remove('active');
                state.filters[key] = [];
            } else {
                group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                state.filters[key] = [val];
            }
        }

        updateConditionalFilters();
        updateFilterAvailability();
        updatePreviewCount();
    });

    // Language selector
    document.getElementById('langBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('open');
    });

    document.getElementById('langDropdown').addEventListener('click', (e) => {
        const opt = e.target.closest('.lang-option');
        if (!opt) return;
        const lang = opt.dataset.lang;
        setLanguage(lang);
        // Re-render use cases and filters with new language
        renderUseCases();
        // Restore selected state on use case cards
        state.selectedUseCases.forEach(uc => {
            const card = document.querySelector(`.usecase-card[data-usecase="${uc}"]`);
            if (card) card.classList.add('selected');
        });
        renderFilters();
        // Restore selected state on filter chips
        Object.entries(state.filters).forEach(([key, vals]) => {
            vals.forEach(val => {
                const chip = document.querySelector(`.filter-chip[data-filter="${key}"][data-value="${val}"]`);
                if (chip) chip.classList.add('active');
            });
        });
        if (state.currentStep === 3) renderResults();
        document.getElementById('langDropdown').classList.remove('open');
    });

    // Close language dropdown on outside click
    document.addEventListener('click', () => {
        document.getElementById('langDropdown').classList.remove('open');
    });
}

// ─── Start ──────────────────────────────────────────────────
init();
