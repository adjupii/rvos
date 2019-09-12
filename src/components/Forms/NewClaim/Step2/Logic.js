import {
  compose,
  withHandlers,
  lifecycle
} from 'recompose';
import { withFormik } from 'formik';
import addYears from 'date-fns/add_years';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import isWithinRange from 'date-fns/is_within_range';

import { notifications } from 'app/components/common/Notifications';

import withStep from 'app/components/Steps/withStep';

import { newClaimStep2 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      lossDate: '',
      lossTime: '12:00 AM',
      lossTimeChecked: false
    }),
    validationSchema: schema
  }),

  withStep,

  withHandlers({
    handleLossDate: ({ setFieldValue }) => (name, selectedDay) => {
      const
        date = new Date(),
        currentDate = new Date(
          getYear(date),
          getMonth(date),
          getDate(date),
          12, 0, 0
        ),
        yearBefore = addYears(currentDate, -2),
        isDateMoreOneYearAgo = !isWithinRange(selectedDay, yearBefore, currentDate);

      setFieldValue(name, selectedDay);

      if (isDateMoreOneYearAgo) {
        const notify = notifications.create({
          id: 'loss-date-warning',
          message: 'Was loss date more than two years ago?',
          timeout: 0,
          close: true
        });

        notify();
      } else {
        notifications.remove({ id: 'loss-date-warning' });
      }
    },

    handleLossTimeChecked: ({
      setValues,
      values: { lossDate }
    }) => ({
      target: { checked }
    }) => {
      setValues({
        lossDate,
        lossTime: checked ? '' : '12:00 AM',
        lossTimeChecked: checked
      });
    }
  }),

  lifecycle({
    componentWillUnmount() {
      notifications.remove({ id: 'loss-date-warning' });
    }
  })
);