---
title: "NSI: Rappel (1ère partie)"
layout: "/src/layouts/NSIPostLayout.astro"
category: NSI
author: guissmo
date: 2024-09-19T18:59:47+00:00
draft: false
toc: true
description: Dans cette première partie d'une série de rappels, nous revoyons les concepts de base de Python tels que les commentaires, la fonction print, l'affectation, les objets et les types.
slug: nsi-terminale-rappel-1
tags:
  - nsi
  - terminale
  - python
  - français
---

# Pourquoi Python?

- Python est **open-source**, ça veut dire que le code est librement accessible au publique.
- Python est très utilisé dans le monde du travail.
- Les gens qui travaillent en **data science**, **IA**, et **machine learning** utilisent Python.

# Rappels (1ère Partie)

Dans ce cours, on nous allons revoir : comment écrire des commentaires, comment afficher des objets, et les différents types d'objet en Python.

<div class="warn">
    
Pour exécuter une cellule Python sur Basthon, vous pouvez utiliser le raccourci **Ctrl + Entrée**.

Vous pouvez également appuyer sur le bouton **▶️ Exécuter** dans la barre d'outils.

</div>

Essayez d'exécuter le code ci-dessous.

```python
1 + 1
```

    2

## Commentaires

<div class="info">
    
On peut écrire des commentaires sur un code.
    
Les commentaires n'ont aucune conséquence sur le code.
    
</div>

```python
# Je suis un commentaire.
```

## La fonction `print`

```python
# Affiche la chaîne de caractères (ou string en anglais) "Est-ce que c'est bon pour vous ?"
print("Est-ce que c'est bon pour vous ?")
```

    Est-ce que c'est bon pour vous ?

<div class="info">

Jupyter Notebook affiche automatiquement et **uniquement** le dernier résultat d'une cellule.

</div>

```python
"Pas besoin de print"
```

    'Pas besoin de print'

```python
"Qu'est ce que je vais afficher?"
"A. Bonjour"
"B. Coucou"
"C. Mes sincères salutations"
"D. Hey"
```

    'D. Hey'

## Affectation

<div class="info">

On peut _attribuer_ à des variables des objets en utilisant le symbole `=`.

</div>

```python
# On attribue à la variable 'a' le résultat de 1 + 1
a = 1 + 1

# On attribue à la variable 'cou2' la chaîne de caractères "Coucou"
cou2 = "Coucou"
```

<div class="err">

Les noms des variables **ne peuvent pas** commencer par un chiffre.

</div>

```python
2cou = "Du coup"
```

      Cell In[20], line 1
        2cou = "Du coup"
        ^
    SyntaxError: invalid decimal literal

<div class="info">

On peut également utiliser les variables dans la partie droite d'affectation.

</div>

```python
# On attribue à la variable 'm' la valeur 2.
m = 2

# On utilise la valeur de 'm' et on y ajoute 3, puis on attribue à la variable 'n' le résultat.
n = m + 3

# On affiche la valeur de 'n' en utilisant print.
print(n)
```

    5

<div class="example">

Voici un exemple qui montre comment incrémenter la valeur d'une variable.

</div>

```python
p = 2      # p = 2
p = p + 2  # p = 4
p = p + 3  # p = 7
p = p * 5  # p = 35
print(p)
```

    35

<div class="info">

Au lieu de `variable = variable + x`, on peut écrire `variable += x`.

Voir les exemples ci-dessous.

</div>

```python
q = 3  # q = 3
q += 1 # q = 4
q += 1 # q = 5
q -= 7 # q = -2
print(q)

r = 5  # r = 5
r *= 4 # r = 20
r *= 3 # r = 60
print(r)
```

    -2
    60

## Les différents types d'objets

<div class="info">

Dans Python, chaque objet a un **type**. Pour savoir le type d'un objet, on peut utiliser la fonction `type`.

</div>

```python
type( 0.5 )
```

    float

```python
type( 3 )
```

    int

```python
type ( False )
```

    bool

