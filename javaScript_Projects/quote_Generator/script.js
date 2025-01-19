const api_Url="https://api.quotable.io";



console.log("Fetching from URL:", api_Url);


async function getquote(url) {
    try {
        const response = await fetch(url);
        
        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data); // Log the data to the console
        return data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}

getquote(api_Url);
