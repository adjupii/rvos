export const CREDIT_CARD_TYPES = {
  visa: {
    name: 'visa',
    pattern: /^4/,
    mask: [ /[4]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ],
    length: 16
  },

  masterCard: {
    name: 'master-card',
    pattern: /^[52]/,
    mask: [ /[52]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ],
    length: 16
  },

  americanExpress: {
    name: 'american-express',
    pattern: /^3/,
    mask: [ /[3]/, /[47]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/ ],
    length: 15
  },

  discover: {
    name: 'discover',
    pattern: /^6/,
    mask: [ /[6]/, /[0]/, /[1]/, /[1]/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ],
    length: 16
  }
};

export const CREDIT_CARD_MONTHS = [
  {
    id: 0,
    value: '01 - Jan'
  },
  {
    id: 1,
    value: '02 - Feb'
  },
  {
    id: 2,
    value: '03 - Mar'
  },
  {
    id: 3,
    value: '04 - Apr'
  },
  {
    id: 4,
    value: '05 - May'
  },
  {
    id: 5,
    value: '06 - Jun'
  },
  {
    id: 6,
    value: '07 - Jul'
  },
  {
    id: 7,
    value: '08 - Aug'
  },
  {
    id: 8,
    value: '09 - Sep'
  },
  {
    id: 9,
    value: '10 - Oct'
  },
  {
    id: 10,
    value: '11 - Nov'
  },
  {
    id: 11,
    value: '12 - Dec'
  }
];