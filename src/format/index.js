import dateFormat from 'date-fns/format';
import { conformToMask } from 'react-text-mask';
import last from 'lodash/last';
import dropRight from 'lodash/dropRight';

import { MASKS } from 'app/schemas';

const numbers = value => {
  if (!value) return '';

  return value.replace(/[^\d]/g, '');
};

const phone = value => {
  if (!value) return '';

  const { conformedValue } = conformToMask(
    value,
    MASKS.phone
  );

  return conformedValue;
};

const date = (value, format = 'MMM DD, YYYY') => {
  if (!value) return '';

  return dateFormat(value, format);
};

const taxId = (value, type = 'SSN') => {
  if (!value) return '';

  const formats = {
    'SSN': `xxx-xx-${value}`,
    'EIN': `xx-xxx${value}`
  };

  return formats[type];
};

const currency = (
  value,
  options = {}
) => {
  const number = Number(value);

  if (isNaN(number)) {
    return value;
  } else {
    const format = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      ...options
    });
  
    return format.format(number);
  }
};

const fromCurrency = value => {
  if (!value) return '';

  return parseFloat(String(value).replace(/,|\$/g, ''));
};

const period = (start, end, format) => {
  return (
    joinedText(
      [ date(start, format), date(end, format) ],
      { sep: ' - ' }
    )
  );
};

const joinedText = (value, options = {}) => {
  const {
    sep = ', ',
    filter = Boolean
  } = options;

  return value.filter(filter).join(sep);
};

const fileType = fileName => {
  if (!fileName) return '';

  const split = fileName.split('.');

  return (
    split.length > 1
      ? `.${last(split)}`
      : ''
  );
};

const fileName = fileName => {
  if (!fileName) return '';

  const split = fileName.split('.');

  return (
    split.length > 1
      ? dropRight(split).join('.')
      : fileName
  );
};

const zipCode = value => {
  if (!value) return '';

  const { conformedValue } = conformToMask(
    value,
    MASKS.zipCode
  );

  return conformedValue;
};

const timeFrom12To24 = value => {
  if (!value) return '';

  const getHours = (midday, hours) => {
    if (
      midday === 'PM'
      && hours < 12
    ) {
      return hours + 12;
    }

    if (
      midday === 'AM'
      && hours === 12
    ) {
      return '00';
    }

    return hours;
  };

  const
    allTime = value.split(' '),
    time = allTime[0].split(':'),

    hours = getHours(allTime[1], Number(time[0]));

  return `${hours}:${time[1]}`;
};

const routingNumber = value => {
  if (value.length !== 9) {
    let routingNumber = value;

    for (let i = 0; i < (9 - value.length); i++) {
      routingNumber = '0' + routingNumber;
    }

    return routingNumber;
  }

  return value;
};

export {
  numbers,
  phone,
  date,
  taxId,
  currency,
  fromCurrency,
  period,
  fileType,
  fileName,
  joinedText,
  zipCode,
  timeFrom12To24,
  routingNumber
};