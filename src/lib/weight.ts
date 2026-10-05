/** Weight on or before a date - calorie maths follows your weight as it changes. */
export function weightOnDate(days: Record<string, { weight?: number | null }>, date: string): number | null {
  const ds = Object.keys(days).filter((k) => k <= date && days[k].weight != null).sort();
  return ds.length ? days[ds[ds.length - 1]].weight! : null;
}
