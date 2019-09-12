import { useMemo } from 'react';

const useCircumference = radius => useMemo(
  () => 2 * 3.142 * radius,
  [ radius ]
);

const useDashOffset = (items, total, circumference) => (
  useMemo(
    () => (
      items.reduce((dashOffset, item, i) => {
        const
          dashFirst = (
            (item.value / total * 100)
            * (circumference / 100)
          ),
          dashSecond = circumference - dashFirst,

          offset = (
            i === 0
              ? (circumference / 100) * 25
              : (
                circumference
                - dashOffset[i - 1].dash[0]
                + dashOffset[i - 1].offset
              )
          );

        dashOffset[i] = {
          dash: [
            dashFirst,
            dashSecond
          ],
          offset
        };

        return dashOffset;
      }, {})
    ),
    [ items, total, circumference ]
  )
);

export {
  useCircumference,
  useDashOffset
};