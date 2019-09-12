import {
  getPolicyInsureds,
  getPolicyProperty,
  getPolicyLocations,
  getPolicyCoverage,
  getPolicyDiscounts,
  getPolicyMortgagee
} from 'app/api/policies';

import INSUREDS from './sections/insureds';
import PROPERTY_DETAILS from './sections/property_details';
import LOCATIONS from './sections/locations';
import COVERAGES from './sections/coverages';
import DISCOUNTS from './sections/discounts';
import MORTGAGEE from './sections/mortgagee';

export default {
  insureds: {
    api: getPolicyInsureds,
    section: INSUREDS
  },
  property_details: {
    api: getPolicyProperty,
    section: PROPERTY_DETAILS
  },
  locations: {
    api: getPolicyLocations,
    section: LOCATIONS
  },
  coverages: {
    api: getPolicyCoverage,
    section: COVERAGES
  },
  discounts: {
    api: getPolicyDiscounts,
    section: DISCOUNTS,
    emptyState: 'No discounts and/or surcharges were found for this policy.'
  },
  mortgagee: {
    api: getPolicyMortgagee,
    section: MORTGAGEE
  }
};