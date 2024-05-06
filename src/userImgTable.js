const fs = require("fs/promises");
const addStack = require("./addStack");

module.exports = userAddFile = async ({ userPhoto, msgDate, userId }) => {
  const file_id = userPhoto?.[2]?.file_id;

  if (file_id) {
    const writeData = {
      file: file_id,
      ovnerId: userId,
      react1: 0,
      react2: 0,
      react3: 0,
      addDate: msgDate,
    };

    // ФУНКЦИЯ ДОБАВЛЕНИЯ в историю свои картинки
    const userAddFilePath = `./data/add/${userId}.json`;

    // читаем файл добавленных картин
    const readData = await fs.readFile(userAddFilePath);

    // парсим то что достали из файла, упадет если readData пустой или пустой массив
    const data = JSON.parse(readData);

    //если там массив, то добавляем туда новые данные и перезаписываем
    if (Array.isArray(data)) {
      data.push(writeData);
      await fs.writeFile(userAddFilePath, JSON.stringify(data));
    }

    // добавляем фото в стэк к остальным юзерам
    await addStack({ writeData, userId });
  }
};
