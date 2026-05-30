let map = L.map('map').setView([20.2500, 105.9000], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let currentMarkerLayer = L.layerGroup().addTo(map);
let userMarker = null;

function displayPlaces(filterCategory) {
    currentMarkerLayer.clearLayers();
    let filtered = places.filter(p => {
        if (filterCategory === "all") return true;
        return p.category === filterCategory;
    });
    filtered.forEach(place => {
        let popupContent = `
            <b>${place.icon} ${place.name}</b><br>
            ${place.description.substring(0, 80)}...<br>
            <button onclick="showDetail(${place.id})">📖 Xem chi tiết</button>
        `;
        let marker = L.marker([place.lat, place.lng]).bindPopup(popupContent);
        marker.addTo(currentMarkerLayer);
    });
}

window.showDetail = function(id) {
    let place = places.find(p => p.id === id);
    if (!place) return;
    let panel = document.getElementById("infoPanel");
    let content = document.getElementById("panelContent");
    let html = `
        <h3>${place.icon} ${place.name}</h3>
        <p>${place.description}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${place.address}</p>
    `;
    if (place.images && place.images.length && place.images[0]) {
        html += `<div><img src="${place.images[0]}" style="width:100%; border-radius:12px; margin:8px 0;"></div>`;
    }
    if (place.video && place.video !== "") {
        html += `<div><iframe width="100%" height="180" src="${place.video}" frameborder="0" allowfullscreen></iframe></div>`;
    }
    if (place.audio && place.audio !== "") {
        html += `<audio controls src="${place.audio}" style="width:100%; margin:8px 0;"></audio>`;
    }
    html += `<button onclick="window.open('${place.mapsUrl}', '_blank')" class="dir-btn">
                <i class="fas fa-directions"></i> Chỉ đường Google Maps
             </button>`;
    content.innerHTML = html;
    panel.style.display = "block";
};

document.getElementById("closePanel").onclick = () => {
    document.getElementById("infoPanel").style.display = "none";
};

function locateUser() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;
            if (userMarker) map.removeLayer(userMarker);
            userMarker = L.marker([lat, lng], {
                icon: L.divIcon({ className: "user-dot", html: "📍", iconSize: [24,24] })
            }).addTo(map);
            map.setView([lat, lng], 15);
        }, err => {
            alert("Vui lòng cho phép truy cập vị trí để xem bạn đang ở đâu.");
        });
    } else {
        alert("Trình duyệt không hỗ trợ định vị.");
    }
}

// Gán sự kiện cho các nút
document.getElementById("btnMap").onclick = () => { displayPlaces("all"); locateUser(); };
document.getElementById("btnFood").onclick = () => { displayPlaces("am_thuc"); };
document.getElementById("btnStay").onclick = () => { displayPlaces("homestay"); };
document.getElementById("btnCheckin").onclick = () => { displayPlaces("di_tich"); };
document.getElementById("btnContact").onclick = () => {
    alert("📞 Liên hệ: Phòng Quản lý Du lịch cộng đồng Ninh Bình - SĐT: 0229.3.888.888\nEmail: tourism@ninhbinh.gov.vn");
};

// Khởi động
displayPlaces("all");
locateUser();