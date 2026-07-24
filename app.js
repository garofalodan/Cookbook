// ── Nutrition Database (USDA SR Legacy + curated cupG values) ─────────────────
// Source: USDA FoodData Central SR Legacy (April 2018), public domain
// Fields: cal, carb, sug (sugars), fat, pro, fib (all per 100g), cupG (grams per 1 cup)
const NUT = {
  "2% milk":{cal:50.0,carb:4.8,sug:5.1,fat:2.0,pro:3.3,fib:0.0,cupG:244.0},
  "active dry yeast":{cal:325.0,carb:41.2,sug:0.0,fat:7.6,pro:40.4,fib:26.9,tbspG:12.0,tspG:4.0},
  "agave":{cal:310,carb:76,sug:68,fat:0,pro:0,fib:0,cupG:330},
  "agave nectar":{cal:310,carb:76,sug:68,fat:0,pro:0,fib:0,cupG:330},
  "all purpose flour":{cal:364.0,carb:76.3,sug:0.3,fat:1.0,pro:10.3,fib:2.7,cupG:125.0},
  "allspice":{cal:263.0,carb:72.1,sug:0,fat:8.7,pro:6.1,fib:21.6,tbspG:6.0,tspG:1.9},
  "almond butter":{cal:614,carb:19,sug:5,fat:56,pro:21,fib:10,cupG:258},
  "almond flour":{cal:579,carb:21,sug:4,fat:50,pro:21,fib:10,cupG:96},
  "almond milk":{cal:17,carb:1,sug:0,fat:1,pro:1,fib:0,cupG:244},
  "almonds":{cal:579.0,carb:21.6,sug:4.3,fat:49.9,pro:21.1,fib:12.5,cupG:143.0},
  "anchovies":{cal:131.0,carb:0.0,sug:0.0,fat:4.8,pro:20.4,fib:0.0},
  "apple":{cal:52.0,carb:13.8,sug:10.4,fat:0.2,pro:0.3,fib:2.4,cupG:125.0},
  "apple cider vinegar":{cal:21.0,carb:0.9,sug:0.4,fat:0.0,pro:0.0,fib:0.0,cupG:239.0,tbspG:14.9,tspG:5.0},
  "apple juice":{cal:46.0,carb:11.3,sug:9.6,fat:0.1,pro:0.1,fib:0.2,cupG:248.0},
  "arborio rice":{cal:360.0,carb:79.3,sug:0,fat:0.6,pro:6.6,fib:1.4,cupG:195.0},
  "artichoke":{cal:47.0,carb:10.5,sug:1.0,fat:0.1,pro:3.3,fib:5.4},
  "arugula":{cal:25.0,carb:3.6,sug:2.0,fat:0.7,pro:2.6,fib:1.6,cupG:20.0},
  "asparagus":{cal:20.0,carb:3.9,sug:1.9,fat:0.1,pro:2.2,fib:2.1,cupG:134.0},
  "aubergine":{cal:25.0,carb:5.9,sug:3.5,fat:0.2,pro:1.0,fib:3.0,cupG:82.0},
  "avocado":{cal:167.0,carb:8.6,sug:0.3,fat:15.4,pro:2.0,fib:6.8,cupG:230.0},
  "avocado oil":{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0,cupG:218},
  "baby spinach":{cal:23.0,carb:3.6,sug:0.4,fat:0.4,pro:2.9,fib:2.2,cupG:30.0},
  "bacon":{cal:393.0,carb:0.0,sug:0.3,fat:37.1,pro:13.7,fib:0.0},
  "baking powder":{cal:51.0,carb:24.1,sug:0.0,fat:0.0,pro:0.1,fib:0.2,tspG:4.6},
  "baking soda":{cal:0.0,carb:0.0,sug:0.0,fat:0.0,pro:0.0,fib:0.0,tspG:4.6},
  "balsamic vinegar":{cal:88.0,carb:17.0,sug:14.9,fat:0.0,pro:0.5,fib:0,cupG:255.0,tbspG:16.0,tspG:5.3},
  "banana":{cal:89.0,carb:22.8,sug:12.2,fat:0.3,pro:1.1,fib:2.6,cupG:225.0},
  "barley":{cal:354.0,carb:73.5,sug:0.8,fat:2.3,pro:12.5,fib:17.3,cupG:184.0},
  "basil":{cal:233.0,carb:47.8,sug:1.7,fat:4.1,pro:23.0,fib:37.7,tbspG:2.1,tspG:0.7},
  "basmati rice":{cal:365.0,carb:80.0,sug:0.1,fat:0.7,pro:7.1,fib:1.3,cupG:185.0},
  "bay leaf":{cal:313.0,carb:75.0,sug:0,fat:8.4,pro:7.6,fib:26.3,tbspG:1.8,tspG:0.6},
  "bbq sauce":{cal:172.0,carb:40.8,sug:33.2,fat:0.6,pro:0.8,fib:0.9,cupG:286.0,tbspG:17.0},
  "beef":{cal:215.0,carb:0.0,sug:0.0,fat:15.0,pro:18.6,fib:0.0},
  "beef broth":{cal:7.0,carb:0.0,sug:0.0,fat:0.2,pro:1.1,fib:0.0,cupG:240.0},
  "beef mince":{cal:254.0,carb:0.0,sug:0.0,fat:20.0,pro:17.2,fib:0.0},
  "beef stock":{cal:7.0,carb:0.0,sug:0.0,fat:0.2,pro:1.1,fib:0.0,cupG:240.0},
  "beer":{cal:43.0,carb:3.5,sug:0.0,fat:0.0,pro:0.5,fib:0.0},
  "beetroot":{cal:43.0,carb:9.6,sug:6.8,fat:0.2,pro:1.6,fib:2.8,cupG:136.0},
  "beets":{cal:43.0,carb:9.6,sug:6.8,fat:0.2,pro:1.6,fib:2.8,cupG:136.0},
  "bell pepper":{cal:26.0,carb:6.0,sug:4.2,fat:0.3,pro:1.0,fib:2.1,cupG:149.0,tbspG:9.3},
  "bicarb":{cal:0.0,carb:0.0,sug:0.0,fat:0.0,pro:0.0,fib:0.0,tspG:4.6},
  "bicarbonate of soda":{cal:0.0,carb:0.0,sug:0.0,fat:0.0,pro:0.0,fib:0.0,tspG:4.6},
  "black beans":{cal:132.0,carb:23.7,sug:0.3,fat:0.5,pro:8.9,fib:8.7,cupG:172.0},
  "black pepper":{cal:251.0,carb:64.0,sug:0.6,fat:3.3,pro:10.4,fib:25.3,tbspG:6.9,tspG:2.3},
  "blackberries":{cal:43.0,carb:9.6,sug:4.9,fat:0.5,pro:1.4,fib:5.3,cupG:144.0},
  "blueberries":{cal:57.0,carb:14.5,sug:10.0,fat:0.3,pro:0.7,fib:2.4,cupG:148.0},
  "blueberry":{cal:57.0,carb:14.5,sug:10.0,fat:0.3,pro:0.7,fib:2.4,cupG:148.0},
  "bok choy":{cal:13.0,carb:2.2,sug:1.2,fat:0.2,pro:1.5,fib:1.0,cupG:70.0},
  "brazil nuts":{cal:659.0,carb:11.7,sug:2.3,fat:67.1,pro:14.3,fib:7.5,cupG:133.0},
  "brie":{cal:334.0,carb:0.5,sug:0.5,fat:27.7,pro:20.8,fib:0.0,cupG:144.0},
  "broad beans":{cal:341.0,carb:58.3,sug:5.7,fat:1.5,pro:26.1,fib:25.0,cupG:150.0,tbspG:9.4},
  "broccoli":{cal:34.0,carb:6.6,sug:1.7,fat:0.4,pro:2.8,fib:2.6,cupG:91.0},
  "brown rice":{cal:367.0,carb:76.2,sug:0.7,fat:3.2,pro:7.5,fib:3.6,cupG:185.0},
  "brown sugar":{cal:380.0,carb:98.1,sug:97.0,fat:0.0,pro:0.1,fib:0.0,cupG:220.0,tspG:3.0},
  "brussels sprouts":{cal:43.0,carb:8.9,sug:2.2,fat:0.3,pro:3.4,fib:3.8,cupG:88.0},
  "buffalo sauce":{cal:34,carb:2,sug:1,fat:3,pro:0,fib:0,cupG:240},
  "bulgur":{cal:342.0,carb:75.9,sug:0.4,fat:1.3,pro:12.3,fib:12.5,cupG:140.0},
  "butter":{cal:717.0,carb:0.1,sug:0.1,fat:81.1,pro:0.8,fib:0.0,cupG:227.0,tbspG:14.2},
  "butter beans":{cal:126,carb:24,sug:3,fat:0,pro:8,fib:7,cupG:185},
  "buttermilk":{cal:40.0,carb:4.8,sug:5.4,fat:1.1,pro:3.3,fib:0.0,cupG:245.0},
  "butternut squash":{cal:45.0,carb:11.7,sug:2.2,fat:0.1,pro:1.0,fib:2.0,cupG:140.0},
  "cabbage":{cal:25.0,carb:5.8,sug:3.2,fat:0.1,pro:1.3,fib:2.5,cupG:89.0},
  "cacao nibs":{cal:480,carb:36,sug:0,fat:30,pro:20,fib:13,cupG:128},
  "cacao powder":{cal:228.0,carb:57.9,sug:1.8,fat:13.7,pro:19.6,fib:37.0,cupG:86.0,tbspG:5.4},
  "caesar dressing":{cal:310,carb:6,sug:2,fat:32,pro:2,fib:0,cupG:240},
  "canned tuna":{cal:86.0,carb:0.0,sug:0.0,fat:1.0,pro:19.4,fib:0.0,cupG:154.0},
  "cannellini beans":{cal:139.0,carb:25.1,sug:0.3,fat:0.3,pro:9.7,fib:6.3,cupG:179.0,tbspG:11.2},
  "canola oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:218.0,tbspG:14.0,tspG:4.5},
  "cantaloupe":{cal:34.0,carb:8.2,sug:7.9,fat:0.2,pro:0.8,fib:0.9,cupG:177.0},
  "cardamom":{cal:311.0,carb:68.5,sug:0,fat:6.7,pro:10.8,fib:28.0,tbspG:5.8,tspG:2.0},
  "carob powder":{cal:222.0,carb:88.9,sug:49.1,fat:0.7,pro:4.6,fib:39.8,cupG:103.0,tbspG:6.0},
  "carrot":{cal:41.0,carb:9.6,sug:4.7,fat:0.2,pro:0.9,fib:2.8,cupG:128.0},
  "carrots":{cal:41.0,carb:9.6,sug:4.7,fat:0.2,pro:0.9,fib:2.8,cupG:128.0},
  "cashew butter":{cal:587,carb:27,sug:6,fat:50,pro:18,fib:3,cupG:256},
  "cashews":{cal:553.0,carb:30.2,sug:5.9,fat:43.9,pro:18.2,fib:3.3},
  "caster sugar":{cal:387.0,carb:100.0,sug:99.8,fat:0.0,pro:0.0,fib:0.0,cupG:200.0,tspG:4.2},
  "cauliflower":{cal:25.0,carb:5.0,sug:1.9,fat:0.3,pro:1.9,fib:2.0,cupG:107.0},
  "cayenne":{cal:318.0,carb:56.6,sug:10.3,fat:17.3,pro:12.0,fib:27.2,tbspG:5.3,tspG:1.8},
  "cayenne pepper":{cal:318.0,carb:56.6,sug:10.3,fat:17.3,pro:12.0,fib:27.2,tbspG:5.3,tspG:1.8},
  "celery":{cal:14.0,carb:3.0,sug:1.3,fat:0.2,pro:0.7,fib:1.6,cupG:101.0,tbspG:7.5},
  "cheddar":{cal:403.0,carb:3.4,sug:0.5,fat:33.3,pro:22.9,fib:0.0,cupG:132.0},
  "cheddar cheese":{cal:403.0,carb:3.4,sug:0.5,fat:33.3,pro:22.9,fib:0.0,cupG:132.0},
  "cheese":{cal:403.0,carb:3.4,sug:0.5,fat:33.3,pro:22.9,fib:0.0,cupG:132.0},
  "cherries":{cal:63.0,carb:16.0,sug:12.8,fat:0.2,pro:1.1,fib:2.1,cupG:138.0},
  "cherry tomatoes":{cal:18.0,carb:3.9,sug:2.6,fat:0.2,pro:0.9,fib:1.2,cupG:149.0},
  "chestnuts":{cal:213.0,carb:45.5,sug:0,fat:2.3,pro:2.4,fib:8.1,cupG:145.0},
  "chia":{cal:486.0,carb:42.1,sug:0,fat:30.7,pro:16.5,fib:34.4},
  "chia seeds":{cal:486.0,carb:42.1,sug:0,fat:30.7,pro:16.5,fib:34.4},
  "chicken":{cal:165,carb:0,sug:0,fat:4,pro:31,fib:0,cupG:140},
  "chicken breast":{cal:165,carb:0,sug:0,fat:4,pro:31,fib:0,cupG:140},
  "chicken broth":{cal:15,carb:1,sug:0,fat:0,pro:2,fib:0,cupG:240},
  "chicken drumstick":{cal:185,carb:0,sug:0,fat:9,pro:28,fib:0,cupG:140},
  "chicken stock":{cal:15,carb:1,sug:0,fat:0,pro:2,fib:0,cupG:240},
  "chicken thigh":{cal:209,carb:0,sug:0,fat:13,pro:26,fib:0,cupG:140},
  "chickpeas":{cal:164.0,carb:27.4,sug:4.8,fat:2.6,pro:8.9,fib:7.6,cupG:164.0},
  "chili":{cal:40.0,carb:8.8,sug:5.3,fat:0.4,pro:1.9,fib:1.5,cupG:150.0},
  "chili powder":{cal:282.0,carb:49.7,sug:7.2,fat:14.3,pro:13.5,fib:34.8,tbspG:8.0,tspG:2.7},
  "chilli":{cal:40.0,carb:8.8,sug:5.3,fat:0.4,pro:1.9,fib:1.5,cupG:150.0},
  "chilli powder":{cal:282.0,carb:49.7,sug:7.2,fat:14.3,pro:13.5,fib:34.8,tbspG:8.0,tspG:2.7},
  "chives":{cal:30.0,carb:4.3,sug:1.9,fat:0.7,pro:3.3,fib:2.5,tbspG:3.0,tspG:1.0},
  "chocolate":{cal:546.0,carb:61.2,sug:47.9,fat:31.3,pro:4.9,fib:7.0},
  "chorizo":{cal:455,carb:1,sug:0,fat:40,pro:22,fib:0,cupG:135},
  "cilantro":{cal:23.0,carb:3.7,sug:0.9,fat:0.5,pro:2.1,fib:2.8,cupG:16.0},
  "cinnamon":{cal:247.0,carb:80.6,sug:2.2,fat:1.2,pro:4.0,fib:53.1,tbspG:7.8,tspG:2.6},
  "cloves":{cal:274.0,carb:65.5,sug:2.4,fat:13.0,pro:6.0,fib:33.9,tbspG:6.5,tspG:2.1},
  "cocoa":{cal:228.0,carb:57.9,sug:1.8,fat:13.7,pro:19.6,fib:37.0,cupG:86.0,tbspG:5.4},
  "cocoa powder":{cal:228.0,carb:57.9,sug:1.8,fat:13.7,pro:19.6,fib:37.0,cupG:86.0,tbspG:5.4},
  "coconut":{cal:354.0,carb:15.2,sug:6.2,fat:33.5,pro:3.3,fib:9.0,cupG:80.0},
  "coconut flakes":{cal:660.0,carb:23.6,sug:7.3,fat:64.5,pro:6.9,fib:16.3},
  "coconut flour":{cal:400,carb:60,sug:10,fat:15,pro:20,fib:38,cupG:112},
  "coconut milk":{cal:31.0,carb:2.9,sug:2.5,fat:2.1,pro:0.2,fib:0.0,cupG:240.0},
  "coconut oil":{cal:892.0,carb:0.0,sug:0.0,fat:99.1,pro:0.0,fib:0.0,cupG:218.0,tbspG:13.6,tspG:4.5},
  "coconut sugar":{cal:375,carb:95,sug:79,fat:0,pro:0,fib:0,cupG:200},
  "coconut water":{cal:19,carb:5,sug:5,fat:0,pro:0,fib:1,cupG:240},
  "coconut yogurt":{cal:78,carb:13,sug:8,fat:3,pro:1,fib:1,cupG:245},
  "cod":{cal:82.0,carb:0.0,sug:0.0,fat:0.7,pro:17.8,fib:0.0},
  "coffee":{cal:1,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:237},
  "collagen powder":{cal:360,carb:0,sug:0,fat:0,pro:90,fib:0,cupG:128},
  "condensed milk":{cal:321.0,carb:54.4,sug:54.4,fat:8.7,pro:7.9,fib:0.0,cupG:306.0},
  "cooked brown rice":{cal:123.0,carb:25.6,sug:0.2,fat:1.0,pro:2.7,fib:1.6,cupG:202.0},
  "cooked jasmine or long grain white rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "cooked jasmine or long-grain white rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "cooked jasmine rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "cooked rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "cooked white rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "coriander":{cal:23.0,carb:3.7,sug:0.9,fat:0.5,pro:2.1,fib:2.8,cupG:16.0},
  "coriander seeds":{cal:298.0,carb:55.0,sug:0,fat:17.8,pro:12.4,fib:41.9,tbspG:5.0,tspG:1.8},
  "corn":{cal:86.0,carb:18.7,sug:6.3,fat:1.4,pro:3.3,fib:2.0,cupG:145.0},
  "corn starch":{cal:381.0,carb:91.3,sug:0.0,fat:0.1,pro:0.3,fib:0.9,cupG:128.0},
  "corn syrup":{cal:283.0,carb:76.8,sug:76.8,fat:0.2,pro:0.0,fib:0.0,cupG:341.0,tbspG:22.0},
  "cornmeal":{cal:362.0,carb:76.9,sug:0.6,fat:3.6,pro:8.1,fib:7.3,cupG:122.0},
  "cornstarch":{cal:381.0,carb:91.3,sug:0.0,fat:0.1,pro:0.3,fib:0.9,cupG:128.0},
  "cottage cheese":{cal:98.0,carb:3.4,sug:2.7,fat:4.3,pro:11.1,fib:0.0,cupG:210.0},
  "courgette":{cal:17.0,carb:3.1,sug:2.5,fat:0.3,pro:1.2,fib:1.0,cupG:124.0},
  "couscous":{cal:376.0,carb:77.4,sug:0,fat:0.6,pro:12.8,fib:5.0,cupG:173.0},
  "crab":{cal:87.0,carb:0.0,sug:0,fat:1.1,pro:18.1,fib:0.0},
  "cream":{cal:340.0,carb:2.8,sug:2.9,fat:36.1,pro:2.8,fib:0.0,cupG:120.0,tbspG:15.0},
  "cream cheese":{cal:350.0,carb:5.5,sug:3.8,fat:34.4,pro:6.2,fib:0.0,cupG:232.0,tbspG:14.5},
  "cream of tartar":{cal:258.0,carb:61.5,sug:0.0,fat:0.0,pro:0.0,fib:0.2,tspG:3.0},
  "creme fraiche":{cal:292,carb:3,sug:3,fat:30,pro:3,fib:0,cupG:232},
  "cucumber":{cal:15.0,carb:3.6,sug:1.7,fat:0.1,pro:0.7,fib:0.5,cupG:104.0},
  "cumin":{cal:375.0,carb:44.2,sug:2.2,fat:22.3,pro:17.8,fib:10.5,tbspG:6.0,tspG:2.1},
  "currants":{cal:56.0,carb:13.8,sug:7.4,fat:0.2,pro:1.4,fib:4.3,cupG:112.0},
  "curry powder":{cal:325.0,carb:55.8,sug:2.8,fat:14.0,pro:14.3,fib:53.2,tbspG:6.3,tspG:2.0},
  "dark chocolate":{cal:546.0,carb:61.2,sug:47.9,fat:31.3,pro:4.9,fib:7.0},
  "dates":{cal:277.0,carb:75.0,sug:66.5,fat:0.1,pro:1.8,fib:6.7},
  "day old rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "desiccated coconut":{cal:660.0,carb:23.6,sug:7.3,fat:64.5,pro:6.9,fib:16.3},
  "dijon mustard":{cal:60.0,carb:5.8,sug:0.9,fat:3.3,pro:3.7,fib:4.0,cupG:249.0,tspG:5.0},
  "dill":{cal:253.0,carb:55.8,sug:0,fat:4.4,pro:20.0,fib:13.6,tbspG:3.1,tspG:1.0},
  "double cream":{cal:340.0,carb:2.8,sug:2.9,fat:36.1,pro:2.8,fib:0.0,cupG:120.0,tbspG:15.0},
  "dried apricots":{cal:241.0,carb:62.6,sug:53.4,fat:0.5,pro:3.4,fib:7.3,cupG:130.0},
  "dried blueberries":{cal:317,carb:80,sug:68,fat:1,pro:1,fib:5,cupG:113},
  "dried cherries":{cal:333,carb:80,sug:73,fat:1,pro:1,fib:2,cupG:100},
  "dried cranberries":{cal:308.0,carb:82.8,sug:72.6,fat:1.1,pro:0.2,fib:5.3,cupG:160.0},
  "dried figs":{cal:249.0,carb:63.9,sug:47.9,fat:0.9,pro:3.3,fib:9.8,cupG:149.0},
  "dried mango":{cal:319,carb:79,sug:69,fat:1,pro:3,fib:2,cupG:100},
  "dried oregano":{cal:265.0,carb:68.9,sug:4.1,fat:4.3,pro:9.0,fib:42.5,tspG:1.0},
  "dried rosemary":{cal:331.0,carb:64.1,sug:0,fat:15.2,pro:4.9,fib:42.6,tbspG:3.3,tspG:1.2},
  "dried thyme":{cal:276.0,carb:63.9,sug:1.7,fat:7.4,pro:9.1,fib:37.0,tbspG:2.7,tspG:1.0},
  "duck":{cal:135.0,carb:0.9,sug:0.0,fat:6.0,pro:18.3,fib:0.0},
  "edamame":{cal:121.0,carb:8.9,sug:2.2,fat:5.2,pro:11.9,fib:5.2,cupG:155.0},
  "egg":{cal:143.0,carb:0.7,sug:0.4,fat:9.5,pro:12.6,fib:0.0,cupG:243.0},
  "egg noodles":{cal:384.0,carb:71.3,sug:1.9,fat:4.4,pro:14.2,fib:3.3,cupG:38.0},
  "egg white":{cal:52.0,carb:0.7,sug:0.7,fat:0.2,pro:10.9,fib:0.0,cupG:243.0},
  "egg yolk":{cal:322.0,carb:3.6,sug:0.6,fat:26.5,pro:15.9,fib:0.0,cupG:243.0},
  "eggplant":{cal:25.0,carb:5.9,sug:3.5,fat:0.2,pro:1.0,fib:3.0,cupG:82.0},
  "eggs":{cal:143.0,carb:0.7,sug:0.4,fat:9.5,pro:12.6,fib:0.0,cupG:243.0},
  "espresso":{cal:1,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:237},
  "extra virgin olive oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:216.0,tbspG:13.5,tspG:4.5},
  "fava beans":{cal:341.0,carb:58.3,sug:5.7,fat:1.5,pro:26.1,fib:25.0,cupG:150.0,tbspG:9.4},
  "fennel":{cal:31.0,carb:7.3,sug:3.9,fat:0.2,pro:1.2,fib:3.1,cupG:87.0},
  "fennel seeds":{cal:345.0,carb:52.3,sug:0,fat:14.9,pro:15.8,fib:39.8,tbspG:5.8,tspG:2.0},
  "feta":{cal:265.0,carb:3.9,sug:0.0,fat:21.5,pro:14.2,fib:0.0,cupG:150.0},
  "fig":{cal:74.0,carb:19.2,sug:16.3,fat:0.3,pro:0.8,fib:2.9},
  "firm tofu":{cal:144.0,carb:2.8,sug:0,fat:8.7,pro:17.3,fib:2.3,cupG:252.0},
  "fish sauce":{cal:35.0,carb:3.6,sug:3.6,fat:0.0,pro:5.1,fib:0.0,tbspG:18.0},
  "flax seeds":{cal:534.0,carb:28.9,sug:1.6,fat:42.2,pro:18.3,fib:27.3,cupG:168.0,tbspG:10.3,tspG:3.4},
  "flaxseed":{cal:534.0,carb:28.9,sug:1.6,fat:42.2,pro:18.3,fib:27.3,cupG:168.0,tbspG:10.3,tspG:3.4},
  "flaxseed meal":{cal:534.0,carb:28.9,sug:1.6,fat:42.2,pro:18.3,fib:27.3,cupG:168.0,tbspG:10.3,tspG:3.4},
  "flour":{cal:364.0,carb:76.3,sug:0.3,fat:1.0,pro:10.3,fib:2.7,cupG:125.0},
  "fresh basil":{cal:23.0,carb:2.6,sug:0.3,fat:0.6,pro:3.1,fib:1.6,cupG:24.0,tbspG:2.6},
  "fresh ginger":{cal:80.0,carb:17.8,sug:1.7,fat:0.8,pro:1.8,fib:2.0,cupG:96.0,tspG:2.0},
  "frozen mixed vegetables":{cal:65.0,carb:13.1,sug:3.1,fat:0.1,pro:2.9,fib:4.4,cupG:182.0},
  "frozen peas":{cal:78.0,carb:14.3,sug:4.4,fat:0.3,pro:5.2,fib:4.5,cupG:160.0},
  "fusilli":{cal:371.0,carb:74.7,sug:2.7,fat:1.5,pro:13.0,fib:3.2,cupG:91.0},
  "garam masala":{cal:349,carb:56,sug:4,fat:15,pro:15,fib:16,cupG:112,tspG:2},
  "garbanzo beans":{cal:164.0,carb:27.4,sug:4.8,fat:2.6,pro:8.9,fib:7.6,cupG:164.0},
  "garlic":{cal:149.0,carb:33.1,sug:1.0,fat:0.5,pro:6.4,fib:2.1,cupG:136.0,tspG:2.8},
  "garlic powder":{cal:331.0,carb:72.7,sug:2.4,fat:0.7,pro:16.6,fib:9.0,tbspG:9.7,tspG:3.1},
  "ghee":{cal:876.0,carb:0.0,sug:0.0,fat:99.5,pro:0.3,fib:0.0,cupG:205.0,tbspG:12.8},
  "ginger":{cal:80.0,carb:17.8,sug:1.7,fat:0.8,pro:1.8,fib:2.0,cupG:96.0,tspG:2.0},
  "goji berries":{cal:349,carb:77,sug:46,fat:0,pro:14,fib:13,cupG:113},
  "golden syrup":{cal:325,carb:84,sug:75,fat:0,pro:0,fib:0,cupG:330},
  "gouda":{cal:356.0,carb:2.2,sug:2.2,fat:27.4,pro:24.9,fib:0.0},
  "granulated sugar":{cal:387.0,carb:100.0,sug:99.8,fat:0.0,pro:0.0,fib:0.0,cupG:200.0,tspG:4.2},
  "grapefruit":{cal:32.0,carb:8.1,sug:7.0,fat:0.1,pro:0.6,fib:1.1,cupG:230.0},
  "grapes":{cal:69.0,carb:18.1,sug:15.5,fat:0.2,pro:0.7,fib:0.9,cupG:151.0},
  "grapeseed oil":{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0,cupG:218},
  "greek yogurt":{cal:97.0,carb:4.0,sug:4.0,fat:5.0,pro:9.0,fib:0.0},
  "green beans":{cal:31.0,carb:7.0,sug:3.3,fat:0.2,pro:1.8,fib:2.7,cupG:100.0},
  "green lentils":{cal:116.0,carb:20.1,sug:1.8,fat:0.4,pro:9.0,fib:7.9,cupG:198.0,tbspG:12.3},
  "green onion":{cal:32.0,carb:7.3,sug:2.3,fat:0.2,pro:1.8,fib:2.6,cupG:100.0,tbspG:6.0},
  "green pepper":{cal:20.0,carb:4.6,sug:2.4,fat:0.2,pro:0.9,fib:1.7,cupG:149.0,tbspG:9.3},
  "ground beef":{cal:254.0,carb:0.0,sug:0.0,fat:20.0,pro:17.2,fib:0.0},
  "ground cinnamon":{cal:247.0,carb:80.6,sug:2.2,fat:1.2,pro:4.0,fib:53.1,tbspG:7.8,tspG:2.6},
  "ground cumin":{cal:375.0,carb:44.2,sug:2.2,fat:22.3,pro:17.8,fib:10.5,tbspG:6.0,tspG:2.1},
  "ground ginger":{cal:335.0,carb:71.6,sug:3.4,fat:4.2,pro:9.0,fib:14.1,tbspG:5.2,tspG:1.8},
  "ground lamb":{cal:282.0,carb:0.0,sug:0.0,fat:23.4,pro:16.6,fib:0.0},
  "ground turkey":{cal:148.0,carb:0.0,sug:0.0,fat:7.7,pro:19.7,fib:0.0},
  "haddock":{cal:74.0,carb:0.0,sug:0.0,fat:0.5,pro:16.3,fib:0.0},
  "halibut":{cal:91.0,carb:0.0,sug:0.0,fat:1.3,pro:18.6,fib:0.0},
  "halloumi":{cal:318,carb:2,sug:0,fat:26,pro:21,fib:0,cupG:135},
  "ham":{cal:246.0,carb:0.1,sug:0.0,fat:18.5,pro:18.5,fib:0.0,cupG:140.0},
  "harissa":{cal:53,carb:7,sug:4,fat:3,pro:2,fib:4,cupG:240,tspG:5},
  "hazelnuts":{cal:628.0,carb:16.7,sug:4.3,fat:60.8,pro:14.9,fib:9.7,cupG:115.0},
  "heavy cream":{cal:340.0,carb:2.8,sug:2.9,fat:36.1,pro:2.8,fib:0.0,cupG:120.0,tbspG:15.0},
  "hemp hearts":{cal:553.0,carb:8.7,sug:1.5,fat:48.8,pro:31.6,fib:4.0,tbspG:10.0},
  "hemp seeds":{cal:553.0,carb:8.7,sug:1.5,fat:48.8,pro:31.6,fib:4.0,tbspG:10.0},
  "hoisin sauce":{cal:220.0,carb:44.1,sug:27.3,fat:3.4,pro:3.3,fib:2.8,tbspG:16.0},
  "honey":{cal:304.0,carb:82.4,sug:82.1,fat:0.0,pro:0.3,fib:0.2,cupG:339.0,tbspG:21.0},
  "honeydew":{cal:36.0,carb:9.1,sug:8.1,fat:0.1,pro:0.5,fib:0.8,cupG:170.0},
  "hot sauce":{cal:12.0,carb:0.8,sug:0.1,fat:0.8,pro:1.3,fib:0.6,tspG:4.7},
  "hummus":{cal:237.0,carb:15.0,sug:0.6,fat:17.8,pro:7.8,fib:5.5,cupG:246.0,tbspG:15.0},
  "icing sugar":{cal:389.0,carb:99.8,sug:97.8,fat:0.0,pro:0.0,fib:0.0,cupG:120.0,tbspG:8.0,tspG:2.5},
  "instant yeast":{cal:325.0,carb:41.2,sug:0.0,fat:7.6,pro:40.4,fib:26.9,tbspG:12.0,tspG:4.0},
  "jalapeno":{cal:29.0,carb:6.5,sug:4.1,fat:0.4,pro:0.9,fib:2.8,cupG:90.0},
  "jalape\u00f1o":{cal:29.0,carb:6.5,sug:4.1,fat:0.4,pro:0.9,fib:2.8,cupG:90.0},
  "jasmine rice":{cal:365.0,carb:80.0,sug:0.1,fat:0.7,pro:7.1,fib:1.3,cupG:185.0},
  "kale":{cal:35.0,carb:4.4,sug:1.0,fat:1.5,pro:2.9,fib:4.1,cupG:21.0},
  "ketchup":{cal:101.0,carb:27.4,sug:21.3,fat:0.1,pro:1.0,fib:0.3,cupG:240.0,tbspG:17.0},
  "kidney beans":{cal:127.0,carb:22.8,sug:0.3,fat:0.5,pro:8.7,fib:7.4,cupG:177.0,tbspG:11.0},
  "kiwi":{cal:61.0,carb:14.7,sug:9.0,fat:0.5,pro:1.1,fib:3.0,cupG:180.0},
  "kosher salt":{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:165,tspG:3},
  "lamb":{cal:294,carb:0,sug:0,fat:21,pro:25,fib:0,cupG:225},
  "lamb mince":{cal:282.0,carb:0.0,sug:0.0,fat:23.4,pro:16.6,fib:0.0},
  "lard":{cal:902.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:205.0,tbspG:12.8},
  "large eggs":{cal:143.0,carb:0.7,sug:0.4,fat:9.5,pro:12.6,fib:0.0,cupG:243.0},
  "leek":{cal:61.0,carb:14.2,sug:3.9,fat:0.3,pro:1.5,fib:1.8,cupG:89.0},
  "lemon":{cal:29.0,carb:9.3,sug:2.5,fat:0.3,pro:1.1,fib:2.8,cupG:212.0},
  "lemon juice":{cal:22.0,carb:6.9,sug:2.5,fat:0.2,pro:0.3,fib:0.3,cupG:244.0},
  "lemongrass":{cal:99.0,carb:25.3,sug:0,fat:0.5,pro:1.8,fib:0,cupG:67.0,tbspG:4.8},
  "lentils":{cal:116.0,carb:20.1,sug:1.8,fat:0.4,pro:9.0,fib:7.9,cupG:198.0,tbspG:12.3},
  "lettuce":{cal:13.0,carb:2.2,sug:0.9,fat:0.2,pro:1.4,fib:1.1,cupG:55.0},
  "lime":{cal:30.0,carb:10.5,sug:1.7,fat:0.2,pro:0.7,fib:2.8},
  "lime juice":{cal:25.0,carb:8.4,sug:1.7,fat:0.1,pro:0.4,fib:0.4,cupG:242.0},
  "linguine":{cal:371.0,carb:74.7,sug:2.7,fat:1.5,pro:13.0,fib:3.2,cupG:91.0},
  "linseeds":{cal:534.0,carb:28.9,sug:1.6,fat:42.2,pro:18.3,fib:27.3,cupG:168.0,tbspG:10.3,tspG:3.4},
  "lobster":{cal:77.0,carb:0.0,sug:0.0,fat:0.8,pro:16.5,fib:0.0},
  "lychee":{cal:66.0,carb:16.5,sug:15.2,fat:0.4,pro:0.8,fib:1.3,cupG:190.0},
  "macadamia nuts":{cal:718.0,carb:13.8,sug:4.6,fat:75.8,pro:7.9,fib:8.6,cupG:134.0},
  "mackerel":{cal:205.0,carb:0.0,sug:0.0,fat:13.9,pro:18.6,fib:0.0},
  "mangetout":{cal:42.0,carb:7.5,sug:4.0,fat:0.2,pro:2.8,fib:2.6,cupG:98.0},
  "mango":{cal:60.0,carb:15.0,sug:13.7,fat:0.4,pro:0.8,fib:1.6,cupG:165.0},
  "maple syrup":{cal:260.0,carb:67.0,sug:60.5,fat:0.1,pro:0.0,fib:0.0,cupG:332.0,tbspG:20.0},
  "marjoram":{cal:271.0,carb:60.6,sug:4.1,fat:7.0,pro:12.7,fib:40.3,tbspG:1.7,tspG:0.6},
  "mascarpone":{cal:429,carb:3,sug:3,fat:45,pro:5,fib:0,cupG:227},
  "matcha":{cal:324,carb:38,sug:0,fat:5,pro:30,fib:37,cupG:100,tspG:3},
  "mayonnaise":{cal:680.0,carb:0.6,sug:0.6,fat:74.8,pro:1.0,fib:0.0,cupG:220.0,tbspG:13.8},
  "medium onion":{cal:40.0,carb:9.3,sug:4.2,fat:0.1,pro:1.1,fib:1.7,cupG:160.0,tbspG:10.0},
  "medium onion, diced":{cal:40.0,carb:9.3,sug:4.2,fat:0.1,pro:1.1,fib:1.7,cupG:160.0,tbspG:10.0},
  "medjool dates":{cal:277.0,carb:75.0,sug:66.5,fat:0.1,pro:1.8,fib:6.7},
  "milk":{cal:61.0,carb:4.8,sug:5.0,fat:3.2,pro:3.1,fib:0.0,cupG:244.0,tbspG:15.0},
  "milk chocolate":{cal:535.0,carb:59.4,sug:51.5,fat:29.7,pro:7.7,fib:3.4,cupG:168.0},
  "mince":{cal:254.0,carb:0.0,sug:0.0,fat:20.0,pro:17.2,fib:0.0},
  "mint":{cal:44.0,carb:8.4,sug:0,fat:0.7,pro:3.3,fib:6.8,tbspG:5.7},
  "miso":{cal:198.0,carb:25.4,sug:6.2,fat:6.0,pro:12.8,fib:5.4,cupG:275.0,tbspG:17.0},
  "mixed greens":{cal:15.0,carb:2.9,sug:0.8,fat:0.1,pro:1.4,fib:1.3,cupG:36.0},
  "mixed herbs":{cal:259,carb:51,sug:2,fat:5,pro:13,fib:26,cupG:60,tspG:1},
  "mixed nuts":{cal:607,carb:21,sug:4,fat:54,pro:18,fib:7,cupG:135},
  "mixed vegetables":{cal:65.0,carb:13.1,sug:3.1,fat:0.1,pro:2.9,fib:4.4,cupG:182.0},
  "molasses":{cal:290.0,carb:74.7,sug:74.7,fat:0.1,pro:0.0,fib:0.0,cupG:337.0,tbspG:20.0},
  "mozzarella":{cal:299.0,carb:2.4,sug:0.0,fat:22.1,pro:22.2,fib:0.0,cupG:112.0},
  "muesli":{cal:363,carb:66,sug:12,fat:6,pro:10,fib:7,cupG:90},
  "mushrooms":{cal:22.0,carb:3.3,sug:2.0,fat:0.3,pro:3.1,fib:1.0,cupG:70.0},
  "mussels":{cal:86.0,carb:3.7,sug:0.0,fat:2.2,pro:11.9,fib:0.0,cupG:150.0},
  "mustard":{cal:60.0,carb:5.8,sug:0.9,fat:3.3,pro:3.7,fib:4.0,cupG:249.0,tspG:5.0},
  "navy beans":{cal:140.0,carb:26.1,sug:0.4,fat:0.6,pro:8.2,fib:10.5,cupG:182.0},
  "nectarine":{cal:44.0,carb:10.6,sug:7.9,fat:0.3,pro:1.1,fib:1.7,cupG:143.0},
  "nutmeg":{cal:525.0,carb:49.3,sug:3.0,fat:36.3,pro:5.8,fib:20.8,tbspG:7.0,tspG:2.2},
  "nutritional yeast":{cal:185.0,carb:20.4,sug:1.6,fat:0.9,pro:23.9,fib:6.5,tspG:6.0},
  "oat bran":{cal:246.0,carb:66.2,sug:1.4,fat:7.0,pro:17.3,fib:15.4,cupG:94.0},
  "oat flour":{cal:404,carb:65,sug:1,fat:9,pro:15,fib:7,cupG:92},
  "oat milk":{cal:47,carb:7,sug:4,fat:2,pro:1,fib:1,cupG:240},
  "oats":{cal:389,carb:66,sug:1,fat:7,pro:17,fib:11,cupG:90},
  "oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:218.0,tbspG:13.6,tspG:4.5},
  "olive oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:216.0,tbspG:13.5,tspG:4.5},
  "onion":{cal:40.0,carb:9.3,sug:4.2,fat:0.1,pro:1.1,fib:1.7,cupG:160.0,tbspG:10.0},
  "onion powder":{cal:341.0,carb:79.1,sug:6.6,fat:1.0,pro:10.4,fib:15.2,tbspG:6.9,tspG:2.4},
  "onions":{cal:40.0,carb:9.3,sug:4.2,fat:0.1,pro:1.1,fib:1.7,cupG:160.0,tbspG:10.0},
  "orange":{cal:47.0,carb:11.8,sug:9.3,fat:0.1,pro:0.9,fib:2.4,cupG:180.0},
  "orange juice":{cal:45.0,carb:10.4,sug:8.4,fat:0.2,pro:0.7,fib:0.2,cupG:248.0},
  "oregano":{cal:265.0,carb:68.9,sug:4.1,fat:4.3,pro:9.0,fib:42.5,tspG:1.0},
  "oyster sauce":{cal:51.0,carb:10.9,sug:0.0,fat:0.2,pro:1.4,fib:0.3,tbspG:18.0},
  "pak choi":{cal:13.0,carb:2.2,sug:1.2,fat:0.2,pro:1.5,fib:1.0,cupG:70.0},
  "pancetta":{cal:501,carb:0,sug:0,fat:43,pro:25,fib:0,cupG:130},
  "panko":{cal:395,carb:72,sug:3,fat:5,pro:13,fib:3,cupG:55},
  "papaya":{cal:43.0,carb:10.8,sug:7.8,fat:0.3,pro:0.5,fib:1.7,cupG:145.0},
  "paprika":{cal:282.0,carb:54.0,sug:10.3,fat:12.9,pro:14.1,fib:34.9,tbspG:6.8,tspG:2.3},
  "parmesan":{cal:392.0,carb:3.2,sug:0.1,fat:25.0,pro:35.8,fib:0.0},
  "parsley":{cal:292.0,carb:50.6,sug:7.3,fat:5.5,pro:26.6,fib:26.7,tbspG:1.6,tspG:0.5},
  "parsnip":{cal:75.0,carb:18.0,sug:4.8,fat:0.3,pro:1.2,fib:4.9,cupG:133.0},
  "passion fruit":{cal:97.0,carb:23.4,sug:11.2,fat:0.7,pro:2.2,fib:10.4,cupG:236.0},
  "pasta":{cal:371.0,carb:74.7,sug:2.7,fat:1.5,pro:13.0,fib:3.2,cupG:91.0},
  "peanut butter":{cal:598.0,carb:22.3,sug:10.5,fat:51.4,pro:22.2,fib:5.0,cupG:258.0,tbspG:16.0},
  "peanut oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:216.0,tbspG:13.5,tspG:4.5},
  "peanuts":{cal:567.0,carb:16.1,sug:4.7,fat:49.2,pro:25.8,fib:8.5,cupG:146.0},
  "pear":{cal:57.0,carb:15.2,sug:9.8,fat:0.1,pro:0.4,fib:3.1,cupG:140.0},
  "peas":{cal:81.0,carb:14.4,sug:5.7,fat:0.4,pro:5.4,fib:5.7,cupG:145.0},
  "pecans":{cal:691.0,carb:13.9,sug:4.0,fat:72.0,pro:9.2,fib:9.6,cupG:109.0},
  "penne":{cal:371.0,carb:74.7,sug:2.7,fat:1.5,pro:13.0,fib:3.2,cupG:91.0},
  "pepitas":{cal:559.0,carb:10.7,sug:1.4,fat:49.0,pro:30.2,fib:6.0,cupG:129.0},
  "pepper":{cal:251.0,carb:64.0,sug:0.6,fat:3.3,pro:10.4,fib:25.3,tbspG:6.9,tspG:2.3},
  "pepperoni":{cal:494,carb:2,sug:0,fat:44,pro:21,fib:0,cupG:130},
  "peppers":{cal:26.0,carb:6.0,sug:4.2,fat:0.3,pro:1.0,fib:2.1,cupG:149.0,tbspG:9.3},
  "pesto":{cal:263,carb:5,sug:2,fat:25,pro:5,fib:1,cupG:245},
  "pine nuts":{cal:673.0,carb:13.1,sug:3.6,fat:68.4,pro:13.7,fib:3.7,cupG:135.0},
  "pineapple":{cal:50.0,carb:13.1,sug:9.8,fat:0.1,pro:0.5,fib:1.4,cupG:165.0},
  "pinto beans":{cal:143.0,carb:26.2,sug:0.3,fat:0.7,pro:9.0,fib:9.0,cupG:171.0,tbspG:10.6},
  "pistachio":{cal:560.0,carb:27.2,sug:7.7,fat:45.3,pro:20.2,fib:10.6,cupG:123.0},
  "pistachios":{cal:560.0,carb:27.2,sug:7.7,fat:45.3,pro:20.2,fib:10.6,cupG:123.0},
  "plain flour":{cal:364.0,carb:76.3,sug:0.3,fat:1.0,pro:10.3,fib:2.7,cupG:125.0},
  "plum":{cal:46.0,carb:11.4,sug:9.9,fat:0.3,pro:0.7,fib:1.4,cupG:165.0},
  "pomegranate":{cal:83.0,carb:18.7,sug:13.7,fat:1.2,pro:1.7,fib:4.0,cupG:174.0},
  "pomegranate juice":{cal:54.0,carb:13.1,sug:12.7,fat:0.3,pro:0.1,fib:0.1,cupG:249.0},
  "poppy seeds":{cal:367.0,carb:79.4,sug:0,fat:1.7,pro:8.6,fib:14.9,cupG:160.0},
  "pork":{cal:198.0,carb:0.0,sug:0.0,fat:12.6,pro:19.7,fib:0.0},
  "pork belly":{cal:518.0,carb:0.0,sug:0.0,fat:53.0,pro:9.3,fib:0.0},
  "portobello mushrooms":{cal:22.0,carb:3.9,sug:2.5,fat:0.3,pro:2.1,fib:1.3,cupG:86.0},
  "potato":{cal:77.0,carb:17.5,sug:0.8,fat:0.1,pro:2.0,fib:2.1,cupG:150.0},
  "powdered sugar":{cal:389.0,carb:99.8,sug:97.8,fat:0.0,pro:0.0,fib:0.0,cupG:120.0,tbspG:8.0,tspG:2.5},
  "prawns":{cal:99,carb:0,sug:0,fat:1,pro:24,fib:0,cupG:145},
  "protein powder":{cal:400,carb:15,sug:5,fat:7,pro:70,fib:2,cupG:128},
  "psyllium":{cal:267,carb:88,sug:0,fat:0,pro:3,fib:88,cupG:100,tspG:3},
  "psyllium husk":{cal:267,carb:88,sug:0,fat:0,pro:3,fib:88,cupG:100,tspG:3},
  "pumpkin":{cal:26.0,carb:6.5,sug:2.8,fat:0.1,pro:1.0,fib:0.5,cupG:116.0},
  "pumpkin seeds":{cal:559.0,carb:10.7,sug:1.4,fat:49.0,pro:30.2,fib:6.0,cupG:129.0},
  "quick oats":{cal:371,carb:67,sug:1,fat:7,pro:13,fib:10,cupG:90},
  "quinoa":{cal:120.0,carb:21.3,sug:0.9,fat:1.9,pro:4.4,fib:2.8,cupG:185.0},
  "radish":{cal:16.0,carb:3.4,sug:1.9,fat:0.1,pro:0.7,fib:1.6,cupG:116.0},
  "raspberries":{cal:52.0,carb:11.9,sug:4.4,fat:0.7,pro:1.2,fib:6.5,cupG:123.0},
  "red cabbage":{cal:31.0,carb:7.4,sug:3.8,fat:0.2,pro:1.4,fib:2.1,cupG:89.0},
  "red lentils":{cal:116.0,carb:20.1,sug:1.8,fat:0.4,pro:9.0,fib:7.9,cupG:198.0,tbspG:12.3},
  "red onion":{cal:40.0,carb:9.3,sug:4.2,fat:0.1,pro:1.1,fib:1.7,cupG:160.0,tbspG:10.0},
  "red pepper":{cal:26.0,carb:6.0,sug:4.2,fat:0.3,pro:1.0,fib:2.1,cupG:149.0,tbspG:9.3},
  "red wine":{cal:85.0,carb:2.6,sug:0.6,fat:0.0,pro:0.1,fib:0.0},
  "red wine vinegar":{cal:19.0,carb:0.3,sug:0.0,fat:0.0,pro:0.0,fib:0.0,cupG:239.0,tbspG:14.9,tspG:5.0},
  "rice":{cal:130.0,carb:28.2,sug:0.1,fat:0.3,pro:2.7,fib:0.4,cupG:158.0},
  "rice noodles":{cal:364,carb:80,sug:0,fat:1,pro:6,fib:2,cupG:140},
  "ricotta":{cal:150.0,carb:7.3,sug:0.3,fat:10.2,pro:7.5,fib:0.0,cupG:248.0},
  "rocket":{cal:25.0,carb:3.6,sug:2.0,fat:0.7,pro:2.6,fib:1.6,cupG:20.0},
  "rolled oats":{cal:389,carb:66,sug:1,fat:7,pro:17,fib:11,cupG:90},
  "romaine lettuce":{cal:17.0,carb:3.3,sug:1.2,fat:0.3,pro:1.2,fib:2.1,cupG:47.0},
  "rosemary":{cal:331.0,carb:64.1,sug:0,fat:15.2,pro:4.9,fib:42.6,tbspG:3.3,tspG:1.2},
  "saffron":{cal:310.0,carb:65.4,sug:0,fat:5.8,pro:11.4,fib:3.9,tbspG:2.1,tspG:0.7},
  "sage":{cal:315.0,carb:60.7,sug:1.7,fat:12.8,pro:10.6,fib:40.3,tbspG:2.0,tspG:0.7},
  "salami":{cal:407.0,carb:1.6,sug:0,fat:33.7,pro:22.6,fib:0.0},
  "salmon":{cal:208.0,carb:0.0,sug:0.0,fat:13.4,pro:20.4,fib:0.0},
  "salsa":{cal:29.0,carb:6.6,sug:4.0,fat:0.2,pro:1.5,fib:1.9,cupG:260.0,tbspG:18.0},
  "salt":{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:273,tspG:6},
  "salted butter":{cal:717.0,carb:0.1,sug:0.1,fat:81.1,pro:0.8,fib:0.0,cupG:227.0,tbspG:14.2},
  "sardines":{cal:208.0,carb:0.0,sug:0.0,fat:11.4,pro:24.6,fib:0.0,cupG:149.0},
  "sausage":{cal:263.0,carb:0.0,sug:0,fat:21.2,pro:16.9,fib:0.0},
  "scallion":{cal:32.0,carb:7.3,sug:2.3,fat:0.2,pro:1.8,fib:2.6,cupG:100.0,tbspG:6.0},
  "scallops":{cal:69.0,carb:3.2,sug:0.0,fat:0.5,pro:12.1,fib:0.0},
  "sea bass":{cal:97.0,carb:0.0,sug:0.0,fat:2.0,pro:18.4,fib:0.0},
  "sea salt":{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:240,tspG:5},
  "sesame oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:218.0,tbspG:13.6,tspG:4.5},
  "sesame seeds":{cal:573.0,carb:23.4,sug:0.3,fat:49.7,pro:17.7,fib:11.8,cupG:144.0,tbspG:9.0},
  "shallot":{cal:72.0,carb:16.8,sug:7.9,fat:0.1,pro:2.5,fib:3.2,tbspG:10.0},
  "shiitake mushrooms":{cal:34.0,carb:6.8,sug:2.4,fat:0.5,pro:2.2,fib:2.5},
  "shredded coconut":{cal:660.0,carb:23.6,sug:7.3,fat:64.5,pro:6.9,fib:16.3},
  "shrimp":{cal:99,carb:0,sug:0,fat:1,pro:24,fib:0,cupG:145},
  "sirloin":{cal:191.0,carb:0.0,sug:0.0,fat:12.4,pro:19.9,fib:0.0},
  "skim milk":{cal:34.0,carb:5.0,sug:5.1,fat:0.1,pro:3.4,fib:0.0,cupG:245.0},
  "skimmed milk":{cal:34.0,carb:5.0,sug:5.1,fat:0.1,pro:3.4,fib:0.0,cupG:245.0},
  "smoked paprika":{cal:282.0,carb:54.0,sug:10.3,fat:12.9,pro:14.1,fib:34.9,tbspG:6.8,tspG:2.3},
  "sour cream":{cal:198.0,carb:4.6,sug:3.4,fat:19.4,pro:2.4,fib:0.0,cupG:230.0,tbspG:12.0},
  "soy milk":{cal:33.0,carb:1.7,sug:0.4,fat:1.6,pro:2.9,fib:0.5,cupG:243.0},
  "soy sauce":{cal:53.0,carb:4.9,sug:0.4,fat:0.6,pro:8.1,fib:0.8,cupG:255.0,tbspG:16.0,tspG:5.3},
  "spinach":{cal:23.0,carb:3.6,sug:0.4,fat:0.4,pro:2.9,fib:2.2,cupG:30.0},
  "spirulina":{cal:290.0,carb:23.9,sug:3.1,fat:7.7,pro:57.5,fib:3.6,cupG:112.0,tbspG:7.0},
  "split peas":{cal:118.0,carb:21.1,sug:2.9,fat:0.4,pro:8.3,fib:8.3,cupG:196.0,tbspG:12.2},
  "spring onion":{cal:32.0,carb:7.3,sug:2.3,fat:0.2,pro:1.8,fib:2.6,cupG:100.0,tbspG:6.0},
  "squid":{cal:92.0,carb:3.1,sug:0.0,fat:1.4,pro:15.6,fib:0.0},
  "sriracha":{cal:35,carb:8,sug:5,fat:0,pro:1,fib:0,cupG:255},
  "star anise":{cal:337.0,carb:50.0,sug:0,fat:15.9,pro:17.6,fib:14.6,tbspG:6.7,tspG:2.1},
  "steel cut oats":{cal:346.0,carb:75.0,sug:0,fat:2.7,pro:11.7,fib:10.3,cupG:164.0},
  "stevia":{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:200},
  "strawberries":{cal:32.0,carb:7.7,sug:4.9,fat:0.3,pro:0.7,fib:2.0,cupG:152.0},
  "strawberry":{cal:32.0,carb:7.7,sug:4.9,fat:0.3,pro:0.7,fib:2.0,cupG:152.0},
  "sugar":{cal:387.0,carb:100.0,sug:99.8,fat:0.0,pro:0.0,fib:0.0,cupG:200.0,tspG:4.2},
  "sugar snap peas":{cal:42.0,carb:7.5,sug:4.0,fat:0.2,pro:2.8,fib:2.6,cupG:98.0},
  "sumac":{cal:292,carb:73,sug:0,fat:2,pro:5,fib:24,cupG:112,tspG:2},
  "sun dried tomatoes":{cal:258.0,carb:55.8,sug:37.6,fat:3.0,pro:14.1,fib:12.3,cupG:54.0},
  "sunflower oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:218.0,tbspG:13.6,tspG:4.5},
  "sunflower seeds":{cal:584.0,carb:20.0,sug:2.6,fat:51.5,pro:20.8,fib:8.6,cupG:46.0},
  "sweet chilli sauce":{cal:117,carb:28,sug:24,fat:0,pro:1,fib:1,cupG:255},
  "sweet potato":{cal:86.0,carb:20.1,sug:4.2,fat:0.1,pro:1.6,fib:3.0,cupG:133.0},
  "swiss cheese":{cal:393.0,carb:1.4,sug:0.0,fat:31.0,pro:27.0,fib:0.0,cupG:132.0},
  "tahini":{cal:595.0,carb:21.2,sug:0.5,fat:53.8,pro:17.0,fib:9.3,tbspG:15.0},
  "tamari":{cal:60.0,carb:5.6,sug:1.7,fat:0.1,pro:10.5,fib:0.8,tbspG:18.0,tspG:6.0},
  "tapioca starch":{cal:358,carb:89,sug:0,fat:0,pro:0,fib:0,cupG:120},
  "tarragon":{cal:295.0,carb:50.2,sug:0,fat:7.2,pro:22.8,fib:7.4,tbspG:1.8,tspG:0.6},
  "tea":{cal:1,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:237},
  "tempeh":{cal:192.0,carb:7.6,sug:0,fat:10.8,pro:20.3,fib:0,cupG:166.0},
  "teriyaki sauce":{cal:89.0,carb:15.6,sug:14.1,fat:0.0,pro:5.9,fib:0.1,cupG:288.0,tbspG:18.0},
  "thyme":{cal:276.0,carb:63.9,sug:1.7,fat:7.4,pro:9.1,fib:37.0,tbspG:2.7,tspG:1.0},
  "tilapia":{cal:96.0,carb:0.0,sug:0.0,fat:1.7,pro:20.1,fib:0.0},
  "tinned tuna":{cal:86.0,carb:0.0,sug:0.0,fat:1.0,pro:19.4,fib:0.0,cupG:154.0},
  "tofu":{cal:144.0,carb:2.8,sug:0,fat:8.7,pro:17.3,fib:2.3,cupG:252.0},
  "tomato":{cal:18.0,carb:3.9,sug:2.6,fat:0.2,pro:0.9,fib:1.2,cupG:149.0},
  "tomato paste":{cal:82.0,carb:18.9,sug:12.2,fat:0.5,pro:4.3,fib:4.1,cupG:264.0,tbspG:16.0},
  "tomato puree":{cal:38.0,carb:9.0,sug:4.8,fat:0.2,pro:1.6,fib:1.9,cupG:250.0},
  "tomatoes":{cal:18.0,carb:3.9,sug:2.6,fat:0.2,pro:0.9,fib:1.2,cupG:149.0},
  "trout":{cal:119.0,carb:0.0,sug:0,fat:3.5,pro:20.5,fib:0.0},
  "tuna":{cal:144.0,carb:0.0,sug:0.0,fat:4.9,pro:23.3,fib:0.0},
  "turkey mince":{cal:148.0,carb:0.0,sug:0.0,fat:7.7,pro:19.7,fib:0.0},
  "turmeric":{cal:312.0,carb:67.1,sug:3.2,fat:3.2,pro:9.7,fib:22.7,tbspG:9.4,tspG:3.0},
  "turnip":{cal:28.0,carb:6.4,sug:3.8,fat:0.1,pro:0.9,fib:1.8,cupG:130.0},
  "tzatziki":{cal:54,carb:4,sug:3,fat:2,pro:4,fib:0,cupG:240},
  "unsalted butter":{cal:717.0,carb:0.1,sug:0.1,fat:81.1,pro:0.8,fib:0.0,cupG:227.0,tbspG:14.2},
  "vanilla bean":{cal:288.0,carb:12.7,sug:12.7,fat:0.1,pro:0.1,fib:0.0,cupG:208.0,tbspG:13.0,tspG:4.2},
  "vanilla extract":{cal:288.0,carb:12.7,sug:12.7,fat:0.1,pro:0.1,fib:0.0,cupG:208.0,tbspG:13.0,tspG:4.2},
  "veal":{cal:130.0,carb:0.0,sug:0.0,fat:5.3,pro:19.3,fib:0.0},
  "vegetable broth":{cal:13,carb:3,sug:1,fat:0,pro:0,fib:0,cupG:240},
  "vegetable oil":{cal:884.0,carb:0.0,sug:0.0,fat:100.0,pro:0.0,fib:0.0,cupG:218.0,tbspG:13.6,tspG:4.5},
  "vegetable stock":{cal:13,carb:3,sug:1,fat:0,pro:0,fib:0,cupG:240},
  "venison":{cal:120.0,carb:0.0,sug:0.0,fat:2.4,pro:23.0,fib:0.0},
  "vinegar":{cal:18.0,carb:0.0,sug:0.0,fat:0.0,pro:0.0,fib:0.0,cupG:238.0,tbspG:14.9,tspG:5.0},
  "walnuts":{cal:654.0,carb:13.7,sug:2.6,fat:65.2,pro:15.2,fib:6.7,cupG:117.0},
  "water":{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0,cupG:237},
  "watercress":{cal:11.0,carb:1.3,sug:0.2,fat:0.1,pro:2.3,fib:0.5,cupG:34.0},
  "watermelon":{cal:30.0,carb:7.5,sug:6.2,fat:0.1,pro:0.6,fib:0.4,cupG:154.0},
  "wheat germ":{cal:360.0,carb:51.8,sug:0,fat:9.7,pro:23.1,fib:13.2,cupG:115.0},
  "whey protein":{cal:400,carb:15,sug:5,fat:7,pro:70,fib:2,cupG:128},
  "whipping cream":{cal:292.0,carb:3.0,sug:3.0,fat:30.9,pro:2.2,fib:0.0,cupG:120.0,tbspG:15.0},
  "white beans":{cal:139.0,carb:25.1,sug:0.3,fat:0.3,pro:9.7,fib:6.3,cupG:179.0,tbspG:11.2},
  "white chocolate":{cal:539.0,carb:59.2,sug:59.0,fat:32.1,pro:5.9,fib:0.2,cupG:170.0,tbspG:14.0},
  "white pepper":{cal:296.0,carb:68.6,sug:0,fat:2.1,pro:10.4,fib:26.2,tbspG:7.1,tspG:2.4},
  "white rice":{cal:365.0,carb:80.0,sug:0.1,fat:0.7,pro:7.1,fib:1.3,cupG:185.0},
  "white sugar":{cal:387.0,carb:100.0,sug:99.8,fat:0.0,pro:0.0,fib:0.0,cupG:200.0,tspG:4.2},
  "white wine":{cal:82.0,carb:2.6,sug:1.0,fat:0.0,pro:0.1,fib:0.0},
  "white wine vinegar":{cal:18.0,carb:0.0,sug:0.0,fat:0.0,pro:0.0,fib:0.0,cupG:238.0,tbspG:14.9,tspG:5.0},
  "whole milk":{cal:61.0,carb:4.8,sug:5.0,fat:3.2,pro:3.1,fib:0.0,cupG:244.0,tbspG:15.0},
  "whole wheat flour":{cal:340.0,carb:72.0,sug:0.4,fat:2.5,pro:13.2,fib:10.7,cupG:120.0},
  "wholegrain mustard":{cal:60.0,carb:5.8,sug:0.9,fat:3.3,pro:3.7,fib:4.0,cupG:249.0,tspG:5.0},
  "wholemeal flour":{cal:340.0,carb:72.0,sug:0.4,fat:2.5,pro:13.2,fib:10.7,cupG:120.0},
  "wild rice":{cal:357.0,carb:74.9,sug:2.5,fat:1.1,pro:14.7,fib:6.2,cupG:160.0},
  "worcestershire sauce":{cal:77.0,carb:19.2,sug:10.0,fat:0.0,pro:0.0,fib:0.0,cupG:275.0,tbspG:17.0},
  "xanthan gum":{cal:333,carb:79,sug:0,fat:0,pro:0,fib:79,cupG:160,tspG:3},
  "yam":{cal:118.0,carb:27.9,sug:0.5,fat:0.2,pro:1.5,fib:4.1,cupG:150.0},
  "yeast":{cal:325.0,carb:41.2,sug:0.0,fat:7.6,pro:40.4,fib:26.9,tbspG:12.0,tspG:4.0},
  "yellow pepper":{cal:27.0,carb:6.3,sug:0,fat:0.2,pro:1.0,fib:0.9},
  "zucchini":{cal:17.0,carb:3.1,sug:2.5,fat:0.3,pro:1.2,fib:1.0,cupG:124.0},
};
// ── Unit conversion (to grams) ────────────────────────────────────────────────
// Base conversions for non-volume units
const UNIT_TO_G = {
  g:1, kg:1000, oz:28.35, lb:453.6, ml:1, l:1000,
  pinch:0.3, dash:0.6, piece:100, slice:30, handful:30, bunch:80, clove:5, sprig:5
};

