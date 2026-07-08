
const menu = [
    {
        id: 1,
        title: "ข้าวผัดกะเพราไข่ดาว",
        category: "main",
        price: "60 ฿",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        desc: "กะเพราหมูสับแท้ๆ รสชาติจัดจ้าน หอมกลิ่นกระทะ เสิร์ฟพร้อมไข่ดาวขอบกรอบไข่แดงเยิ้มๆ"
    },
    {
        id: 2,
        title: "สเต๊กไก่สไปซี่",
        category: "main",
        price: "120 ฿",
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500",
        desc: "อกไก่นุ่มหมักเครื่องเทศสไปซี่ ย่างจนได้ที่ เสิร์ฟพร้อมเฟรนช์ฟรายส์และสลัดผัก"
    },
    {
        id: 3,
        title: "บิงซูสตรอว์เบอร์รี่",
        category: "dessert",
        price: "159 ฿",
        img: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?w=500",
        desc: "เกล็ดหิมะรสนมฮอกไกโด นุ่มละมุนลิ้น ท็อปปิ้งด้วยสตรอว์เบอร์รี่สดและซอสเข้มข้น"
    },
    {
        id: 4,
        title: "ช็อกโกแลตลาวา",
        category: "dessert",
        price: "89 ฿",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
        desc: "เค้กช็อกโกแลตอุ่นๆ ที่มีลาวาช็อกโกแลตเข้มข้นไหลเยิ้ม ทานคู่กับไอศกรีมวนิลา"
    },
    {
        id: 5,
        title: "ชาไทยพรีเมียม",
        category: "drink",
        price: "50 ฿",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500",
        desc: "ชาใต้แท้ๆ กลิ่นหอมเป็นเอกลักษณ์ รสชาติหวานมันกำลังดี ทานแล้วสดชื่น"
    },
    {
        id: 6,
        title: "มัทฉะลาเต้เย็น",
        category: "drink",
        price: "65 ฿",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500",
        desc: "ผงมัทฉะแท้จากญี่ปุ่น ผสมผสานกับนมสดแท้ 100% ได้รสชาติเข้มข้นนุ่มลึก"
    }
];

const menuItemsContainer = document.getElementById("menu-items");
const filterBtns = document.querySelectorAll(".filter-btn");


window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
                    <img src="${item.img}" alt="${item.title}" class="photo" />
                    <div class="item-info">
                        <div class="item-title">
                            <h4>${item.title}</h4>
                            <span class="price">${item.price}</span>
                        </div>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    menuItemsContainer.innerHTML = displayMenu;
}


filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        filterBtns.forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
                return menuItem;
            }
        });

        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});