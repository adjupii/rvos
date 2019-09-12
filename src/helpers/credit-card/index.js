import getYear from 'date-fns/get_year';

const getCreditCard = (value, types) => {
  for (let key in types) {
    const type = types[key];

    if (type.pattern.test(value)) {
      return type;
    }
  }

  return {};
};

const getCreditCardYears = addYears => {
  const
    year = getYear(new Date()),
    years = [];

  for (let i = year; i < year + addYears; i++) {
    years.push({
      id: i,
      value: i
    });
  }

  return years;
};

export {
  getCreditCard,
  getCreditCardYears
};