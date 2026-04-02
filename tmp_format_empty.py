import re

filepath = 'd:/Antigravity_pj/math-explorer/app/src/data/roadmapData.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern for chapters with empty sections: []
empty_section_chapter_pattern = r'(\n\s*\{\n\s*id:\s*("[^"]+"),\n\s*title:\s*("[^"]+")(?:,\n\s*description:\s*("[^"]+"))?,\n\s*sections:\s*\[\]\n\s*\})'

def repl_empty_chapter(m):
    lines = m.group(0).split('\n')
    brace_line = lines[1]
    base_indent = "\n" + brace_line[:len(brace_line) - len(brace_line.lstrip())]
    inner_indent = base_indent + "    "
    
    id_val = m.group(2)
    title_val = m.group(3)
    desc_val = m.group(4)
    
    if desc_val:
        return f'{base_indent}{{\n{inner_indent}id: {id_val}, title: {title_val}, description: {desc_val},\n{inner_indent}sections: []\n{base_indent}}}'
    else:
        return f'{base_indent}{{\n{inner_indent}id: {id_val}, title: {title_val},\n{inner_indent}sections: []\n{base_indent}}}'


text = re.sub(empty_section_chapter_pattern, repl_empty_chapter, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Formatting of empty sections completed.")
