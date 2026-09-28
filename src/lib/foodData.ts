/**
 * The built-in food database: typical values per 100 g (or 100 ml for drinks),
 * rounded for everyday tracking. Packaged products vary - the label always wins,
 * and anything missing here can be found with "Search online".
 *
 * One food per line:  id | name | category | kcal | protein | carbs | fat | servings | search words | L (= liquid, ml)
 * Servings:           "label=grams; label=grams"
 */
export const CAT_CODES = {
  MP: "Meat & poultry",
  FS: "Fish & seafood",
  PP: "Plant protein",
  SA: "SA favourites",
  BF: "Breakfast & cereal",
  GR: "Rice, pasta & grains",
  BB: "Bread & bakery",
  DE: "Dairy & eggs",
  FR: "Fruit",
  VG: "Vegetables",
  NS: "Nuts & seeds",
  OS: "Oils, spreads & sauces",
  SN: "Snacks & sweets",
  DR: "Drinks",
  AL: "Alcohol",
  FF: "Fast food",
  RS: "Restaurants & chains",
  IN: "Indian",
  CM: "Cape Malay & SA Indian",
  AS: "Asian",
  MX: "Mexican & Latin",
  MD: "Mediterranean & Middle Eastern",
  PT: "Portuguese",
  IT: "Italian",
  HM: "Home meals",
  AF: "African",
  SU: "Supplements",
} as const;