```python
type ( ["Mbappé", "Zidane", "Pogba", "Squeezie", "Deschamps"] )
```

    list

```python
type ( {
    "prenom": "N'Golo",
    "nom": "Kanté"
} )
```

    dict

### Les entiers (int)

<div class="info">
    
On peut représenter les nombres entiers en Python.
    
</div>

```python
1 # Je suis un.
```

    1

<div class="info">

On peut utiliser des opérations usuelles entre plusieurs nombres entiers.

</div>

```python
# addition et soustraction
1 + 1 - 420
```

    -418

```python
# multiplication
3 * 42 + 25
```

    151

```python
# puissance
2 ** 10
```

    1024

```python
# division (le résultat sera toujours de type float)
print(151/42)
print(2/1)
```

    3.5952380952380953
    2.0

```python
# division (renvoie la partie entière du résultat, ce sera donc un entier de type int)
151 // 42
```

    3

```python
# modulo (x%y ça veut dire le reste quand on divise x par y)
151 % 42
```

    25

### Les floats

<div class="info">
    
On peut représenter tous les nombres réels en Python.
    
</div>

```python
1 / 3
```

    0.3333333333333333

<div class="warn">
    
Attention: Au lieu d'utiliser une virgule, on utilise un point.
    
</div>

```python
10 / 5 # Observer qu'il y a toujours un point quand c'est de type float.
```

    2.0

```python
3.14159 # une approximation de pi
```

    3.14159

<div class="info">
    
Comme les nombres de type `int`, on peut utiliser l'addition, la soustraction, la multiplication, la division, et les puissances sur les nombre de type float.
           
</div>

<div class="exer-start">
    
Si on efface `#` dans chaque cellule, qu'affichent les cellules suivantes ?
    
**Réfléchissez d'abord puis vérifier en enlevant le `#`.**
    
</div>

```python
# 0 * 5
```

```python
# 10 % 3
```

```python
# 3 / 2 + 1
```

```python
# 3 // 2 + 1
```

```python
# 3 ** 2
```

```python
# type(2)
```

```python
# x = 10
# x = x + 5
# x = x * 2
# y = 10 + 5 * 2
# print(x - y)
```

<div class="exer-end">
    
</div>

### Les booléens (bool)

<div class="info">
    
Il y a deux objets qui ont le type `bool`: `True` (vrai) et `False` (faux).

</div>

```python
True
```

    True

<div class="warn">

Attention, dans Python, le `T` et le `F` sont en majuscule.

</div>

```python
False
```

    False

<div class="info">
    
On peut utiliser `not` (pas), `and` (et), `or` (ou).

</div>

```python
not False
```

    True

```python
True and False
```

    False

<div class="example">
    
Voici un tableau qui affiche tout les résultats possible si on utilise `and`:
| `and`     | **True** | **False** |
|-----------|----------|-----------|
| **True**  | True     | False     |
| **False** | False    | False     |
    
</div>

<div class="exer-start">

Recopier puis compléter le tableau. Vous pouvez expérimenter.

| `or`      | **True** | **False** |
| --------- | -------- | --------- |
| **True**  | ???????? | ????????? |
| **False** | ???????? | ????????? |

</div>

```python
# Éxperimenter ici!
print(True or True)
```

    True

<div class="exer-end">
    
</div>

#### Comparaisons

<div class="info">
    
On peut comparer deux objets en utilisant `==`.
    
</div>

```python
1 + 1 == 2
```

    True

```python
x = 6
y = 2 ** 3
x == y
```

    False

<div class="info">
    
On peut utiliser `!=` au lieu de `==` pour tester si les objets sont différents.
    
</div>

```python
1 + 1 != 3
```

    True

<div class="info">
    
Bien sûr pour les nombres, on peut aussi utiliser `>`, `>=`, `<` et `<=`.
    
</div>

```python
taille_de_mon_doigt_en_cm = 9
taille_de_mon_doigt_en_cm < 15
```

    True

