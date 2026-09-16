async function testSearch() {
    const response = await fetch('/search/London/Premier%20Inn/150626');
    const json = await response.json();
    assertEquals(json, [{
        "id": 1,
        "city": "London",
        "hotel": "Premier Inn",
        "date": "150626",
        "rtype": "Single",
        "nbeds": 1,
        "price": 89.0
    }, {
        "id": 2,
        "city": "London",
        "hotel": "Premier Inn",
        "date": "150626",
        "rtype": "Double",
        "nbeds": 1,
        "price": 119.0
    }]);
}
