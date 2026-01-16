export default () => {
  const fetchForCallData = async (payload: { phone: string; name: string; question?: string }) => {
    return $fetch('/api/telegram/call', {
      method: 'POST',
      body: payload,
    });
  };
  const fetchForRegistrationData = async (payload: {
    date: string | Date;
    phone: string;
    name: string;
    chosenService: string;
  }) => {
    return $fetch('/api/telegram/register', {
      method: 'POST',
      body: {
        ...payload,
        date: typeof payload.date === 'string' ? payload.date : payload.date.toString(),
      },
    });
  };
  return {
    fetchForCallData,
    fetchForRegistrationData,
  };
}
