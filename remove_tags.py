import os

file_path = r'd:\Antigravity_pj\math-explorer\app\src\data\roadmapData.ts'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if 'tags: [' in line:
            continue
        new_lines.append(line)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Successfully removed 'tags' lines.")
except Exception as e:
    print(f"Error processing file: {e}")