```python
10 ** 100 >= 10 * 100
```

    True

<div class="info">
    
On peut enchaîner les booléens.
    
</div>

```python
True and True and False
```

    False

```python
(taille_de_mon_doigt_en_cm > 8) and (taille_de_mon_doigt_en_cm < 15)
```

    True

<div class="exer-start">

Déterminez ce qu'affichent les cellules suivantes si on efface `#` dans chaque cellule puis le verifier.

</div>

```python
# (3 < 2) or (2 < 3)
```

```python
# 1 == "1"
```

```python
# not not not not not not not not not not not not not not not not not not not not not 1 != 2
```

<div class="exer-end">
    
</div>

<div class="exer-start">
    
Modifier la premiere ligne pour que la cellule affiche `True` quand on l'éxecute.
    
</div>

```python
# Modifiez la ligne suivante:
a = 0

# On peut pas modifier ces lignes:
a += 5
print(a > -3/2 and a < 0)
```

    False

<div class="exer-end">
    
</div>

<div class="exer-start">
    
Modifier la premiere ligne pour que la cellule affiche `False` quand on l'éxecute.
    
</div>

```python
# Modifiez la ligne suivante:
b = 0

# On peut pas modifier ces lignes:
b *= 2
print(b <= -1 or b >= 0)
```

    True

<div class="exer-end">
    
</div>

### Les chaînes de caractères ou string (str)

<div class="info">
    
Les chaînes des caracteres sont entourées par `"` ou `'`.
    
</div>

```python
"Suis un string"
```

    'Suis un string'

```python
SuisPasUnString
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[64], line 1
    ----> 1 SuisPasUnString


    NameError: name 'SuisPasUnString' is not defined

```python
Nous Non Plus
```

```python
'SuisUnString'
```

<div class="info">
    
On peut utiliser `str(...)` pour convertir la majorité des objets en type string.</div>

```python
str(1+1)
```

```python
str(False)
```

    'False'

<div class="info">

On peut convertir une chaîne de caractères de chiffres en type `int`, en utilisant la fonction `int`.</div>

```python
int("5678") + int("2")
```

    5680

<div class="info">
    
On peut additionner les chaînes de caractères?!</div>

```python
"Wh" + "aou"
```

    'Whaou'

```python
"1" + "2"
```

    '12'

#### Accès et découpage de chaînes de caractères

On affecte la chaîne de caractères `education` à la variable `mot`.

```python
mot = "education"
```

<div class="info">
    
On peut connaître le nombre de caractères en utilisant la fonction `len`.</div>

```python
len(mot)
```

    9

```python
len("a b c")
```

    5

<div class="info">
    
Pour vérifier si une chaîne de caractères se trouve dans une autre chaîne en Python, on utilise l'opérateur `in`.</div>

```python
"duc" in mot
```

    True

```python
"duc" in "education"
```

    True

```python
"je" in "equipe"
```

    False

```python
"m" in mot
```

    False

<div class="info">
    
Pour accéder aux caractères de `education` en Python, il faut placer l'indice souhaité entre crochets après la chaîne (ou la variable).</div>

<div class="err">
    
Rappel : En Python, le premier indice est 0, pas 1.</div>

```python
# Ainsi, mot[0] signifie le premier caractère de `education`.
mot[0]
```

    'e'

```python
# Ainsi, mot[3] est le 4ème caractère.
mot[3]
```

    'c'

<div class="info">
    
Les indices négatifs comptent à partir de la fin de la chaîne de caractères, de droite à gauche.</div>

```python
mot[-1]
```

    'n'

```python
# Le troisème caractère de droite d'education est 'i'.
mot[-3]
```

    'i'

<div class="warn">
    
On ne peut pas modifier un caractère d'une chaine de caractères en utilisant `=`:</div>

```python
mot[4] = 'k'
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[80], line 1
    ----> 1 mot[4] = 'k'


    TypeError: 'str' object does not support item assignment

<div class="info">
    
 Quand les crochets contiennent ``:``, la signification change.</div>

