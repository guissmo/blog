---
title: "NSI: Rappel (3ème partie)"
layout: "/src/layouts/NSIPostLayout.astro"
category: NSI
author: guissmo
date: 2024-09-21T20:38:43+00:00
draft: false
toc: true
description: "Dans cette troisième partie des rappels, on revoit les types d'objets de base plus complexes en Python : les tuples, les listes et les dictionnaires. On aborde également la notion de mutabilité."
slug: nsi-terminale-rappel-3
tags:
  - nsi
  - terminale
---

# Rappel (3ème Partie)

## Tuples

<div class="info">

En Python, un **tuple** est une structure de données qui permet de regrouper plusieurs valeurs ensemble.

</div>

```python
mignon = ('moi', 'moche', 'mechant')
```

```python
type(mignon)
```

<div class="info">

Comme pour les chaines de caractères, on peut connaître le nombre d'éléments d'un tuple en utilisant `len`</div>

```python
mignon = ('moi', 'moche', 'mechant')
len(mignon)
```

    3

```python
len( (1, 2, 3, 4, 5) )
```

<div class="info">

Comme pour les chaines de caractères, on peut utiliser `in` pour savoir si un certain objet est dans la tuple.</div>

```python
mignon = ('moi', 'moche', 'mechant')
'moi' in mignon
```

    True

```python
mignon = ('moi', 'moche', 'mechant')
'm' in mignon
```

    False

<div class="info">

Comme pour les chaines de caractères, on peut accéder à un indice $x$ du tuple en utilisant `[x]`.</div>

```python
mignon = ('moi', 'moche', 'mechant')
mignon[1]
```

    'moche'

```python
# Les indices négatifs marchent comme pour les chaines de caractères.
mignon = ('moi', 'moche', 'mechant')
mignon[-1]
```

    'mechant'

<div class="info">

Comme pour les chaines de caractères, on ne peut pas changer la valeur d'un élément d'un tuple.</div>

```python
mignon[1] = 'beau'
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[5], line 1
    ----> 1 mignon[1] = 'beau'


    TypeError: 'tuple' object does not support item assignment

<div class="info">

On appelle une telle propriété l'**immuabilité**.

L'immuabilité désigne la propriété d'un objet ou d'une donnée qui ne peut pas être modifié une fois créé.</div>

<div class="info">

On peut utiliser `+` pour concaténer deux tuples.</div>

```python
plus_mignon = mignon + ('debile', 'pauvre')
```

```python
print(plus_mignon)
```

    ('moi', 'moche', 'mechant', 'debile', 'pauvre')

<div class="info">

Comme pour les chaines de caractères, on peut également découper des tuples:</div>

```python
plus_mignon[2:]
```

    ('mechant', 'debile', 'pauvre')

```python
plus_mignon[1:3]
```

    ('moche', 'mechant')

<div class="info">
    
On peut convertir des chaines de caractères en tuples en utilisant la fonction `tuple`.</div>

```python
mot = 'education'
tuple(mot)
```

    ('e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n')

<div class="info">
    
La fonction suivante renvoie un tuple.</div>

```python
def perimetre_et_surface_d_un_rectangle(longeur, largeur):
    perimetre = 2*longeur + 2*largeur
    surface = longeur * largeur
    return (perimetre, surface)
```

```python
perimetre_et_surface_d_un_rectangle(5, 4)
```

    (18, 20)

```python
type( perimetre_et_surface_d_un_rectangle(5, 4) )
```

    tuple

<div class="info">

Lorsqu'une fonction renvoie un tuple, il n'est pas obligatoire de mettre des parenthèses.</div>

```python
def perimetre_et_surface_d_un_rectangle(longeur, largeur):
    perimetre = 2*longeur + 2*largeur
    surface = longeur * largeur
    return perimetre, surface
