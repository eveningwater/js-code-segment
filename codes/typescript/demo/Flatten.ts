type Flatten<A extends any[], T extends any[] = []> = A extends [infer X, ...infer Y] ? X extends any[] ? Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]> : T;
type flattenFlatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]