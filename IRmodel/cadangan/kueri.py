import numpy as np
import os
import string
import ast
import re
import pprint
import math
import copy
import time
import sys
import json
from collections import defaultdict
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

dir = 'E:/data/KULIAH/AGRIWEB/development/tki-baby-search/IRmodel/cadangan/'

factory = StemmerFactory()
stemmer = factory.create_stemmer()
kumulatif_tf = defaultdict(int)
document = dict()
loga = defaultdict(lambda: defaultdict(int))
tf = defaultdict(lambda: defaultdict(int))
f = open(dir+'entropy.txt', 'r', encoding='utf-8')
read = f.read()
enpy = ast.literal_eval(read)
f.close()

f = open(dir+'weight.txt', 'r', encoding='utf-8')
read = f.read()
weight = ast.literal_eval(read)
f.close()

file_stopwords = open(dir+'stopwords.txt', 'r')
stopwords = file_stopwords.read().split()

kueri = sys.argv[1:][0]
# kueri = input()
result_stem_kueri = stemmer.stem(kueri.lower())
result_stem_kueri = result_stem_kueri.split()
filtered_words_kueri = [word for word in result_stem_kueri if word not in stopwords]
# print(filtered_words_kueri)

term = list()
hasil = defaultdict(int)
temp = defaultdict(int)
for words in filtered_words_kueri:
    if len(words) >= 3 and words not in term:
        term.append(words)
        hasil[words]+=1
        kumulatif_tf[words]+=1
    elif len(words)>= 3:
        hasil[words]+=1
        kumulatif_tf[words]+=1
document["kueri"] = term

#simpan tf
tf["kueri"]=hasil
temp = copy.copy(hasil)

#pembobotan local LOGA 1 + log10 tf
temp.update((x, 1 + math.log10(y)) for x, y in temp.items())
loga["kueri"] = temp

weight_list = defaultdict(float)
for term in document["kueri"]:
    local_global_term = loga["kueri"][term] * enpy[term]
    weight_list[term] = local_global_term
weight["kueri"] = weight_list

vsm = defaultdict(float)
for doc in weight:
    for kata in weight["kueri"]:
        if doc != "kueri":
            if kata in weight[doc]:
                vsm[doc] += weight["kueri"][kata]*weight[doc][kata]

high_rank = defaultdict(float)
for w in sorted(vsm, key=vsm.get, reverse=True)[:10]:
    high_rank[w] = vsm[w]

# setelah dapet highnya, sekarang fetch filenya
result = []
for key, value in high_rank.items():
    berita = file_stopwords = open(dir+'txt/'+key, 'r').read()
    berita = ast.literal_eval(berita)
    result.append(berita)
if(len(result)>0):
    print(json.dumps(result))
else:
    print(json.dumps([]))