---
title: "NSI: Rappel (4ème partie)"
layout: "/src/layouts/NSIPostLayout.astro"
category: NSI
author: guissmo
date: 2024-09-21T20:44:41+00:00
draft: false
toc: true
description: "Dans cette quatrième et dernière partie des rappels, on revoit comment utiliser les boucles `for` et `while`. On parle aussi des itérateurs, en particulier celui renvoyé par la fonction `range`."
slug: nsi-terminale-rappel-4
tags:
  - nsi
  - terminale
---

# Rappel (4ème Partie)

## Objets itérables et boucle `for`

<div class="info">

Un **objet itérable** en Python est un objet qui peut être parcouru élément par élément, comme une liste, un tuple ou une chaîne de caractères.

On peut utiliser une boucle `for` pour parcourir ses éléments.

</div>

<div class="info">

En Python, la syntaxe d'une boucle `for` est la suivante :

</div>

```python
for mot in ['moi', 'moche', 'mechante']:
    print(mot)
```

    moi
    moche
    mechante

```python
for aaaaaaaaaa in ['moi', 'moche', 'mechante']:
    print(aaaaaaaaaa)
```

    moi
    moche
    mechante

<div class="example">

Voici un autre exemple.</div>

```python
ma_liste = ['trop drôle', 'samedi', 'trop cool', 'extra']

for elt in ma_liste:
    print(elt)
```

    trop drôle
    samedi
    trop cool
    extra

<div class="warn">

Il n'est pas conseillé de modifier une liste (ou une autre structure **mutable** comme un dictionnaire) pendant qu'on la parcourt avec une boucle.

</div>

```python
ma_liste = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for n in ma_liste:
    print(n)
    # On rappelle que .pop() enlève le dernier élément de la liste.
    ma_liste.pop()
```

    0
    1
    2
    3
    4

### La fonction `range`

<div class="info">

`range` est une fonction qui renvoie un objet itérable.</div>

<div class="info">

`range(x)` représente une séquence allant de `0` à `x-1`.</div>

```python
for nombre in range(5):
    print(nombre)
```

    0
    1
    2
    3
    4

<div class="info">

`range(a, b)` représente une séquence allant de `a` à `b-1`.</div>

```python
for an in range(2020, 2024):
    print(an)
```

<div class="info">

`range(a, b, c)` représente une séquence allant de `a` à `b-1` avec un pas `c` entre chaque élément.</div>

```python
for nombre in range(50, 60, 2):
    print(nombre)
```

    50
    52
    54
    56
    58

```python
for nombre in range(11, 0, -3):
    print(nombre)
```

    11
    8
    5
    2

<div class="info">

Voici quelques exemples d'utilisation de `range`:</div>

```python
carres = []
for x in range(1, 11):
    # Ajoute x*x dans la liste carres.
    carres.append(x*x)
print(carres)
```

    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

```python
for n in range(9, 0, -2):
    print( '*' * n )
```

    *********
    *******
    *****
    ***
    *

## while

<div class="info">

En Python, une boucle `while` permet d'exécuter de manière répétée un bloc de code tant qu'une condition spécifiée est vraie.

Voici la syntaxe de base d'une boucle `while` en Python et une explication en français de chaque partie :</div>

```python
while condition:
    # bloc de code
```

Par exemple, on peut vider une liste tout en traitant chaque élément.

```python
# Initialiser une liste de fruits
ma_liste = ['pomme', 'poire', 'fraise', 'cerise']

# Tant que la liste contient des éléments
while len(ma_liste) > 0:
    # Enlever le dernier fruit de la liste et le stocker dans la variable 'fruit'
    fruit = ma_liste.pop()
    # Afficher un message indiquant que l'on mange le fruit
    print(f"Je mange une {fruit}. Mmm! Delicieux!")

# Afficher la liste maintenant vide
print(ma_liste)
```

    Je mange une cerise. Mmm! Delicieux!
    Je mange une fraise. Mmm! Delicieux!
    Je mange une poire. Mmm! Delicieux!
    Je mange une pomme. Mmm! Delicieux!
    []

<div class="warn">

Attention ! C'est facile d'accidentellement faire une boucle infinie !

