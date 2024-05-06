const fs = require("fs/promises");

module.exports = addStack = async ({ writeData, userId }) => {
  const stackedFileNames = await fs.readdir("./data/stack");

  console.log(stackedFileNames, "stackedFileNames");

  stackedFileNames.forEach(async (fileName) => {
    const stackData = {
      data: writeData,
      checked: false,
    };

    const userStackFilesPaths = `./data/stack/${fileName}`;
    var reg = new RegExp(userId, "g");
    if (fileName.search(reg) === -1) {
      // читаем файл добавленных картин
      const readData = await fs.readFile(userStackFilesPaths);

      // парсим то что достали из файла, упадет если readData пустой или пустой массив
      const data = JSON.parse(readData);

      //если там массив, то добавляем туда новые данные и перезаписываем
      if (Array.isArray(data)) {
        data.push(stackData);
        await fs.writeFile(userStackFilesPaths, JSON.stringify(data));
      }
    }
  });
};
