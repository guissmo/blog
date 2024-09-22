---
title: "Valeurs mutables par défaut en Python"
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2024-05-28T18:58:32+00:00
description: Je parle a propos d'un exercice du BAC de NSI 2024.
slug: valeurs-mutable-par-defaut-en-python
tags:
  - python
  - bac
  - nsi
  - français
---

Dans le bac de l'Amérique Nord - Sujet 1
([24-NSIJ1AN1](https://www.math93.com/images/pdf/annales_bac/Bac_NSI/bac_NSI_2024/24-NSIJ1AN1.pdf)), on a l'exercice suivante:

> Recopier et compléter le code de la fonction `parcours_en_profondeur(d, s)` qui prend en paramètres un dictionnaire d'adjacence `d` et un sommet `s` et qui renvoie la liste des sommets issue du parcours en profondeur du graphe modélisé par `d` à partir du sommet `s`.

Le code a compléter:

```python
def parcours_en_profondeur(d, s, visites = []):
    ###
    for v in d[s]:
        ###
            parcours_en_profondeur(d, v)
    ###
```

# Correction

Selon un correction que j'ai trouvé dans l'Internet, la bonne réponse est:

```python
def parcours_en_profondeur(d, s, visites = []):
    visites.append(s)
    for v in d[s]:
        if v not in visites:
            parcours_en_profondeur(d, v)
    return visites
```

En effet, ça donne la liste des sommets issue du parcours. Par exemple, quand on éxecute la code suivante:

```python
d = { 'A': ['B'], 'B': ['A'], }
parcours_en_profondeur(d, 'A')
```

La sortie est:

```python
['A', 'B']
```

Ça marche et c'est correct. Et si on utilise `B` comme la premiere sommet?

```python
parcours_en_profondeur(d, 'B')
```

La sortie devient:

```python
['A', 'B', 'B']
```

Attend, ça peut-être pas correct. On passe par 'B' deux fois? Et pourquoi `B` n'est pas au debut de la liste?

Au moins, si on recommence par `A`, tout va bien:

```python
parcours_en_profondeur(d, 'A')
['A', 'B', 'B', 'A']
```

[Mamma mia](https://youtu.be/unfzfe8f9NI?t=49)! C'est vraiment etonnant que la fonction renvoie une liste des lettre qui forme les initiales de membres d'un groupe suédois de pop celebre.

Mais pourquoi?

# Gimme Gimme Gimme Une Idée Pourquoi

Apparement, dans Python, les valeurs par défaut sont initialisé quand on declare les fonctions. Par exemple:

```python
def foo(s, visites = []):
    visites.append(s)
    return visites
```

Chaque fois qu'on appele ce function sans deuxième argument, Python utilise la même instance d'une liste et c'est pour ça qu'on voit une mauvaise sortie pour notre fonction.

```python
def foo(s, visites = []):
    visites.append(s)
    return visites
print(foo('A')) # ['A']
print(foo('A')) # ['A', 'A']
print(foo('A', [])) # ['A']
print(foo('A')) # ['A', 'A', 'A']
```

# Comment Resoudre

Pour resoudre ce problème est avoir un fonction `parcours_en_profondeur` qui marche plus qu'une fois, il faut utiliser un valeur pour visites qui est **immuable**. Par convention, on utilise `None` mais ça peut être n'importe quel valeur immuable.

```python
def parcours_en_profondeur(d, s, visites = None):
```

Apres, on ajoute un petit `if` pour initialiser le tableau visites.

```python
    if visites is None:
        visites = []
```

Finalement, on passe `visites` comme troisème argument. Comme ça, le prochaine appel de ce fonction peut vraiment accumuler les noeuds qu'on a visité.

```python
    visites.append(s)
    for v in d[s]:
        if v not in visites:
            parcours_en_profondeur(d, v, visites)
    return visites
```

# Une solution réelle à l'exercice original

Vu qu'on peut pas changer les arguments des fonctions parce que c'est un examen, on peut plutot completer le code comme ça:

Pour le premiere blanc, on met:

```python
def vrai_parcours_en_profondeur(d, s, visites=None):
    if visites is None:
        visites = []
    visites.append(s)
    for v in d[s]:
        if v not in visites:
            vrai_parcours_en_profondeur(d, v, visites)
    return visites
```

On n'utilise plus l'appel `parcours_en_profondeur(d, v)`, donc on met `if False:` devant.

Finalement, on return `vrai_parcours_en_profondeur(d, s)`.

Voila mon version de la correction:

```python
def parcours_en_profondeur(d, s, visites = []):
    def vrai_parcours_en_profondeur(d, s, visites = None):
        if visites is None:
            visites = []
        visites.append(s)
        for v in d[s]:
            if v not in visites:
                vrai_parcours_en_profondeur(d, v, visites)
        return visites
    for v in d[s]:
        if False:
            parcours_en_profondeur(d, v)
    return vrai_parcours_en_profondeur(d, s)
```

Bon, c'est pour rigoler un peu vu que c'était surement pas l'intention de l'exercice mais c'est une solution valide qui marche bien même apres le premier éxecution.
