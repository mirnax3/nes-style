export const makeIntentStyles = ({ intent }: IntentProp) => ({
  'is-primary': intent === 'primary',
  'is-success': intent === 'success',
  'is-warning': intent === 'warning',
  'is-error': intent === 'error'
});
