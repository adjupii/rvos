import * as yup from 'yup';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import {
  numbers,
  fromCurrency,
  routingNumber
} from 'app/format';
import { CREDIT_CARD_TYPES } from 'app/helpers/credit-card/constants';
import { getCreditCard } from 'app/helpers/credit-card';

yup.addMethod(yup.mixed, 'requiredFields', function(fields) {
  const fieldNames = fields.map(item => item.path).join(', ');

  return this.test('requiredFields', `Required field(s): ${fieldNames}`, function() {
    for (let i = 0; i < fields.length; i++) {
      const value = this.resolve(fields[i]);

      if (!value) {
        return false;
      }
    }

    return true;
  });
});

const PATTERNS = {
  username: /^[A-Za-z0-9_-]+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,32}$/,
  phone: /^\([0-9]{3}\)(?:\s)[0-9]{3}-[0-9]{4}$/,
  taxNo: /^\d{4,4}$/,
  time12: /(1[012]|[1-9]):[0-5][0-9](?:\s)(A|P)\s*/
};

const MASKS = {
  phone: [ '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ],
  taxNo: [ /\d/, /\d/, /\d/, /\d/ ],
  time12: value => {
    const chars = value.split('');

    return [ /[01]/, chars[0] === '0' ? /[1-9]/ : /[012]/, ':', /[0-5]/, /[0-9]/, ' ', /A|P/, 'M' ];
  },
  zipCode: value => {
    if (numbers(value).length > 5) {
      return [ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ];
    }

    return [ /\d/, /\d/, /\d/, /\d/, /\d/ ];
  },
  creditCard: value => {
    const creditCard = getCreditCard(numbers(value), CREDIT_CARD_TYPES);

    return creditCard.mask || [];
  },
  securityCode: value => {
    if (numbers(value).length > 3) {
      return [ /\d/, /\d/, /\d/, /\d/ ];
    }

    return [ /\d/, /\d/, /\d/ ];
  },
  currency: createNumberMask({ allowDecimal: true })
};

const TESTS = {
  zipCode: value => {
    const { length } = numbers(value);

    return length === 5 || length === 9;
  },
  creditCard: value => {
    const
      valueNumbers = numbers(value),
      creditCard = getCreditCard(valueNumbers, CREDIT_CARD_TYPES);

    return valueNumbers.length === creditCard.length;
  },
  securityCode: value => {
    const { length } = numbers(value);

    return length === 3 || length === 4;
  },
  routingNumber: value => {
    if (
      value.length > 9
      || numbers(value).length !== value.length
    ) {
      return false;
    }

    const values = (
      routingNumber(value)
        .split('')
        .map(value => Number(value))
    );

    const total = (
      3 * (values[0] + values[3] + values[6])
      + 7 * (values[1] + values[4] + values[7])
      + (values[2] + values[5] + values[8])
    );

    return (
      total !== 0
      && total % 10 === 0
        ? true
        : false
    );
  }
};

const signUpStep1 = yup.object({
  policyNo: yup.string(),
  fullName: yup.string(),
  checkId: yup.string(),
  taxNo: yup.string()
    .matches(PATTERNS.taxNo, 'Incorrect format. You can use only numbers'),
  phone: yup.string()
    .matches(PATTERNS.phone, 'Incorrect format. You can use only numbers'),
  required: yup.mixed()
    .when('checkId', {
      is: 'taxNo',
      then: yup.mixed()
        .requiredFields([
          yup.ref('taxNo'),
          yup.ref('policyNo'),
          yup.ref('fullName')
        ])
    })
    .when('checkId', {
      is: 'phone',
      then: yup.mixed()
        .requiredFields([
          yup.ref('phone'),
          yup.ref('policyNo'),
          yup.ref('fullName')
        ])
    })
});  

const signUpStep2 = yup.object({
  email: yup.string()
    .email('The email address appears to be invalid'),
  username: yup.string()
    .matches(PATTERNS.username, 'Invalid username'),
  plainPassword: yup.string()
    .matches(PATTERNS.password, 'Invalid password'),
  passwordConfirm: yup.string()
    .oneOf([ yup.ref('plainPassword') ], 'Passwords not matched!'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('email'),
      yup.ref('username'),
      yup.ref('plainPassword'),
      yup.ref('passwordConfirm')
    ])
});

