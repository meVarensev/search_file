from pathlib import Path
import argparse
import shutil

DATA = [
    { "name": "", "start": "", "end": "" }
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
            