// Default cup/tsp/tbsp weights when no ingredient-specific value exists
const DEFAULT_CUP_G   = 240;
const DEFAULT_TSP_G   = 4;
const DEFAULT_TBSP_G  = 12;

function toGrams(amount, unit, ingredientName) {
  const a = parseFloat(amount) || 0;
  if (a === 0) return 0;
  const u = (unit || 'g').toLowerCase().replace(/\s/g, '').trim();
  const key = ingredientName ? ingredientName.toLowerCase().trim() : '';

  // Look up ingredient entry for density info
  const entry = key ? (NUT[key] || matchIngredient(ingredientName)) : null;

  if (u === 'cup' || u === 'cups') {
    return a * (entry?.cupG || DEFAULT_CUP_G);
  }
  if (u === 'tbsp' || u === 'tablespoon' || u === 'tablespoons') {
    return a * (entry ? (entry.cupG || DEFAULT_CUP_G) / 16 : DEFAULT_TBSP_G);
  }
  if (u === 'tsp' || u === 'teaspoon' || u === 'teaspoons') {
    return a * (entry?.tspG || (entry ? (entry.cupG || DEFAULT_CUP_G) / 48 : DEFAULT_TSP_G));
  }
  if (u === '1/4cup') return a * (entry ? (entry.cupG || DEFAULT_CUP_G) / 4 : 60);
  if (u === '1/3cup') return a * (entry ? (entry.cupG || DEFAULT_CUP_G) / 3 : 80);
  if (u === '1/2cup') return a * (entry ? (entry.cupG || DEFAULT_CUP_G) / 2 : 120);
  if (u === '3/4cup') return a * (entry ? (entry.cupG || DEFAULT_CUP_G) * 0.75 : 180);

  return a * (UNIT_TO_G[u] || UNIT_TO_G[u.replace(/s$/, '')] || 1);
}

