/**
 * The big food list, loaded in the background after the app starts (see loadAllFoods in foods.ts).
 * Same line format as foodData.ts, values per 100 g (or 100 ml).
 *
 * CHAIN_FOOD_DATA: restaurant and fast-food menu items. SA chain values are estimates unless a chain publishes them;
 *   international chains use their published US/UK figures where known (tagged "us").
 * USDA_FOOD_DATA: USDA FoodData Central, SR Legacy (public domain), via the TempoLife food dataset
 *   (tempolife.app, CC-BY-4.0). Names shortened to plain English.
 */
export const CHAIN_FOOD_DATA = `
kfc-original-recipe-keel|KFC Original Recipe keel|RS|231|23.1|6.2|13.1|1 piece=130|kfc keel breast piece chicken
kfc-hot-and-crispy-breast|KFC Hot and Crispy breast|RS|267|21.8|9.7|15.8|1 piece=165|kfc hot crispy spicy breast
kfc-hot-and-crispy-thigh|KFC Hot and Crispy thigh|RS|296|17.6|9.6|20.8|1 piece=125|kfc hot crispy spicy thigh
kfc-hot-and-crispy-drumstick|KFC Hot and Crispy drumstick|RS|253|18.7|8|16|1 piece=75|kfc hot crispy spicy drumstick
kfc-hot-and-crispy-wing|KFC Hot and Crispy wing|RS|320|20|12|22|1 piece=50|kfc hot crispy spicy wing
kfc-double-down|KFC Double Down|RS|257|22.9|7.6|14.8|1 burger=210|kfc double down no bun fillet
kfc-boxmaster|KFC Boxmaster|RS|249|11.4|22.9|12.2|1 wrap=245|kfc boxmaster wrap hash brown
kfc-zinger-boxmaster|KFC Zinger Boxmaster|RS|251|11.8|22.7|12.5|1 wrap=255|kfc zinger boxmaster spicy wrap
kfc-zinger-twister-wrap|KFC Zinger Twister wrap|RS|240|11.6|23.1|11.1|1 wrap=225|kfc zinger twister spicy wrap
kfc-crispy-strips-5|KFC Crispy strips (5)|RS|237|18.9|12.6|12.1|5 strips=190|kfc strips tenders fillets
kfc-zinger-wings-8|KFC Zinger wings (8)|RS|280|20|10|18|8 wings=200|kfc zinger wings spicy
kfc-dunked-wings-8|KFC Dunked wings (8)|RS|292|16.7|18.3|16.7|8 wings=240|kfc dunked wings sticky sauce
kfc-pops-popcorn-chicken-regular|KFC Pops popcorn chicken (regular)|RS|282|16.4|18.2|16.4|1 regular=110|kfc pops popcorn chicken bites
kfc-chips-large|KFC chips (large)|RS|300|3.8|37.5|15|1 large=160|kfc fries chips large
kfc-coleslaw-large|KFC coleslaw (large)|RS|147|1.2|14.1|9.4|1 large=170|kfc coleslaw slaw
kfc-mash-and-gravy-large|KFC mash and gravy (large)|RS|83|1.7|12.5|2.9|1 large=240|kfc mashed potato gravy
kfc-pap-regular|KFC pap (regular)|RS|95|2|20|0.5|1 regular=200|kfc pap maize meal
kfc-gravy-regular|KFC gravy (regular)|RS|50|0.8|6.7|2.1|1 regular=120|kfc gravy sauce
kfc-wicked-zinger-burger|KFC Wicked Zinger burger|RS|255|11.8|20.4|13.7|1 burger=255|kfc wicked zinger cheese burger
kfc-colonel-stacker-burger|KFC Colonel Stacker burger|RS|257|13.6|17.9|14.3|1 burger=280|kfc colonel stacker double fillet
kfc-rounder-burger|KFC Rounder burger|RS|254|10.8|26.2|11.5|1 burger=130|kfc rounder snack burger small
kfc-krusher-oreo-regular|KFC Krusher Oreo (regular)|RS|140|3|21.5|4.5|1 regular=400|kfc krusher oreo shake|L
kfc-krusher-strawberry-regular|KFC Krusher Strawberry (regular)|RS|120|2.5|20.5|3|1 regular=400|kfc krusher strawberry shake|L
kfc-krusher-bar-one-regular|KFC Krusher Bar-One (regular)|RS|145|3|22.5|4.8|1 regular=400|kfc krusher bar one chocolate shake|L
kfc-soft-serve-cone|KFC Soft serve cone|RS|155|3.6|25.5|4.1|1 cone=110|kfc ice cream cone soft serve
kfc-streetwise-1-with-chips|KFC Streetwise 1 with chips|RS|263|9.5|23.2|14.7|1 meal=190|kfc streetwise one piece chips
kfc-streetwise-5-with-chips|KFC Streetwise 5 with chips|RS|260|13.5|17.3|15|1 meal=520|kfc streetwise five pieces chips
kfc-corn-on-the-cob|KFC corn on the cob|RS|107|3.6|20|2.1|1 portion=140|kfc mielie corn
mcdonalds-fries-small|McDonald's Fries (small)|RS|288|3.8|37.5|13.8|1 small=80|mcdonalds chips small fries
mcdonalds-fries-medium|McDonald's Fries (medium)|RS|289|3.5|36.8|14|1 medium=114|mcdonalds chips medium fries
mcdonalds-fries-large|McDonald's Fries (large)|RS|293|3.3|37.3|14|1 large=150|mcdonalds chips large fries
mcdonalds-chicken-mcnuggets-4-piece|McDonald's Chicken McNuggets 4 piece|RS|262|15.4|15.4|15.4|4 pieces=65|mcdonalds nuggets 4
mcdonalds-chicken-mcnuggets-9-piece|McDonald's Chicken McNuggets 9 piece|RS|269|15.9|15.2|15.9|9 pieces=145|mcdonalds nuggets 9
mcdonalds-chicken-mcnuggets-20-piece|McDonald's Chicken McNuggets 20 piece|RS|265|15.4|15.4|15.7|20 pieces=325|mcdonalds nuggets 20 share box
mcdonalds-double-quarter-pounder-with-cheese|McDonald's Double Quarter Pounder with Cheese|RS|264|17.1|14.3|15.4|1 burger=280|mcdonalds double quarter pounder cheese
mcdonalds-quarter-pounder|McDonald's Quarter Pounder|RS|232|13.5|20|10.8|1 burger=185|mcdonalds quarter pounder
mcdonalds-double-big-mac|McDonald's Double Big Mac|RS|252|14.1|16.3|14.1|1 burger=270|mcdonalds double big mac
mcdonalds-filet-o-fish|McDonald's Filet-O-Fish|RS|236|10.7|27.1|9.3|1 burger=140|mcdonalds fish burger filet o
mcdonalds-chicken-foldover|McDonald's Chicken Foldover|RS|235|11|24|10.5|1 wrap=200|mcdonalds foldover wrap chicken
mcdonalds-spicy-mcchicken|McDonald's Spicy McChicken|RS|247|9.4|24.7|11.8|1 burger=170|mcdonalds spicy mcchicken
mcdonalds-mccrispy-deluxe|McDonald's McCrispy Deluxe|RS|229|11.4|20.4|11|1 burger=245|mcdonalds mccrispy deluxe
mcdonalds-grand-chicken-special|McDonald's Grand Chicken Special|RS|226|11.3|19.6|11.3|1 burger=265|mcdonalds grand chicken
mcdonalds-sausage-mcmuffin|McDonald's Sausage McMuffin|RS|313|13.9|24.3|18.3|1 muffin=115|mcdonalds sausage mcmuffin breakfast
mcdonalds-bacon-and-egg-mcmuffin|McDonald's Bacon and Egg McMuffin|RS|230|12.6|20|11.1|1 muffin=135|mcdonalds bacon egg mcmuffin breakfast
mcdonalds-cheese-and-egg-mcmuffin|McDonald's Cheese and Egg McMuffin|RS|232|12|21.6|10.4|1 muffin=125|mcdonalds cheese egg mcmuffin breakfast
mcdonalds-hotcakes-with-syrup-and-butter|McDonald's Hotcakes with syrup and butter|RS|248|3.9|42.6|7|1 portion=230|mcdonalds pancakes hotcakes breakfast
mcdonalds-breakfast-wrap|McDonald's Breakfast Wrap|RS|238|10.5|19|13.3|1 wrap=210|mcdonalds breakfast wrap egg sausage
mcdonalds-vanilla-shake-medium|McDonald's Vanilla Shake (medium)|RS|110|2.8|18|3|1 medium=400|mcdonalds vanilla milkshake|L
mcdonalds-strawberry-shake-medium|McDonald's Strawberry Shake (medium)|RS|112|2.8|18.8|2.8|1 medium=400|mcdonalds strawberry milkshake|L
mcdonalds-chocolate-sundae|McDonald's Chocolate Sundae|RS|200|3.8|32.5|6.2|1 sundae=160|mcdonalds choc sundae hot fudge
mcdonalds-strawberry-sundae|McDonald's Strawberry Sundae|RS|175|3.1|30|4.4|1 sundae=160|mcdonalds strawberry sundae
mcdonalds-soft-serve-cone|McDonald's Soft serve cone|RS|156|3.9|24.4|4.4|1 cone=90|mcdonalds ice cream cone
mcdonalds-mcflurry-with-bar-one|McDonald's McFlurry with Bar-One|RS|200|4.2|29.5|6.8|1 regular=190|mcdonalds mcflurry bar one
mcdonalds-mcflurry-with-smarties|McDonald's McFlurry with Smarties|RS|195|4.2|30.5|6.3|1 regular=190|mcdonalds mcflurry smarties
mcdonalds-coca-cola-medium|McDonald's Coca-Cola (medium)|RS|42|0|10.5|0|1 medium=400|mcdonalds coke cola soda|L
mcdonalds-coke-no-sugar-medium|McDonald's Coke No Sugar (medium)|RS|0|0|0|0|1 medium=400|mcdonalds coke zero no sugar diet|L
mcdonalds-mccafe-cappuccino-regular|McDonald's McCafe Cappuccino (regular)|RS|40|2.3|3.3|2|1 regular=300|mcdonalds cappuccino coffee mccafe|L
mcdonalds-mccafe-latte-regular|McDonald's McCafe Latte (regular)|RS|46|2.6|3.7|2.3|1 regular=350|mcdonalds latte coffee mccafe|L
mcdonalds-muffin-choc-chip|McDonald's Muffin (Choc Chip)|RS|400|5|50|20|1 muffin=120|mcdonalds choc chip muffin mccafe
mcdonalds-chicken-wings-4-piece|McDonald's Chicken Wings 4 piece|RS|267|18.3|8.3|17.5|4 wings=120|mcdonalds spicy wings
mcdonalds-side-salad|McDonald's Side salad|RS|22|1.1|3.3|0.3|1 portion=90|mcdonalds salad garden
mcdonalds-cheesy-boerie-burger|McDonald's Cheesy Boerie Burger|RS|260|11.2|18.6|15.3|1 burger=215|mcdonalds boerie cheese boerewors burger
nandos-1-4-chicken-breast-flame-grilled|Nando's 1/4 chicken breast, flame-grilled|RS|176|24.7|0.6|8.2|1 portion=170|nandos quarter chicken breast peri
nandos-1-4-chicken-leg-and-thigh-flame-grilled|Nando's 1/4 chicken leg and thigh, flame-grilled|RS|212|20|0.6|14.1|1 portion=170|nandos quarter chicken leg thigh
nandos-3-wings|Nando's 3 wings|RS|245|20|0.9|18.2|3 wings=110|nandos wings three peri
nandos-5-wings|Nando's 5 wings|RS|244|20|0.6|17.8|5 wings=180|nandos wings five peri
nandos-10-wings|Nando's 10 wings|RS|244|20|0.6|17.8|10 wings=360|nandos wings ten platter
nandos-chicken-livers-and-roll|Nando's chicken livers and roll|RS|187|10.7|16|8.7|1 portion=300|nandos livers peri roll
nandos-chicken-espetada|Nando's chicken espetada|RS|160|24|2|6|1 portion=300|nandos espetada skewer
nandos-chicken-thighs-4-boneless|Nando's chicken thighs (4 boneless)|RS|192|21.5|0.8|11.5|4 thighs=260|nandos boneless thighs
nandos-veggie-burger|Nando's veggie burger|RS|200|6.2|23.8|8.5|1 burger=260|nandos veg burger bean
nandos-chicken-strips-8|Nando's chicken strips (8)|RS|150|25|2|4.5|8 strips=200|nandos grilled strips tenders
nandos-double-chicken-burger|Nando's double chicken burger|RS|206|18.8|14.5|7.9|1 burger=330|nandos double burger thigh
nandos-garlic-bread|Nando's garlic bread|RS|340|8|42|16|1 portion=100|nandos garlic bread
nandos-macho-peas|Nando's macho peas|RS|127|6|12|6|1 regular=150|nandos peas mint chilli
nandos-grilled-veg|Nando's grilled veg|RS|73|2|8|4|1 regular=150|nandos grilled vegetables
nandos-side-salad|Nando's side salad|RS|75|1.7|5|5.4|1 regular=120|nandos salad
nandos-peri-peri-chips-large|Nando's PERi-PERi chips (large)|RS|267|3.8|35|12.5|1 large=240|nandos chips large fries
nandos-hummus-with-peri-peri-drizzle|Nando's hummus with PERi-PERi drizzle|RS|260|6|20|17|1 portion=200|nandos hummus dip pita
nandos-churros|Nando's churros|RS|364|4.5|41.8|20|1 portion=110|nandos churros dessert
nandos-pastel-de-nata|Nando's pastel de nata|RS|300|5.7|35.7|15|1 tart=70|nandos custard tart nata
nandos-mild-peri-peri-sauce|Nando's Mild PERi-PERi sauce|RS|133|0|6.7|11.3|1 tbsp=15|nandos peri sauce mild
nandos-chicken-wrap-with-halloumi|Nando's chicken wrap with halloumi|RS|214|13.8|16.6|9.7|1 wrap=290|nandos halloumi wrap
nandos-boujee-bowl-with-chicken-breast|Nando's Boujee Bowl with chicken breast|RS|148|11.4|14.3|4.8|1 bowl=420|nandos boujee bowl rice
steers-wacky-wednesday-burger|Steers Wacky Wednesday Burger|RS|253|11.6|21.1|13.2|1 burger=190|steers wacky wednesday burger
steers-wacky-wednesday-cheese-burger|Steers Wacky Wednesday Cheese Burger|RS|257|12.4|19|14.3|1 burger=210|steers wacky wednesday cheese
steers-double-cheese-burger|Steers Double Cheese Burger|RS|270|15.3|14|17|1 burger=300|steers double cheese burger
steers-dagwood-burger|Steers Dagwood Burger|RS|236|12.7|13.3|14.5|1 burger=330|steers dagwood egg bacon burger
steers-big-bacon-double-cheese-burger|Steers Big Bacon Double Cheese Burger|RS|271|15.9|12.9|17.1|1 burger=340|steers big bacon double
steers-rib-burger|Steers Rib Burger|RS|260|11|24|13|1 burger=200|steers rib patty burger
steers-chicken-cheese-burger|Steers Chicken Cheese Burger|RS|238|13.3|21|11|1 burger=210|steers chicken cheese burger grilled
steers-crispy-chicken-burger|Steers Crispy Chicken Burger|RS|260|11|24|13|1 burger=200|steers crumbed chicken burger
steers-boerie-roll|Steers Boerie Roll|RS|270|10|20|16.5|1 roll=200|steers boerewors roll hot dog
steers-chips-small|Steers Chips small|RS|290|4|36|14|1 small=100|steers fries small
steers-chips-large|Steers Chips large|RS|290|4|36|14|1 large=200|steers fries large
steers-onion-rings|Steers Onion rings|RS|318|3.6|34.5|18.2|1 regular=110|steers onion rings
steers-half-chicken-flame-grilled|Steers Half chicken flame grilled|RS|194|20|1.2|12.1|1 portion=330|steers half chicken grilled
steers-flame-grilled-ribs-300g|Steers Flame grilled ribs 300g|RS|260|16|10|17.3|1 portion=300|steers pork ribs basting
steers-chicken-wings-6|Steers Chicken wings (6)|RS|250|18.9|4.4|17.2|6 wings=180|steers wings basted
steers-chicken-strips-4|Steers Chicken strips (4)|RS|244|18.8|13.8|12.5|4 strips=160|steers strips tenders
steers-vanilla-milkshake|Steers Vanilla Milkshake|RS|110|2.8|17.5|3.2|1 regular=400|steers vanilla shake|L
steers-strawberry-milkshake|Steers Strawberry Milkshake|RS|112|2.8|18|3.2|1 regular=400|steers strawberry shake|L
steers-bar-one-milkshake|Steers Bar-One Milkshake|RS|135|3|21|4.2|1 regular=400|steers bar one shake|L
steers-ice-cream-choc-dip|Steers Ice Cream Choc Dip|RS|200|3.1|23.1|10.8|1 cone=130|steers choc dip cone
steers-sundae-chocolate|Steers Sundae Chocolate|RS|200|3.5|31.8|6.5|1 sundae=170|steers chocolate sundae
steers-kids-burger|Steers Kids Burger|RS|245|11.8|25.5|10.9|1 burger=110|steers kids mini burger
steers-pork-rib-meal-full-rack|Steers Pork Rib Meal Full rack|RS|260|16.2|10|17.3|1 portion=520|steers full rack ribs
wimpy-double-cheese-burger|Wimpy Double Cheese Burger|RS|267|15.3|14.7|16.3|1 burger=300|wimpy double cheese burger
wimpy-bacon-and-cheese-burger|Wimpy Bacon and Cheese Burger|RS|264|13.6|17.6|15.2|1 burger=250|wimpy bacon cheese burger
wimpy-chicken-burger-grilled|Wimpy Chicken Burger (grilled)|RS|214|13.6|20|8.6|1 burger=220|wimpy grilled chicken burger
wimpy-rib-burger|Wimpy Rib Burger|RS|252|10.4|22.6|13|1 burger=230|wimpy rib burger
wimpy-chips-medium|Wimpy Chips medium|RS|287|4|36|14|1 medium=150|wimpy fries medium
wimpy-chips-large|Wimpy Chips large|RS|290|4|36|14|1 large=200|wimpy fries large
wimpy-onion-rings|Wimpy Onion rings|RS|317|4.2|33.3|18.3|1 portion=120|wimpy onion rings
wimpy-hake-and-chips|Wimpy Hake and chips|RS|216|8.4|19.5|11.6|1 plate=380|wimpy fish chips hake
wimpy-chicken-strips-and-chips|Wimpy Chicken strips and chips|RS|217|9.4|19.4|11.1|1 plate=360|wimpy strips chips
wimpy-toasted-ham-and-cheese|Wimpy Toasted Ham and Cheese|RS|261|13.3|22.2|12.8|1 sandwich=180|wimpy toastie ham cheese
wimpy-toasted-bacon-egg-and-cheese|Wimpy Toasted Bacon Egg and Cheese|RS|267|13.3|19|15.2|1 sandwich=210|wimpy toastie bacon egg cheese
wimpy-classic-breakfast|Wimpy Classic Breakfast|RS|206|9.1|13.1|12.9|1 plate=350|wimpy breakfast eggs bacon toast
wimpy-breakfast-omelette-with-cheese|Wimpy Breakfast Omelette with cheese|RS|194|10.6|9.4|12.5|1 plate=320|wimpy omelette breakfast
wimpy-waffle-with-ice-cream-and-syrup|Wimpy Waffle with ice cream and syrup|RS|255|3.6|35.5|10.9|1 portion=220|wimpy waffle dessert
wimpy-waffle-with-cream-and-syrup|Wimpy Waffle with cream and syrup|RS|290|3|35|15|1 portion=200|wimpy waffle cream
wimpy-cream-soda-float|Wimpy Cream Soda Float|RS|82|0.8|13.5|2.8|1 regular=400|wimpy cream soda float ice|L
wimpy-strawberry-milkshake|Wimpy Strawberry Milkshake|RS|112|2.8|18|3.2|1 regular=400|wimpy strawberry shake|L
wimpy-vanilla-milkshake|Wimpy Vanilla Milkshake|RS|110|2.8|17.5|3.2|1 regular=400|wimpy vanilla shake|L
wimpy-kids-mini-burger|Wimpy Kids Mini Burger|RS|250|11.7|25|10.8|1 burger=120|wimpy kids burger
wimpy-kids-chicken-strips|Wimpy Kids Chicken Strips|RS|250|14|16|14|1 portion=100|wimpy kids strips
wimpy-hot-chocolate|Wimpy Hot Chocolate|RS|87|3|12|3|1 cup=300|wimpy hot chocolate cocoa|L
wimpy-caffe-latte|Wimpy Caffe Latte|RS|53|3|4.3|2.7|1 cup=300|wimpy latte coffee|L
wimpy-chicken-schnitzel-with-chips|Wimpy Chicken Schnitzel with chips|RS|224|9.5|19.5|11.9|1 plate=420|wimpy schnitzel chicken
debonairs-margherita-pizza-large-slice|Debonairs Margherita pizza (large slice)|RS|269|11.2|32.5|10|1 slice=80|debonairs margherita slice cheese
debonairs-pepperoni-pizza-large-slice|Debonairs Pepperoni pizza (large slice)|RS|278|12.2|28.9|12.8|1 slice=90|debonairs pepperoni slice
debonairs-something-meaty-pizza-large-slice|Debonairs Something Meaty pizza (large slice)|RS|271|13.3|25.7|12.9|1 slice=105|debonairs something meaty slice
debonairs-bbq-chicken-pizza-large-slice|Debonairs BBQ Chicken pizza (large slice)|RS|245|13|29|8.5|1 slice=100|debonairs bbq chicken slice
debonairs-hawaiian-pizza-large-slice|Debonairs Hawaiian pizza (large slice)|RS|235|11|29|8.5|1 slice=100|debonairs hawaiian slice ham pineapple
debonairs-chicken-mushroom-pizza-large-slice|Debonairs Chicken & Mushroom pizza (large slice)|RS|247|12.6|27.4|9.5|1 slice=95|debonairs chicken mushroom slice
debonairs-club-pizza-medium|Debonairs Club pizza (medium)|RS|258|12.5|26.6|11.2|1 medium=640|debonairs club pizza medium
debonairs-tikka-chicken-pizza-medium|Debonairs Tikka Chicken pizza (medium)|RS|242|12.3|28.4|9|1 medium=620|debonairs tikka pizza medium
debonairs-sweet-chilli-chicken-pizza-medium|Debonairs Sweet Chilli Chicken pizza (medium)|RS|245|11.9|29.7|8.7|1 medium=620|debonairs sweet chilli pizza medium
debonairs-meaty-triple-decker-pizza-medium|Debonairs Meaty Triple-Decker pizza (medium)|RS|278|13.3|23.3|14.4|1 medium=900|debonairs triple decker meaty medium
debonairs-creamy-chicken-triple-decker-pizza-medium|Debonairs Creamy Chicken Triple-Decker pizza (medium)|RS|267|12.7|23.9|13.4|1 medium=880|debonairs triple decker creamy chicken medium
debonairs-margherita-pizza-small|Debonairs Margherita pizza (small)|RS|260|11.3|32|9.3|1 small=300|debonairs margherita small
debonairs-pepperoni-pizza-small|Debonairs Pepperoni pizza (small)|RS|273|12.1|29.1|11.8|1 small=330|debonairs pepperoni small
debonairs-something-meaty-pizza-small|Debonairs Something Meaty pizza (small)|RS|270|13|26.5|12.4|1 small=370|debonairs something meaty small
debonairs-margherita-pizza-extra-large|Debonairs Margherita pizza (extra large)|RS|267|11.4|33|9.8|1 extra large=880|debonairs margherita xl
debonairs-pepperoni-pizza-extra-large|Debonairs Pepperoni pizza (extra large)|RS|281|12.3|30.2|12.1|1 extra large=960|debonairs pepperoni xl
debonairs-something-meaty-pizza-extra-large|Debonairs Something Meaty pizza (extra large)|RS|273|13.5|26.5|12.5|1 extra large=1100|debonairs something meaty xl
debonairs-veg-supreme-pizza-large|Debonairs Veg Supreme pizza (large)|RS|226|9.2|29.5|7.9|1 large=760|debonairs vegetarian pizza large
debonairs-chicken-tikka-pizza-large-slice|Debonairs Chicken Tikka pizza (large slice)|RS|242|12.6|28.4|8.9|1 slice=95|debonairs tikka slice
debonairs-double-decker-something-meaty-pizza-large|Debonairs Double Decker Something Meaty pizza (large)|RS|278|13|26.1|13.5|1 large=1150|debonairs double decker pizza
debonairs-garlic-bread|Debonairs Garlic bread|RS|313|7.3|41.3|13.3|1 portion=150|debonairs garlic bread
debonairs-cheesy-garlic-bread|Debonairs Cheesy garlic bread|RS|328|11.1|34.4|16.1|1 portion=180|debonairs cheese garlic bread
debonairs-chips-regular|Debonairs Chips (regular)|RS|287|4|36|14|1 regular=150|debonairs fries chips
debonairs-chicken-wings-6-plain|Debonairs Chicken wings (6) plain|RS|244|18.9|2.2|17.8|6 wings=180|debonairs wings plain
debonairs-choc-brownie|Debonairs Choc Brownie|RS|422|4.4|53.3|21.1|1 brownie=90|debonairs brownie dessert chocolate
burger-king-whopper-junior-with-cheese|Burger King Whopper Junior with Cheese|RS|245|11.6|19.4|13.5|1 burger=155|burger king whopper jr cheese
burger-king-triple-whopper|Burger King Triple Whopper|RS|274|16.7|11.6|17.9|1 burger=430|burger king triple whopper
burger-king-hamburger|Burger King Hamburger|RS|238|12.4|26.7|9|1 burger=105|burger king hamburger
burger-king-double-cheeseburger|Burger King Double Cheeseburger|RS|267|15.8|17|15.2|1 burger=165|burger king double cheeseburger
burger-king-bacon-double-cheeseburger|Burger King Bacon Double Cheeseburger|RS|274|16.6|16.6|16|1 burger=175|burger king bacon double cheese
burger-king-chicken-royale|Burger King Chicken Royale|RS|267|11.4|23.8|13.8|1 burger=210|burger king chicken royale
burger-king-long-chicken|Burger King Long Chicken|RS|260|9|25|14|1 burger=200|burger king long chicken
burger-king-veggie-whopper|Burger King Veggie Whopper|RS|196|6.2|20.8|9.6|1 burger=260|burger king plant veggie whopper
burger-king-fries-small|Burger King Fries (small)|RS|300|3.3|38.9|14.4|1 small=90|burger king chips small
burger-king-fries-large|Burger King Fries (large)|RS|300|3.8|38.8|14.4|1 large=160|burger king chips large
burger-king-onion-rings-medium|Burger King Onion rings (medium)|RS|318|3.6|34.5|18.2|1 medium=110|burger king onion rings
burger-king-chicken-nuggets-9-piece|Burger King Chicken Nuggets 9 piece|RS|280|14.7|17.3|16.7|9 pieces=150|burger king nuggets 9
burger-king-chocolate-shake-medium|Burger King Chocolate Shake (medium)|RS|125|2.8|20|3.8|1 medium=400|burger king chocolate milkshake|L
burger-king-vanilla-shake-medium|Burger King Vanilla Shake (medium)|RS|112|2.8|18|3.2|1 medium=400|burger king vanilla milkshake|L
burger-king-sundae-caramel|Burger King Sundae Caramel|RS|193|3.3|32|5.7|1 sundae=150|burger king caramel sundae
burger-king-soft-serve-cone|Burger King Soft serve cone|RS|150|4|24|4.5|1 cone=100|burger king ice cream cone
chicken-licken-drumstick|Chicken Licken drumstick|RS|262|18.8|8.8|16.9|1 piece=80|chicken licken drumstick fried
chicken-licken-breast|Chicken Licken breast|RS|253|21.2|8.2|15.3|1 piece=170|chicken licken breast fried
chicken-licken-wing|Chicken Licken wing|RS|309|18.2|10.9|21.8|1 piece=55|chicken licken wing fried
chicken-licken-keel|Chicken Licken keel|RS|250|23.3|7.5|14.2|1 piece=120|chicken licken keel fried
chicken-licken-hot-wings-6|Chicken Licken Hot Wings (6)|RS|289|17.8|10|20|6 wings=180|chicken licken hotwings hot wings spicy
chicken-licken-hot-wings-12|Chicken Licken Hot Wings (12)|RS|289|17.8|10|20|12 wings=360|chicken licken hotwings 12 spicy
chicken-licken-hotstuff-burger|Chicken Licken Hotstuff burger|RS|248|11.4|21.9|12.9|1 burger=210|chicken licken hotstuff spicy burger
chicken-licken-big-john-burger|Chicken Licken Big John burger|RS|246|11.5|20.8|13.1|1 burger=260|chicken licken big john burger
chicken-licken-supa-mega-burger|Chicken Licken Supa Mega burger|RS|261|12.7|18.8|15.2|1 burger=330|chicken licken supa mega burger
chicken-licken-chicken-licken-burger|Chicken Licken Chicken Licken burger|RS|242|10.5|23.2|12.1|1 burger=190|chicken licken burger
chicken-licken-soul-strips-4|Chicken Licken Soul Strips (4)|RS|250|17.5|13.8|13.8|4 strips=160|chicken licken soul strips tenders
chicken-licken-soul-wrap|Chicken Licken Soul Wrap|RS|235|10.4|23.5|10.9|1 wrap=230|chicken licken soul wrap
chicken-licken-soul-mate-chicken-2-piece-with-chips|Chicken Licken Soul Mate Chicken 2 piece with chips|RS|253|10.5|19.5|14.7|1 meal=380|chicken licken soul mate 2 piece chips
chicken-licken-soul-crunch-burger|Chicken Licken Soul Crunch burger|RS|240|10|24|11.5|1 burger=200|chicken licken soul crunch burger
chicken-licken-fries-regular|Chicken Licken Fries (regular)|RS|293|3.6|37.1|14.3|1 regular=140|chicken licken chips regular
chicken-licken-fries-large|Chicken Licken Fries (large)|RS|290|4|37|14|1 large=200|chicken licken chips large
chicken-licken-pap-regular|Chicken Licken pap (regular)|RS|95|2|20|0.5|1 regular=200|chicken licken pap maize
chicken-licken-coleslaw-regular|Chicken Licken coleslaw (regular)|RS|150|1|14|10|1 regular=100|chicken licken coleslaw
chicken-licken-roll|Chicken Licken Roll|RS|289|8.9|53.3|3.3|1 roll=45|chicken licken bread roll
chicken-licken-soft-serve-cone|Chicken Licken Soft serve cone|RS|150|4|24|4.5|1 cone=100|chicken licken ice cream cone
chicken-licken-hot-wings-5-with-chips|Chicken Licken Hot Wings 5 with chips|RS|259|10.3|19.3|15.2|1 meal=290|chicken licken hotwings meal chips
spur-pork-spare-ribs-full-rack-with-chips|Spur Pork spare ribs (full rack) with chips|RS|250|12.9|15.7|14.9|1 plate=700|spur full rack ribs chips
spur-pork-spare-ribs-half-rack-with-chips|Spur Pork spare ribs (half rack) with chips|RS|244|11.6|17.8|14.2|1 plate=450|spur half rack ribs chips
spur-rump-steak-200g-with-chips|Spur Rump steak 200g with chips|RS|210|13.3|13.3|11.4|1 plate=420|spur rump steak 200g
spur-rump-steak-300g-with-chips|Spur Rump steak 300g with chips|RS|215|15.4|10.8|11.9|1 plate=520|spur rump steak 300g
spur-sirloin-steak-250g-with-chips|Spur Sirloin steak 250g with chips|RS|213|14|11.9|11.9|1 plate=470|spur sirloin steak
spur-chicken-schnitzel-with-chips|Spur Chicken schnitzel with chips|RS|220|10.2|19.1|11.1|1 plate=450|spur schnitzel chicken
spur-chicken-wings-8-basted|Spur Chicken wings (8) basted|RS|238|18.5|6.9|15.4|8 wings=260|spur wings basted
spur-buffalo-wings-starter|Spur Buffalo wings starter|RS|240|17|5|17|1 portion=200|spur buffalo wings spicy
spur-chicken-strips-and-chips|Spur Chicken strips and chips|RS|233|10|21|12|1 plate=400|spur strips chips
spur-cheesy-chicken-burger-with-chips|Spur Cheesy chicken burger with chips|RS|233|10.2|20|12.2|1 plate=450|spur cheese chicken burger
spur-hot-mexican-burger-with-chips|Spur Hot Mexican burger with chips|RS|238|9.4|19.6|13.4|1 plate=470|spur mexican burger jalapeno
spur-mushroom-sauce|Spur Mushroom sauce|RS|117|1.7|8.3|8.3|1 portion=60|spur mushroom sauce
spur-pepper-sauce|Spur Pepper sauce|RS|117|1.7|8.3|8.3|1 portion=60|spur pepper sauce
spur-cheese-sauce|Spur Cheese sauce|RS|183|5|8.3|14.2|1 portion=60|spur cheese sauce
spur-onion-rings-side|Spur Onion rings (side)|RS|320|4|34|19|1 side=100|spur onion rings side
spur-side-salad|Spur Side salad|RS|58|1.7|6.7|2.5|1 side=120|spur salad
spur-sweet-potato-fries|Spur Sweet potato fries|RS|280|2|37.3|13.3|1 side=150|spur sweet potato fries
spur-kids-cheese-burger|Spur Kids Cheese burger|RS|232|8.8|22.4|11.6|1 plate=250|spur kids burger chips
spur-kids-chicken-nuggets-and-chips|Spur Kids Chicken nuggets and chips|RS|245|8.2|24.5|12.7|1 plate=220|spur kids nuggets
spur-chocolate-brownie-with-ice-cream|Spur Chocolate brownie with ice cream|RS|310|4|39|15|1 portion=200|spur brownie dessert
spur-sundae-with-chocolate-sauce|Spur Sundae with chocolate sauce|RS|200|3.3|31.1|6.7|1 portion=180|spur sundae ice cream
spur-chocolate-milkshake|Spur Chocolate milkshake|RS|130|2.8|20|4.2|1 regular=400|spur chocolate shake|L
spur-ranch-breakfast-bacon-and-eggs|Spur Ranch breakfast bacon and eggs|RS|200|9.4|10.6|13.1|1 plate=320|spur breakfast bacon eggs
ocean-basket-hake-grilled-with-chips|Ocean Basket Hake grilled with chips|RS|156|9.8|13.3|6.7|1 plate=450|ocean basket grilled hake chips
ocean-basket-hake-grilled-with-rice|Ocean Basket Hake grilled with rice|RS|136|9.8|13.8|4.4|1 plate=450|ocean basket grilled hake rice
ocean-basket-calamari-tubes-grilled-with-chips|Ocean Basket Calamari tubes grilled with chips|RS|162|8.6|15.2|7.1|1 plate=420|ocean basket calamari tubes
ocean-basket-calamari-heads-fried|Ocean Basket Calamari heads fried|RS|220|12|13|13|1 portion=200|ocean basket calamari heads
ocean-basket-prawns-10-queen|Ocean Basket Prawns 10 queen|RS|150|17.1|1.4|8.6|1 portion=280|ocean basket queen prawns 10
ocean-basket-prawns-20-queen|Ocean Basket Prawns 20 queen|RS|150|17.1|1.4|8.6|1 portion=560|ocean basket queen prawns 20
ocean-basket-salmon-fillet-grilled|Ocean Basket Salmon fillet grilled|RS|210|20|0|14|1 portion=200|ocean basket salmon fillet
ocean-basket-kingklip-grilled|Ocean Basket Kingklip grilled|RS|127|21.8|0|4.3|1 portion=220|ocean basket kingklip fillet
ocean-basket-sole-grilled|Ocean Basket Sole grilled|RS|127|17.3|0|6.3|1 portion=300|ocean basket sole fish
ocean-basket-mussels-in-white-wine-sauce-starter|Ocean Basket Mussels in white wine sauce starter|RS|127|8.7|5.3|7.3|1 portion=300|ocean basket mussels starter
ocean-basket-fish-tacos|Ocean Basket Fish tacos|RS|200|10|20|8.6|1 portion=280|ocean basket tacos fish
ocean-basket-salmon-roses-4-pieces|Ocean Basket Salmon roses 4 pieces|RS|200|6.7|21.7|9.2|4 pieces=120|ocean basket salmon roses sushi
ocean-basket-rice-side|Ocean Basket Rice (side)|RS|133|2.2|28.9|0.8|1 side=180|ocean basket rice
ocean-basket-greek-salad-side|Ocean Basket Greek salad (side)|RS|100|3|4|8|1 side=200|ocean basket greek salad feta
ocean-basket-lemon-butter-sauce|Ocean Basket Lemon butter sauce|RS|480|0|2|52|1 portion=50|ocean basket lemon butter
ocean-basket-chips-half-portion|Ocean Basket Chips (half portion)|RS|280|3.3|36|13.3|1 half=150|ocean basket chips small
fishaways-small-grilled-hake-and-chips|Fishaways Small grilled hake and chips|RS|180|8|16.7|8.7|1 portion=300|fishaways grilled hake chips small
fishaways-hake-and-chips-large-fried|Fishaways Hake and chips large fried|RS|204|8.3|19.2|10.4|1 portion=480|fishaways large hake chips
fishaways-calamari-and-chips|Fishaways Calamari and chips|RS|218|6.7|22.4|11.2|1 portion=330|fishaways calamari chips
fishaways-fish-burger|Fishaways Fish burger|RS|245|10|25|11.5|1 burger=200|fishaways fish burger hake
fishaways-hake-bites-and-chips|Fishaways Hake bites and chips|RS|227|8|23.3|11|1 portion=300|fishaways hake bites fish
fishaways-prawns-and-chips|Fishaways Prawns and chips|RS|194|8.1|17.5|10|1 portion=320|fishaways prawns chips
fishaways-chicken-strips-and-chips|Fishaways Chicken strips and chips|RS|225|9.4|20.6|11.6|1 portion=320|fishaways chicken strips
fishaways-large-chips|Fishaways Large chips|RS|291|3.6|36.4|14.1|1 large=220|fishaways chips large
fishaways-small-chips|Fishaways Small chips|RS|291|3.6|36.4|14.5|1 small=110|fishaways chips small
fishaways-rice|Fishaways Rice|RS|133|2.2|28.9|0.8|1 portion=180|fishaways rice
fishaways-coleslaw|Fishaways Coleslaw|RS|150|1|14|10|1 portion=100|fishaways coleslaw
fishaways-tartare-sauce|Fishaways Tartare sauce|RS|400|0|6.7|41.7|1 portion=30|fishaways tartar sauce
fishaways-fish-cakes-2|Fishaways Fish cakes (2)|RS|229|8.6|20|12.9|2 pieces=140|fishaways fishcakes
fishaways-calamari-wrap|Fishaways Calamari wrap|RS|235|7.8|25.2|11.3|1 wrap=230|fishaways calamari wrap
pedros-quarter-chicken-flame-grilled|Pedros Quarter chicken flame grilled|RS|211|20|1.1|13.9|1 portion=180|pedros quarter chicken
pedros-half-chicken-flame-grilled|Pedros Half chicken flame grilled|RS|211|20|1.1|13.9|1 portion=360|pedros half chicken
pedros-wings-6|Pedros Wings (6)|RS|250|18.9|3.3|17.8|6 wings=180|pedros wings
pedros-chicken-burger|Pedros Chicken burger|RS|227|13.6|20|10|1 burger=220|pedros chicken burger grilled
pedros-spicy-rice|Pedros Spicy rice|RS|150|3|28|3|1 regular=200|pedros spicy rice
pedros-chips-large|Pedros Chips (large)|RS|282|3.6|35.5|13.6|1 large=220|pedros chips large
pedros-coleslaw|Pedros Coleslaw|RS|150|1|14|10|1 regular=100|pedros coleslaw
pedros-pap|Pedros Pap|RS|95|2|20|0.5|1 regular=200|pedros pap
pedros-strips-4|Pedros Strips (4)|RS|188|22.5|3.8|8.8|4 strips=160|pedros chicken strips
pedros-chicken-bowl-with-spicy-rice|Pedros Chicken bowl with spicy rice|RS|163|10.5|16.8|5.8|1 bowl=380|pedros rice bowl
hungry-lion-chicken-piece-drumstick|Hungry Lion Chicken piece (drumstick)|RS|262|18.8|8.8|16.9|1 piece=80|hungry lion drumstick
hungry-lion-chicken-piece-thigh|Hungry Lion Chicken piece (thigh)|RS|283|18.3|8.3|19.2|1 piece=120|hungry lion thigh
hungry-lion-chicken-piece-breast|Hungry Lion Chicken piece (breast)|RS|256|21.2|8.8|15|1 piece=160|hungry lion breast
hungry-lion-chicken-piece-wing|Hungry Lion Chicken piece (wing)|RS|309|18.2|10.9|21.8|1 piece=55|hungry lion wing
hungry-lion-pardner-2-piece-with-chips|Hungry Lion Pardner 2 piece with chips|RS|255|10.3|19.4|15.2|1 meal=330|hungry lion pardner 2 piece
hungry-lion-pardner-3-piece-with-chips|Hungry Lion Pardner 3 piece with chips|RS|261|11.4|15.9|16.8|1 meal=440|hungry lion pardner 3 piece
hungry-lion-hot-wings-6|Hungry Lion Hot Wings (6)|RS|289|17.8|10|20|6 wings=180|hungry lion hot wings spicy
hungry-lion-chicken-burger|Hungry Lion Chicken burger|RS|240|10|23|12|1 burger=200|hungry lion chicken burger
hungry-lion-cheese-burger|Hungry Lion Cheese burger|RS|253|11.6|21.1|13.7|1 burger=190|hungry lion cheese burger beef
hungry-lion-chicken-strips-4|Hungry Lion Chicken strips (4)|RS|250|17.5|13.8|13.8|4 strips=160|hungry lion strips tenders
hungry-lion-chips-regular|Hungry Lion Chips (regular)|RS|293|3.6|37.1|14.3|1 regular=140|hungry lion chips
hungry-lion-chips-large|Hungry Lion Chips (large)|RS|290|4|37|14|1 large=200|hungry lion chips large
hungry-lion-pap-regular|Hungry Lion Pap (regular)|RS|95|2|20|0.5|1 regular=200|hungry lion pap
hungry-lion-bun|Hungry Lion Bun|RS|289|8.9|53.3|3.3|1 roll=45|hungry lion roll
hungry-lion-soft-serve-cone|Hungry Lion Soft serve cone|RS|150|4|24|4.5|1 cone=100|hungry lion ice cream
galitos-quarter-chicken-flame-grilled|Galito's Quarter chicken flame grilled|RS|211|20|1.1|13.9|1 portion=180|galitos quarter chicken peri
galitos-half-chicken-flame-grilled|Galito's Half chicken flame grilled|RS|211|20|1.1|13.9|1 portion=360|galitos half chicken peri
galitos-full-chicken-flame-grilled|Galito's Full chicken flame grilled|RS|211|20|1.1|13.9|1 whole=720|galitos whole chicken
galitos-wings-6|Galito's Wings (6)|RS|250|18.9|3.3|17.8|6 wings=180|galitos wings peri
galitos-chicken-burger|Galito's Chicken burger|RS|222|13.9|19.1|9.6|1 burger=230|galitos chicken burger
galitos-chicken-wrap|Galito's Chicken wrap|RS|216|12.8|20|8.8|1 wrap=250|galitos chicken wrap
galitos-chicken-livers-and-roll|Galito's Chicken livers and roll|RS|186|10.7|15.7|8.6|1 portion=280|galitos livers
galitos-chips-regular|Galito's Chips (regular)|RS|287|4|36|14|1 regular=150|galitos chips
galitos-spicy-rice|Galito's Spicy rice|RS|150|3|28|3|1 regular=200|galitos rice
galitos-coleslaw|Galito's Coleslaw|RS|150|1|14|10|1 regular=100|galitos coleslaw
galitos-garlic-roll|Galito's Garlic roll|RS|343|8.6|48.6|12.9|1 roll=70|galitos roll garlic
galitos-chicken-strips-and-chips|Galito's Chicken strips and chips|RS|212|11.2|18.8|10|1 meal=320|galitos strips chips
barcelos-quarter-chicken-flame-grilled|Barcelos Quarter chicken flame grilled|RS|211|20|1.1|13.9|1 portion=180|barcelos quarter chicken
barcelos-half-chicken-flame-grilled|Barcelos Half chicken flame grilled|RS|211|20|1.1|13.9|1 portion=360|barcelos half chicken
barcelos-full-chicken-flame-grilled|Barcelos Full chicken flame grilled|RS|211|20|1.1|13.9|1 whole=720|barcelos whole chicken
barcelos-wings-5|Barcelos Wings (5)|RS|250|18.8|2.5|18.1|5 wings=160|barcelos wings
barcelos-chicken-burger|Barcelos Chicken burger|RS|222|13.9|19.1|9.6|1 burger=230|barcelos chicken burger
barcelos-chicken-wrap|Barcelos Chicken wrap|RS|216|12.8|20|8.8|1 wrap=250|barcelos wrap
barcelos-chicken-pita|Barcelos Chicken pita|RS|208|12.5|20.8|7.9|1 pita=240|barcelos pita
barcelos-trinchado|Barcelos Trinchado|RS|192|16|4.8|12|1 portion=250|barcelos trinchado beef
barcelos-chips-regular|Barcelos Chips (regular)|RS|287|4|36|14|1 regular=150|barcelos chips
barcelos-savoury-rice|Barcelos Savoury rice|RS|150|3|28|3|1 regular=200|barcelos rice
barcelos-coleslaw|Barcelos Coleslaw|RS|150|1|14|10|1 regular=100|barcelos coleslaw
barcelos-chicken-strips-4|Barcelos Chicken strips (4)|RS|188|22.5|3.8|8.8|4 strips=160|barcelos strips
romans-margherita-pizza-medium|Roman's Margherita pizza (medium)|RS|246|10.8|31.2|8.3|1 medium=480|romans margherita medium
romans-margherita-pizza-large|Roman's Margherita pizza (large)|RS|247|10.9|31.2|8.4|1 large=640|romans margherita large
romans-margherita-pizza-large-slice|Roman's Margherita pizza (large slice)|RS|250|11.2|31.2|8.8|1 slice=80|romans margherita slice
romans-pepperoni-deluxe-pizza-medium|Roman's Pepperoni Deluxe pizza (medium)|RS|269|11.5|28.8|11.9|1 medium=520|romans pepperoni medium
romans-pepperoni-deluxe-pizza-large-slice|Roman's Pepperoni Deluxe pizza (large slice)|RS|267|11.4|28.4|11.9|1 slice=88|romans pepperoni slice
romans-hawaiian-pizza-medium|Roman's Hawaiian pizza (medium)|RS|235|11.1|29.6|8|1 medium=540|romans hawaiian medium
romans-four-in-one-pizza-medium|Roman's Four in One pizza (medium)|RS|248|11.8|27.9|9.8|1 medium=560|romans four in one medium
romans-chicken-n-mayo-feta-pizza-large-slice|Roman's Chicken N Mayo Feta pizza (large slice)|RS|268|12.6|26.3|12.6|1 slice=95|romans chicken mayo feta slice
romans-fetaroni-pizza-medium|Roman's Fetaroni pizza (medium)|RS|264|11.3|28.7|11.5|1 medium=530|romans fetaroni medium
romans-peri-peri-chicken-pizza-medium|Roman's Peri-Peri Chicken pizza (medium)|RS|241|12.6|28.5|8.5|1 medium=540|romans peri chicken medium
romans-cheesy-garlic-bread|Roman's Cheesy garlic bread|RS|325|11.2|35|15.6|1 portion=160|romans garlic bread cheese
romans-chicken-wings-6|Roman's Chicken wings (6)|RS|250|18.9|3.3|17.8|6 wings=180|romans wings
romans-chips-regular|Roman's Chips (regular)|RS|287|4|36|14|1 regular=150|romans chips
pizza-hut-cheese-pizza-large-pan-slice|Pizza Hut Cheese pizza (large pan slice)|RS|264|10.9|28.2|11.8|1 slice=110|pizza hut cheese slice pan
pizza-hut-pepperoni-pizza-large-pan-slice|Pizza Hut Pepperoni pizza (large pan slice)|RS|274|11.3|27|13.5|1 slice=115|pizza hut pepperoni slice pan
pizza-hut-meat-lovers-pizza-large-pan-slice|Pizza Hut Meat Lover's pizza (large pan slice)|RS|277|12.3|23.8|14.6|1 slice=130|pizza hut meat lovers slice
pizza-hut-super-supreme-pizza-large-pan-slice|Pizza Hut Super Supreme pizza (large pan slice)|RS|244|10.4|23.7|11.9|1 slice=135|pizza hut super supreme slice
pizza-hut-bbq-chicken-pizza-medium-pan|Pizza Hut BBQ Chicken pizza (medium pan)|RS|250|12|28|10|1 medium=600|pizza hut bbq chicken medium
pizza-hut-hawaiian-chicken-pizza-medium-pan|Pizza Hut Hawaiian Chicken pizza (medium pan)|RS|240|11.7|28.3|9|1 medium=600|pizza hut hawaiian chicken medium
pizza-hut-veggie-lovers-pizza-medium-pan|Pizza Hut Veggie Lover's pizza (medium pan)|RS|228|9|29|8.3|1 medium=580|pizza hut veggie medium
pizza-hut-chicken-supreme-pizza-large-pan|Pizza Hut Chicken Supreme pizza (large pan)|RS|244|12.5|27.3|9.3|1 large=880|pizza hut chicken supreme large
pizza-hut-garlic-bread|Pizza Hut Garlic bread|RS|317|7.5|40|14.2|1 portion=120|pizza hut garlic bread
pizza-hut-chicken-wings-6|Pizza Hut Chicken wings (6)|RS|256|18.9|4.4|17.8|6 wings=180|pizza hut wings
pizza-hut-potato-wedges|Pizza Hut Potato wedges|RS|213|3.3|28|10|1 regular=150|pizza hut wedges
pizza-hut-cinnamon-bites|Pizza Hut Cinnamon bites|RS|367|5|53.3|15|1 portion=120|pizza hut cinnamon dessert
mochachos-chicken-burrito|Mochachos Chicken burrito|RS|205|11.1|23.2|7.4|1 burrito=380|mochachos burrito chicken
mochachos-beef-burrito|Mochachos Beef burrito|RS|221|10.5|22.6|9.5|1 burrito=380|mochachos burrito beef mince
mochachos-chicken-quesadilla|Mochachos Chicken quesadilla|RS|246|13.8|19.2|12.3|1 quesadilla=260|mochachos quesadilla
mochachos-chicken-tacos-3|Mochachos Chicken tacos (3)|RS|207|11.9|18.5|9.3|3 tacos=270|mochachos tacos
mochachos-nachos-with-beef|Mochachos Nachos with beef|RS|258|9.5|22.1|14.7|1 portion=380|mochachos nachos beef
mochachos-chicken-wings-6|Mochachos Chicken wings (6)|RS|256|18.9|4.4|17.8|6 wings=180|mochachos wings
mochachos-chicken-burger|Mochachos Chicken burger|RS|233|12.5|20|11.2|1 burger=240|mochachos chicken burger
mochachos-mexican-rice|Mochachos Mexican rice|RS|144|2.8|27.8|2.5|1 portion=180|mochachos rice
mochachos-churros|Mochachos Churros|RS|364|4.5|41.8|20|1 portion=110|mochachos churros
mochachos-chips-regular|Mochachos Chips (regular)|RS|287|4|36|14|1 regular=150|mochachos fries
captain-doregos-hake-and-chips|Captain DoRegos Hake and chips|RS|216|8.4|20|11.1|1 portion=380|captain doregos fish chips
captain-doregos-chicken-2-piece-and-chips|Captain DoRegos Chicken 2 piece and chips|RS|255|10.3|19.4|15.2|1 meal=330|captain doregos chicken chips
captain-doregos-hot-wings-6|Captain DoRegos Hot wings (6)|RS|289|17.8|10|20|6 wings=180|captain doregos hot wings
captain-doregos-chicken-burger|Captain DoRegos Chicken burger|RS|240|10|23|12|1 burger=200|captain doregos chicken burger
captain-doregos-russian-and-chips|Captain DoRegos Russian and chips|RS|260|6|20.7|17|1 meal=300|captain doregos russian sausage chips
captain-doregos-calamari-and-chips|Captain DoRegos Calamari and chips|RS|225|6.9|22.5|11.9|1 portion=320|captain doregos calamari
captain-doregos-chips-large|Captain DoRegos Chips (large)|RS|290|4|37|14|1 large=200|captain doregos chips
captain-doregos-chips-regular|Captain DoRegos Chips (regular)|RS|293|3.6|37.1|14.3|1 regular=140|captain doregos chips
captain-doregos-pap-and-gravy|Captain DoRegos Pap and gravy|RS|87|1.7|16.7|1.3|1 portion=300|captain doregos pap
captain-doregos-chicken-strips-4|Captain DoRegos Chicken strips (4)|RS|250|17.5|13.8|13.8|4 strips=160|captain doregos strips
sausage-saloon-boerewors-roll|Sausage Saloon Boerewors roll|RS|267|10.5|19|16.2|1 roll=210|sausage saloon boerie roll wors
sausage-saloon-cheese-griller-roll|Sausage Saloon Cheese griller roll|RS|280|11|20|17.5|1 roll=200|sausage saloon cheese griller
sausage-saloon-russian-roll|Sausage Saloon Russian roll|RS|270|9|20|17|1 roll=200|sausage saloon russian roll
sausage-saloon-chilli-bite-roll|Sausage Saloon Chilli bite roll|RS|260|10|20|15.5|1 roll=200|sausage saloon chilli
sausage-saloon-beef-burger|Sausage Saloon Beef burger|RS|250|12|21|13|1 burger=200|sausage saloon burger
sausage-saloon-chicken-burger|Sausage Saloon Chicken burger|RS|240|11|22|12|1 burger=200|sausage saloon chicken burger
sausage-saloon-chips-regular|Sausage Saloon Chips (regular)|RS|287|4|36|14|1 regular=150|sausage saloon chips
sausage-saloon-hot-dog|Sausage Saloon Hot dog|RS|253|8.7|24|13.3|1 roll=150|sausage saloon hotdog vienna
anat-chicken-shawarma-pita|Anat Chicken shawarma pita|RS|207|12|18.7|9|1 pita=300|anat shawarma pita chicken
anat-beef-shawarma-pita|Anat Beef shawarma pita|RS|227|11.3|18.7|11.7|1 pita=300|anat shawarma beef
anat-falafel-pita|Anat Falafel pita|RS|207|6|24|9.3|1 pita=300|anat falafel vegetarian
anat-chicken-shawarma-laffa|Anat Chicken shawarma laffa|RS|205|11|20.5|8.5|1 laffa=400|anat laffa wrap
anat-falafel-balls-6|Anat Falafel balls (6)|RS|317|10|30|17.5|6 pieces=120|anat falafel
anat-hummus|Anat Hummus|RS|250|7|14|18|1 portion=100|anat hummus
anat-chips-regular|Anat Chips (regular)|RS|287|4|36|14|1 regular=150|anat chips
anat-chicken-schnitzel-pita|Anat Chicken schnitzel pita|RS|233|11.3|22.7|10.7|1 pita=300|anat schnitzel pita
king-pie-steak-and-kidney-pie|King Pie Steak and Kidney pie|RS|278|8.9|24.4|16.1|1 pie=180|king pie steak kidney
king-pie-chicken-and-mushroom-pie|King Pie Chicken and Mushroom pie|RS|272|8.3|24.4|15.6|1 pie=180|king pie chicken mushroom
king-pie-pepper-steak-pie|King Pie Pepper Steak pie|RS|278|9.4|24.4|16.1|1 pie=180|king pie pepper steak
king-pie-beef-mince-pie|King Pie Beef Mince pie|RS|283|8.9|24.4|16.7|1 pie=180|king pie mince
king-pie-chicken-pie|King Pie Chicken pie|RS|267|8.3|24.4|15|1 pie=180|king pie chicken
king-pie-cheese-and-russian-pie|King Pie Cheese and Russian pie|RS|311|8.9|24.4|20|1 pie=180|king pie russian cheese
king-pie-steak-and-cheese-pie|King Pie Steak and Cheese pie|RS|294|10.6|24.4|17.2|1 pie=180|king pie steak cheese
king-pie-sausage-roll|King Pie Sausage roll|RS|333|8.3|25|22.5|1 roll=120|king pie sausage roll
king-pie-bacon-and-egg-pie|King Pie Bacon and Egg pie|RS|294|9.4|23.5|18.2|1 pie=170|king pie bacon egg breakfast
king-pie-chicken-curry-pie|King Pie Chicken Curry pie|RS|272|8.3|25.6|15|1 pie=180|king pie curry chicken
king-pie-spinach-and-feta-pie|King Pie Spinach and Feta pie|RS|265|7.1|24.7|15.3|1 pie=170|king pie spinach feta vegetarian
pie-city-pepper-steak-pie|Pie City Pepper Steak pie|RS|278|9.4|24.4|16.1|1 pie=180|pie city pepper steak
pie-city-chicken-and-mushroom-pie|Pie City Chicken and Mushroom pie|RS|272|8.3|24.4|15.6|1 pie=180|pie city chicken mushroom
pie-city-steak-and-kidney-pie|Pie City Steak and Kidney pie|RS|278|8.9|24.4|16.1|1 pie=180|pie city steak kidney
pie-city-mince-and-cheese-pie|Pie City Mince and Cheese pie|RS|300|10.6|24.4|17.8|1 pie=180|pie city mince cheese
pie-city-chicken-tikka-pie|Pie City Chicken Tikka pie|RS|272|8.9|25|15|1 pie=180|pie city tikka chicken
pie-city-cheese-and-russian-pie|Pie City Cheese and Russian pie|RS|311|8.9|24.4|20|1 pie=180|pie city russian cheese
pie-city-sausage-roll|Pie City Sausage roll|RS|333|8.3|25|22.5|1 roll=120|pie city sausage roll
pie-city-lamb-pie|Pie City Lamb pie|RS|294|9.4|23.9|17.8|1 pie=180|pie city lamb
cappuccino-full-cream-small|Cappuccino, full cream, small|RS|43|2.3|3.2|2.3|1 small=250|coffee shop cappuccino fullcream|L
cappuccino-low-fat-small|Cappuccino, low fat, small|RS|35|2.4|3.3|1.4|1 small=250|coffee shop cappuccino lowfat skim|L
cappuccino-oat-milk-small|Cappuccino, oat milk, small|RS|39|0.8|4.5|2|1 small=250|coffee shop cappuccino oat|L
cappuccino-full-cream-regular|Cappuccino, full cream, regular|RS|43|2.3|3.2|2.3|1 regular=350|coffee shop cappuccino fullcream|L
cappuccino-low-fat-regular|Cappuccino, low fat, regular|RS|35|2.4|3.3|1.4|1 regular=350|coffee shop cappuccino lowfat skim|L
cappuccino-oat-milk-regular|Cappuccino, oat milk, regular|RS|40|0.7|4.5|2.1|1 regular=350|coffee shop cappuccino oat|L
cappuccino-full-cream-large|Cappuccino, full cream, large|RS|43|2.3|3.2|2.3|1 large=450|coffee shop cappuccino fullcream|L
cappuccino-low-fat-large|Cappuccino, low fat, large|RS|35|2.4|3.3|1.4|1 large=450|coffee shop cappuccino lowfat skim|L
cappuccino-oat-milk-large|Cappuccino, oat milk, large|RS|40|0.7|4.6|2.1|1 large=450|coffee shop cappuccino oat|L
cafe-latte-full-cream-small|Cafe latte, full cream, small|RS|53|2.8|4|2.8|1 small=250|coffee shop latte fullcream|L
cafe-latte-low-fat-small|Cafe latte, low fat, small|RS|43|2.9|4|1.7|1 small=250|coffee shop latte lowfat skim|L
cafe-latte-oat-milk-small|Cafe latte, oat milk, small|RS|48|0.9|5.6|2.5|1 small=250|coffee shop latte oat|L
cafe-latte-full-cream-regular|Cafe latte, full cream, regular|RS|54|2.9|4|2.9|1 regular=350|coffee shop latte fullcream|L
cafe-latte-low-fat-regular|Cafe latte, low fat, regular|RS|44|3|4.1|1.7|1 regular=350|coffee shop latte lowfat skim|L
cafe-latte-oat-milk-regular|Cafe latte, oat milk, regular|RS|49|0.9|5.7|2.6|1 regular=350|coffee shop latte oat|L
cafe-latte-full-cream-large|Cafe latte, full cream, large|RS|54|2.9|4.1|3|1 large=450|coffee shop latte fullcream|L
cafe-latte-low-fat-large|Cafe latte, low fat, large|RS|44|3|4.2|1.7|1 large=450|coffee shop latte lowfat skim|L
cafe-latte-oat-milk-large|Cafe latte, oat milk, large|RS|50|0.9|5.7|2.6|1 large=450|coffee shop latte oat|L
flat-white-full-cream-regular|Flat white, full cream, regular|RS|49|2.6|3.6|2.6|1 cup=220|coffee shop flat white fullcream|L
flat-white-low-fat-regular|Flat white, low fat, regular|RS|40|2.7|3.7|1.5|1 cup=220|coffee shop flat white lowfat skim|L
flat-white-oat-milk-regular|Flat white, oat milk, regular|RS|45|0.9|5.1|2.3|1 cup=220|coffee shop flat white oat|L
mocha-full-cream-small|Mocha, full cream, small|RS|62|2.3|8|2.4|1 small=250|coffee shop mochachino chocolate fullcream|L
mocha-low-fat-small|Mocha, low fat, small|RS|56|2.4|8.1|1.5|1 small=250|coffee shop mochachino chocolate lowfat skim|L
mocha-oat-milk-small|Mocha, oat milk, small|RS|59|0.9|9.2|2.1|1 small=250|coffee shop mochachino chocolate oat|L
mocha-full-cream-regular|Mocha, full cream, regular|RS|66|2.4|8.5|2.5|1 regular=350|coffee shop mochachino chocolate fullcream|L
mocha-low-fat-regular|Mocha, low fat, regular|RS|59|2.5|8.6|1.6|1 regular=350|coffee shop mochachino chocolate lowfat skim|L
mocha-oat-milk-regular|Mocha, oat milk, regular|RS|63|0.9|9.7|2.2|1 regular=350|coffee shop mochachino chocolate oat|L
mocha-full-cream-large|Mocha, full cream, large|RS|68|2.4|8.8|2.6|1 large=450|coffee shop mochachino chocolate fullcream|L
mocha-low-fat-large|Mocha, low fat, large|RS|60|2.5|8.9|1.6|1 large=450|coffee shop mochachino chocolate lowfat skim|L
mocha-oat-milk-large|Mocha, oat milk, large|RS|64|1|10|2.3|1 large=450|coffee shop mochachino chocolate oat|L
hot-chocolate-full-cream-regular|Hot chocolate, full cream, regular|RS|86|3.4|10.5|3.4|1 regular=350|coffee shop hot choc cocoa fullcream|L
hot-chocolate-low-fat-regular|Hot chocolate, low fat, regular|RS|76|3.5|10.5|2.2|1 regular=350|coffee shop hot choc cocoa lowfat skim|L
hot-chocolate-oat-milk-regular|Hot chocolate, oat milk, regular|RS|82|1.4|12.1|3.1|1 regular=350|coffee shop hot choc cocoa oat|L
hot-chocolate-full-cream-large|Hot chocolate, full cream, large|RS|88|3.4|10.7|3.5|1 large=450|coffee shop hot choc cocoa fullcream|L
hot-chocolate-low-fat-large|Hot chocolate, low fat, large|RS|78|3.5|10.8|2.3|1 large=450|coffee shop hot choc cocoa lowfat skim|L
hot-chocolate-oat-milk-large|Hot chocolate, oat milk, large|RS|84|1.4|12.4|3.1|1 large=450|coffee shop hot choc cocoa oat|L
chai-latte-full-cream-regular|Chai latte, full cream, regular|RS|79|2.8|10.4|2.9|1 regular=350|coffee shop chai tea latte spiced fullcream|L
chai-latte-low-fat-regular|Chai latte, low fat, regular|RS|70|2.9|10.5|1.8|1 regular=350|coffee shop chai tea latte spiced lowfat skim|L
chai-latte-oat-milk-regular|Chai latte, oat milk, regular|RS|75|0.9|11.9|2.6|1 regular=350|coffee shop chai tea latte spiced oat|L
chai-latte-full-cream-large|Chai latte, full cream, large|RS|82|2.8|11|3|1 large=450|coffee shop chai tea latte spiced fullcream|L
chai-latte-low-fat-large|Chai latte, low fat, large|RS|72|2.8|11.1|1.8|1 large=450|coffee shop chai tea latte spiced lowfat skim|L
chai-latte-oat-milk-large|Chai latte, oat milk, large|RS|77|0.9|12.5|2.6|1 large=450|coffee shop chai tea latte spiced oat|L
iced-coffee-with-ice-cream-full-cream-regular|Iced coffee with ice cream, full cream, regular|RS|81|2.9|8.5|3.9|1 regular=350|coffee shop iced cold fullcream|L
iced-coffee-with-ice-cream-low-fat-regular|Iced coffee with ice cream, low fat, regular|RS|72|3|8.6|2.9|1 regular=350|coffee shop iced cold lowfat skim|L
iced-coffee-with-ice-cream-oat-milk-regular|Iced coffee with ice cream, oat milk, regular|RS|77|1.3|9.9|3.6|1 regular=350|coffee shop iced cold oat|L
iced-coffee-with-ice-cream-full-cream-large|Iced coffee with ice cream, full cream, large|RS|72|2.8|7.3|3.5|1 large=450|coffee shop iced cold fullcream|L
iced-coffee-with-ice-cream-low-fat-large|Iced coffee with ice cream, low fat, large|RS|64|2.9|7.4|2.5|1 large=450|coffee shop iced cold lowfat skim|L
iced-coffee-with-ice-cream-oat-milk-large|Iced coffee with ice cream, oat milk, large|RS|69|1.2|8.7|3.2|1 large=450|coffee shop iced cold oat|L
coffee-frappe-full-cream-regular|Coffee frappe, full cream, regular|RS|74|1.8|11.6|2.3|1 regular=400|coffee shop frappe frappuccino blended ice fullcream|L
coffee-frappe-low-fat-regular|Coffee frappe, low fat, regular|RS|69|1.8|11.7|1.7|1 regular=400|coffee shop frappe frappuccino blended ice lowfat skim|L
coffee-frappe-oat-milk-regular|Coffee frappe, oat milk, regular|RS|72|0.8|12.5|2.1|1 regular=400|coffee shop frappe frappuccino blended ice oat|L
coffee-frappe-full-cream-large|Coffee frappe, full cream, large|RS|80|1.9|12.5|2.4|1 large=500|coffee shop frappe frappuccino blended ice fullcream|L
coffee-frappe-low-fat-large|Coffee frappe, low fat, large|RS|74|1.9|12.6|1.8|1 large=500|coffee shop frappe frappuccino blended ice lowfat skim|L
coffee-frappe-oat-milk-large|Coffee frappe, oat milk, large|RS|77|0.8|13.4|2.2|1 large=500|coffee shop frappe frappuccino blended ice oat|L
red-cappuccino-rooibos-full-cream-regular|Red cappuccino (rooibos), full cream, regular|RS|43|2.3|3.2|2.3|1 regular=350|coffee shop red espresso rooibos cappuccino caffeine free fullcream|L
red-cappuccino-rooibos-low-fat-regular|Red cappuccino (rooibos), low fat, regular|RS|35|2.4|3.3|1.4|1 regular=350|coffee shop red espresso rooibos cappuccino caffeine free lowfat skim|L
red-cappuccino-rooibos-oat-milk-regular|Red cappuccino (rooibos), oat milk, regular|RS|40|0.7|4.5|2.1|1 regular=350|coffee shop red espresso rooibos cappuccino caffeine free oat|L
espresso-single|Espresso, single|RS|10|0.3|1.7|0.3|1 single=30|coffee shop espresso shot|L
espresso-double|Espresso, double|RS|8|0.5|1.3|0.3|1 double=60|coffee shop doppio espresso shot|L
americano-black-regular|Americano, black, regular|RS|2|0.1|0.4|0|1 regular=350|coffee shop black long|L
americano-black-large|Americano, black, large|RS|3|0.1|0.4|0|1 large=450|coffee shop black long|L
americano-with-full-cream-milk-regular|Americano with full cream milk, regular|RS|10|0.5|1|0.5|1 regular=350|coffee shop white americano|L
cortado-full-cream|Cortado, full cream|RS|33|1.8|2.5|1.8|1 cortado=120|coffee shop cortado gibraltar|L
macchiato-full-cream|Macchiato, full cream|RS|23|1.3|1.8|1.2|1 macchiato=60|coffee shop espresso macchiato|L
filter-coffee-black|Filter coffee, black|RS|2|0.1|0.3|0|1 mug=300|coffee shop filter drip|L
whipped-cream-topping|Whipped cream topping|RS|347|2|10|33.3|1 serving=15|coffee shop cream topping
flavoured-syrup-shot|Flavoured syrup shot|RS|320|0|80|0|1 pump=10|coffee shop syrup vanilla caramel hazelnut|L
sugar-sachet|Sugar sachet|RS|400|0|100|0|1 sachet=5|coffee shop sugar
mugg-bean-bran-and-raisin-muffin|Mugg & Bean Bran and raisin muffin|RS|283|5|43.3|10|1 muffin=180|mugg & bean muffin bran
mugg-bean-carrot-muffin|Mugg & Bean Carrot muffin|RS|300|3.9|41.1|13.3|1 muffin=180|mugg & bean muffin carrot
mugg-bean-lemon-poppy-seed-muffin|Mugg & Bean Lemon poppy seed muffin|RS|308|3.9|44.4|12.8|1 muffin=180|mugg & bean muffin lemon
mugg-bean-cheese-and-tomato-savoury-muffin|Mugg & Bean Cheese and tomato savoury muffin|RS|286|8.2|34.1|12.9|1 muffin=170|mugg & bean muffin savoury cheese
mugg-bean-carrot-cake-slice|Mugg & Bean Carrot cake slice|RS|300|3|36|16|1 slice=200|mugg & bean cake carrot
mugg-bean-chocolate-cake-slice|Mugg & Bean Chocolate cake slice|RS|289|3.5|35|15|1 slice=200|mugg & bean cake chocolate
mugg-bean-red-velvet-cake-slice|Mugg & Bean Red velvet cake slice|RS|286|2.6|35.8|14.7|1 slice=190|mugg & bean cake red velvet
mugg-bean-lemon-meringue-slice|Mugg & Bean Lemon meringue slice|RS|234|2.5|36.2|8.8|1 slice=160|mugg & bean tart lemon meringue
mugg-bean-scone-with-jam-and-cream|Mugg & Bean Scone with jam and cream|RS|296|4.4|38.8|13.8|1 serving=160|mugg & bean scone
mugg-bean-butter-croissant|Mugg & Bean Butter croissant|RS|391|7.5|42.5|21.2|1 croissant=80|mugg & bean croissant
mugg-bean-early-bird-breakfast|Mugg & Bean Early Bird breakfast|RS|169|8|13.3|9.3|1 plate=300|mugg & bean breakfast eggs bacon toast
mugg-bean-farm-style-breakfast|Mugg & Bean Farm style breakfast|RS|165|7.9|10.8|10|1 plate=480|mugg & bean breakfast full eggs bacon sausage
mugg-bean-cheese-and-mushroom-omelette|Mugg & Bean Cheese and mushroom omelette|RS|164|8.5|7.9|10.9|1 plate=330|mugg & bean omelette eggs
mugg-bean-french-toast-with-bacon-and-syrup|Mugg & Bean French toast with bacon and syrup|RS|217|7.5|24.4|10|1 plate=320|mugg & bean french toast bacon
mugg-bean-health-breakfast-yoghurt-muesli-and-fruit|Mugg & Bean Health breakfast yoghurt muesli and fruit|RS|129|4|20.6|3.4|1 bowl=350|mugg & bean muesli yoghurt granola
mugg-bean-toasted-chicken-mayo-sandwich|Mugg & Bean Toasted chicken mayo sandwich|RS|193|10.8|18.5|8.5|1 sandwich=260|mugg & bean toastie chicken mayo
mugg-bean-toasted-cheese-and-tomato-sandwich|Mugg & Bean Toasted cheese and tomato sandwich|RS|190|7.8|20|8.7|1 sandwich=230|mugg & bean toastie cheese tomato
mugg-bean-club-sandwich|Mugg & Bean Club sandwich|RS|184|9.5|16.3|8.9|1 serving=380|mugg & bean sandwich club
mugg-bean-chicken-and-mushroom-wrap|Mugg & Bean Chicken and mushroom wrap|RS|164|10|16.9|6.2|1 wrap=320|mugg & bean wrap chicken
mugg-bean-chicken-caesar-salad|Mugg & Bean Chicken Caesar salad|RS|133|8.9|5.3|8.4|1 bowl=380|mugg & bean salad caesar
mugg-bean-flat-white-full-cream|Mugg & Bean Flat white, full cream|RS|52|2.8|4|2.8|1 cup=250|mugg & bean coffee flat white|L
mugg-bean-americano-regular|Mugg & Bean Americano, regular|RS|3|0.1|0.4|0.1|1 regular=350|mugg & bean black coffee|L
mugg-bean-mochaccino-full-cream-regular|Mugg & Bean Mochaccino, full cream, regular|RS|73|2.5|9.5|2.8|1 regular=400|mugg & bean mocha coffee chocolate|L
mugg-bean-hot-chocolate-full-cream-regular|Mugg & Bean Hot chocolate, full cream, regular|RS|80|2.8|10.5|3|1 regular=400|mugg & bean hot choc|L
mugg-bean-chai-latte-full-cream-regular|Mugg & Bean Chai latte, full cream, regular|RS|72|2.5|10|2.5|1 regular=400|mugg & bean chai|L
mugg-bean-iced-coffee-regular|Mugg & Bean Iced coffee, regular|RS|85|2.2|11.6|3.3|1 regular=450|mugg & bean iced coffee|L
mugg-bean-red-cappuccino-full-cream|Mugg & Bean Red cappuccino, full cream|RS|43|2.3|3.4|2.3|1 regular=350|mugg & bean rooibos red espresso|L
mugg-bean-berry-smoothie|Mugg & Bean Berry smoothie|RS|71|2|13.8|0.9|1 regular=450|mugg & bean smoothie berry|L
mugg-bean-freshly-squeezed-orange-juice|Mugg & Bean Freshly squeezed orange juice|RS|45|0.7|10.3|0.1|1 regular=350|mugg & bean juice orange|L
vida-e-caff-vida-cappuccino-full-cream-regular|Vida e Caffè Vida cappuccino, full cream, regular|RS|43|2.3|3.4|2.3|1 regular=350|vida e caffè coffee cappuccino|L
vida-e-caff-vida-cappuccino-full-cream-large|Vida e Caffè Vida cappuccino, full cream, large|RS|42|2.2|3.3|2.2|1 large=450|vida e caffè coffee cappuccino|L
vida-e-caff-cappuccino-oat-milk-regular|Vida e Caffè Cappuccino, oat milk, regular|RS|41|0.9|4.9|2|1 regular=350|vida e caffè coffee cappuccino oat|L
vida-e-caff-caff-latte-full-cream-regular|Vida e Caffè Caffè latte, full cream, regular|RS|49|2.6|4|2.6|1 regular=350|vida e caffè coffee latte|L
vida-e-caff-flat-white-full-cream|Vida e Caffè Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|vida e caffè coffee|L
vida-e-caff-americano-regular|Vida e Caffè Americano, regular|RS|3|0.1|0.4|0.1|1 regular=350|vida e caffè black coffee|L
vida-e-caff-mochaccino-full-cream-regular|Vida e Caffè Mochaccino, full cream, regular|RS|75|2.6|9.7|2.9|1 regular=350|vida e caffè mocha chocolate coffee|L
vida-e-caff-red-cappuccino-full-cream|Vida e Caffè Red cappuccino, full cream|RS|43|2.3|3.4|2.3|1 regular=350|vida e caffè rooibos red espresso|L
vida-e-caff-chai-latte-full-cream-regular|Vida e Caffè Chai latte, full cream, regular|RS|75|2.6|10.3|2.6|1 regular=350|vida e caffè chai|L
vida-e-caff-hot-chocolate-full-cream-regular|Vida e Caffè Hot chocolate, full cream, regular|RS|85|2.9|11.4|3.1|1 regular=350|vida e caffè hot choc|L
vida-e-caff-iced-latte-full-cream|Vida e Caffè Iced latte, full cream|RS|38|2|3|2|1 regular=400|vida e caffè iced coffee|L
vida-e-caff-caramel-iced-caff|Vida e Caffè Caramel iced caffè|RS|86|1.8|13.8|2.7|1 regular=450|vida e caffè iced coffee blended caramel|L
vida-e-caff-berry-smoothie|Vida e Caffè Berry smoothie|RS|66|1.8|13.3|0.7|1 regular=450|vida e caffè smoothie|L
vida-e-caff-pastel-de-nata|Vida e Caffè Pastel de nata|RS|300|5.7|37.1|14.3|1 tart=70|vida e caffè custard tart portuguese
vida-e-caff-plain-croissant|Vida e Caffè Plain croissant|RS|395|8|42.7|21.3|1 croissant=75|vida e caffè croissant
vida-e-caff-ham-and-cheese-croissant|Vida e Caffè Ham and cheese croissant|RS|297|11.4|24.3|17.1|1 croissant=140|vida e caffè croissant ham cheese
vida-e-caff-chicken-mayo-panini|Vida e Caffè Chicken mayo panini|RS|206|11.3|22.6|7.8|1 panini=230|vida e caffè panini chicken sandwich
vida-e-caff-cheese-and-tomato-panini|Vida e Caffè Cheese and tomato panini|RS|207|8.6|23.8|8.6|1 panini=210|vida e caffè panini toastie
vida-e-caff-blueberry-muffin|Vida e Caffè Blueberry muffin|RS|312|4|44|13.3|1 muffin=150|vida e caffè muffin
vida-e-caff-chocolate-brownie|Vida e Caffè Chocolate brownie|RS|456|5.6|53.3|24.4|1 brownie=90|vida e caffè brownie
vida-e-caff-chicken-pesto-wrap|Vida e Caffè Chicken pesto wrap|RS|173|10|17.1|7.1|1 wrap=280|vida e caffè wrap chicken
starbucks-caff-latte-tall-2|Starbucks Caffè Latte, tall, 2%|RS|42|2.8|4.2|1.7|1 tall=354|starbucks latte coffee us|L
starbucks-caff-latte-venti-2|Starbucks Caffè Latte, venti, 2%|RS|42|2.7|4.2|1.5|1 venti=591|starbucks latte coffee us|L
starbucks-caff-latte-grande-oat-milk|Starbucks Caffè Latte, grande, oat milk|RS|57|0.8|7.8|2.3|1 grande=473|starbucks latte oat coffee us|L
starbucks-cappuccino-tall-2|Starbucks Cappuccino, tall, 2%|RS|28|2|2.8|1.1|1 tall=354|starbucks cappuccino coffee us|L
starbucks-cappuccino-venti-2|Starbucks Cappuccino, venti, 2%|RS|34|2.2|3.2|1.2|1 venti=591|starbucks cappuccino coffee us|L
starbucks-caff-americano-grande|Starbucks Caffè Americano, grande|RS|3|0.2|0.4|0|1 grande=473|starbucks americano black coffee us|L
starbucks-flat-white-grande-whole-milk|Starbucks Flat White, grande, whole milk|RS|47|2.5|3.8|2.3|1 grande=473|starbucks flat white coffee us|L
starbucks-caff-mocha-grande-2-with-whip|Starbucks Caffè Mocha, grande, 2% with whip|RS|78|3|9.1|3.2|1 grande=473|starbucks mocha chocolate coffee us|L
starbucks-caff-mocha-tall-2-with-whip|Starbucks Caffè Mocha, tall, 2% with whip|RS|82|2.8|9.3|3.7|1 tall=354|starbucks mocha chocolate coffee us|L
starbucks-white-chocolate-mocha-grande-2-with-whip|Starbucks White Chocolate Mocha, grande, 2% with whip|RS|91|3.2|11.4|3.8|1 grande=473|starbucks white mocha us|L
starbucks-caramel-macchiato-tall-2|Starbucks Caramel Macchiato, tall, 2%|RS|54|2|7.1|2|1 tall=354|starbucks caramel macchiato us|L
starbucks-iced-caff-latte-grande-2|Starbucks Iced Caffè Latte, grande, 2%|RS|27|1.7|2.7|1|1 grande=473|starbucks iced latte us|L
starbucks-iced-caramel-macchiato-grande-2|Starbucks Iced Caramel Macchiato, grande, 2%|RS|53|2.1|7.8|1.5|1 grande=473|starbucks iced caramel macchiato us|L
starbucks-pumpkin-spice-latte-grande-2-with-whip|Starbucks Pumpkin Spice Latte, grande, 2% with whip|RS|82|3|11|3|1 grande=473|starbucks psl pumpkin us|L
starbucks-hot-chocolate-grande-2-with-whip|Starbucks Hot Chocolate, grande, 2% with whip|RS|78|3|9.1|3.4|1 grande=473|starbucks hot choc cocoa us|L
starbucks-chai-tea-latte-tall-2|Starbucks Chai Tea Latte, tall, 2%|RS|54|1.7|9.3|1|1 tall=354|starbucks chai us|L
starbucks-cold-brew-grande|Starbucks Cold Brew, grande|RS|1|0|0|0|1 grande=473|starbucks cold brew black coffee us|L
starbucks-iced-brown-sugar-oatmilk-shaken-espresso-grand|Starbucks Iced Brown Sugar Oatmilk Shaken Espresso, grande|RS|25|0.2|4.2|0.6|1 grande=473|starbucks shaken espresso oat us|L
starbucks-mocha-frappuccino-grande|Starbucks Mocha Frappuccino, grande|RS|78|1.1|11.4|3.2|1 grande=473|starbucks frappuccino frappe mocha us|L
starbucks-caramel-ribbon-crunch-frappuccino-grande|Starbucks Caramel Ribbon Crunch Frappuccino, grande|RS|99|1.1|14.4|4.4|1 grande=473|starbucks frappuccino frappe caramel us|L
starbucks-strawberry-cr-me-frappuccino-grande|Starbucks Strawberry Crème Frappuccino, grande|RS|78|1.1|12.1|3.2|1 grande=473|starbucks frappuccino frappe strawberry us|L
starbucks-vanilla-bean-cr-me-frappuccino-grande|Starbucks Vanilla Bean Crème Frappuccino, grande|RS|80|1.1|12.1|3.4|1 grande=473|starbucks frappuccino frappe vanilla us|L
starbucks-double-chocolaty-chip-cr-me-frappuccino-grande|Starbucks Double Chocolaty Chip Crème Frappuccino, grande|RS|87|1.3|12.5|3.8|1 grande=473|starbucks frappuccino frappe chocolate us|L
starbucks-butter-croissant|Starbucks Butter croissant|RS|382|7.4|41.2|20.6|1 croissant=68|starbucks croissant us
starbucks-chocolate-croissant|Starbucks Chocolate croissant|RS|375|6.2|38.8|21.2|1 croissant=80|starbucks pain au chocolat us
starbucks-blueberry-muffin|Starbucks Blueberry muffin|RS|319|4.4|46|13.3|1 muffin=113|starbucks muffin us
starbucks-banana-bread-slice|Starbucks Banana bread slice|RS|375|5.4|46.4|18.8|1 slice=112|starbucks banana loaf us
starbucks-chocolate-chip-cookie|Starbucks Chocolate chip cookie|RS|480|5.3|64|22.7|1 cookie=75|starbucks cookie biscuit us
starbucks-birthday-cake-pop|Starbucks Birthday cake pop|RS|372|4.7|51.2|16.3|1 cake pop=43|starbucks cake pop us
starbucks-bacon-gouda-and-egg-sandwich|Starbucks Bacon, Gouda and Egg sandwich|RS|300|15.8|28.3|15|1 sandwich=120|starbucks breakfast sandwich us
seattle-coffee-company-cappuccino-full-cream-regular|Seattle Coffee Company Cappuccino, full cream, regular|RS|43|2.3|3.4|2.3|1 regular=350|seattle coffee company cappuccino|L
seattle-coffee-company-cappuccino-low-fat-regular|Seattle Coffee Company Cappuccino, low fat, regular|RS|36|2.3|3.4|1.4|1 regular=350|seattle coffee company cappuccino|L
seattle-coffee-company-caff-latte-full-cream-regular|Seattle Coffee Company Caffè latte, full cream, regular|RS|49|2.6|4|2.6|1 regular=350|seattle coffee company latte|L
seattle-coffee-company-flat-white-full-cream|Seattle Coffee Company Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|seattle coffee company|L
seattle-coffee-company-americano-regular|Seattle Coffee Company Americano, regular|RS|3|0.1|0.4|0.1|1 regular=350|seattle coffee company black|L
seattle-coffee-company-caff-mocha-full-cream-regular|Seattle Coffee Company Caffè mocha, full cream, regular|RS|75|2.6|9.7|2.9|1 regular=350|seattle coffee company mocha|L
seattle-coffee-company-chai-latte-full-cream-regular|Seattle Coffee Company Chai latte, full cream, regular|RS|75|2.6|10.3|2.6|1 regular=350|seattle coffee company chai|L
seattle-coffee-company-hot-chocolate-full-cream-regular|Seattle Coffee Company Hot chocolate, full cream, regular|RS|85|2.9|11.4|3.1|1 regular=350|seattle coffee company hot choc|L
seattle-coffee-company-iced-latte-full-cream|Seattle Coffee Company Iced latte, full cream|RS|38|2|3|2|1 regular=400|seattle coffee company iced|L
seattle-coffee-company-caramel-frappe|Seattle Coffee Company Caramel frappe|RS|88|1.3|14.2|2.9|1 regular=450|seattle coffee company frappe blended|L
seattle-coffee-company-blueberry-muffin|Seattle Coffee Company Blueberry muffin|RS|316|4.3|44.3|13.6|1 muffin=140|seattle coffee company muffin
seattle-coffee-company-bran-muffin|Seattle Coffee Company Bran muffin|RS|288|5|42.9|10.7|1 muffin=140|seattle coffee company muffin bran
seattle-coffee-company-butter-croissant|Seattle Coffee Company Butter croissant|RS|395|8|42.7|21.3|1 croissant=75|seattle coffee company croissant
seattle-coffee-company-chocolate-brownie|Seattle Coffee Company Chocolate brownie|RS|456|5.6|53.3|24.4|1 brownie=90|seattle coffee company brownie
kauai-green-machine-smoothie|Kauai Green Machine smoothie|RS|55|1.2|11.6|0.4|1 regular=500|kauai smoothie green|L
kauai-tropical-smoothie|Kauai Tropical smoothie|RS|64|1|14.4|0.3|1 regular=500|kauai smoothie tropical mango pineapple|L
kauai-banana-berry-smoothie|Kauai Banana Berry smoothie|RS|71|1.6|14.8|0.6|1 regular=500|kauai smoothie banana berry|L
kauai-mango-tango-smoothie|Kauai Mango Tango smoothie|RS|72|1.4|15.2|0.6|1 regular=500|kauai smoothie mango|L
kauai-coffee-peanut-butter-smoothie|Kauai Coffee Peanut Butter smoothie|RS|94|4|12.4|3.2|1 regular=500|kauai smoothie coffee peanut butter|L
kauai-chocolate-whey-protein-shake|Kauai Chocolate whey protein shake|RS|64|6.8|6.4|1.2|1 regular=500|kauai protein shake chocolate|L
kauai-vanilla-whey-protein-shake|Kauai Vanilla whey protein shake|RS|62|6.8|6|1.2|1 regular=500|kauai protein shake vanilla|L
kauai-berry-protein-shake|Kauai Berry protein shake|RS|66|6|8.8|0.8|1 regular=500|kauai protein shake berry|L
kauai-lean-machine-protein-smoothie|Kauai Lean Machine protein smoothie|RS|57|5.6|6.8|0.8|1 regular=500|kauai protein shake lean|L
kauai-fresh-orange-juice|Kauai Fresh orange juice|RS|44|0.8|10|0.1|1 regular=400|kauai juice orange|L
kauai-green-juice|Kauai Green juice|RS|32|0.8|7|0.1|1 regular=400|kauai juice green celery apple|L
kauai-carrot-apple-and-ginger-juice|Kauai Carrot, apple and ginger juice|RS|46|0.6|10.5|0.1|1 regular=400|kauai juice carrot|L
kauai-acai-bowl|Kauai Acai bowl|RS|117|2|20.5|3|1 bowl=400|kauai acai smoothie bowl
kauai-chicken-and-avo-power-bowl|Kauai Chicken and avo power bowl|RS|121|8.5|10.5|5|1 bowl=400|kauai bowl chicken avocado
kauai-quinoa-and-roast-veg-bowl|Kauai Quinoa and roast veg bowl|RS|114|3.7|15.3|4.2|1 bowl=380|kauai bowl vegan quinoa
kauai-chicken-mayo-wrap|Kauai Chicken Mayo wrap|RS|169|10.7|17.1|6.4|1 wrap=280|kauai wrap chicken
kauai-sweet-chilli-chicken-wrap|Kauai Sweet Chilli Chicken wrap|RS|156|10.3|19.3|4.1|1 wrap=290|kauai wrap chicken sweet chilli
kauai-falafel-wrap|Kauai Falafel wrap|RS|170|4.8|22.1|6.9|1 wrap=290|kauai wrap vegan falafel
kauai-chicken-and-cheese-toastie|Kauai Chicken and cheese toastie|RS|181|12.7|18.2|6.4|1 toastie=220|kauai toastie sandwich
kauai-oats-and-berries-breakfast-pot|Kauai Oats and berries breakfast pot|RS|115|4|18|3|1 pot=300|kauai oats overnight breakfast
krispy-kreme-original-glazed-doughnut|Krispy Kreme Original Glazed doughnut|RS|388|6.1|44.9|22.4|1 doughnut=49|krispy kreme doughnut donut original us
krispy-kreme-chocolate-iced-glazed-doughnut|Krispy Kreme Chocolate Iced Glazed doughnut|RS|381|4.8|52.4|17.5|1 doughnut=63|krispy kreme doughnut donut chocolate us
krispy-kreme-chocolate-iced-glazed-with-sprinkles-doughn|Krispy Kreme Chocolate Iced Glazed with Sprinkles doughnut|RS|394|4.5|54.5|16.7|1 doughnut=66|krispy kreme doughnut donut chocolate us
krispy-kreme-strawberry-iced-with-sprinkles-doughnut|Krispy Kreme Strawberry Iced with Sprinkles doughnut|RS|379|4.5|51.5|16.7|1 doughnut=66|krispy kreme doughnut donut strawberry us
krispy-kreme-glazed-raspberry-filled-doughnut|Krispy Kreme Glazed Raspberry Filled doughnut|RS|337|4.7|45.3|16.3|1 doughnut=86|krispy kreme doughnut donut glazed us
krispy-kreme-glazed-lemon-filled-doughnut|Krispy Kreme Glazed Lemon Filled doughnut|RS|337|4.7|41.9|17.4|1 doughnut=86|krispy kreme doughnut donut glazed us
krispy-kreme-glazed-kreme-filled-doughnut|Krispy Kreme Glazed Kreme Filled doughnut|RS|395|4.7|44.2|22.1|1 doughnut=86|krispy kreme doughnut donut glazed us
krispy-kreme-chocolate-iced-kreme-filled-doughnut|Krispy Kreme Chocolate Iced Kreme Filled doughnut|RS|407|4.7|45.3|23.3|1 doughnut=86|krispy kreme doughnut donut chocolate us
krispy-kreme-chocolate-iced-custard-filled-doughnut|Krispy Kreme Chocolate Iced Custard Filled doughnut|RS|349|4.7|43|17.4|1 doughnut=86|krispy kreme doughnut donut chocolate us
krispy-kreme-glazed-blueberry-cake-doughnut|Krispy Kreme Glazed Blueberry Cake doughnut|RS|423|4.2|52.1|22.5|1 doughnut=71|krispy kreme doughnut donut glazed us
krispy-kreme-glazed-chocolate-cake-doughnut|Krispy Kreme Glazed Chocolate Cake doughnut|RS|408|4.2|52.1|21.1|1 doughnut=71|krispy kreme doughnut donut glazed us
krispy-kreme-cookies-and-kreme-doughnut|Krispy Kreme Cookies and Kreme doughnut|RS|407|4.7|46.5|23.3|1 doughnut=86|krispy kreme doughnut donut cookies us
krispy-kreme-caramel-iced-doughnut|Krispy Kreme Caramel Iced doughnut|RS|371|4.3|51.4|17.1|1 doughnut=70|krispy kreme doughnut donut caramel
krispy-kreme-nutella-filled-doughnut|Krispy Kreme Nutella Filled doughnut|RS|419|5.8|48.8|22.1|1 doughnut=86|krispy kreme doughnut donut nutella
krispy-kreme-biscoff-doughnut|Krispy Kreme Biscoff doughnut|RS|430|4.7|51.2|23.3|1 doughnut=86|krispy kreme doughnut donut biscoff
krispy-kreme-mini-original-glazed-doughnut|Krispy Kreme Mini Original Glazed doughnut|RS|400|5|45|22.5|1 doughnut=20|krispy kreme doughnut donut mini
woolworths-caf-cappuccino-full-cream-regular|Woolworths Café Cappuccino, full cream, regular|RS|43|2.3|3.4|2.3|1 regular=350|woolworths café coffee|L
woolworths-caf-flat-white-full-cream|Woolworths Café Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|woolworths café coffee|L
woolworths-caf-chai-latte-full-cream-regular|Woolworths Café Chai latte, full cream, regular|RS|75|2.6|10.3|2.6|1 regular=350|woolworths café chai|L
woolworths-caf-avo-on-toast|Woolworths Café Avo on toast|RS|166|4|17.6|8.8|1 plate=250|woolworths café avocado toast
woolworths-caf-eggs-benedict-with-bacon|Woolworths Café Eggs Benedict with bacon|RS|176|8.8|11.2|10.6|1 plate=320|woolworths café eggs benedict hollandaise
woolworths-caf-greek-yoghurt-and-granola|Woolworths Café Greek yoghurt and granola|RS|139|5|18.6|5|1 bowl=280|woolworths café granola yoghurt
woolworths-caf-chicken-mayo-sandwich|Woolworths Café Chicken mayo sandwich|RS|178|10|18.2|7.3|1 sandwich=220|woolworths café sandwich chicken
woolworths-caf-carrot-cake-slice|Woolworths Café Carrot cake slice|RS|293|2.8|35.6|15.6|1 slice=180|woolworths café cake carrot
woolworths-caf-bran-muffin|Woolworths Café Bran muffin|RS|281|5|42.9|10|1 muffin=140|woolworths café muffin
woolworths-caf-butter-croissant|Woolworths Café Butter croissant|RS|395|8|42.7|21.3|1 croissant=75|woolworths café croissant
tashas-cappuccino-full-cream|Tashas Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|tashas coffee|L
tashas-flat-white-full-cream|Tashas Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|tashas coffee|L
tashas-iced-coffee|Tashas Iced coffee|RS|84|2.2|11|3.5|1 regular=400|tashas iced coffee|L
tashas-eggs-benedict-with-smoked-salmon|Tashas Eggs Benedict with smoked salmon|RS|170|8.8|11.2|10|1 plate=320|tashas eggs benedict salmon
tashas-big-breakfast|Tashas Big breakfast|RS|166|8|10|10.4|1 plate=500|tashas breakfast full
tashas-avo-and-feta-on-toast|Tashas Avo and feta on toast|RS|166|5|15.7|9.3|1 plate=280|tashas avocado toast feta
tashas-shakshuka|Tashas Shakshuka|RS|114|5|10|6|1 bowl=400|tashas shakshuka eggs tomato
tashas-moroccan-chicken-salad|Tashas Moroccan chicken salad|RS|124|8.5|9|6|1 bowl=400|tashas salad chicken
tashas-chicken-schnitzel-with-salad|Tashas Chicken schnitzel with salad|RS|146|10|9.5|7.5|1 plate=400|tashas schnitzel
tashas-french-toast-with-berries|Tashas French toast with berries|RS|186|4.7|25.3|7.3|1 plate=300|tashas french toast
tashas-chocolate-cake-slice|Tashas Chocolate cake slice|RS|291|3|36|15|1 slice=200|tashas cake chocolate
tashas-carrot-cake-slice|Tashas Carrot cake slice|RS|300|3|36|16|1 slice=200|tashas cake
bootlegger-coffee-cappuccino-full-cream-regular|Bootlegger Coffee Cappuccino, full cream, regular|RS|43|2.3|3.4|2.3|1 regular=350|bootlegger coffee|L
bootlegger-coffee-cappuccino-oat-milk-regular|Bootlegger Coffee Cappuccino, oat milk, regular|RS|41|0.9|4.9|2|1 regular=350|bootlegger coffee oat|L
bootlegger-coffee-flat-white-full-cream|Bootlegger Coffee Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|bootlegger coffee|L
bootlegger-coffee-caff-latte-full-cream-regular|Bootlegger Coffee Caffè latte, full cream, regular|RS|49|2.6|4|2.6|1 regular=350|bootlegger coffee latte|L
bootlegger-coffee-red-espresso-latte-full-cream|Bootlegger Coffee Red espresso latte, full cream|RS|49|2.6|4|2.6|1 regular=350|bootlegger coffee rooibos red latte|L
bootlegger-coffee-hot-chocolate-full-cream|Bootlegger Coffee Hot chocolate, full cream|RS|85|2.9|11.4|3.1|1 regular=350|bootlegger coffee hot choc|L
bootlegger-coffee-iced-latte-oat-milk|Bootlegger Coffee Iced latte, oat milk|RS|36|0.5|4.5|1.8|1 regular=400|bootlegger coffee iced oat|L
bootlegger-coffee-bacon-egg-and-cheese-croissant|Bootlegger Coffee Bacon, egg and cheese croissant|RS|270|11.1|18.9|16.7|1 croissant=180|bootlegger coffee croissant breakfast
bootlegger-coffee-granola-bowl-with-yoghurt-and-fruit|Bootlegger Coffee Granola bowl with yoghurt and fruit|RS|140|4.4|19.4|5|1 bowl=320|bootlegger coffee granola bowl
bootlegger-coffee-breakfast-bowl|Bootlegger Coffee Breakfast bowl|RS|129|6.8|8.9|7.4|1 bowl=380|bootlegger coffee breakfast eggs avo bowl
bootlegger-coffee-banana-bread-slice|Bootlegger Coffee Banana bread slice|RS|338|4.5|47.3|14.5|1 slice=110|bootlegger coffee banana loaf
bootlegger-coffee-chicken-pesto-toasted-sandwich|Bootlegger Coffee Chicken pesto toasted sandwich|RS|195|11.7|18.3|8.3|1 sandwich=240|bootlegger coffee toastie chicken
doppio-zero-cappuccino-full-cream|Doppio Zero Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|doppio zero coffee|L
doppio-zero-flat-white-full-cream|Doppio Zero Flat white, full cream|RS|46|2.4|3.6|2.4|1 cup=250|doppio zero coffee|L
doppio-zero-croissant|Doppio Zero Croissant|RS|395|8|42.7|21.3|1 croissant=75|doppio zero croissant
doppio-zero-pain-au-chocolat|Doppio Zero Pain au chocolat|RS|399|7.1|42.4|22.4|1 pastry=85|doppio zero chocolate croissant
doppio-zero-almond-croissant|Doppio Zero Almond croissant|RS|378|7.5|38.3|21.7|1 croissant=120|doppio zero croissant almond
doppio-zero-doppio-breakfast|Doppio Zero Doppio breakfast|RS|159|7.6|10.2|9.8|1 plate=450|doppio zero breakfast eggs bacon
doppio-zero-eggs-benedict-with-bacon|Doppio Zero Eggs Benedict with bacon|RS|176|8.8|11.2|10.6|1 plate=320|doppio zero eggs benedict
doppio-zero-chicken-and-avo-wrap|Doppio Zero Chicken and avo wrap|RS|173|10|15.3|8|1 wrap=300|doppio zero wrap chicken
doppio-zero-baked-cheesecake-slice|Doppio Zero Baked cheesecake slice|RS|303|5.3|25.3|20|1 slice=150|doppio zero cheesecake
doppio-zero-tiramisu|Doppio Zero Tiramisu|RS|267|4|26.7|16|1 portion=150|doppio zero tiramisu dessert
doppio-zero-lemon-meringue-slice|Doppio Zero Lemon meringue slice|RS|234|2.5|36.2|8.8|1 slice=160|doppio zero lemon meringue
doppio-zero-carrot-cake-slice|Doppio Zero Carrot cake slice|RS|300|3|36|16|1 slice=200|doppio zero cake
motherland-coffee-cappuccino-full-cream|Motherland Coffee Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|motherland coffee|L
motherland-coffee-flat-white-full-cream|Motherland Coffee Flat white, full cream|RS|50|2.7|3.6|2.7|1 cup=220|motherland coffee|L
motherland-coffee-latte-oat-milk|Motherland Coffee Latte, oat milk|RS|49|0.9|5.7|2.6|1 regular=350|motherland coffee oat|L
motherland-coffee-americano|Motherland Coffee Americano|RS|2|0.1|0.4|0|1 regular=300|motherland coffee black|L
motherland-coffee-cortado-full-cream|Motherland Coffee Cortado, full cream|RS|33|1.8|2.5|1.8|1 cortado=120|motherland coffee|L
motherland-coffee-butter-croissant|Motherland Coffee Butter croissant|RS|395|8|42.7|21.3|1 croissant=75|motherland coffee croissant
motherland-coffee-banana-bread-slice|Motherland Coffee Banana bread slice|RS|338|4.5|47.3|14.5|1 slice=110|motherland coffee banana loaf
motherland-coffee-cheese-and-tomato-toastie|Motherland Coffee Cheese and tomato toastie|RS|197|8|21|9|1 toastie=200|motherland coffee toastie
cinnabon-classic-roll|Cinnabon Classic Roll|RS|336|5|48.5|14.1|1 roll=262|cinnabon cinnamon roll bun us
cinnabon-minibon|Cinnabon MiniBon|RS|380|5.4|54.3|15.2|1 roll=92|cinnabon cinnamon roll mini us
cinnabon-caramel-pecanbon|Cinnabon Caramel PecanBon|RS|338|4.4|43.8|15.9|1 roll=320|cinnabon cinnamon roll pecan caramel us
cinnabon-chocobon|Cinnabon Chocobon|RS|328|5|48.9|13|1 roll=262|cinnabon cinnamon roll chocolate
cinnabon-center-of-the-roll|Cinnabon Center of the Roll|RS|331|4.8|46.9|13.8|1 portion=145|cinnabon cinnamon roll center
cinnabon-bonbites-4-piece|Cinnabon BonBites, 4 piece|RS|364|5.5|52.7|14.5|4 pieces=110|cinnabon cinnamon bites
cinnabon-cinnabon-stix-5-piece|Cinnabon Cinnabon Stix, 5 piece|RS|323|5.4|38.5|16.2|5 pieces=130|cinnabon cinnamon sticks
cinnabon-mochalatta-chill|Cinnabon Mochalatta Chill|RS|87|1.7|13.5|3|1 regular=473|cinnabon frozen coffee frappe|L
paul-croissant-au-beurre|Paul Croissant au beurre|RS|402|8.3|43.3|21.7|1 croissant=60|paul croissant butter
paul-pain-au-chocolat|Paul Pain au chocolat|RS|403|7.5|42.5|22.5|1 pastry=80|paul chocolate croissant
paul-pain-aux-raisins|Paul Pain aux raisins|RS|326|5.5|45.5|13.6|1 pastry=110|paul raisin pastry
paul-almond-croissant|Paul Almond croissant|RS|378|7.5|38.3|21.7|1 croissant=120|paul croissant amande
paul-macaron|Paul Macaron|RS|473|6.7|66.7|20|1 macaron=15|paul macaroon
paul-chocolate-clair|Paul Chocolate éclair|RS|304|5.6|35.6|15.6|1 eclair=90|paul eclair
paul-tarte-au-citron|Paul Tarte au citron|RS|331|3.6|38.2|18.2|1 tart=110|paul lemon tart
paul-jambon-beurre-baguette|Paul Jambon beurre baguette|RS|260|11|36|8|1 baguette=200|paul ham baguette sandwich
paul-quiche-lorraine-slice|Paul Quiche Lorraine slice|RS|291|8.9|18.9|20|1 slice=180|paul quiche
paul-cappuccino-full-cream|Paul Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|paul coffee|L
n-health-food-caf-green-smoothie|Nü Health Food Café Green smoothie|RS|53|1.1|10.7|0.7|1 regular=450|nü health food café smoothie green|L
n-health-food-caf-berry-protein-smoothie|Nü Health Food Café Berry protein smoothie|RS|72|5.8|9.8|1.1|1 regular=450|nü health food café smoothie protein|L
n-health-food-caf-fresh-green-juice|Nü Health Food Café Fresh green juice|RS|32|0.9|6.9|0.1|1 regular=350|nü health food café juice green|L
n-health-food-caf-acai-bowl|Nü Health Food Café Acai bowl|RS|119|2.1|20.5|3.2|1 bowl=380|nü health food café acai bowl
n-health-food-caf-protein-pancakes|Nü Health Food Café Protein pancakes|RS|141|10|17.1|3.6|1 plate=280|nü health food café pancakes protein
n-health-food-caf-egg-white-omelette|Nü Health Food Café Egg white omelette|RS|86|10|4|3.3|1 plate=300|nü health food café omelette egg white
n-health-food-caf-bircher-muesli|Nü Health Food Café Bircher muesli|RS|132|4.3|20.7|3.6|1 bowl=280|nü health food café muesli oats
n-health-food-caf-n-power-bowl|Nü Health Food Café Nü power bowl|RS|118|7.5|12|4.5|1 bowl=400|nü health food café bowl chicken quinoa
n-health-food-caf-chicken-and-avo-salad|Nü Health Food Café Chicken and avo salad|RS|111|9.1|4.6|6.3|1 bowl=350|nü health food café salad chicken
n-health-food-caf-chicken-and-hummus-wrap|Nü Health Food Café Chicken and hummus wrap|RS|157|10|16.4|5.7|1 wrap=280|nü health food café wrap chicken
fournos-bakery-cheese-croissant|Fournos Bakery Cheese croissant|RS|367|10|32.7|21.8|1 croissant=110|fournos bakery croissant cheese
fournos-bakery-chocolate-croissant|Fournos Bakery Chocolate croissant|RS|394|7|42|22|1 croissant=100|fournos bakery croissant chocolate
fournos-bakery-spinach-and-feta-spanakopita|Fournos Bakery Spinach and feta spanakopita|RS|261|6.7|22.7|16|1 pastry=150|fournos bakery spanakopita pastry
fournos-bakery-chicken-pie|Fournos Bakery Chicken pie|RS|238|8|20|14|1 pie=200|fournos bakery pie chicken
fournos-bakery-baklava|Fournos Bakery Baklava|RS|430|5|50|23.3|1 piece=60|fournos bakery baklava
fournos-bakery-baked-cheesecake-slice|Fournos Bakery Baked cheesecake slice|RS|303|5.3|25.3|20|1 slice=150|fournos bakery cheesecake
fournos-bakery-chocolate-clair|Fournos Bakery Chocolate éclair|RS|300|5|34|16|1 eclair=100|fournos bakery eclair
fournos-bakery-cappuccino-full-cream|Fournos Bakery Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|fournos bakery coffee|L
europa-cappuccino-full-cream|Europa Cappuccino, full cream|RS|44|2.3|3.3|2.3|1 regular=300|europa coffee|L
europa-caff-latte-full-cream|Europa Caffè latte, full cream|RS|49|2.6|4|2.6|1 regular=350|europa coffee|L
europa-europa-breakfast|Europa Europa breakfast|RS|155|7.6|10.2|9.3|1 plate=450|europa breakfast eggs bacon
europa-eggs-benedict-with-bacon|Europa Eggs Benedict with bacon|RS|176|8.8|11.2|10.6|1 plate=320|europa eggs benedict
europa-chicken-caesar-wrap|Europa Chicken Caesar wrap|RS|171|10|14.7|8|1 wrap=300|europa wrap chicken caesar
europa-baked-cheesecake-slice|Europa Baked cheesecake slice|RS|300|5|25|20|1 slice=160|europa cheesecake
europa-carrot-cake-slice|Europa Carrot cake slice|RS|300|3|36|16|1 slice=200|europa cake
europa-chocolate-brownie|Europa Chocolate brownie|RS|456|5.6|53.3|24.4|1 brownie=90|europa brownie
rocomamas-smash-burger-single|RocoMamas Smash Burger, single|RS|256|13.5|15.4|16.2|1 burger=260|rocomamas smash burger single patty
rocomamas-smash-burger-double|RocoMamas Smash Burger, double|RS|257|15.6|11.4|17.2|1 burger=360|rocomamas double smash burger
rocomamas-smash-burger-triple|RocoMamas Smash Burger, triple|RS|259|16.7|9.1|17.8|1 burger=460|rocomamas triple smash burger
rocomamas-og-smash-burger-with-bacon|RocoMamas OG Smash Burger with bacon|RS|265|14.2|13.2|17.7|1 burger=310|rocomamas og bacon smash
rocomamas-hot-mama-smash-burger-jalapeno|RocoMamas Hot Mama Smash Burger (jalapeno)|RS|248|12.7|14.7|16|1 burger=300|rocomamas spicy jalapeno smash burger
rocomamas-cheese-pleaser-smash-burger|RocoMamas Cheese Pleaser Smash Burger|RS|267|14.1|13.1|18.1|1 burger=320|rocomamas extra cheese smash burger
rocomamas-grilled-chicken-burger|RocoMamas Grilled Chicken Burger|RS|183|12.7|16|8|1 burger=300|rocomamas chicken burger
rocomamas-crispy-chicken-burger|RocoMamas Crispy Chicken Burger|RS|217|10.6|19.4|11.2|1 burger=320|rocomamas fried chicken burger
rocomamas-plant-based-smash-burger|RocoMamas Plant-based Smash Burger|RS|207|8.6|17.1|12.1|1 burger=280|rocomamas vegan veggie burger
rocomamas-pork-spare-ribs-half-rack|RocoMamas Pork Spare Ribs, half rack|RS|198|13|8|13|1 half rack=400|rocomamas ribs half rack bbq
rocomamas-pork-spare-ribs-full-rack|RocoMamas Pork Spare Ribs, full rack|RS|197|13|8|13|1 full rack=800|rocomamas ribs full rack bbq
rocomamas-chicken-wings-6|RocoMamas Chicken Wings, 6|RS|198|17.5|5|12.5|1 portion=240|rocomamas wings
rocomamas-chicken-wings-12|RocoMamas Chicken Wings, 12|RS|199|17.5|5|12.5|1 portion=480|rocomamas wings 12
rocomamas-skinny-fries|RocoMamas Skinny Fries|RS|253|2.8|34.4|12.2|1 portion=180|rocomamas chips fries side
rocomamas-sweet-potato-fries|RocoMamas Sweet Potato Fries|RS|231|1.7|32.2|11.1|1 portion=180|rocomamas sweet potato chips
rocomamas-loaded-fries-cheese-and-bacon|RocoMamas Loaded Fries (cheese and bacon)|RS|245|6.9|21.9|15|1 portion=320|rocomamas dirty fries loaded chips
rocomamas-onion-rings|RocoMamas Onion Rings|RS|266|3.1|31.2|15|1 portion=160|rocomamas onion rings side
rocomamas-kids-smash-burger-with-fries|RocoMamas Kids Smash Burger with fries|RS|195|7.1|20|10|1 plate=280|rocomamas kids meal burger
rocomamas-churros-with-chocolate-sauce|RocoMamas Churros with chocolate sauce|RS|322|3.8|38.8|17.5|1 portion=160|rocomamas churros dessert
rocomamas-oreo-milkshake|RocoMamas Oreo Milkshake|RS|136|2.7|18.9|5.8|1 shake=450|rocomamas milkshake oreo
panarottis-margherita-pizza-medium|Panarottis Margherita Pizza, medium|RS|244|11.1|31.1|8.9|1 pizza=450|panarottis cheese pizza
panarottis-margherita-pizza-large|Panarottis Margherita Pizza, large|RS|241|10.9|30.7|8.9|1 pizza=700|panarottis cheese pizza large
panarottis-margherita-pizza-1-slice-large|Panarottis Margherita Pizza, 1 slice (large)|RS|244|11.4|30.7|9.1|1 slice=88|panarottis pizza slice
panarottis-regina-pizza-medium-ham-and-mushroom|Panarottis Regina Pizza, medium (ham and mushroom)|RS|227|11.5|27.3|8.5|1 pizza=520|panarottis ham mushroom pizza
panarottis-regina-pizza-large|Panarottis Regina Pizza, large|RS|227|11.5|27.3|8.5|1 pizza=800|panarottis ham mushroom pizza large
panarottis-regina-pizza-1-slice-large|Panarottis Regina Pizza, 1 slice (large)|RS|230|12|27|9|1 slice=100|panarottis pizza slice ham
panarottis-hawaiian-pizza-medium|Panarottis Hawaiian Pizza, medium|RS|219|10.4|28.1|7.8|1 pizza=540|panarottis ham pineapple pizza
panarottis-pepperoni-pizza-medium|Panarottis Pepperoni Pizza, medium|RS|252|11.2|28|11.2|1 pizza=500|panarottis salami pepperoni pizza
panarottis-pepperoni-pizza-large|Panarottis Pepperoni Pizza, large|RS|249|11|27.7|11|1 pizza=780|panarottis pepperoni pizza large
panarottis-pepperoni-pizza-1-slice-large|Panarottis Pepperoni Pizza, 1 slice (large)|RS|250|11.2|27.6|11.2|1 slice=98|panarottis pepperoni slice
panarottis-something-meaty-pizza-medium|Panarottis Something Meaty Pizza, medium|RS|239|12|24.2|11|1 pizza=600|panarottis meat lovers pizza
panarottis-something-meaty-pizza-large|Panarottis Something Meaty Pizza, large|RS|238|12|24.1|10.9|1 pizza=920|panarottis meat lovers pizza large
panarottis-chicken-and-mushroom-pizza-medium|Panarottis Chicken and Mushroom Pizza, medium|RS|215|11.8|25.4|7.9|1 pizza=560|panarottis chicken pizza
panarottis-spaghetti-bolognaise|Panarottis Spaghetti Bolognaise|RS|153|7.1|21.1|4.9|1 plate=450|panarottis spag bol pasta
panarottis-lasagne|Panarottis Lasagne|RS|162|8.6|12.4|9|1 plate=420|panarottis lasagna beef
panarottis-chicken-alfredo-fettuccine|Panarottis Chicken Alfredo Fettuccine|RS|198|8.4|20|9.8|1 plate=450|panarottis alfredo pasta chicken
panarottis-carbonara|Panarottis Carbonara|RS|207|7.1|21|11|1 plate=420|panarottis carbonara pasta bacon
panarottis-garlic-bread|Panarottis Garlic Bread|RS|273|6|36.7|12|1 portion=150|panarottis garlic bread starter
panarottis-cheesy-garlic-bread|Panarottis Cheesy Garlic Bread|RS|260|9|28|13|1 portion=200|panarottis garlic cheese bread
panarottis-caesar-salad-with-chicken|Panarottis Caesar Salad with chicken|RS|141|9.7|5.7|9.1|1 salad=350|panarottis chicken caesar
panarottis-greek-salad|Panarottis Greek Salad|RS|107|3|4.7|8.7|1 salad=300|panarottis greek salad feta
panarottis-kids-mini-pizza|Panarottis Kids Mini Pizza|RS|228|9.6|30.4|8|1 pizza=250|panarottis kids pizza
panarottis-kids-mac-and-cheese|Panarottis Kids Mac and Cheese|RS|168|5.6|19.2|8|1 plate=250|panarottis kids pasta macaroni
panarottis-chocolate-dessert-pizza|Panarottis Chocolate Dessert Pizza|RS|245|3.3|36.7|10|1 pizza=300|panarottis dessert pizza nutella
colcacchio-margherita-pizza-thin-base|Col'Cacchio Margherita Pizza (thin base)|RS|222|10|27.5|8.5|1 pizza=400|colcacchio margherita thin crust
colcacchio-margherita-pizza-1-slice|Col'Cacchio Margherita Pizza, 1 slice|RS|220|10|28|8|1 slice=50|colcacchio pizza slice
colcacchio-regina-pizza-thin-base|Col'Cacchio Regina Pizza (thin base)|RS|209|10.4|24.3|8.3|1 pizza=460|colcacchio ham mushroom thin crust
colcacchio-chicken-avo-and-feta-pizza|Col'Cacchio Chicken, Avo and Feta Pizza|RS|210|10|21.9|9.6|1 pizza=520|colcacchio chicken avocado pizza
colcacchio-pepperoni-and-chilli-pizza|Col'Cacchio Pepperoni and Chilli Pizza|RS|235|10.4|23.9|11.3|1 pizza=460|colcacchio salami pizza
colcacchio-four-cheese-pizza|Col'Cacchio Four Cheese Pizza|RS|253|11.4|24.5|12.7|1 pizza=440|colcacchio quattro formaggi pizza
colcacchio-smoked-salmon-and-cream-cheese-pizza|Col'Cacchio Smoked Salmon and Cream Cheese Pizza|RS|216|9.8|23.4|9.8|1 pizza=470|colcacchio salmon pizza
colcacchio-vegetarian-pizza-grilled-vegetables|Col'Cacchio Vegetarian Pizza (grilled vegetables)|RS|190|7.5|25|7.1|1 pizza=480|colcacchio veg pizza
colcacchio-prosciutto-rocket-and-parmesan-pizza|Col'Cacchio Prosciutto, Rocket and Parmesan Pizza|RS|223|11.4|25|9.1|1 pizza=440|colcacchio parma ham pizza
colcacchio-chicken-pizza-1-slice|Col'Cacchio Chicken Pizza, 1 slice|RS|208|10.8|21.5|9.2|1 slice=65|colcacchio chicken pizza slice
colcacchio-banting-base-chicken-pizza-cauliflower-base|Col'Cacchio Banting Base Chicken Pizza (cauliflower base)|RS|157|13.3|4.3|10|1 pizza=420|colcacchio low carb keto pizza
colcacchio-calzone-ham-mushroom-cheese|Col'Cacchio Calzone (ham, mushroom, cheese)|RS|216|10.2|24.9|8.9|1 portion=450|colcacchio calzone folded pizza
colcacchio-penne-arrabbiata|Col'Cacchio Penne Arrabbiata|RS|148|4|24.5|4|1 plate=400|colcacchio penne tomato chilli
colcacchio-linguine-with-prawns|Col'Cacchio Linguine with Prawns|RS|160|7.6|21.4|5.2|1 plate=420|colcacchio prawn pasta
colcacchio-fettuccine-chicken-and-mushroom|Col'Cacchio Fettuccine Chicken and Mushroom|RS|188|8.4|19.6|8.9|1 plate=450|colcacchio creamy chicken pasta
colcacchio-chicken-avo-and-bacon-salad|Col'Cacchio Chicken, Avo and Bacon Salad|RS|133|8.4|4.2|9.5|1 salad=380|colcacchio chicken salad
colcacchio-tiramisu|Col'Cacchio Tiramisu|RS|268|4.3|28.6|15.7|1 portion=140|colcacchio tiramisu dessert
john-dorys-fish-and-chips-hake-battered|John Dory's Fish and Chips (hake, battered)|RS|170|6.7|17.1|8.8|1 plate=480|john dorys battered hake chips
john-dorys-grilled-hake-and-chips|John Dory's Grilled Hake and Chips|RS|139|7.6|13.8|6.2|1 plate=450|john dorys grilled fish chips
john-dorys-grilled-kingklip-with-rice|John Dory's Grilled Kingklip with rice|RS|127|10|13.8|3.8|1 plate=420|john dorys kingklip fish
john-dorys-grilled-salmon-with-vegetables|John Dory's Grilled Salmon with vegetables|RS|124|10.5|3.2|7.9|1 plate=380|john dorys salmon fish
john-dorys-calamari-and-chips|John Dory's Calamari and Chips|RS|164|6.2|18.6|7.6|1 plate=420|john dorys calamari strips chips
john-dorys-prawns-10-with-rice|John Dory's Prawns, 10 with rice|RS|134|8.9|13.3|5.3|1 plate=450|john dorys queen prawns
john-dorys-seafood-platter-for-two|John Dory's Seafood Platter for Two|RS|171|9.2|15.4|8.5|1 platter=1300|john dorys seafood platter
john-dorys-calamari-starter|John Dory's Calamari Starter|RS|175|8.9|15.6|8.9|1 portion=180|john dorys calamari starter
john-dorys-fish-burger-with-chips|John Dory's Fish Burger with chips|RS|179|6|20.9|8.4|1 plate=430|john dorys fish burger
john-dorys-kids-fish-fingers-and-chips|John Dory's Kids Fish Fingers and Chips|RS|154|5.6|19.2|6.4|1 plate=250|john dorys kids fish
john-dorys-seafood-chowder|John Dory's Seafood Chowder|RS|107|5.7|7.4|6.3|1 bowl=350|john dorys chowder soup
john-dorys-salmon-california-roll-8-pieces|John Dory's Salmon California Roll, 8 pieces|RS|140|5|19.2|5|1 portion=240|john dorys sushi california
john-dorys-mussels-in-cream-sauce|John Dory's Mussels in Cream Sauce|RS|106|7.4|4|6.9|1 portion=350|john dorys mussels
hussar-grill-rump-steak-200-g|Hussar Grill Rump Steak, 200 g|RS|243|30.7|1.3|13.3|1 portion=150|hussar grill rump 200g
hussar-grill-rump-steak-300-g|Hussar Grill Rump Steak, 300 g|RS|242|30.7|1.3|13.3|1 portion=225|hussar grill rump 300g
hussar-grill-sirloin-steak-200-g|Hussar Grill Sirloin Steak, 200 g|RS|267|28|1.3|17.3|1 portion=150|hussar grill sirloin 200g
hussar-grill-sirloin-steak-300-g|Hussar Grill Sirloin Steak, 300 g|RS|269|28|1.3|17.3|1 portion=225|hussar grill sirloin 300g
hussar-grill-fillet-steak-200-g|Hussar Grill Fillet Steak, 200 g|RS|203|29.3|1.3|9.3|1 portion=150|hussar grill fillet 200g beef tenderloin
hussar-grill-fillet-steak-300-g|Hussar Grill Fillet Steak, 300 g|RS|202|29.3|1.3|9.3|1 portion=225|hussar grill fillet 300g
hussar-grill-t-bone-steak-500-g|Hussar Grill T-bone Steak, 500 g|RS|221|23.5|0.9|14.1|1 portion=340|hussar grill tbone t-bone
hussar-grill-rib-eye-on-the-bone-400-g|Hussar Grill Rib-eye on the bone, 400 g|RS|270|23.3|0.7|20|1 portion=300|hussar grill ribeye rib eye
hussar-grill-steak-tartare|Hussar Grill Steak Tartare|RS|172|15.6|3.3|11.1|1 portion=180|hussar grill tartare starter
hussar-grill-lamb-chops-300-g|Hussar Grill Lamb Chops, 300 g|RS|288|23|1|22|1 portion=200|hussar grill lamb chops
hussar-grill-oxtail-stew|Hussar Grill Oxtail Stew|RS|131|8.9|6.7|8|1 plate=450|hussar grill oxtail
hussar-grill-pepper-sauce|Hussar Grill Pepper Sauce|RS|183|1.7|6.7|16.7|1 portion=60|hussar grill peppercorn sauce
hussar-grill-mushroom-sauce|Hussar Grill Mushroom Sauce|RS|150|1.7|6.7|13.3|1 portion=60|hussar grill mushroom sauce
hussar-grill-bearnaise-sauce|Hussar Grill Bearnaise Sauce|RS|370|2|2|40|1 portion=50|hussar grill bearnaise
hussar-grill-creamed-spinach|Hussar Grill Creamed Spinach|RS|127|3.3|5.3|10.7|1 portion=150|hussar grill creamed spinach side
hussar-grill-baked-potato-with-sour-cream|Hussar Grill Baked Potato with sour cream|RS|120|2.4|19.2|4|1 portion=250|hussar grill jacket potato
hussar-grill-hand-cut-chips|Hussar Grill Hand-cut Chips|RS|222|2.2|32.2|10|1 portion=180|hussar grill chips fries side
hussar-grill-creme-brulee|Hussar Grill Creme Brulee|RS|268|3.6|22.9|18.6|1 portion=140|hussar grill creme brulee dessert
primi-piatti-margherita-pizza|Primi Piatti Margherita Pizza|RS|223|10|28.8|8.1|1 pizza=520|primi piatti cheese pizza
primi-piatti-pepperoni-pizza|Primi Piatti Pepperoni Pizza|RS|234|10.3|26.2|10.3|1 pizza=580|primi piatti salami pizza
primi-piatti-pizza-1-slice|Primi Piatti Pizza, 1 slice|RS|229|10|28.6|8.6|1 slice=70|primi piatti pizza slice
primi-piatti-chicken-and-mushroom-pizza|Primi Piatti Chicken and Mushroom Pizza|RS|213|10.6|24.8|8.4|1 pizza=620|primi piatti chicken pizza
primi-piatti-spaghetti-bolognese-large-portion|Primi Piatti Spaghetti Bolognese (large portion)|RS|153|6.9|21.5|4.7|1 plate=550|primi piatti spag bol
primi-piatti-penne-pollo-creamy-chicken|Primi Piatti Penne Pollo (creamy chicken)|RS|186|8|20|8.7|1 plate=550|primi piatti creamy chicken penne
primi-piatti-seafood-linguine|Primi Piatti Seafood Linguine|RS|148|7.3|20|4.6|1 plate=520|primi piatti seafood pasta
primi-piatti-fettuccine-carbonara|Primi Piatti Fettuccine Carbonara|RS|198|6.4|20.8|10.4|1 plate=500|primi piatti carbonara
primi-piatti-chicken-schnitzel-with-chips|Primi Piatti Chicken Schnitzel with chips|RS|178|9.8|15.6|8.9|1 plate=450|primi piatti schnitzel
primi-piatti-caprese-salad|Primi Piatti Caprese Salad|RS|132|7.2|3.2|10.4|1 salad=250|primi piatti mozzarella tomato salad
primi-piatti-chocolate-brownie-with-ice-cream|Primi Piatti Chocolate Brownie with ice cream|RS|282|3|35|15|1 portion=200|primi piatti brownie dessert
simply-asia-pad-thai-chicken|Simply Asia Pad Thai, chicken|RS|142|7.1|19.1|4.4|1 plate=450|simply asia pad thai noodles chicken
simply-asia-pad-thai-prawn|Simply Asia Pad Thai, prawn|RS|133|5.8|19.1|4|1 plate=450|simply asia pad thai prawns
simply-asia-thai-red-curry-chicken-with-jasmine-rice|Simply Asia Thai Red Curry, chicken with jasmine rice|RS|136|6.4|15.6|5.6|1 plate=500|simply asia red curry
simply-asia-thai-green-curry-chicken-with-jasmine-rice|Simply Asia Thai Green Curry, chicken with jasmine rice|RS|138|6.4|15.2|6|1 plate=500|simply asia green curry
simply-asia-massaman-beef-curry-with-rice|Simply Asia Massaman Beef Curry with rice|RS|146|6.4|16.4|6.4|1 plate=500|simply asia massaman curry
simply-asia-panang-curry-chicken-with-rice|Simply Asia Panang Curry, chicken with rice|RS|139|6.4|15.6|6|1 plate=500|simply asia panang curry
simply-asia-cashew-nut-chicken-stir-fry|Simply Asia Cashew Nut Chicken Stir-fry|RS|127|8|10|6.5|1 plate=400|simply asia cashew chicken stir fry
simply-asia-sweet-and-sour-chicken-with-rice|Simply Asia Sweet and Sour Chicken with rice|RS|143|5.6|22|4|1 plate=500|simply asia sweet sour chicken
simply-asia-chicken-chow-mein-noodles|Simply Asia Chicken Chow Mein Noodles|RS|131|6.7|17.8|4|1 plate=450|simply asia chicken noodles stir fry
simply-asia-beef-and-black-bean-stir-fry|Simply Asia Beef and Black Bean Stir-fry|RS|111|7.5|9.5|5|1 plate=400|simply asia black bean beef
simply-asia-crispy-chilli-beef|Simply Asia Crispy Chilli Beef|RS|154|6.9|17.1|6.9|1 plate=350|simply asia chilli beef
simply-asia-chicken-fried-rice|Simply Asia Chicken Fried Rice|RS|129|6|18|4|1 plate=400|simply asia fried rice
simply-asia-vegetable-spring-rolls-4|Simply Asia Vegetable Spring Rolls, 4|RS|172|3.1|21.2|8.8|1 portion=160|simply asia spring rolls
simply-asia-pork-dim-sum-4|Simply Asia Pork Dim Sum, 4|RS|158|8.3|16.7|6.7|1 portion=120|simply asia dim sum dumplings
simply-asia-tom-yum-soup-prawn|Simply Asia Tom Yum Soup, prawn|RS|48|4|3.5|2|1 bowl=400|simply asia tom yum
simply-asia-jasmine-rice-side|Simply Asia Jasmine Rice side|RS|125|2.5|28|0.5|1 portion=200|simply asia steamed rice
simply-asia-kids-chicken-noodles|Simply Asia Kids Chicken Noodles|RS|121|5.7|17.1|3.6|1 plate=280|simply asia kids noodles
tigers-milk-cheeseburger|Tiger's Milk Cheeseburger|RS|208|11.2|13.8|12.5|1 burger=320|tigers milk burger
tigers-milk-bacon-and-cheese-burger|Tiger's Milk Bacon and Cheese Burger|RS|224|12.2|12.2|14.4|1 burger=360|tigers milk bacon burger
tigers-milk-pork-ribs-half-rack|Tiger's Milk Pork Ribs, half rack|RS|195|13|7.5|13|1 half rack=400|tigers milk ribs
tigers-milk-pork-ribs-full-rack|Tiger's Milk Pork Ribs, full rack|RS|195|13|7.5|13|1 full rack=800|tigers milk ribs full
tigers-milk-buffalo-wings-8|Tiger's Milk Buffalo Wings, 8|RS|184|15.6|3.1|12.5|1 portion=320|tigers milk wings
tigers-milk-loaded-fries|Tiger's Milk Loaded Fries|RS|230|6|21.3|14|1 portion=300|tigers milk dirty fries
tigers-milk-margherita-pizza|Tiger's Milk Margherita Pizza|RS|222|9.8|28.9|8|1 pizza=450|tigers milk pizza
tigers-milk-pepperoni-pizza|Tiger's Milk Pepperoni Pizza|RS|236|10.4|26.4|10.4|1 pizza=500|tigers milk pizza pepperoni
tigers-milk-pizza-1-slice|Tiger's Milk Pizza, 1 slice|RS|227|9.3|28|9.3|1 slice=75|tigers milk pizza slice
tigers-milk-rump-steak-300-g-with-chips|Tiger's Milk Rump Steak, 300 g with chips|RS|233|18|14.8|11.9|1 plate=405|tigers milk steak chips
tigers-milk-chicken-tacos-3|Tiger's Milk Chicken Tacos, 3|RS|163|10|15.3|7.3|1 portion=300|tigers milk tacos
tigers-milk-nachos|Tiger's Milk Nachos|RS|204|6.5|17.5|12.5|1 portion=400|tigers milk nachos
mikes-kitchen-rump-steak-200-g-with-chips|Mike's Kitchen Rump Steak, 200 g with chips|RS|232|15.2|18.2|11.5|1 plate=330|mikes kitchen rump chips
mikes-kitchen-rump-steak-300-g-with-chips|Mike's Kitchen Rump Steak, 300 g with chips|RS|233|18|14.8|11.9|1 plate=405|mikes kitchen rump 300
mikes-kitchen-mixed-grill|Mike's Kitchen Mixed Grill|RS|192|12.7|10.9|11.3|1 plate=550|mikes kitchen mixed grill boerewors lamb chop
mikes-kitchen-pork-ribs-half-rack|Mike's Kitchen Pork Ribs, half rack|RS|195|13|7.5|13|1 half rack=400|mikes kitchen ribs
mikes-kitchen-pork-ribs-full-rack|Mike's Kitchen Pork Ribs, full rack|RS|195|13|7.5|13|1 full rack=800|mikes kitchen ribs full
mikes-kitchen-chicken-schnitzel-with-cheese-sauce-and-ch|Mike's Kitchen Chicken Schnitzel with cheese sauce and chips|RS|191|9.6|15.6|10.4|1 plate=500|mikes kitchen schnitzel
mikes-kitchen-hake-and-chips|Mike's Kitchen Hake and Chips|RS|170|6.7|17.8|8.4|1 plate=450|mikes kitchen fish chips
mikes-kitchen-chicken-burger-with-chips|Mike's Kitchen Chicken Burger with chips|RS|171|7.6|19.1|7.6|1 plate=450|mikes kitchen chicken burger
mikes-kitchen-beef-burger-with-chips|Mike's Kitchen Beef Burger with chips|RS|187|7.6|19.1|9.3|1 plate=450|mikes kitchen burger chips
mikes-kitchen-kids-burger-with-chips|Mike's Kitchen Kids Burger with chips|RS|182|6.4|20|8.8|1 plate=250|mikes kitchen kids meal
mikes-kitchen-ice-cream-sundae|Mike's Kitchen Ice Cream Sundae|RS|178|2.5|25|8|1 portion=200|mikes kitchen sundae dessert
cattle-baron-rump-steak-200-g|Cattle Baron Rump Steak, 200 g|RS|243|30.7|1.3|13.3|1 portion=150|cattle baron rump 200
cattle-baron-rump-steak-300-g|Cattle Baron Rump Steak, 300 g|RS|242|30.7|1.3|13.3|1 portion=225|cattle baron rump 300
cattle-baron-sirloin-steak-300-g|Cattle Baron Sirloin Steak, 300 g|RS|269|28|1.3|17.3|1 portion=225|cattle baron sirloin 300
cattle-baron-fillet-steak-200-g|Cattle Baron Fillet Steak, 200 g|RS|203|29.3|1.3|9.3|1 portion=150|cattle baron fillet 200
cattle-baron-fillet-steak-300-g|Cattle Baron Fillet Steak, 300 g|RS|202|29.3|1.3|9.3|1 portion=225|cattle baron fillet 300
cattle-baron-t-bone-steak-500-g|Cattle Baron T-bone Steak, 500 g|RS|221|23.5|0.9|14.1|1 portion=340|cattle baron tbone
cattle-baron-beef-espetada|Cattle Baron Beef Espetada|RS|180|22|1.3|10|1 portion=300|cattle baron espetada skewer
cattle-baron-pork-ribs-half-rack|Cattle Baron Pork Ribs, half rack|RS|195|13|7.5|13|1 half rack=400|cattle baron ribs
cattle-baron-lamb-chops|Cattle Baron Lamb Chops|RS|288|23|1|22|1 portion=200|cattle baron lamb chops
cattle-baron-grilled-kingklip|Cattle Baron Grilled Kingklip|RS|110|18.4|0.8|4|1 portion=250|cattle baron kingklip fish
cattle-baron-onion-rings|Cattle Baron Onion Rings|RS|253|2.7|29.3|14.7|1 portion=150|cattle baron onion rings
cattle-baron-sweet-potato-side|Cattle Baron Sweet Potato Side|RS|130|1.5|25|3|1 portion=200|cattle baron sweet potato
ocean-basket-hake-and-calamari-combo-with-chips|Ocean Basket Hake and Calamari Combo with chips|RS|166|7.6|16.8|8|1 plate=500|ocean basket hake calamari combo
ocean-basket-grilled-hake-and-chips|Ocean Basket Grilled Hake and Chips|RS|134|7.6|13.8|5.8|1 plate=450|ocean basket grilled hake
ocean-basket-grilled-kingklip-with-rice|Ocean Basket Grilled Kingklip with rice|RS|123|10|13.8|3.3|1 plate=420|ocean basket kingklip
ocean-basket-grilled-salmon-with-rice|Ocean Basket Grilled Salmon with rice|RS|150|9.5|14|6.5|1 plate=400|ocean basket salmon
ocean-basket-mussels-in-creamy-garlic-sauce|Ocean Basket Mussels in Creamy Garlic Sauce|RS|110|7.4|4|7.4|1 portion=350|ocean basket mussels
ocean-basket-platter-for-two|Ocean Basket Platter for Two|RS|171|9.3|15|8.6|1 platter=1400|ocean basket seafood platter two
ocean-basket-queen-prawns-10-with-rice|Ocean Basket Queen Prawns, 10 with rice|RS|129|8.4|13.3|4.9|1 plate=450|ocean basket prawns
ocean-basket-salmon-nigiri|Ocean Basket Salmon Nigiri|RS|167|10|20|5|1 piece=30|ocean basket nigiri
ocean-basket-salmon-fashion-sandwich-4-pieces|Ocean Basket Salmon Fashion Sandwich, 4 pieces|RS|171|5.7|18.6|8.6|1 portion=140|ocean basket fashion sandwich sushi
ocean-basket-cucumber-maki-6-pieces|Ocean Basket Cucumber Maki, 6 pieces|RS|100|1.7|21.7|0.8|1 portion=120|ocean basket maki cucumber
ocean-basket-greek-salad|Ocean Basket Greek Salad|RS|107|3|4.7|8.7|1 salad=300|ocean basket salad
ocean-basket-kids-fish-and-chips|Ocean Basket Kids Fish and Chips|RS|150|5.6|18.4|6.4|1 plate=250|ocean basket kids fish
wimpy-double-cheese-burger-with-chips|Wimpy Double Cheese Burger with chips|RS|206|9.6|16.7|11.7|1 plate=480|wimpy double burger
wimpy-bacon-and-cheese-burger-with-chips|Wimpy Bacon and Cheese Burger with chips|RS|210|8.6|19|11.4|1 plate=420|wimpy bacon burger
wimpy-rib-burger-with-chips|Wimpy Rib Burger with chips|RS|194|6.7|21.4|9.5|1 plate=420|wimpy rib burger
wimpy-chicken-wings-6-with-chips|Wimpy Chicken Wings, 6 with chips|RS|180|10.5|15.3|8.9|1 plate=380|wimpy wings
wimpy-greek-salad|Wimpy Greek Salad|RS|107|2.9|5|8.6|1 salad=280|wimpy salad
wimpy-grilled-chicken-salad|Wimpy Grilled Chicken Salad|RS|103|9.4|4.4|5.6|1 salad=320|wimpy chicken salad
wimpy-flapjacks-with-syrup|Wimpy Flapjacks with syrup|RS|234|4.5|39.1|7.3|1 portion=220|wimpy pancakes flapjacks
wimpy-ice-cream-sundae|Wimpy Ice Cream Sundae|RS|178|2.5|25|8|1 portion=200|wimpy sundae
wimpy-kids-burger-with-chips|Wimpy Kids Burger with chips|RS|174|6.1|20.9|7.8|1 plate=230|wimpy kids meal
spur-rump-steak-200-g|Spur Rump Steak, 200 g|RS|243|30.7|1.3|13.3|1 portion=150|spur rump 200
spur-rump-steak-300-g|Spur Rump Steak, 300 g|RS|242|30.7|1.3|13.3|1 portion=225|spur rump 300
spur-sirloin-steak-200-g|Spur Sirloin Steak, 200 g|RS|267|28|1.3|17.3|1 portion=150|spur sirloin 200
spur-sirloin-steak-300-g|Spur Sirloin Steak, 300 g|RS|269|28|1.3|17.3|1 portion=225|spur sirloin 300
spur-fillet-steak-200-g|Spur Fillet Steak, 200 g|RS|203|29.3|1.3|9.3|1 portion=150|spur fillet 200
spur-t-bone-steak-500-g|Spur T-bone Steak, 500 g|RS|221|23.5|0.9|14.1|1 portion=340|spur tbone
spur-pork-spare-ribs-half-rack|Spur Pork Spare Ribs, half rack|RS|198|13|8|13|1 half rack=400|spur ribs half
spur-pork-spare-ribs-full-rack|Spur Pork Spare Ribs, full rack|RS|197|13|8|13|1 full rack=800|spur ribs full
spur-ribs-and-wings-combo|Spur Ribs and Wings Combo|RS|185|12.7|7.3|12|1 plate=550|spur ribs wings combo
spur-buffalo-wings-6|Spur Buffalo Wings, 6|RS|190|16.7|3.3|12.5|1 portion=240|spur wings
spur-grilled-half-chicken|Spur Grilled Half Chicken|RS|161|17.5|1|10|1 portion=400|spur half chicken
spur-chicken-schnitzel-with-cheese-sauce|Spur Chicken Schnitzel with cheese sauce|RS|190|11.4|11.4|11.4|1 plate=350|spur schnitzel
spur-salad-bar-plate|Spur Salad Bar plate|RS|115|2.7|13.3|6|1 plate=300|spur salad bar
spur-baked-potato-with-sour-cream|Spur Baked Potato with sour cream|RS|120|2.4|19.2|4|1 portion=250|spur jacket potato
spur-kids-burger-with-chips|Spur Kids Burger with chips|RS|182|6.4|20|8.8|1 plate=250|spur kids meal
spur-ice-cream-sundae|Spur Ice Cream Sundae|RS|178|2.5|25|8|1 portion=200|spur sundae
turn-n-tender-rump-steak-200-g|Turn 'n Tender Rump Steak, 200 g|RS|243|30.7|1.3|13.3|1 portion=150|turn n tender rump 200
turn-n-tender-rump-steak-300-g|Turn 'n Tender Rump Steak, 300 g|RS|242|30.7|1.3|13.3|1 portion=225|turn n tender rump 300
turn-n-tender-sirloin-steak-300-g|Turn 'n Tender Sirloin Steak, 300 g|RS|269|28|1.3|17.3|1 portion=225|turn n tender sirloin 300
turn-n-tender-fillet-steak-200-g|Turn 'n Tender Fillet Steak, 200 g|RS|203|29.3|1.3|9.3|1 portion=150|turn n tender fillet 200
turn-n-tender-fillet-steak-300-g|Turn 'n Tender Fillet Steak, 300 g|RS|202|29.3|1.3|9.3|1 portion=225|turn n tender fillet 300
turn-n-tender-t-bone-steak-500-g|Turn 'n Tender T-bone Steak, 500 g|RS|221|23.5|0.9|14.1|1 portion=340|turn n tender tbone
turn-n-tender-beef-espetada|Turn 'n Tender Beef Espetada|RS|180|22|1.3|10|1 portion=300|turn n tender espetada
turn-n-tender-pork-ribs-half-rack|Turn 'n Tender Pork Ribs, half rack|RS|195|13|7.5|13|1 half rack=400|turn n tender ribs
turn-n-tender-creamed-spinach|Turn 'n Tender Creamed Spinach|RS|127|3.3|5.3|10.7|1 portion=150|turn n tender spinach
turn-n-tender-chips|Turn 'n Tender Chips|RS|222|2.2|32.2|10|1 portion=180|turn n tender chips fries
butcher-shop-grill-fillet-steak-250-g|Butcher Shop & Grill Fillet Steak, 250 g|RS|200|28.9|1.1|9.5|1 portion=190|butcher shop & grill fillet 250
butcher-shop-grill-sirloin-steak-300-g|Butcher Shop & Grill Sirloin Steak, 300 g|RS|269|28|1.3|17.3|1 portion=225|butcher shop & grill sirloin 300
butcher-shop-grill-rib-eye-steak-300-g|Butcher Shop & Grill Rib-eye Steak, 300 g|RS|293|25.8|0.9|21.3|1 portion=225|butcher shop & grill ribeye
butcher-shop-grill-t-bone-steak-600-g|Butcher Shop & Grill T-bone Steak, 600 g|RS|220|23.4|0.7|14.1|1 portion=410|butcher shop & grill tbone
butcher-shop-grill-lamb-chops|Butcher Shop & Grill Lamb Chops|RS|288|23|1|22|1 portion=200|butcher shop & grill lamb chops
butcher-shop-grill-grilled-prawns|Butcher Shop & Grill Grilled Prawns|RS|133|16|1.3|7.3|1 portion=300|butcher shop & grill prawns
butcher-shop-grill-chips|Butcher Shop & Grill Chips|RS|222|2.2|32.2|10|1 portion=180|butcher shop & grill chips
butcher-shop-grill-side-salad|Butcher Shop & Grill Side Salad|RS|83|1.3|5.3|6.7|1 salad=150|butcher shop & grill side salad
butcher-shop-grill-peppercorn-sauce|Butcher Shop & Grill Peppercorn Sauce|RS|183|1.7|6.7|16.7|1 portion=60|butcher shop & grill pepper sauce
news-cafe-classic-beef-burger-with-chips|News Cafe Classic Beef Burger with chips|RS|192|8|19.1|9.8|1 plate=450|news cafe burger
news-cafe-chicken-burger-with-chips|News Cafe Chicken Burger with chips|RS|171|7.6|19.1|7.6|1 plate=450|news cafe chicken burger
news-cafe-chicken-wrap|News Cafe Chicken Wrap|RS|160|10.7|15.3|6.7|1 portion=300|news cafe wrap
news-cafe-chicken-caesar-salad|News Cafe Chicken Caesar Salad|RS|141|9.7|5.7|9.1|1 salad=350|news cafe caesar salad
news-cafe-full-breakfast|News Cafe Full Breakfast|RS|163|8|10.7|10.2|1 plate=450|news cafe breakfast eggs bacon
news-cafe-eggs-benedict|News Cafe Eggs Benedict|RS|178|7.3|11.3|12|1 plate=300|news cafe eggs benny
news-cafe-chicken-quesadilla|News Cafe Chicken Quesadilla|RS|190|10.7|16.7|9.3|1 portion=300|news cafe quesadilla
news-cafe-margherita-pizza|News Cafe Margherita Pizza|RS|222|9.8|28.9|8|1 pizza=450|news cafe pizza
news-cafe-nachos|News Cafe Nachos|RS|204|6.5|17.5|12.5|1 portion=400|news cafe nachos
news-cafe-calamari-and-chips|News Cafe Calamari and Chips|RS|169|6|19|8|1 plate=400|news cafe calamari
news-cafe-salmon-california-roll-8-pieces|News Cafe Salmon California Roll, 8 pieces|RS|140|5|19.2|5|1 portion=240|news cafe sushi
sushi-sa-restaurant-salmon-nigiri|Sushi bar Salmon Nigiri|RS|167|10|20|5|1 piece=30|sushi (sa restaurant) nigiri salmon
sushi-sa-restaurant-tuna-nigiri|Sushi bar Tuna Nigiri|RS|133|11.7|20|1.7|1 piece=30|sushi (sa restaurant) nigiri tuna
sushi-sa-restaurant-prawn-nigiri|Sushi bar Prawn Nigiri|RS|123|8.3|20|1|1 piece=30|sushi (sa restaurant) nigiri prawn ebi
sushi-sa-restaurant-salmon-maki|Sushi bar Salmon Maki|RS|130|6|20|3|1 piece=20|sushi (sa restaurant) maki salmon
sushi-sa-restaurant-cucumber-maki|Sushi bar Cucumber Maki|RS|100|1.7|22.2|0.6|1 piece=18|sushi (sa restaurant) maki cucumber vegetarian
sushi-sa-restaurant-avocado-maki|Sushi bar Avocado Maki|RS|150|2.2|22.2|5.6|1 piece=18|sushi (sa restaurant) maki avo
sushi-sa-restaurant-salmon-california-roll|Sushi bar Salmon California Roll|RS|133|5|18.3|5|1 piece=30|sushi (sa restaurant) california roll
sushi-sa-restaurant-crab-stick-california-roll|Sushi bar Crab Stick California Roll|RS|133|3.3|20|4.3|1 piece=30|sushi (sa restaurant) california roll crab
sushi-sa-restaurant-vegetarian-california-roll|Sushi bar Vegetarian California Roll|RS|127|2|18.3|5|1 piece=30|sushi (sa restaurant) california roll veg
sushi-sa-restaurant-salmon-fashion-sandwich|Sushi bar Salmon Fashion Sandwich|RS|171|5.7|18.6|8.6|1 piece=35|sushi (sa restaurant) fashion sandwich
sushi-sa-restaurant-prawn-tempura-fashion-sandwich|Sushi bar Prawn Tempura Fashion Sandwich|RS|188|5|20|10|1 piece=40|sushi (sa restaurant) prawn fashion sandwich
sushi-sa-restaurant-salmon-rose|Sushi bar Salmon Rose|RS|150|8.3|15|6.7|1 piece=30|sushi (sa restaurant) salmon rose
sushi-sa-restaurant-rainbow-roll|Sushi bar Rainbow Roll|RS|129|7.1|15.7|4.3|1 piece=35|sushi (sa restaurant) rainbow roll
sushi-sa-restaurant-prawn-tempura-roll|Sushi bar Prawn Tempura Roll|RS|157|4.3|20|7.1|1 piece=35|sushi (sa restaurant) tempura roll
sushi-sa-restaurant-salmon-sashimi|Sushi bar Salmon Sashimi|RS|195|20|0|13|1 piece=20|sushi (sa restaurant) sashimi salmon
sushi-sa-restaurant-tuna-sashimi|Sushi bar Tuna Sashimi|RS|110|25|0|1|1 piece=20|sushi (sa restaurant) sashimi tuna
sushi-sa-restaurant-salmon-hand-roll|Sushi bar Salmon Hand Roll|RS|150|6.4|20|5.5|1 piece=110|sushi (sa restaurant) hand roll temaki
sushi-sa-restaurant-salmon-california-roll-8-pieces|Sushi bar Salmon California Roll, 8 pieces|RS|135|5|18.3|5|1 portion=240|sushi (sa restaurant) california rolls
sushi-sa-restaurant-salmon-maki-8-pieces|Sushi bar Salmon Maki, 8 pieces|RS|131|6.2|20|3.1|1 portion=160|sushi (sa restaurant) maki
sushi-sa-restaurant-salmon-fashion-sandwich-4-pieces|Sushi bar Salmon Fashion Sandwich, 4 pieces|RS|171|5.7|18.6|8.6|1 portion=140|sushi (sa restaurant) fashion sandwich
sushi-sa-restaurant-salmon-nigiri-2-pieces|Sushi bar Salmon Nigiri, 2 pieces|RS|158|10|20|5|1 portion=60|sushi (sa restaurant) nigiri
sushi-sa-restaurant-sushi-platter-16-pieces|Sushi bar Sushi Platter, 16 pieces|RS|135|5.4|17.9|5|1 platter=480|sushi (sa restaurant) platter
sushi-sa-restaurant-sushi-platter-24-pieces|Sushi bar Sushi Platter, 24 pieces|RS|137|5.6|18.1|5|1 platter=720|sushi (sa restaurant) platter large
sushi-sa-restaurant-salmon-sashimi-6-pieces|Sushi bar Salmon Sashimi, 6 pieces|RS|196|20|0|13.3|1 portion=120|sushi (sa restaurant) sashimi
sushi-sa-restaurant-edamame|Sushi bar Edamame|RS|121|10.8|8.3|5|1 portion=120|sushi (sa restaurant) edamame beans
sushi-sa-restaurant-miso-soup|Sushi bar Miso Soup|RS|20|1.2|2|0.8|1 bowl=250|sushi (sa restaurant) miso
sushi-sa-restaurant-seaweed-salad|Sushi bar Seaweed Salad|RS|95|1|12|5|1 portion=100|sushi (sa restaurant) wakame
sushi-sa-restaurant-pork-gyoza-5|Sushi bar Pork Gyoza, 5|RS|176|8|19.2|8|1 portion=125|sushi (sa restaurant) gyoza dumplings
sushi-sa-restaurant-salmon-poke-bowl|Sushi bar Salmon Poke Bowl|RS|136|7|17.5|4.5|1 bowl=400|sushi (sa restaurant) poke bowl
sushi-sa-restaurant-chicken-teriyaki-with-rice|Sushi bar Chicken Teriyaki with rice|RS|126|8|17.5|3|1 plate=400|sushi (sa restaurant) teriyaki
doppio-zero-margherita-pizza|Doppio Zero Margherita Pizza|RS|220|9.8|28.4|8|1 pizza=450|doppio zero pizza
doppio-zero-chicken-avo-and-bacon-pizza|Doppio Zero Chicken, Avo and Bacon Pizza|RS|217|10|23.6|9.6|1 pizza=560|doppio zero chicken pizza
doppio-zero-pizza-1-slice|Doppio Zero Pizza, 1 slice|RS|221|10|27.1|8.6|1 slice=70|doppio zero pizza slice
doppio-zero-penne-pollo|Doppio Zero Penne Pollo|RS|190|8.4|20|8.9|1 plate=450|doppio zero penne chicken
doppio-zero-linguine-prawns|Doppio Zero Linguine Prawns|RS|158|7.1|21.4|5.2|1 plate=420|doppio zero prawn pasta
doppio-zero-spaghetti-bolognese|Doppio Zero Spaghetti Bolognese|RS|153|7.1|21.1|4.9|1 plate=450|doppio zero bolognese
doppio-zero-lamb-shank-with-mash|Doppio Zero Lamb Shank with mash|RS|124|9.5|7.3|6.5|1 plate=550|doppio zero lamb shank
doppio-zero-chicken-schnitzel-with-chips|Doppio Zero Chicken Schnitzel with chips|RS|178|9.8|15.6|8.9|1 plate=450|doppio zero schnitzel
doppio-zero-beef-fillet-200-g-with-chips|Doppio Zero Beef Fillet, 200 g with chips|RS|212|14.5|17.6|9.7|1 plate=330|doppio zero fillet steak
doppio-zero-chicken-and-avo-salad|Doppio Zero Chicken and Avo Salad|RS|120|8.4|4.2|7.9|1 salad=380|doppio zero chicken salad
doppio-zero-cheesecake-slice|Doppio Zero Cheesecake slice|RS|308|4.6|29.2|20|1 slice=130|doppio zero cheesecake
subway-italian-b-m-t-6-inch|Subway Italian B.M.T. 6-inch|RS|183|8.5|20.5|7.1|1 6-inch sub=224|subway italian bmt salami pepperoni ham sub us
subway-italian-b-m-t-footlong|Subway Italian B.M.T. Footlong|RS|183|8.5|20.5|7.1|1 footlong=448|subway italian bmt salami pepperoni ham sub us
subway-turkey-breast-6-inch|Subway Turkey Breast 6-inch|RS|128|8.2|21|1.6|1 6-inch sub=219|subway turkey sub us
subway-turkey-breast-footlong|Subway Turkey Breast Footlong|RS|128|8.2|21|1.6|1 footlong=438|subway turkey sub us
subway-oven-roasted-chicken-6-inch|Subway Oven Roasted Chicken 6-inch|RS|138|9.9|20.3|2.2|1 6-inch sub=232|subway roasted chicken sub us
subway-oven-roasted-chicken-footlong|Subway Oven Roasted Chicken Footlong|RS|138|9.9|20.3|2.2|1 footlong=464|subway roasted chicken sub us
subway-sweet-onion-chicken-teriyaki-6-inch|Subway Sweet Onion Chicken Teriyaki 6-inch|RS|138|9.3|21.2|1.7|1 6-inch sub=269|subway teriyaki chicken sub us
subway-sweet-onion-chicken-teriyaki-footlong|Subway Sweet Onion Chicken Teriyaki Footlong|RS|138|9.3|21.2|1.7|1 footlong=538|subway teriyaki chicken sub us
subway-meatball-marinara-6-inch|Subway Meatball Marinara 6-inch|RS|169|7.7|20.4|6.3|1 6-inch sub=284|subway meatball sub marinara us
subway-meatball-marinara-footlong|Subway Meatball Marinara Footlong|RS|169|7.7|20.4|6.3|1 footlong=568|subway meatball sub marinara us
subway-tuna-6-inch|Subway Tuna 6-inch|RS|202|8.4|18.5|10.5|1 6-inch sub=238|subway tuna mayo sub us
subway-tuna-footlong|Subway Tuna Footlong|RS|202|8.4|18.5|10.5|1 footlong=476|subway tuna mayo sub us
subway-spicy-italian-6-inch|Subway Spicy Italian 6-inch|RS|225|9.4|21.1|11.3|1 6-inch sub=213|subway spicy italian pepperoni salami sub us
subway-steak-cheese-6-inch|Subway Steak & Cheese 6-inch|RS|155|10.6|19.6|4.1|1 6-inch sub=245|subway steak cheese philly sub us
subway-steak-cheese-footlong|Subway Steak & Cheese Footlong|RS|155|10.6|19.6|4.1|1 footlong=490|subway steak cheese philly sub us
subway-chicken-bacon-ranch-melt-6-inch|Subway Chicken & Bacon Ranch Melt 6-inch|RS|231|13.6|17.4|12.1|1 6-inch sub=264|subway chicken bacon ranch sub us
subway-chicken-bacon-ranch-melt-footlong|Subway Chicken & Bacon Ranch Melt Footlong|RS|231|13.6|17.4|12.1|1 footlong=528|subway chicken bacon ranch sub us
subway-cold-cut-combo-6-inch|Subway Cold Cut Combo 6-inch|RS|155|7.3|21|4.6|1 6-inch sub=219|subway cold cuts sub us
subway-veggie-delite-6-inch|Subway Veggie Delite 6-inch|RS|127|4.8|23.5|1.2|1 6-inch sub=166|subway veggie vegetable sub us
subway-black-forest-ham-6-inch|Subway Black Forest Ham 6-inch|RS|132|8.2|21|2.1|1 6-inch sub=219|subway ham sub us
subway-buffalo-chicken-6-inch|Subway Buffalo Chicken 6-inch|RS|151|10.1|19.3|3.8|1 6-inch sub=238|subway buffalo chicken sub us
subway-subway-club-6-inch|Subway Subway Club 6-inch|RS|128|9.1|18.6|2.1|1 6-inch sub=242|subway club sub turkey ham us
subway-chocolate-chip-cookie|Subway Chocolate Chip Cookie|RS|467|4.4|66.7|22.2|1 cookie=45|subway cookie choc chip us
subway-egg-cheese-omelet-6-inch|Subway Egg & Cheese Omelet 6-inch|RS|205|10|23.7|7.9|1 6-inch sub=190|subway breakfast egg cheese sub us
wendys-daves-single|Wendy's Dave's Single|RS|225|11.1|14.9|13|1 burger=262|wendys daves single cheeseburger quarter pound us
wendys-daves-double|Wendy's Dave's Double|RS|243|14|11.4|15.4|1 burger=350|wendys daves double cheeseburger us
wendys-daves-triple|Wendy's Dave's Triple|RS|258|15.6|9.1|17.6|1 burger=450|wendys daves triple cheeseburger us
wendys-baconator|Wendy's Baconator|RS|307|18.4|12.3|20.1|1 burger=309|wendys baconator bacon cheeseburger us
wendys-son-of-baconator|Wendy's Son of Baconator|RS|286|15.5|16.8|17.3|1 burger=220|wendys son of baconator bacon us
wendys-jr-bacon-cheeseburger|Wendy's Jr. Bacon Cheeseburger|RS|231|11.9|16.2|13.1|1 burger=160|wendys junior bacon cheeseburger jbc us
wendys-jr-cheeseburger|Wendy's Jr. Cheeseburger|RS|223|11.5|20|10.8|1 burger=130|wendys junior cheeseburger us
wendys-jr-hamburger|Wendy's Jr. Hamburger|RS|214|11.1|21.4|9.4|1 burger=117|wendys junior hamburger us
wendys-double-stack|Wendy's Double Stack|RS|256|15|16.2|14.4|1 burger=160|wendys double stack cheeseburger us
wendys-classic-chicken-sandwich|Wendy's Classic Chicken Sandwich|RS|216|12.3|22.9|8.4|1 sandwich=227|wendys chicken sandwich us
wendys-spicy-chicken-sandwich|Wendy's Spicy Chicken Sandwich|RS|220|12.3|22|8.8|1 sandwich=227|wendys spicy chicken sandwich us
wendys-crispy-chicken-sandwich|Wendy's Crispy Chicken Sandwich|RS|236|10.7|27.9|9.3|1 sandwich=140|wendys crispy chicken sandwich value us
wendys-chicken-nuggets-6-piece|Wendy's Chicken Nuggets 6 piece|RS|266|13.8|14.9|17|6 nuggets=94|wendys nuggets us
wendys-chicken-nuggets-10-piece|Wendy's Chicken Nuggets 10 piece|RS|269|14.1|15.4|17.3|10 nuggets=156|wendys nuggets us
wendys-spicy-chicken-nuggets-6-piece|Wendy's Spicy Chicken Nuggets 6 piece|RS|286|14.3|15.3|18.4|6 nuggets=98|wendys spicy nuggets us
wendys-french-fries-small|Wendy's French Fries small|RS|232|3|30.3|11.1|1 small=99|wendys fries chips us
wendys-french-fries-medium|Wendy's French Fries medium|RS|241|3.4|32.4|11|1 medium=145|wendys fries chips us
wendys-french-fries-large|Wendy's French Fries large|RS|232|3.3|30.9|11|1 large=181|wendys fries chips us
wendys-plain-baked-potato|Wendy's Plain Baked Potato|RS|95|2.5|21.5|0|1 potato=284|wendys baked potato jacket us
wendys-sour-cream-chive-baked-potato|Wendy's Sour Cream & Chive Baked Potato|RS|99|2.6|20.2|1|1 potato=312|wendys baked potato sour cream us
wendys-chili-small|Wendy's Chili small|RS|106|7.5|9.3|4|1 small=227|wendys chili con carne us
wendys-chili-large|Wendy's Chili large|RS|106|7.4|9.4|4.1|1 large=340|wendys chili con carne us
wendys-chocolate-frosty-small|Wendy's Chocolate Frosty small|RS|154|4|25.6|4|1 small=227|wendys frosty chocolate dessert us
wendys-chocolate-frosty-medium|Wendy's Chocolate Frosty medium|RS|158|4|26.2|4|1 medium=298|wendys frosty chocolate dessert us
wendys-chocolate-frosty-large|Wendy's Chocolate Frosty large|RS|154|3.9|25.6|3.9|1 large=383|wendys frosty chocolate dessert us
wendys-vanilla-frosty-small|Wendy's Vanilla Frosty small|RS|150|4|24.7|4|1 small=227|wendys frosty vanilla dessert us
wendys-breakfast-baconator|Wendy's Breakfast Baconator|RS|333|15.5|15.1|22.8|1 sandwich=219|wendys breakfast baconator egg bacon sausage us
wendys-honey-butter-chicken-biscuit|Wendy's Honey Butter Chicken Biscuit|RS|316|10.8|31|17.1|1 biscuit=158|wendys chicken biscuit breakfast us
wendys-sausage-egg-cheese-biscuit|Wendy's Sausage Egg & Cheese Biscuit|RS|339|11.1|20.6|23.9|1 biscuit=180|wendys sausage biscuit breakfast us
taco-bell-crunchy-taco|Taco Bell Crunchy Taco|RS|218|10.3|16.7|12.8|1 taco=78|taco bell hard beef us
taco-bell-crunchy-taco-supreme|Taco Bell Crunchy Taco Supreme|RS|207|8.7|16.3|12|1 taco=92|taco bell hard supreme us
taco-bell-soft-taco|Taco Bell Soft Taco|RS|182|9.1|18.2|8.1|1 taco=99|taco bell soft beef us
taco-bell-soft-taco-supreme|Taco Bell Soft Taco Supreme|RS|156|7.4|14.8|7.4|1 taco=135|taco bell soft supreme us
taco-bell-nacho-cheese-doritos-locos-taco|Taco Bell Nacho Cheese Doritos Locos Taco|RS|218|10.3|16.7|12.8|1 taco=78|taco bell doritos locos dlt us
taco-bell-bean-burrito|Taco Bell Bean Burrito|RS|177|6.6|27.3|4.5|1 burrito=198|taco bell bean burrito us
taco-bell-burrito-supreme-beef|Taco Bell Burrito Supreme (Beef)|RS|157|6.5|20.6|5.6|1 burrito=248|taco bell burrito supreme beef us
taco-bell-beefy-5-layer-burrito|Taco Bell Beefy 5-Layer Burrito|RS|198|7.3|25.5|7.3|1 burrito=247|taco bell 5 layer burrito beef us
taco-bell-cheesy-bean-and-rice-burrito|Taco Bell Cheesy Bean and Rice Burrito|RS|220|4.7|28.8|8.9|1 burrito=191|taco bell bean rice burrito value us
taco-bell-cheesy-gordita-crunch|Taco Bell Cheesy Gordita Crunch|RS|327|13.1|26.8|18.3|1 item=153|taco bell gordita crunch us
taco-bell-chalupa-supreme-beef|Taco Bell Chalupa Supreme (Beef)|RS|229|8.5|19.6|13.1|1 chalupa=153|taco bell chalupa beef us
taco-bell-crunchwrap-supreme|Taco Bell Crunchwrap Supreme|RS|209|6.3|28|8.3|1 crunchwrap=254|taco bell crunchwrap us
taco-bell-chicken-quesadilla|Taco Bell Chicken Quesadilla|RS|277|14.1|20.1|15.2|1 quesadilla=184|taco bell quesadilla chicken us
taco-bell-cheese-quesadilla|Taco Bell Cheese Quesadilla|RS|331|13.4|26.1|18.3|1 quesadilla=142|taco bell quesadilla cheese us
taco-bell-mexican-pizza|Taco Bell Mexican Pizza|RS|254|9.4|21.6|14.1|1 pizza=213|taco bell mexican pizza us
taco-bell-nachos-bellgrande|Taco Bell Nachos BellGrande|RS|240|5.2|26|12.3|1 order=308|taco bell nachos grande us
taco-bell-chips-and-nacho-cheese-sauce|Taco Bell Chips and Nacho Cheese Sauce|RS|393|5.4|37.5|25|1 order=56|taco bell nachos chips cheese us
taco-bell-nacho-fries-regular|Taco Bell Nacho Fries regular|RS|283|2.7|30.1|16.8|1 regular=113|taco bell nacho fries us
taco-bell-cinnamon-twists|Taco Bell Cinnamon Twists|RS|486|2.9|74.3|20|1 order=35|taco bell cinnamon twists dessert us
taco-bell-chicken-power-menu-bowl|Taco Bell Chicken Power Menu Bowl|RS|120|6.8|11|5.2|1 bowl=383|taco bell power bowl chicken us
taco-bell-cheesy-roll-up|Taco Bell Cheesy Roll Up|RS|316|15.8|26.3|15.8|1 roll up=57|taco bell cheese roll up us
taco-bell-black-beans-rice|Taco Bell Black Beans & Rice|RS|133|3.1|22.7|3.1|1 order=128|taco bell beans rice side us
popeyes-classic-chicken-sandwich|Popeyes Classic Chicken Sandwich|RS|297|11.9|21.2|17.8|1 sandwich=236|popeyes chicken sandwich us
popeyes-spicy-chicken-sandwich|Popeyes Spicy Chicken Sandwich|RS|297|11.9|21.2|17.8|1 sandwich=236|popeyes spicy chicken sandwich us
popeyes-classic-fried-chicken-breast|Popeyes Classic Fried Chicken Breast|RS|208|19.1|8.7|10.9|1 breast=183|popeyes fried chicken breast us
popeyes-classic-fried-chicken-thigh|Popeyes Classic Fried Chicken Thigh|RS|252|12.6|8.1|18.9|1 thigh=111|popeyes fried chicken thigh us
popeyes-classic-fried-chicken-leg|Popeyes Classic Fried Chicken Leg|RS|229|20|7.1|12.9|1 leg=70|popeyes drumstick fried chicken leg us
popeyes-classic-fried-chicken-wing|Popeyes Classic Fried Chicken Wing|RS|313|16.4|10.4|20.9|1 wing=67|popeyes fried chicken wing us
popeyes-chicken-tenders-3-piece|Popeyes Chicken Tenders 3 piece|RS|265|22|15.5|12.5|3 tenders=168|popeyes tenders strips us
popeyes-blackened-chicken-tenders-3-piece|Popeyes Blackened Chicken Tenders 3 piece|RS|135|26.2|1.6|2.4|3 tenders=126|popeyes blackened tenders grilled
popeyes-cajun-fries-regular|Popeyes Cajun Fries regular|RS|286|3.3|34.1|15.4|1 regular=91|popeyes cajun fries us
popeyes-red-beans-rice-regular|Popeyes Red Beans & Rice regular|RS|160|4.5|17.9|8.3|1 regular=156|popeyes red beans rice us
popeyes-mashed-potatoes-with-cajun-gravy-regular|Popeyes Mashed Potatoes with Cajun Gravy regular|RS|97|3.5|15.9|2.7|1 regular=113|popeyes mash gravy us
popeyes-mac-cheese-regular|Popeyes Mac & Cheese regular|RS|218|8.5|18.3|12|1 regular=142|popeyes mac and cheese macaroni us
popeyes-coleslaw-regular|Popeyes Coleslaw regular|RS|168|0.9|12.4|13.3|1 regular=113|popeyes coleslaw slaw us
popeyes-buttermilk-biscuit|Popeyes Buttermilk Biscuit|RS|368|5.3|40.4|21.1|1 biscuit=57|popeyes biscuit us
popeyes-cajun-rice-regular|Popeyes Cajun Rice regular|RS|150|6.2|18.6|5.3|1 regular=113|popeyes cajun rice dirty us
popeyes-chicken-nuggets-8-piece|Popeyes Chicken Nuggets 8 piece|RS|281|14.9|13.2|19|8 nuggets=121|popeyes nuggets
chick-fil-a-chicken-sandwich|Chick-fil-A Chicken Sandwich|RS|230|15.8|22.4|9.8|1 sandwich=183|chick-fil-a chicken sandwich cfa us
chick-fil-a-spicy-chicken-sandwich|Chick-fil-A Spicy Chicken Sandwich|RS|246|15.3|23.5|10.4|1 sandwich=183|chick-fil-a spicy chicken sandwich cfa us
chick-fil-a-deluxe-chicken-sandwich|Chick-fil-A Deluxe Chicken Sandwich|RS|218|13.5|19.2|9.6|1 sandwich=229|chick-fil-a deluxe chicken sandwich cfa us
chick-fil-a-grilled-chicken-sandwich|Chick-fil-A Grilled Chicken Sandwich|RS|172|12.3|19.4|5.3|1 sandwich=227|chick-fil-a grilled chicken sandwich cfa us
chick-fil-a-nuggets-8-count|Chick-fil-A Nuggets 8 count|RS|221|23.9|9.7|9.7|8 nuggets=113|chick-fil-a nuggets cfa us
chick-fil-a-nuggets-12-count|Chick-fil-A Nuggets 12 count|RS|224|23.5|9.4|10|12 nuggets=170|chick-fil-a nuggets cfa us
chick-fil-a-grilled-nuggets-8-count|Chick-fil-A Grilled Nuggets 8 count|RS|131|25.3|1|3|8 nuggets=99|chick-fil-a grilled nuggets cfa us
chick-fil-a-chick-n-strips-3-count|Chick-fil-A Chick-n-Strips 3 count|RS|230|20.7|11.9|11.1|3 strips=135|chick-fil-a strips tenders cfa us
chick-fil-a-waffle-potato-fries-small|Chick-fil-A Waffle Potato Fries small|RS|376|4.7|41.2|21.2|1 small=85|chick-fil-a waffle fries cfa us
chick-fil-a-waffle-potato-fries-medium|Chick-fil-A Waffle Potato Fries medium|RS|336|4|36|19.2|1 medium=125|chick-fil-a waffle fries cfa us
chick-fil-a-waffle-potato-fries-large|Chick-fil-A Waffle Potato Fries large|RS|353|4.1|38.2|20.6|1 large=170|chick-fil-a waffle fries cfa us
chick-fil-a-mac-cheese-medium|Chick-fil-A Mac & Cheese medium|RS|198|8.8|12.8|12.8|1 medium=227|chick-fil-a mac and cheese cfa us
chick-fil-a-chick-fil-a-chicken-biscuit|Chick-fil-A Chick-fil-A Chicken Biscuit|RS|317|13.1|31|15.9|1 biscuit=145|chick-fil-a chicken biscuit breakfast cfa us
chick-fil-a-chick-n-minis-4-count|Chick-fil-A Chick-n-Minis 4 count|RS|248|13.1|28.3|9|4 minis=145|chick-fil-a chick n minis breakfast cfa us
chick-fil-a-hash-browns|Chick-fil-A Hash Browns|RS|380|4.2|32.4|25.4|1 order=71|chick-fil-a hash browns breakfast cfa us
chick-fil-a-egg-white-grill|Chick-fil-A Egg White Grill|RS|173|15.6|17.9|4.6|1 sandwich=173|chick-fil-a egg white grill breakfast cfa us
chick-fil-a-chocolate-chunk-cookie|Chick-fil-A Chocolate Chunk Cookie|RS|521|5.6|69|23.9|1 cookie=71|chick-fil-a cookie cfa us
chick-fil-a-chocolate-milkshake-small|Chick-fil-A Chocolate Milkshake small|RS|144|3.3|21.7|5.5|1 small=397|chick-fil-a milkshake chocolate cfa us
chick-fil-a-cookies-cream-milkshake-small|Chick-fil-A Cookies & Cream Milkshake small|RS|159|3.3|22.9|6.3|1 small=397|chick-fil-a milkshake cookies cream cfa us
chick-fil-a-spicy-southwest-salad-with-chicken|Chick-fil-A Spicy Southwest Salad with Chicken|RS|136|10|8.2|7.6|1 salad=330|chick-fil-a salad chicken cfa us
five-guys-hamburger|Five Guys Hamburger|RS|264|14.7|14.7|16.2|1 burger=265|five guys hamburger double patty us
five-guys-cheeseburger|Five Guys Cheeseburger|RS|277|15.5|13.2|18.2|1 burger=303|five guys cheeseburger us
five-guys-bacon-burger|Five Guys Bacon Burger|RS|280|15.4|14|17.9|1 burger=279|five guys bacon burger us
five-guys-bacon-cheeseburger|Five Guys Bacon Cheeseburger|RS|290|16.1|12.6|19.6|1 burger=317|five guys bacon cheeseburger us
five-guys-little-hamburger|Five Guys Little Hamburger|RS|271|13|22|14.7|1 burger=177|five guys little hamburger single us
five-guys-little-cheeseburger|Five Guys Little Cheeseburger|RS|281|13.8|20.4|16.3|1 burger=196|five guys little cheeseburger single us
five-guys-little-bacon-cheeseburger|Five Guys Little Bacon Cheeseburger|RS|310|15.3|19.7|18.7|1 burger=203|five guys little bacon cheeseburger us
five-guys-hot-dog|Five Guys Hot Dog|RS|319|11|24.5|20.2|1 hot dog=163|five guys hot dog us
five-guys-grilled-cheese|Five Guys Grilled Cheese|RS|362|8.5|31.5|20|1 sandwich=130|five guys grilled cheese us
five-guys-veggie-sandwich|Five Guys Veggie Sandwich|RS|189|6.9|25.8|6.4|1 sandwich=233|five guys veggie sandwich us
five-guys-little-fries|Five Guys Little Fries|RS|232|3.5|31.7|10.1|1 little=227|five guys fries chips us
five-guys-regular-fries|Five Guys Regular Fries|RS|232|3.2|31.9|10|1 regular=411|five guys fries chips us
five-guys-large-fries|Five Guys Large Fries|RS|232|3.2|31.9|10.1|1 large=567|five guys fries chips us
five-guys-milkshake|Five Guys Milkshake|RS|187|2.9|19.1|11.1|1 shake=450|five guys milkshake shake
dunkin-glazed-donut|Dunkin' Glazed Donut|RS|338|5.6|46.5|15.5|1 donut=71|dunkin glazed doughnut us
dunkin-boston-kreme-donut|Dunkin' Boston Kreme Donut|RS|353|4.7|49.4|15.3|1 donut=85|dunkin boston cream doughnut us
dunkin-chocolate-frosted-donut|Dunkin' Chocolate Frosted Donut|RS|394|5.6|46.5|21.1|1 donut=71|dunkin chocolate doughnut us
dunkin-jelly-donut|Dunkin' Jelly Donut|RS|318|4.7|45.9|12.9|1 donut=85|dunkin jelly doughnut jam us
dunkin-old-fashioned-donut|Dunkin' Old Fashioned Donut|RS|394|5.6|39.4|23.9|1 donut=71|dunkin old fashioned doughnut plain us
dunkin-strawberry-frosted-donut-with-sprinkles|Dunkin' Strawberry Frosted Donut with Sprinkles|RS|394|5.6|50.7|18.3|1 donut=71|dunkin strawberry sprinkle doughnut us
dunkin-glazed-munchkins-5-count|Dunkin' Glazed Munchkins 5 count|RS|400|5.7|52.9|18.6|5 munchkins=70|dunkin munchkins donut holes
dunkin-bacon-egg-cheese-croissant|Dunkin' Bacon Egg & Cheese Croissant|RS|340|13.3|25.3|20.7|1 sandwich=150|dunkin breakfast sandwich croissant us
dunkin-sausage-egg-cheese-croissant|Dunkin' Sausage Egg & Cheese Croissant|RS|389|13.3|21.1|27.8|1 sandwich=180|dunkin breakfast sandwich croissant sausage us
dunkin-bacon-egg-cheese-english-muffin|Dunkin' Bacon Egg & Cheese English Muffin|RS|257|12.9|21.4|12.9|1 sandwich=140|dunkin breakfast sandwich english muffin us
dunkin-bacon-egg-cheese-wake-up-wrap|Dunkin' Bacon Egg & Cheese Wake-Up Wrap|RS|247|11.8|16.5|15.3|1 wrap=85|dunkin wake up wrap breakfast us
dunkin-hash-browns|Dunkin' Hash Browns|RS|217|1.7|23.3|13.3|1 order (6 pieces)=60|dunkin hash browns us
dunkin-plain-bagel|Dunkin' Plain Bagel|RS|303|11.1|61.6|2|1 bagel=99|dunkin bagel us
dunkin-blueberry-muffin|Dunkin' Blueberry Muffin|RS|359|4.7|50.8|15.6|1 muffin=128|dunkin muffin blueberry us
dunkin-iced-coffee-with-cream-medium|Dunkin' Iced Coffee with Cream medium|RS|16|0.1|0.4|1.5|1 medium=680|dunkin iced coffee cream us|L
dunkin-caramel-swirl-iced-latte-medium-with-whole-milk|Dunkin' Caramel Swirl Iced Latte medium with whole milk|RS|51|1.5|7.5|1.8|1 medium=680|dunkin iced latte caramel us|L
dominos-hand-tossed-cheese-pizza-medium-slice|Domino's Hand Tossed Cheese Pizza medium slice|RS|253|10.1|31.6|8.9|1 slice (1/8 of 12-inch)=79|dominos cheese pizza slice us
dominos-hand-tossed-cheese-pizza-large-slice|Domino's Hand Tossed Cheese Pizza large slice|RS|257|10.6|31.9|9.7|1 slice (1/8 of 14-inch)=113|dominos cheese pizza slice us
dominos-hand-tossed-pepperoni-pizza-medium-slice|Domino's Hand Tossed Pepperoni Pizza medium slice|RS|271|11.8|29.4|11.8|1 slice (1/8 of 12-inch)=85|dominos pepperoni pizza slice us
dominos-hand-tossed-pepperoni-pizza-large-slice|Domino's Hand Tossed Pepperoni Pizza large slice|RS|275|11.7|30|12.5|1 slice (1/8 of 14-inch)=120|dominos pepperoni pizza slice us
dominos-crunchy-thin-crust-cheese-pizza-large-slice|Domino's Crunchy Thin Crust Cheese Pizza large slice|RS|267|10.7|22.7|14.7|1 slice (1/8 of 14-inch)=75|dominos thin crust cheese pizza us
dominos-crunchy-thin-crust-pepperoni-pizza-large-slice|Domino's Crunchy Thin Crust Pepperoni Pizza large slice|RS|293|12.2|20.7|18.3|1 slice (1/8 of 14-inch)=82|dominos thin crust pepperoni pizza
dominos-handmade-pan-cheese-pizza-medium-slice|Domino's Handmade Pan Cheese Pizza medium slice|RS|265|10.2|27.6|13.3|1 slice (1/8 of 12-inch)=98|dominos pan pizza cheese us
dominos-brooklyn-style-cheese-pizza-large-slice|Domino's Brooklyn Style Cheese Pizza large slice|RS|250|10|27.5|10.8|1 slice (1/6 of 14-inch)=120|dominos brooklyn style pizza
dominos-extravaganzza-large-hand-tossed-slice|Domino's ExtravaganZZa large hand tossed slice|RS|253|11.3|24.7|12|1 slice (1/8 of 14-inch)=150|dominos extravaganzza supreme pizza
dominos-meatzza-large-hand-tossed-slice|Domino's MeatZZa large hand tossed slice|RS|255|11|25.5|12.4|1 slice (1/8 of 14-inch)=145|dominos meatzza meat pizza
dominos-pacific-veggie-large-hand-tossed-slice|Domino's Pacific Veggie large hand tossed slice|RS|207|8.6|26.4|7.1|1 slice (1/8 of 14-inch)=140|dominos veggie pizza
dominos-parmesan-bread-twist|Domino's Parmesan Bread Twist|RS|314|8.6|48.6|8.6|1 twist=35|dominos bread twists us
dominos-stuffed-cheesy-bread|Domino's Stuffed Cheesy Bread|RS|311|11.1|31.1|15.6|1 piece=45|dominos cheesy bread us
dominos-chocolate-lava-crunch-cake|Domino's Chocolate Lava Crunch Cake|RS|412|4.7|52.9|20|1 cake=85|dominos lava cake dessert us
dominos-philly-cheese-steak-sandwich|Domino's Philly Cheese Steak Sandwich|RS|231|11.4|20|11.7|1 sandwich=290|dominos philly sandwich oven baked
dominos-hot-buffalo-wings-8-piece|Domino's Hot Buffalo Wings 8 piece|RS|221|19.3|2.8|14.8|8 wings=290|dominos wings buffalo
dominos-boneless-chicken-8-piece|Domino's Boneless Chicken 8 piece|RS|190|12.5|15|9|8 pieces=200|dominos boneless chicken bites
chipotle-chicken-burrito-rice-black-beans-salsa-cheese|Chipotle Chicken Burrito (rice, black beans, salsa, cheese)|RS|164|9.7|19.7|5|1 burrito=595|chipotle burrito chicken
chipotle-steak-burrito-rice-black-beans-salsa-cheese|Chipotle Steak Burrito (rice, black beans, salsa, cheese)|RS|159|7.9|19.8|4.9|1 burrito=595|chipotle burrito steak
chipotle-carnitas-burrito-rice-black-beans-salsa-cheese|Chipotle Carnitas Burrito (rice, black beans, salsa, cheese)|RS|169|8.2|19.7|5.9|1 burrito=595|chipotle burrito carnitas pork
chipotle-barbacoa-burrito-rice-black-beans-salsa-cheese|Chipotle Barbacoa Burrito (rice, black beans, salsa, cheese)|RS|162|8.4|20|5|1 burrito=595|chipotle burrito barbacoa beef
chipotle-chicken-burrito-bowl-rice-black-beans-salsa-che|Chipotle Chicken Burrito Bowl (rice, black beans, salsa, cheese)|RS|136|10.4|14|4.4|1 bowl=480|chipotle bowl chicken burrito
chipotle-steak-burrito-bowl-rice-black-beans-salsa-chees|Chipotle Steak Burrito Bowl (rice, black beans, salsa, cheese)|RS|130|8.1|14.2|4.2|1 bowl=480|chipotle bowl steak burrito
chipotle-sofritas-burrito-bowl-rice-black-beans-salsa-fa|Chipotle Sofritas Burrito Bowl (rice, black beans, salsa, fajita veg)|RS|111|4.4|16.7|3.1|1 bowl=480|chipotle bowl sofritas tofu vegan
chipotle-flour-tortilla-burrito|Chipotle Flour Tortilla (burrito)|RS|278|7|43.5|7.8|1 tortilla=115|chipotle tortilla wrap us
chipotle-chicken|Chipotle Chicken|RS|159|28.3|0|6.2|1 serving (4 oz)=113|chipotle chicken protein us
chipotle-steak|Chipotle Steak|RS|133|18.6|0.9|5.3|1 serving (4 oz)=113|chipotle steak protein us
chipotle-carnitas|Chipotle Carnitas|RS|186|20.4|0|10.6|1 serving (4 oz)=113|chipotle carnitas pork us
chipotle-barbacoa|Chipotle Barbacoa|RS|150|21.2|1.8|6.2|1 serving (4 oz)=113|chipotle barbacoa beef us
chipotle-sofritas|Chipotle Sofritas|RS|133|7.1|8|8.8|1 serving (4 oz)=113|chipotle sofritas tofu us
chipotle-cilantro-lime-white-rice|Chipotle Cilantro-Lime White Rice|RS|186|3.5|35.4|3.5|1 serving (4 oz)=113|chipotle white rice us
chipotle-cilantro-lime-brown-rice|Chipotle Cilantro-Lime Brown Rice|RS|186|3.5|31.9|5.3|1 serving (4 oz)=113|chipotle brown rice us
chipotle-black-beans|Chipotle Black Beans|RS|115|7.1|19.5|1.3|1 serving (4 oz)=113|chipotle black beans us
chipotle-pinto-beans|Chipotle Pinto Beans|RS|115|7.1|18.6|1.3|1 serving (4 oz)=113|chipotle pinto beans us
chipotle-guacamole|Chipotle Guacamole|RS|204|1.8|7.1|19.5|1 serving (4 oz)=113|chipotle guac avocado us
chipotle-cheese|Chipotle Cheese|RS|393|21.4|3.6|28.6|1 serving (1 oz)=28|chipotle shredded cheese us
chipotle-sour-cream|Chipotle Sour Cream|RS|193|3.5|3.5|17.5|1 serving (2 oz)=57|chipotle sour cream us
chipotle-fajita-veggies|Chipotle Fajita Veggies|RS|35|1.8|7|0|1 serving (2 oz)=57|chipotle fajita peppers onions us
chipotle-queso-blanco|Chipotle Queso Blanco|RS|211|8.8|7|15.8|1 serving (2 oz)=57|chipotle queso cheese dip us
chipotle-chips|Chipotle Chips|RS|478|6.2|64.6|22.1|1 bag=113|chipotle tortilla chips us
chipotle-chips-guacamole|Chipotle Chips & Guacamole|RS|339|4|35.7|20.7|1 order=227|chipotle chips guac us
chipotle-chicken-quesadilla|Chipotle Chicken Quesadilla|RS|350|22|24|18.7|1 quesadilla=300|chipotle quesadilla chicken
tim-hortons-honey-dip-donut|Tim Hortons Honey Dip Donut|RS|350|6.7|51.7|13.3|1 donut=60|tim hortons honey dip doughnut glazed us
tim-hortons-boston-cream-donut|Tim Hortons Boston Cream Donut|RS|294|4.7|42.4|11.8|1 donut=85|tim hortons boston cream doughnut us
tim-hortons-chocolate-glazed-donut|Tim Hortons Chocolate Glazed Donut|RS|325|3.8|48.8|12.5|1 donut=80|tim hortons chocolate glazed doughnut us
tim-hortons-old-fashioned-plain-donut|Tim Hortons Old Fashioned Plain Donut|RS|354|4.6|38.5|20|1 donut=65|tim hortons plain doughnut
tim-hortons-chocolate-glazed-timbit|Tim Hortons Chocolate Glazed Timbit|RS|389|5.6|50|16.7|1 timbit=18|tim hortons timbits donut hole us
tim-hortons-double-double-medium|Tim Hortons Double-Double medium|RS|56|1|6.5|2.9|1 medium=414|tim hortons double coffee cream sugar us|L
tim-hortons-original-iced-capp-medium|Tim Hortons Original Iced Capp medium|RS|76|0.8|10.6|3.4|1 medium=473|tim hortons iced capp cappuccino us|L
tim-hortons-sausage-egg-cheese-english-muffin|Tim Hortons Sausage Egg & Cheese English Muffin|RS|323|13.5|18.7|21.3|1 sandwich=155|tim hortons breakfast sandwich sausage us
tim-hortons-bacon-egg-cheese-biscuit|Tim Hortons Bacon Egg & Cheese Biscuit|RS|300|11.3|21.3|18.7|1 sandwich=150|tim hortons breakfast biscuit bacon
tim-hortons-farmers-wrap-sausage|Tim Hortons Farmer's Wrap (sausage)|RS|284|11.1|20|17.9|1 wrap=190|tim hortons farmers wrap breakfast
tim-hortons-hash-brown|Tim Hortons Hash Brown|RS|200|2|22|12|1 hash brown=50|tim hortons hash brown us
tim-hortons-everything-bagel|Tim Hortons Everything Bagel|RS|291|10.7|56.3|2.9|1 bagel=103|tim hortons bagel everything us
tim-hortons-blueberry-muffin|Tim Hortons Blueberry Muffin|RS|317|4.2|45.8|13.3|1 muffin=120|tim hortons muffin blueberry
tim-hortons-chocolate-chip-cookie|Tim Hortons Chocolate Chip Cookie|RS|479|6.2|64.6|22.9|1 cookie=48|tim hortons cookie
tim-hortons-crispy-chicken-sandwich|Tim Hortons Crispy Chicken Sandwich|RS|255|11.5|24|12.5|1 sandwich=200|tim hortons chicken sandwich
pret-a-manger-classic-super-club-sandwich|Pret A Manger Classic Super Club Sandwich|RS|224|13.9|18.7|10.4|1 sandwich=230|pret a manger club sandwich chicken bacon egg
pret-a-manger-chicken-caesar-bacon-baguette|Pret A Manger Chicken Caesar & Bacon Baguette|RS|255|14.5|22.1|11.9|1 baguette=235|pret a manger chicken caesar baguette
pret-a-manger-ham-cheese-pickles-baguette|Pret A Manger Ham, Cheese & Pickles Baguette|RS|250|12.7|25|10.9|1 baguette=220|pret a manger ham cheese baguette
pret-a-manger-tuna-mayo-cucumber-baguette|Pret A Manger Tuna Mayo & Cucumber Baguette|RS|213|10.7|24|8|1 baguette=225|pret a manger tuna baguette
pret-a-manger-egg-mayo-cress-sandwich|Pret A Manger Egg Mayo & Cress Sandwich|RS|195|8.6|16.8|10.3|1 sandwich=185|pret a manger egg mayo sandwich
pret-a-manger-chicken-avocado-sandwich|Pret A Manger Chicken & Avocado Sandwich|RS|200|11.6|16.7|9.3|1 sandwich=215|pret a manger chicken avocado sandwich
pret-a-manger-blt-sandwich|Pret A Manger BLT Sandwich|RS|242|11.1|20|12.6|1 sandwich=190|pret a manger blt bacon lettuce tomato
pret-a-manger-butter-croissant|Pret A Manger Butter Croissant|RS|431|7.7|40|26.2|1 croissant=65|pret a manger croissant
pret-a-manger-almond-croissant|Pret A Manger Almond Croissant|RS|400|8.4|33.7|25.3|1 croissant=95|pret a manger almond croissant
pret-a-manger-pain-au-chocolat|Pret A Manger Pain au Chocolat|RS|400|6.7|40|22.7|1 pastry=75|pret a manger chocolate croissant pain au chocolat
pret-a-manger-chocolate-chunk-cookie|Pret A Manger Chocolate Chunk Cookie|RS|459|5.9|60|21.2|1 cookie=85|pret a manger cookie
pret-a-manger-ham-cheese-croissant|Pret A Manger Ham & Cheese Croissant|RS|355|14.5|23.6|22.7|1 croissant=110|pret a manger ham cheese croissant
pret-a-manger-mac-cheese-hot-pot|Pret A Manger Mac & Cheese Hot Pot|RS|158|6.7|13.9|8.2|1 pot=330|pret a manger mac and cheese macaroni
pret-a-manger-plain-porridge|Pret A Manger Plain Porridge|RS|77|3|10|2.7|1 pot=300|pret a manger porridge oats
burger-king-whopper-us|Burger King Whopper (US)|RS|248|11.5|18.9|14.8|1 burger=270|burger king whopper
burger-king-whopper-with-cheese-us|Burger King Whopper with Cheese (US)|RS|268|11.9|17.6|16.6|1 burger=295|burger king whopper cheese
burger-king-double-whopper-us|Burger King Double Whopper (US)|RS|260|13.8|14.1|16.7|1 burger=354|burger king double whopper
burger-king-whopper-jr-us|Burger King Whopper Jr. (US)|RS|220|10|18|12.7|1 burger=150|burger king whopper junior
burger-king-bacon-king-us|Burger King Bacon King (US)|RS|353|18.7|15|24.2|1 burger=326|burger king bacon
burger-king-impossible-whopper-us|Burger King Impossible Whopper (US)|RS|233|9.3|21.5|12.6|1 burger=270|burger king impossible whopper plant based vegan
burger-king-big-fish-us|Burger King Big Fish (US)|RS|261|9.2|25.7|13.8|1 sandwich=218|burger king fish sandwich
burger-king-original-chicken-sandwich-us|Burger King Original Chicken Sandwich (US)|RS|315|11|26|18.3|1 sandwich=219|burger king chicken sandwich long
burger-king-cheeseburger-us|Burger King Cheeseburger (US)|RS|231|12.4|22.3|10.7|1 burger=121|burger king cheeseburger
burger-king-chicken-fries-9-piece-us|Burger King Chicken Fries 9 piece (US)|RS|219|10.2|14.1|13.3|9 pieces=128|burger king chicken fries
burger-king-chicken-nuggets-8-piece-us|Burger King Chicken Nuggets 8 piece (US)|RS|297|14.1|18|18.8|8 nuggets=128|burger king nuggets
burger-king-french-fries-small-us|Burger King French Fries small (US)|RS|360|4.5|47.2|16.9|1 small=89|burger king fries chips
burger-king-french-fries-medium-us|Burger King French Fries medium (US)|RS|328|4.3|45.7|14.7|1 medium=116|burger king fries chips
burger-king-onion-rings-medium-us|Burger King Onion Rings medium (US)|RS|373|5.5|45.5|19.1|1 medium=110|burger king onion rings
burger-king-sausage-egg-cheese-croissanwich-us|Burger King Sausage Egg & Cheese Croissan'wich (US)|RS|309|11.7|16.7|21.6|1 sandwich=162|burger king croissanwich breakfast sausage
burger-king-hash-browns-small-us|Burger King Hash Browns small (US)|RS|347|2.8|33.3|22.2|1 small=72|burger king hash browns
burger-king-hersheys-sundae-pie-us|Burger King Hershey's Sundae Pie (US)|RS|392|3.8|40.5|24.1|1 slice=79|burger king sundae pie dessert
burger-king-rodeo-burger-us|Burger King Rodeo Burger (US)|RS|258|10|30.8|10.8|1 burger=120|burger king rodeo bbq onion rings
mcdonalds-quarter-pounder-with-cheese-us|McDonald's Quarter Pounder with Cheese (US)|RS|257|14.9|20.8|12.9|1 burger=202|mcdonalds qpc quarter pounder
mcdonalds-double-quarter-pounder-with-cheese-us|McDonald's Double Quarter Pounder with Cheese (US)|RS|264|17.1|15.4|15|1 burger=280|mcdonalds double qpc quarter pounder
mcdonalds-quarter-pounder-with-cheese-bacon-us|McDonald's Quarter Pounder with Cheese Bacon (US)|RS|271|15.1|19.1|14.7|1 burger=225|mcdonalds qpc bacon quarter pounder
mcdonalds-quarter-pounder-with-cheese-deluxe-us|McDonald's Quarter Pounder with Cheese Deluxe (US)|RS|248|12|17.6|14.4|1 burger=250|mcdonalds qpc deluxe quarter pounder
mcdonalds-mcrib-us|McDonald's McRib (US)|RS|249|11.5|21.1|13.4|1 sandwich=209|mcdonalds mcrib pork rib sandwich
mcdonalds-big-mac-us|McDonald's Big Mac (US)|RS|269|11.4|21|15.5|1 burger=219|mcdonalds big mac
mcdonalds-mcdouble-us|McDonald's McDouble (US)|RS|272|15|22.4|13.6|1 burger=147|mcdonalds mcdouble
mcdonalds-double-cheeseburger-us|McDonald's Double Cheeseburger (US)|RS|273|15.2|20.6|14.5|1 burger=165|mcdonalds double cheeseburger
mcdonalds-filet-o-fish-us|McDonald's Filet-O-Fish (US)|RS|275|11.3|27.5|13.4|1 sandwich=142|mcdonalds filet o fish sandwich
mcdonalds-mcchicken-us|McDonald's McChicken (US)|RS|280|9.8|27.3|14.7|1 sandwich=143|mcdonalds mcchicken
mcdonalds-spicy-mccrispy-us|McDonald's Spicy McCrispy (US)|RS|242|11.9|21.9|11.9|1 sandwich=219|mcdonalds spicy mccrispy chicken sandwich
mcdonalds-chicken-mcnuggets-10-piece-us|McDonald's Chicken McNuggets 10 piece (US)|RS|253|14.2|16|14.8|10 nuggets=162|mcdonalds mcnuggets nuggets
mcdonalds-chicken-mcnuggets-20-piece-us|McDonald's Chicken McNuggets 20 piece (US)|RS|257|14.2|15.8|15.2|20 nuggets=323|mcdonalds mcnuggets nuggets
mcdonalds-egg-mcmuffin-us|McDonald's Egg McMuffin (US)|RS|226|12.4|21.9|9.5|1 sandwich=137|mcdonalds egg mcmuffin breakfast
mcdonalds-sausage-mcmuffin-us|McDonald's Sausage McMuffin (US)|RS|348|12.2|25.2|22.6|1 sandwich=115|mcdonalds sausage mcmuffin breakfast
mcdonalds-sausage-mcmuffin-with-egg-us|McDonald's Sausage McMuffin with Egg (US)|RS|293|12.2|18.3|18.9|1 sandwich=164|mcdonalds sausage egg mcmuffin breakfast
mcdonalds-hash-brown-us|McDonald's Hash Brown (US)|RS|264|1.9|30.2|15.1|1 hash brown=53|mcdonalds hash brown breakfast
mcdonalds-sausage-biscuit-us|McDonald's Sausage Biscuit (US)|RS|393|9.4|30.8|25.6|1 biscuit=117|mcdonalds sausage biscuit breakfast
mcdonalds-bacon-egg-cheese-biscuit-us|McDonald's Bacon Egg & Cheese Biscuit (US)|RS|303|11.2|25|17.1|1 biscuit=152|mcdonalds bacon egg cheese biscuit breakfast
mcdonalds-sausage-mcgriddles-us|McDonald's Sausage McGriddles (US)|RS|305|7.8|29.8|17|1 sandwich=141|mcdonalds mcgriddle breakfast
mcdonalds-bacon-egg-cheese-mcgriddles-us|McDonald's Bacon Egg & Cheese McGriddles (US)|RS|250|8.9|27.4|10.7|1 sandwich=168|mcdonalds mcgriddle bacon egg breakfast
mcdonalds-hotcakes-with-butter-and-syrup-us|McDonald's Hotcakes with Butter and Syrup (US)|RS|262|4.1|45.7|6.8|1 order=221|mcdonalds hotcakes pancakes breakfast
mcdonalds-big-breakfast-with-hotcakes-us|McDonald's Big Breakfast with Hotcakes (US)|RS|307|8.2|36.2|14.4|1 order=437|mcdonalds big breakfast hotcakes
mcdonalds-fruit-maple-oatmeal-us|McDonald's Fruit & Maple Oatmeal (US)|RS|127|2.4|25.5|1.8|1 bowl=251|mcdonalds oatmeal porridge
mcdonalds-world-famous-fries-small-us|McDonald's World Famous Fries small (US)|RS|324|4.2|40.8|15.5|1 small=71|mcdonalds fries chips
mcdonalds-world-famous-fries-medium-us|McDonald's World Famous Fries medium (US)|RS|288|3.6|38.7|13.5|1 medium=111|mcdonalds fries chips
mcdonalds-world-famous-fries-large-us|McDonald's World Famous Fries large (US)|RS|320|4.7|43.3|14.7|1 large=150|mcdonalds fries chips
mcdonalds-oreo-mcflurry-regular-us|McDonald's Oreo McFlurry regular (US)|RS|179|4.2|28.1|5.6|1 regular=285|mcdonalds mcflurry oreo dessert
mcdonalds-m-ms-mcflurry-regular-us|McDonald's M&M's McFlurry regular (US)|RS|225|4.9|33.7|7.4|1 regular=285|mcdonalds mcflurry m&ms dessert
mcdonalds-baked-apple-pie-us|McDonald's Baked Apple Pie (US)|RS|299|2.6|42.9|14.3|1 pie=77|mcdonalds apple pie dessert
mcdonalds-vanilla-cone-us|McDonald's Vanilla Cone (US)|RS|222|5.6|35.6|5.6|1 cone=90|mcdonalds soft serve cone ice cream
mcdonalds-hot-fudge-sundae-us|McDonald's Hot Fudge Sundae (US)|RS|185|4.5|29.8|5.6|1 sundae=178|mcdonalds sundae hot fudge dessert
mcdonalds-chocolate-shake-medium-us|McDonald's Chocolate Shake medium (US)|RS|135|3.2|23|3.6|1 medium=473|mcdonalds milkshake chocolate|L
mcdonalds-chocolate-chip-cookie-us|McDonald's Chocolate Chip Cookie (US)|RS|515|6.1|66.7|24.2|1 cookie=33|mcdonalds cookie
kfc-original-recipe-chicken-breast-us|KFC Original Recipe Chicken Breast (US)|RS|219|21.9|6.2|11.8|1 breast=178|kfc original recipe breast fried chicken
kfc-original-recipe-chicken-thigh-us|KFC Original Recipe Chicken Thigh (US)|RS|222|15.1|6.3|15.1|1 thigh=126|kfc original recipe thigh fried chicken
kfc-original-recipe-drumstick-us|KFC Original Recipe Drumstick (US)|RS|224|20.7|6.9|13.8|1 drumstick=58|kfc original recipe drumstick leg
kfc-original-recipe-wing-us|KFC Original Recipe Wing (US)|RS|277|21.3|8.5|17|1 wing=47|kfc original recipe wing
kfc-extra-crispy-chicken-breast-us|KFC Extra Crispy Chicken Breast (US)|RS|279|18.4|9.5|18.4|1 breast=190|kfc extra crispy breast
kfc-extra-crispy-chicken-thigh-us|KFC Extra Crispy Chicken Thigh (US)|RS|254|13.1|8.5|18.5|1 thigh=130|kfc extra crispy thigh
kfc-extra-crispy-drumstick-us|KFC Extra Crispy Drumstick (US)|RS|283|16.7|8.3|20|1 drumstick=60|kfc extra crispy drumstick
kfc-extra-crispy-tender-us|KFC Extra Crispy Tender (US)|RS|298|23.4|17|14.9|1 tender=47|kfc tenders strips
kfc-classic-chicken-sandwich-us|KFC Classic Chicken Sandwich (US)|RS|302|15.8|22.8|16.3|1 sandwich=215|kfc chicken sandwich
kfc-famous-bowl-us|KFC Famous Bowl (US)|RS|193|6.8|21.1|9.1|1 bowl=384|kfc famous bowl mashed potato chicken corn
kfc-chicken-pot-pie-us|KFC Chicken Pot Pie (US)|RS|169|6.1|14.1|9.6|1 pie=425|kfc pot pie
kfc-mashed-potatoes-with-gravy-individual-us|KFC Mashed Potatoes with Gravy individual (US)|RS|85|2|12.4|2.9|1 individual=153|kfc mash gravy
kfc-mac-cheese-individual-us|KFC Mac & Cheese individual (US)|RS|103|4.4|11.8|4.4|1 individual=136|kfc mac and cheese
kfc-coleslaw-individual-us|KFC Coleslaw individual (US)|RS|133|0.8|17.2|7|1 individual=128|kfc coleslaw slaw
kfc-biscuit-us|KFC Biscuit (US)|RS|316|7|38.6|14|1 biscuit=57|kfc biscuit
kfc-secret-recipe-fries-individual-us|KFC Secret Recipe Fries individual (US)|RS|323|4|39.4|16.2|1 individual=99|kfc fries chips
kfc-popcorn-nuggets-large-us|KFC Popcorn Nuggets large (US)|RS|437|19|25.4|28.2|1 large=142|kfc popcorn chicken nuggets
pizza-hut-pepperoni-pan-pizza-large-slice-us|Pizza Hut Pepperoni Pan Pizza large slice (US)|RS|286|11.8|26.1|15.1|1 slice (1/8 of 14-inch)=119|pizza hut pan pepperoni slice
pizza-hut-cheese-pan-pizza-large-slice-us|Pizza Hut Cheese Pan Pizza large slice (US)|RS|261|11.3|27|12.2|1 slice (1/8 of 14-inch)=115|pizza hut pan cheese slice
pizza-hut-pepperoni-pan-pizza-medium-slice-us|Pizza Hut Pepperoni Pan Pizza medium slice (US)|RS|284|12.5|27.3|13.6|1 slice (1/8 of 12-inch)=88|pizza hut pan pepperoni slice
pizza-hut-cheese-pan-pizza-medium-slice-us|Pizza Hut Cheese Pan Pizza medium slice (US)|RS|259|11.8|28.2|11.8|1 slice (1/8 of 12-inch)=85|pizza hut pan cheese slice
pizza-hut-pepperoni-hand-tossed-pizza-large-slice-us|Pizza Hut Pepperoni Hand-Tossed Pizza large slice (US)|RS|275|11.9|30.3|11.9|1 slice (1/8 of 14-inch)=109|pizza hut hand tossed pepperoni slice
pizza-hut-cheese-hand-tossed-pizza-large-slice-us|Pizza Hut Cheese Hand-Tossed Pizza large slice (US)|RS|267|11.4|31.4|10.5|1 slice (1/8 of 14-inch)=105|pizza hut hand tossed cheese slice
pizza-hut-pepperoni-thin-n-crispy-pizza-large-slice-us|Pizza Hut Pepperoni Thin 'N Crispy Pizza large slice (US)|RS|318|12.9|27.1|17.6|1 slice (1/8 of 14-inch)=85|pizza hut thin crust pepperoni slice
pizza-hut-cheese-thin-n-crispy-pizza-large-slice-us|Pizza Hut Cheese Thin 'N Crispy Pizza large slice (US)|RS|300|13.8|28.7|15|1 slice (1/8 of 14-inch)=80|pizza hut thin crust cheese slice
pizza-hut-pepperoni-stuffed-crust-pizza-large-slice-us|Pizza Hut Pepperoni Stuffed Crust Pizza large slice (US)|RS|281|12.6|28.1|12.6|1 slice (1/8 of 14-inch)=135|pizza hut stuffed crust pepperoni slice
pizza-hut-meat-lovers-pan-pizza-large-slice-us|Pizza Hut Meat Lover's Pan Pizza large slice (US)|RS|293|12|21.3|17.3|1 slice (1/8 of 14-inch)=150|pizza hut meat lovers pan slice
pizza-hut-supreme-pan-pizza-large-slice-us|Pizza Hut Supreme Pan Pizza large slice (US)|RS|240|9.3|22|12.7|1 slice (1/8 of 14-inch)=150|pizza hut supreme pan slice
pizza-hut-veggie-lovers-hand-tossed-pizza-large-slice-us|Pizza Hut Veggie Lover's Hand-Tossed Pizza large slice (US)|RS|200|8|27.2|6.4|1 slice (1/8 of 14-inch)=125|pizza hut veggie lovers slice
pizza-hut-pepperoni-personal-pan-pizza-us|Pizza Hut Pepperoni Personal Pan Pizza (US)|RS|284|11.6|30.7|12.9|1 pizza=225|pizza hut personal pan pepperoni
pizza-hut-breadstick-us|Pizza Hut Breadstick (US)|RS|318|9.1|43.2|11.4|1 breadstick=44|pizza hut breadstick
pizza-hut-traditional-bone-in-wings-naked-6-piece-us|Pizza Hut Traditional Bone-In Wings, naked 6 piece (US)|RS|267|23.3|0|18.9|6 wings=180|pizza hut wings bone in
papa-johns-cheese-pizza-original-crust-large-slice|Papa John's Cheese Pizza original crust large slice|RS|264|10.9|31.8|9.1|1 slice (1/8 of 14-inch)=110|papa johns cheese pizza slice us
papa-johns-pepperoni-pizza-original-crust-large-slice|Papa John's Pepperoni Pizza original crust large slice|RS|287|11.3|30.4|13|1 slice (1/8 of 14-inch)=115|papa johns pepperoni pizza slice us
papa-johns-sausage-pizza-original-crust-large-slice|Papa John's Sausage Pizza original crust large slice|RS|283|10.8|29.2|13.3|1 slice (1/8 of 14-inch)=120|papa johns sausage pizza slice us
papa-johns-the-works-pizza-original-crust-large-slice|Papa John's The Works Pizza original crust large slice|RS|243|10|25.7|10.7|1 slice (1/8 of 14-inch)=140|papa johns works supreme pizza slice us
papa-johns-garden-fresh-pizza-original-crust-large-slice|Papa John's Garden Fresh Pizza original crust large slice|RS|215|8.5|28.5|6.9|1 slice (1/8 of 14-inch)=130|papa johns veggie pizza slice us
papa-johns-pepperoni-pizza-thin-crust-large-slice|Papa John's Pepperoni Pizza thin crust large slice|RS|362|13.8|25|22.5|1 slice (1/8 of 14-inch)=80|papa johns thin crust pepperoni slice us
papa-johns-cheese-pizza-original-crust-medium-slice|Papa John's Cheese Pizza original crust medium slice|RS|262|10|32.5|8.8|1 slice (1/8 of 12-inch)=80|papa johns cheese pizza slice medium us
papa-johns-pepperoni-pizza-original-crust-medium-slice|Papa John's Pepperoni Pizza original crust medium slice|RS|286|10.7|31|11.9|1 slice (1/8 of 12-inch)=84|papa johns pepperoni pizza slice medium us
papa-johns-garlic-sauce|Papa John's Garlic Sauce|RS|536|0|0|60.7|1 cup (28 g)=28|papa johns garlic dipping sauce us
papa-johns-breadstick|Papa John's Breadstick|RS|255|7.3|47.3|3.6|1 breadstick=55|papa johns breadstick us
papa-johns-garlic-parmesan-breadstick|Papa John's Garlic Parmesan Breadstick|RS|286|7.1|39.3|10.7|1 breadstick=56|papa johns breadstick garlic parmesan us
papa-johns-chocolate-chip-cookie|Papa John's Chocolate Chip Cookie|RS|475|5|65|22.5|1 slice (1/8 of cookie)=40|papa johns cookie dessert us
little-caesars-classic-cheese-pizza-large-slice|Little Caesars Classic Cheese Pizza large slice|RS|240|11.5|30.8|8.7|1 slice (1/8 of 14-inch)=104|little caesars hot n ready cheese slice us
little-caesars-classic-pepperoni-pizza-large-slice|Little Caesars Classic Pepperoni Pizza large slice|RS|259|12|29.6|10.2|1 slice (1/8 of 14-inch)=108|little caesars hot n ready pepperoni slice us
little-caesars-extramostbestest-pepperoni-pizza-large-sl|Little Caesars ExtraMostBestest Pepperoni Pizza large slice|RS|270|12.2|27.8|12.2|1 slice (1/8 of 14-inch)=115|little caesars extra most bestest pepperoni us
little-caesars-deep-deep-dish-pepperoni-pizza-slice|Little Caesars Deep!Deep! Dish Pepperoni Pizza slice|RS|267|11.9|27.4|11.9|1 slice (1/8 of 10x14)=135|little caesars deep dish pepperoni us
little-caesars-3-meat-treat-pizza-large-slice|Little Caesars 3 Meat Treat Pizza large slice|RS|272|12.8|25.6|12.8|1 slice (1/8 of 14-inch)=125|little caesars 3 meat treat pizza
little-caesars-crazy-bread|Little Caesars Crazy Bread|RS|270|8.1|43.2|8.1|1 stick=37|little caesars crazy bread breadstick us
little-caesars-italian-cheese-bread|Little Caesars Italian Cheese Bread|RS|260|12|24|12|1 piece=50|little caesars cheese bread
little-caesars-crazy-sauce|Little Caesars Crazy Sauce|RS|40|1.8|8|0|1 cup (113 g)=113|little caesars marinara dip sauce us
little-caesars-caesar-wings-oven-roasted-8-piece|Little Caesars Caesar Wings Oven Roasted 8 piece|RS|256|21.1|0|18.5|8 wings=227|little caesars wings
arbys-classic-roast-beef|Arby's Classic Roast Beef|RS|234|14.9|24|9.1|1 sandwich=154|arbys roast beef sandwich us
arbys-double-roast-beef|Arby's Double Roast Beef|RS|233|17.4|17.4|11|1 sandwich=219|arbys double roast beef us
arbys-half-pound-roast-beef|Arby's Half Pound Roast Beef|RS|225|17|15.9|10.7|1 sandwich=271|arbys half pound roast beef us
arbys-jr-roast-beef|Arby's Jr. Roast Beef|RS|206|12.7|22.5|6.9|1 sandwich=102|arbys junior roast beef us
arbys-classic-beef-n-cheddar|Arby's Classic Beef 'n Cheddar|RS|231|11.8|23.1|10.3|1 sandwich=195|arbys beef n cheddar us
arbys-smokehouse-brisket|Arby's Smokehouse Brisket|RS|217|12.3|17.3|11.2|1 sandwich=277|arbys brisket sandwich us
arbys-french-dip-swiss|Arby's French Dip & Swiss|RS|200|13.3|18.5|7.8|1 sandwich=270|arbys french dip
arbys-classic-greek-gyro|Arby's Classic Greek Gyro|RS|290|9.8|19.6|19.2|1 gyro=245|arbys gyro
arbys-crispy-chicken-sandwich|Arby's Crispy Chicken Sandwich|RS|237|11.2|24.7|10.2|1 sandwich=215|arbys chicken sandwich
arbys-curly-fries-small|Arby's Curly Fries small|RS|387|4.7|45.3|20.8|1 small=106|arbys curly fries us
arbys-curly-fries-medium|Arby's Curly Fries medium|RS|387|4.9|45.8|20.4|1 medium=142|arbys curly fries us
arbys-mozzarella-sticks-4-piece|Arby's Mozzarella Sticks 4 piece|RS|321|13.9|28.5|16.8|4 sticks=137|arbys mozzarella sticks us
arbys-jamocha-shake-small|Arby's Jamocha Shake small|RS|138|3|22.2|4|1 small=400|arbys shake jamocha coffee milkshake
sonic-sonic-cheeseburger-with-mayo|Sonic Sonic Cheeseburger with mayo|RS|282|12.2|20|17.3|1 burger=255|sonic cheeseburger us
sonic-supersonic-double-cheeseburger-with-mayo|Sonic SuperSONIC Double Cheeseburger with mayo|RS|317|15.8|13.9|21.9|1 burger=360|sonic supersonic double cheeseburger us
sonic-chili-cheese-coney-6-inch|Sonic Chili Cheese Coney 6-inch|RS|256|9.4|17.2|16.7|1 coney=180|sonic chili cheese coney hot dog us
sonic-corn-dog|Sonic Corn Dog|RS|271|7.1|29.4|14.1|1 corn dog=85|sonic corn dog us
sonic-tots-medium|Sonic Tots medium|RS|304|3.2|34.4|16.8|1 medium=125|sonic tater tots us
sonic-onion-rings-medium|Sonic Onion Rings medium|RS|352|4.8|42.8|17.9|1 medium=145|sonic onion rings
sonic-classic-crispy-chicken-sandwich|Sonic Classic Crispy Chicken Sandwich|RS|276|11.4|26.2|13.8|1 sandwich=210|sonic chicken sandwich
sonic-cherry-limeade-medium|Sonic Cherry Limeade medium|RS|34|0|8.9|0|1 medium=887|sonic cherry limeade drink us|L
sonic-oreo-sonic-blast-medium|Sonic Oreo Sonic Blast medium|RS|233|3.8|30|10.8|1 medium=400|sonic blast oreo dessert
jack-in-the-box-jumbo-jack|Jack in the Box Jumbo Jack|RS|222|9.6|16.9|12.6|1 burger=261|jack in the box jumbo burger us
jack-in-the-box-jumbo-jack-with-cheese|Jack in the Box Jumbo Jack with Cheese|RS|236|10.2|15.8|14.4|1 burger=284|jack in the box jumbo cheese us
jack-in-the-box-sourdough-jack|Jack in the Box Sourdough Jack|RS|290|13.1|15.9|19.2|1 burger=245|jack in the box sourdough us
jack-in-the-box-ultimate-cheeseburger|Jack in the Box Ultimate Cheeseburger|RS|310|16.3|13|21.3|1 burger=300|jack in the box ultimate cheeseburger us
jack-in-the-box-regular-taco|Jack in the Box Regular Taco|RS|191|6.7|16.7|11.1|1 taco=90|jack in the box taco us
jack-in-the-box-curly-fries-medium|Jack in the Box Curly Fries medium|RS|328|4.8|37.6|17.6|1 medium=125|jack in the box curly fries us
jack-in-the-box-egg-rolls-3-piece|Jack in the Box Egg Rolls 3 piece|RS|229|7.6|25.3|10.6|3 egg rolls=170|jack in the box egg rolls
jack-in-the-box-breakfast-jack|Jack in the Box Breakfast Jack|RS|269|12.3|23.1|13.8|1 sandwich=130|jack in the box breakfast us
jack-in-the-box-supreme-croissant|Jack in the Box Supreme Croissant|RS|326|12.6|20.6|21.1|1 sandwich=175|jack in the box supreme croissant breakfast
jack-in-the-box-spicy-chicken-sandwich|Jack in the Box Spicy Chicken Sandwich|RS|229|9|24.8|10.5|1 sandwich=210|jack in the box spicy chicken sandwich
in-n-out-hamburger-with-onion|In-N-Out Hamburger with Onion|RS|160|6.6|16|7.8|1 burger=243|in-n-out hamburger us
in-n-out-cheeseburger-with-onion|In-N-Out Cheeseburger with Onion|RS|179|8.2|14.6|10.1|1 burger=268|in-n-out cheeseburger us
in-n-out-double-double|In-N-Out Double-Double|RS|203|11.2|11.8|12.4|1 burger=330|in-n-out double us
in-n-out-double-double-protein-style|In-N-Out Double-Double Protein Style|RS|173|11|3.7|13|1 burger=300|in-n-out protein style lettuce wrap double us
in-n-out-hamburger-protein-style|In-N-Out Hamburger Protein Style|RS|113|6.1|5.2|8|1 burger=213|in-n-out protein style lettuce wrap us
in-n-out-french-fries|In-N-Out French Fries|RS|296|4.8|41.6|12|1 order=125|in-n-out fries us
in-n-out-animal-style-fries|In-N-Out Animal Style Fries|RS|250|6.8|19.3|15|1 order=280|in-n-out animal style fries
in-n-out-chocolate-shake|In-N-Out Chocolate Shake|RS|139|3.8|16.2|6.8|1 shake (15 oz)=425|in-n-out milkshake chocolate us
in-n-out-vanilla-shake|In-N-Out Vanilla Shake|RS|134|3.5|15.1|7.1|1 shake (15 oz)=425|in-n-out milkshake vanilla us
in-n-out-strawberry-shake|In-N-Out Strawberry Shake|RS|139|3.5|16.9|6.4|1 shake (15 oz)=425|in-n-out milkshake strawberry us
shake-shack-shackburger|Shake Shack ShackBurger|RS|250|14.5|13|15|1 burger=200|shake shack shackburger us
shake-shack-double-shackburger|Shake Shack Double ShackBurger|RS|253|17|9|16.3|1 burger=300|shake shack double shackburger us
shake-shack-smokeshack|Shake Shack SmokeShack|RS|265|14.9|12.6|16.7|1 burger=215|shake shack smokeshack bacon us
shake-shack-shack-stack|Shake Shack Shack Stack|RS|244|11.6|13.8|15.9|1 burger=320|shake shack stack mushroom
shake-shack-chicken-shack|Shake Shack Chicken Shack|RS|229|13.8|14.2|13.8|1 sandwich=240|shake shack chicken sandwich us
shake-shack-fries|Shake Shack Fries|RS|331|4.2|44.4|15.5|1 order=142|shake shack crinkle fries us
shake-shack-cheese-fries|Shake Shack Cheese Fries|RS|355|7.5|33.5|21.5|1 order=200|shake shack cheese fries us
shake-shack-vanilla-shake|Shake Shack Vanilla Shake|RS|151|3.3|16|8|1 shake=450|shake shack milkshake vanilla
shake-shack-chocolate-shake|Shake Shack Chocolate Shake|RS|167|3.3|18.9|8.7|1 shake=450|shake shack milkshake chocolate
panda-express-orange-chicken|Panda Express Orange Chicken|RS|302|15.4|31.5|14.2|1 entree=162|panda express orange chicken us
panda-express-beijing-beef|Panda Express Beijing Beef|RS|294|8.1|28.7|16.2|1 entree=160|panda express beijing beef us
panda-express-broccoli-beef|Panda Express Broccoli Beef|RS|98|5.9|8.5|4.6|1 entree=153|panda express broccoli beef us
panda-express-kung-pao-chicken|Panda Express Kung Pao Chicken|RS|179|9.9|8.6|11.7|1 entree=162|panda express kung pao chicken us
panda-express-honey-walnut-shrimp|Panda Express Honey Walnut Shrimp|RS|327|11.8|31.8|17.3|1 entree=110|panda express honey walnut shrimp us
panda-express-grilled-teriyaki-chicken|Panda Express Grilled Teriyaki Chicken|RS|176|21.2|4.7|7.6|1 entree=170|panda express teriyaki chicken us
panda-express-string-bean-chicken-breast|Panda Express String Bean Chicken Breast|RS|132|7.5|8.2|7.5|1 entree=159|panda express string bean chicken us
panda-express-mushroom-chicken|Panda Express Mushroom Chicken|RS|138|8.2|6.3|8.8|1 entree=159|panda express mushroom chicken us
panda-express-black-pepper-angus-steak|Panda Express Black Pepper Angus Steak|RS|112|11.9|6.2|4.4|1 entree=160|panda express black pepper steak us
panda-express-chow-mein|Panda Express Chow Mein|RS|192|4.9|30.1|7.5|1 side=266|panda express chow mein noodles us
panda-express-fried-rice|Panda Express Fried Rice|RS|197|4.2|32.2|6.1|1 side=264|panda express fried rice us
panda-express-white-steamed-rice|Panda Express White Steamed Rice|RS|144|2.7|33|0|1 side=264|panda express steamed rice us
panda-express-super-greens|Panda Express Super Greens|RS|45|3|5|1.5|1 side=200|panda express greens broccoli cabbage us
panda-express-chicken-egg-roll|Panda Express Chicken Egg Roll|RS|235|7.1|23.5|11.8|1 egg roll=85|panda express egg roll us
panda-express-cream-cheese-rangoon-3-piece|Panda Express Cream Cheese Rangoon 3 piece|RS|333|8.8|42.1|14|3 rangoons=57|panda express rangoon cream cheese us
panera-bread-broccoli-cheddar-soup-cup|Panera Bread Broccoli Cheddar Soup cup|RS|106|4|7|7|1 cup=227|panera bread broccoli cheddar soup us
panera-bread-broccoli-cheddar-soup-bowl|Panera Bread Broccoli Cheddar Soup bowl|RS|106|4.1|7.1|7.1|1 bowl=340|panera bread broccoli cheddar soup us
panera-bread-chicken-noodle-soup-cup|Panera Bread Chicken Noodle Soup cup|RS|48|3.5|6.2|1.1|1 cup=227|panera bread chicken noodle soup
panera-bread-bacon-turkey-bravo-sandwich-whole|Panera Bread Bacon Turkey Bravo Sandwich whole|RS|214|11.9|20.8|9.2|1 sandwich=370|panera bread bacon turkey bravo us
panera-bread-chipotle-chicken-avocado-melt-whole|Panera Bread Chipotle Chicken Avocado Melt whole|RS|247|14.4|19.7|12.5|1 sandwich=360|panera bread chipotle chicken avocado melt
panera-bread-frontega-chicken-sandwich-whole|Panera Bread Frontega Chicken Sandwich whole|RS|231|12.8|20.3|10.8|1 sandwich=360|panera bread frontega chicken panini
panera-bread-mac-cheese-small|Panera Bread Mac & Cheese small|RS|207|7.5|16.3|12.3|1 small=227|panera bread mac and cheese
panera-bread-fuji-apple-salad-with-chicken-whole|Panera Bread Fuji Apple Salad with Chicken whole|RS|157|9.4|9.4|9.4|1 salad=350|panera bread fuji apple salad
panera-bread-classic-grilled-cheese|Panera Bread Classic Grilled Cheese|RS|300|11.5|26|16.5|1 sandwich=200|panera bread grilled cheese
panera-bread-cinnamon-crunch-bagel|Panera Bread Cinnamon Crunch Bagel|RS|339|6.5|61.3|7.3|1 bagel=124|panera bread cinnamon crunch bagel us
panera-bread-plain-bagel|Panera Bread Plain Bagel|RS|267|9.5|53.3|1.4|1 bagel=105|panera bread bagel plain
panera-bread-kitchen-sink-cookie|Panera Bread Kitchen Sink Cookie|RS|533|6|69.3|25.3|1 cookie=150|panera bread kitchen sink cookie
starbucks-bacon-gouda-egg-sandwich-us|Starbucks Bacon, Gouda & Egg Sandwich (US)|RS|295|15.6|27.9|14.8|1 sandwich=122|starbucks breakfast sandwich bacon gouda us
starbucks-sausage-cheddar-egg-sandwich-us|Starbucks Sausage, Cheddar & Egg Sandwich (US)|RS|353|11|25|22.8|1 sandwich=136|starbucks breakfast sandwich sausage us
starbucks-double-smoked-bacon-cheddar-egg-sandwich-us|Starbucks Double-Smoked Bacon, Cheddar & Egg Sandwich (US)|RS|323|13.5|27.1|18.1|1 sandwich=155|starbucks breakfast sandwich bacon cheddar us
starbucks-impossible-breakfast-sandwich-us|Starbucks Impossible Breakfast Sandwich (US)|RS|237|12.4|20.3|12.4|1 sandwich=177|starbucks impossible breakfast sandwich plant us
starbucks-spinach-feta-egg-white-wrap-us|Starbucks Spinach, Feta & Egg White Wrap (US)|RS|187|12.9|21.9|5.2|1 wrap=155|starbucks spinach feta wrap breakfast us
starbucks-turkey-bacon-cheddar-egg-white-sandwich-us|Starbucks Turkey Bacon, Cheddar & Egg White Sandwich (US)|RS|193|14.3|23.5|4.2|1 sandwich=119|starbucks turkey bacon egg white us
starbucks-bacon-gruyere-egg-bites-us|Starbucks Bacon & Gruyere Egg Bites (US)|RS|231|14.6|6.9|15.4|2 egg bites=130|starbucks egg bites sous vide us
starbucks-egg-white-roasted-red-pepper-egg-bites-us|Starbucks Egg White & Roasted Red Pepper Egg Bites (US)|RS|131|9.2|8.5|6.2|2 egg bites=130|starbucks egg bites white us
starbucks-butter-croissant-us|Starbucks Butter Croissant (US)|RS|368|7.4|41.2|19.1|1 croissant=68|starbucks croissant us
starbucks-chocolate-croissant-us|Starbucks Chocolate Croissant (US)|RS|370|7.4|40.7|19.8|1 croissant=81|starbucks chocolate croissant us
starbucks-blueberry-muffin-us|Starbucks Blueberry Muffin (US)|RS|319|4.4|46|13.3|1 muffin=113|starbucks muffin blueberry us
starbucks-cheese-danish-us|Starbucks Cheese Danish (US)|RS|358|8.6|40.7|17.3|1 danish=81|starbucks danish pastry cheese us
starbucks-banana-nut-bread-us|Starbucks Banana Nut Bread (US)|RS|372|5.3|46.9|18.6|1 slice=113|starbucks banana bread loaf us
starbucks-iced-lemon-loaf-us|Starbucks Iced Lemon Loaf (US)|RS|416|4.4|60.2|17.7|1 slice=113|starbucks lemon loaf cake us
starbucks-birthday-cake-pop-us|Starbucks Birthday Cake Pop (US)|RS|372|4.7|46.5|18.6|1 cake pop=43|starbucks cake pop us
starbucks-chocolate-chip-cookie-us|Starbucks Chocolate Chip Cookie (US)|RS|447|4.7|60|21.2|1 cookie=85|starbucks cookie
starbucks-rolled-steel-cut-oatmeal-us|Starbucks Rolled & Steel-Cut Oatmeal (US)|RS|63|2|11|1|1 bowl=255|starbucks oatmeal porridge us
starbucks-everything-bagel-us|Starbucks Everything Bagel (US)|RS|238|9|45.9|1.6|1 bagel=122|starbucks bagel us
greggs-sausage-roll|Greggs Sausage Roll|RS|337|9.3|24.7|22.7|1 roll=97|greggs sausage roll
greggs-vegan-sausage-roll|Greggs Vegan Sausage Roll|RS|332|12.8|27.7|18.1|1 roll=94|greggs vegan sausage roll plant
greggs-steak-bake|Greggs Steak Bake|RS|291|9.3|22.9|17.9|1 bake=140|greggs steak bake pastry
greggs-chicken-bake|Greggs Chicken Bake|RS|283|10|21.3|17.3|1 bake=150|greggs chicken bake pastry
greggs-sausage-bean-cheese-melt|Greggs Sausage, Bean & Cheese Melt|RS|314|10|23.6|20|1 melt=140|greggs sausage bean cheese melt
greggs-cheese-onion-bake|Greggs Cheese & Onion Bake|RS|307|7.9|22.1|20.7|1 bake=140|greggs cheese onion bake
greggs-mexican-chicken-bake|Greggs Mexican Chicken Bake|RS|287|10.7|22|17.3|1 bake=150|greggs mexican chicken bake
greggs-bacon-breakfast-roll|Greggs Bacon Breakfast Roll|RS|314|15.2|35.2|12.4|1 roll=105|greggs bacon roll breakfast
greggs-sausage-breakfast-roll|Greggs Sausage Breakfast Roll|RS|311|12.6|28.1|16.3|1 roll=135|greggs sausage roll breakfast bap
greggs-tuna-crunch-baguette|Greggs Tuna Crunch Baguette|RS|213|10.4|24.3|7.8|1 baguette=230|greggs tuna baguette
greggs-chicken-mayo-baguette|Greggs Chicken Mayo Baguette|RS|214|11.4|25|7.3|1 baguette=220|greggs chicken mayo baguette
greggs-yum-yum|Greggs Yum Yum|RS|431|5.4|44.6|26.2|1 yum yum=65|greggs yum doughnut twist
greggs-glazed-ring-doughnut|Greggs Glazed Ring Doughnut|RS|364|5.5|43.6|18.2|1 doughnut=55|greggs ring donut glazed
greggs-pink-jammie-doughnut|Greggs Pink Jammie Doughnut|RS|350|5|47.5|15|1 doughnut=80|greggs jam doughnut donut
greggs-chocolate-chip-cookie|Greggs Chocolate Chip Cookie|RS|471|5.7|60|22.9|1 cookie=70|greggs cookie
greggs-belgian-bun|Greggs Belgian Bun|RS|350|5|58.3|10|1 bun=120|greggs belgian bun
costa-coffee-bacon-roll|Costa Coffee Bacon Roll|RS|268|14.2|29.2|10|1 roll=120|costa coffee bacon bap breakfast
costa-coffee-ham-cheese-toastie|Costa Coffee Ham & Cheese Toastie|RS|250|13.8|25|10|1 toastie=160|costa coffee toastie ham cheese
costa-coffee-all-butter-croissant|Costa Coffee All Butter Croissant|RS|395|8.3|41.7|21.7|1 croissant=60|costa coffee croissant
costa-coffee-almond-croissant|Costa Coffee Almond Croissant|RS|427|9|38|26|1 croissant=100|costa coffee almond croissant
costa-coffee-blueberry-muffin|Costa Coffee Blueberry Muffin|RS|352|4.8|44.8|16.8|1 muffin=125|costa coffee muffin blueberry
costa-coffee-lemon-drizzle-cake|Costa Coffee Lemon Drizzle Cake|RS|400|4|52|19|1 slice=100|costa coffee lemon cake
costa-coffee-chocolate-brownie|Costa Coffee Chocolate Brownie|RS|475|6.2|52.5|26.2|1 brownie=80|costa coffee brownie
costa-coffee-cheese-scone|Costa Coffee Cheese Scone|RS|345|10.9|38.2|16.4|1 scone=110|costa coffee scone cheese
costa-coffee-tuna-melt-panini|Costa Coffee Tuna Melt Panini|RS|214|12.9|22.9|7.6|1 panini=210|costa coffee panini tuna melt
costa-coffee-ham-mozzarella-panini|Costa Coffee Ham & Mozzarella Panini|RS|220|12|23.5|8.5|1 panini=200|costa coffee panini ham
wingstop-classic-wings-original-hot-6-piece|Wingstop Classic Wings Original Hot 6 piece|RS|300|26.7|0.6|21.1|6 wings=180|wingstop bone in wings hot
wingstop-classic-wings-lemon-pepper-6-piece|Wingstop Classic Wings Lemon Pepper 6 piece|RS|367|26.7|1.1|28.3|6 wings=180|wingstop bone in wings lemon pepper
wingstop-classic-wings-garlic-parmesan-6-piece|Wingstop Classic Wings Garlic Parmesan 6 piece|RS|373|26.5|1.6|29.2|6 wings=185|wingstop bone in wings garlic parmesan
wingstop-boneless-wings-original-hot-10-piece|Wingstop Boneless Wings Original Hot 10 piece|RS|263|15|23.3|12|10 wings=300|wingstop boneless wings
wingstop-seasoned-fries-regular|Wingstop Seasoned Fries regular|RS|235|2.9|30|11.8|1 regular=170|wingstop fries
wingstop-ranch-dip-regular|Wingstop Ranch Dip regular|RS|344|1.1|3.3|36.7|1 dip=90|wingstop ranch dressing dip
wingstop-chicken-sandwich|Wingstop Chicken Sandwich|RS|276|14|22.8|14|1 sandwich=250|wingstop chicken sandwich
raising-canes-chicken-finger|Raising Cane's Chicken Finger|RS|232|23.2|10.7|10.7|1 finger=56|raising canes chicken finger tender us
raising-canes-crinkle-cut-fries-regular|Raising Cane's Crinkle-Cut Fries regular|RS|269|3.4|32.4|13.8|1 regular=145|raising canes fries crinkle us
raising-canes-texas-toast|Raising Cane's Texas Toast|RS|300|8|38|13|1 slice=50|raising canes texas toast us
raising-canes-canes-sauce|Raising Cane's Cane's Sauce|RS|452|0|2.4|47.6|1 cup=42|raising canes sauce dip us
raising-canes-coleslaw|Raising Cane's Coleslaw|RS|88|0.9|8.8|5.3|1 side=113|raising canes coleslaw us
raising-canes-the-3-finger-combo|Raising Cane's The 3 Finger Combo|RS|333|11.7|26.4|20|1 combo=375|raising canes 3 finger combo fries toast slaw sauce
raising-canes-the-box-combo|Raising Cane's The Box Combo|RS|305|11.5|21.8|18.6|1 combo=495|raising canes box combo 4 fingers
raising-canes-the-caniac-combo|Raising Cane's The Caniac Combo|RS|283|10.8|18.7|17.8|1 combo=760|raising canes caniac combo 6 fingers
whataburger-whataburger|Whataburger Whataburger|RS|187|9.2|19.6|7.9|1 burger=316|whataburger us
whataburger-whataburger-with-cheese|Whataburger Whataburger with Cheese|RS|203|10.3|18.5|9.7|1 burger=340|whataburger cheese us
whataburger-double-meat-whataburger|Whataburger Double Meat Whataburger|RS|202|11.2|14.4|10.5|1 burger=430|whataburger double meat us
whataburger-whatachickn-sandwich|Whataburger Whatachick'n Sandwich|RS|219|11.5|20.7|10|1 sandwich=270|whataburger chicken sandwich
whataburger-patty-melt|Whataburger Patty Melt|RS|297|14.4|15.9|19.4|1 sandwich=320|whataburger patty melt
whataburger-honey-butter-chicken-biscuit|Whataburger Honey Butter Chicken Biscuit|RS|295|10|29|15.5|1 biscuit=200|whataburger chicken biscuit breakfast us
whataburger-bacon-egg-taquito-with-cheese|Whataburger Bacon & Egg Taquito with Cheese|RS|269|12.4|17.2|16.6|1 taquito=145|whataburger taquito breakfast us
whataburger-french-fries-medium|Whataburger French Fries medium|RS|308|3.8|36.9|16.2|1 medium=130|whataburger fries us
whataburger-whatachickn-strips-3-piece|Whataburger Whatachick'n Strips 3 piece|RS|248|18.2|13.3|13.3|3 strips=165|whataburger chicken strips
carls-jr-famous-star-with-cheese|Carl's Jr. Famous Star with Cheese|RS|264|11|21.7|15|1 burger=254|carls jr. famous star burger hardees us
carls-jr-super-star-with-cheese|Carl's Jr. Super Star with Cheese|RS|267|13.6|16.2|16.2|1 burger=345|carls jr. super star burger hardees us
carls-jr-western-bacon-cheeseburger|Carl's Jr. Western Bacon Cheeseburger|RS|298|13.5|31|13.1|1 burger=252|carls jr. western bacon burger onion rings bbq us
carls-jr-big-hamburger|Carl's Jr. Big Hamburger|RS|219|12.1|19.5|10.2|1 burger=215|carls jr. hamburger
carls-jr-original-angus-thickburger|Carl's Jr. Original Angus Thickburger|RS|226|9.7|15.9|13.2|1 burger=340|carls jr. thickburger hardees 1/3 lb us
carls-jr-hand-breaded-chicken-tenders-3-piece|Carl's Jr. Hand-Breaded Chicken Tenders 3 piece|RS|193|18.5|11.1|8.1|3 tenders=135|carls jr. chicken tenders
carls-jr-monster-biscuit|Carl's Jr. Monster Biscuit|RS|325|12.9|15.4|23.3|1 biscuit=240|carls jr. monster biscuit breakfast hardees us
carls-jr-sausage-biscuit|Carl's Jr. Sausage Biscuit|RS|379|8.6|23.6|27.9|1 biscuit=140|carls jr. sausage biscuit breakfast hardees us
carls-jr-natural-cut-fries-medium|Carl's Jr. Natural-Cut Fries medium|RS|297|4.1|37.9|14.5|1 medium=145|carls jr. fries
dairy-queen-oreo-blizzard-small|Dairy Queen Oreo Blizzard small|RS|216|4.6|32.9|7.4|1 small=283|dairy queen blizzard oreo us
dairy-queen-oreo-blizzard-medium|Dairy Queen Oreo Blizzard medium|RS|204|4.5|30.6|7.1|1 medium=382|dairy queen blizzard oreo us
dairy-queen-oreo-blizzard-large|Dairy Queen Oreo Blizzard large|RS|204|4.2|30.8|7.1|1 large=496|dairy queen blizzard oreo us
dairy-queen-reeses-peanut-butter-cup-blizzard-small|Dairy Queen Reese's Peanut Butter Cup Blizzard small|RS|226|6|30.4|8.8|1 small=283|dairy queen blizzard reeses us
dairy-queen-reeses-peanut-butter-cup-blizzard-medium|Dairy Queen Reese's Peanut Butter Cup Blizzard medium|RS|209|5.5|28.3|8.4|1 medium=382|dairy queen blizzard reeses us
dairy-queen-m-ms-blizzard-small|Dairy Queen M&M's Blizzard small|RS|240|5.3|36|8.1|1 small=283|dairy queen blizzard m&m us
dairy-queen-vanilla-cone-medium|Dairy Queen Vanilla Cone medium|RS|155|3.8|23.9|4.2|1 medium=213|dairy queen soft serve cone us
dairy-queen-chocolate-dipped-cone-medium|Dairy Queen Chocolate Dipped Cone medium|RS|209|3.4|25.2|10.3|1 medium=234|dairy queen dipped cone us
dairy-queen-dilly-bar|Dairy Queen Dilly Bar|RS|282|3.5|28.2|17.6|1 bar=85|dairy queen dilly bar us
dairy-queen-chocolate-sundae-medium|Dairy Queen Chocolate Sundae medium|RS|171|3.4|28.2|4.7|1 medium=234|dairy queen sundae chocolate us
dairy-queen-banana-split|Dairy Queen Banana Split|RS|138|2.4|24.4|3.5|1 split=369|dairy queen banana split us
dairy-queen-chicken-strip-basket-4-piece|Dairy Queen Chicken Strip Basket 4 piece|RS|258|9.2|24.8|13.8|1 basket=400|dairy queen chicken strip basket fries gravy toast us
dairy-queen-original-cheeseburger|Dairy Queen Original Cheeseburger|RS|222|12.2|18.3|11.1|1 burger=180|dairy queen cheeseburger stackburger
baskin-robbins-vanilla-ice-cream|Baskin-Robbins Vanilla Ice Cream|RS|230|4.4|25.7|12.4|1 regular scoop (4 oz)=113|baskin-robbins vanilla ice cream us
baskin-robbins-chocolate-ice-cream|Baskin-Robbins Chocolate Ice Cream|RS|239|4.4|29.2|12.4|1 regular scoop (4 oz)=113|baskin-robbins chocolate ice cream us
baskin-robbins-mint-chocolate-chip-ice-cream|Baskin-Robbins Mint Chocolate Chip Ice Cream|RS|239|3.5|25.7|13.3|1 regular scoop (4 oz)=113|baskin-robbins mint choc chip ice cream us
baskin-robbins-pralines-n-cream-ice-cream|Baskin-Robbins Pralines 'n Cream Ice Cream|RS|248|3.5|31.9|11.5|1 regular scoop (4 oz)=113|baskin-robbins pralines cream ice us
baskin-robbins-jamoca-almond-fudge-ice-cream|Baskin-Robbins Jamoca Almond Fudge Ice Cream|RS|257|4.4|29.2|13.3|1 regular scoop (4 oz)=113|baskin-robbins jamoca coffee ice cream us
baskin-robbins-cookies-n-cream-ice-cream|Baskin-Robbins Cookies 'n Cream Ice Cream|RS|248|3.5|30.1|12.4|1 regular scoop (4 oz)=113|baskin-robbins cookies cream ice us
baskin-robbins-rainbow-sherbet|Baskin-Robbins Rainbow Sherbet|RS|133|0.9|30.1|1.8|1 regular scoop (4 oz)=113|baskin-robbins sherbet rainbow us
baskin-robbins-waffle-cone|Baskin-Robbins Waffle Cone|RS|400|7.5|80|6.2|1 cone=40|baskin-robbins waffle cone
auntie-annes-original-pretzel|Auntie Anne's Original Pretzel|RS|283|8.3|58.3|1.7|1 pretzel=120|auntie annes soft pretzel us
auntie-annes-cinnamon-sugar-pretzel|Auntie Anne's Cinnamon Sugar Pretzel|RS|348|5.9|62.2|8.9|1 pretzel=135|auntie annes cinnamon pretzel us
auntie-annes-pretzel-dog|Auntie Anne's Pretzel Dog|RS|308|9.2|30|16.9|1 pretzel dog=130|auntie annes pretzel hot dog us
auntie-annes-original-pretzel-nuggets|Auntie Anne's Original Pretzel Nuggets|RS|289|8.1|59.3|2.2|1 cup=135|auntie annes pretzel bites nuggets
auntie-annes-pepperoni-pretzel|Auntie Anne's Pepperoni Pretzel|RS|310|11|46.2|9|1 pretzel=145|auntie annes pepperoni pretzel
auntie-annes-cheese-sauce-dip|Auntie Anne's Cheese Sauce Dip|RS|238|2.4|9.5|19|1 dip=42|auntie annes cheese dip
`;

export const USDA_FOOD_DATA = `
us-cereal-corn-grits-white-regular-and-quick-cooked|Cereal, corn grits, white, regular and quick, cooked with water|BF|71|1.7|14.8|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-corn-grits-white-regular-and-quick-dry|Cereal, corn grits, white, regular and quick, dry|BF|370|7.7|79.1|1.8|1 bowl=40;1 cup=30|cereals
us-cereal-corn-grits-yellow-quick-cooked-with-water|Cereal, corn grits, yellow, quick, cooked with water|BF|65|1.2|13.9|0.4|1 bowl=40;1 cup=30|cereals
us-cereal-corn-grits-yellow-regular-and-quick-cooke|Cereal, corn grits, yellow, regular and quick, cooked with water|BF|65|1.2|13.9|0.4|1 bowl=40;1 cup=30|cereals
us-cereal-corn-grits-yellow-regular-and-quick-dry|Cereal, corn grits, yellow, regular and quick, dry|BF|371|8.8|79.6|1.2|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-rice-dry|Cereal, Cream of Rice, dry|BF|370|6.3|82.4|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-wheat-10-minute-cooking-dry|Cereal, Cream of Wheat, 10 minute cooking, dry|BF|370|10.5|76.5|1.5|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-wheat-1-minute-cook-time-cooked-|Cereal, Cream of Wheat, 1 minute cook time, cooked with water|BF|55|2|10.7|0.4|1 bowl=40;1 cup=30|cereals microwaved
us-cereal-cream-of-wheat-1-minute-cook-time-dry|Cereal, Cream of Wheat, 1 minute cook time, dry|BF|359|11.8|72.6|1.5|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-wheat-2-1-2-minute-cook-time|Cereal, Cream of Wheat, 2 1/2 minute cook time|BF|52|1.9|10.1|0.4|1 bowl=40;1 cup=30|cereals cooked microwaved water
us-cereal-cream-of-wheat-2-1-2-minute-cook-time-dry|Cereal, Cream of Wheat, 2 1/2 minute cook time, dry|BF|355|11.6|71.8|1.4|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-wheat-instant-dry|Cereal, Cream of Wheat, instant, dry|BF|366|10.6|75.5|1.4|1 bowl=40;1 cup=30|cereals
us-cereal-cream-of-wheat-regular-10-minute-cooked-w|Cereal, Cream of Wheat, regular (10 minute), cooked with water|BF|50|1.4|10.5|0.2|1 bowl=40;1 cup=30|cereals
us-cereal-farina-assorted-brands-including-cream-of|Cereal, farina, assorted brands including Cream of Wheat|BF|55|1.8|10.9|0.3|1 bowl=40;1 cup=30|cereals cooked minutes quick water
us-cereal-farina-dry|Cereal, farina, dry|BF|369|10.6|78|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-blueberry-mini-spooners|Cereal, Malt-o-meal, Blueberry Mini Spooners|BF|350|8.8|79.4|1.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-chocolate-dry|Cereal, Malt-o-meal, chocolate, dry|BF|363|10.6|79.6|0.8|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-farina-hot-wheat-cereal-dry|Cereal, Malt-o-meal, Farina Hot Wheat Cereal, dry|BF|365|10.5|77.2|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-maple-brown-sugar-hot-wheat-c|Cereal, Malt-o-meal, Maple & Brown Sugar Hot Wheat Cereal, dry|BF|368|8.8|80.5|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-original-plain-dry|Cereal, Malt-o-meal, original, plain, dry|BF|365|11.8|77.3|0.7|1 bowl=40;1 cup=30|cereals
us-cereal-oats-instant-maple-and-brown-sugar-dry|Cereal, oats, instant, maple and brown sugar, dry|BF|386|9.3|76.7|4.7|1 bowl=40;1 cup=30|cereals
us-cereal-oats-instant-plain-dry|Cereal, oats, instant, plain, dry|BF|362|11.9|69.5|6.9|1 bowl=40;1 cup=30|cereals
us-cereal-oats-instant-with-cinnamon-and-spice-dry|Cereal, oats, instant, with cinnamon and spice, dry|BF|369|9.5|76.1|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-oats-regular-and-quick-cooked-with-water|Cereal, oats, regular and quick, cooked with water|BF|71|2.5|12|1.5|1 bowl=40;1 cup=30|cereals
us-cereal-oats-regular-and-quick-not-fortified-dry|Cereal, oats, regular and quick, not fortified, dry|BF|379|13.2|67.7|6.5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-corn-grits-instant-cheddar-cheese-|Cereal, Quaker, corn grits, instant, cheddar cheese flavor|BF|363|9|73|5.5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-corn-grits-instant-plain|Cereal, Quaker, corn grits, instant, plain|BF|343|7.3|78.4|2.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-hominy-grits-white-dry|Cereal, Quaker, hominy grits, white, dry|BF|361|8.8|79.2|1.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-hominy-grits-white-quick|Cereal, Quaker, hominy grits, white, quick|BF|348|8.8|79.6|1.2|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-grits-butter-flavor-dry|Cereal, Quaker, Instant Grits, Butter flavor, dry|BF|369|8.1|74.8|5.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-grits-country-bacon-flavor|Cereal, Quaker, Instant Grits, Country Bacon flavor, dry|BF|340|9.9|75.4|1.7|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-grits-ham-n-cheese-flavor-|Cereal, Quaker, Instant Grits, Ham 'n' Cheese flavor, dry|BF|355|10.7|71.1|4.7|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-grits-product-with-america|Cereal, Quaker, Instant Grits Product with American Cheese|BF|360|8.8|74.2|4.7|1 bowl=40;1 cup=30|cereals flavor
us-cereal-quaker-instant-grits|Cereal, Quaker, Instant Grits|BF|342|9.8|75.9|1.6|1 bowl=40;1 cup=30|cereals country flavor gravy ham redeye
us-cereal-quaker-instant-oatmeal-apple-and-cinnamon|Cereal, Quaker, Instant Oatmeal, Apple and Cinnamon|BF|358|10.3|72.2|5.6|1 bowl=40;1 cup=30|cereals reduced sugar
us-cereal-quaker-instant-oatmeal-apples-and-cinnamo|Cereal, Quaker, Instant Oatmeal, apples and cinnamon, dry|BF|366|8.6|76.7|4.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-banana-bread-dry|Cereal, Quaker, Instant Oatmeal, Banana Bread, dry|BF|368|9|75.7|4.9|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-cinnamon-spice-dry|Cereal, Quaker, Instant Oatmeal, Cinnamon-Spice, dry|BF|369|10.4|74.5|5.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-cinnamon-spice-red|Cereal, Quaker, Instant Oatmeal, Cinnamon Spice, reduced sugar|BF|358|11.3|69.5|6.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-cinnamon-swirl-hig|Cereal, Quaker, Instant Oatmeal, Cinnamon Swirl, high fiber|BF|366|8.8|75.7|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-dinosaur-eggs-brow|Cereal, Quaker, Instant Oatmeal, Dinosaur Eggs, Brown Sugar|BF|384|8.7|73.7|7.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-fruit-and-cream-va|Cereal, Quaker, Instant Oatmeal, fruit and cream variety, dry|BF|379|8.3|75.4|6.4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-fruit-and-cream|Cereal, Quaker, Instant Oatmeal, fruit and cream|BF|376|10.2|71.6|7.5|1 bowl=40;1 cup=30|cereals flavors variety
us-cereal-quaker-instant-oatmeal-maple-and-brown-su|Cereal, Quaker, Instant Oatmeal, maple and brown sugar, dry|BF|368|9.2|76.9|4.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-organic|Cereal, Quaker, Instant Oatmeal Organic|BF|367|16|67|6.3|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-raisin-and-spice-d|Cereal, Quaker, Instant Oatmeal, Raisin and Spice, dry|BF|360|9.1|75.7|4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-raisins-dates-and-|Cereal, Quaker, Instant Oatmeal, raisins, dates and walnuts|BF|371|8.8|72.4|7|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-instant-oatmeal-weight-control-cin|Cereal, Quaker, Instant Oatmeal, weight control, cinnamon|BF|361|16.5|64.2|6.3|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oat-bran-quaker-mother-s-oat-bran-|Cereal, Quaker, Oat Bran, Quaker/Mother's Oat Bran, dry|BF|364|17|62.9|8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-real-medleys-apple-walnut|Cereal, Quaker, oatmeal, Real Medleys, apple walnut|BF|390|8.2|70.5|10.4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-real-medleys-blueberry-haz|Cereal, Quaker, oatmeal, Real Medleys, blueberry hazelnut|BF|386|9.8|69.5|9.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-real-medleys-cherry-pistac|Cereal, Quaker, oatmeal, Real Medleys, cherry pistachio|BF|394|12|66.7|11|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-real-medleys-peach-almond|Cereal, Quaker, oatmeal, Real Medleys, peach almond|BF|387|10.1|68.6|9.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-real-medleys-summer-berry|Cereal, Quaker, oatmeal, Real Medleys, summer berry|BF|353|11.3|72.6|4.4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-multigrain-oatmeal-dry|Cereal, Quaker, Quaker MultiGrain Oatmeal, dry|BF|334|12.6|72.6|2.7|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quick-oats-dry|Cereal, Quaker, Quick Oats, Dry|BF|371|13.7|68.2|6.9|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quick-oats-with-iron-dry|Cereal, Quaker, Quick Oats with Iron, Dry|BF|371|13.7|68.2|6.9|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-weight-control-instant-oatmeal-ban|Cereal, Quaker, Weight Control Instant Oatmeal, banana bread|BF|361|16.5|64.4|6.2|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-weight-control-instant-oatmeal|Cereal, Quaker, Weight Control Instant Oatmeal|BF|361|16.4|64.3|6.2|1 bowl=40;1 cup=30|brown cereals maple sugar
us-cereal-quaker-whole-wheat-natural-cereal-dry|Cereal, Quaker, Whole Wheat Natural Cereal, dry|BF|333|11.8|74.8|2|1 bowl=40;1 cup=30|cereals
us-cereal-alpen|Cereal, Alpen|BF|352|11.2|75.7|3.3|1 bowl=40;1 cup=30|cereals
us-cereal-barbara-s-puffins-original|Cereal, Barbara's Puffins, original|BF|333|7.4|84|3.7|1 bowl=40;1 cup=30|cereals
us-cereal-chocolate-flavored-frosted-puffed-corn|Cereal, chocolate-flavored frosted puffed corn|BF|405|3.3|87.2|3.5|1 bowl=40;1 cup=30|cereals
us-cereal-familia|Cereal, Familia|BF|388|9.5|73.8|6.3|1 bowl=40;1 cup=30|cereals
us-cereal-frosted-oat-cereal-with-marshmallows|Cereal, frosted oat cereal with marshmallows|BF|400|7.1|84.7|3.3|1 bowl=40;1 cup=30|cereals
us-cereal-general-mills-cheerios|Cereal, General Mills, Cheerios|BF|372|12.4|73.2|6.6|1 bowl=40;1 cup=30|cereals
us-cereal-granola-homemade|Cereal, granola, homemade|BF|489|13.7|53.9|24.3|1 bowl=40;1 cup=30|cereals
us-cereal-health-valley-fiber-7-flakes|Cereal, Health Valley, Fiber 7 Flakes|BF|353|14.4|78.2|1.4|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-apple-zings|Cereal, Malt-o-meal, Apple Zings|BF|390|4.5|87.3|2.7|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-berry-colossal-crunch|Cereal, Malt-o-meal, Berry Colossal Crunch|BF|396|4.2|86.6|4.2|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-blueberry-muffin-tops-cereal|Cereal, Malt-o-meal, Blueberry Muffin Tops Cereal|BF|443|4.9|79.9|11.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-chocolate-marshmallow-mateys|Cereal, Malt-o-meal, Chocolate Marshmallow Mateys|BF|392|3.5|88.2|3.7|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-cinnamon-toasters|Cereal, Malt-o-meal, Cinnamon Toasters|BF|425|3.3|78.3|12.1|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-cocoa-dyno-bites|Cereal, Malt-o-meal, Cocoa Dyno-bites|BF|397|4.2|87.9|3.4|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-coco-roos|Cereal, Malt-o-meal, Coco-roos|BF|389|3.4|86.8|4.6|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-colossal-crunch|Cereal, Malt-o-meal, Colossal Crunch|BF|401|3.6|81.6|5.3|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-corn-bursts|Cereal, Malt-o-meal, Corn Bursts|BF|385|3.3|90.6|0.4|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-crispy-rice|Cereal, Malt-o-meal, Crispy Rice|BF|346|6.1|86.4|1.1|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-frosted-flakes|Cereal, Malt-o-meal, Frosted Flakes|BF|389|4.3|90.2|0.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-frosted-mini-spooners|Cereal, Malt-o-meal, Frosted Mini Spooners|BF|354|9.1|81.8|1.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-fruity-dyno-bites|Cereal, Malt-o-meal, Fruity Dyno-bites|BF|404|3.9|90.1|3.2|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-golden-puffs|Cereal, Malt-o-meal, Golden Puffs|BF|370|5.8|89.7|0.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-honey-buzzers|Cereal, Malt-o-meal, Honey Buzzers|BF|379|3.5|89.7|1.7|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-honey-graham-squares|Cereal, Malt-o-meal, Honey Graham Squares|BF|398|4.5|74.7|10|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-honey-nut-scooters|Cereal, Malt-o-meal, Honey Nut Scooters|BF|387|8.6|79.6|4.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-marshmallow-mateys|Cereal, Malt-o-meal, Marshmallow Mateys|BF|387|6.9|82.8|3.5|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-oat-blenders-with-honey|Cereal, Malt-o-meal, Oat Blenders with honey|BF|396|6.8|84.9|4.2|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-oat-blenders-with-honey-almon|Cereal, Malt-o-meal, Oat Blenders with honey & almonds|BF|379|7.8|77.3|4.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-raisin-bran-cereal|Cereal, Malt-o-meal, Raisin Bran Cereal|BF|342|7.6|80.4|1.9|1 bowl=40;1 cup=30|cereals
us-cereal-malt-o-meal-tootie-fruities|Cereal, Malt-o-meal, Tootie Fruities|BF|391|4.7|85.9|3.2|1 bowl=40;1 cup=30|cereals
us-cereal-mom-s-best-honey-nut-toasty-o-s|Cereal, Mom's Best, Honey Nut Toasty O's|BF|388|8.6|79.8|4.5|1 bowl=40;1 cup=30|cereals
us-cereal-mom-s-best-sweetened-wheat-fuls|Cereal, Mom's Best, Sweetened Wheat-fuls|BF|373|8.2|80.9|1.8|1 bowl=40;1 cup=30|cereals
us-cereal-nature-s-path-organic-flax-plus-flakes|Cereal, Nature's Path, Organic Flax Plus flakes|BF|350|11.9|75.3|5.5|1 bowl=40;1 cup=30|cereals
us-cereal-nature-s-path-organic-flax-plus-pumpkin-g|Cereal, Nature's Path, Organic Flax Plus, Pumpkin Granola|BF|467|11.2|66.1|18.3|1 bowl=40;1 cup=30|cereals
us-cereal-oat-bran-flakes-health-valley|Cereal, Oat Bran Flakes, Health Valley|BF|380|10|78|3|1 bowl=40;1 cup=30|cereals
us-cereal-post-alpha-bits|Cereal, Post, Alpha-bits|BF|389|10|80.3|4.6|1 bowl=40;1 cup=30|cereals
us-cereal-post-bran-flakes|Cereal, Post Bran Flakes|BF|328|9.9|80.5|2.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-cocoa-pebbles|Cereal, Post, Cocoa Pebbles|BF|397|4.8|85.7|4.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-fruity-pebbles|Cereal, Post, Fruity Pebbles|BF|402|4.6|86.1|4|1 bowl=40;1 cup=30|cereals
us-cereal-post-golden-crisp|Cereal, Post, Golden Crisp|BF|380|5.5|90.1|1.7|1 bowl=40;1 cup=30|cereals
us-cereal-post-grape-nuts-cereal|Cereal, Post, Grape-nuts Cereal|BF|361|11.2|80.5|1.8|1 bowl=40;1 cup=30|cereals
us-cereal-post-grape-nuts-flakes|Cereal, Post, Grape-nuts Flakes|BF|376|9.4|82|3.7|1 bowl=40;1 cup=30|cereals
us-cereal-post-great-grains-banana-nut-crunch|Cereal, Post Great Grains Banana Nut Crunch|BF|390|9.8|70.9|8.8|1 bowl=40;1 cup=30|cereals
us-cereal-post-great-grains-cranberry-almond-crunch|Cereal, Post Great Grains Cranberry Almond Crunch|BF|384|8.9|76.6|5.9|1 bowl=40;1 cup=30|cereals
us-cereal-post-great-grains-crunchy-pecan-cereal|Cereal, Post, Great Grains Crunchy Pecan Cereal|BF|403|9|73|10.5|1 bowl=40;1 cup=30|cereals
us-cereal-post-great-grains-raisin-date-pecan|Cereal, Post, Great Grains, Raisin, Date & Pecan|BF|378|7.9|74.3|7.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-honey-roasted|Cereal, Post, Honey Bunches of Oats, honey roasted|BF|401|7.1|81.2|5.5|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-pecan-bunches|Cereal, Post, Honey Bunches of Oats, pecan bunches|BF|399|7|82|5.4|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-with-almonds|Cereal, Post, Honey Bunches of Oats, with almonds|BF|409|7.7|79.6|7.3|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-with-cinnamon-|Cereal, Post Honey Bunches of Oats with cinnamon bunches|BF|400|7.1|82.8|5|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-with-real-stra|Cereal, Post, Honey Bunches of Oats, with real strawberries|BF|399|6.7|83.3|4.9|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-bunches-of-oats-with-vanilla-b|Cereal, Post, Honey Bunches of Oats with vanilla bunches|BF|394|7.9|81.8|5.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-honeycomb-cereal|Cereal, Post, Honeycomb Cereal|BF|394|6|86.6|2.9|1 bowl=40;1 cup=30|cereals
us-cereal-post-honey-nut-shredded-wheat|Cereal, Post, Honey Nut Shredded Wheat|BF|373|8.5|83.6|2.9|1 bowl=40;1 cup=30|cereals
us-cereal-post-raisin-bran-cereal|Cereal, Post Raisin Bran Cereal|BF|324|7.6|78.9|1.6|1 bowl=40;1 cup=30|cereals
us-cereal-post-selects-blueberry-morning|Cereal, Post Selects Blueberry Morning|BF|395|6.5|81.6|5.3|1 bowl=40;1 cup=30|cereals
us-cereal-post-selects-maple-pecan-crunch|Cereal, Post Selects Maple Pecan Crunch|BF|413|8.5|77.4|8.7|1 bowl=40;1 cup=30|cereals
us-cereal-post-shredded-wheat-lightly-frosted-spoon|Cereal, Post, Shredded Wheat, lightly frosted, spoon-size|BF|352|7.8|83.8|1.9|1 bowl=40;1 cup=30|cereals
us-cereal-post-shredded-wheat-n-bran-spoon-size|Cereal, Post, Shredded Wheat n' Bran, spoon-size|BF|339|10.9|80.7|2.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-shredded-wheat-original-big-biscuit|Cereal, Post, Shredded Wheat, original big biscuit|BF|337|11.4|79|2|1 bowl=40;1 cup=30|cereals
us-cereal-post-shredded-wheat-original-spoon-size|Cereal, Post, Shredded Wheat, original spoon-size|BF|351|11.8|81.4|2.1|1 bowl=40;1 cup=30|cereals
us-cereal-post-waffle-crisp|Cereal, Post, Waffle Crisp|BF|390|6.6|83|5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-100-natural-granola-oats-wheat-and|Cereal, Quaker, 100% Natural Granola, Oats, Wheat and Honey|BF|421|10.6|73.7|11.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-cap-n-crunch|Cereal, Quaker, Cap'n Crunch|BF|398|4.4|85.5|5.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-cap-n-crunch-s-halloween-crunch|Cereal, Quaker, Cap'n Crunch's Halloween Crunch|BF|402|4.4|85.1|5.7|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-cap-n-crunch-s-oops-all-berries-ce|Cereal, Quaker, Cap'n Crunch's Oops! All Berries Cereal|BF|395|4.6|87.1|4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-cap-n-crunch-s-peanut-butter-crunc|Cereal, Quaker, Cap'n Crunch's Peanut Butter Crunch|BF|417|7.1|78.7|9.2|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-cap-n-crunch-with-crunchberries|Cereal, Quaker, Cap'n Crunch with Crunchberries|BF|397|4.5|85.9|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-christmas-crunch|Cereal, Quaker, Christmas Crunch|BF|397|4.4|85.9|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-honey-graham-oh-s|Cereal, Quaker, Honey Graham OH!S|BF|412|3.9|83.7|7.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-king-vitaman|Cereal, Quaker, King Vitaman|BF|381|6.4|83.9|3.4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-low-fat-100-natural-granola-with-r|Cereal, Quaker, Low Fat 100% Natural Granola with Raisins|BF|388|8.4|80.6|5.5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-maple-brown-sugar-life-cereal|Cereal, Quaker, Maple Brown Sugar Life Cereal|BF|373|9.2|78.9|4.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-mother-s-cinnamon-oat-crunch|Cereal, Quaker, Mother's Cinnamon Oat Crunch|BF|382|10.6|79.8|4.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-mother-s-cocoa-bumpers|Cereal, Quaker, Mother's Cocoa Bumpers|BF|382|4.2|89.9|1.6|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-mother-s-graham-bumpers|Cereal, Quaker, Mother's Graham Bumpers|BF|379|4.6|88.9|1.5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-mother-s-peanut-butter-bumpers-cer|Cereal, Quaker, Mother's Peanut Butter Bumpers Cereal|BF|407|7.6|79.7|7.3|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-mother-s-toasted-oat-bran-cereal|Cereal, Quaker, Mother's Toasted Oat Bran cereal|BF|372|11.5|75.4|5|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-natural-granola-apple-cranberry-al|Cereal, Quaker, Natural Granola Apple Cranberry Almond|BF|418|9.2|74.7|11.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-squares|Cereal, Quaker, Oatmeal Squares|BF|379|11.4|77.8|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-squares-cinnamon|Cereal, Quaker, Oatmeal Squares, cinnamon|BF|379|11.2|78.1|4.9|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-oatmeal-squares-golden-maple|Cereal, Quaker Oatmeal Squares, Golden Maple|BF|380|11.3|78|4.8|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-100-natural-granola-with-oa|Cereal, Quaker, Quaker 100% Natural Granola with Oats, Wheat|BF|412|9.7|74.7|10.4|1 bowl=40;1 cup=30|cereals honey
us-cereal-quaker-quaker-crunchy-bran|Cereal, Quaker, Quaker Crunchy Bran|BF|331|6.4|83.7|4.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-honey-graham-life-cereal|Cereal, Quaker, Quaker Honey Graham Life Cereal|BF|373|9.3|78.6|4.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-oat-cinnamon-life|Cereal, Quaker, Quaker Oat Cinnamon Life|BF|374|9.1|79|4.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-oat-life-plain|Cereal, Quaker, Quaker Oat Life, plain|BF|374|10|77.7|4.4|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-puffed-rice|Cereal, Quaker, Quaker Puffed Rice|BF|383|7|87.8|0.9|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-quaker-puffed-wheat|Cereal, Quaker, Quaker Puffed Wheat|BF|366|16.3|76.4|2.2|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-shredded-wheat-bagged-cereal|Cereal, Quaker, Shredded Wheat, bagged cereal|BF|348|11.2|81|2|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-sweet-crunch-quisp|Cereal, Quaker, Sweet Crunch/Quisp|BF|406|4.5|85|6.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-toasted-multigrain-crisps|Cereal, Quaker, Toasted Multigrain Crisps|BF|372|12.4|74.9|5.1|1 bowl=40;1 cup=30|cereals
us-cereal-quaker-whole-hearts-oat-cereal|Cereal, Quaker Whole Hearts oat cereal|BF|376|7.6|80.1|5.6|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-corn-biscuits|Cereal, Ralston Corn Biscuits|BF|376|5.8|85.8|1.1|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-corn-flakes|Cereal, Ralston Corn Flakes|BF|384|5.9|88|0.9|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-crisp-rice|Cereal, Ralston Crisp Rice|BF|383|6.7|86.2|1.3|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-crispy-hexagons|Cereal, Ralston Crispy Hexagons|BF|379|5.9|86.8|1|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-enriched-wheat-bran-flakes|Cereal, Ralston Enriched Wheat Bran flakes|BF|390|10.2|79.8|3.4|1 bowl=40;1 cup=30|cereals
us-cereal-ralston-tasteeos|Cereal, Ralston Tasteeos|BF|395|10.7|76|5.4|1 bowl=40;1 cup=30|cereals
us-cereal-rice-puffed|Cereal, rice, puffed|BF|402|6.3|89.8|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-sun-country-kretschmer-honey-crunch-wheat|Cereal, Sun Country, Kretschmer Honey Crunch Wheat Germ|BF|372|26.6|58.1|7.8|1 bowl=40;1 cup=30|cereals
us-cereal-sun-country-kretschmer-toasted-wheat-bran|Cereal, Sun Country, Kretschmer Toasted Wheat Bran|BF|200|17.6|59.5|5.2|1 bowl=40;1 cup=30|cereals
us-cereal-sun-country-kretschmer-wheat-germ|Cereal, Sun Country, Kretschmer Wheat Germ|BF|366|31.4|49.4|9.6|1 bowl=40;1 cup=30|cereals
us-cereal-uncle-sam-cereal|Cereal, Uncle Sam Cereal|BF|346|16|65.8|11.6|1 bowl=40;1 cup=30|cereals
us-cereal-weetabix-whole-grain-cereal|Cereal, Weetabix whole grain cereal|BF|371|11.4|81.5|2.9|1 bowl=40;1 cup=30|cereals
us-cereal-wheat-and-bran-presweetened-with-nuts-and|Cereal, wheat and bran, presweetened with nuts and fruits|BF|385|7.1|76.2|5.6|1 bowl=40;1 cup=30|cereals
us-cereal-wheat-germ-toasted-plain|Cereal, wheat germ, toasted, plain|BF|382|29.1|49.6|10.7|1 bowl=40;1 cup=30|cereals
us-cereal-wheat-puffed|Cereal, wheat, puffed|BF|364|14.7|79.6|1.2|1 bowl=40;1 cup=30|cereals
us-cereal-wheatena-cooked-with-water|Cereal, Wheatena, cooked with water|BF|56|2|11.8|0.5|1 bowl=40;1 cup=30|cereals
us-cereal-wheatena-dry|Cereal, Wheatena, dry|BF|357|13.1|75.6|2.9|1 bowl=40;1 cup=30|cereals
us-cereal-whole-wheat-hot-natural-cereal-cooked-wit|Cereal, whole wheat hot natural cereal, cooked with water|BF|62|2|13.7|0.4|1 bowl=40;1 cup=30|cereals
us-cereal-whole-wheat-hot-natural-cereal-dry|Cereal, whole wheat hot natural cereal, dry|BF|342|11.2|75.2|2|1 bowl=40;1 cup=30|cereals
us-millet-puffed|Millet, puffed|BF|354|13|80|3.4|1 bowl=40;1 cup=30|
us-beer-all|Beer, all|AL|43|0.5|3.6|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-budweiser|Beer, Budweiser|AL|41|0.4|3|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-light|Beer, light|AL|29|0.2|1.6|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-light-bud-light|Beer, light, Bud Light|AL|29|0.3|1.3|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-light-budweiser-select|Beer, light, Budweiser Select|AL|28|0.2|0.9|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-light-higher-alcohol|Beer, light, higher alcohol|AL|46|0.3|0.8|0|1 can=340;1 glass=250|alcoholic beverage|L
us-beer-light-low-carb|Beer, light, low carb|AL|27|0.2|0.7|0|1 can=340;1 glass=250|alcoholic beverage|L
us-creme-de-menthe-72-proof|Creme de menthe, 72 proof|AL|371|0|41.6|0.3|1 tot=25;1 double=50|alcoholic beverage|L
us-daiquiri-canned|Daiquiri, canned|AL|125|0|15.7|0|1 tot=25;1 double=50|alcoholic beverage|L
us-daiquiri-prepared-from-recipe|Daiquiri, prepared-from-recipe|AL|186|0.1|6.9|0.1|1 tot=25;1 double=50|alcoholic beverage|L
us-distilled-all-gin-rum-vodka|Distilled, all gin, rum, vodka|AL|263|0|0|0|1 tot=25;1 double=50|alcoholic beverage|L
us-distilled-rum-80-proof|Distilled, rum, 80 proof|AL|231|0|0|0|1 tot=25;1 double=50|alcoholic beverage|L
us-distilled-vodka-80-proof|Distilled, vodka, 80 proof|AL|231|0|0|0|1 tot=25;1 double=50|alcoholic beverage|L
us-distilled-whiskey-86-proof|Distilled, whiskey, 86 proof|AL|250|0|0.1|0|1 tot=25;1 double=50|alcoholic beverage|L
us-liqueur-coffee-53-proof|Liqueur, coffee, 53 proof|AL|336|0.1|46.8|0.3|1 tot=25;1 double=50|alcoholic beverage|L
us-liqueur-coffee-63-proof|Liqueur, coffee, 63 proof|AL|308|0.1|32.2|0.3|1 tot=25;1 double=50|alcoholic beverage|L
us-liqueur-coffee-with-cream-34-proof|Liqueur, coffee with cream, 34 proof|AL|327|2.8|20.9|15.7|1 tot=25;1 double=50|alcoholic beverage|L
us-malt-beer-hard-lemonade|Malt beer, hard lemonade|AL|68|0|10.1|0|1 can=340;1 glass=250|alcoholic beverage|L
us-pina-colada-canned|Pina colada, canned|AL|237|0.6|27.6|7.6|1 tot=25;1 double=50|alcoholic beverage|L
us-pina-colada-prepared-from-recipe|Pina colada, prepared-from-recipe|AL|174|0.4|22.7|1.9|1 tot=25;1 double=50|alcoholic beverage|L
us-rice-sake|Rice (sake)|AL|134|0.5|5|0|1 tot=25;1 double=50|alcoholic beverage|L
us-beer-higher-alcohol|Beer, higher alcohol|AL|58|0.9|0.3|0|1 can=340;1 glass=250|alcoholic beverages|L
us-wine-rose|Wine, rose|AL|83|0.4|3.8|0|1 glass=150;1 bottle=750|alcoholic beverages|L
us-tequila-sunrise-canned|Tequila sunrise, canned|AL|110|0.3|11.3|0.1|1 tot=25;1 double=50|alcoholic beverage|L
us-whiskey-sour|Whiskey sour|AL|149|0|13.2|0|1 tot=25;1 double=50|alcoholic beverage|L
us-whiskey-sour-canned|Whiskey sour, canned|AL|119|0|13.4|0|1 tot=25;1 double=50|alcoholic beverage|L
us-whiskey-sour-prepared-from-item-14028|Whiskey sour, prepared from item 14028|AL|153|0.1|12.8|0.1|1 tot=25;1 double=50|alcoholic beverage|L
us-wine-cooking|Wine, cooking|AL|50|0.5|6.3|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-dessert-dry|Wine, dessert, dry|AL|152|0.2|11.7|0|1 glass=150;1 bottle=750|alcoholic beverage
us-wine-dessert-sweet|Wine, dessert, sweet|AL|160|0.2|13.7|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-light|Wine, light|AL|49|0.1|1.2|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-all|Wine, table, all|AL|83|0.1|2.7|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red|Wine, table, red|AL|85|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-barbera|Wine, table, red, Barbera|AL|85|0.1|2.8|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-burgundy|Wine, table, red, Burgundy|AL|86|0.1|3.7|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-cabernet-franc|Wine, table, red, Cabernet Franc|AL|83|0.1|2.5|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-cabernet-sauvignon|Wine, table, red, Cabernet Sauvignon|AL|83|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-carignane|Wine, table, red, Carignane|AL|74|0.1|2.4|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-claret|Wine, table, red, Claret|AL|83|0.1|3|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-gamay|Wine, table, red, Gamay|AL|78|0.1|2.4|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-lemberger|Wine, table, red, Lemberger|AL|80|0.1|2.5|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-merlot|Wine, table, red, Merlot|AL|83|0.1|2.5|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-mouvedre|Wine, table, red, Mouvedre|AL|88|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-petite-sirah|Wine, table, red, Petite Sirah|AL|85|0.1|2.7|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-pinot-noir|Wine, table, red, Pinot Noir|AL|82|0.1|2.3|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-sangiovese|Wine, table, red, Sangiovese|AL|86|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-syrah|Wine, table, red, Syrah|AL|83|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-red-zinfandel|Wine, table, red, Zinfandel|AL|88|0.1|2.9|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white|Wine, table, white|AL|82|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-chardonnay|Wine, table, white, Chardonnay|AL|84|0.1|2.2|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-chenin-blanc|Wine, table, white, Chenin Blanc|AL|80|0.1|3.3|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-fume-blanc|Wine, table, white, Fume Blanc|AL|82|0.1|2.3|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-gewurztraminer|Wine, table, white, Gewurztraminer|AL|81|0.1|2.6|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-late-harvest|Wine, table, white, late harvest|AL|112|0.1|13.4|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-muller-thurgau|Wine, table, white, Muller Thurgau|AL|76|0.1|3.5|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-muscat|Wine, table, white, Muscat|AL|82|0.1|5.2|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-pinot-blanc|Wine, table, white, Pinot Blanc|AL|81|0.1|1.9|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-pinot-gris-grigio|Wine, table, white, Pinot Gris (Grigio)|AL|83|0.1|2.1|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-riesling|Wine, table, white, Riesling|AL|80|0.1|3.7|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-sauvignon-blanc|Wine, table, white, Sauvignon Blanc|AL|81|0.1|2.1|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-wine-table-white-semillon|Wine, table, white, Semillon|AL|82|0.1|3.1|0|1 glass=150;1 bottle=750|alcoholic beverage|L
us-abbott-eas-soy-protein-powder|Abbott, Eas soy protein powder|SU|405|47.6|43.9|3.6|1 portion=100|beverages
us-abbott-eas-whey-protein-powder|Abbott, Eas whey protein powder|SU|385|66.7|18|5.1|1 portion=100|beverages
us-abbott-ensure-nutritional-shake-ready-to-drink|Abbott, Ensure, Nutritional Shake, Ready-to-Drink|DR|105|3.8|16.9|2.5|1 glass=250;1 cup=250|beverages|L
us-abbott-ensure-plus-ready-to-drink|Abbott, Ensure Plus, ready-to-drink|DR|141|5.2|19.9|4.5|1 glass=250;1 cup=250|beverages|L
us-acai-berry-drink|Acai berry drink|DR|62|0.8|12.8|0.8|1 glass=250;1 cup=250|beverages|L
us-almond-milk-chocolate-ready-to-drink|Almond milk, chocolate, ready-to-drink|DR|50|0.6|9.4|1.3|1 glass=250;1 cup=250|beverages|L
us-almond-milk-sweetened-vanilla-flavor-ready-to-dr|Almond milk, sweetened, vanilla flavor, ready-to-drink|DR|38|0.4|6.6|1|1 glass=250;1 cup=250|beverages|L
us-almond-milk-unsweetened-shelf-stable|Almond milk, unsweetened, shelf stable|DR|15|0.4|1.3|1|1 glass=250;1 cup=250|beverages|L
us-amber-hard-cider|Amber, hard cider|DR|56|0|5.9|0|1 glass=250;1 cup=250|beverages|L
us-arizona-tea-ready-to-drink-lemon|Arizona, tea, ready-to-drink, lemon|DR|39|0|9.8|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-cola|Carbonated, cola|DR|42|0|10.4|0.3|1 glass=250;1 cup=250|beverages|L
us-carbonated-cola-fast-food-cola|Carbonated, cola, fast-food cola|DR|37|0.1|9.6|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-cola-without-caffeine|Carbonated, cola, without caffeine|DR|41|0|10.6|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-ginger-ale|Carbonated, ginger ale|DR|34|0|8.8|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-grape-soda|Carbonated, grape soda|DR|43|0|11.2|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-lemon-lime-soda-no-caffeine|Carbonated, lemon-lime soda, no caffeine|DR|41|0.1|10.4|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-limeade-high-caffeine|Carbonated, limeade, high caffeine|DR|17|0|4.1|0.1|1 glass=250;1 cup=250|beverages|L
us-carbonated-low-calorie-cola-or-pepper-type-with-|Carbonated, low calorie, cola or pepper-type, with aspartame|DR|1|0.1|0.1|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-orange|Carbonated, orange|DR|48|0|12.3|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-pepper-type-contains-caffeine|Carbonated, pepper-type, contains caffeine|DR|41|0|10.4|0.1|1 glass=250;1 cup=250|beverages|L
us-carbonated-reduced-sugar-cola|Carbonated, reduced sugar, cola|DR|20|0|5.2|0|1 glass=250;1 cup=250|beverages caffeine contains sweeteners|L
us-carbonated-root-beer|Carbonated, root beer|DR|41|0|10.6|0|1 can=340;1 glass=250|beverages|L
us-carbonated-sprite-lemon-lime-without-caffeine|Carbonated, Sprite, lemon-lime, without caffeine|DR|40|0.1|10.1|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-tonic-water|Carbonated, tonic water|DR|34|0|8.8|0|1 glass=250;1 cup=250|beverages|L
us-carob-flavor-beverage-mix-powder|Carob-flavor beverage mix, powder|DR|372|1.8|93.3|0.2|1 portion=100|beverages
us-chocolate-drink-milk-and-soy-based-ready-to-drin|Chocolate drink, milk and soy based, ready to drink|DR|101|4.2|17.3|1.7|1 glass=250;1 cup=250|beverages|L
us-chocolate-flavored-drink-whey-and-milk-based|Chocolate-flavored drink, whey and milk based|DR|49|0.6|10.7|0.4|1 glass=250;1 cup=250|beverages|L
us-chocolate-syrup|Chocolate syrup|DR|279|2.1|65.1|1.1|1 portion=100|beverages
us-chocolate-syrup-prepared-with-whole-milk|Chocolate syrup, prepared with whole milk|DR|90|3.1|12.8|3|1 portion=100|beverages
us-clam-and-tomato-juice-canned|Clam and tomato juice, canned|DR|48|0.6|11|0.2|1 glass=250;1 cup=250|beverages|L
us-coca-cola-powerade-lemon-lime-flavored-ready-to-|Coca-cola, Powerade, lemon-lime flavored, ready-to-drink|DR|32|0|7.8|0.1|1 glass=250;1 cup=250|beverages|L
us-cocoa-mix-nestle-hot-cocoa-mix-rich-chocolate-wi|Cocoa mix, Nestle, Hot Cocoa Mix Rich Chocolate With|DR|400|2.8|75|15|1 portion=100|beverages marshmallows
us-cocoa-mix-no-sugar-added-powder|Cocoa mix, no sugar added, powder|DR|377|15.5|71.9|3|1 portion=100|beverages
us-cocoa-mix-powder|Cocoa mix, powder|DR|398|6.7|83.7|4|1 portion=100|beverages
us-coconut-water-ready-to-drink-unsweetened|Coconut water, ready-to-drink, unsweetened|DR|18|0.2|4.2|0|1 glass=250;1 cup=250|beverages|L
us-coffee-and-cocoa-instant-decaffeinated|Coffee and cocoa, instant, decaffeinated|DR|440|9|71.4|13.2|1 portion=100|beverages calorie low sweetener whitener
us-coffee-brewed-breakfast-blend|Coffee, brewed, breakfast blend|DR|2|0.3|0.2|0|1 glass=250;1 cup=250|beverages|L
us-coffee-brewed-espresso-restaurant-prepared|Coffee, brewed, espresso, restaurant-prepared|DR|9|0.1|1.7|0.2|1 glass=250;1 cup=250|beverages|L
us-coffee-brewed-prepared-with-tap-water|Coffee, brewed, prepared with tap water|DR|1|0.1|0|0|1 glass=250;1 cup=250|beverages|L
us-coffee-instant-chicory|Coffee, instant, chicory|DR|3|0.1|0.8|0|1 portion=100|beverages
us-coffee-instant-decaffeinated-powder|Coffee, instant, decaffeinated, powder|DR|351|11.6|76|0.2|1 portion=100|beverages
us-coffee-instant-half-the-caffeine|Coffee, instant, half the caffeine|DR|352|14.4|73.2|0.5|1 portion=100|beverages
us-coffee-instant-mocha-sweetened|Coffee, instant, mocha, sweetened|DR|460|5.3|74|15.9|1 portion=100|beverages
us-coffee-instant-powder|Coffee, instant, powder|DR|353|12.2|75.4|0.5|1 portion=100|beverages
us-coffee-instant-vanilla-sweetened|Coffee, instant, vanilla, sweetened|DR|465|0|86.3|13.3|1 portion=100|beverages
us-coffee-instant-with-chicory|Coffee, instant, with chicory|DR|355|9.3|78.9|0.2|1 portion=100|beverages
us-coffee-instant-with-whitener-reduced-calorie|Coffee, instant, with whitener, reduced calorie|DR|509|2|59.9|29.1|1 portion=100|beverages
us-coffee-ready-to-drink-iced-mocha|Coffee, ready to drink, iced, mocha|DR|60|1.5|11.4|1|1 glass=250;1 cup=250|beverages|L
us-coffee-ready-to-drink-milk-based-sweetened|Coffee, ready to drink, milk based, sweetened|DR|71|2|12.6|1.4|1 glass=250;1 cup=250|beverages|L
us-coffee-ready-to-drink-vanilla-light|Coffee, ready to drink, vanilla, light|DR|36|2.1|4.3|1.1|1 glass=250;1 cup=250|beverages|L
us-coffee-substitute-cereal-grain-beverage-powder|Coffee substitute, cereal grain beverage, powder|DR|360|6|78.4|2.5|1 portion=100|beverages
us-cranberry-apple-juice-drink-bottled|Cranberry-apple juice drink, bottled|DR|63|0|15.9|0.1|1 glass=250;1 cup=250|beverages|L
us-cranberry-apple-juice-drink-low-calorie-with-vit|Cranberry-apple juice drink, low calorie, with vitamin C added|DR|19|0.1|4.7|0|1 glass=250;1 cup=250|beverages|L
us-cranberry-apricot-juice-drink-bottled|Cranberry-apricot juice drink, bottled|DR|64|0.2|16.2|0|1 glass=250;1 cup=250|beverages|L
us-cranberry-grape-juice-drink-bottled|Cranberry-grape juice drink, bottled|DR|56|0.2|14|0.1|1 glass=250;1 cup=250|beverages|L
us-cytosport-muscle-milk-ready-to-drink|Cytosport, Muscle Milk, ready-to-drink|DR|52|5.9|2.3|2.2|1 glass=250;1 cup=250|beverages|L
us-dairy-drink-mix-chocolate-reduced-calorie-with-a|Dairy drink mix, chocolate, reduced calorie, with aspartame|DR|29|2.2|4.5|0.2|1 portion=100|beverages
us-dairy-drink-mix-chocolate-reduced-calorie|Dairy drink mix, chocolate, reduced calorie|DR|329|25|51.4|2.6|1 portion=100|beverages low sweeteners
us-drink-mix-quaker-oats-gatorade-orange-flavor|Drink mix, Quaker Oats, Gatorade, orange flavor|DR|388|0|94.1|1.2|1 portion=100|beverages
us-energy-drink-amp|Energy drink, Amp|DR|46|0.3|12.1|0.1|1 glass=250;1 cup=250|beverages|L
us-energy-drink-amp-sugar-free|Energy drink, Amp, sugar free|DR|2|0|1|0|1 glass=250;1 cup=250|beverages|L
us-energy-drink-citrus|Energy drink, Citrus|DR|45|0|11.3|0|1 glass=250;1 cup=250|beverages|L
us-energy-drink-full-throttle|Energy drink, Full Throttle|DR|46|0.3|12.1|0.1|1 glass=250;1 cup=250|beverages|L
us-energy-drink-red-bull|Energy drink, Red Bull|DR|43|0.5|10.2|0|1 glass=250;1 cup=250|beverages|L
us-energy-drink-red-bull-sugar-free-with-added-caff|Energy drink, Red Bull, sugar free, with added caffeine|DR|5|0.3|0.7|0.1|1 glass=250;1 cup=250|beverages|L
us-energy-drink-rockstar|Energy drink, Rockstar|DR|58|0.3|12.7|0.2|1 glass=250;1 cup=250|beverages|L
us-energy-drink-rockstar-sugar-free|Energy drink, Rockstar, sugar free|DR|4|0.3|0.7|0.1|1 glass=250;1 cup=250|beverages|L
us-energy-drink-vault-citrus-flavor|Energy drink, Vault, citrus flavor|DR|49|0|13|0|1 glass=250;1 cup=250|beverages|L
us-energy-drink-vault-zero-sugar-free-citrus-flavor|Energy drink, Vault Zero, sugar-free, citrus flavor|DR|1|0.3|0.7|0.1|1 glass=250;1 cup=250|beverages|L
us-energy-drink-with-carbonated-water-and-high-fruc|Energy Drink with carbonated water and high fructose corn syrup|DR|62|0.4|15|0|1 portion=100|beverages
us-fruit-flavored-drink-containing-less-than-3-frui|Fruit flavored drink containing less than 3% fruit juice|DR|27|0|6.7|0|1 glass=250;1 cup=250|beverages c high vitamin|L
us-fruit-flavored-drink-dry-powdered-mix-low-calori|Fruit-flavored drink, dry powdered mix, low calorie|DR|218|0.5|87.4|0|1 portion=100|aspartame beverages
us-fruit-flavored-drink-reduced-sugar|Fruit flavored drink, reduced sugar|DR|29|0|6.7|0.4|1 glass=250;1 cup=250|beverages c greater high juice than vitamin|L
us-fruit-juice-drink-greater-than-3-fruit-juice|Fruit juice drink, greater than 3% fruit juice|DR|54|0.1|13.2|0|1 glass=250;1 cup=250|added beverages c high thiamin vitamin|L
us-fruit-juice-drink-greater-than-3-juice-high-vita|Fruit juice drink, greater than 3% juice, high vitamin C|DR|46|0.1|11.4|0.1|1 glass=250;1 cup=250|beverages|L
us-fruit-juice-drink-reduced-sugar-with-vitamin-e-a|Fruit juice drink, reduced sugar, with vitamin E added|DR|39|0|10|0.1|1 glass=250;1 cup=250|beverages|L
us-fruit-punch-drink-without-added-nutrients-canned|Fruit punch drink, without added nutrients, canned|DR|48|0|12|0|1 glass=250;1 cup=250|beverages|L
us-grape-drink-canned|Grape drink, canned|DR|61|0|15.7|0|1 glass=250;1 cup=250|beverages|L
us-grape-juice-drink-canned|Grape juice drink, canned|DR|57|0|14.6|0|1 glass=250;1 cup=250|beverages|L
us-horchata-as-served-in-restaurant|Horchata, as served in restaurant|DR|54|0.5|11.5|0.7|1 glass=250;1 cup=250|beverages|L
us-kiwi-strawberry-juice-drink|Kiwi Strawberry Juice Drink|DR|47|0|12.3|0|1 glass=250;1 cup=250|beverages|L
us-kraft-coffee-instant-french-vanilla-cafe|Kraft, coffee, instant, French Vanilla Cafe|DR|481|2.5|74.6|19.2|1 portion=100|beverages
us-lemonade-flavor-drink-powder|Lemonade-flavor drink, powder|DR|380|0|97.9|1|1 portion=100|beverages
us-lemonade-powder|Lemonade, powder|DR|376|0|97.6|1.1|1 portion=100|beverages
us-lipton-brisk-tea-black-ready-to-drink|Lipton Brisk, tea, black, ready-to-drink|DR|35|0|8.8|0|1 glass=250;1 cup=250|beverages|L
us-malted-drink-mix-chocolate-powder|Malted drink mix, chocolate, powder|DR|411|5.1|86.9|4.8|1 portion=100|beverages
us-malt-liquor-beverage|Malt liquor beverage|DR|40|0.4|0|0|1 glass=250;1 cup=250|beverages|L
us-meal-supplement-drink-canned-peanut-flavor|Meal supplement drink, canned, peanut flavor|DR|101|3.5|14.7|3.1|1 glass=250;1 cup=250|beverages|L
us-milk-beverage-reduced-fat-flavored-and-sweetened|Milk beverage, reduced fat, flavored and sweetened|DR|77|3.1|12.1|1.8|1 glass=250;1 cup=250|beverages drink|L
us-minute-maid-lemonada-limeade|Minute Maid, Lemonada, Limeade|DR|50|0|13.8|0|1 glass=250;1 cup=250|beverages|L
us-monster-energy-drink-low-carb|Monster energy drink, low carb|DR|5|0|1.4|0|1 glass=250;1 cup=250|beverages|L
us-nestea-tea-black-ready-to-drink|Nestea, tea, black, ready-to-drink|DR|36|0|9.1|0|1 glass=250;1 cup=250|beverages|L
us-nestle-boost-plus-nutritional-drink-ready-to-dri|Nestle, Boost plus, nutritional drink, ready-to-drink|DR|138|5.4|17.3|5.4|1 glass=250;1 cup=250|beverages|L
us-nutritional-shake-mix-high-protein-powder|Nutritional shake mix, high protein, powder|DR|392|53.6|20.4|10.7|1 portion=100|beverages
us-ocean-spray-cranberry-apple-juice-drink-bottled|Ocean Spray, Cranberry-Apple Juice Drink, bottled|DR|56|0.3|13.7|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-cherry|Ocean Spray, Cran Cherry|DR|46|0.2|12.8|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-energy-cranberry-energy-juice-d|Ocean Spray, Cran-Energy, Cranberry Energy Juice Drink|DR|15|0|3.8|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-grape|Ocean Spray, Cran Grape|DR|54|0.2|13.2|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-lemonade|Ocean Spray, Cran Lemonade|DR|45|0.1|11.1|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-pomegranate|Ocean Spray, Cran Pomegranate|DR|47|0.1|12.6|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-cran-raspberry-juice-drink|Ocean Spray, Cran Raspberry Juice Drink|DR|49|0.3|12|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-diet-cranberry-juice|Ocean Spray, Diet Cranberry Juice|DR|4|0.1|0.8|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-diet-cran-cherry|Ocean Spray, Diet Cran Cherry|DR|4|0.2|0.7|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-light-cranberry|Ocean Spray, Light Cranberry|DR|19|0.2|4.7|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-light-cranberry-and-raspberry-flavor|Ocean Spray, Light Cranberry and Raspberry Flavored Juice|DR|26|0.7|5.8|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-light-cranberry-concord-grape|Ocean Spray, Light Cranberry, Concord Grape|DR|23|0.4|5.8|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-ruby-red-cranberry|Ocean Spray, Ruby Red cranberry|DR|45|0.1|11.6|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-white-cranberry-peach|Ocean Spray, White Cranberry Peach|DR|45|0.1|11.9|0|1 glass=250;1 cup=250|beverages|L
us-ocean-spray-white-cranberry-strawberry-flavored-|Ocean Spray, White Cranberry Strawberry Flavored Juice Drink|DR|49|0.2|12|0|1 glass=250;1 cup=250|beverages|L
us-orange-and-apricot-juice-drink-canned|Orange and apricot juice drink, canned|DR|51|0.3|12.7|0.1|1 glass=250;1 cup=250|beverages|L
us-orange-flavor-drink-breakfast-type-low-calorie-p|Orange-flavor drink, breakfast type, low calorie, powder|DR|217|3.6|85.9|0|1 portion=100|beverages
us-orange-flavor-drink-breakfast-type-powder|Orange-flavor drink, breakfast type, powder|DR|386|0|98.9|0|1 portion=100|beverages
us-orange-juice-drink|Orange juice drink|DR|54|0.2|13.4|0|1 glass=250;1 cup=250|beverages|L
us-orange-juice-light-no-pulp|Orange juice, light, No pulp|DR|21|0.2|5.4|0|1 glass=250;1 cup=250|beverages|L
us-ovaltine-chocolate-malt-powder|Ovaltine, chocolate malt powder|DR|372|0|93|0|1 portion=100|beverages
us-ovaltine-classic-malt-powder|Ovaltine, Classic Malt powder|DR|372|0|93.3|0|1 portion=100|beverages
us-pepsico-quaker-gatorade-g2-low-calorie|Pepsico Quaker, Gatorade G2, low calorie|DR|8|0.1|1.9|0|1 glass=250;1 cup=250|beverages|L
us-pepsico-quaker-gatorade-g-performance-o-2-ready-|Pepsico Quaker, Gatorade, G performance O 2, ready-to-drink|DR|26|0|6.4|0|1 glass=250;1 cup=250|beverages|L
us-pineapple-and-grapefruit-juice-drink-canned|Pineapple and grapefruit juice drink, canned|DR|47|0.2|11.6|0.1|1 glass=250;1 cup=250|beverages|L
us-pineapple-and-orange-juice-drink-canned|Pineapple and orange juice drink, canned|DR|50|1.3|11.8|0|1 glass=250;1 cup=250|beverages|L
us-propel-zero-fruit-flavored-non-carbonated|Propel Zero, fruit-flavored, non-carbonated|DR|5|0|1.1|0|1 glass=250;1 cup=250|beverages|L
us-protein-powder-soy-based|Protein powder soy based|SU|388|55.6|28.9|5.6|1 portion=100|beverages
us-protein-powder-whey-based|Protein powder whey based|SU|352|78.1|6.3|1.6|1 portion=100|beverages
us-rice-milk-unsweetened|Rice milk, unsweetened|DR|47|0.3|9.2|1|1 glass=250;1 cup=250|beverages|L
us-rich-chocolate-powder|Rich chocolate, powder|DR|372|0|93|0|1 portion=100|beverages
us-shake-fast-food-strawberry|Shake, fast food, strawberry|DR|113|3.4|18.9|2.8|1 glass=250;1 cup=250|beverages|L
us-slimfast-meal-replacement-high-protein-shake-rea|Slimfast, Meal replacement, High Protein Shake, Ready-To-Drink|DR|61|6.6|0.9|3.4|1 glass=250;1 cup=250|beverages|L
us-snapple-tea-black-and-green-ready-to-drink|Snapple, tea, black and green, ready to drink|DR|2|0.1|0.1|0|1 glass=250;1 cup=250|beverages|L
us-tea-black-brewed-prepared-with-distilled-water|Tea, black, brewed, prepared with distilled water|DR|1|0|0.3|0|1 glass=250;1 cup=250|beverages|L
us-tea-black-brewed-prepared-with-tap-water|Tea, black, brewed, prepared with tap water|DR|1|0|0.3|0|1 glass=250;1 cup=250|beverages|L
us-tea-black-ready-to-drink-decaffeinated|Tea, black, ready to drink, decaffeinated|DR|38|0|8.8|0|1 glass=250;1 cup=250|beverages|L
us-tea-black-ready-to-drink-lemon|Tea, black, ready-to-drink, lemon|DR|1|0|0.2|0|1 glass=250;1 cup=250|beverages|L
us-tea-black-ready-to-drink-peach|Tea, black, ready-to-drink, peach|DR|1|0|0.3|0|1 glass=250;1 cup=250|beverages|L
us-tea-green-brewed|Tea, green, brewed|DR|1|0.2|0|0|1 glass=250;1 cup=250|beverages|L
us-tea-green-instant-decaffeinated|Tea, green, instant, decaffeinated|DR|378|0|94.5|0|1 portion=100|beverages
us-tea-green-ready-to-drink-citrus|Tea, green, ready-to-drink, citrus|DR|1|0|0.3|0|1 glass=250;1 cup=250|beverages|L
us-tea-green-ready-to-drink-diet|Tea, green, ready-to-drink, diet|DR|4|0|0.9|0|1 glass=250;1 cup=250|beverages|L
us-tea-green-ready-to-drink-ginseng-and-honey|Tea, green, ready to drink, ginseng and honey|DR|30|0|7.2|0.2|1 glass=250;1 cup=250|beverages|L
us-tea-green-ready-to-drink-sweetened|Tea, green, ready-to-drink, sweetened|DR|27|0|6.2|0.2|1 glass=250;1 cup=250|beverages|L
us-tea-herb-brewed-chamomile|Tea, herb, brewed, chamomile|DR|1|0|0.2|0|1 glass=250;1 cup=250|beverages|L
us-tea-herb-other-than-chamomile-brewed|Tea, herb, other than chamomile, brewed|DR|1|0|0.2|0|1 glass=250;1 cup=250|beverages|L
us-tea-instant-decaffeinated-lemon|Tea, instant, decaffeinated, lemon|DR|338|3.3|85.4|0.6|1 portion=100|beverages
us-tea-instant-decaffeinated-unsweetened|Tea, instant, decaffeinated, unsweetened|DR|315|20.2|58.7|0|1 portion=100|beverages
us-tea-instant-lemon-diet|Tea, instant, lemon, diet|DR|2|0|0.4|0|1 portion=100|beverages
us-tea-instant-lemon-sweetened|Tea, instant, lemon, sweetened|DR|35|0|8.6|0.1|1 portion=100|beverages
us-tea-instant-lemon-unsweetened|Tea, instant, lemon, unsweetened|DR|345|7.4|78.5|0.2|1 portion=100|beverages
us-tea-instant-sweetened-with-sodium-saccharin-lemo|Tea, instant, sweetened with sodium saccharin, lemon-flavored|DR|338|3.3|85.4|0.6|1 portion=100|beverages
us-tea-instant-unsweetened-powder|Tea, instant, unsweetened, powder|DR|315|20.2|58.7|0|1 portion=100|beverages
us-tea-oolong-brewed|Tea, Oolong, brewed|DR|1|0|0.2|0|1 glass=250;1 cup=250|beverages|L
us-tea-ready-to-drink-lemon-diet|Tea, ready-to-drink, lemon, diet|DR|2|0|0.4|0|1 glass=250;1 cup=250|beverages|L
us-the-coca-cola-company-hi-c-flashin-fruit-punch|The Coca-cola company, Hi-C Flashin' Fruit Punch|DR|45|0|12.5|0|1 glass=250;1 cup=250|beverages|L
us-the-coca-cola-company-minute-maid-lemonade|The Coca-cola company, Minute Maid, Lemonade|DR|46|0|12.1|0|1 glass=250;1 cup=250|beverages|L
us-the-coca-cola-company-nos-energy-drink-original-|The Coca-cola Company, Nos energy drink, Original, grape|DR|44|0|11.3|0|1 glass=250;1 cup=250|beverages|L
us-the-coca-cola-company-nos-zero-energy-drink|The Coca-cola Company, Nos Zero, energy drink|DR|4|0|1|0|1 glass=250;1 cup=250|beverages free guarana sugar|L
us-tropical-punch-ready-to-drink|Tropical Punch, ready-to-drink|DR|10|0|2.5|0|1 glass=250;1 cup=250|beverages|L
us-unilever-slimfast-meal-replacement-ready-to-drin|Unilever, Slimfast, meal replacement, ready-to-drink|DR|57|3.3|7.7|1.9|1 glass=250;1 cup=250|beverages|L
us-unilever-slimfast-shake-mix-high-protein-whey-po|Unilever, Slimfast Shake Mix, high protein, whey powder|DR|433|27.9|50|13.5|1 portion=100|beverages
us-v8-splash-juice-drinks-berry-blend|V8 Splash Juice Drinks, Berry Blend|DR|29|0|7.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-diet-berry-blend|V8 Splash Juice Drinks, Diet Berry Blend|DR|4|0|1.2|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-diet-fruit-medley|V8 Splash Juice Drinks, Diet Fruit Medley|DR|4|0|1.3|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-diet-strawberry-kiwi|V8 Splash Juice Drinks, Diet Strawberry Kiwi|DR|4|0|1.3|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-diet-tropical-blend|V8 Splash Juice Drinks, Diet Tropical Blend|DR|4|0|1.3|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-fruit-medley|V8 Splash Juice Drinks, Fruit Medley|DR|33|0|7.8|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-guava-passion-fruit|V8 Splash Juice Drinks, Guava Passion Fruit|DR|33|0|7.8|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-mango-peach|V8 Splash Juice Drinks, Mango Peach|DR|33|0|8.2|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-orange-pineapple|V8 Splash Juice Drinks, Orange Pineapple|DR|29|0|7.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-orchard-blend|V8 Splash Juice Drinks, Orchard Blend|DR|33|0|7.8|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-strawberry-banana|V8 Splash Juice Drinks, Strawberry Banana|DR|29|0|7.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-strawberry-kiwi|V8 Splash Juice Drinks, Strawberry Kiwi|DR|29|0|7.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-juice-drinks-tropical-blend|V8 Splash Juice Drinks, Tropical Blend|DR|29|0|7.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-smoothies-peach-mango|V8 Splash Smoothies, Peach Mango|DR|37|1.2|7.8|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-smoothies-strawberry-banana|V8 Splash Smoothies, Strawberry Banana|DR|37|1.2|8.2|0|1 glass=250;1 cup=250|beverages|L
us-v8-splash-smoothies-tropical-colada|V8 Splash Smoothies, Tropical Colada|DR|41|1.2|8.5|0|1 glass=250;1 cup=250|beverages|L
us-v8-v-fusion-juices-acai-berry|V8 V- Fusion Juices, Acai Berry|DR|45|0|11|0|1 glass=250;1 cup=250|beverages|L
us-v8-v-fusion-juices-peach-mango|V8 V-fusion Juices, Peach Mango|DR|49|0.4|11.4|0|1 glass=250;1 cup=250|beverages|L
us-v8-v-fusion-juices-strawberry-banana|V8 V-fusion Juices, Strawberry Banana|DR|49|0.4|11.8|0|1 glass=250;1 cup=250|beverages|L
us-v8-v-fusion-juices-tropical|V8 V-fusion Juices, Tropical|DR|49|0.4|11.4|0|1 glass=250;1 cup=250|beverages|L
us-vegetable-and-fruit-juice-drink-reduced-calorie|Vegetable and fruit juice drink, reduced calorie|DR|4|0|1.1|0|1 glass=250;1 cup=250|added beverages c low sweetener vitamin|L
us-water-bottled-yumberry-pomegranate-with-anti-oxi|Water, bottled, yumberry, pomegranate with anti-oxidants|DR|5|0|1.3|0|1 glass=250;1 cup=250|beverages|L
us-wendy-s-tea-ready-to-drink-unsweetened|Wendy's, tea, ready-to-drink, unsweetened|DR|1|0.2|0|0|1 glass=250;1 cup=250|beverages|L
us-whey-protein-powder-isolate|Whey protein powder isolate|SU|359|58.1|29.1|1.2|1 portion=100|beverages
us-whiskey-sour-mix-bottled|Whiskey sour mix, bottled|DR|87|0.1|21.4|0.1|1 portion=100|beverages
us-whiskey-sour-mix-powder|Whiskey sour mix, powder|DR|383|0.6|97.3|0.1|1 portion=100|beverages
us-wine-non-alcoholic|Wine, non-alcoholic|DR|6|0.5|1.1|0|1 glass=150;1 bottle=750|beverages|L
us-yellow-green-colored-citrus-soft-drink-with-caff|Yellow green colored citrus soft drink with caffeine|DR|49|0|12.8|0|1 glass=250;1 cup=250|beverages|L
us-carbonated-beverage-chocolate-flavored-soda|Carbonated beverage, chocolate-flavored soda|DR|42|0|10.7|0|1 glass=250;1 cup=250||L
us-carbonated-beverage-cream-soda|Carbonated beverage, cream soda|DR|51|0|13.3|0|1 glass=250;1 cup=250||L
us-cocoa-mix-nestle-rich-chocolate-hot-cocoa-mix|Cocoa mix, Nestle, Rich Chocolate Hot Cocoa Mix|DR|400|3|75|15|1 portion=100|
us-malt-beverage|Malt beverage|DR|37|0.2|8.1|0.1|1 glass=250;1 cup=250||L
us-shake-fast-food-vanilla|Shake, fast food, vanilla|DR|148|3.4|19.6|6.5|1 glass=250;1 cup=250||L
us-strawberry-flavor-beverage-mix-powder|Strawberry-flavor beverage mix, powder|DR|389|0.1|99.1|0.2|1 portion=100|
us-water-non-carbonated-bottles-natural-fruit-flavo|Water, non-carbonated, bottles, natural fruit flavors|DR|1|0|0.1|0|1 glass=250;1 cup=250|calorie low sweetened sweetener|L
us-water-with-corn-syrup-and-or-sugar-and-low-calor|Water, with corn syrup and/or sugar and low calorie sweetener|DR|18|0|4.5|0|1 portion=100|flavored fruit
us-crab-alaska-king-cooked-moist|Crab, alaska king, cooked (moist)|FS|97|19.4|0|1.5|1 portion=150;1 small portion=100|crustaceans
us-crab-alaska-king-imitation-made-from-surimi|Crab, alaska king, imitation, made from surimi|FS|95|7.6|15|0.5|1 portion=150;1 small portion=100|crustaceans
us-crab-alaska-king-raw|Crab, alaska king, raw|FS|84|18.3|0|0.6|1 portion=150;1 small portion=100|crustaceans
us-crab-blue-canned|Crab, blue, canned|FS|83|17.9|0|0.7|1 portion=150;1 small portion=100|crustaceans
us-crab-blue-cooked-moist|Crab, blue, cooked (moist)|FS|83|17.9|0|0.7|1 portion=150;1 small portion=100|crustaceans
us-crab-blue-crab-cakes-home-recipe|Crab, blue, crab cakes, home recipe|FS|155|20.2|0.5|7.5|1 portion=150;1 small portion=100|crustaceans
us-crab-blue-raw|Crab, blue, raw|FS|87|18.1|0|1.1|1 portion=150;1 small portion=100|crustaceans
us-crab-dungeness-cooked-moist|Crab, dungeness, cooked (moist)|FS|110|22.3|1|1.2|1 portion=150;1 small portion=100|crustaceans
us-crab-dungeness-raw|Crab, dungeness, raw|FS|86|17.4|0.7|1|1 portion=150;1 small portion=100|crustaceans
us-crab-queen-cooked-moist|Crab, queen, cooked (moist)|FS|115|23.7|0|1.5|1 portion=150;1 small portion=100|crustaceans
us-crab-queen-raw|Crab, queen, raw|FS|90|18.5|0|1.2|1 portion=150;1 small portion=100|crustaceans
us-crayfish-farmed-cooked|Crayfish, farmed, cooked|FS|87|17.5|0|1.3|1 portion=150;1 small portion=100|crustaceans
us-crayfish-farmed-raw|Crayfish, farmed, raw|FS|72|14.9|0|1|1 portion=150;1 small portion=100|crustaceans
us-crayfish-wild-cooked|Crayfish, wild, cooked|FS|82|16.8|0|1.2|1 portion=150;1 small portion=100|crustaceans
us-crayfish-wild-raw|Crayfish, wild, raw|FS|77|16|0|1|1 portion=150;1 small portion=100|crustaceans
us-lobster-northern-cooked-moist|Lobster, northern, cooked (moist)|FS|89|19|0|0.9|1 portion=150;1 small portion=100|crustaceans
us-lobster-northern-raw|Lobster, northern, raw|FS|77|16.5|0|0.8|1 portion=150;1 small portion=100|crustaceans
us-shrimp-cooked|Shrimp, cooked|FS|99|24|0.2|0.3|1 portion=150;1 small portion=100|crustaceans
us-shrimp-canned|Shrimp, canned|FS|100|20.4|0|1.4|1 portion=150;1 small portion=100|crustaceans
us-shrimp-cooked-breaded-and-fried|Shrimp, cooked, breaded and fried|FS|242|21.4|11.5|12.3|1 portion=150;1 small portion=100|crustaceans
us-shrimp-cooked-moist-may-contain-additives-to-ret|Shrimp, cooked (moist) may contain additives to retain|FS|119|22.8|1.5|1.7|1 portion=150;1 small portion=100|crustaceans moisture
us-shrimp-imitation-made-from-surimi|Shrimp, imitation, made from surimi|FS|101|12.4|9.1|1.5|1 portion=150;1 small portion=100|crustaceans
us-shrimp-raw-may-contain-additives-to-retain-moist|Shrimp, raw (may contain additives to retain moisture)|FS|71|13.6|0.9|1|1 portion=150;1 small portion=100|crustaceans
us-shrimp-raw|Shrimp, raw|FS|85|20.1|0|0.5|1 portion=150;1 small portion=100|crustaceans
us-spiny-lobster-cooked-moist|Spiny lobster, cooked (moist)|FS|143|26.4|3.1|1.9|1 portion=150;1 small portion=100|crustaceans
us-spiny-lobster-raw|Spiny lobster, raw|FS|112|20.6|2.4|1.5|1 portion=150;1 small portion=100|crustaceans
us-anchovy-european-canned-in-oil-drained-solids|Anchovy, european, canned in oil, drained solids|FS|210|28.9|0|9.7|1 portion=150;1 small portion=100|fish
us-anchovy-european-raw|Anchovy, european, raw|FS|131|20.4|0|4.8|1 portion=150;1 small portion=100|fish
us-bass-freshwater-cooked|Bass, freshwater, cooked|FS|146|24.2|0|4.7|1 portion=150;1 small portion=100|fish
us-bass-fresh-water-raw|Bass, fresh water, raw|FS|114|18.9|0|3.7|1 portion=150;1 small portion=100|fish
us-bass-striped-cooked|Bass, striped, cooked|FS|124|22.7|0|3|1 portion=150;1 small portion=100|fish
us-bass-striped-raw|Bass, striped, raw|FS|97|17.7|0|2.3|1 portion=150;1 small portion=100|fish
us-bluefish-cooked|Bluefish, cooked|FS|159|25.7|0|5.4|1 portion=150;1 small portion=100|fish
us-bluefish-raw|Bluefish, raw|FS|124|20|0|4.2|1 portion=150;1 small portion=100|fish
us-burbot-cooked|Burbot, cooked|FS|115|24.8|0|1|1 portion=150;1 small portion=100|fish
us-burbot-raw|Burbot, raw|FS|90|19.3|0|0.8|1 portion=150;1 small portion=100|fish
us-butterfish-cooked|Butterfish, cooked|FS|187|22.2|0|10.3|1 portion=150;1 small portion=100|fish
us-butterfish-raw|Butterfish, raw|FS|146|17.3|0|8|1 portion=150;1 small portion=100|fish
us-carp-cooked|Carp, cooked|FS|162|22.9|0|7.2|1 portion=150;1 small portion=100|fish
us-carp-raw|Carp, raw|FS|127|17.8|0|5.6|1 portion=150;1 small portion=100|fish
us-catfish-channel-cooked-breaded-and-fried|Catfish, channel, cooked, breaded and fried|FS|229|18.1|8|13.3|1 portion=150;1 small portion=100|fish
us-catfish-channel-farmed-cooked|Catfish, channel, farmed, cooked|FS|144|18.4|0|7.2|1 portion=150;1 small portion=100|fish
us-catfish-channel-farmed-raw|Catfish, channel, farmed, raw|FS|119|15.2|0|5.9|1 portion=150;1 small portion=100|fish
us-catfish-channel-wild-cooked|Catfish, channel, wild, cooked|FS|105|18.5|0|2.9|1 portion=150;1 small portion=100|fish
us-catfish-channel-wild-raw|Catfish, channel, wild, raw|FS|95|16.4|0|2.8|1 portion=150;1 small portion=100|fish
us-caviar-black-and-red-granular|Caviar, black and red, granular|FS|264|24.6|4|17.9|1 portion=150;1 small portion=100|fish
us-cisco-raw|Cisco, raw|FS|98|19|0|1.9|1 portion=150;1 small portion=100|fish
us-cisco-smoked|Cisco, smoked|FS|177|16.4|0|11.9|1 portion=150;1 small portion=100|fish
us-cod-atlantic-canned-solids-and-liquid|Cod, Atlantic, canned, solids and liquid|FS|105|22.8|0|0.9|1 portion=150;1 small portion=100|fish
us-cod-atlantic-cooked|Cod, Atlantic, cooked|FS|105|22.8|0|0.9|1 portion=150;1 small portion=100|fish
us-cod-atlantic-dried-and-salted|Cod, Atlantic, dried and salted|FS|290|62.8|0|2.4|1 portion=150;1 small portion=100|fish
us-cod-atlantic-raw|Cod, Atlantic, raw|FS|82|17.8|0|0.7|1 portion=150;1 small portion=100|fish
us-cod-pacific-cooked|Cod, Pacific, cooked|FS|84|20.4|0|0.3|1 portion=150;1 small portion=100|fish
us-cod-pacific-cooked-may-contain-additives-to-reta|Cod, Pacific, cooked (may contain additives to retain moisture)|FS|85|18.7|0|0.5|1 portion=150;1 small portion=100|fish
us-cod-pacific-raw-may-have-been-previously-frozen|Cod, Pacific, raw (may have been previously frozen)|FS|69|15.3|0|0.4|1 portion=150;1 small portion=100|fish
us-croaker-atlantic-cooked-breaded-and-fried|Croaker, Atlantic, cooked, breaded and fried|FS|221|18.2|7.5|12.7|1 portion=150;1 small portion=100|fish
us-croaker-atlantic-raw|Croaker, Atlantic, raw|FS|104|17.8|0|3.2|1 portion=150;1 small portion=100|fish
us-cusk-cooked|Cusk, cooked|FS|112|24.4|0|0.9|1 portion=150;1 small portion=100|fish
us-cusk-raw|Cusk, raw|FS|87|19|0|0.7|1 portion=150;1 small portion=100|fish
us-drum-freshwater-cooked|Drum, freshwater, cooked|FS|153|22.5|0|6.3|1 portion=150;1 small portion=100|fish
us-drum-freshwater-raw|Drum, freshwater, raw|FS|119|17.5|0|4.9|1 portion=150;1 small portion=100|fish
us-eel-cooked|Eel, cooked|FS|236|23.7|0|15|1 portion=150;1 small portion=100|fish
us-eel-raw|Eel, raw|FS|184|18.4|0|11.7|1 portion=150;1 small portion=100|fish
us-fish-sticks-frozen-prepared|Fish sticks, frozen, prepared|FS|277|11|21.7|16.2|1 portion=150;1 small portion=100|
us-flatfish-flounder-and-sole-species-cooked|Flatfish (flounder and sole species), cooked|FS|86|15.2|0|2.4|1 portion=150;1 small portion=100|fish
us-flatfish-flounder-and-sole-species-raw|Flatfish (flounder and sole species), raw|FS|70|12.4|0|1.9|1 portion=150;1 small portion=100|fish
us-gefiltefish-sweet-recipe|Gefiltefish, sweet recipe|FS|84|9.1|7.4|1.7|1 portion=150;1 small portion=100|fish
us-grouper-cooked|Grouper, cooked|FS|118|24.8|0|1.3|1 portion=150;1 small portion=100|fish
us-grouper-raw|Grouper, raw|FS|92|19.4|0|1|1 portion=150;1 small portion=100|fish
us-haddock-cooked|Haddock, cooked|FS|90|20|0|0.6|1 portion=150;1 small portion=100|fish
us-haddock-raw|Haddock, raw|FS|74|16.3|0|0.5|1 portion=150;1 small portion=100|fish
us-haddock-smoked|Haddock, smoked|FS|116|25.2|0|1|1 portion=150;1 small portion=100|fish
us-halibut-atlantic-and-pacific-cooked|Halibut, Atlantic and Pacific, cooked|FS|111|22.5|0|1.6|1 portion=150;1 small portion=100|fish
us-halibut-atlantic-and-pacific-raw|Halibut, Atlantic and Pacific, raw|FS|91|18.6|0|1.3|1 portion=150;1 small portion=100|fish
us-halibut-greenland-cooked|Halibut, greenland, cooked|FS|239|18.4|0|17.7|1 portion=150;1 small portion=100|fish
us-halibut-greenland-raw|Halibut, Greenland, raw|FS|186|14.4|0|13.8|1 portion=150;1 small portion=100|fish
us-herring-atlantic-cooked|Herring, Atlantic, cooked|FS|203|23|0|11.6|1 portion=150;1 small portion=100|fish
us-herring-atlantic-kippered|Herring, Atlantic, kippered|FS|217|24.6|0|12.4|1 portion=150;1 small portion=100|fish
us-herring-atlantic-pickled|Herring, Atlantic, pickled|FS|262|14.2|9.6|18|1 portion=150;1 small portion=100|fish
us-herring-atlantic-raw|Herring, Atlantic, raw|FS|158|18|0|9|1 portion=150;1 small portion=100|fish
us-herring-pacific-cooked|Herring, Pacific, cooked|FS|250|21|0|17.8|1 portion=150;1 small portion=100|fish
us-herring-pacific-raw|Herring, Pacific, raw|FS|195|16.4|0|13.9|1 portion=150;1 small portion=100|fish
us-lingcod-cooked|Lingcod, cooked|FS|109|22.6|0|1.4|1 portion=150;1 small portion=100|fish
us-lingcod-raw|Lingcod, raw|FS|85|17.7|0|1.1|1 portion=150;1 small portion=100|fish
us-ling-cooked|Ling, cooked|FS|111|24.4|0|0.8|1 portion=150;1 small portion=100|fish
us-ling-raw|Ling, raw|FS|87|19|0|0.6|1 portion=150;1 small portion=100|fish
us-mackerel-atlantic-cooked|Mackerel, Atlantic, cooked|FS|262|23.9|0|17.8|1 portion=150;1 small portion=100|fish
us-mackerel-atlantic-raw|Mackerel, Atlantic, raw|FS|205|18.6|0|13.9|1 portion=150;1 small portion=100|fish
us-mackerel-jack-canned-drained-solids|Mackerel, jack, canned, drained solids|FS|156|23.2|0|6.3|1 portion=150;1 small portion=100|fish
us-mackerel-king-cooked|Mackerel, king, cooked|FS|134|26|0|2.6|1 portion=150;1 small portion=100|fish
us-mackerel-king-raw|Mackerel, king, raw|FS|105|20.3|0|2|1 portion=150;1 small portion=100|fish
us-mackerel-pacific-and-jack-cooked|Mackerel, Pacific and jack, cooked|FS|201|25.7|0|10.1|1 portion=150;1 small portion=100|fish
us-mackerel-pacific-and-jack-raw|Mackerel, Pacific and jack, raw|FS|158|20.1|0|7.9|1 portion=150;1 small portion=100|fish
us-mackerel-salted|Mackerel, salted|FS|305|18.5|0|25.1|1 portion=150;1 small portion=100|fish
us-mackerel-spanish-cooked|Mackerel, spanish, cooked|FS|158|23.6|0|6.3|1 portion=150;1 small portion=100|fish
us-mackerel-spanish-raw|Mackerel, spanish, raw|FS|139|19.3|0|6.3|1 portion=150;1 small portion=100|fish
us-mahimahi-cooked|Mahimahi, cooked|FS|109|23.7|0|0.9|1 portion=150;1 small portion=100|fish
us-mahimahi-raw|Mahimahi, raw|FS|85|18.5|0|0.7|1 portion=150;1 small portion=100|fish
us-milkfish-cooked|Milkfish, cooked|FS|190|26.3|0|8.6|1 portion=150;1 small portion=100|fish
us-milkfish-raw|Milkfish, raw|FS|148|20.5|0|6.7|1 glass=250;1 cup=250|fish|L
us-monkfish-cooked|Monkfish, cooked|FS|97|18.6|0|2|1 portion=150;1 small portion=100|fish
us-monkfish-raw|Monkfish, raw|FS|76|14.5|0|1.5|1 portion=150;1 small portion=100|fish
us-mullet-striped-cooked|Mullet, striped, cooked|FS|150|24.8|0|4.9|1 portion=150;1 small portion=100|fish
us-mullet-striped-raw|Mullet, striped, raw|FS|117|19.4|0|3.8|1 portion=150;1 small portion=100|fish
us-ocean-perch-atlantic-cooked|Ocean perch, Atlantic, cooked|FS|96|18.5|0|1.9|1 portion=150;1 small portion=100|fish
us-ocean-perch-atlantic-raw|Ocean perch, Atlantic, raw|FS|79|15.3|0|1.5|1 portion=150;1 small portion=100|fish
us-perch-cooked|Perch, cooked|FS|117|24.9|0|1.2|1 portion=150;1 small portion=100|fish
us-perch-raw|Perch, raw|FS|91|19.4|0|0.9|1 portion=150;1 small portion=100|fish
us-pike-northern-cooked|Pike, northern, cooked|FS|113|24.7|0|0.9|1 portion=150;1 small portion=100|fish
us-pike-northern-raw|Pike, northern, raw|FS|88|19.3|0|0.7|1 portion=150;1 small portion=100|fish
us-pike-walleye-cooked|Pike, walleye, cooked|FS|119|24.5|0|1.6|1 portion=150;1 small portion=100|fish
us-pike-walleye-raw|Pike, walleye, raw|FS|93|19.1|0|1.2|1 portion=150;1 small portion=100|fish
us-pollock-alaska-cooked|Pollock, Alaska, cooked|FS|87|19.4|0|1|1 portion=150;1 small portion=100|fish
us-pollock-alaska-cooked-may-contain-additives-to-r|Pollock, Alaska, cooked may contain additives to retain|FS|111|23.5|0|1.2|1 portion=150;1 small portion=100|fish moisture
us-pollock-alaska-raw|Pollock, Alaska, raw|FS|76|17.2|0|0.8|1 portion=150;1 small portion=100|fish
us-pollock-alaska-raw-may-contain-additives-to-reta|Pollock, Alaska, raw (may contain additives to retain moisture)|FS|56|12.2|0|0.4|1 portion=150;1 small portion=100|fish
us-pollock-atlantic-cooked|Pollock, Atlantic, cooked|FS|118|24.9|0|1.3|1 portion=150;1 small portion=100|fish
us-pollock-atlantic-raw|Pollock, Atlantic, raw|FS|92|19.4|0|1|1 portion=150;1 small portion=100|fish
us-pompano-florida-cooked|Pompano, florida, cooked|FS|211|23.7|0|12.1|1 portion=150;1 small portion=100|fish
us-pompano-florida-raw|Pompano, florida, raw|FS|164|18.5|0|9.5|1 portion=150;1 small portion=100|fish
us-pout-ocean-cooked|Pout, ocean, cooked|FS|102|21.3|0|1.2|1 portion=150;1 small portion=100|fish
us-pout-ocean-raw|Pout, ocean, raw|FS|79|16.6|0|0.9|1 portion=150;1 small portion=100|fish
us-rockfish-pacific-cooked|Rockfish, Pacific, cooked|FS|109|22.2|0|1.6|1 portion=150;1 small portion=100|fish
us-rockfish-pacific-raw|Rockfish, Pacific, raw|FS|90|18.4|0|1.3|1 portion=150;1 small portion=100|fish
us-roe-cooked|Roe, cooked|FS|204|28.6|1.9|8.2|1 portion=150;1 small portion=100|fish
us-roe-raw|Roe, raw|FS|143|22.3|1.5|6.4|1 portion=150;1 small portion=100|fish
us-roughy-orange-cooked|Roughy, orange, cooked|FS|105|22.6|0|0.9|1 portion=150;1 small portion=100|fish
us-roughy-orange-raw|Roughy, orange, raw|FS|76|16.4|0|0.7|1 portion=150;1 small portion=100|fish
us-sablefish-cooked|Sablefish, cooked|FS|250|17.2|0|19.6|1 portion=150;1 small portion=100|fish
us-sablefish-raw|Sablefish, raw|FS|195|13.4|0|15.3|1 portion=150;1 small portion=100|fish
us-sablefish-smoked|Sablefish, smoked|FS|257|17.7|0|20.1|1 portion=150;1 small portion=100|fish
us-salmon-atlantic-farmed-cooked|Salmon, Atlantic, farmed, cooked|FS|206|22.1|0|12.4|1 portion=150;1 small portion=100|fish
us-salmon-atlantic-farmed-raw|Salmon, Atlantic, farmed, raw|FS|208|20.4|0|13.4|1 portion=150;1 small portion=100|fish
us-salmon-atlantic-wild-cooked|Salmon, Atlantic, wild, cooked|FS|182|25.4|0|8.1|1 portion=150;1 small portion=100|fish
us-salmon-atlantic-wild-raw|Salmon, Atlantic, wild, raw|FS|142|19.8|0|6.3|1 portion=150;1 small portion=100|fish
us-salmon-chinook-cooked|Salmon, chinook, cooked|FS|231|25.7|0|13.4|1 portion=150;1 small portion=100|fish
us-salmon-chinook-raw|Salmon, chinook, raw|FS|179|19.9|0|10.4|1 portion=150;1 small portion=100|fish
us-salmon-chinook-smoked|Salmon, chinook, smoked|FS|117|18.3|0|4.3|1 portion=150;1 small portion=100|fish
us-salmon-chinook-smoked-lox|Salmon, chinook, smoked, (lox)|FS|117|18.3|0|4.3|1 portion=150;1 small portion=100|fish
us-salmon-chum-canned-drained-solids-with-bone|Salmon, chum, canned, drained solids with bone|FS|141|21.4|0|5.5|1 portion=150;1 small portion=100|fish
us-salmon-chum-canned|Salmon, chum, canned|FS|141|21.4|0|5.5|1 portion=150;1 small portion=100|fish
us-salmon-chum-cooked|Salmon, chum, cooked|FS|154|25.8|0|4.8|1 portion=150;1 small portion=100|fish
us-salmon-chum-raw|Salmon, chum, raw|FS|120|20.1|0|3.8|1 portion=150;1 small portion=100|fish
us-salmon-coho-farmed-cooked|Salmon, coho, farmed, cooked|FS|178|24.3|0|8.2|1 portion=150;1 small portion=100|fish
us-salmon-coho-farmed-raw|Salmon, coho, farmed, raw|FS|160|21.3|0|7.7|1 portion=150;1 small portion=100|fish
us-salmon-coho-wild-cooked|Salmon, coho, wild, cooked|FS|184|27.4|0|7.5|1 portion=150;1 small portion=100|fish
us-salmon-coho-wild-raw|Salmon, coho, wild, raw|FS|146|21.6|0|5.9|1 portion=150;1 small portion=100|fish
us-salmon-pink-canned-drained-solids|Salmon, pink, canned, drained solids|FS|136|24.6|0|4.2|1 portion=150;1 small portion=100|fish
us-salmon-pink-canned-total-can-contents|Salmon, pink, canned, total can contents|FS|129|19.7|0|5|1 portion=150;1 small portion=100|fish
us-salmon-pink-canned|Salmon, pink, canned|FS|139|19.8|0|6.1|1 portion=150;1 small portion=100|fish
us-salmon-pink-cooked|Salmon, pink, cooked|FS|153|24.6|0|5.3|1 portion=150;1 small portion=100|fish
us-salmon-pink-raw|Salmon, pink, raw|FS|127|20.5|0|4.4|1 portion=150;1 small portion=100|fish
us-salmon-sockeye-canned-drained-solids|Salmon, sockeye, canned, drained solids|FS|167|23.6|0|7.4|1 portion=150;1 small portion=100|fish
us-salmon-sockeye-canned|Salmon, sockeye, canned|FS|153|20.5|0|7.3|1 portion=150;1 small portion=100|fish
us-salmon-sockeye-cooked|Salmon, sockeye, cooked|FS|156|26.5|0|5.6|1 portion=150;1 small portion=100|fish
us-salmon-sockeye-raw|Salmon, sockeye, raw|FS|131|22.3|0|4.7|1 portion=150;1 small portion=100|fish
us-sardine-atlantic-canned-in-oil-drained-solids-wi|Sardine, Atlantic, canned in oil, drained solids with bone|FS|208|24.6|0|11.5|1 portion=150;1 small portion=100|fish
us-sardine-pacific-canned-in-tomato-sauce|Sardine, Pacific, canned in tomato sauce|FS|185|20.9|0.5|10.5|1 portion=150;1 small portion=100|bone drained fish solids
us-scup-cooked|Scup, cooked|FS|135|24.2|0|3.5|1 portion=150;1 small portion=100|fish
us-scup-raw|Scup, raw|FS|105|18.9|0|2.7|1 portion=150;1 small portion=100|fish
us-sea-bass-cooked|Sea bass, cooked|FS|124|23.6|0|2.6|1 portion=150;1 small portion=100|fish
us-sea-bass-raw|Sea bass, raw|FS|97|18.4|0|2|1 portion=150;1 small portion=100|fish
us-seatrout-cooked|Seatrout, cooked|FS|133|21.5|0|4.6|1 portion=150;1 small portion=100|fish
us-seatrout-raw|Seatrout, raw|FS|104|16.7|0|3.6|1 portion=150;1 small portion=100|fish
us-shad-american-cooked|Shad, american, cooked|FS|252|21.7|0|17.7|1 portion=150;1 small portion=100|fish
us-shad-american-raw|Shad, american, raw|FS|197|16.9|0|13.8|1 portion=150;1 small portion=100|fish
us-shark-cooked-batter-dipped-and-fried|Shark, cooked, batter-dipped and fried|FS|228|18.6|6.4|13.8|1 portion=150;1 small portion=100|fish
us-shark-raw|Shark, raw|FS|130|21|0|4.5|1 portion=150;1 small portion=100|fish
us-sheepshead-cooked|Sheepshead, cooked|FS|126|26|0|1.6|1 portion=150;1 small portion=100|fish
us-sheepshead-raw|Sheepshead, raw|FS|108|20.2|0|2.4|1 portion=150;1 small portion=100|fish
us-smelt-rainbow-cooked|Smelt, rainbow, cooked|FS|124|22.6|0|3.1|1 portion=150;1 small portion=100|fish
us-smelt-rainbow-raw|Smelt, rainbow, raw|FS|97|17.6|0|2.4|1 portion=150;1 small portion=100|fish
us-snapper-cooked|Snapper, cooked|FS|128|26.3|0|1.7|1 portion=150;1 small portion=100|fish
us-snapper-raw|Snapper, raw|FS|100|20.5|0|1.3|1 portion=150;1 small portion=100|fish
us-spot-cooked|Spot, cooked|FS|158|23.7|0|6.3|1 portion=150;1 small portion=100|fish
us-spot-raw|Spot, raw|FS|123|18.5|0|4.9|1 portion=150;1 small portion=100|fish
us-sturgeon-cooked|Sturgeon, cooked|FS|135|20.7|0|5.2|1 portion=150;1 small portion=100|fish
us-sturgeon-raw|Sturgeon, raw|FS|105|16.1|0|4|1 portion=150;1 small portion=100|fish
us-sturgeon-smoked|Sturgeon, smoked|FS|173|31.2|0|4.4|1 portion=150;1 small portion=100|fish
us-sucker-white-cooked|Sucker, white, cooked|FS|119|21.5|0|3|1 portion=150;1 small portion=100|fish
us-sucker-white-raw|Sucker, white, raw|FS|92|16.8|0|2.3|1 portion=150;1 small portion=100|fish
us-sunfish-pumpkin-seed-cooked|Sunfish, pumpkin seed, cooked|FS|114|24.9|0|0.9|1 portion=150;1 small portion=100|fish
us-sunfish-pumpkin-seed-raw|Sunfish, pumpkin seed, raw|FS|89|19.4|0|0.7|1 portion=150;1 small portion=100|fish
us-surimi|Surimi|FS|99|15.2|6.9|0.9|1 portion=150;1 small portion=100|fish
us-swordfish-cooked|Swordfish, cooked|FS|172|23.5|0|7.9|1 portion=150;1 small portion=100|fish
us-swordfish-raw|Swordfish, raw|FS|144|19.7|0|6.7|1 portion=150;1 small portion=100|fish
us-tilapia-cooked|Tilapia, cooked|FS|128|26.2|0|2.7|1 portion=150;1 small portion=100|fish
us-tilapia-raw|Tilapia, raw|FS|96|20.1|0|1.7|1 portion=150;1 small portion=100|fish
us-tilefish-cooked|Tilefish, cooked|FS|147|24.5|0|4.7|1 portion=150;1 small portion=100|fish
us-tilefish-raw|Tilefish, raw|FS|96|17.5|0|2.3|1 portion=150;1 small portion=100|fish
us-trout-brook-raw-new-york-state|Trout, brook, raw, New York State|FS|110|21.2|0|2.7|1 portion=150;1 small portion=100|fish
us-trout-cooked|Trout, cooked|FS|190|26.6|0|8.5|1 portion=150;1 small portion=100|fish
us-trout-raw|Trout, raw|FS|148|20.8|0|6.6|1 portion=150;1 small portion=100|fish
us-trout-rainbow-farmed-cooked|Trout, rainbow, farmed, cooked|FS|168|23.8|0|7.4|1 portion=150;1 small portion=100|fish
us-trout-rainbow-farmed-raw|Trout, rainbow, farmed, raw|FS|141|19.9|0|6.2|1 portion=150;1 small portion=100|fish
us-trout-rainbow-wild-cooked|Trout, rainbow, wild, cooked|FS|150|22.9|0|5.8|1 portion=150;1 small portion=100|fish
us-trout-rainbow-wild-raw|Trout, rainbow, wild, raw|FS|119|20.5|0|3.5|1 portion=150;1 small portion=100|fish
us-tuna-fresh-bluefin-cooked|Tuna, fresh, bluefin, cooked|FS|184|29.9|0|6.3|1 portion=150;1 small portion=100|fish
us-tuna-fresh-bluefin-raw|Tuna, fresh, bluefin, raw|FS|144|23.3|0|4.9|1 portion=150;1 small portion=100|fish
us-tuna-fresh-skipjack-raw|Tuna, fresh, skipjack, raw|FS|103|22|0|1|1 portion=150;1 small portion=100|fish
us-tuna-fresh-yellowfin-raw|Tuna, fresh, yellowfin, raw|FS|109|24.4|0|0.5|1 portion=150;1 small portion=100|fish
us-tuna-light-canned-in-oil-drained-solids|Tuna, light, canned in oil, drained solids|FS|198|29.1|0|8.2|1 portion=150;1 small portion=100|fish
us-tuna-light-canned-in-oil|Tuna, light, canned in oil|FS|198|29.1|0|8.2|1 portion=150;1 small portion=100|fish
us-tuna-light-canned-in-water-drained-solids|Tuna, light, canned in water, drained solids|FS|86|19.4|0|1|1 portion=150;1 small portion=100|fish
us-tuna-light-canned-in-water|Tuna, light, canned in water|FS|116|25.5|0|0.8|1 portion=150;1 small portion=100|fish
us-tuna-salad|Tuna salad|FS|187|16|9.4|9.3|1 portion=150;1 small portion=100|fish
us-tuna-skipjack-fresh-cooked|Tuna, skipjack, fresh, cooked|FS|132|28.2|0|1.3|1 portion=150;1 small portion=100|fish
us-tuna-white-canned-in-oil-drained-solids|Tuna, white, canned in oil, drained solids|FS|186|26.5|0|8.1|1 portion=150;1 small portion=100|fish
us-tuna-white-canned-in-oil|Tuna, white, canned in oil|FS|186|26.5|0|8.1|1 portion=150;1 small portion=100|fish
us-tuna-white-canned-in-water-drained-solids|Tuna, white, canned in water, drained solids|FS|128|23.6|0|3|1 portion=150;1 small portion=100|fish
us-tuna-white-canned-in-water|Tuna, white, canned in water|FS|128|23.6|0|3|1 portion=150;1 small portion=100|fish
us-tuna-yellowfin-fresh-cooked|Tuna, yellowfin, fresh, cooked|FS|130|29.2|0|0.6|1 portion=150;1 small portion=100|fish
us-turbot-european-cooked|Turbot, european, cooked|FS|122|20.6|0|3.8|1 portion=150;1 small portion=100|fish
us-turbot-european-raw|Turbot, european, raw|FS|95|16.1|0|3|1 portion=150;1 small portion=100|fish
us-whitefish-cooked|Whitefish, cooked|FS|172|24.5|0|7.5|1 portion=150;1 small portion=100|fish
us-whitefish-raw|Whitefish, raw|FS|134|19.1|0|5.9|1 portion=150;1 small portion=100|fish
us-whitefish-smoked|Whitefish, smoked|FS|108|23.4|0|0.9|1 portion=150;1 small portion=100|fish
us-whiting-cooked|Whiting, cooked|FS|116|23.5|0|1.7|1 portion=150;1 small portion=100|fish
us-whiting-raw|Whiting, raw|FS|90|18.3|0|1.3|1 portion=150;1 small portion=100|fish
us-wolffish-atlantic-cooked|Wolffish, Atlantic, cooked|FS|123|22.4|0|3.1|1 portion=150;1 small portion=100|fish
us-wolffish-atlantic-raw|Wolffish, Atlantic, raw|FS|96|17.5|0|2.4|1 portion=150;1 small portion=100|fish
us-frog-legs-raw|Frog legs, raw|FS|73|16.4|0|0.3|1 portion=150;1 small portion=100|
us-jellyfish-dried-salted|Jellyfish, dried, salted|FS|36|5.5|0|1.4|1 portion=150;1 small portion=100|
us-abalone-cooked-fried|Abalone, cooked, fried|FS|189|19.6|11.1|6.8|1 portion=150;1 small portion=100|mollusks
us-abalone-raw|Abalone, raw|FS|105|17.1|6|0.8|1 portion=150;1 small portion=100|mollusks
us-clam-canned-drained-solids|Clam, canned, drained solids|FS|142|24.3|5.9|1.6|1 portion=150;1 small portion=100|mollusks
us-clam-canned-liquid|Clam, canned, liquid|FS|2|0.4|0.1|0|1 portion=150;1 small portion=100|mollusks
us-clam-cooked-breaded-and-fried|Clam, cooked, breaded and fried|FS|202|14.2|10.3|11.2|1 portion=150;1 small portion=100|mollusks
us-clam-cooked-moist|Clam, cooked (moist)|FS|148|25.6|5.1|2|1 portion=150;1 small portion=100|mollusks
us-clam-raw|Clam, raw|FS|86|14.7|3.6|1|1 portion=150;1 small portion=100|mollusks
us-conch-baked-or-broiled|Conch, baked or broiled|FS|130|26.3|1.7|1.2|1 portion=150;1 small portion=100|mollusks
us-cuttlefish-cooked-moist|Cuttlefish, cooked (moist)|FS|158|32.5|1.6|1.4|1 portion=150;1 small portion=100|mollusks
us-cuttlefish-raw|Cuttlefish, raw|FS|79|16.2|0.8|0.7|1 portion=150;1 small portion=100|mollusks
us-mussel-blue-cooked-moist|Mussel, blue, cooked (moist)|FS|172|23.8|7.4|4.5|1 portion=150;1 small portion=100|mollusks
us-mussel-blue-raw|Mussel, blue, raw|FS|86|11.9|3.7|2.2|1 portion=150;1 small portion=100|mollusks
us-octopus-common-cooked-moist|Octopus, common, cooked (moist)|FS|164|29.8|4.4|2.1|1 portion=150;1 small portion=100|mollusks
us-octopus-common-raw|Octopus, common, raw|FS|82|14.9|2.2|1|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-canned|Oyster, eastern, canned|FS|68|7.1|3.9|2.5|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-cooked-breaded-and-fried|Oyster, eastern, cooked, breaded and fried|FS|199|8.8|11.6|12.6|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-farmed-cooked|Oyster, eastern, farmed, cooked|FS|79|7|7.3|2.1|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-farmed-raw|Oyster, eastern, farmed, raw|FS|59|5.2|5.5|1.6|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-wild-cooked|Oyster, eastern, wild, cooked|FS|102|11.4|5.5|3.4|1 portion=150;1 small portion=100|mollusks
us-oyster-eastern-wild-raw|Oyster, eastern, wild, raw|FS|51|5.7|2.7|1.7|1 portion=150;1 small portion=100|mollusks
us-oyster-pacific-cooked-moist|Oyster, Pacific, cooked (moist)|FS|163|18.9|9.9|4.6|1 portion=150;1 small portion=100|mollusks
us-oyster-pacific-raw|Oyster, Pacific, raw|FS|81|9.5|5|2.3|1 portion=150;1 small portion=100|mollusks
us-scallop-bay-and-sea-cooked-steamed|Scallop, (bay and sea), cooked, steamed|FS|111|20.5|5.4|0.8|1 portion=150;1 small portion=100|mollusks
us-scallop-cooked-breaded-and-fried|Scallop, cooked, breaded and fried|FS|216|18.1|10.1|10.9|1 portion=150;1 small portion=100|mollusks
us-scallop-imitation-made-from-surimi|Scallop, imitation, made from surimi|FS|99|12.8|10.6|0.4|1 portion=150;1 small portion=100|mollusks
us-scallop-raw|Scallop, raw|FS|69|12.1|3.2|0.5|1 portion=150;1 small portion=100|mollusks
us-snail-raw|Snail, raw|FS|90|16.1|2|1.4|1 portion=150;1 small portion=100|mollusks
us-squid-cooked-fried|Squid, cooked, fried|FS|175|17.9|7.8|7.5|1 portion=150;1 small portion=100|mollusks
us-squid-raw|Squid, raw|FS|92|15.6|3.1|1.4|1 portion=150;1 small portion=100|mollusks
us-salmon-nuggets-breaded-frozen-heated|Salmon nuggets, breaded, frozen, heated|FS|212|12.7|14|11.7|1 portion=150;1 small portion=100|
us-salmon-nuggets-cooked-as-purchased-unheated|Salmon nuggets, cooked as purchased, unheated|FS|189|12|11.9|10.4|1 portion=150;1 small portion=100|
us-salmon-sockeye-canned-drained-solids-without-ski|Salmon, sockeye, canned, drained solids, without skin and bones|FS|158|26.3|0|5.9|1 portion=150;1 small portion=100|
us-salmon-sockeye-canned-total-can-contents|Salmon, sockeye, canned, total can contents|FS|153|20.6|0|7.2|1 portion=150;1 small portion=100|
us-turtle-green-raw|Turtle, green, raw|FS|89|19.8|0|0.5|1 portion=150;1 small portion=100|
us-potatoes-au-gratin-homemade|Potatoes, au gratin, homemade|VG|134|5.1|11.3|7.6|1 medium=170;1 cup=160|butter
us-potatoes-baked-flesh-and-skin|Potatoes, baked, flesh and skin|VG|93|2.5|21.2|0.1|1 medium=170;1 cup=160|
us-potatoes-baked-flesh|Potatoes, baked, flesh|VG|93|2|21.6|0.1|1 medium=170;1 cup=160|
us-potatoes-baked-skin|Potatoes, baked, skin|VG|198|4.3|46.1|0.1|1 medium=170;1 cup=160|
us-potatoes-boiled-cooked-in-skin-flesh|Potatoes, boiled, cooked in skin, flesh|VG|87|1.9|20.1|0.1|1 medium=170;1 cup=160|
us-potatoes-boiled-cooked-in-skin-skin|Potatoes, boiled, cooked in skin, skin|VG|78|2.9|17.2|0.1|1 medium=170;1 cup=160|
us-potatoes-boiled-cooked-without-skin-flesh|Potatoes, boiled, cooked without skin, flesh|VG|86|1.7|20|0.1|1 medium=170;1 cup=160|
us-potatoes-canned-drained-solids|Potatoes, canned, drained solids|VG|60|1.4|13.6|0.2|1 medium=170;1 cup=160|
us-potatoes-flesh-and-skin-raw|Potatoes, flesh and skin, raw|VG|77|2.1|17.5|0.1|1 medium=170;1 cup=160|
us-potatoes-french-fried-all-types-salt-not-added-i|Potatoes, french fried, all types, salt not added in processing|VG|168|2.7|28.7|5.2|1 medium=170;1 cup=160|frozen
us-potatoes-french-fried-cottage-cut|Potatoes, french fried, cottage-cut|VG|218|3.4|34|8.2|1 medium=170;1 cup=160|added frozen not processing
us-potatoes-french-fried-steak-cut-salt-not-added-i|Potatoes, french fried, steak cut, salt not added in processing|VG|134|2.4|24.3|3.4|1 medium=170;1 cup=160|frozen
us-potatoes-frozen-french-fried-par-fried-cottage-c|Potatoes, frozen, french fried, par fried, cottage-cut|VG|218|3.4|34|8.2|1 medium=170;1 cup=160|
us-potatoes-frozen-french-fried-par-fried-extruded|Potatoes, frozen, french fried, par fried, extruded|VG|260|2.8|30.2|15|1 medium=170;1 cup=160|
us-potatoes-frozen-whole-cooked-boiled|Potatoes, frozen, whole, cooked, boiled|VG|65|2|14.5|0.1|1 medium=170;1 cup=160|
us-potatoes-hash-brown-frozen-plain-prepared|Potatoes, hash brown, frozen, plain, prepared|VG|219|2.7|28.5|11.6|1 medium=170;1 cup=160|
us-potatoes-hash-brown-frozen-with-butter-sauce-pre|Potatoes, hash brown, frozen, with butter sauce, prepared|VG|178|2.5|24.1|8.8|1 medium=170;1 cup=160|
us-potatoes-hash-brown-homemade|Potatoes, hash brown, homemade|VG|265|3|35.1|12.5|1 medium=170;1 cup=160|
us-potatoes-hash-brown-refrigerated-prepared|Potatoes, hash brown, refrigerated, prepared|VG|242|3.2|34|10.3|1 medium=170;1 cup=160|canola fried oil pan
us-potatoes-mashed|Potatoes, mashed|VG|106|2|13.3|5|1 medium=170;1 cup=160|
us-potatoes-mashed-dehydrated-prepared-from-flakes-|Potatoes, mashed, dehydrated, prepared from flakes without milk|VG|97|1.8|10.9|5.1|1 medium=170;1 cup=160|added butter whole
us-potatoes-mashed-dehydrated-prepared-from-granule|Potatoes, mashed, dehydrated, prepared from granules with milk|VG|116|2.1|16.1|4.8|1 medium=170;1 cup=160|added margarine water
us-potatoes-mashed-dehydrated|Potatoes, mashed, dehydrated|VG|108|2.1|14.4|5|1 medium=170;1 cup=160|added butter granules milk whole
us-potatoes-mashed-homemade-whole-milk-added|Potatoes, mashed, homemade, whole milk added|VG|83|1.9|17.6|0.6|1 medium=170;1 cup=160|
us-potatoes-mashed-homemade-whole-milk-and-butter-a|Potatoes, mashed, homemade, whole milk and butter added|VG|113|1.9|16.8|4.2|1 medium=170;1 cup=160|
us-potatoes-mashed-homemade-whole-milk-and-margarin|Potatoes, mashed, homemade, whole milk and margarine added|VG|113|2|16.9|4.2|1 medium=170;1 cup=160|
us-potatoes-mashed-prepared-from-granules-without-m|Potatoes, mashed, prepared from granules, without milk|VG|108|2.1|14.4|4.9|1 medium=170;1 cup=160|margarine whole
us-potatoes-microwaved-cooked-in-skin-flesh-and-ski|Potatoes, microwaved, cooked, in skin, flesh and skin|VG|105|2.4|24.2|0.1|1 medium=170;1 cup=160|
us-potatoes-microwaved-cooked-in-skin-flesh|Potatoes, microwaved, cooked in skin, flesh|VG|100|2.1|23.3|0.1|1 medium=170;1 cup=160|
us-potatoes-microwaved-cooked-in-skin-skin|Potatoes, microwaved, cooked in skin, skin|VG|132|4.4|29.6|0.1|1 medium=170;1 cup=160|
us-potatoes-o-brien-frozen-prepared|Potatoes, o'brien, frozen, prepared|VG|204|2.2|21.9|13.2|1 medium=170;1 cup=160|
us-potatoes-o-brien-homemade|Potatoes, o'brien, homemade|VG|81|2.4|15.5|1.3|1 medium=170;1 cup=160|
us-potatoes-raw-skin|Potatoes, raw, skin|VG|58|2.6|12.4|0.1|1 medium=170;1 cup=160|
us-potatoes-red-flesh-and-skin-baked|Potatoes, red, flesh and skin, baked|VG|87|2.3|19.6|0.2|1 medium=170;1 cup=160|
us-potatoes-red-flesh-and-skin-raw|Potatoes, red, flesh and skin, raw|VG|70|1.9|15.9|0.1|1 medium=170;1 cup=160|
us-potatoes-russet-flesh-and-skin-baked|Potatoes, Russet, flesh and skin, baked|VG|95|2.6|21.4|0.1|1 medium=170;1 cup=160|
us-potatoes-russet-flesh-and-skin-raw|Potatoes, russet, flesh and skin, raw|VG|79|2.1|18.1|0.1|1 medium=170;1 cup=160|
us-potatoes-scalloped-homemade-with-butter|Potatoes, scalloped, homemade with butter|VG|88|2.9|10.8|3.7|1 medium=170;1 cup=160|
us-potatoes-scalloped-homemade-with-margarine|Potatoes, scalloped, homemade with margarine|VG|88|2.9|10.8|3.7|1 medium=170;1 cup=160|
us-potatoes-white-flesh-and-skin-baked|Potatoes, white, flesh and skin, baked|VG|92|2.1|21.1|0.2|1 medium=170;1 cup=160|
us-potatoes-white-flesh-and-skin-raw|Potatoes, white, flesh and skin, raw|VG|69|1.7|15.7|0.1|1 medium=170;1 cup=160|
us-potato-flour|Potato flour|VG|357|6.9|83.1|0.3|1 medium=170;1 cup=160|
us-potato-pancakes|Potato pancakes|VG|268|6.1|27.8|14.8|1 medium=170;1 cup=160|
us-potato-puffs-frozen-oven-heated|Potato puffs, frozen, oven-heated|VG|192|2.1|27.3|9.1|1 medium=170;1 cup=160|
us-potato-salad-homemade|Potato salad, homemade|VG|143|2.7|11.2|8.2|1 medium=170;1 cup=160|
us-potato-wedges-frozen|Potato wedges, frozen|VG|129|2.7|25.5|2.2|1 medium=170;1 cup=160|
us-sweet-potato-canned-mashed|Sweet potato, canned, mashed|VG|101|2|23.2|0.2|1 medium=170;1 cup=160|
us-sweet-potato-canned-syrup-pack-drained-solids|Sweet potato, canned, syrup pack, drained solids|VG|108|1.3|25.4|0.3|1 medium=170;1 cup=160|
us-sweet-potato-canned-vacuum-pack|Sweet potato, canned, vacuum pack|VG|91|1.7|21.1|0.2|1 medium=170;1 cup=160|
us-sweet-potato-cooked-baked-in-skin-flesh|Sweet potato, cooked, baked in skin, flesh|VG|90|2|20.7|0.2|1 medium=170;1 cup=160|
us-sweet-potato-cooked-boiled-without-skin|Sweet potato, cooked, boiled, without skin|VG|76|1.4|17.7|0.1|1 medium=170;1 cup=160|
us-sweet-potato-cooked-candied-homemade|Sweet potato, cooked, candied, homemade|VG|164|0.9|32.1|3.5|1 medium=170;1 cup=160|
us-sweet-potato-frozen-cooked-baked|Sweet potato, frozen, cooked, baked|VG|100|1.7|23.4|0.1|1 medium=170;1 cup=160|
us-sweet-potato-leaves-cooked-steamed|Sweet potato leaves, cooked, steamed|VG|35|2.2|7.4|0.3|1 medium=170;1 cup=160|
us-sweet-potato-leaves-raw|Sweet potato leaves, raw|VG|42|2.5|8.8|0.5|1 medium=170;1 cup=160|
us-campbell-s-chunky-classic-chicken-noodle-soup|Campbell's Chunky, Classic Chicken Noodle Soup|OS|47|3.4|5.4|1.3|1 tbsp=15;2 tbsp=30|
us-campbell-s-chunky-hearty-beef-barley-soup|Campbell's Chunky, Hearty Beef Barley Soup|OS|56|2.9|9|0.9|1 tbsp=15;2 tbsp=30|
us-campbell-s-chunky-new-england-clam-chowder|Campbell's Chunky, New England Clam Chowder|OS|81|2.5|9|3.9|1 tbsp=15;2 tbsp=30|
us-campbell-s-chunky-old-fashioned-vegetable-beef-s|Campbell's Chunky, Old Fashioned Vegetable Beef Soup|OS|49|3.2|6.2|1.2|1 tbsp=15;2 tbsp=30|
us-dip-bean-original-flavor|Dip, bean, original flavor|OS|119|5.4|15.9|3.7|1 tbsp=15;2 tbsp=30|
us-dip-frito-s-bean-original-flavor|Dip, Frito's, bean, original flavor|OS|119|5.4|15.9|3.7|1 tbsp=15;2 tbsp=30|
us-dip-salsa-con-queso-cheese-and-salsa-medium|Dip, salsa con queso, cheese and salsa- medium|OS|143|3.1|11.1|9.5|1 tbsp=15;2 tbsp=30|
us-dip-tostitos-salsa-con-queso-medium|Dip, Tostitos, salsa con queso, medium|OS|133|2.9|11.7|8.3|1 tbsp=15;2 tbsp=30|
us-fish-broth|Fish broth|OS|16|2|0.4|0.6|1 tbsp=15;2 tbsp=30|
us-au-jus-gravy-canned|Au jus gravy, canned|OS|16|1.2|2.5|0.2|1 tbsp=15;2 tbsp=30|
us-au-jus-gravy-dry|Au jus gravy, dry|OS|313|9.2|47.5|9.6|1 tbsp=15;2 tbsp=30|
us-beef-gravy-canned|Beef gravy, canned|OS|53|3.8|4.8|2.4|1 tbsp=15;2 tbsp=30|
us-brown-gravy-dry|Brown gravy, dry|OS|367|10.7|59.4|9.6|1 tbsp=15;2 tbsp=30|
us-brown-instant-gravy-dry|Brown instant gravy, dry|OS|380|8.5|59.8|11.9|1 tbsp=15;2 tbsp=30|
us-campbell-s-gravy-chicken|Campbell's gravy, chicken|OS|51|0.8|5.9|2.7|1 tbsp=15;2 tbsp=30|
us-chicken-gravy-canned-or-bottled|Chicken gravy, canned or bottled|OS|48|0.7|5.3|2.6|1 tbsp=15;2 tbsp=30|
us-chicken-gravy-dry|Chicken gravy, dry|OS|381|11.3|62.1|9.7|1 tbsp=15;2 tbsp=30|
us-dry-gravy|Dry gravy|OS|344|13|58|8|1 tbsp=15;2 tbsp=30|
us-heinz-home-style-gravy-classic-chicken|Heinz Home Style gravy, classic chicken|OS|46|0.7|5|2.6|1 tbsp=15;2 tbsp=30|
us-heinz-home-style-gravy-savory-beef|Heinz Home Style gravy, savory beef|OS|39|1.1|6.2|1.1|1 tbsp=15;2 tbsp=30|
us-instant-beef-gravy-dry|Instant beef gravy, dry|OS|369|9.8|61.1|9.5|1 tbsp=15;2 tbsp=30|
us-instant-turkey-gravy-dry|Instant turkey gravy, dry|OS|409|11.7|57.6|14.7|1 tbsp=15;2 tbsp=30|
us-meat-or-poultry-gravy-low-sodium-prepared|Meat or poultry gravy, low sodium, prepared|OS|53|3.8|6.2|2.4|1 tbsp=15;2 tbsp=30|
us-mushroom-gravy-canned|Mushroom gravy, canned|OS|50|1.3|5.5|2.7|1 tbsp=15;2 tbsp=30|
us-mushroom-gravy-dry-powder|Mushroom gravy, dry, powder|OS|328|10|64.7|4|1 tbsp=15;2 tbsp=30|
us-pork-gravy-dry-powder|Pork gravy, dry, powder|OS|367|8.8|63.6|8.6|1 tbsp=15;2 tbsp=30|
us-turkey-gravy-canned|Turkey gravy, canned|OS|51|2.6|5.1|2.1|1 tbsp=15;2 tbsp=30|
us-turkey-gravy-dry|Turkey gravy, dry|OS|367|10.4|65.1|7.2|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce|Barbecue sauce|OS|172|0.8|40.8|0.6|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce-bull-s-eye-original|Barbecue sauce, Bull's-eye, original|OS|170|0.9|40|0.7|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce-kc-masterpiece-original|Barbecue sauce, KC Masterpiece, original|OS|160|1|37.9|0.5|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce-kraft-original|Barbecue sauce, Kraft, original|OS|172|0.7|40.8|0.6|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce-open-pit-original|Barbecue sauce, Open Pit, original|OS|132|0.4|29.5|1.4|1 tbsp=15;2 tbsp=30|
us-barbecue-sauce-sweet-baby-ray-s-original|Barbecue sauce, Sweet Baby Ray's, original|OS|192|1|46.1|0.4|1 tbsp=15;2 tbsp=30|
us-chili-sauce-peppers-hot-immature-green|Chili sauce, peppers, hot, immature green|OS|20|0.7|5|0.1|1 tbsp=15;2 tbsp=30|
us-duck-sauce|Duck sauce|OS|245|0.4|60.7|0.1|1 tbsp=15;2 tbsp=30|
us-enchilada-sauce-red-mild-ready-to-serve|Enchilada sauce, red, mild, ready to serve|OS|30|0.6|4.9|0.9|1 tbsp=15;2 tbsp=30|
us-fish-sauce|Fish sauce|OS|35|5.1|3.6|0|1 tbsp=15;2 tbsp=30|
us-hoisin-sauce|Hoisin sauce|OS|220|3.3|44.1|3.4|1 tbsp=15;2 tbsp=30|
us-homemade-sauce-white-medium|Homemade sauce, white, medium|OS|147|3.8|9.2|10.6|1 tbsp=15;2 tbsp=30|
us-homemade-sauce-white-thick|Homemade sauce, white, thick|OS|186|4|11.6|13.8|1 tbsp=15;2 tbsp=30|
us-hot-chile-sauce-sriracha|Hot chile sauce, sriracha|OS|93|1.9|19.2|0.9|1 tbsp=15;2 tbsp=30|
us-hot-chile-sauce-sriracha-cha-by-texas-pete|Hot chile sauce, sriracha, Cha! BY Texas Pete|OS|108|2|22.7|1|1 tbsp=15;2 tbsp=30|
us-hot-chile-sauce-sriracha-tuong-ot-sriracha|Hot chile sauce, sriracha, Tuong OT Sriracha|OS|79|1.9|15.9|0.9|1 tbsp=15;2 tbsp=30|
us-oyster-sauce|Oyster sauce|OS|51|1.4|10.9|0.3|1 tbsp=15;2 tbsp=30|
us-pasta-sauce-spaghetti-marinara|Pasta sauce, spaghetti/marinara|OS|50|1.4|7.4|1.6|1 tbsp=15;2 tbsp=30|
us-pasta-sauce-spaghetti-marinara-low-sodium|Pasta sauce, spaghetti/marinara, low sodium|OS|51|1.4|8.1|1.5|1 tbsp=15;2 tbsp=30|
us-peanut-sauce-made-from-coconut-water-sugar|Peanut sauce, made from coconut, water, sugar|OS|179|2|28.5|6.3|1 tbsp=15;2 tbsp=30|
us-peanut-sauce-made-from-peanut-butter-water-soy-s|Peanut sauce, made from peanut butter, water, soy sauce|OS|257|6.3|22|16|1 tbsp=15;2 tbsp=30|
us-peppers-sauce-hot-chili-mature-red|Peppers sauce, hot, chili, mature red|OS|21|0.9|3.9|0.6|1 tbsp=15;2 tbsp=30|
us-pesto-sauce-buitoni-pesto-with-basil|Pesto sauce, Buitoni, pesto with basil|OS|418|9.8|10.1|37.6|1 tbsp=15;2 tbsp=30|
us-pesto-sauce-classico-basil-pesto|Pesto sauce, Classico, basil pesto|OS|372|4.2|6.9|36.4|1 tbsp=15;2 tbsp=30|
us-pesto-sauce-mezzetta-napa-valley-bistro-basil-pe|Pesto sauce, Mezzetta, Napa Valley Bistro, basil pesto|OS|496|6.7|5.1|49.9|1 tbsp=15;2 tbsp=30|
us-pesto-sauce-refrigerated|Pesto sauce, refrigerated|OS|418|9.8|10.1|37.6|1 tbsp=15;2 tbsp=30|
us-pesto-sauce-shelf-stable|Pesto sauce, shelf stable|OS|426|5|6.1|42.4|1 tbsp=15;2 tbsp=30|
us-pizza-sauce-canned|Pizza sauce, canned|OS|54|2.2|8.7|1.2|1 tbsp=15;2 tbsp=30|
us-plum-sauce|Plum sauce|OS|184|0.9|42.8|1|1 tbsp=15;2 tbsp=30|
us-pepper-or-hot-sauce|Pepper or hot sauce|OS|11|0.5|1.8|0.4|1 tbsp=15;2 tbsp=30|
us-pepper-sauce-tabasco|Pepper sauce, Tabasco|OS|12|1.3|0.8|0.8|1 tbsp=15;2 tbsp=30|
us-salsa-sauce|Salsa sauce|OS|29|1.5|6.6|0.2|1 tbsp=15;2 tbsp=30|
us-salsa-sauce-verde|Salsa sauce, verde|OS|38|1.1|6.4|0.9|1 tbsp=15;2 tbsp=30|
us-sofrito-sauce|Sofrito sauce|OS|237|12.8|5.5|18.2|1 tbsp=15;2 tbsp=30|
us-steak-sauce-tomato-based|Steak sauce, tomato based|OS|95|1.3|22|0.2|1 tbsp=15;2 tbsp=30|
us-sweet-and-sour-sauce-prepared-from-recipe|Sweet and sour sauce, prepared-from-recipe|OS|79|1.8|16.7|0.6|1 tbsp=15;2 tbsp=30|
us-sweet-and-sour-sauce|Sweet and sour sauce|OS|154|0.3|38.2|0|1 tbsp=15;2 tbsp=30|
us-tartar-sauce|Tartar sauce|OS|211|1|13.3|16.7|1 tbsp=15;2 tbsp=30|
us-teriyaki-sauce|Teriyaki sauce|OS|89|5.9|15.6|0|1 tbsp=15;2 tbsp=30|
us-teriyaki-sauce-reduced-sodium|Teriyaki sauce, reduced sodium|OS|89|5.9|15.6|0|1 tbsp=15;2 tbsp=30|
us-white-sauce-thin-prepared-from-recipe-with-butte|White sauce, thin, prepared-from-recipe, with butter|OS|72|4|8.3|2.6|1 tbsp=15;2 tbsp=30|
us-worcestershire-sauce|Worcestershire sauce|OS|77|0|19.2|0|1 tbsp=15;2 tbsp=30|
us-smart-soup-french-lentil|Smart Soup, French Lentil|OS|53|2.9|9.5|1.1|1 tbsp=15;2 tbsp=30|
us-smart-soup-greek-minestrone|Smart Soup, Greek Minestrone|OS|40|1.7|8.4|0.5|1 tbsp=15;2 tbsp=30|
us-smart-soup-indian-bean-masala|Smart Soup, Indian Bean Masala|OS|57|3.3|10.5|0.9|1 tbsp=15;2 tbsp=30|
us-smart-soup-moroccan-chick-pea|Smart Soup, Moroccan Chick Pea|OS|51|2|9.7|1.1|1 tbsp=15;2 tbsp=30|
us-smart-soup-santa-fe-corn-chowder|Smart Soup, Santa Fe Corn Chowder|OS|55|2|11.2|0.7|1 tbsp=15;2 tbsp=30|
us-smart-soup-thai-coconut-curry|Smart Soup, Thai Coconut Curry|OS|36|0.8|6.5|1.1|1 tbsp=15;2 tbsp=30|
us-smart-soup-vietnamese-carrot-lemongrass|Smart Soup, Vietnamese Carrot Lemongrass|OS|44|1.3|8.2|1.1|1 tbsp=15;2 tbsp=30|
us-wasabi|Wasabi|OS|292|2.2|46.1|10.9|1 tbsp=15;2 tbsp=30|
us-bacon-bits-meatless|Bacon bits, meatless|PP|476|32|28.6|25.9|1 portion=100|
us-bacon-meatless|Bacon, meatless|PP|309|11.7|5.3|29.5|1 portion=100|
us-adzuki-beans-mature-seed-cooked-boiled|Adzuki beans, mature seed, cooked, boiled|PP|128|7.5|24.8|0.1|1 cup=170;1/2 cup=85|
us-adzuki-beans-mature-seeds-canned-sweetened|Adzuki beans, mature seeds, canned, sweetened|PP|237|3.8|55|0|1 cup=170;1/2 cup=85|
us-adzuki-beans-mature-seeds-cooked-boiled|Adzuki beans, mature seeds, cooked, boiled|PP|128|7.5|24.8|0.1|1 cup=170;1/2 cup=85|
us-adzuki-beans-mature-seeds-raw|Adzuki beans, mature seeds, raw|PP|329|19.9|62.9|0.5|1 portion=100|
us-baked-beans-canned-plain-or-vegetarian|Baked beans, canned, plain or vegetarian|PP|94|4.8|21.1|0.4|1 cup=170;1/2 cup=85|
us-baked-beans-canned-with-beef|Baked beans, canned, with beef|PP|121|6.4|16.9|3.5|1 cup=170;1/2 cup=85|
us-baked-beans-canned-with-franks|Baked beans, canned, with franks|PP|142|6.8|15.4|6.6|1 cup=170;1/2 cup=85|
us-baked-beans-canned-with-pork|Baked beans, canned, with pork|PP|106|5.2|20|1.6|1 cup=170;1/2 cup=85|
us-baked-beans-canned-with-pork-and-sweet-sauce|Baked beans, canned, with pork and sweet sauce|PP|105|4.5|21.6|0.9|1 cup=170;1/2 cup=85|
us-baked-beans-canned-with-pork-and-tomato-sauce|Baked beans, canned, with pork and tomato sauce|PP|94|5.2|18.7|0.9|1 cup=170;1/2 cup=85|
us-baked-beans-home-prepared|Baked beans, home prepared|PP|155|5.5|21.6|5.2|1 portion=100|
us-black-beans-mature-seeds-canned-low-sodium|Black beans, mature seeds, canned, low sodium|PP|91|6|16.6|0.3|1 cup=170;1/2 cup=85|
us-black-beans-mature-seeds-cooked-boiled|Black beans, mature seeds, cooked, boiled|PP|132|8.9|23.7|0.5|1 cup=170;1/2 cup=85|
us-black-beans-mature-seeds-raw|Black beans, mature seeds, raw|PP|341|21.6|62.4|1.4|1 portion=100|
us-chili-beans-barbecue-ranch-style-cooked|Chili beans, barbecue, ranch style, cooked|PP|97|5|16.9|1|1 cup=170;1/2 cup=85|
us-cranberry-roman-beans-mature-seeds-canned|Cranberry (roman) beans, mature seeds, canned|PP|83|5.5|15.1|0.3|1 cup=170;1/2 cup=85|
us-cranberry-roman-beans-mature-seeds-cooked-boiled|Cranberry (roman) beans, mature seeds, cooked, boiled|PP|136|9.3|24.5|0.5|1 cup=170;1/2 cup=85|
us-cranberry-roman-beans-mature-seeds-raw|Cranberry (roman) beans, mature seeds, raw|PP|335|23|60.1|1.2|1 portion=100|
us-french-beans-mature-seeds-cooked-boiled|French beans, mature seeds, cooked, boiled|PP|129|7.1|24|0.8|1 cup=170;1/2 cup=85|
us-french-beans-mature-seeds-raw|French beans, mature seeds, raw|PP|343|18.8|64.1|2|1 portion=100|
us-great-northern-beans-mature-seeds-canned|Great northern beans, mature seeds, canned|PP|114|7.4|21|0.4|1 cup=170;1/2 cup=85|
us-great-northern-beans-mature-seeds-canned-low-sod|Great northern beans, mature seeds, canned, low sodium|PP|114|7.4|21|0.4|1 cup=170;1/2 cup=85|
us-great-northern-beans-mature-seeds-cooked-boiled|Great northern beans, mature seeds, cooked, boiled|PP|118|8.3|21.1|0.5|1 cup=170;1/2 cup=85|
us-great-northern-beans-mature-seeds-raw|Great northern beans, mature seeds, raw|PP|339|21.9|62.4|1.1|1 portion=100|
us-navy-beans-mature-seeds-canned|Navy beans, mature seeds, canned|PP|113|7.5|20.5|0.4|1 cup=170;1/2 cup=85|
us-navy-beans-mature-seeds-cooked-boiled|Navy beans, mature seeds, cooked, boiled|PP|140|8.2|26.1|0.6|1 cup=170;1/2 cup=85|
us-navy-beans-mature-seeds-raw|Navy beans, mature seeds, raw|PP|337|22.3|60.8|1.5|1 portion=100|
us-pink-beans-mature-seeds-cooked-boiled|Pink beans, mature seeds, cooked, boiled|PP|149|9.1|27.9|0.5|1 cup=170;1/2 cup=85|
us-pink-beans-mature-seeds-raw|Pink beans, mature seeds, raw|PP|343|21|64.2|1.1|1 portion=100|
us-pinto-beans-canned-drained-solids|Pinto beans, canned, drained solids|PP|114|7|20.2|0.9|1 cup=170;1/2 cup=85|
us-pinto-beans-mature-seeds-canned-drained-solids|Pinto beans, mature seeds, canned, drained solids|PP|117|7|20.8|1|1 cup=170;1/2 cup=85|
us-pinto-beans-mature-seeds-cooked-boiled|Pinto beans, mature seeds, cooked, boiled|PP|143|9|26.2|0.7|1 cup=170;1/2 cup=85|
us-pinto-beans-mature-seeds-raw|Pinto beans, mature seeds, raw|PP|347|21.4|62.6|1.2|1 portion=100|
us-small-white-beans-mature-seeds-cooked-boiled|Small white beans, mature seeds, cooked, boiled|PP|142|9|25.8|0.6|1 cup=170;1/2 cup=85|
us-small-white-beans-mature-seeds-raw|Small white beans, mature seeds, raw|PP|336|21.1|62.3|1.2|1 portion=100|
us-white-beans-mature-seeds-canned|White beans, mature seeds, canned|PP|114|7.3|21.2|0.3|1 cup=170;1/2 cup=85|
us-white-beans-mature-seeds-cooked-boiled|White beans, mature seeds, cooked, boiled|PP|139|9.7|25.1|0.4|1 cup=170;1/2 cup=85|
us-white-beans-mature-seeds-raw|White beans, mature seeds, raw|PP|333|23.4|60.3|0.9|1 portion=100|
us-yellow-beans-mature-seeds-cooked-boiled|Yellow beans, mature seeds, cooked, boiled|PP|144|9.2|25.3|1.1|1 cup=170;1/2 cup=85|
us-yellow-beans-mature-seeds-raw|Yellow beans, mature seeds, raw|PP|345|22|60.7|2.6|1 portion=100|
us-broadbeans-fava-beans-mature-seeds-canned|Broadbeans (fava beans), mature seeds, canned|PP|71|5.5|12.4|0.2|1 cup=170;1/2 cup=85|
us-broadbeans-fava-beans-mature-seeds-cooked-boiled|Broadbeans (fava beans), mature seeds, cooked, boiled|PP|110|7.6|19.7|0.4|1 cup=170;1/2 cup=85|
us-broadbeans-fava-beans-mature-seeds-raw|Broadbeans (fava beans), mature seeds, raw|PP|341|26.1|58.3|1.5|1 portion=100|
us-carob-flour|Carob flour|PP|222|4.6|88.9|0.7|1 portion=100|
us-chicken-meatless|Chicken, meatless|PP|224|23.6|3.6|12.7|1 portion=100|
us-chicken-meatless-breaded-fried|Chicken, meatless, breaded, fried|PP|234|21.3|8.5|12.8|1 portion=100|
us-chickpea-flour-besan|Chickpea flour (besan)|PP|387|22.4|57.8|6.7|1 portion=100|
us-chickpeas-garbanzo-beans-bengal-gram-mature-seed|Chickpeas (garbanzo beans, bengal gram), mature seeds, canned|PP|138|7|22.9|2.5|1 cup=170;1/2 cup=85|drained
us-chickpeas-garbanzo-beans-bengal-gram-mature-seed-2|Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked|PP|164|8.9|27.4|2.6|1 cup=170;1/2 cup=85|boiled
us-chickpeas-garbanzo-beans-bengal-gram-mature-seed-3|Chickpeas (garbanzo beans, bengal gram), mature seeds, raw|PP|378|20.5|63|6|1 portion=100|
us-chili-with-beans-canned|Chili with beans, canned|PP|103|6.1|13.2|3.8|1 cup=170;1/2 cup=85|
us-cowpeas-catjang-mature-seeds-cooked-boiled|Cowpeas, catjang, mature seeds, cooked, boiled|PP|117|8.1|20.3|0.7|1 cup=170;1/2 cup=85|
us-cowpeas-catjang-mature-seeds-raw|Cowpeas, catjang, mature seeds, raw|PP|343|23.9|59.6|2.1|1 portion=100|
us-cowpeas-common-blackeyes-crowder-southern-mature|Cowpeas, common (blackeyes, crowder, southern), mature seeds|PP|77|4.7|13.6|0.6|1 portion=100|
us-falafel-homemade|Falafel, homemade|PP|333|13.3|31.8|17.8|1 portion=100|
us-frankfurter-meatless|Frankfurter, meatless|PP|233|19.6|7.7|13.7|1 portion=100|
us-frijoles-rojos-volteados-refried-beans-red-canne|Frijoles rojos volteados (Refried beans, red, canned)|PP|144|5|15.5|6.9|1 cup=170;1/2 cup=85|
us-house-foods-premium-firm-tofu|House Foods Premium Firm Tofu|PP|85|10.9|1|4.2|1 portion=100|
us-house-foods-premium-soft-tofu|House Foods Premium Soft Tofu|PP|59|6.4|2.2|2.7|1 portion=100|
us-hummus-home-prepared|Hummus, home prepared|PP|177|4.9|20.1|8.6|1 portion=100|
us-hyacinth-beans-mature-seeds-cooked-boiled|Hyacinth beans, mature seeds, cooked, boiled|PP|117|8.1|20.7|0.6|1 cup=170;1/2 cup=85|
us-hyacinth-beans-mature-seeds-raw|Hyacinth beans, mature seeds, raw|PP|344|23.9|60.7|1.7|1 portion=100|
us-mature-seeds-lentils-cooked-boiled|Mature seeds lentils, cooked, boiled|PP|116|9|20.1|0.4|1 cup=170;1/2 cup=85|
us-pink-or-red-lentils-raw|Pink or red lentils, raw|PP|358|23.9|63.1|2.2|1 portion=100|
us-raw-lentils|Raw lentils|PP|352|24.6|63.4|1.1|1 portion=100|
us-lima-beans-large-mature-seeds-canned|Lima beans, large, mature seeds, canned|PP|79|4.9|14.9|0.2|1 cup=170;1/2 cup=85|
us-lima-beans-large-mature-seeds-cooked-boiled|Lima beans, large, mature seeds, cooked, boiled|PP|115|7.8|20.9|0.4|1 cup=170;1/2 cup=85|
us-lima-beans-large-mature-seeds-raw|Lima beans, large, mature seeds, raw|PP|338|21.5|63.4|0.7|1 portion=100|
us-lima-beans-thin-seeded-baby-mature-seeds-cooked-|Lima beans, thin seeded (baby), mature seeds, cooked, boiled|PP|126|8|23.3|0.4|1 cup=170;1/2 cup=85|
us-lima-beans-thin-seeded-baby-mature-seeds-raw|Lima beans, thin seeded (baby), mature seeds, raw|PP|335|20.6|62.8|0.9|1 portion=100|
us-luncheon-slices-meatless|Luncheon slices, meatless|PP|189|17.8|4.4|11.1|1 portion=100|
us-lupins-mature-seeds-cooked-boiled|Lupins, mature seeds, cooked, boiled|PP|119|15.6|9.9|2.9|1 cup=170;1/2 cup=85|
us-lupins-mature-seeds-raw|Lupins, mature seeds, raw|PP|371|36.2|40.4|9.7|1 portion=100|
us-meatballs-meatless|Meatballs, meatless|PP|197|21|8|9|1 portion=100|
us-meat-extender|Meat extender|PP|311|41.7|34.7|3|1 portion=100|
us-miso|Miso|PP|198|12.8|25.4|6|1 portion=100|
us-mori-nu-tofu-silken-extra-firm|Mori-nu, Tofu, silken, extra firm|PP|55|7.4|2|1.9|1 portion=100|
us-mori-nu-tofu-silken-firm|Mori-nu, Tofu, silken, firm|PP|62|6.9|2.4|2.7|1 portion=100|
us-mori-nu-tofu-silken-lite-extra-firm|Mori-nu, Tofu, silken, lite extra firm|PP|38|7|1|0.7|1 portion=100|
us-mori-nu-tofu-silken-lite-firm|Mori-nu, Tofu, silken, lite firm|PP|37|6.3|1.1|0.8|1 portion=100|
us-mori-nu-tofu-silken-soft|Mori-nu, Tofu, silken, soft|PP|55|4.8|2.9|2.7|1 portion=100|
us-mothbeans-mature-seeds-cooked-boiled|Mothbeans, mature seeds, cooked, boiled|PP|117|7.8|21|0.6|1 cup=170;1/2 cup=85|
us-mothbeans-mature-seeds-raw|Mothbeans, mature seeds, raw|PP|343|22.9|61.5|1.6|1 portion=100|
us-mung-beans-mature-seeds-cooked-boiled|Mung beans, mature seeds, cooked, boiled|PP|105|7|19.2|0.4|1 cup=170;1/2 cup=85|
us-mung-beans-mature-seeds-raw|Mung beans, mature seeds, raw|PP|347|23.9|62.6|1.2|1 portion=100|
us-mungo-beans-mature-seeds-cooked-boiled|Mungo beans, mature seeds, cooked, boiled|PP|105|7.5|18.3|0.6|1 cup=170;1/2 cup=85|
us-mungo-beans-mature-seeds-raw|Mungo beans, mature seeds, raw|PP|341|25.2|59|1.6|1 portion=100|
us-natto|Natto|PP|211|19.4|12.7|11|1 portion=100|
us-noodles-chinese-cellophane-or-long-rice-mung-bea|Noodles, chinese, cellophane or long rice (mung beans)|PP|351|0.2|86.1|0.1|1 portion=100|dehydrated
us-okara|Okara|PP|76|3.5|12.2|1.7|1 portion=100|
us-papad|Papad|PP|371|25.6|59.9|3.3|1 portion=100|
us-peanut-butter-chunk-style|Peanut butter, chunk style|PP|589|24.1|21.6|49.9|1 tbsp=16;2 tbsp=32|
us-peanut-butter-chunky-vitamin-and-mineral-fortifi|Peanut butter, chunky, vitamin and mineral fortified|PP|593|26.1|17.7|51.5|1 tbsp=16;2 tbsp=32|
us-peanut-butter-reduced-sodium|Peanut butter, reduced sodium|PP|590|24|21.8|49.9|1 tbsp=16;2 tbsp=32|
us-peanut-butter-smooth|Peanut Butter, smooth|PP|588|21.9|24|49.5|1 tbsp=16;2 tbsp=32|
us-peanut-butter-smooth-reduced-fat|Peanut butter, smooth, reduced fat|PP|520|25.9|35.7|34|1 tbsp=16;2 tbsp=32|
us-peanut-butter-smooth-style|Peanut butter, smooth style|PP|598|22.2|22.3|51.4|1 tbsp=16;2 tbsp=32|
us-peanut-butter-smooth-vitamin-and-mineral-fortifi|Peanut butter, smooth, vitamin and mineral fortified|PP|591|25.7|18.8|50.8|1 tbsp=16;2 tbsp=32|
us-peanut-butter-with-omega-3-creamy|Peanut butter with omega-3, creamy|PP|608|24.5|17|54.2|1 tbsp=16;2 tbsp=32|
us-peanut-flour-low-fat|Peanut flour, low fat|PP|428|33.8|31.3|21.9|1 portion=100|
us-peanuts-all-types-dry-roasted|Peanuts, all types, dry-roasted|PP|587|24.4|21.3|49.7|1 portion=100|
us-peanuts-all-types-oil-roasted|Peanuts, all types, oil-roasted|PP|599|28|15.3|52.5|1 portion=100|
us-peanuts-all-types-raw|Peanuts, all types, raw|PP|567|25.8|16.1|49.2|1 portion=100|
us-peanut-spread-reduced-sugar|Peanut spread, reduced sugar|PP|650|24.8|14.2|54.9|1 portion=100|
us-peanuts-spanish-oil-roasted|Peanuts, spanish, oil-roasted|PP|579|28|17.5|49|1 portion=100|
us-peanuts-spanish-raw|Peanuts, spanish, raw|PP|570|26.2|15.8|49.6|1 portion=100|
us-peanuts-valencia-oil-roasted|Peanuts, valencia, oil-roasted|PP|589|27|16.3|51.2|1 portion=100|
us-peanuts-valencia-raw|Peanuts, valencia, raw|PP|570|25.1|20.9|47.6|1 portion=100|
us-peanuts-virginia-oil-roasted|Peanuts, virginia, oil-roasted|PP|578|25.9|19.9|48.6|1 portion=100|
us-peanuts-virginia-raw|Peanuts, virginia, raw|PP|563|25.2|16.5|48.8|1 portion=100|
us-peas-green-split-mature-seeds-raw|Peas, green, split, mature seeds, raw|PP|364|23.1|61.6|3.9|1 portion=100|
us-peas-split-mature-seeds-cooked-boiled|Peas, split, mature seeds, cooked, boiled|PP|118|8.3|21.1|0.4|1 cup=170;1/2 cup=85|
us-pigeon-peas-red-gram-mature-seeds-cooked-boiled|Pigeon peas (red gram), mature seeds, cooked, boiled|PP|121|6.8|23.3|0.4|1 cup=170;1/2 cup=85|
us-pigeon-peas-red-gram-mature-seeds-raw|Pigeon peas (red gram), mature seeds, raw|PP|343|21.7|62.8|1.5|1 portion=100|
us-refried-beans-canned-fat-free|Refried beans, canned, fat-free|PP|79|5.3|13.5|0.5|1 cup=170;1/2 cup=85|
us-refried-beans-canned-traditional-reduced-sodium|Refried beans, canned, traditional, reduced sodium|PP|89|5|13.6|2|1 cup=170;1/2 cup=85|
us-refried-beans-canned-traditional-style|Refried beans, canned, traditional style|PP|90|5|13.6|2|1 cup=170;1/2 cup=85|
us-refried-beans-canned-vegetarian|Refried beans, canned, vegetarian|PP|83|5.3|13.5|0.9|1 cup=170;1/2 cup=85|
us-sandwich-spread-meatless|Sandwich spread, meatless|PP|149|8|9|9|1 portion=100|
us-sausage-meatless|Sausage, meatless|PP|255|20.3|8.1|18.2|1 portion=100|
us-silk-banana-strawberry-soy-yogurt|Silk Banana-Strawberry soy yogurt|PP|88|2.4|17.1|1.2|1 portion=100|
us-silk-black-cherry-soy-yogurt|Silk Black Cherry soy yogurt|PP|88|2.4|17.1|1.2|1 portion=100|
us-silk-blueberry-soy-yogurt|Silk Blueberry soy yogurt|PP|88|2.4|17.1|1.2|1 portion=100|
us-silk-chai-soymilk|Silk Chai, soymilk|PP|53|2.5|7.8|1.4|1 portion=100|
us-silk-chocolate-soymilk|Silk Chocolate, soymilk|PP|58|2.1|9.5|1.4|1 portion=100|
us-silk-coffee-soymilk|Silk Coffee, soymilk|PP|62|2.1|10.3|1.4|1 portion=100|
us-silk-french-vanilla-creamer|Silk French Vanilla Creamer|PP|133|0|20|6.7|1 portion=100|
us-silk-hazelnut-creamer|Silk Hazelnut Creamer|PP|133|0|20|6.7|1 portion=100|
us-silk-key-lime-soy-yogurt|Silk Key Lime soy yogurt|PP|88|2.4|17.7|1.2|1 portion=100|
us-silk-light-chocolate-soymilk|Silk Light Chocolate, soymilk|PP|49|2.1|9.1|0.6|1 portion=100|
us-silk-light-plain-soymilk|Silk Light Plain, soymilk|PP|29|2.5|3.3|0.8|1 portion=100|
us-silk-light-vanilla-soymilk|Silk Light Vanilla, soymilk|PP|33|2.5|4.1|0.8|1 portion=100|
us-silk-mocha-soymilk|Silk Mocha, soymilk|PP|58|2.1|9.1|1.4|1 portion=100|
us-silk-nog-soymilk|Silk Nog, soymilk|PP|74|2.5|12.3|1.6|1 portion=100|
us-silk-original-creamer|Silk Original Creamer|PP|100|0|6.7|6.7|1 portion=100|
us-silk-peach-soy-yogurt|Silk Peach soy yogurt|PP|94|2.4|18.8|1.2|1 portion=100|
us-silk-plain-soymilk|Silk Plain, soymilk|PP|41|2.9|3.3|1.7|1 portion=100|
us-silk-plain-soy-yogurt|Silk Plain soy yogurt|PP|66|2.6|9.7|1.8|1 portion=100|
us-silk-plus-fiber-soymilk|Silk Plus Fiber, soymilk|PP|41|2.5|5.8|1.4|1 portion=100|
us-silk-plus-for-bone-health-soymilk|Silk Plus for Bone Health, soymilk|PP|41|2.5|4.5|1.4|1 portion=100|
us-silk-plus-omega-3-dha-soymilk|Silk Plus Omega-3 Dha, soymilk|PP|45|2.9|3.3|2.1|1 portion=100|
us-silk-raspberry-soy-yogurt|Silk Raspberry soy yogurt|PP|88|2.4|17.7|1.2|1 portion=100|
us-silk-strawberry-soy-yogurt|Silk Strawberry soy yogurt|PP|94|2.4|18.2|1.2|1 portion=100|
us-silk-unsweetened-soymilk|Silk Unsweetened, soymilk|PP|33|2.9|1.7|1.7|1 portion=100|
us-silk-vanilla-soymilk|Silk Vanilla, soymilk|PP|41|2.5|4.1|1.4|1 portion=100|
us-silk-vanilla-soy-yogurt-family-size|Silk Vanilla soy yogurt (family size)|PP|79|2.6|13.7|1.8|1 portion=100|
us-silk-vanilla-soy-yogurt-single-serving-size|Silk Vanilla soy yogurt (single serving size)|PP|88|2.9|14.7|1.8|1 portion=100|
us-silk-very-vanilla-soymilk|Silk Very Vanilla, soymilk|PP|53|2.5|7.8|1.7|1 portion=100|
us-soybean-curd-cheese|Soybean, curd cheese|PP|151|12.5|6.9|8.1|1 portion=100|
us-soybeans-mature-cooked-boiled|Soybeans, mature cooked, boiled|PP|172|18.2|8.4|9|1 cup=170;1/2 cup=85|
us-soybeans-mature-seeds-dry-roasted|Soybeans, mature seeds, dry roasted|PP|449|43.3|29|21.6|1 portion=100|
us-soybeans-mature-seeds-raw|Soybeans, mature seeds, raw|PP|446|36.5|30.2|19.9|1 portion=100|
us-soybeans-mature-seeds-roasted-salted|Soybeans, mature seeds, roasted, salted|PP|469|38.6|30.2|25.4|1 portion=100|
us-soy-flour-full-fat-raw|Soy flour, full-fat, raw|PP|434|37.8|31.9|20.7|1 portion=100|
us-soy-flour-full-fat-roasted|Soy flour, full-fat, roasted|PP|439|38.1|30.4|21.9|1 portion=100|
us-soy-flour-low-fat|Soy flour, low-fat|PP|372|49.8|30.6|8.9|1 portion=100|
us-soymilk-all-flavors-enhanced|Soymilk (All flavors), enhanced|PP|45|2.9|3.5|2|1 glass=250;1 cup=250||L
us-soymilk-chocolate-unfortified|Soymilk, chocolate, unfortified|PP|63|2.3|10|1.5|1 glass=250;1 cup=250||L
us-soymilk-original-and-vanilla-unfortified|Soymilk, original and vanilla, unfortified|PP|54|3.3|6.3|1.8|1 glass=250;1 cup=250||L
us-soy-sauce-made-from-hydrolyzed-vegetable-protein|Soy sauce made from hydrolyzed vegetable protein|PP|60|7|7.8|0.5|1 portion=100|
us-soy-sauce-made-from-soy-and-wheat-shoyu|Soy sauce made from soy and wheat (shoyu)|PP|53|8.1|4.9|0.6|1 portion=100|
us-soy-sauce-made-from-soy-and-wheat-shoyu-low-sodi|Soy sauce made from soy and wheat (shoyu), low sodium|PP|57|9.1|5.6|0.3|1 portion=100|
us-soy-sauce-made-from-soy-tamari|Soy sauce made from soy (tamari)|PP|60|10.5|5.6|0.1|1 portion=100|
us-soy-sauce-reduced-sodium|Soy sauce, reduced sodium|PP|90|8.2|14.4|0.3|1 portion=100|hydrolyzed made protein vegetable
us-tempeh-cooked|Tempeh, cooked|PP|195|19.9|7.6|11.4|1 cup=170;1/2 cup=85|
us-tofu-dried-frozen-koyadofu|Tofu, dried-frozen (koyadofu)|PP|477|52.5|10|30.3|1 portion=100|
us-tofu-dried-frozen-koyadofu-prepared-with-calcium|Tofu, dried-frozen (koyadofu), prepared with calcium sulfate|PP|470|52.4|8.3|30.3|1 portion=100|
us-tofu-extra-firm-prepared-with-nigari|Tofu, extra firm, prepared with nigari|PP|83|10|1.2|5.3|1 portion=100|
us-tofu-firm-prepared-with-calcium-sulfate-and-magn|Tofu, firm, prepared with calcium sulfate and magnesium|PP|78|9|2.9|4.2|1 portion=100|chloride nigari
us-tofu-fried|Tofu, fried|PP|270|18.8|8.9|20.2|1 portion=100|
us-tofu-fried-prepared-with-calcium-sulfate|Tofu, fried, prepared with calcium sulfate|PP|270|18.8|8.9|20.2|1 portion=100|
us-tofu-hard-prepared-with-nigari|Tofu, hard, prepared with nigari|PP|145|12.7|4.4|10|1 portion=100|
us-tofu-raw-firm-prepared-with-calcium-sulfate|Tofu, raw, firm, prepared with calcium sulfate|PP|144|17.3|2.8|8.7|1 portion=100|
us-tofu-raw-prepared-with-calcium-sulfate|Tofu, raw, prepared with calcium sulfate|PP|76|8.1|1.9|4.8|1 portion=100|
us-tofu-salted-and-fermented-fuyu|Tofu, salted and fermented (fuyu)|PP|116|8.9|4.4|8|1 portion=100|
us-tofu-salted-and-fermented-fuyu-prepared-with-cal|Tofu, salted and fermented (fuyu), prepared with calcium sulfate|PP|116|8.2|5.2|8|1 portion=100|
us-tofu-soft-prepared-with-calcium-sulfate-and-magn|Tofu, soft, prepared with calcium sulfate and magnesium|PP|61|7.2|1.2|3.7|1 portion=100|chloride nigari
us-tofu-yogurt|Tofu yogurt|PP|94|3.5|16|1.8|1 portion=100|
us-vegetarian-fillets|Vegetarian fillets|PP|290|23|9|18|1 portion=100|
us-vegetarian-meatloaf-or-patties|Vegetarian meatloaf or patties|PP|197|21|8|9|1 portion=100|
us-vermicelli-made-from-soy|Vermicelli, made from soy|PP|331|0.1|82.3|0.1|1 portion=100|
us-vitasoy-usa-azumaya-extra-firm-tofu|Vitasoy USA Azumaya, Extra Firm Tofu|PP|88|10.1|1.5|4.6|1 portion=100|
us-vitasoy-usa-azumaya-firm-tofu|Vitasoy USA Azumaya, Firm Tofu|PP|80|9.1|1.5|4.2|1 portion=100|
us-vitasoy-usa-azumaya-silken-tofu|Vitasoy USA Azumaya, Silken Tofu|PP|43|4.8|0.6|2.4|1 portion=100|
us-vitasoy-usa-nasoya-lite-firm-tofu|Vitasoy USA, Nasoya Lite Firm Tofu|PP|54|8.3|1.3|1.7|1 portion=100|
us-vitasoy-usa-nasoya-lite-silken-tofu|Vitasoy USA Nasoya, Lite Silken Tofu|PP|43|8.2|0|1.1|1 portion=100|
us-vitasoy-usa-organic-nasoya-extra-firm-tofu|Vitasoy USA, Organic Nasoya Extra Firm Tofu|PP|98|10.1|2.6|5.2|1 portion=100|
us-vitasoy-usa-organic-nasoya-firm-tofu|Vitasoy USA, Organic Nasoya Firm Tofu|PP|84|8.9|2.3|4.4|1 portion=100|
us-vitasoy-usa-organic-nasoya-silken-tofu|Vitasoy USA, Organic Nasoya Silken Tofu|PP|47|4.8|1.4|2.5|1 portion=100|
us-vitasoy-usa-organic-nasoya-soft-tofu|Vitasoy USA Organic Nasoya, Soft Tofu|PP|70|8.8|0.7|3.5|1 portion=100|
us-vitasoy-usa-organic-nasoya-sprouted-tofu-plus-su|Vitasoy USA Organic Nasoya Sprouted, Tofu Plus Super Firm|PP|115|13.2|2.2|5.9|1 portion=100|
us-vitasoy-usa-organic-nasoya-super-firm-cubed-tofu|Vitasoy USA, Organic Nasoya Super Firm Cubed Tofu|PP|118|12.4|2.8|6.3|1 portion=100|
us-vitasoy-usa-organic-nasoya-tofu-plus-extra-firm|Vitasoy USA Organic Nasoya, Tofu Plus Extra Firm|PP|92|10.2|1.8|4.9|1 portion=100|
us-vitasoy-usa-organic-nasoya-tofu-plus-firm|Vitasoy USA Organic Nasoya, Tofu Plus Firm|PP|74|9.2|1.7|3.4|1 portion=100|
us-vitasoy-usa-vitasoy-light-vanilla-soymilk|Vitasoy USA, Vitasoy Light Vanilla Soymilk|PP|30|1.6|4.1|0.8|1 portion=100|
us-vitasoy-usa-vitasoy-organic-classic-original-soy|Vitasoy USA, Vitasoy Organic Classic Original Soymilk|PP|47|3.2|4.5|1.8|1 portion=100|
us-vitasoy-usa-vitasoy-organic-creamy-original-soym|Vitasoy USA, Vitasoy Organic Creamy Original Soymilk|PP|44|2.9|4.5|1.6|1 portion=100|
us-winged-beans-mature-seeds-cooked-boiled|Winged beans, mature seeds, cooked, boiled|PP|147|10.6|14.9|5.8|1 cup=170;1/2 cup=85|
us-winged-beans-mature-seeds-raw|Winged beans, mature seeds, raw|PP|409|29.7|41.7|16.3|1 portion=100|
us-yardlong-beans-mature-seeds-cooked-boiled|Yardlong beans, mature seeds, cooked, boiled|PP|118|8.3|21.1|0.5|1 cup=170;1/2 cup=85|
us-yardlong-beans-mature-seeds-raw|Yardlong beans, mature seeds, raw|PP|347|24.3|61.9|1.3|1 portion=100|
us-yokan-prepared-from-adzuki-beans-and-sugar|Yokan, prepared from adzuki beans and sugar|PP|260|3.3|60.7|0.1|1 portion=100|
us-alfalfa-seeds-sprouted-raw|Alfalfa seeds, sprouted, raw|VG|23|4|2.1|0.7|1 cup=90;1 side=80|
us-amaranth-leaves-cooked-boiled-drained|Amaranth leaves, cooked, boiled, drained|VG|21|2.1|4.1|0.2|1 cup=90;1 side=80|
us-amaranth-leaves-raw|Amaranth leaves, raw|VG|23|2.5|4|0.3|1 cup=90;1 side=80|
us-arrowhead-cooked-boiled-drained|Arrowhead, cooked, boiled, drained|VG|78|4.5|16.1|0.1|1 cup=90;1 side=80|
us-arrowhead-raw|Arrowhead, raw|VG|99|5.3|20.2|0.3|1 cup=90;1 side=80|
us-arrowroot-raw|Arrowroot, raw|VG|65|4.2|13.4|0.2|1 cup=90;1 side=80|
us-artichokes-globe-or-french-cooked-boiled-drained|Artichokes, (globe or french), cooked, boiled, drained|VG|53|2.9|12|0.3|1 cup=90;1 side=80|
us-artichokes-globe-or-french-frozen-cooked-boiled|Artichokes, (globe or french), frozen, cooked, boiled|VG|45|3.1|9.2|0.5|1 cup=90;1 side=80|
us-artichokes-globe-or-french-raw|Artichokes, (globe or french), raw|VG|47|3.3|10.5|0.2|1 cup=90;1 side=80|
us-arugula-raw|Arugula, raw|VG|25|2.6|3.7|0.7|1 cup=90;1 side=80|
us-asparagus-canned-drained-solids|Asparagus, canned, drained solids|VG|19|2.1|2.5|0.7|1 cup=90;1 side=80|
us-asparagus-cooked-boiled-drained|Asparagus, cooked, boiled, drained|VG|22|2.4|4.1|0.2|1 cup=90;1 side=80|
us-asparagus-frozen-cooked-boiled-drained|Asparagus, frozen, cooked, boiled, drained|VG|18|3|1.9|0.4|1 cup=90;1 side=80|
us-asparagus-raw|Asparagus, raw|VG|20|2.2|3.9|0.1|1 cup=90;1 side=80|
us-balsam-pear-bitter-gourd-leafy-tips-cooked-boile|Balsam-pear (bitter gourd), leafy tips, cooked, boiled, drained|VG|34|3.6|6.7|0.2|1 cup=90;1 side=80|
us-balsam-pear-bitter-gourd-leafy-tips-raw|Balsam-pear (bitter gourd), leafy tips, raw|VG|30|5.3|3.3|0.7|1 cup=90;1 side=80|
us-balsam-pear-bitter-gourd-pods-cooked-boiled-drai|Balsam-pear (bitter gourd), pods, cooked, boiled, drained|VG|19|0.8|4.3|0.2|1 cup=90;1 side=80|
us-balsam-pear-bitter-gourd-pods-raw|Balsam-pear (bitter gourd), pods, raw|VG|17|1|3.7|0.2|1 cup=90;1 side=80|
us-bamboo-shoots-canned-drained-solids|Bamboo shoots, canned, drained solids|VG|19|1.7|3.2|0.4|1 cup=90;1 side=80|
us-bamboo-shoots-cooked-boiled-drained|Bamboo shoots, cooked, boiled, drained|VG|12|1.5|1.9|0.2|1 cup=90;1 side=80|
us-bamboo-shoots-raw|Bamboo shoots, raw|VG|27|2.6|5.2|0.3|1 cup=90;1 side=80|
us-fava-beans-in-pod-raw|Fava beans, in pod, raw|VG|88|7.9|17.6|0.7|1 cup=90;1 side=80|
us-mung-beans-mature-seeds-sprouted-canned|Mung beans, mature seeds, sprouted, canned|VG|12|1.4|2.1|0.1|1 cup=90;1 side=80|
us-navy-beans-mature-seeds-sprouted-cooked|Navy beans, mature seeds, sprouted, cooked|VG|78|7.1|15|0.8|1 cup=90;1 side=80|
us-navy-beans-mature-seeds-sprouted-raw|Navy beans, mature seeds, sprouted, raw|VG|67|6.2|13.1|0.7|1 cup=90;1 side=80|
us-pinto-beans-immature-seeds-frozen-cooked|Pinto beans, immature seeds, frozen, cooked|VG|162|9.3|30.9|0.5|1 cup=90;1 side=80|
us-pinto-beans-mature-seeds-sprouted-cooked|Pinto beans, mature seeds, sprouted, cooked|VG|22|1.9|4.1|0.3|1 cup=90;1 side=80|
us-pinto-beans-mature-seeds-sprouted-raw|Pinto beans, mature seeds, sprouted, raw|VG|62|5.3|11.6|0.9|1 cup=90;1 side=80|
us-snap-beans-canned-all-styles-seasoned|Snap beans, canned, all styles, seasoned|VG|16|0.8|3.5|0.2|1 cup=90;1 side=80|
us-snap-beans-green-canned-regular-pack|Snap beans, green, canned, regular pack|VG|15|0.7|3.3|0.2|1 cup=90;1 side=80|
us-snap-beans-green-cooked-boiled|Snap beans, green, cooked, boiled|VG|35|1.9|7.9|0.3|1 cup=90;1 side=80|
us-snap-beans-green-frozen-all-styles|Snap beans, green, frozen, all styles|VG|33|1.8|7.5|0.2|1 cup=90;1 side=80|
us-snap-beans-green-frozen-cooked|Snap beans, green, frozen, cooked|VG|28|1.5|6.5|0.2|1 cup=90;1 side=80|
us-snap-beans-green-microwaved|Snap beans, green, microwaved|VG|33|2.3|6.4|0.5|1 cup=90;1 side=80|
us-snap-beans-green-raw|Snap beans, green, raw|VG|31|1.8|7|0.2|1 cup=90;1 side=80|
us-snap-beans-yellow-canned-regular-pack|Snap beans, yellow, canned, regular pack|VG|15|0.8|3.5|0.1|1 cup=90;1 side=80|
us-snap-beans-yellow-cooked-boiled|Snap beans, yellow, cooked, boiled|VG|35|1.9|7.9|0.3|1 cup=90;1 side=80|
us-snap-beans-yellow-frozen-all-styles|Snap beans, yellow, frozen, all styles|VG|33|1.8|7.6|0.2|1 cup=90;1 side=80|
us-snap-beans-yellow-frozen-cooked|Snap beans, yellow, frozen, cooked|VG|28|1.5|6.5|0.2|1 cup=90;1 side=80|
us-snap-beans-yellow-raw|Snap beans, yellow, raw|VG|31|1.8|7.1|0.1|1 cup=90;1 side=80|
us-beet-greens-cooked-boiled-drained|Beet greens, cooked, boiled, drained|VG|27|2.6|5.5|0.2|1 cup=90;1 side=80|
us-beet-greens-raw|Beet greens, raw|VG|22|2.2|4.3|0.1|1 cup=90;1 side=80|
us-beets-canned-drained-solids|Beets, canned, drained solids|VG|31|0.9|7.2|0.1|1 cup=90;1 side=80|
us-beets-cooked-boiled-drained|Beets, cooked, boiled, drained|VG|44|1.7|10|0.2|1 cup=90;1 side=80|
us-beets-raw|Beets, raw|VG|43|1.6|9.6|0.2|1 cup=90;1 side=80|
us-borage-cooked-boiled-drained|Borage, cooked, boiled, drained|VG|25|2.1|3.6|0.8|1 cup=90;1 side=80|
us-borage-raw|Borage, raw|VG|21|1.8|3.1|0.7|1 cup=90;1 side=80|
us-broadbeans-immature-seeds-cooked-boiled-drained|Broadbeans, immature seeds, cooked, boiled, drained|VG|62|4.8|10.1|0.5|1 cup=90;1 side=80|
us-broadbeans-immature-seeds-raw|Broadbeans, immature seeds, raw|VG|72|5.6|11.7|0.6|1 cup=90;1 side=80|
us-broccoli-chinese-cooked|Broccoli, chinese, cooked|VG|22|1.1|3.8|0.7|1 cup=90;1 side=80|
us-broccoli-chinese-raw|Broccoli, chinese, raw|VG|26|1.2|4.7|0.8|1 cup=90;1 side=80|
us-broccoli-cooked-boiled-drained|Broccoli, cooked, boiled, drained|VG|35|2.4|7.2|0.4|1 cup=90;1 side=80|
us-broccoli-flower-clusters-raw|Broccoli, flower clusters, raw|VG|28|3|5.1|0.4|1 cup=90;1 side=80|
us-broccoli-frozen-chopped-cooked-boiled|Broccoli, frozen, chopped, cooked, boiled|VG|28|3.1|5.4|0.1|1 cup=90;1 side=80|
us-broccoli-leaves-raw|Broccoli, leaves, raw|VG|28|3|5.1|0.4|1 cup=90;1 side=80|
us-broccoli-raab-cooked|Broccoli raab, cooked|VG|25|3.8|3.1|0.5|1 cup=90;1 side=80|
us-broccoli-raab-raw|Broccoli raab, raw|VG|22|3.2|2.9|0.5|1 cup=90;1 side=80|
us-broccoli-raw|Broccoli, raw|VG|34|2.8|6.6|0.4|1 cup=90;1 side=80|
us-broccoli-stalks-raw|Broccoli, stalks, raw|VG|28|3|5.2|0.4|1 cup=90;1 side=80|
us-brussels-sprouts-cooked-boiled-drained|Brussels sprouts, cooked, boiled, drained|VG|36|2.6|7.1|0.5|1 cup=90;1 side=80|
us-brussels-sprouts-frozen-cooked-boiled-drained|Brussels sprouts, frozen, cooked, boiled, drained|VG|42|3.6|8.3|0.4|1 cup=90;1 side=80|
us-brussels-sprouts-raw|Brussels sprouts, raw|VG|43|3.4|9|0.3|1 cup=90;1 side=80|
us-burdock-root-cooked-boiled-drained|Burdock root, cooked, boiled, drained|VG|88|2.1|21.2|0.1|1 cup=90;1 side=80|
us-burdock-root-raw|Burdock root, raw|VG|72|1.5|17.3|0.2|1 cup=90;1 side=80|
us-butterbur-canned|Butterbur, canned|VG|3|0.1|0.4|0.1|1 cup=90;1 side=80|
us-butterbur-cooked-boiled-drained|Butterbur, cooked, boiled, drained|VG|8|0.2|2.2|0|1 cup=90;1 side=80|
us-butterbur-fuki-raw|Butterbur, (fuki), raw|VG|14|0.4|3.6|0|1 cup=90;1 side=80|
us-cabbage-chinese-pak-choi-cooked-boiled-drained|Cabbage, chinese (pak-choi), cooked, boiled, drained|VG|12|1.6|1.8|0.2|1 cup=90;1 side=80|
us-cabbage-chinese-pak-choi-raw|Cabbage, chinese (pak-choi), raw|VG|13|1.5|2.2|0.2|1 cup=90;1 side=80|
us-cabbage-chinese-pe-tsai-cooked-boiled-drained|Cabbage, chinese (pe-tsai), cooked, boiled, drained|VG|14|1.5|2.4|0.2|1 cup=90;1 side=80|
us-cabbage-chinese-pe-tsai-raw|Cabbage, chinese (pe-tsai), raw|VG|16|1.2|3.2|0.2|1 cup=90;1 side=80|
us-cabbage-common-cooked-boiled-drained|Cabbage, common, cooked, boiled, drained|VG|23|1.3|5.5|0.1|1 cup=90;1 side=80|
us-cabbage-common-danish-domestic-and-pointed-types|Cabbage, common (danish, domestic, and pointed types)|VG|24|1.2|5.4|0.2|1 cup=90;1 side=80|freshly harvest
us-cabbage-common-danish-domestic-and-pointed-types-2|Cabbage, common (danish, domestic, and pointed types), stored|VG|24|1.2|5.4|0.2|1 cup=90;1 side=80|
us-cabbage-cooked-boiled-drained|Cabbage, cooked, boiled, drained|VG|23|1.3|5.5|0.1|1 cup=90;1 side=80|
us-cabbage-japanese-style-fresh-pickled|Cabbage, japanese style, fresh, pickled|VG|30|1.6|5.7|0.1|1 cup=90;1 side=80|
us-cabbage-kimchi|Cabbage, kimchi|VG|15|1.1|2.4|0.5|1 cup=90;1 side=80|
us-cabbage-mustard-salted|Cabbage, mustard, salted|VG|28|1.1|5.6|0.1|1 cup=90;1 side=80|
us-cabbage-napa-cooked|Cabbage, napa, cooked|VG|12|1.1|2.2|0.2|1 cup=90;1 side=80|
us-cabbage-raw|Cabbage, raw|VG|25|1.3|5.8|0.1|1 cup=90;1 side=80|
us-cabbage-red-cooked-boiled-drained|Cabbage, red, cooked, boiled, drained|VG|29|1.5|6.9|0.1|1 cup=90;1 side=80|
us-cabbage-red-raw|Cabbage, red, raw|VG|31|1.4|7.4|0.2|1 cup=90;1 side=80|
us-cabbage-savoy-cooked-boiled-drained|Cabbage, savoy, cooked, boiled, drained|VG|24|1.8|5.4|0.1|1 cup=90;1 side=80|
us-cabbage-savoy-raw|Cabbage, savoy, raw|VG|27|2|6.1|0.1|1 cup=90;1 side=80|
us-cardoon-cooked-boiled-drained|Cardoon, cooked, boiled, drained|VG|22|0.8|5.3|0.1|1 cup=90;1 side=80|
us-cardoon-raw|Cardoon, raw|VG|17|0.7|4.1|0.1|1 cup=90;1 side=80|
us-carrot-dehydrated|Carrot, dehydrated|VG|341|8.1|79.6|1.5|1 cup=90;1 side=80|
us-carrot-juice-canned|Carrot juice, canned|VG|40|1|9.3|0.2|1 cup=90;1 side=80|
us-carrots-baby-raw|Carrots, baby, raw|VG|35|0.6|8.2|0.1|1 cup=90;1 side=80|
us-carrots-canned-regular-pack-drained-solids|Carrots, canned, regular pack, drained solids|VG|25|0.6|5.5|0.2|1 cup=90;1 side=80|
us-carrots-cooked-boiled-drained|Carrots, cooked, boiled, drained|VG|35|0.8|8.2|0.2|1 cup=90;1 side=80|
us-carrots-frozen-cooked-boiled-drained|Carrots, frozen, cooked, boiled, drained|VG|37|0.6|7.7|0.7|1 cup=90;1 side=80|
us-carrots-raw|Carrots, raw|VG|41|0.9|9.6|0.2|1 cup=90;1 side=80|
us-cassava-raw|Cassava, raw|VG|160|1.4|38.1|0.3|1 cup=90;1 side=80|
us-catsup|Catsup|VG|101|1|27.4|0.1|1 cup=90;1 side=80|
us-catsup-low-sodium|Catsup, low sodium|VG|101|1|27.4|0.1|1 cup=90;1 side=80|
us-cauliflower-cooked-boiled-drained|Cauliflower, cooked, boiled, drained|VG|23|1.8|4.1|0.5|1 cup=90;1 side=80|
us-cauliflower-frozen-cooked-boiled-drained|Cauliflower, frozen, cooked, boiled, drained|VG|19|1.6|3.8|0.2|1 cup=90;1 side=80|
us-cauliflower-green-raw|Cauliflower, green, raw|VG|31|3|6.1|0.3|1 cup=90;1 side=80|
us-cauliflower-raw|Cauliflower, raw|VG|25|1.9|5|0.3|1 cup=90;1 side=80|
us-celeriac-cooked-boiled-drained|Celeriac, cooked, boiled, drained|VG|27|1|5.9|0.2|1 cup=90;1 side=80|
us-celeriac-raw|Celeriac, raw|VG|42|1.5|9.2|0.3|1 cup=90;1 side=80|
us-celery-cooked-boiled-drained|Celery, cooked, boiled, drained|VG|18|0.8|4|0.2|1 cup=90;1 side=80|
us-celery-raw|Celery, raw|VG|14|0.7|3|0.2|1 cup=90;1 side=80|
us-celtuce-raw|Celtuce, raw|VG|18|0.9|3.7|0.3|1 cup=90;1 side=80|
us-chard-swiss-cooked-boiled-drained|Chard, swiss, cooked, boiled, drained|VG|20|1.9|4.1|0.1|1 cup=90;1 side=80|
us-chard-swiss-raw|Chard, swiss, raw|VG|19|1.8|3.7|0.2|1 cup=90;1 side=80|
us-chayote-fruit-cooked-boiled-drained|Chayote, fruit, cooked, boiled, drained|VG|24|0.6|5.1|0.5|1 cup=90;1 side=80|
us-chayote-fruit-raw|Chayote, fruit, raw|VG|19|0.8|4.5|0.1|1 cup=90;1 side=80|
us-chicory-greens-raw|Chicory greens, raw|VG|23|1.7|4.7|0.3|1 cup=90;1 side=80|
us-chicory-roots-raw|Chicory roots, raw|VG|72|1.4|17.5|0.2|1 cup=90;1 side=80|
us-chicory-witloof-raw|Chicory, witloof, raw|VG|17|0.9|4|0.1|1 cup=90;1 side=80|
us-chives-freeze-dried|Chives, freeze-dried|VG|311|21.2|64.3|3.5|1 cup=90;1 side=80|
us-chives-raw|Chives, raw|VG|30|3.3|4.4|0.7|1 cup=90;1 side=80|
us-coriander-cilantro-leaves-raw|Coriander (cilantro) leaves, raw|VG|23|2.1|3.7|0.5|1 cup=90;1 side=80|
us-corn-pudding-home-prepared|Corn pudding, home prepared|VG|131|4.4|17|5|1 cup=90;1 side=80|
us-cornsalad-raw|Cornsalad, raw|VG|21|2|3.6|0.4|1 cup=90;1 side=80|
us-corn-sweet-white-canned-cream-style|Corn, sweet, white, canned, cream style|VG|74|1.7|18.6|0.4|1 cup=90;1 side=80|
us-corn-sweet-white-canned-vacuum-pack|Corn, sweet, white, canned, vacuum pack|VG|79|2.4|19.4|0.5|1 cup=90;1 side=80|
us-corn-sweet-white-canned-whole-kernel|Corn, sweet, white, canned, whole kernel|VG|64|2|15.4|0.5|1 cup=90;1 side=80|
us-corn-sweet-white-cooked-boiled|Corn, sweet, white, cooked, boiled|VG|97|3.3|21.7|1.4|1 cup=90;1 side=80|
us-corn-sweet-white-frozen-kernels-cut-off-cob|Corn, sweet, white, frozen, kernels cut off cob|VG|80|2.8|19.6|0.4|1 cup=90;1 side=80|
us-corn-sweet-white-frozen-kernels-on-cob|Corn, sweet, white, frozen, kernels on cob|VG|94|3.1|22.3|0.7|1 cup=90;1 side=80|
us-corn-sweet-white-raw|Corn, sweet, white, raw|VG|86|3.2|19|1.2|1 cup=90;1 side=80|
us-corn-sweet-yellow-canned-brine-pack|Corn, sweet, yellow, canned, brine pack|VG|61|2|13.9|0.8|1 cup=90;1 side=80|
us-corn-sweet-yellow-canned-cream-style|Corn, sweet, yellow, canned, cream style|VG|72|1.7|18.1|0.4|1 cup=90;1 side=80|
us-corn-sweet-yellow-canned-drained-solids|Corn, sweet, yellow, canned, drained solids|VG|64|2.2|13|1.4|1 cup=90;1 side=80|
us-corn-sweet-yellow-canned-vacuum-pack|Corn, sweet, yellow, canned, vacuum pack|VG|79|2.4|19.4|0.5|1 cup=90;1 side=80|
us-corn-sweet-yellow-canned-whole-kernel|Corn, sweet, yellow, canned, whole kernel|VG|67|2.3|14.3|1.2|1 cup=90;1 side=80|
us-corn-sweet-yellow-cooked-boiled|Corn, sweet, yellow, cooked, boiled|VG|96|3.4|21|1.5|1 cup=90;1 side=80|
us-corn-sweet-yellow-frozen-kernels|Corn, sweet, yellow, frozen, kernels|VG|79|2.6|18.7|0.7|1 cup=90;1 side=80|
us-corn-sweet-yellow-frozen-kernels-cut-off-cob|Corn, sweet, yellow, frozen, kernels cut off cob|VG|88|3|20.7|0.8|1 cup=90;1 side=80|
us-corn-sweet-yellow-frozen-kernels-on-cob|Corn, sweet, yellow, frozen, kernels on cob|VG|94|3.1|22.3|0.7|1 cup=90;1 side=80|
us-corn-sweet-yellow-raw|Corn, sweet, yellow, raw|VG|86|3.3|18.7|1.4|1 cup=90;1 side=80|
us-corn-yellow-whole-kernel-frozen-microwaved|Corn, yellow, whole kernel, frozen, microwaved|VG|113|3.6|25.9|1.4|1 cup=90;1 side=80|
us-cowpeas-blackeyes-immature-seeds-cooked-boiled-d|Cowpeas (blackeyes), immature seeds, cooked, boiled, drained|VG|94|3.2|19.7|0.4|1 cup=90;1 side=80|
us-cowpeas-blackeyes-immature-seeds-frozen-cooked-b|Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled|VG|131|8.5|23.5|0.7|1 cup=90;1 side=80|
us-cowpeas-blackeyes-immature-seeds-raw|Cowpeas (blackeyes), immature seeds, raw|VG|90|3|18.8|0.4|1 cup=90;1 side=80|
us-cowpeas-leafy-tips-cooked-boiled-drained|Cowpeas, leafy tips, cooked, boiled, drained|VG|22|4.7|2.8|0.1|1 cup=90;1 side=80|
us-cowpeas-leafy-tips-raw|Cowpeas, leafy tips, raw|VG|29|4.1|4.8|0.3|1 cup=90;1 side=80|
us-cowpeas-young-pods-with-seeds-cooked-boiled-drai|Cowpeas, young pods with seeds, cooked, boiled, drained|VG|34|2.6|7|0.3|1 cup=90;1 side=80|
us-cowpeas-young-pods-with-seeds-raw|Cowpeas, young pods with seeds, raw|VG|44|3.3|9.5|0.3|1 cup=90;1 side=80|
us-cress-garden-cooked-boiled-drained|Cress, garden, cooked, boiled, drained|VG|23|1.9|3.8|0.6|1 cup=90;1 side=80|
us-cress-garden-raw|Cress, garden, raw|VG|32|2.6|5.5|0.7|1 cup=90;1 side=80|
us-cucumber-peeled-raw|Cucumber, peeled, raw|VG|10|0.6|2.2|0.2|1 cup=90;1 side=80|
us-cucumber-with-peel-raw|Cucumber, with peel, raw|VG|15|0.7|3.6|0.1|1 cup=90;1 side=80|
us-dandelion-greens-cooked-boiled-drained|Dandelion greens, cooked, boiled, drained|VG|33|2|6.4|0.6|1 cup=90;1 side=80|
us-dandelion-greens-raw|Dandelion greens, raw|VG|45|2.7|9.2|0.7|1 cup=90;1 side=80|
us-dock-cooked-boiled-drained|Dock, cooked, boiled, drained|VG|20|1.8|2.9|0.6|1 cup=90;1 side=80|
us-dock-raw|Dock, raw|VG|22|2|3.2|0.7|1 cup=90;1 side=80|
us-drumstick-leaves-cooked-boiled-drained|Drumstick leaves, cooked, boiled, drained|VG|60|5.3|11.2|0.9|1 cup=90;1 side=80|
us-drumstick-leaves-raw|Drumstick leaves, raw|VG|64|9.4|8.3|1.4|1 cup=90;1 side=80|
us-drumstick-pods-cooked-boiled-drained|Drumstick pods, cooked, boiled, drained|VG|36|2.1|8.2|0.2|1 cup=90;1 side=80|
us-drumstick-pods-raw|Drumstick pods, raw|VG|37|2.1|8.5|0.2|1 cup=90;1 side=80|
us-edamame-frozen-prepared|Edamame, frozen, prepared|VG|121|11.9|8.9|5.2|1 cup=90;1 side=80|
us-eggplant-cooked-boiled-drained|Eggplant, cooked, boiled, drained|VG|35|0.8|8.7|0.2|1 cup=90;1 side=80|
us-eggplant-pickled|Eggplant, pickled|VG|49|0.9|9.8|0.7|1 cup=90;1 side=80|
us-eggplant-raw|Eggplant, raw|VG|25|1|5.9|0.2|1 cup=90;1 side=80|
us-endive-raw|Endive, raw|VG|17|1.3|3.4|0.2|1 cup=90;1 side=80|
us-epazote-raw|Epazote, raw|VG|32|0.3|7.4|0.5|1 cup=90;1 side=80|
us-eppaw-raw|Eppaw, raw|VG|150|4.6|31.7|1.8|1 cup=90;1 side=80|
us-fennel-bulb-raw|Fennel, bulb, raw|VG|31|1.2|7.3|0.2|1 cup=90;1 side=80|
us-fiddlehead-ferns-raw|Fiddlehead ferns, raw|VG|34|4.6|5.5|0.4|1 cup=90;1 side=80|
us-fireweed-leaves-raw|Fireweed, leaves, raw|VG|103|4.7|19.2|2.8|1 cup=90;1 side=80|
us-garlic-raw|Garlic, raw|VG|149|6.4|33.1|0.5|1 cup=90;1 side=80|
us-ginger-root-pickled-canned-with-artificial-sweet|Ginger root, pickled, canned, with artificial sweetener|VG|20|0.3|4.8|0.1|1 cup=90;1 side=80|
us-ginger-root-raw|Ginger root, raw|VG|80|1.8|17.8|0.8|1 cup=90;1 side=80|
us-gourd-dishcloth-towelgourd-cooked-boiled-drained|Gourd, dishcloth (towelgourd), cooked, boiled, drained|VG|54|0.7|13.8|0.3|1 cup=90;1 side=80|
us-gourd-dishcloth-towelgourd-raw|Gourd, dishcloth (towelgourd), raw|VG|20|1.2|4.4|0.2|1 cup=90;1 side=80|
us-gourd-white-flowered-calabash-cooked-boiled-drai|Gourd, white-flowered (calabash), cooked, boiled, drained|VG|13|0.6|3.1|0|1 cup=90;1 side=80|
us-gourd-white-flowered-calabash-raw|Gourd, white-flowered (calabash), raw|VG|14|0.6|3.4|0|1 cup=90;1 side=80|
us-grape-leaves-canned|Grape leaves, canned|VG|69|4.3|11.7|2|1 cup=90;1 side=80|
us-grape-leaves-raw|Grape leaves, raw|VG|93|5.6|17.3|2.1|1 cup=90;1 side=80|
us-hearts-of-palm-canned|Hearts of palm, canned|VG|28|2.5|4.6|0.6|1 cup=90;1 side=80|
us-hearts-of-palm-raw|Hearts of palm, raw|VG|115|2.7|25.6|0.2|1 cup=90;1 side=80|
us-hyacinth-beans-immature-seeds-cooked-boiled-drai|Hyacinth-beans, immature seeds, cooked, boiled, drained|VG|50|3|9.2|0.3|1 cup=90;1 side=80|
us-hyacinth-beans-immature-seeds-raw|Hyacinth-beans, immature seeds, raw|VG|46|2.1|9.2|0.2|1 cup=90;1 side=80|
us-jerusalem-artichokes-raw|Jerusalem-artichokes, raw|VG|73|2|17.4|0|1 cup=90;1 side=80|
us-jew-s-ear-pepeao-raw|Jew's ear, (pepeao), raw|VG|25|0.5|6.8|0|1 cup=90;1 side=80|
us-jute-potherb-cooked-boiled-drained|Jute, potherb, cooked, boiled, drained|VG|37|3.7|7.3|0.2|1 cup=90;1 side=80|
us-jute-potherb-raw|Jute, potherb, raw|VG|34|4.7|5.8|0.3|1 cup=90;1 side=80|
us-kale-cooked-boiled-drained|Kale, cooked, boiled, drained|VG|36|2.9|5.3|1.2|1 cup=90;1 side=80|
us-kale-frozen-cooked-boiled-drained|Kale, frozen, cooked, boiled, drained|VG|36|2.9|5.3|1.2|1 cup=90;1 side=80|
us-kale-raw|Kale, raw|VG|35|2.9|4.4|1.5|1 cup=90;1 side=80|
us-kanpyo-dried-gourd-strips|Kanpyo, (dried gourd strips)|VG|258|8.6|65|0.6|1 cup=90;1 side=80|
us-kohlrabi-cooked-boiled-drained|Kohlrabi, cooked, boiled, drained|VG|29|1.8|6.7|0.1|1 cup=90;1 side=80|
us-kohlrabi-raw|Kohlrabi, raw|VG|27|1.7|6.2|0.1|1 cup=90;1 side=80|
us-lambsquarters-cooked-boiled-drained|Lambsquarters, cooked, boiled, drained|VG|32|3.2|5|0.7|1 cup=90;1 side=80|
us-lambsquarters-raw|Lambsquarters, raw|VG|43|4.2|7.3|0.8|1 cup=90;1 side=80|
us-leeks-bulb-and-lower-leaf-portion-cooked-boiled-|Leeks, (bulb and lower leaf-portion), cooked, boiled, drained|VG|31|0.8|7.6|0.2|1 cup=90;1 side=80|
us-leeks-bulb-and-lower-leaf-portion-freeze-dried|Leeks, (bulb and lower-leaf portion), freeze-dried|VG|321|15.2|74.7|2.1|1 cup=90;1 side=80|
us-leeks-bulb-and-lower-leaf-portion-raw|Leeks, (bulb and lower leaf-portion), raw|VG|61|1.5|14.2|0.3|1 cup=90;1 side=80|
us-lemon-grass-citronella-raw|Lemon grass (citronella), raw|VG|99|1.8|25.3|0.5|1 cup=90;1 side=80|
us-sprouted-lentils-cooked-stir-fried|Sprouted lentils, cooked, stir-fried|VG|101|8.8|21.3|0.5|1 cup=90;1 side=80|
us-sprouted-lentils-raw|Sprouted lentils, raw|VG|106|9|22.1|0.6|1 cup=90;1 side=80|
us-lettuce-butterhead-raw|Lettuce, butterhead, raw|VG|13|1.4|2.2|0.2|1 cup=90;1 side=80|
us-lettuce-cos-or-romaine-raw|Lettuce, cos or romaine, raw|VG|17|1.2|3.3|0.3|1 cup=90;1 side=80|
us-lettuce-green-leaf-raw|Lettuce, green leaf, raw|VG|15|1.4|2.9|0.2|1 cup=90;1 side=80|
us-lettuce-iceberg-raw|Lettuce, iceberg, raw|VG|14|0.9|3|0.1|1 cup=90;1 side=80|
us-lettuce-red-leaf-raw|Lettuce, red leaf, raw|VG|13|1.3|2.3|0.2|1 cup=90;1 side=80|
us-lima-beans-immature-seeds-cooked-boiled-drained|Lima beans, immature seeds, cooked, boiled, drained|VG|123|6.8|23.6|0.3|1 cup=90;1 side=80|
us-lima-beans-immature-seeds-frozen-baby-cooked|Lima beans, immature seeds, frozen, baby, cooked|VG|105|6.7|19.5|0.3|1 cup=90;1 side=80|
us-lima-beans-immature-seeds-frozen-fordhook-cooked|Lima beans, immature seeds, frozen, fordhook, cooked|VG|103|6.1|19.3|0.3|1 cup=90;1 side=80|
us-lima-beans-immature-seeds-raw|Lima beans, immature seeds, raw|VG|113|6.8|20.2|0.9|1 cup=90;1 side=80|
us-lotus-root-cooked-boiled-drained|Lotus root, cooked, boiled, drained|VG|66|1.6|16|0.1|1 cup=90;1 side=80|
us-lotus-root-raw|Lotus root, raw|VG|74|2.6|17.2|0.1|1 cup=90;1 side=80|
us-malabar-spinach-cooked|Malabar spinach, cooked|VG|23|3|2.7|0.8|1 cup=90;1 side=80|
us-mountain-yam-hawaii-cooked-steamed|Mountain yam, hawaii, cooked, steamed|VG|82|1.7|20|0.1|1 cup=90;1 side=80|
us-mountain-yam-hawaii-raw|Mountain yam, hawaii, raw|VG|67|1.3|16.3|0.1|1 cup=90;1 side=80|
us-mung-beans-mature-seeds-sprouted-cooked-boiled|Mung beans, mature seeds, sprouted, cooked, boiled|VG|21|2|4.2|0.1|1 cup=90;1 side=80|
us-mung-beans-mature-seeds-sprouted-cooked-stir-fri|Mung beans, mature seeds, sprouted, cooked, stir-fried|VG|50|4.3|10.6|0.2|1 cup=90;1 side=80|
us-mung-beans-mature-seeds-sprouted-raw|Mung beans, mature seeds, sprouted, raw|VG|30|3|5.9|0.2|1 cup=90;1 side=80|
us-mushrooms-brown-italian-or-crimini|Mushrooms, brown, italian, or crimini|VG|22|2.5|4.3|0.1|1 cup=90;1 side=80|exposed light ultraviolet
us-mushrooms-brown-italian-or-crimini-raw|Mushrooms, brown, italian, or crimini, raw|VG|22|2.5|4.3|0.1|1 cup=90;1 side=80|
us-mushrooms-canned-drained-solids|Mushrooms, canned, drained solids|VG|25|1.9|5.1|0.3|1 cup=90;1 side=80|
us-mushrooms-chanterelle-raw|Mushrooms, Chanterelle, raw|VG|32|1.5|6.9|0.5|1 cup=90;1 side=80|
us-mushrooms-enoki-raw|Mushrooms, enoki, raw|VG|37|2.7|7.8|0.3|1 cup=90;1 side=80|
us-mushrooms-maitake-raw|Mushrooms, maitake, raw|VG|31|1.9|7|0.2|1 cup=90;1 side=80|
us-mushrooms-morel-raw|Mushrooms, morel, raw|VG|31|3.1|5.1|0.6|1 cup=90;1 side=80|
us-mushrooms-oyster-raw|Mushrooms, oyster, raw|VG|33|3.3|6.1|0.4|1 cup=90;1 side=80|
us-mushrooms-portabella-exposed-to-ultraviolet-ligh|Mushrooms, portabella, exposed to ultraviolet light, grilled|VG|29|3.3|4.4|0.6|1 cup=90;1 side=80|
us-mushrooms-portabella-exposed-to-ultraviolet-ligh-2|Mushrooms, portabella, exposed to ultraviolet light, raw|VG|22|2.1|3.9|0.4|1 cup=90;1 side=80|
us-mushrooms-portabella-grilled|Mushrooms, portabella, grilled|VG|29|3.3|4.4|0.6|1 cup=90;1 side=80|
us-mushrooms-portabella-raw|Mushrooms, portabella, raw|VG|22|2.1|3.9|0.4|1 cup=90;1 side=80|
us-mushrooms-shiitake-cooked|Mushrooms, shiitake, cooked|VG|56|1.6|14.4|0.2|1 cup=90;1 side=80|
us-mushrooms-shiitake-dried|Mushrooms, shiitake, dried|VG|296|9.6|75.4|1|1 cup=90;1 side=80|
us-mushrooms-shiitake-raw|Mushrooms, shiitake, raw|VG|34|2.2|6.8|0.5|1 cup=90;1 side=80|
us-mushrooms-shiitake-stir-fried|Mushrooms, shiitake, stir-fried|VG|39|3.5|7.7|0.4|1 cup=90;1 side=80|
us-mushrooms-straw-canned-drained-solids|Mushrooms, straw, canned, drained solids|VG|32|3.8|4.6|0.7|1 cup=90;1 side=80|
us-mushrooms-white-cooked-boiled-drained|Mushrooms, white, cooked, boiled, drained|VG|28|2.2|5.3|0.5|1 cup=90;1 side=80|
us-mushrooms-white-microwaved|Mushrooms, white, microwaved|VG|35|3.9|6|0.5|1 cup=90;1 side=80|
us-mushrooms-white-raw|Mushrooms, white, raw|VG|22|3.1|3.3|0.3|1 cup=90;1 side=80|
us-mushrooms-white-stir-fried|Mushrooms, white, stir-fried|VG|26|3.6|4|0.3|1 cup=90;1 side=80|
us-mushroom-white-exposed-to-ultraviolet-light-raw|Mushroom, white, exposed to ultraviolet light, raw|VG|22|3.1|3.3|0.3|1 cup=90;1 side=80|
us-mustard-greens-cooked-boiled-drained|Mustard greens, cooked, boiled, drained|VG|26|2.6|4.5|0.5|1 cup=90;1 side=80|
us-mustard-greens-frozen-cooked-boiled-drained|Mustard greens, frozen, cooked, boiled, drained|VG|19|2.3|3.1|0.3|1 cup=90;1 side=80|
us-mustard-greens-raw|Mustard greens, raw|VG|27|2.9|4.7|0.4|1 cup=90;1 side=80|
us-mustard-spinach-tendergreen-cooked-boiled-draine|Mustard spinach, (tendergreen), cooked, boiled, drained|VG|16|1.7|2.8|0.2|1 cup=90;1 side=80|
us-mustard-spinach-tendergreen-raw|Mustard spinach, (tendergreen), raw|VG|22|2.2|3.9|0.3|1 cup=90;1 side=80|
us-new-zealand-spinach-cooked-boiled-drained|New Zealand spinach, cooked, boiled, drained|VG|12|1.3|2.1|0.2|1 cup=90;1 side=80|
us-new-zealand-spinach-raw|New Zealand spinach, raw|VG|14|1.5|2.5|0.2|1 cup=90;1 side=80|
us-nopales-cooked|Nopales, cooked|VG|15|1.4|3.3|0.1|1 cup=90;1 side=80|
us-nopales-raw|Nopales, raw|VG|16|1.3|3.3|0.1|1 cup=90;1 side=80|
us-okra-cooked-boiled-drained|Okra, cooked, boiled, drained|VG|22|1.9|4.5|0.2|1 cup=90;1 side=80|
us-okra-frozen-cooked-boiled-drained|Okra, frozen, cooked, boiled, drained|VG|29|1.6|6.4|0.2|1 cup=90;1 side=80|
us-okra-raw|Okra, raw|VG|33|1.9|7.5|0.2|1 cup=90;1 side=80|
us-onion-rings-breaded-par-fried-frozen-prepared|Onion rings, breaded, par fried, frozen, prepared|VG|276|4.1|33.8|14.3|1 cup=90;1 side=80|
us-onions-cooked-boiled-drained|Onions, cooked, boiled, drained|VG|44|1.4|10.2|0.2|1 cup=90;1 side=80|
us-onions-dehydrated-flakes|Onions, dehydrated flakes|VG|349|9|83.3|0.5|1 cup=90;1 side=80|
us-onions-frozen-chopped-cooked-boiled|Onions, frozen, chopped, cooked, boiled|VG|28|0.8|6.6|0.1|1 cup=90;1 side=80|
us-onions-frozen-whole-cooked-boiled|Onions, frozen, whole, cooked, boiled|VG|28|0.7|6.7|0.1|1 cup=90;1 side=80|
us-onions-raw|Onions, raw|VG|40|1.1|9.3|0.1|1 cup=90;1 side=80|
us-onions-spring-or-scallions-raw|Onions, spring or scallions, raw|VG|32|1.8|7.3|0.2|1 cup=90;1 side=80|
us-onions-sweet-raw|Onions, sweet, raw|VG|32|0.8|7.6|0.1|1 cup=90;1 side=80|
us-onions-welsh-raw|Onions, welsh, raw|VG|34|1.9|6.5|0.4|1 cup=90;1 side=80|
us-onions-yellow-sauteed|Onions, yellow, sauteed|VG|123|1|7.9|10.8|1 cup=90;1 side=80|
us-onions-young-green-tops-only|Onions, young green, tops only|VG|27|1|5.7|0.5|1 cup=90;1 side=80|
us-parsley-freeze-dried|Parsley, freeze-dried|VG|271|31.3|42.4|5.2|1 cup=90;1 side=80|
us-parsley-fresh|Parsley, fresh|VG|36|3|6.3|0.8|1 cup=90;1 side=80|
us-parsnips-cooked-boiled-drained|Parsnips, cooked, boiled, drained|VG|71|1.3|17|0.3|1 cup=90;1 side=80|
us-parsnips-raw|Parsnips, raw|VG|75|1.2|18|0.3|1 cup=90;1 side=80|
us-peas-and-carrots-frozen-cooked-boiled-drained|Peas and carrots, frozen, cooked, boiled, drained|VG|48|3.1|10.1|0.4|1 cup=90;1 side=80|
us-peas-and-onions-frozen-cooked-boiled-drained|Peas and onions, frozen, cooked, boiled, drained|VG|45|2.5|8.6|0.2|1 cup=90;1 side=80|
us-peas-edible-podded-boiled-drained|Peas, edible-podded, boiled, drained|VG|42|3.3|7.1|0.2|1 cup=90;1 side=80|
us-peas-edible-podded-cooked-boiled-drained|Peas, edible-podded, cooked, boiled, drained|VG|40|3.3|6.5|0.2|1 cup=90;1 side=80|
us-peas-edible-podded-frozen-cooked-boiled|Peas, edible-podded, frozen, cooked, boiled|VG|50|3.5|8.4|0.4|1 cup=90;1 side=80|
us-peas-edible-podded-raw|Peas, edible-podded, raw|VG|42|2.8|7.6|0.2|1 cup=90;1 side=80|
us-peas-green-canned-drained-solids-rinsed-in-tap-w|Peas, green, canned, drained solids, rinsed in tap water|VG|71|4.3|11.8|1|1 cup=90;1 side=80|
us-peas-green-cooked-boiled-drained|Peas, green, cooked, boiled, drained|VG|84|5.4|15.6|0.2|1 cup=90;1 side=80|
us-peas-green-frozen-cooked-boiled|Peas, green, frozen, cooked, boiled|VG|78|5.2|14.3|0.3|1 cup=90;1 side=80|
us-peas-green-raw|Peas, green, raw|VG|81|5.4|14.5|0.4|1 cup=90;1 side=80|
us-peas-mature-seeds-sprouted-cooked-boiled|Peas, mature seeds, sprouted, cooked, boiled|VG|98|7.1|17.1|0.5|1 cup=90;1 side=80|
us-peas-mature-seeds-sprouted-raw|Peas, mature seeds, sprouted, raw|VG|124|8.8|27.1|0.7|1 cup=90;1 side=80|
us-pepeao-dried|Pepeao, dried|VG|298|4.8|81|0.4|1 cup=90;1 side=80|
us-pepper-banana-raw|Pepper, banana, raw|VG|27|1.7|5.4|0.5|1 cup=90;1 side=80|
us-peppers-ancho-dried|Peppers, ancho, dried|VG|281|11.9|51.4|8.2|1 cup=90;1 side=80|
us-peppers-chili-green-canned|Peppers, chili, green, canned|VG|21|0.7|4.6|0.3|1 cup=90;1 side=80|
us-peppers-hot-chile-sun-dried|Peppers, hot chile, sun-dried|VG|324|10.6|69.9|5.8|1 cup=90;1 side=80|
us-peppers-hot-chili-green-canned-pods|Peppers, hot chili, green, canned, pods|VG|21|0.9|5.1|0.1|1 cup=90;1 side=80|
us-peppers-hot-chili-green-raw|Peppers, hot chili, green, raw|VG|40|2|9.5|0.2|1 cup=90;1 side=80|
us-peppers-hot-chili-red-canned-excluding-seeds|Peppers, hot chili, red, canned, excluding seeds|VG|21|0.9|5.1|0.1|1 cup=90;1 side=80|
us-peppers-hot-chili-red-raw|Peppers, hot chili, red, raw|VG|40|1.9|8.8|0.4|1 cup=90;1 side=80|
us-peppers-hot-pickled-canned|Peppers, hot pickled, canned|VG|22|0.8|4.6|0.4|1 cup=90;1 side=80|
us-peppers-hungarian-raw|Peppers, hungarian, raw|VG|29|0.8|6.7|0.4|1 cup=90;1 side=80|
us-peppers-jalapeno-raw|Peppers, jalapeno, raw|VG|29|0.9|6.5|0.4|1 cup=90;1 side=80|
us-peppers-pasilla-dried|Peppers, pasilla, dried|VG|345|12.4|51.1|15.9|1 cup=90;1 side=80|
us-peppers-serrano-raw|Peppers, serrano, raw|VG|32|1.7|6.7|0.4|1 cup=90;1 side=80|
us-peppers-sweet-green-cooked-boiled|Peppers, sweet, green, cooked, boiled|VG|26|0.9|6.1|0.2|1 cup=90;1 side=80|
us-peppers-sweet-green-frozen-chopped|Peppers, sweet, green, frozen, chopped|VG|20|1.1|4.5|0.2|1 cup=90;1 side=80|
us-peppers-sweet-green-raw|Peppers, sweet, green, raw|VG|20|0.9|4.6|0.2|1 cup=90;1 side=80|
us-peppers-sweet-green-sauteed|Peppers, sweet, green, sauteed|VG|116|0.8|4.2|11.9|1 cup=90;1 side=80|
us-peppers-sweet-red-cooked-boiled|Peppers, sweet, red, cooked, boiled|VG|26|0.9|6.1|0.2|1 cup=90;1 side=80|
us-peppers-sweet-red-freeze-dried|Peppers, sweet, red, freeze-dried|VG|314|17.9|68.7|3|1 cup=90;1 side=80|
us-peppers-sweet-red-frozen-chopped|Peppers, sweet, red, frozen, chopped|VG|16|1|3.3|0.2|1 cup=90;1 side=80|
us-peppers-sweet-red-raw|Peppers, sweet, red, raw|VG|26|1|6|0.3|1 cup=90;1 side=80|
us-peppers-sweet-red-sauteed|Peppers, sweet, red, sauteed|VG|133|1|6.6|12.8|1 cup=90;1 side=80|
us-peppers-sweet-yellow-raw|Peppers, sweet, yellow, raw|VG|27|1|6.3|0.2|1 cup=90;1 side=80|
us-pickle-relish-hamburger|Pickle relish, hamburger|VG|129|0.6|34.5|0.5|1 cup=90;1 side=80|
us-pickle-relish-hot-dog|Pickle relish, hot dog|VG|91|1.5|23.4|0.5|1 cup=90;1 side=80|
us-pickle-relish-sweet|Pickle relish, sweet|VG|130|0.4|35.1|0.5|1 cup=90;1 side=80|
us-pickles-chowchow-with-cauliflower-onion-mustard-|Pickles, chowchow, with cauliflower onion mustard, sweet|VG|121|1.5|26.6|0.9|1 cup=90;1 side=80|
us-pickles-cucumber-dill-or-kosher-dill|Pickles, cucumber, dill or kosher dill|VG|12|0.5|2.4|0.3|1 cup=90;1 side=80|
us-pickles-cucumber-dill-reduced-sodium|Pickles, cucumber, dill, reduced sodium|VG|12|0.5|2.4|0.3|1 cup=90;1 side=80|
us-pickles-cucumber-sour|Pickles, cucumber, sour|VG|11|0.3|2.3|0.2|1 cup=90;1 side=80|
us-pickles-cucumber-sour-low-sodium|Pickles, cucumber, sour, low sodium|VG|11|0.3|2.3|0.2|1 cup=90;1 side=80|
us-pickles-cucumber-sweet|Pickles, cucumber, sweet|VG|91|0.6|21.2|0.4|1 cup=90;1 side=80|
us-pickles-cucumber-sweet-low-sodium|Pickles, cucumber, sweet, low sodium|VG|122|0.4|33.7|0.3|1 cup=90;1 side=80|
us-pigeonpeas-immature-seeds-cooked-boiled-drained|Pigeonpeas, immature seeds, cooked, boiled, drained|VG|111|6|19.5|1.4|1 cup=90;1 side=80|
us-pigeonpeas-immature-seeds-raw|Pigeonpeas, immature seeds, raw|VG|136|7.2|23.9|1.6|1 cup=90;1 side=80|
us-pimento-canned|Pimento, canned|VG|23|1.1|5.1|0.3|1 cup=90;1 side=80|
us-poi|Poi|VG|112|0.4|27.2|0.1|1 cup=90;1 side=80|
us-pokeberry-shoots-poke-cooked-boiled-drained|Pokeberry shoots, (poke), cooked, boiled, drained|VG|20|2.3|3.1|0.4|1 cup=90;1 side=80|
us-pokeberry-shoots-poke-raw|Pokeberry shoots, (poke), raw|VG|23|2.6|3.7|0.4|1 cup=90;1 side=80|
us-pumpkin-canned|Pumpkin, canned|VG|34|1.1|8.1|0.3|1 cup=90;1 side=80|
us-pumpkin-cooked-boiled-drained|Pumpkin, cooked, boiled, drained|VG|20|0.7|4.9|0.1|1 cup=90;1 side=80|
us-pumpkin-flowers-cooked-boiled-drained|Pumpkin, flowers, cooked, boiled, drained|VG|15|1.1|3.2|0.1|1 cup=90;1 side=80|
us-pumpkin-flowers-raw|Pumpkin flowers, raw|VG|15|1|3.3|0.1|1 cup=90;1 side=80|
us-pumpkin-leaves-cooked-boiled-drained|Pumpkin leaves, cooked, boiled, drained|VG|21|2.7|3.4|0.2|1 cup=90;1 side=80|
us-pumpkin-leaves-raw|Pumpkin leaves, raw|VG|19|3.2|2.3|0.4|1 cup=90;1 side=80|
us-pumpkin-pie-mix-canned|Pumpkin pie mix, canned|VG|104|1.1|26.4|0.1|1 cup=90;1 side=80|
us-pumpkin-raw|Pumpkin, raw|VG|26|1|6.5|0.1|1 cup=90;1 side=80|
us-purslane-cooked-boiled-drained|Purslane, cooked, boiled, drained|VG|18|1.5|3.6|0.2|1 cup=90;1 side=80|
us-purslane-raw|Purslane, raw|VG|20|2|3.4|0.4|1 cup=90;1 side=80|
us-radicchio-raw|Radicchio, raw|VG|23|1.4|4.5|0.3|1 cup=90;1 side=80|
us-radishes-hawaiian-style-pickled|Radishes, hawaiian style, pickled|VG|28|1.1|5.2|0.3|1 cup=90;1 side=80|
us-radishes-oriental-cooked-boiled-drained|Radishes, oriental, cooked, boiled, drained|VG|17|0.7|3.4|0.2|1 cup=90;1 side=80|
us-radishes-oriental-dried|Radishes, oriental, dried|VG|271|7.9|63.4|0.7|1 cup=90;1 side=80|
us-radishes-oriental-raw|Radishes, oriental, raw|VG|18|0.6|4.1|0.1|1 cup=90;1 side=80|
us-radishes-raw|Radishes, raw|VG|16|0.7|3.4|0.1|1 cup=90;1 side=80|
us-radishes-white-icicle-raw|Radishes, white icicle, raw|VG|14|1.1|2.6|0.1|1 cup=90;1 side=80|
us-radish-seeds-sprouted-raw|Radish seeds, sprouted, raw|VG|43|3.8|3.6|2.5|1 cup=90;1 side=80|
us-rutabagas-cooked-boiled-drained|Rutabagas, cooked, boiled, drained|VG|30|0.9|6.8|0.2|1 cup=90;1 side=80|
us-rutabagas-raw|Rutabagas, raw|VG|37|1.1|8.6|0.2|1 cup=90;1 side=80|
us-salsify-cooked-boiled-drained|Salsify, cooked, boiled, drained|VG|68|2.7|15.4|0.2|1 cup=90;1 side=80|
us-salsify-vegetable-oyster-raw|Salsify, (vegetable oyster), raw|VG|82|3.3|18.6|0.2|1 cup=90;1 side=80|
us-seaweed-agar-dried|Seaweed, agar, dried|VG|306|6.2|80.9|0.3|1 cup=90;1 side=80|
us-seaweed-agar-raw|Seaweed, agar, raw|VG|26|0.5|6.8|0|1 cup=90;1 side=80|
us-seaweed-canadian-cultivated-emi-tsunomata-dry|Seaweed, Canadian Cultivated Emi-tsunomata, dry|VG|259|15.3|46.2|1.4|1 cup=90;1 side=80|
us-seaweed-canadian-cultivated-emi-tsunomata-rehydr|Seaweed, Canadian Cultivated Emi-tsunomata, rehydrated|VG|31|1.9|5.6|0.2|1 cup=90;1 side=80|
us-seaweed-irishmoss-raw|Seaweed, irishmoss, raw|VG|49|1.5|12.3|0.2|1 cup=90;1 side=80|
us-seaweed-kelp-raw|Seaweed, kelp, raw|VG|43|1.7|9.6|0.6|1 cup=90;1 side=80|
us-seaweed-laver-raw|Seaweed, laver, raw|VG|35|5.8|5.1|0.3|1 cup=90;1 side=80|
us-seaweed-spirulina-dried|Seaweed, spirulina, dried|VG|290|57.5|23.9|7.7|1 cup=90;1 side=80|
us-seaweed-spirulina-raw|Seaweed, spirulina, raw|VG|26|5.9|2.4|0.4|1 cup=90;1 side=80|
us-seaweed-wakame-raw|Seaweed, wakame, raw|VG|45|3|9.1|0.6|1 cup=90;1 side=80|
us-sesbania-flower-cooked-steamed|Sesbania flower, cooked, steamed|VG|22|1.1|5.2|0.1|1 cup=90;1 side=80|
us-sesbania-flower-raw|Sesbania flower, raw|VG|27|1.3|6.7|0|1 cup=90;1 side=80|
us-shallots-freeze-dried|Shallots, freeze-dried|VG|348|12.3|80.7|0.5|1 cup=90;1 side=80|
us-shallots-raw|Shallots, raw|VG|72|2.5|16.8|0.1|1 cup=90;1 side=80|
us-soybeans-green-cooked-boiled-drained|Soybeans, green, cooked, boiled, drained|VG|141|12.4|11.1|6.4|1 cup=90;1 side=80|
us-soybeans-green-raw|Soybeans, green, raw|VG|147|13|11.1|6.8|1 cup=90;1 side=80|
us-soybeans-mature-seeds-sprouted-cooked-steamed|Soybeans, mature seeds, sprouted, cooked, steamed|VG|81|8.5|6.5|4.5|1 cup=90;1 side=80|
us-soybeans-mature-seeds-sprouted-cooked-stir-fried|Soybeans, mature seeds, sprouted, cooked, stir-fried|VG|125|13.1|9.4|7.1|1 cup=90;1 side=80|
us-soybeans-mature-seeds-sprouted-raw|Soybeans, mature seeds, sprouted, raw|VG|122|13.1|9.6|6.7|1 cup=90;1 side=80|
us-spinach-canned-regular-pack-drained-solids|Spinach, canned, regular pack, drained solids|VG|23|2.8|3.4|0.5|1 cup=90;1 side=80|
us-spinach-cooked-boiled-drained|Spinach, cooked, boiled, drained|VG|23|3|3.8|0.3|1 cup=90;1 side=80|
us-spinach-frozen-chopped-or-leaf-cooked-boiled|Spinach, frozen, chopped or leaf, cooked, boiled|VG|34|4|4.8|0.9|1 cup=90;1 side=80|
us-spinach-raw|Spinach, raw|VG|23|2.9|3.6|0.4|1 cup=90;1 side=80|
us-spinach-souffle|Spinach souffle|VG|172|7.9|5.9|13|1 cup=90;1 side=80|
us-squash-summer-cooked-boiled-drained|Squash, summer, cooked, boiled, drained|VG|20|0.9|4.3|0.3|1 cup=90;1 side=80|
us-squash-summer-crookneck-and-straightneck-canned-|Squash, summer, crookneck and straightneck, canned, drained|VG|13|0.6|3|0.1|1 cup=90;1 side=80|
us-squash-summer-crookneck-and-straightneck-cooked-|Squash, summer, crookneck and straightneck, cooked, boiled|VG|19|1|3.8|0.4|1 cup=90;1 side=80|
us-squash-summer-crookneck-and-straightneck-frozen-|Squash, summer, crookneck and straightneck, frozen, cooked|VG|25|1.3|5.5|0.2|1 cup=90;1 side=80|
us-squash-summer-crookneck-and-straightneck-raw|Squash, summer, crookneck and straightneck, raw|VG|19|1|3.9|0.3|1 cup=90;1 side=80|
us-squash-summer-raw|Squash, summer, raw|VG|16|1.2|3.4|0.2|1 cup=90;1 side=80|
us-squash-summer-scallop-cooked-boiled|Squash, summer, scallop, cooked, boiled|VG|16|1|3.3|0.2|1 cup=90;1 side=80|
us-squash-summer-scallop-raw|Squash, summer, scallop, raw|VG|18|1.2|3.8|0.2|1 cup=90;1 side=80|
us-squash-summer-zucchini-cooked-boiled|Squash, summer, zucchini, cooked, boiled|VG|15|1.1|2.7|0.4|1 cup=90;1 side=80|
us-squash-summer-zucchini-frozen-cooked|Squash, summer, zucchini, frozen, cooked|VG|17|1.2|3.6|0.1|1 cup=90;1 side=80|
us-squash-summer-zucchini-italian-style-canned|Squash, summer, zucchini, italian style, canned|VG|29|1|6.9|0.1|1 cup=90;1 side=80|
us-squash-summer-zucchini-raw|Squash, summer, zucchini, raw|VG|17|1.2|3.1|0.3|1 cup=90;1 side=80|
us-squash-zucchini-baby-raw|Squash, zucchini, baby, raw|VG|21|2.7|3.1|0.4|1 cup=90;1 side=80|
us-squash-winter-acorn-cooked-baked|Squash, winter, acorn, cooked, baked|VG|56|1.1|14.6|0.1|1 cup=90;1 side=80|
us-squash-winter-acorn-cooked-boiled|Squash, winter, acorn, cooked, boiled|VG|34|0.7|8.8|0.1|1 cup=90;1 side=80|
us-squash-winter-acorn-raw|Squash, winter, acorn, raw|VG|40|0.8|10.4|0.1|1 cup=90;1 side=80|
us-squash-winter-butternut-cooked-baked|Squash, winter, butternut, cooked, baked|VG|40|0.9|10.5|0.1|1 cup=90;1 side=80|
us-squash-winter-butternut-frozen-cooked|Squash, winter, butternut, frozen, cooked|VG|39|1.2|10.1|0.1|1 cup=90;1 side=80|
us-squash-winter-butternut-raw|Squash, winter, butternut, raw|VG|45|1|11.7|0.1|1 cup=90;1 side=80|
us-squash-winter-cooked-baked|Squash, winter, cooked, baked|VG|37|0.9|8.9|0.4|1 cup=90;1 side=80|
us-squash-winter-hubbard-baked|Squash, winter, hubbard, baked|VG|50|2.5|10.8|0.6|1 cup=90;1 side=80|
us-squash-winter-hubbard-cooked-boiled|Squash, winter, hubbard, cooked, boiled|VG|30|1.5|6.5|0.4|1 cup=90;1 side=80|
us-squash-winter-hubbard-raw|Squash, winter, hubbard, raw|VG|40|2|8.7|0.5|1 cup=90;1 side=80|
us-squash-winter-raw|Squash, winter, raw|VG|34|1|8.6|0.1|1 cup=90;1 side=80|
us-squash-winter-spaghetti-cooked-boiled|Squash, winter, spaghetti, cooked, boiled|VG|27|0.7|6.5|0.3|1 cup=90;1 side=80|
us-squash-winter-spaghetti-raw|Squash, winter, spaghetti, raw|VG|31|0.6|6.9|0.6|1 cup=90;1 side=80|
us-succotash-corn-and-limas-canned-with-cream-style|Succotash, (corn and limas), canned, with cream style corn|VG|77|2.6|17.6|0.5|1 cup=90;1 side=80|
us-succotash-corn-and-limas-cooked-boiled-drained|Succotash, (corn and limas), cooked, boiled, drained|VG|115|5.1|24.4|0.8|1 cup=90;1 side=80|
us-succotash-corn-and-limas-frozen-cooked-boiled|Succotash, (corn and limas), frozen, cooked, boiled|VG|93|4.3|20|0.9|1 cup=90;1 side=80|
us-succotash-corn-and-limas-raw|Succotash, (corn and limas), raw|VG|99|5|19.6|1|1 cup=90;1 side=80|
us-taro-cooked|Taro, cooked|VG|142|0.5|34.6|0.1|1 cup=90;1 side=80|
us-taro-leaves-cooked-steamed|Taro leaves, cooked, steamed|VG|24|2.7|4|0.4|1 cup=90;1 side=80|
us-taro-leaves-raw|Taro leaves, raw|VG|42|5|6.7|0.7|1 cup=90;1 side=80|
us-taro-raw|Taro, raw|VG|112|1.5|26.5|0.2|1 cup=90;1 side=80|
us-taro-shoots-cooked|Taro shoots, cooked|VG|14|0.7|3.2|0.1|1 cup=90;1 side=80|
us-taro-shoots-raw|Taro shoots, raw|VG|11|0.9|2.3|0.1|1 cup=90;1 side=80|
us-taro-tahitian-cooked|Taro, tahitian, cooked|VG|44|4.2|6.9|0.7|1 cup=90;1 side=80|
us-taro-tahitian-raw|Taro, tahitian, raw|VG|44|2.8|6.9|1|1 cup=90;1 side=80|
us-tomatillos-raw|Tomatillos, raw|VG|32|1|5.8|1|1 cup=90;1 side=80|
us-tomato-and-vegetable-juice-low-sodium|Tomato and vegetable juice, low sodium|VG|22|0.6|4.6|0.1|1 cup=90;1 side=80|
us-tomatoes-crushed-canned|Tomatoes, crushed, canned|VG|32|1.6|7.3|0.3|1 cup=90;1 side=80|
us-tomatoes-green-raw|Tomatoes, green, raw|VG|23|1.2|5.1|0.2|1 cup=90;1 side=80|
us-tomatoes-orange-raw|Tomatoes, orange, raw|VG|16|1.2|3.2|0.2|1 cup=90;1 side=80|
us-tomatoes-red-ripe-canned-packed-in-tomato-juice|Tomatoes, red, ripe, canned, packed in tomato juice|VG|16|0.8|3.5|0.3|1 cup=90;1 side=80|
us-tomatoes-red-ripe-canned-stewed|Tomatoes, red, ripe, canned, stewed|VG|26|0.9|6.2|0.2|1 cup=90;1 side=80|
us-tomatoes-red-ripe-canned-with-green-chilies|Tomatoes, red, ripe, canned, with green chilies|VG|15|0.7|3.6|0.1|1 cup=90;1 side=80|
us-tomatoes-red-ripe-cooked|Tomatoes, red, ripe, cooked|VG|18|1|4|0.1|1 cup=90;1 side=80|
us-tomatoes-red-ripe-cooked-stewed|Tomatoes, red, ripe, cooked, stewed|VG|79|2|13.1|2.7|1 cup=90;1 side=80|
us-tomatoes-red-ripe-raw|Tomatoes, red, ripe, raw|VG|18|0.9|3.9|0.2|1 cup=90;1 side=80|
us-tomatoes-sun-dried|Tomatoes, sun-dried|VG|258|14.1|55.8|3|1 cup=90;1 side=80|
us-tomatoes-sun-dried-packed-in-oil-drained|Tomatoes, sun-dried, packed in oil, drained|VG|213|5.1|23.3|14.1|1 cup=90;1 side=80|
us-tomatoes-yellow-raw|Tomatoes, yellow, raw|VG|15|1|3|0.3|1 cup=90;1 side=80|
us-tomato-powder|Tomato powder|VG|302|12.9|74.7|0.4|1 cup=90;1 side=80|
us-tomato-products-canned-sauce|Tomato products, canned, sauce|VG|24|1.2|5.3|0.3|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-spanish-style|Tomato products, canned, sauce, spanish style|VG|33|1.4|7.2|0.3|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-with-herbs-and-chee|Tomato products, canned, sauce, with herbs and cheese|VG|59|2.1|10.2|1.9|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-with-mushrooms|Tomato products, canned, sauce, with mushrooms|VG|35|1.5|8.4|0.1|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-with-onions|Tomato products, canned, sauce, with onions|VG|42|1.6|9.9|0.2|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-with-onions-green-p|Tomato products, canned, sauce, with onions, green peppers|VG|41|0.9|8.8|0.7|1 cup=90;1 side=80|
us-tomato-products-canned-sauce-with-tomato-tidbits|Tomato products, canned, sauce, with tomato tidbits|VG|32|1.3|7.1|0.4|1 cup=90;1 side=80|
us-tree-fern-cooked|Tree fern, cooked|VG|40|0.3|11|0.1|1 cup=90;1 side=80|
us-turnip-greens-and-turnips-frozen-cooked-boiled-d|Turnip greens and turnips, frozen, cooked, boiled, drained|VG|35|3|4.9|0.4|1 cup=90;1 side=80|
us-turnip-greens-cooked-boiled-drained|Turnip greens, cooked, boiled, drained|VG|20|1.1|4.4|0.2|1 cup=90;1 side=80|
us-turnip-greens-frozen-cooked-boiled-drained|Turnip greens, frozen, cooked, boiled, drained|VG|29|3.4|5|0.4|1 cup=90;1 side=80|
us-turnip-greens-raw|Turnip greens, raw|VG|32|1.5|7.1|0.3|1 cup=90;1 side=80|
us-turnips-cooked-boiled-drained|Turnips, cooked, boiled, drained|VG|22|0.7|5.1|0.1|1 cup=90;1 side=80|
us-turnips-frozen-cooked-boiled-drained|Turnips, frozen, cooked, boiled, drained|VG|23|1.5|4.4|0.2|1 cup=90;1 side=80|
us-turnips-raw|Turnips, raw|VG|28|0.9|6.4|0.1|1 cup=90;1 side=80|
us-vegetable-juice-bolthouse-farms-daily-greens|Vegetable juice, Bolthouse Farms, Daily Greens|VG|31|0.5|8.1|0|1 cup=90;1 side=80|
us-vegetables-mixed-canned-drained-solids|Vegetables, mixed, canned, drained solids|VG|49|2.6|9.3|0.3|1 cup=90;1 side=80|
us-vegetables-mixed-corn-lima-beans-peas-green-bean|Vegetables, mixed corn, lima beans, peas, green beans|VG|37|1.4|7.3|0.2|1 cup=90;1 side=80|
us-vegetables-mixed-frozen-cooked-boiled|Vegetables, mixed, frozen, cooked, boiled|VG|65|2.9|13.1|0.2|1 cup=90;1 side=80|
us-vinespinach-basella-raw|Vinespinach, (basella), raw|VG|19|1.8|3.4|0.3|1 cup=90;1 side=80|
us-wasabi-root-raw|Wasabi, root, raw|VG|109|4.8|23.5|0.6|1 cup=90;1 side=80|
us-waterchestnuts-chinese-matai-raw|Waterchestnuts, chinese, (matai), raw|VG|97|1.4|23.9|0.1|1 cup=90;1 side=80|
us-water-convolvulus-cooked-boiled-drained|Water convolvulus, cooked, boiled, drained|VG|20|2.1|3.7|0.2|1 cup=90;1 side=80|
us-water-convolvulus-raw|Water convolvulus, raw|VG|19|2.6|3.1|0.2|1 cup=90;1 side=80|
us-watercress-raw|Watercress, raw|VG|11|2.3|1.3|0.1|1 cup=90;1 side=80|
us-waxgourd-chinese-preserving-melon-cooked-boiled-|Waxgourd, (chinese preserving melon), cooked, boiled, drained|VG|11|0.4|2.5|0.2|1 cup=90;1 side=80|
us-waxgourd-chinese-preserving-melon-raw|Waxgourd, (chinese preserving melon), raw|VG|13|0.4|3|0.2|1 cup=90;1 side=80|
us-winged-bean-immature-seeds-cooked-boiled-drained|Winged bean, immature seeds, cooked, boiled, drained|VG|37|5.3|3.2|0.7|1 cup=90;1 side=80|
us-winged-bean-leaves-raw|Winged bean leaves, raw|VG|74|5.9|14.1|1.1|1 cup=90;1 side=80|
us-winged-beans-immature-seeds-cooked-boiled-draine|Winged beans, immature seeds, cooked, boiled, drained|VG|38|5.3|3.2|0.7|1 cup=90;1 side=80|
us-winged-beans-immature-seeds-raw|Winged beans, immature seeds, raw|VG|49|7|4.3|0.9|1 cup=90;1 side=80|
us-winged-bean-tuber-raw|Winged bean tuber, raw|VG|148|11.6|28.1|0.9|1 cup=90;1 side=80|
us-yambean-jicama-cooked-boiled-drained|Yambean (jicama), cooked, boiled, drained|VG|38|0.7|8.8|0.1|1 cup=90;1 side=80|
us-yambean-jicama-raw|Yambean (jicama), raw|VG|38|0.7|8.8|0.1|1 cup=90;1 side=80|
us-yam-cooked-boiled-drained-or-baked|Yam, cooked, boiled, drained, or baked|VG|114|1.5|27|0.1|1 cup=90;1 side=80|
us-yam-raw|Yam, raw|VG|118|1.5|27.9|0.2|1 cup=90;1 side=80|
us-yardlong-bean-cooked-boiled-drained|Yardlong bean, cooked, boiled, drained|VG|47|2.5|9.2|0.1|1 cup=90;1 side=80|
us-yardlong-bean-raw|Yardlong bean, raw|VG|47|2.8|8.4|0.4|1 cup=90;1 side=80|
us-yautia-tannier-raw|Yautia (tannier), raw|VG|98|1.5|23.6|0.4|1 cup=90;1 side=80|
us-yeast-extract-spread|Yeast extract spread|VG|185|23.9|20.4|0.9|1 cup=90;1 side=80|
us-andrea-s-gluten-free-soft-dinner-roll|Andrea's, Gluten Free Soft Dinner Roll|BB|257|5.7|40.2|8.2|1 slice=30;1 roll=60|
us-archway-home-style-cookies-chocolate-chip-ice-bo|Archway Home Style Cookies, Chocolate Chip Ice Box|BB|497|4.3|65|24.4|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-coconut-macaroon|Archway Home Style Cookies, Coconut Macaroon|BB|460|3|61.2|22.6|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-date-filled-oatmeal|Archway Home Style Cookies, Date Filled Oatmeal|BB|400|4.7|68.2|12.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-dutch-cocoa|Archway Home Style Cookies, Dutch Cocoa|BB|431|4.5|69.4|15|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-frosty-lemon|Archway Home Style Cookies, Frosty Lemon|BB|430|4.4|64.8|17.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-iced-molasses|Archway Home Style Cookies, Iced Molasses|BB|420|3.5|69.1|14.4|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-iced-oatmeal|Archway Home Style Cookies, Iced Oatmeal|BB|435|4.9|66.8|16.5|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-molasses|Archway Home Style Cookies, Molasses|BB|403|4.3|69.4|12.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-oatmeal|Archway Home Style Cookies, Oatmeal|BB|421|5.5|68.2|14.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-oatmeal-raisin|Archway Home Style Cookies, Oatmeal Raisin|BB|406|5.2|69.3|12.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-old-fashioned-molasse|Archway Home Style Cookies, Old Fashioned Molasses|BB|406|4.3|70.6|11.8|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-old-fashioned-windmil|Archway Home Style Cookies, Old Fashioned Windmill Cookies|BB|468|5.2|72.2|17.6|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-peanut-butter|Archway Home Style Cookies, Peanut Butter|BB|480|9|58.5|24.3|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-raspberry-filled|Archway Home Style Cookies, Raspberry Filled|BB|400|4.4|65.9|13.3|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-reduced-fat-ginger-sn|Archway Home Style Cookies, Reduced Fat Ginger Snaps|BB|424|4.7|76.2|11.1|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-strawberry-filled|Archway Home Style Cookies, Strawberry Filled|BB|400|4.4|65.9|13.3|1 biscuit=12;3 biscuits=36|
us-archway-home-style-cookies-sugar-free-oatmeal|Archway Home Style Cookies, Sugar Free Oatmeal|BB|442|5.5|67.2|20.9|1 biscuit=12;3 biscuits=36|
us-artificial-blueberry-muffin-mix-dry|Artificial Blueberry Muffin Mix, dry|BB|407|4.7|77.5|8.7|1 piece=60;1 large=110|
us-bagels-cinnamon-raisin|Bagels, cinnamon-raisin|BB|274|9.8|55.2|1.7|1 slice=30;1 roll=60|
us-bagels-cinnamon-raisin-toasted|Bagels, cinnamon-raisin, toasted|BB|294|10.6|59.3|1.8|1 slice=30;1 roll=60|
us-bagels-egg|Bagels, egg|BB|278|10.6|53|2.1|1 slice=30;1 roll=60|
us-bagels-multigrain|Bagels, multigrain|BB|241|9.9|47.5|1.2|1 slice=30;1 roll=60|
us-bagels-oat-bran|Bagels, oat bran|BB|255|10.7|53.3|1.2|1 slice=30;1 roll=60|
us-bagels-plain-with-calcium-propionate|Bagels, plain, with calcium propionate|BB|264|10.6|52.4|1.3|1 slice=30;1 roll=60|
us-bagels-plain-with-calcium-propionate-toasted|Bagels, plain, with calcium propionate, toasted|BB|287|11.1|57.4|1.4|1 slice=30;1 roll=60|
us-bagels-plain-without-calcium-propionate|Bagels, plain, without calcium propionate|BB|275|10.5|53.4|1.6|1 slice=30;1 roll=60|
us-bagels-wheat|Bagels, wheat|BB|250|10.2|48.9|1.5|1 slice=30;1 roll=60|
us-bagels-whole-grain-white|Bagels, whole grain white|BB|255|9.3|54.5|0|1 slice=30;1 roll=60|
us-mixed-grain-biscuits-refrigerated-dough|Mixed grain biscuits, refrigerated dough|BB|263|6.1|47.4|5.6|1 biscuit=12;3 biscuits=36|
us-plain-or-buttermilk-biscuits|Plain or buttermilk biscuits|BB|353|7|44.6|16.3|1 biscuit=12;3 biscuits=36|
us-plain-or-buttermilk-biscuits-frozen-baked|Plain or buttermilk biscuits, frozen, baked|BB|338|6.2|53.9|11|1 biscuit=12;3 biscuits=36|
us-plain-or-buttermilk-biscuits-refrigerated-dough-|Plain or buttermilk biscuits, refrigerated dough, higher fat|BB|307|6.7|46.3|10.6|1 biscuit=12;3 biscuits=36|
us-plain-or-buttermilk-biscuits-refrigerated-dough--2|Plain or buttermilk biscuits, refrigerated dough, lower fat|BB|270|6.7|43.7|7.8|1 biscuit=12;3 biscuits=36|
us-bread-banana-made-with-margarine|Bread, banana, made with margarine|BB|326|4.3|54.6|10.5|1 slice=30;1 roll=60|
us-bread-boston-brown-canned|Bread, boston brown, canned|BB|195|5.2|43.3|1.5|1 slice=30;1 roll=60|
us-bread-chapati-or-roti-plain|Bread, chapati or roti, plain|BB|297|11.3|46.4|7.5|1 slice=30;1 roll=60|
us-bread-chapati-or-roti-whole-wheat-frozen|Bread, chapati or roti, whole wheat, frozen|BB|299|7.9|46.1|9.2|1 slice=30;1 roll=60|
us-bread-cheese|Bread, cheese|BB|408|10.4|44.8|20.8|1 slice=30;1 roll=60|
us-bread-cinnamon|Bread, cinnamon|BB|253|7.1|44.4|5.3|1 slice=30;1 roll=60|
us-bread-cornbread-made-with-low-fat-2-milk|Bread, cornbread, made with low fat (2%) milk|BB|266|6.7|43.5|7.1|1 slice=30;1 roll=60|
us-bread-cracked-wheat|Bread, cracked-wheat|BB|260|8.7|49.5|3.9|1 slice=30;1 roll=60|
us-bread-crumbs-dry-grated-plain|Bread, crumbs, dry, grated, plain|BB|395|13.4|72|5.3|1 slice=30;1 roll=60|
us-bread-crumbs-dry-grated-seasoned|Bread, crumbs, dry, grated, seasoned|BB|383|14.1|68.5|5.5|1 slice=30;1 roll=60|
us-bread-egg|Bread, egg|BB|287|9.5|47.8|6|1 slice=30;1 roll=60|
us-bread-egg-toasted|Bread, egg, toasted|BB|315|10.5|52.6|6.6|1 slice=30;1 roll=60|
us-bread-french-or-vienna|Bread, french or vienna|BB|272|10.8|51.9|2.4|1 slice=30;1 roll=60|
us-bread-french-or-vienna-toasted|Bread, french or vienna, toasted|BB|319|13|61.9|2.1|1 slice=30;1 roll=60|
us-bread-french-or-vienna-whole-wheat|Bread, french or vienna, whole wheat|BB|239|8.3|49.1|1|1 slice=30;1 roll=60|
us-bread-gluten-free-white-made-with-potato-extract|Bread, gluten-free, white, made with potato extract, rice starch|BB|320|3.1|52.8|10.7|1 slice=30;1 roll=60|
us-bread-gluten-free-white-made-with-rice-flour-cor|Bread, gluten-free, white, made with rice flour, corn starch|BB|248|4.3|45.8|5.2|1 slice=30;1 roll=60|
us-bread-gluten-free-white|Bread, gluten-free, white|BB|298|5.4|51.2|8|1 slice=30;1 roll=60|brown flour made rice starch tapioca
us-bread-gluten-free-whole-grain|Bread, gluten-free, whole grain|BB|309|7.3|49.1|9.3|1 slice=30;1 roll=60|brown flour made rice starch tapioca
us-bread-irish-soda|Bread, irish soda|BB|290|6.6|56|5|1 slice=30;1 roll=60|
us-bread-italian|Bread, Italian|BB|259|9.5|48.1|2.7|1 slice=30;1 roll=60|
us-bread-multi-grain|Bread, multi-grain|BB|265|13.4|43.3|4.2|1 slice=30;1 roll=60|
us-bread-multi-grain-toasted|Bread, multi-grain, toasted|BB|288|14.5|47.1|4.6|1 slice=30;1 roll=60|
us-bread-naan-plain-refrigerated|Bread, naan, plain, refrigerated|BB|291|9.6|50.4|5.7|1 slice=30;1 roll=60|
us-bread-naan-whole-wheat-refrigerated|Bread, naan, whole wheat, refrigerated|BB|286|10.2|46.2|6.7|1 slice=30;1 roll=60|
us-bread-oat-bran|Bread, oat bran|BB|236|10.4|39.8|4.4|1 slice=30;1 roll=60|
us-bread-oat-bran-toasted|Bread, oat bran, toasted|BB|259|11.4|43.7|4.8|1 slice=30;1 roll=60|
us-bread-oatmeal|Bread, oatmeal|BB|269|8.4|48.5|4.4|1 slice=30;1 roll=60|
us-bread-oatmeal-toasted|Bread, oatmeal, toasted|BB|292|9.2|52.7|4.8|1 slice=30;1 roll=60|
us-bread-pan-dulce-sweet-yeast-bread|Bread, pan dulce, sweet yeast bread|BB|367|9.4|56.4|11.6|1 slice=30;1 roll=60|
us-bread-paratha-whole-wheat-frozen|Bread, paratha, whole wheat, frozen|BB|326|6.4|45.4|13.2|1 slice=30;1 roll=60|
us-bread-pita-white|Bread, pita, white|BB|275|9.1|55.7|1.2|1 slice=30;1 roll=60|
us-bread-pita-whole-wheat|Bread, pita, whole-wheat|BB|262|9.8|55.9|1.7|1 slice=30;1 roll=60|
us-bread-potato|Bread, potato|BB|266|12.5|47.1|3.1|1 slice=30;1 roll=60|
us-bread-pound-cake-type-pan-de-torta-salvadoran|Bread, pound cake type, pan de torta salvadoran|BB|390|7.1|51.3|17.5|1 slice=30;1 roll=60|
us-bread-protein|Bread, protein|BB|245|12.1|43.8|2.2|1 slice=30;1 roll=60|
us-bread-protein-toasted|Bread, protein, toasted|BB|270|13.2|48.1|2.4|1 slice=30;1 roll=60|
us-bread-pumpernickel|Bread, pumpernickel|BB|250|8.7|47.5|3.1|1 slice=30;1 roll=60|
us-bread-raisin|Bread, raisin|BB|274|7.9|52.3|4.4|1 slice=30;1 roll=60|
us-bread-raisin-toasted|Bread, raisin, toasted|BB|297|8.6|56.9|4.8|1 slice=30;1 roll=60|
us-bread-reduced-calorie-oat-bran|Bread, reduced-calorie, oat bran|BB|201|8|41.3|3.2|1 slice=30;1 roll=60|
us-bread-reduced-calorie-oat-bran-toasted|Bread, reduced-calorie, oat bran, toasted|BB|239|9.5|49.2|3.8|1 slice=30;1 roll=60|
us-bread-reduced-calorie-oatmeal|Bread, reduced-calorie, oatmeal|BB|210|7.6|43.3|3.5|1 slice=30;1 roll=60|
us-bread-reduced-calorie-rye|Bread, reduced-calorie, rye|BB|203|9.1|40.5|2.9|1 slice=30;1 roll=60|
us-bread-reduced-calorie-wheat|Bread, reduced-calorie, wheat|BB|217|13.3|42.5|2.9|1 slice=30;1 roll=60|
us-bread-reduced-calorie-white|Bread, reduced-calorie, white|BB|207|8.7|44.3|2.5|1 slice=30;1 roll=60|
us-bread-rice-bran|Bread, rice bran|BB|243|8.9|43.5|4.6|1 slice=30;1 roll=60|
us-bread-rice-bran-toasted|Bread, rice bran, toasted|BB|264|9.7|47.3|5|1 slice=30;1 roll=60|
us-bread-roll-mexican-bollilo|Bread, roll, Mexican, bollilo|BB|318|10.7|55.8|5.8|1 slice=30;1 roll=60|
us-bread-rye|Bread, rye|BB|259|8.5|48.3|3.3|1 slice=30;1 roll=60|
us-bread-rye-toasted|Bread, rye, toasted|BB|284|9.4|53.1|3.6|1 slice=30;1 roll=60|
us-bread-salvadoran-sweet-cheese-quesadilla-salvado|Bread, salvadoran sweet cheese (quesadilla salvadorena)|BB|374|7.1|47.8|17.1|1 slice=30;1 roll=60|
us-bread-sticks-plain|Bread, sticks, plain|BB|412|12|68.4|9.5|1 slice=30;1 roll=60|
us-bread-wheat|Bread, wheat|BB|274|10.7|47.5|4.5|1 slice=30;1 roll=60|
us-bread-wheat-sprouted|Bread, wheat, sprouted|BB|188|13.2|33.9|0|1 slice=30;1 roll=60|
us-bread-wheat-sprouted-toasted|Bread, wheat, sprouted, toasted|BB|205|14.3|36.8|0|1 slice=30;1 roll=60|
us-bread-wheat-toasted|Bread, wheat, toasted|BB|313|13|55.8|4.3|1 slice=30;1 roll=60|
us-bread-white|Bread, white|BB|266|8.9|49.4|3.3|1 slice=30;1 roll=60|
us-bread-white-low-sodium-no-salt|Bread, white, low sodium, no salt|BB|267|8.2|49.6|3.6|1 slice=30;1 roll=60|
us-bread-white-made-with-low-fat-2-milk|Bread, white, made with low fat (2%) milk|BB|285|7.9|49.6|5.7|1 slice=30;1 roll=60|
us-bread-white-made-with-nonfat-dry-milk|Bread, white, made with nonfat dry milk|BB|274|7.7|53.6|2.6|1 slice=30;1 roll=60|
us-bread-white-toasted|Bread, white, toasted|BB|290|9|54.5|4|1 slice=30;1 roll=60|
us-bread-white-toasted-low-sodium-no-salt|Bread, white, toasted, low sodium no salt|BB|293|9|54.4|4|1 slice=30;1 roll=60|
us-bread-white-wheat|Bread, white wheat|BB|238|10.7|43.9|2.2|1 slice=30;1 roll=60|
us-bread-whole-wheat|Bread, whole-wheat|BB|278|8.4|51.4|5.4|1 slice=30;1 roll=60|
us-bread-whole-wheat-toasted|Bread, whole-wheat, toasted|BB|305|9.2|56.4|5.9|1 slice=30;1 roll=60|
us-angelfood-cake|Angelfood cake|BB|258|5.9|57.8|0.8|1 slice=80;1 small slice=50|
us-boston-cream-pie-cake|Boston cream pie cake|BB|252|2.4|42.9|8.5|1 slice=80;1 small slice=50|
us-cheesecake-cake|Cheesecake cake|BB|321|5.5|25.5|22.5|1 slice=80;1 small slice=50|
us-cheesecake-cake-prepared-from-mix-no-bake-type|Cheesecake cake, prepared from mix, no-bake type|BB|274|5.5|35.5|12.7|1 slice=80;1 small slice=50|
us-cake-cherry-fudge-with-chocolate-frosting|Cake, cherry fudge with chocolate frosting|BB|264|2.4|38|12.5|1 slice=80;1 small slice=50|
us-cake-chocolate-with-chocolate-frosting-in-store-|Cake, chocolate with chocolate frosting, in-store bakery|BB|389|3.5|52.8|20.1|1 slice=80;1 small slice=50|commercially
us-chocolate-cake-homemade-without-frosting|Chocolate cake, homemade without frosting|BB|371|5.3|53.4|15.1|1 slice=80;1 small slice=50|
us-coffeecake-cake-cheese|Coffeecake cake, cheese|BB|339|7|44.3|15.2|1 slice=80;1 small slice=50|
us-coffeecake-cake-cinnamon-with-crumb-topping|Coffeecake cake, cinnamon with crumb topping|BB|418|6.8|46.7|23.3|1 slice=80;1 small slice=50|
us-coffeecake-cake-creme-filled-with-chocolate-fros|Coffeecake cake, creme-filled with chocolate frosting|BB|331|5|53.8|10.8|1 slice=80;1 small slice=50|
us-coffeecake-cake-fruit|Coffeecake cake, fruit|BB|311|5.2|51.5|10.2|1 slice=80;1 small slice=50|
us-fruitcake-cake|Fruitcake cake|BB|324|2.9|61.6|9.1|1 slice=80;1 small slice=50|
us-gingerbread-cake|Gingerbread cake|BB|356|3.9|49.2|16.4|1 slice=30;1 roll=60|
us-pineapple-upside-down-cake|Pineapple upside-down cake|BB|319|3.5|50.5|12.1|1 slice=80;1 small slice=50|
us-pound-cake-bimbo-bakeries-usa-panque-casero-home|Pound cake, Bimbo Bakeries USA, Panque Casero, home baked style|BB|418|6.6|48.9|21.7|1 slice=80;1 small slice=50|
us-pound-cake-butter|Pound cake, butter|BB|353|5|53.6|14|1 slice=80;1 small slice=50|
us-pound-cake-fat-free|Pound cake, fat-free|BB|283|5.4|61|1.2|1 slice=80;1 small slice=50|
us-pound-cake-other-than-all-butter|Pound cake, other than all butter|BB|389|5.2|52.5|17.9|1 slice=80;1 small slice=50|
us-shortcake-cake-biscuit-type|Shortcake cake, biscuit-type|BB|346|6.1|48.5|14.2|1 slice=80;1 small slice=50|
us-snack-cakes-cake-creme-filled-chocolate-with-fro|Snack cakes cake, creme-filled, chocolate with frosting|BB|399|3.6|60.3|15.9|1 slice=80;1 small slice=50|
us-snack-cakes-cake-creme-filled-chocolate-with-fro-2|Snack cakes cake, creme-filled, chocolate with frosting, low-fat|BB|409|3.7|69.4|13|1 slice=80;1 small slice=50|
us-snack-cakes-cake-creme-filled-sponge|Snack cakes cake, creme-filled, sponge|BB|374|3.5|64|11.5|1 slice=80;1 small slice=50|
us-snack-cakes-cake-not-chocolate-with-icing-or-fil|Snack cakes cake, not chocolate, with icing or filling, low-fat|BB|412|3.7|74.3|11.1|1 slice=80;1 small slice=50|
us-sponge-cake|Sponge cake|BB|290|5.4|61|2.7|1 slice=80;1 small slice=50|
us-white-cake-homemade-with-coconut-frosting|White cake, homemade with coconut frosting|BB|356|4.4|63.2|10.3|1 slice=80;1 small slice=50|
us-white-cake-homemade-without-frosting|White cake, homemade without frosting|BB|357|5.4|57.2|12.4|1 slice=80;1 small slice=50|
us-yellow-cake-homemade-without-frosting|Yellow cake, homemade without frosting|BB|361|5.3|53|14.6|1 slice=80;1 small slice=50|
us-yellow-cake-with-chocolate-frosting-in-store-bak|Yellow cake, with chocolate frosting, in-store bakery|BB|379|3.2|55.4|17.8|1 slice=80;1 small slice=50|
us-yellow-cake-with-vanilla-frosting|Yellow cake, with vanilla frosting|BB|391|3|56.2|17.9|1 slice=80;1 small slice=50|
us-cinnamon-buns-frosted|Cinnamon buns, frosted|BB|452|4.5|48.6|26.6|1 slice=30;1 roll=60|
us-continental-mills-krusteaz-almond-poppyseed-muff|Continental Mills, Krusteaz Almond Poppyseed Muffin Mix|BB|418|5.6|75.6|10.3|1 piece=60;1 large=110|artificially flavored
us-cookie-butter-or-sugar-with-chocolate-icing-or-f|Cookie, butter or sugar, with chocolate icing or filling|BB|503|4.1|68.8|23.5|1 biscuit=12;3 biscuits=36|
us-cookie-chocolate-with-icing-or-coating|Cookie, chocolate, with icing or coating|BB|507|4.5|67.9|24.2|1 biscuit=12;3 biscuits=36|
us-animal-crackers-biscuits|Animal crackers biscuits|BB|446|6.9|74.1|13.8|5 crackers=15;1 serving=30|cookies
us-animal-biscuits-with-frosting-or-icing|Animal biscuits, with frosting or icing|BB|509|3|70.1|24.1|1 biscuit=12;3 biscuits=36|cookies
us-brownies-biscuits|Brownies biscuits|BB|405|4.8|63.9|16.3|1 biscuit=12;3 biscuits=36|cookies
us-brownies-biscuits-reduced-fat-with-added-fiber|Brownies biscuits, reduced fat, with added fiber|BB|345|2.8|61.6|9.7|1 biscuit=12;3 biscuits=36|cookies
us-butter-biscuits|Butter biscuits|BB|467|6.1|68.9|18.8|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-higher-fat|Chocolate chip biscuits, higher fat|BB|481|5.4|66.8|22.6|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-lower-fat|Chocolate chip biscuits, lower fat|BB|451|6|67.5|17.9|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-made-with-butter|Chocolate chip biscuits, made with butter|BB|488|5.7|58.2|28.4|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-made-with-margarine|Chocolate chip biscuits, made with margarine|BB|488|5.7|58.4|28.3|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-refrigerated-dough|Chocolate chip biscuits, refrigerated dough|BB|451|4|61|21.3|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-refrigerated-dough-baked|Chocolate chip biscuits, refrigerated dough, baked|BB|492|4.9|68.2|22.6|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-sandwich-biscuits-with-creme-fill|Chocolate chip sandwich biscuits, with creme filling|BB|425|2.9|63.5|17.7|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-soft-type|Chocolate chip biscuits, soft-type|BB|444|3.6|65.8|19.8|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-chip-biscuits-special-dietary|Chocolate chip biscuits, special dietary|BB|450|3.9|73.4|16.8|1 biscuit=12;3 biscuits=36|cookies
us-biscuits-chocolate-cream-covered-biscuit-sticks|Biscuits, chocolate cream covered biscuit sticks|BB|447|10|51.1|22.5|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-biscuits-made-with-rice-cereal|Chocolate biscuits, made with rice cereal|BB|440|3.2|63.3|19.4|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-sandwich-biscuits-with-creme-filling|Chocolate sandwich biscuits, with creme filling|BB|464|5.2|71|19.1|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-sandwich-biscuits-with-creme-filling-r|Chocolate sandwich biscuits, with creme filling, reduced fat|BB|436|2.9|76.2|13.2|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-sandwich-biscuits-with-creme-filling-s|Chocolate sandwich biscuits, with creme filling, special dietary|BB|461|4.5|68|22.1|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-sandwich-biscuits-with-extra-creme-fil|Chocolate sandwich biscuits, with extra creme filling|BB|497|4.3|68.2|24.5|1 biscuit=12;3 biscuits=36|cookies
us-chocolate-wafers-biscuits|Chocolate wafers biscuits|BB|433|6.6|72.7|14.2|1 biscuit=12;3 biscuits=36|cookies
us-coconut-macaroon-biscuits|Coconut macaroon biscuits|BB|460|3|61.2|22.6|1 biscuit=12;3 biscuits=36|cookies
us-fig-bars-biscuits|Fig bars biscuits|BB|348|3.7|70.9|7.3|1 biscuit=12;3 biscuits=36|cookies
us-fortune-biscuits|Fortune biscuits|BB|378|4.2|84|2.7|1 biscuit=12;3 biscuits=36|cookies
us-fudge-biscuits-cake-type|Fudge biscuits, cake-type|BB|349|5|78.3|3.7|1 biscuit=12;3 biscuits=36|cookies
us-gingersnaps-biscuits|Gingersnaps biscuits|BB|416|5.6|76.9|9.8|1 biscuit=12;3 biscuits=36|cookies
us-gluten-free-biscuits-chocolate-sandwich-with-cre|Gluten-free biscuits, chocolate sandwich, with creme filling|BB|474|2.2|76|17.9|1 biscuit=12;3 biscuits=36|cookies
us-gluten-free-biscuits-chocolate-wafer|Gluten-free biscuits, chocolate wafer|BB|541|4.1|62.8|30.4|1 biscuit=12;3 biscuits=36|cookies
us-gluten-free-biscuits-lemon-wafer|Gluten-free biscuits, lemon wafer|BB|515|0|74.4|24.2|1 biscuit=12;3 biscuits=36|cookies
us-gluten-free-biscuits-vanilla-sandwich-with-creme|Gluten-free biscuits, vanilla sandwich, with creme filling|BB|493|2.7|74.6|20.5|1 biscuit=12;3 biscuits=36|cookies
us-graham-crackers-biscuits-chocolate-coated|Graham crackers biscuits, chocolate-coated|BB|500|4|66.8|25.8|5 crackers=15;1 serving=30|cookies
us-graham-crackers-biscuits-plain-or-honey|Graham crackers biscuits, plain or honey|BB|430|6.7|77.7|10.6|5 crackers=15;1 serving=30|cookies
us-graham-crackers-biscuits-plain-or-honey-lowfat|Graham crackers biscuits, plain or honey, lowfat|BB|386|5.7|78|5.7|5 crackers=15;1 serving=30|cookies
us-ladyfingers-biscuits-with-lemon-juice-and-rind|Ladyfingers biscuits, with lemon juice and rind|BB|365|10.6|59.7|9.1|1 biscuit=12;3 biscuits=36|cookies
us-ladyfingers-biscuits-without-lemon-juice-and-rin|Ladyfingers biscuits, without lemon juice and rind|BB|363|10.6|59.7|9.1|1 biscuit=12;3 biscuits=36|cookies
us-marie-biscuit-biscuits|Marie biscuit biscuits|BB|406|7.1|70.5|10.6|1 biscuit=12;3 biscuits=36|cookies
us-marshmallow-biscuits-chocolate-coated|Marshmallow biscuits, chocolate-coated|BB|421|4|67.7|16.9|1 biscuit=12;3 biscuits=36|cookies
us-marshmallow-biscuits-with-rice-cereal-and-chocol|Marshmallow biscuits, with rice cereal and chocolate chips|BB|435|4.6|63.3|18.2|1 biscuit=12;3 biscuits=36|cookies
us-molasses-biscuits|Molasses biscuits|BB|430|5.6|73.8|12.8|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits|Oatmeal biscuits|BB|450|6.2|68.7|18.1|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-reduced-fat|Oatmeal biscuits, reduced fat|BB|365|4|64.6|10|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-refrigerated-dough|Oatmeal biscuits, refrigerated dough|BB|424|5.4|59.1|18.9|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-refrigerated-dough-baked|Oatmeal biscuits, refrigerated dough, baked|BB|471|6|65.7|21|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-sandwich-biscuits-with-creme-filling|Oatmeal sandwich biscuits, with creme filling|BB|398|2.6|55.6|18.3|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-soft-type|Oatmeal biscuits, soft-type|BB|409|6.1|65.7|14.7|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-special-dietary|Oatmeal biscuits, special dietary|BB|449|4.8|69.9|18|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-without-raisins|Oatmeal biscuits, without raisins|BB|447|6.8|66.4|17.9|1 biscuit=12;3 biscuits=36|cookies
us-oatmeal-biscuits-with-raisins|Oatmeal biscuits, with raisins|BB|441|5.9|69|15.8|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-biscuits|Peanut butter biscuits|BB|475|9|58.9|23.8|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-biscuits-refrigerated-dough|Peanut butter biscuits, refrigerated dough|BB|458|8.2|52.1|25|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-biscuits-refrigerated-dough-baked|Peanut butter biscuits, refrigerated dough, baked|BB|503|9.1|57.3|27.5|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-sandwich-biscuits|Peanut butter sandwich biscuits|BB|478|8.8|65.6|21.1|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-sandwich-biscuits-special-dietary|Peanut butter sandwich biscuits, special dietary|BB|535|10|50.8|34|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-biscuits-soft-type|Peanut butter biscuits, soft-type|BB|457|5.3|57.7|24.4|1 biscuit=12;3 biscuits=36|cookies
us-peanut-butter-biscuits-sugar-free|Peanut butter biscuits, sugar free|BB|523|10.3|50.5|31|1 biscuit=12;3 biscuits=36|cookies
us-raisin-biscuits-soft-type|Raisin biscuits, soft-type|BB|401|4.1|68|13.6|1 biscuit=12;3 biscuits=36|cookies
us-shortbread-biscuits-pecan|Shortbread biscuits, pecan|BB|542|4.9|58.3|32.5|1 slice=30;1 roll=60|cookies
us-shortbread-biscuits-plain|Shortbread biscuits, plain|BB|514|5.4|63.8|26.2|1 slice=30;1 roll=60|cookies
us-shortbread-biscuits-reduced-fat|Shortbread biscuits, reduced fat|BB|451|5.4|76|14|1 slice=30;1 roll=60|cookies
us-sugar-biscuits|Sugar biscuits|BB|464|5.4|67.3|19.6|1 biscuit=12;3 biscuits=36|cookies
us-sugar-biscuits-refrigerated-dough|Sugar biscuits, refrigerated dough|BB|436|4|61.2|19.5|1 biscuit=12;3 biscuits=36|cookies
us-sugar-biscuits-refrigerated-dough-baked|Sugar biscuits, refrigerated dough, baked|BB|489|4.7|65.6|23.1|1 biscuit=12;3 biscuits=36|cookies
us-sugar-wafer-biscuits-chocolate-covered|Sugar wafer biscuits, chocolate-covered|BB|526|3.5|66|27.6|1 biscuit=12;3 biscuits=36|cookies
us-biscuits-sugar-wafers-with-creme-filling|Biscuits, sugar wafers with creme filling|BB|502|3.8|70.6|23.2|1 biscuit=12;3 biscuits=36|cookies
us-sugar-wafer-biscuits-with-creme-filling-sugar-fr|Sugar wafer biscuits, with creme filling, sugar free|BB|531|3.6|66.3|28.6|1 biscuit=12;3 biscuits=36|cookies
us-biscuits-vanilla-sandwich-with-creme-filling|Biscuits, vanilla sandwich with creme filling|BB|483|4.5|72.1|20|1 biscuit=12;3 biscuits=36|cookies
us-biscuits-vanilla-sandwich-with-creme-filling-red|Biscuits, vanilla sandwich with creme filling, reduced fat|BB|423|4.2|78.2|10.4|1 biscuit=12;3 biscuits=36|cookies
us-vanilla-wafers-biscuits-higher-fat|Vanilla wafers biscuits, higher fat|BB|455|4.9|72.6|16.4|1 biscuit=12;3 biscuits=36|cookies
us-vanilla-wafers-biscuits-lower-fat|Vanilla wafers biscuits, lower fat|BB|441|5|73.6|15.2|1 biscuit=12;3 biscuits=36|cookies
us-cookie-vanilla-with-caramel-coconut-and-chocolat|Cookie, vanilla with caramel, coconut, and chocolate coating|BB|489|3.5|64.1|25.8|1 biscuit=12;3 biscuits=36|
us-cookie-with-peanut-butter-filling-chocolate-coat|Cookie, with peanut butter filling, chocolate-coated|BB|562|8.1|52.9|35.3|1 biscuit=12;3 biscuits=36|
us-cracker-meal|Cracker, meal|BB|383|9.3|80.9|1.7|5 crackers=15;1 serving=30|
us-cheese-crackers|Cheese crackers|BB|489|10.9|59.4|22.7|5 crackers=15;1 serving=30|
us-cheese-crackers-low-sodium|Cheese crackers, low sodium|BB|503|10.1|58.2|25.3|5 crackers=15;1 serving=30|
us-cheese-crackers-reduced-fat|Cheese crackers, reduced fat|BB|418|10|68.2|11.7|5 crackers=15;1 serving=30|
us-cheese-crackers-sandwich-type-with-cheese-fillin|Cheese crackers, sandwich-type with cheese filling|BB|490|8.9|58.8|24.4|5 crackers=15;1 serving=30|
us-cheese-crackers-sandwich-type-with-peanut-butter|Cheese crackers, sandwich-type with peanut butter filling|BB|496|12.4|56.7|25.1|5 crackers=15;1 serving=30|
us-cheese-crackers-whole-grain|Cheese crackers, whole grain|BB|412|9.6|57.3|16|5 crackers=15;1 serving=30|
us-cream-crackers-gamesa-sabrosas|Cream crackers, Gamesa Sabrosas|BB|484|7|64.6|20.4|5 crackers=15;1 serving=30|
us-cream-crackers-la-moderna-rikis-cream-crackers|Cream crackers, La Moderna Rikis Cream Crackers|BB|464|7.2|64.9|19.5|5 crackers=15;1 serving=30|
us-crispbread-crackers-rye|Crispbread crackers, rye|BB|366|7.9|82.2|1.3|1 slice=30;1 roll=60|
us-flavored-crackers-fish-shaped|Flavored crackers, fish-shaped|BB|463|10.2|65.7|17.7|5 crackers=15;1 serving=30|
us-gluten-free-crackers-multigrain-and-vegetable|Gluten-free crackers, multigrain and vegetable|BB|456|2.5|76.9|15.4|5 crackers=15;1 serving=30|corn flour made rice starch white
us-gluten-free-crackers-multi-seeded-and-multigrain|Gluten-free crackers, multi-seeded and multigrain|BB|453|11.3|66.3|15.8|5 crackers=15;1 serving=30|
us-matzo-crackers-egg|Matzo crackers, egg|BB|391|12.3|78.6|2.1|5 crackers=15;1 serving=30|
us-matzo-crackers-egg-and-onion|Matzo crackers, egg and onion|BB|391|10|77.1|3.9|5 crackers=15;1 serving=30|
us-matzo-crackers-plain|Matzo crackers, plain|BB|395|10|83.7|1.4|5 crackers=15;1 serving=30|
us-matzo-crackers-whole-wheat|Matzo crackers, whole-wheat|BB|351|13.1|78.9|1.5|5 crackers=15;1 serving=30|
us-melba-toast-crackers-plain|Melba toast crackers, plain|BB|390|12.1|76.6|3.2|5 crackers=15;1 serving=30|
us-melba-toast-crackers-rye|Melba toast crackers, rye|BB|389|11.6|77.3|3.4|5 crackers=15;1 serving=30|
us-melba-toast-crackers-wheat|Melba toast crackers, wheat|BB|374|12.9|76.4|2.3|5 crackers=15;1 serving=30|
us-milk-crackers|Milk crackers|BB|446|7.6|71.7|13.8|1 glass=250;1 cup=250||L
us-multigrain-crackers|Multigrain crackers|BB|482|7.1|67.6|20.4|5 crackers=15;1 serving=30|
us-rusk-toast-crackers|Rusk toast crackers|BB|407|13.5|72.3|7.2|5 crackers=15;1 serving=30|
us-rye-crackers-sandwich-type-with-cheese-filling|Rye crackers, sandwich-type with cheese filling|BB|481|9.2|60.8|22.3|5 crackers=15;1 serving=30|
us-rye-crackers-wafers-plain|Rye crackers, wafers, plain|BB|334|9.6|80.4|0.9|5 crackers=15;1 serving=30|
us-rye-crackers-wafers-seasoned|Rye crackers, wafers, seasoned|BB|381|9|73.8|9.2|5 crackers=15;1 serving=30|
us-saltines-crackers|Saltines crackers|BB|418|9.5|74.1|8.6|5 crackers=15;1 serving=30|
us-saltines-crackers-fat-free-low-sodium|Saltines crackers, fat-free, low-sodium|BB|393|10.5|82.3|1.6|5 crackers=15;1 serving=30|
us-saltines-crackers-low-salt|Saltines crackers, low salt|BB|421|9.5|74.3|8.9|5 crackers=15;1 serving=30|
us-saltines-crackers-unsalted-tops|Saltines crackers, unsalted tops|BB|434|9.2|71.5|11.8|5 crackers=15;1 serving=30|
us-saltines-crackers-whole-wheat|Saltines crackers, whole wheat|BB|398|7.1|68.3|10.7|5 crackers=15;1 serving=30|
us-sandwich-type-crackers-peanut-butter-filled-redu|Sandwich-type crackers, peanut butter filled, reduced fat|BB|437|8.3|63.5|16.7|5 crackers=15;1 serving=30|
us-snack-crackers-goya-crackers|Snack crackers, Goya Crackers|BB|433|14.3|64.4|13.4|5 crackers=15;1 serving=30|
us-standard-snack-type-crackers|Standard snack-type crackers|BB|510|6.6|61.3|26.4|5 crackers=15;1 serving=30|
us-standard-snack-type-crackers-low-salt|Standard snack-type crackers, low salt|BB|502|7.4|61|25.3|5 crackers=15;1 serving=30|
us-standard-snack-type-crackers-sandwich-with-chees|Standard snack-type crackers, sandwich, with cheese filling|BB|477|9.3|61.7|21.1|5 crackers=15;1 serving=30|
us-standard-snack-type-crackers-sandwich|Standard snack-type crackers, sandwich|BB|494|11.5|58.4|24.5|5 crackers=15;1 serving=30|butter filling peanut
us-standard-snack-type-crackers-with-whole-wheat|Standard snack-type crackers, with whole wheat|BB|463|7.3|68.4|17.8|5 crackers=15;1 serving=30|
us-toast-thins-crackers-low-sodium|Toast thins crackers, low sodium|BB|442|6.5|67.7|16.1|5 crackers=15;1 serving=30|
us-water-biscuits-crackers|Water biscuits crackers|BB|384|7.1|72.8|7.1|5 crackers=15;1 serving=30|
us-wheat-crackers|Wheat crackers|BB|455|7.3|70.7|16.4|5 crackers=15;1 serving=30|
us-wheat-crackers-low-salt|Wheat crackers, low salt|BB|473|8.6|64.9|20.6|5 crackers=15;1 serving=30|
us-wheat-crackers-reduced-fat|Wheat crackers, reduced fat|BB|444|9.3|71.5|13.4|5 crackers=15;1 serving=30|
us-wheat-crackers-sandwich-with-cheese-filling|Wheat crackers, sandwich, with cheese filling|BB|497|9.8|58.2|25|5 crackers=15;1 serving=30|
us-wheat-crackers-sandwich-with-peanut-butter-filli|Wheat crackers, sandwich, with peanut butter filling|BB|495|13.5|53.8|26.7|5 crackers=15;1 serving=30|
us-whole-grain-crackers-sandwich-type-with-peanut-b|Whole grain crackers, sandwich-type, with peanut butter filling|BB|465|14.1|54.6|21.2|5 crackers=15;1 serving=30|
us-whole-wheat-crackers|Whole-wheat crackers|BB|427|10.6|69.6|14.1|5 crackers=15;1 serving=30|
us-whole-wheat-crackers-low-salt|Whole-wheat crackers, low salt|BB|443|8.8|68.6|17.2|5 crackers=15;1 serving=30|
us-whole-wheat-crackers-reduced-fat|Whole-wheat crackers, reduced fat|BB|416|11.3|75.5|7.6|5 crackers=15;1 serving=30|
us-cream-puff-eclair-custard-or-cream-filled-iced|Cream puff, eclair, custard or cream filled, iced|BB|334|4.4|37.4|18.5|1 piece=60;1 slice=80|
us-cream-puff-shell|Cream puff shell|BB|360|9|22.8|25.9|1 piece=60;1 slice=80|
us-croissants-apple|Croissants, apple|BB|254|7.4|37.1|8.7|1 piece=60;1 large=110|
us-croissants-butter|Croissants, butter|BB|406|8.2|45.8|21|1 piece=60;1 large=110|
us-croissants-cheese|Croissants, cheese|BB|414|9.2|47|20.9|1 piece=60;1 large=110|
us-croutons-plain|Croutons, plain|BB|407|11.9|73.5|6.6|1 piece=60;1 slice=80|
us-croutons-seasoned|Croutons, seasoned|BB|465|10.8|63.5|18.3|1 piece=60;1 slice=80|
us-crunchmaster-multi-grain-crisps-snack-crackers-g|Crunchmaster, Multi-Grain Crisps, Snack Crackers, Gluten-Free|BB|456|10.9|67.2|15.9|5 crackers=15;1 serving=30|
us-danish-pastry-cheese|Danish pastry, cheese|BB|374|8|37.2|21.9|1 piece=60;1 large=110|
us-danish-pastry-cinnamon|Danish pastry, cinnamon|BB|403|7|44.6|22.4|1 piece=60;1 large=110|
us-danish-pastry-fruit|Danish pastry, fruit|BB|371|5.4|47.8|18.5|1 piece=60;1 large=110|
us-danish-pastry-lemon|Danish pastry, lemon|BB|371|5.4|47.8|18.5|1 piece=60;1 large=110|
us-danish-pastry-raspberry|Danish pastry, raspberry|BB|371|5.4|47.8|18.5|1 piece=60;1 large=110|
us-doughnuts-cake-type-chocolate-sugared-or-glazed|Doughnuts, cake-type, chocolate, sugared or glazed|BB|417|4.5|57.4|19.9|1 piece=60;1 large=110|
us-doughnuts-cake-type-plain|Doughnuts, cake-type, plain|BB|434|5.3|47.1|24.9|1 piece=60;1 large=110|
us-doughnuts-cake-type-plain-chocolate-coated-or-fr|Doughnuts, cake-type, plain, chocolate-coated or frosted|BB|452|4.9|51.3|25.3|1 piece=60;1 large=110|
us-doughnuts-cake-type-plain-sugared-or-glazed|Doughnuts, cake-type, plain, sugared or glazed|BB|426|5.2|50.8|22.9|1 piece=60;1 large=110|
us-doughnuts-french-crullers-glazed|Doughnuts, french crullers, glazed|BB|412|3.1|59.5|18.3|1 piece=60;1 large=110|
us-doughnuts-yeast-leavened-glazed|Doughnuts, yeast-leavened, glazed|BB|421|6.1|47.9|22.7|1 piece=60;1 large=110|
us-doughnuts-yeast-leavened-with-creme-filling|Doughnuts, yeast-leavened, with creme filling|BB|361|6.4|30|24.5|1 piece=60;1 large=110|
us-doughnuts-yeast-leavened-with-jelly-filling|Doughnuts, yeast-leavened, with jelly filling|BB|340|5.9|39|18.7|1 piece=60;1 large=110|
us-english-muffins-plain-with-calcium-propionate|English muffins, plain, with calcium propionate|BB|235|7.7|46|1.8|1 piece=60;1 large=110|
us-english-muffins-plain-without-calcium-propionate|English muffins, plain, without calcium propionate|BB|235|7.7|46|1.8|1 piece=60;1 large=110|
us-english-muffins-whole-grain-white|English muffins, whole grain white|BB|245|7|50.2|1.8|1 piece=60;1 large=110|
us-focaccia-italian-flatbread-plain|Focaccia, Italian flatbread, plain|BB|249|8.8|35.8|7.9|1 slice=30;1 roll=60|
us-french-toast-frozen-ready-to-heat|French toast, frozen, ready-to-heat|BB|213|7.4|32.1|6.1|1 piece=60;1 slice=80|
us-french-toast-made-with-low-fat-2-milk|French toast, made with low fat (2%) milk|BB|229|7.7|25|10.8|1 piece=60;1 slice=80|
us-garlic-bread-frozen|Garlic bread, frozen|BB|350|8.4|41.7|16.6|1 slice=30;1 roll=60|
us-george-weston-bakeries-brownberry-sage-and-onion|George Weston Bakeries, Brownberry Sage and Onion Stuffing Mix|BB|390|13.3|72.7|5.1|1 piece=60;1 slice=80|
us-george-weston-bakeries-thomas-english-muffins|George Weston Bakeries, Thomas English Muffins|BB|232|8|46|1.8|1 piece=60;1 large=110|
us-glutino-gluten-free-cookies-chocolate-vanilla-cr|Glutino, Gluten Free Cookies, Chocolate Vanilla Creme|BB|474|2.2|76|17.9|1 biscuit=12;3 biscuits=36|
us-glutino-gluten-free-cookies-vanilla-creme|Glutino, Gluten Free Cookies, Vanilla Creme|BB|487|2.2|77.3|18.8|1 biscuit=12;3 biscuits=36|
us-glutino-gluten-free-wafers-lemon-flavored|Glutino, Gluten Free Wafers, Lemon Flavored|BB|515|0|74.4|24.2|1 biscuit=12;3 biscuits=36|
us-glutino-gluten-free-wafers-milk-chocolate|Glutino, Gluten Free Wafers, Milk Chocolate|BB|541|4.1|62.8|30.4|1 biscuit=12;3 biscuits=36|
us-heinz-weight-watcher-chocolate-eclair-frozen|Heinz, Weight Watcher, Chocolate Eclair, frozen|BB|241|4.4|40.3|6.9|1 piece=60;1 slice=80|
us-hush-puppies|Hush puppies|BB|337|7.7|46|13.5|1 slice=80;1 small slice=50|
us-ice-cream-cones-cake-or-wafer-type|Ice cream cones, cake or wafer-type|BB|417|8.1|79|6.9|1 biscuit=12;3 biscuits=36|
us-ice-cream-cones-sugar-rolled-type|Ice cream cones, sugar, rolled-type|BB|402|7.9|84.1|3.8|1 slice=30;1 roll=60|
us-interstate-brands-corp-wonder-hamburger-rolls|Interstate Brands Corp, Wonder Hamburger Rolls|BB|273|8.1|50.8|4.2|1 slice=30;1 roll=60|
us-keebler-keebler-chocolate-graham-selects|Keebler, Keebler Chocolate Graham Selects|BB|465|7.1|71.8|16.6|1 piece=60;1 slice=80|
us-keikitos-muffins-latino-bakery-item|Keikitos (muffins), Latino bakery item|BB|467|6.8|53.2|25.2|1 piece=60;1 large=110|
us-kraft-foods-shake-n-bake-original-recipe-coating|Kraft Foods, Shake N Bake Original Recipe, Coating for Pork, dry|BB|377|6.1|79.8|3.7|1 piece=60;1 slice=80|
us-kraft-stove-top-stuffing-mix-chicken-flavor|Kraft, Stove Top Stuffing Mix Chicken Flavor|BB|381|12.6|73.1|4.1|1 piece=60;1 slice=80|
us-leavening-agents-cream-of-tartar|Leavening agents, cream of tartar|BB|258|0|61.5|0|1 slice=80;1 small slice=50|
us-leavening-agents-yeast-baker-s-active-dry|Leavening agents, yeast, baker's, active dry|BB|325|40.4|41.2|7.6|1 piece=60;1 slice=80|
us-leavening-agents-yeast-baker-s-compressed|Leavening agents, yeast, baker's, compressed|BB|105|8.4|18.1|1.9|1 piece=60;1 slice=80|
us-martha-white-foods-martha-white-s-buttermilk-bis|Martha White Foods, Martha White's Buttermilk Biscuit Mix, dry|BB|388|7.8|59.4|13.2|1 piece=60;1 slice=80|
us-martha-white-foods-martha-white-s-chewy-fudge-br|Martha White Foods, Martha White's Chewy Fudge Brownie Mix, dry|BB|407|4.4|83.6|6.2|1 slice=80;1 small slice=50|
us-mary-s-gone-crackers-original-crackers-organic-g|Mary's Gone Crackers, Original Crackers, Organic Gluten Free|BB|446|12.1|64.3|15.6|5 crackers=15;1 serving=30|
us-mckee-baking-little-debbie-nutty-bars|Mckee Baking, Little Debbie Nutty Bars|BB|548|8|55.2|32.8|1 piece=60;1 slice=80|butter chocolate covered peanut wafers
us-mission-foods-mission-flour-tortillas-soft-taco-|Mission Foods, Mission Flour Tortillas, Soft Taco, 8 inch|BB|287|8.7|49.6|6|1 slice=30;1 roll=60|
us-blueberry-muffin-low-fat|Blueberry muffin, low-fat|BB|255|4.2|50.1|4.2|1 piece=60;1 large=110|
us-blueberry-muffin|Blueberry muffin|BB|375|4.5|53|16.1|1 piece=60;1 large=110|muffins
us-blueberry-muffin-made-with-low-fat-2-milk|Blueberry muffin, made with low fat (2%) milk|BB|285|6.5|40.7|10.8|1 piece=60;1 large=110|muffins
us-blueberry-muffin-toaster-type|Blueberry muffin, toaster-type|BB|313|4.6|53.3|9.5|1 piece=60;1 large=110|muffins
us-blueberry-muffin-toaster-type-toasted|Blueberry muffin, toaster-type, toasted|BB|333|4.9|56.7|10.1|1 piece=60;1 large=110|muffins
us-corn-muffin|Corn muffin|BB|305|5.9|51|8.4|1 piece=60;1 large=110|muffins
us-corn-muffin-made-with-low-fat-2-milk|Corn muffin, made with low fat (2%) milk|BB|316|7.1|44.2|12.3|1 piece=60;1 large=110|muffins
us-corn-muffin-toaster-type|Corn muffin, toaster-type|BB|346|5.3|57.9|11.3|1 piece=60;1 large=110|muffins
us-english-muffin-mixed-grain|English muffin, mixed-grain|BB|235|9.1|46.3|1.8|1 piece=60;1 large=110|muffins
us-english-muffin-plain-toasted-with-calcium-propio|English muffin, plain, toasted, with calcium propionate|BB|270|10.3|52.7|2|1 piece=60;1 large=110|muffins
us-english-muffin-plain-with-ca-prop|English muffin, plain, with ca prop|BB|227|8.9|44.2|1.7|1 piece=60;1 large=110|muffins
us-english-muffin-raisin-cinnamon|English muffin, raisin-cinnamon|BB|240|7.9|48.1|1.8|1 piece=60;1 large=110|muffins
us-english-muffin-raisin-cinnamon-toasted|English muffin, raisin-cinnamon, toasted|BB|276|8.9|55|2.2|1 piece=60;1 large=110|muffins
us-english-muffin-wheat|English muffin, wheat|BB|223|8.7|44.8|2|1 piece=60;1 large=110|muffins
us-english-muffin-whole-wheat|English muffin, whole-wheat|BB|203|8.8|40.4|2.1|1 piece=60;1 large=110|muffins
us-oat-bran-muffin|Oat bran muffin|BB|270|7|48.3|7.4|1 piece=60;1 large=110|muffins
us-plain-muffin-made-with-low-fat-2-milk|Plain muffin, made with low fat (2%) milk|BB|296|6.9|41.4|11.4|1 piece=60;1 large=110|muffins
us-wheat-bran-muffin-toaster-type-with-raisins-toas|Wheat bran muffin, toaster-type with raisins, toasted|BB|313|5.5|55.5|9.4|1 piece=60;1 large=110|muffins
us-nabisco-nabisco-grahams-crackers|Nabisco, Nabisco Grahams Crackers|BB|424|7|76.2|10|5 crackers=15;1 serving=30|
us-nabisco-nabisco-oreo-crunchies-cookie-crumb-topp|Nabisco, Nabisco Oreo Crunchies, Cookie Crumb Topping|BB|476|4.8|70.2|21.5|1 biscuit=12;3 biscuits=36|
us-nabisco-nabisco-ritz-crackers|Nabisco, Nabisco Ritz Crackers|BB|492|7.2|63.5|23.2|5 crackers=15;1 serving=30|
us-nabisco-nabisco-snackwell-s-fat-free-devil-s-foo|Nabisco, Nabisco Snackwell's Fat Free Devil's Food Cookie Cakes|BB|305|5|74.3|1.1|1 biscuit=12;3 biscuits=36|
us-pancakes-blueberry|Pancakes, blueberry|BB|222|6.1|29|9.2|1 pancake=40;3 pancakes=120|
us-pancakes-buttermilk|Pancakes, buttermilk|BB|227|6.8|28.7|9.3|1 pancake=40;3 pancakes=120|
us-pancakes-gluten-free-frozen-ready-to-heat|Pancakes, gluten-free, frozen, ready-to-heat|BB|215|3.3|40.3|4.6|1 pancake=40;3 pancakes=120|
us-pancakes-plain|Pancakes, plain|BB|227|6.4|28.3|9.7|1 pancake=40;3 pancakes=120|
us-pancakes-plain-frozen-ready-to-heat|Pancakes plain, frozen, ready-to-heat|BB|233|5.2|37.8|6.8|1 pancake=40;3 pancakes=120|
us-pancakes-plain-frozen-ready-to-heat-microwave|Pancakes, plain, frozen, ready-to-heat, microwave|BB|239|5.9|43.3|4.7|1 pancake=40;3 pancakes=120|
us-pancakes-plain-reduced-fat|Pancakes, plain, reduced fat|BB|269|5.7|57.3|1.9|1 pancake=40;3 pancakes=120|
us-pan-dulce-la-ricura-salpora-de-arroz-con-azucar-|Pan Dulce, La Ricura, Salpora de Arroz con Azucar, cookie-like|BB|445|8.8|66.3|16.1|1 biscuit=12;3 biscuits=36|contains flour rice wheat
us-pastry-pastelitos-de-guava-guava-pastries|Pastry, Pastelitos de Guava (guava pastries)|BB|379|5.5|47.8|18.5|1 piece=60;1 slice=80|
us-pepperidge-farm-goldfish-baked-snack-crackers-ch|Pepperidge Farm, Goldfish, Baked Snack Crackers, Cheddar|BB|457|11.7|66.2|16.1|5 crackers=15;1 serving=30|
us-pepperidge-farm-goldfish-baked-snack-crackers-ex|Pepperidge Farm, Goldfish, Baked Snack Crackers, Explosive Pizza|BB|458|9.6|67.2|16.8|5 crackers=15;1 serving=30|
us-pepperidge-farm-goldfish-baked-snack-crackers-or|Pepperidge Farm, Goldfish, Baked Snack Crackers, Original|BB|467|9.4|65.8|18.4|5 crackers=15;1 serving=30|
us-pepperidge-farm-goldfish-baked-snack-crackers-pa|Pepperidge Farm, Goldfish, Baked Snack Crackers, Parmesan|BB|459|11.2|64.7|17.3|5 crackers=15;1 serving=30|
us-pepperidge-farm-goldfish-baked-snack-crackers-pi|Pepperidge Farm, Goldfish, Baked Snack Crackers, Pizza|BB|469|9.7|65.1|18.9|5 crackers=15;1 serving=30|
us-phyllo-dough|Phyllo dough|BB|299|7.1|52.6|6|1 piece=60;1 slice=80|
us-apple-pie|Apple pie|BB|265|2.4|37.1|12.5|1 slice=80;1 small slice=50|
us-banana-cream-pie|Banana cream pie|BB|269|4.4|32.9|13.6|1 slice=80;1 small slice=50|
us-banana-cream-pie-prepared-from-mix-no-bake-type|Banana cream pie, prepared from mix, no-bake type|BB|251|3.4|31.6|12.9|1 slice=80;1 small slice=50|
us-blueberry-pie|Blueberry pie|BB|245|2.7|33.5|11.9|1 slice=80;1 small slice=50|
us-cherry-pie|Cherry pie|BB|270|2.8|38.5|12.2|1 slice=80;1 small slice=50|
us-chocolate-creme-pie|Chocolate creme pie|BB|353|4.2|38.4|22.4|1 slice=80;1 small slice=50|
us-chocolate-mousse-pie-prepared-from-mix-no-bake-t|Chocolate mousse pie, prepared from mix, no-bake type|BB|260|3.5|29.6|15.4|1 slice=80;1 small slice=50|
us-coconut-cream-pie-prepared-from-mix-no-bake-type|Coconut cream pie, prepared from mix, no-bake type|BB|276|2.8|28.5|17.6|1 slice=80;1 small slice=50|
us-coconut-creme-pie|Coconut creme pie|BB|298|2.1|37.3|16.6|1 slice=80;1 small slice=50|
us-coconut-custard-pie|Coconut custard pie|BB|260|5.9|30.2|13.2|1 slice=80;1 small slice=50|
us-pie-crust-cookie-type-chocolate-ready-crust|Pie Crust, Cookie-type, Chocolate, Ready Crust|BB|484|6.1|64.5|22.4|1 biscuit=12;3 biscuits=36|
us-pie-crust-cookie-type-graham-cracker-chilled|Pie crust, cookie-type, graham cracker, chilled|BB|484|4.1|63.9|24.4|5 crackers=15;1 serving=30|
us-pie-crust-cookie-type-graham-cracker-ready-crust|Pie Crust, Cookie-type, Graham Cracker, Ready Crust|BB|501|5.1|64.3|24.8|5 crackers=15;1 serving=30|
us-pie-crust-cookie-type-vanilla-wafer-chilled|Pie crust, cookie-type, vanilla wafer, chilled|BB|531|3.7|50.2|36.2|1 biscuit=12;3 biscuits=36|
us-pie-crust-refrigerated-baked|Pie crust, refrigerated, baked|BB|506|3.4|58.5|28.7|1 slice=80;1 small slice=50|
us-pie-crust-refrigerated-unbaked|Pie crust, refrigerated, unbaked|BB|445|3|51.1|25.5|1 slice=80;1 small slice=50|
us-pie-crust-standard-type-baked|Pie crust, standard-type, baked|BB|527|6.4|47.5|34.6|1 slice=80;1 small slice=50|
us-pie-crust-standard-type-frozen-ready-to-bake|Pie crust, standard-type, frozen, ready-to-bake|BB|457|6.2|48.6|26.1|1 slice=80;1 small slice=50|
us-pie-crust-standard-type-frozen-ready-to-bake-bak|Pie crust, standard-type, frozen, ready-to-bake, baked|BB|508|6.5|56.2|28.6|1 slice=80;1 small slice=50|
us-pie-crust-standard-type-unbaked|Pie crust, standard-type, unbaked|BB|469|5.7|42.3|30.8|1 slice=80;1 small slice=50|
us-dutch-apple-pie|Dutch Apple pie|BB|290|2.2|44.5|11.5|1 slice=80;1 small slice=50|
us-egg-custard-pie|Egg custard pie|BB|210|5.5|20.8|11.6|1 slice=80;1 small slice=50|
us-fried-pies-pie-cherry|Fried pies pie, cherry|BB|316|3|42.6|16.1|1 slice=80;1 small slice=50|
us-fried-pies-pie-fruit|Fried pies pie, fruit|BB|316|3|42.6|16.1|1 slice=80;1 small slice=50|
us-fried-pies-pie-lemon|Fried pies pie, lemon|BB|316|3|42.6|16.1|1 slice=80;1 small slice=50|
us-lemon-meringue-pie|Lemon meringue pie|BB|285|3.8|39.1|12.9|1 slice=80;1 small slice=50|
us-mince-pie|Mince pie|BB|289|2.6|48|10.8|1 slice=80;1 small slice=50|
us-peach-pie|Peach pie|BB|224|1.9|32.9|10|1 slice=80;1 small slice=50|
us-pecan-pie|Pecan pie|BB|412|4.9|52.2|22.2|1 slice=80;1 small slice=50|
us-pumpkin-pie|Pumpkin pie|BB|243|3.9|34.8|9.8|1 slice=80;1 small slice=50|
us-vanilla-cream-pie|Vanilla cream pie|BB|278|4.8|32.6|14.4|1 slice=80;1 small slice=50|
us-pillsbury-buttermilk-biscuits-artificial-flavor|Pillsbury, Buttermilk Biscuits, Artificial Flavor|BB|236|6.4|47.1|2.8|1 biscuit=12;3 biscuits=36|dough refrigerated
us-pillsbury-chocolate-chip-cookies-refrigerated-do|Pillsbury, Chocolate Chip Cookies, refrigerated dough|BB|450|3.8|60.8|21.3|1 biscuit=12;3 biscuits=36|
us-pillsbury-cinnamon-rolls-with-icing-refrigerated|Pillsbury, Cinnamon Rolls with Icing, refrigerated dough|BB|330|4.3|53.4|11.3|1 slice=30;1 roll=60|
us-pillsbury-crusty-french-loaf-refrigerated-dough|Pillsbury, Crusty French Loaf, refrigerated dough|BB|243|8.6|46.4|2.9|1 piece=60;1 slice=80|
us-pillsbury-golden-layer-buttermilk-biscuits-artif|Pillsbury Golden Layer Buttermilk Biscuits, Artificial Flavor|BB|307|5.9|41.2|13.2|1 biscuit=12;3 biscuits=36|dough refrigerated
us-pillsbury-grands-buttermilk-biscuits-refrigerate|Pillsbury Grands, Buttermilk Biscuits, refrigerated dough|BB|293|6.2|42.4|11.3|1 biscuit=12;3 biscuits=36|
us-puff-pastry-frozen-ready-to-bake|Puff pastry, frozen, ready-to-bake|BB|551|7.3|45.1|38.1|1 piece=60;1 slice=80|
us-puff-pastry-frozen-ready-to-bake-baked|Puff pastry, frozen, ready-to-bake, baked|BB|558|7.4|45.7|38.5|1 piece=60;1 slice=80|
us-rolls-dinner-egg|Rolls, dinner, egg|BB|307|9.5|52|6.4|1 slice=30;1 roll=60|
us-rolls-dinner-oat-bran|Rolls, dinner, oat bran|BB|236|9.5|40.2|4.6|1 slice=30;1 roll=60|
us-rolls-dinner-plain|Rolls, dinner, plain|BB|310|10.9|52|6.5|1 slice=30;1 roll=60|
us-rolls-dinner-plain-made-with-low-fat-2-milk|Rolls, dinner, plain, made with low fat (2%) milk|BB|316|8.5|53.4|7.3|1 slice=30;1 roll=60|
us-rolls-dinner-rye|Rolls, dinner, rye|BB|286|10.3|53.1|3.4|1 slice=30;1 roll=60|
us-rolls-dinner-sweet|Rolls, dinner, sweet|BB|321|10|53.6|7.4|1 slice=30;1 roll=60|
us-rolls-dinner-wheat|Rolls, dinner, wheat|BB|273|8.6|46|6.3|1 slice=30;1 roll=60|
us-rolls-dinner-whole-wheat|Rolls, dinner, whole-wheat|BB|266|8.7|51.1|4.7|1 slice=30;1 roll=60|
us-rolls-french|Rolls, french|BB|277|8.6|50.2|4.3|1 slice=30;1 roll=60|
us-rolls-gluten-free-white-made-with-brown-rice-flo|Rolls, gluten-free, white, made with brown rice flour|BB|257|5.7|40.2|8.2|1 slice=30;1 roll=60|starch tapioca
us-rolls-gluten-free-white-made-with-rice-flour-ric|Rolls, gluten-free, white, made with rice flour, rice starch|BB|239|3.3|50.5|2.7|1 slice=30;1 roll=60|
us-rolls-gluten-free-whole-grain|Rolls, gluten-free, whole grain|BB|329|11.8|44.3|11.6|1 slice=30;1 roll=60|brown flour made rice starch tapioca
us-rolls-hamburger-or-hotdog-mixed-grain|Rolls, hamburger or hotdog, mixed-grain|BB|263|9.6|44.6|6|1 slice=30;1 roll=60|
us-rolls-hamburger-or-hotdog-plain|Rolls, hamburger or hotdog, plain|BB|279|9.8|50.1|3.9|1 slice=30;1 roll=60|
us-rolls-hamburger-or-hot-dog-wheat-cracked-wheat|Rolls, hamburger or hot dog, wheat/cracked wheat|BB|269|11.7|47.3|3.6|1 slice=30;1 roll=60|
us-rolls-hamburger-or-hot-dog-whole-wheat|Rolls, hamburger or hot dog, whole wheat|BB|269|12.4|44.9|4.4|1 slice=30;1 roll=60|
us-rolls-hamburger-whole-grain-white-calcium-fortif|Rolls, hamburger, whole grain white, calcium-fortified|BB|255|9.3|46.5|3.5|1 slice=30;1 roll=60|
us-rolls-hard|Rolls, hard|BB|293|9.9|52.7|4.3|1 slice=30;1 roll=60|
us-rolls-pumpernickel|Rolls, pumpernickel|BB|276|10.8|51.9|2.8|1 slice=30;1 roll=60|
us-rudi-s-gluten-free-bakery-original-sandwich-brea|Rudi's, Gluten-Free Bakery, Original Sandwich Bread|BB|320|3.1|52.8|10.7|1 slice=30;1 roll=60|
us-sage-valley-gluten-free-vanilla-sandwich-cookies|Sage Valley, Gluten Free Vanilla Sandwich Cookies|BB|499|3.1|71.9|22.2|1 biscuit=12;3 biscuits=36|
us-schar-gluten-free-classic-white-rolls|Schar, Gluten-Free, Classic White Rolls|BB|239|3.3|50.5|2.7|1 slice=30;1 roll=60|
us-schar-gluten-free-wheat-free-classic-white-bread|Schar, Gluten-Free, Wheat-Free, Classic White Bread|BB|240|3.8|46.1|4.5|1 slice=30;1 roll=60|
us-strudel-apple|Strudel, apple|BB|274|3.3|41.1|11.2|1 piece=60;1 slice=80|
us-sweet-rolls-cheese|Sweet rolls, cheese|BB|360|7.1|43.7|18.3|1 slice=30;1 roll=60|
us-sweet-rolls-cinnamon-with-raisins|Sweet rolls, cinnamon with raisins|BB|372|6.2|50.9|16.4|1 slice=30;1 roll=60|commercially
us-sweet-rolls-cinnamon-refrigerated-dough-with-fro|Sweet rolls, cinnamon, refrigerated dough with frosting|BB|333|5|51.6|12.2|1 slice=30;1 roll=60|
us-sweet-rolls-cinnamon-refrigerated-dough-with-fro-2|Sweet rolls, cinnamon, refrigerated dough with frosting, baked|BB|362|5.4|56.1|13.2|1 slice=30;1 roll=60|
us-taco-shells-baked|Taco shells, baked|BB|476|6.4|63.5|21.8|1 piece=60;1 slice=80|
us-taco-shells-baked-without-added-salt|Taco shells, baked, without added salt|BB|468|7.2|62.4|22.6|1 piece=60;1 slice=80|
us-tart-breakfast-low-fat|Tart, breakfast, low fat|BB|372|4|76.8|6|1 slice=80;1 small slice=50|
us-toaster-pastries-brown-sugar-cinnamon|Toaster pastries, brown-sugar-cinnamon|BB|370|4.1|72.6|8|1 piece=60;1 slice=80|
us-toaster-pastries-fruit|Toaster pastries, fruit|BB|388|4.2|70.3|10|1 piece=60;1 slice=80|
us-toaster-pastries-fruit-frosted-include-apples-bl|Toaster Pastries, fruit, frosted include apples, blueberry|BB|385|4|71.8|9|1 piece=60;1 slice=80|cherry
us-toaster-pastries-fruit-toasted-include-apple-blu|Toaster pastries, fruit, toasted include apple, blueberry|BB|409|4.7|72.7|11|1 piece=60;1 slice=80|cherry
us-tortillas-ready-to-bake-or-fry-corn|Tortillas, ready-to-bake or -fry, corn|BB|218|5.7|44.6|2.9|1 slice=30;1 roll=60|
us-tortillas-ready-to-bake-or-fry-corn-without-adde|Tortillas, ready-to-bake or -fry, corn, without added salt|BB|222|5.7|46.6|2.5|1 slice=30;1 roll=60|
us-tortillas-ready-to-bake-or-fry-flour-refrigerate|Tortillas, ready-to-bake or -fry, flour, refrigerated|BB|306|8.2|49.4|8|1 slice=30;1 roll=60|
us-tortillas-ready-to-bake-or-fry-flour-shelf-stabl|Tortillas, ready-to-bake or -fry, flour, shelf stable|BB|297|8|49.3|7.6|1 slice=30;1 roll=60|
us-tortillas-ready-to-bake-or-fry-flour-without-add|Tortillas, ready-to-bake or -fry, flour, without added calcium|BB|325|8.7|55.6|7.1|1 slice=30;1 roll=60|
us-tortillas-ready-to-bake-or-fry-whole-wheat|Tortillas, ready-to-bake or -fry, whole wheat|BB|310|9.8|45.9|9.8|1 slice=30;1 roll=60|
us-tostada-shells-corn|Tostada shells, corn|BB|474|6.2|64.4|23.4|1 piece=60;1 slice=80|
us-udi-s-gluten-free-classic-french-dinner-rolls|Udi's, Gluten Free, Classic French Dinner Rolls|BB|310|8|55.1|6.4|1 slice=30;1 roll=60|
us-udi-s-gluten-free-soft-delicious-white-sandwich-|Udi's, Gluten Free, Soft & Delicious White Sandwich Bread|BB|298|5.4|51.2|8|1 slice=30;1 roll=60|
us-udi-s-gluten-free-soft-hearty-whole-grain-bread|Udi's, Gluten Free, Soft & Hearty Whole Grain Bread|BB|309|7.3|49.1|9.3|1 slice=30;1 roll=60|
us-udi-s-gluten-free-whole-grain-dinner-rolls|Udi's, Gluten Free, Whole Grain Dinner Rolls|BB|329|11.8|44.3|11.6|1 slice=30;1 roll=60|
us-van-s-gluten-free-totally-original-pancakes|Van's, Gluten Free, Totally Original Pancakes|BB|215|3.3|40.3|4.6|1 pancake=40;3 pancakes=120|
us-van-s-gluten-free-totally-original-waffles|Van's, Gluten Free, Totally Original Waffles|BB|248|3|40.5|8.2|1 pancake=40;3 pancakes=120|
us-van-s-the-perfect-10|Van's, The Perfect 10|BB|471|7.6|67.6|18.9|1 piece=60;1 slice=80|baked crackers crispy four free gluten grain seed
us-waffle-buttermilk-frozen-ready-to-heat-microwave|Waffle, buttermilk, frozen, ready-to-heat, microwaved|BB|289|6.9|44.2|9.4|1 pancake=40;3 pancakes=120|
us-waffle-buttermilk-frozen-ready-to-heat-toasted|Waffle, buttermilk, frozen, ready-to-heat, toasted|BB|309|7.4|48.4|9.5|1 pancake=40;3 pancakes=120|
us-waffle-plain-frozen-ready-to-heat-microwave|Waffle, plain, frozen, ready-to-heat, microwave|BB|298|6.7|45.4|9.9|1 pancake=40;3 pancakes=120|
us-waffles-buttermilk-frozen-ready-to-heat|Waffles, buttermilk, frozen, ready-to-heat|BB|273|6.6|41.1|9.2|1 pancake=40;3 pancakes=120|
us-waffles-chocolate-chip-frozen-ready-to-heat|Waffles, chocolate chip, frozen, ready-to-heat|BB|297|5.8|45.7|10.1|1 pancake=40;3 pancakes=120|
us-waffles-gluten-free-frozen-ready-to-heat|Waffles, gluten-free, frozen, ready-to-heat|BB|263|2.7|43.1|8.8|1 pancake=40;3 pancakes=120|
us-waffles-plain|Waffles, plain|BB|291|7.9|32.9|14.1|1 pancake=40;3 pancakes=120|
us-waffles-plain-frozen-ready-to-heat|Waffles, plain, frozen, ready-to-heat|BB|285|6.5|43|9.7|1 pancake=40;3 pancakes=120|
us-waffles-plain-frozen-ready-to-heat-toasted|Waffles, plain, frozen, ready -to-heat, toasted|BB|312|7.2|49.3|9.6|1 pancake=40;3 pancakes=120|
us-waffles-whole-wheat-lowfat-frozen-ready-to-heat|Waffles, whole wheat, lowfat, frozen, ready-to-heat|BB|257|7.1|49.2|3.6|1 pancake=40;3 pancakes=120|
us-wonton-wrappers|Wonton wrappers|BB|291|9.8|57.9|1.5|1 piece=60;1 slice=80|
us-bacon-and-beef-sticks|Bacon and beef sticks|MP|517|29.1|0.8|44.2|1 portion=150;1 small portion=100|
us-bacon-turkey-low-sodium|Bacon, turkey, low sodium|MP|253|13.3|4.8|20|1 portion=150;1 small portion=100|
us-bacon-turkey-microwaved|Bacon, turkey, microwaved|MP|368|29.5|4.2|25.9|1 portion=150;1 small portion=100|
us-barbecue-loaf-pork-beef|Barbecue loaf, pork, beef|MP|173|15.8|6.4|8.9|1 portion=150;1 small portion=100|
us-beef-bologna-reduced-sodium|Beef, bologna, reduced sodium|MP|310|11.7|2|28.4|1 portion=150;1 small portion=100|
us-beef-bottom-sirloin-tri-tip-roast-cooked-roasted|Beef, bottom sirloin, tri-tip roast, cooked, roasted|MP|221|25.7|0|12.4|1 portion=150;1 small portion=100|
us-beef-bottom-sirloin-tri-tip-roast-raw|Beef, bottom sirloin, tri-tip roast, raw|MP|174|20.6|0|9.5|1 portion=150;1 small portion=100|
us-beef-brisket-flat-half-raw|Beef, brisket, flat half, raw|MP|169|20.2|0|9.9|1 portion=150;1 small portion=100|boneless
us-beef-brisket-flat-half-lean-only-raw|Beef, brisket, flat half lean only, raw|MP|132|21.5|0|5.1|1 portion=150;1 small portion=100|boneless
us-beef-brisket-flat-half-cooked-braised|Beef, brisket, flat half, cooked, braised|MP|298|28.7|0|19.5|1 portion=150;1 small portion=100|
us-beef-brisket-point-half-cooked-braised|Beef, brisket, point half, cooked, braised|MP|349|24.4|0|27.2|1 portion=150;1 small portion=100|
us-beef-brisket-point-half-raw|Beef, brisket, point half, raw|MP|267|17.7|0.6|21|1 portion=150;1 small portion=100|
us-beef-brisket-whole-cooked-braised|Beef, brisket, whole, cooked, braised|MP|291|26.8|0|19.5|1 portion=150;1 small portion=100|
us-beef-brisket-whole-raw|Beef, brisket, whole, raw|MP|157|20.7|0.6|7.4|1 portion=150;1 small portion=100|
us-beef-carcass-raw|Beef, carcass, raw|MP|291|17.3|0|24.1|1 portion=150;1 small portion=100|
us-beef-chopped-cured-smoked|Beef, chopped, cured, smoked|MP|133|20.2|1.9|4.4|1 portion=150;1 small portion=100|
us-beef-chuck-arm-pot-roast-cooked-braised|Beef, chuck, arm pot roast, cooked, braised|MP|195|33.4|0|5.8|1 portion=150;1 small portion=100|
us-beef-chuck-arm-pot-roast-raw|Beef, chuck, arm pot roast, raw|MP|249|19.1|0|18.6|1 portion=150;1 small portion=100|
us-beef-chuck-blade-roast-cooked-braised|Beef, chuck, blade roast, cooked, braised|MP|359|26.4|0|27.3|1 portion=150;1 small portion=100|
us-beef-chuck-blade-roast-raw|Beef, chuck, blade roast, raw|MP|230|17.4|0|17.3|1 portion=150;1 small portion=100|
us-beef-chuck-clod-roast-cooked-roasted|Beef, chuck, clod roast, cooked, roasted|MP|172|26.8|0|6.3|1 portion=150;1 small portion=100|
us-beef-chuck-clod-roast-raw|Beef, chuck, clod roast, raw|MP|129|19.6|0|5|1 portion=150;1 small portion=100|
us-beef-chuck-clod-steak-cooked-braised|Beef, chuck, clod steak, cooked, braised|MP|189|29.3|0|7|1 portion=150;1 small portion=100|
us-beef-chuck-eye-country-style-ribs-cooked-braised|Beef, chuck eye Country-Style ribs, cooked, braised|MP|303|27.2|0|21.6|1 portion=150;1 small portion=100|boneless
us-beef-chuck-eye-country-style-ribs-raw|Beef, chuck eye Country-Style ribs, raw|MP|152|20.9|0|7.7|1 portion=150;1 small portion=100|boneless
us-beef-chuck-eye-roast-america-s-beef-roast-cooked|Beef, chuck eye roast, America's Beef Roast, cooked|MP|236|24.6|0|15.3|1 portion=150;1 small portion=100|boneless
us-beef-chuck-eye-roast-america-s-beef-roast-raw|Beef, chuck eye roast, America's Beef Roast, raw|MP|185|19.1|0|12|1 portion=150;1 small portion=100|boneless
us-beef-chuck-eye-steak-cooked-grilled|Beef, chuck eye steak, cooked, grilled|MP|215|28|0|11.5|1 portion=150;1 small portion=100|boneless
us-beef-chuck-eye-steak-raw|Beef, chuck eye steak, raw|MP|153|21.3|0|7.6|1 portion=150;1 small portion=100|boneless
us-beef-chuck-for-stew-cooked-braised|Beef, chuck for stew, cooked, braised|MP|194|32.5|0|7.1|1 portion=150;1 small portion=100|
us-beef-chuck-for-stew-raw|Beef, chuck for stew, raw|MP|124|21.9|0.2|4|1 portion=150;1 small portion=100|
us-beef-chuck-mock-tender-steak-cooked|Beef, chuck, mock tender steak, cooked|MP|225|32.2|0|10.7|1 portion=150;1 small portion=100|boneless
us-beef-chuck-mock-tender-steak-raw|Beef, chuck, mock tender steak, raw|MP|127|21.4|0|4.6|1 portion=150;1 small portion=100|boneless
us-beef-chuck-mock-tender-steak-cooked-broiled|Beef, chuck, mock tender steak, cooked, broiled|MP|160|25.9|0|5.5|1 portion=150;1 small portion=100|
us-beef-chuck-mock-tender-steak-usda-choice-cooked|Beef, chuck, mock tender steak, Usda choice, cooked|MP|161|25.7|0|5.7|1 portion=150;1 small portion=100|
us-beef-chuck-mock-tender-steak-usda-select-cooked|Beef, chuck, mock tender steak, Usda select, cooked|MP|159|26.1|0|5.2|1 portion=150;1 small portion=100|
us-beef-chuck-short-ribs-cooked|Beef, chuck, short ribs, cooked|MP|317|25.3|0|24.1|1 portion=150;1 small portion=100|boneless
us-beef-chuck-short-ribs-raw|Beef, chuck, short ribs, raw|MP|175|19.4|0.3|10.7|1 portion=150;1 small portion=100|boneless
us-beef-chuck-shoulder-clod-shoulder-tender-medalli|Beef, chuck, shoulder clod, shoulder tender, medallion|MP|181|26.1|0|7.7|1 portion=150;1 small portion=100|
us-beef-chuck-shoulder-clod-shoulder-top-and-center|Beef, chuck, shoulder clod, shoulder top and center steaks|MP|176|26.7|0|6.9|1 portion=150;1 small portion=100|cooked
us-beef-chuck-shoulder-clod-shoulder-top-and-center-2|Beef, chuck, shoulder clod, shoulder top and center steaks, raw|MP|143|20.4|0|6.1|1 portion=150;1 small portion=100|
us-beef-chuck-shoulder-clod-top-blade-steak|Beef, chuck, shoulder clod, top blade, steak|MP|228|24.7|0|13.6|1 portion=150;1 small portion=100|
us-beef-chuck-top-blade-cooked-broiled|Beef, chuck, top blade, cooked, broiled|MP|184|26.2|0|8|1 portion=150;1 small portion=100|
us-beef-chuck-under-blade-center-steak-denver-cut|Beef, chuck, under blade center steak, Denver Cut|MP|220|26.5|0.1|12.6|1 portion=150;1 small portion=100|boneless
us-beef-chuck-under-blade-pot-roast-cooked|Beef, chuck, under blade pot roast, cooked|MP|288|27.2|0|19|1 portion=150;1 small portion=100|boneless
us-beef-chuck-under-blade-pot-roast-or-steak-raw|Beef, chuck, under blade pot roast or steak, raw|MP|196|19.2|0|13.3|1 portion=150;1 small portion=100|boneless
us-beef-chuck-under-blade-steak-cooked|Beef, chuck, under blade steak, cooked|MP|219|31.4|0|10.4|1 portion=150;1 small portion=100|boneless
us-beef-composite-cooked|Beef composite, cooked|MP|203|28.7|0|9.2|1 portion=150;1 small portion=100|
us-beef-cooked|Beef, cooked|MP|203|29.9|0|8.4|1 portion=150;1 small portion=100|
us-beef-cured-breakfast-strips-cooked|Beef, cured, breakfast strips, cooked|MP|449|31.3|1.4|34.4|1 portion=150;1 small portion=100|
us-beef-cured-breakfast-strips-raw-or-unheated|Beef, cured, breakfast strips, raw or unheated|MP|406|12.5|0.7|38.8|1 portion=150;1 small portion=100|
us-beef-cured-corned-beef-canned|Beef, cured, corned beef, canned|MP|250|27.1|0|14.9|1 portion=150;1 small portion=100|
us-beef-cured-dried|Beef, cured, dried|MP|153|31.1|2.8|1.9|1 portion=150;1 small portion=100|
us-beef-cured-luncheon-meat-jellied|Beef, cured, luncheon meat, jellied|MP|111|19|0|3.3|1 portion=150;1 small portion=100|
us-beef-cured-pastrami|Beef, cured, pastrami|MP|147|21.8|0.4|5.8|1 portion=150;1 small portion=100|
us-beef-flank-steak-cooked-braised|Beef, flank, steak, cooked, braised|MP|263|27|0|16.4|1 portion=150;1 small portion=100|
us-beef-flank-steak-cooked-broiled|Beef, flank, steak, cooked, broiled|MP|186|27.9|0|7.4|1 portion=150;1 small portion=100|
us-beef-flank-steak-raw|Beef, flank, steak, raw|MP|137|21.4|0|5|1 portion=150;1 small portion=100|
us-beef-grass-fed-ground-raw|Beef, grass-fed, ground, raw|MP|198|19.4|0|12.7|1 portion=150;1 small portion=100|
us-beef-grass-fed-strip-steaks-lean-only-raw|Beef, grass-fed, strip steaks, lean only, raw|MP|117|23.1|0|2.7|1 portion=150;1 small portion=100|
us-beef-ground-70-lean-meat-30-fat-crumbles-cooked|Beef, ground, 70% lean meat / 30% fat, crumbles, cooked|MP|270|25.6|0|17.9|1 portion=150;1 small portion=100|
us-beef-ground-70-lean-meat-30-fat-loaf-cooked|Beef, ground, 70% lean meat / 30% fat, loaf, cooked|MP|241|23.9|0|15.4|1 portion=150;1 small portion=100|
us-beef-ground-70-lean-meat-30-fat-patty-cooked|Beef, ground, 70% lean meat / 30% fat, patty, cooked|MP|277|25.4|0|18.7|1 portion=150;1 small portion=100|
us-beef-ground-70-lean-meat-30-fat-patty-cooked-pan|Beef, ground, 70% lean meat / 30% fat, patty cooked, pan-broiled|MP|238|22.9|0|15.5|1 portion=150;1 small portion=100|
us-beef-ground-70-lean-meat-30-fat-raw|Beef, ground, 70% lean meat / 30% fat, raw|MP|332|14.4|0|30|1 portion=150;1 small portion=100|
us-beef-ground-75-lean-meat-25-fat-crumbles-cooked|Beef, ground, 75% lean meat / 25% fat, crumbles, cooked|MP|277|26.3|0|18.2|1 portion=150;1 small portion=100|
us-beef-ground-75-lean-meat-25-fat-loaf-cooked|Beef, ground, 75% lean meat / 25% fat, loaf, cooked|MP|254|24.6|0|16.5|1 portion=150;1 small portion=100|
us-beef-ground-75-lean-meat-25-fat-patty-cooked|Beef, ground, 75% lean meat / 25% fat, patty, cooked|MP|279|25.6|0|18.9|1 portion=150;1 small portion=100|
us-beef-ground-75-lean-meat-25-fat-raw|Beef, ground, 75% lean meat / 25% fat, raw|MP|293|15.8|0|25|1 portion=150;1 small portion=100|
us-beef-ground-80-lean-meat-20-fat-crumbles-cooked|Beef, ground, 80% lean meat / 20% fat, crumbles, cooked|MP|272|27|0|17.4|1 portion=150;1 small portion=100|
us-beef-ground-80-lean-meat-20-fat-loaf-cooked|Beef, ground, 80% lean meat / 20% fat, loaf, cooked|MP|254|25.3|0|16.2|1 portion=150;1 small portion=100|
us-beef-ground-80-lean-meat-20-fat-patty-cooked|Beef, ground, 80% lean meat / 20% fat, patty, cooked|MP|270|25.8|0|17.8|1 portion=150;1 small portion=100|
us-beef-ground-80-lean-meat-20-fat-raw|Beef, ground, 80% lean meat / 20% fat, raw|MP|254|17.2|0|20|1 portion=150;1 small portion=100|
us-beef-ground-85-lean-meat-15-fat-crumbles-cooked|Beef, ground, 85% lean meat / 15% fat, crumbles, cooked|MP|256|27.7|0|15.3|1 portion=150;1 small portion=100|
us-beef-ground-85-lean-meat-15-fat-loaf-cooked|Beef, ground, 85% lean meat / 15% fat, loaf, cooked|MP|240|25.9|0|14.4|1 portion=150;1 small portion=100|
us-beef-ground-85-lean-meat-15-fat-patty-cooked|Beef, ground, 85% lean meat / 15% fat, patty, cooked|MP|250|25.9|0|15.4|1 portion=150;1 small portion=100|
us-beef-ground-85-lean-meat-15-fat-raw|Beef, ground, 85% lean meat / 15% fat, raw|MP|215|18.6|0|15|1 portion=150;1 small portion=100|
us-beef-ground-90-lean-meat-10-fat-crumbles-cooked|Beef, ground, 90% lean meat / 10% fat, crumbles, cooked|MP|230|28.5|0|12|1 portion=150;1 small portion=100|
us-beef-ground-90-lean-meat-10-fat-loaf-cooked|Beef, ground, 90% lean meat / 10% fat, loaf, cooked|MP|214|26.6|0|11.1|1 portion=150;1 small portion=100|
us-beef-ground-90-lean-meat-10-fat-patty-cooked|Beef, ground, 90% lean meat / 10% fat, patty, cooked|MP|217|26.1|0|11.8|1 portion=150;1 small portion=100|
us-beef-ground-90-lean-meat-10-fat-raw|Beef, ground, 90% lean meat / 10% fat, raw|MP|176|20|0|10|1 portion=150;1 small portion=100|
us-beef-ground-93-lean-meat-7-fat-crumbles-cooked|Beef, ground, 93% lean meat / 7% fat, crumbles, cooked|MP|209|28.9|0|9.5|1 portion=150;1 small portion=100|
us-beef-ground-93-lean-meat-7-fat-loaf-cooked|Beef, ground, 93% lean meat / 7% fat, loaf, cooked|MP|192|27|0|8.4|1 portion=150;1 small portion=100|
us-beef-ground-93-lean-meat-7-fat-patty-cooked|Beef, ground, 93% lean meat / 7% fat, patty, cooked|MP|193|26.2|0|8.9|1 portion=150;1 small portion=100|
us-beef-ground-93-lean-meat-7-fat-raw|Beef, ground, 93% lean meat / 7% fat, raw|MP|152|20.9|0|7|1 portion=150;1 small portion=100|
us-beef-ground-95-lean-meat-5-fat-crumbles-cooked|Beef, ground, 95% lean meat / 5% fat, crumbles, cooked|MP|193|29.2|0|7.6|1 portion=150;1 small portion=100|
us-beef-ground-95-lean-meat-5-fat-loaf-cooked|Beef, ground, 95% lean meat / 5% fat, loaf, cooked|MP|174|27.3|0|6.4|1 portion=150;1 small portion=100|
us-beef-ground-95-lean-meat-5-fat-patty-cooked|Beef, ground, 95% lean meat / 5% fat, patty, cooked|MP|164|25.8|0|5.9|1 portion=150;1 small portion=100|
us-beef-ground-95-lean-meat-5-fat-raw|Beef, ground, 95% lean meat / 5% fat, raw|MP|137|21.4|0|5|1 portion=150;1 small portion=100|
us-beef-ground-97-lean-meat-3-fat-crumbles-cooked|Beef, ground, 97% lean meat / 3% fat, crumbles, cooked|MP|175|29.5|0|5.5|1 portion=150;1 small portion=100|
us-beef-ground-97-lean-meat-3-fat-loaf-cooked|Beef, ground, 97% lean meat / 3% fat, loaf, cooked|MP|154|27.6|0|4.1|1 portion=150;1 small portion=100|
us-beef-ground-97-lean-meat-3-fat-patty-cooked|Beef, ground, 97% lean meat / 3% fat, patty, cooked|MP|153|26.4|0|4.5|1 portion=150;1 small portion=100|
us-beef-ground-97-lean-meat-3-fat-raw|Beef, ground, 97% lean meat / 3% fat, raw|MP|121|22|0|3|1 portion=150;1 small portion=100|
us-beef-ground-cooked|Beef, ground, cooked|MP|240|25.1|0.6|14.5|1 portion=150;1 small portion=100|
us-beef-ground-patties-frozen-cooked|Beef, ground, patties, frozen, cooked|MP|295|23.1|0|21.8|1 portion=150;1 small portion=100|
us-beef-loin-bottom-sirloin-butt-tri-tip-roast-cook|Beef, loin, bottom sirloin butt, tri-tip roast, cooked|MP|182|26.8|0|8.3|1 portion=150;1 small portion=100|
us-beef-loin-bottom-sirloin-butt-tri-tip-steak-cook|Beef, loin, bottom sirloin butt, tri-tip steak, cooked|MP|265|30|0|15.2|1 portion=150;1 small portion=100|
us-beef-loin-tenderloin-roast-cooked|Beef, loin, tenderloin roast, cooked|MP|183|27.5|0|8.1|1 portion=150;1 small portion=100|boneless
us-beef-loin-tenderloin-roast-raw|Beef, loin, tenderloin roast, raw|MP|139|21.9|0|5.7|1 portion=150;1 small portion=100|boneless
us-beef-loin-tenderloin-steak-cooked|Beef, loin, tenderloin steak, cooked|MP|198|31.1|0|7.3|1 portion=150;1 small portion=100|boneless
us-beef-loin-tenderloin-steak-raw|Beef, loin, tenderloin steak, raw|MP|139|21.9|0|5.7|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-loin-cooked-grilled|Beef, loin, top loin, cooked, grilled|MP|250|26.7|0|15.1|1 portion=150;1 small portion=100|
us-beef-loin-top-loin-raw|Beef, loin, top loin, raw|MP|224|20.6|0|15|1 portion=150;1 small portion=100|
us-beef-loin-top-loin-steak-lip-off|Beef, loin, top loin steak, lip off|MP|149|22.9|0|6.3|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-loin-steak-lip-on|Beef, loin, top loin steak, lip-on|MP|264|26.2|0|17.7|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-sirloin-cap-steak-cooked|Beef, loin, top sirloin cap steak, cooked|MP|170|28.4|0.2|6.1|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-sirloin-cap-steak-raw|Beef, loin, top sirloin cap steak, raw|MP|199|19.7|0|13.4|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-sirloin-filet-cooked|Beef, loin, top sirloin filet, cooked|MP|171|30.6|0|5.4|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-sirloin-petite-roast-cooked|Beef, loin, top sirloin petite roast, cooked|MP|173|29|0|6.4|1 portion=150;1 small portion=100|boneless
us-beef-loin-top-sirloin-petite-roast-filet-raw|Beef, loin, top sirloin petite roast/filet, raw|MP|122|23.1|0|3.4|1 portion=150;1 small portion=100|boneless
us-beef-plate-inside-skirt-steak-cooked-broiled|Beef, plate, inside skirt steak, cooked, broiled|MP|205|26.7|0|10.1|1 portion=150;1 small portion=100|
us-beef-plate-outside-skirt-steak-cooked-broiled|Beef, plate, outside skirt steak, cooked, broiled|MP|233|24.2|0|14.4|1 portion=150;1 small portion=100|
us-beef-plate-steak-inside-skirt-cooked|Beef, plate steak, inside skirt, cooked|MP|233|30.1|0|12.5|1 portion=150;1 small portion=100|boneless
us-beef-plate-steak-inside-skirt-raw|Beef, plate steak, inside skirt, raw|MP|187|20.4|0|11.7|1 portion=150;1 small portion=100|boneless
us-beef-plate-steak-outside-skirt-cooked|Beef, plate steak, outside skirt, cooked|MP|282|27.7|0|19|1 portion=150;1 small portion=100|boneless
us-beef-plate-steak-outside-skirt-raw|Beef, plate steak, outside skirt, raw|MP|212|18.5|0.2|15.3|1 portion=150;1 small portion=100|boneless
us-beef-raw|Beef, raw|MP|130|22.4|0|4.6|1 portion=150;1 small portion=100|
us-beef-rib-back-ribs-cooked|Beef, rib, back ribs, cooked|MP|341|25.6|0|26.6|1 portion=150;1 small portion=100|bone
us-beef-rib-back-ribs-raw|Beef, rib, back ribs, raw|MP|239|19.1|0.5|17.9|1 portion=150;1 small portion=100|bone
us-beef-ribeye-cap-steak-cooked-grilled|Beef, ribeye cap steak, cooked, grilled|MP|246|24.7|1.5|15.7|1 portion=150;1 small portion=100|boneless
us-beef-ribeye-cap-steak-raw|Beef, ribeye cap steak, raw|MP|169|20.1|1.2|9.4|1 portion=150;1 small portion=100|boneless
us-beef-ribeye-filet-cooked-grilled|Beef, ribeye filet, cooked, grilled|MP|186|29.4|0|7.6|1 portion=150;1 small portion=100|boneless
us-beef-ribeye-petite-roast-cooked-roasted|Beef, ribeye petite roast, cooked, roasted|MP|178|28.2|0|7.3|1 portion=150;1 small portion=100|boneless
us-beef-ribeye-petite-roast-filet-raw|Beef, ribeye petite roast/filet, raw|MP|125|22.9|0|3.7|1 portion=150;1 small portion=100|boneless
us-beef-rib-eye-roast-lip-on-cooked|Beef, rib eye roast, lip-on, cooked|MP|307|23.5|0|23.6|1 portion=150;1 small portion=100|bone
us-beef-rib-eye-small-end-ribs-10-12-cooked|Beef, rib, eye, small end (ribs 10-12), cooked|MP|265|26.6|0|16.8|1 portion=150;1 small portion=100|
us-beef-rib-eye-small-end-ribs-10-12-cooked-broiled|Beef, rib eye, small end (ribs 10-12), cooked, broiled|MP|249|27.3|0|14.7|1 portion=150;1 small portion=100|
us-beef-rib-eye-small-end-ribs-10-12-raw|Beef, rib eye, small end (ribs 10-12), raw|MP|149|21.2|0|6.6|1 portion=150;1 small portion=100|
us-beef-rib-eye-small-end-ribs-10-12-lean-only-cook|Beef, rib, eye, small end (ribs 10- 12) lean only, cooked|MP|182|29.9|0|6.1|1 portion=150;1 small portion=100|
us-beef-rib-eye-steak-lip-on-cooked|Beef, rib eye steak, lip-on, cooked|MP|229|27|0|13.4|1 portion=150;1 small portion=100|bone
us-beef-rib-eye-steak-lip-off-cooked|Beef, rib eye steak, lip off, cooked|MP|285|23.9|0|21.1|1 portion=150;1 small portion=100|boneless
us-beef-rib-eye-steak-lip-off-raw|Beef, rib eye steak, lip off, raw|MP|228|19.3|0.1|16.7|1 portion=150;1 small portion=100|boneless
us-beef-rib-eye-steak-roast-lip-on-raw|Beef, rib eye steak/roast, lip-on, raw|MP|166|21.2|0|9|1 portion=150;1 small portion=100|bone
us-beef-rib-large-end-ribs-6-9-cooked-broiled|Beef, rib, large end (ribs 6-9), cooked, broiled|MP|338|21.6|0|27.2|1 portion=150;1 small portion=100|
us-beef-rib-large-end-ribs-6-9-cooked-roasted|Beef, rib, large end (ribs 6-9), cooked, roasted|MP|355|23|0|28.5|1 portion=150;1 small portion=100|
us-beef-rib-large-end-ribs-6-9-raw|Beef, rib, large end (ribs 6-9), raw|MP|295|16.5|0|24.9|1 portion=150;1 small portion=100|
us-beef-rib-shortribs-cooked-braised|Beef, rib, shortribs, cooked, braised|MP|295|30.8|0|18.1|1 portion=150;1 small portion=100|
us-beef-rib-shortribs-raw|Beef, rib, shortribs, raw|MP|390|14.4|0.4|36.2|1 portion=150;1 small portion=100|
us-beef-rib-small-end-ribs-10-12-cooked-broiled|Beef, rib, small end (ribs 10-12), cooked, broiled|MP|354|24.1|0|27.9|1 portion=150;1 small portion=100|
us-beef-rib-small-end-ribs-10-12-cooked-roasted|Beef, rib, small end (ribs 10-12), cooked, roasted|MP|359|22.3|0|29.2|1 portion=150;1 small portion=100|
us-beef-rib-small-end-ribs-10-12-raw|Beef, rib, small end (ribs 10-12), raw|MP|148|22.1|0|5.9|1 portion=150;1 small portion=100|
us-beef-rib-whole-ribs-6-12-cooked-broiled|Beef, rib, whole (ribs 6-12), cooked, broiled|MP|337|22.4|0|26.8|1 portion=150;1 small portion=100|
us-beef-rib-whole-ribs-6-12-cooked-roasted|Beef, rib, whole (ribs 6-12), cooked, roasted|MP|351|22.8|0|28.1|1 portion=150;1 small portion=100|
us-beef-rib-whole-ribs-6-12-raw|Beef, rib, whole (ribs 6-12), raw|MP|355|16.2|0|31.7|1 portion=150;1 small portion=100|
us-beef-round-bottom-round-roast-cooked|Beef, round, bottom round, roast, cooked|MP|199|26.8|0|9.4|1 portion=150;1 small portion=100|
us-beef-round-bottom-round-roast-cooked-roasted|Beef, round, bottom round roast, cooked, roasted|MP|169|28.3|0|5.3|1 portion=150;1 small portion=100|
us-beef-round-bottom-round-roast-raw|Beef, round, bottom round, roast, raw|MP|128|22.2|0|3.7|1 portion=150;1 small portion=100|
us-beef-round-bottom-round-steak-cooked|Beef, round, bottom round, steak, cooked|MP|223|33.6|0|8.9|1 portion=150;1 small portion=100|
us-beef-round-bottom-round-steak-raw|Beef, round, bottom round, steak, raw|MP|198|20.7|0|12.2|1 portion=150;1 small portion=100|
us-beef-round-eye-of-round-roast-cooked|Beef, round, eye of round roast, cooked|MP|167|29.7|0|4.5|1 portion=150;1 small portion=100|boneless
us-beef-round-eye-of-round-roast-raw|Beef, round, eye of round roast, raw|MP|120|23.3|0|3|1 portion=150;1 small portion=100|boneless
us-beef-round-eye-of-round-steak-cooked|Beef, round, eye of round steak, cooked|MP|154|29.5|0|4|1 portion=150;1 small portion=100|boneless
us-beef-round-eye-of-round-steak-raw|Beef, round, eye of round steak, raw|MP|124|23.4|0|3.4|1 portion=150;1 small portion=100|boneless
us-beef-round-eye-of-round-steak-lean-and-fat-raw|Beef, round, eye of round steak lean and fat, raw|MP|127|23.2|0|3.8|1 portion=150;1 small portion=100|boneless
us-beef-round-full-cut-cooked-broiled|Beef, round, full cut, cooked, broiled|MP|235|27.5|0|13|1 portion=150;1 small portion=100|
us-beef-round-full-cut-raw|Beef, round, full cut, raw|MP|184|20.6|0|10.7|1 portion=150;1 small portion=100|
us-beef-round-knuckle-tip-center-steak|Beef, round, knuckle, tip center, steak|MP|188|26.9|0|8.1|1 portion=150;1 small portion=100|
us-beef-round-knuckle-tip-side-steak|Beef, round, knuckle, tip side, steak|MP|133|21.4|0|4.7|1 portion=150;1 small portion=100|
us-beef-round-outside-round-bottom-round-steak|Beef, round, outside round, bottom round, steak|MP|129|22.2|0|3.8|1 portion=150;1 small portion=100|
us-beef-round-tip-round-raw|Beef, round, tip round, raw|MP|189|19.6|0|11.7|1 portion=150;1 small portion=100|
us-beef-round-tip-round-roast-cooked|Beef, round, tip round, roast, cooked|MP|228|27.3|0|12.3|1 portion=150;1 small portion=100|
us-beef-round-tip-round-roast-raw|Beef, round, tip round, roast, raw|MP|130|20.8|0|4.6|1 portion=150;1 small portion=100|
us-beef-round-top-round-cooked-braised|Beef, round, top round, cooked, braised|MP|250|34.1|0|11.6|1 portion=150;1 small portion=100|
us-beef-round-top-round-cooked-pan-fried|Beef, round, top round, cooked, pan-fried|MP|228|33.9|2|8.3|1 portion=150;1 small portion=100|
us-beef-round-top-round-raw|Beef, round, top round, raw|MP|173|22.2|0|8.7|1 portion=150;1 small portion=100|
us-beef-round-top-round-roast-cooked|Beef, round, top round roast, cooked|MP|150|29.8|0|3.4|1 portion=150;1 small portion=100|boneless
us-beef-round-top-round-roast-raw|Beef, round, top round roast, raw|MP|116|23.6|0|2.5|1 portion=150;1 small portion=100|boneless
us-beef-round-top-round-steak-cooked|Beef, round, top round steak, cooked|MP|166|30.2|0|4.1|1 portion=150;1 small portion=100|boneless
us-beef-round-top-round-steak-raw|Beef, round, top round steak, raw|MP|124|23.5|0|3.3|1 portion=150;1 small portion=100|boneless
us-beef-round-top-round-steak-cooked-broiled|Beef, round, top round steak, cooked, broiled|MP|204|30.7|0|9|1 portion=150;1 small portion=100|
us-beef-sandwich-steaks-flaked-chopped-formed-and-t|Beef, sandwich steaks, flaked, chopped, formed and thinly sliced|MP|309|16.5|0|27|1 portion=150;1 small portion=100|
us-beef-shank-crosscuts-cooked-simmered|Beef, shank crosscuts, cooked, simmered|MP|201|33.7|0|6.4|1 portion=150;1 small portion=100|
us-beef-shank-crosscuts-raw|Beef, shank crosscuts, raw|MP|128|21.8|0|3.9|1 portion=150;1 small portion=100|
us-beef-short-loin-porterhouse-steak-cooked-broiled|Beef, short loin, porterhouse steak, cooked, broiled|MP|194|26.9|0|8.8|1 portion=150;1 small portion=100|
us-beef-short-loin-porterhouse-steak-cooked-grilled|Beef, short loin, porterhouse steak, cooked, grilled|MP|263|26.2|0|16.8|1 portion=150;1 small portion=100|
us-beef-short-loin-porterhouse-steak-raw|Beef, short loin, porterhouse steak, raw|MP|218|20.4|0|14.6|1 portion=150;1 small portion=100|
us-beef-short-loin-porterhouse-steak-usda-choice-co|Beef, short loin, porterhouse steak, Usda choice, cooked|MP|283|23.6|0|20.2|1 portion=150;1 small portion=100|
us-beef-short-loin-porterhouse-steak-usda-select-co|Beef, short loin, porterhouse steak, Usda select, cooked|MP|267|24.5|0|18|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-cooked|Beef, short loin, t-bone steak, cooked|MP|206|28.5|0|9.4|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-raw|Beef, short loin, t-bone steak, raw|MP|144|22.4|0|5.3|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-cooked-broiled|Beef, short loin, t-bone steak, cooked, broiled|MP|198|26|0|9.6|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-cooked-grilled|Beef, short loin, t-bone steak, cooked, grilled|MP|294|24.2|0|21.1|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-usda-choice-cooked|Beef, short loin, t-bone steak, Usda choice, cooked|MP|258|24.1|0|17.3|1 portion=150;1 small portion=100|
us-beef-short-loin-t-bone-steak-usda-select-cooked|Beef, short loin, t-bone steak, Usda select, cooked|MP|230|24.4|0|14|1 portion=150;1 small portion=100|
us-beef-short-loin-top-loin-cooked-broiled|Beef, short loin, top loin, cooked, broiled|MP|310|25.9|0|22.1|1 portion=150;1 small portion=100|
us-beef-short-loin-top-loin-steak-cooked|Beef, short loin, top loin, steak, cooked|MP|189|29.3|0|7.1|1 portion=150;1 small portion=100|
us-beef-short-loin-top-loin-steak-raw|Beef, short loin, top loin steak, raw|MP|138|22.9|0|5.2|1 portion=150;1 small portion=100|
us-beef-shoulder-pot-roast-cooked-braised|Beef, shoulder pot roast, cooked, braised|MP|196|31.5|0|7.8|1 portion=150;1 small portion=100|boneless
us-beef-shoulder-pot-roast-or-steak-raw|Beef, shoulder pot roast or steak, raw|MP|130|21.4|0|5|1 portion=150;1 small portion=100|boneless
us-beef-shoulder-steak-cooked-grilled|Beef, shoulder steak, cooked, grilled|MP|178|28.5|0|6.3|1 portion=150;1 small portion=100|boneless
us-beef-shoulder-top-blade-steak-cooked-grilled|Beef, shoulder top blade steak, cooked, grilled|MP|202|28.3|0|9.8|1 portion=150;1 small portion=100|boneless
us-beef-shoulder-top-blade-steak-raw|Beef, shoulder top blade steak, raw|MP|133|20.4|0|5.7|1 portion=150;1 small portion=100|boneless
us-beef-tenderloin-raw|Beef, tenderloin, raw|MP|274|18.2|0|21.8|1 portion=150;1 small portion=100|
us-beef-tenderloin-roast-cooked-roasted|Beef, tenderloin, roast, cooked, roasted|MP|316|23.9|0|23.7|1 portion=150;1 small portion=100|
us-beef-tenderloin-steak-cooked-broiled|Beef, tenderloin, steak, cooked, broiled|MP|308|25.3|0|22.2|1 portion=150;1 small portion=100|
us-beef-tenderloin-steak-raw|Beef, tenderloin, steak, raw|MP|148|22.1|0|5.9|1 portion=150;1 small portion=100|
us-beef-top-loin-filet-cooked-grilled|Beef, top loin filet, cooked, grilled|MP|253|26.8|0.6|15.9|1 portion=150;1 small portion=100|boneless
us-beef-top-loin-petite-roast-cooked-roasted|Beef, top loin petite roast, cooked, roasted|MP|206|28.2|0.9|10|1 portion=150;1 small portion=100|boneless
us-beef-top-loin-petite-roast-filet-raw|Beef, top loin petite roast/filet, raw|MP|199|20.8|0.6|12.6|1 portion=150;1 small portion=100|boneless
us-beef-top-sirloin-steak-cooked-broiled|Beef, top sirloin, steak, cooked, broiled|MP|178|29.4|0|5.8|1 portion=150;1 small portion=100|
us-beef-top-sirloin-steak-cooked-pan-fried|Beef, top sirloin, steak, cooked, pan-fried|MP|313|28.8|0|21.1|1 portion=150;1 small portion=100|
us-beef-top-sirloin-steak-raw|Beef, top sirloin, steak, raw|MP|127|22.3|0|3.5|1 portion=150;1 small portion=100|
us-beerwurst-beer-salami-pork|Beerwurst, beer salami, pork|AL|238|14.2|2.1|18.8|1 can=340;1 glass=250||L
us-beerwurst-beer-salami-pork-and-beef|Beerwurst, beer salami, pork and beef|AL|277|14|3.8|22.5|1 can=340;1 glass=250||L
us-beerwurst-pork-and-beef|Beerwurst, pork and beef|AL|276|14|4.3|22.5|1 can=340;1 glass=250||L
us-bison-ground-grass-fed-cooked|Bison, ground, grass-fed, cooked|MP|179|25.5|0|8.6|1 portion=150;1 small portion=100|
us-bison-ground-grass-fed-raw|Bison, ground, grass-fed, raw|MP|146|20.2|0.1|7.2|1 portion=150;1 small portion=100|
us-blood-sausage|Blood sausage|MP|379|14.6|1.3|34.5|1 portion=150;1 small portion=100|
us-bologna-beef|Bologna, beef|MP|299|10.9|4.3|26.1|1 portion=150;1 small portion=100|
us-bologna-beef-and-pork|Bologna, beef and pork|MP|308|15.2|5.5|24.6|1 portion=150;1 small portion=100|
us-bologna-beef-and-pork-low-fat|Bologna, beef and pork, low fat|MP|230|11.5|2.6|19.3|1 portion=150;1 small portion=100|
us-bologna-beef-low-fat|Bologna, beef, low fat|MP|204|11.8|5.2|14.8|1 portion=150;1 small portion=100|
us-bologna-chicken-pork|Bologna, chicken, pork|MP|336|10.3|4.2|30.6|1 portion=150;1 small portion=100|
us-bologna-chicken-pork-beef|Bologna, chicken, pork, beef|MP|272|11.3|5.6|22.7|1 portion=150;1 small portion=100|
us-bologna-chicken-turkey-pork|Bologna, chicken, turkey, pork|MP|298|9.9|5.7|26.2|1 portion=150;1 small portion=100|
us-bologna-meat-and-poultry|Bologna, meat and poultry|MP|281|10.3|6.3|23.8|1 portion=150;1 small portion=100|
us-bologna-pork|Bologna, pork|MP|247|15.3|0.7|19.9|1 portion=150;1 small portion=100|
us-bologna-pork-and-turkey-lite|Bologna, pork and turkey, lite|MP|211|13.1|3.5|16.1|1 portion=150;1 small portion=100|
us-bologna-pork-turkey-and-beef|Bologna, pork, turkey and beef|MP|336|11.6|6.7|29.3|1 portion=150;1 small portion=100|
us-bologna-turkey|Bologna, turkey|MP|209|11.4|4.7|16.1|1 portion=150;1 small portion=100|
us-bratwurst-beef-and-pork-smoked|Bratwurst, beef and pork, smoked|MP|297|12.2|2|26.3|1 portion=150;1 small portion=100|
us-bratwurst-chicken-cooked|Bratwurst, chicken, cooked|MP|176|19.4|0|10.4|1 portion=150;1 small portion=100|
us-bratwurst-pork-beef-and-turkey-lite-smoked|Bratwurst, pork, beef and turkey, lite, smoked|MP|186|14.5|1.6|13.5|1 portion=150;1 small portion=100|
us-bratwurst-pork-beef-link|Bratwurst, pork, beef, link|MP|323|14.3|3|27.8|1 portion=150;1 small portion=100|
us-bratwurst-pork-cooked|Bratwurst, pork, cooked|MP|333|13.7|2.9|29.2|1 portion=150;1 small portion=100|
us-braunschweiger-a-liver-sausage-pork|Braunschweiger (a liver sausage), pork|MP|327|14.5|3.1|28.5|1 portion=150;1 small portion=100|
us-canada-goose-breast-meat-only-skinless-raw|Canada Goose, breast meat only, skinless, raw|MP|133|24.3|0|4|1 portion=150;1 small portion=100|
us-canadian-bacon-cooked-pan-fried|Canadian bacon, cooked, pan-fried|MP|146|28.3|1.8|2.8|1 portion=150;1 small portion=100|
us-cheesefurter-cheese-smokie-pork-beef|Cheesefurter, cheese smokie, pork, beef|MP|328|14.1|1.5|29|1 portion=150;1 small portion=100|
us-chicken-back-meat-and-skin-cooked-fried|Chicken, back, meat and skin, cooked, fried|MP|331|22|10.3|21.9|1 portion=150;1 small portion=100|
us-chicken-back-meat-and-skin-cooked-roasted|Chicken, back, meat and skin, cooked, roasted|MP|300|26|0|21|1 portion=150;1 small portion=100|
us-chicken-back-meat-and-skin-cooked-stewed|Chicken, back, meat and skin, cooked, stewed|MP|258|22.2|0|18.1|1 portion=150;1 small portion=100|
us-chicken-back-meat-and-skin-raw|Chicken, back, meat and skin, raw|MP|319|14.1|0|28.7|1 portion=150;1 small portion=100|
us-chicken-back-meat-only-cooked-fried|Chicken, back, meat only, cooked, fried|MP|288|30|5.7|15.3|1 portion=150;1 small portion=100|
us-chicken-back-meat-only-cooked-roasted|Chicken, back, meat only, cooked, roasted|MP|239|28.2|0|13.2|1 portion=150;1 small portion=100|
us-chicken-back-meat-only-cooked-stewed|Chicken, back, meat only, cooked, stewed|MP|209|25.3|0|11.2|1 portion=150;1 small portion=100|
us-chicken-back-meat-only-raw|Chicken, back, meat only, raw|MP|137|19.6|0|5.9|1 portion=150;1 small portion=100|
us-chicken-breast-deli-rotisserie-seasoned-sliced-p|Chicken breast, deli, rotisserie seasoned, sliced, prepackaged|MP|98|17.4|2.9|1.9|1 portion=150;1 small portion=100|
us-chicken-breast-fat-free-mesquite-flavor-sliced|Chicken breast, fat-free, mesquite flavor, sliced|MP|80|16.8|2.3|0.4|1 portion=150;1 small portion=100|
us-chicken-breast-meat-and-skin-cooked-fried|Chicken, breast, meat and skin, cooked, fried|MP|260|24.8|9|13.2|1 portion=150;1 small portion=100|
us-chicken-breast-meat-and-skin-cooked-roasted|Chicken, breast, meat and skin, cooked, roasted|MP|197|29.8|0|7.8|1 portion=150;1 small portion=100|
us-chicken-breast-meat-and-skin-cooked-stewed|Chicken, breast, meat and skin, cooked, stewed|MP|184|27.4|0|7.4|1 portion=150;1 small portion=100|
us-chicken-breast-meat-and-skin-raw|Chicken, breast, meat and skin, raw|MP|172|20.9|0|9.3|1 portion=150;1 small portion=100|
us-chicken-breast-meat-only-cooked-fried|Chicken, breast, meat only, cooked, fried|MP|187|33.4|0.5|4.7|1 portion=150;1 small portion=100|
us-chicken-breast-meat-only-cooked-roasted|Chicken, breast, meat only, cooked, roasted|MP|165|31|0|3.6|1 portion=150;1 small portion=100|
us-chicken-breast-meat-only-cooked-stewed|Chicken, breast, meat only, cooked, stewed|MP|151|29|0|3|1 portion=150;1 small portion=100|
us-chicken-breast-oven-roasted-fat-free-sliced|Chicken breast, oven-roasted, fat-free, sliced|MP|79|16.8|2.2|0.4|1 portion=150;1 small portion=100|
us-chicken-breast-roll-oven-roasted|Chicken breast, roll, oven-roasted|MP|134|14.6|1.8|7.7|1 portion=150;1 small portion=100|
us-chicken-breast-skinless-meat-only|Chicken, breast, skinless, meat only|MP|108|20.3|0|3|1 portion=150;1 small portion=100|boneless
us-chicken-breast-tenders-breaded-cooked-microwaved|Chicken breast tenders, breaded, cooked, microwaved|MP|252|16.4|17.6|12.9|1 portion=150;1 small portion=100|
us-chicken-breast-tenders-breaded-uncooked|Chicken breast tenders, breaded, uncooked|MP|263|14.7|15|15.8|1 portion=150;1 small portion=100|
us-chicken-broiler-or-fryers-breast-skinless|Chicken, broiler or fryers, breast, skinless|MP|151|30.5|0|3.2|1 portion=150;1 small portion=100|boneless
us-chicken-broiler-rotisserie-bbq-back|Chicken, broiler, rotisserie, BBQ, back|MP|251|20.3|0.4|18.9|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-back-meat-only|Chicken, broiler, rotisserie, BBQ, back meat only|MP|212|21.9|0.3|13.9|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-breast|Chicken, broiler, rotisserie, BBQ, breast|MP|144|28|0|3.6|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-drumstick|Chicken, broiler, rotisserie, BBQ, drumstick|MP|206|25.7|0.1|11.5|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-skin|Chicken, broiler, rotisserie, BBQ, skin|MP|378|15.2|0.7|35.2|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-thigh|Chicken, broiler, rotisserie, BBQ, thigh|MP|193|24.1|0|10.7|1 portion=150;1 small portion=100|
us-chicken-broiler-rotisserie-bbq-wing|Chicken, broiler, rotisserie, BBQ, wing|MP|257|23.4|0.6|18|1 portion=150;1 small portion=100|
us-chicken-canned-meat-only-with-broth|Chicken, canned, meat only, with broth|MP|165|21.8|0|8|1 portion=150;1 small portion=100|
us-chicken-canned-no-broth|Chicken, canned, no broth|MP|185|25.3|0.9|8.1|1 portion=150;1 small portion=100|
us-chicken-capons-meat-and-skin-cooked-roasted|Chicken, capons, meat and skin, cooked, roasted|MP|229|29|0|11.7|1 portion=150;1 small portion=100|
us-chicken-capons-meat-and-skin-raw|Chicken, capons, meat and skin, raw|MP|234|18.8|0|17.1|1 portion=150;1 small portion=100|
us-chicken-cornish-game-hens-meat-and-skin-cooked-r|Chicken, cornish game hens, meat and skin, cooked, roasted|MP|259|22.3|0|18.2|1 portion=150;1 small portion=100|
us-chicken-cornish-game-hens-meat-and-skin-raw|Chicken, cornish game hens, meat and skin, raw|MP|200|17.2|0|14|1 portion=150;1 small portion=100|
us-chicken-cornish-game-hens-meat-only-cooked-roast|Chicken, cornish game hens, meat only, cooked, roasted|MP|134|23.3|0|3.9|1 portion=150;1 small portion=100|
us-chicken-cornish-game-hens-meat-only-raw|Chicken, cornish game hens, meat only, raw|MP|116|20|0|3.3|1 portion=150;1 small portion=100|
us-chicken-dark-meat-drumstick-meat-and-skin-cooked|Chicken, dark meat, drumstick, meat and skin, cooked|MP|187|22.7|0|10.7|1 portion=150;1 small portion=100|
us-chicken-dark-meat-drumstick-meat-and-skin|Chicken, dark meat, drumstick, meat and skin|MP|146|18|0|8.2|1 portion=150;1 small portion=100|added solution
us-chicken-dark-meat-drumstick-meat-only-cooked|Chicken, dark meat, drumstick, meat only, cooked|MP|155|24.2|0|5.7|1 portion=150;1 small portion=100|
us-chicken-dark-meat-drumstick-meat-only-raw|Chicken, dark meat, drumstick, meat only, raw|MP|116|19.4|0|3.7|1 portion=150;1 small portion=100|
us-chicken-dark-meat-drumstick-meat-only-with-added|Chicken, dark meat, drumstick, meat only, with added solution|MP|106|19.2|0|3.3|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-and-skin-cooked-fried|Chicken, dark meat, meat and skin, cooked, fried|MP|298|21.9|9.4|18.6|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-and-skin-cooked-roasted|Chicken, dark meat, meat and skin, cooked, roasted|MP|253|26|0|15.8|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-and-skin-cooked-stewed|Chicken, dark meat, meat and skin, cooked, stewed|MP|233|23.5|0|14.7|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-and-skin-raw|Chicken, dark meat, meat and skin, raw|MP|237|16.7|0|18.3|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-only-cooked-fried|Chicken, dark meat, meat only, cooked, fried|MP|239|29|2.6|11.6|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-only-cooked-roasted|Chicken, dark meat, meat only, cooked, roasted|MP|205|27.4|0|9.7|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-only-cooked-stewed|Chicken, dark meat, meat only, cooked, stewed|MP|192|26|0|9|1 portion=150;1 small portion=100|
us-chicken-dark-meat-meat-only-raw|Chicken, dark meat, meat only, raw|MP|125|20.1|0|4.3|1 portion=150;1 small portion=100|
us-chicken-dark-meat-thigh-meat-and-skin-cooked|Chicken, dark meat, thigh, meat and skin, cooked|MP|229|22.6|0|15.4|1 portion=150;1 small portion=100|
us-chicken-dark-meat-thigh-meat-and-skin-with-added|Chicken, dark meat, thigh, meat and skin, with added solution|MP|214|23.5|0.1|13.8|1 portion=150;1 small portion=100|
us-chicken-dark-meat-thigh-meat-only-cooked|Chicken, dark meat, thigh, meat only, cooked|MP|176|24.6|0|8.6|1 portion=150;1 small portion=100|
us-chicken-dark-meat-thigh-meat-only-raw|Chicken, dark meat, thigh, meat only, raw|MP|121|19.7|0|4.1|1 portion=150;1 small portion=100|
us-chicken-dark-meat-thigh-meat-only-with-added-sol|Chicken, dark meat, thigh, meat only, with added solution|MP|164|24.2|0|7.7|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-and-skin-cooked-fried|Chicken, drumstick, meat and skin, cooked, fried|MP|245|27|1.6|13.7|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-and-skin-cooked-roasted|Chicken, drumstick, meat and skin, cooked, roasted|MP|191|23.4|0|10.2|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-and-skin-cooked-stewed|Chicken, drumstick, meat and skin, cooked, stewed|MP|204|25.3|0|10.6|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-and-skin-raw|Chicken, drumstick, meat and skin, raw|MP|161|18.1|0.1|9.2|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-only-cooked-fried|Chicken, drumstick, meat only, cooked, fried|MP|195|28.6|0|8.1|1 portion=150;1 small portion=100|
us-chicken-drumstick-meat-only-cooked-stewed|Chicken, drumstick, meat only, cooked, stewed|MP|169|27.5|0|5.7|1 portion=150;1 small portion=100|
us-chicken-drumstick-rotisserie-original-seasoning-|Chicken, drumstick, rotisserie, original seasoning, meat only|MP|176|28.7|0|6.8|1 portion=150;1 small portion=100|
us-chicken-ground-crumbles-cooked-pan-browned|Chicken, ground, crumbles, cooked, pan-browned|MP|189|23.3|0|10.9|1 portion=150;1 small portion=100|
us-chicken-ground-raw|Chicken, ground, raw|MP|143|17.4|0|8.1|1 portion=150;1 small portion=100|
us-chicken-leg-meat-and-skin-cooked-fried|Chicken, leg, meat and skin, cooked, fried|MP|254|26.8|2.5|14.4|1 portion=150;1 small portion=100|
us-chicken-leg-meat-and-skin-cooked-roasted|Chicken, leg, meat and skin, cooked, roasted|MP|184|24|0|9|1 portion=150;1 small portion=100|
us-chicken-leg-meat-and-skin-cooked-stewed|Chicken, leg, meat and skin, cooked, stewed|MP|220|24.2|0|12.9|1 portion=150;1 small portion=100|
us-chicken-leg-meat-and-skin-raw|Chicken, leg, meat and skin, raw|MP|214|16.4|0.2|16|1 portion=150;1 small portion=100|
us-chicken-leg-meat-only-cooked-fried|Chicken, leg, meat only, cooked, fried|MP|208|28.4|0.7|9.3|1 portion=150;1 small portion=100|
us-chicken-leg-meat-only-cooked-roasted|Chicken, leg, meat only, cooked, roasted|MP|174|24.2|0|7.8|1 portion=150;1 small portion=100|
us-chicken-leg-meat-only-cooked-stewed|Chicken, leg, meat only, cooked, stewed|MP|185|26.3|0|8.1|1 portion=150;1 small portion=100|
us-chicken-leg-meat-only-raw|Chicken, leg, meat only, raw|MP|120|19.2|0|4.2|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-and-skin-cooked-fried|Chicken, light meat, meat and skin, cooked, fried|MP|246|30.5|1.8|12.1|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-and-skin-cooked-roasted|Chicken, light meat, meat and skin, cooked, roasted|MP|222|29|0|10.9|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-and-skin-cooked-stewed|Chicken, light meat, meat and skin, cooked, stewed|MP|201|26.1|0|10|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-and-skin-raw|Chicken, light meat, meat and skin, raw|MP|186|20.3|0|11.1|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-only-cooked-fried|Chicken, light meat, meat only, cooked, fried|MP|192|32.8|0.4|5.5|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-only-cooked-roasted|Chicken, light meat, meat only, cooked, roasted|MP|173|30.9|0|4.5|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-only-cooked-stewed|Chicken, light meat, meat only, cooked, stewed|MP|159|28.9|0|4|1 portion=150;1 small portion=100|
us-chicken-light-meat-meat-only-raw|Chicken, light meat, meat only, raw|MP|114|23.2|0|1.7|1 portion=150;1 small portion=100|
us-chicken-meat-and-skin-cooked-fried-batter|Chicken, meat and skin, cooked, fried, batter|MP|289|22.5|9.4|17.4|1 portion=150;1 small portion=100|
us-chicken-meat-and-skin-cooked-fried-flour|Chicken, meat and skin, cooked, fried, flour|MP|269|28.6|3.2|14.9|1 portion=150;1 small portion=100|
us-chicken-meat-and-skin-cooked-roasted|Chicken, meat and skin, cooked, roasted|MP|239|27.3|0|13.6|1 portion=150;1 small portion=100|
us-chicken-meat-and-skin-cooked-stewed|Chicken, meat and skin, cooked, stewed|MP|219|24.7|0|12.6|1 portion=150;1 small portion=100|
us-chicken-meat-and-skin-raw|Chicken, meat and skin, raw|MP|215|18.6|0|15.1|1 portion=150;1 small portion=100|
us-chicken-meat-only-cooked-fried|Chicken, meat only, cooked, fried|MP|219|30.6|1.7|9.1|1 portion=150;1 small portion=100|
us-chicken-meat-only-cooked-roasted|Chicken, meat only, cooked, roasted|MP|190|28.9|0|7.4|1 portion=150;1 small portion=100|
us-chicken-meat-only-cooked-stewed|Chicken, meat only, cooked, stewed|MP|177|27.3|0|6.7|1 portion=150;1 small portion=100|
us-chicken-meat-only-raw|Chicken, meat only, raw|MP|119|21.4|0|3.1|1 portion=150;1 small portion=100|
us-chicken-neck-meat-and-skin-cooked-fried|Chicken, neck, meat and skin, cooked, fried|MP|332|24|4.2|23.6|1 portion=150;1 small portion=100|
us-chicken-neck-meat-and-skin-cooked-simmered|Chicken, neck, meat and skin, cooked simmered|MP|247|19.6|0|18.1|1 portion=150;1 small portion=100|
us-chicken-neck-meat-and-skin-raw|Chicken, neck, meat and skin, raw|MP|297|14.1|0|26.2|1 portion=150;1 small portion=100|
us-chicken-neck-meat-only-cooked-fried|Chicken, neck, meat only, cooked, fried|MP|229|26.9|1.8|11.9|1 portion=150;1 small portion=100|
us-chicken-neck-meat-only-cooked-simmered|Chicken, neck, meat only, cooked, simmered|MP|179|24.6|0|8.2|1 portion=150;1 small portion=100|
us-chicken-neck-meat-only-raw|Chicken, neck, meat only, raw|MP|154|17.6|0|8.8|1 portion=150;1 small portion=100|
us-chicken-patty-frozen-cooked|Chicken patty, frozen, cooked|MP|287|14.9|12.8|19.6|1 portion=150;1 small portion=100|
us-chicken-patty-frozen-uncooked|Chicken patty, frozen, uncooked|MP|292|14.3|13.6|20|1 portion=150;1 small portion=100|
us-chicken-roasting-dark-meat-meat-only-cooked|Chicken, roasting, dark meat, meat only, cooked|MP|178|23.3|0|8.8|1 portion=150;1 small portion=100|
us-chicken-roasting-dark-meat-meat-only-raw|Chicken, roasting, dark meat, meat only, raw|MP|113|18.7|0|3.6|1 portion=150;1 small portion=100|
us-chicken-roasting-light-meat-meat-only-cooked|Chicken, roasting, light meat, meat only, cooked|MP|153|27.1|0|4.1|1 portion=150;1 small portion=100|
us-chicken-roasting-light-meat-meat-only-raw|Chicken, roasting, light meat, meat only, raw|MP|109|22.2|0|1.6|1 portion=150;1 small portion=100|
us-chicken-roasting-meat-and-skin-cooked-roasted|Chicken, roasting, meat and skin, cooked, roasted|MP|223|24|0|13.4|1 portion=150;1 small portion=100|
us-chicken-roasting-meat-only-cooked-roasted|Chicken, roasting, meat only, cooked, roasted|MP|167|25|0|6.6|1 portion=150;1 small portion=100|
us-chicken-roasting-meat-only-raw|Chicken, roasting, meat only, raw|MP|111|20.3|0|2.7|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-back-meat-|Chicken, rotisserie, original seasoning, back, meat and skin|MP|260|23.2|0|18.6|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-back-meat--2|Chicken, rotisserie, original seasoning, back, meat only|MP|205|25.3|0|11.5|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-breast-mea|Chicken, rotisserie, original seasoning, breast, meat and skin|MP|184|27.5|0|8.2|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-breast-mea-2|Chicken, rotisserie, original seasoning, breast, meat only|MP|137|28|0|2.8|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-drumstick|Chicken, rotisserie, original seasoning, drumstick|MP|215|26.9|0|12|1 portion=150;1 small portion=100|meat skin
us-chicken-rotisserie-original-seasoning-thigh-meat|Chicken, rotisserie, original seasoning, thigh, meat and skin|MP|233|22.9|0|15.7|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-thigh-meat-2|Chicken, rotisserie, original seasoning, thigh, meat only|MP|196|24.1|0|11.1|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-wing-meat-|Chicken, rotisserie, original seasoning, wing, meat and skin|MP|266|24.3|0|18.8|1 portion=150;1 small portion=100|
us-chicken-rotisserie-original-seasoning-wing-meat--2|Chicken, rotisserie, original seasoning, wing, meat only|MP|197|27.7|0|9.5|1 portion=150;1 small portion=100|
us-chicken-skin-drumsticks-and-thighs-cooked-braise|Chicken, skin (drumsticks and thighs), cooked, braised|MP|443|14.6|0|42.8|1 portion=150;1 small portion=100|
us-chicken-skin-drumsticks-and-thighs-cooked-roaste|Chicken, skin (drumsticks and thighs), cooked, roasted|MP|462|16.6|0|44|1 portion=150;1 small portion=100|
us-chicken-skin-drumsticks-and-thighs-raw|Chicken, skin (drumsticks and thighs), raw|MP|440|9.6|0.8|44.2|1 portion=150;1 small portion=100|
us-chicken-skin-drumsticks-and-thighs-with-added-so|Chicken, skin (drumsticks and thighs), with added solution|MP|403|12.3|1|38.9|1 portion=150;1 small portion=100|braised cooked
us-chicken-skin-drumsticks-and-thighs-with-added-so-2|Chicken, skin (drumsticks and thighs), with added solution, raw|MP|386|11.1|0|37.9|1 portion=150;1 small portion=100|
us-chicken-spread|Chicken spread|MP|158|18|4.1|17.6|1 portion=150;1 small portion=100|
us-chicken-stewing-dark-meat-meat-only-cooked|Chicken, stewing, dark meat, meat only, cooked|MP|258|28.1|0|15.3|1 portion=150;1 small portion=100|
us-chicken-stewing-dark-meat-meat-only-raw|Chicken, stewing, dark meat, meat only, raw|MP|157|19.7|0|8.1|1 portion=150;1 small portion=100|
us-chicken-stewing-light-meat-meat-only-cooked|Chicken, stewing, light meat, meat only, cooked|MP|213|33|0|8|1 portion=150;1 small portion=100|
us-chicken-stewing-light-meat-meat-only-raw|Chicken, stewing, light meat, meat only, raw|MP|137|23.1|0|4.2|1 portion=150;1 small portion=100|
us-chicken-stewing-meat-and-skin-cooked-stewed|Chicken, stewing, meat and skin, cooked, stewed|MP|285|26.9|0|18.9|1 portion=150;1 small portion=100|
us-chicken-stewing-meat-and-skin-raw|Chicken, stewing, meat and skin, raw|MP|258|17.6|0|20.3|1 portion=150;1 small portion=100|
us-chicken-stewing-meat-only-cooked-stewed|Chicken, stewing, meat only, cooked, stewed|MP|237|30.4|0|11.9|1 portion=150;1 small portion=100|
us-chicken-stewing-meat-only-raw|Chicken, stewing, meat only, raw|MP|148|21.3|0|6.3|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-and-skin-cooked-fried|Chicken, thigh, meat and skin, cooked, fried|MP|262|26.8|3.2|15|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-and-skin-cooked-roasted|Chicken, thigh, meat and skin, cooked, roasted|MP|232|23.3|0|14.7|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-and-skin-cooked-stewed|Chicken, thigh, meat and skin, cooked, stewed|MP|232|23.3|0|14.7|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-and-skin-raw|Chicken, thigh, meat and skin, raw|MP|221|16.5|0.3|16.6|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-only-cooked-fried|Chicken, thigh, meat only, cooked, fried|MP|218|28.2|1.2|10.3|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-only-cooked-roasted|Chicken, thigh, meat only, cooked, roasted|MP|179|24.8|0|8.2|1 portion=150;1 small portion=100|
us-chicken-thigh-meat-only-cooked-stewed|Chicken, thigh, meat only, cooked, stewed|MP|195|25|0|9.8|1 portion=150;1 small portion=100|
us-chicken-wing-frozen-glazed-barbecue-flavored|Chicken, wing, frozen, glazed, barbecue flavored|MP|211|19.7|3.3|12.7|1 portion=150;1 small portion=100|
us-chicken-wing-meat-and-skin-cooked-fried|Chicken, wing, meat and skin, cooked, fried|MP|321|26.1|2.4|22.2|1 portion=150;1 small portion=100|
us-chicken-wing-meat-and-skin-cooked-roasted|Chicken, wing, meat and skin, cooked, roasted|MP|254|23.8|0|16.9|1 portion=150;1 small portion=100|
us-chicken-wing-meat-and-skin-cooked-stewed|Chicken, wing, meat and skin, cooked, stewed|MP|249|22.8|0|16.8|1 portion=150;1 small portion=100|
us-chicken-wing-meat-and-skin-raw|Chicken, wing, meat and skin, raw|MP|191|17.5|0|12.9|1 portion=150;1 small portion=100|
us-chicken-wing-meat-only-cooked-fried|Chicken, wing, meat only, cooked, fried|MP|211|30.2|0|9.2|1 portion=150;1 small portion=100|
us-chicken-wing-meat-only-cooked-roasted|Chicken, wing, meat only, cooked, roasted|MP|203|30.5|0|8.1|1 portion=150;1 small portion=100|
us-chicken-wing-meat-only-cooked-stewed|Chicken, wing, meat only, cooked, stewed|MP|181|27.2|0|7.2|1 portion=150;1 small portion=100|
us-chicken-wing-meat-only-raw|Chicken, wing, meat only, raw|MP|126|22|0|3.5|1 portion=150;1 small portion=100|
us-corned-beef-loaf-jellied|Corned beef loaf, jellied|MP|153|22.9|0|6.1|1 portion=150;1 small portion=100|
us-dove-cooked|Dove, cooked|MP|213|23.9|0|13|1 portion=150;1 small portion=100|
us-duck-domesticated-meat-and-skin-cooked-roasted|Duck, domesticated, meat and skin, cooked, roasted|MP|337|19|0|28.4|1 portion=150;1 small portion=100|
us-duck-domesticated-meat-and-skin-raw|Duck, domesticated, meat and skin, raw|MP|404|11.5|0|39.3|1 portion=150;1 small portion=100|
us-duck-domesticated-meat-only-cooked-roasted|Duck, domesticated, meat only, cooked, roasted|MP|201|23.5|0|11.2|1 portion=150;1 small portion=100|
us-duck-domesticated-meat-only-raw|Duck, domesticated, meat only, raw|MP|135|18.3|0.9|6|1 portion=150;1 small portion=100|
us-duck-wild-breast-meat-only-raw|Duck, wild, breast, meat only, raw|MP|123|19.9|0|4.3|1 portion=150;1 small portion=100|
us-duck-wild-meat-and-skin-raw|Duck, wild, meat and skin, raw|MP|211|17.4|0|15.2|1 portion=150;1 small portion=100|
us-duck-young-duckling-domesticated-white-pekin-bre|Duck, young duckling, domesticated, White Pekin, breast|MP|140|27.6|0|2.5|1 portion=150;1 small portion=100|
us-duck-young-duckling-domesticated-white-pekin-leg|Duck, young duckling, domesticated, White Pekin, leg|MP|178|29.1|0|6|1 portion=150;1 small portion=100|
us-dutch-brand-loaf-chicken-pork-and-beef|Dutch brand loaf, chicken, pork and beef|MP|273|12|3.9|22.9|1 portion=150;1 small portion=100|
us-emu-fan-fillet-cooked-broiled|Emu, fan fillet, cooked, broiled|MP|154|31.3|0|2.3|1 portion=150;1 small portion=100|
us-emu-fan-fillet-raw|Emu, fan fillet, raw|MP|103|22.5|0|0.8|1 portion=150;1 small portion=100|
us-emu-flat-fillet-raw|Emu, flat fillet, raw|MP|102|22.3|0|0.7|1 portion=150;1 small portion=100|
us-emu-full-rump-cooked-broiled|Emu, full rump, cooked, broiled|MP|168|33.7|0|2.7|1 portion=150;1 small portion=100|
us-emu-full-rump-raw|Emu, full rump, raw|MP|112|22.8|0|1.6|1 portion=150;1 small portion=100|
us-emu-ground-cooked-pan-broiled|Emu, ground, cooked, pan-broiled|MP|163|28.4|0|4.7|1 portion=150;1 small portion=100|
us-emu-ground-raw|Emu, ground, raw|MP|134|22.8|0|4|1 portion=150;1 small portion=100|
us-emu-inside-drum-raw|Emu, inside drum, raw|MP|108|22.2|0|1.5|1 portion=150;1 small portion=100|
us-emu-inside-drums-cooked-broiled|Emu, inside drums, cooked, broiled|MP|156|32.4|0|2|1 portion=150;1 small portion=100|
us-emu-outside-drum-raw|Emu, outside drum, raw|MP|103|23.1|0|0.5|1 portion=150;1 small portion=100|
us-emu-oyster-raw|Emu, oyster, raw|MP|141|22.8|0|4.9|1 portion=150;1 small portion=100|
us-emu-top-loin-cooked-broiled|Emu, top loin, cooked, broiled|MP|152|29.1|0|3.1|1 portion=150;1 small portion=100|
us-frankfurter-beef-heated|Frankfurter, beef, heated|MP|322|11.7|2.7|29.4|1 portion=150;1 small portion=100|
us-frankfurter-beef-low-fat|Frankfurter, beef, low fat|MP|140|12|1.6|9.5|1 portion=150;1 small portion=100|
us-frankfurter-beef-pork-and-turkey-fat-free|Frankfurter, beef, pork, and turkey, fat free|MP|109|12.5|11.2|1.6|1 portion=150;1 small portion=100|
us-frankfurter-beef-unheated|Frankfurter, beef, unheated|MP|315|11.7|3|28.1|1 portion=150;1 small portion=100|
us-frankfurter-chicken|Frankfurter, chicken|MP|223|15.5|2.7|16.2|1 portion=150;1 small portion=100|
us-frankfurter-low-sodium|Frankfurter, low sodium|MP|312|12|1.8|28.5|1 portion=150;1 small portion=100|
us-frankfurter-meat|Frankfurter, meat|MP|290|10.3|4.2|25.8|1 portion=150;1 small portion=100|
us-frankfurter-meat-and-poultry-cooked-boiled|Frankfurter, meat and poultry, cooked, boiled|MP|298|10.3|5|26.3|1 portion=150;1 small portion=100|
us-frankfurter-meat-and-poultry-cooked-grilled|Frankfurter, meat and poultry, cooked, grilled|MP|302|10.7|5.2|26.4|1 portion=150;1 small portion=100|
us-frankfurter-meat-and-poultry-low-fat|Frankfurter, meat and poultry, low fat|MP|121|15.5|8.4|2.8|1 portion=150;1 small portion=100|
us-frankfurter-meat-and-poultry-unheated|Frankfurter, meat and poultry, unheated|MP|277|9.7|5|24.2|1 portion=150;1 small portion=100|
us-frankfurter-meat-heated|Frankfurter, meat, heated|MP|278|9.8|4.9|24.3|1 portion=150;1 small portion=100|
us-frankfurter-pork|Frankfurter, pork|MP|269|12.8|0.3|23.7|1 portion=150;1 small portion=100|
us-frankfurter-turkey|Frankfurter, turkey|MP|223|12.2|3.8|17.3|1 portion=150;1 small portion=100|
us-game-meat-beefalo-cooked-roasted|Game meat, beefalo, cooked, roasted|MP|188|30.7|0|6.3|1 portion=150;1 small portion=100|
us-game-meat-beefalo-raw|Game meat, beefalo, raw|MP|143|23.3|0|4.8|1 portion=150;1 small portion=100|
us-game-meat-bison-chuck-shoulder-clod-cooked|Game meat, bison, chuck, shoulder clod, cooked|MP|193|33.8|0|5.4|1 portion=150;1 small portion=100|
us-game-meat-bison-cooked-roasted|Game meat, bison, cooked, roasted|MP|143|28.4|0|2.4|1 portion=150;1 small portion=100|
us-game-meat-bison-ground-cooked-pan-broiled|Game meat, bison, ground, cooked, pan-broiled|MP|238|23.8|0|15.1|1 portion=150;1 small portion=100|
us-game-meat-bison-ribeye-1-steak-cooked|Game meat, bison, ribeye, 1" steak, cooked|MP|177|29.5|0|5.7|1 portion=150;1 small portion=100|
us-game-meat-bison-top-round-1-steak-cooked|Game meat, bison, top round, 1" steak, cooked|MP|174|30.2|0|5|1 portion=150;1 small portion=100|
us-game-meat-bison-top-sirloin-1-steak-cooked|Game meat, bison, top sirloin, 1" steak, cooked|MP|171|28.1|0|5.7|1 portion=150;1 small portion=100|
us-game-meat-boar-wild-cooked-roasted|Game meat, boar, wild, cooked, roasted|MP|160|28.3|0|4.4|1 portion=150;1 small portion=100|
us-game-meat-boar-wild-raw|Game meat, boar, wild, raw|MP|122|21.5|0|3.3|1 portion=150;1 small portion=100|
us-game-meat-goat-cooked-roasted|Game meat, goat, cooked, roasted|MP|143|27.1|0|3|1 portion=150;1 small portion=100|
us-goose-domesticated-meat-and-skin-cooked-roasted|Goose, domesticated, meat and skin, cooked, roasted|MP|305|25.2|0|21.9|1 portion=150;1 small portion=100|
us-goose-domesticated-meat-and-skin-raw|Goose, domesticated, meat and skin, raw|MP|371|15.9|0|33.6|1 portion=150;1 small portion=100|
us-goose-domesticated-meat-only-cooked-roasted|Goose, domesticated, meat only, cooked, roasted|MP|238|29|0|12.7|1 portion=150;1 small portion=100|
us-goose-domesticated-meat-only-raw|Goose, domesticated, meat only, raw|MP|161|22.8|0|7.1|1 portion=150;1 small portion=100|
us-guinea-hen-meat-and-skin-raw|Guinea hen, meat and skin, raw|MP|158|23.4|0|6.5|1 portion=150;1 small portion=100|
us-guinea-hen-meat-only-raw|Guinea hen, meat only, raw|MP|110|20.6|0|2.5|1 portion=150;1 small portion=100|
us-ham-and-cheese-loaf-or-roll|Ham and cheese loaf or roll|MP|241|13.6|4|18.7|1 portion=150;1 small portion=100|
us-ham-and-cheese-spread|Ham and cheese spread|MP|245|16.2|2.3|18.5|1 portion=150;1 small portion=100|
us-ham-chopped-canned|Ham, chopped, canned|MP|239|16.1|0.3|18.8|1 portion=150;1 small portion=100|
us-ham-chopped-not-canned|Ham, chopped, not canned|MP|221|16.5|0|16.7|1 portion=150;1 small portion=100|
us-ham-honey-smoked-cooked|Ham, honey, smoked, cooked|MP|122|17.9|7.3|2.4|1 portion=150;1 small portion=100|
us-ham-minced|Ham, minced|MP|263|16.3|1.8|20.7|1 portion=150;1 small portion=100|
us-ham-salad-spread|Ham salad spread|MP|216|8.7|10.6|15.5|1 portion=150;1 small portion=100|
us-ham-sliced-pre-packaged-deli-meat-96-fat-free-wa|Ham, sliced, pre-packaged, deli meat (96%fat free, water added)|MP|107|16.9|0.7|4|1 portion=150;1 small portion=100|
us-ham-sliced-regular-approximately-11-fat|Ham, sliced, regular (approximately 11% fat)|MP|164|16.6|3.6|8.8|1 portion=150;1 small portion=100|
us-ham-smoked-extra-lean-low-sodium|Ham, smoked, extra lean, low sodium|MP|141|18.5|10.7|2.7|1 portion=150;1 small portion=100|
us-ham-turkey-sliced-extra-lean-prepackaged-or-deli|Ham, turkey, sliced, extra lean, prepackaged or deli|MP|134|19.6|0.9|5.8|1 portion=150;1 small portion=100|
us-headcheese-pork|Headcheese, pork|MP|157|13.8|0|10.9|1 portion=150;1 small portion=100|
us-honey-roll-sausage-beef|Honey roll sausage, beef|MP|182|18.6|2.2|10.5|1 portion=150;1 small portion=100|
us-hormel-always-tender-pork-loin-fresh-pork|Hormel Always Tender Pork Loin, Fresh Pork|MP|145|19|0.8|7.2|1 portion=150;1 small portion=100|boneless
us-hormel-always-tender-center-cut-chops-fresh-pork|Hormel Always Tender, Center Cut Chops, Fresh Pork|MP|167|18.7|0.8|9.6|1 portion=150;1 small portion=100|
us-hormel-always-tender-pork-loin-filets-lemon-garl|Hormel Always Tender, Pork Loin Filets, Lemon Garlic-Flavored|MP|118|17.8|1.8|4.2|1 portion=150;1 small portion=100|
us-hormel-always-tender-pork-tenderloin-peppercorn-|Hormel Always Tender, Pork Tenderloin, Peppercorn-Flavored|MP|110|17.2|1.8|3.8|1 portion=150;1 small portion=100|
us-hormel-always-tender-pork-tenderloin-teriyaki-fl|Hormel Always Tender, Pork Tenderloin, Teriyaki-Flavored|MP|119|18.2|4.6|3.1|1 portion=150;1 small portion=100|
us-hormel-canadian-style-bacon|Hormel Canadian Style Bacon|MP|122|16.9|1.9|4.9|1 portion=150;1 small portion=100|
us-hormel-cure-81-ham|Hormel, Cure 81 Ham|MP|106|18.4|0.2|3.6|1 portion=150;1 small portion=100|
us-hormel-pillow-pak-sliced-turkey-pepperoni|Hormel Pillow Pak Sliced Turkey Pepperoni|MP|243|31|3.8|11.5|1 portion=150;1 small portion=100|
us-kielbasa-fully-cooked-grilled|Kielbasa, fully cooked, grilled|MP|337|12.5|5|29.7|1 portion=150;1 small portion=100|
us-kielbasa-fully-cooked-pan-fried|Kielbasa, fully cooked, pan-fried|MP|333|12.4|4.8|29.4|1 portion=150;1 small portion=100|
us-kielbasa-fully-cooked-unheated|Kielbasa, fully cooked, unheated|MP|325|10.8|3.7|29.6|1 portion=150;1 small portion=100|
us-kielbasa-polish-turkey-and-beef-smoked|Kielbasa, Polish, turkey and beef, smoked|MP|226|13.1|3.9|17.6|1 portion=150;1 small portion=100|
us-knackwurst-knockwurst-pork-beef|Knackwurst, knockwurst, pork, beef|MP|307|11.1|3.2|27.7|1 portion=150;1 small portion=100|
us-lamb-australian-ground-85-lean-15-fat-raw|Lamb, Australian, ground, 85% lean / 15% fat, raw|MP|255|17.1|0|20.7|1 portion=150;1 small portion=100|
us-lamb-cooked|Lamb, cooked|MP|206|28.2|0|9.5|1 portion=150;1 small portion=100|
us-lamb-cubed-for-stew-or-kabob-leg-and-shoulder-co|Lamb, cubed for stew or kabob (leg and shoulder), cooked|MP|223|33.7|0|8.8|1 portion=150;1 small portion=100|braised
us-lamb-cubed-for-stew-or-kabob-leg-and-shoulder-ra|Lamb, cubed for stew or kabob (leg and shoulder), raw|MP|134|20.2|0|5.3|1 portion=150;1 small portion=100|
us-lamb-foreshank-cooked-braised|Lamb, foreshank, cooked, braised|MP|243|28.4|0|13.5|1 portion=150;1 small portion=100|
us-lamb-foreshank-raw|Lamb, foreshank, raw|MP|120|21.1|0|3.3|1 portion=150;1 small portion=100|
us-lamb-ground-cooked-broiled|Lamb, ground, cooked, broiled|MP|283|24.8|0|19.7|1 portion=150;1 small portion=100|
us-lamb-ground-raw|Lamb, ground, raw|MP|282|16.6|0|23.4|1 portion=150;1 small portion=100|
us-lamb-leg-shank-half-cooked-roasted|Lamb, leg, shank half, cooked, roasted|MP|225|26.4|0|12.5|1 portion=150;1 small portion=100|
us-lamb-leg-shank-half-raw|Lamb, leg, shank half, raw|MP|185|19|0|11.5|1 portion=150;1 small portion=100|
us-lamb-leg-sirloin-half-cooked-roasted|Lamb, leg, sirloin half, cooked, roasted|MP|204|28.4|0|9.2|1 portion=150;1 small portion=100|
us-lamb-leg-sirloin-half-raw|Lamb, leg, sirloin half, raw|MP|272|16.9|0|22.1|1 portion=150;1 small portion=100|
us-lamb-leg-whole-shank-and-sirloin-cooked-roasted|Lamb, leg, whole (shank and sirloin), cooked, roasted|MP|191|28.3|0|7.7|1 portion=150;1 small portion=100|
us-lamb-leg-whole-shank-and-sirloin-raw|Lamb, leg, whole (shank and sirloin), raw|MP|230|17.9|0|17.1|1 portion=150;1 small portion=100|
us-lamb-loin-cooked-broiled|Lamb, loin, cooked, broiled|MP|297|26.1|0|20.6|1 portion=150;1 small portion=100|
us-lamb-loin-cooked-roasted|Lamb, loin, cooked, roasted|MP|202|26.6|0|9.8|1 portion=150;1 small portion=100|
us-lamb-loin-raw|Lamb, loin, raw|MP|310|16.3|0|26.6|1 portion=150;1 small portion=100|
us-lamb-raw|Lamb, raw|MP|243|17.5|0|18.7|1 portion=150;1 small portion=100|
us-lamb-rib-cooked-broiled|Lamb, rib, cooked, broiled|MP|235|27.7|0|13|1 portion=150;1 small portion=100|
us-lamb-rib-cooked-roasted|Lamb, rib, cooked, roasted|MP|359|21.1|0|29.8|1 portion=150;1 small portion=100|
us-lamb-rib-raw|Lamb, rib, raw|MP|372|14.5|0|34.4|1 portion=150;1 small portion=100|
us-lamb-shoulder-arm-cooked-braised|Lamb, shoulder, arm, cooked, braised|MP|346|30.4|0|24|1 portion=150;1 small portion=100|
us-lamb-shoulder-arm-cooked-broiled|Lamb, shoulder, arm, cooked, broiled|MP|200|27.7|0|9|1 portion=150;1 small portion=100|
us-lamb-shoulder-arm-cooked-roasted|Lamb, shoulder, arm, cooked, roasted|MP|279|22.5|0|20.2|1 portion=150;1 small portion=100|
us-lamb-shoulder-arm-raw|Lamb, shoulder, arm, raw|MP|244|17.2|0|18.9|1 portion=150;1 small portion=100|
us-lamb-shoulder-arm-roasted|Lamb, shoulder, arm, roasted|MP|267|22.9|0|18.8|1 portion=150;1 small portion=100|
us-lamb-shoulder-blade-cooked-braised|Lamb, shoulder, blade, cooked, braised|MP|339|28.9|0|23.9|1 portion=150;1 small portion=100|
us-lamb-shoulder-blade-cooked-broiled|Lamb, shoulder, blade, cooked, broiled|MP|267|23.5|0|18.5|1 portion=150;1 small portion=100|
us-lamb-shoulder-blade-cooked-roasted|Lamb, shoulder, blade, cooked, roasted|MP|270|22.6|0|19.2|1 portion=150;1 small portion=100|
us-lamb-shoulder-blade-raw|Lamb, shoulder, blade, raw|MP|151|19.3|0|7.6|1 portion=150;1 small portion=100|
us-lamb-shoulder-whole-arm-and-blade-cooked-braised|Lamb, shoulder, whole (arm and blade), cooked, braised|MP|344|28.7|0|24.6|1 portion=150;1 small portion=100|
us-lamb-shoulder-whole-arm-and-blade-cooked-broiled|Lamb, shoulder, whole (arm and blade), cooked, broiled|MP|268|23.8|0|18.4|1 portion=150;1 small portion=100|
us-lamb-shoulder-whole-arm-and-blade-cooked-roasted|Lamb, shoulder, whole (arm and blade), cooked, roasted|MP|276|22.5|0|20|1 portion=150;1 small portion=100|
us-lamb-shoulder-whole-arm-and-blade-raw|Lamb, shoulder, whole (arm and blade), raw|MP|244|17.1|0|19|1 portion=150;1 small portion=100|
us-lebanon-bologna-beef|Lebanon bologna, beef|MP|172|19|0.4|10.4|1 portion=150;1 small portion=100|
us-liver-cheese-pork|Liver cheese, pork|MP|304|15.2|2.1|25.6|1 portion=150;1 small portion=100|
us-liver-sausage-liverwurst-pork|Liver sausage, liverwurst, pork|MP|326|14.1|2.2|28.5|1 portion=150;1 small portion=100|
us-liverwurst-spread|Liverwurst spread|MP|305|12.4|5.9|25.5|1 portion=150;1 small portion=100|
us-luncheon-meat-pork-and-chicken-minced-canned|Luncheon meat, pork and chicken, minced, canned|MP|196|15.2|1.4|13.9|1 portion=150;1 small portion=100|
us-luncheon-meat-pork-canned|Luncheon meat, pork, canned|MP|334|12.5|2.1|30.3|1 portion=150;1 small portion=100|
us-luncheon-meat-pork-ham-and-chicken-minced|Luncheon meat, pork, ham, and chicken, minced|MP|293|12.5|3.4|25.1|1 portion=150;1 small portion=100|
us-luncheon-meat-pork-with-ham-minced-canned|Luncheon meat, pork with ham, minced, canned|MP|315|13.4|4.6|26.6|1 portion=150;1 small portion=100|
us-luncheon-sausage-pork-and-beef|Luncheon sausage, pork and beef|MP|260|15.4|1.6|20.9|1 portion=150;1 small portion=100|
us-luxury-loaf-pork|Luxury loaf, pork|MP|141|18.4|4.9|4.8|1 portion=150;1 small portion=100|
us-macaroni-and-cheese-loaf-chicken-pork-and-beef|Macaroni and cheese loaf, chicken, pork and beef|MP|228|11.8|11.6|15|1 portion=150;1 small portion=100|
us-meatballs-frozen-italian-style|Meatballs, frozen, Italian style|MP|286|14.4|8.1|22.2|1 portion=150;1 small portion=100|
us-mortadella-beef-pork|Mortadella, beef, pork|MP|311|16.4|3.1|25.4|1 portion=150;1 small portion=100|
us-mother-s-loaf-pork|Mother's loaf, pork|MP|282|12.1|7.5|22.3|1 portion=150;1 small portion=100|
us-olive-loaf-pork|Olive loaf, pork|MP|235|11.8|9.2|16.5|1 portion=150;1 small portion=100|
us-oscar-mayer-bologna-beef|Oscar Mayer, Bologna (beef)|MP|316|11.1|2.5|29.1|1 portion=150;1 small portion=100|
us-oscar-mayer-braunschweiger-liver-sausage-sliced|Oscar Mayer, Braunschweiger Liver Sausage (sliced)|MP|331|14.3|2.6|29.4|1 portion=150;1 small portion=100|
us-oscar-mayer-chicken-breast-honey-glazed|Oscar Mayer, Chicken Breast (honey glazed)|MP|109|19.9|4.3|1.5|1 portion=150;1 small portion=100|
us-oscar-mayer-ham-chopped-with-natural-juice|Oscar Mayer, Ham (chopped with natural juice)|MP|180|16.3|3.7|11.2|1 portion=150;1 small portion=100|
us-oscar-mayer-salami-hard|Oscar Mayer, Salami (hard)|MP|368|25.9|1.6|28.7|1 portion=150;1 small portion=100|
us-oscar-mayer-smokies-sausage-little-cheese-pork-t|Oscar Mayer, Smokies Sausage Little Cheese (pork, turkey)|MP|315|13.5|1.7|28.2|1 portion=150;1 small portion=100|
us-oscar-mayer-wieners-beef-franks|Oscar Mayer, Wieners (beef franks)|MP|329|11.4|2.8|30.3|1 portion=150;1 small portion=100|
us-ostrich-fan-raw|Ostrich, fan, raw|MP|117|21.8|0|2.7|1 portion=150;1 small portion=100|
us-ostrich-ground-cooked-pan-broiled|Ostrich, ground, cooked, pan-broiled|MP|175|26.2|0|7.1|1 portion=150;1 small portion=100|
us-ostrich-ground-raw|Ostrich, ground, raw|MP|165|20.2|0|8.7|1 portion=150;1 small portion=100|
us-ostrich-inside-leg-cooked|Ostrich, inside leg, cooked|MP|141|29|0|1.9|1 portion=150;1 small portion=100|
us-ostrich-inside-leg-raw|Ostrich, inside leg, raw|MP|111|22.4|0|1.7|1 portion=150;1 small portion=100|
us-ostrich-inside-strip-cooked|Ostrich, inside strip, cooked|MP|164|29.4|0|4.3|1 portion=150;1 small portion=100|
us-ostrich-inside-strip-raw|Ostrich, inside strip, raw|MP|127|23.7|0|2.9|1 portion=150;1 small portion=100|
us-ostrich-outside-leg-raw|Ostrich, outside leg, raw|MP|115|22.9|0|2|1 portion=150;1 small portion=100|
us-ostrich-outside-strip-cooked|Ostrich, outside strip, cooked|MP|156|28.6|0|3.8|1 portion=150;1 small portion=100|
us-ostrich-outside-strip-raw|Ostrich, outside strip, raw|MP|120|23.4|0|2.2|1 portion=150;1 small portion=100|
us-ostrich-oyster-cooked|Ostrich, oyster, cooked|MP|159|28.8|0|4|1 portion=150;1 small portion=100|
us-ostrich-oyster-raw|Ostrich, oyster, raw|MP|125|21.6|0|3.7|1 portion=150;1 small portion=100|
us-ostrich-round-raw|Ostrich, round, raw|MP|116|22|0|2.4|1 portion=150;1 small portion=100|
us-ostrich-tenderloin-raw|Ostrich, tenderloin, raw|MP|123|22.1|0|3.2|1 portion=150;1 small portion=100|
us-ostrich-tip-trimmed-cooked|Ostrich, tip trimmed, cooked|MP|145|28.5|0|2.6|1 portion=150;1 small portion=100|
us-ostrich-tip-trimmed-raw|Ostrich, tip trimmed, raw|MP|114|21.9|0|2.3|1 portion=150;1 small portion=100|
us-ostrich-top-loin-cooked|Ostrich, top loin, cooked|MP|155|28.1|0|3.9|1 portion=150;1 small portion=100|
us-ostrich-top-loin-raw|Ostrich, top loin, raw|MP|119|21.7|0|3|1 portion=150;1 small portion=100|
us-pastrami-beef-98-fat-free|Pastrami, beef, 98% fat-free|MP|95|19.6|1.5|1.2|1 portion=150;1 small portion=100|
us-pastrami-turkey|Pastrami, turkey|MP|139|16.3|3.3|6.2|1 portion=150;1 small portion=100|
us-pate-truffle-flavor|Pate, truffle flavor|MP|327|11.2|6.3|28.5|1 portion=150;1 small portion=100|
us-peppered-loaf-pork-beef|Peppered loaf, pork, beef|MP|149|17.3|4.5|6.4|1 portion=150;1 small portion=100|
us-pepperoni-beef-and-pork-sliced|Pepperoni, beef and pork, sliced|MP|504|19.3|1.2|46.3|1 portion=150;1 small portion=100|
us-pheasant-breast-meat-only-raw|Pheasant, breast, meat only, raw|MP|133|24.4|0|3.3|1 portion=150;1 small portion=100|
us-pheasant-cooked-total-edible|Pheasant, cooked, total edible|MP|239|32.4|0|12.1|1 portion=150;1 small portion=100|
us-pheasant-leg-meat-only-raw|Pheasant, leg, meat only, raw|MP|134|22.2|0|4.3|1 portion=150;1 small portion=100|
us-pheasant-raw-meat-and-skin|Pheasant, raw, meat and skin|MP|181|22.7|0|9.3|1 portion=150;1 small portion=100|
us-pheasant-raw-meat-only|Pheasant, raw, meat only|MP|133|23.6|0|3.6|1 portion=150;1 small portion=100|
us-pickle-and-pimiento-loaf-pork|Pickle and pimiento loaf, pork|MP|225|11.2|8.5|16|1 portion=150;1 small portion=100|
us-picnic-loaf-pork-beef|Picnic loaf, pork, beef|MP|232|14.9|4.8|16.6|1 portion=150;1 small portion=100|
us-polish-sausage-pork|Polish sausage, pork|MP|326|14.1|1.6|28.7|1 portion=150;1 small portion=100|
us-pork-bacon-rendered-fat-cooked|Pork, bacon, rendered fat, cooked|MP|898|0.1|0|99.5|1 portion=150;1 small portion=100|
us-pork-cured-bacon-cooked-baked|Pork, cured, bacon, cooked, baked|MP|548|35.7|1.4|43.3|1 portion=150;1 small portion=100|
us-pork-cured-bacon-cooked-broiled|Pork, cured, bacon, cooked, broiled|MP|541|37|1.4|41.8|1 portion=150;1 small portion=100|
us-pork-cured-bacon-cooked-microwaved|Pork, cured, bacon, cooked, microwaved|MP|476|39|0.5|34.1|1 portion=150;1 small portion=100|
us-pork-cured-bacon-pre-sliced-cooked|Pork, cured, bacon, pre-sliced, cooked|MP|468|33.9|1.7|35.1|1 portion=150;1 small portion=100|
us-pork-cured-breakfast-strips-raw-or-unheated|Pork, cured, breakfast strips, raw or unheated|MP|388|11.7|0.7|37.2|1 portion=150;1 small portion=100|
us-pork-cured-ham-and-water-product-rump|Pork, cured, ham and water product, rump|MP|131|21.3|1.2|4.7|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-and-water-product-shank|Pork, cured, ham and water product, shank|MP|243|14.3|1.4|20|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-and-water-product-slice|Pork, cured, ham and water product, slice|MP|155|19.9|1.4|7.8|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-and-water-product-whole|Pork, cured, ham and water product, whole|MP|123|13.9|4.6|5.5|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-extra-lean-and-regular|Pork, cured, ham, extra lean and regular|MP|165|22|0.5|7.7|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-extra-lean-approximately-5-fat|Pork, cured, ham, extra lean (approximately 5% fat)|MP|145|20.9|1.5|5.5|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-low-sodium|Pork, cured, ham, low sodium|MP|165|22|0.5|7.7|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-regular-approximately-11-fat|Pork, cured, ham, regular (approximately 11% fat)|MP|178|22.6|0|9|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-center-slice-country-style|Pork, cured, ham, center slice, country-style|MP|195|27.8|0.3|8.3|1 portion=150;1 small portion=100|
us-pork-cured-ham-center-slice-unheated|Pork, cured, ham, center slice, unheated|MP|203|20.2|0.1|12.9|1 portion=150;1 small portion=100|
us-pork-cured-ham-extra-lean-and-regular-canned|Pork, cured, ham, extra lean and regular, canned|MP|167|20.9|0.5|8.4|1 portion=150;1 small portion=100|
us-pork-cured-ham-extra-lean-approximately-4-fat-ca|Pork, cured, ham, extra lean (approximately 4% fat), canned|MP|136|21.2|0.5|4.9|1 portion=150;1 small portion=100|
us-pork-cured-ham-low-sodium-lean-and-fat|Pork, cured, ham, low sodium, lean and fat|MP|172|22.3|0.3|8.3|1 portion=150;1 small portion=100|
us-pork-cured-ham-patties-unheated|Pork, cured, ham, patties, unheated|MP|315|12.8|1.7|28.2|1 portion=150;1 small portion=100|
us-pork-cured-ham-regular-approximately-13-fat-cann|Pork, cured, ham, regular (approximately 13% fat), canned|MP|226|20.5|0.4|15.2|1 portion=150;1 small portion=100|
us-pork-cured-ham-rump|Pork, cured, ham, rump|MP|132|26|0.7|3.1|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-shank|Pork, cured, ham, shank|MP|191|24.4|0.6|9.4|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-slice|Pork, cured, ham, slice|MP|130|24.4|0|3.6|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-steak|Pork, cured, ham, steak|MP|122|19.6|0|4.3|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-water-added-rump|Pork, cured, ham -- water added, rump|MP|121|21.4|0.9|3.6|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-water-added-shank|Pork, cured, ham -- water added, shank|MP|200|18.6|1.4|13.4|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-water-added-slice|Pork, cured, ham -- water added, slice|MP|95|17.4|1.2|2.3|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-water-added-whole|Pork, cured, ham -- water added, whole|MP|126|17.8|1.5|5.5|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-whole-roasted|Pork, cured, ham, whole, roasted|MP|157|25.1|0|5.5|1 portion=150;1 small portion=100|
us-pork-cured-ham-whole-unheated|Pork, cured, ham, whole, unheated|MP|147|22.3|0.1|5.7|1 portion=150;1 small portion=100|
us-pork-cured-ham-with-natural-juices-rump|Pork, cured, ham with natural juices, rump|MP|177|22.5|0.6|9.4|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-with-natural-juices-shank|Pork, cured, ham with natural juices, shank|MP|191|22.9|0.3|10.9|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-with-natural-juices-slice|Pork, cured, ham with natural juices, slice|MP|159|22.8|0.2|7.4|1 portion=150;1 small portion=100|bone
us-pork-cured-ham-with-natural-juices-spiral-slice|Pork, cured, ham with natural juices, spiral slice|MP|129|18.7|1.2|5.8|1 portion=150;1 small portion=100|boneless
us-pork-cured-ham-with-natural-juices-spiral-slice-|Pork, cured, ham with natural juices, spiral slice, meat only|MP|126|22.6|1.1|3.8|1 portion=150;1 small portion=100|
us-pork-cured-ham-with-natural-juices-whole|Pork, cured, ham with natural juices, whole|MP|114|20.5|0.8|3.1|1 portion=150;1 small portion=100|boneless
us-pork-cured-salt-pork-raw|Pork, cured, salt pork, raw|MP|748|5.1|0|80.5|1 portion=150;1 small portion=100|
us-pork-cured-shoulder-arm-picnic-roasted|Pork, cured, shoulder, arm picnic, roasted|MP|170|24.9|0|7|1 portion=150;1 small portion=100|
us-pork-cured-shoulder-blade-roll-roasted|Pork, cured, shoulder, blade roll, roasted|MP|287|17.3|0.4|23.5|1 portion=150;1 small portion=100|
us-pork-cured-shoulder-blade-roll-unheated|Pork, cured, shoulder, blade roll, unheated|MP|269|16.5|0|22|1 portion=150;1 small portion=100|
us-pork-fresh-backfat-raw|Pork, fresh, backfat, raw|MP|812|2.9|0|88.7|1 portion=150;1 small portion=100|
us-pork-fresh-backribs-cooked-roasted|Pork, fresh, backribs, cooked, roasted|MP|292|23|0|21.5|1 portion=150;1 small portion=100|
us-pork-fresh-backribs-raw|Pork, fresh, backribs, raw|MP|224|19.1|0|16.3|1 portion=150;1 small portion=100|
us-pork-fresh-belly-raw|Pork, fresh, belly, raw|MP|518|9.3|0|53|1 portion=150;1 small portion=100|
us-pork-fresh-blade-chops|Pork, fresh, blade, (chops)|MP|202|24.7|0.8|11.1|1 portion=150;1 small portion=100|boneless
us-pork-fresh-carcass-raw|Pork, fresh, carcass, raw|MP|376|13.9|0|35.1|1 portion=150;1 small portion=100|
us-pork-fresh-cooked|Pork, fresh, cooked|MP|211|29.5|0|9.4|1 portion=150;1 small portion=100|
us-pork-fresh-enhanced-loin-tenderloin|Pork, fresh, enhanced, loin, tenderloin|MP|106|20.4|0|2.1|1 portion=150;1 small portion=100|
us-pork-fresh-ground-cooked|Pork, fresh, ground, cooked|MP|297|25.7|0|20.8|1 portion=150;1 small portion=100|
us-pork-fresh-ground-raw|Pork, fresh, ground, raw|MP|263|16.9|0|21.2|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-rump-half-cooked|Pork, fresh, leg (ham), rump half, cooked|MP|209|27|0|10.3|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-rump-half-raw|Pork, fresh, leg (ham), rump half, raw|MP|120|21.8|0|2.9|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-shank-half-cooked|Pork, fresh, leg (ham), shank half, cooked|MP|175|28.7|0|5.8|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-shank-half-raw|Pork, fresh, leg (ham), shank half, raw|MP|193|19.9|0|12|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-whole-cooked|Pork, fresh, leg (ham), whole, cooked|MP|211|29.4|0|9.4|1 portion=150;1 small portion=100|
us-pork-fresh-leg-ham-whole-raw|Pork, fresh, leg (ham), whole, raw|MP|245|17.4|0|18.9|1 portion=150;1 small portion=100|
us-pork-fresh-loin-and-shoulder-cooked|Pork, fresh, loin, and shoulder), cooked|MP|201|27.5|0|9.2|1 portion=150;1 small portion=100|
us-pork-fresh-loin-blade-chops|Pork, fresh, loin, blade (chops)|MP|256|25|0|16.6|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-blade-chops-or-roasts|Pork, fresh, loin, blade (chops or roasts)|MP|143|21.2|0|5.8|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-blade-roasts|Pork, fresh, loin, blade (roasts)|MP|217|25.7|0|11.9|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-center-loin-chops|Pork, fresh, loin, center loin (chops)|MP|170|20.7|0|9|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-center-loin-roasts|Pork, fresh, loin, center loin (roasts)|MP|231|27|0|12.8|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-center-rib-chops|Pork, fresh, loin, center rib (chops)|MP|186|25.8|0|8.4|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-center-rib-chops-or-roasts|Pork, fresh, loin, center rib (chops or roasts)|MP|186|20.3|0|11|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-center-rib-roasts|Pork, fresh, loin, center rib (roasts)|MP|248|27|0|14.7|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-country-style-ribs|Pork, fresh, loin, country-style ribs|MP|359|21.8|0|29.5|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-country-style-ribs-cooked|Pork, fresh, loin, country-style ribs, cooked|MP|247|27.7|0|14.3|1 portion=150;1 small portion=100|
us-pork-fresh-loin-country-style-ribs-raw|Pork, fresh, loin, country-style ribs, raw|MP|140|20.8|0|5.6|1 portion=150;1 small portion=100|
us-pork-fresh-loin-shoulder-and-spareribs|Pork, fresh, loin, shoulder, and spareribs|MP|211|18.2|0|14.8|1 portion=150;1 small portion=100|
us-pork-fresh-loin-shoulder-raw|Pork, fresh, loin, shoulder), raw|MP|134|21.2|0|4.9|1 portion=150;1 small portion=100|
us-pork-fresh-loin-sirloin-chops|Pork, fresh, loin, sirloin (chops)|MP|234|28.8|0|12.3|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-sirloin-chops-or-roasts|Pork, fresh, loin, sirloin (chops or roasts)|MP|129|21.7|0|4|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-sirloin-roasts|Pork, fresh, loin, sirloin (roasts)|MP|230|26.6|0|12.9|1 portion=150;1 small portion=100|bone
us-pork-fresh-loin-tenderloin-cooked|Pork, fresh, loin, tenderloin, cooked|MP|143|26.2|0|3.5|1 portion=150;1 small portion=100|
us-pork-fresh-loin-tenderloin-raw|Pork, fresh, loin, tenderloin, raw|MP|109|21|0|2.2|1 portion=150;1 small portion=100|
us-pork-fresh-loin-tenderloin-with-added-solution|Pork, fresh, loin, tenderloin, with added solution|MP|114|20.2|0|3.1|1 portion=150;1 small portion=100|
us-pork-fresh-loin-top-loin-chops|Pork, fresh, loin, top loin (chops)|MP|169|29|0|5|1 portion=150;1 small portion=100|boneless
us-pork-fresh-loin-top-loin-roasts|Pork, fresh, loin, top loin (roasts)|MP|132|22.4|0|4.1|1 portion=150;1 small portion=100|boneless
us-pork-fresh-loin-whole-cooked|Pork, fresh, loin, whole, cooked|MP|248|27.1|0|14.7|1 portion=150;1 small portion=100|
us-pork-fresh-loin-whole-raw|Pork, fresh, loin, whole, raw|MP|198|19.7|0|12.6|1 portion=150;1 small portion=100|
us-pork-fresh-raw|Pork, fresh, raw|MP|144|21.2|0|5.9|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-arm-picnic-cooked|Pork, fresh, shoulder, arm picnic, cooked|MP|228|26.7|0|12.6|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-arm-picnic-raw|Pork, fresh, shoulder, arm picnic, raw|MP|193|18.7|0|12.5|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-blade-boston-roasts|Pork, fresh, shoulder, blade, boston (roasts)|MP|269|23.1|0|18.9|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-blade-boston-steaks|Pork, fresh, shoulder, blade, boston (steaks)|MP|227|26.7|0|12.5|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-boston-butt-blade-steaks|Pork, fresh, shoulder, (Boston butt), blade (steaks)|MP|267|25.1|0|17.7|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-whole-cooked|Pork, fresh, shoulder, whole, cooked|MP|292|23.3|0|21.4|1 portion=150;1 small portion=100|
us-pork-fresh-shoulder-whole-raw|Pork, fresh, shoulder, whole, raw|MP|148|19.6|0|7.1|1 portion=150;1 small portion=100|
us-pork-fresh-spareribs-cooked-braised|Pork, fresh, spareribs, cooked, braised|MP|397|29.1|0|30.3|1 portion=150;1 small portion=100|
us-pork-fresh-spareribs-cooked-roasted|Pork, fresh, spareribs, cooked, roasted|MP|361|20.9|0|30.9|1 portion=150;1 small portion=100|
us-pork-fresh-spareribs-raw|Pork, fresh, spareribs, raw|MP|277|15.5|0|23.4|1 portion=150;1 small portion=100|
us-pork-fresh-with-added-solution-cooked|Pork, fresh, with added solution, cooked|MP|585|10.1|0.3|60.4|1 portion=150;1 small portion=100|
us-pork-fresh-with-added-solution-raw|Pork, fresh, with added solution, raw|MP|508|9.3|0|52.3|1 portion=150;1 small portion=100|
us-pork-ground-72-lean-28-fat-cooked-crumbles|Pork, ground, 72% lean / 28% fat, cooked, crumbles|MP|393|22.8|1.4|32.9|1 portion=150;1 small portion=100|
us-pork-ground-72-lean-28-fat-cooked-pan-broiled|Pork, ground, 72% lean / 28% fat, cooked, pan-broiled|MP|377|22.6|1.1|31.4|1 portion=150;1 small portion=100|
us-pork-ground-84-lean-16-fat-cooked-crumbles|Pork, ground, 84% lean / 16% fat, cooked, crumbles|MP|289|26.7|0.6|20|1 portion=150;1 small portion=100|
us-pork-ground-84-lean-16-fat-cooked-pan-broiled|Pork, ground, 84% lean / 16% fat, cooked, pan-broiled|MP|301|27.1|0|21.4|1 portion=150;1 small portion=100|
us-pork-ground-84-lean-16-fat-raw|Pork, ground, 84% lean / 16% fat, raw|MP|218|18|0.4|16|1 portion=150;1 small portion=100|
us-pork-ground-96-lean-4-fat-cooked-crumbles|Pork, ground, 96% lean / 4% fat, cooked, crumbles|MP|187|30.6|0|7.2|1 portion=150;1 small portion=100|
us-pork-ground-96-lean-4-fat-cooked-pan-broiled|Pork, ground, 96% lean / 4% fat, cooked, pan-broiled|MP|185|31.7|0.6|6.2|1 portion=150;1 small portion=100|
us-pork-ground-96-lean-4-fat-raw|Pork, ground, 96% lean / 4% fat, raw|MP|121|21.1|0.2|4|1 portion=150;1 small portion=100|
us-pork-leg-cap-steak-raw|Pork, Leg Cap Steak, raw|MP|123|21.6|0|3.4|1 portion=150;1 small portion=100|boneless
us-pork-leg-sirloin-tip-roast-cooked-braised|Pork, Leg sirloin tip roast, cooked, braised|MP|156|31.1|0|2.6|1 portion=150;1 small portion=100|boneless
us-pork-leg-sirloin-tip-roast-raw|Pork, Leg sirloin tip roast, raw|MP|113|22.9|0|1.7|1 portion=150;1 small portion=100|boneless
us-pork-loin-fresh-backribs-cooked-roasted|Pork loin, fresh, backribs, cooked-roasted|MP|255|24.2|0|17.7|1 portion=150;1 small portion=100|bone
us-pork-loin-fresh-backribs-raw|Pork loin, fresh, backribs, raw|MP|172|20.9|0|9.8|1 portion=150;1 small portion=100|bone
us-pork-loin-leg-cap-steak-cooked|Pork, loin, leg cap steak, cooked|MP|158|27.6|0|4.4|1 portion=150;1 small portion=100|boneless
us-pork-oriental-style-dehydrated|Pork, oriental style, dehydrated|MP|615|11.8|1.4|62.4|1 portion=150;1 small portion=100|
us-pork-pickled-pork-hocks|Pork, pickled pork hocks|MP|171|19.1|0|10.5|1 portion=150;1 small portion=100|
us-pork-sausage-link-patty-cooked-pan-fried|Pork sausage, link/patty, cooked, pan-fried|MP|325|18.5|1.4|27.3|1 portion=150;1 small portion=100|
us-pork-sausage-link-patty-fully-cooked-microwaved|Pork sausage, link/patty, fully cooked, microwaved|MP|438|15.1|0.6|41.7|1 portion=150;1 small portion=100|
us-pork-sausage-link-patty-fully-cooked-unheated|Pork sausage, link/patty, fully cooked, unheated|MP|392|13.5|0.7|37.3|1 portion=150;1 small portion=100|
us-pork-sausage-link-patty-reduced-fat-cooked-pan-f|Pork sausage, link/patty, reduced fat, cooked, pan-fried|MP|267|20.9|0.2|20.3|1 portion=150;1 small portion=100|
us-pork-sausage-reduced-sodium-cooked|Pork sausage, reduced sodium, cooked|MP|271|9.4|8.1|22.4|1 portion=150;1 small portion=100|
us-pork-sausage-rice-links-brown-and-serve-cooked|Pork sausage rice links, brown and serve, cooked|MP|407|13.7|2.4|37.6|1 portion=150;1 small portion=100|
us-pork-shoulder-breast-cooked-broiled|Pork, Shoulder breast, cooked, broiled|MP|162|28.5|0|4.5|1 portion=150;1 small portion=100|boneless
us-pork-shoulder-breast-raw|Pork, Shoulder breast, raw|MP|127|22.5|0|3.4|1 portion=150;1 small portion=100|boneless
us-pork-shoulder-petite-tender-cooked|Pork, shoulder, petite tender, cooked|MP|155|27.5|0|4.2|1 portion=150;1 small portion=100|boneless
us-pork-shoulder-petite-tender-raw|Pork, Shoulder petite tender, raw|MP|128|21.7|0|3.9|1 portion=150;1 small portion=100|boneless
us-poultry-mechanically-deboned|Poultry, mechanically deboned|MP|199|13.8|0|15.5|1 portion=150;1 small portion=100|backs necks skin
us-poultry-mechanically-deboned-from-backs-and-neck|Poultry, mechanically deboned, from backs and necks with skin|MP|272|11.4|0|24.7|1 portion=150;1 small portion=100|
us-poultry-mechanically-deboned-from-mature-hens-ra|Poultry, mechanically deboned, from mature hens, raw|MP|243|14.7|0|20|1 portion=150;1 small portion=100|
us-poultry-salad-sandwich-spread|Poultry salad sandwich spread|MP|200|11.6|7.4|13.5|1 portion=150;1 small portion=100|
us-quail-breast-meat-only-raw|Quail, breast, meat only, raw|MP|123|22.6|0|3|1 portion=150;1 small portion=100|
us-quail-cooked-total-edible|Quail, cooked, total edible|MP|227|25.1|0|14.1|1 portion=150;1 small portion=100|
us-quail-meat-and-skin-raw|Quail, meat and skin, raw|MP|192|19.6|0|12.1|1 portion=150;1 small portion=100|
us-quail-meat-only-raw|Quail, meat only, raw|MP|134|21.8|0|4.5|1 portion=150;1 small portion=100|
us-roast-beef-deli-style-prepackaged-sliced|Roast beef, deli style, prepackaged, sliced|MP|115|18.6|0.6|3.7|1 portion=150;1 small portion=100|
us-roast-beef-spread|Roast beef spread|MP|223|15.3|3.7|16.3|1 portion=150;1 small portion=100|
us-ruffed-grouse-breast-meat-skinless-raw|Ruffed Grouse, breast meat, skinless, raw|MP|112|25.9|0|0.9|1 portion=150;1 small portion=100|
us-salami-cooked-beef|Salami, cooked, beef|MP|261|12.6|1.9|22.2|1 portion=150;1 small portion=100|
us-salami-cooked-beef-and-pork|Salami, cooked, beef and pork|MP|336|21.9|2.4|25.9|1 portion=150;1 small portion=100|
us-salami-cooked-turkey|Salami, cooked, turkey|MP|172|19.2|1.6|9.2|1 portion=150;1 small portion=100|
us-salami-dry-or-hard-pork|Salami, dry or hard, pork|MP|407|22.6|1.6|33.7|1 portion=150;1 small portion=100|
us-salami-dry-or-hard-pork-beef|Salami, dry or hard, pork, beef|MP|378|21.1|0.7|31.7|1 portion=150;1 small portion=100|
us-salami-italian-pork|Salami, Italian, pork|MP|425|21.7|1.2|37|1 portion=150;1 small portion=100|
us-salami-italian-pork-and-beef-dry-sliced|Salami, Italian, pork and beef, dry, sliced|MP|350|21.8|6.4|26.4|1 portion=150;1 small portion=100|
us-salami-pork-beef-less-sodium|Salami, pork, beef, less sodium|MP|396|15|15.4|30.5|1 portion=150;1 small portion=100|
us-sandwich-spread-pork-beef|Sandwich spread, pork, beef|MP|235|7.7|11.9|17.3|1 portion=150;1 small portion=100|
us-sausage-beef-cured-cooked-smoked|Sausage, beef, cured, cooked, smoked|MP|312|14.1|2.4|26.9|1 portion=150;1 small portion=100|
us-sausage-beef-fresh-cooked|Sausage, beef, fresh, cooked|MP|332|18.2|0.4|28|1 portion=150;1 small portion=100|
us-sausage-berliner-pork-beef|Sausage, Berliner, pork, beef|MP|230|15.3|2.6|17.2|1 portion=150;1 small portion=100|
us-sausage-chicken-beef-pork-skinless|Sausage, chicken, beef, pork, skinless|MP|216|13.6|8.1|14.3|1 portion=150;1 small portion=100|
us-sausage-chicken-or-turkey-italian-style-lower-so|Sausage, chicken or turkey, Italian style, lower sodium|MP|183|21.4|14.3|4.5|1 portion=150;1 small portion=100|
us-sausage-italian-pork-mild-cooked|Sausage, Italian, pork, mild, cooked|MP|324|18.4|1.9|26.4|1 portion=150;1 small portion=100|
us-sausage-italian-pork-mild-raw|Sausage, Italian, pork, mild, raw|MP|290|13.9|3|24.3|1 portion=150;1 small portion=100|
us-sausage-italian-sweet-links|Sausage, Italian, sweet, links|MP|149|16.1|2.1|8.4|1 portion=150;1 small portion=100|
us-sausage-italian-turkey-smoked|Sausage, Italian, turkey, smoked|MP|158|15.1|4.7|8.8|1 portion=150;1 small portion=100|
us-sausage-new-england-brand-pork-beef|Sausage, New england brand, pork, beef|MP|161|17.3|4.8|7.6|1 portion=150;1 small portion=100|
us-sausage-polish-beef-with-chicken-hot|Sausage, Polish, beef with chicken, hot|MP|259|17.6|3.6|19.4|1 portion=150;1 small portion=100|
us-sausage-polish-pork-and-beef-smoked|Sausage, Polish, pork and beef, smoked|MP|301|12.1|2|26.6|1 portion=150;1 small portion=100|
us-sausage-pork-and-beef-fresh-cooked|Sausage, pork and beef, fresh, cooked|MP|396|13.8|2.7|36.3|1 portion=150;1 small portion=100|
us-sausage-pork-and-beef-with-cheddar-cheese-smoked|Sausage, pork and beef, with cheddar cheese, smoked|MP|296|12.9|2.1|25.8|1 portion=150;1 small portion=100|
us-sausage-pork-and-turkey-pre-cooked|Sausage, pork and turkey, pre-cooked|MP|342|12.1|3.6|30.6|1 portion=150;1 small portion=100|
us-sausage-pork-chorizo-link-or-ground-raw|Sausage, pork, chorizo, link or ground, raw|MP|296|13.6|3.8|25.1|1 portion=150;1 small portion=100|
us-sausage-pork-turkey-and-beef-reduced-sodium|Sausage, pork, turkey, and beef, reduced sodium|MP|284|10.7|0.1|26.8|1 portion=150;1 small portion=100|
us-sausage-smoked-link-sausage-pork|Sausage, smoked link sausage, pork|MP|309|12|0.9|28.2|1 portion=150;1 small portion=100|
us-sausage-smoked-link-sausage-pork-and-beef|Sausage, smoked link sausage, pork and beef|MP|320|12|2.4|28.7|1 portion=150;1 small portion=100|
us-sausage-smoked-link-sausage|Sausage, smoked link sausage|MP|313|13.3|1.9|27.6|1 portion=150;1 small portion=100|added beef milk nonfat pork
us-sausage-summer-pork-and-beef-sticks-with-cheddar|Sausage, summer, pork and beef, sticks, with cheddar cheese|MP|426|19.4|1.8|37.9|1 portion=150;1 small portion=100|
us-sausage-turkey-and-pork-fresh-patty-or-link-cook|Sausage, turkey and pork, fresh, patty or link, cooked|MP|307|22.7|0.7|23|1 portion=150;1 small portion=100|
us-sausage-turkey-breakfast-links-mild-raw|Sausage, turkey, breakfast links, mild, raw|MP|174|15.9|3.2|10.4|1 portion=150;1 small portion=100|
us-sausage-turkey-fresh-cooked|Sausage, turkey, fresh, cooked|MP|196|23.9|0|10.4|1 portion=150;1 small portion=100|
us-sausage-turkey-fresh-raw|Sausage, turkey, fresh, raw|MP|155|18.8|0.5|8.1|1 portion=150;1 small portion=100|
us-sausage-turkey-hot-smoked|Sausage, turkey, hot, smoked|MP|158|15.1|4.7|8.8|1 portion=150;1 small portion=100|
us-sausage-turkey-pork-and-beef-low-fat|Sausage, turkey, pork, and beef, low fat|MP|101|8|11.5|2.5|1 portion=150;1 small portion=100|
us-sausage-turkey-reduced-fat-brown-and-serve-cooke|Sausage, turkey, reduced fat, brown and serve, cooked|MP|204|17|10.9|10.3|1 portion=150;1 small portion=100|
us-sausage-vienna-canned-chicken-beef|Sausage, Vienna, canned, chicken, beef|MP|230|10.5|2.6|19.4|1 portion=150;1 small portion=100|
us-scrapple-pork|Scrapple, pork|MP|213|8.1|14.1|13.9|1 portion=150;1 small portion=100|
us-swisswurst-pork-and-beef-with-swiss-cheese-smoke|Swisswurst, pork and beef, with swiss cheese, smoked|MP|307|12.7|1.6|27.4|1 portion=150;1 small portion=100|
us-thuringer-cervelat-summer-sausage-beef-pork|Thuringer, cervelat, summer sausage, beef, pork|MP|362|17.5|3.3|30.4|1 portion=150;1 small portion=100|
us-turkey-all-classes-back-meat-and-skin-cooked|Turkey, all classes, back, meat and skin, cooked|MP|244|26.6|0.2|14.4|1 portion=150;1 small portion=100|
us-turkey-all-classes-breast-meat-and-skin-cooked|Turkey, all classes, breast, meat and skin, cooked|MP|189|28.7|0|7.4|1 portion=150;1 small portion=100|
us-turkey-all-classes-breast-meat-and-skin-raw|Turkey, all classes, breast, meat and skin, raw|MP|157|21.9|0|7|1 portion=150;1 small portion=100|
us-turkey-all-classes-leg-meat-and-skin-cooked|Turkey, all classes, leg, meat and skin, cooked|MP|208|27.9|0|9.8|1 portion=150;1 small portion=100|
us-turkey-all-classes-leg-meat-and-skin-raw|Turkey, all classes, leg, meat and skin, raw|MP|144|19.5|0|6.7|1 portion=150;1 small portion=100|
us-turkey-all-classes-light-meat-cooked-roasted|Turkey, all classes, light meat, cooked, roasted|MP|147|30.1|0|2.1|1 portion=150;1 small portion=100|
us-turkey-all-classes-wing-meat-and-skin-cooked|Turkey, all classes, wing, meat and skin, cooked|MP|229|27.4|0|12.4|1 portion=150;1 small portion=100|
us-turkey-all-classes-wing-meat-and-skin-raw|Turkey, all classes, wing, meat and skin, raw|MP|197|20.2|0|12.3|1 portion=150;1 small portion=100|
us-turkey-and-gravy-frozen|Turkey and gravy, frozen|MP|67|5.9|4.6|2.6|1 portion=150;1 small portion=100|
us-turkey-back-from-whole-bird-meat-and-skin|Turkey, back, from whole bird, meat and skin|MP|206|16.9|0.2|15.4|1 portion=150;1 small portion=100|added solution
us-turkey-back-from-whole-bird-meat-only-with-added|Turkey, back, from whole bird, meat only, with added solution|MP|115|19.3|0.2|4.1|1 portion=150;1 small portion=100|
us-turkey-breast-from-whole-bird-meat-only-with-add|Turkey, breast, from whole bird, meat only, with added solution|MP|127|27|0|2.1|1 portion=150;1 small portion=100|
us-turkey-breast-low-salt-prepackaged-or-deli-lunch|Turkey breast, low salt, prepackaged or deli, luncheon meat|MP|109|21.8|3.5|0.8|1 portion=150;1 small portion=100|
us-turkey-breast-pre-basted-meat-and-skin-cooked-ro|Turkey breast, pre-basted, meat and skin, cooked, roasted|MP|126|22.2|0|3.5|1 portion=150;1 small portion=100|
us-turkey-breast-sliced-prepackaged|Turkey breast, sliced, prepackaged|MP|106|14.8|2.2|3.8|1 portion=150;1 small portion=100|
us-turkey-breast-smoked-lemon-pepper-flavor-97-fat-|Turkey, breast, smoked, lemon pepper flavor, 97% fat-free|MP|95|20.9|1.3|0.7|1 portion=150;1 small portion=100|
us-turkey-canned-meat-only-with-broth|Turkey, canned, meat only, with broth|MP|169|23.7|1.5|6.9|1 portion=150;1 small portion=100|
us-turkey-dark-meat-from-whole-meat-and-skin|Turkey, dark meat from whole, meat and skin|MP|199|25.6|0|10.8|1 portion=150;1 small portion=100|added cooked solution
us-turkey-dark-meat-from-whole-meat-only-with-added|Turkey, dark meat from whole, meat only, with added solution|MP|115|19.3|0.1|4.1|1 portion=150;1 small portion=100|
us-turkey-dark-meat-meat-and-skin-raw|Turkey, dark meat, meat and skin, raw|MP|166|19.8|0.2|9|1 portion=150;1 small portion=100|
us-turkey-dark-meat-meat-only-with-added-solution-c|Turkey, dark meat, meat only, with added solution, cooked|MP|158|26.1|0|6|1 portion=150;1 small portion=100|
us-turkey-diced-light-and-dark-meat-seasoned|Turkey, diced, light and dark meat, seasoned|MP|138|18.7|1|6|1 portion=150;1 small portion=100|
us-turkey-drumstick-from-whole-bird-meat-only-raw|Turkey, drumstick, from whole bird, meat only, raw|MP|109|23.7|0.1|1.5|1 portion=150;1 small portion=100|
us-turkey-drumstick-from-whole-bird-meat-only-roast|Turkey, drumstick, from whole bird, meat only, roasted|MP|139|30.1|0|2.1|1 portion=150;1 small portion=100|
us-turkey-drumstick-from-whole-bird-meat-only|Turkey, drumstick, from whole bird, meat only|MP|158|26.1|0|6|1 portion=150;1 small portion=100|added solution
us-turkey-drumstick-smoked-cooked-with-skin|Turkey, drumstick, smoked, cooked, with skin|MP|200|27.9|0|9.8|1 portion=150;1 small portion=100|
us-turkey-from-whole-light-meat-meat-and-skin|Turkey from whole, light meat, meat and skin|MP|157|26.5|0|5.6|1 portion=150;1 small portion=100|added cooked solution
us-turkey-from-whole-light-meat-meat-only-with-adde|Turkey from whole, light meat, meat only, with added solution|MP|127|27|0|2.1|1 portion=150;1 small portion=100|cooked
us-turkey-fryer-roasters-meat-and-skin-cooked-roast|Turkey, fryer-roasters, meat and skin, cooked, roasted|MP|172|28.3|0|5.7|1 portion=150;1 small portion=100|
us-turkey-ground-85-lean-15-fat-pan-broiled-crumble|Turkey, ground, 85% lean, 15% fat, pan-broiled crumbles|MP|258|25.1|0|17.5|1 portion=150;1 small portion=100|
us-turkey-ground-85-lean-15-fat-patties|Turkey, ground, 85% lean, 15% fat, patties|MP|249|25.9|0|16.2|1 portion=150;1 small portion=100|
us-turkey-ground-85-lean-15-fat-raw|Turkey, ground, 85% lean, 15% fat, raw|MP|180|16.9|0|12.5|1 portion=150;1 small portion=100|
us-turkey-ground-93-lean-7-fat-pan-broiled-crumbles|Turkey, ground, 93% lean, 7% fat, pan-broiled crumbles|MP|213|27.1|0|11.6|1 portion=150;1 small portion=100|
us-turkey-ground-93-lean-7-fat-patties|Turkey, ground, 93% lean, 7% fat, patties|MP|207|25.9|0|11.5|1 portion=150;1 small portion=100|
us-turkey-ground-93-lean-7-fat-raw|Turkey, ground, 93% lean, 7% fat, raw|MP|150|18.7|0|8.3|1 portion=150;1 small portion=100|
us-turkey-ground-cooked|Turkey, Ground, cooked|MP|203|27.4|0|10.4|1 portion=150;1 small portion=100|
us-turkey-ground-fat-free-pan-broiled-crumbles|Turkey, ground, fat free, pan-broiled crumbles|MP|151|31.7|0|2.7|1 portion=150;1 small portion=100|
us-turkey-ground-fat-free-patties-broiled|Turkey, ground, fat free, patties, broiled|MP|138|29|0|2.5|1 portion=150;1 small portion=100|
us-turkey-ground-fat-free-raw|Turkey, ground, fat free, raw|MP|112|23.6|0|2|1 portion=150;1 small portion=100|
us-turkey-ground-raw|Turkey, Ground, raw|MP|148|19.7|0|7.7|1 portion=150;1 small portion=100|
us-turkey-light-or-dark-meat-smoked-cooked|Turkey, light or dark meat, smoked, cooked|MP|162|29.3|0|5|1 portion=150;1 small portion=100|bone removed skin
us-turkey-light-or-dark-meat-smoked-cooked-with-ski|Turkey, light or dark meat, smoked, cooked, with skin|MP|208|28.1|0|9.7|1 portion=150;1 small portion=100|
us-turkey-mechanically-deboned-from-turkey-frames-r|Turkey, mechanically deboned, from turkey frames, raw|MP|201|13.3|0|16|1 portion=150;1 small portion=100|
us-turkey-roast-frozen-seasoned-light-and-dark-meat|Turkey roast, frozen, seasoned, light and dark meat|MP|120|17.6|6.4|2.2|1 portion=150;1 small portion=100|boneless
us-turkey-skin-from-whole-light-and-dark-with-added|Turkey, skin from whole (light and dark), with added solution|MP|381|12.3|0.2|36.8|1 portion=150;1 small portion=100|
us-turkey-sticks-breaded-battered-fried|Turkey sticks, breaded, battered, fried|MP|279|14.2|17|16.9|1 portion=150;1 small portion=100|
us-turkey-thigh-from-whole-bird-meat-only-raw|Turkey, thigh, from whole bird, meat only, raw|MP|108|21.3|0.2|2.5|1 portion=150;1 small portion=100|
us-turkey-thigh-from-whole-bird-meat-only-roasted|Turkey, thigh, from whole bird, meat only, roasted|MP|165|27.7|0|6|1 portion=150;1 small portion=100|
us-turkey-thigh-from-whole-bird-meat-only-with-adde|Turkey, thigh, from whole bird, meat only, with added solution|MP|115|19.3|0.2|4.1|1 portion=150;1 small portion=100|
us-turkey-thigh-pre-basted-meat-and-skin-cooked-roa|Turkey thigh, pre-basted, meat and skin, cooked, roasted|MP|157|18.8|0|8.5|1 portion=150;1 small portion=100|
us-turkey-white-rotisserie-deli-cut|Turkey, white, rotisserie, deli cut|MP|112|13.5|7.7|3|1 portion=150;1 small portion=100|
us-turkey-whole-back-meat-only-cooked|Turkey, whole, back, meat only, cooked|MP|173|27.7|0|6|1 portion=150;1 small portion=100|
us-turkey-whole-back-meat-only-raw|Turkey, whole, back, meat only, raw|MP|113|21.3|0.2|2.5|1 portion=150;1 small portion=100|
us-turkey-whole-breast-meat-only-cooked|Turkey, whole, breast, meat only, cooked|MP|147|30.1|0|2.1|1 portion=150;1 small portion=100|
us-turkey-whole-breast-meat-only-raw|Turkey, whole, breast, meat only, raw|MP|114|23.7|0.1|1.5|1 portion=150;1 small portion=100|
us-turkey-whole-dark-meat-cooked-roasted|Turkey, whole, dark meat, cooked, roasted|MP|173|27.7|0|6|1 portion=150;1 small portion=100|
us-turkey-whole-dark-meat-meat-and-skin-cooked|Turkey, whole, dark meat, meat and skin, cooked|MP|206|27.3|0.1|10|1 portion=150;1 small portion=100|
us-turkey-whole-dark-meat-meat-only-raw|Turkey, whole, dark meat, meat only, raw|MP|108|21.3|0.2|2.5|1 portion=150;1 small portion=100|
us-turkey-whole-light-meat-meat-and-skin-cooked|Turkey, whole, light meat, meat and skin, cooked|MP|177|29.6|0.1|5.6|1 portion=150;1 small portion=100|
us-turkey-whole-light-meat-meat-and-skin-raw|Turkey, whole, light meat, meat and skin, raw|MP|161|22|0.2|7.4|1 portion=150;1 small portion=100|
us-turkey-whole-light-meat-raw|Turkey, whole, light meat, raw|MP|114|23.7|0.1|1.5|1 portion=150;1 small portion=100|
us-turkey-whole-meat-and-skin-cooked-roasted|Turkey, whole, meat and skin, cooked, roasted|MP|189|28.6|0.1|7.4|1 portion=150;1 small portion=100|
us-turkey-whole-meat-and-skin-raw|Turkey, whole, meat and skin, raw|MP|144|21.6|0.1|5.6|1 portion=150;1 small portion=100|
us-turkey-whole-meat-and-skin-with-added-solution-r|Turkey, whole, meat and skin, with added solution, raw|MP|159|19|0.2|9.1|1 portion=150;1 small portion=100|
us-turkey-whole-meat-and-skin-with-added-solution-r-2|Turkey, whole, meat and skin, with added solution, roasted|MP|176|26.1|0|8|1 portion=150;1 small portion=100|
us-turkey-whole-meat-only-cooked-roasted|Turkey, whole, meat only, cooked, roasted|MP|159|29.1|0|3.8|1 portion=150;1 small portion=100|
us-turkey-whole-meat-only-raw|Turkey, whole, meat only, raw|MP|115|22.6|0.1|1.9|1 portion=150;1 small portion=100|
us-turkey-whole-meat-only-with-added-solution-raw|Turkey, whole, meat only, with added solution, raw|MP|106|20.9|0.1|2.4|1 portion=150;1 small portion=100|
us-turkey-whole-meat-only-with-added-solution-roast|Turkey, whole, meat only, with added solution, roasted|MP|140|26.6|0|3.7|1 portion=150;1 small portion=100|
us-turkey-whole-neck-meat-only-cooked|Turkey, whole, neck, meat only, cooked|MP|162|22.5|0|7.4|1 portion=150;1 small portion=100|
us-turkey-whole-neck-meat-only-raw|Turkey, whole, neck, meat only, raw|MP|125|16.5|0|6|1 portion=150;1 small portion=100|
us-turkey-whole-skin-light-and-dark-raw|Turkey, whole, skin (light and dark), raw|MP|407|13|0.2|38.9|1 portion=150;1 small portion=100|
us-turkey-whole-skin-light-and-dark-roasted|Turkey, whole, skin (light and dark), roasted|MP|459|23.9|0.6|39.3|1 portion=150;1 small portion=100|
us-turkey-whole-wing-meat-only-cooked|Turkey, whole, wing, meat only, cooked|MP|147|30.1|0|2.1|1 portion=150;1 small portion=100|
us-turkey-whole-wing-meat-only-raw|Turkey, whole, wing, meat only, raw|MP|115|23.7|0.1|1.5|1 portion=150;1 small portion=100|
us-turkey-wing-from-whole-bird-meat-only-with-added|Turkey, wing, from whole bird, meat only, with added solution|MP|127|27|0|2.1|1 portion=150;1 small portion=100|
us-turkey-wing-smoked-cooked-with-skin|Turkey, wing, smoked, cooked, with skin|MP|221|27.4|0|12.4|1 portion=150;1 small portion=100|
us-veal-australian-rib-rib-roast-raw|Veal, Australian, rib, rib roast, raw|MP|134|21.7|1.4|4.6|1 portion=150;1 small portion=100|
us-veal-australian-shank-fore|Veal, Australian, shank, fore|MP|145|19.6|0|7.4|1 portion=150;1 small portion=100|bone
us-veal-australian-shank-hind|Veal, Australian, shank, hind|MP|122|20.4|0|4.5|1 portion=150;1 small portion=100|bone
us-veal-breast-plate-half-cooked|Veal, breast, plate half, cooked|MP|282|25.9|0|19|1 portion=150;1 small portion=100|boneless
us-veal-breast-point-half-cooked|Veal, breast, point half, cooked|MP|248|28.2|0|14.2|1 portion=150;1 small portion=100|boneless
us-veal-breast-whole-cooked|Veal, breast, whole, cooked|MP|266|27|0|16.8|1 portion=150;1 small portion=100|boneless
us-veal-breast-whole-raw|Veal, breast, whole, raw|MP|208|17.5|0|14.8|1 portion=150;1 small portion=100|boneless
us-veal-cooked|Veal, cooked|MP|231|30.1|0|11.4|1 portion=150;1 small portion=100|
us-veal-cubed-for-stew-leg-and-shoulder-cooked-brai|Veal, cubed for stew (leg and shoulder), cooked, braised|MP|188|34.9|0|4.3|1 portion=150;1 small portion=100|
us-veal-cubed-for-stew-leg-and-shoulder-raw|Veal, cubed for stew (leg and shoulder), raw|MP|109|20.3|0|2.5|1 portion=150;1 small portion=100|
us-veal-foreshank-osso-buco-cooked-braised|Veal, foreshank, osso buco, cooked, braised|MP|157|29.1|0|4.5|1 portion=150;1 small portion=100|
us-veal-ground-cooked-broiled|Veal, ground, cooked, broiled|MP|172|24.4|0|7.6|1 portion=150;1 small portion=100|
us-veal-ground-cooked-pan-fried|Veal, ground, cooked, pan-fried|MP|215|25.8|1.5|11.8|1 portion=150;1 small portion=100|
us-veal-ground-raw|Veal, ground, raw|MP|197|18.6|0|13.1|1 portion=150;1 small portion=100|
us-veal-leg-top-round-cap-off-cutlet|Veal, leg, top round, cap off, cutlet|MP|107|22.1|0|2.1|1 portion=150;1 small portion=100|
us-veal-leg-top-round-cooked-braised|Veal, leg (top round), cooked, braised|MP|203|36.7|0|5.1|1 portion=150;1 small portion=100|
us-veal-leg-top-round-cooked-pan-fried-breaded|Veal, leg (top round), cooked, pan-fried, breaded|MP|238|27.3|9.9|9.2|1 portion=150;1 small portion=100|
us-veal-leg-top-round-cooked-pan-fried-not-breaded|Veal, leg (top round), cooked, pan-fried, not breaded|MP|183|33.2|0|4.6|1 portion=150;1 small portion=100|
us-veal-leg-top-round-cooked-roasted|Veal, leg (top round), cooked, roasted|MP|160|27.7|0|4.7|1 portion=150;1 small portion=100|
us-veal-leg-top-round-raw|Veal, leg (top round), raw|MP|117|21|0|3.1|1 portion=150;1 small portion=100|
us-veal-loin-chop-cooked-grilled|Veal, loin, chop, cooked, grilled|MP|198|28|0.2|9.5|1 portion=150;1 small portion=100|
us-veal-loin-cooked-braised|Veal, loin, cooked, braised|MP|284|30.2|0|17.2|1 portion=150;1 small portion=100|
us-veal-loin-cooked-roasted|Veal, loin, cooked, roasted|MP|175|26.3|0|6.9|1 portion=150;1 small portion=100|
us-veal-loin-raw|Veal, loin, raw|MP|114|21.9|0|2.9|1 portion=150;1 small portion=100|
us-veal-raw|Veal, raw|MP|144|19.4|0|6.8|1 portion=150;1 small portion=100|
us-veal-rib-cooked-braised|Veal, rib, cooked, braised|MP|251|32.4|0|12.5|1 portion=150;1 small portion=100|
us-veal-rib-cooked-roasted|Veal, rib, cooked, roasted|MP|228|24|0|14|1 portion=150;1 small portion=100|
us-veal-rib-raw|Veal, rib, raw|MP|120|20|0|3.9|1 portion=150;1 small portion=100|
us-veal-shank-fore-and-hind-cooked-braised|Veal, shank (fore and hind), cooked, braised|MP|191|31.5|0|6.2|1 portion=150;1 small portion=100|
us-veal-shank-fore-and-hind-raw|Veal, shank (fore and hind), raw|MP|113|19.2|0|3.5|1 portion=150;1 small portion=100|
us-veal-shank-raw|Veal, shank, raw|MP|107|19.3|0|3.3|1 portion=150;1 small portion=100|
us-veal-shoulder-arm-cooked-braised|Veal, shoulder, arm, cooked, braised|MP|236|33.6|0|10.2|1 portion=150;1 small portion=100|
us-veal-shoulder-arm-cooked-roasted|Veal, shoulder, arm, cooked, roasted|MP|164|26.1|0|5.8|1 portion=150;1 small portion=100|
us-veal-shoulder-arm-raw|Veal, shoulder, arm, raw|MP|132|19.3|0|5.4|1 portion=150;1 small portion=100|
us-veal-shoulder-blade-chop-cooked-grilled|Veal, shoulder, blade chop, cooked, grilled|MP|159|27.3|0|5.5|1 portion=150;1 small portion=100|
us-veal-shoulder-blade-chop-raw|Veal, shoulder, blade chop, raw|MP|110|19.6|0|2.9|1 portion=150;1 small portion=100|
us-veal-shoulder-blade-cooked-braised|Veal, shoulder, blade, cooked, braised|MP|198|32.7|0|6.5|1 portion=150;1 small portion=100|
us-veal-shoulder-blade-cooked-roasted|Veal, shoulder, blade, cooked, roasted|MP|171|25.6|0|6.9|1 portion=150;1 small portion=100|
us-veal-shoulder-whole-arm-and-blade-cooked-braised|Veal, shoulder, whole (arm and blade), cooked, braised|MP|228|32.1|0|10.1|1 portion=150;1 small portion=100|
us-veal-shoulder-whole-arm-and-blade-cooked-roasted|Veal, shoulder, whole (arm and blade), cooked, roasted|MP|184|25.3|0|8.4|1 portion=150;1 small portion=100|
us-veal-shoulder-whole-arm-and-blade-raw|Veal, shoulder, whole (arm and blade), raw|MP|130|19.3|0|5.3|1 portion=150;1 small portion=100|
us-veal-sirloin-cooked-braised|Veal, sirloin, cooked, braised|MP|252|31.3|0|13.1|1 portion=150;1 small portion=100|
us-veal-sirloin-cooked-roasted|Veal, sirloin, cooked, roasted|MP|168|26.3|0|6.2|1 portion=150;1 small portion=100|
us-veal-sirloin-raw|Veal, sirloin, raw|MP|152|19.1|0|7.8|1 portion=150;1 small portion=100|
us-yachtwurst-with-pistachio-nuts-cooked|Yachtwurst, with pistachio nuts, cooked|MP|268|14.8|1.4|22.6|1 portion=150;1 small portion=100|
us-baking-chocolate-mars-snackfood-us|Baking chocolate, Mars Snackfood US|SN|502|4.8|68.4|23.4|1 packet=30;1 bowl=50|bits m milk mini s
us-baking-chocolate-mexican-squares|Baking chocolate, mexican, squares|SN|426|3.6|77.4|15.6|1 bar=45;1 piece=30|
us-baking-chocolate-unsweetened-liquid|Baking chocolate, unsweetened, liquid|SN|472|12.1|36.2|47.7|1 bar=45;1 piece=30|
us-baking-chocolate-unsweetened-squares|Baking chocolate, unsweetened, squares|SN|642|14.3|28.4|52.3|1 bar=45;1 piece=30|
us-5th-avenue-candy-bar|5TH Avenue Candy Bar|SN|482|8.8|62.7|24|1 bar=45;1 piece=30|candies
us-almond-joy-candy-bar|Almond Joy Candy Bar|SN|479|4.1|59.5|26.9|1 bar=45;1 piece=30|candies
us-butterscotch|Butterscotch|SN|391|0|90.4|3.3|1 bar=45;1 piece=30|candies
us-caramello-candy-bar|Caramello Candy Bar|SN|462|6.2|63.8|21.2|1 bar=45;1 piece=30|candies
us-caramels|Caramels|SN|382|4.6|77|8.1|1 bar=45;1 piece=30|candies
us-caramels-chocolate-flavor-roll|Caramels, chocolate-flavor roll|SN|387|1.6|87.7|3.3|1 bar=45;1 piece=30|candies
us-carob-unsweetened|Carob, unsweetened|SN|540|8.2|56.3|31.4|1 bar=45;1 piece=30|candies
us-chocolate-covered-caramel-with-nuts|Chocolate covered, caramel with nuts|SN|470|9.5|60.7|21|1 bar=45;1 piece=30|candies
us-chocolate-covered-low-sugar-or-low-calorie|Chocolate covered, low sugar or low calorie|SN|590|12.4|37.7|43.3|1 bar=45;1 piece=30|candies
us-chocolate-dark-45-59-cacao-solids-90|Chocolate, dark, 45-59% cacao solids 90%|SN|550|5.1|60|32.2|1 bar=45;1 piece=30|candies
us-coconut-bar-not-chocolate-covered|Coconut bar, not chocolate covered|SN|481|2.1|55.9|27.7|1 bar=45;1 piece=30|candies
us-confectioner-s-coating-butterscotch|Confectioner's coating, butterscotch|SN|539|2.2|67.1|29.1|1 bar=45;1 piece=30|candies
us-confectioner-s-coating-peanut-butter|Confectioner's coating, peanut butter|SN|529|18.3|46.9|29.8|1 bar=45;1 piece=30|candies
us-confectioner-s-coating-yogurt|Confectioner's coating, yogurt|SN|522|5.9|63.9|27|1 scoop=65;1 cup=130|candies
us-crispy-bar-with-peanut-butter-filling|Crispy bar with peanut butter filling|SN|542|9.5|55.5|31.3|1 bar=45;1 piece=30|candies
us-dark-chocolate-coated-coffee-beans|Dark chocolate coated coffee beans|SN|540|7.5|60|30|1 bar=45;1 piece=30|candies
us-divinity-prepared-from-recipe|Divinity, prepared-from-recipe|SN|364|1.3|89.1|0.1|1 bar=45;1 piece=30|candies
us-fondant-prepared-from-recipe|Fondant, prepared-from-recipe|SN|373|0|93.2|0|1 bar=45;1 piece=30|candies
us-fruit-snacks-with-high-vitamin-c|Fruit snacks, with high vitamin C|SN|352|0.1|88|0|1 packet=30;1 bowl=50|candies
us-fudge-chocolate-marshmallow-prepared-from-recipe|Fudge, chocolate marshmallow, prepared-from-recipe|SN|453|2.3|71.3|17.5|1 bar=45;1 piece=30|candies
us-fudge-chocolate-marshmallow-with-nuts-prepared-b|Fudge, chocolate marshmallow, with nuts, prepared-by-recipe|SN|474|3.2|67.7|21.1|1 bar=45;1 piece=30|candies
us-fudge-chocolate-prepared-from-recipe|Fudge, chocolate, prepared-from-recipe|SN|410|2.4|76.7|10.4|1 bar=45;1 piece=30|candies
us-fudge-chocolate-with-nuts-prepared-from-recipe|Fudge, chocolate, with nuts, prepared-from-recipe|SN|460|4.4|68.2|18.9|1 bar=45;1 piece=30|candies
us-fudge-peanut-butter-prepared-from-recipe|Fudge, peanut butter, prepared-from-recipe|SN|387|3.8|77.8|6.6|1 bar=45;1 piece=30|candies
us-fudge-vanilla-prepared-from-recipe|Fudge, vanilla, prepared-from-recipe|SN|383|1.1|82.2|5.5|1 bar=45;1 piece=30|candies
us-fudge-vanilla-with-nuts|Fudge, vanilla with nuts|SN|435|3|74.6|13.7|1 bar=45;1 piece=30|candies
us-gum-drops-no-sugar-or-low-calorie-sorbitol|Gum drops, no sugar or low calorie (sorbitol)|SN|354|0|88.1|0.2|1 bar=45;1 piece=30|candies
us-gumdrops-starch-jelly-pieces|Gumdrops, starch jelly pieces|SN|396|0|98.9|0|1 bar=45;1 piece=30|candies
us-halavah-plain|Halavah, plain|SN|469|12.5|60.5|21.5|1 bar=45;1 piece=30|candies
us-hard|Hard|SN|394|0|98|0.2|1 bar=45;1 piece=30|candies
us-hard-dietetic-or-low-calorie-sorbitol|Hard, dietetic or low calorie (sorbitol)|SN|394|0|98.6|0|1 bar=45;1 piece=30|candies
us-heath-bites|Heath Bites|SN|530|3.9|63.4|30.4|1 bar=45;1 piece=30|candies
us-hershey-kit-kat-big-kat-bar|Hershey, Kit Kat Big Kat Bar|SN|520|6.2|63.6|27.8|1 bar=45;1 piece=30|candies
us-hershey-reesesticks-crispy-wafers-peanut-butter|Hershey, Reesesticks crispy wafers, peanut butter|SN|521|9.5|55.4|31.3|1 bar=45;1 piece=30|candies chocolate milk
us-hershey-s-almond-joy-bites|Hershey's, Almond Joy Bites|SN|563|5.6|57.5|34.5|1 bar=45;1 piece=30|candies
us-hershey-s-golden-almond-solitaires|Hershey's Golden Almond Solitaires|SN|569|12|46.9|37.1|1 bar=45;1 piece=30|candies
us-hershey-s-milk-chocolate-with-almond-bites|Hershey's Milk Chocolate With Almond Bites|SN|568|9.8|51.7|35.7|1 bar=45;1 piece=30|candies
us-hersheys-payday-bar|Hersheys, Payday Bar|SN|490|13.4|52.9|25|1 bar=45;1 piece=30|candies
us-hershey-s-pot-of-gold-almond-bar|Hershey's Pot of Gold Almond Bar|SN|577|12.8|44.9|38.5|1 bar=45;1 piece=30|candies
us-hershey-s-skor-toffee-bar|Hershey's Skor Toffee Bar|SN|541|3.1|63.7|30.4|1 bar=45;1 piece=30|candies
us-honey-combed-with-peanut-butter|Honey-combed, with peanut butter|SN|473|8.7|67.4|20.2|1 bar=45;1 piece=30|candies
us-jellybeans|Jellybeans|SN|375|0|93.6|0.1|1 bar=45;1 piece=30|candies
us-kit-kat-wafer-bar|Kit Kat Wafer Bar|SN|518|6.5|64.6|26|1 bar=45;1 piece=30|candies
us-krackel-chocolate-bar|Krackel Chocolate Bar|SN|523|6.6|64.3|26.6|1 bar=45;1 piece=30|candies
us-marshmallows|Marshmallows|SN|318|1.8|81.3|0.2|1 bar=45;1 piece=30|candies
us-mars-snackfood-us-3-musketeers-bar|Mars Snackfood US, 3 Musketeers Bar|SN|436|2.6|77.8|12.8|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-cocoavia-blueberry-and-almond-|Mars Snackfood US, Cocoavia Blueberry and Almond Chocolate Bar|SN|525|6.4|60.4|28.7|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-cocoavia-chocolate-bar|Mars Snackfood US, Cocoavia Chocolate Bar|SN|539|5.8|63|29.3|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-cocoavia-chocolate-covered-alm|Mars Snackfood US, Cocoavia Chocolate Covered Almonds|SN|573|9.5|50.2|37.1|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-cocoavia-crispy-chocolate-bar|Mars Snackfood US, Cocoavia Crispy Chocolate Bar|SN|517|8.2|62.1|26.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-dove-dark-chocolate|Mars Snackfood US, Dove Dark Chocolate|SN|520|5.2|59.4|32.5|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-dove-milk-chocolate|Mars Snackfood US, Dove Milk Chocolate|SN|546|5.9|59.8|31.7|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-mars-almond-bar|Mars Snackfood US, Mars Almond Bar|SN|467|8.1|62.7|23|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-milky-way-bar|Mars Snackfood US, Milky Way Bar|SN|456|4|71.2|17.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-milky-way-caramels-dark-chocol|Mars Snackfood US, Milky Way Caramels. dark chocolate covered|SN|458|3.8|67.6|20.4|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-milky-way-caramels-milk-chocol|Mars Snackfood US, Milky Way Caramels, milk chocolate covered|SN|463|4.3|68.5|19.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-milky-way-midnight-bar|Mars Snackfood US, Milky Way Midnight Bar|SN|443|3.2|71.2|17.5|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-m-m-s-almond-chocolate-candies|Mars Snackfood US, M&m's Almond Chocolate Candies|SN|522|7.5|60.5|27.8|1 packet=30;1 bowl=50|
us-mars-snackfood-us-m-m-s-crispy-chocolate-candies|Mars Snackfood US, M&m's Crispy Chocolate Candies|SN|475|4.3|72.4|19.3|1 packet=30;1 bowl=50|
us-mars-snackfood-us-m-m-s-milk-chocolate-candies|Mars Snackfood US, M&m's Milk Chocolate Candies|SN|492|4.3|71.2|21.1|1 packet=30;1 bowl=50|
us-mars-snackfood-us-m-m-s-minis-milk-chocolate-can|Mars Snackfood US, M&m's MINIs Milk Chocolate Candies|SN|502|4.8|68.4|23.4|1 packet=30;1 bowl=50|
us-mars-snackfood-us-m-m-s-peanut-butter-chocolate-|Mars Snackfood US, M&m's Peanut Butter Chocolate Candies|SN|529|10.2|56.9|29.3|1 packet=30;1 bowl=50|
us-mars-snackfood-us-m-m-s-peanut-chocolate-candies|Mars Snackfood US, M&m's Peanut Chocolate Candies|SN|515|9.6|60.5|26.1|1 packet=30;1 bowl=50|
us-mars-snackfood-us-pop-ables-3-musketeers-brand-b|Mars Snackfood US, Pop'ables 3 Musketeers Brand Bite Size|SN|443|2.6|75.9|15.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-pop-ables-milky-way-brand-bite|Mars Snackfood US, Pop'ables Milky Way Brand Bite Size Candies|SN|463|3.3|71.9|18|1 packet=30;1 bowl=50|
us-mars-snackfood-us-pop-ables-snickers-brand-bite-|Mars Snackfood US, Pop'ables Snickers Brand Bite Size Candies|SN|480|7.2|61.1|24.3|1 packet=30;1 bowl=50|
us-mars-snackfood-us-skittles-original-bite-size-ca|Mars Snackfood US, Skittles Original Bite Size Candies|SN|405|0.2|90.8|4.4|1 packet=30;1 bowl=50|
us-mars-snackfood-us-skittles-sours-original|Mars Snackfood US, Skittles Sours Original|SN|401|0.2|91|4|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-skittles-tropical-bite-size-ca|Mars Snackfood US, Skittles Tropical Bite Size Candies|SN|405|0.2|90.8|4.3|1 packet=30;1 bowl=50|
us-mars-snackfood-us-skittles-wild-berry-bite-size-|Mars Snackfood US, Skittles Wild Berry Bite Size Candies|SN|402|0.2|90.8|4.3|1 packet=30;1 bowl=50|
us-mars-snackfood-us-snickers-almond-bar|Mars Snackfood US, Snickers Almond bar|SN|472|5.4|64.7|22.4|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-snickers-bar|Mars Snackfood US, Snickers Bar|SN|491|7.5|61.5|23.9|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-snickers-cruncher|Mars Snackfood US, Snickers Cruncher|SN|488|6.9|62.9|24.4|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-snickers-munch-bar|Mars Snackfood US, Snickers Munch bar|SN|536|15.3|43.6|36.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-starburst-fruit-chews-fruit-an|Mars Snackfood US, Starburst Fruit Chews, Fruit and Creme|SN|408|0.4|82.4|8.4|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-starburst-fruit-chews-original|Mars Snackfood US, Starburst Fruit Chews, Original fruits|SN|408|0.4|82.6|8.2|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-starburst-fruit-chews-tropical|Mars Snackfood US, Starburst Fruit Chews, Tropical fruits|SN|409|0.4|82.8|8.3|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-starburst-sour-fruit-chews|Mars Snackfood US, Starburst Sour Fruit Chews|SN|400|0.4|79.7|7.8|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-twix-caramel-cookie-bars|Mars Snackfood US, Twix Caramel Cookie Bars|SN|502|4.9|64.8|24.9|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-twix-chocolate-fudge-cookie-ba|Mars Snackfood US, Twix chocolate fudge cookie bars|SN|553|7.3|56|33.3|1 packet=30;1 bowl=50|candies
us-mars-snackfood-us-twix-peanut-butter-cookie-bars|Mars Snackfood US, Twix Peanut Butter Cookie Bars|SN|547|9.2|54.1|32.7|1 packet=30;1 bowl=50|candies
us-milk-chocolate-coated-coffee-beans|Milk chocolate coated coffee beans|SN|549|7.4|55.3|33.2|1 glass=250;1 cup=250|candies|L
us-milk-chocolate-coated-peanuts|Milk chocolate coated peanuts|SN|519|13.1|49.7|33.5|1 glass=250;1 cup=250|candies|L
us-milk-chocolate-coated-raisins|Milk chocolate coated raisins|SN|390|4.1|68.4|14.8|1 glass=250;1 cup=250|candies|L
us-milk-chocolate-with-almonds|Milk chocolate, with almonds|SN|526|9|53.4|34.4|1 glass=250;1 cup=250|candies|L
us-milk-chocolate-with-rice-cereal|Milk chocolate, with rice cereal|SN|511|7.6|59.7|29.4|1 glass=250;1 cup=250|candies|L
us-m-m-mars-3-musketeers-truffle-crisp|M&m Mars 3 Musketeers Truffle Crisp|SN|538|6.4|63.2|28.9|1 bar=45;1 piece=30|candies
us-m-m-mars-pretzel-chocolate-candies|M&m Mars Pretzel Chocolate Candies|SN|447|5|72.9|15|1 packet=30;1 bowl=50|
us-mounds-candy-bar|Mounds Candy Bar|SN|493|4.6|58.9|26.6|1 bar=45;1 piece=30|candies
us-mr-goodbar-chocolate-bar|MR. Goodbar Chocolate Bar|SN|538|10.2|54.3|33.2|1 bar=45;1 piece=30|candies
us-nestle-100-grand-bar|Nestle, 100 Grand Bar|SN|468|2.5|71|19.3|1 bar=45;1 piece=30|candies
us-nestle-after-eight-mints|Nestle, After Eight Mints|SN|432|1.7|79.5|11.9|1 bar=45;1 piece=30|candies
us-nestle-baby-ruth-bar|Nestle, Baby Ruth Bar|SN|475|5.4|64.8|21.6|1 bar=45;1 piece=30|candies
us-nestle-bit-o-honey-candy-chews|Nestle, Bit-o'-honey Candy Chews|SN|388|2|80.9|7.5|1 bar=45;1 piece=30|candies
us-nestle-butterfinger-bar|Nestle, Butterfinger Bar|SN|459|5.4|72.9|18.9|1 bar=45;1 piece=30|candies
us-nestle-butterfinger-crisp|Nestle, Butterfinger Crisp|SN|465|6.7|68.5|18.3|1 bar=45;1 piece=30|candies
us-nestle-chunky-bar|Nestle, Chunky Bar|SN|519|7.5|60.4|27.5|1 bar=45;1 piece=30|candies
us-nestle-crunch-bar-and-dessert-topping|Nestle, Crunch Bar and Dessert Topping|SN|500|5|67|26|1 bar=45;1 piece=30|candies
us-nestle-goobers-chocolate-covered-peanuts|Nestle, Goobers Chocolate Covered Peanuts|SN|512|9.7|53|34|1 bar=45;1 piece=30|candies
us-nestle-oh-henry-bar|Nestle, OH Henry! Bar|SN|462|7.7|65.5|23|1 bar=45;1 piece=30|candies
us-nestle-raisinets-chocolate-covered-raisins|Nestle, Raisinets Chocolate Covered Raisins|SN|422|4.4|71|17|1 bar=45;1 piece=30|candies
us-nougat-with-almonds|Nougat, with almonds|SN|398|3.3|92.4|1.7|1 bar=45;1 piece=30|candies
us-peanut-bar|Peanut bar|SN|522|15.5|47.4|33.7|1 bar=45;1 piece=30|candies
us-peanut-brittle-prepared-from-recipe|Peanut brittle, prepared-from-recipe|SN|486|7.6|71.2|19|1 bar=45;1 piece=30|candies
us-praline-prepared-from-recipe|Praline, prepared-from-recipe|SN|485|3.3|59.6|25.9|1 bar=45;1 piece=30|candies
us-reese-s-bites|Reese's Bites|SN|521|11.3|55.2|29.9|1 bar=45;1 piece=30|candies
us-reese-s-fast-break-milk-chocolate-peanut-butter-|Reese's, Fast Break, milk chocolate peanut butter and soft|SN|474|8.7|61.6|23.4|1 bar=45;1 piece=30|candies nougats
us-reese-s-fast-break-milk-chocolate-peanut-butter--2|Reese's Fast Break, milk chocolate, peanut butter, soft nougats|SN|495|8.9|63.9|23.2|1 bar=45;1 piece=30|candies
us-reese-s-nutrageous-candy-bar|Reese's Nutrageous Candy Bar|SN|517|11.3|52.8|32.1|1 bar=45;1 piece=30|candies
us-reese-s-peanut-butter-cups|Reese's Peanut Butter Cups|SN|515|10.2|55.4|30.5|1 bar=45;1 piece=30|candies
us-reese-s-pieces-candy|Reese's Pieces Candy|SN|497|12.5|59.9|24.8|1 bar=45;1 piece=30|candies
us-rolo-caramels-in-milk-chocolate|Rolo Caramels in Milk Chocolate|SN|474|5.1|68|20.9|1 bar=45;1 piece=30|candies
us-semisweet-chocolate|Semisweet chocolate|SN|480|4.2|63.9|30|1 bar=45;1 piece=30|candies
us-semisweet-chocolate-made-with-butter|Semisweet chocolate, made with butter|SN|477|4.2|63.4|29.7|1 bar=45;1 piece=30|candies
us-sesame-crunch|Sesame crunch|SN|516|11.6|50.3|33.3|1 bar=45;1 piece=30|candies
us-soft-fruit-and-nut-squares|Soft fruit and nut squares|SN|390|2.3|73.8|9.5|1 bar=45;1 piece=30|candies
us-special-dark-chocolate-bar|Special Dark Chocolate Bar|SN|556|5.5|60.5|32.4|1 bar=45;1 piece=30|candies
us-sugar-coated-almonds|Sugar-coated almonds|SN|465|10|68.3|17.9|1 bar=45;1 piece=30|candies
us-sweet-chocolate|Sweet chocolate|SN|507|3.9|60.4|34.2|1 bar=45;1 piece=30|candies
us-sweet-chocolate-coated-fondant|Sweet chocolate coated fondant|SN|366|2.2|80.4|9.3|1 bar=45;1 piece=30|candies
us-symphony-milk-chocolate-bar|Symphony Milk Chocolate Bar|SN|531|8.5|58|30.6|1 bar=45;1 piece=30|candies
us-taffy-prepared-from-recipe|Taffy, prepared-from-recipe|SN|397|0|91.6|3.3|1 bar=45;1 piece=30|candies
us-tamarind|Tamarind|SN|331|0|92|0|1 bar=45;1 piece=30|candies
us-toblerone-milk-chocolate-with-honey-and-almond-n|Toblerone, milk chocolate with honey and almond nougat|SN|489|5.7|61.2|28.6|1 bar=45;1 piece=30|candies
us-toffee-prepared-from-recipe|Toffee, prepared-from-recipe|SN|560|1.1|64.7|32.8|1 bar=45;1 piece=30|candies
us-tootsie-roll-chocolate-flavor-roll|Tootsie Roll, chocolate-flavor roll|SN|387|1.6|87.7|3.3|1 bar=45;1 piece=30|candies
us-truffles-prepared-from-recipe|Truffles, prepared-from-recipe|SN|510|6.2|44.9|33.8|1 bar=45;1 piece=30|candies
us-twizzlers-cherry-bites|Twizzlers Cherry Bites|SN|338|3|79.4|1.7|1 bar=45;1 piece=30|candies
us-twizzlers-nibs-cherry-bits|Twizzlers Nibs Cherry Bits|SN|347|2.3|79.4|2.6|1 bar=45;1 piece=30|candies
us-twizzlers-strawberry-twists-candy|Twizzlers Strawberry Twists Candy|SN|348|2.6|79.2|2.3|1 bar=45;1 piece=30|candies
us-whatchamacallit-candy-bar|Whatchamacallit Candy Bar|SN|494|8|63.2|23.7|1 bar=45;1 piece=30|candies
us-white-chocolate|White chocolate|SN|539|5.9|59.2|32.1|1 bar=45;1 piece=30|candies
us-york-bites|York Bites|SN|394|1.8|81.6|7.3|1 bar=45;1 piece=30|candies
us-york-peppermint-pattie|York Peppermint Pattie|SN|384|2.2|81|7.2|1 bar=45;1 piece=30|candies
us-chewing-gum|Chewing gum|SN|360|0|96.7|0.3|1 bar=45;1 piece=30|
us-chewing-gum-sugarless|Chewing gum, sugarless|SN|268|0|94.8|0.4|1 bar=45;1 piece=30|
us-chocolate-dark-45-59-cacao-solids|Chocolate, dark, 45- 59% cacao solids|SN|546|4.9|61.2|31.3|1 bar=45;1 piece=30|
us-chocolate-dark-60-69-cacao-solids|Chocolate, dark, 60-69% cacao solids|SN|579|6.1|52.4|38.3|1 bar=45;1 piece=30|
us-chocolate-dark-70-85-cacao-solids|Chocolate, dark, 70-85% cacao solids|SN|598|7.8|45.9|42.6|1 bar=45;1 piece=30|
us-chocolate-flavored-hazelnut-spread|Chocolate-flavored hazelnut spread|SN|539|5.4|62.4|29.7|1 bar=45;1 piece=30|
us-desserts-apple-crisp-prepared-from-recipe|Desserts, apple crisp, prepared-from-recipe|SN|161|1.8|30.8|3.4|1 bar=45;1 piece=30|
us-desserts-egg-custard-baked-prepared-from-recipe|Desserts, egg custard, baked, prepared-from-recipe|SN|104|5|11|4.6|1 bar=45;1 piece=30|
us-desserts-flan-caramel-custard-prepared-from-reci|Desserts, flan, caramel custard, prepared-from-recipe|SN|145|4.5|22.8|4|1 bar=45;1 piece=30|
us-desserts-mousse-chocolate-prepared-from-recipe|Desserts, mousse, chocolate, prepared-from-recipe|SN|225|4.1|16.1|16|1 bar=45;1 piece=30|
us-frostings-chocolate-creamy|Frostings, chocolate, creamy|SN|397|1.1|63.2|17.6|1 bar=45;1 piece=30|
us-frostings-coconut-nut|Frostings, coconut-nut|SN|433|1.5|52.7|24|1 bar=45;1 piece=30|
us-frostings-cream-cheese-flavor|Frostings, cream cheese-flavor|SN|415|0.1|67.3|17.3|1 bar=45;1 piece=30|
us-frostings-glaze-chocolate-prepared-from-recipe-w|Frostings, glaze, chocolate, prepared-from-recipe, with butter|SN|359|1.4|72.2|7.2|1 bar=45;1 piece=30|
us-frostings-glaze-prepared-from-recipe|Frostings, glaze, prepared-from-recipe|SN|341|0.4|83.7|0.5|1 bar=45;1 piece=30|
us-frostings-vanilla-creamy|Frostings, vanilla, creamy|SN|418|0|67.9|16.2|1 bar=45;1 piece=30|
us-fruit-and-juice-bars|Fruit and juice bars|SN|87|1.2|20.2|0.1|1 bar=45;1 piece=30|frozen novelties
us-ice-cream-type-chocolate-or-caramel-covered-with|Ice cream type, chocolate or caramel covered, with nuts|SN|323|4.4|30.9|20.2|1 scoop=65;1 cup=130|frozen novelties
us-ice-cream-type-sundae-prepackaged|Ice cream type, sundae, prepackaged|SN|190|4.3|29.6|6|1 scoop=65;1 cup=130|frozen novelties
us-ice-cream-type-vanilla-ice-cream-light-no-sugar-|Ice cream type, vanilla ice cream, light, no sugar added|SN|221|6.4|26.1|10.1|1 scoop=65;1 cup=130|frozen novelties
us-ice-type-fruit-no-sugar-added|Ice type, fruit, no sugar added|SN|24|0.5|6.2|0.1|1 bar=45;1 piece=30|frozen novelties
us-ice-type-italian-restaurant-prepared|Ice type, italian, restaurant-prepared|SN|53|0|13.5|0|1 bar=45;1 piece=30|frozen novelties
us-ice-type-lime|Ice type, lime|SN|128|0.4|32.6|0|1 bar=45;1 piece=30|frozen novelties
us-ice-type-pineapple-coconut|Ice type, pineapple-coconut|SN|113|0|23.9|2.6|1 bar=45;1 piece=30|frozen novelties
us-ice-type-pop|Ice type, pop|SN|79|0|19.2|0.2|1 bar=45;1 piece=30|frozen novelties
us-ice-type-pop-with-low-calorie-sweetener|Ice type, pop, with low calorie sweetener|SN|24|0|5.9|0|1 bar=45;1 piece=30|frozen novelties
us-ice-type-sugar-free-orange-cherry|Ice type, sugar free, orange, cherry|SN|21|0|5.1|0|1 bar=45;1 piece=30|frozen novelties
us-juice-type-juice-with-cream|Juice type, juice with cream|SN|115|1.4|24.1|1.4|1 glass=250;1 cup=250|frozen novelties|L
us-juice-type-orange|Juice type, orange|SN|95|0.5|23.2|0|1 glass=250;1 cup=250|frozen novelties|L
us-juice-type-popsicle-scribblers|Juice type, Popsicle Scribblers|SN|81|0|19.7|0.2|1 glass=250;1 cup=250|frozen novelties|L
us-klondike-slim-a-bear-chocolate-cone|Klondike, Slim-a-bear Chocolate Cone|SN|224|4.1|45.3|4.1|1 bar=45;1 piece=30|frozen novelties
us-klondike-slim-a-bear-fudge-bar-98-fat-free-no-su|Klondike, Slim-a-bear Fudge Bar, 98% fat free, no sugar added|SN|124|4.3|30.1|1.9|1 bar=45;1 piece=30|frozen novelties
us-klondike-slim-a-bear-no-sugar-added-stickless-ba|Klondike, Slim-a-bear, No Sugar Added, Stickless Bar|SN|242|5.2|26|13|1 bar=45;1 piece=30|frozen novelties
us-klondike-slim-a-bear-vanilla-sandwich|Klondike, Slim-a-bear Vanilla Sandwich|SN|239|3.9|42.8|5.9|1 bar=45;1 piece=30|frozen novelties
us-no-sugar-added-creamsicle-pops|No Sugar Added Creamsicle Pops|SN|72|3.7|12.9|0.6|1 bar=45;1 piece=30|frozen novelties
us-no-sugar-added-fudgsicle-pops|No Sugar Added, Fudgsicle pops|SN|124|3.7|23.1|1.9|1 bar=45;1 piece=30|frozen novelties
us-sugar-free-creamsicle-pops|Sugar Free, Creamsicle Pops|SN|49|1.4|12|2.3|1 bar=45;1 piece=30|frozen novelties
us-frozen-yogurts-chocolate|Frozen yogurts, chocolate|SN|131|3|21.6|3.6|1 scoop=65;1 cup=130|
us-frozen-yogurts-chocolate-nonfat-milk-sweetened-w|Frozen yogurts, chocolate, nonfat milk, sweetened without sugar|SN|107|4.4|19.7|0.8|1 scoop=65;1 cup=130|
us-frozen-yogurts-chocolate-soft-serve|Frozen yogurts, chocolate, soft-serve|SN|160|4|24.9|6|1 scoop=65;1 cup=130|
us-frozen-yogurts-flavors-other-than-chocolate|Frozen yogurts, flavors other than chocolate|SN|127|3|21.6|3.6|1 scoop=65;1 cup=130|
us-frozen-yogurts-vanilla-soft-serve|Frozen yogurts, vanilla, soft-serve|SN|159|4|24.2|5.6|1 scoop=65;1 cup=130|
us-fruit-butters-apple|Fruit butters, apple|SN|173|0.4|42.5|0.3|1 bar=45;1 piece=30|
us-fruit-syrup|Fruit syrup|SN|341|0|85.1|0|1 bar=45;1 piece=30|
us-gums-seed-gums|Gums, seed gums|SN|332|4.6|77.3|0.5|1 bar=45;1 piece=30|
us-breyers-ice-cream-98-fat-free-chocolate|Breyers ice cream, 98% Fat Free Chocolate|SN|136|3.9|30.2|2.2|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-98-fat-free-vanilla|Breyers ice cream, 98% Fat Free Vanilla|SN|137|3.3|30.5|2.2|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-all-natural-light-french-choco|Breyers ice cream, All Natural Light French Chocolate|SN|201|5.3|29.7|7.3|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-all-natural-light-french-vanil|Breyers ice cream, All Natural Light French Vanilla|SN|173|4.8|26|5.6|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-all-natural-light-mint-chocola|Breyers ice cream, All Natural Light Mint Chocolate Chip|SN|196|4.7|28.4|7.1|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-all-natural-light-vanilla|Breyers ice cream, All Natural Light Vanilla|SN|162|4.8|25.3|4.6|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-all-natural-light-vanilla-choc|Breyers ice cream, All Natural Light Vanilla Chocolate|SN|161|4.7|26.1|4.4|1 scoop=65;1 cup=130|creams strawberry
us-breyers-ice-cream-no-sugar-added-butter-pecan|Breyers ice cream, No Sugar Added, Butter Pecan|SN|180|4|21.3|10.3|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-no-sugar-added-chocolate-caram|Breyers ice cream, No Sugar Added, Chocolate Caramel|SN|151|3.5|25.2|5.8|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-no-sugar-added-french-vanilla|Breyers ice cream, No Sugar Added, French Vanilla|SN|154|4.5|20.8|7.1|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-no-sugar-added-vanilla|Breyers ice cream, No Sugar Added, Vanilla|SN|143|3.7|21.9|6.2|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-no-sugar-added-vanilla-chocola|Breyers ice cream, No Sugar Added, Vanilla Chocolate Strawberry|SN|143|3.7|21.7|6.3|1 scoop=65;1 cup=130|creams
us-breyers-ice-cream-no-sugar-added-vanilla-fudge-t|Breyers ice cream, No Sugar Added, Vanilla Fudge Twirl|SN|153|3.5|25.6|5.7|1 scoop=65;1 cup=130|creams
us-chocolate-ice-cream|Chocolate ice cream|SN|216|3.8|28.2|11|1 scoop=65;1 cup=130|creams
us-chocolate-ice-cream-light|Chocolate ice cream, light|SN|187|5|25.7|7.2|1 scoop=65;1 cup=130|creams
us-chocolate-ice-cream-light-no-sugar-added|Chocolate ice cream, light, no sugar added|SN|173|3.5|26.8|5.7|1 scoop=65;1 cup=130|creams
us-chocolate-ice-cream-rich|Chocolate ice cream, rich|SN|251|4.7|19.8|17|1 scoop=65;1 cup=130|creams
us-french-vanilla-ice-cream-soft-serve|French vanilla ice cream, soft-serve|SN|222|4.1|22.2|13|1 scoop=65;1 cup=130|creams
us-low-carbohydrate-ice-cream-chocolate|Low carbohydrate ice cream, chocolate|SN|237|3.8|26.8|12.7|1 scoop=65;1 cup=130|creams
us-low-carbohydrate-ice-cream-vanilla|Low carbohydrate ice cream, vanilla|SN|216|3.2|22.2|12.7|1 scoop=65;1 cup=130|creams
us-strawberry-ice-cream|Strawberry ice cream|SN|192|3.2|27.6|8.4|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream|Vanilla ice cream|SN|207|3.5|23.6|11|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream-fat-free|Vanilla ice cream, fat free|SN|138|4.5|30.1|0|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream-light|Vanilla ice cream, light|SN|180|4.8|29.5|4.8|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream-light-no-sugar-added|Vanilla ice cream, light, no sugar added|SN|169|4|21.4|7.5|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream-light-soft-serve|Vanilla ice cream, light, soft-serve|SN|126|4.9|21.8|2.6|1 scoop=65;1 cup=130|creams
us-vanilla-ice-cream-rich|Vanilla ice cream, rich|SN|249|3.5|22.3|16.2|1 scoop=65;1 cup=130|creams
us-jams-and-preserves|Jams and preserves|SN|278|0.4|68.9|0.1|1 bar=45;1 piece=30|
us-jams-and-preserves-apricot|Jams and preserves, apricot|SN|242|0.7|64.4|0.2|1 bar=45;1 piece=30|
us-jams-and-preserves-no-sugar-any-flavor|Jams and preserves, no sugar, any flavor|SN|132|0.3|53.4|0.3|1 bar=45;1 piece=30|saccharin sodium
us-jams-preserves-marmalade-reduced-sugar|Jams, preserves, marmalade, reduced sugar|SN|151|0|37.6|0.1|1 bar=45;1 piece=30|
us-jams-preserves-marmalades-sweetened-with-fruit-j|Jams, preserves, marmalades, sweetened with fruit juice|SN|212|0|52.9|0|1 bar=45;1 piece=30|
us-jellies|Jellies|SN|266|0.2|70|0|1 bar=45;1 piece=30|
us-jellies-no-sugar-any-flavors|Jellies, no sugar, any flavors|SN|121|0.6|29.6|0|1 bar=45;1 piece=30|saccharin sodium
us-jellies-reduced-sugar-home-preserved|Jellies, reduced sugar, home preserved|SN|179|0.3|46.1|0|1 bar=45;1 piece=30|
us-marmalade-orange|Marmalade, orange|SN|246|0.3|66.3|0|1 bar=45;1 piece=30|
us-milk-dessert-frozen-milk-fat-free-chocolate|Milk dessert, frozen, milk-fat free, chocolate|SN|167|4.3|37.7|1|1 glass=250;1 cup=250||L
us-molasses|Molasses|SN|290|0|74.7|0.1|1 bar=45;1 piece=30|
us-pectin-liquid|Pectin, liquid|SN|11|0|2.1|0|1 bar=45;1 piece=30|
us-pie-fillings-apple-canned|Pie fillings, apple, canned|SN|100|0.1|26.1|0.1|1 bar=45;1 piece=30|
us-pie-fillings-blueberry-canned|Pie fillings, blueberry, canned|SN|181|0.4|44.4|0.2|1 bar=45;1 piece=30|
us-pie-fillings-canned-cherry|Pie fillings, canned, cherry|SN|115|0.4|28|0.1|1 bar=45;1 piece=30|
us-pie-fillings-cherry-low-calorie|Pie fillings, cherry, low calorie|SN|53|0.8|12|0.2|1 bar=45;1 piece=30|
us-chocolate-pudding-fat-free|Chocolate pudding, fat free|SN|93|1.9|20.9|0.3|1 bar=45;1 piece=30|puddings
us-rice-pudding|Rice pudding|SN|108|3.2|18.4|2.2|1 bar=45;1 piece=30|puddings
us-tapioca-pudding|Tapioca pudding|SN|130|2|21.7|3.9|1 bar=45;1 piece=30|puddings
us-tapioca-pudding-fat-free|Tapioca pudding, fat free|SN|94|1.4|21.3|0.4|1 bar=45;1 piece=30|puddings
us-vanilla-pudding|Vanilla pudding|SN|130|1.5|22.6|3.8|1 bar=45;1 piece=30|puddings
us-vanilla-pudding-fat-free|Vanilla pudding, fat free|SN|89|2|20.2|0|1 bar=45;1 piece=30|puddings
us-schiff-tiger-s-milk-bar|Schiff, Tiger's Milk Bar|SN|387|16.8|56.5|14.3|1 bar=45;1 piece=30|
us-sherbet-orange|Sherbet, orange|SN|144|1.1|30.4|2|1 bar=45;1 piece=30|
us-fruit-leather-pieces|Fruit leather, pieces|SN|359|1|82.8|2.7|1 bar=45;1 piece=30|snacks
us-fruit-leather-rolls|Fruit leather, rolls|SN|371|0.1|85.8|3|1 bar=45;1 piece=30|snacks
us-sugars-brown|Sugars, brown|SN|380|0.1|98.1|0|1 bar=45;1 piece=30|
us-sugars-granulated|Sugars, granulated|SN|387|0|100|0|1 bar=45;1 piece=30|
us-sugars-maple|Sugars, maple|SN|354|0.1|90.9|0.2|1 bar=45;1 piece=30|
us-sugars-powdered|Sugars, powdered|SN|389|0|99.8|0|1 bar=45;1 piece=30|
us-sugar-turbinado|Sugar, turbinado|SN|399|0|99.8|0|1 bar=45;1 piece=30|
us-sweeteners-for-baking-brown-contains-sugar-and-s|Sweeteners, for baking, brown, contains sugar and sucralose|SN|388|0|97.1|0|1 bar=45;1 piece=30|
us-sweeteners-for-baking-contains-sugar-and-sucralo|Sweeteners, for baking, contains sugar and sucralose|SN|398|0|99.5|0|1 bar=45;1 piece=30|
us-sweeteners-sugar-substitute-granulated-brown|Sweeteners, sugar substitute, granulated, brown|SN|347|2.1|84.8|0|1 bar=45;1 piece=30|
us-sweeteners-tabletop-aspartame-equal-packets|Sweeteners, tabletop, aspartame, Equal, packets|SN|365|2.2|89.1|0|1 bar=45;1 piece=30|
us-sweeteners-tabletop-fructose-dry-powder|Sweeteners, tabletop, fructose, dry, powder|SN|368|0|100|0|1 bar=45;1 piece=30|
us-sweeteners-tabletop-fructose-liquid|Sweeteners, tabletop, fructose, liquid|SN|279|0|76.1|0|1 bar=45;1 piece=30|
us-sweeteners-tabletop-saccharin-sodium-saccharin|Sweeteners, tabletop, saccharin (sodium saccharin)|SN|360|0.9|89.1|0|1 bar=45;1 piece=30|
us-sweeteners-tabletop-sucralose-splenda-packets|Sweeteners, tabletop, sucralose, Splenda packets|SN|336|0|91.2|0|1 bar=45;1 piece=30|
us-sweetener-syrup-agave|Sweetener, syrup, agave|SN|310|0.1|76.4|0.5|1 bar=45;1 piece=30|
us-syrup-cane|Syrup, Cane|SN|269|0|73.1|0|1 bar=45;1 piece=30|
us-syrup-fruit-flavored|Syrup, fruit flavored|SN|261|0|65.1|0|1 bar=45;1 piece=30|
us-syrup-maple-canadian|Syrup, maple, Canadian|SN|270|0|67.4|0|1 bar=45;1 piece=30|
us-syrup-nestle-chocolate|Syrup, Nestle, chocolate|SN|269|0|67.2|0|1 bar=45;1 piece=30|
us-syrups-chocolate-fudge-type|Syrups, chocolate, fudge-type|SN|350|4.6|62.9|8.9|1 bar=45;1 piece=30|
us-syrups-chocolate-hershey-s-genuine-chocolate-fla|Syrups, chocolate, Hershey's Genuine Chocolate Flavored Lite|SN|153|1.4|34.6|1|1 bar=45;1 piece=30|syrup
us-syrups-chocolate-hershey-s-sugar-free|Syrups, chocolate, Hershey's Sugar free|SN|43|2.9|14.2|2|1 bar=45;1 piece=30|flavored genuine lite syrup
us-syrups-corn-dark|Syrups, corn, dark|SN|286|0|77.6|0|1 bar=45;1 piece=30|
us-syrups-corn-high-fructose|Syrups, corn, high-fructose|SN|281|0|76|0|1 bar=45;1 piece=30|
us-syrups-corn-light|Syrups, corn, light|SN|283|0|76.8|0.2|1 bar=45;1 piece=30|
us-syrups-grenadine|Syrups, grenadine|SN|268|0|66.9|0|1 bar=45;1 piece=30|
us-syrups-malt|Syrups, malt|SN|318|6.2|71.3|0|1 bar=45;1 piece=30|
us-syrups-maple|Syrups, maple|SN|260|0|67|0.1|1 bar=45;1 piece=30|
us-syrups-sorghum|Syrups, sorghum|SN|290|0|74.9|0|1 bar=45;1 piece=30|
us-syrups-sugar-free|Syrups, sugar free|SN|51|0.8|12|0|1 bar=45;1 piece=30|
us-syrups-table-blends-corn-refiner-and-sugar|Syrups, table blends, corn, refiner, and sugar|SN|319|0|83.9|0|1 bar=45;1 piece=30|
us-syrups-table-blends-pancake|Syrups, table blends, pancake|SN|234|0|61.5|0|1 bar=45;1 piece=30|
us-syrups-table-blends-pancake-reduced-calorie|Syrups, table blends, pancake, reduced-calorie|SN|165|0|44.6|0|1 bar=45;1 piece=30|
us-syrups-table-blends-pancake-with-2-maple|Syrups, table blends, pancake, with 2% maple|SN|265|0|69.6|0.1|1 bar=45;1 piece=30|
us-syrups-table-blends-pancake-with-butter|Syrups, table blends, pancake, with butter|SN|291|0|72.4|0.1|1 bar=45;1 piece=30|
us-toppings-butterscotch-or-caramel|Toppings, butterscotch or caramel|SN|216|1.2|57|0|1 bar=45;1 piece=30|
us-toppings-marshmallow-cream|Toppings, marshmallow cream|SN|322|0.8|79|0.3|1 bar=45;1 piece=30|
us-topping-smucker-s-magic-shell|Topping, Smucker's Magic Shell|SN|609|2.9|50.1|44.1|1 bar=45;1 piece=30|
us-toppings-nuts-in-syrup|Toppings, nuts in syrup|SN|448|4.5|58.1|22|1 bar=45;1 piece=30|
us-toppings-pineapple|Toppings, pineapple|SN|253|0.1|66.4|0.1|1 bar=45;1 piece=30|
us-toppings-strawberry|Toppings, strawberry|SN|254|0.2|66.3|0.1|1 bar=45;1 piece=30|
us-egg-duck-whole-fresh-raw|Egg, duck, whole, fresh, raw|DE|185|12.8|1.5|13.8|1 large egg=50;2 eggs=100|
us-eggnog|Eggnog|DE|88|4.6|8.1|4.2|1 portion=100|
us-eggs-scrambled-frozen-mixture|Eggs, scrambled, frozen mixture|DE|131|13.1|7.5|5.6|1 portion=100|
us-egg-substitute-liquid-or-frozen-fat-free|Egg substitute, liquid or frozen, fat free|DE|48|10|2|0|1 large egg=50;2 eggs=100|
us-egg-substitute-powder|Egg substitute, powder|DE|444|55.5|21.8|13|1 large egg=50;2 eggs=100|
us-egg-turkey-whole-fresh-raw|Egg, turkey, whole, fresh, raw|DE|171|13.7|1.2|11.9|1 large egg=50;2 eggs=100|
us-egg-white-dried|Egg, white, dried|DE|382|81.1|7.8|0|1 large egg=50;2 eggs=100|
us-egg-white-raw-fresh|Egg, white, raw, fresh|DE|52|10.9|0.7|0.2|1 large egg=50;2 eggs=100|
us-egg-white-raw-frozen-pasteurized|Egg, white, raw, frozen, pasteurized|DE|48|10.2|1|0|1 large egg=50;2 eggs=100|
us-egg-whole-cooked-fried|Egg, whole, cooked, fried|DE|196|13.6|0.8|14.8|1 large egg=50;2 eggs=100|
us-egg-whole-cooked-hard-boiled|Egg, whole, cooked, hard-boiled|DE|155|12.6|1.1|10.6|1 large egg=50;2 eggs=100|
us-egg-whole-cooked-omelet|Egg, whole, cooked, omelet|DE|154|10.6|0.6|11.7|1 large egg=50;2 eggs=100|
us-egg-whole-cooked-poached|Egg, whole, cooked, poached|DE|143|12.5|0.7|9.5|1 large egg=50;2 eggs=100|
us-egg-whole-cooked-scrambled|Egg, whole, cooked, scrambled|DE|149|10|1.6|11|1 large egg=50;2 eggs=100|
us-egg-whole-dried|Egg, whole, dried|DE|592|48.1|1.1|43.9|1 large egg=50;2 eggs=100|
us-egg-whole-raw-fresh|Egg, whole, raw, fresh|DE|143|12.6|0.7|9.5|1 large egg=50;2 eggs=100|
us-egg-whole-raw-frozen-pasteurized|Egg, whole, raw, frozen, pasteurized|DE|147|12.3|1|10|1 large egg=50;2 eggs=100|
us-egg-yolk-dried|Egg, yolk, dried|DE|669|33.6|0.7|59.1|1 large egg=50;2 eggs=100|
us-egg-yolk-raw-fresh|Egg, yolk, raw, fresh|DE|322|15.9|3.6|26.5|1 large egg=50;2 eggs=100|
us-egg-yolk-raw-frozen-pasteurized|Egg, yolk, raw, frozen, pasteurized|DE|296|15.5|0.8|25.6|1 large egg=50;2 eggs=100|
us-butter-clarified-butter-ghee|Butter, Clarified butter (ghee)|DE|900|0|0|100|1 tbsp=15|
us-butter-oil-anhydrous|Butter oil, anhydrous|DE|876|0.3|0|99.5|1 tbsp=15|
us-butter-salted|Butter, salted|DE|717|0.9|0.1|81.1|1 tbsp=15|
us-american-cheddar-cheese-imitation|American cheddar cheese, imitation|DE|239|16.7|11.6|14|1 slice=20;30 g=30|
us-american-cheese-nonfat-or-fat-free|American cheese, nonfat or fat free|DE|126|21.1|10.5|0|1 slice=20;30 g=30|
us-blue-cheese|Blue cheese|DE|353|21.4|2.3|28.7|1 slice=20;30 g=30|
us-brick-cheese|Brick cheese|DE|371|23.2|2.8|29.7|1 slice=20;30 g=30|
us-brie-cheese|Brie cheese|DE|334|20.8|0.5|27.7|1 slice=20;30 g=30|
us-camembert-cheese|Camembert cheese|DE|300|19.8|0.5|24.3|1 slice=20;30 g=30|
us-caraway-cheese|Caraway cheese|DE|376|25.2|3.1|29.2|1 slice=20;30 g=30|
us-cheddar-cheese-nonfat-or-fat-free|Cheddar cheese, nonfat or fat free|DE|157|32.1|7.1|0|1 slice=20;30 g=30|
us-cheddar-cheese-reduced-fat|Cheddar cheese, reduced fat|DE|316|27.4|2.7|20.4|1 slice=20;30 g=30|
us-cheddar-cheese-sharp-sliced|Cheddar cheese, sharp, sliced|DE|410|24.3|2.1|33.8|1 slice=20;30 g=30|
us-cheshire-cheese|Cheshire cheese|DE|387|23.4|4.8|30.6|1 slice=20;30 g=30|
us-colby-cheese|Colby cheese|DE|394|23.8|2.6|32.1|1 slice=20;30 g=30|
us-cottage-cheese-creamed-large-or-small-curd|Cottage cheese, creamed, large or small curd|DE|98|11.1|3.4|4.3|1 slice=20;30 g=30|
us-cottage-cheese-creamed-with-fruit|Cottage cheese, creamed, with fruit|DE|97|10.7|4.6|3.9|1 slice=20;30 g=30|
us-cottage-cheese-lowfat-1-milkfat|Cottage cheese, lowfat, 1% milkfat|DE|72|12.4|2.7|1|1 slice=20;30 g=30|
us-cottage-cheese-lowfat-1-milkfat-lactose-reduced|Cottage cheese, lowfat, 1% milkfat, lactose reduced|DE|74|12.4|3.2|1|1 slice=20;30 g=30|
us-cottage-cheese-lowfat-1-milkfat-no-sodium-added|Cottage cheese, lowfat, 1% milkfat, no sodium added|DE|72|12.4|2.7|1|1 slice=20;30 g=30|
us-cottage-cheese-lowfat-1-milkfat-with-vegetables|Cottage cheese, lowfat, 1% milkfat, with vegetables|DE|67|10.9|3|1|1 slice=20;30 g=30|
us-cottage-cheese-lowfat-2-milkfat|Cottage cheese, lowfat, 2% milkfat|DE|81|10.5|4.8|2.3|1 slice=20;30 g=30|
us-cottage-cheese-nonfat-uncreamed-dry|Cottage cheese, nonfat, uncreamed, dry|DE|72|10.3|6.7|0.3|1 slice=20;30 g=30|
us-cottage-cheese-with-vegetables|Cottage cheese, with vegetables|DE|95|10.9|3|4.2|1 slice=20;30 g=30|
us-cream-cheese-fat-free|Cream cheese, fat free|DE|105|15.7|7.7|1|1 slice=20;30 g=30|
us-cream-cheese-low-fat|Cream cheese, low fat|DE|208|7.9|6.7|16.7|1 slice=20;30 g=30|
us-dry-white-cheese-queso-seco|Dry white cheese, queso seco|DE|325|24.5|2|24.4|1 slice=20;30 g=30|
us-edam-cheese|Edam cheese|DE|357|25|1.4|28.6|1 slice=20;30 g=30|
us-fontina-cheese|Fontina cheese|DE|389|25.6|1.6|31.1|1 slice=20;30 g=30|
us-cheese-food-cold-pack-american|Cheese food, cold pack, American|DE|331|19.7|8.3|24.5|1 slice=20;30 g=30|
us-cheese-food-pasteurized-process-american-vitamin|Cheese food, pasteurized process, American, vitamin D fortified|DE|330|16.9|8.6|25.6|1 slice=20;30 g=30|
us-cheese-food-pasteurized-process-american|Cheese food, pasteurized process, American|DE|330|16.9|8.6|25.6|1 slice=20;30 g=30|added d vitamin
us-cheese-food-pasteurized-process-swiss|Cheese food, pasteurized process, swiss|DE|323|21.9|4.5|24.1|1 slice=20;30 g=30|
us-fresh-cheese-queso-fresco|Fresh cheese, queso fresco|DE|299|18.1|3|23.8|1 slice=20;30 g=30|
us-gjetost-cheese|Gjetost cheese|DE|466|9.7|42.7|29.5|1 slice=20;30 g=30|
us-goat-cheese-hard-type|Goat cheese, hard type|DE|452|30.5|2.2|35.6|1 slice=20;30 g=30|
us-goat-cheese-semisoft-type|Goat cheese, semisoft type|DE|364|21.6|0.1|29.8|1 slice=20;30 g=30|
us-goat-cheese-soft-type|Goat cheese, soft type|DE|264|18.5|0|21.1|1 slice=20;30 g=30|
us-gruyere-cheese|Gruyere cheese|DE|413|29.8|0.4|32.3|1 slice=20;30 g=30|
us-limburger-cheese|Limburger cheese|DE|327|20.1|0.5|27.3|1 slice=20;30 g=30|
us-low-fat-cheese-cheddar-or-colby|Low fat cheese, cheddar or colby|DE|173|24.4|1.9|7|1 slice=20;30 g=30|
us-low-sodium-cheese-cheddar-or-colby|Low-sodium cheese, cheddar or colby|DE|398|24.4|1.9|32.6|1 slice=20;30 g=30|
us-mexican-blend-cheese|Mexican blend cheese|DE|384|23.5|0.1|32.1|1 slice=20;30 g=30|
us-mexican-cheese-blend-reduced-fat|Mexican cheese, blend, reduced fat|DE|282|24.7|3.4|19.4|1 slice=20;30 g=30|
us-mexican-cheese-queso-anejo|Mexican cheese, queso anejo|DE|373|21.4|4.6|30|1 slice=20;30 g=30|
us-mexican-cheese-queso-asadero|Mexican cheese, queso asadero|DE|356|22.6|4.1|25|1 slice=20;30 g=30|
us-mexican-cheese-queso-chihuahua|Mexican cheese, queso chihuahua|DE|374|21.6|5.6|29.7|1 slice=20;30 g=30|
us-mexican-cheese-queso-cotija|Mexican cheese, queso cotija|DE|366|20|4|30|1 slice=20;30 g=30|
us-monterey-cheese|Monterey cheese|DE|373|24.5|0.7|30.3|1 slice=20;30 g=30|
us-monterey-cheese-low-fat|Monterey cheese, low fat|DE|313|28.2|0.7|21.6|1 slice=20;30 g=30|
us-mozzarella-cheese-low-moisture-part-skim|Mozzarella cheese, low moisture, part-skim|DE|295|23.8|5.6|19.8|1 slice=20;30 g=30|
us-mozzarella-cheese-low-moisture-part-skim-shredde|Mozzarella cheese, low moisture, part-skim, shredded|DE|304|23.6|8.1|19.7|1 slice=20;30 g=30|
us-mozzarella-cheese-low-sodium|Mozzarella cheese, low sodium|DE|280|27.5|3.1|17.1|1 slice=20;30 g=30|
us-mozzarella-cheese-nonfat|Mozzarella cheese, nonfat|DE|141|31.7|3.5|0|1 slice=20;30 g=30|
us-mozzarella-cheese-part-skim-milk|Mozzarella cheese, part skim milk|DE|254|24.3|2.8|15.9|1 slice=20;30 g=30|
us-mozzarella-cheese-whole-milk|Mozzarella cheese, whole milk|DE|299|22.2|2.4|22.1|1 slice=20;30 g=30|
us-mozzarella-cheese-whole-milk-low-moisture|Mozzarella cheese, whole milk, low moisture|DE|318|21.6|2.5|24.6|1 slice=20;30 g=30|
us-muenster-cheese|Muenster cheese|DE|368|23.4|1.1|30|1 slice=20;30 g=30|
us-muenster-cheese-low-fat|Muenster cheese, low fat|DE|271|24.7|3.5|17.6|1 slice=20;30 g=30|
us-neufchatel-cheese|Neufchatel cheese|DE|253|9.2|3.6|22.8|1 slice=20;30 g=30|
us-parmesan-cheese-dry-grated-reduced-fat|Parmesan cheese, dry grated, reduced fat|DE|265|20|1.4|20|1 slice=20;30 g=30|
us-parmesan-cheese-grated|Parmesan cheese, grated|DE|420|28.4|13.9|27.8|1 slice=20;30 g=30|
us-parmesan-cheese-hard|Parmesan cheese, hard|DE|392|35.8|3.2|25|1 slice=20;30 g=30|
us-parmesan-cheese-low-sodium|Parmesan cheese, low sodium|DE|451|41.6|3.7|30|1 slice=20;30 g=30|
us-parmesan-cheese-shredded|Parmesan cheese, shredded|DE|415|37.9|3.4|27.3|1 slice=20;30 g=30|
us-pasteurized-process-cheese-american-low-fat|Pasteurized process cheese, American, low fat|DE|180|24.6|3.5|7|1 slice=20;30 g=30|
us-pasteurized-process-cheese-american-without-adde|Pasteurized process cheese, American, without added vitamin D|DE|371|18.1|3.7|31.8|1 slice=20;30 g=30|
us-pasteurized-process-cheese-cheddar-or-american-l|Pasteurized process cheese, cheddar or American, low sodium|DE|376|22.2|1.6|31.2|1 slice=20;30 g=30|
us-pasteurized-process-cheese-pimento|Pasteurized process cheese, pimento|DE|375|22.1|1.7|31.2|1 slice=20;30 g=30|
us-pasteurized-process-cheese-swiss|Pasteurized process cheese, swiss|DE|334|24.7|2.1|25|1 slice=20;30 g=30|
us-port-de-salut-cheese|Port de salut cheese|DE|352|23.8|0.6|28.2|1 slice=20;30 g=30|
us-cheese-product-pasteurized-process-american|Cheese product, pasteurized process, American|DE|307|16.1|8.9|23.1|1 slice=20;30 g=30|d fortified vitamin
us-provolone-cheese|Provolone cheese|DE|351|25.6|2.1|26.6|1 slice=20;30 g=30|
us-provolone-cheese-reduced-fat|Provolone cheese, reduced fat|DE|274|24.7|3.5|17.6|1 slice=20;30 g=30|
us-ricotta-cheese-part-skim-milk|Ricotta cheese, part skim milk|DE|138|11.4|5.1|7.9|1 slice=20;30 g=30|
us-ricotta-cheese-whole-milk|Ricotta cheese, whole milk|DE|150|7.5|7.3|10.2|1 slice=20;30 g=30|
us-romano-cheese|Romano cheese|DE|387|31.8|3.6|26.9|1 slice=20;30 g=30|
us-roquefort-cheese|Roquefort cheese|DE|369|21.5|2|30.6|1 slice=20;30 g=30|
us-cheese-spread-american-or-cheddar-cheese-base-re|Cheese spread, American or Cheddar cheese base, reduced fat|DE|176|13.4|10.7|8.9|1 slice=20;30 g=30|
us-cheese-spread-cream-cheese-base|Cheese spread, cream cheese base|DE|295|7.1|3.5|28.6|1 slice=20;30 g=30|
us-cheese-spread-pasteurized-process-american|Cheese spread, pasteurized process, American|DE|290|16.4|8.7|21.2|1 slice=20;30 g=30|
us-cheese-substitute-mozzarella|Cheese substitute, mozzarella|DE|248|11.5|23.7|12.2|1 slice=20;30 g=30|
us-swiss-cheese|Swiss cheese|DE|393|27|1.4|31|1 slice=20;30 g=30|
us-swiss-cheese-low-fat|Swiss cheese, low fat|DE|179|28.4|3.4|5.1|1 slice=20;30 g=30|
us-swiss-cheese-low-sodium|Swiss cheese, low sodium|DE|374|28.4|3.4|27.4|1 slice=20;30 g=30|
us-swiss-cheese-nonfat-or-fat-free|Swiss cheese, nonfat or fat free|DE|127|28.4|3.4|0|1 slice=20;30 g=30|
us-tilsit-cheese|Tilsit cheese|DE|340|24.4|1.9|26|1 slice=20;30 g=30|
us-white-cheese-queso-blanco|White cheese, queso blanco|DE|310|20.4|2.5|24.3|1 slice=20;30 g=30|
us-cream-fluid-half-and-half|Cream, fluid, half and half|DE|131|3.1|4.3|11.5|1 tbsp=15|
us-cream-fluid-heavy-whipping|Cream, fluid, heavy whipping|DE|340|2.8|2.8|36.1|1 tbsp=15|
us-cream-fluid-light-coffee-cream-or-table-cream|Cream, fluid, light (coffee cream or table cream)|DE|195|3|3.7|19.1|1 tbsp=15|
us-cream-fluid-light-whipping|Cream, fluid, light whipping|DE|292|2.2|3|30.9|1 tbsp=15|
us-cream-half-and-half-fat-free|Cream, half and half, fat free|DE|59|2.6|9|1.4|1 tbsp=15|
us-cream-half-and-half-lowfat|Cream, half and half, lowfat|DE|72|3.3|3.3|5|1 tbsp=15|
us-cream-sour-cultured|Cream, sour, cultured|DE|198|2.4|4.6|19.4|1 tbsp=15|
us-cream-sour-reduced-fat-cultured|Cream, sour, reduced fat, cultured|DE|135|2.9|4.3|12|1 tbsp=15|
us-cream-substitute-flavored-liquid|Cream substitute, flavored, liquid|DE|251|0.7|35.1|13.5|1 tbsp=15|
us-cream-substitute-flavored-powdered|Cream substitute, flavored, powdered|DE|482|0.7|75.4|21.5|1 tbsp=15|
us-cream-substitute-liquid-light|Cream substitute, liquid, light|DE|71|0.8|9.1|3.5|1 tbsp=15|
us-cream-substitute-liquid|Cream substitute, liquid|DE|136|1|11.4|10|1 tbsp=15|hydrogenated oil protein soy vegetable
us-cream-substitute-powdered|Cream substitute, powdered|DE|529|2.5|59.3|32.9|1 tbsp=15|
us-cream-substitute-powdered-light|Cream substitute, powdered, light|DE|431|1.9|73.4|15.7|1 tbsp=15|
us-cream-whipped-cream-topping-pressurized|Cream, whipped, cream topping, pressurized|DE|257|3.2|12.5|22.2|1 tbsp=15|
us-dessert-topping-powdered|Dessert topping, powdered|DE|577|4.9|52.5|39.9|1 portion=100|
us-dessert-topping-powdered-1-5-ounce-prepared-with|Dessert topping, powdered, 1.5 ounce prepared with 1/2 cup milk|DE|194|3.6|17.1|12.7|1 portion=100|
us-dessert-topping-pressurized|Dessert topping, pressurized|DE|264|1|16.1|22.3|1 portion=100|
us-dessert-topping-semi-solid-frozen|Dessert topping, semi solid, frozen|DE|318|1.3|23.1|25.3|1 portion=100|
us-dulce-de-leche|Dulce de Leche|DE|315|6.8|55.4|7.4|1 portion=100|
us-fat-free-ice-cream-no-sugar-added-flavors-other-|Fat free ice cream, no sugar added, flavors other than chocolate|DE|133|4.4|28.9|0|1 tbsp=15|
us-ice-cream-bar-covered-with-chocolate-and-nuts|Ice cream bar, covered with chocolate and nuts|DE|303|5.6|11.9|25.8|1 tbsp=15|
us-bar-or-stick-ice-cream-chocolate-covered|Bar or stick ice cream, chocolate covered|DE|331|4.1|24.5|24.1|1 tbsp=15|
us-ice-cream-bar-stick-or-nugget-with-crunch-coatin|Ice cream bar, stick or nugget, with crunch coating|DE|358|2.1|37.1|25.3|1 tbsp=15|
us-ice-cream-cone-chocolate-covered-with-nuts|Ice cream cone, chocolate covered, with nuts|DE|354|5.2|34.4|21.9|1 tbsp=15|flavors other than
us-ice-cream-cookie-sandwich|Ice cream cookie sandwich|DE|240|3.7|39.6|7.4|1 tbsp=15|
us-light-ice-cream-soft-serve-chocolate|Light ice cream, soft serve, chocolate|DE|141|3.4|23.2|3.7|1 tbsp=15|
us-lowfat-ice-cream-no-sugar-added-cone|Lowfat ice cream, no sugar added, cone|DE|265|5.3|40|9.3|1 tbsp=15|chocolate peanuts sauce
us-ice-cream-sandwich|Ice cream sandwich|DE|237|4.3|37.1|8.6|1 tbsp=15|
us-ice-cream-sandwich-made-with-light-ice-cream-van|Ice cream sandwich, made with light ice cream, vanilla|DE|186|4.3|39.6|3|1 tbsp=15|
us-ice-cream-sandwich-vanilla-light-no-sugar-added|Ice cream sandwich, vanilla, light, no sugar added|DE|200|5.7|42.9|2.9|1 tbsp=15|
us-soft-serve-ice-cream-chocolate|Soft serve ice cream, chocolate|DE|222|4.1|22.2|13|1 tbsp=15|
us-ice-cream-sundae-cone|Ice cream sundae cone|DE|254|3|28.9|14|1 tbsp=15|
us-imitation-cheese-american-or-cheddar-low-cholest|Imitation cheese, american or cheddar, low cholesterol|DE|390|25|1|32|1 slice=20;30 g=30|
us-kefir-lowfat-plain-lifeway|Kefir, lowfat, plain, Lifeway|DE|43|3.8|4.8|1|1 glass=250;1 cup=250||L
us-kefir-lowfat-strawberry-lifeway|Kefir, lowfat, strawberry, Lifeway|DE|62|3.4|10.2|0.9|1 glass=250;1 cup=250||L
us-kraft-breakstone-s-free-fat-free-sour-cream|Kraft Breakstone's Free Fat Free Sour Cream|DE|91|4.7|15.1|1.3|1 tbsp=15|
us-kraft-breakstone-s-reduced-fat-sour-cream|Kraft Breakstone's Reduced Fat Sour Cream|DE|152|4.5|6.5|12|1 tbsp=15|
us-kraft-cheez-whiz-light-pasteurized-process-chees|Kraft Cheez Whiz Light Pasteurized Process Cheese Product|DE|215|16.3|16.2|9.5|1 slice=20;30 g=30|
us-kraft-cheez-whiz-pasteurized-process-cheese-sauc|Kraft Cheez Whiz Pasteurized Process Cheese Sauce|DE|276|12|9.2|21|1 slice=20;30 g=30|
us-kraft-free-singles-american-nonfat-pasteurized-p|Kraft Free Singles American Nonfat Pasteurized Process Cheese|DE|148|22.7|11.7|1|1 slice=20;30 g=30|product
us-kraft-velveeta-light-reduced-fat-pasteurized-pro|Kraft Velveeta Light Reduced Fat Pasteurized Process Cheese|DE|222|19.6|11.8|10.6|1 slice=20;30 g=30|product
us-kraft-velveeta-pasteurized-process-cheese-spread|Kraft Velveeta Pasteurized Process Cheese Spread|DE|303|16.3|9.8|22|1 slice=20;30 g=30|
us-light-ice-cream-creamsicle|Light ice cream, Creamsicle|DE|165|1.5|32.8|3.1|1 tbsp=15|
us-milk-buttermilk-dried|Milk, buttermilk, dried|DE|387|34.3|49|5.8|1 tbsp=15|
us-milk-buttermilk-fluid-cultured-lowfat|Milk, buttermilk, fluid, cultured, lowfat|DE|40|3.3|4.8|1.1|1 glass=250;1 cup=250||L
us-milk-buttermilk-fluid-cultured-reduced-fat|Milk, buttermilk, fluid, cultured, reduced fat|DE|56|4.1|5.3|2|1 glass=250;1 cup=250||L
us-milk-buttermilk-fluid-whole|Milk, buttermilk, fluid, whole|DE|62|3.2|4.9|3.3|1 glass=250;1 cup=250||L
us-milk-chocolate-beverage-hot-cocoa-homemade|Milk, chocolate beverage, hot cocoa, homemade|DE|77|3.5|10.7|2.3|1 glass=250;1 cup=250||L
us-milk-chocolate-fluid-reduced-fat|Milk, chocolate, fluid, reduced fat|DE|78|3|12.1|1.9|1 glass=250;1 cup=250||L
us-milk-chocolate-fluid-whole|Milk, chocolate, fluid, whole|DE|83|3.2|10.3|3.4|1 glass=250;1 cup=250||L
us-milk-chocolate-lowfat-reduced-sugar|Milk, chocolate, lowfat, reduced sugar|DE|57|3.4|7.7|1|1 glass=250;1 cup=250||L
us-milk-dessert-bar-frozen-made-from-lowfat-milk|Milk dessert bar, frozen, made from lowfat milk|DE|147|4.4|32|1.5|1 glass=250;1 cup=250||L
us-milk-dry-nonfat-calcium-reduced|Milk, dry, nonfat, calcium reduced|DE|354|35.5|51.8|0.2|1 portion=100|
us-milk-dry-nonfat-instant|Milk, dry, nonfat, instant|DE|358|35.1|52.2|0.7|1 portion=100|a added d vitamin
us-milk-dry-nonfat-without-added-vitamin-a-and-vita|Milk, dry, nonfat, without added vitamin A and vitamin D|DE|362|36.2|52|0.8|1 portion=100|
us-milk-dry-whole-without-added-vitamin-d|Milk, dry, whole, without added vitamin D|DE|496|26.3|38.4|26.7|1 portion=100|
us-milk-filled-fluid-with-blend-of-hydrogenated-veg|Milk, filled, fluid, with blend of hydrogenated vegetable oils|DE|63|3.3|4.7|3.5|1 glass=250;1 cup=250||L
us-milk-filled-fluid-with-lauric-acid-oil|Milk, filled, fluid, with lauric acid oil|DE|63|3.3|4.7|3.4|1 glass=250;1 cup=250||L
us-milk-fluid-1-fat-without-added-vitamin-a-and-vit|Milk, fluid, 1% fat, without added vitamin A and vitamin D|DE|42|3.4|5|1|1 glass=250;1 cup=250||L
us-milk-fluid-nonfat-calcium-fortified-fat-free-or-|Milk, fluid, nonfat, calcium fortified (fat free or skim)|DE|35|3.4|4.9|0.2|1 glass=250;1 cup=250||L
us-milk-human-mature-fluid|Milk, human, mature, fluid|DE|70|1|6.9|4.4|1 glass=250;1 cup=250||L
us-milk-imitation-non-soy|Milk, imitation, non-soy|DE|46|1.6|5.3|2|1 glass=250;1 cup=250||L
us-milk-lowfat-fluid-1-milkfat-protein-fortified|Milk, lowfat, fluid, 1% milkfat, protein fortified|DE|48|3.9|5.5|1.2|1 glass=250;1 cup=250||L
us-milk-lowfat-fluid-1-milkfat-with-added-nonfat-mi|Milk, lowfat, fluid, 1% milkfat, with added nonfat milk solids|DE|43|3.5|5|1|1 glass=250;1 cup=250||L
us-milk-low-sodium-fluid|Milk, low sodium, fluid|DE|61|3.1|4.5|3.5|1 glass=250;1 cup=250||L
us-milk-nonfat-fluid-with-added-nonfat-milk-solids|Milk, nonfat, fluid, with added nonfat milk solids|DE|37|3.6|5|0.3|1 glass=250;1 cup=250|a d free skim vitamin|L
us-milk-nonfat-fluid-without-added-vitamin-a-and-vi|Milk, nonfat, fluid, without added vitamin A and vitamin D fat|DE|35|3.4|4.9|0.2|1 glass=250;1 cup=250|free skim|L
us-milk-producer-fluid-3-7-milkfat|Milk, producer, fluid, 3.7% milkfat|DE|64|3.3|4.7|3.7|1 glass=250;1 cup=250||L
us-milk-reduced-fat-fluid-2-milkfat-protein-fortifi|Milk, reduced fat, fluid, 2% milkfat, protein fortified|DE|56|4|5.5|2|1 glass=250;1 cup=250||L
us-milk-reduced-fat-fluid-2-milkfat|Milk, reduced fat, fluid, 2% milkfat|DE|56|4|5.5|2|1 glass=250;1 cup=250|added nonfat solids|L
us-milk-shakes-thick-chocolate|Milk shakes, thick chocolate|DE|119|3.1|21.2|2.7|1 glass=250;1 cup=250||L
us-milk-shakes-thick-vanilla|Milk shakes, thick vanilla|DE|112|3.9|17.8|3|1 glass=250;1 cup=250||L
us-milk-sheep-fluid|Milk, sheep, fluid|DE|108|6|5.4|7|1 glass=250;1 cup=250||L
us-milk-substitutes-fluid-with-lauric-acid-oil|Milk substitutes, fluid, with lauric acid oil|DE|61|1.8|6.2|3.4|1 glass=250;1 cup=250||L
us-milk-whole-3-25-milkfat|Milk, whole, 3.25% milkfat|DE|61|3.2|4.8|3.3|1 glass=250;1 cup=250|a added d vitamin|L
us-nutritional-supplement-for-people-with-diabetes-|Nutritional supplement for people with diabetes, liquid|DE|88|4.4|11.9|3.1|1 portion=100|
us-parmesan-cheese-topping-fat-free|Parmesan cheese topping, fat free|DE|370|40|40|5|1 slice=20;30 g=30|
us-protein-supplement-milk-based-muscle-milk-light-|Protein supplement, milk based, Muscle Milk Light, powder|DE|396|50|22|12|1 portion=100|
us-protein-supplement-milk-based-muscle-milk-powder|Protein supplement, milk based, Muscle Milk, powder|DE|411|45.7|18.5|17.1|1 portion=100|
us-reddi-wip-fat-free-whipped-topping|Reddi Wip Fat Free Whipped Topping|DE|149|3|25|5|1 portion=100|
us-sour-cream-fat-free|Sour cream, fat free|DE|74|3.1|15.6|0|1 tbsp=15|
us-sour-cream-imitation-cultured|Sour cream, imitation, cultured|DE|208|2.4|6.6|19.5|1 tbsp=15|
us-sour-cream-light|Sour cream, light|DE|136|3.5|7.1|10.6|1 tbsp=15|
us-sour-cream-reduced-fat|Sour cream, reduced fat|DE|181|7|7|14.1|1 tbsp=15|
us-sour-dressing-non-butterfat-cultured-filled-crea|Sour dressing, non-butterfat, cultured, filled cream-type|DE|178|3.3|4.7|16.6|1 tbsp=15|
us-whey-acid-dried|Whey, acid, dried|DE|339|11.7|73.5|0.5|1 portion=100|
us-whey-acid-fluid|Whey, acid, fluid|DE|24|0.8|5.1|0.1|1 portion=100|
us-whey-sweet-dried|Whey, sweet, dried|DE|353|12.9|74.5|1.1|1 portion=100|
us-whey-sweet-fluid|Whey, sweet, fluid|DE|27|0.9|5.1|0.4|1 portion=100|
us-whipped-cream-substitute-dietetic-made-from-powd|Whipped cream substitute, dietetic, made from powdered mix|DE|100|0.9|10.6|6|1 tbsp=15|
us-whipped-topping-frozen-low-fat|Whipped topping, frozen, low fat|DE|224|3|23.6|13.1|1 portion=100|
us-chocolate-yogurt-nonfat-milk|Chocolate yogurt, nonfat milk|DE|112|3.5|23.5|0|1 tub=175;1 cup=245|
us-frozen-yogurt-flavors-not-chocolate-nonfat-milk|Frozen yogurt, flavors not chocolate, nonfat milk|DE|104|4.4|19.7|0.8|1 tub=175;1 cup=245|calorie low sweetener
us-frozen-yogurt-flavors-other-than-chocolate-lowfa|Frozen yogurt, flavors other than chocolate, lowfat|DE|139|8|21|2.5|1 tub=175;1 cup=245|
us-fruit-yogurt-low-fat-10-grams-protein-per-8-ounc|Fruit yogurt, low fat, 10 grams protein per 8 ounce|DE|102|4.4|19.1|1.1|1 tub=175;1 cup=245|
us-fruit-yogurt-low-fat-11g-protein-8-oz|Fruit yogurt, low fat, 11g protein/8 oz|DE|105|4.9|18.6|1.4|1 tub=175;1 cup=245|
us-fruit-yogurt-low-fat-9-g-protein-8-oz|Fruit yogurt, low fat, 9 g protein/8 oz|DE|99|4|18.6|1.2|1 tub=175;1 cup=245|
us-fruit-yogurt-lowfat-with-low-calorie-sweetener|Fruit yogurt, lowfat, with low calorie sweetener|DE|105|4.9|18.6|1.4|1 tub=175;1 cup=245|
us-fruit-variety-yogurt-nonfat|Fruit variety yogurt, nonfat|DE|95|4.4|19|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-apricot-chobani|Greek yogurt, 2% fat, apricot, Chobani|DE|93|7.2|12.2|1.7|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-coconut-blend-chobani|Greek yogurt, 2%fat, coconut blend, Chobani|DE|92|8.1|11|1.7|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-key-lime-blend-chobani|Greek yogurt, 2% fat, key lime blend, Chobani|DE|92|7.8|11.9|1.5|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-mango-chobani|Greek yogurt, 2% fat, mango, Chobani|DE|93|7.6|11.8|1.7|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-mixed-berry-blend-chobani|Greek yogurt, 2% fat, mixed berry blend, Chobani|DE|93|8.3|10.9|1.8|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-pineapple-chobani|Greek yogurt, 2% fat, pineapple, Chobani|DE|94|7.1|12.3|1.8|1 tub=175;1 cup=245|
us-greek-yogurt-2-fat-strawberry-banana-chobani|Greek yogurt, 2% fat, strawberry banana, Chobani|DE|88|8|10.2|1.7|1 tub=175;1 cup=245|
us-greek-yogurt-blueberry-chobani|Greek yogurt, Blueberry, Chobani|DE|82|7.2|12.8|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-fruit-whole-milk|Greek yogurt, fruit, whole milk|DE|106|7.3|12.3|3|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-fruit-on-bottom-blackberry|Greek yogurt, nonfat, Fruit on Bottom, Blackberry|DE|95|7.5|15.4|0.4|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-fruit-on-bottom-pomegranate|Greek yogurt, nonfat, Fruit on Bottom, Pomegranate|DE|80|7.5|12.1|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-fruit-on-bottom-strawberry|Greek yogurt, nonfat, Fruit on Bottom, Strawberry|DE|79|7.3|11.9|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-lemon-blend-chobani|Greek yogurt, nonfat, lemon blend, Chobani|DE|78|8.6|10.7|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-peach-chobani|Greek yogurt, nonfat, peach, Chobani|DE|80|7.8|11.9|0.1|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-plain-chobani|Greek yogurt, nonfat, plain, Chobani|DE|54|9.5|3.4|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-raspberry-chobani|Greek yogurt, nonfat, raspberry, Chobani|DE|81|7.7|12|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-strawberry-dannon-oikos|Greek yogurt, nonfat, strawberry, Dannon Oikos|DE|84|8|12.5|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-vanilla-chobani|Greek yogurt, nonfat, vanilla, Chobani|DE|71|9.1|8.1|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-nonfat-vanilla-dannon-oikos|Greek yogurt, nonfat, vanilla, Dannon Oikos|DE|85|8.1|12.7|0.1|1 tub=175;1 cup=245|
us-greek-yogurt-plain-lowfat|Greek yogurt, plain, lowfat|DE|73|10|3.9|1.9|1 tub=175;1 cup=245|
us-greek-yogurt-plain-nonfat|Greek yogurt, plain, nonfat|DE|59|10.2|3.6|0.4|1 tub=175;1 cup=245|
us-greek-yogurt-plain-whole-milk|Greek yogurt, plain, whole milk|DE|97|9|4|5|1 tub=175;1 cup=245|
us-greek-yogurt-strawberry-dannon-oikos|Greek yogurt, strawberry, Dannon Oikos|DE|106|8.3|11.7|2.9|1 tub=175;1 cup=245|
us-greek-yogurt-strawberry-lowfat|Greek yogurt, strawberry, lowfat|DE|105|8.2|12.3|2.6|1 tub=175;1 cup=245|
us-greek-yogurt-strawberry-nonfat|Greek yogurt, strawberry, nonfat|DE|82|8.1|12.1|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-vanilla-lowfat|Greek yogurt, vanilla, lowfat|DE|95|8.6|9.5|2.5|1 tub=175;1 cup=245|
us-greek-yogurt-vanilla-nonfat|Greek yogurt, vanilla, nonfat|DE|78|8.6|10.4|0.2|1 tub=175;1 cup=245|
us-greek-yogurt-whole-plain-chobani|Greek yogurt, whole, plain, Chobani|DE|82|8.2|3.2|4|1 tub=175;1 cup=245|
us-plain-yogurt-low-fat|Plain yogurt, low fat|DE|63|5.3|7|1.6|1 tub=175;1 cup=245|
us-plain-yogurt-skim-milk|Plain yogurt, skim milk|DE|56|5.7|7.7|0.2|1 tub=175;1 cup=245|
us-plain-yogurt-whole-milk|Plain yogurt, whole milk|DE|61|3.5|4.7|3.3|1 tub=175;1 cup=245|
us-vanilla-flavor-yogurt-lowfat-milk|Vanilla flavor yogurt, lowfat milk|DE|86|4.9|13.8|1.3|1 tub=175;1 cup=245|calorie low sweetened sweetener
us-vanilla-yogurt-low-fat|Vanilla yogurt, low fat|DE|85|4.9|13.8|1.3|1 tub=175;1 cup=245|
us-vanilla-yogurt-non-fat|Vanilla yogurt, non-fat|DE|78|2.9|17|0|1 tub=175;1 cup=245|
us-vanilla-or-lemon-flavor-yogurt-nonfat-milk|Vanilla or lemon flavor yogurt, nonfat milk|DE|43|3.9|7.5|0.2|1 tub=175;1 cup=245|calorie low sweetened sweetener
us-abiyuch-raw|Abiyuch, raw|FR|69|1.5|17.6|0.1|1 medium=150;1 cup=150|
us-acerola-juice-raw|Acerola juice, raw|FR|23|0.4|4.8|0.3|1 medium=150;1 cup=150|
us-acerola-west-indian-cherry-raw|Acerola, (west indian cherry), raw|FR|32|0.4|7.7|0.3|1 medium=150;1 cup=150|
us-apple-juice-canned-or-bottled-unsweetened|Apple juice, canned or bottled, unsweetened|FR|46|0.1|11.3|0.1|1 medium=150;1 cup=150|acid added ascorbic
us-applesauce-canned-sweetened|Applesauce, canned, sweetened|FR|68|0.2|17.5|0.2|1 medium=150;1 cup=150|
us-applesauce-canned-unsweetened-without-added-asco|Applesauce, canned, unsweetened, without added ascorbic acid|FR|42|0.2|11.3|0.1|1 medium=150;1 cup=150|
us-apples-canned-sweetened-sliced-drained|Apples, canned, sweetened, sliced, drained|FR|67|0.2|16.8|0.4|1 medium=150;1 cup=150|
us-apples-frozen-unsweetened-heated|Apples, frozen, unsweetened, heated|FR|47|0.3|12|0.3|1 medium=150;1 cup=150|
us-apples-frozen-unsweetened-unheated|Apples, frozen, unsweetened, unheated|FR|48|0.3|12.3|0.3|1 medium=150;1 cup=150|
us-apples-raw-fuji-with-skin|Apples, raw, fuji, with skin|FR|63|0.2|15.2|0.2|1 medium=150;1 cup=150|
us-apples-raw-gala-with-skin|Apples, raw, gala, with skin|FR|57|0.3|13.7|0.1|1 medium=150;1 cup=150|
us-apples-raw-golden-delicious-with-skin|Apples, raw, golden delicious, with skin|FR|57|0.3|13.6|0.2|1 medium=150;1 cup=150|
us-apples-raw-granny-smith-with-skin|Apples, raw, granny smith, with skin|FR|58|0.4|13.6|0.2|1 medium=150;1 cup=150|
us-apples-raw-red-delicious-with-skin|Apples, raw, red delicious, with skin|FR|59|0.3|14.1|0.2|1 medium=150;1 cup=150|
us-apples-raw-without-skin|Apples, raw, without skin|FR|48|0.3|12.8|0.1|1 medium=150;1 cup=150|
us-apples-raw-without-skin-cooked-boiled|Apples, raw, without skin, cooked, boiled|FR|53|0.3|13.6|0.4|1 medium=150;1 cup=150|
us-apples-raw-without-skin-cooked-microwave|Apples, raw, without skin, cooked, microwave|FR|56|0.3|14.4|0.4|1 medium=150;1 cup=150|
us-apples-raw-with-skin|Apples, raw, with skin|FR|52|0.3|13.8|0.2|1 medium=150;1 cup=150|
us-apricots-canned-heavy-syrup-drained|Apricots, canned, heavy syrup, drained|FR|83|0.6|21.3|0.1|1 medium=150;1 cup=150|
us-apricots-frozen-sweetened|Apricots, frozen, sweetened|FR|98|0.7|25.1|0.1|1 medium=150;1 cup=150|
us-apricots-raw|Apricots, raw|FR|48|1.4|11.1|0.4|1 medium=150;1 cup=150|
us-avocados-raw|Avocados, raw|FR|160|2|8.5|14.7|1 medium=150;1 cup=150|
us-avocados-raw-california|Avocados, raw, California|FR|167|2|8.6|15.4|1 medium=150;1 cup=150|
us-avocados-raw-florida|Avocados, raw, Florida|FR|120|2.2|7.8|10.1|1 medium=150;1 cup=150|
us-bananas-dehydrated-or-banana-powder|Bananas, dehydrated, or banana powder|FR|346|3.9|88.3|1.8|1 medium=150;1 cup=150|
us-bananas-raw|Bananas, raw|FR|89|1.1|22.8|0.3|1 medium=150;1 cup=150|
us-baobab-powder|Baobab powder|FR|250|3.7|79.7|0.5|1 medium=150;1 cup=150|
us-blackberries-frozen-unsweetened|Blackberries, frozen, unsweetened|FR|64|1.2|15.7|0.4|1 medium=150;1 cup=150|
us-blackberries-raw|Blackberries, raw|FR|43|1.4|9.6|0.5|1 medium=150;1 cup=150|
us-blackberry-juice-canned|Blackberry juice, canned|FR|38|0.3|7.8|0.6|1 medium=150;1 cup=150|
us-blueberries-canned-light-syrup-drained|Blueberries, canned, light syrup, drained|FR|88|1|22.7|0.4|1 medium=150;1 cup=150|
us-blueberries-dried-sweetened|Blueberries, dried, sweetened|FR|317|2.5|80|2.5|1 medium=150;1 cup=150|
us-blueberries-frozen-sweetened|Blueberries, frozen, sweetened|FR|85|0.4|22|0.1|1 medium=150;1 cup=150|
us-blueberries-frozen-unsweetened|Blueberries, frozen, unsweetened|FR|51|0.4|12.2|0.6|1 medium=150;1 cup=150|
us-blueberries-raw|Blueberries, raw|FR|57|0.7|14.5|0.3|1 medium=150;1 cup=150|
us-blueberries-wild-canned-heavy-syrup-drained|Blueberries, wild, canned, heavy syrup, drained|FR|107|0.6|28.3|0.3|1 medium=150;1 cup=150|
us-blueberries-wild-frozen|Blueberries, wild, frozen|FR|57|0|13.9|0.2|1 medium=150;1 cup=150|
us-boysenberries-canned-heavy-syrup|Boysenberries, canned, heavy syrup|FR|88|1|22.3|0.1|1 medium=150;1 cup=150|
us-boysenberries-frozen-unsweetened|Boysenberries, frozen, unsweetened|FR|50|1.1|12.2|0.3|1 medium=150;1 cup=150|
us-breadfruit-raw|Breadfruit, raw|FR|103|1.1|27.1|0.2|1 medium=150;1 cup=150|
us-candied-fruit|Candied fruit|FR|322|0.3|82.7|0.1|1 medium=150;1 cup=150|
us-carambola-starfruit-raw|Carambola, (starfruit), raw|FR|31|1|6.7|0.3|1 medium=150;1 cup=150|
us-carissa-natal-plum-raw|Carissa, (natal-plum), raw|FR|62|0.5|13.6|1.3|1 medium=150;1 cup=150|
us-cherimoya-raw|Cherimoya, raw|FR|75|1.6|17.7|0.7|1 medium=150;1 cup=150|
us-cherries-sour-canned-water-pack-drained|Cherries, sour, canned, water pack, drained|FR|42|0.7|10.5|0.2|1 medium=150;1 cup=150|
us-cherries-sour-red-canned-heavy-syrup-pack|Cherries, sour, red, canned, heavy syrup pack|FR|91|0.7|23.3|0.1|1 medium=150;1 cup=150|
us-cherries-sour-red-canned-water-pack|Cherries, sour, red, canned, water pack|FR|36|0.8|8.9|0.1|1 medium=150;1 cup=150|
us-cherries-sour-red-frozen-unsweetened|Cherries, sour, red, frozen, unsweetened|FR|46|0.9|11|0.4|1 medium=150;1 cup=150|
us-cherries-sour-red-raw|Cherries, sour, red, raw|FR|50|1|12.2|0.3|1 medium=150;1 cup=150|
us-cherries-sweet-canned-pitted-heavy-syrup|Cherries, sweet, canned, pitted, heavy syrup|FR|83|0.7|21.1|0.2|1 medium=150;1 cup=150|
us-cherries-sweet-canned-pitted-heavy-syrup-pack|Cherries, sweet, canned, pitted, heavy syrup pack|FR|83|0.6|21.3|0.2|1 medium=150;1 cup=150|
us-cherries-sweet-raw|Cherries, sweet, raw|FR|63|1.1|16|0.2|1 medium=150;1 cup=150|
us-cherries-tart-dried-sweetened|Cherries, tart, dried, sweetened|FR|333|1.3|80.5|0.7|1 medium=150;1 cup=150|
us-cherry-juice-tart|Cherry juice, tart|FR|59|0.3|13.7|0.5|1 medium=150;1 cup=150|
us-clementines-raw|Clementines, raw|FR|47|0.9|12|0.2|1 medium=150;1 cup=150|
us-crabapples-raw|Crabapples, raw|FR|76|0.4|20|0.3|1 medium=150;1 cup=150|
us-cranberries-dried-sweetened|Cranberries, dried, sweetened|FR|308|0.2|82.8|1.1|1 medium=150;1 cup=150|
us-cranberries-raw|Cranberries, raw|FR|46|0.5|12|0.1|1 medium=150;1 cup=150|
us-cranberry-juice-unsweetened|Cranberry juice, unsweetened|FR|46|0.4|12.2|0.1|1 medium=150;1 cup=150|
us-cranberry-orange-relish-canned|Cranberry-orange relish, canned|FR|178|0.3|46.2|0.1|1 medium=150;1 cup=150|
us-cranberry-sauce-canned-sweetened|Cranberry sauce, canned, sweetened|FR|159|0.9|40.4|0.2|1 medium=150;1 cup=150|
us-cranberry-sauce-jellied-canned-ocean-spray|Cranberry sauce, jellied, canned, Ocean Spray|FR|160|1.1|40.6|0|1 medium=150;1 cup=150|
us-cranberry-sauce-whole-canned-ocean-spray|Cranberry sauce, whole, canned, Ocean Spray|FR|158|0.8|40.4|0.1|1 medium=150;1 cup=150|
us-currants-european-black-raw|Currants, european black, raw|FR|63|1.4|15.4|0.4|1 medium=150;1 cup=150|
us-currants-red-and-white-raw|Currants, red and white, raw|FR|56|1.4|13.8|0.2|1 medium=150;1 cup=150|
us-currants-zante-dried|Currants, zante, dried|FR|290|3.4|77|0.2|1 medium=150;1 cup=150|
us-custard-apple-bullock-s-heart-raw|Custard-apple, (bullock's-heart), raw|FR|101|1.7|25.2|0.6|1 medium=150;1 cup=150|
us-dates-deglet-noor|Dates, deglet noor|FR|282|2.5|75|0.4|1 medium=150;1 cup=150|
us-dates-medjool|Dates, medjool|FR|277|1.8|75|0.2|1 medium=150;1 cup=150|
us-durian-raw-or-frozen|Durian, raw or frozen|FR|147|1.5|27.1|5.3|1 medium=150;1 cup=150|
us-elderberries-raw|Elderberries, raw|FR|73|0.7|18.4|0.5|1 medium=150;1 cup=150|
us-feijoa-raw|Feijoa, raw|FR|61|0.7|15.2|0.4|1 medium=150;1 cup=150|
us-figs-dried-stewed|Figs, dried, stewed|FR|107|1.4|27.6|0.4|1 medium=150;1 cup=150|
us-figs-dried-uncooked|Figs, dried, uncooked|FR|249|3.3|63.9|0.9|1 medium=150;1 cup=150|
us-figs-raw|Figs, raw|FR|74|0.8|19.2|0.3|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-bolthouse-farms-berry-boost|Fruit juice smoothie, Bolthouse Farms, Berry Boost|FR|46|0.6|10.9|0|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-bolthouse-farms-green-goodn|Fruit juice smoothie, Bolthouse Farms, Green Goodness|FR|56|0.6|13|0.3|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-bolthouse-farms-strawberry-|Fruit juice smoothie, Bolthouse Farms, strawberry banana|FR|52|0.4|12.4|0.3|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-naked-juice-blue-machine|Fruit juice smoothie, Naked Juice, Blue Machine|FR|71|0.4|16.7|0|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-naked-juice-green-machine|Fruit juice smoothie, Naked Juice, Green Machine|FR|53|0.6|12.5|0.3|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-naked-juice-mighty-mango|Fruit juice smoothie, Naked Juice, Mighty Mango|FR|63|0.4|15|0|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-naked-juice-strawberry-bana|Fruit juice smoothie, Naked Juice, strawberry banana|FR|50|0.5|11.7|0.3|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-odwalla-original-superfood|Fruit juice smoothie, Odwalla, Original Superfood|FR|50|0.6|11.5|0.4|1 medium=150;1 cup=150|
us-fruit-juice-smoothie-odwalla-strawberry-banana|Fruit juice smoothie, Odwalla, strawberry banana|FR|48|0.5|11.1|0.3|1 medium=150;1 cup=150|
us-fruit-salad-pineapple-and-papaya-and-banana-and-|Fruit salad, (pineapple and papaya and banana and guava)|FR|86|0.4|22.4|0.1|1 medium=150;1 cup=150|canned heavy syrup tropical
us-goji-berries-dried|Goji berries, dried|FR|349|14.3|77.1|0.4|1 medium=150;1 cup=150|
us-gooseberries-raw|Gooseberries, raw|FR|44|0.9|10.2|0.6|1 medium=150;1 cup=150|
us-grapefruit-juice-pink-raw|Grapefruit juice, pink, raw|FR|39|0.5|9.2|0.1|1 medium=150;1 cup=150|
us-grapefruit-juice-white-bottled-unsweetened-ocean|Grapefruit juice, white, bottled, unsweetened, Ocean Spray|FR|37|0.5|7.5|0.6|1 medium=150;1 cup=150|
us-grapefruit-juice-white-canned-or-bottled-unsweet|Grapefruit juice, white, canned or bottled, unsweetened|FR|37|0.6|7.5|0.7|1 medium=150;1 cup=150|
us-grapefruit-juice-white-canned-sweetened|Grapefruit juice, white, canned, sweetened|FR|46|0.6|11.1|0.1|1 medium=150;1 cup=150|
us-grapefruit-juice-white-raw|Grapefruit juice, white, raw|FR|39|0.5|9.2|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-pink-and-red-all-areas|Grapefruit, raw, pink and red, all areas|FR|42|0.8|10.7|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-pink-and-red-and-white-all-areas|Grapefruit, raw, pink and red and white, all areas|FR|32|0.6|8.1|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-pink-and-red-california-and-arizo|Grapefruit, raw, pink and red, California and Arizona|FR|37|0.5|9.7|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-pink-and-red-florida|Grapefruit, raw, pink and red, Florida|FR|30|0.6|7.5|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-white-all-areas|Grapefruit, raw, white, all areas|FR|33|0.7|8.4|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-white-california|Grapefruit, raw, white, California|FR|37|0.9|9.1|0.1|1 medium=150;1 cup=150|
us-grapefruit-raw-white-florida|Grapefruit, raw, white, Florida|FR|32|0.6|8.2|0.1|1 medium=150;1 cup=150|
us-grape-juice-canned-or-bottled-unsweetened|Grape juice, canned or bottled, unsweetened|FR|60|0.4|14.8|0.1|1 medium=150;1 cup=150|acid added ascorbic
us-grapes-american-type-slip-skin-raw|Grapes, american type (slip skin), raw|FR|67|0.6|17.2|0.4|1 medium=150;1 cup=150|
us-grapes-muscadine-raw|Grapes, muscadine, raw|FR|57|0.8|13.9|0.5|1 medium=150;1 cup=150|
us-grapes-red-or-green-european-type-such-as-thomps|Grapes, red or green (European type, such as Thompson seedless)|FR|69|0.7|18.1|0.2|1 medium=150;1 cup=150|
us-guanabana-nectar-canned|Guanabana nectar, canned|FR|59|0.1|14.9|0.2|1 medium=150;1 cup=150|
us-guava-nectar-with-sucralose-canned|Guava nectar, with sucralose, canned|FR|48|0.3|13.3|0.1|1 medium=150;1 cup=150|
us-guava-sauce-cooked|Guava sauce, cooked|FR|36|0.3|9.5|0.1|1 medium=150;1 cup=150|
us-guavas-common-raw|Guavas, common, raw|FR|68|2.6|14.3|1|1 medium=150;1 cup=150|
us-guavas-strawberry-raw|Guavas, strawberry, raw|FR|69|0.6|17.4|0.6|1 medium=150;1 cup=150|
us-horned-melon-kiwano|Horned melon (Kiwano)|FR|44|1.8|7.6|1.3|1 medium=150;1 cup=150|
us-jackfruit-canned-syrup-pack|Jackfruit, canned, syrup pack|FR|92|0.4|23.9|0.1|1 medium=150;1 cup=150|
us-jackfruit-raw|Jackfruit, raw|FR|95|1.7|23.3|0.6|1 medium=150;1 cup=150|
us-java-plum-jambolan-raw|Java-plum, (jambolan), raw|FR|60|0.7|15.6|0.2|1 medium=150;1 cup=150|
us-jujube-chinese-fresh-dried|Jujube, Chinese, fresh, dried|FR|281|4.7|72.5|0.5|1 medium=150;1 cup=150|
us-jujube-raw|Jujube, raw|FR|79|1.2|20.2|0.2|1 medium=150;1 cup=150|
us-kiwifruit-green-raw|Kiwifruit, green, raw|FR|61|1.1|14.7|0.5|1 medium=150;1 cup=150|
us-kiwifruit-zespri-sungold-raw|Kiwifruit, Zespri SunGold, raw|FR|63|1|15.8|0.3|1 medium=150;1 cup=150|
us-kumquats-raw|Kumquats, raw|FR|71|1.9|15.9|0.9|1 medium=150;1 cup=150|
us-lemon-juice-from-concentrate-bottled-concord|Lemon juice from concentrate, bottled, Concord|FR|24|0.4|5.4|0.1|1 medium=150;1 cup=150|
us-lemon-juice-from-concentrate-bottled-real-lemon|Lemon juice from concentrate, bottled, Real Lemon|FR|17|0.5|5.7|0.1|1 medium=150;1 cup=150|
us-lemon-juice-from-concentrate-canned-or-bottled|Lemon juice from concentrate, canned or bottled|FR|17|0.5|5.6|0.1|1 medium=150;1 cup=150|
us-lemon-juice-raw|Lemon juice, raw|FR|22|0.4|6.9|0.2|1 medium=150;1 cup=150|
us-lemon-peel-raw|Lemon peel, raw|FR|47|1.5|16|0.3|1 medium=150;1 cup=150|
us-lemons-raw-without-peel|Lemons, raw, without peel|FR|29|1.1|9.3|0.3|1 medium=150;1 cup=150|
us-lime-juice-canned-or-bottled-unsweetened|Lime juice, canned or bottled, unsweetened|FR|21|0.3|6.7|0.2|1 medium=150;1 cup=150|
us-lime-juice-raw|Lime juice, raw|FR|25|0.4|8.4|0.1|1 medium=150;1 cup=150|
us-limes-raw|Limes, raw|FR|30|0.7|10.5|0.2|1 medium=150;1 cup=150|
us-litchis-dried|Litchis, dried|FR|277|3.8|70.7|1.2|1 medium=150;1 cup=150|
us-litchis-raw|Litchis, raw|FR|66|0.8|16.5|0.4|1 medium=150;1 cup=150|
us-loganberries-frozen|Loganberries, frozen|FR|55|1.5|13|0.3|1 medium=150;1 cup=150|
us-longans-dried|Longans, dried|FR|286|4.9|74|0.4|1 medium=150;1 cup=150|
us-longans-raw|Longans, raw|FR|60|1.3|15.1|0.1|1 medium=150;1 cup=150|
us-loquats-raw|Loquats, raw|FR|47|0.4|12.1|0.2|1 medium=150;1 cup=150|
us-mammy-apple-mamey-raw|Mammy-apple, (mamey), raw|FR|51|0.5|12.5|0.5|1 medium=150;1 cup=150|
us-mango-dried-sweetened|Mango, dried, sweetened|FR|319|2.5|78.6|1.2|1 medium=150;1 cup=150|
us-mango-nectar-canned|Mango nectar, canned|FR|51|0.1|13.1|0.1|1 medium=150;1 cup=150|
us-mangos-raw|Mangos, raw|FR|60|0.8|15|0.4|1 medium=150;1 cup=150|
us-mangosteen-canned-syrup-pack|Mangosteen, canned, syrup pack|FR|73|0.4|17.9|0.6|1 medium=150;1 cup=150|
us-maraschino-cherries-canned-drained|Maraschino cherries, canned, drained|FR|165|0.2|42|0.2|1 medium=150;1 cup=150|
us-melon-balls-frozen|Melon balls, frozen|FR|33|0.8|7.9|0.3|1 medium=150;1 cup=150|
us-melons-cantaloupe-raw|Melons, cantaloupe, raw|FR|34|0.8|8.2|0.2|1 medium=150;1 cup=150|
us-melons-casaba-raw|Melons, casaba, raw|FR|28|1.1|6.6|0.1|1 medium=150;1 cup=150|
us-melons-honeydew-raw|Melons, honeydew, raw|FR|36|0.5|9.1|0.1|1 medium=150;1 cup=150|
us-mulberries-raw|Mulberries, raw|FR|43|1.4|9.8|0.4|1 medium=150;1 cup=150|
us-nance-canned-syrup-drained|Nance, canned, syrup, drained|FR|95|0.6|22.8|1.3|1 medium=150;1 cup=150|
us-nance-frozen-unsweetened|Nance, frozen, unsweetened|FR|73|0.7|17|1.2|1 medium=150;1 cup=150|
us-naranjilla-lulo-pulp-frozen-unsweetened|Naranjilla (lulo) pulp, frozen, unsweetened|FR|25|0.4|5.9|0.2|1 medium=150;1 cup=150|
us-nectarines-raw|Nectarines, raw|FR|44|1.1|10.6|0.3|1 medium=150;1 cup=150|
us-oheloberries-raw|Oheloberries, raw|FR|28|0.4|6.8|0.2|1 medium=150;1 cup=150|
us-olives-pickled-canned-or-bottled-green|Olives, pickled, canned or bottled, green|FR|145|1|3.8|15.3|1 medium=150;1 cup=150|
us-olives-ripe-canned-jumbo-super-colossal|Olives, ripe, canned (jumbo-super colossal)|FR|81|1|5.6|6.9|1 medium=150;1 cup=150|
us-olives-ripe-canned-small-extra-large|Olives, ripe, canned (small-extra large)|FR|116|0.8|6|10.9|1 medium=150;1 cup=150|
us-orange-grapefruit-juice-canned-or-bottled-unswee|Orange-grapefruit juice, canned or bottled, unsweetened|FR|43|0.6|10.3|0.1|1 medium=150;1 cup=150|
us-orange-juice-canned-unsweetened|Orange juice, canned, unsweetened|FR|47|0.7|11|0.2|1 medium=150;1 cup=150|
us-orange-juice-chilled|Orange juice, chilled|FR|49|0.7|11.5|0.1|1 medium=150;1 cup=150|
us-orange-juice-raw|Orange juice, raw|FR|45|0.7|10.4|0.2|1 medium=150;1 cup=150|
us-orange-peel-raw|Orange peel, raw|FR|97|1.5|25|0.2|1 medium=150;1 cup=150|
us-orange-pineapple-juice-blend|Orange Pineapple Juice Blend|FR|51|0.4|12.2|0.1|1 medium=150;1 cup=150|
us-oranges-raw|Oranges, raw|FR|47|0.9|11.8|0.1|1 medium=150;1 cup=150|
us-oranges-raw-california-valencias|Oranges, raw, California, valencias|FR|49|1|11.9|0.3|1 medium=150;1 cup=150|
us-oranges-raw-florida|Oranges, raw, Florida|FR|46|0.7|11.5|0.2|1 medium=150;1 cup=150|
us-oranges-raw-navels|Oranges, raw, navels|FR|49|0.9|12.5|0.2|1 medium=150;1 cup=150|
us-oranges-raw-with-peel|Oranges, raw, with peel|FR|63|1.3|15.5|0.3|1 medium=150;1 cup=150|
us-papaya-canned-heavy-syrup-drained|Papaya, canned, heavy syrup, drained|FR|206|0.1|55.8|0.6|1 medium=150;1 cup=150|
us-papaya-nectar-canned|Papaya nectar, canned|FR|57|0.2|14.5|0.2|1 medium=150;1 cup=150|
us-papayas-raw|Papayas, raw|FR|43|0.5|10.8|0.3|1 medium=150;1 cup=150|
us-passion-fruit-granadilla-purple-raw|Passion-fruit, (granadilla), purple, raw|FR|97|2.2|23.4|0.7|1 medium=150;1 cup=150|
us-passion-fruit-juice-purple-raw|Passion-fruit juice, purple, raw|FR|51|0.4|13.6|0.1|1 medium=150;1 cup=150|
us-passion-fruit-juice-yellow-raw|Passion-fruit juice, yellow, raw|FR|60|0.7|14.5|0.2|1 medium=150;1 cup=150|
us-peaches-canned-heavy-syrup-drained|Peaches, canned, heavy syrup, drained|FR|72|0.5|18.4|0.2|1 medium=150;1 cup=150|
us-peaches-frozen-sliced-sweetened|Peaches, frozen, sliced, sweetened|FR|94|0.6|24|0.1|1 medium=150;1 cup=150|
us-peaches-yellow-raw|Peaches, yellow, raw|FR|39|0.9|9.5|0.3|1 medium=150;1 cup=150|
us-peach-nectar-canned-with-sucralose|Peach nectar, canned, with sucralose|FR|49|0.1|11.6|0.6|1 medium=150;1 cup=150|acid added ascorbic
us-pear-nectar-canned-without-added-ascorbic-acid|Pear nectar, canned, without added ascorbic acid|FR|60|0.1|15.8|0|1 medium=150;1 cup=150|
us-persimmons-japanese-dried|Persimmons, japanese, dried|FR|274|1.4|73.4|0.6|1 medium=150;1 cup=150|
us-persimmons-japanese-raw|Persimmons, japanese, raw|FR|70|0.6|18.6|0.2|1 medium=150;1 cup=150|
us-persimmons-native-raw|Persimmons, native, raw|FR|127|0.8|33.5|0.4|1 medium=150;1 cup=150|
us-pineapple-frozen-chunks-sweetened|Pineapple, frozen, chunks, sweetened|FR|86|0.4|22.2|0.1|1 medium=150;1 cup=150|
us-pineapple-juice-canned-or-bottled-unsweetened|Pineapple juice, canned or bottled, unsweetened|FR|53|0.4|12.9|0.1|1 medium=150;1 cup=150|acid added ascorbic
us-pineapple-raw|Pineapple, raw|FR|50|0.5|13.1|0.1|1 medium=150;1 cup=150|
us-pineapple-raw-extra-sweet-variety|Pineapple, raw, extra sweet variety|FR|51|0.5|13.5|0.1|1 medium=150;1 cup=150|
us-pineapple-raw-traditional-varieties|Pineapple, raw, traditional varieties|FR|45|0.6|11.8|0.1|1 medium=150;1 cup=150|
us-pitanga-surinam-cherry-raw|Pitanga, (surinam-cherry), raw|FR|33|0.8|7.5|0.4|1 medium=150;1 cup=150|
us-plantains-green-boiled|Plantains, green, boiled|FR|121|1.1|29.2|0.1|1 medium=150;1 cup=150|
us-plantains-green-fried|Plantains, green, fried|FR|309|1.5|49.2|11.8|1 medium=150;1 cup=150|
us-plantains-green-raw|Plantains, green, raw|FR|152|1.3|36.7|0.1|1 medium=150;1 cup=150|
us-plantains-yellow-baked|Plantains, yellow, baked|FR|155|1.5|41.4|0.2|1 medium=150;1 cup=150|
us-plantains-yellow-fried-latino-restaurant|Plantains, yellow, fried, Latino restaurant|FR|236|1.4|40.8|7.5|1 medium=150;1 cup=150|
us-plantains-yellow-raw|Plantains, yellow, raw|FR|122|1.3|31.9|0.4|1 medium=150;1 cup=150|
us-plums-canned-heavy-syrup-drained|Plums, canned, heavy syrup, drained|FR|89|0.4|23.1|0.1|1 medium=150;1 cup=150|
us-plums-dried-prunes-stewed-with-added-sugar|Plums, dried (prunes), stewed, with added sugar|FR|124|1.1|32.9|0.2|1 medium=150;1 cup=150|
us-plums-dried-prunes-stewed-without-added-sugar|Plums, dried (prunes), stewed, without added sugar|FR|107|1|28.1|0.2|1 medium=150;1 cup=150|
us-plums-dried-prunes-uncooked|Plums, dried (prunes), uncooked|FR|240|2.2|63.9|0.4|1 medium=150;1 cup=150|
us-plums-raw|Plums, raw|FR|46|0.7|11.4|0.3|1 medium=150;1 cup=150|
us-pomegranate-juice-bottled|Pomegranate juice, bottled|FR|54|0.2|13.1|0.3|1 medium=150;1 cup=150|
us-pomegranates-raw|Pomegranates, raw|FR|83|1.7|18.7|1.2|1 medium=150;1 cup=150|
us-prune-juice-canned|Prune juice, canned|FR|71|0.6|17.5|0|1 medium=150;1 cup=150|
us-prune-puree|Prune puree|FR|257|2.1|65.1|0.2|1 medium=150;1 cup=150|
us-pummelo-raw|Pummelo, raw|FR|38|0.8|9.6|0|1 medium=150;1 cup=150|
us-quinces-raw|Quinces, raw|FR|57|0.4|15.3|0.1|1 medium=150;1 cup=150|
us-raisins-dark-seedless|Raisins, dark, seedless|FR|299|3.3|79.3|0.3|1 medium=150;1 cup=150|
us-raisins-golden-seedless|Raisins, golden, seedless|FR|301|3.3|80|0.2|1 medium=150;1 cup=150|
us-raisins-seeded|Raisins, seeded|FR|296|2.5|78.5|0.5|1 medium=150;1 cup=150|
us-rambutan-canned-syrup-pack|Rambutan, canned, syrup pack|FR|82|0.7|20.9|0.2|1 medium=150;1 cup=150|
us-raspberries-frozen-red-sweetened|Raspberries, frozen, red, sweetened|FR|103|0.7|26.2|0.2|1 medium=150;1 cup=150|
us-raspberries-frozen-red-unsweetened|Raspberries, frozen, red, unsweetened|FR|56|1.2|12.6|0.8|1 medium=150;1 cup=150|
us-raspberries-puree-seedless|Raspberries, puree, seedless|FR|41|1|8|0.9|1 medium=150;1 cup=150|
us-raspberries-puree-with-seeds|Raspberries, puree, with seeds|FR|55|1.1|11.5|1|1 medium=150;1 cup=150|
us-raspberries-raw|Raspberries, raw|FR|52|1.2|11.9|0.7|1 medium=150;1 cup=150|
us-raspberry-juice-concentrate|Raspberry juice concentrate|FR|221|3|53.2|1.3|1 medium=150;1 cup=150|
us-rhubarb-frozen-cooked-with-sugar|Rhubarb, frozen, cooked, with sugar|FR|116|0.4|31.2|0.1|1 medium=150;1 cup=150|
us-rhubarb-frozen-uncooked|Rhubarb, frozen, uncooked|FR|21|0.6|5.1|0.1|1 medium=150;1 cup=150|
us-rhubarb-raw|Rhubarb, raw|FR|21|0.9|4.5|0.2|1 medium=150;1 cup=150|
us-rose-apples-raw|Rose-apples, raw|FR|25|0.6|5.7|0.3|1 medium=150;1 cup=150|
us-roselle-raw|Roselle, raw|FR|49|1|11.3|0.6|1 medium=150;1 cup=150|
us-rowal-raw|Rowal, raw|FR|111|2.3|23.9|2|1 medium=150;1 cup=150|
us-ruby-red-grapefruit-juice-blend-grapefruit-grape|Ruby Red grapefruit juice blend (grapefruit, grape, apple)|FR|44|0.5|10.5|0.1|1 medium=150;1 cup=150|bottled ocean spray
us-sapodilla-raw|Sapodilla, raw|FR|83|0.4|20|1.1|1 medium=150;1 cup=150|
us-sapote-mamey-raw|Sapote, mamey, raw|FR|124|1.5|32.1|0.5|1 medium=150;1 cup=150|
us-soursop-raw|Soursop, raw|FR|66|1|16.8|0.3|1 medium=150;1 cup=150|
us-strawberries-frozen-sweetened-sliced|Strawberries, frozen, sweetened, sliced|FR|96|0.5|25.9|0.1|1 medium=150;1 cup=150|
us-strawberries-frozen-unsweetened|Strawberries, frozen, unsweetened|FR|35|0.4|9.1|0.1|1 medium=150;1 cup=150|
us-strawberries-raw|Strawberries, raw|FR|32|0.7|7.7|0.3|1 medium=150;1 cup=150|
us-sugar-apples-sweetsop-raw|Sugar-apples, (sweetsop), raw|FR|94|2.1|23.6|0.3|1 medium=150;1 cup=150|
us-tamarind-nectar-canned|Tamarind nectar, canned|FR|57|0.1|14.7|0.1|1 medium=150;1 cup=150|
us-tamarinds-raw|Tamarinds, raw|FR|239|2.8|62.5|0.6|1 medium=150;1 cup=150|
us-tangerine-juice-raw|Tangerine juice, raw|FR|43|0.5|10.1|0.2|1 medium=150;1 cup=150|
us-tangerines-mandarin-oranges-canned-juice-pack|Tangerines, (mandarin oranges), canned, juice pack|FR|37|0.6|9.6|0|1 medium=150;1 cup=150|
us-tangerines-mandarin-oranges-raw|Tangerines, (mandarin oranges), raw|FR|53|0.8|13.3|0.3|1 medium=150;1 cup=150|
us-watermelon-raw|Watermelon, raw|FR|30|0.6|7.6|0.2|1 medium=150;1 cup=150|
us-acorn-flour-full-fat|Acorn flour, full fat|NS|501|7.5|54.7|30.2|1 handful=30;1 tbsp=10|nuts
us-acorns-dried|Acorns, dried|NS|509|8.1|53.7|31.4|1 handful=30;1 tbsp=10|nuts
us-acorns-raw|Acorns, raw|NS|387|6.2|40.8|23.9|1 handful=30;1 tbsp=10|nuts
us-almond-paste|Almond paste|NS|458|9|47.8|27.7|1 handful=30;1 tbsp=10|nuts
us-almonds-blanched|Almonds, blanched|NS|590|21.4|18.7|52.5|1 handful=30;1 tbsp=10|nuts
us-almonds-honey-roasted-unblanched|Almonds, honey roasted, unblanched|NS|594|18.2|27.9|49.9|1 handful=30;1 tbsp=10|nuts
us-almonds-oil-roasted-lightly-salted|Almonds, oil roasted, lightly salted|NS|607|21.2|17.7|55.2|1 handful=30;1 tbsp=10|nuts
us-beechnuts-dried|Beechnuts, dried|NS|576|6.2|33.5|50|1 handful=30;1 tbsp=10|nuts
us-brazilnuts-dried-unblanched|Brazilnuts, dried, unblanched|NS|659|14.3|11.7|67.1|1 handful=30;1 tbsp=10|nuts
us-butternuts-dried|Butternuts, dried|NS|612|24.9|12.1|57|1 handful=30;1 tbsp=10|nuts
us-cashew-nuts-raw|Cashew nuts, raw|NS|553|18.2|30.2|43.9|1 handful=30;1 tbsp=10|
us-chestnuts-chinese-boiled-and-steamed|Chestnuts, chinese, boiled and steamed|NS|153|2.9|33.6|0.8|1 handful=30;1 tbsp=10|nuts
us-chestnuts-chinese-dried|Chestnuts, chinese, dried|NS|363|6.8|79.8|1.8|1 handful=30;1 tbsp=10|nuts
us-chestnuts-chinese-raw|Chestnuts, chinese, raw|NS|224|4.2|49.1|1.1|1 handful=30;1 tbsp=10|nuts
us-chestnuts-chinese-roasted|Chestnuts, chinese, roasted|NS|239|4.5|52.4|1.2|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-boiled-and-steamed|Chestnuts, european, boiled and steamed|NS|131|2|27.8|1.4|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-dried-peeled|Chestnuts, european, dried, peeled|NS|369|5|78.4|3.9|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-dried-unpeeled|Chestnuts, european, dried, unpeeled|NS|374|6.4|77.3|4.5|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-raw-peeled|Chestnuts, european, raw, peeled|NS|196|1.6|44.2|1.3|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-raw-unpeeled|Chestnuts, european, raw, unpeeled|NS|213|2.4|45.5|2.3|1 handful=30;1 tbsp=10|nuts
us-chestnuts-european-roasted|Chestnuts, european, roasted|NS|245|3.2|53|2.2|1 handful=30;1 tbsp=10|nuts
us-chestnuts-japanese-boiled-and-steamed|Chestnuts, japanese, boiled and steamed|NS|56|0.8|12.6|0.2|1 handful=30;1 tbsp=10|nuts
us-chestnuts-japanese-dried|Chestnuts, japanese, dried|NS|360|5.3|81.4|1.2|1 handful=30;1 tbsp=10|nuts
us-chestnuts-japanese-raw|Chestnuts, japanese, raw|NS|154|2.3|34.9|0.5|1 handful=30;1 tbsp=10|nuts
us-chestnuts-japanese-roasted|Chestnuts, japanese, roasted|NS|201|3|45.1|0.8|1 handful=30;1 tbsp=10|nuts
us-coconut-cream-canned-sweetened|Coconut cream, canned, sweetened|NS|357|1.2|53.2|16.3|1 handful=30;1 tbsp=10|nuts
us-coconut-cream-raw-liquid-expressed-from-grated-m|Coconut cream, raw (liquid expressed from grated meat)|NS|330|3.6|6.7|34.7|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-dried-desiccated-creamed|Coconut meat, dried (desiccated), creamed|NS|684|5.3|21.5|69.1|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-dried-desiccated-not-sweetened|Coconut meat, dried (desiccated), not sweetened|NS|660|6.9|23.7|64.5|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-dried-desiccated-sweetened-flaked|Coconut meat, dried (desiccated), sweetened, flaked|NS|443|3.4|40.9|31.7|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-dried-desiccated-sweetened-shredded|Coconut meat, dried (desiccated), sweetened, shredded|NS|501|2.9|47.7|35.5|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-dried-desiccated-toasted|Coconut meat, dried (desiccated), toasted|NS|592|5.3|44.4|47|1 handful=30;1 tbsp=10|nuts
us-coconut-meat-raw|Coconut meat, raw|NS|354|3.3|15.2|33.5|1 handful=30;1 tbsp=10|nuts
us-coconut-milk-canned-liquid-expressed-from-grated|Coconut milk, canned liquid expressed from grated meat|NS|197|2|2.8|21.3|1 handful=30;1 tbsp=10|nuts water
us-coconut-milk-frozen-liquid-expressed-from-grated|Coconut milk, frozen liquid expressed from grated meat|NS|202|1.6|5.6|20.8|1 handful=30;1 tbsp=10|nuts water
us-coconut-milk-raw-liquid-expressed-from-grated-me|Coconut milk, raw (liquid expressed from grated meat and water)|NS|230|2.3|5.5|23.8|1 handful=30;1 tbsp=10|nuts
us-coconut-water-liquid-from-coconuts|Coconut water (liquid from coconuts)|NS|19|0.7|3.7|0.2|1 handful=30;1 tbsp=10|nuts
us-formulated-wheat-based-all-flavors-except-macada|Formulated, wheat-based, all flavors except macadamia|NS|647|13.1|20.8|62.3|1 handful=30;1 tbsp=10|nuts
us-ginkgo-nuts-canned|Ginkgo nuts, canned|NS|111|2.3|22.1|1.6|1 handful=30;1 tbsp=10|
us-ginkgo-nuts-dried|Ginkgo nuts, dried|NS|348|10.4|72.5|2|1 handful=30;1 tbsp=10|
us-ginkgo-nuts-raw|Ginkgo nuts, raw|NS|182|4.3|37.6|1.7|1 handful=30;1 tbsp=10|
us-hazelnuts-or-filberts|Hazelnuts or filberts|NS|628|15|16.7|60.8|1 handful=30;1 tbsp=10|nuts
us-hazelnuts-or-filberts-blanched|Hazelnuts or filberts, blanched|NS|629|13.7|17|61.2|1 handful=30;1 tbsp=10|nuts
us-hickorynuts-dried|Hickorynuts, dried|NS|657|12.7|18.3|64.4|1 handful=30;1 tbsp=10|nuts
us-macadamia-nuts-raw|Macadamia nuts, raw|NS|718|7.9|13.8|75.8|1 handful=30;1 tbsp=10|
us-mixed-nuts-oil-roasted-without-peanuts-lightly-s|Mixed nuts, oil roasted, without peanuts, lightly salted|NS|607|17.9|25|50|1 handful=30;1 tbsp=10|
us-mixed-nuts-oil-roasted-with-peanuts-lightly-salt|Mixed nuts, oil roasted, with peanuts, lightly salted|NS|607|20|21.1|54|1 handful=30;1 tbsp=10|
us-pecans|Pecans|NS|691|9.2|13.9|72|1 handful=30;1 tbsp=10|nuts
us-pilinuts-dried|Pilinuts, dried|NS|719|10.8|4|79.6|1 handful=30;1 tbsp=10|nuts
us-pine-nuts-dried|Pine nuts, dried|NS|673|13.7|13.1|68.4|1 handful=30;1 tbsp=10|
us-pine-nuts-pinyon-dried|Pine nuts, pinyon, dried|NS|629|11.6|19.3|61|1 handful=30;1 tbsp=10|
us-pistachio-nuts-raw|Pistachio nuts, raw|NS|560|20.2|27.2|45.3|1 handful=30;1 tbsp=10|
us-walnuts-black-dried|Walnuts, black, dried|NS|619|24.1|9.6|59.3|1 handful=30;1 tbsp=10|nuts
us-walnuts-english|Walnuts, english|NS|654|15.2|13.7|65.2|1 handful=30;1 tbsp=10|nuts
us-walnuts-glazed|Walnuts, glazed|NS|500|8.3|47.6|35.7|1 handful=30;1 tbsp=10|nuts
us-breadfruit-seeds-boiled|Breadfruit seeds, boiled|NS|168|5.3|32|2.3|1 handful=30;1 tbsp=10|
us-breadfruit-seeds-raw|Breadfruit seeds, raw|NS|191|7.4|29.2|5.6|1 handful=30;1 tbsp=10|
us-breadfruit-seeds-roasted|Breadfruit seeds, roasted|NS|207|6.2|40.1|2.7|1 handful=30;1 tbsp=10|
us-breadnut-tree-seeds-dried|Breadnut tree seeds, dried|NS|367|8.6|79.4|1.7|1 handful=30;1 tbsp=10|
us-breadnut-tree-seeds-raw|Breadnut tree seeds, raw|NS|217|6|46.3|1|1 handful=30;1 tbsp=10|
us-chia-seeds-dried|Chia seeds, dried|NS|486|16.5|42.1|30.7|1 handful=30;1 tbsp=10|
us-flaxseed|Flaxseed|NS|534|18.3|28.9|42.2|1 handful=30;1 tbsp=10|seeds
us-hemp-seed-hulled|Hemp seed, hulled|NS|553|31.6|8.7|48.8|1 handful=30;1 tbsp=10|seeds
us-lotus-seeds-dried|Lotus seeds, dried|NS|332|15.4|64.5|2|1 handful=30;1 tbsp=10|
us-lotus-seeds-raw|Lotus seeds, raw|NS|89|4.1|17.3|0.5|1 handful=30;1 tbsp=10|
us-pumpkin-and-squash-seed-kernels-dried|Pumpkin and squash seed kernels, dried|NS|559|30.2|10.7|49.1|1 handful=30;1 tbsp=10|seeds
us-pumpkin-and-squash-seed-kernels-roasted|Pumpkin and squash seed kernels, roasted|NS|574|29.8|14.7|49.1|1 handful=30;1 tbsp=10|seeds
us-pumpkin-and-squash-seeds-whole-roasted|Pumpkin and squash seeds, whole, roasted|NS|446|18.6|53.8|19.4|1 handful=30;1 tbsp=10|
us-safflower-seed-kernels-dried|Safflower seed kernels, dried|NS|517|16.2|34.3|38.5|1 handful=30;1 tbsp=10|seeds
us-sesame-butter-paste|Sesame butter, paste|NS|586|18.1|24.1|50.9|1 handful=30;1 tbsp=10|seeds
us-sesame-butter-tahini-from-raw-and-stone-ground-k|Sesame butter, tahini, from raw and stone ground kernels|NS|570|17.8|26.2|48|1 handful=30;1 tbsp=10|seeds
us-sesame-butter-tahini|Sesame butter, tahini|NS|595|17|21.2|53.8|1 handful=30;1 tbsp=10|common kernels most roasted seeds toasted type
us-sesame-butter-tahini-type-of-kernels-unspecified|Sesame butter, tahini, type of kernels unspecified|NS|592|17.4|21.5|53|1 handful=30;1 tbsp=10|seeds
us-sesame-flour-high-fat|Sesame flour, high-fat|NS|526|30.8|26.6|37.1|1 handful=30;1 tbsp=10|seeds
us-sesame-flour-low-fat|Sesame flour, low-fat|NS|333|50.1|35.5|1.8|1 handful=30;1 tbsp=10|seeds
us-sesame-seed-kernels-dried-decorticated|Sesame seed kernels, dried (decorticated)|NS|631|20.5|11.7|61.2|1 handful=30;1 tbsp=10|seeds
us-sesame-seeds-whole-dried|Sesame seeds, whole, dried|NS|573|17.7|23.5|49.7|1 handful=30;1 tbsp=10|
us-sesame-seeds-whole-roasted-and-toasted|Sesame seeds, whole, roasted and toasted|NS|565|17|25.7|48|1 handful=30;1 tbsp=10|
us-sisymbrium-sp-seeds-whole-dried|Sisymbrium sp. seeds, whole, dried|NS|318|12.1|58.3|4.6|1 handful=30;1 tbsp=10|
us-sunflower-seed-butter|Sunflower seed butter|NS|617|17.3|23.3|55.2|1 handful=30;1 tbsp=10|seeds
us-sunflower-seed-kernels-dried|Sunflower seed kernels, dried|NS|584|20.8|20|51.5|1 handful=30;1 tbsp=10|seeds
us-sunflower-seed-kernels-dry-roasted|Sunflower seed kernels, dry roasted|NS|582|19.3|24.1|49.8|1 handful=30;1 tbsp=10|seeds
us-sunflower-seed-kernels-oil-roasted|Sunflower seed kernels, oil roasted|NS|592|20.1|22.9|51.3|1 handful=30;1 tbsp=10|seeds
us-sunflower-seed-kernels-toasted|Sunflower seed kernels, toasted|NS|619|17.2|20.6|56.8|1 handful=30;1 tbsp=10|seeds
us-watermelon-seed-kernels-dried|Watermelon seed kernels, dried|NS|557|28.3|15.3|47.4|1 handful=30;1 tbsp=10|seeds
us-animal-fat-bacon-grease|Animal fat, bacon grease|OS|897|0|0|99.5|1 tbsp=15;2 tbsp=30|
us-butter-light-stick|Butter, light, stick|OS|499|3.3|0|55.1|1 tbsp=15;2 tbsp=30|
us-butter-replacement-without-fat-powder|Butter replacement, without fat, powder|OS|373|2|89|1|1 tbsp=15;2 tbsp=30|
us-creamy-dressing-made-with-sour-cream-and-or-butt|Creamy dressing, made with sour cream and/or buttermilk and oil|OS|160|1.5|7|14|1 tbsp=14;1 tsp=5|calorie reduced
us-dressing-honey-mustard-fat-free|Dressing, honey mustard, fat-free|OS|169|1.1|38.4|1.5|1 tbsp=14;1 tsp=5|
us-fat-chicken|Fat, chicken|OS|900|0|0|99.8|1 tbsp=15;2 tbsp=30|
us-fat-turkey|Fat, turkey|OS|900|0|0|99.8|1 tbsp=15;2 tbsp=30|
us-fish-oil-cod-liver|Fish oil, cod liver|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-fish-oil-herring|Fish oil, herring|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-fish-oil-menhaden|Fish oil, menhaden|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-fish-oil-menhaden-fully-hydrogenated|Fish oil, menhaden, fully hydrogenated|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-fish-oil-salmon|Fish oil, salmon|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-fish-oil-sardine|Fish oil, sardine|OS|902|0|0|100|1 tbsp=14;1 tsp=5|
us-lard|Lard|OS|902|0|0|100|1 tbsp=15;2 tbsp=30|
us-margarine-80-fat-composite-stick|Margarine, 80% fat, composite, stick|OS|717|0.2|0.7|80.7|1 tbsp=14;1 tsp=5|
us-margarine-80-fat-composite-tub|Margarine, 80% fat, composite, tub|OS|713|0.2|0.8|80.2|1 tbsp=14;1 tsp=5|
us-margarine-80-fat-stick|Margarine, 80% fat, stick|OS|717|0.2|0.7|80.7|1 tbsp=14;1 tsp=5|
us-margarine-80-fat-tub-canola-harvest-soft-spread-|Margarine, 80% fat, tub, Canola Harvest Soft Spread canola|OS|730|0.4|1.4|80.3|1 tbsp=14;1 tsp=5|kernel oils palm
us-margarine-hard-soybean-hydrogenated|Margarine, hard, soybean (hydrogenated)|OS|719|0.9|0.9|80.5|1 tbsp=14;1 tsp=5|
us-margarine-like-butter-margarine-blend-80-fat-sti|Margarine-like, butter-margarine blend, 80% fat, stick|OS|718|0.9|0.6|80.7|1 tbsp=14;1 tsp=5|
us-margarine-like-margarine-butter-blend-soybean-oi|Margarine-like, margarine-butter blend, soybean oil and butter|OS|727|0.3|0.8|80.3|1 tbsp=14;1 tsp=5|
us-margarine-like-spread-benecol-light-spread|Margarine-like spread, Benecol Light Spread|OS|357|0|5.7|38.7|1 tbsp=14;1 tsp=5|
us-margarine-like-spread-smart-balance-light-butter|Margarine-like spread, Smart Balance Light Buttery Spread|OS|337|0|2|36.4|1 tbsp=14;1 tsp=5|
us-margarine-like-spread-smart-balance-omega-plus-s|Margarine-like spread, Smart Balance Omega Plus Spread|OS|605|0.1|0.2|71|1 tbsp=14;1 tsp=5|fish oil plant sterols
us-margarine-like-spread|Margarine-like spread|OS|583|0.1|0.1|64.6|1 tbsp=14;1 tsp=5|balance buttery flax oil regular smart
us-margarine-like-spread-smart-beat-smart-squeeze|Margarine-like spread, Smart Beat Smart Squeeze|OS|47|0|7.1|2.1|1 tbsp=14;1 tsp=5|
us-margarine-like-vegetable-oil-spread-20-fat|Margarine-like, vegetable oil spread, 20% fat|OS|175|0|0.4|19.5|1 tbsp=14;1 tsp=5|
us-margarine-like-vegetable-oil-spread-60-fat-stick|Margarine-like, vegetable oil spread, 60% fat, stick/tub/bottle|OS|542|0.2|0.9|59.8|1 tbsp=14;1 tsp=5|
us-margarine-like-vegetable-oil-spread-fat-free-tub|Margarine-like, vegetable oil spread, fat-free, tub|OS|44|0.1|4.3|3|1 tbsp=14;1 tsp=5|
us-margarine-like-vegetable-oil-spread-stick-or-tub|Margarine-like, vegetable oil spread, stick or tub, sweetened|OS|534|0|16.7|52|1 tbsp=14;1 tsp=5|
us-margarine-margarine-type-vegetable-oil-spread-70|Margarine, margarine-type vegetable oil spread, 70% fat|OS|628|0.3|1.5|70.2|1 tbsp=14;1 tsp=5|hydrogenated partially soybean stick
us-margarine-soy-and-partially-hydrogenated-soy-oil|Margarine, soy and partially hydrogenated soy oil|OS|714|0.2|0.7|80|1 tbsp=14;1 tsp=5|baking candy for sauces use
us-margarine-spread-35-39-fat-tub|Margarine, spread, 35-39% fat, tub|OS|349|0.2|1.5|38|1 tbsp=14;1 tsp=5|
us-margarine-spread-40-49-fat-tub|Margarine Spread, 40-49% fat, tub|OS|401|0.3|0|44.5|1 tbsp=14;1 tsp=5|
us-mayonnaise-dressing-no-cholesterol|Mayonnaise dressing, no cholesterol|OS|688|0|0.3|77.8|1 tbsp=14;1 tsp=5|
us-mayonnaise-low-sodium-low-calorie-or-diet|Mayonnaise, low sodium, low calorie or diet|OS|231|0.3|16|19.2|1 tbsp=14;1 tsp=5|
us-mayonnaise-made-with-tofu|Mayonnaise, made with tofu|OS|322|6|3.1|31.8|1 tbsp=14;1 tsp=5|
us-mayonnaise-reduced-calorie-or-diet-cholesterol-f|Mayonnaise, reduced-calorie or diet, cholesterol-free|OS|333|0.9|6.7|33.3|1 tbsp=14;1 tsp=5|
us-mayonnaise-reduced-fat-with-olive-oil|Mayonnaise, reduced fat, with olive oil|OS|361|0.4|0|40|1 tbsp=14;1 tsp=5|
us-almond-oil|Almond oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-apricot-kernel-oil|Apricot kernel oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-avocado-oil|Avocado oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-canola-oil|Canola oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-canola-for-salads-oil-woks-and-light-frying|Canola for salads oil, woks and light frying|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-canola-oil-high-oleic|Canola oil, high oleic|OS|900|0|0|100|1 tbsp=14;1 tsp=5|
us-oil-canola-partially-hydrogenated-oil-for-deep-f|Oil, canola (partially hydrogenated) oil for deep fat frying|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-cocoa-butter-oil|Cocoa butter oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-coconut-oil-confection-fat|Coconut oil, confection fat|OS|884|0|0|100|1 tbsp=14;1 tsp=5|basis coatings cream for ice typical
us-coconut-hydrogenated-oil|Coconut (hydrogenated) oil|OS|880|0|0|99.5|1 tbsp=14;1 tsp=5|coffee for toppings used whipped whiteners
us-cooking-and-salad-oil-enova-80-diglycerides|Cooking and salad oil, Enova, 80% diglycerides|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-corn-and-canola-oil|Corn and canola oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-corn-oil-peanut-and-olive|Corn oil, peanut, and olive|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-flaxseed-oil-cold-pressed|Flaxseed oil, cold pressed|OS|884|0.1|0|100|1 tbsp=14;1 tsp=5|
us-flaxseed-oil-contains-added-sliced-flaxseed|Flaxseed oil, contains added sliced flaxseed|OS|878|0.4|0.4|99|1 tbsp=14;1 tsp=5|
us-grapeseed-oil|Grapeseed oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-hazelnut-oil|Hazelnut oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-mid-oleic-oil-sunflower|Mid-oleic oil, sunflower|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-mustard-oil|Mustard oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-oat-oil|Oat oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-olive-oil-salad-or-cooking|Olive oil, salad or cooking|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-palm-oil|Palm oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-palm-kernel-oil-confection-fat|Palm kernel oil, confection fat|OS|884|0|0|100|1 tbsp=14;1 tsp=5|butter cocoa high quality similar uses
us-palm-kernel-hydrogenated-oil-confection-fat|Palm kernel (hydrogenated) oil, confection fat|OS|884|0|0|100|1 tbsp=14;1 tsp=5|grade intermediate product
us-palm-kernel-hydrogenated-oil-used-for-whipped-to|Palm kernel (hydrogenated) oil, used for whipped toppings|OS|884|0|0|100|1 tbsp=14;1 tsp=5|dairy non
us-pam-cooking-spray-oil-original|Pam cooking spray oil, original|OS|792|0.3|20.7|78.7|1 tbsp=14;1 tsp=5|
us-peanut-oil-salad-or-cooking|Peanut oil, salad or cooking|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-poppyseed-oil|Poppyseed oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-rice-bran-oil|Rice bran oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-safflower-oil-salad-or-cooking|Safflower oil, salad or cooking|OS|884|0|0|100|1 tbsp=14;1 tsp=5|commerce high oleic primary
us-safflower-oil-salad-or-cooking-linoleic-over-70|Safflower oil, salad or cooking, linoleic, (over 70%)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sesame-oil-salad-or-cooking|Sesame oil, salad or cooking|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sheanut-oil|Sheanut oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-soybean-lecithin-oil|Soybean lecithin oil|OS|763|0|0|100|1 tbsp=14;1 tsp=5|
us-soybean-oil-salad-or-cooking|Soybean oil, salad or cooking|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-soybean-oil-salad-or-cooking-partially-hydrogena|Soybean oil, salad or cooking, (partially hydrogenated)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-soy-oil-fully-hydrogenated|Soy oil, fully hydrogenated|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-soy-oil-low-linolenic|Soy oil, low linolenic|OS|900|0|0|100|1 tbsp=14;1 tsp=5|
us-soy-partially-hydrogenated-oil-all-purpose|Soy ( partially hydrogenated) oil, all purpose|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-oil-soy-partially-hydrogenated-and-soy-winterize|Oil, soy (partially hydrogenated ) and soy (winterized)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|clear fry pourable
us-soy-partially-hydrogenated-oil|Soy (partially hydrogenated) oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|butter dairy flavor for multiuse non
us-soy-oil-refined-for-woks-and-light-frying|Soy oil, refined, for woks and light frying|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-soy-oil-ultra-low-linolenic|Soy oil, ultra low linolenic|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sunflower-oil-high-oleic-70-and-over|Sunflower oil, high oleic (70% and over)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sunflower-oil-linoleic-approx-65|Sunflower oil, linoleic, (approx. 65%)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sunflower-oil-linoleic-less-than-60|Sunflower oil, linoleic (less than 60%)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-sunflower-oil-linoleic-partially-hydrogenated|Sunflower oil, linoleic, (partially hydrogenated)|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-teaseed-oil|Teaseed oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-tomatoseed-oil|Tomatoseed oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-vegetable-oil-natreon-canola-high-stability-non-|Vegetable oil, Natreon canola, high stability, non trans|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-vegetable-oil-soybean-refined|Vegetable oil, soybean, refined|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-walnut-oil|Walnut oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-wheat-germ-oil|Wheat germ oil|OS|884|0|0|100|1 tbsp=14;1 tsp=5|
us-bacon-and-tomato-salad-dressing|Bacon and tomato salad dressing|OS|326|1.8|2|35|1 tbsp=14;1 tsp=5|
us-salad-dressing-blue-or-roquefort-cheese-dressing|Salad dressing, blue or roquefort cheese dressing|OS|484|1.4|4.8|51.1|1 tbsp=14;1 tsp=5|
us-salad-dressing-blue-or-roquefort-cheese-dressing-2|Salad dressing, blue or roquefort cheese dressing, fat-free|OS|115|1.5|25.6|1|1 tbsp=14;1 tsp=5|
us-salad-dressing-blue-or-roquefort-cheese-dressing-3|Salad dressing, blue or roquefort cheese dressing, light|OS|86|2.1|13.2|2.7|1 tbsp=14;1 tsp=5|
us-blue-or-roquefort-cheese-salad-dressing-low-calo|Blue or roquefort cheese salad dressing, low calorie|OS|99|5.1|2.9|7.2|1 tbsp=14;1 tsp=5|
us-buttermilk-salad-dressing-lite|Buttermilk salad dressing, lite|OS|202|1.3|21.3|12.4|1 glass=250;1 cup=250||L
us-caesar-dressing-salad-dressing|Caesar dressing salad dressing|OS|542|2.2|3.3|57.9|1 tbsp=14;1 tsp=5|
us-caesar-salad-dressing-fat-free|Caesar salad dressing, fat-free|OS|131|1.5|30.7|0.2|1 tbsp=14;1 tsp=5|
us-caesar-salad-dressing-low-calorie|Caesar salad dressing, low calorie|OS|110|0.3|18.6|4.4|1 tbsp=14;1 tsp=5|
us-coleslaw-salad-dressing|Coleslaw salad dressing|OS|404|0.9|22.4|34.5|1 tbsp=14;1 tsp=5|
us-salad-dressing-coleslaw-reduced-fat|Salad Dressing, coleslaw, reduced fat|OS|329|0|40|20|1 tbsp=14;1 tsp=5|
us-french-dressing-salad-dressing|French dressing salad dressing|OS|419|0.9|18.8|39.1|1 tbsp=14;1 tsp=5|
us-french-dressing-salad-dressing-fat-free|French dressing salad dressing, fat-free|OS|132|0.2|32.1|0.3|1 tbsp=14;1 tsp=5|
us-french-dressing-salad-dressing-reduced-calorie|French dressing salad dressing, reduced calorie|OS|227|0.4|27|13|1 tbsp=14;1 tsp=5|
us-french-dressing-salad-dressing-reduced-fat|French dressing salad dressing, reduced fat|OS|222|0.6|31.2|11.5|1 tbsp=14;1 tsp=5|
us-french-salad-dressing-home-recipe|French salad dressing, home recipe|OS|631|0.1|3.4|70.2|1 tbsp=14;1 tsp=5|
us-green-goddess-salad-dressing|Green goddess salad dressing|OS|427|1.9|7.4|43.3|1 tbsp=14;1 tsp=5|
us-home-recipe-salad-dressing-vinegar-and-oil|Home recipe salad dressing, vinegar and oil|OS|449|0|2.5|50.1|1 tbsp=14;1 tsp=5|
us-honey-mustard-salad-dressing|Honey mustard salad dressing|OS|464|0.9|23.3|40.8|1 tbsp=14;1 tsp=5|
us-honey-mustard-dressing-salad-dressing-reduced-ca|Honey mustard dressing salad dressing, reduced calorie|OS|207|1|28.3|10|1 tbsp=14;1 tsp=5|
us-italian-dressing-salad-dressing|Italian dressing salad dressing|OS|240|0.4|12.1|21.1|1 tbsp=14;1 tsp=5|
us-italian-dressing-salad-dressing-reduced-fat|Italian dressing salad dressing, reduced fat|OS|102|0.4|10|6.7|1 tbsp=14;1 tsp=5|
us-italian-dressing-salad-dressing-fat-free|Italian dressing salad dressing, fat-free|OS|47|1|8.8|0.9|1 tbsp=14;1 tsp=5|
us-italian-dressing-salad-dressing-reduced-calorie|Italian dressing salad dressing, reduced calorie|OS|200|0.3|6.7|20|1 tbsp=14;1 tsp=5|
us-salad-dressing-kraft-mayo-fat-free-mayonnaise-dr|Salad dressing, Kraft Mayo Fat Free Mayonnaise Dressing|OS|64|0.2|15.8|0|1 tbsp=14;1 tsp=5|
us-kraft-mayo-light-mayonnaise-salad-dressing|Kraft Mayo Light Mayonnaise salad dressing|OS|334|0.6|8.5|32.9|1 tbsp=14;1 tsp=5|
us-salad-dressing-kraft-miracle-whip-free-nonfat-dr|Salad dressing, Kraft Miracle Whip Free Nonfat Dressing|OS|84|0.2|15.5|2.7|1 tbsp=14;1 tsp=5|
us-mayonnaise-salad-dressing|Mayonnaise salad dressing|OS|680|1|0.6|74.9|1 tbsp=14;1 tsp=5|
us-salad-dressing-mayonnaise-and-mayonnaise-type-lo|Salad dressing, mayonnaise and mayonnaise-type, low calorie|OS|263|0.9|23.9|19|1 tbsp=14;1 tsp=5|
us-mayonnaise-salad-dressing-imitation-milk-cream|Mayonnaise salad dressing, imitation, milk cream|OS|97|2.1|11.1|5.1|1 tbsp=14;1 tsp=5|
us-mayonnaise-salad-dressing-imitation-soybean|Mayonnaise salad dressing, imitation, soybean|OS|232|0.3|16|19.2|1 tbsp=14;1 tsp=5|
us-mayonnaise-salad-dressing-imitation|Mayonnaise salad dressing, imitation|OS|482|0.1|15.8|47.7|1 tbsp=14;1 tsp=5|cholesterol soybean
us-mayonnaise-salad-dressing-light|Mayonnaise salad dressing, light|OS|238|0.4|9.2|22.2|1 tbsp=14;1 tsp=5|
us-salad-dressing-mayonnaise-light-smart-balance|Salad Dressing, mayonnaise, light, Smart Balance|OS|333|1.5|9.4|34.2|1 tbsp=14;1 tsp=5|omega plus
us-salad-dressing-mayonnaise-like-fat-free|Salad Dressing, mayonnaise-like, fat-free|OS|84|0.2|15.5|2.7|1 tbsp=14;1 tsp=5|
us-mayonnaise-salad-dressing-soybean-oil|Mayonnaise salad dressing, soybean oil|OS|717|1.1|2.7|79.4|1 tbsp=14;1 tsp=5|
us-mayonnaise-type-salad-dressing-light|Mayonnaise-type salad dressing, light|OS|158|0.7|16.4|10|1 tbsp=14;1 tsp=5|
us-peppercorn-dressing-salad-dressing|Peppercorn dressing salad dressing|OS|564|1.2|3.5|61.4|1 tbsp=14;1 tsp=5|
us-poppyseed-salad-dressing-creamy|Poppyseed salad dressing, creamy|OS|399|0.9|23.7|33.3|1 tbsp=14;1 tsp=5|
us-ranch-dressing-salad-dressing|Ranch dressing salad dressing|OS|430|1.3|5.9|44.5|1 tbsp=14;1 tsp=5|
us-ranch-dressing-salad-dressing-fat-free|Ranch dressing salad dressing, fat-free|OS|119|0.3|26.5|1.9|1 tbsp=14;1 tsp=5|
us-ranch-dressing-salad-dressing-reduced-fat|Ranch dressing salad dressing, reduced fat|OS|196|1.3|21.3|12.4|1 tbsp=14;1 tsp=5|
us-russian-dressing-salad-dressing|Russian dressing salad dressing|OS|355|0.7|31.9|26.2|1 tbsp=14;1 tsp=5|
us-russian-dressing-salad-dressing-low-calorie|Russian dressing salad dressing, low calorie|OS|141|0.5|27.6|4|1 tbsp=14;1 tsp=5|
us-sesame-seed-dressing-salad-dressing|Sesame seed dressing salad dressing|OS|443|3.1|8.6|45.2|1 tbsp=14;1 tsp=5|
us-spray-style-dressing-salad-dressing-assorted-fla|Spray-style dressing salad dressing, assorted flavors|OS|165|0.2|16.6|10.8|1 tbsp=14;1 tsp=5|
us-sweet-and-sour-salad-dressing|Sweet and sour salad dressing|OS|15|0.1|3.7|0|1 tbsp=14;1 tsp=5|
us-thousand-island-salad-dressing|Thousand island salad dressing|OS|379|1.1|14.6|35.1|1 tbsp=14;1 tsp=5|
us-thousand-island-dressing-salad-dressing-fat-free|Thousand island dressing salad dressing, fat-free|OS|132|0.6|29.3|1.5|1 tbsp=14;1 tsp=5|
us-thousand-island-dressing-salad-dressing-reduced-|Thousand island dressing salad dressing, reduced fat|OS|195|0.8|24.1|11.3|1 tbsp=14;1 tsp=5|
us-sandwich-spread-with-chopped-pickle|Sandwich spread, with chopped pickle|OS|389|0.9|22.4|34|1 tbsp=15;2 tbsp=30|
us-shortening-confectionery|Shortening confectionery|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|coconut hydrogenated kernel palm
us-shortening-confectionery-fractionated-palm|Shortening, confectionery, fractionated palm|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|
us-shortening-frying-heavy-duty-palm-hydrogenated|Shortening frying (heavy duty), palm (hydrogenated)|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|
us-shortening-frying-heavy-duty-soybean-hydrogenate|Shortening frying (heavy duty), soybean (hydrogenated)|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|less linoleic than
us-shortening-household-soybean-hydrogenated-and-pa|Shortening household soybean (hydrogenated) and palm|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|
us-shortening-multipurpose|Shortening, multipurpose|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|hydrogenated palm soybean
us-shortening-soy-partially-hydrogenated-and-corn-f|Shortening, soy (partially hydrogenated ) and corn for frying|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|
us-shortening-soy-partially-hydrogenated-for-baking|Shortening, soy (partially hydrogenated ) for baking|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|confections
us-shortening-special-purpose-for-cakes-and-frostin|Shortening, special purpose for cakes and frostings|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|hydrogenated soybean
us-shortening-vegetable-household-composite|Shortening, vegetable, household, composite|OS|884|0|0|100|1 tbsp=15;2 tbsp=30|
us-vegetable-oil-butter-spread-reduced-calorie|Vegetable oil-butter spread, reduced calorie|OS|465|0|0|53|1 tbsp=14;1 tsp=5|
us-vegetable-oil-palm-kernel|Vegetable oil, palm kernel|OS|862|0|0|100|1 tbsp=14;1 tsp=5|
us-breakfast-bar-corn-flake-crust-with-fruit|Breakfast bar, corn flake crust with fruit|SN|376|4.4|72.8|7.5|1 bar=45;1 piece=30|
us-breakfast-bars-oats-sugar-raisins|Breakfast bars, oats, sugar, raisins|SN|464|9.8|66.7|17.6|1 bar=45;1 piece=30|bar coconut granola include
us-cheese-puffs-and-twists-corn-based-baked-low-fat|Cheese puffs and twists, corn based, baked, low fat|SN|432|8.5|72.4|12.1|1 bar=45;1 piece=30|
us-granola-bar-soft-milk-chocolate-coated-peanut-bu|Granola bar, soft, milk chocolate coated, peanut butter|SN|536|9.6|54.1|31.2|1 bar=45;1 piece=30|
us-milk-and-cereal-bar|Milk and cereal bar|SN|413|6.5|72.1|11|1 glass=250;1 cup=250||L
us-popcorn-microwave-low-fat-and-sodium|Popcorn, microwave, low fat and sodium|SN|429|12.6|73.4|9.5|1 packet=30;1 bowl=50|
us-popcorn-microwave-regular-butter-flavor-made-wit|Popcorn, microwave, regular (butter) flavor, made with palm oil|SN|535|8.4|57.3|30.2|1 packet=30;1 bowl=50|
us-popcorn-sugar-syrup-caramel-fat-free|Popcorn, sugar syrup/caramel, fat-free|SN|381|2|90.1|1.4|1 packet=30;1 bowl=50|
us-potato-chips-reduced-fat|Potato chips, reduced fat|SN|487|7.1|67.8|20.8|1 packet=30;1 bowl=50|
us-pretzels-soft|Pretzels, soft|SN|338|8.2|69.4|3.1|1 packet=30;1 bowl=50|
us-pretzels-soft-unsalted|Pretzels, soft, unsalted|SN|345|8.2|71|3.1|1 packet=30;1 bowl=50|
us-rice-and-wheat-cereal-bar|Rice and Wheat cereal bar|SN|409|9.1|72.7|9.1|1 bar=45;1 piece=30|
us-rice-cake-cracker-include-hain-mini-rice-cakes|Rice cake, cracker (include hain mini rice cakes)|SN|392|7.1|81.1|4.3|1 bar=45;1 piece=30|
us-balance-original-bar|Balance, original bar|SN|415|28|48.7|12|1 bar=45;1 piece=30|snack
us-mixed-berry-bar|Mixed Berry Bar|SN|383|13.2|58.8|10.5|1 bar=45;1 piece=30|snack
us-potato-chips-made-from-dried-potatoes-plain|Potato chips, made from dried potatoes, plain|SN|545|4.6|55.4|35.3|1 packet=30;1 bowl=50|snack
us-pretzel-hard-chocolate-coated|Pretzel, hard chocolate coated|SN|467|7.1|70.1|17.6|1 packet=30;1 bowl=50|snack
us-bagel-chips-plain|Bagel chips, plain|SN|451|12.3|66.4|15.1|1 packet=30;1 bowl=50|snacks
us-banana-chips|Banana chips|SN|519|2.3|58.4|33.6|1 packet=30;1 bowl=50|snacks
us-beef-jerky-chopped-and-formed|Beef jerky, chopped and formed|SN|410|33.2|11|25.6|1 bar=45;1 piece=30|snacks
us-beef-sticks-smoked|Beef sticks, smoked|SN|550|21.5|5.4|49.6|1 bar=45;1 piece=30|snacks
us-brown-rice-chips|Brown rice chips|SN|384|8.2|81.5|2.8|1 packet=30;1 bowl=50|snacks
us-candy-bits-yogurt-covered-with-vitamin-c|Candy bits, yogurt covered with vitamin C|SN|415|0|86.9|7.5|1 scoop=65;1 cup=130|snacks
us-candy-rolls-yogurt-covered-fruit-flavored-with-h|Candy rolls, yogurt-covered, fruit flavored with high vitamin C|SN|359|0.5|74.6|6.5|1 scoop=65;1 cup=130|snacks
us-clif-bar-mixed-flavors|Clif Bar, mixed flavors|SN|346|14.7|65.4|5.9|1 bar=45;1 piece=30|snacks
us-corn-based-extruded-chips-barbecue-flavor|Corn-based, extruded, chips, barbecue-flavor|SN|523|7|56.2|32.7|1 packet=30;1 bowl=50|snacks
us-corn-based-extruded-chips-plain|Corn-based, extruded, chips, plain|SN|539|6.2|57.3|33.4|1 packet=30;1 bowl=50|snacks
us-corn-based-extruded-chips-unsalted|Corn-based, extruded, chips, unsalted|SN|557|6.6|57.4|33.4|1 packet=30;1 bowl=50|snacks
us-corn-based-extruded-cones-plain|Corn-based, extruded, cones, plain|SN|510|5.8|62.9|26.9|1 bar=45;1 piece=30|snacks
us-corn-based-extruded-onion-flavor|Corn-based, extruded, onion-flavor|SN|499|7.7|65.1|22.6|1 bar=45;1 piece=30|snacks
us-corn-based-extruded-puffs-or-twists-cheese-flavo|Corn-based, extruded, puffs or twists, cheese-flavor|SN|567|5.5|54.5|36.5|1 bar=45;1 piece=30|snacks
us-corn-cakes|Corn cakes|SN|387|8.1|83.4|2.4|1 bar=45;1 piece=30|snacks
us-corn-cakes-very-low-sodium|Corn cakes, very low sodium|SN|387|8.1|83.4|2.4|1 bar=45;1 piece=30|snacks
us-cornnuts-barbecue-flavor|Cornnuts, barbecue-flavor|SN|436|9|71.7|14.3|1 bar=45;1 piece=30|snacks
us-crisped-rice-bar-almond|Crisped rice bar, almond|SN|458|7|64.6|20.4|1 bar=45;1 piece=30|snacks
us-crisped-rice-bar-chocolate-chip|Crisped rice bar, chocolate chip|SN|404|5.1|73|13.5|1 bar=45;1 piece=30|snacks
us-farley-candy-farley-fruit-snacks-with-vitamins-a|Farley Candy, Farley Fruit Snacks, with vitamins A, C|SN|341|4.4|80.9|0|1 packet=30;1 bowl=50|
us-fritolay-sunchips-multigrain-french-onion-flavor|Fritolay, Sunchips, multigrain, French onion flavor|SN|496|8.7|65.5|22.2|1 packet=30;1 bowl=50|snacks
us-fritolay-sunchips-multigrain-snack-harvest-chedd|Fritolay, Sunchips, Multigrain Snack, Harvest Cheddar flavor|SN|491|8.1|64.7|22.2|1 packet=30;1 bowl=50|snacks
us-fritolay-sunchips-multigrain-snack-original-flav|Fritolay, Sunchips, Multigrain Snack, original flavor|SN|491|8|67.3|21.1|1 packet=30;1 bowl=50|snacks
us-fruit-leather-pieces-with-vitamin-c|Fruit leather, pieces, with vitamin C|SN|373|0.1|85.2|3.5|1 bar=45;1 piece=30|snacks
us-general-mills-betty-crocker-fruit-roll-ups-berry|General Mills, Betty Crocker Fruit Roll Ups, berry flavored|SN|373|0.1|85.2|3.5|1 bar=45;1 piece=30|c snacks vitamin
us-granola-bar-chewy-reduced-sugar-all-flavors|Granola bar, chewy, reduced sugar, all flavors|SN|412|5.6|69.4|12.5|1 bar=45;1 piece=30|snacks
us-granola-bar-fruit-filled-nonfat|Granola bar, fruit-filled, nonfat|SN|342|5.9|77.6|0.9|1 bar=45;1 piece=30|snacks
us-granola-bar-general-mills-nature-valley-chewy-tr|Granola bar, General Mills, Nature Valley, Chewy Trail Mix|SN|415|5.7|72.3|11.4|1 bar=45;1 piece=30|snacks
us-granola-bar-general-mills-nature-valley-sweet-sa|Granola bar, General Mills Nature Valley, Sweet&salty Nut|SN|487|9.1|61.1|22.9|1 bar=45;1 piece=30|peanut snacks
us-granola-bar-general-mills-nature-valley-with-yog|Granola bar, General Mills, Nature Valley, with yogurt coating|SN|423|5.7|74.3|11.4|1 scoop=65;1 cup=130|snacks
us-granola-bar-kashi-golean-chewy-mixed-flavors|Granola bar, Kashi Golean, chewy, mixed flavors|SN|390|16.7|63.4|7.7|1 bar=45;1 piece=30|snacks
us-granola-bar-kashi-golean-crunchy-mixed-flavors|Granola bar, Kashi Golean, crunchy, mixed flavors|SN|393|17.9|59.6|9.2|1 bar=45;1 piece=30|snacks
us-granola-bar-kashi-tlc-bar-chewy-mixed-flavors|Granola bar, Kashi Tlc Bar, chewy, mixed flavors|SN|429|18.6|53.3|15.7|1 bar=45;1 piece=30|snacks
us-granola-bar-kashi-tlc-bar-crunchy-mixed-flavors|Granola bar, Kashi Tlc Bar, crunchy, mixed flavors|SN|446|15|62.8|15|1 bar=45;1 piece=30|snacks
us-granola-bar-quaker-chewy-90-calorie-bar|Granola bar, Quaker, chewy, 90 Calorie Bar|SN|408|4.2|79.2|8.3|1 bar=45;1 piece=30|snacks
us-granola-bar-quaker-dipps-all-flavors|Granola bar, Quaker, Dipps, all flavors|SN|480|7.5|65|20.4|1 bar=45;1 piece=30|snacks
us-granola-bars-hard-almond|Granola bars, hard, almond|SN|495|7.7|62|25.5|1 bar=45;1 piece=30|snacks
us-granola-bars-hard-chocolate-chip|Granola bars, hard, chocolate chip|SN|438|7.3|72.1|16.3|1 bar=45;1 piece=30|snacks
us-granola-bars-hard-peanut-butter|Granola bars, hard, peanut butter|SN|483|9.8|62.3|23.8|1 bar=45;1 piece=30|snacks
us-granola-bars-hard-plain|Granola bars, hard, plain|SN|471|10.1|64.4|19.8|1 bar=45;1 piece=30|snacks
us-granola-bars-quaker-oatmeal-to-go-all-flavors|Granola bars, Quaker Oatmeal TO GO, all flavors|SN|389|6.7|75.5|6.7|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-almond-confectioners-coating|Granola bars, soft, almond, confectioners coating|SN|455|8.6|60.1|20|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-coated-milk-chocolate-coating|Granola bars, soft, coated, milk chocolate coating|SN|466|5.8|63.8|24.9|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-chocolate-chip|Granola bars, soft, uncoated, chocolate chip|SN|418|5.7|70.2|16.6|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-nut-and-raisin|Granola bars, soft, uncoated, nut and raisin|SN|454|8|63.6|20.4|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-peanut-butter|Granola bars, soft, uncoated, peanut butter|SN|426|10.5|64.4|15.8|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-peanut-butter-and-cho|Granola bars, soft, uncoated, peanut butter and chocolate chip|SN|432|9.8|62.2|20|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-plain|Granola bars, soft, uncoated, plain|SN|443|7.4|67.3|17.2|1 bar=45;1 piece=30|snacks
us-granola-bars-soft-uncoated-raisin|Granola bars, soft, uncoated, raisin|SN|448|7.6|66.4|17.8|1 bar=45;1 piece=30|snacks
us-granola-bar-with-coconut-chocolate-coated|Granola bar, with coconut, chocolate coated|SN|531|5.2|55.2|32.2|1 bar=45;1 piece=30|snacks
us-granola-bites-mixed-flavors|Granola bites, mixed flavors|SN|451|7.2|66.3|17.5|1 bar=45;1 piece=30|snacks
us-kellogg-kellogg-s-low-fat-granola-bar|Kellogg, Kellogg's Low Fat Granola Bar|SN|390|8|78|7.4|1 bar=45;1 piece=30|almond brown crunchy snacks sugar
us-kellogg-kellogg-s-nutri-grain-cereal-bars-fruit|Kellogg, Kellogg's, Nutri-grain Cereal Bars, fruit|SN|365|4.2|67.6|8.7|1 bar=45;1 piece=30|snacks
us-kellogg-kellogg-s-rice-krispies-treats-squares|Kellogg, Kellogg's Rice Krispies Treats Squares|SN|417|3.4|80.5|9|1 bar=45;1 piece=30|snacks
us-kraft-cornnuts-plain|Kraft, Cornnuts, plain|SN|446|8.5|71.9|15.6|1 bar=45;1 piece=30|snacks
us-m-m-mars-combos-snacks-cheddar-cheese-pretzel|M&m Mars, Combos Snacks Cheddar Cheese Pretzel|SN|463|9.9|66.5|16.9|1 packet=30;1 bowl=50|
us-m-m-mars-kudos-whole-grain-bar-chocolate-chip|M&m Mars, Kudos Whole Grain Bar, chocolate chip|SN|420|4.5|72.3|13|1 bar=45;1 piece=30|snacks
us-m-m-mars-kudos-whole-grain-bar-m-m-s-milk-chocol|M&m Mars, Kudos Whole Grain Bar, M&m's milk chocolate|SN|415|3.8|73|12|1 bar=45;1 piece=30|snacks
us-m-m-mars-kudos-whole-grain-bars-peanut-butter|M&m Mars, Kudos Whole Grain Bars, peanut butter|SN|463|5.9|64.7|20.8|1 bar=45;1 piece=30|snacks
us-nutri-grain-fruit-and-nut-bar|Nutri-grain Fruit And Nut Bar|SN|403|9.4|66.7|10.9|1 bar=45;1 piece=30|snacks
us-oriental-mix-rice-based|Oriental mix, rice-based|SN|506|17.3|51.6|25.6|1 bar=45;1 piece=30|snacks
us-peas-roasted-wasabi-flavored|Peas, roasted, wasabi-flavored|SN|432|14.1|62.2|14.1|1 bar=45;1 piece=30|snacks
us-pita-chips-salted|Pita chips, salted|SN|457|11.8|68.3|15.2|1 packet=30;1 bowl=50|snacks
us-plantain-chips-salted|Plantain chips, salted|SN|531|2.3|63.8|29.6|1 packet=30;1 bowl=50|snacks
us-popcorn-air-popped-unsalted|Popcorn, air-popped (Unsalted)|SN|382|12|77.9|4.2|1 packet=30;1 bowl=50|snacks
us-popcorn-cakes|Popcorn, cakes|SN|384|9.7|80.1|3.1|1 packet=30;1 bowl=50|snacks
us-popcorn-caramel-coated-without-peanuts|Popcorn, caramel-coated, without peanuts|SN|431|3.8|79.1|12.8|1 packet=30;1 bowl=50|snacks
us-popcorn-caramel-coated-with-peanuts|Popcorn, caramel-coated, with peanuts|SN|400|6.4|80.7|7.8|1 packet=30;1 bowl=50|snacks
us-popcorn-cheese-flavor|Popcorn, cheese-flavor|SN|526|9.3|51.6|33.2|1 packet=30;1 bowl=50|snacks
us-popcorn-homemade-oil-popped-unsalted|Popcorn, homemade, oil-popped, unsalted|SN|500|9|58.1|28.1|1 packet=30;1 bowl=50|snacks
us-popcorn-microwave-94-fat-free|Popcorn, microwave, 94% fat free|SN|402|10.7|76|6.1|1 packet=30;1 bowl=50|snacks
us-popcorn-microwave-low-fat|Popcorn, microwave, low fat|SN|424|12.6|72|9.5|1 packet=30;1 bowl=50|snacks
us-popcorn-microwave-regular-butter-flavor|Popcorn, microwave, regular (butter) flavor|SN|557|7.5|55.2|34|1 packet=30;1 bowl=50|hydrogenated made oil partially snacks
us-popcorn-oil-popped-microwave-regular-flavor|Popcorn, oil-popped, microwave, regular flavor|SN|583|7.3|45.1|43.6|1 packet=30;1 bowl=50|snacks
us-pork-skins-barbecue-flavor|Pork skins, barbecue-flavor|SN|538|57.9|1.6|31.8|1 bar=45;1 piece=30|snacks
us-pork-skins-plain|Pork skins, plain|SN|544|61.3|0|31.3|1 bar=45;1 piece=30|snacks
us-potato-chips-barbecue-flavor|Potato chips, barbecue-flavor|SN|487|6.5|55.9|31.1|1 packet=30;1 bowl=50|snacks
us-potato-chips-cheese-flavor|Potato chips, cheese-flavor|SN|496|8.5|57.7|27.2|1 packet=30;1 bowl=50|snacks
us-potato-chips-fat-free-salted|Potato chips, fat free, salted|SN|379|9.6|83.8|0.6|1 packet=30;1 bowl=50|snacks
us-potato-chips-lightly-salted|Potato chips, lightly salted|SN|560|6.7|53.5|35.4|1 packet=30;1 bowl=50|snacks
us-potato-chips-made-from-dried-potatoes-cheese-fla|Potato chips, made from dried potatoes, cheese-flavor|SN|551|7|50.6|37|1 packet=30;1 bowl=50|snacks
us-potato-chips-made-from-dried-potatoes-preformed-|Potato chips, made from dried potatoes (preformed), multigrain|SN|505|5.3|65.3|24.7|1 packet=30;1 bowl=50|snacks
us-potato-chips-made-from-dried-potatoes-reduced-fa|Potato chips, made from dried potatoes, reduced fat|SN|502|4.6|64.8|26.1|1 packet=30;1 bowl=50|snacks
us-potato-chips-made-from-dried-potatoes|Potato chips, made from dried potatoes|SN|547|6.6|51.3|37|1 packet=30;1 bowl=50|cream flavor onion snacks sour
us-potato-chips-plain-made-with-partially-hydrogena|Potato chips, plain, made with partially hydrogenated soybean|SN|536|7|52.9|34.6|1 packet=30;1 bowl=50|oil salted snacks
us-potato-chips-plain-salted|Potato chips, plain, salted|SN|532|6.4|53.8|34|1 packet=30;1 bowl=50|snacks
us-potato-chips-plain-unsalted|Potato chips, plain, unsalted|SN|536|7|52.9|34.6|1 packet=30;1 bowl=50|snacks
us-potato-chips-sour-cream-and-onion-flavor|Potato chips, sour-cream-and-onion-flavor|SN|531|8.1|51.5|33.9|1 packet=30;1 bowl=50|snacks
us-potato-chips-white-restructured-baked|Potato chips, white, restructured, baked|SN|469|5|71.4|18.2|1 packet=30;1 bowl=50|snacks
us-potato-sticks|Potato sticks|SN|522|6.7|53.3|34.4|1 bar=45;1 piece=30|snacks
us-pretzels-gluten-free-made-with-cornstarch-and-po|Pretzels, gluten- free made with cornstarch and potato flour|SN|389|3.5|78.6|6.7|1 packet=30;1 bowl=50|snacks
us-pretzels-hard-confectioner-s-coating-chocolate-f|Pretzels, hard, confectioner's coating, chocolate-flavor|SN|457|7.5|70.9|16.7|1 packet=30;1 bowl=50|snacks
us-pretzels-hard-plain-salted|Pretzels, hard, plain, salted|SN|384|10|80.4|2.9|1 packet=30;1 bowl=50|snacks
us-pretzels-hard-whole-wheat-including-both-salted-|Pretzels, hard, whole-wheat including both salted and unsalted|SN|362|11.1|81.3|2.6|1 packet=30;1 bowl=50|snacks
us-rice-cakes-brown-rice-buckwheat|Rice cakes, brown rice, buckwheat|SN|380|9|80.1|3.5|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-buckwheat-unsalted|Rice cakes, brown rice, buckwheat, unsalted|SN|380|9|80.1|3.5|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-corn|Rice cakes, brown rice, corn|SN|385|8.4|81.2|3.2|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-multigrain|Rice cakes, brown rice, multigrain|SN|387|8.5|80.1|3.5|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-multigrain-unsalted|Rice cakes, brown rice, multigrain, unsalted|SN|387|8.5|80.1|3.5|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-plain-unsalted|Rice cakes, brown rice, plain, unsalted|SN|387|8.2|81.5|2.8|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-rye|Rice cakes, brown rice, rye|SN|386|8.1|79.9|3.8|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-sesame-seed|Rice cakes, brown rice, sesame seed|SN|392|7.6|81.5|3.8|1 bar=45;1 piece=30|snacks
us-rice-cakes-brown-rice-sesame-seed-unsalted|Rice cakes, brown rice, sesame seed, unsalted|SN|392|7.6|81.5|3.8|1 bar=45;1 piece=30|snacks
us-rice-cracker-brown-rice-plain|Rice cracker brown rice, plain|SN|387|8.2|81.5|2.8|1 bar=45;1 piece=30|snacks
us-sesame-sticks-wheat-based-salted|Sesame sticks, wheat-based, salted|SN|541|10.9|46.5|36.7|1 bar=45;1 piece=30|snacks
us-sesame-sticks-wheat-based-unsalted|Sesame sticks, wheat-based, unsalted|SN|541|10.9|46.5|36.7|1 bar=45;1 piece=30|snacks
us-shrimp-cracker|Shrimp cracker|SN|426|7.1|59.1|17.9|1 bar=45;1 piece=30|snacks
us-soy-chips-or-crisps-salted|Soy chips or crisps, salted|SN|385|26.5|53.2|7.4|1 packet=30;1 bowl=50|snacks
us-sunkist-sunkist-fruit-roll-strawberry-with-vitam|Sunkist, Sunkist Fruit Roll, strawberry, with vitamins A|SN|342|0.6|82.7|1|1 bar=45;1 piece=30|snacks
us-sweet-potato-chips-unsalted|Sweet potato chips, unsalted|SN|532|2.9|56.8|32.4|1 packet=30;1 bowl=50|snacks
us-taro-chips|Taro chips|SN|498|2.3|68.1|24.9|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-light-baked-with-less-oil|Tortilla chips, light (baked with less oil)|SN|465|8.7|73.4|15.2|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-low-fat-unsalted|Tortilla chips, low fat, unsalted|SN|416|11|80.1|5.7|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-nacho-cheese|Tortilla chips, nacho cheese|SN|519|7.4|60.8|27.4|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-nacho-flavor-reduced-fat|Tortilla chips, nacho-flavor, reduced fat|SN|445|8.7|71.6|15.2|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-plain-white-corn-salted|Tortilla chips, plain, white corn, salted|SN|472|7.1|67.8|20.7|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-ranch-flavor|Tortilla chips, ranch-flavor|SN|501|7.2|62.7|24.6|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-taco-flavor|Tortilla chips, taco-flavor|SN|480|7.9|63.1|24.2|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-unsalted-white-corn|Tortilla chips, unsalted, white corn|SN|503|7.8|65.3|23.4|1 packet=30;1 bowl=50|snacks
us-trail-mix-tropical|Trail mix, tropical|SN|442|6.3|65.6|17.1|1 bar=45;1 piece=30|snacks
us-trail-mix-unsalted|Trail mix, unsalted|SN|462|13.8|44.9|29.4|1 bar=45;1 piece=30|snacks
us-trail-mix-with-chocolate-chips-salted-nuts-and-s|Trail mix, with chocolate chips, salted nuts and seeds|SN|484|14.2|44.9|31.9|1 packet=30;1 bowl=50|snacks
us-trail-mix-with-chocolate-chips-unsalted-nuts-and|Trail mix, with chocolate chips, unsalted nuts and seeds|SN|484|14.2|44.9|31.9|1 packet=30;1 bowl=50|snacks
us-vegetable-chips-hain-celestial-group-terra-chips|Vegetable chips, Hain Celestial Group, Terra Chips|SN|517|4.1|58|29.8|1 packet=30;1 bowl=50|snacks
us-vegetable-chips-made-from-garden-vegetables|Vegetable chips, made from garden vegetables|SN|473|5.3|60.4|23.3|1 packet=30;1 bowl=50|snacks
us-yucca-cassava-chips-salted|Yucca (cassava) chips, salted|SN|515|1.3|69.2|25.9|1 packet=30;1 bowl=50|snacks
us-tortilla-chips-low-fat-baked-without-fat|Tortilla chips, low fat, baked without fat|SN|448|11|80.2|5.7|1 packet=30;1 bowl=50|
us-tortilla-chips-yellow-plain-salted|Tortilla chips, yellow, plain, salted|SN|497|6.6|67.4|22.3|1 packet=30;1 bowl=50|
us-bean-with-frankfurters-soup-canned|Bean with frankfurters soup, canned|HM|75|4|8.8|2.8|1 bowl=250;1 cup=245|equal volume water
us-bean-with-ham-soup-canned-chunky|Bean with ham soup, canned, chunky|HM|95|5.2|11.2|3.5|1 bowl=250;1 cup=245|
us-bean-with-pork-soup-canned-prepared-with-equal-v|Bean with pork soup, canned, prepared with equal volume water|HM|63|2.9|8.3|2.2|1 bowl=250;1 cup=245|
us-beef-and-mushroom-soup-low-sodium-chunk-style|Beef and mushroom soup, low sodium, chunk style|HM|69|4.3|9.6|2.3|1 bowl=250;1 cup=245|
us-beef-and-vegetables-soup-canned|Beef and vegetables soup, canned|HM|48|3.2|6.2|1.2|1 bowl=250;1 cup=245|
us-beef-and-vegetables-soup-reduced-sodium-canned|Beef and vegetables soup, reduced sodium, canned|HM|42|3.3|5|1|1 bowl=250;1 cup=245|
us-beef-barley-soup-ready-to-serve|Beef barley soup, ready to serve|HM|52|2.8|7.9|1|1 bowl=250;1 cup=245|
us-beef-broth-soup-bouillon-consomme|Beef broth soup, bouillon, consomme|HM|12|2.2|0.7|0|1 bowl=250;1 cup=245|equal volume water
us-beef-broth-soup-cubed-dry|Beef broth soup, cubed, dry|HM|170|17.3|16.1|4|1 bowl=250;1 cup=245|
us-beef-broth-soup-less-reduced-sodium-ready-to-ser|Beef broth soup, less/reduced sodium, ready to serve|HM|6|1.1|0.2|0.1|1 bowl=250;1 cup=245|
us-beef-broth-or-bouillon-canned-soup|Beef broth or bouillon canned soup|HM|7|1.1|0|0.2|1 bowl=250;1 cup=245|
us-beef-mushroom-soup-canned-prepared-with-equal-vo|Beef mushroom soup, canned, prepared with equal volume water|HM|30|2.4|2.6|1.2|1 bowl=250;1 cup=245|
us-beef-noodle-soup-canned-prepared-with-equal-volu|Beef noodle soup, canned, prepared with equal volume water|HM|34|1.9|3.6|1.2|1 bowl=250;1 cup=245|
us-beef-stroganoff-soup-canned-chunky-style|Beef stroganoff soup, canned, chunky style|HM|98|5.1|9|4.6|1 bowl=250;1 cup=245|
us-black-bean-soup-canned-prepared-with-equal-volum|Black bean soup, canned, prepared with equal volume water|HM|46|2.4|7.7|0.7|1 bowl=250;1 cup=245|
us-bouillon-cubes-and-granules-soup-low-sodium-dry|Bouillon cubes and granules soup, low sodium, dry|HM|438|16.7|64.9|13.9|1 bowl=250;1 cup=245|
us-cheese-soup-canned-prepared-with-equal-volume-mi|Cheese soup, canned, prepared with equal volume milk|HM|92|3.8|6.5|5.8|1 bowl=250;1 cup=245|
us-cheese-soup-canned-prepared-with-equal-volume-wa|Cheese soup, canned, prepared with equal volume water|HM|63|2.2|4.3|4.2|1 bowl=250;1 cup=245|
us-chicken-and-vegetable-soup-canned|Chicken and vegetable soup, canned|HM|33|2|4.7|0.7|1 bowl=250;1 cup=245|
us-chicken-broth-soup-canned-prepared-with-equal-vo|Chicken broth soup, canned, prepared with equal volume water|HM|16|2|0.4|0.6|1 bowl=250;1 cup=245|
us-chicken-broth-cubes-soup-dry|Chicken broth cubes soup, dry|HM|198|14.6|23.5|4.7|1 bowl=250;1 cup=245|
us-chicken-broth-soup-less-reduced-sodium-ready-to-|Chicken broth soup, less/reduced sodium, ready to serve|HM|7|1.4|0.4|0|1 bowl=250;1 cup=245|
us-chicken-broth-soup-low-sodium-canned|Chicken broth soup, low sodium, canned|HM|16|2|1.2|0.6|1 bowl=250;1 cup=245|
us-chicken-broth-or-bouillon-soup-dry|Chicken broth or bouillon soup, dry|HM|267|16.7|18|13.9|1 bowl=250;1 cup=245|
us-chicken-broth-soup|Chicken broth soup|HM|6|0.6|0.4|0.2|1 bowl=250;1 cup=245|
us-chicken-soup-canned-chunky|Chicken soup, canned, chunky|HM|71|5.1|6.9|2.6|1 bowl=250;1 cup=245|
us-chicken-corn-chowder-soup-chunky-single-brand|Chicken corn chowder soup, chunky, single brand|HM|99|3.1|7.5|6.3|1 bowl=250;1 cup=245|
us-chicken-gumbo-soup-canned-prepared-with-equal-vo|Chicken gumbo soup, canned, prepared with equal volume water|HM|23|1.1|3.4|0.6|1 bowl=250;1 cup=245|
us-chicken-mushroom-soup-canned-prepared-with-equal|Chicken mushroom soup, canned, prepared with equal volume water|HM|54|1.8|3.8|3.8|1 bowl=250;1 cup=245|
us-chicken-noodle-soup-canned-prepared-with-equal-v|Chicken noodle soup, canned, prepared with equal volume water|HM|24|1.2|3|0.8|1 bowl=250;1 cup=245|
us-chicken-noodle-soup-low-sodium-canned|Chicken noodle soup, low sodium, canned|HM|25|1.3|3|1|1 bowl=250;1 cup=245|equal volume water
us-chicken-noodle-soup-reduced-sodium-canned|Chicken noodle soup, reduced sodium, canned|HM|41|3.3|3.8|1.3|1 bowl=250;1 cup=245|
us-chicken-rice-soup-canned-chunky|Chicken rice soup, canned, chunky|HM|53|5.1|5.4|1.3|1 bowl=250;1 cup=245|
us-soup-chicken-vegetable-with-potato-and-cheese-ch|Soup, chicken vegetable with potato and cheese, chunky|HM|65|1.2|5.2|4.5|1 bowl=250;1 cup=245|
us-chicken-with-rice-soup-canned-prepared-with-equa|Chicken with rice soup, canned, prepared with equal volume water|HM|24|1.5|2.9|0.8|1 bowl=250;1 cup=245|
us-chili-beef-soup-canned-prepared-with-equal-volum|Chili beef soup, canned, prepared with equal volume water|HM|57|2.5|9.2|1.2|1 bowl=250;1 cup=245|
us-chunky-beef-soup-canned|Chunky beef soup, canned|HM|66|4|10.1|1.1|1 bowl=250;1 cup=245|
us-chunky-chicken-noodle-soup-canned|Chunky chicken noodle soup, canned|HM|41|3.1|4.5|1.2|1 bowl=250;1 cup=245|
us-chunky-vegetable-soup-canned|Chunky vegetable soup, canned|HM|39|1.1|7.9|0.4|1 bowl=250;1 cup=245|
us-chunky-vegetable-soup-reduced-sodium-canned|Chunky vegetable soup, reduced sodium, canned|HM|50|1.2|10.3|0.5|1 bowl=250;1 cup=245|
us-clam-chowder-soup-manhattan-canned|Clam chowder soup, manhattan, canned|HM|30|0.9|4.8|0.9|1 bowl=250;1 cup=245|equal volume water
us-clam-chowder-soup-manhattan-style-canned-chunky|Clam chowder soup, manhattan style, canned, chunky|HM|56|3|7.8|1.4|1 bowl=250;1 cup=245|
us-clam-chowder-soup-new-england-canned|Clam chowder soup, new england, canned|HM|61|3.2|7.5|2|1 bowl=250;1 cup=245|equal low milk volume
us-clam-chowder-soup-new-england-reduced-sodium-can|Clam chowder soup, new england, reduced sodium, canned|HM|70|2.3|5.7|4.2|1 bowl=250;1 cup=245|
us-cream-of-asparagus-soup-canned-prepared-with-equ|Cream of asparagus soup, canned, prepared with equal volume milk|HM|65|2.6|6.6|3.3|1 bowl=250;1 cup=245|
us-cream-of-asparagus-soup-canned|Cream of asparagus soup, canned|HM|35|0.9|4.4|1.7|1 bowl=250;1 cup=245|equal volume water
us-cream-of-celery-soup-canned-prepared-with-equal-|Cream of celery soup, canned, prepared with equal volume milk|HM|66|2.3|5.9|3.9|1 bowl=250;1 cup=245|
us-cream-of-celery-soup-canned-prepared-with-equal--2|Cream of celery soup, canned, prepared with equal volume water|HM|37|0.7|3.6|2.3|1 bowl=250;1 cup=245|
us-cream-of-chicken-soup-canned-prepared-with-equal|Cream of chicken soup, canned, prepared with equal volume milk|HM|77|3|6|4.6|1 bowl=250;1 cup=245|
us-cream-of-chicken-soup-canned-prepared-with-equal-2|Cream of chicken soup, canned, prepared with equal volume water|HM|48|1.4|3.8|3|1 bowl=250;1 cup=245|
us-cream-of-mushroom-soup-canned|Cream of mushroom soup, canned|HM|65|2.4|5.8|3.6|1 bowl=250;1 cup=245|equal low milk volume
us-cream-of-mushroom-soup-canned-prepared-with-equa|Cream of mushroom soup, canned, prepared with equal volume water|HM|39|0.7|3.3|2.6|1 bowl=250;1 cup=245|
us-cream-of-mushroom-soup-low-sodium-canned|Cream of mushroom soup, low sodium, canned|HM|53|1|4.5|3.7|1 bowl=250;1 cup=245|
us-cream-of-onion-soup-canned-prepared-with-equal-v|Cream of onion soup, canned, prepared with equal volume milk|HM|75|2.7|7.4|3.8|1 bowl=250;1 cup=245|
us-cream-of-onion-soup-canned-prepared-with-equal-v-2|Cream of onion soup, canned, prepared with equal volume water|HM|44|1.1|5.2|2.2|1 bowl=250;1 cup=245|
us-cream-of-potato-soup-canned-prepared-with-equal-|Cream of potato soup, canned, prepared with equal volume milk|HM|60|2.3|6.9|2.6|1 bowl=250;1 cup=245|
us-cream-of-potato-soup-canned-prepared-with-equal--2|Cream of potato soup, canned, prepared with equal volume water|HM|30|0.7|4.7|1|1 bowl=250;1 cup=245|
us-cream-of-shrimp-soup-canned|Cream of shrimp soup, canned|HM|61|2.8|5.6|3.2|1 bowl=250;1 cup=245|equal low milk volume
us-cream-of-shrimp-soup-canned-prepared-with-equal-|Cream of shrimp soup, canned, prepared with equal volume water|HM|36|1.1|3.3|2.1|1 bowl=250;1 cup=245|
us-cream-of-vegetable-soup-dry-powder|Cream of vegetable soup, dry, powder|HM|446|8|52.1|24.1|1 bowl=250;1 cup=245|
us-egg-drop-soup-chinese-restaurant|Egg drop soup, Chinese restaurant|HM|27|1.2|4.3|0.6|1 bowl=250;1 cup=245|
us-soup-healthy-choice-chicken-and-rice-soup-canned|Soup, Healthy Choice Chicken and Rice Soup, canned|HM|37|2.5|5.7|0.6|1 bowl=250;1 cup=245|
us-soup-healthy-choice-chicken-noodle-soup-canned|Soup, Healthy Choice Chicken Noodle Soup, canned|HM|41|3.7|5.2|0.6|1 bowl=250;1 cup=245|
us-soup-healthy-choice-garden-vegetable-soup-canned|Soup, Healthy Choice Garden Vegetable Soup, canned|HM|51|2.1|10|0.2|1 bowl=250;1 cup=245|
us-hot-and-sour-soup-chinese-restaurant|Hot and sour soup, Chinese restaurant|HM|39|2.6|4.4|1.2|1 bowl=250;1 cup=245|
us-lentil-with-ham-soup-canned|Lentil with ham soup, canned|HM|56|3.7|8.2|1.1|1 bowl=250;1 cup=245|
us-minestrone-soup-canned-chunky|Minestrone soup, canned, chunky|HM|53|2.1|8.6|1.2|1 bowl=250;1 cup=245|
us-minestrone-soup-canned-prepared-with-equal-volum|Minestrone soup, canned, prepared with equal volume water|HM|34|1.8|4.7|1|1 bowl=250;1 cup=245|
us-minestrone-soup-canned-reduced-sodium|Minestrone soup, canned, reduced sodium|HM|50|2|9|0.8|1 bowl=250;1 cup=245|
us-mushroom-barley-soup-canned-prepared-with-equal-|Mushroom barley soup, canned, prepared with equal volume water|HM|30|0.8|4.8|0.9|1 bowl=250;1 cup=245|
us-mushroom-with-beef-stock-soup-canned|Mushroom with beef stock soup, canned|HM|35|1.3|3.8|1.7|1 bowl=250;1 cup=245|equal volume water
us-oyster-stew-soup-canned-prepared-with-equal-volu|Oyster stew soup, canned, prepared with equal volume milk|HM|55|2.5|4|3.2|1 bowl=250;1 cup=245|
us-oyster-stew-soup-canned-prepared-with-equal-volu-2|Oyster stew soup, canned, prepared with equal volume water|HM|24|0.9|1.7|1.6|1 bowl=250;1 cup=245|
us-pea-soup-green-canned-prepared-with-equal-volume|Pea soup, green, canned, prepared with equal volume milk|HM|94|5|12.7|2.8|1 bowl=250;1 cup=245|
us-pea-soup-green-canned-prepared-with-equal-volume-2|Pea soup, green, canned, prepared with equal volume water|HM|61|3.2|9.9|1.1|1 bowl=250;1 cup=245|
us-pea-soup-low-sodium-prepared-with-equal-volume-w|Pea soup, low sodium, prepared with equal volume water|HM|62|3.2|9.9|1.1|1 bowl=250;1 cup=245|
us-pea-soup-split-with-ham-canned-chunky|Pea soup, split with ham, canned, chunky|HM|77|4.6|11.2|1.7|1 bowl=250;1 cup=245|
us-pea-soup-split-with-ham-canned|Pea soup, split with ham, canned|HM|75|4.1|11.1|1.7|1 bowl=250;1 cup=245|equal volume water
us-ramen-noodle-soup-any-flavor-dry|Ramen noodle soup, any flavor, dry|HM|440|10.2|60.3|17.6|1 bowl=250;1 cup=245|
us-ramen-noodle-soup-beef-flavor-dry|Ramen noodle soup, beef flavor, dry|HM|441|10.1|60.3|17.7|1 bowl=250;1 cup=245|
us-ramen-noodle-soup-chicken-flavor-dry|Ramen noodle soup, chicken flavor, dry|HM|439|10.2|60.2|17.5|1 bowl=250;1 cup=245|
us-ramen-noodle-soup-dry-any-flavor-reduced-fat|Ramen noodle soup, dry, any flavor, reduced fat|HM|350|10.9|71|2.5|1 bowl=250;1 cup=245|
us-shark-fin-soup-restaurant-prepared|Shark fin soup, restaurant-prepared|HM|46|3.2|3.8|2|1 bowl=250;1 cup=245|
us-stock-soup-beef-homemade|Stock soup, beef, homemade|HM|13|2|1.2|0.1|1 bowl=250;1 cup=245|
us-stock-soup-chicken-homemade|Stock soup, chicken, homemade|HM|36|2.5|3.5|1.2|1 bowl=250;1 cup=245|
us-stock-soup-fish-homemade|Stock soup, fish, homemade|HM|16|2.3|0|0.8|1 bowl=250;1 cup=245|
us-swanson-soup-beef-broth-lower-sodium|Swanson soup, beef broth, lower sodium|HM|6|1.2|0.2|0.1|1 bowl=250;1 cup=245|
us-swanson-soup-vegetable-broth|Swanson soup, vegetable broth|HM|6|0.2|1|0.1|1 bowl=250;1 cup=245|
us-tomato-beef-with-noodle-soup-canned|Tomato beef with noodle soup, canned|HM|56|1.8|8.4|1.7|1 bowl=250;1 cup=245|equal volume water
us-tomato-bisque-soup-canned-prepared-with-equal-vo|Tomato bisque soup, canned, prepared with equal volume milk|HM|79|2.5|11.7|2.6|1 bowl=250;1 cup=245|
us-tomato-bisque-soup-canned-prepared-with-equal-vo-2|Tomato bisque soup, canned, prepared with equal volume water|HM|50|0.9|9.6|1|1 bowl=250;1 cup=245|
us-tomato-soup-canned-prepared-with-equal-volume-lo|Tomato soup, canned, prepared with equal volume low fat (2%)|HM|55|2.4|9.8|1.2|1 bowl=250;1 cup=245|milk
us-tomato-soup-canned-prepared-with-equal-volume-wa|Tomato soup, canned, prepared with equal volume water|HM|32|0.7|7.5|0.2|1 bowl=250;1 cup=245|
us-tomato-soup-low-sodium-with-water|Tomato soup, low sodium, with water|HM|30|0.8|6.6|0.3|1 bowl=250;1 cup=245|
us-tomato-rice-soup-canned-prepared-with-equal-volu|Tomato rice soup, canned, prepared with equal volume water|HM|47|0.8|8.5|1.1|1 bowl=250;1 cup=245|
us-turkey-soup-chunky-canned|Turkey soup, chunky, canned|HM|57|4.3|6|1.9|1 bowl=250;1 cup=245|
us-turkey-noodle-soup-canned-prepared-with-equal-vo|Turkey noodle soup, canned, prepared with equal volume water|HM|28|1.6|3.5|0.8|1 bowl=250;1 cup=245|
us-turkey-vegetable-soup-canned-prepared-with-equal|Turkey vegetable soup, canned, prepared with equal volume water|HM|30|1.3|3.6|1.3|1 bowl=250;1 cup=245|
us-vegetable-beef-soup-canned-prepared-with-equal-v|Vegetable beef soup, canned, prepared with equal volume water|HM|31|2.2|4.1|0.8|1 bowl=250;1 cup=245|
us-vegetable-beef-soup-microwavable-single-brand|Vegetable beef soup, microwavable, single brand|HM|44|6.2|3.3|0.7|1 bowl=250;1 cup=245|
us-vegetable-broth-soup-ready-to-serve|Vegetable broth soup, ready to serve|HM|5|0.2|0.9|0.1|1 bowl=250;1 cup=245|
us-vegetable-with-beef-broth-soup-canned|Vegetable with beef broth soup, canned|HM|33|1.2|5.4|0.8|1 bowl=250;1 cup=245|equal volume water
us-vegetarian-vegetable-soup-canned|Vegetarian vegetable soup, canned|HM|28|0.9|4.9|0.8|1 bowl=250;1 cup=245|equal volume water
us-wonton-soup-chinese-restaurant|Wonton soup, Chinese restaurant|HM|32|2.1|5.3|0.3|1 bowl=250;1 cup=245|
us-amaranth-grain-cooked|Amaranth grain, cooked|GR|102|3.8|18.7|1.6|1 cup=160;1 portion=200|
us-amaranth-grain-uncooked|Amaranth grain, uncooked|GR|371|13.6|65.3|7|1 cup=160;1 portion=200|
us-arrowroot-flour|Arrowroot flour|GR|357|0.3|88.2|0.1|1 portion dry=75;1 cup=180|
us-barley-flour-or-meal|Barley flour or meal|GR|345|10.5|74.5|1.6|1 portion dry=75;1 cup=180|
us-barley-hulled|Barley, hulled|GR|354|12.5|73.5|2.3|1 portion dry=75;1 cup=180|
us-barley-malt-flour|Barley malt flour|GR|361|10.3|78.3|1.8|1 portion dry=75;1 cup=180|
us-barley-pearled-cooked|Barley, pearled, cooked|GR|123|2.3|28.2|0.4|1 cup=160;1 portion=200|
us-barley-pearled-raw|Barley, pearled, raw|GR|352|9.9|77.7|1.2|1 portion dry=75;1 cup=180|
us-buckwheat|Buckwheat|GR|343|13.3|71.5|3.4|1 portion dry=75;1 cup=180|
us-buckwheat-flour-whole-groat|Buckwheat flour, whole-groat|GR|335|12.6|70.6|3.1|1 portion dry=75;1 cup=180|
us-buckwheat-groats-roasted-cooked|Buckwheat groats, roasted, cooked|GR|92|3.4|19.9|0.6|1 cup=160;1 portion=200|
us-buckwheat-groats-roasted-dry|Buckwheat groats, roasted, dry|GR|346|11.7|75|2.7|1 portion dry=75;1 cup=180|
us-bulgur-cooked|Bulgur, cooked|GR|83|3.1|18.6|0.2|1 cup=160;1 portion=200|
us-bulgur-dry|Bulgur, dry|GR|342|12.3|75.9|1.3|1 portion dry=75;1 cup=180|
us-corn-flour-masa-white|Corn flour, masa, white|GR|363|8.5|76.6|3.7|1 portion dry=75;1 cup=180|
us-corn-flour-whole-grain-blue-harina-de-maiz-morad|Corn flour, whole-grain, blue (harina de maiz morado)|GR|364|8.8|73.9|5.1|1 portion dry=75;1 cup=180|
us-corn-flour-whole-grain-white|Corn flour, whole-grain, white|GR|361|6.9|76.9|3.9|1 portion dry=75;1 cup=180|
us-corn-flour-whole-grain-yellow|Corn flour, whole-grain, yellow|GR|361|6.9|76.9|3.9|1 portion dry=75;1 cup=180|
us-corn-flour-yellow-degermed|Corn flour, yellow, degermed|GR|375|5.6|82.8|1.4|1 portion dry=75;1 cup=180|
us-corn-flour-yellow-masa|Corn flour, yellow, masa|GR|363|8.5|76.6|3.7|1 portion dry=75;1 cup=180|
us-corn-grain-white|Corn grain, white|GR|365|9.4|74.3|4.7|1 portion dry=75;1 cup=180|
us-corn-grain-yellow|Corn grain, yellow|GR|365|9.4|74.3|4.7|1 portion dry=75;1 cup=180|
us-cornmeal-degermed-white|Cornmeal, degermed, white|GR|370|7.1|79.5|1.8|1 portion dry=75;1 cup=180|
us-cornmeal-degermed-yellow|Cornmeal, degermed, yellow|GR|370|7.1|79.5|1.8|1 portion dry=75;1 cup=180|
us-cornmeal-white-self-rising-bolted-plain|Cornmeal, white, self-rising, bolted, plain|GR|334|8.3|70.3|3.4|1 portion dry=75;1 cup=180|
us-cornmeal-white-self-rising-bolted-with-wheat-flo|Cornmeal, white, self-rising, bolted, with wheat flour added|GR|348|8.4|73.4|2.9|1 portion dry=75;1 cup=180|
us-cornmeal-white-self-rising-degermed|Cornmeal, white, self-rising, degermed|GR|355|8.4|74.8|1.7|1 portion dry=75;1 cup=180|
us-cornmeal-whole-grain-white|Cornmeal, whole-grain, white|GR|362|8.1|76.9|3.6|1 portion dry=75;1 cup=180|
us-cornmeal-whole-grain-yellow|Cornmeal, whole-grain, yellow|GR|362|8.1|76.9|3.6|1 portion dry=75;1 cup=180|
us-cornmeal-yellow-self-rising-bolted-plain|Cornmeal, yellow, self-rising, bolted, plain|GR|334|8.3|70.3|3.4|1 portion dry=75;1 cup=180|
us-cornmeal-yellow-self-rising-bolted-with-wheat-fl|Cornmeal, yellow, self-rising, bolted, with wheat flour added|GR|348|8.4|73.4|2.9|1 portion dry=75;1 cup=180|
us-cornmeal-yellow-self-rising-degermed|Cornmeal, yellow, self-rising, degermed|GR|355|8.4|74.8|1.7|1 portion dry=75;1 cup=180|
us-cornstarch|Cornstarch|GR|381|0.3|91.3|0.1|1 portion dry=75;1 cup=180|
us-couscous-dry|Couscous, dry|GR|376|12.8|77.4|0.6|1 portion dry=75;1 cup=180|
us-hominy-canned-white|Hominy, canned, white|GR|72|1.5|14.3|0.9|1 portion dry=75;1 cup=180|
us-hominy-canned-yellow|Hominy, canned, yellow|GR|72|1.5|14.3|0.9|1 portion dry=75;1 cup=180|
us-macaroni-vegetable-cooked|Macaroni, vegetable, cooked|GR|128|4.5|26.6|0.1|1 cup=160;1 portion=200|
us-macaroni-vegetable-dry|Macaroni, vegetable, dry|GR|367|13.1|74.9|1|1 portion dry=75;1 cup=180|
us-millet-cooked|Millet, cooked|GR|119|3.5|23.7|1|1 cup=160;1 portion=200|
us-millet-flour|Millet flour|GR|382|10.8|75.1|4.3|1 portion dry=75;1 cup=180|
us-millet-raw|Millet, raw|GR|378|11|72.9|4.2|1 portion dry=75;1 cup=180|
us-noodles-chinese-chow-mein|Noodles, chinese, chow mein|GR|471|10.9|63.6|21.2|1 portion dry=75;1 cup=180|
us-noodles-egg-cooked|Noodles, egg, cooked|GR|138|4.5|25.2|2.1|1 cup=160;1 portion=200|
us-noodles-egg-cooked-with-added-salt|Noodles, egg, cooked, with added salt|GR|138|4.5|25.2|2.1|1 cup=160;1 portion=200|
us-noodles-egg-cooked-without-added-salt|Noodles, egg, cooked, without added salt|GR|138|4.5|25.2|2.1|1 cup=160;1 portion=200|
us-noodles-egg-dry|Noodles, egg, dry|GR|384|14.2|71.3|4.4|1 portion dry=75;1 cup=180|
us-noodles-egg-spinach-cooked|Noodles, egg, spinach, cooked|GR|132|5|24.3|1.6|1 cup=160;1 portion=200|
us-noodles-egg-spinach-dry|Noodles, egg, spinach, dry|GR|382|14.6|70.3|4.6|1 portion dry=75;1 cup=180|
us-noodles-flat-crunchy-chinese-restaurant|Noodles, flat, crunchy, Chinese restaurant|GR|521|10.3|51.9|31.7|1 portion dry=75;1 cup=180|
us-noodles-japanese-soba-cooked|Noodles, japanese, soba, cooked|GR|99|5.1|21.4|0.1|1 cup=160;1 portion=200|
us-noodles-japanese-soba-dry|Noodles, japanese, soba, dry|GR|336|14.4|74.6|0.7|1 portion dry=75;1 cup=180|
us-noodles-japanese-somen-cooked|Noodles, japanese, somen, cooked|GR|131|4|27.5|0.2|1 cup=160;1 portion=200|
us-noodles-japanese-somen-dry|Noodles, japanese, somen, dry|GR|356|11.4|74.1|0.8|1 portion dry=75;1 cup=180|
us-oat-bran-cooked|Oat bran, cooked|GR|40|3.2|11.4|0.9|1 cup=160;1 portion=200|
us-oat-bran-raw|Oat bran, raw|GR|246|17.3|66.2|7|1 portion dry=75;1 cup=180|
us-oat-flour-partially-debranned|Oat flour, partially debranned|GR|404|14.7|65.7|9.1|1 portion dry=75;1 cup=180|
us-oats|Oats|GR|389|16.9|66.3|6.9|1 portion dry=75;1 cup=180|
us-pasta-cooked-with-added-salt|Pasta, cooked, with added salt|GR|157|5.8|30.6|0.9|1 cup=160;1 portion=200|
us-pasta-cooked-without-added-salt|Pasta, cooked, without added salt|GR|158|5.8|30.9|0.9|1 cup=160;1 portion=200|
us-pasta-dry|Pasta, dry|GR|371|13|74.7|1.5|1 portion dry=75;1 cup=180|
us-pasta-fresh-refrigerated-plain|Pasta, fresh-refrigerated, plain|GR|288|11.3|54.7|2.3|1 portion dry=75;1 cup=180|
us-pasta-fresh-refrigerated-plain-cooked|Pasta, fresh-refrigerated, plain, cooked|GR|131|5.2|24.9|1.1|1 cup=160;1 portion=200|
us-pasta-fresh-refrigerated-spinach|Pasta, fresh-refrigerated, spinach|GR|289|11.3|55.7|2.1|1 portion dry=75;1 cup=180|
us-pasta-fresh-refrigerated-spinach-cooked|Pasta, fresh-refrigerated, spinach, cooked|GR|130|5.1|25|0.9|1 cup=160;1 portion=200|
us-pasta-gluten-free-brown-rice-flour-cooked-tinkya|Pasta, gluten-free, brown rice flour, cooked, Tinkyada|GR|138|3.5|32.2|1.7|1 cup=160;1 portion=200|
us-pasta-gluten-free-corn-and-rice-flour-cooked|Pasta, gluten-free, corn and rice flour, cooked|GR|179|3.2|38.1|1|1 cup=160;1 portion=200|
us-pasta-gluten-free-corn-cooked|Pasta, gluten-free, corn, cooked|GR|126|2.6|27.9|0.7|1 cup=160;1 portion=200|
us-pasta-gluten-free-corn-dry|Pasta, gluten-free, corn, dry|GR|357|7.5|79.3|2.1|1 portion dry=75;1 cup=180|
us-pasta-gluten-free-corn-flour-and-quinoa-flour-co|Pasta, gluten-free, corn flour and quinoa flour, cooked|GR|152|3.2|31.1|2.1|1 cup=160;1 portion=200|ancient harvest
us-pasta-gluten-free-rice-flour-and-rice-bran-extra|Pasta, gluten-free, rice flour and rice bran extract, cooked|GR|200|4.2|40.8|1.7|1 cup=160;1 portion=200|boles de
us-pasta-homemade-made-with-egg-cooked|Pasta, homemade, made with egg, cooked|GR|130|5.3|23.5|1.7|1 cup=160;1 portion=200|
us-pasta-homemade-made-without-egg-cooked|Pasta, homemade, made without egg, cooked|GR|124|4.4|25.1|1|1 cup=160;1 portion=200|
us-pasta-whole-wheat-cooked|Pasta, whole-wheat, cooked|GR|149|6|30.1|1.7|1 cup=160;1 portion=200|
us-pasta-whole-wheat-dry|Pasta, whole-wheat, dry|GR|352|13.9|73.4|2.9|1 portion dry=75;1 cup=180|
us-quinoa-uncooked|Quinoa, uncooked|GR|368|14.1|64.2|6.1|1 cup=160;1 portion=200|
us-rice-brown-long-grain-cooked|Rice, brown, long-grain, cooked|GR|123|2.7|25.6|1|1 cup=160;1 portion=200|
us-rice-brown-long-grain-raw|Rice, brown, long-grain, raw|GR|367|7.5|76.3|3.2|1 portion dry=75;1 cup=180|
us-rice-brown-medium-grain-cooked|Rice, brown, medium-grain, cooked|GR|112|2.3|23.5|0.8|1 cup=160;1 portion=200|
us-rice-brown-medium-grain-raw|Rice, brown, medium-grain, raw|GR|362|7.5|76.2|2.7|1 portion dry=75;1 cup=180|
us-rice-brown-parboiled-cooked-uncle-bens|Rice, brown, parboiled, cooked, Uncle Bens|GR|147|3.1|31.3|0.9|1 cup=160;1 portion=200|
us-rice-brown-parboiled-dry-uncle-ben-s|Rice, brown, parboiled, dry, Uncle Ben's|GR|370|7.6|78.7|2.8|1 cup=160;1 portion=200|
us-rice-flour-brown|Rice flour, brown|GR|363|7.2|76.5|2.8|1 portion dry=75;1 cup=180|
us-rice-flour-white|Rice flour, white|GR|366|6|80.1|1.4|1 portion dry=75;1 cup=180|
us-rice-noodles-dry|Rice noodles, dry|GR|364|6|80.2|0.6|1 portion dry=75;1 cup=180|
us-rice-white-glutinous-cooked|Rice, white, glutinous, cooked|GR|97|2|21.1|0.2|1 cup=160;1 portion=200|
us-rice-white-glutinous-uncooked|Rice, white, glutinous, uncooked|GR|370|6.8|81.7|0.6|1 cup=160;1 portion=200|
us-rice-white-long-grain-cooked|Rice, white, long-grain, cooked|GR|130|2.7|28.2|0.3|1 cup=160;1 portion=200|
us-rice-white-long-grain-cooked-without-salt|Rice, white, long-grain, cooked without salt|GR|130|2.7|28.2|0.3|1 cup=160;1 portion=200|
us-rice-white-long-grain-parboiled-cooked|Rice, white, long-grain, parboiled, cooked|GR|123|2.9|26.1|0.4|1 cup=160;1 portion=200|
us-rice-white-long-grain-parboiled-dry|Rice, white, long-grain, parboiled, dry|GR|374|7.5|80.9|1|1 cup=160;1 portion=200|
us-rice-white-long-grain-precooked-or-instant-dry|Rice, white, long-grain, precooked or instant, dry|GR|380|7.8|82.3|0.9|1 cup=160;1 portion=200|
us-rice-white-long-grain-precooked-or-instant-prepa|Rice, white, long-grain, precooked or instant, prepared|GR|124|2.2|26.8|0.5|1 cup=160;1 portion=200|
us-rice-white-long-grain-raw|Rice, white, long-grain, raw|GR|365|7.1|80|0.7|1 portion dry=75;1 cup=180|
us-rice-white-medium-grain-cooked|Rice, white, medium-grain, cooked|GR|130|2.4|28.6|0.2|1 cup=160;1 portion=200|
us-rice-white-medium-grain-raw|Rice, white, medium-grain, raw|GR|360|6.6|79.3|0.6|1 portion dry=75;1 cup=180|
us-rice-white-short-grain-cooked|Rice, white, short-grain, cooked|GR|130|2.4|28.7|0.2|1 cup=160;1 portion=200|
us-rice-white-short-grain-raw|Rice, white, short-grain, raw|GR|358|6.5|79.2|0.5|1 portion dry=75;1 cup=180|
us-rice-white-short-grain-uncooked|Rice, white, short-grain, uncooked|GR|358|6.5|79.2|0.5|1 cup=160;1 portion=200|
us-rice-white-steamed-chinese-restaurant|Rice, white, steamed, Chinese restaurant|GR|151|3.2|33.9|0.3|1 portion dry=75;1 cup=180|
us-rye-flour-dark|Rye flour, dark|GR|325|15.9|68.6|2.2|1 portion dry=75;1 cup=180|
us-rye-flour-light|Rye flour, light|GR|357|9.8|76.7|1.3|1 portion dry=75;1 cup=180|
us-rye-flour-medium|Rye flour, medium|GR|349|10.9|75.4|1.5|1 portion dry=75;1 cup=180|
us-rye-grain|Rye grain|GR|338|10.3|75.9|1.6|1 portion dry=75;1 cup=180|
us-semolina|Semolina|GR|360|12.7|72.8|1.1|1 portion dry=75;1 cup=180|
us-sorghum-flour-refined|Sorghum flour, refined|GR|357|9.5|76.9|1.2|1 portion dry=75;1 cup=180|
us-sorghum-flour-whole-grain|Sorghum flour, whole-grain|GR|359|8.4|76.6|3.3|1 portion dry=75;1 cup=180|
us-sorghum-grain|Sorghum grain|GR|329|10.6|72.1|3.5|1 portion dry=75;1 cup=180|
us-spaghetti-spinach-cooked|Spaghetti, spinach, cooked|GR|130|4.6|26.2|0.6|1 cup=160;1 portion=200|
us-spaghetti-spinach-dry|Spaghetti, spinach, dry|GR|372|13.4|74.8|1.6|1 portion dry=75;1 cup=180|
us-spelt-cooked|Spelt, cooked|GR|127|5.5|26.4|0.9|1 cup=160;1 portion=200|
us-spelt-uncooked|Spelt, uncooked|GR|338|14.6|70.2|2.4|1 cup=160;1 portion=200|
us-tapioca-pearl-dry|Tapioca, pearl, dry|GR|358|0.2|88.7|0|1 portion dry=75;1 cup=180|
us-teff-cooked|Teff, cooked|GR|101|3.9|19.9|0.7|1 cup=160;1 portion=200|
us-teff-uncooked|Teff, uncooked|GR|367|13.3|73.1|2.4|1 cup=160;1 portion=200|
us-triticale|Triticale|GR|336|13.1|72.1|2.1|1 portion dry=75;1 cup=180|
us-triticale-flour-whole-grain|Triticale flour, whole-grain|GR|338|13.2|73.1|1.8|1 portion dry=75;1 cup=180|
us-vital-wheat-gluten|Vital wheat gluten|GR|370|75.2|13.8|1.9|1 portion dry=75;1 cup=180|
us-wheat-durum|Wheat, durum|GR|339|13.7|71.1|2.5|1 portion dry=75;1 cup=180|
us-wheat-flours-bread|Wheat flours, bread|GR|361|12|72.5|1.7|1 portion dry=75;1 cup=180|
us-wheat-flour-white-all-purpose|Wheat flour, white, all-purpose|GR|364|10.3|76.3|1|1 portion dry=75;1 cup=180|
us-wheat-flour-white-all-purpose-bleached|Wheat flour, white, all-purpose, bleached|GR|364|10.3|76.3|1|1 portion dry=75;1 cup=180|
us-wheat-flour-white-all-purpose-calcium-fortified|Wheat flour, white, all-purpose, calcium-fortified|GR|364|10.3|76.3|1|1 portion dry=75;1 cup=180|
us-wheat-flour-white-all-purpose-self-rising|Wheat flour, white, all-purpose, self-rising|GR|354|9.9|74.2|1|1 portion dry=75;1 cup=180|
us-wheat-flour-white-all-purpose-unbleached|Wheat flour, white, all-purpose, unbleached|GR|364|10.3|76.3|1|1 portion dry=75;1 cup=180|
us-wheat-flour-white-bread|Wheat flour, white, bread|GR|361|12|72.5|1.7|1 portion dry=75;1 cup=180|
us-wheat-flour-white-cake|Wheat flour, white, cake|GR|362|8.2|78|0.9|1 portion dry=75;1 cup=180|
us-wheat-flour-white-tortilla-mix|Wheat flour, white, tortilla mix|GR|405|9.7|67.1|10.6|1 portion dry=75;1 cup=180|
us-wheat-flour-whole-grain|Wheat flour, whole-grain|GR|340|13.2|72|2.5|1 portion dry=75;1 cup=180|
us-wheat-flour-whole-grain-soft-wheat|Wheat flour, whole-grain, soft wheat|GR|332|9.6|74.5|2|1 portion dry=75;1 cup=180|
us-wheat-hard-red-spring|Wheat, hard red spring|GR|329|15.4|68|1.9|1 portion dry=75;1 cup=180|
us-wheat-hard-red-winter|Wheat, hard red winter|GR|327|12.6|71.2|1.5|1 portion dry=75;1 cup=180|
us-wheat-hard-white|Wheat, hard white|GR|342|11.3|75.9|1.7|1 portion dry=75;1 cup=180|
us-wheat-kamut-khorasan-cooked|Wheat, Kamut khorasan, cooked|GR|132|5.7|27.6|0.8|1 cup=160;1 portion=200|
us-wheat-kamut-khorasan-uncooked|Wheat, Kamut khorasan, uncooked|GR|337|14.5|70.6|2.1|1 cup=160;1 portion=200|
us-wheat-soft-red-winter|Wheat, soft red winter|GR|331|10.4|74.2|1.6|1 portion dry=75;1 cup=180|
us-wheat-soft-white|Wheat, soft white|GR|340|10.7|75.4|2|1 portion dry=75;1 cup=180|
us-wheat-sprouted|Wheat, sprouted|GR|198|7.5|42.5|1.3|1 portion dry=75;1 cup=180|
us-wild-rice-cooked|Wild rice, cooked|GR|101|4|21.3|0.3|1 cup=160;1 portion=200|
us-wild-rice-raw|Wild rice, raw|GR|357|14.7|74.9|1.1|1 portion dry=75;1 cup=180|
us-applebee-s-9-oz-house-sirloin-steak-us|Applebee's 9 oz house sirloin steak (US)|RS|189|26.9|0|9.1|1 portion=250;1 small portion=150|
us-applebee-s-chicken-tenders-from-kids-menu-us|Applebee's Chicken tenders, from kids' menu (US)|RS|296|19.3|18.4|16.2|1 portion=250;1 small portion=150|
us-applebee-s-chicken-tenders-platter-us|Applebee's Chicken tenders platter (US)|RS|297|19.6|18|16.2|1 portion=250;1 small portion=150|
us-applebee-s-chili-us|Applebee's Chili (US)|RS|157|12.6|4.6|9.8|1 portion=250;1 small portion=150|
us-applebee-s-coleslaw-us|Applebee's Coleslaw (US)|RS|120|0.8|13.2|7.1|1 portion=250;1 small portion=150|
us-applebee-s-crunchy-onion-rings-us|Applebee's Crunchy onion rings (US)|RS|356|4.6|40.2|19.6|1 portion=250;1 small portion=150|
us-applebee-s-double-crunch-shrimp-us|Applebee's Double Crunch Shrimp (US)|RS|323|12.3|26|18.9|1 portion=250;1 small portion=150|
us-applebee-s-fish-hand-battered-us|Applebee's Fish, hand battered (US)|RS|202|13.2|16.7|9.1|1 portion=250;1 small portion=150|
us-applebee-s-french-fries-us|Applebee's French fries (US)|RS|290|3.3|39.5|13.2|1 portion=250;1 small portion=150|
us-applebee-s-kraft-macaroni-cheese-from-kid-s-menu|Applebee's Kraft, Macaroni & Cheese, from kid's menu (US)|RS|143|5|21.1|4.3|1 portion=250;1 small portion=150|
us-applebee-s-mozzarella-sticks-us|Applebee's Mozzarella sticks (US)|RS|316|14.9|22.9|18.4|1 portion=250;1 small portion=150|
us-arby-s-roast-beef-sandwich-classic-us|Arby's Roast beef sandwich, classic (US)|RS|242|15.2|22.2|10.3|1 portion=250;1 small portion=150|
us-beef-corned-beef-hash-with-potato-canned|Beef, corned beef hash, with potato, canned|HM|164|8.7|9.3|10.2|1 portion=250;1 small portion=150|
us-beef-macaroni-with-tomato-sauce-frozen-entree-re|Beef macaroni with tomato sauce, frozen entree, reduced fat|HM|113|5.9|18|2|1 portion=250;1 small portion=150|
us-beef-pot-pie-frozen-entree-prepared|Beef Pot Pie, frozen entree, prepared|HM|220|7.3|22.1|11.4|1 portion=250;1 small portion=150|
us-beef-stew-canned-entree|Beef stew, canned entree|HM|99|4.4|7.9|5.5|1 portion=250;1 small portion=150|
us-burger-king-chicken-strips-us|Burger King Chicken Strips (US)|RS|292|18.2|20.5|15.3|1 portion=250;1 small portion=150|
us-burger-king-croissan-wich-with-egg-and-cheese-us|Burger King Croissan'wich with Egg and Cheese (US)|RS|283|10.4|24.8|15.8|1 portion=250;1 small portion=150|
us-burger-king-croissan-wich-with-sausage-and-chees|Burger King Croissan'wich with Sausage and Cheese (US)|RS|376|13.7|23|25.5|1 portion=250;1 small portion=150|
us-burger-king-croissan-wich-with-sausage-egg-and-c|Burger King Croissan'wich with Sausage, Egg and Cheese (US)|RS|308|12.1|15.9|21.8|1 portion=250;1 small portion=150|
us-burger-king-double-cheeseburger-us|Burger King Double Cheeseburger (US)|RS|282|16.8|17.4|16.1|1 portion=250;1 small portion=150|
us-burger-king-double-whopper-no-cheese-us|Burger King Double Whopper, no cheese (US)|RS|252|13.9|13.7|15.7|1 portion=250;1 small portion=150|
us-burger-king-double-whopper-with-cheese-us|Burger King Double Whopper, with cheese (US)|RS|266|14.5|13.5|17.1|1 portion=250;1 small portion=150|
us-burger-king-french-fries-us|Burger King French fries (US)|RS|280|3.2|38.7|12.5|1 portion=250;1 small portion=150|
us-burger-king-french-toast-sticks-us|Burger King French toast sticks (US)|RS|349|6|41.2|17.7|1 portion=250;1 small portion=150|
us-burger-king-hamburger-us|Burger King Hamburger (US)|RS|261|14.9|26.8|10.6|1 portion=250;1 small portion=150|
us-burger-king-hash-brown-rounds-us|Burger King Hash Brown Rounds (US)|RS|302|2.8|29.4|19.3|1 portion=250;1 small portion=150|
us-burger-king-onion-rings-us|Burger King Onion Rings (US)|RS|417|3.9|43.6|25.2|1 portion=250;1 small portion=150|
us-burger-king-premium-fish-sandwich-us|Burger King Premium Fish Sandwich (US)|RS|260|10.3|26.7|12.5|1 portion=250;1 small portion=150|
us-burger-king-vanilla-shake-us|Burger King Vanilla Shake (US)|RS|168|3.2|19|8.7|1 portion=250;1 small portion=150|
us-burger-king-whopper-no-cheese-us|Burger King Whopper, no cheese (US)|RS|233|10.7|18.6|12.8|1 portion=250;1 small portion=150|
us-burrito-bean-and-cheese-frozen|Burrito, bean and cheese, frozen|HM|221|7.1|34|6.3|1 portion=250;1 small portion=150|
us-burrito-beef-and-bean-frozen|Burrito, beef and bean, frozen|HM|239|7.3|30.8|9.6|1 portion=250;1 small portion=150|
us-burrito-beef-and-bean-microwaved|Burrito, beef and bean, microwaved|HM|298|8.7|39|11.9|1 portion=250;1 small portion=150|
us-carrabba-s-cheese-ravioli-with-marinara-sauce-us|Carrabba's Cheese ravioli with marinara sauce (US)|RS|156|8|17.6|6|1 portion=250;1 small portion=150|grill italian
us-carrabba-s-chicken-parmesan-without-cavatappi-pa|Carrabba's Chicken parmesan without cavatappi pasta (US)|RS|206|19|7.8|11|1 portion=250;1 small portion=150|grill italian
us-carrabba-s-lasagne-us|Carrabba's Lasagne (US)|RS|191|10.5|12.4|11.1|1 portion=250;1 small portion=150|grill italian
us-carrabba-s-spaghetti-with-meat-sauce-us|Carrabba's Spaghetti with meat sauce (US)|RS|122|5.9|15.7|3.9|1 portion=250;1 small portion=150|grill italian
us-carrabba-s-spaghetti-with-pomodoro-sauce-us|Carrabba's Spaghetti with pomodoro sauce (US)|RS|104|3.4|18.6|1.8|1 portion=250;1 small portion=150|grill italian
us-chicken-nuggets-dark-and-white-meat-precooked-fr|Chicken, nuggets, dark and white meat, precooked, frozen|HM|268|12|16.1|17.3|1 portion=250;1 small portion=150|
us-chicken-nuggets-white-meat-precooked-frozen|Chicken, nuggets, white meat, precooked, frozen|HM|261|14.4|16.2|15.4|1 portion=250;1 small portion=150|
us-chicken-pot-pie-frozen-entree-prepared|Chicken pot pie, frozen entree, prepared|HM|204|5.1|19.2|11.9|1 portion=250;1 small portion=150|
us-chicken-tenders-breaded-frozen-prepared|Chicken tenders, breaded, frozen, prepared|HM|240|14.6|14.9|13.6|1 portion=250;1 small portion=150|
us-chicken-thighs-frozen-breaded-reheated|Chicken, thighs, frozen, breaded, reheated|HM|334|18.7|14.2|22.5|1 portion=250;1 small portion=150|
us-chick-fil-a-chicken-sandwich-us|Chick-fil-A Chicken sandwich (US)|RS|249|16.3|20.9|11.2|1 portion=250;1 small portion=150|
us-chick-fil-a-chick-n-strips-us|Chick-fil-A Chick-n-Strips (US)|RS|228|21.4|10.4|11.2|1 portion=250;1 small portion=150|
us-chick-fil-a-hash-browns-us|Chick-fil-A Hash browns (US)|RS|301|3|30.5|18.5|1 portion=250;1 small portion=150|
us-chili-con-carne-with-beans-canned-entree|Chili con carne with beans, canned entree|HM|107|5.8|13.1|3.5|1 portion=250;1 small portion=150|
us-chili-no-beans-canned-entree|Chili, no beans, canned entree|HM|118|7.5|6.1|7.1|1 portion=250;1 small portion=150|
us-chili-with-beans-microwavable-bowls|Chili with beans, microwavable bowls|HM|100|5.9|10.9|3.7|1 portion=250;1 small portion=150|
us-corn-dogs-frozen-prepared|Corn dogs, frozen, prepared|HM|250|8.6|27|12|1 portion=250;1 small portion=150|
us-cracker-barrel-chicken-tenderloin-platter-fried-|Cracker Barrel Chicken tenderloin platter, fried (US)|RS|293|18.1|20.3|15.5|1 portion=250;1 small portion=150|
us-cracker-barrel-coleslaw-us|Cracker Barrel Coleslaw (US)|RS|175|0.9|13|13.2|1 portion=250;1 small portion=150|
us-cracker-barrel-country-fried-shrimp-platter-us|Cracker Barrel Country fried shrimp platter (US)|RS|287|12.6|21.4|16.8|1 portion=250;1 small portion=150|
us-cracker-barrel-farm-raised-catfish-platter-us|Cracker Barrel Farm raised catfish platter (US)|RS|266|22.9|5.3|17.1|1 portion=250;1 small portion=150|
us-cracker-barrel-grilled-sirloin-steak-us|Cracker Barrel Grilled sirloin steak (US)|RS|203|31.5|0|8.5|1 portion=250;1 small portion=150|
us-cracker-barrel-macaroni-n-cheese-us|Cracker Barrel Macaroni n' cheese (US)|RS|194|6.5|15.6|11.8|1 portion=250;1 small portion=150|
us-cracker-barrel-macaroni-n-cheese-plate-from-kid-|Cracker Barrel Macaroni n' cheese plate, from kid's menu (US)|RS|192|6.5|15.6|11.5|1 portion=250;1 small portion=150|
us-cracker-barrel-onion-rings-thick-cut-us|Cracker Barrel Onion rings, thick-cut (US)|RS|327|4.8|41|16|1 portion=250;1 small portion=150|
us-cracker-barrel-steak-fries-us|Cracker Barrel Steak fries (US)|RS|255|3.3|30.9|13.2|1 portion=250;1 small portion=150|
us-denny-s-chicken-nuggets-star-shaped-from-kid-s-m|Denny's Chicken nuggets, star shaped, from kid's menu (US)|RS|377|16.3|13.6|28.6|1 portion=250;1 small portion=150|
us-denny-s-chicken-strips-us|Denny's Chicken strips (US)|RS|295|19.2|22|14.5|1 portion=250;1 small portion=150|
us-denny-s-coleslaw-us|Denny's Coleslaw (US)|RS|183|1|10.9|15|1 portion=250;1 small portion=150|
us-denny-s-fish-fillet-battered-or-breaded-fried-us|Denny's Fish fillet, battered or breaded, fried (US)|RS|234|13.8|17.4|12.2|1 portion=250;1 small portion=150|
us-denny-s-french-fries-us|Denny's French fries (US)|RS|282|3.4|35.2|14.1|1 portion=250;1 small portion=150|
us-denny-s-golden-fried-shrimp-us|Denny's Golden fried shrimp (US)|RS|319|13.9|20.9|20|1 portion=250;1 small portion=150|
us-denny-s-hash-browns-us|Denny's Hash browns (US)|RS|197|2.5|26.6|9|1 portion=250;1 small portion=150|
us-denny-s-macaroni-cheese-from-kid-s-menu-us|Denny's Macaroni & cheese, from kid's menu (US)|RS|150|5.2|21.2|4.9|1 portion=250;1 small portion=150|
us-denny-s-mozzarella-cheese-sticks-us|Denny's Mozzarella cheese sticks (US)|RS|324|13.6|27.2|17.9|1 portion=250;1 small portion=150|
us-denny-s-onion-rings-us|Denny's Onion rings (US)|RS|385|5.3|41.1|22.2|1 portion=250;1 small portion=150|
us-denny-s-spaghetti-and-meatballs-us|Denny's Spaghetti and meatballs (US)|RS|170|7.8|15.5|8.5|1 portion=250;1 small portion=150|
us-denny-s-top-sirloin-steak-us|Denny's Top sirloin steak (US)|RS|182|28.9|0.1|7.3|1 portion=250;1 small portion=150|
us-digiorno-pizza-cheese-topping-cheese-stuffed-cru|Digiorno Pizza, cheese topping, cheese stuffed crust, frozen|HM|279|13.5|29.9|11.7|1 portion=250;1 small portion=150|baked
us-digiorno-pizza-cheese-topping-rising-crust-froze|Digiorno Pizza, cheese topping, rising crust, frozen, baked|HM|256|12.8|31.8|8.6|1 portion=250;1 small portion=150|
us-digiorno-pizza-cheese-topping-thin-crispy-crust-|Digiorno Pizza, cheese topping, thin crispy crust, frozen, baked|HM|247|13|26.5|9.9|1 portion=250;1 small portion=150|
us-digiorno-pizza-pepperoni-topping-cheese-stuffed-|Digiorno Pizza, pepperoni topping, cheese stuffed crust, frozen|HM|279|13.9|29.5|11.7|1 portion=250;1 small portion=150|baked
us-digiorno-pizza-pepperoni-topping-rising-crust-fr|Digiorno Pizza, pepperoni topping, rising crust, frozen, baked|HM|265|12.5|31.2|10.1|1 portion=250;1 small portion=150|
us-digiorno-pizza-pepperoni-topping-thin-crispy-cru|Digiorno Pizza, pepperoni topping, thin crispy crust, frozen|HM|283|13.2|28.7|12.9|1 portion=250;1 small portion=150|baked
us-digiorno-pizza-supreme-topping-rising-crust-froz|Digiorno Pizza, supreme topping, rising crust, frozen, baked|HM|255|11.7|27.9|10.7|1 portion=250;1 small portion=150|
us-digiorno-pizza-supreme-topping-thin-crispy-crust|Digiorno Pizza, supreme topping, thin crispy crust, frozen|HM|255|11.4|28.1|10.8|1 portion=250;1 small portion=150|baked
us-domino-s-14-cheese-pizza-classic-hand-tossed-cru|Domino's 14" Cheese Pizza, Classic Hand-Tossed Crust (US)|RS|257|10.8|33.2|9|1 portion=250;1 small portion=150|
us-domino-s-14-cheese-pizza-crunchy-thin-crust-us|Domino's 14" Cheese Pizza, Crunchy Thin Crust (US)|RS|298|12.3|28.2|15.1|1 portion=250;1 small portion=150|
us-domino-s-14-cheese-pizza-ultimate-deep-dish-crus|Domino's 14" Cheese Pizza, Ultimate Deep Dish Crust (US)|RS|265|10.8|33.5|9.8|1 portion=250;1 small portion=150|
us-domino-s-14-extravaganzza-feast-pizza-us|Domino's 14" Extravaganzza Feast Pizza (US)|RS|244|10.3|25.7|11.1|1 portion=250;1 small portion=150|classic crust hand tossed
us-domino-s-14-pepperoni-pizza-classic-hand-tossed-|Domino's 14" Pepperoni Pizza, Classic Hand-Tossed Crust (US)|RS|273|11.3|31.9|11.2|1 portion=250;1 small portion=150|
us-domino-s-14-pepperoni-pizza-crunchy-thin-crust-u|Domino's 14" Pepperoni Pizza, Crunchy Thin Crust (US)|RS|328|13.9|25.4|19.1|1 portion=250;1 small portion=150|
us-domino-s-14-pepperoni-pizza-ultimate-deep-dish-c|Domino's 14" Pepperoni Pizza, Ultimate Deep Dish Crust (US)|RS|283|11.5|31.9|12.1|1 portion=250;1 small portion=150|
us-domino-s-14-sausage-pizza-classic-hand-tossed-cr|Domino's 14" Sausage Pizza, Classic Hand-Tossed Crust (US)|RS|273|11.1|31.8|11.2|1 portion=250;1 small portion=150|
us-domino-s-14-sausage-pizza-crunchy-thin-crust-us|Domino's 14" Sausage Pizza, Crunchy Thin Crust (US)|RS|319|12.8|25.3|18.5|1 portion=250;1 small portion=150|
us-domino-s-14-sausage-pizza-ultimate-deep-dish-cru|Domino's 14" Sausage Pizza, Ultimate Deep Dish Crust (US)|RS|277|11|31.2|12|1 portion=250;1 small portion=150|
us-dumpling-potato-or-cheese-filled-frozen|Dumpling, potato- or cheese-filled, frozen|HM|195|5.3|29.6|6.1|1 portion=250;1 small portion=150|
us-egg-rolls-chicken-refrigerated-heated|Egg rolls, chicken, refrigerated, heated|HM|197|10.4|28.5|4.5|1 portion=250;1 small portion=150|
us-egg-rolls-pork-refrigerated-heated|Egg rolls, pork, refrigerated, heated|HM|227|9.9|28.5|8.2|1 portion=250;1 small portion=150|
us-egg-rolls-vegetable-frozen-prepared|Egg rolls, vegetable, frozen, prepared|HM|214|6|31.8|7|1 portion=250;1 small portion=150|
us-biscuit|Biscuit|FF|370|7.1|42.8|18.9|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-cheese-topping-regular-crus|Pizza Chain, 14" pizza, cheese topping, regular crust|FF|266|11.4|33.3|9.7|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-cheese-topping-stuffed-crus|Pizza Chain, 14" pizza, cheese topping, stuffed crust|FF|274|12.2|30|11.6|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-cheese-topping-thick-crust|Pizza Chain, 14" pizza, cheese topping, thick crust|FF|271|10.8|33.2|10.5|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-cheese-topping-thin-crust|Pizza Chain, 14" pizza, cheese topping, thin crust|FF|302|12.9|31.2|14|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-meat-and-vegetable-topping|Pizza Chain, 14" pizza, meat and vegetable topping|FF|244|11|25.4|10.9|1 portion=250;1 small portion=150|crust fast food regular
us-pizza-chain-14-pizza-pepperoni-topping-regular-c|Pizza Chain, 14" pizza, pepperoni topping, regular crust|FF|282|11.7|32|11.9|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-pepperoni-topping-thick-cru|Pizza Chain, 14" pizza, pepperoni topping, thick crust|FF|287|11.5|31.8|12.6|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-pepperoni-topping-thin-crus|Pizza Chain, 14" pizza, pepperoni topping, thin crust|FF|331|14|29|17.6|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-sausage-topping-regular-cru|Pizza Chain, 14" pizza, sausage topping, regular crust|FF|280|11.5|30.6|12.4|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-sausage-topping-thick-crust|Pizza Chain, 14" pizza, sausage topping, thick crust|FF|282|11.1|30.4|12.9|1 portion=250;1 small portion=150|fast food
us-pizza-chain-14-pizza-sausage-topping-thin-crust|Pizza Chain, 14" pizza, sausage topping, thin crust|FF|321|13.4|27|17.7|1 portion=250;1 small portion=150|fast food
us-bagel-with-breakfast-steak-egg-cheese|Bagel, with breakfast steak, egg, cheese|FF|282|16|23|14.1|1 portion=250;1 small portion=150|fast foods
us-bagel-with-egg-sausage-patty-cheese|Bagel, with egg, sausage patty, cheese|FF|295|13|22.6|17|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-crispy-chicken-fillet|Biscuit, with crispy chicken fillet|FF|300|11.9|30.6|14.9|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-egg-and-bacon|Biscuit, with egg and bacon|FF|305|11.3|19.1|20.7|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-egg-and-ham|Biscuit, with egg and ham|FF|233|10.6|16.4|14.1|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-egg-and-sausage|Biscuit, with egg and sausage|FF|312|11.1|21.1|20.8|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-egg-cheese-and-bacon|Biscuit, with egg, cheese, and bacon|FF|301|12|24.4|17.5|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-ham|Biscuit, with ham|FF|342|11.9|38.8|16.3|1 portion=250;1 small portion=150|fast foods
us-biscuit-with-sausage|Biscuit, with sausage|FF|371|9.7|30|24.4|1 portion=250;1 small portion=150|fast foods
us-breadstick-soft-prepared-with-garlic-and-parmesa|Breadstick, soft, prepared with garlic and parmesan cheese|FF|343|12.2|44.5|12.9|1 portion=250;1 small portion=150|fast foods
us-breakfast-burrito-with-egg-cheese-and-sausage|Breakfast burrito, with egg, cheese, and sausage|FF|277|11.1|23|15.6|1 portion=250;1 small portion=150|fast foods
us-burrito-with-beans|Burrito, with beans|FF|206|6.5|32.9|6.2|1 portion=250;1 small portion=150|fast foods
us-burrito-with-beans-and-beef|Burrito, with beans and beef|FF|191|11.5|19.5|7.5|1 portion=250;1 small portion=150|fast foods
us-burrito-with-beans-and-cheese|Burrito, with beans and cheese|FF|205|7.4|31.2|6.1|1 portion=250;1 small portion=150|fast foods
us-burrito-with-beans-cheese-and-beef|Burrito, with beans, cheese, and beef|FF|180|7|23.4|6.8|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-double-large-patty-with-condiments|Cheeseburger, double, large patty, with condiments|FF|253|15.5|12.6|15.6|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-double-regular-patty-and-bun-with-c|Cheeseburger, double, regular patty and bun, with condiments|FF|282|16.2|18|16.2|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-double-regular-patty|Cheeseburger, double, regular patty|FF|261|11.9|21.5|14.1|1 portion=250;1 small portion=150|bun condiments decker fast foods sauce special
us-cheeseburger-double-regular-patty-with-condiment|Cheeseburger, double, regular patty, with condiments|FF|282|16.2|18|16.2|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-single-large-patty-plain|Cheeseburger, single, large patty, plain|FF|310|17.3|24.1|16|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-single-large-patty-with-condiments|Cheeseburger, single, large patty, with condiments|FF|268|13.7|17.7|15.8|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-single-regular-patty-plain|Cheeseburger, single, regular patty, plain|FF|308|16.5|28|14.7|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-single-regular-patty-with-condiment|Cheeseburger, single, regular patty, with condiments|FF|270|13.5|25.5|12.9|1 portion=250;1 small portion=150|fast foods
us-cheeseburger-single-regular-patty|Cheeseburger, single, regular patty|FF|254|13.1|25|11.5|1 portion=250;1 small portion=150|condiments fast foods vegetables
us-chicken-breaded-and-fried-pieces-plain|Chicken, breaded and fried pieces, plain|FF|307|15.9|14.9|20.4|1 portion=250;1 small portion=150|boneless fast foods
us-chicken-fillet-sandwich-plain-with-pickles|Chicken fillet sandwich, plain with pickles|FF|250|16.3|20.9|11.2|1 portion=250;1 small portion=150|fast foods
us-chicken-tenders|Chicken tenders|FF|271|19.2|17.3|14|1 portion=250;1 small portion=150|fast foods
us-crispy-chicken-bacon-and-tomato-club-sandwich-wi|Crispy chicken, bacon, and tomato club sandwich, with cheese|FF|257|15.4|22.6|11.8|1 portion=250;1 small portion=150|fast foods
us-crispy-chicken-filet-sandwich-with-lettuce-and-m|Crispy chicken filet sandwich, with lettuce and mayonnaise|FF|276|10.9|27.4|13.6|1 portion=250;1 small portion=150|fast foods
us-crispy-chicken-in-tortilla-with-lettuce-cheese|Crispy chicken in tortilla, with lettuce, cheese|FF|275|11.5|23.2|15.1|1 portion=250;1 small portion=150|fast foods ranch sauce
us-croissant-with-egg-cheese-and-bacon|Croissant, with egg, cheese, and bacon|FF|289|12.9|22.5|16.4|1 portion=250;1 small portion=150|fast foods
us-croissant-with-egg-cheese-and-ham|Croissant, with egg, cheese, and ham|FF|261|12.5|19|15|1 portion=250;1 small portion=150|fast foods
us-croissant-with-egg-cheese-and-sausage|Croissant, with egg, cheese, and sausage|FF|308|12.1|15.9|21.8|1 portion=250;1 small portion=150|fast foods
us-egg-scrambled|Egg, scrambled|FF|212|13.8|2.1|16.2|1 portion=250;1 small portion=150|fast foods
us-english-muffin-with-cheese-and-sausage|English muffin, with cheese and sausage|FF|338|13.3|25.3|20.7|1 portion=250;1 small portion=150|fast foods
us-english-muffin-with-egg-cheese-and-canadian-baco|English muffin, with egg, cheese, and canadian bacon|FF|228|13.6|21.7|9.7|1 portion=250;1 small portion=150|fast foods
us-english-muffin-with-egg-cheese-and-sausage|English muffin, with egg, cheese, and sausage|FF|286|13.4|17.4|18.1|1 portion=250;1 small portion=150|fast foods
us-fish-sandwich-with-tartar-sauce|Fish sandwich, with tartar sauce|FF|257|10.3|26.7|12.5|1 portion=250;1 small portion=150|fast foods
us-fish-sandwich-with-tartar-sauce-and-cheese|Fish sandwich, with tartar sauce and cheese|FF|279|11.3|26.4|14.6|1 portion=250;1 small portion=150|fast foods
us-french-toast-sticks|French toast sticks|FF|340|6|41.2|17.7|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-breast-meat-and-skin-and-breading|Fried Chicken, Breast, meat and skin and breading|FF|230|23.5|6|12.4|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-breast-meat-only-skin-and-breading|Fried Chicken, Breast, meat only, skin and breading removed|FF|153|27.9|0|4.5|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-drumstick-meat-and-skin-with-bread|Fried Chicken, Drumstick, meat and skin with breading|FF|267|21.1|7.6|16.9|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-drumstick-meat-only-skin-and-bread|Fried Chicken, Drumstick, meat only, skin and breading removed|FF|172|26.2|0|7.4|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-skin-and-breading-from-all-pieces|Fried Chicken, Skin and breading from all pieces|FF|398|14.1|19.6|29.2|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-thigh-meat-and-skin-and-breading|Fried Chicken, Thigh, meat and skin and breading|FF|274|19.2|8.7|18.1|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-thigh-meat-only-skin-and-breading-|Fried Chicken, Thigh, meat only, skin and breading removed|FF|178|23.2|0.2|9.4|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-wing-meat-and-skin-and-breading|Fried Chicken, Wing, meat and skin and breading|FF|310|21.1|11.2|20.1|1 portion=250;1 small portion=150|fast foods
us-fried-chicken-wing-meat-only-skin-and-breading-r|Fried Chicken, Wing, meat only, skin and breading removed|FF|215|28.8|2.1|10.2|1 portion=250;1 small portion=150|fast foods
us-griddle-cake-sandwich-egg-cheese-and-bacon|Griddle cake sandwich, egg, cheese, and bacon|FF|272|12|26.2|13.2|1 portion=250;1 small portion=150|fast foods
us-griddle-cake-sandwich-egg-cheese-and-sausage|Griddle cake sandwich, egg, cheese, and sausage|FF|291|10.8|22|17.7|1 portion=250;1 small portion=150|fast foods
us-griddle-cake-sandwich-sausage|Griddle cake sandwich, sausage|FF|318|8.4|31.3|17.8|1 portion=250;1 small portion=150|fast foods
us-grilled-chicken-bacon-and-tomato-club-sandwich-w|Grilled chicken, bacon and tomato club sandwich, with cheese|FF|220|17.2|19.9|8.1|1 portion=250;1 small portion=150|fast foods lettuce
us-grilled-chicken-filet-sandwich-with-lettuce-toma|Grilled chicken filet sandwich, with lettuce, tomato and spread|FF|182|17.3|16.8|4.6|1 portion=250;1 small portion=150|fast foods
us-grilled-chicken-in-tortilla-with-lettuce-cheese|Grilled chicken in tortilla, with lettuce, cheese|FF|222|13.8|18.4|10.3|1 portion=250;1 small portion=150|fast foods ranch sauce
us-hamburger-double-large-patty-with-condiments|Hamburger, double, large patty, with condiments|FF|252|13.9|13.7|15.7|1 portion=250;1 small portion=150|fast foods
us-hamburger-large-single-patty-with-condiments|Hamburger, large, single patty, with condiments|FF|256|15.7|22.1|11.6|1 portion=250;1 small portion=150|fast foods
us-hamburger-single-large-patty-with-condiments|Hamburger, single, large patty, with condiments|FF|226|11.3|17.3|12.4|1 portion=250;1 small portion=150|fast foods
us-hamburger-single-regular-patty|Hamburger, single, regular patty|FF|259|12.2|22.7|13.3|1 portion=250;1 small portion=150|bun condiments decker double fast foods sauce special
us-hamburger-single-regular-patty-plain|Hamburger, single, regular patty, plain|FF|297|16.5|31.5|12|1 portion=250;1 small portion=150|fast foods
us-hamburger-single-regular-patty-with-condiments|Hamburger, single, regular patty, with condiments|FF|263|13.3|29.6|10.2|1 portion=250;1 small portion=150|fast foods
us-miniature-cinnamon-rolls|Miniature cinnamon rolls|FF|403|7|53.4|18|1 portion=250;1 small portion=150|fast foods
us-nachos-with-cheese-beans-ground-beef|Nachos, with cheese, beans, ground beef|FF|219|6.2|21.4|12.5|1 portion=250;1 small portion=150|fast foods
us-onion-rings-breaded-and-fried|Onion rings, breaded and fried|FF|411|3.9|43.6|25.2|1 portion=250;1 small portion=150|fast foods
us-potatoes-hash-browns-round-pieces-or-patty|Potatoes, hash browns, round pieces or patty|FF|272|2.6|28.9|17|1 portion=250;1 small portion=150|fast foods
us-potato-french-fried-in-vegetable-oil|Potato, french fried in vegetable oil|FF|312|3.4|41.4|14.7|1 portion=250;1 small portion=150|fast foods
us-potato-mashed|Potato, mashed|FF|89|1.7|14.7|2.8|1 portion=250;1 small portion=150|fast foods
us-quesadilla-with-chicken|Quesadilla, with chicken|FF|294|15.1|24|15.3|1 portion=250;1 small portion=150|fast foods
us-roast-beef-sandwich-plain|Roast beef sandwich, plain|FF|244|15.2|22.2|10.3|1 portion=250;1 small portion=150|fast foods
us-shrimp-breaded-and-fried|Shrimp, breaded and fried|FF|308|7.8|28|18.9|1 portion=250;1 small portion=150|fast foods
us-strawberry-banana-smoothie-made-with-ice-and-low|Strawberry banana smoothie made with ice and low-fat yogurt|FF|65|0.9|15.1|0.1|1 portion=250;1 small portion=150|fast foods
us-submarine-sandwich-bacon-lettuce-and-tomato-on-w|Submarine sandwich, bacon, lettuce, and tomato on white bread|FF|205|10.1|26.7|6.4|1 portion=250;1 small portion=150|fast foods
us-submarine-sandwich-cold-cut-on-white-bread-with-|Submarine sandwich, cold cut on white bread with lettuce|FF|213|10.5|20.4|10|1 portion=250;1 small portion=150|fast foods tomato
us-submarine-sandwich-ham-on-white-bread-with-lettu|Submarine sandwich, ham on white bread with lettuce and tomato|FF|151|9.1|22.9|2.5|1 portion=250;1 small portion=150|fast foods
us-submarine-sandwich-meatball-marinara-on-white-br|Submarine sandwich, meatball marinara on white bread|FF|219|9.8|26|8.5|1 portion=250;1 small portion=150|fast foods
us-submarine-sandwich-oven-roasted-chicken-on-white|Submarine sandwich, oven roasted chicken on white bread|FF|157|10.8|21.4|3.2|1 portion=250;1 small portion=150|fast foods lettuce tomato
us-submarine-sandwich-roast-beef-on-white-bread-wit|Submarine sandwich, roast beef on white bread with lettuce|FF|156|12.2|20.3|2.7|1 portion=250;1 small portion=150|fast foods tomato
us-submarine-sandwich-steak-and-cheese-on-white-bre|Submarine sandwich, steak and cheese on white bread with cheese|FF|183|12.3|21.5|5.3|1 portion=250;1 small portion=150|fast foods lettuce tomato
us-submarine-sandwich-sweet-onion-chicken-teriyaki-|Submarine sandwich, sweet onion chicken teriyaki on white bread|FF|155|10.9|22.5|2.4|1 portion=250;1 small portion=150|fast foods lettuce sauce tomato
us-submarine-sandwich-tuna-on-white-bread-with-lett|Submarine sandwich, tuna on white bread with lettuce and tomato|FF|218|12.3|16|12|1 portion=250;1 small portion=150|fast foods
us-submarine-sandwich-turkey-breast-on-white-bread-|Submarine sandwich, turkey breast on white bread with lettuce|FF|147|9.1|22.4|2.3|1 portion=250;1 small portion=150|fast foods tomato
us-submarine-sandwich-turkey|Submarine sandwich, turkey|FF|146|10.7|20.4|2.4|1 portion=250;1 small portion=150|beef bread fast foods ham lettuce on roast
us-sundae-caramel|Sundae, caramel|FF|196|4.7|31.8|6|1 portion=250;1 small portion=150|fast foods
us-sundae-hot-fudge|Sundae, hot fudge|FF|180|3.6|30.2|5.5|1 portion=250;1 small portion=150|fast foods
us-sundae-strawberry|Sundae, strawberry|FF|175|4.1|29.2|5.1|1 portion=250;1 small portion=150|fast foods
us-taco-with-beef-cheese-and-lettuce-hard-shell|Taco with beef, cheese and lettuce, hard shell|FF|226|8.9|19.9|12.7|1 portion=250;1 small portion=150|fast foods
us-taco-with-beef-cheese-and-lettuce-soft|Taco with beef, cheese and lettuce, soft|FF|206|9.3|20.2|9.8|1 portion=250;1 small portion=150|fast foods
us-taco-with-chicken-lettuce-and-cheese-soft|Taco with chicken, lettuce and cheese, soft|FF|189|13.3|19.7|6.4|1 portion=250;1 small portion=150|fast foods
us-vanilla-light-soft-serve-ice-cream-with-cone|Vanilla, light, soft-serve ice cream, with cone|FF|163|4.2|26.4|4.9|1 portion=250;1 small portion=150|fast foods
us-hot-pockets-croissant-pockets-chicken-broccoli|Hot Pockets, Croissant Pockets Chicken, Broccoli|HM|235|8.9|30.4|8.6|1 portion=250;1 small portion=150|cheddar frozen sandwich stuffed
us-hot-pockets-ham-n-cheese-stuffed-sandwich-frozen|Hot Pockets Ham 'N Cheese Stuffed Sandwich, frozen|HM|270|9.2|24.7|15|1 portion=250;1 small portion=150|
us-hot-pockets-meatballs-mozzarella-stuffed-sandwic|Hot Pockets, meatballs & mozzarella stuffed sandwich, frozen|HM|252|9.3|30.7|10.2|1 portion=250;1 small portion=150|
us-jimmy-dean-sausage-egg-and-cheese-breakfast-bisc|Jimmy Dean, Sausage, Egg, and Cheese Breakfast Biscuit, frozen|HM|328|9.3|21.1|22.9|1 portion=250;1 small portion=150|
us-kfc-coleslaw-us|KFC Coleslaw (US)|RS|144|0.9|15.7|8.6|1 portion=250;1 small portion=150|
us-kfc-crispy-chicken-strips-us|KFC Crispy Chicken Strips (US)|RS|274|20.3|13.7|15.4|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-extra-crispy-breast-us|KFC Fried Chicken, Extra Crispy, Breast (US)|RS|268|21.2|8.5|16.6|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-extra-crispy-breast-meat-only-|KFC Fried Chicken, Extra Crispy, Breast, meat only (US)|RS|153|27.3|0.3|4.8|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-extra-crispy-drumstick-us|KFC Fried Chicken, Extra Crispy, Drumstick (US)|RS|274|20.6|8|17.7|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-extra-crispy-drumstick-meat-on|KFC Fried Chicken, Extra Crispy, Drumstick, meat only (US)|RS|170|25.9|0|7.4|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-extra-crispy-skin-and-breading|KFC Fried Chicken, Extra Crispy, Skin and Breading (US)|RS|464|11|22.5|36.6|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-extra-crispy-thigh-us|KFC Fried Chicken, Extra Crispy, Thigh (US)|RS|309|17.2|10.3|22.1|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-extra-crispy-thigh-meat-only-u|KFC Fried Chicken, Extra Crispy, Thigh, meat only (US)|RS|179|22.4|0|10|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-extra-crispy-wing-us|KFC Fried Chicken, Extra Crispy, Wing (US)|RS|337|20.8|11.7|23|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-extra-crispy-wing-meat-only-us|KFC Fried Chicken, Extra Crispy, Wing, meat only (US)|RS|236|28.7|3|12.1|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-original-recipe-breast-us|KFC Fried Chicken, Original Recipe, Breast (US)|RS|231|21.9|6.3|13.1|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-original-recipe-breast-meat-on|KFC Fried Chicken, Original Recipe, Breast, meat only (US)|RS|149|26.9|0|4.6|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-original-recipe-drumstick-us|KFC Fried Chicken, Original Recipe, Drumstick (US)|RS|239|22.3|5.4|14.2|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-original-recipe-drumstick-meat|KFC Fried Chicken, Original Recipe, Drumstick, meat only (US)|RS|175|26.3|0.1|7.7|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-original-recipe-skin-and-bread|KFC Fried Chicken, Original Recipe, Skin and Breading (US)|RS|384|14.2|18.8|28|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-original-recipe-thigh-us|KFC Fried Chicken, Original Recipe, Thigh (US)|RS|269|18.9|8.5|17.7|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-original-recipe-thigh-meat-onl|KFC Fried Chicken, Original Recipe, Thigh, meat only (US)|RS|175|22.8|0|9.3|1 portion=250;1 small portion=150|
us-kfc-fried-chicken-original-recipe-wing-us|KFC Fried Chicken, Original Recipe, Wing (US)|RS|297|21.7|9.9|18.9|1 portion=250;1 small portion=150|breading meat skin
us-kfc-fried-chicken-original-recipe-wing-meat-only|KFC Fried Chicken, Original Recipe, Wing, meat only (US)|RS|216|28.7|1.8|10.5|1 portion=250;1 small portion=150|
us-kfc-popcorn-chicken-us|KFC Popcorn Chicken (US)|RS|351|17.7|21.2|21.7|1 portion=250;1 small portion=150|
us-lasagna-cheese-frozen-prepared|Lasagna, cheese, frozen, prepared|HM|130|6.5|13.8|5.3|1 portion=250;1 small portion=150|
us-lasagna-vegetable-frozen-baked|Lasagna, Vegetable, frozen, baked|HM|139|6.9|14.2|6|1 portion=250;1 small portion=150|
us-lasagna-with-meat-sauce-frozen-entree|Lasagna with meat & sauce, frozen entree|HM|124|6.6|14.4|4.4|1 portion=250;1 small portion=150|
us-lasagna-with-meat-sauce-frozen-prepared|Lasagna with meat sauce, frozen, prepared|HM|135|7.3|15.4|4.9|1 portion=250;1 small portion=150|
us-lasagna-with-meat-sauce-low-fat-frozen-entree|Lasagna with meat & sauce, low-fat, frozen entree|HM|101|6.8|13.5|2.2|1 portion=250;1 small portion=150|
us-lean-pockets-ham-n-cheddar|Lean Pockets, Ham N Cheddar|HM|230|10.3|32.5|6.5|1 portion=250;1 small portion=150|
us-lean-pockets-meatballs-mozzarella|Lean Pockets, Meatballs & Mozzarella|HM|240|10.5|32.3|7.7|1 portion=250;1 small portion=150|
us-light-ice-cream-soft-serve-blended-with-cookie-p|Light Ice Cream, soft serve, blended with cookie pieces|HM|169|4|25.6|5.7|1 portion=250;1 small portion=150|
us-light-ice-cream-soft-serve-blended-with-milk-cho|Light Ice Cream, soft serve, blended with milk chocolate candies|HM|182|4|26.8|6.5|1 portion=250;1 small portion=150|
us-little-caesars-14-cheese-pizza-large-deep-dish-c|Little Caesars 14" Cheese Pizza, Large Deep Dish Crust (US)|RS|263|12.6|30.1|10.2|1 portion=250;1 small portion=150|
us-little-caesars-14-cheese-pizza-thin-crust-us|Little Caesars 14" Cheese Pizza, Thin Crust (US)|RS|309|16.2|22.9|17|1 portion=250;1 small portion=150|
us-little-caesars-14-original-round-cheese-pizza-re|Little Caesars 14" Original Round Cheese Pizza, Regular Crust (US)|RS|265|13.4|31.5|9.5|1 portion=250;1 small portion=150|
us-little-caesars-14-original-round-meat-and-vegeta|Little Caesars 14" Original Round Meat and Vegetable Pizza (US)|RS|243|12.1|23.1|11.4|1 portion=250;1 small portion=150|crust regular
us-little-caesars-14-original-round-pepperoni-pizza|Little Caesars 14" Original Round Pepperoni Pizza, Regular Crust (US)|RS|273|13.6|31|10.5|1 portion=250;1 small portion=150|
us-little-caesars-14-pepperoni-pizza-large-deep-dis|Little Caesars 14" Pepperoni Pizza, Large Deep Dish Crust (US)|RS|265|12.9|29|10.8|1 portion=250;1 small portion=150|
us-macaroni-and-cheese-box-mix-with-cheese-sauce-pr|Macaroni and cheese, box mix with cheese sauce, prepared|HM|164|6.7|23.1|5|1 portion=250;1 small portion=150|
us-macaroni-and-cheese-canned-entree|Macaroni and Cheese, canned entree|HM|82|3.4|11.5|2.5|1 portion=250;1 small portion=150|
us-macaroni-and-cheese-canned-microwavable|Macaroni and Cheese, canned, microwavable|HM|134|6|14|6|1 portion=250;1 small portion=150|
us-macaroni-and-cheese-dinner-with-dry-sauce-mix-bo|Macaroni and cheese dinner with dry sauce mix, boxed, uncooked|HM|379|13.9|70.1|4.8|1 portion=250;1 small portion=150|
us-macaroni-and-cheese-frozen-entree|Macaroni and cheese, frozen entree|HM|149|5.6|17.3|6.4|1 portion=250;1 small portion=150|
us-mcdonald-s-bacon-ranch-salad-with-crispy-chicken|McDonald's Bacon Ranch Salad with Crispy Chicken (US)|RS|122|8.8|6.1|6.3|1 portion=250;1 small portion=150|
us-mcdonald-s-bacon-ranch-salad-with-grilled-chicke|McDonald's Bacon Ranch Salad with Grilled Chicken (US)|RS|81|10.3|3.6|3.1|1 portion=250;1 small portion=150|
us-mcdonald-s-bacon-ranch-salad-without-chicken-us|McDonald's Bacon Ranch Salad without chicken (US)|RS|61|4.1|4.2|3.6|1 portion=250;1 small portion=150|
us-mcdonald-s-big-breakfast-us|McDonald's Big Breakfast (US)|RS|285|10.2|17.5|19.4|1 portion=250;1 small portion=150|
us-mcdonald-s-cheeseburger-us|McDonald's Cheeseburger (US)|RS|263|13|27.8|11.8|1 portion=250;1 small portion=150|
us-mcdonald-s-chicken-mcnuggets-us|McDonald's Chicken McNUGGETS (US)|RS|302|15.8|15.1|19.8|1 portion=250;1 small portion=150|
us-mcdonald-s-deluxe-breakfast-with-syrup-and-marga|McDonald's Deluxe Breakfast, with syrup and margarine (US)|RS|285|7.6|29.5|15.2|1 portion=250;1 small portion=150|
us-mcdonald-s-french-fries-us|McDonald's French fries (US)|RS|323|3.4|42.6|15.5|1 portion=250;1 small portion=150|
us-mcdonald-s-fruit-n-yogurt-parfait-us|McDonald's Fruit 'n Yogurt Parfait (US)|RS|105|2.7|20.7|1.3|1 portion=250;1 small portion=150|
us-mcdonald-s-hamburger-us|McDonald's Hamburger (US)|RS|264|12.9|30.3|10.1|1 portion=250;1 small portion=150|
us-mcdonald-s-hotcakes-and-sausage-us|McDonald's Hotcakes and Sausage (US)|RS|294|7.8|37.6|12.5|1 portion=250;1 small portion=150|
us-mcdonald-s-hotcakes-plain-us|McDonald's Hotcakes (plain) (US)|RS|228|6|38.3|5.8|1 portion=250;1 small portion=150|
us-mcdonald-s-hotcakes-us|McDonald's Hotcakes (US)|RS|272|4.1|46.1|8.1|1 portion=250;1 small portion=150|margarine pats syrup
us-mcdonald-s-hot-caramel-sundae-us|McDonald's Hot Caramel Sundae (US)|RS|188|3.6|33.4|4.9|1 portion=250;1 small portion=150|
us-mcdonald-s-mcchicken-sandwich-us|McDonald's McCHICKEN Sandwich (US)|RS|273|10.4|28|13.2|1 portion=250;1 small portion=150|
us-mcdonald-s-mcflurry-with-m-m-s-candies-us|McDonald's McFLURRY with M&m's Candies (US)|RS|177|4|26.8|6.5|1 portion=250;1 small portion=150|
us-mcdonald-s-mcflurry-with-oreo-cookies-us|McDonald's McFLURRY with Oreo cookies (US)|RS|165|4|25.6|5.7|1 portion=250;1 small portion=150|
us-mcdonald-s-quarter-pounder-us|McDonald's Quarter Pounder (US)|RS|244|14.1|22.2|11.6|1 portion=250;1 small portion=150|
us-mcdonald-s-ranch-snack-wrap-crispy-us|McDonald's Ranch Snack Wrap, Crispy (US)|RS|275|11.5|23.2|15.1|1 portion=250;1 small portion=150|
us-mcdonald-s-ranch-snack-wrap-grilled-us|McDonald's Ranch Snack Wrap, Grilled (US)|RS|222|13.8|18.4|10.3|1 portion=250;1 small portion=150|
us-mcdonald-s-sausage-biscuit-with-egg-us|McDonald's Sausage Biscuit with Egg (US)|RS|311|11.3|19.3|22.3|1 portion=250;1 small portion=150|
us-mcdonald-s-sausage-burrito-us|McDonald's Sausage Burrito (US)|RS|277|11.1|23|15.6|1 portion=250;1 small portion=150|
us-mcdonald-s-sausage-egg-cheese-mcgriddles-us|McDonald's Sausage, Egg & Cheese McGRIDDLES (US)|RS|283|10.8|22|17.7|1 portion=250;1 small portion=150|
us-mcdonald-s-side-salad-us|McDonald's Side Salad (US)|RS|20|1|4.3|0.2|1 portion=250;1 small portion=150|
us-mcdonald-s-southern-style-chicken-biscuit-us|McDonald's Southern Style Chicken Biscuit (US)|RS|304|11.9|30.6|14.9|1 portion=250;1 small portion=150|
us-mcdonald-s-strawberry-sundae-us|McDonald's Strawberry Sundae (US)|RS|158|3.2|28.1|4|1 portion=250;1 small portion=150|
us-mcdonald-s-vanilla-reduced-fat-ice-cream-cone-us|McDonald's Vanilla Reduced Fat Ice Cream Cone (US)|RS|162|4.2|26.4|4.9|1 portion=250;1 small portion=150|
us-olive-garden-cheese-ravioli-with-marinara-sauce-|Olive Garden Cheese ravioli with marinara sauce (US)|RS|159|7.4|19.6|5.6|1 portion=250;1 small portion=150|
us-olive-garden-chicken-parmigiana-without-pasta-us|Olive Garden Chicken parmigiana without pasta (US)|RS|211|15.3|12.3|11.2|1 portion=250;1 small portion=150|
us-olive-garden-lasagna-classico-us|Olive Garden Lasagna classico (US)|RS|184|11.3|10.3|10.8|1 portion=250;1 small portion=150|
us-olive-garden-spaghetti-with-meat-sauce-us|Olive Garden Spaghetti with meat sauce (US)|RS|121|5.8|17.2|3.3|1 portion=250;1 small portion=150|
us-olive-garden-spaghetti-with-pomodoro-sauce-us|Olive Garden Spaghetti with pomodoro sauce (US)|RS|102|4.3|17.1|1.9|1 portion=250;1 small portion=150|
us-on-the-border-cheese-enchilada-us|On The Border Cheese enchilada (US)|RS|271|11.7|16.2|17.7|1 portion=250;1 small portion=150|
us-on-the-border-cheese-quesadilla-us|On The Border Cheese quesadilla (US)|RS|394|16.9|24.3|25.5|1 portion=250;1 small portion=150|
us-on-the-border-mexican-rice-us|On The Border Mexican rice (US)|RS|195|3.6|34.2|4.9|1 portion=250;1 small portion=150|
us-on-the-border-refried-beans-us|On The Border Refried beans (US)|RS|144|7.3|17.5|5|1 portion=250;1 small portion=150|
us-on-the-border-soft-taco-with-ground-beef-cheese-|On The Border Soft taco with ground beef, cheese and lettuce (US)|RS|229|13.2|19.3|11.1|1 portion=250;1 small portion=150|
us-papa-john-s-14-cheese-pizza-original-crust-us|Papa John's 14" Cheese Pizza, Original Crust (US)|RS|260|11.5|32.7|9.3|1 portion=250;1 small portion=150|
us-papa-john-s-14-cheese-pizza-thin-crust-us|Papa John's 14" Cheese Pizza, Thin Crust (US)|RS|295|12.3|26.3|15.7|1 portion=250;1 small portion=150|
us-papa-john-s-14-pepperoni-pizza-original-crust-us|Papa John's 14" Pepperoni Pizza, Original Crust (US)|RS|275|12|30|11.9|1 portion=250;1 small portion=150|
us-papa-john-s-14-the-works-pizza-original-crust-us|Papa John's 14" The Works Pizza, Original Crust (US)|RS|240|10.3|26.7|10.2|1 portion=250;1 small portion=150|
us-pasta-with-sliced-franks-in-tomato-sauce-canned-|Pasta with Sliced Franks in Tomato Sauce, canned entree|HM|90|4.4|12.7|2.4|1 portion=250;1 small portion=150|
us-pasta-with-tomato-sauce-no-meat-canned|Pasta with tomato sauce, no meat, canned|HM|71|2.2|13.9|0.7|1 portion=250;1 small portion=150|
us-pizza-cheese-topping-regular-crust-frozen-cooked|Pizza, cheese topping, regular crust, frozen, cooked|HM|268|10.4|29|12.3|1 portion=250;1 small portion=150|
us-pizza-cheese-topping-rising-crust-frozen-cooked|Pizza, cheese topping, rising crust, frozen, cooked|HM|260|12.4|32.9|8.8|1 portion=250;1 small portion=150|
us-pizza-cheese-topping-thin-crust-frozen-cooked|Pizza, cheese topping, thin crust, frozen, cooked|HM|263|11.9|28.8|11.1|1 portion=250;1 small portion=150|
us-pizza-hut-12-cheese-pizza-hand-tossed-crust-us|Pizza Hut 12" Cheese Pizza, Hand-Tossed Crust (US)|RS|271|11.9|31.2|10.9|1 portion=250;1 small portion=150|
us-pizza-hut-12-cheese-pizza-pan-crust-us|Pizza Hut 12" Cheese Pizza, Pan Crust (US)|RS|280|11.7|29.9|12.6|1 portion=250;1 small portion=150|
us-pizza-hut-12-cheese-pizza-thin-n-crispy-crust-us|Pizza Hut 12" Cheese Pizza, Thin 'N Crispy Crust (US)|RS|303|15.3|28.6|14.1|1 portion=250;1 small portion=150|
us-pizza-hut-12-pepperoni-pizza-hand-tossed-crust-u|Pizza Hut 12" Pepperoni Pizza, Hand-Tossed Crust (US)|RS|280|12.9|31.6|11.4|1 portion=250;1 small portion=150|
us-pizza-hut-12-pepperoni-pizza-pan-crust-us|Pizza Hut 12" Pepperoni Pizza, Pan Crust (US)|RS|298|12|30.5|14.2|1 portion=250;1 small portion=150|
us-pizza-hut-12-super-supreme-pizza-hand-tossed-cru|Pizza Hut 12" Super Supreme Pizza, Hand-Tossed Crust (US)|RS|243|10.9|25.6|10.7|1 portion=250;1 small portion=150|
us-pizza-hut-14-cheese-pizza-hand-tossed-crust-us|Pizza Hut 14" Cheese Pizza, Hand-Tossed Crust (US)|RS|275|12|33.4|10.4|1 portion=250;1 small portion=150|
us-pizza-hut-14-cheese-pizza-pan-crust-us|Pizza Hut 14" Cheese Pizza, Pan Crust (US)|RS|276|10.9|32.9|11.3|1 portion=250;1 small portion=150|
us-pizza-hut-14-cheese-pizza-stuffed-crust-us|Pizza Hut 14" Cheese Pizza, Stuffed Crust (US)|RS|274|12.2|30|11.6|1 portion=250;1 small portion=150|
us-pizza-hut-14-cheese-pizza-thin-n-crispy-crust-us|Pizza Hut 14" Cheese Pizza, Thin 'N Crispy Crust (US)|RS|306|13.4|34.2|12.8|1 portion=250;1 small portion=150|
us-pizza-hut-14-pepperoni-pizza-hand-tossed-crust-u|Pizza Hut 14" Pepperoni Pizza, Hand-Tossed Crust (US)|RS|291|12.2|32.1|12.6|1 portion=250;1 small portion=150|
us-pizza-hut-14-pepperoni-pizza-pan-crust-us|Pizza Hut 14" Pepperoni Pizza, Pan Crust (US)|RS|291|11.5|31.8|13.1|1 portion=250;1 small portion=150|
us-pizza-hut-14-pepperoni-pizza-thin-n-crispy-crust|Pizza Hut 14" Pepperoni Pizza, Thin 'N Crispy Crust (US)|RS|333|14.1|32.7|16.2|1 portion=250;1 small portion=150|
us-pizza-hut-14-sausage-pizza-hand-tossed-crust-us|Pizza Hut 14" Sausage Pizza, Hand-Tossed Crust (US)|RS|287|11.9|29.4|13.5|1 portion=250;1 small portion=150|
us-pizza-hut-14-sausage-pizza-pan-crust-us|Pizza Hut 14" Sausage Pizza, Pan Crust (US)|RS|287|11.1|29.6|13.9|1 portion=250;1 small portion=150|
us-pizza-hut-14-sausage-pizza-thin-n-crispy-crust-u|Pizza Hut 14" Sausage Pizza, Thin 'N Crispy Crust (US)|RS|323|14|28.7|16.9|1 portion=250;1 small portion=150|
us-pizza-hut-14-super-supreme-pizza-hand-tossed-cru|Pizza Hut 14" Super Supreme Pizza, Hand-Tossed Crust (US)|RS|248|11.3|26|11|1 portion=250;1 small portion=150|
us-pizza-hut-breadstick-parmesan-garlic-us|Pizza Hut Breadstick, parmesan garlic (US)|RS|343|12.2|44.5|12.9|1 portion=250;1 small portion=150|
us-pizza-meat-and-vegetable-topping-regular-crust-f|Pizza, meat and vegetable topping, regular crust, frozen, cooked|HM|276|11.3|25.1|14.4|1 portion=250;1 small portion=150|
us-pizza-meat-and-vegetable-topping-rising-crust-fr|Pizza, meat and vegetable topping, rising crust, frozen, cooked|HM|271|12.6|28.8|11.8|1 portion=250;1 small portion=150|
us-pizza-meat-topping-thick-crust-frozen-cooked|Pizza, meat topping, thick crust, frozen, cooked|HM|274|11.8|30.8|11.5|1 portion=250;1 small portion=150|
us-pizza-pepperoni-topping-regular-crust-frozen-coo|Pizza, pepperoni topping, regular crust, frozen, cooked|HM|274|14.4|24.7|13.1|1 portion=250;1 small portion=150|
us-popeyes-biscuit-us|Popeyes Biscuit (US)|RS|401|6|41|23.7|1 portion=250;1 small portion=150|
us-popeyes-coleslaw-us|Popeyes Coleslaw (US)|RS|161|1|14.1|11.2|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-breast-us|Popeyes Fried Chicken, Mild, Breast (US)|RS|274|21.7|9.8|16.5|1 portion=250;1 small portion=150|breading meat skin
us-popeyes-fried-chicken-mild-breast-meat-only-us|Popeyes Fried Chicken, Mild, Breast, meat only (US)|RS|157|29|0|4.5|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-drumstick-us|Popeyes Fried Chicken, Mild, Drumstick (US)|RS|293|20.4|9.8|19.1|1 portion=250;1 small portion=150|breading meat skin
us-popeyes-fried-chicken-mild-drumstick-meat-only-u|Popeyes Fried Chicken, Mild, Drumstick, meat only (US)|RS|170|26.5|0|7.1|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-skin-and-breading-us|Popeyes Fried Chicken, Mild, Skin and Breading (US)|RS|433|14|21.5|32.3|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-thigh-meat-and-skin-w|Popeyes Fried Chicken, Mild, Thigh, meat and skin with breading (US)|RS|310|19.1|11.2|21|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-thigh-meat-only-us|Popeyes Fried Chicken, Mild, Thigh, meat only (US)|RS|188|24.3|0.9|9.7|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-wing-meat-and-skin-wi|Popeyes Fried Chicken, Mild, Wing, meat and skin with breading (US)|RS|338|20.4|13.5|22.5|1 portion=250;1 small portion=150|
us-popeyes-fried-chicken-mild-wing-meat-only-us|Popeyes Fried Chicken, Mild, Wing, meat only (US)|RS|212|28.9|2.9|9.4|1 portion=250;1 small portion=150|
us-popeyes-mild-chicken-strips-analyzed-2006-us|Popeyes Mild Chicken Strips, analyzed 2006 (US)|RS|271|19.2|19.3|13|1 portion=250;1 small portion=150|
us-popeyes-spicy-chicken-strips-analyzed-2006-us|Popeyes Spicy Chicken Strips, analyzed 2006 (US)|RS|253|19.6|18.5|11.2|1 portion=250;1 small portion=150|
us-potato-salad-with-egg|Potato salad with egg|HM|157|2|16.2|9.4|1 portion=250;1 small portion=150|
us-pulled-pork-in-barbecue-sauce|Pulled pork in barbecue sauce|HM|168|13.2|18.7|4.4|1 portion=250;1 small portion=150|
us-ravioli-cheese-filled-canned|Ravioli, cheese-filled, canned|HM|77|2.5|13.6|1.5|1 portion=250;1 small portion=150|
us-ravioli-cheese-with-tomato-sauce-frozen-not-prep|Ravioli, cheese with tomato sauce, frozen, not prepared|HM|111|4.5|17.3|2.6|1 portion=250;1 small portion=150|
us-ravioli-meat-filled-with-tomato-sauce-or-meat-sa|Ravioli, meat-filled, with tomato sauce or meat sauce, canned|HM|97|3.2|13.3|3.4|1 portion=250;1 small portion=150|
us-chinese-beef-and-vegetables|Chinese, beef and vegetables|HM|105|7.1|7.3|5.3|1 portion=250;1 small portion=150|restaurant
us-chinese-chicken-and-vegetables|Chinese, chicken and vegetables|HM|95|8.2|5.4|4.6|1 portion=250;1 small portion=150|restaurant
us-chinese-chicken-chow-mein|Chinese, chicken chow mein|HM|85|6.8|8.3|2.8|1 portion=250;1 small portion=150|restaurant
us-chinese-egg-rolls-assorted|Chinese, egg rolls, assorted|HM|250|8.3|27.3|11.9|1 portion=250;1 small portion=150|restaurant
us-chinese-fried-rice-without-meat|Chinese, fried rice, without meat|HM|174|4.1|32.8|3|1 portion=250;1 small portion=150|restaurant
us-chinese-general-tso-s-chicken|Chinese, general tso's chicken|HM|295|12.9|24|16.4|1 portion=250;1 small portion=150|restaurant
us-chinese-kung-pao-chicken|Chinese, kung pao chicken|HM|129|9.8|6.9|7|1 portion=250;1 small portion=150|restaurant
us-chinese-lemon-chicken|Chinese, lemon chicken|HM|252|11.9|20.6|13.6|1 portion=250;1 small portion=150|restaurant
us-chinese-orange-chicken|Chinese, orange chicken|HM|262|14.5|22.5|12.7|1 portion=250;1 small portion=150|restaurant
us-chinese-sesame-chicken|Chinese, sesame chicken|HM|293|14.3|26.9|14.3|1 portion=250;1 small portion=150|restaurant
us-chinese-shrimp-and-vegetables|Chinese, shrimp and vegetables|HM|78|5.9|4.5|4.1|1 portion=250;1 small portion=150|restaurant
us-chinese-sweet-and-sour-chicken|Chinese, sweet and sour chicken|HM|250|10.1|23.9|12.7|1 portion=250;1 small portion=150|restaurant
us-chinese-sweet-and-sour-pork|Chinese, sweet and sour pork|HM|270|8.9|23.3|15.7|1 portion=250;1 small portion=150|restaurant
us-chinese-vegetable-chow-mein-without-meat-or-nood|Chinese, vegetable chow mein, without meat or noodles|HM|43|1.3|5.7|1.7|1 portion=250;1 small portion=150|restaurant
us-chinese-vegetable-lo-mein-without-meat|Chinese, vegetable lo mein, without meat|HM|121|4.8|20.2|2.4|1 portion=250;1 small portion=150|restaurant
us-family-style-chicken-fingers-from-kid-s-menu|Family style, chicken fingers, from kid's menu|HM|307|18.7|18.8|17.5|1 portion=250;1 small portion=150|restaurant
us-family-style-chicken-tenders|Family style, chicken tenders|HM|302|18.9|19.3|16.6|1 portion=250;1 small portion=150|restaurant
us-family-style-chili-with-meat-and-beans|Family style, chili with meat and beans|HM|157|12.6|4.6|9.8|1 portion=250;1 small portion=150|restaurant
us-family-style-coleslaw|Family style, coleslaw|HM|159|0.9|12.4|11.8|1 portion=250;1 small portion=150|restaurant
us-family-style-fish-fillet-battered-or-breaded-fri|Family style, fish fillet, battered or breaded, fried|HM|219|13.5|16.9|10.8|1 portion=250;1 small portion=150|restaurant
us-family-style-french-fries|Family style, french fries|HM|289|3.5|37.2|14|1 portion=250;1 small portion=150|restaurant
us-family-style-fried-mozzarella-sticks|Family style, fried mozzarella sticks|HM|325|14.8|25.1|18.3|1 portion=250;1 small portion=150|restaurant
us-family-style-hash-browns|Family style, hash browns|HM|197|2.5|26.6|9|1 portion=250;1 small portion=150|restaurant
us-family-style-macaroni-cheese-from-kids-menu|Family style, macaroni & cheese, from kids' menu|HM|151|5.4|18.8|6.1|1 portion=250;1 small portion=150|restaurant
us-family-style-onion-rings|Family style, onion rings|HM|356|4.9|40.7|19.3|1 portion=250;1 small portion=150|restaurant
us-family-style-shrimp-breaded-and-fried|Family style, shrimp, breaded and fried|HM|308|12.7|22.3|18.7|1 portion=250;1 small portion=150|restaurant
us-family-style-sirloin-steak|Family style, sirloin steak|HM|195|29.8|0|8.5|1 portion=250;1 small portion=150|restaurant
us-family-style-spaghetti-and-meatballs|Family style, spaghetti and meatballs|HM|170|7.8|15.5|8.5|1 portion=250;1 small portion=150|restaurant
us-italian-cheese-ravioli-with-marinara-sauce|Italian, cheese ravioli with marinara sauce|HM|154|7.1|18.5|5.7|1 portion=250;1 small portion=150|restaurant
us-italian-chicken-parmesan-without-pasta|Italian, chicken parmesan without pasta|HM|204|16.2|10.9|10.6|1 portion=250;1 small portion=150|restaurant
us-italian-lasagna-with-meat|Italian, lasagna with meat|HM|185|10.8|11.4|10.7|1 portion=250;1 small portion=150|restaurant
us-italian-spaghetti-with-meat-sauce|Italian, spaghetti with meat sauce|HM|121|5.8|16.4|3.6|1 portion=250;1 small portion=150|restaurant
us-italian-spaghetti-with-pomodoro-sauce-no-meat|Italian, spaghetti with pomodoro sauce (no meat)|HM|104|3.9|17.8|1.9|1 portion=250;1 small portion=150|restaurant
us-latino-arepa-unleavened-cornmeal-bread|Latino, arepa (unleavened cornmeal bread)|HM|219|5.5|37.1|5.4|1 portion=250;1 small portion=150|restaurant
us-latino-arroz-con-frijoles-negros-rice-and-black-|Latino, Arroz con frijoles negros (rice and black beans)|HM|151|4.6|24.4|3.9|1 portion=250;1 small portion=150|restaurant
us-latino-arroz-con-habichuelas-colorados-rice-and-|Latino, Arroz con habichuelas colorados (Rice And Red Beans)|HM|142|4|23.7|3.5|1 portion=250;1 small portion=150|restaurant
us-latino-arroz-con-leche-rice-pudding|Latino, arroz con leche (rice pudding)|HM|146|3.2|24.9|3.7|1 portion=250;1 small portion=150|restaurant
us-latino-black-bean-soup|Latino, black bean soup|HM|103|5.1|14.8|2.6|1 bowl=250;1 cup=245|restaurant
us-latino-bunuelos-fried-yeast-bread|Latino, bunuelos (fried yeast bread)|HM|462|8|48.6|26.2|1 portion=250;1 small portion=150|restaurant
us-latino-chicken-and-rice-entree-prepared|Latino, chicken and rice, entree, prepared|HM|174|12|20|5.1|1 portion=250;1 small portion=150|restaurant
us-latino-empanadas-beef-prepared|Latino, empanadas, beef, prepared|HM|335|11.3|31.2|18.4|1 portion=250;1 small portion=150|restaurant
us-latino-pupusas-con-frijoles-pupusas-bean|Latino, pupusas con frijoles (pupusas, bean)|HM|229|5.6|31.5|9|1 portion=250;1 small portion=150|restaurant
us-latino-pupusas-con-queso-pupusas-cheese|Latino, pupusas con queso (pupusas, cheese)|HM|256|11.7|22.4|13.3|1 portion=250;1 small portion=150|restaurant
us-latino-pupusas-del-cerdo-pupusas-pork|Latino, pupusas del cerdo (pupusas, pork)|HM|232|11.5|23|10.4|1 portion=250;1 small portion=150|restaurant
us-latino-tamale-corn|Latino, tamale, corn|HM|186|3.5|26.7|7.2|1 portion=250;1 small portion=150|restaurant
us-latino-tamale-pork|Latino, tamale, pork|HM|174|7.4|15.8|9|1 portion=250;1 small portion=150|restaurant
us-latino-tripe-soup|Latino, tripe soup|HM|74|8.6|4.1|2.6|1 bowl=250;1 cup=245|restaurant
us-mexican-cheese-enchilada|Mexican, cheese enchilada|HM|273|11.2|15.5|18.5|1 portion=250;1 small portion=150|restaurant
us-mexican-cheese-quesadilla|Mexican, cheese quesadilla|HM|368|15.9|24.1|23.1|1 portion=250;1 small portion=150|restaurant
us-mexican-cheese-tamales|Mexican, cheese tamales|HM|216|9|18|12|1 portion=250;1 small portion=150|restaurant
us-mexican-refried-beans|Mexican, refried beans|HM|156|6.9|16.8|6.8|1 portion=250;1 small portion=150|restaurant
us-mexican-soft-taco-with-ground-beef-cheese-and-le|Mexican, soft taco with ground beef, cheese and lettuce|HM|219|12.6|17.9|10.8|1 portion=250;1 small portion=150|restaurant
us-mexican-spanish-rice|Mexican, spanish rice|HM|185|3.3|31.2|5.3|1 portion=250;1 small portion=150|restaurant
us-rice-and-vermicelli-mix-beef-flavor|Rice and vermicelli mix, beef flavor|HM|129|2.8|22|3.2|1 portion=250;1 small portion=150|margarine
us-rice-and-vermicelli-mix-chicken-flavor|Rice and vermicelli mix, chicken flavor|HM|136|2.7|23.5|3.5|1 portion=250;1 small portion=150|margarine
us-rice-and-vermicelli-mix-rice-pilaf-flavor|Rice and vermicelli mix, rice pilaf flavor|HM|148|2.9|25.7|3.7|1 portion=250;1 small portion=150|margarine
us-rice-bowl-with-chicken-frozen-entree-prepared|Rice bowl with chicken, frozen entree, prepared|HM|126|5.7|22.5|1.6|1 portion=250;1 small portion=150|
us-salisbury-steak-with-gravy-frozen|Salisbury steak with gravy, frozen|HM|149|7|6.8|10.5|1 portion=250;1 small portion=150|
us-sausage-egg-and-cheese-breakfast-biscuit|Sausage, egg and cheese breakfast biscuit|HM|324|9.5|21.6|22.1|1 portion=250;1 small portion=150|
us-school-lunch-chicken-nuggets-whole-grain-breaded|School Lunch, chicken nuggets, whole grain breaded|HM|270|15.7|22.9|12.9|1 portion=250;1 small portion=150|
us-school-lunch-chicken-patty-whole-grain-breaded|School Lunch, chicken patty, whole grain breaded|HM|246|17.6|12.5|13.9|1 portion=250;1 small portion=150|
us-school-lunch-pizza-big-daddy-s-ls-16-51-whole-gr|School Lunch, pizza, Big Daddy's LS 16" 51% Whole Grain Rolled|HM|243|13.9|27.1|8.8|1 portion=250;1 small portion=150|cheese edge frozen
us-school-lunch-pizza-cheese-topping-thick-crust-wh|School Lunch, pizza, cheese topping, thick crust, whole grain|HM|254|14.6|28.1|9.3|1 portion=250;1 small portion=150|
us-school-lunch-pizza-cheese-topping-thin-crust-who|School Lunch, pizza, cheese topping, thin crust, whole grain|HM|247|12.7|31.3|7.9|1 portion=250;1 small portion=150|
us-school-lunch-pizza-pepperoni-topping-thick-crust|School Lunch, pizza, pepperoni topping, thick crust, whole grain|HM|259|14.4|28.3|9.8|1 portion=250;1 small portion=150|
us-school-lunch-pizza-pepperoni-topping-thin-crust-|School Lunch, pizza, pepperoni topping, thin crust, whole grain|HM|254|12.8|31.2|8.6|1 portion=250;1 small portion=150|
us-school-lunch-pizza-sausage-topping-thick-crust-w|School Lunch, pizza, sausage topping, thick crust, whole grain|HM|257|13.3|30.6|9.1|1 portion=250;1 small portion=150|
us-school-lunch-pizza-sausage-topping-thin-crust-wh|School Lunch, pizza, sausage topping, thin crust, whole grain|HM|250|12.6|32.2|7.8|1 portion=250;1 small portion=150|
us-school-lunch-pizza-tony-s-breakfast-pizza-sausag|School Lunch, pizza, Tony's Breakfast Pizza Sausage, frozen|HM|240|10.4|27|10|1 portion=250;1 small portion=150|
us-school-lunch-pizza-tony-s-smartpizza-whole-grain|School Lunch, pizza, Tony's Smartpizza Whole Grain 4x6 Cheese|HM|233|12.1|29.3|7.5|1 portion=250;1 small portion=150|frozen
us-school-lunch-pizza-tony-s-smartpizza-whole-grain-2|School Lunch, pizza, Tony's Smartpizza Whole Grain 4x6|HM|238|12.1|28.8|8.2|1 portion=250;1 small portion=150|cheese frozen pepperoni
us-spaghetti-with-meatballs-in-tomato-sauce-canned|Spaghetti, with meatballs in tomato sauce, canned|HM|100|4.4|11.5|4.1|1 portion=250;1 small portion=150|
us-spaghetti-with-meat-sauce-frozen-entree|Spaghetti with meat sauce, frozen entree|HM|90|5.1|15.2|1|1 portion=250;1 small portion=150|
us-subway-black-forest-ham-sub-on-white-bread-with-|Subway Black forest ham sub on white bread with lettuce (US)|RS|151|9.1|22.9|2.5|1 portion=250;1 small portion=150|tomato
us-subway-b-l-t-sub-on-white-bread-with-bacon-lettu|Subway B.l.t. sub on white bread with bacon, lettuce and tomato (US)|RS|205|10.1|26.7|6.4|1 portion=250;1 small portion=150|
us-subway-cold-cut-sub-on-white-bread-with-lettuce-|Subway Cold cut sub on white bread with lettuce and tomato (US)|RS|214|10.5|20.4|10|1 portion=250;1 small portion=150|
us-subway-meatball-marinara-sub-on-white-bread-no-t|Subway Meatball marinara sub on white bread (no toppings) (US)|RS|219|9.8|26|8.5|1 portion=250;1 small portion=150|
us-subway-oven-roasted-chicken-sub-on-white-bread-w|Subway Oven roasted chicken sub on white bread with lettuce (US)|RS|157|10.8|21.4|3.2|1 portion=250;1 small portion=150|tomato
us-subway-roast-beef-sub-on-white-bread-with-lettuc|Subway Roast beef sub on white bread with lettuce and tomato (US)|RS|155|12.2|20.3|2.7|1 portion=250;1 small portion=150|
us-subway-steak-cheese-sub-on-white-bread-with-amer|Subway Steak & cheese sub on white bread with American cheese (US)|RS|183|12.3|21.5|5.3|1 portion=250;1 small portion=150|lettuce tomato
us-subway-subway-club-sub-on-white-bread-with-lettu|Subway Subway Club sub on white bread with lettuce and tomato (US)|RS|146|10.7|20.4|2.4|1 portion=250;1 small portion=150|
us-subway-sweet-onion-chicken-teriyaki-sub-on-white|Subway Sweet onion chicken teriyaki sub on white bread (US)|RS|155|10.9|22.5|2.4|1 portion=250;1 small portion=150|lettuce sauce tomato
us-subway-tuna-sub-on-white-bread-with-lettuce-and-|Subway Tuna sub on white bread with lettuce and tomato (US)|RS|221|12.3|16|12|1 portion=250;1 small portion=150|
us-subway-turkey-breast-sub-on-white-bread-with-let|Subway Turkey breast sub on white bread with lettuce and tomato (US)|RS|147|9.1|22.4|2.3|1 portion=250;1 small portion=150|
us-taco-bell-bean-burrito-us|Taco Bell Bean Burrito (US)|RS|209|7.4|31.2|6.1|1 portion=250;1 small portion=150|
us-taco-bell-burrito-supreme-with-beef-us|Taco Bell Burrito Supreme with beef (US)|RS|183|7|23.4|6.8|1 portion=250;1 small portion=150|
us-taco-bell-burrito-supreme-with-chicken-us|Taco Bell Burrito Supreme with chicken (US)|RS|179|9.8|20.5|6.4|1 portion=250;1 small portion=150|
us-taco-bell-burrito-supreme-with-steak-us|Taco Bell Burrito Supreme with steak (US)|RS|183|9.1|20.3|7.3|1 portion=250;1 small portion=150|
us-taco-bell-nachos-us|Taco Bell Nachos (US)|RS|350|4.3|34.9|21.5|1 portion=250;1 small portion=150|
us-taco-bell-nachos-supreme-us|Taco Bell Nachos Supreme (US)|RS|223|6.2|21.4|12.5|1 portion=250;1 small portion=150|
us-taco-bell-original-taco-with-beef-cheese-and-let|Taco Bell Original Taco with beef, cheese and lettuce (US)|RS|229|8.9|19.9|12.7|1 portion=250;1 small portion=150|
us-taco-bell-soft-taco-with-beef-cheese-and-lettuce|Taco Bell Soft Taco with beef, cheese and lettuce (US)|RS|206|9.3|20.2|9.8|1 portion=250;1 small portion=150|
us-taco-bell-soft-taco-with-chicken-cheese-and-lett|Taco Bell Soft Taco with chicken, cheese and lettuce (US)|RS|189|13.3|19.7|6.4|1 portion=250;1 small portion=150|
us-taco-bell-soft-taco-with-steak-us|Taco Bell Soft Taco with steak (US)|RS|225|11.8|17.2|12.1|1 portion=250;1 small portion=150|
us-taco-bell-taco-salad-us|Taco Bell Taco Salad (US)|RS|170|6.7|15.1|9.2|1 portion=250;1 small portion=150|
us-taquitos-frozen-beef-and-cheese-oven-heated|Taquitos, frozen, beef and cheese, oven-heated|HM|287|9.4|33.5|12.8|1 portion=250;1 small portion=150|
us-taquitos-frozen-chicken-and-cheese-oven-heated|Taquitos, frozen, chicken and cheese, oven-heated|HM|284|9.2|33.6|12.5|1 portion=250;1 small portion=150|
us-tgi-fridays-chicken-fingers-us|TGI Fridays Chicken fingers (US)|RS|325|18.7|16.8|20.3|1 portion=250;1 small portion=150|friday g i s t
us-tgi-fridays-chicken-fingers-from-kids-menu-us|TGI Fridays Chicken fingers, from kids' menu (US)|RS|330|18.1|17.7|20.8|1 portion=250;1 small portion=150|friday g i s t
us-tgi-fridays-classic-sirloin-steak-10-oz-us|TGI Fridays Classic sirloin steak (10 oz) (US)|RS|196|31|0.5|7.8|1 portion=250;1 small portion=150|friday g i s t
us-tgi-fridays-french-fries-us|TGI Fridays French fries (US)|RS|296|3.7|36.9|14.8|1 portion=250;1 small portion=150|friday g i s t
us-tgi-fridays-friday-s-shrimp-breaded-us|TGI Fridays Friday's Shrimp, breaded (US)|RS|302|11.9|20.9|19|1 portion=250;1 small portion=150|g i t
us-tgi-fridays-fried-mozzarella-us|TGI Fridays Fried mozzarella (US)|RS|333|15.8|25.3|18.8|1 portion=250;1 small portion=150|friday g i s t
us-tgi-fridays-macaroni-cheese-from-kid-s-menu-us|TGI Fridays Macaroni & cheese, from kid's menu (US)|RS|121|5|17.4|3.5|1 portion=250;1 small portion=150|friday g i t
us-tortellini-pasta-with-cheese-filling-fresh-refri|Tortellini, pasta with cheese filling, fresh-refrigerated|HM|307|13.5|47|7.2|1 portion=250;1 small portion=150|
us-turkey-pot-pie-frozen-entree|Turkey Pot Pie, frozen entree|HM|176|6.5|17.7|8.8|1 portion=250;1 small portion=150|
us-turkey-stuffing-mashed-potatoes-with-gravy|Turkey, stuffing, mashed potatoes with gravy|HM|128|7|16.3|3.9|1 portion=250;1 small portion=150|assorted frozen vegetables w
us-turnover-chicken-or-turkey-and-vegetable-filled|Turnover, chicken- or turkey-, and vegetable-filled|HM|168|7.9|21.7|5.5|1 portion=250;1 small portion=150|frozen reduced
us-turnover-filled-with-egg-meat-and-cheese-frozen|Turnover, filled with egg, meat and cheese, frozen|HM|228|7.9|20.7|12.6|1 portion=250;1 small portion=150|
us-turnover-meat-and-cheese-filled-tomato-based-sau|Turnover, meat- and cheese-filled, tomato-based sauce|HM|215|9.5|31.9|5.5|1 portion=250;1 small portion=150|frozen reduced
us-wendy-s-chicken-nuggets-us|Wendy's Chicken Nuggets (US)|RS|326|16.5|14.3|22.6|1 portion=250;1 small portion=150|
us-wendy-s-classic-double-with-cheese-us|Wendy's Classic Double, with cheese (US)|RS|241|16.5|11.7|14.2|1 portion=250;1 small portion=150|
us-wendy-s-classic-single-hamburger-no-cheese-us|Wendy's Classic Single Hamburger, no cheese (US)|RS|213|12.6|16.8|10.6|1 portion=250;1 small portion=150|
us-wendy-s-classic-single-hamburger-with-cheese-us|Wendy's Classic Single Hamburger, with cheese (US)|RS|221|14.9|14.2|11.6|1 portion=250;1 small portion=150|
us-wendy-s-dave-s-hot-n-juicy-1-4-lb-single-us|Wendy's Dave's Hot 'N Juicy 1/4 LB, single (US)|RS|268|13.7|17.7|15.8|1 portion=250;1 small portion=150|
us-wendy-s-double-stack-with-cheese-us|Wendy's Double Stack, with cheese (US)|RS|285|18.5|15.4|16.6|1 portion=250;1 small portion=150|
us-wendy-s-french-fries-us|Wendy's French fries (US)|RS|301|3.7|39.7|14.1|1 portion=250;1 small portion=150|
us-wendy-s-frosty-dairy-dessert-us|Wendy's Frosty Dairy Dessert (US)|RS|132|3.5|23.6|2.6|1 portion=250;1 small portion=150|
us-wendy-s-homestyle-chicken-fillet-sandwich-us|Wendy's Homestyle Chicken Fillet Sandwich (US)|RS|214|13.8|21.6|8.1|1 portion=250;1 small portion=150|
us-wendy-s-jr-hamburger-with-cheese-us|Wendy's Jr. Hamburger, with cheese (US)|RS|256|13.1|25|11.5|1 portion=250;1 small portion=150|
us-wendy-s-jr-hamburger-without-cheese-us|Wendy's Jr. Hamburger, without cheese (US)|RS|243|12.6|28.5|8.8|1 portion=250;1 small portion=150|
us-wendy-s-ultimate-chicken-grill-sandwich-us|Wendy's Ultimate Chicken Grill Sandwich (US)|RS|179|14.7|18.9|5|1 portion=250;1 small portion=150|
us-yogurt-parfait-lowfat-with-fruit-and-granola|Yogurt parfait, lowfat, with fruit and granola|HM|84|3.4|15.9|1|1 portion=250;1 small portion=150|
us-basil-fresh|Basil, fresh|OS|23|3.2|2.7|0.6|1 tbsp=15;2 tbsp=30|
us-capers-canned|Capers, canned|OS|23|2.4|4.9|0.9|1 tbsp=15;2 tbsp=30|
us-dill-weed-fresh|Dill weed, fresh|OS|43|3.5|7|1.1|1 tbsp=15;2 tbsp=30|
us-horseradish-prepared|Horseradish, prepared|OS|48|1.2|11.3|0.7|1 tbsp=15;2 tbsp=30|
us-mustard-prepared-yellow|Mustard, prepared, yellow|OS|60|3.7|5.8|3.3|1 tbsp=15;2 tbsp=30|
us-peppermint-fresh|Peppermint, fresh|OS|70|3.8|14.9|0.9|1 tbsp=15;2 tbsp=30|
us-rosemary-fresh|Rosemary, fresh|OS|131|3.3|20.7|5.9|1 tbsp=15;2 tbsp=30|
us-spearmint-dried|Spearmint, dried|OS|285|19.9|52|6|1 tsp=2;1 tbsp=6|
us-spearmint-fresh|Spearmint, fresh|OS|44|3.3|8.4|0.7|1 tbsp=15;2 tbsp=30|
us-allspice-ground|Allspice, ground|OS|263|6.1|72.1|8.7|1 tsp=2;1 tbsp=6|spices
us-anise-seed|Anise seed|OS|337|17.6|50|15.9|1 tbsp=15;2 tbsp=30|spices
us-basil-dried|Basil, dried|OS|233|23|47.8|4.1|1 tsp=2;1 tbsp=6|spices
us-bay-leaf|Bay leaf|OS|313|7.6|75|8.4|1 tbsp=15;2 tbsp=30|spices
us-caraway-seed|Caraway seed|OS|333|19.8|49.9|14.6|1 tbsp=15;2 tbsp=30|spices
us-cardamom|Cardamom|OS|311|10.8|68.5|6.7|1 tbsp=15;2 tbsp=30|spices
us-celery-seed|Celery seed|OS|392|18.1|41.4|25.3|1 tbsp=15;2 tbsp=30|spices
us-chervil-dried|Chervil, dried|OS|237|23.2|49.1|3.9|1 tsp=2;1 tbsp=6|spices
us-chili-powder|Chili powder|OS|282|13.5|49.7|14.3|1 tbsp=15;2 tbsp=30|spices
us-cinnamon-ground|Cinnamon, ground|OS|247|4|80.6|1.2|1 tsp=2;1 tbsp=6|spices
us-cloves-ground|Cloves, ground|OS|274|6|65.5|13|1 tsp=2;1 tbsp=6|spices
us-coriander-leaf-dried|Coriander leaf, dried|OS|279|21.9|52.1|4.8|1 tsp=2;1 tbsp=6|spices
us-coriander-seed|Coriander seed|OS|298|12.4|55|17.8|1 tbsp=15;2 tbsp=30|spices
us-cumin-seed|Cumin seed|OS|375|17.8|44.2|22.3|1 tbsp=15;2 tbsp=30|spices
us-curry-powder|Curry powder|OS|325|14.3|55.8|14|1 tbsp=15;2 tbsp=30|spices
us-dill-seed|Dill seed|OS|305|16|55.2|14.5|1 tbsp=15;2 tbsp=30|spices
us-dill-weed-dried|Dill weed, dried|OS|253|20|55.8|4.4|1 tsp=2;1 tbsp=6|spices
us-fennel-seed|Fennel seed|OS|345|15.8|52.3|14.9|1 tbsp=15;2 tbsp=30|spices
us-fenugreek-seed|Fenugreek seed|OS|323|23|58.4|6.4|1 tbsp=15;2 tbsp=30|spices
us-garlic-powder|Garlic powder|OS|331|16.6|72.7|0.7|1 tbsp=15;2 tbsp=30|spices
us-ginger-ground|Ginger, ground|OS|335|9|71.6|4.2|1 tsp=2;1 tbsp=6|spices
us-mace-ground|Mace, ground|OS|475|6.7|50.5|32.4|1 tsp=2;1 tbsp=6|spices
us-marjoram-dried|Marjoram, dried|OS|271|12.7|60.6|7|1 tsp=2;1 tbsp=6|spices
us-mustard-seed-ground|Mustard seed, ground|OS|508|26.1|28.1|36.2|1 tsp=2;1 tbsp=6|spices
us-nutmeg-ground|Nutmeg, ground|OS|525|5.8|49.3|36.3|1 tsp=2;1 tbsp=6|spices
us-onion-powder|Onion powder|OS|341|10.4|79.1|1|1 tbsp=15;2 tbsp=30|spices
us-oregano-dried|Oregano, dried|OS|265|9|68.9|4.3|1 tsp=2;1 tbsp=6|spices
us-paprika|Paprika|OS|282|14.1|54|12.9|1 tbsp=15;2 tbsp=30|spices
us-parsley-dried|Parsley, dried|OS|292|26.6|50.6|5.5|1 tsp=2;1 tbsp=6|spices
us-pepper-black|Pepper, black|OS|251|10.4|64|3.3|1 tsp=2;1 tbsp=6|spices
us-pepper-red-or-cayenne|Pepper, red or cayenne|OS|318|12|56.6|17.3|1 tsp=2;1 tbsp=6|spices
us-pepper-white|Pepper, white|OS|296|10.4|68.6|2.1|1 tsp=2;1 tbsp=6|spices
us-poppy-seed|Poppy seed|OS|525|18|28.1|41.6|1 tbsp=15;2 tbsp=30|spices
us-poultry-seasoning|Poultry seasoning|OS|307|9.6|65.6|7.5|1 tsp=2;1 tbsp=6|spices
us-pumpkin-pie-spice|Pumpkin pie spice|OS|342|5.8|69.3|12.6|1 tsp=2;1 tbsp=6|spices
us-rosemary-dried|Rosemary, dried|OS|331|4.9|64.1|15.2|1 tsp=2;1 tbsp=6|spices
us-saffron|Saffron|OS|310|11.4|65.4|5.9|1 tbsp=15;2 tbsp=30|spices
us-sage-ground|Sage, ground|OS|315|10.6|60.7|12.8|1 tsp=2;1 tbsp=6|spices
us-savory-ground|Savory, ground|OS|272|6.7|68.7|5.9|1 tsp=2;1 tbsp=6|spices
us-tarragon-dried|Tarragon, dried|OS|295|22.8|50.2|7.2|1 tsp=2;1 tbsp=6|spices
us-thyme-dried|Thyme, dried|OS|276|9.1|63.9|7.4|1 tsp=2;1 tbsp=6|spices
us-turmeric-ground|Turmeric, ground|OS|312|9.7|67.1|3.3|1 tsp=2;1 tbsp=6|spices
us-thyme-fresh|Thyme, fresh|OS|101|5.6|24.5|1.7|1 tbsp=15;2 tbsp=30|
us-vanilla-extract|Vanilla extract|OS|288|0.1|12.7|0.1|1 tbsp=15;2 tbsp=30|
us-vanilla-extract-imitation-alcohol|Vanilla extract, imitation, alcohol|OS|237|0.1|2.4|0|1 tbsp=15;2 tbsp=30|
us-vanilla-extract-imitation-no-alcohol|Vanilla extract, imitation, no alcohol|OS|56|0|14.4|0|1 tbsp=15;2 tbsp=30|
us-vinegar-balsamic|Vinegar, balsamic|OS|88|0.5|17|0|1 tbsp=15;2 tbsp=30|
us-vinegar-cider|Vinegar, cider|OS|21|0|0.9|0|1 tbsp=15;2 tbsp=30|
us-vinegar-distilled|Vinegar, distilled|OS|18|0|0|0|1 tbsp=15;2 tbsp=30|
us-vinegar-red-wine|Vinegar, red wine|OS|19|0|0.3|0|1 glass=150;1 bottle=750|
`;
