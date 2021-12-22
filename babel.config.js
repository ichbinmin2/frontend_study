module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // 미리 먼저 셋팅해놓은 기본 설정을 의미
      "@babel/preset-env", // 환경설정
      "@babel/preset-react", // jsx를 바벨로 번역해준다는 뜻
    ],
    plugins: [],
  };
};
