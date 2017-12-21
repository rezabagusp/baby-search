import numpy as np
import os
import string
import ast
import re
import pprint
import math
import copy
import time
from collections import defaultdict
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

start_time = time.time()
path = "txt/"
document = dict() #untuk menyimpan dokumen dengan term2 yang ada didalamnya
tf = defaultdict(lambda: defaultdict(int))
df = defaultdict(int)
idf = defaultdict(float)
loga = defaultdict(lambda: defaultdict(int))
kumulatif_tf = defaultdict(int)
enpy = defaultdict(float)


weight = defaultdict(lambda: defaultdict(float))
# stopword
file_stopwords = open('stopwords.txt', 'r')
stopwords = file_stopwords.read().split()



# praproses dokumen
xyz = 0
for file in os.listdir(path):
    xyz += 1
    # fungsi stem
    factory = StemmerFactory()
    stemmer = factory.create_stemmer()
    
	# inputan teks
    f = open(path + file, encoding="utf-8")
    print(xyz, file)
    read = f.read()
    result = ast.literal_eval(read)
    title = result['title']
    content = result['content']

    # mendapatkan isi yang ada di dalam tag title, artikel
    # title = re.findall('<title[^>]*>\s*((?:.|\n)*?)</title>', berita)
    # articles = re.findall('<article[^>]*>\s*((?:.|\n)*?)</article>', berita)

    # paragraphs = ""
    # for article in articles:
    #     p = re.findall('<p[^>]*>\s*((?:.|\n)*?)<\/p>',article)
    #     for paragraph in p:
    #         paragraph = re.sub("<.*?>","",paragraph)
    #         paragraphs += paragraph

    # memisahkan setiap kata dalam dokumen (menghilangkan punctuation dll)

    title = title.lower()
    title = re.sub(r"[,.;@#?!&$-/\"= 0-9]+\ *", " ", title)
    content = content.lower()
    content = re.sub(r"[,.;@#?!&$-/\"= 0-9]+\ *", " ", content)

    berita = title + " " + content

    #proses stemming
    result_stem = stemmer.stem(berita)
    result_stem = result_stem.split()
    # proses stopword
    filtered_words = [word for word in result_stem if word not in stopwords]
    # print("--- menghilangkan stopword & stemming per document %s seconds ---" % (time.time() - start_time))
    term = list()
    hasil = defaultdict(int)
    temp = defaultdict(int)

    #menghitung tf
    for words in filtered_words:
        if len(words) >= 3 and words not in term:
            term.append(words)
            hasil[words]+=1
            kumulatif_tf[words]+=1
        elif len(words)>= 3:
            hasil[words]+=1
            kumulatif_tf[words]+=1
    document[file] = term
    #simpan tf
    tf[file]=hasil
    temp = copy.copy(hasil)
    #pembobotan local LOGA 1 + log10 tf
    temp.update((x, 1 + math.log10(y)) for x, y in temp.items())
    loga[file] = temp
    # print("--- loga %s seconds ---" % (time.time() - start_time))

#menghitung df
for doc in document:
    for kata in document[doc]:
        df[kata] += 1

#menghitung global enpy
for kata in df:
    kumulatif_global=0.0
    for dok in document:
        if tf[dok][kata] != 0:
            temp = (tf[dok][kata]/kumulatif_tf[kata])
            kumulatif_global += (temp*math.log10(temp))/(math.log10(len(document)))
    kumulatif_global += 1
    enpy[kata] = kumulatif_global

#menghitung Normalisasi N dan L G N
weight = {}
for doc in document:
    normalized = 0.0
    local_global_term_kumulatif = 0.0
    weight_list = defaultdict(float)

    for term in document[doc]:
        local_global_term = loga[doc][term] * enpy[term]
        local_global_term_kumulatif += math.pow(local_global_term,2)
        weight_list[term] = local_global_term

    normalized = 1 / math.pow(local_global_term_kumulatif, 0.5)
    weight[doc] = dict(weight_list)
    # print('normalize doc ke %s : %f' % (doc, normalized))
    #normalisasi bobot
    for term in document[doc]:
        weight[doc][term] *= normalized
		
weight = dict(weight)
f = open('weight.txt','w', encoding='utf-8')
f.write(str(weight))
f.close()

enpy = dict(enpy)
f = open('entropy.txt','w', encoding='utf-8')
f.write(str(enpy))
f.close()

print('tf')
pprint.pprint(tf)

print('loga')
pprint.pprint(loga)

print('ini nilai enpy')
pprint.pprint(enpy)

print('ini nilai loga enpy N')
pprint.pprint(weight)

# print("--- %s seconds ---" % (time.time() - start_time))
