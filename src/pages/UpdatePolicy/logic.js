import { updatePolicy } from 'app/api/policies';

import history from 'app/history';

import { notifications } from 'app/components/common/Notifications';
import { date } from 'app/format';

const onAction = (setFetching, policyNumber, values) => {
  setFetching(true);

  const
    {
      requestedEffectiveDate,
      text,
      respondByValue,
      respondBy
    } = values,

    apiParams = {
      requestedEffectiveDate: date(requestedEffectiveDate, 'M-DD-YYYY'),
      text,
      respondByValue,
      respondBy
    };

  updatePolicy(policyNumber, apiParams)
    .then(() => {
      setFetching(false);

      const notify = notifications.create({
        message: 'Your update request is successfully sent!',
        type: 'success'
      });

      history.goBack();
      notify();
    })
    .catch(() => {
      setFetching(false);
    });
};

export {
  onAction
};