// ── Custom ingredient store ───────────────────────────────────────────────────
let customNUT = {};

function mergeCustomNUT(rows) {
  rows.forEach(row => {
    const key = row.name.toLowerCase().trim();
    const data = { cal: row.cal, carb: row.carb, sug: row.sug || 0, fat: row.fat, pro: row.pro, fib: row.fib };
    customNUT[key] = data;
    NUT[key] = data;
    if (row.display_name) NUT[row.display_name.toLowerCase().trim()] = data;
  });
}

// ── Ingredient matching ───────────────────────────────────────────────────────
function cleanIngredientName(raw) {
  let n = raw.toLowerCase().trim();
  // Strip everything after a comma ("shrimp, thawed if frozen" -> "shrimp")
  n = n.split(',')[0].trim();
  // Remove descriptive words that don't affect nutrition
  const fillers = [
    'preferably','optional','thawed','diced','sliced','chopped','minced','grated',
    'peeled','deveined','boneless','skinless','extra','warm','hot',
    'day old','day-old','if frozen','or long-grain','long grain','long-grain',
    'preferably cold','pitted','seeded','rinsed','drained',
    'sweetened','unsweetened','whole','crushed','crumbled','shredded',
    'halved','quartered','reduced fat','low fat','unsalted','salted',
    'large','medium','small',
  ];
  fillers.forEach(f => {
    n = n.replace(new RegExp('\\b' + f.replace(/[-]/g,'\\-') + '\\b', 'g'), ' ');
  });
  // Remove stray conjunctions
  n = n.replace(/\b(and|or|the|a|an|if|but|with)\b/g, ' ');
  n = n.replace(/\s+/g, ' ').trim();
  return n.replace(/[^a-z0-9 ]/g, '').trim();
}