```

```python
perimetre_et_surface_d_un_rectangle(5, 4)
```

    (18, 20)

<div class="info">
    
On peut également utiliser des virgules pour affecter plusiers variables en même temps.

On appelle ce processus **unpacking**.</div>

```python
a, b, c = (3, 4, 5)
```

```python
b
```

    4

<div class="warn">
    
Les tailles des deux côtés doivent cependant correspondre.</div>

```python
a, b = (3, 4, 5)
```

    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    Cell In[19], line 1
    ----> 1 a, b = (3, 4, 5)


    ValueError: too many values to unpack (expected 2)

```python
a, b, c, d = (3, 4, 5)
```

    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    Cell In[20], line 1
    ----> 1 a, b, c, d = (3, 4, 5)


    ValueError: not enough values to unpack (expected 4, got 3)

<div class="info">
    
Si on veut un tuple de taille $1$, il faut mettre une virgule pour le distinguer d'un `int` entre parenthèses.</div>

```python
sans_comma = (3)
avec_comma = (3,)
```

```python
type(sans_comma)
```

    int

```python
type(avec_comma)
```

    tuple

```python
(1, 2) + sans_comma
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[24], line 1
    ----> 1 (1, 2) + sans_comma


    TypeError: can only concatenate tuple (not "int") to tuple

<div class="exer-start">
    
Soit `tup = (1, 4, 27, 256, 3125)`. Remplacer les `# ??? #` pour que chaque cellule renvoie `True`.</div>

```python
tup = (1, 4, 27, 256, 3125)
a = # ??? #
tup[a:] == (27, 256, 3125)
```

      Cell In[26], line 2
        a = # ??? #
            ^
    SyntaxError: invalid syntax

```python
tup = (1, 4, 27, 256, 3125)
b = # ??? #
tup[b] == 4
```

      Cell In[28], line 2
        b = # ??? #
            ^
    SyntaxError: invalid syntax

```python
tup = (1, 4, 27, 256, 3125)
c = # ??? #
tup[-c:] == (27, 256, 3125)
```

      Cell In[32], line 2
        c = # ??? #
            ^
    SyntaxError: invalid syntax

```python
tup = (1, 4, 27, 256, 3125)
d = # ??? #
tup[1:2] == d
```

      Cell In[36], line 2
        d = # ??? #
            ^
    SyntaxError: invalid syntax

<div class="exer-end"></div>

<div class="exer-start">

Parmi les cellules suivantes, lesquelles renvoient une erreur ?

Dans le cas échéant, pourquoi ?

Réfléchissez avant de les éxecuter.</div>

```python
a = (1, 2)
a = (2, 1)
```

```python
a = (1, 2)
a[1] = 2
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[39], line 2
          1 a = (1, 2)
    ----> 2 a[1] = 2


    TypeError: 'tuple' object does not support item assignment

```python
a = (1, 2)
print(a[-1])
```

    2

```python
a = (1)
len(a)
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[5], line 2
          1 a = (1)
    ----> 2 len(a)


    TypeError: object of type 'int' has no len()

```python
a = (1)
print(a[0])
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[41], line 2
          1 a = (1)
    ----> 2 print(a[0])


    TypeError: 'int' object is not subscriptable

```python
a = (1,)
a[0] = 1
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[3], line 2
          1 a = (1,)
    ----> 2 a[0] = 1


    TypeError: 'tuple' object does not support item assignment

<div class="exer-end"></div>

<div class="exer-start">

Compléter la fonction `milieu`.</div>

```python
# Cette fonction renvoie un tuple de floats, le milieu de (x0, y0) et (x1, y1).
def midpoint(x0, y0, x1, y1):
    x = (x0 + x1)/2
    y = # ??? #
    return # ??? #
```

      Cell In[44], line 4
        y = # ??? #
            ^
    SyntaxError: invalid syntax

<div class="exer-end"></div>

<div class="exer-start">

La fonction `distance` prend comme argument deux tuples `p` et `q`, chacun avec une taille `2`.

Elle renvoie un `float`, la distance entre $p = (x_0, y_0)$ à $q = (x_1, y_1)$.

La formule pour la distance est $\sqrt{(x_1 - x_0)^2 + (y_1 - y_0)^2}$

Compléter cette fonction.</div>