Si tu fais une boucle infinie, il faudra fermer Capytale et relancer.

</div>

```python
# Ne m'exécutez pas !
while 1+1 == 2:
    print("Oh non ! Je suis dans une boucle infinie ! Fermer Capytale et relancer si vous m'avez exécuté !")
```

# Exercices

<div class="exer-start">

Corrigez la fonction `somme` qui prend en entrée une liste `liste` des entiers et retourne la somme des elements de la liste. Si la liste est vide, retourne `0`.

</div>

```python
def somme():
    resultat = 0
    for i in liste
        resultat = resultat + n

print( somme([1, 5, 9]) )  # 15
```

<div class="exer-end">

</div>

<div class="exer-start">

Complétez la fonction `recherche_for` qui prend comme argument **une liste `liste` des entiers triée** et **un entier `n`**.

Elle renvoie `True` si `n` se trouve dans `liste` et `False` sinon.

</div>

```python
def recherche_for(liste, n):
    dans_la_liste = False
    for i in liste:
        if # ??? #
            # ??? #
    return dans_la_liste
```

<div class="exer-end">

</div>

<div class="exer-start">

Completez la fonction `maximum` qui prend en entrée une liste de nombres positifs et retourne le nombre le plus grand de la liste. Si la liste est vide, retourne `0`.

</div>

```python
def maximum(liste):
    if len(liste) == 0:
        return 0
    maxi = liste[0]
    for n in liste:
        if n > maxi:
            maxi = n
    return maxi
```

```python
print( maximum( [1, 10**10 + 3.14, 1.14] ) )
```

    10000000003.14

<div class="exer-end">

</div>

<div class="exer-start">
    
Completez la fonction suivant qui prend en entrée un entier `x` et affiche tous les nombres impairs de $1$ à $x$, inclusivement, sur une seule ligne, séparés par un espace.
    
</div>

```python
def afficher_les_impairs_for(x):
    for i in range(# ??? #):
        print(i, end=' ')

afficher_les_impairs_for(10) # 1 3 5 7 9
```

<div class="exer-end">

</div>

<div class="exer-start">
    
Completez la fonction suivant qui prend en entrée un entier `x` et affiche tous les nombres impairs de $1$ à $x$, inclusivement, sur une seule ligne, séparés par un espace.
    
</div>

```python
def afficher_les_impairs_while(x):
    n = # ??? #
    while n <= # ??? #:
        print(n, end=' ')
        n = # ??? #

afficher_les_impairs_while(10) # 1 3 5 7 9
```

<div class="exer-end">

</div>

<div class="exer-start">

Écrivez une fonction Python appelée `combien_ont_reussi` qui prend en entrée une liste `notes` de notes d'étudiants (représentées par des entiers) et compte combien d'étudiants ont réussi leur examen, c'est-à-dire ceux qui ont obtenu une note supérieure ou égale à $10$.

Par exemple, si vous appelez la fonction `combien_ont_reussi([8, 12, 5, 15, 9, 10])`, elle devrait retourner `3` car il y a trois étudiants qui ont obtenu une note égale ou supérieure à $10$.

</div>

```python
def combien_ont_reussi(notes):
    count = 0
    for note in notes:
        if note >= 10:
            count += 1
    return count
```

```python
print( combien_ont_reussi( [8, 12, 5, 15, 9, 10] ) ) # 3
print( combien_ont_reussi( [20, 20, 20, 20] ) ) # 4
print( combien_ont_reussi( [4, 4, 3, 1, 8] ) ) # 0
print( combien_ont_reussi( [10.5, 9.99, 10.1] ) ) # 2
```

    3
    4
    0
    2

<div class="exer-end">

</div>

<div class="exer-start">

Écrivez une fonction Python appelée `mots_sans_e` qui prend en entrée une liste de mots et retourne une nouvelle liste ne contenant que les mots qui ne contiennent pas la lettre "e".

Par exemple, si vous appelez la fonction `mots_sans_e(["chat", "chien", "girafe", "souris"])`, elle devrait retourner `["chat", "souris"]`, car `chien` et `girafe` contiennent la lettre "e" et sont donc exclu.

**Consignes supplémentaires :**

