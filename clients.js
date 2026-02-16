 // clients.js - Master Data File for Obsera Solutions

const OBSERA_CLIENTS = {
    "uruvachal": {
        name: "Bilal Thattukada",
        tag: "17h Active",
        hours: 17,
        mapLink: "https://maps.google.com/?q=Bilal+Thattukada+Uruvachal",
        menuSheetId: "1s9NCrlKf3i4lt4VL3WKp8A9o9DXYrsE3ccddPVkMyk8", 
        adSheetId: "YOUR_AD_SHEET_ID_HERE" // <--- Paste Bilal's Ad Sheet ID here
    },
    "medical": {
        name: "Medical College Junction",
        tag: "24h Active",
        hours: 24,
        mapLink: "https://maps.google.com/?q=Kozhikode+Medical+College",
        menuSheetId: "1s9NCrlKf3i4lt4VL3WKp8A9o9DXYrsE3ccddPVkMyk8",
        adSheetId: "1OhzIcctYTyeKQEA-9K5tFZnQqeEu38r-dHQfvXdby3s"
    },
       "test": {
        name: "coffeday",
        tag: "10h Active",
        hours: 10,
        mapLink: "",
        menuSheetId: "1s9NCrlKf3i4lt4VL3WKp8A9o9DXYrsE3ccddPVkMyk8",
        adSheetId: "1OhzIcctYTyeKQEA-9K5tFZnQqeEu38r-dHQfvXdby3s"
    },
};
 

const LOCATIONS_DATA = Object.keys(OBSERA_CLIENTS).map(key => {
    return { id: key, ...OBSERA_CLIENTS[key] };
});
