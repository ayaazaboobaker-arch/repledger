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
  IN: "Indian",
  AS: "Asian",
  MX: "Mexican & Latin",
  MD: "Mediterranean & Middle Eastern",
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
`;
