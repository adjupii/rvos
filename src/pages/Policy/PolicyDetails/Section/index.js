import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import SECTIONS from './sections';

import { useApi } from 'app/hooks/api';

import { date } from 'app/format';

import Loader from 'app/components/common/Loader';

const Section = ({
  sectionKey,
  policyNumber,
  selectedTerm
}) => {
  const
    {
      api: fetchData,
      emptyState = null
    } = SECTIONS[sectionKey],

    api = useCallback(
      () => {
        const params = {
          asOfDate: date(selectedTerm, 'MM-DD-YYYY')
        };

        return (
          fetchData(policyNumber, params)
        );
      },
      [
        fetchData,
        policyNumber,
        selectedTerm
      ]
    ),

    [ fetching, data ] = useApi(api);

  if (fetching) {
    return <Loader />;
  }

  if (data) {
    if (!isEmpty(data)) {
      const
        { section } = SECTIONS[sectionKey],

        subSections = Object.keys(section);

      let subSectionIndex = 0;

      return (
        subSections.map(subSectionKey => {
          const subSectionData = (
            subSections.length === 1 ? data : data[subSectionKey]
          );

          if (!isEmpty(subSectionData)) {
            subSectionIndex++;

            const subSection = section[subSectionKey];

            return (
              subSection({
                key: subSectionKey,
                data: subSectionData,
                isOpen: subSectionIndex === 1
              })
            );
          }

          return null;
        })
      );
    }

    return emptyState;
  }

  return null;
};

Section.propTypes = {
  sectionKey: PropTypes.string,
  policyNumber: PropTypes.string,
  selectedTerm: PropTypes.string
};

export default Section;