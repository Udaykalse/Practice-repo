let user = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }];
let ids = user.map((uid) => uid.id);
let duplicates = ids.filter((itM, idX) => ids.indexOf(itM) !== itM);
console.log([...new Set(duplicates)]);
