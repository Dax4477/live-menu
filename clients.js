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
        menuSheetId: "PUT_MEDICAL_MENU_SHEET_ID_HERE",
        adSheetId: "PUT_MEDICAL_AD_SHEET_ID_HERE"
    }
};

const LOCATIONS_DATA = Object.keys(OBSERA_CLIENTS).map(key => {
    return { id: key, ...OBSERA_CLIENTS[key] };
});
