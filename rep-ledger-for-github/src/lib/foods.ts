/**
 * Built-in food list. Values are per 100 g (or 100 ml) and are typical
 * figures rounded for everyday tracking — packaged products vary, so the
 * label always wins. Servings give one-tap portion sizes in grams.
 */
export interface Food {
  id: string;
  name: string;
  cat: FoodCat;
  kcal: number;
  p: number;
  c: number;
  f: number;
  servings: { label: string; g: number }[];
  /** ml instead of g */
  liquid?: boolean;
  tags?: string;
}
export type FoodCat = "Protein" | "Carbs & grains" | "SA favourites" | "Dairy & eggs" | "Fruit & veg" | "Fats & snacks" | "Drinks" | "Meals & takeaway";

const F = (id: string, name: string, cat: FoodCat, kcal: number, p: number, c: number, f: number, servings: [string, number][], extra: Partial<Food> = {}): Food => ({
  id, name, cat, kcal, p, c, f, servings: servings.map(([label, g]) => ({ label, g })), ...extra,
});

export const FOODS: Food[] = [
  // Protein
  F("chicken-breast", "Chicken breast, grilled", "Protein", 165, 31, 0, 3.6, [["1 breast", 170], ["100 g", 100], ["palm", 120]], { tags: "chicken fillet" }),
  F("chicken-thigh", "Chicken thigh, roasted, skin off", "Protein", 209, 26, 0, 11, [["1 thigh", 90], ["100 g", 100]]),
  F("quarter-chicken", "Flame-grilled quarter chicken", "Protein", 230, 27, 1, 13, [["quarter leg", 220], ["quarter breast", 230]], { tags: "peri peri" }),
  F("beef-mince", "Beef mince, lean, cooked", "Protein", 250, 26, 0, 15, [["100 g", 100], ["½ cup", 110]]),
  F("steak", "Rump steak, grilled", "Protein", 205, 29, 0, 9.5, [["200 g steak", 200], ["300 g steak", 300]]),
  F("pork-chop", "Pork chop, grilled", "Protein", 231, 26, 0, 14, [["1 chop", 150]]),
  F("lamb-chop", "Lamb chop, grilled", "Protein", 280, 25, 0, 20, [["1 chop", 90]]),
  F("hake", "Hake, grilled", "Protein", 105, 22, 0, 1.5, [["1 fillet", 150]], { tags: "fish" }),
  F("salmon", "Salmon, baked", "Protein", 208, 22, 0, 13, [["1 fillet", 130]], { tags: "fish" }),
  F("tuna-water", "Tuna in water, drained", "Protein", 116, 26, 0, 1, [["1 tin (drained)", 120], ["½ tin", 60]], { tags: "fish" }),
  F("pilchards", "Pilchards in tomato sauce", "Protein", 150, 17, 3, 8, [["½ tin", 200], ["1 tin", 400]], { tags: "fish" }),
  F("whey", "Whey protein powder", "Protein", 400, 78, 9, 6, [["1 scoop", 30], ["2 scoops", 60]], { tags: "shake supplement" }),
  F("tofu", "Tofu, firm", "Protein", 144, 17, 3, 9, [["100 g", 100]]),
  F("lentils", "Lentils, cooked", "Protein", 116, 9, 20, 0.4, [["½ cup", 100], ["1 cup", 200]]),
  F("chickpeas", "Chickpeas, cooked", "Protein", 164, 9, 27, 2.6, [["½ cup", 85], ["1 tin (drained)", 240]]),

  // SA favourites
  F("biltong", "Biltong, beef", "SA favourites", 260, 52, 2, 4, [["small bag", 30], ["50 g", 50], ["100 g", 100]]),
  F("droewors", "Droëwors", "SA favourites", 480, 36, 2, 37, [["1 stick", 25], ["50 g", 50]]),
  F("boerewors", "Boerewors, braaied", "SA favourites", 290, 15, 3, 24, [["1 piece (10 cm)", 90], ["2 pieces", 180]], { tags: "wors braai sausage" }),
  F("pap-stiff", "Pap (stywe pap), cooked", "SA favourites", 110, 2.5, 24, 0.5, [["1 cup", 240], ["½ cup", 120], ["1 serving spoon", 150]], { tags: "maize mealie meal porridge" }),
  F("pap-soft", "Soft maize porridge, cooked", "SA favourites", 60, 1.4, 13, 0.3, [["1 bowl", 250]], { tags: "maize mealie meal" }),
  F("samp-beans", "Samp and beans, cooked", "SA favourites", 130, 5, 25, 1, [["1 cup", 220]], { tags: "umngqusho" }),
  F("chakalaka", "Chakalaka", "SA favourites", 65, 2, 10, 2, [["½ cup", 120], ["2 tbsp", 40]]),
  F("vetkoek", "Vetkoek", "SA favourites", 330, 7, 45, 14, [["1 vetkoek", 80]], { tags: "fat cake amagwinya" }),
  F("rusk", "Buttermilk rusk", "SA favourites", 420, 8, 64, 15, [["1 rusk", 40]], { tags: "beskuit" }),
  F("bobotie", "Bobotie", "SA favourites", 190, 13, 9, 11, [["1 serving", 250]]),
  F("bunny-chow", "Bunny chow, quarter mutton", "SA favourites", 230, 9, 25, 10, [["quarter", 550]], { tags: "curry" }),
  F("amasi", "Amasi (maas)", "SA favourites", 62, 3.2, 4.6, 3.3, [["1 cup", 250]], { liquid: true, tags: "sour milk" }),
  F("mealie", "Mealie (corn on the cob)", "SA favourites", 96, 3.4, 21, 1.5, [["1 cob", 150]], { tags: "corn" }),
  F("weetbix", "Weet-Bix style wheat biscuits", "SA favourites", 358, 12, 68, 1.4, [["2 biscuits", 30], ["3 biscuits", 45]], { tags: "cereal" }),

  // Carbs & grains
  F("oats", "Rolled oats, dry", "Carbs & grains", 389, 13, 66, 7, [["½ cup", 40], ["1 cup", 80]], { tags: "porridge" }),
  F("rice-white", "White rice, cooked", "Carbs & grains", 130, 2.7, 28, 0.3, [["1 cup", 185], ["½ cup", 95]]),
  F("rice-brown", "Brown rice, cooked", "Carbs & grains", 123, 2.7, 26, 1, [["1 cup", 195]]),
  F("pasta", "Pasta, cooked", "Carbs & grains", 158, 5.8, 31, 0.9, [["1 cup", 140], ["1 plate", 250]]),
  F("bread-brown", "Brown bread", "Carbs & grains", 240, 9, 43, 3, [["1 slice", 38], ["2 slices", 76]]),
  F("bread-white", "White bread", "Carbs & grains", 265, 8.5, 49, 3.2, [["1 slice", 38], ["2 slices", 76]]),
  F("wrap", "Tortilla wrap", "Carbs & grains", 300, 8, 50, 7, [["1 wrap", 62]]),
  F("potato", "Potato, boiled", "Carbs & grains", 87, 1.9, 20, 0.1, [["1 medium", 170], ["100 g", 100]]),
  F("sweet-potato", "Sweet potato, baked", "Carbs & grains", 90, 2, 21, 0.2, [["1 medium", 150]]),
  F("butternut", "Butternut, roasted", "Carbs & grains", 45, 1, 12, 0.1, [["1 cup", 205]]),
  F("muesli", "Muesli, toasted", "Carbs & grains", 430, 9, 62, 15, [["½ cup", 55]]),

  // Dairy & eggs
  F("egg", "Egg, whole", "Dairy & eggs", 143, 12.6, 0.7, 9.5, [["1 large egg", 50], ["2 eggs", 100], ["3 eggs", 150]]),
  F("milk-full", "Full cream milk", "Dairy & eggs", 64, 3.3, 4.7, 3.4, [["1 cup", 250], ["splash in coffee", 30]], { liquid: true }),
  F("milk-low", "Low fat milk (2%)", "Dairy & eggs", 50, 3.4, 4.8, 2, [["1 cup", 250], ["splash in coffee", 30]], { liquid: true }),
  F("greek-yoghurt", "Greek yoghurt, plain", "Dairy & eggs", 97, 9, 4, 5, [["½ cup", 125], ["1 cup", 250]]),
  F("fat-free-yoghurt", "Fat-free plain yoghurt", "Dairy & eggs", 56, 5.7, 7.7, 0.2, [["1 tub", 175], ["½ cup", 125]]),
  F("cottage-cheese", "Cottage cheese, low fat", "Dairy & eggs", 90, 12, 3.5, 3, [["½ cup", 115]]),
  F("cheddar", "Cheddar cheese", "Dairy & eggs", 403, 25, 1.3, 33, [["1 slice", 20], ["matchbox", 30]]),
  F("feta", "Feta cheese", "Dairy & eggs", 264, 14, 4, 21, [["1 block (¼)", 50]]),

  // Fruit & veg
  F("banana", "Banana", "Fruit & veg", 89, 1.1, 23, 0.3, [["1 medium", 120]]),
  F("apple", "Apple", "Fruit & veg", 52, 0.3, 14, 0.2, [["1 medium", 180]]),
  F("orange", "Orange", "Fruit & veg", 47, 0.9, 12, 0.1, [["1 medium", 150]]),
  F("berries", "Mixed berries", "Fruit & veg", 50, 0.8, 12, 0.3, [["½ cup", 75], ["1 cup", 150]]),
  F("avocado", "Avocado", "Fruit & veg", 160, 2, 9, 15, [["½ avo", 75], ["1 avo", 150]]),
  F("broccoli", "Broccoli, steamed", "Fruit & veg", 35, 2.4, 7, 0.4, [["1 cup", 155]]),
  F("mixed-veg", "Mixed vegetables", "Fruit & veg", 65, 2.9, 13, 0.3, [["1 cup", 180]]),
  F("salad", "Green salad, no dressing", "Fruit & veg", 17, 1.2, 3.3, 0.2, [["side salad", 100], ["large bowl", 200]]),
  F("spinach", "Spinach / morogo, cooked", "Fruit & veg", 23, 3, 3.8, 0.3, [["½ cup", 90]]),

  // Fats & snacks
  F("peanut-butter", "Peanut butter", "Fats & snacks", 588, 25, 20, 50, [["1 tbsp", 16], ["2 tbsp", 32]]),
  F("almonds", "Almonds", "Fats & snacks", 579, 21, 22, 50, [["small handful", 25]]),
  F("olive-oil", "Olive oil", "Fats & snacks", 884, 0, 0, 100, [["1 tsp", 5], ["1 tbsp", 14]], { liquid: true }),
  F("butter", "Butter", "Fats & snacks", 717, 0.9, 0.1, 81, [["1 tsp", 5], ["1 tbsp", 14]]),
  F("hummus", "Hummus", "Fats & snacks", 166, 8, 14, 10, [["2 tbsp", 30]]),
  F("dark-choc", "Dark chocolate 70%", "Fats & snacks", 600, 8, 46, 43, [["2 blocks", 20], ["½ slab", 40]]),
  F("chips-crisps", "Potato crisps", "Fats & snacks", 536, 7, 53, 34, [["small packet", 36], ["125 g packet", 125]], { tags: "chips" }),
  F("protein-bar", "Protein bar", "Fats & snacks", 360, 30, 35, 12, [["1 bar", 60]]),

  // Drinks
  F("coffee-black", "Coffee, black", "Drinks", 2, 0.3, 0, 0, [["1 mug", 250]], { liquid: true }),
  F("cappuccino", "Cappuccino, full cream", "Drinks", 45, 2.4, 3.6, 2.3, [["regular", 300]], { liquid: true, tags: "coffee flat white latte" }),
  F("rooibos", "Rooibos tea, plain", "Drinks", 1, 0, 0.2, 0, [["1 mug", 250]], { liquid: true, tags: "tea" }),
  F("coke", "Cola, regular", "Drinks", 42, 0, 10.6, 0, [["1 can", 330], ["500 ml", 500]], { liquid: true, tags: "soda cooldrink" }),
  F("orange-juice", "Orange juice", "Drinks", 45, 0.7, 10, 0.2, [["1 glass", 250]], { liquid: true }),
  F("beer", "Beer, lager", "Drinks", 43, 0.5, 3.6, 0, [["1 can", 340], ["1 quart", 750]], { liquid: true }),
  F("wine", "Wine, dry", "Drinks", 83, 0.1, 2.6, 0, [["1 glass", 150]], { liquid: true }),

  // Meals & takeaway
  F("burger", "Beef burger with bun", "Meals & takeaway", 250, 13, 24, 11, [["1 burger", 220]]),
  F("pizza", "Pizza, regular base", "Meals & takeaway", 266, 11, 33, 10, [["1 slice", 107], ["½ medium", 400]]),
  F("fries", "Slap chips / fries", "Meals & takeaway", 312, 3.4, 41, 15, [["small", 100], ["medium", 160], ["large", 220]]),
  F("spag-bol", "Spaghetti bolognese", "Meals & takeaway", 150, 8, 17, 5, [["1 plate", 400]]),
  F("chicken-curry-rice", "Chicken curry with rice", "Meals & takeaway", 150, 9, 17, 5, [["1 plate", 450]]),
  F("sushi", "Sushi, salmon rolls", "Meals & takeaway", 150, 6, 22, 4, [["8 pieces", 240]]),
];

export const FOOD_BY_ID = new Map(FOODS.map((f) => [f.id, f]));

export function macrosFor(food: { kcal: number; p: number; c: number; f: number }, grams: number) {
  const k = grams / 100;
  return { kcal: Math.round(food.kcal * k), p: +(food.p * k).toFixed(1), c: +(food.c * k).toFixed(1), f: +(food.f * k).toFixed(1) };
}

export function searchFoods(q: string, list: Food[] = FOODS): Food[] {
  const t = q.trim().toLowerCase();
  if (!t) return list;
  const words = t.split(/\s+/);
  return list
    .map((f) => {
      const hay = (f.name + " " + (f.tags || "") + " " + f.cat).toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      const score = f.name.toLowerCase().startsWith(t) ? 0 : f.name.toLowerCase().includes(t) ? 1 : 2;
      return { f, score };
    })
    .filter((x): x is { f: Food; score: number } => !!x)
    .sort((a, b) => a.score - b.score)
    .map((x) => x.f);
}