- Utilisez une boucle `for` pour parcourir chaque mot dans la liste.
- Utilisez une condition `if` pour vérifier si le mot ne contient pas la lettre "e".
- Si le mot satisfait cette condition, ajoutez-le à une liste `resultat`.
- Retournez la liste `resultat` contenant les mots sans la lettre "e".

</div>

```python
def mots_sans_e(mots):
    resultat = []
    for mot in mots:
        if "e" not in mot:
            resultat.append(mot)
    return resultat
```

```python
print ( mots_sans_e(["chat", "chien", "girafe", "souris"]) )
print ( mots_sans_e(['anticonstitutionnalisassions', 'glycosylphosphatidylinositol']) )
print ( mots_sans_e(["e", "ee", "eee", "eeee"]) )
```

    ['chat', 'souris']
    ['anticonstitutionnalisassions', 'glycosylphosphatidylinositol']
    []

<div class="exer-end">

</div>

<div class="exer-start">

Écrivez une fonction Python appelée `score` qui prend en entrée une liste d'objets représentés par des chaînes de caractères et calcule un score en fonction des règles suivantes :

- Chaque étoile ('⭐') ajoute $10$ points au score.
- Chaque crotte ('💩') soustrait $3$ points au score.
- Chaque muscle ('💪') double le score actuel.
- Un crâne ('💀') arrête immédiatement le jeu.

Par exemple, si vous appelez la fonction `score(['⭐', '💩', '⭐', '💪', '💀', '💪', '⭐'])`, elle devrait retourner `34`.

- ⭐: +10 = 10
- 💩: -3 = 7
- ⭐: +10 = 17
- 💪: x2 = 34
- 💀: mort, donc la fonction retourne `34`.

Par contre, `score(['💩', '💩', '💩', '💪', '⭐', '💪', '⭐'])` devrait retourner `-6`.

</div>

```python
# Vous pouvez utiliser ce dictionnaire si ça vous conviennent.
EMOJIS = {
    'etoile': '⭐',
    'crotte': '💩',
    'muscle': '💪',
    'crane': '💀'
}

def score(objets):
    # ??? #
```

<div class="exer-end">

</div>

<div class="exer-start">

Écrivez une fonction Python appelée `collatz` qui prend en entrée un nombre entier positif `depart` et affiche la séquence de Collatz pour ce nombre.

La séquence de Collatz pour un nombre commence par ce nombre `depart`. Si le nombre est pair, divisez-le par $2$. Si le nombre est impair, multipliez-le par $3$ puis ajoutez $1$. Répétez ce processus jusqu'à ce que le nombre atteigne 1.

Par exemple, si vous appelez la fonction `collatz(19)`, elle devrait afficher `19 58 29 88 44 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1`.

</div>

```python
def collatz(depart):
    # ??? #
```

<div class="exer-end">

</div>

<div class="exer-start">

Completez la fonction `compte` qui prend en entrée une chaîne de caractères et retourne un dictionnaire contenant le nombre d'occurrences de chaque caractère dans la chaîne.

</div>

```python
def compte(chaine):
    # Initialiser un dictionnaire vide pour stocker les comptages des caractères
    dico = {}

    # Parcourir chaque caractère dans la chaîne donnée
    for caractere in chaine:
        # Vérifier si le caractère est déjà présent dans le dictionnaire
        if caractere not in dico:
            # Si le caractère n'est pas encore un clé dans le dictionnaire, l'ajouter avec un compteur initial à 0
            dico[caractere] = 0

        # Incrémenter le compteur du caractère dans le dictionnaire
        dico[caractere] += 1

    # Retourner le dictionnaire contenant les comptages des caractères
    return dico

```

```python
print( compte("chaine") )
# {'c': 1, 'h': 1, 'a': 1, 'i': 1, 'n': 1, 'e': 1}

print( compte("JE TE JURE !") )
# {'J': 2, 'E': 3, ' ': 3, 'T': 1, 'U': 1, 'R': 1, '!': 1}

print( compte("erreur") )
# {'e': 2, 'r': 3, 'u': 1}
```

    {'c': 1, 'h': 1, 'a': 1, 'i': 1, 'n': 1, 'e': 1}
    {'J': 2, 'E': 3, ' ': 3, 'T': 1, 'U': 1, 'R': 1, '!': 1}
    {'e': 2, 'r': 3, 'u': 1}

