import numpy as np
import os
import string
import re
import pprint
import math
import json
from collections import defaultdict
import sys
# def readFile(path, filename):
#     file = open(path + filename, 'r',  encoding='utf-8').read()
#     return file

# ranked_doc = defaultdict(float)

# ranked_doc = {
#     "001":0.22,
#     "002":0.44,
#     "003":0.123, 
# }

# path = "crawling/";

# # print(ranked_doc)
# for key, value in ranked_doc.items():
#     print(key, value)
#     berita = readFile(path, key+'.htm')

#     print"berita ke %s:" % key)
#     print(berita)


# print dumps as send to node js
hasil = {}

hasil['argumen'] = sys.argv[1:]
print(json.dumps(hasil))