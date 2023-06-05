
# Копирование файлов с использованием Node.js и VS Code
Этот код на JavaScript позволяет выполнять поиск файлов в указанной папке и копировать найденные файлы в другую папку. Ниже приведены инструкции для установки Node.js и VS Code, а также описание кода и его использование.

## Установка Node.js
* Посетите [официальный сайт Node.js](https://nodejs.org/en) и загрузите LTS версию установщик для своей операционной системы  .
* Запустите загруженный установщик Node.js.
* Следуйте инструкциям мастера установки, принимая стандартные настройки.
* По завершении установки у вас будет установлен Node.js и npm (менеджер пакетов Node.js).
## Установка VS Code
* Посетите официальный [сайт Visual Studio Code](https://code.visualstudio.com/) и загрузите установщик для вашей операционной системы.
* Запустите загруженный установщик VS Code.
* Следуйте инструкциям мастера установки, принимая стандартные настройки.
* По завершении установки у вас будет установлен и готов к использованию Visual Studio Code

## Открытие файла search_file.js с помощью VS Code
* Запустите Visual Studio Code.
* В меню выберите "File" (Файл) -> "Open" (Открыть).
* Укажите путь к файлу search_file.js и нажмите "Open" (Открыть).
* Теперь файл search_file.js будет открыт в редакторе VS Code и вы сможете вносить изменения в код.

## В массиве fileNames указаны неполные имена файлов, без расширений. Это означает, что код будет искать файлы, начинающиеся с указанных неполных имен
```
const fileNames = [
    '6707',
    '6711',
    '6722',
    // Добавьте остальные неполные имена файлов] 
В массиве fileNames указаны неполные имена файлов, без расширений. Это означает, что код будет искать файлы, начинающиеся с указанных неполных имен.
## Запуск программы
* Откройте командную строку (терминал) в папке с файлом search_file.js.
* В командной строке введите команду:
```
node search_file.js

* Нажмите клавишу "Enter" для запуска программы.
* Программа начнет поиск файлов с указанными именами и скопирует найденные файлы в другую папку.
* Пожалуйста, убедитесь, что у вас установлены Node.js и VS Code перед запуском программы.
