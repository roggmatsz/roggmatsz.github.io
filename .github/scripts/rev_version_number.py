import subprocess
import os
from bs4 import BeautifulSoup


def get_version_number():
    major = os.environ.get("VERSION_MAJOR", "unset")
    if major == "unset":
        raise ValueError("Missing VERSION_MAJOR environment variable.")
    
    revision = subprocess.check_output(["git", "rev-list", "--count", "HEAD"]).decode('utf-8').strip()

    minor = subprocess.check_output(["git", "rev-list", "--count", "--merges", "staging"]).strip()

    return major, minor, revision

def insert_version_number(filepath, version_number):
    with open(filepath, 'r') as file:
        soup = BeautifulSoup(file, 'html.parser')
        footer = soup.find('footer')

        if footer:
            footer.string = f'version: {version_number}'
            with open(filepath, 'w') as file:
                file.write(str(soup))
        else:
            print('Footer element not found on the file.')

if __name__ == '__main__':
    filepath = 'index.html'
    major, minor, revision = get_version_number()
    version_number_string = f'{major}.{minor}.{revision}'
    insert_version_number(filepath, version_number_string)

    print(f'Version string {version_number_string} was inserted into footer.')