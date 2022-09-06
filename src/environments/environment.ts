export const environment = {
  name: 'development',
  production: true,
  features: [
    {
      isActive: true,
      name: 'discount',
    },
    {
      isActive: false,
      name: 'statistics',
    },
    {
      isActive: false,
      name: 'notification',
    },
    {
      name: 'loggingSystem',
      isActive: true,
      type: 'Sentry',
    },
  ],
};
