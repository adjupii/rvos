import api from 'app/api';
import queryString from 'qs';

const getClaims = async () => {
  try {
    const { data } = await api.get('claims');

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimDetails = async (
  id,
  params = {}
) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`claim/${id}/first-notice-of-loss-report${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimPeople = async (
  id,
  params = {}
) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`claim/${id}/people${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimProperty = async (
  id,
  params = {}
) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`claim/${id}/properties${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimPayments = async id => {
  try {
    const { data } = await api.get(`claim/${id}/payments`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimTypes = async () => {
  try {
    const { data } = await api.get('claim/types');

    return data;
  } catch (error) {
    throw error;
  }
};

const createNewClaim = async params => {
  try {
    const { data } = await api.post('claims', { claim_creation: params });

    return data;
  } catch (error) {
    throw error;
  }
};

const getClaimAdjusters = async id => {
  try {
    const { data } = await api.get(`claim/${id}/adjusters`);

    return data;
  } catch (error) {
    throw error;
  }
};

const uploadDocument = async (
  file,
  fileIndex,
  {
    idType,
    id
  },
  setStatus
) => {
  let status;

  try {
    const formData = new FormData();

    formData.append('claim_file[file]', file);
    formData.append(`claim_file[${idType}]`, id);

    const { data } = await api.post(
      'files/claims/upload',
      formData,
      {
        onUploadProgress: ({
          loaded,
          total
        }) => {
          status = Math.round((loaded * 100) / total);

          setStatus(fileIndex, status);
        }
      }
    );

    return data;
  } catch (error) {
    const message = (
      error.code === 406
        ? 'Sorry, we do not support this file type'
        : 'Something went wrong. Please, try again'
    );

    setStatus(fileIndex, status || 0, message);
  }
};

export {
  getClaims,
  getClaimDetails,
  getClaimPayments,
  getClaimPeople,
  getClaimProperty,
  getClaimTypes,
  createNewClaim,
  getClaimAdjusters,
  uploadDocument
};