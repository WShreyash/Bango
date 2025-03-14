document.getElementById('searchBox').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = this.value.trim();

        if (query) {
            let searchURL = '';

            if (query.endsWith('.yt')) {
                const cleanQuery = encodeURIComponent(query.replace('.yt', '').trim());
                searchURL = `https://www.youtube.com/results?search_query=${cleanQuery}`;
            } else if (query.endsWith('.gpt')) {
                const cleanQuery = encodeURIComponent(query.replace('.gpt', '').trim());
                searchURL = `https://chat.openai.com/?q=${cleanQuery}`;
            } else {
                searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }

            window.open(searchURL, '_blank', 'noopener,noreferrer');

            window.electron.hideWindow();
        }

        this.value = '';
    }
});