// ── Nutrition Database (430+ ingredients, USDA-based, per 100g) ───────────────
// Fields: cal, carb, sug (sugars), fat, pro, fib
const NUT = {
  // Grains & oats
  'rolled oats':{cal:389,carb:66,sug:1,fat:7,pro:17,fib:11},'oats':{cal:389,carb:66,sug:1,fat:7,pro:17,fib:11},'quick oats':{cal:371,carb:67,sug:1,fat:7,pro:13,fib:10},'steel cut oats':{cal:379,carb:68,sug:1,fat:7,pro:13,fib:11},'oat bran':{cal:246,carb:66,sug:1,fat:7,pro:17,fib:15},'muesli':{cal:363,carb:66,sug:12,fat:6,pro:10,fib:7},
  'white rice':{cal:365,carb:80,sug:0,fat:1,pro:7,fib:1},'brown rice':{cal:370,carb:77,sug:0,fat:3,pro:8,fib:4},'rice':{cal:365,carb:80,sug:0,fat:1,pro:7,fib:1},'basmati rice':{cal:356,carb:78,sug:0,fat:1,pro:7,fib:1},'jasmine rice':{cal:356,carb:78,sug:0,fat:1,pro:7,fib:1},'wild rice':{cal:357,carb:75,sug:1,fat:1,pro:14,fib:6},
  'pasta':{cal:371,carb:74,sug:1,fat:2,pro:13,fib:3},'spaghetti':{cal:371,carb:74,sug:1,fat:2,pro:13,fib:3},'penne':{cal:371,carb:74,sug:1,fat:2,pro:13,fib:3},'fusilli':{cal:371,carb:74,sug:1,fat:2,pro:13,fib:3},'linguine':{cal:371,carb:74,sug:1,fat:2,pro:13,fib:3},'egg noodles':{cal:384,carb:71,sug:2,fat:5,pro:14,fib:3},'rice noodles':{cal:364,carb:80,sug:0,fat:1,pro:6,fib:2},'udon noodles':{cal:298,carb:60,sug:1,fat:1,pro:9,fib:2},'soba noodles':{cal:336,carb:74,sug:1,fat:1,pro:14,fib:2},
  'all purpose flour':{cal:364,carb:76,sug:0,fat:1,pro:10,fib:3},'flour':{cal:364,carb:76,sug:0,fat:1,pro:10,fib:3},'plain flour':{cal:364,carb:76,sug:0,fat:1,pro:10,fib:3},'whole wheat flour':{cal:340,carb:72,sug:0,fat:2,pro:13,fib:11},'wholemeal flour':{cal:340,carb:72,sug:0,fat:2,pro:13,fib:11},'bread flour':{cal:361,carb:73,sug:0,fat:2,pro:12,fib:3},'almond flour':{cal:579,carb:21,sug:4,fat:50,pro:21,fib:10},'coconut flour':{cal:400,carb:60,sug:10,fat:15,pro:20,fib:38},'oat flour':{cal:404,carb:65,sug:1,fat:9,pro:15,fib:7},'rye flour':{cal:357,carb:75,sug:1,fat:2,pro:10,fib:15},'spelt flour':{cal:338,carb:70,sug:1,fat:2,pro:15,fib:11},'buckwheat flour':{cal:335,carb:71,sug:1,fat:3,pro:13,fib:10},'cornmeal':{cal:362,carb:76,sug:1,fat:4,pro:8,fib:7},'semolina':{cal:360,carb:73,sug:1,fat:1,pro:13,fib:4},'tapioca starch':{cal:358,carb:89,sug:0,fat:0,pro:0,fib:0},'cornstarch':{cal:381,carb:91,sug:0,fat:0,pro:0,fib:1},'corn starch':{cal:381,carb:91,sug:0,fat:0,pro:0,fib:1},
  'quinoa':{cal:368,carb:64,sug:0,fat:6,pro:14,fib:7},'couscous':{cal:376,carb:77,sug:0,fat:1,pro:13,fib:5},'bulgur':{cal:342,carb:76,sug:0,fat:1,pro:12,fib:18},'farro':{cal:340,carb:72,sug:0,fat:2,pro:14,fib:7},'barley':{cal:354,carb:73,sug:0,fat:2,pro:12,fib:17},'millet':{cal:378,carb:73,sug:0,fat:4,pro:11,fib:9},'amaranth':{cal:371,carb:65,sug:2,fat:7,pro:14,fib:7},'teff':{cal:367,carb:73,sug:2,fat:2,pro:13,fib:8},'polenta':{cal:362,carb:76,sug:1,fat:4,pro:8,fib:7},'breadcrumbs':{cal:395,carb:72,sug:3,fat:5,pro:13,fib:3},'panko':{cal:395,carb:72,sug:3,fat:5,pro:13,fib:3},
  // Oils & fats
  'olive oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'extra virgin olive oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'vegetable oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'canola oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'rapeseed oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'sunflower oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'coconut oil':{cal:892,carb:0,sug:0,fat:100,pro:0,fib:0},'sesame oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'avocado oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'peanut oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'grapeseed oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'flaxseed oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'walnut oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},'oil':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},
  'butter':{cal:717,carb:0,sug:0,fat:81,pro:1,fib:0},'unsalted butter':{cal:717,carb:0,sug:0,fat:81,pro:1,fib:0},'salted butter':{cal:717,carb:0,sug:0,fat:81,pro:1,fib:0},'ghee':{cal:900,carb:0,sug:0,fat:100,pro:0,fib:0},'margarine':{cal:719,carb:1,sug:0,fat:81,pro:1,fib:0},'lard':{cal:902,carb:0,sug:0,fat:100,pro:0,fib:0},'shortening':{cal:884,carb:0,sug:0,fat:100,pro:0,fib:0},
  // Sweeteners
  'sugar':{cal:387,carb:100,sug:100,fat:0,pro:0,fib:0},'white sugar':{cal:387,carb:100,sug:100,fat:0,pro:0,fib:0},'granulated sugar':{cal:387,carb:100,sug:100,fat:0,pro:0,fib:0},'caster sugar':{cal:387,carb:100,sug:100,fat:0,pro:0,fib:0},'brown sugar':{cal:380,carb:98,sug:97,fat:0,pro:0,fib:0},'powdered sugar':{cal:389,carb:99,sug:97,fat:0,pro:0,fib:0},'icing sugar':{cal:389,carb:99,sug:97,fat:0,pro:0,fib:0},'coconut sugar':{cal:375,carb:95,sug:79,fat:0,pro:0,fib:0},'maple syrup':{cal:260,carb:67,sug:60,fat:0,pro:0,fib:0},'honey':{cal:304,carb:82,sug:82,fat:0,pro:0,fib:0},'agave':{cal:310,carb:76,sug:68,fat:0,pro:0,fib:0},'agave nectar':{cal:310,carb:76,sug:68,fat:0,pro:0,fib:0},'agave syrup':{cal:310,carb:76,sug:68,fat:0,pro:0,fib:0},'molasses':{cal:290,carb:75,sug:55,fat:0,pro:0,fib:0},'corn syrup':{cal:283,carb:77,sug:32,fat:0,pro:0,fib:0},'golden syrup':{cal:325,carb:84,sug:75,fat:0,pro:0,fib:0},'date syrup':{cal:281,carb:75,sug:65,fat:0,pro:1,fib:1},'stevia':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'erythritol':{cal:0,carb:100,sug:0,fat:0,pro:0,fib:0},'xylitol':{cal:240,carb:100,sug:0,fat:0,pro:0,fib:0},
  // Dairy & eggs
  'whole milk':{cal:61,carb:5,sug:5,fat:3,pro:3,fib:0},'milk':{cal:61,carb:5,sug:5,fat:3,pro:3,fib:0},'skim milk':{cal:34,carb:5,sug:5,fat:0,pro:3,fib:0},'skimmed milk':{cal:34,carb:5,sug:5,fat:0,pro:3,fib:0},'2% milk':{cal:50,carb:5,sug:5,fat:2,pro:3,fib:0},'buttermilk':{cal:40,carb:5,sug:5,fat:1,pro:3,fib:0},'almond milk':{cal:17,carb:1,sug:0,fat:1,pro:1,fib:0},'oat milk':{cal:47,carb:7,sug:4,fat:2,pro:1,fib:1},'soy milk':{cal:54,carb:6,sug:4,fat:2,pro:4,fib:1},'coconut milk':{cal:230,carb:6,sug:4,fat:24,pro:2,fib:0},'rice milk':{cal:47,carb:9,sug:5,fat:1,pro:0,fib:0},'cashew milk':{cal:25,carb:2,sug:1,fat:2,pro:1,fib:0},'heavy cream':{cal:340,carb:3,sug:3,fat:36,pro:2,fib:0},'double cream':{cal:340,carb:3,sug:3,fat:36,pro:2,fib:0},'cream':{cal:340,carb:3,sug:3,fat:36,pro:2,fib:0},'whipping cream':{cal:257,carb:3,sug:3,fat:27,pro:2,fib:0},'sour cream':{cal:193,carb:5,sug:4,fat:19,pro:3,fib:0},'creme fraiche':{cal:292,carb:3,sug:3,fat:30,pro:3,fib:0},'half and half':{cal:130,carb:4,sug:4,fat:12,pro:3,fib:0},'condensed milk':{cal:321,carb:54,sug:54,fat:9,pro:8,fib:0},'evaporated milk':{cal:134,carb:10,sug:10,fat:8,pro:7,fib:0},
  'greek yogurt':{cal:97,carb:6,sug:4,fat:5,pro:9,fib:0},'yogurt':{cal:97,carb:6,sug:4,fat:5,pro:9,fib:0},'plain yogurt':{cal:61,carb:5,sug:5,fat:3,pro:4,fib:0},'low fat yogurt':{cal:63,carb:7,sug:7,fat:2,pro:5,fib:0},'coconut yogurt':{cal:78,carb:13,sug:8,fat:3,pro:1,fib:1},
  'eggs':{cal:143,carb:1,sug:1,fat:10,pro:13,fib:0},'egg':{cal:143,carb:1,sug:1,fat:10,pro:13,fib:0},'large eggs':{cal:143,carb:1,sug:1,fat:10,pro:13,fib:0},'egg white':{cal:52,carb:1,sug:1,fat:0,pro:11,fib:0},'egg yolk':{cal:322,carb:4,sug:0,fat:27,pro:16,fib:0},
  'cheddar cheese':{cal:403,carb:1,sug:0,fat:33,pro:25,fib:0},'cheddar':{cal:403,carb:1,sug:0,fat:33,pro:25,fib:0},'mozzarella':{cal:280,carb:2,sug:1,fat:22,pro:19,fib:0},'parmesan':{cal:431,carb:4,sug:0,fat:29,pro:38,fib:0},'feta':{cal:264,carb:4,sug:4,fat:21,pro:14,fib:0},'ricotta':{cal:174,carb:3,sug:0,fat:13,pro:11,fib:0},'cream cheese':{cal:342,carb:4,sug:3,fat:34,pro:6,fib:0},'brie':{cal:334,carb:0,sug:0,fat:28,pro:21,fib:0},'gouda':{cal:356,carb:2,sug:2,fat:27,pro:25,fib:0},'swiss cheese':{cal:380,carb:5,sug:2,fat:28,pro:27,fib:0},'cottage cheese':{cal:98,carb:3,sug:3,fat:4,pro:11,fib:0},'cheese':{cal:402,carb:1,sug:0,fat:33,pro:25,fib:0},'mascarpone':{cal:429,carb:3,sug:3,fat:45,pro:5,fib:0},'halloumi':{cal:318,carb:2,sug:0,fat:26,pro:21,fib:0},'gruyere':{cal:413,carb:0,sug:0,fat:32,pro:30,fib:0},
  // Poultry
  'chicken breast':{cal:165,carb:0,sug:0,fat:4,pro:31,fib:0},'chicken thigh':{cal:209,carb:0,sug:0,fat:13,pro:26,fib:0},'chicken':{cal:165,carb:0,sug:0,fat:4,pro:31,fib:0},'chicken drumstick':{cal:185,carb:0,sug:0,fat:9,pro:28,fib:0},'turkey breast':{cal:135,carb:0,sug:0,fat:3,pro:29,fib:0},'turkey':{cal:189,carb:0,sug:0,fat:9,pro:28,fib:0},'turkey mince':{cal:149,carb:0,sug:0,fat:7,pro:22,fib:0},'ground turkey':{cal:149,carb:0,sug:0,fat:7,pro:22,fib:0},'duck':{cal:337,carb:0,sug:0,fat:28,pro:19,fib:0},
  // Beef & pork
  'ground beef':{cal:254,carb:0,sug:0,fat:18,pro:26,fib:0},'beef mince':{cal:254,carb:0,sug:0,fat:18,pro:26,fib:0},'mince':{cal:254,carb:0,sug:0,fat:18,pro:26,fib:0},'beef':{cal:250,carb:0,sug:0,fat:17,pro:26,fib:0},'steak':{cal:271,carb:0,sug:0,fat:18,pro:26,fib:0},'sirloin':{cal:207,carb:0,sug:0,fat:11,pro:29,fib:0},'beef brisket':{cal:220,carb:0,sug:0,fat:12,pro:30,fib:0},'pork':{cal:242,carb:0,sug:0,fat:14,pro:27,fib:0},'pork chop':{cal:231,carb:0,sug:0,fat:14,pro:27,fib:0},'pork belly':{cal:518,carb:0,sug:0,fat:53,pro:9,fib:0},'bacon':{cal:541,carb:0,sug:0,fat:42,pro:37,fib:0},'pancetta':{cal:501,carb:0,sug:0,fat:43,pro:25,fib:0},'ham':{cal:145,carb:2,sug:2,fat:6,pro:21,fib:0},'sausage':{cal:301,carb:3,sug:0,fat:26,pro:14,fib:0},'chorizo':{cal:455,carb:1,sug:0,fat:40,pro:22,fib:0},'pepperoni':{cal:494,carb:2,sug:0,fat:44,pro:21,fib:0},'salami':{cal:425,carb:2,sug:0,fat:35,pro:26,fib:0},'lamb':{cal:294,carb:0,sug:0,fat:21,pro:25,fib:0},'lamb mince':{cal:282,carb:0,sug:0,fat:21,pro:25,fib:0},'veal':{cal:172,carb:0,sug:0,fat:7,pro:26,fib:0},'venison':{cal:158,carb:0,sug:0,fat:3,pro:30,fib:0},
  // Seafood
  'salmon':{cal:208,carb:0,sug:0,fat:13,pro:20,fib:0},'tuna':{cal:144,carb:0,sug:0,fat:5,pro:23,fib:0},'canned tuna':{cal:116,carb:0,sug:0,fat:3,pro:23,fib:0},'tinned tuna':{cal:116,carb:0,sug:0,fat:3,pro:23,fib:0},'cod':{cal:105,carb:0,sug:0,fat:1,pro:23,fib:0},'tilapia':{cal:96,carb:0,sug:0,fat:2,pro:20,fib:0},'halibut':{cal:111,carb:0,sug:0,fat:2,pro:23,fib:0},'sea bass':{cal:124,carb:0,sug:0,fat:3,pro:24,fib:0},'trout':{cal:148,carb:0,sug:0,fat:6,pro:21,fib:0},'sardines':{cal:208,carb:0,sug:0,fat:11,pro:25,fib:0},'mackerel':{cal:205,carb:0,sug:0,fat:13,pro:19,fib:0},'shrimp':{cal:99,carb:0,sug:0,fat:1,pro:24,fib:0},'prawns':{cal:99,carb:0,sug:0,fat:1,pro:24,fib:0},'crab':{cal:97,carb:0,sug:0,fat:2,pro:19,fib:0},'scallops':{cal:111,carb:5,sug:0,fat:1,pro:20,fib:0},'mussels':{cal:86,carb:4,sug:0,fat:2,pro:12,fib:0},'squid':{cal:92,carb:3,sug:0,fat:1,pro:16,fib:0},'anchovies':{cal:210,carb:0,sug:0,fat:10,pro:29,fib:0},'haddock':{cal:116,carb:0,sug:0,fat:3,pro:20,fib:0},
  // Legumes
  'lentils':{cal:353,carb:60,sug:2,fat:1,pro:25,fib:31},'red lentils':{cal:353,carb:60,sug:2,fat:1,pro:25,fib:31},'green lentils':{cal:353,carb:60,sug:2,fat:1,pro:25,fib:31},'chickpeas':{cal:364,carb:61,sug:11,fat:6,pro:19,fib:17},'garbanzo beans':{cal:364,carb:61,sug:11,fat:6,pro:19,fib:17},'black beans':{cal:341,carb:62,sug:2,fat:1,pro:21,fib:15},'kidney beans':{cal:333,carb:60,sug:3,fat:1,pro:24,fib:24},'pinto beans':{cal:347,carb:63,sug:1,fat:1,pro:21,fib:16},'cannellini beans':{cal:333,carb:60,sug:1,fat:1,pro:22,fib:11},'white beans':{cal:333,carb:60,sug:1,fat:1,pro:22,fib:11},'edamame':{cal:121,carb:9,sug:3,fat:5,pro:11,fib:5},'soy beans':{cal:173,carb:10,sug:3,fat:9,pro:17,fib:6},'tofu':{cal:144,carb:3,sug:1,fat:9,pro:17,fib:0},'firm tofu':{cal:144,carb:3,sug:1,fat:9,pro:17,fib:0},'silken tofu':{cal:55,carb:2,sug:1,fat:2,pro:5,fib:0},'tempeh':{cal:193,carb:8,sug:0,fat:11,pro:19,fib:9},'miso':{cal:199,carb:26,sug:7,fat:6,pro:12,fib:5},'split peas':{cal:341,carb:60,sug:8,fat:1,pro:24,fib:26},'butter beans':{cal:333,carb:60,sug:2,fat:1,pro:22,fib:11},'broad beans':{cal:341,carb:58,sug:5,fat:2,pro:26,fib:25},'fava beans':{cal:341,carb:58,sug:5,fat:2,pro:26,fib:25},
  // Nuts & nut butters
  'almonds':{cal:579,carb:22,sug:4,fat:50,pro:21,fib:13},'walnuts':{cal:654,carb:14,sug:3,fat:65,pro:15,fib:7},'cashews':{cal:553,carb:30,sug:6,fat:44,pro:18,fib:3},'pistachios':{cal:560,carb:27,sug:8,fat:45,pro:20,fib:11},'pistachio':{cal:560,carb:27,sug:8,fat:45,pro:20,fib:11},'pecans':{cal:691,carb:14,sug:4,fat:72,pro:9,fib:10},'macadamia nuts':{cal:718,carb:14,sug:5,fat:76,pro:8,fib:9},'hazelnuts':{cal:628,carb:17,sug:4,fat:61,pro:15,fib:10},'brazil nuts':{cal:659,carb:12,sug:2,fat:67,pro:14,fib:8},'pine nuts':{cal:673,carb:13,sug:4,fat:68,pro:14,fib:4},'peanuts':{cal:567,carb:16,sug:4,fat:49,pro:26,fib:9},'chestnuts':{cal:245,carb:53,sug:11,fat:3,pro:4,fib:8},'mixed nuts':{cal:607,carb:21,sug:4,fat:54,pro:18,fib:7},'coconut':{cal:660,carb:25,sug:6,fat:64,pro:7,fib:16},'shredded coconut':{cal:660,carb:25,sug:6,fat:64,pro:7,fib:16},'desiccated coconut':{cal:660,carb:25,sug:6,fat:64,pro:7,fib:16},'coconut flakes':{cal:660,carb:25,sug:6,fat:64,pro:7,fib:16},
  'peanut butter':{cal:588,carb:20,sug:9,fat:50,pro:25,fib:6},'almond butter':{cal:614,carb:19,sug:5,fat:56,pro:21,fib:10},'cashew butter':{cal:587,carb:27,sug:6,fat:50,pro:18,fib:3},'tahini':{cal:595,carb:21,sug:0,fat:53,pro:17,fib:10},
  // Seeds
  'pumpkin seeds':{cal:559,carb:11,sug:1,fat:49,pro:30,fib:6},'pepitas':{cal:559,carb:11,sug:1,fat:49,pro:30,fib:6},'sunflower seeds':{cal:584,carb:20,sug:3,fat:51,pro:21,fib:9},'sesame seeds':{cal:573,carb:23,sug:0,fat:50,pro:18,fib:12},'flax seeds':{cal:534,carb:29,sug:2,fat:42,pro:18,fib:27},'flaxseed':{cal:534,carb:29,sug:2,fat:42,pro:18,fib:27},'linseeds':{cal:534,carb:29,sug:2,fat:42,pro:18,fib:27},'chia seeds':{cal:486,carb:42,sug:0,fat:31,pro:17,fib:34},'chia':{cal:486,carb:42,sug:0,fat:31,pro:17,fib:34},'hemp hearts':{cal:567,carb:10,sug:1,fat:43,pro:33,fib:10},'hemp seeds':{cal:567,carb:10,sug:1,fat:43,pro:33,fib:10},'poppy seeds':{cal:525,carb:28,sug:3,fat:42,pro:18,fib:20},'flaxseed meal':{cal:534,carb:29,sug:2,fat:42,pro:18,fib:27},
  // Fresh fruit
  'apple':{cal:52,carb:14,sug:10,fat:0,pro:0,fib:2},'banana':{cal:89,carb:23,sug:12,fat:0,pro:1,fib:3},'orange':{cal:47,carb:12,sug:9,fat:0,pro:1,fib:2},'lemon':{cal:29,carb:9,sug:3,fat:0,pro:1,fib:3},'lime':{cal:30,carb:11,sug:2,fat:0,pro:1,fib:3},'mango':{cal:60,carb:15,sug:14,fat:0,pro:1,fib:2},'pineapple':{cal:50,carb:13,sug:10,fat:0,pro:1,fib:1},'strawberries':{cal:32,carb:8,sug:5,fat:0,pro:1,fib:2},'strawberry':{cal:32,carb:8,sug:5,fat:0,pro:1,fib:2},'blueberries':{cal:57,carb:14,sug:10,fat:0,pro:1,fib:2},'blueberry':{cal:57,carb:14,sug:10,fat:0,pro:1,fib:2},'raspberries':{cal:52,carb:12,sug:4,fat:1,pro:1,fib:7},'blackberries':{cal:43,carb:10,sug:5,fat:1,pro:1,fib:5},'cherries':{cal:63,carb:16,sug:13,fat:0,pro:1,fib:2},'grapes':{cal:69,carb:18,sug:16,fat:0,pro:1,fib:1},'watermelon':{cal:30,carb:8,sug:6,fat:0,pro:1,fib:0},'cantaloupe':{cal:34,carb:8,sug:8,fat:0,pro:1,fib:1},'peach':{cal:39,carb:10,sug:8,fat:0,pro:1,fib:2},'pear':{cal:57,carb:15,sug:10,fat:0,pro:0,fib:3},'plum':{cal:46,carb:11,sug:10,fat:0,pro:1,fib:1},'kiwi':{cal:61,carb:15,sug:9,fat:1,pro:1,fib:3},'papaya':{cal:43,carb:11,sug:8,fat:0,pro:1,fib:2},'pomegranate':{cal:83,carb:19,sug:14,fat:1,pro:2,fib:4},'fig':{cal:74,carb:19,sug:16,fat:0,pro:1,fib:3},'avocado':{cal:160,carb:9,sug:1,fat:15,pro:2,fib:7},'grapefruit':{cal:42,carb:11,sug:7,fat:0,pro:1,fib:2},'passion fruit':{cal:97,carb:23,sug:11,fat:1,pro:2,fib:10},'lychee':{cal:66,carb:17,sug:15,fat:0,pro:1,fib:1},
  // Dried fruit
  'raisins':{cal:299,carb:79,sug:59,fat:0,pro:3,fib:4},'sultanas':{cal:299,carb:79,sug:59,fat:0,pro:3,fib:4},'dried cranberries':{cal:308,carb:82,sug:65,fat:1,pro:0,fib:5},'dried cherries':{cal:333,carb:80,sug:73,fat:1,pro:1,fib:2},'dried apricots':{cal:241,carb:63,sug:53,fat:0,pro:3,fib:7},'dried mango':{cal:319,carb:79,sug:69,fat:1,pro:3,fib:2},'dried figs':{cal:249,carb:64,sug:48,fat:1,pro:3,fib:10},'prunes':{cal:240,carb:64,sug:38,fat:0,pro:2,fib:7},'dates':{cal:282,carb:75,sug:63,fat:0,pro:2,fib:8},'medjool dates':{cal:277,carb:75,sug:66,fat:0,pro:2,fib:7},'goji berries':{cal:349,carb:77,sug:46,fat:0,pro:14,fib:13},'dried blueberries':{cal:317,carb:80,sug:68,fat:1,pro:1,fib:5},'currants':{cal:283,carb:67,sug:67,fat:0,pro:4,fib:7},
  // Vegetables
  'spinach':{cal:23,carb:4,sug:0,fat:0,pro:3,fib:2},'baby spinach':{cal:23,carb:4,sug:0,fat:0,pro:3,fib:2},'kale':{cal:49,carb:9,sug:2,fat:1,pro:4,fib:4},'broccoli':{cal:34,carb:7,sug:2,fat:0,pro:3,fib:3},'cauliflower':{cal:25,carb:5,sug:2,fat:0,pro:2,fib:3},'carrot':{cal:41,carb:10,sug:5,fat:0,pro:1,fib:3},'carrots':{cal:41,carb:10,sug:5,fat:0,pro:1,fib:3},'onion':{cal:40,carb:9,sug:4,fat:0,pro:1,fib:2},'onions':{cal:40,carb:9,sug:4,fat:0,pro:1,fib:2},'red onion':{cal:40,carb:9,sug:4,fat:0,pro:1,fib:2},'shallot':{cal:72,carb:17,sug:7,fat:0,pro:3,fib:3},'garlic':{cal:149,carb:33,sug:1,fat:1,pro:6,fib:2},'tomato':{cal:18,carb:4,sug:3,fat:0,pro:1,fib:1},'tomatoes':{cal:18,carb:4,sug:3,fat:0,pro:1,fib:1},'cherry tomatoes':{cal:18,carb:4,sug:3,fat:0,pro:1,fib:1},'potato':{cal:77,carb:17,sug:1,fat:0,pro:2,fib:2},'sweet potato':{cal:86,carb:20,sug:4,fat:0,pro:2,fib:3},'yam':{cal:118,carb:28,sug:1,fat:0,pro:2,fib:4},'zucchini':{cal:17,carb:3,sug:2,fat:0,pro:1,fib:1},'courgette':{cal:17,carb:3,sug:2,fat:0,pro:1,fib:1},'cucumber':{cal:16,carb:4,sug:2,fat:0,pro:1,fib:1},'celery':{cal:16,carb:3,sug:1,fat:0,pro:1,fib:2},'bell pepper':{cal:31,carb:6,sug:4,fat:0,pro:1,fib:2},'peppers':{cal:31,carb:6,sug:4,fat:0,pro:1,fib:2},'red pepper':{cal:31,carb:6,sug:4,fat:0,pro:1,fib:2},'green pepper':{cal:20,carb:5,sug:2,fat:0,pro:1,fib:2},'yellow pepper':{cal:27,carb:6,sug:4,fat:0,pro:1,fib:2},'jalapeño':{cal:29,carb:7,sug:4,fat:0,pro:1,fib:4},'chilli':{cal:40,carb:9,sug:5,fat:0,pro:2,fib:2},'chili':{cal:40,carb:9,sug:5,fat:0,pro:2,fib:2},'corn':{cal:86,carb:19,sug:3,fat:1,pro:3,fib:2},'peas':{cal:81,carb:14,sug:6,fat:0,pro:5,fib:5},'green beans':{cal:31,carb:7,sug:4,fat:0,pro:2,fib:3},'asparagus':{cal:20,carb:4,sug:2,fat:0,pro:2,fib:2},'mushrooms':{cal:22,carb:3,sug:2,fat:0,pro:3,fib:1},'shiitake mushrooms':{cal:39,carb:6,sug:2,fat:0,pro:2,fib:3},'eggplant':{cal:25,carb:6,sug:4,fat:0,pro:1,fib:3},'aubergine':{cal:25,carb:6,sug:4,fat:0,pro:1,fib:3},'cabbage':{cal:25,carb:6,sug:3,fat:0,pro:1,fib:3},'red cabbage':{cal:31,carb:7,sug:4,fat:0,pro:1,fib:2},'brussels sprouts':{cal:43,carb:9,sug:2,fat:0,pro:4,fib:4},'leek':{cal:61,carb:14,sug:4,fat:0,pro:2,fib:2},'beetroot':{cal:43,carb:10,sug:7,fat:0,pro:2,fib:3},'beets':{cal:43,carb:10,sug:7,fat:0,pro:2,fib:3},'artichoke':{cal:47,carb:11,sug:1,fat:0,pro:3,fib:5},'fennel':{cal:31,carb:7,sug:4,fat:0,pro:1,fib:3},'bok choy':{cal:13,carb:2,sug:1,fat:0,pro:2,fib:1},'pak choi':{cal:13,carb:2,sug:1,fat:0,pro:2,fib:1},'butternut squash':{cal:45,carb:12,sug:2,fat:0,pro:1,fib:2},'pumpkin':{cal:26,carb:7,sug:3,fat:0,pro:1,fib:1},'turnip':{cal:28,carb:6,sug:4,fat:0,pro:1,fib:2},'parsnip':{cal:75,carb:18,sug:5,fat:0,pro:1,fib:5},'radish':{cal:16,carb:3,sug:2,fat:0,pro:1,fib:2},'spring onion':{cal:32,carb:7,sug:2,fat:0,pro:2,fib:3},'scallion':{cal:32,carb:7,sug:2,fat:0,pro:2,fib:3},'green onion':{cal:32,carb:7,sug:2,fat:0,pro:2,fib:3},'watercress':{cal:11,carb:1,sug:0,fat:0,pro:2,fib:1},'rocket':{cal:25,carb:4,sug:2,fat:1,pro:3,fib:2},'arugula':{cal:25,carb:4,sug:2,fat:1,pro:3,fib:2},'lettuce':{cal:15,carb:3,sug:2,fat:0,pro:1,fib:1},'romaine lettuce':{cal:17,carb:3,sug:1,fat:0,pro:1,fib:2},'mixed greens':{cal:20,carb:4,sug:1,fat:0,pro:2,fib:2},'canned tomatoes':{cal:32,carb:7,sug:4,fat:0,pro:2,fib:2},'tinned tomatoes':{cal:32,carb:7,sug:4,fat:0,pro:2,fib:2},'sun dried tomatoes':{cal:258,carb:56,sug:38,fat:3,pro:14,fib:12},'tomato paste':{cal:82,carb:19,sug:12,fat:0,pro:4,fib:4},'tomato puree':{cal:82,carb:19,sug:12,fat:0,pro:4,fib:4},'tomato sauce':{cal:29,carb:6,sug:4,fat:0,pro:2,fib:1},'passata':{cal:29,carb:6,sug:4,fat:0,pro:2,fib:1},
  // Herbs, spices & seasonings
  'salt':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'kosher salt':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'sea salt':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'black pepper':{cal:251,carb:64,sug:1,fat:3,pro:10,fib:25},'pepper':{cal:251,carb:64,sug:1,fat:3,pro:10,fib:25},'cinnamon':{cal:247,carb:81,sug:2,fat:1,pro:4,fib:53},'ground cinnamon':{cal:247,carb:81,sug:2,fat:1,pro:4,fib:53},'cumin':{cal:375,carb:44,sug:2,fat:22,pro:18,fib:11},'turmeric':{cal:312,carb:67,sug:3,fat:3,pro:10,fib:21},'paprika':{cal:282,carb:54,sug:10,fat:13,pro:14,fib:35},'smoked paprika':{cal:282,carb:54,sug:10,fat:13,pro:14,fib:35},'cayenne':{cal:318,carb:57,sug:10,fat:17,pro:12,fib:27},'garam masala':{cal:349,carb:56,sug:4,fat:15,pro:15,fib:16},'curry powder':{cal:325,carb:58,sug:4,fat:14,pro:14,fib:33},'oregano':{cal:265,carb:69,sug:4,fat:4,pro:9,fib:43},'thyme':{cal:101,carb:24,sug:1,fat:2,pro:6,fib:14},'rosemary':{cal:131,carb:21,sug:1,fat:5,pro:3,fib:14},'basil':{cal:23,carb:3,sug:0,fat:1,pro:3,fib:2},'parsley':{cal:36,carb:6,sug:1,fat:1,pro:3,fib:3},'cilantro':{cal:23,carb:4,sug:0,fat:1,pro:2,fib:3},'coriander':{cal:23,carb:4,sug:0,fat:1,pro:2,fib:3},'dill':{cal:43,carb:7,sug:0,fat:1,pro:3,fib:2},'mint':{cal:70,carb:15,sug:0,fat:1,pro:4,fib:8},'chives':{cal:30,carb:4,sug:1,fat:1,pro:3,fib:3},'ginger':{cal:80,carb:18,sug:2,fat:1,pro:2,fib:2},'fresh ginger':{cal:80,carb:18,sug:2,fat:1,pro:2,fib:2},'ground ginger':{cal:335,carb:72,sug:4,fat:5,pro:9,fib:14},'vanilla extract':{cal:288,carb:13,sug:13,fat:0,pro:0,fib:0},'vanilla bean':{cal:288,carb:13,sug:13,fat:0,pro:0,fib:0},'cardamom':{cal:311,carb:68,sug:3,fat:7,pro:11,fib:28},'cloves':{cal:274,carb:66,sug:3,fat:13,pro:6,fib:34},'nutmeg':{cal:525,carb:49,sug:3,fat:36,pro:6,fib:21},'allspice':{cal:263,carb:72,sug:3,fat:9,pro:6,fib:22},'mixed herbs':{cal:259,carb:51,sug:2,fat:5,pro:13,fib:26},
  // Baking
  'baking powder':{cal:53,carb:28,sug:0,fat:0,pro:0,fib:0},'baking soda':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'bicarbonate of soda':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'bicarb':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'yeast':{cal:325,carb:41,sug:0,fat:7,pro:40,fib:27},'active dry yeast':{cal:325,carb:41,sug:0,fat:7,pro:40,fib:27},'instant yeast':{cal:325,carb:41,sug:0,fat:7,pro:40,fib:27},'cream of tartar':{cal:184,carb:44,sug:0,fat:0,pro:0,fib:0},'gelatin':{cal:335,carb:0,sug:0,fat:0,pro:86,fib:0},'gelatine':{cal:335,carb:0,sug:0,fat:0,pro:86,fib:0},'agar agar':{cal:26,carb:7,sug:0,fat:0,pro:1,fib:7},
  // Chocolate
  'dark chocolate':{cal:546,carb:60,sug:48,fat:31,pro:5,fib:7},'milk chocolate':{cal:535,carb:59,sug:52,fat:30,pro:8,fib:3},'white chocolate':{cal:539,carb:59,sug:59,fat:32,pro:6,fib:0},'chocolate chips':{cal:489,carb:62,sug:50,fat:27,pro:5,fib:5},'chocolate':{cal:546,carb:60,sug:48,fat:31,pro:5,fib:7},'cocoa powder':{cal:228,carb:58,sug:2,fat:14,pro:20,fib:33},'cocoa':{cal:228,carb:58,sug:2,fat:14,pro:20,fib:33},'cacao powder':{cal:228,carb:58,sug:2,fat:14,pro:20,fib:33},'cacao nibs':{cal:480,carb:36,sug:0,fat:30,pro:20,fib:13},
  // Condiments & sauces
  'soy sauce':{cal:53,carb:5,sug:1,fat:1,pro:8,fib:1},'tamari':{cal:60,carb:6,sug:2,fat:0,pro:11,fib:1},'fish sauce':{cal:35,carb:4,sug:4,fat:0,pro:5,fib:0},'oyster sauce':{cal:51,carb:11,sug:5,fat:1,pro:1,fib:0},'worcestershire sauce':{cal:78,carb:19,sug:12,fat:0,pro:1,fib:0},'hot sauce':{cal:11,carb:2,sug:1,fat:0,pro:1,fib:0},'sriracha':{cal:35,carb:8,sug:5,fat:0,pro:1,fib:0},'ketchup':{cal:101,carb:26,sug:22,fat:0,pro:1,fib:0},'mustard':{cal:66,carb:6,sug:2,fat:4,pro:4,fib:4},'dijon mustard':{cal:66,carb:6,sug:2,fat:4,pro:4,fib:4},'mayonnaise':{cal:680,carb:1,sug:1,fat:75,pro:1,fib:0},'vinegar':{cal:18,carb:0,sug:0,fat:0,pro:0,fib:0},'apple cider vinegar':{cal:21,carb:1,sug:1,fat:0,pro:0,fib:0},'balsamic vinegar':{cal:88,carb:17,sug:15,fat:0,pro:0,fib:0},'rice vinegar':{cal:18,carb:0,sug:0,fat:0,pro:0,fib:0},'lemon juice':{cal:22,carb:7,sug:2,fat:0,pro:0,fib:0},'lime juice':{cal:25,carb:8,sug:1,fat:0,pro:0,fib:0},'orange juice':{cal:45,carb:10,sug:8,fat:0,pro:1,fib:0},'hummus':{cal:177,carb:20,sug:2,fat:9,pro:8,fib:6},'pesto':{cal:263,carb:5,sug:2,fat:25,pro:5,fib:1},'salsa':{cal:36,carb:8,sug:4,fat:0,pro:2,fib:2},'guacamole':{cal:152,carb:9,sug:1,fat:13,pro:2,fib:5},'tahini':{cal:595,carb:21,sug:0,fat:53,pro:17,fib:10},'teriyaki sauce':{cal:89,carb:18,sug:14,fat:1,pro:5,fib:0},'hoisin sauce':{cal:220,carb:40,sug:22,fat:4,pro:4,fib:3},'sweet chilli sauce':{cal:117,carb:28,sug:24,fat:0,pro:1,fib:1},'bbq sauce':{cal:172,carb:40,sug:32,fat:1,pro:2,fib:1},
  // Liquids & broths
  'vegetable broth':{cal:13,carb:3,sug:1,fat:0,pro:0,fib:0},'chicken broth':{cal:15,carb:1,sug:0,fat:0,pro:2,fib:0},'beef broth':{cal:17,carb:0,sug:0,fat:1,pro:3,fib:0},'vegetable stock':{cal:13,carb:3,sug:1,fat:0,pro:0,fib:0},'chicken stock':{cal:15,carb:1,sug:0,fat:0,pro:2,fib:0},'beef stock':{cal:17,carb:0,sug:0,fat:1,pro:3,fib:0},'water':{cal:0,carb:0,sug:0,fat:0,pro:0,fib:0},'coconut water':{cal:19,carb:5,sug:5,fat:0,pro:0,fib:1},'red wine':{cal:85,carb:3,sug:1,fat:0,pro:0,fib:0},'white wine':{cal:82,carb:3,sug:1,fat:0,pro:0,fib:0},'apple juice':{cal:46,carb:11,sug:10,fat:0,pro:0,fib:0},'orange juice':{cal:45,carb:10,sug:8,fat:0,pro:1,fib:0},
  // Health & specialty
  'protein powder':{cal:400,carb:15,sug:5,fat:7,pro:70,fib:2},'whey protein':{cal:400,carb:15,sug:5,fat:7,pro:70,fib:2},'pea protein':{cal:358,carb:12,sug:1,fat:5,pro:78,fib:2},'collagen powder':{cal:360,carb:0,sug:0,fat:0,pro:90,fib:0},'spirulina':{cal:290,carb:24,sug:3,fat:8,pro:57,fib:4},'nutritional yeast':{cal:325,carb:41,sug:1,fat:7,pro:40,fib:27},'wheat germ':{cal:382,carb:52,sug:7,fat:10,pro:27,fib:14},'matcha':{cal:324,carb:38,sug:0,fat:5,pro:30,fib:37}
};

