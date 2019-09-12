import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useToggle } from 'app/hooks/toggle';

import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import {
  Row,
  Col
} from 'app/components/common/Grid';
import Section from './Section';
import Expander from 'app/components/common/Expander';

const Sections = ({
  mainSections = [],
  sections,
  isExpanded = true,
  data,
  title,
  iconName,
  indents = '0 0 20px',
  className
}) => {
  const isMainSectionsExist = !!mainSections.length;

  const [ isOpen, toggleIsOpen ] = useToggle(!isMainSectionsExist);

  return (
    <TitleWithIcon
      value={title}
      iconName={iconName}
      className={className}
    >
      {
        isMainSectionsExist && (
          <Row className="row-middle">
            {
              mainSections.map((
                {
                  valueKey,
                  ...section
                },
                index
              ) => {
                const value = data[valueKey];

                const isLast = index === (mainSections.length - 1);

                return (
                  <Section
                    key={valueKey}
                    section={{
                      value,
                      indents,
                      colClassName: classNames({
                        'col-12 col-m-6': !isLast,
                        'col-10 col-m-5': isLast
                      }),
                      ...section
                    }}
                    data={data}
                  />
                );
              })
            }

            {
              isMainSectionsExist
              && isExpanded
              && (
                <Col className="col-2 col-m-1">
                  <div css={`margin: ${indents}`}>
                    <Expander
                      isExpanded={isOpen}
                      onClick={toggleIsOpen}
                    />
                  </div>
                </Col>
              )
            }
          </Row>
        )
      }

      {
        isOpen && (
          <Row>
            {
              sections.map(({
                valueKey,
                ...section
              }) => {
                const value = data[valueKey];

                if (value !== undefined) {
                  return (
                    <Section
                      key={valueKey}
                      section={{
                        value,
                        indents,
                        colClassName: 'col-12 col-m-6',
                        ...section
                      }}
                      data={data}
                    />
                  );
                }

                return null;
              })
            }
          </Row>
        )
      }
    </TitleWithIcon>
  );
};

Sections.propTypes = {
  mainSections: PropTypes.arrayOf(PropTypes.object),
  sections: PropTypes.arrayOf(PropTypes.object),
  isExpanded: PropTypes.bool,
  data: PropTypes.object,
  title: PropTypes.string,
  iconName: PropTypes.string,
  indents: PropTypes.string,
  className: PropTypes.string
};

export default Sections;