```python
from math import sqrt

def distance(p, q):
    x0 = # ??? #
    y0 = # ??? #
    x1, y1 = # ??? #
    return # ??? #
```

      Cell In[106], line 4
        x0 = # ??? #
             ^
    SyntaxError: invalid syntax

Vérifiez votre reponse ici:

```python
print( distance( (-2, 3), (1, -1) ) ) # 5.0
print( distance( (-1, 0), (0, -1) ) ) # 1.4142135623730951
print( distance(  (0, 0), (7, 24) ) ) # 25.0
```

    5.0
    1.4142135623730951
    25.0

<div class="exer-end"></div>

## Listes

<div class="info">
    
En Python, une **liste** est une structure de données qui permet de stocker une collection ordonnée d'éléments.
    
À la différence de tuples, on utilise des crochets au lieu des parenthèses.</div>

```python
mignon_liste = ['moi', 'moche', 'mechant']
```

```python
type(mignon_liste)
```

    list

<div class="warn">
    
Les listes présentent une forte similarité avec les tuples mais avec une différence majeur. Nous la verrons dans quelques minutes !</div>

<div class="info">
    
Comme pour les tuples, on peut connaître le nombre d'éléments d'une liste en utilisant `len`.</div>

```python
len(mignon_liste)
```

<div class="info">

Comme pour les tuples, on peut utiliser `in` pour savoir si un certain objet est dans une liste.</div>

```python
mignon_liste = ['moi', 'moche', 'mechant']
'moche' in mignon
```

    True

```python
mignon = ['moi', 'moche', 'mechant']
'mignon' in mignon
```

    False

<div class="info">
    
Comme pour les tuples, on peut accéder à un indice $x$ du tuple en utilisant `[x]`.</div>

```python
mignon_liste[1]
```

    'moche'

<div class="info">

🎺 **Et maintenant, la différence majeur...** 🎺

À la différence des tuples, les listes sont **mutables**, ça veut dire qu'on peut ajouter, supprimer ou modifier des éléments après leur création.</div>

```python
mignon_liste = ['moi', 'moche', 'mechant']
mignon_liste[1] = 'beau'
print(mignon_liste)
```

    ['moi', 'beau', 'mechant']

<div class="info">
    
On peut utiliser la méthode `.pop()` pour enlever et renvoyer le dernier élément d'une liste.</div>

```python
mignon_liste = ['moi', 'beau', 'mechant']
enleve = mignon_liste.pop()
print(enleve)
print(mignon_liste)
```

    mechant
    ['moi', 'beau']

<div class="warn">
    
Remarquer la nouvelle syntaxe !
    
Au lieu de `pop(mignon_liste)` (qui renvoie une erreur), on écrit `mignon_liste.pop()`.
    
Nous découvrirons plus tard pourquoi on l'écrit comme ça.</div>

<div class="info">
    
On peut utiliser la méthode `.append()` pour ajouter un élément à la fin d'une liste.</div>

```python
mignon_liste = ['moi', 'beau']
mignon_liste.append('mais pas trop')
print(mignon_liste)
```

    ['moi', 'beau', 'mais pas trop']

<div class="info">
    
Comme pour les tuples, on peut utiliser `+` pour concaténer deux listes et **créer une nouvelle liste** au lieu de modifier une liste.</div>

```python
mignon_liste = ['moi', 'beau', 'mais pas trop']
nimporte_quoi = [1, 2, 3]
nouvelle_liste = mignon_liste + nimporte_quoi
print(nouvelle_liste)
print(mignon_liste)
```

    ['moi', 'beau', 'mais pas trop', 1, 2, 3]
    ['moi', 'beau', 'mais pas trop']

<div class="info">
    
Comme les tuples, on peut également éxtraire des sous-listes de la liste initiale.</div>

```python
mignon_liste = ['moi', 'beau', 'mais pas trop', 1, 2, 3]
nouvelle_liste = mignon_liste[-5:-1]
print(nouvelle_liste)
print(mignon_liste)
```

    ['beau', 'mais pas trop', 1, 2]
    ['moi', 'beau', 'mais pas trop', 1, 2, 3]

