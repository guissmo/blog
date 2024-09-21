---
title: "NSI: Rappel (2ème partie)"
layout: "/src/layouts/NSIPostLayout.astro"
category: NSI
author: guissmo
date: 2024-09-21T20:15:04+00:00
draft: false
toc: true
description: Dans cette deuxième partie des rappels, on revoit tout ce qui concerne les fonctions en Python. On rappelle également comment utiliser la fonction `print` et les mots-clés conditionnels `if` et `else`.
slug: nsi-terminale-rappel-2
tags:
  - nsi
  - terminale
---

# Auparavant

- On a passé en revue quelques concepts de base de Python comme les commentaires, l'instruction `print`, et l'affectation.
- On a examiné certains des types possibles (int, float, bool, str, etc.) qu'un objet Python peut avoir.
- On a appris à découper des chaînes de caractères en utilisant les crochets `[]` et le symbole deux-points.

# Rappel (2ème Partie)

## Fonctions

<div class="info">
    
Dans Python, on peut écrire des **fonctions**.

Une fonction peut avoir des **entrées**, qu'on appelle des **arguments**.</div>

<div class="info">
    
Voici la syntaxe pour définir une fonction :</div>

```python
def nom_de_la_fonction(argument1, argument2, argument3):
    # Faire des choses ici...
    return nimporte
```

<div class="info">
    
On utilise le mot `def` pour signaler le début d'une **def**inition d'une fonction.

</div>

<div class="info">
    
N'oubliez pas les deux points après les arguments.
    
</div>

<div class="info">
    
La fonction renvoie une seule valeur grâce au mot ``return``.
    
</div>

```python
def salutation(nom, adjectif):
    return "Bonjour, " + nom + ". Tu es " + adjectif + "."
```

<div class="info">
    
Le nom de la fonction ci-dessus est `salutation` et les arguments sont `nom` et `adjectif`.</div>

<div class="info">
    
On appelle une fonction en utilisant son nom et ses arguments entre parenthèses.</div>

```python
salutation("Pierre", "présent")
```

    'Bonjour, Pierre. Tu es présent.'

<div class="warn">
    
Les arguments sont traités dans le même ordre que dans la définition de la fonction.</div>

```python
salutation("présent", "Pierre")
```

    'Bonjour, présent. Tu es Pierre.'

<div class="info">
    
Pour être plus explicite, on peut également écrire les arguments avec ses étiquettes dans la définition.</div>

```python
salutation(adjectif = "présent", nom = "Pierre")
```

    'Bonjour, Pierre. Tu es présent.'

<div class="warn">
    
Les arguments peuvent être facultatifs. Dans le code suivant, `premier_mot` est facultatif est sa valeur par défaut est `"Bonjour"`.</div>

```python
def salutation_plus_complexe(nom, premier_mot = "Bonjour"):
    return premier_mot + " " + nom + "!"
```

<div class="warn">
    
Dans la définition de la fonction, les arguments facultatifs doivent être après les arguments obligatoire.</div>

```python
# Va pas marcher:
def salutation_plus_complexe(premiere_mot = "Bonjour", nom):
    return premiere_mot + " " + nom + "!"
```

      Cell In[7], line 2
        def salutation_plus_complexe(premiere_mot = "Bonjour", nom):
                                                               ^
    SyntaxError: parameter without a default follows parameter with a default

```python
salutation_plus_complexe("Mansour")
```

    'Bonjour Mansour!'

```python
salutation_plus_complexe("Loulou", "Coucou")
```

    'Coucou Loulou!'

<div class="exer-start">
    
Sans modifier la définition de la fonction `presentation`, laquelles de ces lignes suivantes va retourner la chaine de caractères:
    
<pre>"Bonjour, je suis Fatma et je suis prof. J'ai 55 ans."</pre>
    
si on enleve tout les `#`?</div>

```python
def presentation(age, occupation, nom):
    return "Bonjour, je suis " + nom + " et je suis " + occupation + ". J'ai " + str(age) + " ans."
```

```python
# presentation("Fatma", "prof", 55)
```

```python
# presentation(55, "prof", "Fatma")
```

