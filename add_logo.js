const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

const photoFolderPath = 'F:/YandexDisk/0531 дс 40 фото выпуск для выбора/все фото';
const watermarkHorizontalPath = 'C:/Users/VitaliyPC/Desktop/testnew/logo/gor.png';
const watermarkVerticalPath = 'C:/Users/VitaliyPC/Desktop/testnew/logo/ver.png';

let targetWidth, targetHeight;


async function resizePhoto(photoPath, outputPath, width, height) {
  try {
    const photo = await Jimp.read(photoPath);
    await photo.cover(width, height);
    await photo.writeAsync(outputPath);
    console.log(`Фото успешно изменено: ${outputPath}`);
  } catch (error) {
    console.error(`Ошибка при изменении размера фото ${photoPath}: ${error}`);
  }
}


async function applyWatermarkToPhoto(photoPath, watermarkPath, outputFolder) {
  try {
    const photo = await Jimp.read(photoPath);
    const watermark = await Jimp.read(watermarkPath);

    watermark.resize(photo.bitmap.width, photo.bitmap.height);
    photo.composite(watermark, 0, 0);

    const fileName = path.parse(photoPath).name;
    const outputFilePath = path.join(outputFolder, `${fileName}${path.extname(photoPath)}`);
    await photo.writeAsync(outputFilePath);
    console.log(`Водяной знак успешно наложен на ${outputFilePath}`);
  } catch (error) {
    console.error(`Ошибка при обработке фото ${photoPath}: ${error}`);
  }
}

async function processPhotosFolder(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    const outputFolder = path.join(folderPath, 'output');
    fs.mkdirSync(outputFolder, { recursive: true });

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      if (fs.statSync(filePath).isFile() && /\.(jpe?g|png|gif)$/i.test(filePath)) {
        const photo = await Jimp.read(filePath);
        const orientation = photo.bitmap.width > photo.bitmap.height ? 'horizontal' : 'vertical';

        if (orientation === 'horizontal') {
          targetWidth = 2500;
          targetHeight = 1667;
        } else {
          targetWidth = 1667;
          targetHeight = 2500;
        }

        const resizedOutputPath = path.join(outputFolder, `${file}`);
        await resizePhoto(filePath, resizedOutputPath, targetWidth, targetHeight);

        if (orientation === 'horizontal') {
          await applyWatermarkToPhoto(resizedOutputPath, watermarkHorizontalPath, outputFolder);
        } else {
          await applyWatermarkToPhoto(resizedOutputPath, watermarkVerticalPath, outputFolder);
        }
      }
    }

    console.log('Обработка завершена.');
  } catch (error) {
    console.error(`Ошибка при обработке папки ${folderPath}: ${error}`);
  }
}

processPhotosFolder(photoFolderPath);