<div class="warn">    
    
Remarquez que cet opération n'affecte pas la liste originale.</div>

<div class="info">
    
Depuis une chaîne de caractères, on peut utiliser la méthode `split()` pour obtenir une liste des mots ou des sous-chaînes en fonction d'un séparateur spécifié.</div>

```python
ma_chaine = "super,genial,trop top,inoui"
ma_chaine.split(",")
```

    ['super', 'genial', 'trop top', 'inoui']

```python
ma_chaine = "super,genial,trop top,inoui"
ma_chaine.split(" ")
```

    ['super,genial,trop', 'top,inoui']

```python
ma_chaine = "super,genial,trop top,inoui"
ma_chaine.split("op")
```

    ['super,genial,tr', ' t', ',inoui']

<div class="info">
    
On peut également utiliser la méthode `join()` d'une chaine de caractères pour concaténer les éléments d'une liste en une seule chaîne de caractères, en les séparant par un séparateur spécifié.</div>

```python
ma_liste = ["trop beau", "groovy", "trop frais", "cheesy"]
",".join(ma_liste)
```

    'trop beau,groovy,trop frais,cheesy'

```python
ma_liste = ["trop beau", "groovy", "trop frais", "cheesy"]
"".join(ma_liste)
```

    'trop beaugroovytrop fraischeesy'

```python
ma_liste = ["trop beau", "groovy", "trop frais", "cheesy"]
"👏👏".join(ma_liste)
```

    'trop beau👏👏groovy👏👏trop frais👏👏cheesy'

<div class="info">
    
On peut "multiplier" des strings, des tuples, et des listes par des entiers. Voici des exemples:</div>

```python
'cou' * 10
```

    'coucoucoucoucoucoucoucoucoucou'

```python
'a' + ('na' * 2) + 's'
```

    'ananas'

```python
[0] * 8
```

    [0, 0, 0, 0, 0, 0, 0, 0]

```python
[123456789] * 0
```

    []

<div class="exer-start">
    
Écrire une fonction `liste_de_zeros` qui prend comme argument un entier strictement positif `x` et qui renvoie une liste de taille `x` qui contient uniquement des `0`.</div>

```python

```

```python
print( liste_de_zeros(8) ) # [0, 0, 0, 0, 0, 0, 0, 0]
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[56], line 1
    ----> 1 print( liste_de_zeros(8) ) # [0, 0, 0, 0, 0, 0, 0, 0]


    NameError: name 'liste_de_zeros' is not defined

<div class="exer-end"></div>

<div class="exer-start">
    
La fonction `deja_visite` prend comme arguments une chaine des caractères `pays` et une liste de chaines des caractères `pays_visites`, les pays qu'on a visité. Il retourne `True` si `pays` est dans la liste `pays_visites` et `False` sinon. Complétez cette fonction.</div>

```python
pays_visites = ['France', 'Italie', 'Kiribati']

def deja_visite(pays, pays_visites):
    return # ??? #
```

Verifier vos réponses ici:

```python
pays_visites = ['France', 'Italie', 'Kiribati']
print( deja_visite('France', pays_visites) ) # True
print( deja_visite('Italie', pays_visites) ) # True
print( deja_visite('Corée du Nord', pays_visites) ) # False
print( deja_visite('Italie', ['France']) ) # False
```

    True
    True
    False
    False

<div class="exer-end"></div>

<div class="exer-start">
    
La fonction `tete_de_la_liste` prend comme argument **une liste d'entiers** et un entier `x`. Il doit renvoyer **une liste** contenant le `x` premiere elements de la liste.</div>

```python
def tete_de_la_liste(liste, x):
    return # ??? #
```

<div class="exer-end"></div>

<div class="exer-start exer-hard">
    
Est-ce qu'une fonction peut modifier une liste définie hors d'une fonction?
    
Éxecuter les cellules suivantes puis compléter les phrases qui suivent.</div>

```python
def ajoute_par_append(liste, elt):
    resultat = liste.append(elt)
    return resultat