```python
# presentation("nom"="Fatma", "occupation"="prof", "age"=55)
```

```python
# presentation(occupation="Fatma", nom="Fatma", age=55)
```

<div class="exer-end">
</div>

<div class="exer-start">

Écris une fonction `moyenne` qui prend trois nombres `a`, `b`, `c` en argument et retourne leur moyenne.

Rappellez-vous que la moyenne de trois nombres $a, b, c$ est $\dfrac{a + b + c}{3}$.</div>

```python
# Écris la fonction ici.
```

<div class="exer-mid">
Vous pouvez tester votre code avec les exemples ci-dessous.</div>

```python
print( moyenne(1, 2, 3) ) # 2.0
print( moyenne(0.1, 0.2, 10) ) # 3.4333333333333336
print( moyenne(0, 6, -3) ) # 1.0
```

    2.0
    3.4333333333333336
    1.0

<div class="exer-end"></div>

### La fonction `print`

<div class="info">
    
Vous connaissez déjà au moins une fonction !
    
C'est `print` !</div>

```python
print( "Mario" )
print( "Luigi" )
```

    Mario
    Luigi

<div class="info">

Vous pouvez avoir remarqué que la fonction `print` revient à la ligne à chaque exécution.

La fonction `print` a un argument facultatif appelé `end`.

La valeur de `end` par défaut est `\n` (nouvelle ligne).</div>

<div class="info">
    
On peut le remplacer ainsi :</div>

```python
print( "Mario", end=' & ' )
print( "Luigi", end=' !' )
```

    Mario & Luigi !

<div class="info">
    
Remarquez qu'on ne revient plus à la ligne.</div>

💪 Ce n'est pas obligatoire en terminale mais on peut utiliser _des indices de type_ (type hints). C'est normalement utilisé quand on est dans une équipe. Cela rend le code plus lisible et plus compréhensible si une autre personne a besoin de le lire.

- Pour les entrées, on met le type qu'on attend après `:`.
- Pour la sortie, on met après une "flèche" `->` le type de sortie.

C'est complètement facultatif et ne change pas l'exécution de votre code.

```python
def salutation(nom: str, adjectif: str) -> str:
    return "Bonjour, " + nom + ". Tu es " + adjectif + "."
```

```python
salutation("Pierre", "present")
```

    'Bonjour, Pierre. Tu es present.'

<div class="info">
    
On peut appeler les fonctions dans d'autres fonctions. Dans l'exemple suivante, on appelle `salutation`.</div>

```python
def affiche_salutations(nom1, nom2):
    print( salutation(nom1, "beau") )
    print( salutation(nom2, "belle") )

affiche_salutations("Jean-Paul", "Violaine")
```

    Bonjour, Jean-Paul. Tu es beau.
    Bonjour, Violaine. Tu es belle.

<div class="warn">
    
Une fonction peut n'avoir aucun argument.</div>

```python
def toto():
    return 1 + 1

toto()
```

    2

<div class="warn">
    
Si une fonction ne possède pas de ``return``, la fonction renverra ``None``.</div>

```python
def tete():
    1 + 1

type(tete())
```

    NoneType

<div class="info">
    
Vous connaissez aussi d'autres fonctions standard sur Python. Par exemples : `str` et `int`!</div>

### `if`

<div class="info">
    
Selon la valeur d'un booléen, on peut modifier le retour d'une fonction en utilisant `if`.</div>

```python
def present(nom):
    if nom == "Pierre":
        # Code à exécuter quand nom égal "Pierre".
        return "present"
```

<div class="warn">

Fais attention à l'indentation!</div>

```python
present("Pierre")  # renvoie 'present'
```

    'present'

<div class="info">

Quand on appelle `present` avec `"Pierre"` comme argument, on exécute ce qu'il y a à _l'intérieur_ de `if`.

Mais, si l'argument n'est pas `"Pierre"`...</div>

```python
present("Caillou")  # renvoie None
```

<div class="info">

La fonction ne tombe pas sur un `return` quand `nom` est `"Caillou"`, donc notre foncton retourne `None`.</div>

### `else`

