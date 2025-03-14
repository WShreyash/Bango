document.getElementById('searchBox').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = encodeURIComponent(this.value.trim());
        if (query) {
            window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
        }
        this.value = '';
    }
});
