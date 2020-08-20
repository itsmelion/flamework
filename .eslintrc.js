module.exports = {
  extends: [
    'lion/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true },
    ],
  },
};