function wordOverlapScore(a, b) {
  const wa = new Set(a.split(' ').filter(w => w.length > 1));
  const wb = new Set(b.split(' ').filter(w => w.length > 1));
  let overlap = 0;
  wa.forEach(w => { if (wb.has(w)) overlap++; });
  // Penalise length difference so shorter keys don't win unfairly
  return overlap - Math.abs(wa.size - wb.size) * 0.1;
}

function matchIngredient(name) {
  const nutKeys = Object.keys(NUT);

  // Build candidate strings to try
  const raw   = name.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
  const clean = cleanIngredientName(name);
  const beforeComma = name.toLowerCase().split(',')[0].trim().replace(/[^a-z0-9 ]/g, '');

  // 1. Exact matches first (fastest, most accurate)
  for (const n of [raw, clean, beforeComma]) {
    if (n && NUT[n]) return NUT[n];
  }

  // 2. Substring matches — try all candidates
  for (const n of [raw, clean, beforeComma]) {
    if (!n) continue;
    for (const key of nutKeys) {
      if (n === key || n.includes(key) || key.includes(n)) return NUT[key];
    }
  }

  // 3. Word overlap scoring — picks the NUT key with the most words in common
  // This handles cases like "cooked jasmine white rice" -> "cooked jasmine rice"
  let bestKey = null;
  let bestScore = 0;
  for (const n of [clean, raw]) {
    if (!n) continue;
    for (const key of nutKeys) {
      const score = wordOverlapScore(n, key);
      if (score > bestScore) { bestScore = score; bestKey = key; }
    }
  }
  if (bestKey && bestScore >= 1) return NUT[bestKey];

  return null;
}

