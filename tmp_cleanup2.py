import re

filepath = 'd:/Antigravity_pj/math-explorer/app/src/data/roadmapData.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the blank lines around empty sections. The block looks like:
#                     {
# 
#                         id: "...", title: "...", description: "...",
# 
#                         sections: []
# 
#                     },
#
# Let's just use a regex that matches:
# {\n
# \s*id: .*\n
# \n
# \s*sections: \[\]\n
# \n
# \s*\}

# Let's write a generic cleanup for these blocks. We want to turn:
# {
# 
#     id: "...", title: "...",
# 
#     sections: []
# 
# }
# Into:
# {
#     id: "...", title: "...",
#     sections: []
# }

pattern = r'(\{\n)\n(\s*id: [^\n]+\n)\n(\s*sections: \[\]\n)\n(\s*\})'
text = re.sub(pattern, r'\1\2\3\4', text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleanup 2 completed.")