def ajoute_par_plus(liste, elt):
    resultat = liste + [elt]
    return resultat
```

```python
ma_liste = [1, 2, 3]
print( ajoute_par_append(ma_liste, 4) )
print( ma_liste )
print( "\n" )
print( ajoute_par_plus(ma_liste, 5) )
print( ma_liste )
print( "\n" )
print( ajoute_par_append(ma_liste, 6) )
print( ma_liste )
print( "\n" )
print( ajoute_par_plus(ma_liste, 7) )
print( ma_liste )
```

    None
    [1, 2, 3, 4]


    [1, 2, 3, 4, 5]
    [1, 2, 3, 4]


    None
    [1, 2, 3, 4, 6]


    [1, 2, 3, 4, 6, 7]
    [1, 2, 3, 4, 6]

Répondez aux questions suivantes :

- Le type de `liste.append(elt)` est :
  - a. `NoneType`
  - b. `list`
- Donc la fonction `ajoute_par_append` renvoie quelque chose de type :
  - a. `NoneType`
  - b. `list`
- Le type de `liste + [elt]` est :
  - a. `NoneType`
  - b. `list`
- Donc la fonction `ajoute_par_plus` renvoie quelque chose de type :
  - a. `NoneType`
  - b. `list`
- Quelle fonction ne modifie pas les listes définies hors de la fonction ?
  - a. `ajoute_par_append`
  - b. `ajoute_par_plus`
- Quelle fonction modifie les listes même si la liste est definie hors de la fonction ?
  - a. `ajoute_par_append`
  - b. `ajoute_par_plus`

<div class="warn">
    
On ne vous interrogera pas sur ce sujet en terminale, mais c'est une subtilité importante à savoir si vous continuez dans l'informatique.</div>

<div class="exer-end"></div>

## Dictionnaires

<div class="info">
    
En Python, un **dictionnaire** est une structure de données qui permet de stocker des paires **clé-valeur**, permettant un accès rapide et efficace aux valeurs à partir de leurs clés.</div>

```python
emoji = {
    'content': '🙂',
    'triste': '😞',
    'fête': '🥳'
}
```

```python
type(emoji)
```

    dict

<div class="info">
    
Dans l'exemple ci-dessus:

- les clés sont `'content'`, `'triste'` et `'fête'` .
- les valeurs sont des chaînes de caractères qui contiennent des emojis.</div>

<div class="info">
    
**Les clés** d'un dictionnaire **doivent être immuables.**</div>

```python
coords = {
    (3, 5): 'tresor',
    (-2, 3): 'demon',
    (1, 6): 'piege'
}
```

```python
# Les listes comme clés sont interdit...
# ...parce que ils sont pas immuables.
coords_liste = {
    [3, 5]: 'tresor',
    [-2, 3]: 'demon',
    [1, 6]: 'piege'
}
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[13], line 3
          1 # Les listes comme clés sont interdit...
          2 # ...parce que ils sont pas immuables.
    ----> 3 coords_liste = {
          4     [3, 5]: 'tresor',
          5     [-2, 3]: 'demon',
          6     [1, 6]: 'piege'
          7 }


    TypeError: unhashable type: 'list'

<div class="info">
    
Remarque: les types qu'on a vus dans la première session (`str`, `int`, `bool`, `float`, `None`) sont tous **immuables** donc on peut les utiliser comme clés.</div>

<div class="info">
    
On peut accéder à la valeur associée d'une clé en utilisant des crochets.</div>

```python
emoji = {
    'content': '🙂',
    'triste': '😞',
    'fête': '🥳'
}

emoji['fête']
```

    '🥳'

```python
coords = {
    (3, 5): 'tresor',
    (-2, 3): 'demon',
    (1, 6): 'piege'
}

coords[(1,6)]
```

    'piege'

<div class="warn">
    
Si la clé n'existe pas dans le dictionnaire, on rencontre une erreur.</div>

