module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-env", // 환경설정
      "@babel/preset-react", // jsx를 리액트로 번역해라라는 뜻.
      "@babel/preset-typescript",
    ],
    plugins: [],
  };
};