// ── Nutrition calculation ─────────────────────────────────────────────────────
function calcNutrition(ingredients, servings) {
  let totCal=0, totCarb=0, totSug=0, totFat=0, totPro=0, totFib=0;
  const unmatched = [];
  for (const ing of ingredients) {
    const data = matchIngredient(ing.name);
    if (!data) { unmatched.push(ing.name); continue; }
    const f = toGrams(ing.amount, ing.unit, ing.name) / 100;
    totCal  += data.cal  * f;
    totCarb += data.carb * f;
    totSug  += (data.sug || 0) * f;
    totFat  += data.fat  * f;
    totPro  += data.pro  * f;
    totFib  += data.fib  * f;
  }
  const s = Math.max(1, parseInt(servings) || 1);
  return {
    calories: Math.round(totCal / s),
    carbs:    Math.round(totCarb / s),
    sugars:   Math.round(totSug / s),
    fat:      Math.round(totFat / s),
    protein:  Math.round(totPro / s),
    fiber:    Math.round(totFib / s),
    matched:  ingredients.length - unmatched.length,
    total:    ingredients.length,
    unmatched
  };
}

// ── Toast notifications ───────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Shared ingredient & step builders ────────────────────────────────────────
function buildIngredientRow(name = '', amount = '', unit = '', onRemove) {
  const div = document.createElement('div');
  div.className = 'ing-row';
  div.innerHTML = `
    <input type="text" placeholder="e.g. rolled oats" value="${name}">
    <input type="text" placeholder="0" value="${amount}" style="text-align:right">
    <input type="text" placeholder="g" value="${unit}">
    <button class="remove-btn" title="Remove"><i class="ti ti-x"></i></button>`;
  div.querySelector('.remove-btn').onclick = () => { div.remove(); if (onRemove) onRemove(); };
  return div;
}

