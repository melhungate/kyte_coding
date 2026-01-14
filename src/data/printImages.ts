// Kyte Baby Print Image Database
// Maps print names to their image URLs from kytebaby.com

export interface PrintInfo {
  name: string;
  imageUrl: string;
  year?: string;
}

// Comprehensive print database with images
export const printDatabase: Record<string, string> = {
  // 2025 Prints
  "Poi": "https://kytebaby.com/cdn/shop/files/1908PI-01.jpg",
  "Lilikoi": "https://kytebaby.com/cdn/shop/files/1908LK-01.jpg",
  "Guava": "https://kytebaby.com/cdn/shop/files/1908GU-01.jpg",
  "Makai": "https://kytebaby.com/cdn/shop/files/1908MK-01.jpg",
  "Honu": "https://kytebaby.com/cdn/shop/files/1908HN-01.jpg",
  "Canyon": "https://kytebaby.com/cdn/shop/files/1908CO-01.jpg",
  "Mist": "https://kytebaby.com/cdn/shop/files/1908MI-01.jpg",
  "Dew": "https://kytebaby.com/cdn/shop/files/1908DW-01.jpg",
  "Blush Butterfly": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-blush-butterfly-35281979080815.jpg",
  "Fishing": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-fishing-35282042060911.jpg",
  "Love Bug": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-love-bug-35550397956207.jpg",
  "Bee Mine": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-bee-mine-35550408867951.jpg",
  "Hibiscus": "https://kytebaby.com/cdn/shop/files/1911HI-01.jpg",
  "Humpback": "https://kytebaby.com/cdn/shop/files/1911HBLO-01.jpg",
  "Dolphin": "https://kytebaby.com/cdn/shop/files/1911DL-01.jpg",
  "Blush Rabbit": "https://kytebaby.com/cdn/shop/files/1911BNBS-01.png",
  "Ice Rabbit": "https://kytebaby.com/cdn/shop/files/1911BNIC-01.jpg",
  "Aloe Chick": "https://kytebaby.com/cdn/shop/files/1911CHAL-01.jpg",
  "Barbie Beach": "https://kytebaby.com/cdn/shop/files/1911BBBC-01.jpg",
  "Barbie Astronaut": "https://kytebaby.com/cdn/shop/files/1911BBAS-01.jpg",
  "Golf": "https://kytebaby.com/cdn/shop/files/1911GOSG-01.jpg",
  "Vintage Truck": "https://kytebaby.com/cdn/shop/files/1911VT-01.jpg",
  "Poi Rainbow": "https://kytebaby.com/cdn/shop/files/1911RBPI-01.jpg",
  "Makai Rainbow": "https://kytebaby.com/cdn/shop/files/1911RBMK-01.jpg",
  "Papaya": "https://kytebaby.com/cdn/shop/files/1911PYHN-01.jpg",
  "Pineapple": "https://kytebaby.com/cdn/shop/files/1911PPMK-01.jpg",
  "Liberty Rip Tide": "https://kytebaby.com/cdn/shop/files/1911RTRB-01.jpg",
  "Celebration": "https://kytebaby.com/cdn/shop/files/1911FWTH-01.jpg",
  "Dew Surf": "https://kytebaby.com/cdn/shop/files/1911SURF-01.jpg",
  "Yellowstone": "https://kytebaby.com/cdn/shop/files/1911YSTN-01.jpg",
  "Yosemite": "https://kytebaby.com/cdn/shop/files/1911YSMT-01.jpg",
  "Under the Stars": "https://kytebaby.com/cdn/shop/files/1911UNMD-01.jpg",
  "Road Trip": "https://kytebaby.com/cdn/shop/files/1911RDCD-01.jpg",
  "Wildflower": "https://kytebaby.com/cdn/shop/files/1911WFLR-01.jpg",

  // 2024 Solids
  "Wasabi": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-wasabi-33127884324975.jpg",
  "Sakura": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-sakura-33127883800687.jpg",
  "Dusty Blue": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-dusty-blue-33127882719343.jpg",
  "Ecru": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-ecru-33127903133807.jpg",
  "Wisteria": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-wisteria-33127884521583.jpg",
  "Powder": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-powder-33861387288687.jpg",
  "Mint": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-mint-33861384831087.jpg",
  "Lilac": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-lilac-33861383061615.jpg",
  "Thyme": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-thyme-34381775896687.jpg",
  "Currant": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-currant-34381774618735.jpg",
  "Loch": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-loch-34381775339631.jpg",
  "Apricot": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-apricot-34381772521583.jpg",
  "Evergreen": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-evergreen-34707483197551.jpg",
  "Almond": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-almond-34803501662319.jpg",

  // 2024 Prints
  "Construction": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-construction-33226226761839.jpg",
  "Cherry Blossom": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-cherry-blossom-33284557242479.jpg",
  "Midnight Rainbow Heart": "https://kytebaby.com/cdn/shop/files/Untitled_design_29.png",
  "Cloud Rainbow Heart": "https://kytebaby.com/cdn/shop/files/Untitled_design_29.png",
  "Daisy": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-daisy-32922368508015.jpg",
  "Hot Air Balloon": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-hot-air-balloon-32922369622127.jpg",
  "Duck": "https://kytebaby.com/cdn/shop/files/Untitled_design_6_a79bdd90-0b23-4505-a8ae-d6688668168f.png",
  "Goat": "https://kytebaby.com/cdn/shop/files/Untitled_design_6_a79bdd90-0b23-4505-a8ae-d6688668168f.png",
  "Crocodile": "https://kytebaby.com/cdn/shop/files/1911CCWA-01_bd05af39-a064-4468-8cb6-a15a48d0b9b3.jpg",
  "Elephant": "https://kytebaby.com/cdn/shop/files/1911ELWI-01_535a8509-b969-4211-8bdb-75a26b03d9af.jpg",
  "Rhino": "https://kytebaby.com/cdn/shop/files/1911RHDB-01_6aa27bfb-e622-4ac8-a259-9e2ee9dda9d5.jpg",
  "Peony": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-peony-33201028104303.jpg",
  "Koi": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-koi-33376956645487.jpg",
  "Wave": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-wave-33376957005935.jpg",
  "Hydrangea": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-hydrangea-33411757932655.jpg",
  "Watermelon": "https://kytebaby.com/cdn/shop/files/Untitled_design_31.png",
  "Lemon": "https://kytebaby.com/cdn/shop/files/Untitled_design_31.png",
  "Popsicle": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-popsicle-33634642886767.jpg",
  "Sakura Leopard": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-sakura-leopard-33663135842415.jpg",
  "Vintage Boats": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-vintage-boats-33736777859183.jpg",
  "Wasabi Rainbow": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-wasabi-rainbow-33893188108399.jpg",
  "Shark": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-sleeveless-romper-zippered-sleeveless-romper-in-shark-33948217573487.jpg",
  "Kite": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-kite-33973995438191.jpg",
  "Pirate": "https://kytebaby.com/cdn/shop/files/Untitled_design_a38be953-ed78-4668-9e67-29a460ce8776.png",
  "Mermaid": "https://kytebaby.com/cdn/shop/files/Untitled_design_a38be953-ed78-4668-9e67-29a460ce8776.png",
  "Horse": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-horse-34160582852719.jpg",
  "Tractor": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-tractor-34417384718447.jpg",
  "Apple Orchard": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-apple-orchard-34420193296495.jpg",
  "Football": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-football-34479259877487.jpg",
  "Trick or Treat": "https://kytebaby.com/cdn/shop/files/Untitled_design_9_62929a6a-8593-40cf-bde4-924bd6ea92dd.png",
  "Spooky": "https://kytebaby.com/cdn/shop/files/Untitled_design_9_62929a6a-8593-40cf-bde4-924bd6ea92dd.png",
  "Acorn": "https://kytebaby.com/cdn/shop/files/Untitled_design_12_3024a135-157b-42b9-9251-0a6b9cbde699.png",
  "Mushroom": "https://kytebaby.com/cdn/shop/files/Untitled_design_12_3024a135-157b-42b9-9251-0a6b9cbde699.png",
  "Petunia": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-petunia-34580644692079.jpg",
  "Sugar Plum": "https://kytebaby.com/cdn/shop/files/Untitled_design_10.png",
  "Nutcracker": "https://kytebaby.com/cdn/shop/files/Untitled_design_10.png",
  "Midnight Icon": "https://kytebaby.com/cdn/shop/files/Untitled_design_11.png",
  "Journey": "https://kytebaby.com/cdn/shop/files/Untitled_design_11.png",
  "Holiday Train": "https://kytebaby.com/cdn/shop/files/1908HTCD-01_1300x_d25a7399-d9fa-4cba-a718-74f083e8a64f.webp",
  "Midnight Leopard": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-midnight-leopard-34736978460783.jpg",
  "Midnight Lily": "https://kytebaby.com/cdn/shop/files/Untitled_design_19_3e913cb2-8554-430c-bbbd-d6176638e92d.png",
  "Thyme Lily": "https://kytebaby.com/cdn/shop/files/Untitled_design_19_3e913cb2-8554-430c-bbbd-d6176638e92d.png",
  "Penguin": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-penguin-34897762418799.jpg",
  "Boho Tree": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-boho-tree-34897761894511.jpg",
  "Sakura Space": "https://kytebaby.com/cdn/shop/files/Untitled_design_30.png",
  "Ice Space": "https://kytebaby.com/cdn/shop/files/Untitled_design_30.png",
  "First Responder": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-first-responder-35418124714095.jpg",

  // 2023 Prints
  "Strawberry": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-strawberry-31862557016175.webp",
  "Butterfly": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-butterfly-31993025233007.jpg",
  "Dragonfly": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-dragonfly-31993042010223.jpg",
  "Crawl": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-crawl-31993036734575.jpg",
  "Spring Egg": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-spring-egg-32009468117103.jpg",
  "Western": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-western-32050274828399.jpg",
  "Periwinkle Bluebonnet": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-periwinkle-bluebonnet-32050260377711.jpg",
  "Coffee Rainbow": "https://kytebaby.com/cdn/shop/files/Untitled_design_12.png",
  "Hunter Rainbow": "https://kytebaby.com/cdn/shop/files/Untitled_design_12.png",
  "Crepe Rip Tide": "https://kytebaby.com/cdn/shop/files/Untitled_design_13.png",
  "Robin Rip Tide": "https://kytebaby.com/cdn/shop/files/Untitled_design_13.png",
  "Unicorn": "https://kytebaby.com/cdn/shop/files/Untitled_design_1_841ec410-0b00-425e-8ed8-103c56bd489c.png",
  "Dragon": "https://kytebaby.com/cdn/shop/files/Untitled_design_1_841ec410-0b00-425e-8ed8-103c56bd489c.png",
  "Lavender": "https://kytebaby.com/cdn/shop/files/kyte-baby-snap-footies-footie-in-lavender-32163570253935.jpg",
  "Robin Cuddle": "https://kytebaby.com/cdn/shop/files/1911CURO01.jpg",
  "True North": "https://kytebaby.com/cdn/shop/files/1911TN01.jpg",
  "Frontier": "https://kytebaby.com/cdn/shop/files/1911FN01.jpg",
  "Liberty": "https://kytebaby.com/cdn/shop/files/1911LI01.jpg",
  "Avocado": "https://kytebaby.com/cdn/shop/files/Untitled_design_2_e8aa5160-4d2b-4aea-97d3-6b429f7e9779.png",
  "Peach": "https://kytebaby.com/cdn/shop/files/Untitled_design_2_e8aa5160-4d2b-4aea-97d3-6b429f7e9779.png",
  "Raspberry Shell": "https://kytebaby.com/cdn/shop/files/Untitled_design_15.png",
  "Royal Shell": "https://kytebaby.com/cdn/shop/files/Untitled_design_15.png",
  "Taro Leopard": "https://kytebaby.com/cdn/shop/files/Untitled_design_14.png",
  "Oat Leopard": "https://kytebaby.com/cdn/shop/files/Untitled_design_14.png",
  "Axolotl": "https://kytebaby.com/cdn/shop/files/1911AX010.jpg",
  "Eagle Ray": "https://kytebaby.com/cdn/shop/files/1911ER01.jpg",
  "Macaw": "https://kytebaby.com/cdn/shop/files/1911MW01.jpg",
  "Camping": "https://kytebaby.com/cdn/shop/files/1911CG01_07a76c2b-7316-4af4-ab70-98467456c31c.jpg",
  "Sunflower": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-sunflower-32392997044335.jpg",
  "Gryffindor": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-gryffindor-32475964113007.jpg",
  "Hufflepuff": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-hufflepuff-32475965194351.jpg",
  "Ravenclaw": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-ravenclaw-32475965685871.jpg",
  "Slytherin": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-slytherin-32475966734447.jpg",
  "Boo": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-boo-32492928073839.jpg",
  "Carve": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-carve-32492929482863.jpg",
  "Spider": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-spider-32492711739503.jpg",
  "Trail": "https://kytebaby.com/cdn/shop/files/1411TL01_0a947745-fbf2-4938-aaf8-13d2cac8a679.jpg",
  "Coastline": "https://kytebaby.com/cdn/shop/files/1411CL01_e0d0ad46-0c99-42b0-96b5-cf9b83adde1b.jpg",
  "Midnight Poppies": "https://kytebaby.com/cdn/shop/files/Untitled_design_17.png",
  "Cloud Poppies": "https://kytebaby.com/cdn/shop/files/Untitled_design_17.png",
  "Winterberry": "https://kytebaby.com/cdn/shop/files/Untitled_design_6_9b439e35-a66d-4183-81a4-8095657c4347.png",
  "Mistletoe": "https://kytebaby.com/cdn/shop/files/Untitled_design_6_9b439e35-a66d-4183-81a4-8095657c4347.png",
  "Midnight Plaid": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-midnight-plaid-32575671861359.jpg",
  "Fungi": "https://kytebaby.com/cdn/shop/files/Untitled_design_4_d11ca99c-5418-4223-94c3-86c096e4cc73.png",
  "Foliage": "https://kytebaby.com/cdn/shop/files/Untitled_design_4_d11ca99c-5418-4223-94c3-86c096e4cc73.png",
  "Cloud Party": "https://kytebaby.com/cdn/shop/files/Untitled_design_18.png",
  "Midnight Party": "https://kytebaby.com/cdn/shop/files/Untitled_design_18.png",
  "Alpine Village": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-alpine-village-32654834827375.jpg",
  "Cloud Deer": "https://kytebaby.com/cdn/shop/files/Untitled_design_20.png",
  "Midnight Deer": "https://kytebaby.com/cdn/shop/files/Untitled_design_20.png",
  "Blue Heron": "https://kytebaby.com/cdn/shop/files/Untitled_design_21.png",
  "Raccoon": "https://kytebaby.com/cdn/shop/files/Untitled_design_21.png",
  "Espresso Herringbone": "https://kytebaby.com/cdn/shop/files/Untitled_design_3_cb00611d-1fb4-45d4-b1d3-eb6c8f97bfee.png",
  "Dusty Rose Herringbone": "https://kytebaby.com/cdn/shop/files/Untitled_design_3_cb00611d-1fb4-45d4-b1d3-eb6c8f97bfee.png",
  "Sienna Woodland": "https://kytebaby.com/cdn/shop/files/1411WDSI01_1300x_b19b41e9-eecd-4c4c-abd0-54e270ddc65e.webp",
  "Blueberry": "https://kytebaby.com/cdn/shop/files/Untitled_design_7_46e4529e-59f2-4de9-8875-f747334a3b42.png",
  "Cherry": "https://kytebaby.com/cdn/shop/files/Untitled_design_7_46e4529e-59f2-4de9-8875-f747334a3b42.png",

  // 2023 Solids
  "Crepe": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-crepe-31967857115247.jpg",
  "Periwinkle": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-periwinkle-31969437483119.jpg",
  "Pistachio": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-pistachio-31969471823983.jpg",
  "Robin": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-robin-31969465368687.jpg",
  "Butter": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-butter-31967723815023.jpg",
  "Caribbean": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-caribbean-32287549325423_428370ac-e349-4139-b343-20815db3c050.jpg",
  "Raspberry": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-raspberry-32287552045167_292f0513-df29-478b-a551-4facd7e0a8e9.jpg",
  "Royal": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-royal-32287554699375_0d009b3b-2125-47ef-9919-02f8ff549525.jpg",
  "Tangerine": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-tangerine-32287556534383_41eb5eda-994d-4dc0-874a-a73b7810242b.jpg",
  "Dusty Rose": "https://kytebaby.com/cdn/shop/files/1908DU01.jpg",
  "Glacier": "https://kytebaby.com/cdn/shop/files/1908GL01.jpg",
  "Haze": "https://kytebaby.com/cdn/shop/files/1908H01.jpg",
  "Sienna": "https://kytebaby.com/cdn/shop/files/1908SI01.jpg",
  "Forest": "https://kytebaby.com/cdn/shop/files/1908FR01.jpg",
  "Emerald": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-zippered-footie-in-emerald-31969461731439.jpg",

  // 2022 Prints
  "Spring 2022 Polka Dot": "https://kytebaby.com/cdn/shop/files/1411PDSP.jpg",
  "Fog Rainbow": "https://kytebaby.com/cdn/shop/files/Untitled_design_8.png",
  "Sunset Rainbow": "https://kytebaby.com/cdn/shop/files/Untitled_design_8.png",
  "Eucalyptus": "https://kytebaby.com/cdn/shop/files/1911EU_1.jpg",
  "Monstera": "https://kytebaby.com/cdn/shop/files/1911MT_1.jpg",
  "Black and White Zen": "https://kytebaby.com/cdn/shop/files/1911BWZN_1_3636d8ac-bac7-40dc-8d83-81fb528f9c47.jpg",
  "Firework": "https://kytebaby.com/cdn/shop/files/1911FW_1.jpg",
  "Camo": "https://kytebaby.com/cdn/shop/files/1411COCV_1.jpg",
  "Stream Shark": "https://kytebaby.com/cdn/shop/files/Stream_Shark.jpg",
  "Midnight Herringbone": "https://kytebaby.com/cdn/shop/files/Untitled_design_5.png",
  "Khaki Herringbone": "https://kytebaby.com/cdn/shop/files/Untitled_design_5.png",
  "Chick": "https://kytebaby.com/cdn/shop/files/Chick.jpg",
  "Icon": "https://kytebaby.com/cdn/shop/files/1411IN_1.jpg",
  "Herbology": "https://kytebaby.com/cdn/shop/files/1411HE_1.jpg",
  "Flight": "https://kytebaby.com/cdn/shop/files/1411FH_1.jpg",
  "Wreath": "https://kytebaby.com/cdn/shop/files/1411WR_1.jpg",
  "Hunter Plaid": "https://kytebaby.com/cdn/shop/files/Hunter_Plaid.jpg",
  "Marigold Cheetah": "https://kytebaby.com/cdn/shop/files/1911CEMG_1.jpg",
  "Rust Tiger": "https://kytebaby.com/cdn/shop/files/Rust_Tiger.jpg",
  "Hunter Leopard": "https://kytebaby.com/cdn/shop/files/1411BLHU_1.jpg",
  "Cove Antarctic": "https://kytebaby.com/cdn/shop/files/Untitled_design_1.png",
  "Arctic": "https://kytebaby.com/cdn/shop/files/1911AR_1.jpg",
  "Midnight Constellation": "https://kytebaby.com/cdn/shop/files/Untitled_design_3.png",
  "Cloud Constellation": "https://kytebaby.com/cdn/shop/files/Untitled_design_3.png",
  "Honey Bear": "https://kytebaby.com/cdn/shop/files/1411BE.jpg",
  "Small Midnight Magnolia": "https://kytebaby.com/cdn/shop/files/Untitled_design_2.png",
  "Small Khaki Magnolia": "https://kytebaby.com/cdn/shop/files/Untitled_design_2.png",
  "Big Midnight Magnolia": "https://kytebaby.com/cdn/shop/files/Untitled_design_2.png",
  "Crepe Hearts": "https://kytebaby.com/cdn/shop/files/Untitled_design_7.png",
  "Robin Hearts": "https://kytebaby.com/cdn/shop/files/Untitled_design_7.png",

  // 2022 Solids
  "Stream": "https://kytebaby.com/cdn/shop/files/Stream.jpg",
  "Fern": "https://kytebaby.com/cdn/shop/files/Fern.jpg",
  "Daffodil": "https://kytebaby.com/cdn/shop/files/Daffodil.jpg",
  "Rose": "https://kytebaby.com/cdn/shop/files/Rose.jpg",
  "Taro": "https://kytebaby.com/cdn/shop/files/Taro.jpg",
  "Khaki": "https://kytebaby.com/cdn/shop/files/Khaki.jpg",
  "Palm": "https://kytebaby.com/cdn/shop/files/Palm.jpg",
  "Cove": "https://kytebaby.com/cdn/shop/files/Cove.jpg",
  "Hunter": "https://kytebaby.com/cdn/shop/files/Hunter.jpg",
  "Porcelain": "https://kytebaby.com/cdn/shop/files/Porcelain.jpg",
  "Marigold": "https://kytebaby.com/cdn/shop/files/Marigold.jpg",
  "Rust": "https://kytebaby.com/cdn/shop/files/Rust.jpg",
  "Coffee": "https://kytebaby.com/cdn/shop/files/Coffee.jpg",

  // 2021 Prints & Solids
  "Giraffe": "https://kytebaby.com/cdn/shop/files/Giraffe.jpg",
  "Aloe Rainbow": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-printed-zippered-footie-in-aloe-rainbow-29896752595055.jpg",
  "Clementine Rainbow": "https://kytebaby.com/cdn/shop/files/kyte-baby-zippered-footies-printed-zippered-footie-in-clementine-rainbow-30389785362543.jpg",
  "Snowflake": "https://kytebaby.com/cdn/shop/files/Snowflake.jpg",
  "Metallic Rainbow": "https://kytebaby.com/cdn/shop/files/Metallic_Rainbow.jpg",
  "Bubblegum": "https://kytebaby.com/cdn/shop/files/Bubblegum.jpg",
  "Indigo": "https://kytebaby.com/cdn/shop/files/Indigo.jpg",
  "Jade": "https://kytebaby.com/cdn/shop/files/Jade.jpg",
  "Lagoon": "https://kytebaby.com/cdn/shop/files/Lagoon.jpg",
  "Melon": "https://kytebaby.com/cdn/shop/files/Melon.jpg",
  "Sunset": "https://kytebaby.com/cdn/shop/files/Sunset.jpg",
  "Wheat": "https://kytebaby.com/cdn/shop/files/Wheat.jpg",
  "Fog": "https://kytebaby.com/cdn/shop/files/Fog.jpg",
  "Dahlia": "https://kytebaby.com/cdn/shop/files/Dahlia.jpg",
  "Olive": "https://kytebaby.com/cdn/shop/files/Olive.jpg",
  "Nutmeg": "https://kytebaby.com/cdn/shop/files/Nutmeg.jpg",
  "Clementine": "https://kytebaby.com/cdn/shop/files/Clementine.jpg",
  "Eggplant": "https://kytebaby.com/cdn/shop/files/Eggplant.jpg",

  // 2020 and earlier
  "Charcoal": "https://kytebaby.com/cdn/shop/files/Charcoal.jpg",
  "Kiwi": "https://kytebaby.com/cdn/shop/files/Kiwi.jpg",
  "Orchid": "https://kytebaby.com/cdn/shop/files/Orchid.jpg",
  "Ruby": "https://kytebaby.com/cdn/shop/files/Ruby.jpg",
  "Mulberry": "https://kytebaby.com/cdn/shop/files/Mulberry.jpg",
  "Sapphire": "https://kytebaby.com/cdn/shop/files/Sapphire.jpg",
  "Sage": "https://kytebaby.com/cdn/shop/files/Sage.jpg",
  "Blush": "https://kytebaby.com/cdn/shop/files/Blush.jpg",
  "Oat": "https://kytebaby.com/cdn/shop/files/Oat.jpg",
  "Midnight": "https://kytebaby.com/cdn/shop/files/Midnight.jpg",
  "Cloud": "https://kytebaby.com/cdn/shop/files/Cloud.jpg",
  "Navy": "https://kytebaby.com/cdn/shop/files/Navy.jpg",
  "Storm": "https://kytebaby.com/cdn/shop/files/Storm.jpg",
  "Slate": "https://kytebaby.com/cdn/shop/files/Slate.jpg",
  "Steel": "https://kytebaby.com/cdn/shop/files/Steel.jpg",
  "Snow": "https://kytebaby.com/cdn/shop/files/Snow.jpg",
  "Azure": "https://kytebaby.com/cdn/shop/files/Azure.jpg",
  "Aqua": "https://kytebaby.com/cdn/shop/files/Aqua.jpg",
  "Mauve": "https://kytebaby.com/cdn/shop/files/Mauve.jpg",

  // Additional prints from clearance doc
  "Harbor": "https://kytebaby.com/cdn/shop/files/1911HB-01.jpg",
  "Irish": "https://kytebaby.com/cdn/shop/files/1411IR.jpg",
  "Bunny": "https://kytebaby.com/cdn/shop/files/Untitled_design_19.png",
  "Prickle": "https://kytebaby.com/cdn/shop/files/1911PK01.jpg",
  "Rust Rainbow on Midnight": "https://kytebaby.com/cdn/shop/files/Untitled_design_8.png",
  "Rust Rainbow on Oat": "https://kytebaby.com/cdn/shop/files/Untitled_design_8.png",
  "Superman": "https://kytebaby.com/cdn/shop/files/superman.jpg",
};

// Function to get a print image URL
export function getPrintImageUrl(printName: string): string | undefined {
  // Try exact match first
  if (printDatabase[printName]) {
    return printDatabase[printName];
  }

  // Try case-insensitive match
  const normalizedName = printName.trim();
  const key = Object.keys(printDatabase).find(
    k => k.toLowerCase() === normalizedName.toLowerCase()
  );

  if (key) {
    return printDatabase[key];
  }

  // Try partial match for variations (e.g., "Aloe Chick" might be listed as "Aloe Chick*")
  const cleanName = normalizedName.replace(/\*$/, '').trim();
  const partialKey = Object.keys(printDatabase).find(
    k => k.toLowerCase() === cleanName.toLowerCase()
  );

  return partialKey ? printDatabase[partialKey] : undefined;
}

// Get all available prints
export function getAllPrints(): PrintInfo[] {
  return Object.entries(printDatabase).map(([name, imageUrl]) => ({
    name,
    imageUrl
  }));
}
