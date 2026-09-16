// Unless directed specifically by the tutor, you MUST NOT change any of the pre-written code
// other than to fill in the blanks (?????)

// Interface for a room returned from the server.
interface Room {
    id: number;
    city: string;
    hotel: string;
    date: string;
    rtype: string;
    nbeds: number;
    price: number;
}

// Q1 replace the ????? so that this event listener handles click events on
// the 'search for room' button.
// HINT: Look at index.html to find the correct button ID.
document.getElementById('btnRoomSearch')!.addEventListener('click', async () => {

    // Q2 complete these statements to read city, hotel and date from form.
    // HINT: You need to call .value on the form input element, e.g.
    //   (document.getElementById('myInput') as HTMLInputElement).value
    const city: string = `cityName`;
    const hotel: string = `hotelName`;
    const date: string = `checkInDate`;

    // Q3 complete the fetch API call to send the user's chosen city, hotel and
    // date to the 'room search' route in server.ts.
    // HINT: Look at the URL pattern of the route in server.ts (around the
    // app.get(...) line). You will need to put the three values into the URL
    // in the correct order. A template literal (backticks) is the cleanest way.
    const response = await fetch(`/api/rooms/${city}/${hotel}/${date}`);
const result = await response.json();

let html = '';
result.forEach((room: any) => {
    html += `
        <p>
            ${room.city} - ${room.hotel}<br />
            Date: ${room.date}<br />
            Room type: ${room.roomType}<br />
            Beds: ${room.nBeds}<br />
            Price per night: £${room.price}
            <button type='button' class='btnBook' data-id='${room.id}'>Book!</button>
        </p>
    `;
});

const searchResultsDiv = document.getElementById('searchResults') as HTMLElement;
searchResultsDiv.innerHTML = html;

// Attach listeners AFTER the buttons exist in the DOM
const bookButtons = document.querySelectorAll('.btnBook');
bookButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
        const id = (btn as HTMLElement).dataset.id;
        const bookResponse = await fetch(`/room/book/${id}`, {
            method: 'POST'
        });
        const bookResult = await bookResponse.json();
        // update the page to show booking confirmation/status,
        // e.g. searchResultsDiv or a dedicated status div
    });
});

    // Q6 complete so that it parses the JSON returned and outputs the
    // data to the searchResults <div> in the format shown on the paper.
    // HINT: Use a forEach loop over result, and build the HTML using template literals.

    // Q8 update with a book button - see question paper.
    // HINT: Append a <button> per result with a data attribute holding the room id,
    // then attach a click listener that POSTs to /room/book/:id.

});

// Q9 replace the ????? so that this event listener handles click events on
// the 'add room' button.
document.getElementById('btnRoomAdd')!.addEventListener('click', async () => {

    // Q9 complete these statements to read room details from the form
    const city: string = (document.getElementById('cityName2') as HTMLInputElement).value;
    const hotel: string = (document.getElementById('hotelName2') as HTMLInputElement).value;
    const date: string = (document.getElementById('theDate') as HTMLInputElement).value;
    const rtype: string = (document.getElementById('roomType') as HTMLInputElement).value;
    const nbeds: string = (document.getElementById('nBeds') as HTMLInputElement).value;
    const thePrice: string = (document.getElementById('price') as HTMLInputElement).value;

    // Q9 complete the fetch API call to send the data to the 'add room'
    // route on the server as a POST request.
    // HINT: POST requests need three things — method, headers (Content-Type), and body.
    // The body should be the JSON-stringified object of the fields above.
    // You MUST use the variables declared above (do not hard-code).

});
