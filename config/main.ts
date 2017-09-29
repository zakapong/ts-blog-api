 const config = {

  // mongodb location
  db: 'mongodb://localhost:27017/blog-api',

  // port
  port: process.env.PORT || 8080,

  // test environment
  test_env: 'test',
  test_db: 'mongodb://localhost:27017/blog-api-test',
  test_port: 3001,

  // secret for jwt
   secret: 'secret'
};

export default config;