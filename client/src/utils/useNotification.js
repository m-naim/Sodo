import { useState, useEffect } from 'react';

import {
  isPushNotificationSupported,
  askUserPermission,
  registerServiceWorker,
  sendNotification,
} from '../workers/push-notifications';


const pushNotificationSupported = isPushNotificationSupported();

export default function usePushNotifications() {
  const [userConsent, setSuserConsent] = useState(Notification.permission);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pushNotificationSupported) {
      setLoading(true);
      setError(false);
      registerServiceWorker().then(() => {
        setLoading(false);
      });
    }
  }, []);


  const onClickAskUserPermission = () => {
    setLoading(true);
    setError(false);
    askUserPermission().then((consent) => {
      setSuserConsent(consent);
      if (consent !== 'granted') {
        setError({
          name: 'Consent denied',
          message: 'You denied the consent to receive notifications',
          code: 0,
        });
      }
      setLoading(false);
    });
  };


  const onClickSendNotification = async () => {
    sendNotification();
  };


  return {
    onClickAskUserPermission,
    onClickSendNotification,
    userConsent,
    pushNotificationSupported,
    error,
    loading,
  };
}
