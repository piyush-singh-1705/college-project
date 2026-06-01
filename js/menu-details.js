// Dynamic Menu Data
const menuData = {
    'butter-chicken': {
        title: "Zafran Butter Chicken",
        price: "₹750",
        image: "assets/menu_butter_chicken.png",
        desc: "Our signature dish. Tender chicken pieces are marinated overnight with hung curd and select spices, smoked over charcoal, and then simmered in a velvety, buttery tomato and cashew gravy.",
        ingredients: ["Charcoal-Smoked Chicken Tikka", "San Marzano Tomatoes", "Kashmiri Red Chilli", "Fresh Cream & Butter", "Kasuri Methi (Dried Fenugreek)"]
    },
    'paneer-tikka': {
        title: "Tandoori Paneer Tikka",
        price: "₹550",
        image: "assets/menu_paneer_tikka.png",
        desc: "A vegetarian delight. Premium quality cottage cheese cubes marinated in a robust, tangy, and spicy hung curd marinade, skewer-roasted in our traditional clay tandoor alongside bell peppers and onions.",
        ingredients: ["Fresh Cottage Cheese", "Hung Curd", "Mustard Oil", "Ajwain (Carom Seeds)", "Bell Peppers & Red Onions"]
    },
    'biryani': {
        title: "Nizami Dum Biryani",
        price: "₹950",
        image: "assets/menu_biryani.png",
        desc: "A royal feast from the kitchens of the Nizams. Fragrant long-grain basmati rice layered with succulent morsels of mutton, slow-cooked in a sealed brass handi using the traditional 'dum' method to trap all aromas.",
        ingredients: ["Premium Basmati Rice", "Tender Mutton", "Saffron Milk", "Crispy Fried Onions (Birista)", "Rose Water & Kewra"]
    },
    'dal-makhani': {
        title: "Signature Dal Makhani",
        price: "₹450",
        image: "assets/menu_dal_makhani.png",
        desc: "Ultimate comfort food. Black lentils and red kidney beans simmered overnight on a low wood fire until perfectly creamy, enriched with homemade butter and fresh cream.",
        ingredients: ["Whole Black Lentils", "Kidney Beans", "Tomato Puree", "White Butter", "Roasted Cumin Powder"]
    },
    'shahi-tukda': {
        title: "Royal Shahi Tukda",
        price: "₹350",
        image: "assets/menu_shahi_tukda.png",
        desc: "A majestic dessert originating from Awadh. Golden-fried bread slices luxuriously soaked in saffron-infused milk syrup, topped with thick, sweetened condensed milk (rabri) and an array of dry fruits.",
        ingredients: ["Fried Bread", "Saffron Milk", "Rabri (Sweetened Thick Milk)", "Pistachios & Almonds", "Edible Silver Foil"]
    },
    'mango-lassi': {
        title: "Saffron Mango Lassi",
        price: "₹250",
        image: "assets/menu_lassi.png",
        desc: "A refreshing traditional Indian yogurt-based drink made by blending thick set curd with sweet Alphonso mango pulp, slightly sweetened and infused with premium saffron strands.",
        ingredients: ["Thick Yogurt", "Alphonso Mango Pulp", "Saffron Strands", "Cardamom Powder", "Crushed Pistachios"]
    },
    'samosa': {
        title: "Crispy Samosa Chaat",
        price: "₹200",
        image: "assets/menu_samosa.png",
        desc: "A popular Indian street food elevated. Crushed crispy potato samosas topped with spicy yellow peas, chilled yogurt, sweet tamarind chutney, mint-coriander chutney, and crispy chickpea noodles (sev).",
        ingredients: ["Potato & Pea Samosa", "Mint Coriander Chutney", "Sweet Tamarind Chutney", "Beaten Yogurt", "Crispy Sev"]
    },
    'tandoori-chicken': {
        title: "Classic Tandoori Chicken",
        price: "₹650",
        image: "assets/menu_tandoori_chicken.png",
        desc: "The quintessential Indian starter. Whole chicken marinated for 24 hours in a fiery red marinade made of yogurt, garlic, ginger, and a special blend of tandoori spices, roasted in clay oven.",
        ingredients: ["Whole Chicken", "Yogurt Marinade", "Degi Mirch (Paprika)", "Ginger Garlic Paste", "Fresh Lemon"]
    },
    'palak-paneer': {
        title: "Lehsuni Palak Paneer",
        price: "₹480",
        image: "assets/menu_palak_paneer.png",
        desc: "A vibrant and healthy curry. Soft cubes of paneer simmered in a smooth, creamy spinach puree tempered with an abundance of burnt garlic and whole red chilies.",
        ingredients: ["Fresh Spinach", "Paneer (Cottage Cheese)", "Burnt Garlic", "Fresh Cream", "Whole Indian Spices"]
    },
    'gulab-jamun': {
        title: "Warm Gulab Jamun",
        price: "₹300",
        image: "assets/menu_gulab_jamun.png",
        desc: "India’s most beloved dessert. Spongy, melt-in-your-mouth milk solid dumplings deep-fried to a golden brown hue, then bathed in a warm, fragrant sugar syrup infused with rose water and cardamom.",
        ingredients: ["Khoya (Milk Solids)", "Rose Water", "Green Cardamom", "Sugar Syrup", "Saffron"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation
    setTimeout(() => {
        document.querySelector('.reveal').classList.add('active');
    }, 100);

    // Get ID from URL query parameters (e.g., ?id=butter-chicken)
    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get('id');

    const item = menuData[dishId];

    if (item) {
        document.getElementById('detail-title').innerText = item.title;
        document.getElementById('detail-price').innerText = item.price;
        document.getElementById('detail-img').src = item.image;
        document.getElementById('detail-desc').innerText = item.desc;

        const ingredientsList = document.getElementById('detail-ingredients');
        item.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.innerText = ing;
            ingredientsList.appendChild(li);
        });
    } else {
        // Fallback for invalid ID
        document.getElementById('detail-title').innerText = "Dish Not Found";
        document.getElementById('detail-desc').innerText = "We couldn't find the dish you were looking for. Please go back to the menu and select again.";
        document.getElementById('detail-price').innerText = "";
        document.getElementById('detail-img').style.display = "none";
    }
});