```python
compte("JE TE JURE !")
```

    {'J': 2, 'E': 3, ' ': 3, 'T': 1, 'U': 1, 'R': 1, '!': 1}

```python
compte("")
```

    {}

<div class="exer-start exer-hard">

Ecrivez une fonction Python appelée `plus_loin_dorigine` qui prend en entrée une liste de coordonnées (tuples de deux nombres représentant les coordonnées $x$ et $y$) et retourne la coordonnée qui est la plus éloignée de l'origine $(0, 0)$ en termes de distance euclidienne au carré.

</div>

```python
def plus_loin_dorigine(liste):
    plus_loin = (0, 0)
    plus_loin_distance = 0
    for x, y in liste:
        if x*x + y*y > plus_loin_distance:
            plus_loin = x, y
            plus_loin_distance = x*x + y*y
    return plus_loin
```

```python
plus_loin_dorigine([(1, 1), (12, 35), (36, 0)]) # (12, 35)
```

    (12, 35)

<div class="exer-end">

</div>

<div class="exer-start">
    
Voici quelques données sur `Pikachu` et `Bulbizarre` en dictionnaire.
    
</div>

```python
pikachu = {'pokedex_id': 25, 'generation': 1, 'category': 'Pokémon Souris', 'name': {'fr': 'Pikachu', 'en': 'Pikachu', 'jp': 'ピカチュウ'}, 'sprites': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/regular.png', 'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/shiny.png', 'gmax': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-regular.png', 'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-shiny.png'}}, 'types': [{'name': 'Électrik', 'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png'}], 'talents': [{'name': 'Statik', 'tc': False}, {'name': 'Paratonnerre', 'tc': True}], 'stats': {'hp': 45, 'atk': 80, 'def': 50, 'spe_atk': 75, 'spe_def': 60, 'vit': 120}, 'resistances': [{'name': 'Normal', 'multiplier': 1}, {'name': 'Plante', 'multiplier': 1}, {'name': 'Feu', 'multiplier': 1}, {'name': 'Eau', 'multiplier': 1}, {'name': 'Électrik', 'multiplier': 0.5}, {'name': 'Glace', 'multiplier': 1}, {'name': 'Combat', 'multiplier': 1}, {'name': 'Poison', 'multiplier': 1}, {'name': 'Sol', 'multiplier': 2}, {'name': 'Vol', 'multiplier': 0.5}, {'name': 'Psy', 'multiplier': 1}, {'name': 'Insecte', 'multiplier': 1}, {'name': 'Roche', 'multiplier': 1}, {'name': 'Spectre', 'multiplier': 1}, {'name': 'Dragon', 'multiplier': 1}, {'name': 'Ténèbres', 'multiplier': 1}, {'name': 'Acier', 'multiplier': 0.5}, {'name': 'Fée', 'multiplier': 1}], 'evolution': {'pre': [{'pokedex_id': 172, 'name': 'Pichu', 'condition': 'Bonheur'}], 'next': [{'pokedex_id': 26, 'name': 'Raichu', 'condition': 'Pierre Foudre'}], 'mega': None}, 'height': '0,4 m', 'weight': '6,0 kg', 'egg_groups': ['Terrestre', 'Féerique'], 'sexe': {'male': 50.0, 'female': 50.0}, 'catch_rate': 190, 'level_100': 1000000, 'formes': None}
bulbizarre = {'pokedex_id': 1, 'generation': 1, 'category': 'Pokémon Graine', 'name': {'fr': 'Bulbizarre', 'en': 'Bulbasaur', 'jp': 'フシギダネ'}, 'sprites': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png', 'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png', 'gmax': None}, 'types': [{'name': 'Plante', 'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png'}, {'name': 'Poison', 'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png'}], 'talents': [{'name': 'Engrais', 'tc': False}, {'name': 'Chlorophylle', 'tc': True}], 'stats': {'hp': 45, 'atk': 49, 'def': 49, 'spe_atk': 65, 'spe_def': 65, 'vit': 45}, 'resistances': [{'name': 'Normal', 'multiplier': 1}, {'name': 'Plante', 'multiplier': 0.25}, {'name': 'Feu', 'multiplier': 2}, {'name': 'Eau', 'multiplier': 0.5}, {'name': 'Électrik', 'multiplier': 0.5}, {'name': 'Glace', 'multiplier': 2}, {'name': 'Combat', 'multiplier': 0.5}, {'name': 'Poison', 'multiplier': 1}, {'name': 'Sol', 'multiplier': 1}, {'name': 'Vol', 'multiplier': 2}, {'name': 'Psy', 'multiplier': 2}, {'name': 'Insecte', 'multiplier': 1}, {'name': 'Roche', 'multiplier': 1}, {'name': 'Spectre', 'multiplier': 1}, {'name': 'Dragon', 'multiplier': 1}, {'name': 'Ténèbres', 'multiplier': 1}, {'name': 'Acier', 'multiplier': 1}, {'name': 'Fée', 'multiplier': 0.5}], 'evolution': {'pre': None, 'next': [{'pokedex_id': 2, 'name': 'Herbizarre', 'condition': 'Niveau 16'}, {'pokedex_id': 3, 'name': 'Florizarre', 'condition': 'Niveau 32'}], 'mega': None}, 'height': '0,7 m', 'weight': '6,9 kg', 'egg_groups': ['Monstrueux', 'Végétal'], 'sexe': {'male': 87.5, 'female': 12.5}, 'catch_rate': 45, 'level_100': 1059862, 'formes': None}
```