// ── Unit conversion (to grams) ────────────────────────────────────────────────
const UNIT_TO_G = {
  g:1, kg:1000, oz:28.35, lb:453.6, ml:1, l:1000,
  tsp:4, tbsp:12, cup:236,
  '1/4cup':59,'1/3cup':79,'1/2cup':118,'3/4cup':177,
  pinch:0.3, dash:0.6, piece:100, slice:30, handful:30, bunch:80, clove:5, sprig:5
};

function toGrams(amount, unit) {
  const a = parseFloat(amount) || 0;
  const u = (unit || 'g').toLowerCase().replace(/\s/g, '').trim();
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
function matchIngredient(name) {
  const n = name.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
  if (NUT[n]) return NUT[n];
  for (const key of Object.keys(NUT)) { if (n === key) return NUT[key]; }
  for (const key of Object.keys(NUT)) { if (n.includes(key) || key.includes(n)) return NUT[key]; }
  const words = n.split(' ').filter(w => w.length > 3);
  for (const key of Object.keys(NUT)) {
    const kw = key.split(' ');
    if (words.some(w => kw.includes(w))) return NUT[key];
  }
  return null;
}

// ── Nutrition calculation ─────────────────────────────────────────────────────
function calcNutrition(ingredients, servings) {
  let totCal=0, totCarb=0, totSug=0, totFat=0, totPro=0, totFib=0;
  const unmatched = [];
  for (const ing of ingredients) {
    const data = matchIngredient(ing.name);
    if (!data) { unmatched.push(ing.name); continue; }
    const f = toGrams(ing.amount, ing.unit) / 100;
    totCal  += data.cal  * f;
    totCarb += data.carb * f;
    totSug  += (data.sug || 0) * f;
    totFat  += data.fat  * f;
    totPro  += data.pro  * f;
    totFib  += data.fib  * f;
  }
  const s = Math.max(1, servings || 1);
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