<div class="info">

Si on veut faire quelque chose quand la condition après `if` est fausse, on utilise `else`.</div>

```python
def present_ou_absent(nom):
    if nom == "Pierre":
        # Code à exécuter quand nom égal "Pierre".
        return "present"
    else:
        # Code à exécuter quand nom n'est pas égal "Pierre".
        return "absent"
```

<div class="info">

Dans cet exemple, si `nom == "Pierre"` est vrai (dit `True`) la fonction retourne la chaine de caractères `present`. Sinon, `absent`.</div>

```python
present_ou_absent("Pierre")
```

    'present'

```python
present_ou_absent("Caillou")
```

    'absent'

## Exemple : Pair ou impair ?

<div class="info">
    
Dans cet exemple suivant, on utilise une seule entrée, un entier `x`, et la sortie est de type `bool`.</div>

```python
def est_pair(x):
    # Si le reste de la division de x par 2 est 0, alors x est pair.
    if x%2 == 0:
        return True
    else:
        return False
```

# Exercices

<div class="exer-start">
    
La fonction `reine_des_neiges` doit prendre comme argument deux valeurs de type `bool` -- `est_liberee` et `est_delivree`.
    
Elle doit renvoyer `Anna` si les deux arguments sont `True` et `Olaf` sinon.
    
Cependant il y a des erreurs dans le code, corrigez-les.</div>

```python
reine_des_neiges(est_liberee, est_delivree):
    if est_liberee and est_delivree:
    return 'Anna'
    elsa:
        return 'Olaf'
```

      Cell In[63], line 1
        reine_des_neiges(est_liberee, est_delivree):
                                                   ^
    SyntaxError: invalid syntax

<div class="exer-end"></div>

<div class="exer-start">
    
La fonction `shifoumi` doit prendre comme argument deux chaines de caractères `joueur1` et `joueur2`, on suppose qu'ils seront `"✂️"`, `"🪨"` ou `"📄"`.
    
Elle renvoie `1` si joueur $1$ gagne, `2` si joueur $2$ gagne, et `0` si c'est un égalité.
    
Completer la definition de cette fonction en remplaçant `# ??? #`.</div>

```python
# ??? #
    if joueur1 == joueur2:
        return 0
    if joueur1 == "🪨" and joueur2 == "✂️":
        return 1
    if joueur1 == "📄" and joueur2 == "🪨":
        return 1
    if joueur1 == "✂️" and joueur2 == "📄":
        return 1
    if joueur1 == "📄" and joueur2 == "✂️":
        return 2
    if joueur1 == "✂️" and joueur2 == "🪨":
        return 2
    if joueur1 == "🪨" and joueur2 == "📄":
        return 2
```

      Cell In[30], line 2
        if joueur1 == joueur2:
        ^
    IndentationError: unexpected indent

<div class="exer-end"></div>

<div class="exer-start">
    
La fonction `est_int` doit prendre comme argument un objet `x` et doit renvoyer `True` si le type de `x` est `int` et `False` sinon.
    
Compléter le code en remplaçant `# ??? #`.</div>

```python
def est_int(x):
    if # ??? #
        return True
    else:
        return False
```

      Cell In[31], line 2
        if # ??? #
           ^
    SyntaxError: invalid syntax

<div class="exer-end">
   </div>

<div class="exer-start">
    
La fonction `sqrt` prend comme argument un entier $x$, et renvoie la racine carrée de $x$. Son implémentation n'est pas pertinent pour cet exercice.

Par exemple, `sqrt(49)` retourne `7.0`.

Pour cet exercice, il faut compléter la fonction `hypotenuse` qui prend deux entiers $a$ et $b$ et renvoie la longeur de l'hypoténuse d'un triangle rectangle de coté $a$ et $b$.</div>

```python
# 💪 On n'a pas besoin de comprendre la ligne `from math import sqrt` pour cet exercice.
#    Tout ce qu'il faut savoir est qu'on peut utiliser la fonction `sqrt`.
#
# Mais pour les curieux et curieuses:
#  Cette ligne de code fait signe à Python qu'on a besoin d'utiliser
#    la fonction `sqrt` definie dans la bibliothèque `math`.
#  Après avoir exécuter cette ligne, Python peut utiliser la fonction `sqrt`.
from math import sqrt

def hypotenuse(a, b):
    return # ??? #
```

