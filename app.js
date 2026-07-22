// ── Nutrition Database (430+ ingredients, USDA-based, per 100g) ───────────────
// Fields: cal, carb, sug (sugars), fat, pro, fib, cupG (grams per 1 cup)
// cupG reflects actual density — critical for accurate volume-to-weight conversion
// tspG = grams per teaspoon (defaults to cupG/48 if omitted)
const NUT = {
  // ── Grains & oats ──────────────────────────────────────────────────────────
  'rolled oats':          {cal:389,carb:66,sug:1, fat:7, pro:17,fib:11,cupG:90},
  'oats':                 {cal:389,carb:66,sug:1, fat:7, pro:17,fib:11,cupG:90},
  'quick oats':           {cal:371,carb:67,sug:1, fat:7, pro:13,fib:10,cupG:90},
  'steel cut oats':       {cal:379,carb:68,sug:1, fat:7, pro:13,fib:11,cupG:160},
  'oat bran':             {cal:246,carb:66,sug:1, fat:7, pro:17,fib:15,cupG:94},
  'muesli':               {cal:363,carb:66,sug:12,fat:6, pro:10,fib:7, cupG:90},

  // Rice (raw vs cooked — cooked rice is much lower calorie per 100g)
  'white rice':           {cal:365,carb:80,sug:0, fat:1, pro:7, fib:1, cupG:185},
  'brown rice':           {cal:370,carb:77,sug:0, fat:3, pro:8, fib:4, cupG:195},
  'rice':                 {cal:130,carb:28,sug:0, fat:0, pro:3, fib:0, cupG:185},
  'cooked rice':          {cal:130,carb:28,sug:0, fat:0, pro:3, fib:0, cupG:185},
  'cooked white rice':    {cal:130,carb:28,sug:0, fat:0, pro:3, fib:0, cupG:185},
  'cooked brown rice':    {cal:123,carb:26,sug:0, fat:1, pro:3, fib:2, cupG:195},
  'basmati rice':         {cal:356,carb:78,sug:0, fat:1, pro:7, fib:1, cupG:185},
  'jasmine rice':         {cal:356,carb:78,sug:0, fat:1, pro:7, fib:1, cupG:185},
  'cooked jasmine rice':  {cal:130,carb:28,sug:0, fat:0, pro:3, fib:0, cupG:185},
  'cooked jasmine or long-grain white rice': {cal:130,carb:28,sug:0,fat:0,pro:3,fib:0,cupG:185},
  'day old rice':         {cal:130,carb:28,sug:0, fat:0, pro:3, fib:0, cupG:185},
  'wild rice':            {cal:357,carb:75,sug:1, fat:1, pro:14,fib:6, cupG:160},
  'arborio rice':         {cal:356,carb:78,sug:0, fat:1, pro:7, fib:1, cupG:185},

  // Pasta & noodles
  'pasta':                {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'spaghetti':            {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'penne':                {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'fusilli':              {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'linguine':             {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'rigatoni':             {cal:371,carb:74,sug:1, fat:2, pro:13,fib:3, cupG:140},
  'egg noodles':          {cal:384,carb:71,sug:2, fat:5, pro:14,fib:3, cupG:140},
  'rice noodles':         {cal:364,carb:80,sug:0, fat:1, pro:6, fib:2, cupG:140},
  'udon noodles':         {cal:298,carb:60,sug:1, fat:1, pro:9, fib:2, cupG:140},
  'soba noodles':         {cal:336,carb:74,sug:1, fat:1, pro:14,fib:2, cupG:140},

  // Flours & starches
  'all purpose flour':    {cal:364,carb:76,sug:0, fat:1, pro:10,fib:3, cupG:120},
  'flour':                {cal:364,carb:76,sug:0, fat:1, pro:10,fib:3, cupG:120},
  'plain flour':          {cal:364,carb:76,sug:0, fat:1, pro:10,fib:3, cupG:120},
  'whole wheat flour':    {cal:340,carb:72,sug:0, fat:2, pro:13,fib:11,cupG:120},
  'wholemeal flour':      {cal:340,carb:72,sug:0, fat:2, pro:13,fib:11,cupG:120},
  'bread flour':          {cal:361,carb:73,sug:0, fat:2, pro:12,fib:3, cupG:120},
  'cake flour':           {cal:361,carb:79,sug:0, fat:1, pro:8, fib:2, cupG:100},
  'almond flour':         {cal:579,carb:21,sug:4, fat:50,pro:21,fib:10,cupG:96},
  'coconut flour':        {cal:400,carb:60,sug:10,fat:15,pro:20,fib:38,cupG:112},
  'oat flour':            {cal:404,carb:65,sug:1, fat:9, pro:15,fib:7, cupG:92},
  'rye flour':            {cal:357,carb:75,sug:1, fat:2, pro:10,fib:15,cupG:102},
  'spelt flour':          {cal:338,carb:70,sug:1, fat:2, pro:15,fib:11,cupG:100},
  'buckwheat flour':      {cal:335,carb:71,sug:1, fat:3, pro:13,fib:10,cupG:120},
  'cornmeal':             {cal:362,carb:76,sug:1, fat:4, pro:8, fib:7, cupG:138},
  'semolina':             {cal:360,carb:73,sug:1, fat:1, pro:13,fib:4, cupG:167},
  'tapioca starch':       {cal:358,carb:89,sug:0, fat:0, pro:0, fib:0, cupG:120},
  'cornstarch':           {cal:381,carb:91,sug:0, fat:0, pro:0, fib:1, cupG:120},
  'corn starch':          {cal:381,carb:91,sug:0, fat:0, pro:0, fib:1, cupG:120},
  'arrowroot':            {cal:357,carb:88,sug:0, fat:0, pro:0, fib:3, cupG:128},
  'breadcrumbs':          {cal:395,carb:72,sug:3, fat:5, pro:13,fib:3, cupG:108},
  'panko':                {cal:395,carb:72,sug:3, fat:5, pro:13,fib:3, cupG:55},

  // Other grains
  'quinoa':               {cal:368,carb:64,sug:0, fat:6, pro:14,fib:7, cupG:170},
  'couscous':             {cal:376,carb:77,sug:0, fat:1, pro:13,fib:5, cupG:175},
  'bulgur':               {cal:342,carb:76,sug:0, fat:1, pro:12,fib:18,cupG:140},
  'farro':                {cal:340,carb:72,sug:0, fat:2, pro:14,fib:7, cupG:185},
  'barley':               {cal:354,carb:73,sug:0, fat:2, pro:12,fib:17,cupG:184},
  'millet':               {cal:378,carb:73,sug:0, fat:4, pro:11,fib:9, cupG:200},
  'amaranth':             {cal:371,carb:65,sug:2, fat:7, pro:14,fib:7, cupG:193},
  'teff':                 {cal:367,carb:73,sug:2, fat:2, pro:13,fib:8, cupG:193},
  'polenta':              {cal:362,carb:76,sug:1, fat:4, pro:8, fib:7, cupG:138},

  // ── Oils & fats ────────────────────────────────────────────────────────────
  'olive oil':            {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:216},
  'extra virgin olive oil':{cal:884,carb:0,sug:0, fat:100,pro:0, fib:0, cupG:216},
  'vegetable oil':        {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'canola oil':           {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'rapeseed oil':         {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'sunflower oil':        {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'coconut oil':          {cal:892,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'sesame oil':           {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'avocado oil':          {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'peanut oil':           {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'grapeseed oil':        {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'flaxseed oil':         {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'walnut oil':           {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'oil':                  {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'butter':               {cal:717,carb:0, sug:0, fat:81, pro:1, fib:0, cupG:227},
  'unsalted butter':      {cal:717,carb:0, sug:0, fat:81, pro:1, fib:0, cupG:227},
  'salted butter':        {cal:717,carb:0, sug:0, fat:81, pro:1, fib:0, cupG:227},
  'ghee':                 {cal:900,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:218},
  'margarine':            {cal:719,carb:1, sug:0, fat:81, pro:1, fib:0, cupG:227},
  'lard':                 {cal:902,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:205},
  'shortening':           {cal:884,carb:0, sug:0, fat:100,pro:0, fib:0, cupG:190},

  // ── Sweeteners ─────────────────────────────────────────────────────────────
  'sugar':                {cal:387,carb:100,sug:100,fat:0,pro:0,fib:0,cupG:200},
  'white sugar':          {cal:387,carb:100,sug:100,fat:0,pro:0,fib:0,cupG:200},
  'granulated sugar':     {cal:387,carb:100,sug:100,fat:0,pro:0,fib:0,cupG:200},
  'caster sugar':         {cal:387,carb:100,sug:100,fat:0,pro:0,fib:0,cupG:200},
  'brown sugar':          {cal:380,carb:98, sug:97, fat:0,pro:0,fib:0,cupG:220},
  'powdered sugar':       {cal:389,carb:99, sug:97, fat:0,pro:0,fib:0,cupG:120},
  'icing sugar':          {cal:389,carb:99, sug:97, fat:0,pro:0,fib:0,cupG:120},
  'coconut sugar':        {cal:375,carb:95, sug:79, fat:0,pro:0,fib:0,cupG:200},
  'maple syrup':          {cal:260,carb:67, sug:60, fat:0,pro:0,fib:0,cupG:322},
  'honey':                {cal:304,carb:82, sug:82, fat:0,pro:0,fib:0,cupG:340},
  'agave':                {cal:310,carb:76, sug:68, fat:0,pro:0,fib:0,cupG:330},
  'agave nectar':         {cal:310,carb:76, sug:68, fat:0,pro:0,fib:0,cupG:330},
  'agave syrup':          {cal:310,carb:76, sug:68, fat:0,pro:0,fib:0,cupG:330},
  'molasses':             {cal:290,carb:75, sug:55, fat:0,pro:0,fib:0,cupG:337},
  'corn syrup':           {cal:283,carb:77, sug:32, fat:0,pro:0,fib:0,cupG:328},
  'golden syrup':         {cal:325,carb:84, sug:75, fat:0,pro:0,fib:0,cupG:330},
  'date syrup':           {cal:281,carb:75, sug:65, fat:0,pro:1,fib:1,cupG:330},
  'stevia':               {cal:0,  carb:0,  sug:0,  fat:0,pro:0,fib:0,cupG:200},
  'erythritol':           {cal:0,  carb:100,sug:0,  fat:0,pro:0,fib:0,cupG:192},
  'xylitol':              {cal:240,carb:100,sug:0,  fat:0,pro:0,fib:0,cupG:190},

  // ── Dairy & eggs ───────────────────────────────────────────────────────────
  'whole milk':           {cal:61, carb:5, sug:5, fat:3, pro:3,fib:0,cupG:244},
  'milk':                 {cal:61, carb:5, sug:5, fat:3, pro:3,fib:0,cupG:244},
  'skim milk':            {cal:34, carb:5, sug:5, fat:0, pro:3,fib:0,cupG:245},
  'skimmed milk':         {cal:34, carb:5, sug:5, fat:0, pro:3,fib:0,cupG:245},
  '2% milk':              {cal:50, carb:5, sug:5, fat:2, pro:3,fib:0,cupG:244},
  'buttermilk':           {cal:40, carb:5, sug:5, fat:1, pro:3,fib:0,cupG:245},
  'almond milk':          {cal:17, carb:1, sug:0, fat:1, pro:1,fib:0,cupG:244},
  'oat milk':             {cal:47, carb:7, sug:4, fat:2, pro:1,fib:1,cupG:240},
  'soy milk':             {cal:54, carb:6, sug:4, fat:2, pro:4,fib:1,cupG:244},
  'coconut milk':         {cal:230,carb:6, sug:4, fat:24,pro:2,fib:0,cupG:240},
  'rice milk':            {cal:47, carb:9, sug:5, fat:1, pro:0,fib:0,cupG:244},
  'cashew milk':          {cal:25, carb:2, sug:1, fat:2, pro:1,fib:0,cupG:244},
  'heavy cream':          {cal:340,carb:3, sug:3, fat:36,pro:2,fib:0,cupG:238},
  'double cream':         {cal:340,carb:3, sug:3, fat:36,pro:2,fib:0,cupG:238},
  'cream':                {cal:340,carb:3, sug:3, fat:36,pro:2,fib:0,cupG:238},
  'whipping cream':       {cal:257,carb:3, sug:3, fat:27,pro:2,fib:0,cupG:239},
  'sour cream':           {cal:193,carb:5, sug:4, fat:19,pro:3,fib:0,cupG:230},
  'creme fraiche':        {cal:292,carb:3, sug:3, fat:30,pro:3,fib:0,cupG:232},
  'half and half':        {cal:130,carb:4, sug:4, fat:12,pro:3,fib:0,cupG:242},
  'condensed milk':       {cal:321,carb:54,sug:54,fat:9, pro:8,fib:0,cupG:306},
  'evaporated milk':      {cal:134,carb:10,sug:10,fat:8, pro:7,fib:0,cupG:252},
  'greek yogurt':         {cal:97, carb:6, sug:4, fat:5, pro:9,fib:0,cupG:245},
  'yogurt':               {cal:97, carb:6, sug:4, fat:5, pro:9,fib:0,cupG:245},
  'plain yogurt':         {cal:61, carb:5, sug:5, fat:3, pro:4,fib:0,cupG:245},
  'low fat yogurt':       {cal:63, carb:7, sug:7, fat:2, pro:5,fib:0,cupG:245},
  'coconut yogurt':       {cal:78, carb:13,sug:8, fat:3, pro:1,fib:1,cupG:245},
  'eggs':                 {cal:143,carb:1, sug:1, fat:10,pro:13,fib:0,cupG:243},
  'egg':                  {cal:143,carb:1, sug:1, fat:10,pro:13,fib:0,cupG:243},
  'large eggs':           {cal:143,carb:1, sug:1, fat:10,pro:13,fib:0,cupG:243},
  'egg white':            {cal:52, carb:1, sug:1, fat:0, pro:11,fib:0,cupG:243},
  'egg yolk':             {cal:322,carb:4, sug:0, fat:27,pro:16,fib:0,cupG:243},
  'cheddar cheese':       {cal:403,carb:1, sug:0, fat:33,pro:25,fib:0,cupG:113},
  'cheddar':              {cal:403,carb:1, sug:0, fat:33,pro:25,fib:0,cupG:113},
  'mozzarella':           {cal:280,carb:2, sug:1, fat:22,pro:19,fib:0,cupG:113},
  'parmesan':             {cal:431,carb:4, sug:0, fat:29,pro:38,fib:0,cupG:100},
  'feta':                 {cal:264,carb:4, sug:4, fat:21,pro:14,fib:0,cupG:150},
  'ricotta':              {cal:174,carb:3, sug:0, fat:13,pro:11,fib:0,cupG:246},
  'cream cheese':         {cal:342,carb:4, sug:3, fat:34,pro:6, fib:0,cupG:232},
  'brie':                 {cal:334,carb:0, sug:0, fat:28,pro:21,fib:0,cupG:135},
  'gouda':                {cal:356,carb:2, sug:2, fat:27,pro:25,fib:0,cupG:113},
  'swiss cheese':         {cal:380,carb:5, sug:2, fat:28,pro:27,fib:0,cupG:113},
  'cottage cheese':       {cal:98, carb:3, sug:3, fat:4, pro:11,fib:0,cupG:226},
  'cheese':               {cal:402,carb:1, sug:0, fat:33,pro:25,fib:0,cupG:113},
  'mascarpone':           {cal:429,carb:3, sug:3, fat:45,pro:5, fib:0,cupG:227},
  'halloumi':             {cal:318,carb:2, sug:0, fat:26,pro:21,fib:0,cupG:135},
  'gruyere':              {cal:413,carb:0, sug:0, fat:32,pro:30,fib:0,cupG:108},

  // ── Poultry ────────────────────────────────────────────────────────────────
  'chicken breast':       {cal:165,carb:0, sug:0, fat:4, pro:31,fib:0,cupG:140},
  'chicken thigh':        {cal:209,carb:0, sug:0, fat:13,pro:26,fib:0,cupG:140},
  'chicken':              {cal:165,carb:0, sug:0, fat:4, pro:31,fib:0,cupG:140},
  'chicken drumstick':    {cal:185,carb:0, sug:0, fat:9, pro:28,fib:0,cupG:140},
  'turkey breast':        {cal:135,carb:0, sug:0, fat:3, pro:29,fib:0,cupG:140},
  'turkey':               {cal:189,carb:0, sug:0, fat:9, pro:28,fib:0,cupG:140},
  'turkey mince':         {cal:149,carb:0, sug:0, fat:7, pro:22,fib:0,cupG:225},
  'ground turkey':        {cal:149,carb:0, sug:0, fat:7, pro:22,fib:0,cupG:225},
  'duck':                 {cal:337,carb:0, sug:0, fat:28,pro:19,fib:0,cupG:140},

  // ── Beef & pork ────────────────────────────────────────────────────────────
  'ground beef':          {cal:254,carb:0, sug:0, fat:18,pro:26,fib:0,cupG:225},
  'beef mince':           {cal:254,carb:0, sug:0, fat:18,pro:26,fib:0,cupG:225},
  'mince':                {cal:254,carb:0, sug:0, fat:18,pro:26,fib:0,cupG:225},
  'beef':                 {cal:250,carb:0, sug:0, fat:17,pro:26,fib:0,cupG:225},
  'steak':                {cal:271,carb:0, sug:0, fat:18,pro:26,fib:0,cupG:225},
  'sirloin':              {cal:207,carb:0, sug:0, fat:11,pro:29,fib:0,cupG:225},
  'beef brisket':         {cal:220,carb:0, sug:0, fat:12,pro:30,fib:0,cupG:225},
  'pork':                 {cal:242,carb:0, sug:0, fat:14,pro:27,fib:0,cupG:225},
  'pork chop':            {cal:231,carb:0, sug:0, fat:14,pro:27,fib:0,cupG:225},
  'pork belly':           {cal:518,carb:0, sug:0, fat:53,pro:9, fib:0,cupG:225},
  'bacon':                {cal:541,carb:0, sug:0, fat:42,pro:37,fib:0,cupG:130},
  'pancetta':             {cal:501,carb:0, sug:0, fat:43,pro:25,fib:0,cupG:130},
  'ham':                  {cal:145,carb:2, sug:2, fat:6, pro:21,fib:0,cupG:135},
  'sausage':              {cal:301,carb:3, sug:0, fat:26,pro:14,fib:0,cupG:225},
  'chorizo':              {cal:455,carb:1, sug:0, fat:40,pro:22,fib:0,cupG:135},
  'pepperoni':            {cal:494,carb:2, sug:0, fat:44,pro:21,fib:0,cupG:130},
  'salami':               {cal:425,carb:2, sug:0, fat:35,pro:26,fib:0,cupG:130},
  'lamb':                 {cal:294,carb:0, sug:0, fat:21,pro:25,fib:0,cupG:225},
  'lamb mince':           {cal:282,carb:0, sug:0, fat:21,pro:25,fib:0,cupG:225},
  'ground lamb':          {cal:282,carb:0, sug:0, fat:21,pro:25,fib:0,cupG:225},
  'veal':                 {cal:172,carb:0, sug:0, fat:7, pro:26,fib:0,cupG:225},
  'venison':              {cal:158,carb:0, sug:0, fat:3, pro:30,fib:0,cupG:225},

  // ── Seafood ────────────────────────────────────────────────────────────────
  'salmon':               {cal:208,carb:0, sug:0, fat:13,pro:20,fib:0,cupG:140},
  'tuna':                 {cal:144,carb:0, sug:0, fat:5, pro:23,fib:0,cupG:140},
  'canned tuna':          {cal:116,carb:0, sug:0, fat:3, pro:23,fib:0,cupG:145},
  'tinned tuna':          {cal:116,carb:0, sug:0, fat:3, pro:23,fib:0,cupG:145},
  'cod':                  {cal:105,carb:0, sug:0, fat:1, pro:23,fib:0,cupG:140},
  'tilapia':              {cal:96, carb:0, sug:0, fat:2, pro:20,fib:0,cupG:140},
  'halibut':              {cal:111,carb:0, sug:0, fat:2, pro:23,fib:0,cupG:140},
  'sea bass':             {cal:124,carb:0, sug:0, fat:3, pro:24,fib:0,cupG:140},
  'trout':                {cal:148,carb:0, sug:0, fat:6, pro:21,fib:0,cupG:140},
  'sardines':             {cal:208,carb:0, sug:0, fat:11,pro:25,fib:0,cupG:140},
  'mackerel':             {cal:205,carb:0, sug:0, fat:13,pro:19,fib:0,cupG:140},
  'shrimp':               {cal:99, carb:0, sug:0, fat:1, pro:24,fib:0,cupG:145},
  'prawns':               {cal:99, carb:0, sug:0, fat:1, pro:24,fib:0,cupG:145},
  'crab':                 {cal:97, carb:0, sug:0, fat:2, pro:19,fib:0,cupG:135},
  'lobster':              {cal:89, carb:1, sug:0, fat:1, pro:19,fib:0,cupG:145},
  'scallops':             {cal:111,carb:5, sug:0, fat:1, pro:20,fib:0,cupG:145},
  'mussels':              {cal:86, carb:4, sug:0, fat:2, pro:12,fib:0,cupG:145},
  'squid':                {cal:92, carb:3, sug:0, fat:1, pro:16,fib:0,cupG:140},
  'anchovies':            {cal:210,carb:0, sug:0, fat:10,pro:29,fib:0,cupG:145},
  'haddock':              {cal:116,carb:0, sug:0, fat:3, pro:20,fib:0,cupG:140},
  'pollock':              {cal:111,carb:0, sug:0, fat:1, pro:24,fib:0,cupG:140},

  // ── Legumes ────────────────────────────────────────────────────────────────
  'lentils':              {cal:353,carb:60,sug:2, fat:1, pro:25,fib:31,cupG:192},
  'red lentils':          {cal:353,carb:60,sug:2, fat:1, pro:25,fib:31,cupG:192},
  'green lentils':        {cal:353,carb:60,sug:2, fat:1, pro:25,fib:31,cupG:192},
  'black lentils':        {cal:353,carb:60,sug:2, fat:1, pro:25,fib:31,cupG:192},
  'chickpeas':            {cal:364,carb:61,sug:11,fat:6, pro:19,fib:17,cupG:200},
  'garbanzo beans':       {cal:364,carb:61,sug:11,fat:6, pro:19,fib:17,cupG:200},
  'black beans':          {cal:341,carb:62,sug:2, fat:1, pro:21,fib:15,cupG:200},
  'kidney beans':         {cal:333,carb:60,sug:3, fat:1, pro:24,fib:24,cupG:200},
  'pinto beans':          {cal:347,carb:63,sug:1, fat:1, pro:21,fib:16,cupG:200},
  'cannellini beans':     {cal:333,carb:60,sug:1, fat:1, pro:22,fib:11,cupG:200},
  'white beans':          {cal:333,carb:60,sug:1, fat:1, pro:22,fib:11,cupG:200},
  'navy beans':           {cal:337,carb:61,sug:1, fat:1, pro:22,fib:26,cupG:200},
  'edamame':              {cal:121,carb:9, sug:3, fat:5, pro:11,fib:5, cupG:155},
  'soy beans':            {cal:173,carb:10,sug:3, fat:9, pro:17,fib:6, cupG:186},
  'tofu':                 {cal:144,carb:3, sug:1, fat:9, pro:17,fib:0, cupG:248},
  'firm tofu':            {cal:144,carb:3, sug:1, fat:9, pro:17,fib:0, cupG:248},
  'silken tofu':          {cal:55, carb:2, sug:1, fat:2, pro:5, fib:0, cupG:261},
  'tempeh':               {cal:193,carb:8, sug:0, fat:11,pro:19,fib:9, cupG:166},
  'miso':                 {cal:199,carb:26,sug:7, fat:6, pro:12,fib:5, cupG:273},
  'split peas':           {cal:341,carb:60,sug:8, fat:1, pro:24,fib:26,cupG:200},
  'butter beans':         {cal:333,carb:60,sug:2, fat:1, pro:22,fib:11,cupG:200},
  'broad beans':          {cal:341,carb:58,sug:5, fat:2, pro:26,fib:25,cupG:170},
  'fava beans':           {cal:341,carb:58,sug:5, fat:2, pro:26,fib:25,cupG:170},

  // ── Nuts & nut butters ─────────────────────────────────────────────────────
  'almonds':              {cal:579,carb:22,sug:4, fat:50,pro:21,fib:13,cupG:143},
  'walnuts':              {cal:654,carb:14,sug:3, fat:65,pro:15,fib:7, cupG:117},
  'cashews':              {cal:553,carb:30,sug:6, fat:44,pro:18,fib:3, cupG:137},
  'pistachios':           {cal:560,carb:27,sug:8, fat:45,pro:20,fib:11,cupG:123},
  'pistachio':            {cal:560,carb:27,sug:8, fat:45,pro:20,fib:11,cupG:123},
  'pecans':               {cal:691,carb:14,sug:4, fat:72,pro:9, fib:10,cupG:109},
  'macadamia nuts':       {cal:718,carb:14,sug:5, fat:76,pro:8, fib:9, cupG:134},
  'hazelnuts':            {cal:628,carb:17,sug:4, fat:61,pro:15,fib:10,cupG:135},
  'brazil nuts':          {cal:659,carb:12,sug:2, fat:67,pro:14,fib:8, cupG:133},
  'pine nuts':            {cal:673,carb:13,sug:4, fat:68,pro:14,fib:4, cupG:136},
  'peanuts':              {cal:567,carb:16,sug:4, fat:49,pro:26,fib:9, cupG:146},
  'chestnuts':            {cal:245,carb:53,sug:11,fat:3, pro:4, fib:8, cupG:145},
  'mixed nuts':           {cal:607,carb:21,sug:4, fat:54,pro:18,fib:7, cupG:135},
  'coconut':              {cal:660,carb:25,sug:6, fat:64,pro:7, fib:16,cupG:93},
  'shredded coconut':     {cal:660,carb:25,sug:6, fat:64,pro:7, fib:16,cupG:93},
  'desiccated coconut':   {cal:660,carb:25,sug:6, fat:64,pro:7, fib:16,cupG:93},
  'coconut flakes':       {cal:660,carb:25,sug:6, fat:64,pro:7, fib:16,cupG:80},
  'peanut butter':        {cal:588,carb:20,sug:9, fat:50,pro:25,fib:6, cupG:258},
  'almond butter':        {cal:614,carb:19,sug:5, fat:56,pro:21,fib:10,cupG:258},
  'cashew butter':        {cal:587,carb:27,sug:6, fat:50,pro:18,fib:3, cupG:256},
  'sunflower butter':     {cal:617,carb:18,sug:9, fat:56,pro:19,fib:9, cupG:256},
  'tahini':               {cal:595,carb:21,sug:0, fat:53,pro:17,fib:10,cupG:240},

  // ── Seeds ──────────────────────────────────────────────────────────────────
  'pumpkin seeds':        {cal:559,carb:11,sug:1, fat:49,pro:30,fib:6, cupG:129},
  'pepitas':              {cal:559,carb:11,sug:1, fat:49,pro:30,fib:6, cupG:129},
  'sunflower seeds':      {cal:584,carb:20,sug:3, fat:51,pro:21,fib:9, cupG:140},
  'sesame seeds':         {cal:573,carb:23,sug:0, fat:50,pro:18,fib:12,cupG:144},
  'flax seeds':           {cal:534,carb:29,sug:2, fat:42,pro:18,fib:27,cupG:149},
  'flaxseed':             {cal:534,carb:29,sug:2, fat:42,pro:18,fib:27,cupG:149},
  'linseeds':             {cal:534,carb:29,sug:2, fat:42,pro:18,fib:27,cupG:149},
  'chia seeds':           {cal:486,carb:42,sug:0, fat:31,pro:17,fib:34,cupG:160},
  'chia':                 {cal:486,carb:42,sug:0, fat:31,pro:17,fib:34,cupG:160},
  'hemp hearts':          {cal:567,carb:10,sug:1, fat:43,pro:33,fib:10,cupG:160},
  'hemp seeds':           {cal:567,carb:10,sug:1, fat:43,pro:33,fib:10,cupG:160},
  'poppy seeds':          {cal:525,carb:28,sug:3, fat:42,pro:18,fib:20,cupG:136},
  'flaxseed meal':        {cal:534,carb:29,sug:2, fat:42,pro:18,fib:27,cupG:150},

  // ── Fresh fruit ────────────────────────────────────────────────────────────
  'apple':                {cal:52, carb:14,sug:10,fat:0, pro:0, fib:2, cupG:109},
  'banana':               {cal:89, carb:23,sug:12,fat:0, pro:1, fib:3, cupG:150},
  'orange':               {cal:47, carb:12,sug:9, fat:0, pro:1, fib:2, cupG:165},
  'lemon':                {cal:29, carb:9, sug:3, fat:0, pro:1, fib:3, cupG:212},
  'lime':                 {cal:30, carb:11,sug:2, fat:0, pro:1, fib:3, cupG:212},
  'mango':                {cal:60, carb:15,sug:14,fat:0, pro:1, fib:2, cupG:165},
  'pineapple':            {cal:50, carb:13,sug:10,fat:0, pro:1, fib:1, cupG:165},
  'strawberries':         {cal:32, carb:8, sug:5, fat:0, pro:1, fib:2, cupG:152},
  'strawberry':           {cal:32, carb:8, sug:5, fat:0, pro:1, fib:2, cupG:152},
  'blueberries':          {cal:57, carb:14,sug:10,fat:0, pro:1, fib:2, cupG:148},
  'blueberry':            {cal:57, carb:14,sug:10,fat:0, pro:1, fib:2, cupG:148},
  'raspberries':          {cal:52, carb:12,sug:4, fat:1, pro:1, fib:7, cupG:123},
  'blackberries':         {cal:43, carb:10,sug:5, fat:1, pro:1, fib:5, cupG:144},
  'cherries':             {cal:63, carb:16,sug:13,fat:0, pro:1, fib:2, cupG:138},
  'grapes':               {cal:69, carb:18,sug:16,fat:0, pro:1, fib:1, cupG:151},
  'watermelon':           {cal:30, carb:8, sug:6, fat:0, pro:1, fib:0, cupG:152},
  'cantaloupe':           {cal:34, carb:8, sug:8, fat:0, pro:1, fib:1, cupG:156},
  'honeydew':             {cal:36, carb:9, sug:8, fat:0, pro:1, fib:1, cupG:170},
  'peach':                {cal:39, carb:10,sug:8, fat:0, pro:1, fib:2, cupG:154},
  'nectarine':            {cal:44, carb:11,sug:8, fat:0, pro:1, fib:2, cupG:143},
  'pear':                 {cal:57, carb:15,sug:10,fat:0, pro:0, fib:3, cupG:140},
  'plum':                 {cal:46, carb:11,sug:10,fat:0, pro:1, fib:1, cupG:165},
  'kiwi':                 {cal:61, carb:15,sug:9, fat:1, pro:1, fib:3, cupG:177},
  'papaya':               {cal:43, carb:11,sug:8, fat:0, pro:1, fib:2, cupG:140},
  'pomegranate':          {cal:83, carb:19,sug:14,fat:1, pro:2, fib:4, cupG:174},
  'fig':                  {cal:74, carb:19,sug:16,fat:0, pro:1, fib:3, cupG:149},
  'avocado':              {cal:160,carb:9, sug:1, fat:15,pro:2, fib:7, cupG:230},
  'grapefruit':           {cal:42, carb:11,sug:7, fat:0, pro:1, fib:2, cupG:230},
  'passion fruit':        {cal:97, carb:23,sug:11,fat:1, pro:2, fib:10,cupG:236},
  'lychee':               {cal:66, carb:17,sug:15,fat:0, pro:1, fib:1, cupG:190},

  // ── Dried fruit ────────────────────────────────────────────────────────────
  'raisins':              {cal:299,carb:79,sug:59,fat:0, pro:3, fib:4, cupG:145},
  'sultanas':             {cal:299,carb:79,sug:59,fat:0, pro:3, fib:4, cupG:145},
  'dried cranberries':    {cal:308,carb:82,sug:65,fat:1, pro:0, fib:5, cupG:100},
  'dried cherries':       {cal:333,carb:80,sug:73,fat:1, pro:1, fib:2, cupG:100},
  'dried apricots':       {cal:241,carb:63,sug:53,fat:0, pro:3, fib:7, cupG:130},
  'dried mango':          {cal:319,carb:79,sug:69,fat:1, pro:3, fib:2, cupG:100},
  'dried figs':           {cal:249,carb:64,sug:48,fat:1, pro:3, fib:10,cupG:149},
  'prunes':               {cal:240,carb:64,sug:38,fat:0, pro:2, fib:7, cupG:174},
  'dates':                {cal:282,carb:75,sug:63,fat:0, pro:2, fib:8, cupG:178},
  'medjool dates':        {cal:277,carb:75,sug:66,fat:0, pro:2, fib:7, cupG:178},
  'goji berries':         {cal:349,carb:77,sug:46,fat:0, pro:14,fib:13,cupG:113},
  'dried blueberries':    {cal:317,carb:80,sug:68,fat:1, pro:1, fib:5, cupG:113},
  'currants':             {cal:283,carb:67,sug:67,fat:0, pro:4, fib:7, cupG:144},

  // ── Vegetables ─────────────────────────────────────────────────────────────
  'spinach':              {cal:23, carb:4, sug:0, fat:0, pro:3, fib:2, cupG:30},
  'baby spinach':         {cal:23, carb:4, sug:0, fat:0, pro:3, fib:2, cupG:30},
  'kale':                 {cal:49, carb:9, sug:2, fat:1, pro:4, fib:4, cupG:67},
  'broccoli':             {cal:34, carb:7, sug:2, fat:0, pro:3, fib:3, cupG:91},
  'cauliflower':          {cal:25, carb:5, sug:2, fat:0, pro:2, fib:3, cupG:100},
  'carrot':               {cal:41, carb:10,sug:5, fat:0, pro:1, fib:3, cupG:128},
  'carrots':              {cal:41, carb:10,sug:5, fat:0, pro:1, fib:3, cupG:128},
  'onion':                {cal:40, carb:9, sug:4, fat:0, pro:1, fib:2, cupG:160},
  'onions':               {cal:40, carb:9, sug:4, fat:0, pro:1, fib:2, cupG:160},
  'red onion':            {cal:40, carb:9, sug:4, fat:0, pro:1, fib:2, cupG:160},
  'medium onion':         {cal:40, carb:9, sug:4, fat:0, pro:1, fib:2, cupG:160},
  'shallot':              {cal:72, carb:17,sug:7, fat:0, pro:3, fib:3, cupG:160},
  'garlic':               {cal:149,carb:33,sug:1, fat:1, pro:6, fib:2, cupG:136},
  'tomato':               {cal:18, carb:4, sug:3, fat:0, pro:1, fib:1, cupG:180},
  'tomatoes':             {cal:18, carb:4, sug:3, fat:0, pro:1, fib:1, cupG:180},
  'cherry tomatoes':      {cal:18, carb:4, sug:3, fat:0, pro:1, fib:1, cupG:149},
  'potato':               {cal:77, carb:17,sug:1, fat:0, pro:2, fib:2, cupG:150},
  'sweet potato':         {cal:86, carb:20,sug:4, fat:0, pro:2, fib:3, cupG:133},
  'yam':                  {cal:118,carb:28,sug:1, fat:0, pro:2, fib:4, cupG:150},
  'zucchini':             {cal:17, carb:3, sug:2, fat:0, pro:1, fib:1, cupG:124},
  'courgette':            {cal:17, carb:3, sug:2, fat:0, pro:1, fib:1, cupG:124},
  'cucumber':             {cal:16, carb:4, sug:2, fat:0, pro:1, fib:1, cupG:119},
  'celery':               {cal:16, carb:3, sug:1, fat:0, pro:1, fib:2, cupG:101},
  'bell pepper':          {cal:31, carb:6, sug:4, fat:0, pro:1, fib:2, cupG:149},
  'peppers':              {cal:31, carb:6, sug:4, fat:0, pro:1, fib:2, cupG:149},
  'red pepper':           {cal:31, carb:6, sug:4, fat:0, pro:1, fib:2, cupG:149},
  'green pepper':         {cal:20, carb:5, sug:2, fat:0, pro:1, fib:2, cupG:149},
  'yellow pepper':        {cal:27, carb:6, sug:4, fat:0, pro:1, fib:2, cupG:149},
  'jalapeño':             {cal:29, carb:7, sug:4, fat:0, pro:1, fib:4, cupG:90},
  'chilli':               {cal:40, carb:9, sug:5, fat:0, pro:2, fib:2, cupG:100},
  'chili':                {cal:40, carb:9, sug:5, fat:0, pro:2, fib:2, cupG:100},
  'corn':                 {cal:86, carb:19,sug:3, fat:1, pro:3, fib:2, cupG:154},
  'peas':                 {cal:81, carb:14,sug:6, fat:0, pro:5, fib:5, cupG:145},
  'frozen peas':          {cal:81, carb:14,sug:6, fat:0, pro:5, fib:5, cupG:145},
  'frozen mixed vegetables':{cal:65,carb:12,sug:3,fat:0, pro:3, fib:4, cupG:130},
  'mixed vegetables':     {cal:65, carb:12,sug:3, fat:0, pro:3, fib:4, cupG:130},
  'green beans':          {cal:31, carb:7, sug:4, fat:0, pro:2, fib:3, cupG:110},
  'asparagus':            {cal:20, carb:4, sug:2, fat:0, pro:2, fib:2, cupG:134},
  'mushrooms':            {cal:22, carb:3, sug:2, fat:0, pro:3, fib:1, cupG:70},
  'shiitake mushrooms':   {cal:39, carb:6, sug:2, fat:0, pro:2, fib:3, cupG:70},
  'portobello mushrooms': {cal:22, carb:4, sug:2, fat:0, pro:2, fib:1, cupG:86},
  'eggplant':             {cal:25, carb:6, sug:4, fat:0, pro:1, fib:3, cupG:82},
  'aubergine':            {cal:25, carb:6, sug:4, fat:0, pro:1, fib:3, cupG:82},
  'cabbage':              {cal:25, carb:6, sug:3, fat:0, pro:1, fib:3, cupG:89},
  'red cabbage':          {cal:31, carb:7, sug:4, fat:0, pro:1, fib:2, cupG:89},
  'brussels sprouts':     {cal:43, carb:9, sug:2, fat:0, pro:4, fib:4, cupG:88},
  'leek':                 {cal:61, carb:14,sug:4, fat:0, pro:2, fib:2, cupG:89},
  'beetroot':             {cal:43, carb:10,sug:7, fat:0, pro:2, fib:3, cupG:170},
  'beets':                {cal:43, carb:10,sug:7, fat:0, pro:2, fib:3, cupG:170},
  'artichoke':            {cal:47, carb:11,sug:1, fat:0, pro:3, fib:5, cupG:120},
  'fennel':               {cal:31, carb:7, sug:4, fat:0, pro:1, fib:3, cupG:87},
  'bok choy':             {cal:13, carb:2, sug:1, fat:0, pro:2, fib:1, cupG:70},
  'pak choi':             {cal:13, carb:2, sug:1, fat:0, pro:2, fib:1, cupG:70},
  'butternut squash':     {cal:45, carb:12,sug:2, fat:0, pro:1, fib:2, cupG:140},
  'pumpkin':              {cal:26, carb:7, sug:3, fat:0, pro:1, fib:1, cupG:116},
  'turnip':               {cal:28, carb:6, sug:4, fat:0, pro:1, fib:2, cupG:130},
  'parsnip':              {cal:75, carb:18,sug:5, fat:0, pro:1, fib:5, cupG:133},
  'radish':               {cal:16, carb:3, sug:2, fat:0, pro:1, fib:2, cupG:116},
  'spring onion':         {cal:32, carb:7, sug:2, fat:0, pro:2, fib:3, cupG:100},
  'scallion':             {cal:32, carb:7, sug:2, fat:0, pro:2, fib:3, cupG:100},
  'green onion':          {cal:32, carb:7, sug:2, fat:0, pro:2, fib:3, cupG:100},
  'watercress':           {cal:11, carb:1, sug:0, fat:0, pro:2, fib:1, cupG:34},
  'rocket':               {cal:25, carb:4, sug:2, fat:1, pro:3, fib:2, cupG:20},
  'arugula':              {cal:25, carb:4, sug:2, fat:1, pro:3, fib:2, cupG:20},
  'lettuce':              {cal:15, carb:3, sug:2, fat:0, pro:1, fib:1, cupG:47},
  'romaine lettuce':      {cal:17, carb:3, sug:1, fat:0, pro:1, fib:2, cupG:47},
  'mixed greens':         {cal:20, carb:4, sug:1, fat:0, pro:2, fib:2, cupG:40},
  'canned tomatoes':      {cal:32, carb:7, sug:4, fat:0, pro:2, fib:2, cupG:240},
  'tinned tomatoes':      {cal:32, carb:7, sug:4, fat:0, pro:2, fib:2, cupG:240},
  'sun dried tomatoes':   {cal:258,carb:56,sug:38,fat:3, pro:14,fib:12,cupG:54},
  'tomato paste':         {cal:82, carb:19,sug:12,fat:0, pro:4, fib:4, cupG:262},
  'tomato puree':         {cal:82, carb:19,sug:12,fat:0, pro:4, fib:4, cupG:262},
  'tomato sauce':         {cal:29, carb:6, sug:4, fat:0, pro:2, fib:1, cupG:245},
  'passata':              {cal:29, carb:6, sug:4, fat:0, pro:2, fib:1, cupG:245},
  'mangetout':            {cal:42, carb:7, sug:3, fat:0, pro:3, fib:3, cupG:100},
  'sugar snap peas':      {cal:42, carb:7, sug:3, fat:0, pro:3, fib:3, cupG:100},

  // ── Herbs & spices ─────────────────────────────────────────────────────────
  // Most spices are measured in tsp/tbsp not cups — tspG provided
  'salt':                 {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:273,tspG:6},
  'kosher salt':          {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:165,tspG:3},
  'sea salt':             {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:240,tspG:5},
  'black pepper':         {cal:251,carb:64,sug:1, fat:3, pro:10,fib:25,cupG:147,tspG:3},
  'pepper':               {cal:251,carb:64,sug:1, fat:3, pro:10,fib:25,cupG:147,tspG:3},
  'white pepper':         {cal:296,carb:70,sug:0, fat:2, pro:10,fib:27,cupG:147,tspG:3},
  'cinnamon':             {cal:247,carb:81,sug:2, fat:1, pro:4, fib:53,cupG:119,tspG:2},
  'ground cinnamon':      {cal:247,carb:81,sug:2, fat:1, pro:4, fib:53,cupG:119,tspG:2},
  'cumin':                {cal:375,carb:44,sug:2, fat:22,pro:18,fib:11,cupG:112,tspG:2},
  'ground cumin':         {cal:375,carb:44,sug:2, fat:22,pro:18,fib:11,cupG:112,tspG:2},
  'turmeric':             {cal:312,carb:67,sug:3, fat:3, pro:10,fib:21,cupG:113,tspG:3},
  'paprika':              {cal:282,carb:54,sug:10,fat:13,pro:14,fib:35,cupG:115,tspG:2},
  'smoked paprika':       {cal:282,carb:54,sug:10,fat:13,pro:14,fib:35,cupG:115,tspG:2},
  'cayenne':              {cal:318,carb:57,sug:10,fat:17,pro:12,fib:27,cupG:115,tspG:2},
  'cayenne pepper':       {cal:318,carb:57,sug:10,fat:17,pro:12,fib:27,cupG:115,tspG:2},
  'chilli powder':        {cal:282,carb:50,sug:5, fat:14,pro:13,fib:35,cupG:115,tspG:2},
  'chili powder':         {cal:282,carb:50,sug:5, fat:14,pro:13,fib:35,cupG:115,tspG:2},
  'garam masala':         {cal:349,carb:56,sug:4, fat:15,pro:15,fib:16,cupG:112,tspG:2},
  'curry powder':         {cal:325,carb:58,sug:4, fat:14,pro:14,fib:33,cupG:112,tspG:2},
  'oregano':              {cal:265,carb:69,sug:4, fat:4, pro:9, fib:43,cupG:19, tspG:1},
  'dried oregano':        {cal:265,carb:69,sug:4, fat:4, pro:9, fib:43,cupG:19, tspG:1},
  'thyme':                {cal:101,carb:24,sug:1, fat:2, pro:6, fib:14,cupG:24, tspG:1},
  'dried thyme':          {cal:101,carb:24,sug:1, fat:2, pro:6, fib:14,cupG:24, tspG:1},
  'rosemary':             {cal:131,carb:21,sug:1, fat:5, pro:3, fib:14,cupG:20, tspG:1},
  'dried rosemary':       {cal:131,carb:21,sug:1, fat:5, pro:3, fib:14,cupG:20, tspG:1},
  'basil':                {cal:23, carb:3, sug:0, fat:1, pro:3, fib:2, cupG:24, tspG:1},
  'fresh basil':          {cal:23, carb:3, sug:0, fat:1, pro:3, fib:2, cupG:24, tspG:1},
  'parsley':              {cal:36, carb:6, sug:1, fat:1, pro:3, fib:3, cupG:60, tspG:1},
  'cilantro':             {cal:23, carb:4, sug:0, fat:1, pro:2, fib:3, cupG:16, tspG:1},
  'coriander':            {cal:23, carb:4, sug:0, fat:1, pro:2, fib:3, cupG:16, tspG:1},
  'dill':                 {cal:43, carb:7, sug:0, fat:1, pro:3, fib:2, cupG:8,  tspG:1},
  'mint':                 {cal:70, carb:15,sug:0, fat:1, pro:4, fib:8, cupG:24, tspG:1},
  'chives':               {cal:30, carb:4, sug:1, fat:1, pro:3, fib:3, cupG:48, tspG:1},
  'sage':                 {cal:315,carb:61,sug:0, fat:12,pro:11,fib:40,cupG:28, tspG:1},
  'bay leaf':             {cal:313,carb:75,sug:0, fat:8, pro:8, fib:26,cupG:10, tspG:1},
  'ginger':               {cal:80, carb:18,sug:2, fat:1, pro:2, fib:2, cupG:96, tspG:2},
  'fresh ginger':         {cal:80, carb:18,sug:2, fat:1, pro:2, fib:2, cupG:96, tspG:2},
  'ground ginger':        {cal:335,carb:72,sug:4, fat:5, pro:9, fib:14,cupG:113,tspG:2},
  'vanilla extract':      {cal:288,carb:13,sug:13,fat:0, pro:0, fib:0, cupG:208,tspG:4},
  'vanilla bean':         {cal:288,carb:13,sug:13,fat:0, pro:0, fib:0, cupG:208,tspG:4},
  'cardamom':             {cal:311,carb:68,sug:3, fat:7, pro:11,fib:28,cupG:112,tspG:2},
  'cloves':               {cal:274,carb:66,sug:3, fat:13,pro:6, fib:34,cupG:112,tspG:2},
  'nutmeg':               {cal:525,carb:49,sug:3, fat:36,pro:6, fib:21,cupG:115,tspG:2},
  'allspice':             {cal:263,carb:72,sug:3, fat:9, pro:6, fib:22,cupG:115,tspG:2},
  'star anise':           {cal:337,carb:50,sug:0, fat:16,pro:18,fib:15,cupG:112,tspG:2},
  'garlic powder':        {cal:331,carb:73,sug:2, fat:1, pro:17,fib:9, cupG:112,tspG:3},
  'onion powder':         {cal:341,carb:79,sug:8, fat:1, fat2:0,pro:10,fib:9, cupG:112,tspG:3},
  'mixed herbs':          {cal:259,carb:51,sug:2, fat:5, pro:13,fib:26,cupG:60, tspG:1},
  'lemongrass':           {cal:99, carb:25,sug:0, fat:1, pro:2, fib:0, cupG:67, tspG:1},
  'harissa':              {cal:53, carb:7, sug:4, fat:3, pro:2, fib:4, cupG:240,tspG:5},
  'sumac':                {cal:292,carb:73,sug:0, fat:2, pro:5, fib:24,cupG:112,tspG:2},

  // ── Baking ─────────────────────────────────────────────────────────────────
  'baking powder':        {cal:53, carb:28,sug:0, fat:0, pro:0, fib:0, cupG:230,tspG:4},
  'baking soda':          {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:288,tspG:6},
  'bicarbonate of soda':  {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:288,tspG:6},
  'bicarb':               {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:288,tspG:6},
  'yeast':                {cal:325,carb:41,sug:0, fat:7, pro:40,fib:27,cupG:200,tspG:4},
  'active dry yeast':     {cal:325,carb:41,sug:0, fat:7, pro:40,fib:27,cupG:200,tspG:4},
  'instant yeast':        {cal:325,carb:41,sug:0, fat:7, pro:40,fib:27,cupG:200,tspG:3},
  'cream of tartar':      {cal:184,carb:44,sug:0, fat:0, pro:0, fib:0, cupG:240,tspG:5},
  'gelatin':              {cal:335,carb:0, sug:0, fat:0, pro:86,fib:0, cupG:240,tspG:5},
  'gelatine':             {cal:335,carb:0, sug:0, fat:0, pro:86,fib:0, cupG:240,tspG:5},
  'agar agar':            {cal:26, carb:7, sug:0, fat:0, pro:1, fib:7, cupG:230,tspG:3},
  'psyllium husk':        {cal:267,carb:88,sug:0, fat:0, pro:3, fib:88,cupG:100,tspG:3},
  'psyllium':             {cal:267,carb:88,sug:0, fat:0, pro:3, fib:88,cupG:100,tspG:3},
  'xanthan gum':          {cal:333,carb:79,sug:0, fat:0, pro:0, fib:79,cupG:160,tspG:3},
  'cocoa powder':         {cal:228,carb:58,sug:2, fat:14,pro:20,fib:33,cupG:100,tspG:2},
  'cocoa':                {cal:228,carb:58,sug:2, fat:14,pro:20,fib:33,cupG:100,tspG:2},
  'cacao powder':         {cal:228,carb:58,sug:2, fat:14,pro:20,fib:33,cupG:100,tspG:2},
  'cacao nibs':           {cal:480,carb:36,sug:0, fat:30,pro:20,fib:13,cupG:128},

  // ── Chocolate ──────────────────────────────────────────────────────────────
  'dark chocolate':       {cal:546,carb:60,sug:48,fat:31,pro:5, fib:7, cupG:170},
  'milk chocolate':       {cal:535,carb:59,sug:52,fat:30,pro:8, fib:3, cupG:170},
  'white chocolate':      {cal:539,carb:59,sug:59,fat:32,pro:6, fib:0, cupG:170},
  'chocolate chips':      {cal:489,carb:62,sug:50,fat:27,pro:5, fib:5, cupG:170},
  'chocolate':            {cal:546,carb:60,sug:48,fat:31,pro:5, fib:7, cupG:170},
  'carob powder':         {cal:222,carb:92,sug:41,fat:1, pro:4, fib:41,cupG:100},

  // ── Condiments & sauces ────────────────────────────────────────────────────
  'soy sauce':            {cal:53, carb:5, sug:1, fat:1, pro:8, fib:1, cupG:255},
  'tamari':               {cal:60, carb:6, sug:2, fat:0, pro:11,fib:1, cupG:255},
  'fish sauce':           {cal:35, carb:4, sug:4, fat:0, pro:5, fib:0, cupG:255},
  'oyster sauce':         {cal:51, carb:11,sug:5, fat:1, pro:1, fib:0, cupG:270},
  'worcestershire sauce': {cal:78, carb:19,sug:12,fat:0, pro:1, fib:0, cupG:270},
  'hot sauce':            {cal:11, carb:2, sug:1, fat:0, pro:1, fib:0, cupG:240},
  'sriracha':             {cal:35, carb:8, sug:5, fat:0, pro:1, fib:0, cupG:255},
  'ketchup':              {cal:101,carb:26,sug:22,fat:0, pro:1, fib:0, cupG:272},
  'mustard':              {cal:66, carb:6, sug:2, fat:4, pro:4, fib:4, cupG:250},
  'dijon mustard':        {cal:66, carb:6, sug:2, fat:4, pro:4, fib:4, cupG:250},
  'wholegrain mustard':   {cal:66, carb:6, sug:2, fat:4, pro:4, fib:4, cupG:250},
  'mayonnaise':           {cal:680,carb:1, sug:1, fat:75,pro:1, fib:0, cupG:220},
  'vinegar':              {cal:18, carb:0, sug:0, fat:0, pro:0, fib:0, cupG:240},
  'apple cider vinegar':  {cal:21, carb:1, sug:1, fat:0, pro:0, fib:0, cupG:240},
  'balsamic vinegar':     {cal:88, carb:17,sug:15,fat:0, pro:0, fib:0, cupG:254},
  'rice vinegar':         {cal:18, carb:0, sug:0, fat:0, pro:0, fib:0, cupG:240},
  'red wine vinegar':     {cal:19, carb:0, sug:0, fat:0, pro:0, fib:0, cupG:240},
  'white wine vinegar':   {cal:18, carb:0, sug:0, fat:0, pro:0, fib:0, cupG:240},
  'lemon juice':          {cal:22, carb:7, sug:2, fat:0, pro:0, fib:0, cupG:244},
  'lime juice':           {cal:25, carb:8, sug:1, fat:0, pro:0, fib:0, cupG:244},
  'orange juice':         {cal:45, carb:10,sug:8, fat:0, pro:1, fib:0, cupG:248},
  'hummus':               {cal:177,carb:20,sug:2, fat:9, pro:8, fib:6, cupG:245},
  'pesto':                {cal:263,carb:5, sug:2, fat:25,pro:5, fib:1, cupG:245},
  'salsa':                {cal:36, carb:8, sug:4, fat:0, pro:2, fib:2, cupG:256},
  'guacamole':            {cal:152,carb:9, sug:1, fat:13,pro:2, fib:5, cupG:230},
  'tzatziki':             {cal:54, carb:4, sug:3, fat:2, pro:4, fib:0, cupG:240},
  'ranch dressing':       {cal:145,carb:2, sug:2, fat:15,pro:1, fib:0, cupG:245},
  'caesar dressing':      {cal:310,carb:6, sug:2, fat:32,pro:2, fib:0, cupG:240},
  'teriyaki sauce':       {cal:89, carb:18,sug:14,fat:1, pro:5, fib:0, cupG:255},
  'hoisin sauce':         {cal:220,carb:40,sug:22,fat:4, pro:4, fib:3, cupG:270},
  'sweet chilli sauce':   {cal:117,carb:28,sug:24,fat:0, pro:1, fib:1, cupG:255},
  'bbq sauce':            {cal:172,carb:40,sug:32,fat:1, pro:2, fib:1, cupG:255},
  'buffalo sauce':        {cal:34, carb:2, sug:1, fat:3, pro:0, fib:0, cupG:240},

  // ── Liquids & broths ───────────────────────────────────────────────────────
  'vegetable broth':      {cal:13, carb:3, sug:1, fat:0, pro:0, fib:0, cupG:240},
  'chicken broth':        {cal:15, carb:1, sug:0, fat:0, pro:2, fib:0, cupG:240},
  'beef broth':           {cal:17, carb:0, sug:0, fat:1, pro:3, fib:0, cupG:240},
  'vegetable stock':      {cal:13, carb:3, sug:1, fat:0, pro:0, fib:0, cupG:240},
  'chicken stock':        {cal:15, carb:1, sug:0, fat:0, pro:2, fib:0, cupG:240},
  'beef stock':           {cal:17, carb:0, sug:0, fat:1, pro:3, fib:0, cupG:240},
  'water':                {cal:0,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'coffee':               {cal:1,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'espresso':             {cal:1,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'tea':                  {cal:1,  carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'coconut water':        {cal:19, carb:5, sug:5, fat:0, pro:0, fib:1, cupG:240},
  'red wine':             {cal:85, carb:3, sug:1, fat:0, pro:0, fib:0, cupG:237},
  'white wine':           {cal:82, carb:3, sug:1, fat:0, pro:0, fib:0, cupG:237},
  'beer':                 {cal:43, carb:4, sug:0, fat:0, pro:0, fib:0, cupG:240},
  'apple juice':          {cal:46, carb:11,sug:10,fat:0, pro:0, fib:0, cupG:248},
  'pomegranate juice':    {cal:54, carb:13,sug:12,fat:0, pro:0, fib:0, cupG:250},
  'bourbon':              {cal:231,carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'rum':                  {cal:231,carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},
  'vodka':                {cal:231,carb:0, sug:0, fat:0, pro:0, fib:0, cupG:237},

  // ── Health & specialty foods ────────────────────────────────────────────────
  'protein powder':       {cal:400,carb:15,sug:5, fat:7, pro:70,fib:2, cupG:128},
  'whey protein':         {cal:400,carb:15,sug:5, fat:7, pro:70,fib:2, cupG:128},
  'pea protein':          {cal:358,carb:12,sug:1, fat:5, pro:78,fib:2, cupG:128},
  'collagen powder':      {cal:360,carb:0, sug:0, fat:0, pro:90,fib:0, cupG:128},
  'spirulina':            {cal:290,carb:24,sug:3, fat:8, pro:57,fib:4, cupG:112},
  'nutritional yeast':    {cal:325,carb:41,sug:1, fat:7, pro:40,fib:27,cupG:60},
  'wheat germ':           {cal:382,carb:52,sug:7, fat:10,pro:27,fib:14,cupG:115},
  'matcha':               {cal:324,carb:38,sug:0, fat:5, pro:30,fib:37,cupG:100,tspG:3},
  'acai powder':          {cal:533,carb:53,sug:0, fat:33,pro:8, fib:44,cupG:100,tspG:3},
  'maca powder':          {cal:325,carb:71,sug:0, fat:1, pro:11,fib:9, cupG:100,tspG:3},
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
