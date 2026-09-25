/**
 * Exercise know-how the Coach draws on: form cues, swaps (same muscles, different kit or less strain)
 * and accessories that fix a specific weak point. Movement-type defaults cover every exercise;
 * the big lifts get their own, more specific advice.
 */
import type { Lift } from "../form/analyze";
import { patternFor } from "../form/patterns";

export interface Idea { name: string; why: string }
export interface Know { cues: string[]; swaps: Idea[]; accessories: Idea[] }

const BY_PATTERN: Record<Lift, Know> = {
  squat: {
    cues: ["Brace your core before you go down", "Knees push out over your toes", "Sit between your heels, chest up", "Drive up through your whole foot"],
    swaps: [{ name: "Goblet Squat", why: "Easier to keep your chest up and hit depth" }, { name: "Leg Press", why: "Same legs, no back loading - good on sore days" }, { name: "Hack Squat", why: "Guided path, lets you push your quads hard" }],
    accessories: [{ name: "Bulgarian Split Squat", why: "Fixes left/right imbalances and builds quads" }, { name: "Romanian Deadlift", why: "Stronger hamstrings and glutes out of the bottom" }, { name: "Paused squats", why: "2-second pause at the bottom builds strength where most people stall" }],
  },
  deadlift: {
    cues: ["Bar over mid-foot, shins close", "Take the slack out before you pull", "Push the floor away - chest and hips rise together", "Finish tall with your glutes, don't lean back"],
    swaps: [{ name: "Romanian Deadlift", why: "More hamstring focus, lighter on the lower back" }, { name: "Trap-bar deadlift", why: "More upright, easier to learn and on the back" }, { name: "Hip Thrust", why: "Glute strength without spinal loading" }],
    accessories: [{ name: "Paused deadlift (just off the floor)", why: "Teaches you to hold position when hips want to shoot up" }, { name: "Back extensions", why: "Builds the lower back endurance to hold a flat back" }, { name: "Barbell Row", why: "Upper back strength keeps the bar close" }],
  },
  press: {
    cues: ["Squeeze glutes and brace - ribs down", "Bar starts on your collarbone", "Push your head 'through the window' at the top", "Elbows slightly in front of the bar"],
    swaps: [{ name: "Seated Dumbbell Press", why: "Each arm works alone and the back is supported" }, { name: "Arnold Press", why: "Bigger range for the front of the shoulder" }, { name: "Landmine press", why: "Kinder on stiff shoulders" }],
    accessories: [{ name: "Lateral Raise", why: "Bigger, stronger side delts" }, { name: "Tricep Pushdown", why: "Triceps finish the lockout" }, { name: "Face Pull", why: "Balances pressing and keeps shoulders healthy" }],
  },
  pushup: {
    cues: ["Hands under shoulders, body in one line", "Squeeze glutes and brace", "Elbows at about 45°, not flared", "Chest to a fist from the floor"],
    swaps: [{ name: "Incline push-up", why: "Hands on a bench makes it easier to use full range" }, { name: "Dumbbell Bench Press", why: "Same muscles, easy to add weight" }, { name: "Dips", why: "Harder, more triceps and chest" }],
    accessories: [{ name: "Plank", why: "A stronger core stops the hips sagging" }, { name: "Tricep Pushdown", why: "Stronger lockout" }, { name: "Slow negatives", why: "3-second lowering builds strength fast" }],
  },
  bench: {
    cues: ["Shoulder blades squeezed together and down", "Feet planted, slight arch", "Bar touches lower chest, forearms vertical", "Press back towards your face slightly"],
    swaps: [{ name: "Dumbbell Bench Press", why: "Bigger range, fixes side-to-side imbalances" }, { name: "Incline Dumbbell Press", why: "More upper chest, easier on shoulders" }, { name: "Push-up", why: "No equipment needed" }],
    accessories: [{ name: "Close-grip Bench Press", why: "Triceps strength for the top half" }, { name: "Paused bench (1 s on the chest)", why: "Strength off the chest, no bouncing" }, { name: "Barbell Row", why: "A strong upper back gives you a stable base to press from" }],
  },
  pull: {
    cues: ["Start from a full hang, shoulders engaged", "Drive elbows down to your ribs", "Chest to the bar, no swinging", "Lower under control"],
    swaps: [{ name: "Lat Pulldown", why: "Adjustable weight to build up to pull-ups" }, { name: "Assisted pull-up (band)", why: "Full range while you get stronger" }, { name: "Inverted Row", why: "Easier bodyweight pull" }],
    accessories: [{ name: "Slow negatives", why: "Jump up, lower in 4 seconds - builds pull-up strength fast" }, { name: "Dumbbell Row", why: "More back strength with heavier loads" }, { name: "Bicep Curl", why: "Arms are often the weak link on chin-ups" }],
  },
  row: {
    cues: ["Flat back, brace your core", "Pull to your lower ribs", "Squeeze shoulder blades together at the top", "Let the weight stretch you forward, then pull"],
    swaps: [{ name: "Chest-supported row", why: "No lower back involvement, no cheating" }, { name: "Cable Row", why: "Constant tension, easy to control" }, { name: "Dumbbell Row", why: "One arm at a time, bigger range" }],
    accessories: [{ name: "Face Pull", why: "Rear delts and upper back for posture" }, { name: "Lat Pulldown", why: "Adds vertical pulling for a wider back" }, { name: "Paused rows (1 s squeeze)", why: "Stops momentum taking over" }],
  },
  lunge: {
    cues: ["Long enough step that your front shin stays fairly upright", "Back knee drops straight down", "Chest tall", "Push through your front heel"],
    swaps: [{ name: "Reverse Lunge", why: "Easier on the knees and balance" }, { name: "Bulgarian Split Squat", why: "More quad and glute, more stable" }, { name: "Step-up", why: "Simple and knee-friendly" }],
    accessories: [{ name: "Calf Raise", why: "Better ankle strength and balance" }, { name: "Hip Thrust", why: "Stronger glutes for driving up" }, { name: "Side plank", why: "Stops you wobbling side to side" }],
  },
  curl: {
    cues: ["Elbows pinned to your sides", "Squeeze hard at the top", "Lower in 2–3 seconds", "No swinging - if you have to, go lighter"],
    swaps: [{ name: "Hammer Curl", why: "Hits the forearm and brachialis too" }, { name: "Preacher Curl", why: "Locks your elbows - no cheating possible" }, { name: "Cable curl", why: "Tension through the whole rep" }],
    accessories: [{ name: "Chin-up", why: "Heavy compound work for the biceps" }, { name: "Incline dumbbell curl", why: "Stretches the biceps for more growth" }],
  },
  triceps: {
    cues: ["Upper arms stay still", "Lock out fully and squeeze", "Control the way back", "Keep your wrists straight"],
    swaps: [{ name: "Overhead Tricep Extension", why: "Stretches the long head for more growth" }, { name: "Skull Crusher", why: "Heavier loading" }, { name: "Close-grip push-up", why: "No equipment needed" }],
    accessories: [{ name: "Close-grip Bench Press", why: "Heavy compound triceps work" }, { name: "Dips", why: "Big triceps and chest builder" }],
  },
  dip: {
    cues: ["Shoulders down, away from your ears", "Lower to about 90° at the elbow", "Slight forward lean for chest, upright for triceps", "Lock out at the top"],
    swaps: [{ name: "Bench dips", why: "Easier, feet on the floor" }, { name: "Assisted dips (band or machine)", why: "Full range while you build strength" }, { name: "Close-grip Bench Press", why: "Same muscles, easier on shoulders" }],
    accessories: [{ name: "Tricep Pushdown", why: "Stronger lockout" }, { name: "Push-up", why: "Builds chest and shoulder stability" }],
  },
  raise: {
    cues: ["Slight bend in the elbows, locked", "Lead with your elbows, not your hands", "Stop at shoulder height", "Lower slowly - that's where the work is"],
    swaps: [{ name: "Cable lateral raise", why: "Tension at the bottom too" }, { name: "Leaning lateral raise", why: "Bigger range for the side delt" }, { name: "Machine lateral raise", why: "Hard to cheat" }],
    accessories: [{ name: "Overhead Press", why: "Heavy pressing builds overall shoulder size" }, { name: "Face Pull", why: "Balances the front and back of the shoulder" }],
  },
  calf: {
    cues: ["Full stretch at the bottom", "Rise as high as you can", "Pause 1 second at the top", "Knees straight (standing) or bent (seated)"],
    swaps: [{ name: "Seated calf raise", why: "Targets the lower calf muscle" }, { name: "Single-leg calf raise", why: "Harder with no equipment" }],
    accessories: [{ name: "Walking Lunge", why: "Balance and ankle strength" }],
  },
  legcurl: {
    cues: ["Hips pressed into the pad", "Curl all the way in", "Squeeze, then lower in 2–3 seconds"],
    swaps: [{ name: "Romanian Deadlift", why: "Hamstrings with free weights" }, { name: "Nordic curl", why: "Very strong hamstring builder, no machine" }, { name: "Swiss-ball leg curl", why: "Home option" }],
    accessories: [{ name: "Hip Thrust", why: "Glutes and hamstrings work together" }],
  },
  legext: {
    cues: ["Back against the pad", "Straighten fully and squeeze your quads", "Lower slowly"],
    swaps: [{ name: "Goblet Squat", why: "Quads with free weights" }, { name: "Split squat", why: "Home option" }],
    accessories: [{ name: "Leg Press", why: "Heavy quad work" }],
  },
  hipthrust: {
    cues: ["Upper back on the bench edge", "Shins vertical at the top", "Chin tucked, ribs down", "Squeeze your glutes hard for 1 second"],
    swaps: [{ name: "Glute Bridge", why: "Floor version, easier to set up" }, { name: "Cable pull-through", why: "Standing hip extension" }, { name: "Romanian Deadlift", why: "Glutes and hamstrings, standing" }],
    accessories: [{ name: "Bulgarian Split Squat", why: "Single-leg glute strength" }, { name: "Side-lying leg raises", why: "Side glutes for hip stability" }],
  },
  legpress: {
    cues: ["Lower back stays on the pad", "Knees to at least 90°", "Push through your whole foot", "Don't snap your knees straight"],
    swaps: [{ name: "Hack Squat", why: "Similar, more quad focus" }, { name: "Goblet Squat", why: "Free-weight option" }, { name: "Bulgarian Split Squat", why: "One leg at a time, no machine" }],
    accessories: [{ name: "Leg Extension", why: "Extra quad work" }, { name: "Leg Curl", why: "Balances quads and hamstrings" }],
  },
  plank: {
    cues: ["Elbows under shoulders", "Squeeze glutes, tuck your pelvis slightly", "One straight line head to heels", "Breathe - don't hold your breath"],
    swaps: [{ name: "Dead bug", why: "Easier on the lower back" }, { name: "Side plank", why: "Works the sides of your core" }, { name: "Ab Wheel Rollout", why: "Much harder progression" }],
    accessories: [{ name: "Hanging Leg Raise", why: "Lower abs and grip" }, { name: "Cable Crunch", why: "Loaded ab work" }],
  },
  general: {
    cues: ["Control every rep - about 1 second up, 2 down", "Use a full range you can control", "Brace your core", "Stop the set when form starts to slip"],
    swaps: [],
    accessories: [],
  },
};

