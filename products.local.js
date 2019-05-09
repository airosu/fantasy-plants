const localProducts = [
    {
        "id": "1",
        "name": "Umbrella Tree",
        "description": "",
        "tags": "dec, tree, decoration",
        "src": "images/products/1.png",
        "cls": "decoration",
        "price": "199.89"
    },
    {
        "id": "2",
        "name": "Outdoor Torch",
        "description": "",
        "tags": "outdoor, torch, fire",
        "src": "images/products/2.png",
        "cls": "decoration",
        "price": "274.99"
    },
    {
        "id": "3",
        "name": "Floating Island",
        "description": "",
        "tags": "float, island, outdoor, nature, rock",
        "src": "images/products/3.png",
        "cls": "decoration",
        "price": "300.00"
    },
    {
        "id": "4",
        "name": "Stone Greenery",
        "description": "",
        "tags": "stone, plant, outside, outdoor, decoration,",
        "src": "images/products/4.png",
        "cls": "decoration",
        "price": "349.99"
    },
    {
        "id": "5",
        "name": "Dream Gate",
        "description": "",
        "tags": "stone, outside, outdoors, nature, garden",
        "src": "images/products/15.png",
        "cls": "decoration",
        "price": "1200.00"
    },
    {
        "id": "6",
        "name": "Garden Lamp - Pole",
        "description": "",
        "tags": "garden, lamp, decoration, outside, outdoors, light",
        "src": "images/products/6.png",
        "cls": "decoration",
        "price": "89.99"
    },
    {
        "id": "7",
        "name": "Agave",
        "description": "",
        "tags": "outside, outdoor, garden, plant, spikey",
        "src": "images/products/7.png",
        "cls": "decoration",
        "price": "50.00"
    },
    {
        "id": "8",
        "name": "Giant Mushrooms",
        "description": "",
        "tags": "decoration, mushrooms",
        "src": "images/products/8.png",
        "cls": "decoration",
        "price": "199.99"
    },
    {
        "id": "9",
        "name": "Full Garden Set",
        "description": "",
        "tags": "garden, stone, outside, outdoors",
        "src": "images/products/9.png",
        "cls": "decoration",
        "price": "1499.99"
    },
    {
        "id": "10",
        "name": "Fantasy Moongate",
        "description": "",
        "tags": "stone, garden, outdoors, outside",
        "src": "images/products/10.png",
        "cls": "decoration",
        "price": "899.89"
    },
    {
        "id": "11",
        "name": "Mushroom Set",
        "description": "",
        "tags": "mushroom, garden, decoration, outside, outdoors",
        "src": "images/products/11.png",
        "cls": "decoration",
        "price": "112.99"
    },
    {
        "id": "12",
        "name": "Garden Lamp - Umbrella",
        "description": "",
        "tags": "garden, outside, outdoors, lamp, light, mushroom, umbrella, 1, 2, 3, 4",
        "src": "images/products/12.png",
        "cls": "decoration",
        "price": "99.89"
    },
    {
        "id": "13",
        "name": "Garden Gnome House",
        "description": "",
        "tags": "outside, outdoors, decoration, stone",
        "src": "images/products/13.png",
        "cls": "decoration",
        "price": "299.79"
    },
    {
        "id": "14",
        "name": "Garden Well Decoration",
        "description": "",
        "tags": "garden, well, decoration, water, outside, outdoors",
        "src": "images/products/14.png",
        "cls": "decoration",
        "price": "799.00"
    },
    {
        "id": "15",
        "name": "Garden Swing",
        "description": "",
        "tags": "garden, outside, outdoors",
        "src": "images/products/15.png",
        "cls": "decoration",
        "price": "499.00"
    },
    {
        "id": "16",
        "name": "Blue Moon",
        "description": "",
        "tags": "jar, light",
        "src": "images/products/16.png",
        "cls": "jar-wrap-lg",
        "price": "79.00"
    },
    {
        "id": "17",
        "name": "Snow White",
        "description": "",
        "tags": "jar, light",
        "src": "images/products/17.png",
        "cls": "jar-wrap",
        "price": "79.00"
    },
    {
        "id": "18",
        "name": "Ocean's Light",
        "description": "",
        "tags": "jar, light, 2, 3, 4",
        "src": "images/products/18.png",
        "cls": "jar-wrap",
        "price": "79.00"
    },
    {
        "id": "19",
        "name": "Dusk Ambience",
        "description": "",
        "tags": "jar, light",
        "src": "images/products/19.png",
        "cls": "jar-wrap-lg",
        "price": "79.0"
    },
    {
        "id": "20",
        "name": "Office Feria",
        "description": "",
        "tags": "plants, office, indoors, green, forest",
        "src": "images/products/20.png",
        "cls": "plant",
        "price": "89.99"
    },
    {
        "id": "21",
        "name": "Morrowind Ascadian Isles",
        "description": "",
        "tags": "indoor, pot, plants, green, island",
        "src": "images/products/21.png",
        "cls": "plant",
        "price": "299.00"
    },
    {
        "id": "22",
        "name": "Paper Rose Table Ornament",
        "description": "",
        "tags": "rose, flower, ornament, decoration",
        "src": "images/products/22.png",
        "cls": "plant",
        "price": "49.99"
    },
    {
        "id": "23",
        "name": "Buxus Topiary Round",
        "description": "",
        "tags": "outdoors, exterior, garden, display, green, tree, 3, 4",
        "src": "images/products/23.png",
        "cls": "plant",
        "price": "129.89"
    },
    {
        "id": "24",
        "name": "Entrance Display Pyramid Buxus",
        "description": "",
        "tags": "outdoor, exterior, garden, green, tree, plant",
        "src": "images/products/24.png",
        "cls": "plant",
        "price": "149.99"
    },
    {
        "id": "25",
        "name": "Gladious Decor",
        "description": "",
        "tags": "decoration, home, indoor, pot, plant",
        "src": "images/products/25.png",
        "cls": "plant",
        "price": "89.00"
    },
    {
        "id": "26",
        "name": "Narcissus Cantabricus",
        "description": "",
        "tags": "indoors, flower, pot, decor, home, 4",
        "src": "images/products/26.png",
        "cls": "plant",
        "price": "74.50"
    },
    {
        "id": "27",
        "name": "Tropical Palm Tree",
        "description": "",
        "tags": "trees, garden, outdoors, outisde, exterior,",
        "src": "images/products/27.png",
        "cls": "plant",
        "price": "599.00"
    },
    {
        "id": "28",
        "name": "Hanging Lights Tree",
        "description": "",
        "tags": "trees, outside, outdoors, exterior, garden",
        "src": "images/products/28.png",
        "cls": "plant",
        "price": "499.00"
    },
    {
        "id": "29",
        "name": "Spiked Forest Tree",
        "description": "",
        "tags": "",
        "src": "images/products/29.png",
        "cls": "plant",
        "price": "199.00"
    }   
];