```python
hypotenuse(3, 4)  # 5.0
```

```python
hypotenuse(5, 12)  # 13.0
```

```python
hypotenuse(1, 1) # 1.4142135623730951
```

<div class="exer-end"></div>

<div class="exer-start">
    
Selon le [barème](https://www.economie.gouv.fr/particuliers/tranches-imposition-impot-revenu) de l'impôt 2024 sur les revenus $2023$:

- si votre revenu imposable est moins de $11 294$ euros, vous devez payer $0$ comme impôt, et
- pour chaque euro de revenu au-dessus de $11 294$ euros (jusqu'a $28 797$ euros), il faut payer $11$ centimes d'impôt

Écrire la fonction `calcul_impot` qui prends un entier `x` (on suppose que `0 <= x <= 28797`), et sort l'impôt qu'il faut payer si le revenu imposable pour $2023$ était `x`.</div>

```python
# Écris la fonction ici.
```

<div class="exer-end">
    </div>

<div class="exer-start">
    
La fonction `est_toujours_pair` doit fonctionner comme `est_pair`. Complétez-la.</div>

```python
def est_toujours_pair(x):
    if # ??? #
        return False
    else:
        return True
```

      Cell In[3], line 2
        if # ??? #
           ^
    SyntaxError: invalid syntax

<div class="exer-end"></div>

<div class="exer-start">
    
Écrire une fonction `compliment` qui prend trois `int` comme argument: `note1`, `note2`, `note3`.

- Si la moyenne des $3$ notes est $< 10$, la fonction renvoie la chaine `bof`.
- Si la moyenne des $3$ notes est $\geq 10$ mais $< 15$, la fonction renvoie la chaine `bien`.
- Si la moyenne des $3$ notes est $\geq 15$, la fonction renvoie la chaine `tres bien`.</div>

```python

```

<div class="exer-end">
    
</div>

<div class="exer-start exer-hard">
    
**FizzBuzz** est un célèbre test pendant les entretiens des années $2010$.

Dans ce test, il faut écrire une fonction `fizzbuzz` avec une seule entrée `x`, un entier.

Si l'entrée `x` est divisible par `3` mais pas par `5`, la sortie doit être `Fizz`.

Si l'entrée `x` est divisible par `5` mais pas par `3`, la sortie doit être `Buzz`.

Si l'entrée est divisible par `15`, la sortie doit être `FizzBuzz`.

Sinon, la sortie est l'entrée.

Écrire la fonction `fizzbuzz`.</div>

```python

```

<div class="exer-end">
    
</div>

<div class="exer-start exer-hard">
    
Compléter la fonction suivante qui essaie `feminiser` (naifment) un nom.</div>

```python
def feminiser(nom):
    # Vérifie si les trois derniers caractères de la chaîne sont "eur"
    if # ??? #:
        # Si c'est le cas, remplace "eur" par "euse" et retourne la nouvelle chaîne
        return # ??? #
    # Si la chaîne ne se termine pas par "eur", retourne la chaîne originale
    return nom
```

      Cell In[205], line 3
        if # ??? #:
           ^
    SyntaxError: invalid syntax

```python
print( feminiser("masseur") )   # masseuse
print( feminiser("flemmard") )  # flemmard
print( feminiser("pere") )      # pere
print( feminiser("serveur") )   # serveuse
print( feminiser("soeur") )     # soeuse
```

    masseuse
    flemmard
    pere
    serveuse
    soeuse

<div class="exer-end"></div>

<div class="exer-start exer-hard">
    
Remplacer le commentaire `# ??? #` par **une seule ligne de code** tel que `est_pair_speed_run` fonctionne exactement comme `est_pair`.</div>

```python
def est_pair_speed_run(x):
    # ??? #
```

      Cell In[167], line 2
        # ??? #
               ^
    SyntaxError: incomplete input

<div class="exer-end"></div>
