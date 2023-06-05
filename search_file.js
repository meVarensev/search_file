const fs = require('fs');
const path = require('path');

// Важно пути папки нужно делать с двойным слешом  ->   \\  а именно  C:\\Users\\VitaliyPC\\Desktop\\all

// Имя папки, в которой происходит поиск
const searchFolder = 'C:\\Users\\VitaliyPC\\Desktop\\all';


// Имя папки, в которую будут сохранены найденные файлы   
const destinationFolder = 'C:\\Users\\VitaliyPC\\Desktop\\test';

const fileNames = [
    '6707',
    '6711',
    '6722',
    '6723',
    '6747',
    '6757',
    '6762',
    '6776',
    '6786',
    '6800',
    '6808',
    '6827',
    '6836',
    '6871',
    '6875',
    '6899',
    '6921',
    '6929',
    '6936',
    '6940',
    '6971',
    '6998',
    '7005'
  ];
  

// Функция для рекурсивного поиска файлов
function searchFiles(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Ошибка чтения папки: ${folderPath}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Ошибка получения информации о файле: ${filePath}`);
          return;
        }

        if (stats.isFile()) {
          for (const fileName of fileNames) {
            const regex = new RegExp(fileName, 'i');
            if (file.match(regex)) {
              // Копирование файла в папку назначения
              const destinationPath = path.join(destinationFolder, file);
              fs.copyFile(filePath, destinationPath, (err) => {
                if (err) {
                  console.error(`Ошибка копирования файла: ${filePath}`);
                } else {
                  console.log(`Файл скопирован: ${file}`);
                }
              });
              break;
            }
          }
        } else if (stats.isDirectory()) {
          // Рекурсивный вызов для вложенных папок
          searchFiles(filePath);
        }
      });
    });
  });
}

searchFiles(searchFolder);