```python
pikachu
```

    {'pokedex_id': 25,
     'generation': 1,
     'category': 'Pokémon Souris',
     'name': {'fr': 'Pikachu', 'en': 'Pikachu', 'jp': 'ピカチュウ'},
     'sprites': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/regular.png',
      'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/shiny.png',
      'gmax': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-regular.png',
       'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/25/gmax-shiny.png'}},
     'types': [{'name': 'Électrik',
       'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/electrik.png'}],
     'talents': [{'name': 'Statik', 'tc': False},
      {'name': 'Paratonnerre', 'tc': True}],
     'stats': {'hp': 45,
      'atk': 80,
      'def': 50,
      'spe_atk': 75,
      'spe_def': 60,
      'vit': 120},
     'resistances': [{'name': 'Normal', 'multiplier': 1},
      {'name': 'Plante', 'multiplier': 1},
      {'name': 'Feu', 'multiplier': 1},
      {'name': 'Eau', 'multiplier': 1},
      {'name': 'Électrik', 'multiplier': 0.5},
      {'name': 'Glace', 'multiplier': 1},
      {'name': 'Combat', 'multiplier': 1},
      {'name': 'Poison', 'multiplier': 1},
      {'name': 'Sol', 'multiplier': 2},
      {'name': 'Vol', 'multiplier': 0.5},
      {'name': 'Psy', 'multiplier': 1},
      {'name': 'Insecte', 'multiplier': 1},
      {'name': 'Roche', 'multiplier': 1},
      {'name': 'Spectre', 'multiplier': 1},
      {'name': 'Dragon', 'multiplier': 1},
      {'name': 'Ténèbres', 'multiplier': 1},
      {'name': 'Acier', 'multiplier': 0.5},
      {'name': 'Fée', 'multiplier': 1}],
     'evolution': {'pre': [{'pokedex_id': 172,
        'name': 'Pichu',
        'condition': 'Bonheur'}],
      'next': [{'pokedex_id': 26, 'name': 'Raichu', 'condition': 'Pierre Foudre'}],
      'mega': None},
     'height': '0,4 m',
     'weight': '6,0 kg',
     'egg_groups': ['Terrestre', 'Féerique'],
     'sexe': {'male': 50.0, 'female': 50.0},
     'catch_rate': 190,
     'level_100': 1000000,
     'formes': None}

