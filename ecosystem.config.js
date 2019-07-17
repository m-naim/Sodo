module.exports = {
  apps : [{
    name: 'API',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT:8080,
      DATABASE_URL:'mongodb://admin:dbpassword7@ds113923.mlab.com:13923/justdo',
      node_env:'production',
      FACEBOOK_APP_ID:'1993213627466499',
      FACEBOOK_APP_SECRET:'7c6a505d294d306082eca3fa9c1e7c46'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