```python
coords = {
    (3, 5): 'tresor',
    (-2, 3): 'demon',
    (1, 6): 'piege'
}

coords[(0,0)]
```

    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    Cell In[34], line 7
          1 coords = {
          2     (3, 5): 'tresor',
          3     (-2, 3): 'demon',
          4     (1, 6): 'piege'
          5 }
    ----> 7 coords[(0,0)]


    KeyError: (0, 0)

<div class="info">
    
On peut ajouter des paires clé-valeurs.</div>

```python
emoji = {
    'content': '🙂',
    'triste': '😞',
    'fete': '🥳'
}

emoji['mdr'] = '🤣'
emoji
```

    {'content': '🙂', 'triste': '😞', 'fete': '🥳', 'mdr': '🤣'}

<div class="info">
    
On peut aussi changer la valeur d'une clé existante.</div>

```python
coords = {
    (3, 5): 'tresor',
    (-2, 3): 'demon',
    (1, 6): 'piege'
}

coords[(3,5)] = 'monstre'
coords
```

    {(3, 5): 'monstre', (-2, 3): 'demon', (1, 6): 'piege'}

<div class="info">
    
Il existe des méthodes `.keys()`, `.values()` et `.items()`, qui retournent des "listes" associées au dictionnaire.</div>

```python
emoji.keys()
```

    dict_keys(['content', 'triste', 'fete', 'mdr'])

```python
coords.values()
```

    dict_values(['monstre', 'demon', 'piege'])

```python
emoji.items()
```

    dict_items([('content', '🙂'), ('triste', '😞'), ('fete', '🥳'), ('mdr', '🤣')])

# Exercices

<div class="exer-start">

Voici un dictionnaire `mon_dico`.</div>

```python
mon_dico = {
    'nombres': [1, 2, 3],
    'lettres': ['a', 'b', 'c'],
    'sports':  ['foot', 'belote', 'petanque']
}
```

<div class="exer-mid">

Remplacer `# ??? #` dans la cellule suivante pour qu'elle affiche `['a', 'b', 'c']`.</div>

```python
print( mon_dico# ??? # )
```

<div class="exer-mid">

Remplacer `# ??? #` dans la cellule suivante pour qu'elle affiche `belote`.</div>

```python
print( mon_dico# ??? # )
```

<div class="exer-mid">

Modifiez dans le dictionaire `mon_dico`, la chaîne de caractères `foot` en `football`.</div>

```python
# ??? #
print( mon_dico )
```

<div class="exer-end"></div>

<div class="exer-start">

Compléter la fonction `formater_profil` qui prend un dictionnaire `profil` comme argument.

Elle doit ajouter une clé `age` à `profil` avec la valeur de l'âge.</div>

```python
mon_profil_1 = {
    "prenom": 'Jean-Claude',
    "nom": 'Van Damme',
    "annee_naissance": 1960
}

mon_profil_2 = {
    "prenom": 'Jean-Claude',
    "nom": 'Van Damme Junior',
    "annee_naissance": 2006
}

def formater_profil(profil):
    # Ajouté un clé age avec la valeur appropriée pour 2024
    profil['age'] = # ??? #
```

      Cell In[36], line 15
        profil['age'] = # ??? #
                        ^
    SyntaxError: invalid syntax

```python
formater_profil(mon_profil_1)
print(mon_profil_1)
formater_profil(mon_profil_2)
print(mon_profil_2)
```

    {'prenom': 'Jean-Claude', 'nom': 'Van Damme', 'annee_naissance': 1960, 'age': 64}
    {'prenom': 'Jean-Claude', 'nom': 'Van Damme Junior', 'annee_naissance': 2006, 'age': 18}

<div class="exer-end"></div>

<div class="exer-start exer-hard">

Remplacer le `# ??? #` pour que le code affiche `VICTOIRE`.</div>

```python
a = {
    's': [1, 2, 3],
    't': [4, ('cinq', 5, 'V', 'five', {
        'gagner': 'PAIN_PERDU',
        'perdre': 'LALALAVICTOIRE!!!'
    }), 6],
}

print( a# ??? # )
```

<div class="exer-end"></div>
