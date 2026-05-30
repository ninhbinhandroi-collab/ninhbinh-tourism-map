const places = [
    {
        id: 1,
        name: "Tràng An",
        lat: 20.2545,
        lng: 105.9146,
        category: "di_tich",
        icon: "🏛️",
        description: "Khu du lịch sinh thái Tràng An, thuyền nan qua các hang động, được UNESCO công nhận.",
        images: ["https://cdn.vietnamtourism.gov.vn/vietnamtourism/images/photos/2023/trang-an.jpg"],
        video: "https://www.youtube.com/embed/2Q9zN9RvX5M",
        audio: "",
        address: "Xã Tràng An, TP Ninh Bình",
        mapsUrl: "https://maps.google.com/?q=20.2545,105.9146"
    },
    {
        id: 2,
        name: "Chùa Bái Đính",
        lat: 20.2618,
        lng: 105.8264,
        category: "di_tich",
        icon: "🏛️",
        description: "Chùa lớn nhất Việt Nam, có tượng Phật đồng cao 10m, hành lang La Hàn dài nhất châu Á.",
        images: ["https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/chua-bai-dinh-ninh-binh-3.jpg"],
        video: "https://www.youtube.com/embed/abc123",
        audio: "",
        address: "Xã Gia Sinh, Huyện Gia Viễn",
        mapsUrl: "https://maps.google.com/?q=20.2618,105.8264"
    },
    {
        id: 3,
        name: "Nhà hàng Cây Bàng (đặc sản dê núi)",
        lat: 20.2500,
        lng: 105.9100,
        category: "am_thuc",
        icon: "🍜",
        description: "Món dê tái, dê xào lăn, cơm cháy chà bông rất ngon.",
        images: [],
        video: "",
        audio: "",
        address: "Đường Tràng An, gần bến thuyền",
        mapsUrl: "https://maps.google.com/?q=20.2500,105.9100"
    },
    {
        id: 4,
        name: "Homestay Tam Cốc Bungalow",
        lat: 20.2190,
        lng: 105.9150,
        category: "homestay",
        icon: "🏨",
        description: "Phòng sạch sẽ, view cánh đồng, có xe đạp miễn phí.",
        images: [],
        video: "",
        audio: "",
        address: "Thôn Văn Lâm, Ninh Hải, Hoa Lư",
        mapsUrl: "https://maps.google.com/?q=20.2190,105.9150"
    },
    {
        id: 5,
        name: "WC Công viên Trung tâm TP Ninh Bình",
        lat: 20.2490,
        lng: 105.9750,
        category: "wc",
        icon: "🚻",
        description: "Nhà vệ sinh sạch sẽ, miễn phí.",
        images: [],
        video: "",
        audio: "",
        address: "Đường Trần Hưng Đạo, TP Ninh Bình",
        mapsUrl: "https://maps.google.com/?q=20.2490,105.9750"
    },
    {
        id: 6,
        name: "Bãi đỗ xe Tràng An",
        lat: 20.2530,
        lng: 105.9130,
        category: "parking",
        icon: "🅿️",
        description: "Bãi xe rộng, có bảo vệ, giá 20k/ngày.",
        images: [],
        video: "",
        audio: "",
        address: "Đường Tràng An, TP Ninh Bình",
        mapsUrl: "https://maps.google.com/?q=20.2530,105.9130"
    }
];

// Không cần sửa phần dưới
const categories = {
    di_tich: { name: "Di tích", icon: "🏛️", filter: p => p.category === "di_tich" },
    am_thuc: { name: "Quán ăn", icon: "🍜", filter: p => p.category === "am_thuc" },
    cafe: { name: "Cafe", icon: "☕", filter: p => p.category === "cafe" },
    homestay: { name: "Homestay", icon: "🏨", filter: p => p.category === "homestay" },
    wc: { name: "WC công cộng", icon: "🚻", filter: p => p.category === "wc" },
    parking: { name: "Bãi đỗ xe", icon: "🅿️", filter: p => p.category === "parking" }
};