```python
bulbizarre
```

    {'pokedex_id': 1,
     'generation': 1,
     'category': 'Pokémon Graine',
     'name': {'fr': 'Bulbizarre', 'en': 'Bulbasaur', 'jp': 'フシギダネ'},
     'sprites': {'regular': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png',
      'shiny': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png',
      'gmax': None},
     'types': [{'name': 'Plante',
       'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png'},
      {'name': 'Poison',
       'image': 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png'}],
     'talents': [{'name': 'Engrais', 'tc': False},
      {'name': 'Chlorophylle', 'tc': True}],
     'stats': {'hp': 45,
      'atk': 49,
      'def': 49,
      'spe_atk': 65,
      'spe_def': 65,
      'vit': 45},
     'resistances': [{'name': 'Normal', 'multiplier': 1},
      {'name': 'Plante', 'multiplier': 0.25},
      {'name': 'Feu', 'multiplier': 2},
      {'name': 'Eau', 'multiplier': 0.5},
      {'name': 'Électrik', 'multiplier': 0.5},
      {'name': 'Glace', 'multiplier': 2},
      {'name': 'Combat', 'multiplier': 0.5},
      {'name': 'Poison', 'multiplier': 1},
      {'name': 'Sol', 'multiplier': 1},
      {'name': 'Vol', 'multiplier': 2},
      {'name': 'Psy', 'multiplier': 2},
      {'name': 'Insecte', 'multiplier': 1},
      {'name': 'Roche', 'multiplier': 1},
      {'name': 'Spectre', 'multiplier': 1},
      {'name': 'Dragon', 'multiplier': 1},
      {'name': 'Ténèbres', 'multiplier': 1},
      {'name': 'Acier', 'multiplier': 1},
      {'name': 'Fée', 'multiplier': 0.5}],
     'evolution': {'pre': None,
      'next': [{'pokedex_id': 2, 'name': 'Herbizarre', 'condition': 'Niveau 16'},
       {'pokedex_id': 3, 'name': 'Florizarre', 'condition': 'Niveau 32'}],
      'mega': None},
     'height': '0,7 m',
     'weight': '6,9 kg',
     'egg_groups': ['Monstrueux', 'Végétal'],
     'sexe': {'male': 87.5, 'female': 12.5},
     'catch_rate': 45,
     'level_100': 1059862,
     'formes': None}

<div class="exer-mid">
    
Corrigez la fonction `pokemon_id` qui prend en argument tel dictionnaire et renvoie le `pokedex_id` du Pokémon.

</div>

```python
def pokemon_id(pokemon)
    return pokemon['pokedex_id']
```

      Cell In[59], line 1
        def pokemon_id(pokemon)
                               ^
    SyntaxError: expected ':'

```python
pokemon_id(pikachu) # 25
```

<div class="exer-mid">
    
Écrivez la fonction `nom_japonais` qui prend en argument tel dictionnaire et renvoie le nom japonais du Pokémon.

</div>

```python

```

```python
nom_japonais(pikachu) # 'ピカチュウ'
```

    'ピカチュウ'

<div class="exer-mid">
    
Écrivez la fonction `faiblesses` qui prend en argument tel dictionnaire et renvoie **une liste** de chaines de caractères - le noms de resistances du Pokémon qui à un multiplier strictement plus haut que $1$.
    
Par exemple, `faiblesses(bulbizarre)` est `['Feu', 'Glace', 'Vol', 'Psy']`.

</div>

```python

```

```python
faiblesses(bulbizarre) # ['Feu', 'Glace', 'Vol', 'Psy']
```

    ['Feu', 'Glace', 'Vol', 'Psy']

<div class="exer-end">

</div>

<div class="exer-start exer-hard">

Écrivez une fonction Python appelée `censure` qui prend deux arguments : une chaîne de caractères `chaine` et un `mauvais_mot`, et qui remplace toutes les mots qui contiennent `mauvais_mot` par des astérisques (`*`).

Voici quelques exemples d'utilisation :

- exemple 1:
  - entrée: `censure("DOMINIQUE FAIT UN PICNIQUE AVEC SA MERE", "NIQUE")`
  - sortie: `'********* FAIT UN ******** AVEC SA MERE'`
- exemple 2:
  - entrée: `censure("LE CALCUL DE LA CANICULE RÉVÈLE DES DANGERS OCCULTES", "CUL")`
  - sortie: `'LE ****** DE LA ******** RÉVÈLE DES DANGERS ********'`

</div>

```python
def censure(chaine, mauvais_mot):
    # ??? #
```

<div class="exer-end">

</div>
