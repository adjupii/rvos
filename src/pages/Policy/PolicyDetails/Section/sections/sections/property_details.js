import React from 'react';

import Sections from 'app/components/EntityDetails/Sections';

export default {
  underwriting: props => (
    <Sections
      title="Underwriting info"
      iconName="Underwriting"
      sections={[
        {
          label: 'Miles To Responding Fire Station',
          valueKey: 'distanceToFirestation'
        },
        {
          label: 'Distance To Fire Hydrant',
          valueKey: 'distanceToHydrant'
        },
        {
          label: 'Protection Class',
          valueKey: 'protectionClass'
        }
      ]}
      {...props}
    />
  ),
  dwelling: props => (
    <Sections
      title="Dwelling info"
      iconName="House"
      sections={[
        {
          label: 'Exterior Wall Type',
          valueKey: 'exteriorWall'
        },
        {
          label: 'Total Finished Square Feet',
          valueKey: 'squareFootage',
          getValue: value => `${value} sq. ft.`
        },
        {
          label: 'Year Built',
          valueKey: 'yearBuilt'
        },
        {
          label: 'Foundation Type',
          valueKey: 'foundation'
        }
      ]}
      {...props}
    />
  ),
  roof: props => (
    <Sections
      title="Roof details"
      iconName="Roof"
      sections={[
        {
          label: 'Roof Type',
          valueKey: 'roofType'
        },
        {
          label: 'Year Roof Installed',
          valueKey: 'roofLastReplace'
        },
        {
          label: 'Roof Style',
          valueKey: 'roofStyle'
        },
        {
          label: 'Is Roof Insurable',
          valueKey: 'roofInsurable',
          getValue: value => value ? 'Yes' : 'No'
        }
      ]}
      {...props}
    />
  ),
  attachedStructures: props => (
    <Sections
      title="Attached structures"
      iconName="AttachedStructures"
      sections={[
        {
          label: 'Type Of Garage',
          valueKey: 'garage'
        },
        {
          label: 'Deck Type',
          valueKey: 'deckType'
        },
        {
          label: 'Deck Square Feet',
          valueKey: 'deckSqft'
        },
        {
          label: 'Carport Square Feet',
          valueKey: 'carportSqft'
        },
        {
          label: 'Open Porch Square Feet',
          valueKey: 'openPorchSqft'
        },
        {
          label: 'Enclosed Porch Square Feet',
          valueKey: 'closedPorchSqft'
        }
      ]}
      {...props}
    />
  )
};