const signIn = yup.object({
  username: yup.string(),
  password: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('username'),
      yup.ref('password')
    ])
});

const forgotData = yup.object({
  email: yup.string()
    .email('Wrong email address'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('email')
    ])
});

const clarifyData = yup.object({
  policyNo: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('policyNo')
    ])
});

const createPassword = yup.object({
  password: yup.string()
    .matches(PATTERNS.password, 'Invalid password'),
  passwordConfirm: yup.string()
    .oneOf([ yup.ref('password') ], 'Passwords not matched!'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('password'),
      yup.ref('passwordConfirm')
    ])
});

const profilePhone = yup.object({
  phone: yup.string()
    .matches(PATTERNS.phone, 'Invalid Phone'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('phone')
    ])
});

const profileAltPhone = yup.object({
  altPhone: yup.string()
    .matches(PATTERNS.phone, 'Invalid Phone'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('altPhone')
    ])
});

const userEmail = yup.object({
  email: yup.string()
    .email('Wrong email address'),
  password: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('email'),
      yup.ref('password')
    ])
});

const changePassword = yup.object({
  password: yup.string(),
  plainPassword: yup.string()
    .matches(PATTERNS.password, 'Invalid password'),
  passwordConfirm: yup.string()
    .oneOf([ yup.ref('plainPassword') ], 'Passwords not matched!'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('password'),
      yup.ref('plainPassword'),
      yup.ref('passwordConfirm')
    ])
});

const updatePolicyStep1 = yup.object({
  text: yup.string(),
  requestedEffectiveDate: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('text'),
      yup.ref('requestedEffectiveDate')
    ])
});

const updatePolicyStep2 = yup.object({
  respondBy: yup.string().required(),
  respondByValue: yup.string()
    .when('respondBy', {
      is: 'email',
      then: yup.string().email('Wrong email address'),
    })
    .when('respondBy', {
      is: 'phone',
      then: yup.string().matches(PATTERNS.phone, 'Invalid Phone')
    }),
  disclaimer: yup.bool()
    .oneOf([ true ])
});

const newRequestStep1 = yup.object({
  topic: yup.number().required()
});
const newRequestStep2 = yup.object({
  text: yup.string()
});
const newRequestStep3 = yup.object({
  respondBy: yup.string().required(),
  respondByValue: yup.string()
    .when('respondBy', {
      is: 'email',
      then: yup.string().email('Wrong email address'),
    })
    .when('respondBy', {
      is: 'phone',
      then: yup.string().matches(PATTERNS.phone, 'Invalid Phone')
    })
});

const newClaimStep1 = yup.object({
  claimType: yup.string(),
  claimSubType: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('claimType')
    ])
});

const newClaimStep2 = yup.object({
  lossDate: yup.string(),
  lossTime: yup.string()
    .matches(PATTERNS.time12, 'Invalid Time'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('lossDate'),
      yup.ref('lossTime')
    ])
});

const newClaimStep3 = yup.object({
  policyNo: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('policyNo')
    ])
});

const newClaimStep4 = yup.object({
  lossLocationPropertyCode: yup.string().required(),
  lossLocationAddress: yup.string()
    .when('lossLocationPropertyCode', {
      is: 'lossDiff',
      then: yup.string().required()
    }),
  lossLocationCity: yup.string()
    .when('lossLocationPropertyCode', {
      is: 'lossDiff',
      then: yup.string().required()
    }),
  lossLocationState: yup.string()
    .when('lossLocationPropertyCode', {
      is: 'lossDiff',
      then: yup.string().required()
    }),
  lossLocationZip: yup.string()
    .when('lossLocationPropertyCode', {
      is: 'lossDiff',
      then: yup.string()
        .test(
          'zipCode',
          'Invalid Zip code',
          value => value && TESTS.zipCode(value)
        )
    })
});