export const FOOD_DATA = `
chicken-breast|Chicken breast, grilled|MP|165|31|0|3.6|1 breast=170;100 g=100;palm=120|chicken fillet
chicken-breast-raw|Chicken breast, raw|MP|120|22.5|0|2.6|1 breast=200;100 g=100|chicken fillet uncooked
chicken-thigh|Chicken thigh, roasted, skin off|MP|209|26|0|11|1 thigh=90;100 g=100|
chicken-thigh-skin|Chicken thigh, roasted, skin on|MP|247|23|0|16|1 thigh=110|
chicken-drumstick|Chicken drumstick, roasted|MP|172|28|0|5.7|1 drumstick=75;2 drumsticks=150|
chicken-wings|Chicken wings, roasted|MP|290|27|0|19.5|3 wings=100;6 wings=200|
quarter-chicken|Flame-grilled quarter chicken|MP|230|27|1|13|quarter leg=220;quarter breast=230|peri peri nandos galitos
rotisserie-chicken|Rotisserie chicken, with skin|MP|223|25|0|13|¼ chicken=250;½ chicken=500|roast chicken
chicken-mince|Chicken mince, cooked|MP|190|25|0|10|100 g=100;½ cup=110|
chicken-strips|Chicken strips, crumbed|MP|270|17|17|15|5 strips=120|tenders nuggets
chicken-nuggets|Chicken nuggets|MP|296|15|18|18|6 nuggets=100;9 nuggets=150|
turkey-breast|Turkey breast, roasted|MP|135|30|0|1|100 g=100;3 slices=60|
turkey-mince|Turkey mince, cooked|MP|203|27|0|10|100 g=100|
duck|Duck, roasted with skin|MP|337|19|0|28|100 g=100|
beef-mince|Beef mince, lean, cooked|MP|250|26|0|15|100 g=100;½ cup=110|ground beef
beef-mince-extra-lean|Beef mince, extra lean, cooked|MP|190|28|0|8|100 g=100|ground beef
steak|Rump steak, grilled|MP|205|29|0|9.5|200 g steak=200;300 g steak=300|
sirloin|Sirloin steak, grilled|MP|206|30|0|9|200 g steak=200;300 g steak=300|
ribeye|Ribeye steak, grilled|MP|291|24|0|22|250 g steak=250|scotch fillet
fillet-steak|Beef fillet, grilled|MP|200|30|0|8|200 g steak=200|tenderloin
t-bone|T-bone steak, grilled|MP|247|25|0|16|1 steak (meat)=300|
beef-stew|Beef stew meat, braised|MP|220|30|0|11|1 cup=140|
brisket|Beef brisket, braised|MP|290|27|0|20|100 g=100|
roast-beef|Roast beef, sliced|MP|190|29|0|8|3 slices=90|
beef-short-rib|Beef short ribs, braised|MP|390|22|0|33|1 rib=150|
oxtail|Oxtail, stewed|MP|260|30|0|15|1 serving=200|
liver-beef|Beef liver, pan-fried|MP|175|27|5|5|100 g=100|
liver-chicken|Chicken livers, cooked|MP|167|24|1|6.5|½ cup=100|peri peri livers
pork-chop|Pork chop, grilled|MP|231|26|0|14|1 chop=150|
pork-fillet|Pork fillet, roasted|MP|143|26|0|3.5|100 g=100|tenderloin
pork-belly|Pork belly, roasted|MP|518|9|0|53|100 g=100|
pork-ribs|Pork ribs, BBQ basted|MP|290|20|8|20|½ rack=300;full rack=600|spare ribs
pork-mince|Pork mince, cooked|MP|297|26|0|21|100 g=100|
pulled-pork|Pulled pork|MP|220|25|6|10|1 cup=140|
gammon|Gammon, roasted|MP|165|22|1|8|2 slices=80|ham
ham|Ham, sliced|MP|145|21|1.5|6|2 slices=40;4 slices=80|
bacon|Bacon, fried|MP|541|37|1.4|42|1 rasher=10;3 rashers=30|streaky back
bacon-back|Back bacon, grilled|MP|287|24|1|21|2 rashers=50|
lamb-chop|Lamb chop, grilled|MP|280|25|0|20|1 chop=90|
lamb-leg|Leg of lamb, roasted|MP|206|28|0|10|100 g=100|
lamb-shank|Lamb shank, braised|MP|240|30|0|13|1 shank (meat)=250|
lamb-mince|Lamb mince, cooked|MP|283|25|0|20|100 g=100|
mutton-curry-meat|Mutton, stewed|MP|250|28|0|15|1 cup=140|
venison|Venison / game, grilled|MP|158|30|0|3|100 g=100|springbok kudu ostrich
ostrich|Ostrich fillet, grilled|MP|140|28|0|2.5|150 g=150|
sausage-pork|Pork sausage, grilled|MP|300|15|3|25|1 sausage=50;2 sausages=100|bangers
sausage-chicken|Chicken sausage, grilled|MP|180|16|4|11|1 sausage=60|
russian|Russian sausage, fried|MP|320|12|3|29|1 russian=100|
vienna|Viennas / hot dog sausage|MP|290|11|3|26|1 vienna=40;2 viennas=80|frankfurter
salami|Salami|MP|380|22|1|32|5 slices=30|
chorizo|Chorizo|MP|455|24|2|38|30 g=30|
pepperoni|Pepperoni|MP|494|19|1|46|10 slices=20|
polony|Polony|MP|260|11|6|21|2 slices=40|bologna
meatballs|Beef meatballs|MP|230|16|8|15|4 meatballs=120|frikkadelle
beef-burger-patty|Beef burger patty, grilled|MP|254|26|0|17|1 patty=113|
chicken-burger-patty|Chicken burger patty, crumbed|MP|240|15|15|13|1 patty=100|
beef-jerky|Beef jerky|MP|410|33|11|26|1 bag=30|
corned-beef|Corned beef, tinned|MP|250|27|0|15|½ tin=150|bully beef
chicken-livers-peri|Peri-peri chicken livers|MP|180|20|4|9|1 serving=150|
hake|Hake, grilled|FS|105|22|0|1.5|1 fillet=150|fish
hake-fried|Hake, battered and fried|FS|230|14|14|13|1 piece=180|fish and chips
fish-fingers|Fish fingers, baked|FS|220|13|19|10|4 fingers=100|
salmon|Salmon, baked|FS|208|22|0|13|1 fillet=130|fish
salmon-smoked|Smoked salmon|FS|117|18|0|4.3|3 slices=60|lox
trout|Trout, baked|FS|190|26|0|8.5|1 fillet=130|
tuna-water|Tuna in water, drained|FS|116|26|0|1|1 tin (drained)=120;½ tin=60|fish
tuna-oil|Tuna in oil, drained|FS|198|29|0|8|1 tin (drained)=120|
tuna-steak|Tuna steak, seared|FS|130|29|0|1|1 steak=150|
pilchards|Pilchards in tomato sauce|FS|150|17|3|8|½ tin=200;1 tin=400|fish sardines
sardines|Sardines in oil, drained|FS|208|25|0|11|1 tin=90|
mackerel|Mackerel, grilled|FS|262|24|0|18|1 fillet=100|
snoek|Snoek, braaied|FS|160|24|0|7|1 portion=200|
kingklip|Kingklip, grilled|FS|100|21|0|1.5|1 fillet=180|
cod|Cod, baked|FS|105|23|0|1|1 fillet=150|
tilapia|Tilapia, baked|FS|128|26|0|2.7|1 fillet=120|
prawns|Prawns, cooked|FS|99|24|0.2|0.3|10 prawns=100|shrimp
calamari-grilled|Calamari, grilled|FS|130|20|4|3|1 serving=150|squid
calamari-fried|Calamari, fried|FS|175|15|8|7.5|1 serving=150|squid rings
mussels|Mussels, cooked|FS|172|24|7|4.5|1 bowl (meat)=150|
oysters|Oysters|FS|68|7|4|2.5|6 oysters=90|
crab|Crab meat|FS|97|19|0|1.5|100 g=100|
lobster|Crayfish / lobster, cooked|FS|89|19|0|0.9|1 tail=150|
fishcake|Fish cake, fried|FS|220|10|18|12|1 fishcake=80|
tofu|Tofu, firm|PP|144|17|3|9|100 g=100|
tofu-silken|Tofu, silken|PP|55|5|2|3|100 g=100|
tempeh|Tempeh|PP|192|20|8|11|100 g=100|
seitan|Seitan|PP|370|75|14|1.9|100 g=100|
edamame|Edamame, shelled|PP|121|12|9|5|½ cup=75|soy beans
lentils|Lentils, cooked|PP|116|9|20|0.4|½ cup=100;1 cup=200|
chickpeas|Chickpeas, cooked|PP|164|9|27|2.6|½ cup=85;1 tin (drained)=240|
kidney-beans|Kidney beans, cooked|PP|127|8.7|23|0.5|½ cup=90|
black-beans|Black beans, cooked|PP|132|8.9|24|0.5|½ cup=90|
butter-beans|Butter beans, cooked|PP|115|7.8|21|0.4|½ cup=90|lima
baked-beans|Baked beans in tomato sauce|PP|90|5|16|0.4|½ tin=205;1 tin=410|
sugar-beans|Sugar beans, cooked|PP|140|9|25|0.5|½ cup=90|cranberry beans
split-peas|Split peas, cooked|PP|118|8|21|0.4|½ cup=100|
veggie-burger|Veggie / plant-based burger patty|PP|220|17|9|13|1 patty=113|beyond impossible
soya-mince|Soya mince, cooked|PP|120|12|8|4|1 cup=150|
biltong|Biltong, beef|SA|260|52|2|4|small bag=30;50 g=50;100 g=100|
biltong-fatty|Biltong, with fat|SA|340|45|2|17|50 g=50|
droewors|Droëwors|SA|480|36|2|37|1 stick=25;50 g=50|dry wors
boerewors|Boerewors, braaied|SA|290|15|3|24|1 piece (10 cm)=90;2 pieces=180|wors braai sausage
pap-stiff|Pap (stywe pap), cooked|SA|110|2.5|24|0.5|1 cup=240;½ cup=120;1 serving spoon=150|maize mealie meal porridge phutu
pap-soft|Soft maize porridge, cooked|SA|60|1.4|13|0.3|1 bowl=250|maize mealie meal
krummelpap|Krummelpap, cooked|SA|150|3|32|1|1 cup=150|putu crumbly pap
samp-beans|Samp and beans, cooked|SA|130|5|25|1|1 cup=220|umngqusho
samp|Samp, cooked|SA|110|2.5|24|0.5|1 cup=200|
chakalaka|Chakalaka|SA|65|2|10|2|½ cup=120;2 tbsp=40|
vetkoek|Vetkoek|SA|330|7|45|14|1 vetkoek=80|fat cake amagwinya
vetkoek-mince|Vetkoek with mince|SA|270|11|30|12|1 filled vetkoek=160|
koeksister|Koeksister|SA|420|4|60|18|1 koeksister=60|koesister
melktert|Melktert|SA|250|6|32|11|1 slice=110|milk tart
malva-pudding|Malva pudding|SA|360|4|50|16|1 serving=120|
rusk|Buttermilk rusk|SA|420|8|64|15|1 rusk=40|beskuit
rusk-muesli|Muesli rusk|SA|440|9|60|18|1 rusk=40|
bobotie|Bobotie|SA|190|13|9|11|1 serving=250|
bunny-chow|Bunny chow, quarter mutton|SA|230|9|25|10|quarter=550|curry
bunny-chow-bean|Bunny chow, quarter bean|SA|200|6|32|6|quarter=500|
kota|Kota / spatlo|SA|280|10|30|14|1 kota=450|
gatsby|Gatsby, steak and chips|SA|280|10|33|12|¼ gatsby=450|
amasi|Amasi (maas)|SA|62|3.2|4.6|3.3|1 cup=250|sour milk|L
mealie|Mealie (corn on the cob)|SA|96|3.4|21|1.5|1 cob=150|corn
mealie-bread|Mealie bread|SA|240|5|40|7|1 slice=80|
weetbix|Weet-Bix style wheat biscuits|SA|358|12|68|1.4|2 biscuits=30;3 biscuits=45|cereal
morvite|Morvite / sorghum instant porridge|SA|380|8|78|2|1 serving=50|
mabela|Mabela / sorghum porridge, cooked|SA|75|2|16|0.5|1 bowl=250|ting
tripe|Tripe (mogodu), cooked|SA|94|12|2|4|1 cup=200|mala mogodu
chicken-feet|Chicken feet, cooked|SA|215|19|0|15|4 feet=100|walkies runaways
mogodu|Mogodu stew|SA|120|12|3|7|1 bowl=300|
sosatie|Sosatie (kebab)|SA|200|20|6|11|1 sosatie=150|
braai-broodjie|Braaibroodjie|SA|270|10|30|12|1 broodjie=150|toasted sandwich braai
potjiekos|Potjiekos, lamb|SA|150|12|8|8|1 plate=400|
curry-mince-sa|Curried mince|SA|180|14|6|11|1 cup=200|
pap-and-wors|Pap and wors, with tomato gravy|SA|170|6|20|7|1 plate=450|
fat-cake-plain|Amagwinya (plain)|SA|330|7|45|14|1=80|vetkoek
pampoen|Pampoenkoekies (pumpkin fritters)|SA|210|4|30|8|2 fritters=100|
sweet-pumpkin|Sweet pumpkin, cooked with sugar|SA|90|1|20|1.5|½ cup=120|
beetroot-salad|Beetroot salad|SA|70|1.5|14|1|½ cup=100|
potato-salad|Potato salad with mayo|SA|160|2|14|11|½ cup=125|
coleslaw|Coleslaw|SA|150|1|10|12|½ cup=100|
morogo|Morogo (wild spinach), cooked|SA|35|3|4|1|½ cup=100|imifino marog
atchar|Mango atchar|SA|220|1|12|18|1 tbsp=20|achar
peppermint-crisp-tart|Peppermint crisp tart|SA|320|4|35|19|1 slice=120|
hertzoggie|Hertzoggie|SA|430|5|55|21|1 biscuit=40|
biltong-stokkies|Biltong sticks (stokkies)|SA|300|48|3|10|1 stick=15|
fried-chicken-sa|Fried chicken, 2 piece|FF|260|19|10|16|2 pieces=250|kfc chicken licken
streetwise-two|Fried chicken meal (2 pc, chips, roll)|FF|260|12|25|13|1 meal=500|kfc streetwise
chicken-burger-ff|Chicken burger, fried fillet|FF|250|13|25|11|1 burger=210|
burger|Beef burger with bun|FF|250|13|24|11|1 burger=220|
cheeseburger|Cheeseburger|FF|265|14|25|12|1 burger=120;double=180|
big-burger|Double beef burger with cheese|FF|255|14|19|14|1 burger=280|big mac whopper
fries|Slap chips / fries|FF|312|3.4|41|15|small=100;medium=160;large=220|chips
pizza|Pizza, regular base|FF|266|11|33|10|1 slice=107;½ medium=400|
pizza-pepperoni|Pizza, pepperoni|FF|290|12|31|13|1 slice=110;½ medium=420|
pizza-veg|Pizza, vegetarian|FF|235|10|31|8|1 slice=110|margherita
pizza-thin|Pizza, thin base|FF|260|11|28|11|1 slice=80|
hot-dog|Hot dog in a roll|FF|290|10|24|17|1 hot dog=100|boerie roll
boerie-roll|Boerie roll|FF|280|11|25|15|1 roll=180|
wrap-chicken|Chicken wrap|FF|200|12|20|8|1 wrap=250|
sub-chicken|Chicken sub, 6 inch|FF|190|12|25|4.5|1 sub=230|subway
sub-cold-cut|Cold cut sub, 6 inch|FF|220|10|24|9|1 sub=230|
fish-and-chips|Fish and chips|FF|220|9|22|11|1 portion=450|
onion-rings|Onion rings|FF|410|5|44|24|small=90|
milkshake|Milkshake, fast food|FF|110|3|18|3|regular=400|
soft-serve|Soft serve ice cream cone|FF|200|4|30|7|1 cone=110|
sundae|Ice cream sundae|FF|190|4|30|6|1 sundae=160|
fried-chicken-wings|Fried chicken wings|FF|320|20|8|23|6 wings=160|
chicken-nuggets-ff|Chicken nuggets, fast food|FF|290|15|17|18|6 pc=100;9 pc=150|mcnuggets
doner|Doner / shawarma wrap|FF|215|12|20|10|1 wrap=350|gyro
kebab-plate|Kebab plate with rice|FF|170|12|18|6|1 plate=450|
pie-mince|Mince pie (pastry)|FF|280|8|25|16|1 pie=180|steak pie
pie-chicken|Chicken pie (pastry)|FF|260|8|24|15|1 pie=180|
pie-pepper-steak|Pepper steak pie|FF|270|8|25|15|1 pie=180|
sausage-roll|Sausage roll|FF|340|8|26|22|1 roll=100|
samoosa|Samoosa, mince|FF|300|9|28|17|1 samoosa=50;3 samoosas=150|samosa
samoosa-veg|Samoosa, vegetable|FF|260|5|30|13|1 samoosa=50|samosa
toasted-sandwich|Toasted cheese and tomato sandwich|FF|260|11|28|11|1 sandwich=150|toastie
cheese-griller|Cheese griller|FF|290|12|3|26|1=80|
chips-gravy|Chips with gravy|FF|180|2.5|22|9|1 portion=250|
nachos|Nachos with cheese|FF|340|9|36|18|1 plate=250|
oats|Rolled oats, dry|BF|389|13|66|7|½ cup=40;1 cup=80|porridge oatmeal
oats-cooked|Oats porridge, cooked with water|BF|71|2.5|12|1.5|1 bowl=250|oatmeal
instant-oats|Instant oats sachet, flavoured|BF|380|9|70|6|1 sachet=35|
muesli|Muesli, toasted|BF|430|9|62|15|½ cup=55|granola
muesli-untoasted|Muesli, untoasted|BF|360|10|62|6|½ cup=50|bircher
granola|Granola|BF|470|10|58|20|½ cup=60|
corn-flakes|Corn flakes|BF|357|7.5|84|0.4|1 cup=30|
bran-flakes|Bran flakes|BF|330|10|66|2|1 cup=40|all bran
rice-krispies|Rice cereal (Rice Krispies)|BF|383|6|86|1|1 cup=30|
coco-pops|Chocolate rice cereal|BF|387|5|85|2.5|1 cup=30|
cheerios|Oat rings cereal|BF|375|12|73|6.5|1 cup=30|
futurelife|Futurelife style smart food|BF|410|19|60|9|1 serving=50|
jungle-oats|Jungle Oats style oats|BF|380|12|63|8|½ cup=40|
maltabella|Maltabella / sorghum porridge, dry|BF|360|8|78|2|1 serving=40|
pronutro|ProNutro style cereal|BF|380|18|60|6|1 serving=50|
pancakes|Pancakes / crumpets|BF|227|6|28|10|2 pancakes=100;1 pancake=50|flapjacks
waffles|Waffle|BF|290|8|33|14|1 waffle=75|
french-toast|French toast|BF|229|8|25|11|2 slices=130|eggy bread
english-breakfast|Full English breakfast|BF|200|10|10|14|1 plate=450|fry up
eggs-benedict|Eggs benedict|BF|230|11|14|15|1 serving=300|
omelette|Omelette, cheese|BF|190|13|1|15|2 egg omelette=150;3 egg=200|
avo-toast|Avo toast|BF|220|6|20|13|1 slice=120;2 slices=240|avocado
breakfast-wrap|Breakfast wrap (egg, bacon)|BF|230|11|18|13|1 wrap=220|
smoothie-bowl|Smoothie bowl|BF|110|3|20|2|1 bowl=350|acai
overnight-oats|Overnight oats|BF|150|5|22|4.5|1 jar=250|
chia-pudding|Chia pudding|BF|130|4|14|7|1 cup=200|
rice-white|White rice, cooked|GR|130|2.7|28|0.3|1 cup=185;½ cup=95|
rice-brown|Brown rice, cooked|GR|123|2.7|26|1|1 cup=195|
rice-basmati|Basmati rice, cooked|GR|121|3.5|25|0.4|1 cup=160|
rice-jasmine|Jasmine rice, cooked|GR|129|2.7|28|0.2|1 cup=160|
rice-fried|Fried rice|GR|174|4|25|6|1 cup=200|egg fried rice
rice-yellow|Yellow rice with raisins|GR|150|2.5|30|2.5|1 cup=180|geelrys
rice-savoury|Savoury rice|GR|145|3|27|2.5|1 cup=180|
rice-cake|Rice cakes|GR|387|8|81|3|2 cakes=18|
pasta|Pasta, cooked|GR|158|5.8|31|0.9|1 cup=140;1 plate=250|spaghetti penne macaroni
pasta-wholewheat|Wholewheat pasta, cooked|GR|149|6|30|1.7|1 cup=140|
noodles-egg|Egg noodles, cooked|GR|138|4.5|25|2|1 cup=160|
noodles-rice|Rice noodles, cooked|GR|108|1.8|24|0.2|1 cup=175|
noodles-instant|Instant noodles (2-minute), prepared|GR|190|4|26|8|1 pack=280|maggi
couscous|Couscous, cooked|GR|112|3.8|23|0.2|1 cup=160|
quinoa|Quinoa, cooked|GR|120|4.4|21|1.9|1 cup=185|
bulgur|Bulgur wheat, cooked|GR|83|3|19|0.2|1 cup=180|
barley|Barley, cooked|GR|123|2.3|28|0.4|1 cup=160|
polenta|Polenta, cooked|GR|70|1.6|15|0.3|1 cup=240|
potato|Potato, boiled|GR|87|1.9|20|0.1|1 medium=170;100 g=100|
potato-baked|Baked potato, skin on|GR|93|2.5|21|0.1|1 large=300;1 medium=200|
potato-mash|Mashed potato with milk and butter|GR|113|2|17|4.2|1 cup=210;½ cup=105|
potato-roast|Roast potatoes|GR|149|2.6|24|5|3 pieces=150|
potato-wedges|Potato wedges|GR|180|3|25|8|1 portion=150|
sweet-potato|Sweet potato, baked|GR|90|2|21|0.2|1 medium=150|
butternut|Butternut, roasted|GR|45|1|12|0.1|1 cup=205|
pumpkin|Pumpkin, cooked|GR|26|1|6.5|0.1|1 cup=245|
cassava|Cassava, cooked|GR|160|1.4|38|0.3|1 cup=200|
yam|Yam, cooked|GR|116|1.5|27|0.1|1 cup=135|
plantain|Plantain, fried|GR|236|1.5|40|9|1 cup=120|
flour|Cake flour|GR|364|10|76|1|1 tbsp=8;1 cup=125|
maize-meal|Maize meal, dry|GR|365|8|77|3|1 cup=160|mealie meal
bread-brown|Brown bread|BB|240|9|43|3|1 slice=38;2 slices=76|
bread-white|White bread|BB|265|8.5|49|3.2|1 slice=38;2 slices=76|
bread-wholewheat|Wholewheat bread|BB|247|13|41|3.4|1 slice=38|
bread-rye|Rye bread|BB|259|8.5|48|3.3|1 slice=32|
bread-seed|Seed loaf|BB|290|11|35|11|1 slice=40|
bread-low-gi|Low GI bread|BB|235|10|40|3|1 slice=38|
sourdough|Sourdough bread|BB|270|10|52|2|1 slice=50|
ciabatta|Ciabatta|BB|271|9|50|3.5|1 roll=90|
baguette|Baguette / French loaf|BB|270|9|55|1.5|1 slice=40|
roll-white|Bread roll, white|BB|280|9|52|4|1 roll=60|hamburger bun
roll-hotdog|Hot dog roll|BB|270|9|50|4|1 roll=55|
pita|Pita bread|BB|275|9|56|1.2|1 pita=60|
naan|Naan bread|BB|310|9|50|8|1 naan=90|
roti|Roti / chapati|BB|300|8|45|10|1 roti=60|
wrap|Tortilla wrap|BB|300|8|50|7|1 wrap=62|
tortilla-wholewheat|Wholewheat wrap|BB|290|9|45|7.5|1 wrap=62|
bagel|Bagel, plain|BB|257|10|50|1.6|1 bagel=100|
english-muffin|English muffin|BB|227|8|44|1.7|1 muffin=60|
croissant|Croissant|BB|406|8|46|21|1 croissant=60|
muffin-blueberry|Muffin, blueberry|BB|377|5|53|16|1 muffin=110|
muffin-bran|Bran muffin|BB|300|6|45|11|1 muffin=110|
scone|Scone|BB|360|7|48|15|1 scone=70|
doughnut|Doughnut, glazed|BB|421|5|50|23|1 doughnut=60|
cinnamon-bun|Cinnamon bun|BB|400|6|56|17|1 bun=100|
danish|Danish pastry|BB|410|6|47|22|1 pastry=90|
hot-cross-bun|Hot cross bun|BB|290|8|50|6|1 bun=70|
crackers|Crackers (Salticrax style)|BB|440|9|68|15|4 crackers=20|
provitas|Provita / crispbread|BB|390|12|70|6|3 crispbreads=21|ryvita
cream-crackers|Cream crackers|BB|440|10|68|14|3 crackers=24|
banana-bread|Banana bread|BB|330|5|50|12|1 slice=70|
cake-chocolate|Chocolate cake with icing|BB|380|4.5|52|18|1 slice=100|
cake-carrot|Carrot cake|BB|410|4.5|50|22|1 slice=110|
cheesecake|Cheesecake|BB|321|5.5|25|22|1 slice=120|
brownie|Brownie|BB|466|5|60|24|1 brownie=60|
egg|Egg, whole|DE|143|12.6|0.7|9.5|1 large egg=50;2 eggs=100;3 eggs=150|
egg-fried|Egg, fried|DE|196|13.6|0.8|15|1 egg=46;2 eggs=92|
egg-scrambled|Scrambled eggs with milk|DE|149|10|1.6|11|2 eggs=120;3 eggs=180|
egg-white|Egg whites|DE|52|11|0.7|0.2|1 white=33;½ cup=120|
milk-full|Full cream milk|DE|64|3.3|4.7|3.4|1 cup=250;splash in coffee=30|milk|L
milk-low|Low fat milk (2%)|DE|50|3.4|4.8|2|1 cup=250;splash in coffee=30|milk|L
milk-skim|Fat free / skim milk|DE|35|3.4|5|0.1|1 cup=250|milk|L
milk-chocolate|Chocolate milk|DE|83|3.2|12|2.2|1 bottle=350;1 cup=250|steri stumpie|L
milk-lactose-free|Lactose-free milk|DE|55|3.3|4.8|2|1 cup=250||L
buttermilk|Buttermilk|DE|40|3.3|4.8|0.9|1 cup=250||L
greek-yoghurt|Greek yoghurt, plain|DE|97|9|4|5|½ cup=125;1 cup=250|yogurt
greek-yoghurt-fat-free|Fat-free Greek yoghurt|DE|59|10|3.6|0.4|½ cup=125;1 tub=170|yogurt
fat-free-yoghurt|Fat-free plain yoghurt|DE|56|5.7|7.7|0.2|1 tub=175;½ cup=125|yogurt
yoghurt-fruit|Fruit yoghurt, low fat|DE|95|4|16|1.5|1 tub=175|yogurt flavoured
yoghurt-drink|Drinking yoghurt|DE|80|3|13|1.5|1 bottle=350||L
skyr|Skyr / high-protein yoghurt|DE|63|11|4|0.2|1 tub=150|yogurt
cottage-cheese|Cottage cheese, low fat|DE|90|12|3.5|3|½ cup=115|
cheddar|Cheddar cheese|DE|403|25|1.3|33|1 slice=20;matchbox=30|gouda cheese
gouda|Gouda cheese|DE|356|25|2.2|27|1 slice=20|
mozzarella|Mozzarella|DE|280|28|3|17|1 slice=20;½ cup grated=55|
parmesan|Parmesan|DE|431|38|4|29|1 tbsp grated=5;20 g=20|
feta|Feta cheese|DE|264|14|4|21|1 block (¼)=50|
halloumi|Halloumi, grilled|DE|320|22|2|25|2 slices=60|
cream-cheese|Cream cheese|DE|342|6|4|34|1 tbsp=15|
cream-cheese-light|Cream cheese, light|DE|200|9|7|15|1 tbsp=15|
ricotta|Ricotta|DE|174|11|3|13|½ cup=125|
brie|Brie / camembert|DE|334|21|0.5|28|1 wedge=30|
cheese-slices|Processed cheese slices|DE|300|16|8|23|1 slice=20|
cream|Fresh cream|DE|340|2|3|36|1 tbsp=15;¼ cup=60||L
sour-cream|Sour cream|DE|198|2.4|4.6|19|1 tbsp=15|
ice-cream|Ice cream, vanilla|DE|207|3.5|24|11|1 scoop=65;2 scoops=130|
frozen-yoghurt|Frozen yoghurt|DE|127|3|22|3.5|1 cup=175|
custard|Custard|DE|110|3.5|17|3|½ cup=125|
banana|Banana|FR|89|1.1|23|0.3|1 medium=120;1 small=90|
apple|Apple|FR|52|0.3|14|0.2|1 medium=180|
pear|Pear|FR|57|0.4|15|0.1|1 medium=180|
orange|Orange|FR|47|0.9|12|0.1|1 medium=150|
naartjie|Naartjie / mandarin|FR|53|0.8|13|0.3|1 naartjie=90|tangerine clementine
grapefruit|Grapefruit|FR|42|0.8|11|0.1|½ grapefruit=150|
grapes|Grapes|FR|69|0.7|18|0.2|1 cup=150;small bunch=100|
strawberries|Strawberries|FR|32|0.7|7.7|0.3|1 cup=150|
blueberries|Blueberries|FR|57|0.7|14|0.3|½ cup=75;1 cup=150|
raspberries|Raspberries|FR|52|1.2|12|0.7|1 cup=125|
berries|Mixed berries|FR|50|0.8|12|0.3|½ cup=75;1 cup=150|
mango|Mango|FR|60|0.8|15|0.4|1 mango=200;1 cup=165|
pineapple|Pineapple|FR|50|0.5|13|0.1|1 cup=165|
papaya|Papaya / pawpaw|FR|43|0.5|11|0.3|1 cup=145|
watermelon|Watermelon|FR|30|0.6|7.6|0.2|1 wedge=280;1 cup=150|spanspek melon
melon|Spanspek / cantaloupe|FR|34|0.8|8|0.2|1 cup=160|
peach|Peach|FR|39|0.9|10|0.3|1 medium=150|nectarine
plum|Plum|FR|46|0.7|11|0.3|1 plum=65|
apricot|Apricot|FR|48|1.4|11|0.4|2 apricots=70|
cherries|Cherries|FR|63|1.1|16|0.2|1 cup=140|
kiwi|Kiwi fruit|FR|61|1.1|15|0.5|1 kiwi=75|
litchi|Litchis|FR|66|0.8|17|0.4|10 litchis=100|lychee
guava|Guava|FR|68|2.6|14|1|1 guava=55|
granadilla|Granadilla / passion fruit|FR|97|2.2|23|0.7|1 granadilla=20|
pomegranate|Pomegranate seeds|FR|83|1.7|19|1.2|½ cup=85|
figs|Figs, fresh|FR|74|0.8|19|0.3|2 figs=100|
dates|Dates, dried|FR|282|2.5|75|0.4|3 dates=24;1 medjool=24|
raisins|Raisins|FR|299|3|79|0.5|small box=40;1 tbsp=10|sultanas
dried-mango|Dried mango|FR|320|2.5|78|1|small bag=40|
dried-apricots|Dried apricots|FR|241|3.4|63|0.5|5 halves=35|
fruit-salad|Fruit salad|FR|50|0.6|13|0.2|1 cup=180|
fruit-canned|Canned fruit in syrup|FR|75|0.5|19|0.1|½ cup=125|peaches pears
avocado|Avocado|FR|160|2|9|15|½ avo=75;1 avo=150|
lemon|Lemon juice|FR|22|0.4|7|0.2|1 tbsp=15||L
broccoli|Broccoli, steamed|VG|35|2.4|7|0.4|1 cup=155|
cauliflower|Cauliflower, steamed|VG|23|1.8|4|0.5|1 cup=125|
cauli-rice|Cauliflower rice|VG|25|2|5|0.3|1 cup=110|
mixed-veg|Mixed vegetables|VG|65|2.9|13|0.3|1 cup=180|frozen veg
carrots|Carrots, cooked|VG|35|0.8|8|0.2|½ cup=80;1 carrot=60|
carrot-raw|Carrot, raw|VG|41|0.9|10|0.2|1 medium=60|
green-beans|Green beans, cooked|VG|35|1.9|8|0.3|1 cup=125|
peas|Peas, cooked|VG|84|5.4|16|0.2|½ cup=80|
corn-kernels|Sweetcorn kernels|VG|96|3.4|21|1.5|½ cup=80|
creamed-corn|Creamed sweetcorn|VG|72|1.7|18|0.4|½ cup=130|
spinach|Spinach / morogo, cooked|VG|23|3|3.8|0.3|½ cup=90|
spinach-creamed|Creamed spinach|VG|90|3|6|6|½ cup=100|
baby-spinach|Baby spinach, raw|VG|23|2.9|3.6|0.4|1 cup=30|
salad|Green salad, no dressing|VG|17|1.2|3.3|0.2|side salad=100;large bowl=200|lettuce
greek-salad|Greek salad with feta|VG|110|3|5|9|1 bowl=250|
caesar-salad|Caesar salad with dressing|VG|180|6|8|14|1 bowl=250|
tomato|Tomato|VG|18|0.9|3.9|0.2|1 medium=120;cherry tomatoes (10)=170|
cucumber|Cucumber|VG|15|0.7|3.6|0.1|½ cucumber=150|
lettuce|Lettuce|VG|15|1.4|2.9|0.2|2 leaves=20;1 cup=50|
onion|Onion, cooked|VG|44|1.4|10|0.2|½ onion=55|
peppers|Peppers, sweet|VG|31|1|6|0.3|1 pepper=150|capsicum
mushrooms|Mushrooms, cooked|VG|28|2.2|5.3|0.5|1 cup=155|
zucchini|Baby marrow / zucchini, cooked|VG|17|1.2|3.1|0.3|1 cup=180|courgette
brinjal|Brinjal / eggplant, cooked|VG|35|0.8|8.7|0.2|1 cup=100|aubergine
cabbage|Cabbage, cooked|VG|23|1.3|5.5|0.1|1 cup=150|
cabbage-braised|Braised cabbage with oil|VG|80|1.3|7|5.5|1 cup=150|
kale|Kale, cooked|VG|36|3|5|0.5|1 cup=130|
asparagus|Asparagus|VG|22|2.4|4|0.2|6 spears=90|
beetroot|Beetroot, cooked|VG|44|1.7|10|0.2|½ cup=85|
brussels|Brussels sprouts|VG|36|2.6|7|0.5|1 cup=155|
celery|Celery|VG|16|0.7|3|0.2|2 stalks=80|
gem-squash|Gem squash|VG|40|1|9|0.2|1 half=120|
sweetcorn-cob|Sweetcorn on the cob|VG|96|3.4|21|1.5|1 cob=150|
veg-soup|Vegetable soup|VG|35|1.5|6|0.7|1 bowl=300||L
stir-fry-veg|Stir-fry vegetables|VG|50|2|7|2|1 cup=150|
olives|Olives|VG|115|0.8|6|11|10 olives=40|
pickles|Gherkins / pickles|VG|12|0.3|2.3|0.2|2 gherkins=60|
almonds|Almonds|NS|579|21|22|50|small handful=25|
cashews|Cashews|NS|553|18|30|44|small handful=25|
peanuts|Peanuts, roasted|NS|585|24|21|50|small handful=25|
peanuts-raisins|Peanuts and raisins|NS|450|13|45|25|small handful=40|nuts and raisins
walnuts|Walnuts|NS|654|15|14|65|5 halves=20|
pecans|Pecan nuts|NS|691|9|14|72|10 halves=20|
macadamias|Macadamia nuts|NS|718|8|14|76|small handful=25|
pistachios|Pistachios, shelled|NS|562|20|28|45|small handful=25|
brazil-nuts|Brazil nuts|NS|659|14|12|67|3 nuts=15|
mixed-nuts|Mixed nuts|NS|607|20|21|54|small handful=30|trail mix
chia|Chia seeds|NS|486|17|42|31|1 tbsp=12|
flax|Flaxseed / linseed|NS|534|18|29|42|1 tbsp=10|
sunflower-seeds|Sunflower seeds|NS|584|21|20|51|1 tbsp=10|
pumpkin-seeds|Pumpkin seeds|NS|559|30|11|49|1 tbsp=10|pepitas
sesame|Sesame seeds|NS|573|18|23|50|1 tbsp=9|
coconut|Coconut, desiccated|NS|660|7|24|65|1 tbsp=6|
peanut-butter|Peanut butter|OS|588|25|20|50|1 tbsp=16;2 tbsp=32|
almond-butter|Almond butter|OS|614|21|19|56|1 tbsp=16|
olive-oil|Olive oil|OS|884|0|0|100|1 tsp=5;1 tbsp=14||L
sunflower-oil|Sunflower / cooking oil|OS|884|0|0|100|1 tsp=5;1 tbsp=14|canola||L
coconut-oil|Coconut oil|OS|862|0|0|100|1 tsp=5;1 tbsp=14|
butter|Butter|OS|717|0.9|0.1|81|1 tsp=5;1 tbsp=14|
margarine|Margarine / spread|OS|530|0.2|0.7|59|1 tsp=5;1 tbsp=14|rama flora
ghee|Ghee|OS|900|0|0|100|1 tsp=5|
mayo|Mayonnaise|OS|680|1|2|75|1 tbsp=15|
mayo-light|Mayonnaise, light|OS|300|1|8|30|1 tbsp=15|
tomato-sauce|Tomato sauce / ketchup|OS|110|1.2|26|0.2|1 tbsp=17|all gold
chutney|Chutney (Mrs Ball's style)|OS|200|0.5|48|0.2|1 tbsp=20|
bbq-sauce|BBQ sauce|OS|170|0.8|40|0.6|1 tbsp=17|
sweet-chilli|Sweet chilli sauce|OS|230|0.5|55|0.5|1 tbsp=17|
peri-peri-sauce|Peri-peri / hot sauce|OS|60|1|8|3|1 tsp=5|
soy-sauce|Soy sauce|OS|53|8|4.9|0.6|1 tbsp=16||L
mustard|Mustard|OS|66|4|5|3.3|1 tsp=5|
salad-dressing|Salad dressing, vinaigrette|OS|290|0.3|12|27|1 tbsp=15||L
salad-dressing-creamy|Creamy salad dressing|OS|450|1|8|47|1 tbsp=15|ranch caesar
gravy|Gravy, made up|OS|50|1.5|6|2.3|¼ cup=60||L
cheese-sauce|Cheese sauce|OS|170|7|8|12|¼ cup=60|
pesto|Basil pesto|OS|460|5|6|46|1 tbsp=16|
hummus|Hummus|OS|166|8|14|10|2 tbsp=30|
guacamole|Guacamole|OS|157|2|9|14|2 tbsp=30|
tzatziki|Tzatziki|OS|90|4|4|6|2 tbsp=30|
jam|Jam|OS|250|0.4|62|0.1|1 tbsp=20|
honey|Honey|OS|304|0.3|82|0|1 tsp=7;1 tbsp=21|
syrup|Syrup (golden / maple)|OS|300|0|78|0|1 tbsp=20|
nutella|Chocolate hazelnut spread|OS|539|6|58|31|1 tbsp=19|nutella
marmite|Marmite / Bovril|OS|250|36|20|0.5|1 tsp=5|
sugar|Sugar|OS|387|0|100|0|1 tsp=4;1 tbsp=12|
sweetener|Sweetener|OS|0|0|0|0|1 sachet=1|
dark-choc|Dark chocolate 70%|SN|600|8|46|43|2 blocks=20;½ slab=40|
milk-choc|Milk chocolate|SN|535|7.7|59|30|2 blocks=20;1 slab=80|dairy milk
choc-bar|Chocolate bar (Bar-One / Mars style)|SN|450|4|70|17|1 bar=55|bar one mars
kitkat|Wafer chocolate bar|SN|518|6|60|27|4 fingers=42|kitkat
chips-crisps|Potato crisps|SN|536|7|53|34|small packet=36;125 g packet=125|chips simba lays
nik-naks|Maize snacks (NikNaks style)|SN|530|5|58|31|small packet=55|cheese curls
popcorn|Popcorn, butter|SN|500|8|55|28|1 bag=90|
popcorn-plain|Popcorn, air-popped|SN|387|13|78|4.5|3 cups=24|
pretzels|Pretzels|SN|380|10|80|3|1 handful=30|
biscuits|Biscuits / cookies|SN|480|6|66|22|2 biscuits=30|marie tennis oreo
marie|Marie biscuits|SN|430|7|73|12|3 biscuits=24|
oreo|Chocolate sandwich cookies|SN|480|5|70|20|3 cookies=33|
choc-chip-cookie|Choc chip cookie|SN|490|5|64|24|1 cookie=30|
sweets|Sweets / jelly babies|SN|340|4|83|0|small packet=50|candy gummies wine gums
lollipop|Lollipop|SN|390|0|98|0|1 lollipop=15|
cereal-bar|Cereal / muesli bar|SN|420|6|67|14|1 bar=30|
protein-bar|Protein bar|SN|360|30|35|12|1 bar=60|
energy-ball|Energy ball / bliss ball|SN|420|10|45|22|1 ball=25|
rice-crackers|Rice crackers|SN|400|7|83|4|1 handful=25|
jelly|Jelly, made up|SN|60|1.2|14|0|½ cup=125|
pudding|Chocolate pudding|SN|130|3|22|3.5|½ cup=125|
trail-mix|Trail mix|SN|460|14|45|29|small handful=40|
coffee-black|Coffee, black|DR|2|0.3|0|0|1 mug=250|filter americano espresso|L
espresso|Espresso|DR|2|0.1|0|0|1 shot=30|coffee|L
cappuccino|Cappuccino, full cream|DR|45|2.4|3.6|2.3|regular=300|coffee flat white|L
latte|Latte, full cream|DR|54|3|4.5|2.8|regular=350;large=450|coffee|L
latte-skim|Latte, skim milk|DR|30|3|4.5|0.1|regular=350|coffee|L
latte-oat|Latte, oat milk|DR|45|0.8|6|2|regular=350|coffee|L
mocha|Mocha|DR|75|2.8|10|2.8|regular=350|coffee chocolate|L
iced-coffee|Iced coffee, sweetened|DR|70|1.5|12|2|regular=400|frappe|L
hot-chocolate|Hot chocolate|DR|77|3.5|11|2.3|1 mug=300|milo|L
milo|Milo / chocolate malt drink, with milk|DR|80|3.5|11|2.5|1 mug=250|L
tea-milk|Tea with milk|DR|10|0.5|1|0.4|1 mug=250|five roses|L
tea-milk-sugar|Tea with milk and 2 sugars|DR|40|0.5|8|0.4|1 mug=250|L
rooibos|Rooibos tea, plain|DR|1|0|0.2|0|1 mug=250|tea|L
green-tea|Green tea|DR|1|0|0.2|0|1 mug=250|L
chai-latte|Chai latte|DR|70|2.5|12|1.5|regular=350|L
coke|Cola, regular|DR|42|0|10.6|0|1 can=330;500 ml=500|soda cooldrink coke|L
coke-zero|Cola, zero / diet|DR|0.3|0|0|0|1 can=330|coke zero soda|L
fanta|Orange soda|DR|44|0|11|0|1 can=330|fanta cooldrink|L
sprite|Lemon-lime soda|DR|40|0|10|0|1 can=330|sprite|L
ginger-ale|Ginger ale / tonic|DR|35|0|9|0|1 can=200|L
cream-soda|Cream soda|DR|48|0|12|0|1 can=330|L
iced-tea|Iced tea|DR|30|0|7.5|0|1 bottle=500|lipton|L
energy-drink|Energy drink|DR|45|0|11|0|1 can=250;500 ml=500|red bull monster|L
energy-drink-sf|Energy drink, sugar-free|DR|3|0|0.5|0|1 can=250|L
sports-drink|Sports drink|DR|25|0|6|0|1 bottle=500|powerade energade game|L
orange-juice|Orange juice|DR|45|0.7|10|0.2|1 glass=250|L
apple-juice|Apple juice|DR|46|0.1|11|0.1|1 glass=250|L
fruit-juice-blend|Fruit juice blend|DR|48|0.3|11.5|0|1 glass=250|ceres liqui fruit|L
fruit-juice-diluted|Diluted cordial|DR|15|0|3.8|0|1 glass=250|oros squash|L
smoothie|Fruit smoothie|DR|60|1|13|0.5|regular=400|L
protein-shake-milk|Protein shake with milk|DR|85|9|6|2.5|1 shake=330|L
coconut-water|Coconut water|DR|19|0.7|3.7|0.2|1 carton=330|L
almond-milk|Almond milk, unsweetened|DR|15|0.5|0.6|1.2|1 cup=250|L
oat-milk|Oat milk|DR|46|1|6.5|1.5|1 cup=250|L
soy-milk|Soy milk|DR|43|3.3|2.7|2|1 cup=250|L
kombucha|Kombucha|DR|20|0|5|0|1 bottle=330|L
mageu|Mageu / amahewu|DR|60|1|13|0.3|1 cup=250;1 L=1000|mahewu|L
water|Water|DR|0|0|0|0|1 glass=250;1 bottle=500|L
beer|Beer, lager|AL|43|0.5|3.6|0|1 can=340;1 quart=750|castle black label|L
beer-light|Light beer|AL|29|0.2|1.3|0|1 can=340|L
craft-beer|Craft beer / IPA|AL|55|0.6|4.5|0|1 pint=500|L
cider|Cider|AL|50|0|6|0|1 bottle=330|savanna hunters|L
wine|Wine, dry|AL|83|0.1|2.6|0|1 glass=150;1 bottle=750|red white|L
wine-sweet|Wine, sweet / rosé|AL|100|0.1|8|0|1 glass=150|L
sparkling-wine|Sparkling wine|AL|80|0.2|1.5|0|1 glass=125|champagne|L
spirits|Spirits (brandy, vodka, whisky, gin)|AL|231|0|0|0|1 tot=25;double=50|L
spirit-mixer|Spirit with cola|AL|75|0|8|0|1 glass=275|brandy and coke|L
gin-tonic|Gin and tonic|AL|60|0|5|0|1 glass=275|L
rtd|Ready-to-drink (Brutal Fruit / Smirnoff Spin style)|AL|70|0|9|0|1 bottle=275|L
cocktail|Cocktail, sweet|AL|170|0.2|20|0.5|1 glass=200|mojito margarita|L
umqombothi|Umqombothi (traditional beer)|AL|40|0.8|6|0.3|1 cup=250|L
butter-chicken|Butter chicken|IN|150|12|6|9|1 cup=240|chicken makhani
chicken-tikka|Chicken tikka masala|IN|140|12|7|7|1 cup=240|
chicken-curry-rice|Chicken curry with rice|IN|150|9|17|5|1 plate=450|
chicken-curry|Chicken curry (no rice)|IN|140|12|5|8|1 cup=240|
lamb-curry|Lamb / mutton curry|IN|175|14|5|11|1 cup=240|
beef-curry|Beef curry|IN|160|15|5|9|1 cup=240|
dhal|Dhal (lentil curry)|IN|115|6|15|3.5|1 cup=240|dal
chana-masala|Chana masala|IN|140|6|19|5|1 cup=240|chickpea curry
paneer-tikka|Paneer tikka / masala|IN|230|11|8|17|1 cup=200|
palak-paneer|Palak paneer|IN|150|7|6|11|1 cup=200|
biryani-chicken|Chicken biryani|IN|180|8|24|6|1 plate=400|
biryani-lamb|Lamb biryani|IN|200|9|23|8|1 plate=400|
veg-curry|Vegetable curry|IN|100|2.5|10|5.5|1 cup=240|
tandoori-chicken|Tandoori chicken|IN|150|25|3|4|1 leg quarter=200|
pakora|Pakora / bhaji|IN|300|7|25|19|4 pieces=80|chilli bites
roti-roll|Roti roll (curry filled)|IN|220|8|25|10|1 roll=300|
raita|Raita|IN|60|3|4|3|¼ cup=60|
poppadom|Poppadom|IN|370|18|45|12|2 poppadoms=20|
mango-lassi|Mango lassi|IN|95|2.5|16|2|1 glass=300||L
gulab-jamun|Gulab jamun|IN|320|5|50|12|2 pieces=80|
sweet-and-sour|Sweet and sour chicken|AS|190|10|20|8|1 serving=300|
chicken-chow-mein|Chicken chow mein|AS|140|8|15|5.5|1 plate=350|
beef-stir-fry|Beef and broccoli stir-fry|AS|120|11|7|5.5|1 plate=350|
fried-rice-chicken|Chicken fried rice|AS|175|7|24|6|1 plate=350|
pad-thai|Pad thai|AS|180|8|25|6|1 plate=350|
green-curry|Thai green curry with chicken|AS|135|9|5|9|1 cup=240|
red-curry|Thai red curry with chicken|AS|140|9|6|9|1 cup=240|
massaman|Massaman curry|AS|160|9|10|10|1 cup=240|
tom-yum|Tom yum soup|AS|40|4|3|1.5|1 bowl=350||L
ramen|Ramen, pork|AS|95|5|11|3.5|1 bowl=550|
pho|Pho, beef|AS|60|4.5|7|1.3|1 bowl=600|
dim-sum|Dim sum dumplings|AS|190|8|22|8|4 dumplings=120|gyoza dumplings
spring-rolls|Spring rolls, fried|AS|250|6|28|13|2 rolls=100|
sushi|Sushi, salmon rolls|AS|150|6|22|4|8 pieces=240|california roll
sushi-nigiri|Salmon nigiri|AS|160|8|25|3|2 pieces=70|
sashimi|Salmon sashimi|AS|180|20|0|11|6 pieces=90|
poke-bowl|Poke bowl|AS|150|9|18|5|1 bowl=450|
teriyaki-chicken|Teriyaki chicken with rice|AS|160|10|22|3.5|1 plate=400|
katsu-curry|Chicken katsu curry|AS|190|8|24|7|1 plate=450|
bibimbap|Bibimbap|AS|130|6|18|4|1 bowl=450|
kung-pao|Kung pao chicken|AS|160|13|8|9|1 serving=250|
miso-soup|Miso soup|AS|35|2.5|4|1|1 bowl=250||L
edamame-salted|Edamame, salted in pods|AS|120|11|9|5|1 bowl=150|
tacos-beef|Beef tacos|MX|220|11|18|12|2 tacos=180|
tacos-chicken|Chicken tacos|MX|190|12|18|8|2 tacos=180|
burrito|Burrito, chicken|MX|190|10|22|7|1 burrito=350|
burrito-bean|Burrito, bean and cheese|MX|200|8|27|7|1 burrito=300|
quesadilla|Quesadilla, chicken and cheese|MX|280|14|22|15|1 quesadilla=200|
enchiladas|Enchiladas|MX|170|9|15|8|2 enchiladas=300|
fajitas|Chicken fajitas|MX|160|12|15|6|2 fajitas=250|
chilli-con-carne|Chilli con carne|MX|130|10|10|5.5|1 cup=250|
refried-beans|Refried beans|MX|90|5|14|1.5|½ cup=120|
salsa|Salsa|MX|30|1.5|6|0.2|2 tbsp=30|
tortilla-chips|Tortilla chips|MX|490|7|63|23|1 handful=30|doritos
empanada|Empanada|MX|290|9|28|16|1 empanada=100|
arepa|Arepa|MX|220|5|40|4|1 arepa=100|
rice-and-beans|Rice and beans|MX|140|5|26|1.5|1 cup=200|
shawarma-plate|Chicken shawarma plate|MD|180|15|15|7|1 plate=400|
falafel|Falafel|MD|333|13|32|18|4 falafel=100|
falafel-wrap|Falafel wrap|MD|230|7|28|10|1 wrap=300|
gyro|Gyro / souvlaki pita|MD|220|12|20|10|1 pita=300|
lamb-kofta|Lamb kofta|MD|250|18|4|18|2 kofta=150|
tabbouleh|Tabbouleh|MD|120|2.5|12|7|½ cup=100|
baba-ganoush|Baba ganoush|MD|130|2|8|10|2 tbsp=30|
dolmades|Dolmades|MD|160|3|18|8|4 pieces=100|
moussaka|Moussaka|MD|150|8|8|10|1 serving=300|
spanakopita|Spanakopita|MD|260|8|20|17|1 piece=120|
shakshuka|Shakshuka|MD|110|6|6|7|1 serving=300|
baklava|Baklava|MD|430|7|37|29|1 piece=40|
couscous-salad|Couscous salad|MD|150|4|22|5|1 cup=180|
tagine|Chicken tagine|MD|120|11|8|5|1 cup=250|
spag-bol|Spaghetti bolognese|IT|150|8|17|5|1 plate=400|spag bol
lasagne|Lasagne, beef|IT|160|9|13|8|1 portion=350|lasagna
mac-cheese|Macaroni cheese|IT|180|7|20|8|1 cup=200|mac and cheese
carbonara|Spaghetti carbonara|IT|190|8|20|9|1 plate=350|
alfredo|Fettuccine alfredo|IT|220|6|22|12|1 plate=350|
pasta-arrabbiata|Penne arrabbiata|IT|140|4.5|24|3|1 plate=350|tomato pasta napolitana
pasta-pesto|Pasta with pesto|IT|230|6|28|10|1 plate=300|
pasta-chicken-creamy|Creamy chicken pasta|IT|190|10|18|9|1 plate=380|
ravioli|Ravioli with sauce|IT|170|7|22|6|1 plate=300|
gnocchi|Gnocchi with tomato sauce|IT|150|4|28|2.5|1 plate=300|
risotto|Risotto, mushroom|IT|140|3.5|20|5|1 plate=350|
calzone|Calzone|IT|260|11|30|11|1 calzone=350|
bruschetta|Bruschetta|IT|200|5|25|9|2 pieces=100|
garlic-bread|Garlic bread|IT|350|8|42|16|2 slices=60|
tiramisu|Tiramisu|IT|283|4.5|28|17|1 portion=120|
panna-cotta|Panna cotta|IT|220|3|20|14|1 portion=120|
roast-chicken-dinner|Roast chicken dinner with veg|HM|140|12|10|5.5|1 plate=500|sunday lunch
roast-beef-dinner|Roast beef dinner with veg|HM|150|12|12|6|1 plate=500|
cottage-pie|Cottage / shepherd's pie|HM|120|7|11|5.5|1 portion=350|
stew-beef|Beef stew with veg|HM|110|10|7|4.5|1 bowl=350|
chicken-stew|Chicken stew|HM|110|10|6|5|1 bowl=350|
chicken-a-la-king|Chicken à la king|HM|160|11|6|10|1 cup=240|
chicken-casserole|Chicken casserole|HM|130|12|6|6.5|1 cup=250|
mince-and-rice|Mince with rice|HM|160|9|18|5.5|1 plate=400|
mince-pasta|Mince and pasta|HM|165|9|19|6|1 plate=400|
fish-bake|Fish bake|HM|130|12|7|6|1 portion=300|
stir-fry-chicken|Chicken stir-fry with rice|HM|140|9|18|3.5|1 plate=400|
chicken-schnitzel|Chicken schnitzel|HM|240|18|12|13|1 schnitzel=180|
cordon-bleu|Chicken cordon bleu|HM|240|17|12|14|1 portion=200|
quiche|Quiche|HM|260|10|16|18|1 slice=150|
soup-chicken|Chicken noodle soup|HM|45|3.5|5|1.2|1 bowl=300||L
soup-butternut|Butternut soup|HM|60|1.2|9|2.3|1 bowl=300||L
soup-pea|Pea soup|HM|75|5|11|1.2|1 bowl=300||L
soup-lentil|Lentil soup|HM|70|4.5|10|1.5|1 bowl=300||L
soup-mushroom|Cream of mushroom soup|HM|65|1.5|6|4|1 bowl=300||L
sandwich-ham-cheese|Ham and cheese sandwich|HM|250|14|26|10|1 sandwich=150|
sandwich-chicken-mayo|Chicken mayo sandwich|HM|240|12|24|11|1 sandwich=180|
sandwich-egg-mayo|Egg mayo sandwich|HM|230|9|24|11|1 sandwich=170|
sandwich-pb|Peanut butter sandwich|HM|350|13|38|16|1 sandwich=100|
sandwich-pbj|Peanut butter and jam sandwich|HM|345|10|48|13|1 sandwich=120|
tuna-mayo|Tuna mayo|HM|190|15|1|14|½ cup=110|
chicken-salad-bowl|Chicken salad bowl|HM|110|12|5|5|1 bowl=350|
beef-wrap-home|Beef wrap|HM|210|12|20|9|1 wrap=250|
jollof|Jollof rice|AF|150|3|25|4|1 cup=200|
jollof-chicken|Jollof rice with chicken|AF|160|9|19|5.5|1 plate=450|
fufu|Fufu|AF|160|1.5|38|0.3|1 ball=250|
ugali|Ugali|AF|110|2.5|24|0.5|1 serving=250|nshima sadza
egusi|Egusi soup|AF|190|9|6|15|1 cup=250|
suya|Suya (spiced beef skewers)|AF|230|25|5|12|2 skewers=150|
injera|Injera|AF|130|4|27|0.7|1 injera=120|
doro-wat|Doro wat|AF|140|11|6|8|1 cup=250|
chakalaka-pap|Pap with chakalaka|AF|100|2.3|19|1.2|1 plate=400|
peri-peri-prawns|Peri-peri prawns|AF|140|18|2|7|10 prawns=150|
matapa|Matapa|AF|120|4|6|9|1 cup=200|
mandazi|Mandazi|AF|360|6|48|16|1 mandazi=60|
plantain-boiled|Plantain, boiled|AF|116|0.8|31|0.2|1 plantain=180|
whey|Whey protein powder|SU|400|78|9|6|1 scoop=30;2 scoops=60|shake supplement
whey-isolate|Whey isolate|SU|370|88|2|1|1 scoop=30|
casein|Casein protein|SU|360|80|6|2|1 scoop=33|
plant-protein|Plant protein powder|SU|380|75|8|6|1 scoop=30|vegan pea
mass-gainer|Mass gainer|SU|380|18|70|3|1 serving=100|
creatine|Creatine|SU|0|0|0|0|1 scoop=5|
bcaa|BCAA drink|SU|10|2.5|0|0|1 serving=10|
collagen|Collagen powder|SU|360|90|0|0|1 scoop=10|
pre-workout|Pre-workout|SU|20|0|5|0|1 scoop=10|
protein-yoghurt|High-protein yoghurt|SU|65|10|5|0.5|1 tub=150|
protein-pudding|Protein pudding|SU|85|10|8|1.5|1 pot=200|
protein-cookie|Protein cookie|SU|400|20|45|16|1 cookie=75|
kfc-original-recipe-thigh|KFC Original Recipe thigh|RS|267|16.2|3.8|19.0|1 piece=105|kfc thigh original recipe streetwise piece
kfc-original-recipe-drumstick|KFC Original Recipe drumstick|RS|264|20.4|10.9|15.1|1 piece=75|kfc drumstick original recipe leg piece
kfc-original-recipe-breast|KFC Original Recipe breast|RS|221|20.9|6.7|12.9|1 piece=163|kfc breast original recipe piece
kfc-original-recipe-wing|KFC Original Recipe wing|RS|267|20.0|8.9|15.6|1 piece=45|kfc wing original recipe piece
kfc-zinger-wings-4|KFC Zinger wings (4)|RS|408|29.3|19.3|23.0|4 wings=88;1 wing=22|kfc zinger wings hot wings spicy
kfc-dunked-wings-4|KFC Dunked wings (4)|RS|372|21.1|19.1|23.0|4 wings=110;1 wing=28|kfc dunked wings sauce
kfc-streetwise-2-chips|KFC Streetwise 2 with chips|RS|212|11.2|16.7|10.8|1 meal=250|kfc streetwise two 2 chips
kfc-streetwise-2-pap|KFC Streetwise 2 with pap|RS|165|9.1|16.3|6.7|1 meal=350|kfc streetwise two 2 pap
kfc-streetwise-3-chips|KFC Streetwise 3 with chips|RS|237|16.1|15.3|12.0|1 meal=330|kfc streetwise three 3 chips
kfc-streetwise-3-pap|KFC Streetwise 3 with regular pap|RS|188|13.4|15.1|7.8|1 meal=430|kfc streetwise three 3 pap
kfc-zinger-burger|KFC Zinger burger|RS|236|16.9|16.5|10.9|1 burger=200|kfc zinger burger spicy fillet
kfc-colonel-burger|KFC Colonel burger|RS|218|16.8|20.0|7.7|1 burger=190|kfc colonel burger original fillet
kfc-crunch-burger|KFC Crunch burger|RS|244|11.3|16.8|14.3|1 burger=160|kfc crunch burger
kfc-double-crunch-burger|KFC Double Crunch burger|RS|267|15.0|19.1|14.2|1 burger=230|kfc double crunch burger
kfc-streetwise-burger|KFC Streetwise burger|RS|220|9.3|25.0|9.3|1 burger=140|kfc streetwise burger
kfc-snack-burger|KFC Snack burger|RS|292|15.5|37.5|8.2|1 burger=80|kfc snack burger
kfc-classic-twister|KFC Classic Twister wrap|RS|174|9.9|18.7|6.2|1 twister=200|kfc twister wrap classic
kfc-pops-small|KFC Pops popcorn chicken (small)|RS|218|20.6|12.1|8.6|1 small=80|kfc pops popcorn chicken small
kfc-pops-large|KFC Pops popcorn chicken (large)|RS|219|20.7|12.1|8.7|1 large=165|kfc pops popcorn chicken large
kfc-crispy-strips-3|KFC Crispy strips (3)|RS|230|20.1|10.3|12.1|3 strips=151;1 strip=50|kfc crispy strips tenders
kfc-chips-small|KFC chips (small)|RS|380|7.1|41.2|19.0|1 small=51|kfc chips fries small
kfc-chips-regular|KFC chips (regular)|RS|380|4.7|47.2|18.4|1 regular=88|kfc chips fries regular
kfc-coleslaw-regular|KFC coleslaw (regular)|RS|106|1.6|12.0|5.8|1 regular=100|kfc coleslaw slaw
kfc-mash-gravy-regular|KFC mash and gravy (regular)|RS|75|1.9|10.7|2.5|1 regular=150|kfc mash gravy mashed potato
kfc-mini-loaf|KFC mini loaf|RS|280|12.0|48.6|3.0|1 loaf=70|kfc mini loaf bread roll
nandos-quarter-chicken|Nando's 1/4 chicken, flame-grilled|RS|206|27.7|0.0|10.5|1/4 chicken=200|nandos quarter chicken peri peri flame grilled
nandos-half-chicken|Nando's 1/2 chicken, flame-grilled|RS|223|26.0|0.0|13.2|1/2 chicken=400|nandos half chicken peri peri
nandos-full-chicken|Nando's full chicken, flame-grilled|RS|223|26.0|0.0|13.2|1 full chicken=800|nandos full whole chicken peri peri
nandos-winglets|Nando's winglets|RS|234|26.3|1.0|12.5|6 winglets=150;10 winglets=250|nandos winglets wings peri peri
nandos-chicken-wrap|Nando's chicken wrap|RS|152|13.0|14.0|5.0|1 wrap=300|nandos chicken wrap
nandos-chicken-pita|Nando's chicken pita|RS|163|12.0|16.0|6.0|1 pita=280|nandos chicken pita
nandos-chicken-burger|Nando's chicken burger|RS|168|15.0|12.0|5.0|1 burger=250|nandos chicken burger prego
nandos-grande-cheese-burger|Nando's Grande cheese burger|RS|165|11.4|16.3|5.8|1 burger=350|nandos grande cheese burger
nandos-peri-chips-single|Nando's PERi-PERi chips|RS|203|3.0|27.0|10.0|1 single=150;1 sharing=350|nandos peri peri chips fries
nandos-peri-wedges-single|Nando's PERi-PERi wedges|RS|174|3.0|23.0|8.0|1 single=150;1 sharing=350|nandos peri peri wedges
nandos-spicy-rice-single|Nando's spicy rice|RS|150|3.0|25.9|3.1|1 single=150;1 sharing=340|nandos spicy rice
nandos-coleslaw-single|Nando's coleslaw|RS|80|3.0|7.0|4.0|1 single=150|nandos coleslaw slaw
nandos-casa-pap-single|Nando's casa pap and relish|RS|164|4.0|28.0|4.0|1 single=200|nandos pap relish casa pap
nandos-mac-n-cheese-single|Nando's mac n cheese|RS|146|5.3|18.5|5.2|1 single=220;1 sharing=390|nandos mac and cheese macaroni
nandos-peri-tato-salad|Nando's PERi-tato salad|RS|195|3.0|18.0|12.0|1 single=150|nandos potato salad peri tato
nandos-portuguese-roll|Nando's Portuguese roll|RS|238|7.7|45.7|2.1|1 roll=81|nandos portuguese roll bread
nandos-hot-pot-spicy-rice|Nando's hot pot with spicy rice|RS|153|8.0|13.0|7.0|1 hot pot=420|nandos hotpot hot pot spicy rice
nandos-strips-spicy-rice|Nando's chicken strips and spicy rice|RS|151|10.0|17.0|5.0|1 meal=350|nandos chicken strips spicy rice
nandos-boujee-bowl-corn-strips|Nando's roasted corn and red pepper Boujee Bowl with chicken strips|RS|126|12.0|12.0|3.0|1 bowl=330|nandos boujee bowl corn chicken strips
nandos-hot-peri-peri-sauce|Nando's Hot PERi-PERi sauce|RS|56|0.8|2.0|4.7|1 tbsp=15|nandos hot peri peri sauce
chickenlicken-thigh|Chicken Licken thigh|RS|150|16.4|5.5|8.2|1 piece=110|chicken licken thigh piece soul
chickenlicken-fries|Chicken Licken fries (12 fries)|RS|242|4.0|36.0|12.0|12 fries=50|chicken licken chips fries
pedros-chips-regular|Pedros chips (regular)|RS|240|2.0|30.0|12.0|1 regular=100|pedros pedro's chips fries
pedros-chicken-wrap|Pedros chicken wrap|RS|196|8.0|19.2|10.0|1 wrap=250|pedros pedro's chicken wrap
pedros-fully-loaded-wrap|Pedros fully loaded wrap|RS|190|8.7|17.3|10.7|1 wrap=300|pedros pedro's fully loaded wrap
pedros-slaw-wrap|Pedros slaw wrap|RS|156|4.8|16.8|7.2|1 wrap=250|pedros pedro's slaw wrap
pedros-strips-spicy-rice|Pedros strips and spicy rice|RS|166|9.1|13.7|7.7|1 meal=350|pedros pedro's chicken strips spicy rice
pedros-strips-chips|Pedros strips and chips|RS|215|10.3|17.3|12.1|1 meal=330|pedros pedro's chicken strips chips
pedros-livers-roll|Pedros chicken livers and roll|RS|180|10.0|15.2|8.8|1 serving=250|pedros pedro's chicken livers roll
mcd-big-mac|McDonald's Big Mac|RS|253|12.6|21.8|12.4|1 burger=215|mcdonalds mcd maccies mcds macdonalds big mac
mcd-cheeseburger|McDonald's Cheeseburger|RS|275|13.6|28.3|11.4|1 burger=118|mcdonalds mcd maccies mcds macdonalds cheeseburger
mcd-double-cheeseburger|McDonald's Double Cheeseburger|RS|260|14.7|20.5|13.0|1 burger=165|mcdonalds mcd maccies mcds macdonalds double cheeseburger
mcd-hamburger|McDonald's Hamburger|RS|265|12.8|31.3|9.3|1 burger=104|mcdonalds mcd maccies mcds macdonalds hamburger
mcd-quarter-pounder-cheese|McDonald's Quarter Pounder with Cheese|RS|232|13.7|19.6|10.5|1 burger=190|mcdonalds mcd maccies mcds macdonalds quarter pounder qpc
mcd-mcfeast|McDonald's McFeast|RS|282|16.9|14.9|17.6|1 burger=300|mcdonalds mcd maccies mcds macdonalds mcfeast
mcd-mcchicken|McDonald's McChicken|RS|254|10.4|28.8|10.2|1 burger=170|mcdonalds mcd maccies mcds macdonalds mcchicken chicken burger
mcd-chicken-burger|McDonald's Chicken Burger|RS|218|9.7|20.8|8.3|1 burger=130|mcdonalds mcd maccies mcds macdonalds chicken burger
mcd-mccrispy|McDonald's McCrispy|RS|293|10.2|12.0|17.3|1 burger=210|mcdonalds mcd maccies mcds macdonalds mccrispy crispy chicken
mcd-snackwrap|McDonald's SnackWrap|RS|238|9.2|19.6|13.7|1 wrap=120|mcdonalds mcd maccies mcds macdonalds snack wrap chicken wrap
mcd-nuggets-6|McDonald's Chicken McNuggets 6 piece|RS|248|16.5|14.9|13.1|6 nuggets=96;4 nuggets=64;1 nugget=16|mcdonalds mcd maccies mcds macdonalds mcnuggets nuggets
mcd-fries|McDonald's Fries|RS|293|4.5|35.1|14.3|medium=114;small=80;large=150|mcdonalds mcd maccies mcds macdonalds fries chips
mcd-egg-mcmuffin|McDonald's Egg McMuffin|RS|169|10.4|19.6|5.5|1 muffin=130|mcdonalds mcd maccies mcds macdonalds egg mcmuffin breakfast
mcd-sausage-egg-mcmuffin|McDonald's Sausage McMuffin with Egg|RS|202|13.9|15.7|9.2|1 muffin=165|mcdonalds mcd maccies mcds macdonalds sausage egg mcmuffin breakfast
mcd-boerie-burger|McDonald's Boerie Burger|RS|211|9.5|23.2|8.5|1 burger=130|mcdonalds mcd maccies mcds macdonalds boerie burger boerewors breakfast
mcd-hash-brown|McDonald's Hash Brown|RS|230|2.6|22.2|13.8|1 hash brown=50|mcdonalds mcd maccies mcds macdonalds hash brown hashbrown breakfast
mcd-chocolate-shake|McDonald's Chocolate Shake|RS|108|2.2|14.4|3.5|1 medium=330|mcdonalds mcd maccies mcds macdonalds chocolate milkshake shake|L
mcd-oreo-mcflurry|McDonald's Oreo McFlurry|RS|191|3.3|30.0|6.1|1 mcflurry=180|mcdonalds mcd maccies mcds macdonalds mcflurry oreo
mcd-kitkat-mcflurry|McDonald's McFlurry with KitKat|RS|243|3.0|36.0|9.3|1 mcflurry=200|mcdonalds mcd maccies mcds macdonalds mcflurry kitkat kit kat
mcd-caramel-sundae|McDonald's Caramel Sundae|RS|195|3.0|33.9|5.5|1 sundae=165|mcdonalds mcd maccies mcds macdonalds caramel sundae
mcd-apple-pie|McDonald's Apple Pie|RS|294|2.5|33.8|16.2|1 pie=80|mcdonalds mcd maccies mcds macdonalds apple pie
steers-burger|Steers Burger|RS|195|13.6|14.6|9.1|1 burger=185|steers steers burger original
steers-cheese-burger|Steers Cheese Burger|RS|202|13.2|15.0|9.9|1 burger=200|steers cheeseburger
steers-king-steer|Steers King Steer burger|RS|218|16.4|9.3|13.0|1 burger=300|steers king steer
steers-big-bacon-king-steer|Steers Big Bacon King Steer burger|RS|233|14.2|9.4|15.6|1 burger=360|steers big bacon king steer
steers-bacon-cheese-burger|Steers Bacon and Cheese burger|RS|233|11.8|22.4|11.2|1 burger=330|steers bacon cheese burger
steers-rave-burger|Steers Rave burger|RS|188|12.0|15.2|8.1|1 burger=210|steers rave burger
steers-prince-burger|Steers Prince burger|RS|211|15.4|13.6|10.5|1 burger=140|steers prince burger kids
steers-cheesy-bbq-double-phanda|Steers Cheesy BBQ Double Phanda|RS|239|14.2|18.4|13.2|1 burger=190|steers phanda double phanda cheesy bbq
steers-chicken-burger|Steers Chicken burger|RS|165|12.6|18.8|4.3|1 burger=170|steers chicken burger
steers-veggie-burger|Steers Veggie burger|RS|177|10.3|19.0|6.6|1 burger=200|steers veggie burger vegetarian
steers-quarter-chicken|Steers Quarter Chicken flame grilled|RS|170|16.2|3.9|10.0|1 quarter=200|steers quarter chicken flame grilled
steers-chips-medium|Steers Chips medium|RS|278|5.4|30.0|15.4|medium=130|steers chips fries hand cut
steers-chocolate-milkshake|Steers Chocolate Milkshake|RS|70|1.8|10.5|2.4|1 shake=250|steers chocolate milkshake shake|L
steers-caramel-dip-cone|Steers Ice Cream Caramel Dip|RS|227|0.2|29.9|12.1|1 cone=130|steers caramel dip ice cream cone
steers-ice-cream-swirl|Steers Classic Ice Cream Swirl|RS|188|2.8|26.2|8.3|1 serving=100|steers soft serve swirl ice cream
steers-plain-cone|Steers Plain Cone|RS|176|5.0|26.2|6.2|1 cone=80|steers cone soft serve ice cream
bk-whopper|Burger King Whopper|RS|218|12.8|19.6|9.7|1 burger=260|burger king bk whopper
bk-whopper-cheese|Burger King Whopper with Cheese|RS|231|13.6|18.9|11.2|1 burger=280|burger king bk whopper cheese
bk-double-whopper|Burger King Double Whopper|RS|210|16.1|14.5|9.7|1 burger=350|burger king bk double whopper
bk-double-whopper-cheese|Burger King Double Whopper with Cheese|RS|220|16.5|14.3|10.8|1 burger=370|burger king bk double whopper cheese
bk-whopper-jr|Burger King Whopper Junior|RS|199|10.3|22.4|7.9|1 burger=150|burger king bk whopper jr junior
bk-cheeseburger|Burger King Cheeseburger|RS|218|13.9|26.4|6.4|1 burger=125|burger king bk cheeseburger
bk-big-king|Burger King Big King|RS|194|13.0|16.2|8.0|1 burger=200|burger king bk big king
bk-bacon-king|Burger King Bacon King|RS|298|21.5|15.5|16.7|1 burger=330|burger king bk bacon king
bk-chicken-burger|Burger King Chicken Burger|RS|199|10.4|25.8|6.5|1 burger=140|burger king bk chicken burger
bk-original-chicken|Burger King Original Chicken Sandwich|RS|282|12.3|23.8|14.6|1 burger=210|burger king bk original chicken sandwich long chicken
bk-crispy-chicken|Burger King Crispy Chicken|RS|280|9.8|30.0|13.5|1 burger=200|burger king bk crispy chicken burger
bk-long-chilli-cheese|Burger King Extra Long Chilli Cheese|RS|273|17.3|18.7|14.2|1 sandwich=230|burger king bk extra long chilli cheese
bk-nuggets-6|Burger King Chicken Nuggets 6 piece|RS|271|12.5|16.7|16.7|6 nuggets=96;1 nugget=16|burger king bk nuggets
bk-wings-6|Burger King Chicken Wings 6 piece|RS|235|27.7|0.3|13.7|6 wings=180|burger king bk wings chicken wings
bk-chilli-cheese-bites|Burger King Chilli Cheese Bites 4 piece|RS|258|8.5|17.5|17.0|4 bites=80|burger king bk chilli cheese bites
bk-mozzarella-sticks|Burger King Mozzarella Cheese Sticks 4 piece|RS|296|11.2|27.8|15.1|4 sticks=140|burger king bk mozzarella sticks cheese
bk-fries|Burger King Fries|RS|152|1.5|21.2|6.5|medium=110;small=90;large=165|burger king bk fries chips
bk-loaded-fries|Burger King Loaded Fries|RS|211|2.3|20.6|13.3|1 serving=180|burger king bk loaded fries nacho cheese
bk-nutella-fusion|Burger King Nutella Fusion|RS|242|3.6|32.5|11.0|1 fusion=170|burger king bk king fusion nutella ice cream
wimpy-mega-breakfast|Wimpy Mega Breakfast|RS|225|9.9|12.9|14.5|1 breakfast=550|wimpy mega breakfast
wimpy-early-bird-breakfast|Wimpy Early Bird Breakfast|RS|201|10.7|7.6|14.2|1 breakfast=250|wimpy early bird breakfast
wimpy-streaky-bacon-breakfast|Wimpy Streaky Bacon Breakfast|RS|192|7.7|15.3|10.6|1 breakfast=300|wimpy streaky bacon breakfast
wimpy-breakfast-bun|Wimpy Breakfast Bun|RS|190|13.4|18.6|6.2|1 bun=194|wimpy breakfast bun
wimpy-burger|Wimpy Burger|RS|210|12.7|16.5|9.7|1 burger=200|wimpy wimpy burger classic
wimpy-cheese-burger|Wimpy Cheese Burger|RS|231|13.4|15.5|11.3|1 burger=220|wimpy cheeseburger
wimpy-chicken-fillet-burger|Wimpy Chicken Fillet Burger|RS|196|13.5|15.2|8.5|1 burger=210|wimpy chicken fillet burger
wimpy-dagwood|Wimpy Dagwood toasted sandwich|RS|230|13.5|14.0|12.9|1 sandwich=350|wimpy dagwood toastie toasted
wimpy-chicken-mayo-toastie|Wimpy Chicken Mayonnaise toasted sandwich|RS|240|11.8|16.0|13.9|1 sandwich=200|wimpy chicken mayo toastie toasted
wimpy-mince-cheese-toastie|Wimpy Toasted Mince and Cheese|RS|248|13.1|16.9|14.2|1 sandwich=200|wimpy mince cheese toastie toasted
wimpy-cheese-tomato-toastie|Wimpy Cheese and Tomato toasted sandwich|RS|230|8.6|19.4|12.6|1 sandwich=160|wimpy cheese tomato toastie toasted
wimpy-club-sandwich|Wimpy Club Sandwich|RS|233|13.3|18.5|13.1|1 sandwich=330|wimpy club sandwich
wimpy-chicken-wrap|Wimpy Creamy Mayo Grilled Chicken Wrap|RS|177|11.9|11.7|8.7|1 wrap=230|wimpy chicken wrap
wimpy-chips-small|Wimpy Chips small|RS|257|3.3|27.8|14.4|small=90|wimpy chips fries
wimpy-chocolate-milkshake|Wimpy Chocolate Milkshake|RS|177|3.4|16.0|9.7|1 regular=350|wimpy chocolate milkshake shake|L
wimpy-bar-one-milkshake|Wimpy Bar-One Milkshake|RS|185|3.8|16.9|11.2|1 regular=350|wimpy bar one milkshake shake|L
wimpy-cappuccino|Wimpy Cappuccino|RS|46|2.2|4.2|2.3|1 cup=240|wimpy cappuccino coffee|L
wimpy-coffee|Wimpy Famous Wimpy Coffee|RS|26|1.3|2.0|1.4|1 regular=250|wimpy coffee famous wimpy coffee|L
debonairs-margherita-medium|Debonairs Margherita pizza (medium)|RS|261|12.5|35.6|7.8|1 slice (medium)=50;2 slices=100;whole medium (6 slices)=300|debonairs debs debonair pizza margherita cheese
debonairs-margherita-large|Debonairs Margherita pizza (large)|RS|254|12.4|33.7|7.8|1 slice (large)=65;2 slices=130;whole large (8 slices)=520|debonairs debs debonair pizza margherita cheese
debonairs-pepperoni-medium|Debonairs Pepperoni pizza (medium)|RS|309|14.1|31.7|13.9|1 slice (medium)=55;2 slices=110;whole medium (6 slices)=330|debonairs debs debonair pizza pepperoni
debonairs-pepperoni-large|Debonairs Pepperoni pizza (large)|RS|302|14.0|30.3|13.8|1 slice (large)=71;2 slices=142;whole large (8 slices)=568|debonairs debs debonair pizza pepperoni
debonairs-something-meaty-medium|Debonairs Something Meaty pizza (medium)|RS|321|19.2|33.0|12.6|1 slice (medium)=57;2 slices=114;whole medium (6 slices)=342|debonairs debs debonair pizza something meaty
debonairs-something-meaty-large|Debonairs Something Meaty pizza (large)|RS|303|18.4|31.5|11.6|1 slice (large)=75;2 slices=150;whole large (8 slices)=600|debonairs debs debonair pizza something meaty
debonairs-hawaiian-medium|Debonairs Hawaiian pizza (medium)|RS|267|15.9|33.6|8.1|1 slice (medium)=57;2 slices=114;whole medium (6 slices)=342|debonairs debs debonair pizza hawaiian ham pineapple
debonairs-hawaiian-large|Debonairs Hawaiian pizza (large)|RS|260|15.9|31.7|8.2|1 slice (large)=75;2 slices=150;whole large (8 slices)=600|debonairs debs debonair pizza hawaiian ham pineapple
debonairs-chicken-mushroom-medium|Debonairs Chicken & Mushroom pizza (medium)|RS|295|14.3|35.7|10.5|1 slice (medium)=55;2 slices=110;whole medium (6 slices)=330|debonairs debs debonair pizza chicken and mushroom
debonairs-chicken-mushroom-large|Debonairs Chicken & Mushroom pizza (large)|RS|278|14.0|33.2|9.8|1 slice (large)=72;2 slices=144;whole large (8 slices)=576|debonairs debs debonair pizza chicken and mushroom
debonairs-bbq-chicken-medium|Debonairs BBQ Chicken pizza (medium)|RS|255|13.6|33.6|7.3|1 slice (medium)=55;2 slices=110;whole medium (6 slices)=330|debonairs debs debonair pizza bbq chicken barbecue
debonairs-bbq-chicken-large|Debonairs BBQ Chicken pizza (large)|RS|249|13.4|32.1|7.3|1 slice (large)=72;2 slices=144;whole large (8 slices)=576|debonairs debs debonair pizza bbq chicken barbecue
debonairs-club-large|Debonairs Club pizza (large)|RS|302|18.0|31.3|11.8|1 slice (large)=75;2 slices=150;whole large (8 slices)=600|debonairs debs debonair pizza club
debonairs-tikka-chicken-large|Debonairs Tikka Chicken pizza (large)|RS|256|14.1|32.7|7.4|1 slice (large)=72;2 slices=144;whole large (8 slices)=576|debonairs debs debonair pizza tikka chicken
debonairs-sweet-chilli-chicken-large|Debonairs Sweet Chilli Chicken pizza (large)|RS|283|15.2|33.0|10.0|1 slice (large)=72;2 slices=144;whole large (8 slices)=576|debonairs debs debonair pizza sweet chilli chicken
debonairs-meaty-triple-decker-large|Debonairs Meaty Triple-Decker pizza (large)|RS|258|12.9|30.3|9.3|1 slice (large)=137;2 slices=274;whole large (8 slices)=1096|debonairs debs debonair pizza meaty triple decker tripledecker
debonairs-creamy-chicken-triple-decker-large|Debonairs Creamy Chicken Triple-Decker pizza (large)|RS|241|10.8|29.0|8.7|1 slice (large)=137;2 slices=274;whole large (8 slices)=1096|debonairs debs debonair pizza creamy chicken triple decker tripledecker
debonairs-bbq-wings|Debonairs BBQ wings|RS|173|8.8|13.2|9.4|1 wing=45;2 wings=90;4 wings=180;6 wings=270|debonairs debs debonair pizza chicken wings bbq side
debonairs-peri-peri-wings|Debonairs Peri-Peri wings|RS|196|9.0|4.0|16.0|1 wing=45;2 wings=90;4 wings=180;6 wings=270|debonairs debs debonair pizza chicken wings peri peri side
debonairs-death-by-chocolate|Debonairs Death by Chocolate dessert|RS|327|3.5|30.2|21.3|1 portion (quarter)=100;half=200;whole (serves 4)=400|debonairs debs debonair pizza death by chocolate pudding dessert
romans-chicken-mayo-feta-medium|Roman's Chicken N Mayo Feta pizza (medium)|RS|295|16.6|21.9|15.7|1 slice (medium)=67;2 slices=134;whole medium (6 slices)=402|romans roman's pizza roman chicken and mayo chicken mayo feta
romans-chicken-mayo-feta-large|Roman's Chicken N Mayo Feta pizza (large)|RS|282|16.0|21.8|14.6|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman chicken and mayo chicken mayo feta
romans-chicken-mayo-bacon-large|Roman's Chicken N Mayo Bacon pizza (large)|RS|275|16.9|21.9|13.3|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman chicken and mayo chicken mayo bacon
romans-chicken-mayo-feta-large-pan|Roman's Chicken N Mayo Feta pizza (large, pan base)|RS|267|14.5|24.3|12.4|1 slice (large pan)=110;2 slices=220;whole large pan (8 slices)=880|romans roman's pizza roman chicken and mayo chicken mayo feta pan
romans-pepperoni-deluxe-large|Roman's Pepperoni Deluxe pizza (large)|RS|223|13.0|21.9|9.3|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman pepperoni deluxe
romans-hawaiian-large|Roman's Hawaiian pizza (large)|RS|229|12.4|23.8|9.4|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman hawaiian ham pineapple
romans-four-in-one-large|Roman's Four in One pizza (large)|RS|265|16.3|23.5|11.8|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman four in one 4 in 1
romans-bbq-chicken-supreme-medium|Roman's BBQ Chicken Supreme pizza (medium)|RS|221|14.2|22.4|8.2|1 slice (medium)=67;2 slices=134;whole medium (6 slices)=402|romans roman's pizza roman bbq chicken supreme barbecue
romans-bbq-chicken-supreme-large|Roman's BBQ Chicken Supreme pizza (large)|RS|220|14.1|22.1|8.3|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman bbq chicken supreme barbecue
romans-peri-peri-chicken-large|Roman's Peri-Peri Chicken pizza (large)|RS|221|13.9|22.6|8.3|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman peri peri chicken
romans-fetaroni-large|Roman's Fetaroni pizza (large)|RS|276|15.4|21.8|14.2|1 slice (large)=90;2 slices=180;whole large (8 slices)=720|romans roman's pizza roman fetaroni feta pepperoni
romans-margherita-small|Roman's Margherita pizza (small)|RS|253|12.7|22.7|12.3|1 slice (small)=55;2 slices=110;whole small (4 slices)=220|romans roman's pizza roman margherita cheese
romans-margherita-large-pan|Roman's Margherita pizza (large, pan base)|RS|215|9.9|24.4|8.5|1 slice (large pan)=110;2 slices=220;whole large pan (8 slices)=880|romans roman's pizza roman margherita cheese pan
pizzahut-pepperoni-large-pan|Pizza Hut Pepperoni pizza (large pan)|RS|281|10.9|28.1|14.1|1 slice (large pan)=128;2 slices=256;whole large pan (8 slices)=1024|pizza hut pizzahut hut pepperoni large pan
pizzahut-cheese-large-pan|Pizza Hut Cheese pizza (large pan)|RS|271|11.6|28.7|12.4|1 slice (large pan)=129;2 slices=258;whole large pan (8 slices)=1032|pizza hut pizzahut hut cheese margherita large pan
pizzahut-meat-lovers-large-pan|Pizza Hut Meat Lover's pizza (large pan)|RS|281|11.2|23.1|15.6|1 slice (large pan)=160;2 slices=320;whole large pan (8 slices)=1280|pizza hut pizzahut hut meat lovers meaty large pan
pizzahut-super-supreme-large-pan|Pizza Hut Super Supreme pizza (large pan)|RS|241|10.1|23.4|12.0|1 slice (large pan)=158;2 slices=316;whole large pan (8 slices)=1264|pizza hut pizzahut hut super supreme large pan
pizzahut-veggie-lovers-large-pan|Pizza Hut Veggie Lover's pizza (large pan)|RS|220|8.7|25.3|9.3|1 slice (large pan)=150;2 slices=300;whole large pan (8 slices)=1200|pizza hut pizzahut hut veggie lovers vegetarian large pan
pizzahut-hawaiian-chicken-large-pan|Pizza Hut Hawaiian Chicken pizza (large pan)|RS|252|11.9|28.1|10.4|1 slice (large pan)=135;2 slices=270;whole large pan (8 slices)=1080|pizza hut pizzahut hut hawaiian chicken pineapple large pan
pizzahut-bbq-chicken-large-pan|Pizza Hut BBQ Chicken pizza (large pan)|RS|274|11.1|31.1|11.1|1 slice (large pan)=135;2 slices=270;whole large pan (8 slices)=1080|pizza hut pizzahut hut bbq chicken barbecue large pan
pizzahut-pepperoni-medium-pan|Pizza Hut Pepperoni pizza (medium pan)|RS|278|11.1|31.1|12.2|1 slice (medium pan)=90;2 slices=180;whole medium pan (8 slices)=720|pizza hut pizzahut hut pepperoni medium pan
pizzahut-cheese-medium-pan|Pizza Hut Cheese pizza (medium pan)|RS|264|11.0|30.8|11.0|1 slice (medium pan)=91;2 slices=182;whole medium pan (8 slices)=728|pizza hut pizzahut hut cheese margherita medium pan
pizzahut-meat-lovers-medium-pan|Pizza Hut Meat Lover's pizza (medium pan)|RS|274|11.5|24.8|15.0|1 slice (medium pan)=113;2 slices=226;whole medium pan (8 slices)=904|pizza hut pizzahut hut meat lovers meaty medium pan
pizzahut-super-supreme-medium-pan|Pizza Hut Super Supreme pizza (medium pan)|RS|232|9.8|25.0|10.7|1 slice (medium pan)=112;2 slices=224;whole medium pan (8 slices)=896|pizza hut pizzahut hut super supreme medium pan
pizzahut-pepperoni-large-thin|Pizza Hut Pepperoni pizza (large thin crust)|RS|314|15.1|33.7|14.0|1 slice (large thin)=86;2 slices=172;whole large thin (8 slices)=688|pizza hut pizzahut hut pepperoni large thin crispy
pizzahut-pepperoni-large-stuffed-crust|Pizza Hut Pepperoni pizza (large stuffed crust)|RS|254|11.2|26.1|11.2|1 slice (large stuffed crust)=134;2 slices=268;whole large stuffed crust (8 slices)=1072|pizza hut pizzahut hut pepperoni large stuffed crust
pizzahut-cheese-large-stuffed-crust|Pizza Hut Cheese pizza (large stuffed crust)|RS|235|11.4|26.5|9.1|1 slice (large stuffed crust)=132;2 slices=264;whole large stuffed crust (8 slices)=1056|pizza hut pizzahut hut cheese margherita large stuffed crust
spur-original-beef-burger|Spur Original beef burger with chips|RS|208|13.3|15.0|10.2|1 burger with chips=550|spur spur steak ranches original spur burger beef burger
spur-cheese-burger|Spur Beef cheese burger with chips|RS|216|13.8|14.0|11.3|1 burger with chips=570|spur spur steak ranches cheeseburger
spur-cheddamelt-burger|Spur Cheddamelt burger (mushroom sauce) with chips|RS|206|10.7|11.0|13.4|1 burger with chips=620|spur spur steak ranches cheddamelt cheddar melt burger
spur-bacon-cheese-burger|Spur Beef bacon and cheese burger with chips|RS|255|17.0|12.0|15.1|1 burger with chips=590|spur spur steak ranches bacon cheese burger
spur-rib-burger|Spur Rib burger with chips|RS|252|13.4|17.0|14.2|1 burger with chips=580|spur spur steak ranches rib burger pork rib burger
spur-grilled-chicken-burger|Spur Original grilled chicken burger with chips|RS|163|11.3|15.0|6.1|1 burger with chips=520|spur spur steak ranches chicken burger
spur-chicken-strips|Spur Chicken strips starter|RS|192|12.1|18.0|7.7|1 portion=200|spur spur steak ranches chicken strips chicken tenders
spur-nachos-mexicana|Spur Nachos Mexicana full|RS|215|6.6|20.0|11.4|1 full portion=450;half portion=250|spur spur steak ranches nachos
spur-crumbed-mushrooms|Spur Crumbed mushrooms starter|RS|160|4.6|12.0|10.3|1 portion=200|spur spur steak ranches crumbed mushrooms
spur-ranch-breakfast|Spur Ranch breakfast pork sausage white toast|RS|172|9.7|13.0|8.7|1 breakfast=400|spur spur steak ranches ranch breakfast spur breakfast
spur-chips|Spur Chips|RS|252|3.4|30.3|12.7|1 portion=170|spur spur steak ranches spur chips fries
spur-onion-rings|Spur Onion rings|RS|273|4.5|20.0|20.9|1 portion=120|spur spur steak ranches onion rings
ob-fish-and-chips|Ocean Basket Famous fish and chips (hake)|RS|156|9.0|12.5|7.6|1 meal=420|ocean basket oceanbasket ob hake and chips fish n chips
ob-calamari-steak|Ocean Basket Calamari steak|RS|168|14.6|4.4|9.8|1 portion=250|ocean basket oceanbasket ob calamari steak
ob-calamari-grilled|Ocean Basket Calamari strips grilled|RS|159|15.7|3.3|8.8|1 portion=220|ocean basket oceanbasket ob calamari grilled calamari
ob-seafood-platter-one|Ocean Basket Seafood platter for one|RS|188|14.5|3.8|12.4|1 platter=600|ocean basket oceanbasket ob seafood platter platter for one
ob-fusion-crunch-platter|Ocean Basket Fusion crunch sushi platter|RS|155|4.0|15.8|6.9|1 platter=600|ocean basket oceanbasket ob sushi platter fusion crunch
ob-chans-platter|Ocean Basket Chans sushi platter 12 pieces|RS|149|4.7|18.7|4.3|12 pieces=300|ocean basket oceanbasket ob chans platter sushi
ob-salmon-california-rolls|Ocean Basket Salmon California rolls 4 pieces|RS|184|7.6|18.6|7.1|4 pieces=120;1 piece=30|ocean basket oceanbasket ob california roll sushi salmon roll
ob-prince-prawns|Ocean Basket Prince prawns 12|RS|121|14.3|0.3|6.9|12 prawns=350|ocean basket oceanbasket ob prawns prince prawns
ob-chips|Ocean Basket Chips full portion|RS|229|3.2|26.4|11.1|1 portion=200|ocean basket oceanbasket ob chips fries
fishaways-hake-and-chips|Fishaways Fried medium hake and chips|RS|215|6.7|14.6|14.2|1 meal=400|fishaways fish aways hake and chips fish and chips
fishaways-medium-chips|Fishaways Medium chips|RS|232|2.5|21.9|14.6|1 medium=237|fishaways fish aways chips fries
fishaways-hake-wrap|Fishaways Hake wrap|RS|180|7.3|22.7|6.5|1 wrap=280|fishaways fish aways hake wrap
fishaways-crunchy-hake-roll|Fishaways Crunchy hake roll|RS|204|10.4|22.9|6.3|1 roll=200|fishaways fish aways hake burger hake roll fish burger
fishaways-hake-rice-chips-coleslaw|Fishaways Small hake rice chips and coleslaw combo fried|RS|194|4.5|14.0|13.6|1 combo=450|fishaways fish aways hake combo hake rice chips
fishaways-grilled-hake-rice|Fishaways Large grilled hake and rice|RS|113|8.1|10.1|4.4|1 meal=450|fishaways fish aways grilled hake hake and rice
fishaways-fried-fish-fillet|Fishaways Fried battered fish fillet|RS|191|16.0|6.4|10.9|1 fillet=140|fishaways fish aways battered fish hake fillet
mb-blueberry-muffin|Mugg & Bean Blueberry muffin|RS|332|9.4|30.0|19.4|1 muffin=160|mugg and bean mugg & bean m&b mugg n bean blueberry muffin
mb-choc-chip-muffin|Mugg & Bean Choc-chip muffin|RS|364|9.4|32.9|21.8|1 muffin=170|mugg and bean mugg & bean m&b mugg n bean chocolate chip muffin
mb-eggs-benedict|Mugg & Bean South African eggs benedict single|RS|223|10.3|11.1|15.1|1 plate=350|mugg and bean mugg & bean m&b mugg n bean eggs benedict breakfast
mb-hearty-grill-breakfast|Mugg & Bean Hearty grill breakfast rye toast|RS|223|12.9|10.7|14.2|1 breakfast=550|mugg and bean mugg & bean m&b mugg n bean hearty grill big breakfast
mb-baked-cheesecake|Mugg & Bean Baked cheesecake|RS|363|7.8|33.3|22.2|1 slice=180|mugg and bean mugg & bean m&b mugg n bean cheesecake
mb-cappuccino-easy|Mugg & Bean Cappuccino easy|RS|58|2.4|5.2|3.0|easy=330|mugg and bean mugg & bean m&b mugg n bean cappuccino cappucino|L
mb-cappuccino-serious|Mugg & Bean Cappuccino serious|RS|65|2.4|5.6|3.6|serious=500|mugg and bean mugg & bean m&b mugg n bean cappuccino large cappucino|L
mb-caffe-latte|Mugg & Bean Caffe latte|RS|60|3.1|4.6|3.1|1 mug=350|mugg and bean mugg & bean m&b mugg n bean latte|L
kauai-peanut-butter-bomb|Kauai Peanut Butter Bomb smoothie|RS|133|7.4|10.9|6.6|regular=350|kauai kauai smoothie pb bomb peanut butter bomb protein smoothie|L
kauai-peanut-butter-bliss|Kauai Peanut Butter Bliss smoothie|RS|117|4.2|12.6|5.8|regular=350|kauai kauai smoothie pb bliss peanut butter smoothie|L
kauai-salted-caramel|Kauai Salted Caramel smoothie|RS|132|5.0|10.0|8.1|regular=350|kauai kauai smoothie salted caramel protein smoothie|L
kauai-mocha-protein|Kauai Mocha Protein smoothie|RS|123|6.3|12.6|5.2|regular=350|kauai kauai smoothie mocha protein coffee smoothie|L
kauai-berry-dairy|Kauai Berry Dairy smoothie|RS|78|2.4|12.6|2.3|regular=350|kauai kauai smoothie berry smoothie|L
kauai-strawberry-stinger|Kauai Strawberry Stinger smoothie|RS|57|0.6|12.9|0.5|regular=350|kauai kauai smoothie strawberry stinger fruit smoothie|L
kauai-c-breeze|Kauai C-Breeze smoothie|RS|57|0.3|13.4|0.1|regular=350|kauai kauai smoothie c breeze cbreeze fruit smoothie|L
kauai-prince-wrap|Kauai Prince wrap|RS|349|16.2|22.1|22.7|1 wrap=240|kauai prince wrap
kauai-princess-wrap|Kauai Princess wrap|RS|189|8.3|12.6|12.1|1 wrap=405|kauai princess wrap
kauai-bbq-chicken-wrap|Kauai BBQ Chicken wrap|RS|201|10.8|14.6|11.0|1 wrap=314|kauai bbq chicken wrap
kauai-chicken-feta-crunch|Kauai Chicken Feta Crunch|RS|153|9.3|14.5|4.5|1 serving=332|kauai chicken feta crunch
kauai-spicy-burrito|Kauai Spicy Burrito wrap|RS|139|8.8|13.2|5.8|1 wrap=372|kauai spicy burrito
kauai-cajun-chicken-caesar|Kauai Cajun Chicken Caesar bowl|RS|181|10.1|11.8|10.4|1 bowl=381|kauai cajun chicken caesar salad bowl
kauai-teriyaki-chicken-poke|Kauai Teriyaki Chicken poke bowl|RS|162|7.0|11.5|9.8|1 bowl=524|kauai teriyaki poke bowl poke
kauai-protein-plate-broccoli|Kauai Protein plate with broccoli|RS|108|9.8|4.1|5.8|1 plate=290|kauai protein plate protein bowl
sbux-caffe-latte|Starbucks caffè latte|RS|32|2.3|3.2|1.1|grande=473;tall=354;venti=591|starbucks sbux starbucks sa latte caffe latte|L
sbux-cappuccino|Starbucks cappuccino|RS|27|2.0|2.7|1.0|grande=473;tall=354;venti=591|starbucks sbux starbucks sa cappuccino cappucino|L
sbux-caramel-macchiato|Starbucks caramel macchiato|RS|45|2.3|6.1|1.3|grande=473;tall=354;venti=591|starbucks sbux starbucks sa caramel macchiato|L
sbux-chai-tea-latte|Starbucks chai tea latte|RS|38|1.6|6.2|0.8|grande=473;tall=354;venti=591|starbucks sbux starbucks sa chai latte chai|L
sbux-caramel-frappuccino|Starbucks Caramel Frappuccino|RS|73|1.1|9.6|3.3|grande=473;tall=354;venti=591|starbucks sbux starbucks sa caramel frappuccino frappe frap|L
sbux-java-chip-frappuccino|Starbucks Java Chip Frappuccino|RS|80|1.4|9.8|3.8|grande=473;tall=354;venti=591|starbucks sbux starbucks sa java chip frappuccino frappe|L
sbux-coffee-frappuccino|Starbucks Coffee Frappuccino|RS|60|1.0|7.2|3.0|grande=473;tall=354;venti=591|starbucks sbux starbucks sa coffee frappuccino frappe|L
vida-vanilla-iced-caffe|Vida e Caffè Vanilla iced caffè|RS|80|3.2|8.7|3.7|1 cup=300|vida e caffe vida vida e caffè iced coffee vanilla iced coffee|L
vida-iced-chai|Vida e Caffè Iced chai|RS|92|3.3|11.0|3.9|1 cup=300|vida e caffe vida vida e caffè iced chai|L
vida-mocha-iced-caffe|Vida e Caffè Mocha iced caffè|RS|83|3.5|9.0|3.7|1 cup=300|vida e caffe vida vida e caffè mocha iced coffee|L
vida-choc-chunk-biscuit|Vida e Caffè Chocolate chunk biscuit|RS|433|5.3|58.7|18.8|1 biscuit=75|vida e caffe vida vida e caffè cookie choc chunk
vida-cranberry-oat-biscuit|Vida e Caffè Cranberry and oat biscuit|RS|396|5.1|57.3|15.6|1 biscuit=75|vida e caffe vida vida e caffè cookie oat biscuit
breyani-chicken-sa|Chicken breyani (SA style, with potato and lentils)|CM|170|9|20|6|1 plate=400;1 cup=200|biryani briyani breyani akhni durban cape malay
breyani-mutton-sa|Mutton breyani (SA style)|CM|185|9|19|8|1 plate=400;1 cup=200|biryani briyani breyani lamb durban
breyani-vegetable|Vegetable breyani|CM|150|4|24|4.5|1 plate=400;1 cup=200|biryani briyani breyani veg
akhni-chicken|Chicken akhni|CM|160|8|21|5|1 plate=380;1 cup=200|akni cape malay pilau rice
curry-chicken-durban|Durban chicken curry (on the bone, no rice)|CM|150|14|4|9|1 cup=220|chicken curry durban indian masala
curry-mutton-durban|Durban mutton curry (no rice)|CM|190|15|4|13|1 cup=220|lamb curry mutton curry durban indian
curry-bean-sa|Sugar bean curry|CM|110|6|14|3.5|1 cup=220|bean curry vegetarian indian durban
curry-potato-sa|Potato curry (aloo)|CM|105|2|14|5|1 cup=220|aloo curry potato curry vegetarian
curry-fish-sa|Fish curry (Durban style)|CM|120|13|4|6|1 cup=220|fish curry durban
curry-prawn-sa|Prawn curry|CM|125|13|5|6|1 cup=220|prawn curry durban
curry-crab-sa|Crab curry|CM|110|11|5|5.5|1 cup=220|crab curry durban
curry-trotters|Trotters curry|CM|170|14|3|12|1 cup=200|trotters pig trotters beef trotters curry
curry-tinned-fish|Tinned fish curry (pilchards)|CM|145|14|6|7|1 cup=220|pilchard curry tinned fish
dhal-curry-sa|Dhal curry (SA style)|CM|115|6|15|3.5|1 cup=220|dal dhal lentils
bunny-chow-chicken|Bunny chow, quarter chicken|CM|220|9|26|9|quarter=550;half=1000|bunny chow kota durban chicken
roti-sa-flaky|Roti, flaky (SA style)|CM|320|7|45|12|1 roti=80|roti chapati paratha flaky
salomie|Salomie (roti wrap with curry)|CM|210|9|22|9|1 salomie=350|salomi roti wrap cape malay curry
samoosa-chicken|Samoosa, chicken|CM|260|11|22|14|1 samoosa=40;5 samoosas=200|samosa chicken samoosa
samoosa-cheese-corn|Samoosa, cheese and corn|CM|280|8|26|16|1 samoosa=40;5 samoosas=200|samosa cheese corn
chilli-bites|Chilli bites (dhaltjies)|CM|300|8|28|17|5 bites=75;10 bites=150|dhaltjies chilli bites bhajia pakora
denningvleis|Denningvleis|CM|190|16|8|10|1 cup=200|denningvleis cape malay lamb tamarind
bredie-tomato|Tomato bredie|CM|140|10|7|8|1 cup=250|bredie tomato lamb stew cape malay
bredie-waterblommetjie|Waterblommetjie bredie|CM|110|8|5|6|1 cup=250|bredie waterblommetjie lamb stew
bredie-green-bean|Green bean bredie (boontjiebredie)|CM|120|8|7|6.5|1 cup=250|bredie green bean boontjies
pickled-fish|Pickled fish (ingelegde vis)|CM|150|13|9|7|1 portion=150|pickled fish ingelegde vis cape malay easter
smoorsnoek|Smoorsnoek|CM|170|16|8|8|1 cup=200|smoor snoek cape malay
smoor-tomato-onion|Tomato and onion smoor|CM|60|1.5|7|3|½ cup=100|smoor tomato onion sous
koesister-cape-malay|Koesister (Cape Malay, spiced with coconut)|CM|360|5|50|16|1 koesister=55|koesister koeksister cape malay
boeber|Boeber (sweet vermicelli and sago milk)|CM|110|3|17|3.5|1 cup=250|boeber cape malay ramadan milk|L
falooda|Falooda (rose milk drink)|CM|110|3|18|3|1 glass=300|falooda faluda rose milk|L
vermicelli-sweet|Sweet vermicelli (with sago, cardamom)|CM|180|4|28|6|1 bowl=200|vermicelli sweet sev cape malay eid
barfi|Barfi|CM|400|8|50|19|1 piece=30|burfee barfi indian sweet mithai
jalebi|Jalebi|CM|380|2|62|14|1 piece=30|jalebi indian sweet
halwa-carrot|Carrot halwa (gajar halwa)|CM|220|4|28|11|½ cup=120|halwa gajar carrot
sojee|Sojee (semolina pudding)|CM|240|4|32|11|½ cup=120|sooji semolina sojee
masala-steak-roll|Masala steak roll|CM|240|13|22|11|1 roll=250|masala steak roll gatsby durban
chip-roll|Chip roll (slap chips in a roll)|CM|270|5|40|10|1 roll=250|chip roll slap chips roll
mince-curry-roll|Mince curry roll|CM|230|11|24|10|1 roll=250|mince roll curry roll
chana-dhal-mix|Chana dhal mix (bombay mix)|CM|520|16|45|32|small handful=30|bombay mix chana dhal namkeen
moi-moi|Moi moi (steamed bean pudding)|AF|150|9|13|7|1 wrap=150|moin moin moi moi nigerian
efo-riro|Efo riro (spinach stew)|AF|120|6|5|9|1 cup=200|efo riro nigerian spinach stew
pounded-yam|Pounded yam|AF|118|1.5|28|0.2|1 wrap=300|pounded yam iyan nigerian swallow
eba|Eba (garri)|AF|160|1|38|0.5|1 wrap=300|eba garri gari nigerian swallow
amala|Amala|AF|120|2|28|0.3|1 wrap=300|amala nigerian yam flour
puff-puff|Puff puff|AF|350|6|45|16|3 balls=75|puff puff nigerian doughnut
chin-chin|Chin chin|AF|480|8|62|22|small bowl=50|chin chin nigerian snack
pepper-soup-goat|Goat pepper soup|AF|70|10|2|2.5|1 bowl=350|pepper soup goat nigerian
ogbono-soup|Ogbono soup|AF|190|10|6|14|1 cup=250|ogbono draw soup nigerian
jollof-spaghetti|Jollof spaghetti|AF|150|4|22|5|1 plate=300|jollof spaghetti nigerian
fried-rice-nigerian|Nigerian fried rice|AF|170|5|25|5.5|1 plate=300|fried rice nigerian party rice
waakye|Waakye (rice and beans)|AF|150|6|27|2|1 plate=350|waakye ghana rice beans
kenkey|Kenkey|AF|150|3|32|1|1 ball=250|kenkey komi ghana
banku|Banku|AF|140|2|31|1|1 ball=300|banku ghana swallow
kelewele|Kelewele (spiced fried plantain)|AF|250|1.5|38|11|1 portion=150|kelewele plantain ghana
red-red|Red red (bean stew with plantain)|AF|160|7|18|7|1 plate=350|red red ghana beans
groundnut-soup|Groundnut soup with chicken|AF|130|8|6|9|1 bowl=350|groundnut soup peanut soup ghana
light-soup-chicken|Light soup with chicken|AF|60|7|3|2.5|1 bowl=400|light soup ghana
shiro-wat|Shiro wat (chickpea stew)|AF|130|6|13|6|1 cup=220|shiro ethiopian eritrean
misir-wat|Misir wat (red lentil stew)|AF|120|7|16|3.5|1 cup=220|misir wat ethiopian lentils
tibs|Tibs (sauteed beef)|AF|190|20|4|11|1 portion=200|tibs ethiopian beef
kitfo|Kitfo|AF|250|19|1|19|1 portion=150|kitfo ethiopian raw beef
pilau-kenyan|Pilau (East African spiced rice)|AF|170|5|26|5|1 plate=300|pilau pilaf kenyan east african
nyama-choma|Nyama choma (grilled goat or beef)|AF|250|25|0|16|1 portion=250|nyama choma kenyan grilled meat
sukuma-wiki|Sukuma wiki (collard greens)|AF|60|3|6|3|1 cup=150|sukuma wiki kale collards kenyan
chapati-east-african|Chapati (East African)|AF|300|7|45|10|1 chapati=70|chapati kenyan tanzanian
githeri|Githeri (maize and beans)|AF|130|6|20|3|1 cup=200|githeri kenyan maize beans
sadza|Sadza|AF|110|2.5|24|0.5|1 serving=300|sadza zimbabwe pap nshima
nshima|Nshima|AF|110|2.5|24|0.5|1 serving=300|nshima zambia malawi pap
kapenta|Kapenta (fried small fish)|AF|240|35|2|10|1 portion=100|kapenta matemba zimbabwe zambia
frango-zambeziana|Frango a zambeziana (coconut peri chicken)|AF|200|22|3|11|1 portion=250|mozambique chicken zambeziana coconut
pondu|Pondu (cassava leaf stew)|AF|110|4|6|8|1 cup=200|pondu saka saka congo cassava leaves
moambe-chicken|Moambe chicken (palm nut)|AF|200|17|4|13|1 portion=250|moambe congo palm chicken
harira|Harira soup|AF|70|4|9|2|1 bowl=350|harira moroccan soup
amadumbe|Amadumbe (taro), boiled|AF|110|1.5|26|0.2|1 cup=150|amadumbe madumbe taro
dombolo|Dombolo (steamed dumpling)|AF|250|7|50|2|1 dumpling=120|dombolo ujeqe steamed bread dumpling
umphokoqo|Umphokoqo (crumbly pap with amasi)|AF|100|3|16|2|1 bowl=300|umphokoqo pap amasi xhosa
beef-chow-mein|Beef chow mein|AS|150|9|16|6|1 plate=350|chow mein beef noodles chinese
chicken-lo-mein|Chicken lo mein|AS|140|9|18|4|1 plate=350|lo mein chicken noodles chinese
mapo-tofu|Mapo tofu|AS|120|8|5|8|1 cup=220|mapo tofu chinese sichuan
char-siu|Char siu (BBQ pork)|AS|250|22|14|11|1 portion=120|char siu bbq pork chinese
crispy-duck-pancakes|Crispy duck with pancakes|AS|260|14|20|14|4 pancakes=160|crispy duck peking duck pancakes
wonton-soup|Wonton soup|AS|50|3.5|6|1.3|1 bowl=400|wonton soup chinese
hot-sour-soup|Hot and sour soup|AS|45|2.5|5|1.8|1 bowl=350|hot and sour soup chinese
bao-bun-pork|Bao bun, pork belly|AS|250|9|33|9|1 bun=80;2 buns=160|bao bun gua bao pork
salt-pepper-squid|Salt and pepper squid|AS|230|13|16|13|1 portion=150|salt and pepper squid calamari chinese
general-tso-chicken|General Tso's chicken|AS|240|12|24|11|1 portion=250|general tso chicken chinese
yakitori|Yakitori (chicken skewer)|AS|180|20|6|8|1 skewer=40;3 skewers=120|yakitori japanese chicken skewer
gyoza-pork|Gyoza, pork|AS|200|8|22|9|5 gyoza=125;1 gyoza=25|gyoza dumplings potstickers japanese
tempura-prawn|Prawn tempura|AS|250|11|20|14|4 pieces=120|tempura prawn japanese
california-roll|California roll (crab, avocado)|AS|150|4.5|21|5|1 piece=30;8 pieces=240|sushi california roll
tuna-nigiri|Tuna nigiri|AS|145|9|23|1|1 piece=35;2 pieces=70|sushi tuna nigiri
udon-soup|Udon noodle soup|AS|90|4|16|1|1 bowl=500|udon japanese noodle soup
onigiri|Onigiri (rice ball)|AS|170|4|36|1|1 onigiri=100|onigiri japanese rice ball
pad-kra-pao|Pad kra pao (holy basil chicken)|AS|180|14|8|10|1 portion=250|pad krapow basil chicken thai
tom-kha-gai|Tom kha gai (coconut chicken soup)|AS|110|5|4|8|1 bowl=350|tom kha gai thai soup coconut
mango-sticky-rice|Mango sticky rice|AS|250|3|42|8|1 serving=200|mango sticky rice thai dessert
thai-beef-salad|Thai beef salad|AS|110|12|5|5|1 bowl=250|thai beef salad yum nua
chicken-satay|Chicken satay with peanut sauce|AS|210|20|5|12|1 skewer=40;4 skewers=160|satay chicken peanut thai malaysian
korean-fried-chicken|Korean fried chicken|AS|290|18|16|17|1 piece=60;6 pieces=360|korean fried chicken yangnyeom kfc
bulgogi|Bulgogi (Korean beef)|AS|190|16|9|10|1 portion=200|bulgogi korean beef
kimchi|Kimchi|AS|15|1.1|2.4|0.5|1 side=50|kimchi korean
japchae|Japchae (glass noodles)|AS|150|3|24|5|1 plate=250|japchae korean noodles
tteokbokki|Tteokbokki (spicy rice cakes)|AS|200|3.5|42|2|1 portion=250|tteokbokki korean rice cakes
kimchi-fried-rice|Kimchi fried rice|AS|160|5|24|5|1 plate=300|kimchi fried rice korean
banh-mi|Banh mi (pork)|AS|230|10|30|8|1 roll=250|banh mi vietnamese sandwich
goi-cuon|Fresh spring rolls (goi cuon)|AS|120|6|18|2|1 roll=90;2 rolls=180|goi cuon summer rolls vietnamese
bun-cha|Bun cha (pork with noodles)|AS|150|9|18|5|1 bowl=400|bun cha vietnamese
chicken-adobo|Chicken adobo|AS|190|18|3|12|1 portion=250|adobo filipino chicken
pancit|Pancit (stir-fried noodles)|AS|140|7|19|4|1 plate=300|pancit filipino noodles
lumpia|Lumpia (fried spring roll)|AS|250|8|24|14|1 roll=40;5 rolls=200|lumpia filipino spring roll
nasi-goreng|Nasi goreng|AS|170|6|22|6|1 plate=350|nasi goreng indonesian fried rice
beef-rendang|Beef rendang|AS|230|20|5|15|1 portion=200|rendang beef indonesian malaysian
laksa|Laksa (curry noodle soup)|AS|110|5|10|6|1 bowl=500|laksa malaysian curry noodle soup
mee-goreng|Mee goreng|AS|160|5|22|6|1 plate=350|mee goreng malaysian noodles
prego-roll|Prego roll (steak)|PT|230|13|25|8|1 roll=220|prego steak roll portuguese
trinchado|Trinchado|PT|170|18|3|9|1 portion=250|trinchado portuguese beef
bifana|Bifana (pork steak roll)|PT|230|13|24|9|1 roll=220|bifana pork roll portuguese
espetada-beef|Beef espetada|PT|190|24|1|10|1 skewer=250|espetada beef skewer portuguese madeira
bacalhau-a-bras|Bacalhau a bras|PT|180|11|9|11|1 portion=250|bacalhau cod portuguese
caldo-verde|Caldo verde|PT|60|2.5|7|2.5|1 bowl=350|caldo verde kale soup portuguese
pastel-de-nata|Pastel de nata|PT|300|5|35|15|1 tart=60|pastel de nata custard tart portuguese
rissois-prawn|Rissois (prawn)|PT|280|8|28|15|1 rissol=45;4 rissois=180|rissois rissoles prawn portuguese
chicken-trinchado|Chicken trinchado|PT|160|18|4|8|1 portion=250|chicken trinchado portuguese
peri-peri-chicken-livers-roll|Peri-peri chicken livers with a roll|PT|200|12|18|9|1 portion=250|chicken livers peri peri portuguese roll
pastitsio|Pastitsio|MD|170|9|14|9|1 portion=300|pastitsio greek pasta bake
loukoumades|Loukoumades|MD|330|5|45|15|5 pieces=100|loukoumades greek doughnuts honey
iskender-kebab|Iskender kebab|MD|190|12|12|11|1 plate=400|iskender kebab turkish
lahmacun|Lahmacun|MD|220|10|30|7|1 lahmacun=150|lahmacun turkish pizza
menemen|Menemen|MD|110|6|4|8|1 portion=250|menemen turkish eggs
pide-cheese|Pide, cheese|MD|280|11|34|11|1 slice=100;1 pide=400|pide turkish flatbread
fattoush|Fattoush|MD|70|1.5|8|4|1 bowl=250|fattoush lebanese salad
kibbeh|Kibbeh|MD|260|12|18|16|1 kibbeh=60;3 kibbeh=180|kibbeh kibbe lebanese
manakish-zaatar|Manakish with za'atar|MD|300|7|38|14|1 flatbread=120|manakish manoushe zaatar lebanese
shish-tawook|Shish tawook|MD|170|24|2|7|1 skewer=150|shish tawook chicken skewer lebanese
mujaddara|Mujaddara (lentils and rice)|MD|150|6|24|3.5|1 cup=200|mujaddara lentils rice lebanese
labneh|Labneh|MD|160|6|4|13|2 tbsp=30|labneh yoghurt cheese
koobideh-kebab|Koobideh kebab|MD|230|16|13|13|1 skewer=120;2 skewers=240|koobideh kebab persian iranian
joojeh-kabab|Joojeh kabab (saffron chicken)|MD|170|24|2|7|1 skewer=180|joojeh kabab persian chicken
ghormeh-sabzi|Ghormeh sabzi|MD|130|10|6|7|1 cup=250|ghormeh sabzi persian stew
ash-reshteh|Ash reshteh|MD|80|4|12|2|1 bowl=350|ash reshteh persian noodle soup
lamb-tagine|Lamb tagine|MD|170|13|9|9|1 cup=250|lamb tagine moroccan
sabich|Sabich|MD|220|8|24|11|1 pita=250|sabich israeli pita aubergine egg
`;
