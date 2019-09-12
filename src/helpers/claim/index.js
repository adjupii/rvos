import queryString from 'qs';

export const getClaimStatus = status => (
  status === 'Open' ? 'active' : 'closed'
);

export const getClaimIdType = claimNumber => {
  if (!claimNumber) {
    return 'fnolNumber';
  }

  return 'claimNumber';
};

export const getClaimLink = (
  claim = {},
  params = {}
) => {
  const
    {
      claimNumber,
      fnolNo
    } = claim,

    id = claimNumber || fnolNo,
    idType = getClaimIdType(claimNumber),

    query = queryString.stringify(
      {
        idType,
        ...params
      },
      { addQueryPrefix: true }
    );

  return `/app/claims/${id}${query}`;
};

export const getClaimTypeLobs = (lobs = []) => {
  if (!lobs.includes('*')) {
    return { lobs };
  }

  return {};
};