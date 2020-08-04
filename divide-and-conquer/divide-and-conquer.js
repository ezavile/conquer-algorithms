function sum(list) {
  if (list.length === 0) return 0;
  
  return list[0] + sum(list.slice(1))
}

function count(list) {
  if (list.length === 0) return 0;

  return 1 + count(list.slice(1));
}

function max(list) {
  if (list.length === 2) {
    const [a, b] = list;

    return a > b ? a : b;
  };

  const subMax = max(list.slice(1));

  return list[0] > subMax ? list[0] : subMax;
}

module.exports = {
  sum,
  count,
  max,
}