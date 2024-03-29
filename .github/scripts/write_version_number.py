import sys
from bs4 import BeautifulSoup

def insert_revision_number(version_number):
    filepath = 'index.html'

    with open(filepath, 'r') as file:
        soup = BeautifulSoup(file, 'html.parser')
        footer = soup.find('footer')
        if not footer:
            print('No footer was found in index.html')
            return
        
        version_element = footer.find('span', class_='version-number')
        print(version_element)
        if not version_element:
            print('No version element was found in index.html')
            return
        
        version_element.string = f'Version {version_number}'
        with open(filepath, 'w') as file:
            file.write(str(soup.prettify()))
            print(str(soup.prettify()))
    
if __name__ == '__main__':
    version_number = sys.argv[1]
    # version_number = get_version_number(commit_sha)
    insert_revision_number(version_number)