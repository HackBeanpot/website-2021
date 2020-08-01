import re

# Scrape project data from previous years to JSON
# provide a path to the Markdown file we want
path = '/path/to/markdown/file'
f = open(path)
lines = f.read().splitlines()
f.close()

startingLine = 0
while lines[startingLine][:4] != '### ':
    startingLine += 1

try:
    while True:
        title = lines[startingLine][4:-4]
        # Found the regex here: https://stackoverflow.com/a/17373096
        title = re.findall('\[[^\]]*\]|\([^\)]*\)|\"[^\"]*\"|\S+', title)
        startingLine += 2

        print('{')
                
        if title[0]:
            print('\t"name": "{}",'.format(title[0][1:-1]))
        
        if title[1]:
            print('\t"link": "{}",'.format(title[1][1:-1]))

        creators = lines[startingLine]
        startingLine += 2
        if creators:
            print('\t"creator": "{}",'.format(creators[13:-5]))

        desc = lines[startingLine]
        startingLine += 2
        if desc:
            print('\t"description": "{}",'.format(desc))

        if len(title) > 2:
            title[2] = title[2][1:-1]
            if title[2][:3] == 'Won':
                print('\t"award": "{}"'.format(title[2][4:]))
            else:
                print('\t"award": "{}"'.format(title[2]))
        
        print('},\n')
except IndexError:
    print('\nReached end of projects!')
