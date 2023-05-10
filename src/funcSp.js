const findModulos = (number) => {
  const absNum = Math.abs(number);

  if (absNum === 1 || absNum === 0) {
    return [1];
  }

  const modulos = [];
  for (let i = 2; i <= absNum; i++) {
    if (number % i === 0) {
      modulos.push(i);
    }
  }

  return modulos.reduce((acc, curr, idx) => {
    acc.push(...[-curr, curr]);

    return acc;
  }, []);
};

export { findModulos };
