/** Which movement type (and so which form checks) an exercise gets, from its name. */
import type { Lift } from "./analyze";

const RULES: [RegExp, Lift][] = [
  [/plank|hollow hold|wall sit/i, "plank"],
  // moves where no single joint angle tells the story: general checks (range, control, steadiness)
  [/fly|flye|crossover|leg raise|crunch|rollout|twist|burpee|shrug|farmer|carry|muscle-?up/i, "general"],
  [/leg press/i, "legpress"],
  [/leg curl|hamstring curl|nordic/i, "legcurl"],
  [/leg extension/i, "legext"],
  [/calf/i, "calf"],
  [/hip thrust|glute bridge|bridge/i, "hipthrust"],
  [/split squat|lunge|step-?up|bulgarian|pistol/i, "lunge"],
  [/squat/i, "squat"],
  [/deadlift|rdl|romanian|good ?morning|rack pull|kettlebell swing|swing/i, "deadlift"],
  [/pike push|push-?up|press-?up/i, "pushup"],
  [/overhead press|shoulder press|military|seated dumbbell press|arnold|push press|clean and press|overhead dumbbell press/i, "press"],
  [/overhead tricep|tricep|pushdown|push-down|skull|kickback|extension/i, "triceps"],
  [/bench|chest press|floor press|incline|decline|dumbbell press/i, "bench"],
  [/pull-?up|chin-?up|pulldown|pull-down|lat pull/i, "pull"],
  [/row|face pull/i, "row"],
  [/dip/i, "dip"],
  [/curl/i, "curl"],
  [/raise|lateral|front raise|y-raise/i, "raise"],
];

export function patternFor(name: string): Lift {
  for (const [re, lift] of RULES) if (re.test(name)) return lift;
  return "general";
}
