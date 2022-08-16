(function () {
    const query = window.location.search;
    if (query.startsWith('?p=')) {
        const route = decodeURIComponent(query.substr(3));
        window.history.replaceState(null, null, route);
    }
})();