/** A few exercises that deserve their own advice on top of the movement-type defaults. */
const BY_NAME: Record<string, Partial<Know>> = {
  "Front Squat": { cues: ["Elbows high, bar resting on your shoulders", "Stay tall - it's more upright than a back squat", "Sit straight down"] },
  "Romanian Deadlift": { cues: ["Soft knees, fixed", "Push your hips back until you feel your hamstrings", "Bar slides down your thighs", "Stop when your back wants to round"] },
  "Sumo Deadlift": { cues: ["Wide stance, toes out", "Knees out over toes", "Chest up, hips close to the bar"] },
  "Incline Bench Press": { cues: ["Bench at 30–45°", "Bar touches just below the collarbone", "Shoulder blades pinned"] },
  "Face Pull": { cues: ["Rope at face height", "Pull to your forehead, hands apart", "Thumbs point back at the end"], accessories: [{ name: "Rear Delt Fly", why: "More rear delt work" }] },
  "Lat Pulldown": { cues: ["Lean back slightly", "Pull the bar to your upper chest", "Elbows down and back"] },
  "Chin-up": { cues: ["Palms facing you", "Chest to the bar", "Full hang every rep"] },
  "Hip Thrust": { cues: ["Bar in your hip crease (use a pad)", "Shins vertical at the top", "Chin tucked"] },
  "Walking Lunge": { cues: ["Long step, back knee to just off the floor", "Stay tall", "Push off the front heel into the next step"] },
};

