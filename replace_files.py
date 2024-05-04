from pathlib import Path
import argparse
import shutil

DATA = [
    { "name": "Амбарцумян Роман", "start": 1335, "end": 1340 },
    { "name": "Андреади Константин", "start": 959, "end": 966 },
    { "name": "Басенко Богдан", "start": 1220, "end": 1208 },
    { "name": "Борисова Алиса", "start": 1696, "end": 1703 },
    { "name": "Волкова Надежда", "start": 2004, "end": 2017 },
    { "name": "Вьялицина Юлия", "start": 935, "end": 940 },
    { "name": "Габулян Карина", "start": 1037, "end": 1102 },
    { "name": "Гавриленко Андрей", "start": 1345, "end": 1366 },
    { "name": "Гноевой Даниил", "start": 2249, "end": 2244 },
    { "name": "Головкова Анна", "start": 1385, "end": 1431 },
    { "name": "Жеринова Ульяна", "start": 1616, "end": 1604 },
    { "name": "Катышев Тимофей", "start": 1819, "end": 1830 },
    { "name": "Клещёва Виктория", "start": 2323, "end": 2286 },
    { "name": "Ковалёва Татьяна", "start": 2147, "end": 2154 },
    { "name": "Коваль Кирилл", "start": 1023, "end": 1019 },
    { "name": "Коняев Тимур", "start": 998, "end": 1001 },
    { "name": "Мальцев Максим", "start": 1861, "end": 1855 },
    { "name": "Мигунова Анна", "start": 1922, "end": 1912 },
    { "name": "Михайлов Александр", "start": 1279, "end": 1290 },
    { "name": "Нефёдова София", "start": 2050, "end": 2065 },
    { "name": "Простомолотова Мирослава", "start": 2166, "end": 2188 },
    { "name": "Решетникова Алина", "start": 1507, "end": 1492 },
    { "name": "Сивков Александр", "start": 1800, "end": 1801 },
    { "name": "Скороходова Алина", "start": 1050, "end": 1054 },
    { "name": "Тертерян Марианна", "start": 1469, "end": 1460 },
    { "name": "Федоренкова Алиса", "start": 2232, "end": 2216 },
    { "name": "Федотенко Варвара", "start": 1194, "end": 1181 },
    { "name": "Фомопула Аника", "start": 1686, "end": 1645 },
    { "name": "Хаеткулов Булат", "start": 1293, "end": 1295 },
    { "name": "Хореньян София", "start": 1140, "end": 1152 },
    { "name": "Хрипаченко Анастасия", "start": 1747, "end": 1775 },
    { "name": "Цокарева Дарья", "start": 1955, "end": 1980 },
    { "name": "Юрков Никита", "start": 1250, "end": 1261 }
]

#parse arguments
parser = argparse.ArgumentParser(description='Magic replacer')
parser.add_argument('--source', type=str,
                    help='source path(directory)')
parser.add_argument('--destination', type=str,
                    help='destination path(directory)')
args = parser.parse_args()

#create magic with data
parent_directory = Path(args.source)
current_files = [x for x in parent_directory.glob('**/*') if x.is_file()]
new_path = Path(args.destination)
new_path.mkdir(parents=False, exist_ok=True)
for names in DATA:
    if len(str(names["start"])) < 4:
        names["start"] = f'0{names["start"]}'
    if len(str(names["end"])) < 4:
        names["end"] = f'0{names["end"]}'
for file in current_files:
    for names in DATA:
        if (str(names["start"])) in file.name or str(names["end"]) in file.name:
            shutil.copy(file, new_path)
            new_file = new_path / file.name
            print(f'{names["name"]} {new_file.name}')
            new_file.rename(Path(new_file.parent, f'{names["name"]} {new_file.name}'))