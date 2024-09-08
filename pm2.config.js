// PM2 config in fork mode

module.exports = {
  apps: [
    {
      name: "app",
      script: "npm run start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};