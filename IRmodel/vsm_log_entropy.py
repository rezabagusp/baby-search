import numpy as np
import  os
import string
import re
import pprint
import math
import copy
import time
from collections import defaultdict
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

start_time = time.time()
path = "dataxml/"
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
for file in os.listdir(path):
    # fungsi stem
    factory = StemmerFactory()
    stemmer = factory.create_stemmer()

    # inputan teks
    file_berita = open(path + file, 'r')
    berita = file_berita.read()
    # berita = re.sub(r"[,.;@#?!&$-/\"= 0-9]+\ *", " ", berita)

    # mendapatkan isi yang ada di dalam tag title, text dan docno
    title = re.findall('<TITLE[^>]*>\s*((?:.|\n)*?)</TITLE>', berita)
    text = re.findall('<TEXT[^>]*>\s*((?:.|\n)*?)</TEXT>', berita)
    docno = re.findall('<DOCNO[^>]*>\s*((?:.|\n)*?)</DOCNO>', berita)

    # memisahkan setiap kata dalam dokumen (menghilangkan punctuation dll)
    title = title[0].lower()
    title = re.sub(r"[,.;@#?!&$-/\"= 0-9]+\ *", " ", title)
    text = text[0].lower()
    text = re.sub(r"[,.;@#?!&$-/\"= 0-9]+\ *", " ", text)

    content = title + " " + text

    #proses stemming
    result_stem = stemmer.stem(content)
    result_stem = result_stem.split()
    # proses stopword
    filtered_words = [word for word in result_stem if word not in stopwords]
    print("--- menghilangkan stopword & stemming per document %s seconds ---" % (time.time() - start_time))
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
    document[docno[0]] = term
    #simpan tf 
    tf[docno[0]]=hasil
    temp = copy.copy(hasil)
    #pembobotan local LOGA 1 + log10 tf
    temp.update((x, 1 + math.log10(y)) for x, y in temp.items())
    loga[docno[0]] = temp
    print("--- loga %s seconds ---" % (time.time() - start_time))

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
weight = dict()
for doc in document:
    normalized = 0.0
    local_global_term_kumulatif = 0.0
    weight_list = defaultdict(float)
    
    for term in document[doc]:
        local_global_term = loga[doc][term] * enpy[term]
        local_global_term_kumulatif += math.pow(local_global_term,2)
        weight_list[term] = local_global_term

    normalized = 1 / math.pow(local_global_term_kumulatif, 0.5)
    weight[doc] = weight_list
    print('normalize doc ke %s : %f' % (doc, normalized))
    #normalisasi bobot
    for term in document[doc]:
        weight[doc][term] *= normalized

print('tf')
pprint.pprint(tf)

print('loga')
pprint.pprint(loga)

print('ini nilai enpy')
pprint.pprint(enpy)

print('ini nilai loga enpy N')
pprint.pprint(weight)

print("--- %s seconds ---" % (time.time() - start_time))