const newClaimStep5 = yup.object({
  contactPersonName: yup.string(),
  contactPersonPhone: yup.string()
    .matches(PATTERNS.phone, 'Invalid Phone'),
  contactPersonAltPhone: yup.string()
    .matches(PATTERNS.phone, 'Invalid Phone'),
  required: yup.mixed()
    .requiredFields([
      yup.ref('contactPersonName'),
      yup.ref('contactPersonPhone')
    ])
});

const newClaimStep6 = yup.object({
  lossDescription: yup.string(),
  required: yup.mixed()
    .requiredFields([
      yup.ref('lossDescription')
    ])
});

const makePaymentStep1 = yup.object({
  accountNumber: yup.string().required()
});

const makePaymentStep2 = yup.object({
  amount: yup.string()
    .test(
      'amount',
      'Amount must be greater than 0',
      value => (
        value
        && fromCurrency(value) > 0
      )
    )
});

const makePaymentStep3 = yup.object({
  receiptEmailId: yup.string().required(),
  receiptEmail: yup.string()
    .when('receiptEmailId', {
      is: 'another',
      then: yup.string().email('Wrong email address')
    }),
  required: yup.mixed()
    .when('receiptEmailId', {
      is: 'another',
      then: yup.mixed()
        .requiredFields([
          yup.ref('receiptEmail')
        ])
    })
});

const makePaymentStep4 = yup.object({
  type: yup.string().required(),
  creditCardNumber: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string()
        .test(
          'creditCardNumber',
          'Invalid Card Number',
          value => value && TESTS.creditCard(value)
        )
    }),
  creditExpirationDate: yup.array()
    .when('type', {
      is: 'creditCard',
      then: yup.array().of(yup.string().required())
    }),
  creditCardCVV: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string()
        .test(
          'creditCardCVV',
          'Invalid Security Code',
          value => value && TESTS.securityCode(value)
        )
    }),
  billingFirstName: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string().required()
    }),
  billingLastName: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string().required()
    }),
  street: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string().required()
    }),
  city: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string().required()
    }),
  state: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string().required()
    }),
  postalCode: yup.string()
    .when('type', {
      is: 'creditCard',
      then: yup.string()
        .test(
          'zipCode',
          'Invalid Zip code',
          value => value && TESTS.zipCode(value)
        )
    }),
  bankAccountName: yup.string()
    .when('type', {
      is: 'eft',
      then: yup.string().required()
    }),
  bankAccountRoutingNumber: yup.string()
    .when('type', {
      is: 'eft',
      then: yup.string()
        .test(
          'bankAccountRoutingNumber',
          'Invalid Routing Number',
          value => value && TESTS.routingNumber(value)
        )
    }),
  bankAccountNumber: yup.string()
    .when('type', {
      is: 'eft',
      then: yup.string().required()
    }),
  bankAccountType: yup.string()
    .when('type', {
      is: 'eft',
      then: yup.string().required()
    })
});

export {
  signUpStep1,
  signUpStep2,
  signIn,
  forgotData,
  clarifyData,
  createPassword,
  profilePhone,
  profileAltPhone,
  userEmail,
  changePassword,
  updatePolicyStep1,
  updatePolicyStep2,
  newRequestStep1,
  newRequestStep2,
  newRequestStep3,
  newClaimStep1,
  newClaimStep2,
  newClaimStep3,
  newClaimStep4,
  newClaimStep5,
  newClaimStep6,
  makePaymentStep1,
  makePaymentStep2,
  makePaymentStep3,
  makePaymentStep4,
  MASKS
};