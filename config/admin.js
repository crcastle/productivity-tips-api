module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1debbc507055d874a509f3f35a415109'),
  },
});
