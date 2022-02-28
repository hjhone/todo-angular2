export const getGUID = (() => {
  //let counter = 1;
  //return () => counter++;
  //npm install uuid
  let guid  = 0;
  guid = Math.floor(Math.random() * 100)
  return guid;
})();
