---
title: "Correction (non officielle) d'Exercice 2 du Sujet 0 de BAC NSI 2024"
layout: "/src/layouts/PostLayout.astro"
category: NSI
author: guissmo
date: 2024-01-14T17:38:06+00:00
categories:
  - French
description: Nous avons essayé l'exercice 2 de la version 2024 du Sujet 0 du BAC NSI.
slug: bac-nsi-2024-sujet-0-exercice-2
tags:
  - nsi
  - terminale
  - python
  - français
  - bac
---

Vu qu'on n'a pas encore trouvé de correction pour cet examen, j'ai travaillé avec Pierre Brun, professeur de mathématiques et de NSI au lycée Jean-Jaurès à Argenteuil (cette année) pour en faire une. Cette correction n'est pas du tout officielle, et c'est juste une proposition. En plus, je ne maîtrise pas encore complètement la langue française (je suis plûtot concentré sur Python) alors il y aura forcément beaucoup d'erreurs de grammaire et d'ortographe.

Les questions sont disponible [ici](https://eduscol.education.fr/document/53916/download).

On n'a fait que l'exercice 2 ce week-end. Et on prevoit de faire les autres bientôt!

Brièvement, le but de l'exercice 2 est de faire un programme qui corrige des copies. Selon la description de l'exercice, un examen a $20$ questions, où on doit répondre par un nombre entier de 1 à 5 inclus. Dans l'exemple donné, la correction est:

```python
corr0 = [4, 2, 1, 4, 3, 5, 3, 3, 2, 1, 1, 3, 3, 5, 4, 4, 5, 1, 3, 3]
```

Et la copie d'un certain Tom Matt et ses réponses sont:

```python
copTM = [4, 1, 5, 4, 3, 3, 1, 4, 5, 3, 5, 1, 5, 5, 5, 1, 3, 3, 3, 3]
```

On voit que M. Tom Matt n'avait pas une bonne récolte. Tant pis.

## Question 1

> Écrire en Python une fonction corrige qui prend en paramètre `cop` et `corr`, deux listes d'entiers entre 1 et 5 et qui renvoie la liste des booléens associée à la copie cop selon la correction `corr`.

Cet exercice est assez simple et moi j'ai codé :

```python
def corrige(cop, corr):
    ret = []
    for i in range(len(cop)):
        ret.append( cop[i] == corr[i] )
    return ret
```

On n'a pas besoin d'utiliser `len(cop)` parce que selon la description, c'est toujours $20$, mais c'est une bonne habitude de faire comme ça.

Si on jeu un peu de [code golf](https://fr.wikipedia.org/wiki/Code_golf), on peut l'écrire autrement un program en utilisant que $81$ caracteres:

```python
def corrige(cop, corr):
    return [ cop[i] == corr[i] for i in range(len(cop))]:
```

Le meilleur qu'on a réussi à atteindre est un programme de $45$ caractères:

```python
corrige=lambda x,y:[a==b for a,b in zip(x,y)]
```

Mais, il faut savoir que `zip` et `lambda` sont un peu exotique.

Bref, on peut rester avec la première version. C'est plus lisible et accessible pour tout le monde.

## Question 2

> Écrire en Python une fonction note qui prend en paramètre `cop` et `corr`, deux listes d'entiers entre $1$ et $5$ et qui renvoie la note attribuée à la copie `cop` selon la correction `corr`, sans construire de liste auxiliaire.

Avoir cette question juste aprés question $1$ donne un peu de confusion parce quon n'a pas le droit de l'utiliser notre fonction `corrige` vu qu'elle construit une liste auxiliare.

```python
def note(cop, corr):
    ret = 0
    for i in range(len(cop)):
        if cop[i] == corr[i]:
            ret += 1
    return ret
```

## Question 3

> Écrire en Python une fonction `notes_paquet` qui prend en paramètre un paquet de copies `p` et une correction `corr` et qui renvoie un dictionnaire dont les clés sont les noms des candidats du paquet `p` et les valeurs sont leurs notes selon la correction `corr`.

Dans cette question, on introduit des paquets des copies.

```python
p1 = {('Tom', 'Matt'): [4, 1, 5, 4, 3, 3, 1, 4, 5, 3, 5, 1, 5, 5, 5, 1, 3, 3, 3, 3], ('Lambert', 'Ginne'): [2, 4, 2, 2, 1, 2, 4, 2, 2, 5, 1, 2, 5, 5, 3, 1, 1, 1, 4, 4], ('Carl', 'Roth'): [5, 4, 4, 2, 1, 4, 5, 1, 5, 2, 2, 3, 2, 3, 3, 5, 2, 2, 3, 4], ('Kurt', 'Jett'): [2, 5, 5, 3, 4, 1, 5, 3, 2, 3, 1, 3, 4, 1, 3, 1, 3, 2, 4, 4], ('Ayet', 'Finzerb'): [4, 3, 5, 3, 2, 1, 2, 1, 2, 4, 5, 5, 1, 4, 1, 5, 4, 2, 3, 4]}.
```

Et il faut utiliser `note` qui renvoie un dictionnaire de notes de nos pôtes agés.

```python
{('Tom', 'Matt'): 6, ('Lambert', 'Ginne'): 4, ('Carl', 'Roth'): 2, ('Kurt', 'Jett'): 4, ('Ayet', 'Finzerb'): 3}
```

Malgré la simplicité de la question, cette fois-ci, il faut savoir comment manipuler les dictionnaires:

```python
def notes_paquet(p, corr):
    ret = {}
    for c in p:
        ret[c] = note(p[c], corr)
    return ret
```

## Question 4

> Expliquer si on peut utiliser des listes de noms plutôt qu'un couple comme clés du dictionnaire.

Autrement dit, si on remplace `('Tom', 'Matt')` par `['Tom', 'Matt]`, est-ce qu'il y aura un problème ?

Vu que c'est demandé dans un examen, la bonne réponse est probablement oui. Mais pourquoi ?

### Mutabilité

On essaye:

```python
p1_en_liste = {['Patte', 'Hate']: [1 for i in range(20)]}
```

On s'est planté!

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
Cell In[50], line 1
----> 1 p1_en_liste = {['Patte', 'Hate']: [1 for i in range(20)]}

TypeError: unhashable type: 'list'
```

Apparement, une liste n'est pas _hashable_. Je vous laisse chercher qu'est-ce que ça veut dire hashable.

Mais un condition nécessaire pour être hashable en Python est d'être **immutable**.

Un objet de type `list` est **mutable**, donc pas immutable, parce qu'on peut le modifier. Par exemple, ce code:

```python
ma_liste = ['Patte', 'Hate']
ma_liste[1] = 'Hate XII'
print(ma_liste)
```

renvoie `['Patte', 'Hate XII']`.

Par contre, si on utilise un tuple:

```python
ma_tuple = ('Patte', 'Hate')
ma_tuple[1] = 'Hate XII'
print(ma_tuple)
```

Python nous dit qu'on s'est planté:

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
Cell In[53], line 2
      1 ma_tuple = ('Patte', 'Hate')
----> 2 ma_tuple[1] = 'Hate XII'
      3 print(ma_tuple)

TypeError: 'tuple' object does not support item assignment
```

On ne peut pas modifier un tuple.

Les clés des dictionnaires doivent être **immutable**. Donc, on ne peut pas simplement remplacer les parenthèses par les crochets.

Question bonus: Est-ce que le code suivante va marcher sans erreur ? Pourquoi ?

```python
{True: 'ouais', "False": 'nan'}
```

## Question 5

> Proposer une autre solution pour éviter les problèmes d'identification des candidats portant les mêmes prénoms et noms. Cette proposition devra prendre en compte la sensibilité des données et être argumentée succinctement.

Par exemple, on trouve que deux élèves sont nommés `("Laitou Foyle", "Deschanel")`, il faut avoir un moyen de les différencier.

On peut utiliser quelque chose comme leurs anniversaires ou leurs couleurs préférées mais il y a toujours la possibilité qu'ils soient tous les deux nés le 29 février 2004 ou qu'ils préfèrent tous les deux le même couleurs, etc.

On peut utiliser quelque chose comme leurs numéro de de securité sociale, leurs emails, ou leurs portables. Mais de telle données sont un peu plus sensible à utiliser.

En fait, une bonne réponse pour cette question était dans les paroles d'une chanson de France Gall [en 1979](https://youtu.be/ZJBJWJkrxD0?t=40).

On est dans les années deux milles et pour faire la vie bien plus facile: on donnera tous un numéro sur le dos.

```python
{1: ('Tom', 'Matt'), 2: ('Lambert', 'Ginne'), 3: ('Carl', 'Roth'), 4: ('Kurt', 'Jett'), 5: ('Ayet', 'Finzerb'), 6: ('Patte', 'Hate'), 7: ('Laitou Foyle', 'Deschanel'), 8: ('Laitou Foyle', 'Deschanel')}
```

## L'Enigme

Pour cette question, on donne le code suivante:

```python
def enigme(notes) :
    a = None
    b = None
    c = None
    d = {}
    for nom in notes :
        tmp = c
        if a == None or notes[nom] > a[1] :
            c = b
            b = a
            a = (nom, notes[nom])
        elif b == None or notes[nom] > b[1] :
            c = b
            b = (nom, notes[nom])
        elif c == None or notes[nom] > c[1] :
            c = (nom, notes[nom])
        else :
            d[nom] = notes[nom]
        if tmp != c and tmp != None :
            d[tmp[0]] = tmp[1]
    return (a, b, c, d)
```

## Question 6

> Calculer ce que renvoie la fonction `enigme` pour le dictionnaire `{('Tom', 'Matt'): 6, ('Lambert', 'Ginne'): 4, ('Carl', 'Roth'): 2, ('Kurt', 'Jett'): 4, ('Ayet', 'Finzerb'): 3}`

La question 6 est directe, mais il faut vraiment faire comme un automate pour répondre à cette question. La réponse pour cette question est:

```python
((('Tom', 'Matt'), 6),
 (('Lambert', 'Ginne'), 4),
 (('Kurt', 'Jett'), 4),
 {('Carl', 'Roth'): 2, ('Ayet', 'Finzerb'): 3})
```

## Question 7

> En déduire ce que calcule la fonction `enigme` lorsqu'on l'applique à un dictionnaire dont les clés sont les noms des candidats et les valeurs sont leurs notes.

Si t'as suivi le code de l'enigme, tu peux remarquer que les trois premières entrées du $4$-uple est le "podium" pour l'examen. Ils sont les trois éléves avec la note plus grande. Et s'il y a des égalités, c'est premier arrivé (dans la liste), premier servi.

Le dernier entrée du $4$-uple est un dictionnaire qui contient les gens qui ne sont pas parmi les trois meilleurs notes.

## Question 8

> Expliquer ce que la fonction enigme renvoie s'il y a strictement moins de 3 entrées dans le dictionnaire passées en paramètre.

S'il y a moins de $3$ entrées dans le dictionnaire, il y a forcement $0$, $1$ ou $2$ entrées.

S'il y a aucune entrée, elle renvoie `(None, None, None, {})`.

S'il y a $1$ entrée, elle renvoie `(X, None, None, {})` ou `X` est la note du seul élève concerné.

S'il y a $2$ entrées, elle renvoie `(X, Y, None, {})` ou `X` et `Y` est le "podium" comme on a décrit avant.

## Question 9

> Écrire en Python une fonction classement prenant en paramètre un dictionnaire dont les clés sont les noms des candidats et les valeurs sont leurs notes et qui, en utilisant la fonction enigme, renvoie la liste des couples ((prénom, nom), note) des candidats classés par notes décroissantes.

Pour cette question, on peut utiliser `sorted`, mais on peut également utilser `enigme`. On peut utiliser une fonction éecursive:

```python
def classement(notes):
    a,b,c,prochain = enigme(notes)
    if a == None:
        return []
    ret = []
    for x in [a, b, c]:
        if x == None:
            continue
        nom, note = x
        ret.append( (nom, note) )
    ret = ret + classement(prochain)
    return ret
```

ou une fonction itérative:

```python
def classement(dico):
    lst = []
    while dico != {} :
        (a,b,c,dico) = enigme(dico)
        if a != None:
            lst.append(a)
        if b != None:
            lst.append(b)
        if c != None:
            lst.append(c)
    return lst
```

## Renote

Voici lz code pour les questions $10$ à $12$.

```python
def renote_express(copcorr) :
    c = 0
    while copcorr[c] :
        c = c + 1
    return c

def renote_express2(copcorr) :
    gauche = 0
    droite = len(copcorr)
    while droite - gauche > 1 :
        milieu = (gauche + droite)//2
        if copcorr[milieu] :
             ### A ###
        else :
             ### B ###
    if copcorr[gauche] :
         return ### C ###
    else :
         return ### D ###
```

Dans la question, l'indentation d'`if` va nous donner une erreur, alors on en a auto-corrigé.

Quelque chose à remarquer est que chaque liste va être de la forme :

```python
[True, ..., True, False, ..., False].
```

## Question 10

> Compléter le code de la fonction Python `renote_express2` pour qu'elle calcule la même chose que `renote_express`.

Cette fonction nous donne un indice de faire une recherche dichotomique (binary search) est on peut le compléter comme ça:

```python
def renote_express2(copcorr) :
    gauche = 0
    droite = len(copcorr)
    while droite - gauche > 1 :
        milieu = (gauche + droite)//2
        if copcorr[milieu] :
             gauche = milieu + 1
        else :
             droite = milieu
    if copcorr[gauche] :
         return gauche + 1
    else :
         return gauche
```

Cet examen serait à l'écrit, on ne peut normalement pas vérifier si on a la bonne réponse en exécutant le code.

Mais après, on peut essayer avec quelques test :

```python
renote_express2( [False for i in range(20)] ) # 0
renote_express2( [True for i in range(20)] ) # 20
renote_express2( [True if i < 5 else False for i in range(20)] ) # 5
```

Il y a sûrement d'autres solutions possibles.

## Question 11

> Déterminer les coûts en temps de `renote_express` et `renote_express2` en fonction de la longueur $n$ de la liste de booléens passée en paramètre.

Pour `renote_express`, le pire cas est quand tous les élèves sont des génies. Parce qu'il faut traverser toute les $n$ entrées de la liste. La complexité est $O(n)$.

Pour `renote_express2`, on coupe la liste (pas la poire) en deux chaque fois. Donc, si $n = 1024 = 2^{10}$ on aura environ $10$ opérations (au lieu de $1024$ si on utilise `renote_express`). La complexité est alors $O(\log n)$.

## Question 12

> Expliquer comment adapter renote_express2 pour obtenir une fonction qui corrige très rapidement une copie pour les futures évaluations de M. Tager s’il garde la même spécificité pour ses énoncés. Cette fonction ne devra pas construire la liste de booléens correspondant à la copie corrigée, mais directement calculer la note.

Vu qu'on ne peut pas utiliser la liste de booléens, il faut changer l'arguments de fonction `renote_express2` pour accepter la copie et la correction. Cependant, il faut remplacer `copcorr[x]` avec `cop[x] == corr[x]`. On aura la code suivante:

```python
def renote_express3(cop,corr) :
    gauche = 0
    droite = len(cop)
    while droite - gauche > 1 :
        milieu = (gauche + droite)//2
        if cop[milieu] == corr[milieu] :
            gauche = milieu + 1
        else :
            droite = milieu
    if cop[gauche] == corr[gauche] :
        return gauche + 1
    else :
        return gauche
```
