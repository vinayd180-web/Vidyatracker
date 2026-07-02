// ============================================
// NAVIGATION CONTROLLER
// Grammar Galaxy - Powered by Shree Parth Academy
// ============================================

const Navigation = {
    currentPage: 'dashboard',
    container: document.getElementById('page-container'),
    pages: {
        'dashboard': 'pages/dashboard.html',
        'cheat-sheet': 'pages/cheat-sheet.html',
        'quiz': 'pages/quiz.html',
        'writing-skills': 'pages/writing-skills.html',
        'reading-passages': 'pages/reading-passages.html',
        'achievements': 'pages/achievements.html'
    },
    
    // Navigate to a page
    navigate: function(pageName, data = {}) {
        this.currentPage = pageName;
        
        // Show loading
        this.container.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;min-height:100vh;padding:40px;">
                <div style="text-align:center;">
                    <div style="font-size:40px;margin-bottom:16px;">🚀</div>
                    <div style="color:var(--text-muted);">Loading...</div>
                </div>
            </div>
        `;
        
        // Build URL with query parameters
        let url = this.pages[pageName] || this.pages['dashboard'];
        const params = new URLSearchParams();
        if (data.topicId) params.set('topic', data.topicId);
        if (data.class) params.set('class', data.class);
        if (params.toString()) url += '?' + params.toString();
        
        // Fetch the page
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Page not found');
                return response.text();
            })
            .then(html => {
                this.container.innerHTML = html;
                
                // Execute scripts in the page
                const scripts = this.container.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    if (script.src) {
                        newScript.src = script.src;
                    } else {
                        newScript.textContent = script.textContent;
                    }
                    document.body.appendChild(newScript);
                });
                
                // Initialize page
                if (window.initPage) {
                    window.initPage();
                }
                
                // Update URL hash
                window.location.hash = pageName;
            })
            .catch(error => {
                console.error('Navigation error:', error);
                this.container.innerHTML = `
                    <div style="display:flex;justify-content:center;align-items:center;min-height:100vh;padding:40px;">
                        <div style="text-align:center;">
                            <div style="font-size:60px;margin-bottom:16px;">😅</div>
                            <h3 style="color:var(--text-primary);">Page not found</h3>
                            <p style="color:var(--text-muted);">The page you're looking for doesn't exist.</p>
                            <button onclick="Navigation.navigate('dashboard')" class="btn btn-primary" style="margin-top:16px;">
                                Go Home
                            </button>
                        </div>
                    </div>
                `;
            });
    },
    
    // Handle navigation from iframe
    handleMessage: function(event) {
        if (event.data.type === 'navigate') {
            this.navigate(event.data.page, event.data.data || {});
        }
        if (event.data.type === 'updateDashboard') {
            // Update dashboard in iframe
            const dashboardFrame = this.container.querySelector('iframe');
            if (dashboardFrame && dashboardFrame.contentWindow) {
                dashboardFrame.contentWindow.postMessage({ type: 'updateDashboard' }, '*');
            }
        }
    }
};

// ============================================
// SETUP EVENT LISTENERS
// ============================================

// Hash-based navigation
window.addEventListener('hashchange', () => {
    const page = window.location.hash.replace('#', '') || 'dashboard';
    Navigation.navigate(page);
});

// Message from iframes
window.addEventListener('message', (event) => {
    Navigation.handleMessage(event);
});

// Expose Navigation globally
window.Navigation = Navigation;

console.log('🧭 Navigation controller loaded!');