```python
# `mot[0:3]` signifie : prendre les caractères de l'indice 0 (inclus) jusqu'à l'indice 3 (exclus).
mot[0:3]
```

    'edu'

```python
# Voici un autre exemple.
mot[5:8]
```

    'tio'

```python
# Si on ne met pas de nombre à gauche du `:`, Python considère le nombre gauche comme 0.
mot[:8]
```

    'educatio'

```python
# Si on ne met pas de nombre à droite du `:`,
# Python considère le nombre droite comme le dernier indice.
mot[5:]
```

    'tion'

## Le type `None`

<div class="info">
    
Il y a un type en particulaire pour dire rien. C'est `None`. Son type est `NoneType`.</div>

```python
type( None )
```

    NoneType

<div class="info">
    
Dans Jupyter Notebook, si la dernière valeur est `None`, rien ne s'affiche.</div>

```python
1 + 1
None
```

## Exercices

<div class="exer-start">
    
`mot_de_passe` est une chaîne de caractères. Selon les indices suivants, deviner la valeur de `mot_de_passe`.

- `mot_de_passe[6]` est `_`
- `mot_de_passe[:3]` est `jai`
- `mot_de_passe[8:]` est `SI!`
- `mot_de_passe[1:6]` est `aime_`
- `'N' in mot_de_passe` est `True`

</div>

<div class="exer-end">
    </div>

<div class="exer-start">
    
Si on efface `#` dans chaque cellule, qu'affichent les cellules suivantes ?
    
**Réfléchissez d'abord puis vérifier en enlevant le `#`.**
    
</div>

```python
# '4092304' + '39028'
```

```python
# coucou = "Bonjour"
# print(coucou)
```

<div class="exer-end">
    
</div>

<div class="exer-start">
    
Corriger les codes suivant: </div>

```python
# Ce code affiche Bonjour
print(Bonjour)
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[89], line 2
          1 # Ce code affiche Bonjour
    ----> 2 print(Bonjour)


    NameError: name 'Bonjour' is not defined

```python
# On veut vérifier si 1 + 1 est égal à 2.
1 + 1 = 2
```

      Cell In[90], line 2
        1 + 1 = 2
        ^
    SyntaxError: cannot assign to expression here. Maybe you meant '==' instead of '='?

```python
# Ce code doit afficher l'entier 2.
'a' = 1
print(a + a)
```

      Cell In[91], line 2
        'a' = 1
        ^
    SyntaxError: cannot assign to literal here. Maybe you meant '==' instead of '='?

<div class="exer-end"></div>

<div class="exer-start">
    
**Dans cet exercice, vous pouvez expérimenter avec le code.**
    
Quel type d'erreur (`SyntaxError`, `TypeError`, etc) arrive quand:</div>

```python
# on ajoute un `int` et un `str`?
1 + "1"
```

    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[92], line 2
          1 # on ajoute un `int` et un `str`?
    ----> 2 1 + "1"


    TypeError: unsupported operand type(s) for +: 'int' and 'str'

```python
# on assign False a true?
True = False
```

      Cell In[93], line 2
        True = False
        ^
    SyntaxError: cannot assign to True

```python
# on divise par 0?
4983 / 0
```

    ---------------------------------------------------------------------------

    ZeroDivisionError                         Traceback (most recent call last)

    Cell In[94], line 2
          1 # on divise par 0?
    ----> 2 4983 / 0


    ZeroDivisionError: division by zero

```python
# on essaie d'utiliser un variable qui n'est pas encore initialisé?
fjsklvh
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[95], line 2
          1 # on essaie d'utiliser un variable qui n'est pas encore initialisé?
    ----> 2 fjsklvh


    NameError: name 'fjsklvh' is not defined

```python
# si on utilise une apostrophe dans un string qui est entouré par des apostrophes
'J'suis content.'
```

      Cell In[96], line 2
        'J'suis content.'
                        ^
    SyntaxError: unterminated string literal (detected at line 2)