export function knowFor(name: string): Know & { lift: Lift } {
  const lift = patternFor(name);
  const base = BY_PATTERN[lift], extra = BY_NAME[name] ?? {};
  const noSelf = (xs: Idea[]) => xs.filter((x) => x.name.toLowerCase() !== name.toLowerCase());
  return {
    lift,
    cues: extra.cues ?? base.cues,
    swaps: noSelf(extra.swaps ?? base.swaps),
    accessories: noSelf([...(extra.accessories ?? []), ...base.accessories]).slice(0, 3),
  };
}

/** What to do about a specific form-check result (by check id), per movement type. */
export const FIX_FOR: Record<string, Idea> = {
  "squat:depth": { name: "Goblet squat to a box + ankle mobility", why: "Grooves depth with a light load; tight ankles are the usual reason depth is short" },
  "squat:torso": { name: "Paused front squats or goblet squats", why: "Both force an upright chest" },
  "squat:heels": { name: "Ankle mobility + heel wedge or squat shoes", why: "Lets you sit down without your heels lifting" },
  "squat:knees": { name: "Banded squats + glute bridges", why: "Trains your knees to push out" },
  "deadlift:hips": { name: "Paused deadlifts just off the floor", why: "Teaches you to leg-press the floor away" },
  "deadlift:bar": { name: "Deadlifts with a 'drag the shins' cue, lighter", why: "Keeps the bar over mid-foot" },
  "bench:stack": { name: "Try a slightly different grip width", why: "Vertical forearms are your strongest position" },
  "bench:depth": { name: "Paused bench, 1 second on the chest", why: "Builds strength and full range off the chest" },
  "pull:hang": { name: "Slow negatives from the top", why: "Builds strength through the full range" },
  "pull:top": { name: "Assisted pull-ups with a band", why: "Lets you reach the bar every rep while you get stronger" },
  "curl:elbows": { name: "Preacher curls", why: "The pad pins your elbows so your biceps do the work" },
  "curl:steady": { name: "Seated or wall-supported curls", why: "Your back can't swing the weight" },
  "row:steady": { name: "Chest-supported rows", why: "Takes momentum out of the lift" },
  "raise:steady": { name: "Seated lateral raises", why: "No body swing possible" },
  "pushup:line": { name: "Planks + push-ups from the knees", why: "Builds the core to hold a straight line" },
  "pushup:depth": { name: "Incline push-ups", why: "Full range with less load" },
  "lunge:depth": { name: "Split squats (static)", why: "Easier to balance and sink deeper" },
  "press:lean": { name: "Seated dumbbell press", why: "The bench stops you leaning back" },
  tempo: { name: "Tempo reps: 3 seconds down", why: "Builds control and more muscle" },
  fatigue: { name: "Stop 1–2 reps earlier, or drop the weight 5%", why: "Keeps every rep a good rep" },
};
