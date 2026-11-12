const same = (a, b) => a.toLowerCase() === b.toLowerCase();
const overlap = (xs, ys) => xs.filter((x) => ys.some((y) => same(x, y)));

/* theyTeachMe: skills they can teach that I want. iTeachThem: skills I can teach that they want. */
export function matchWith(me, p) {
  const theyTeachMe = overlap(p.teach, me.learn);
  const iTeachThem = overlap(me.teach, p.learn);
  return { theyTeachMe, iTeachThem, mutual: theyTeachMe.length > 0 && iTeachThem.length > 0, score: theyTeachMe.length + iTeachThem.length };
}
