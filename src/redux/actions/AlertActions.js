export const actions = {
  SHOW_ALERT_ERROR: 'ERROR',
  SHOW_ALERT_SUCCESS: 'SUCCESS',
  SHOW_ALERT_WARNING: 'WARNINGS',
};

export const actionShowAlert = {
  error: () => ({type: actions.SHOW_ALERT_ERROR}),
  success: () => ({type: actions.SHOW_ALERT_SUCCESS}),
  warnings: () => ({type: actions.SHOW_ALERT_WARNING}),
};