function buildStepRow(text = '', onRemove) {
  const div = document.createElement('div');
  div.className = 'step-row';
  div.innerHTML = `
    <div class="step-num">?</div>
    <textarea class="field-input" placeholder="Describe this step..." style="min-height:64px">${text}</textarea>
    <button class="remove-btn" style="margin-top:8px" title="Remove"><i class="ti ti-x"></i></button>`;
  div.querySelector('.remove-btn').onclick = () => { div.remove(); renumberSteps(); if (onRemove) onRemove(); };
  return div;
}

function renumberSteps() {
  document.querySelectorAll('.step-num').forEach((el, i) => el.textContent = i + 1);
}

function gatherIngredients(listEl) {
  return [...listEl.querySelectorAll('.ing-row')].map(row => {
    const inputs = row.querySelectorAll('input');
    return { name: inputs[0].value.trim(), amount: inputs[1].value.trim(), unit: inputs[2].value.trim() };
  }).filter(i => i.name);
}

function gatherSteps(listEl) {
  return [...listEl.querySelectorAll('textarea')].map(t => t.value.trim()).filter(Boolean);
}

// ── Nutrition display ─────────────────────────────────────────────────────────
function renderNutritionGrid(nut, gridEl, bannerEl, ingListEl) {
  gridEl.style.display = 'grid';
  gridEl.innerHTML = `
    <div style="grid-column:1/-1;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--teal-dk);margin-bottom:4px">Per serving</div>
    <div class="nut-box"><div class="nut-val">${nut.calories}<span class="nut-unit">kcal</span></div><div class="nut-lbl">Calories</div></div>
    <div class="nut-box">
      <div class="nut-val">${nut.carbs}<span class="nut-unit">g</span></div>
      <div class="nut-lbl">Carbs</div>
      <div class="nut-sub">of which sugars: ${nut.sugars}g</div>
    </div>
    <div class="nut-box"><div class="nut-val">${nut.fat}<span class="nut-unit">g</span></div><div class="nut-lbl">Fat</div></div>
    <div class="nut-box"><div class="nut-val">${nut.protein}<span class="nut-unit">g</span></div><div class="nut-lbl">Protein</div></div>
    <div class="nut-box"><div class="nut-val">${nut.fiber}<span class="nut-unit">g</span></div><div class="nut-lbl">Fiber</div></div>
  `;

  if (bannerEl) {
    if (nut.unmatched && nut.unmatched.length > 0) {
      const pills = nut.unmatched.map(u => `<span class="unmatched-pill">${u}</span>`).join('');
      bannerEl.className = 'banner warn';
      bannerEl.style.display = 'flex';
      bannerEl.innerHTML = `<i class="ti ti-alert-circle"></i><div><strong>${nut.unmatched.length} ingredient${nut.unmatched.length > 1 ? 's' : ''} not in database</strong> — nutrition may be incomplete. These will be looked up when you save:<div class="unmatched-pills" style="margin-top:6px">${pills}</div></div>`;
      if (ingListEl) highlightUnmatched(nut.unmatched, ingListEl);
    } else {
      bannerEl.className = 'banner success';
      bannerEl.style.display = 'flex';
      bannerEl.innerHTML = `<i class="ti ti-check"></i> All ${nut.total} ingredients matched — nutrition complete.`;
      if (ingListEl) clearHighlights(ingListEl);
    }
  }
}

function highlightUnmatched(names, listEl) {
  listEl.querySelectorAll('.ing-row').forEach(row => {
    const v = row.querySelectorAll('input')[0].value.toLowerCase().trim();
    row.classList.toggle('unmatched', names.some(u => u.toLowerCase() === v));
  });
}

function clearHighlights(listEl) {
  listEl.querySelectorAll('.ing-row').forEach(r => r.classList.remove('unmatched'));
}
