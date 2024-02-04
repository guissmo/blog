from tkinter2 import *

        
class Arbre :
    class Noeud:
        def __init__(self, v, f):
            self.val = v
            self.fils = f
        
    def __init__(self, *args):
        if len(args) == 0:
            self.root = None
        elif len(args) == 1:
            self.root = Arbre.Noeud(args[0], [])
        elif len(args) == 2:
            assert isinstance(args[1], list)
            self.root = Arbre.Noeud(args[0], args[1])
        else:
            raise SyntaxError("Trop d'arguments!")

    def est_vide(self):
        return self.root is None

    def val(self):
        assert not self.est_vide()
        return self.root.val

    def fils(self):
        assert not self.est_vide()
        return self.root.fils
    
    def ajout_noeud(self, noeud):
        """ ajoute un noeud à self """
        assert not self.est_vide()
        self.fils().append(noeud)
        
    def est_feuille(self):
        """décide si l'arbre self est une feuille"""
        #return self.label != None and self.fils == []
        assert not self.est_vide()
        return self.fils() == []
    
    def PPDprefixe(self):
        """parcours en hauteur d'abord prefixe"""
        pile = []
        lst = []
        if not self.est_vide():
            pile.append(self)
            while pile != []:
                noeud = pile.pop()
                print(noeud.val())
                lst.append(noeud.val())
                #On inverse la liste des fils pour avoir 
                #le même ordre de parcours que la procédure récursive
                for i in range(len(noeud.fils())-1, -1, -1):
                    pile.append(noeud.fils()[i])
        return lst
    
    def PPDpostfixe(self):
        """parcours en hauteur d'abord postfixe"""
        pile = []
        lst = []
        if self.est_vide():
            return lst
        pile.append(self)
        while pile != []:
            noeud = pile.pop()
            if not isinstance(noeud, Arbre):
                # le noeud a été visité car on a empilé sa valeur
                lst.append(noeud)
            else:
                # le noeud n'a pas encore été visité
                # on empile sa valeur
                pile.append(noeud.val())
                #On inverse la liste des fils pour avoir 
                #le même ordre de parcours que la procédure récursive
                for i in range(len(noeud.fils())-1, -1, -1):
                    pile.append(noeud.fils()[i])
        return lst
    
    def PPDpost_rec(self):
        """parcours en hauteur d'abord recursif postfixe"""
        lst = []
        if not self.est_vide():
            for f in self.fils() :
                lst += f.PPDpost_rec()
            lst += [self.val()]
        return lst
    
    def PPDpref_rec(self):
        """parcours en hauteur d'abord recursif postfixe"""
        lst = []
        if not self.est_vide():
            lst += [self.val()]
            for f in self.fils() :
                lst += f.PPDpref_rec()
        return lst
    
    def PLD(self):
        """parcours en largeur d'abord : renvoie la liste des éléments
        de l'arbre parcouru en largeur"""
        file = []
        lst = []
        if not self.est_vide():
            file.insert(0, self)
            while file != []:
                noeud = file.pop()
                lst.append(noeud.val())
                for f in noeud.fils() :
                    file.insert(0, f)
        return lst
    
    def PLDP(self):
        """parcours en largeur : renvoie la liste des éléments
        de l'arbre parcouru en largeur avec passes (on indique
        la hauteur de chaque noeud)"""
        hauteur = 0
        file1 = []
        file2 = []
        lst = []
        if not self.est_vide():
            file1.insert(0,self)
            while file1 != []:
                while file1 != []:
                    noeud = file1.pop()
                    lst.append((noeud.val(),hauteur))
                    for f in noeud.fils() :
                        file2.insert(0, f)
                hauteur += 1
                file1, file2 = file2, file1
        return lst
    
    def hauteur(self):
        """renvoie la hauteur de l'arbre récursivement"""
        if self.est_vide() :
            return 0
        maxi = 1
        p = 0
        for noeud in self.fils() :
            p = 1 + noeud.hauteur()
            if p > maxi :
                maxi = p
        return maxi
    
    def nombre_feuilles(self):
        """renvoie le nombre de feuilles de l'arbre avec un PPD recursif"""
        if self.est_vide() :
            return 0
        if self.est_feuille() :
            return 1
        n = 0
        for noeud in self.fils() :
            n = n + noeud.nombre_feuilles()
        return n
    
    def __str__(self):
        """affiche l'arbre (parours en largeur avec passes)"""
        def affiche(noeud, n):
            lst = ""
            if not noeud.est_vide():
                lst += n * " " + str(noeud.val()) + "\n"
                for f in noeud.fils() :
                    lst += affiche(f, n+1)
            return lst
        return affiche(self, 0)
            
        
    def parents(self):
        """renseigne l'attribut parent des fils de self"""
        pile = []
        pile.append(self)
        while pile != []:
            noeud = pile.pop()
            for f in noeud.fils():
                pile.append(f)
                f.parent = noeud
        
    def ordonnees(self, y, dy):
            """Calcule les ordonnées des noeuds
            entre 0 et le nombre de feullles.
            On utilise un PLDP"""
            hauteur = 0
            file1 = []
            file2 = []
            file1.insert(0, self)
            while file1 != []:
                while file1 != []:
                    noeud = file1.pop()
                    noeud.y = y
                    for f in noeud.fils() :
                        file2.insert(0, f)
                y += dy
                file1, file2 = file2, file1
                
    def abscisses_feuilles(self, x, dx):
        """Calcule les ordonnées des feuilles
        entre 0 et le nombre de feuilles.
        On utilise un PPD"""
        y = 0
        pile = []
        pile.append(self)
        self.parent = None
        while pile != []:
            noeud = pile.pop()
            if noeud.est_feuille():
                noeud.x = x
                x = x + dx
            liste = noeud.fils()[:]
            liste.reverse()
            for f in liste :
                pile.append(f)
        
    def abscisses(self):
        """Calcule les ordonnées des noeuds
        entre 0 et le nombre de feuilles.
        On utilise un PPD postfixe"""
        if not self.est_feuille():
            for noeud in self.fils():
                noeud.abscisses()
            S = 0
            for noeud in self.fils() :
                S = S + noeud.x
            self.x = S/len(self.fils())

    def coordonnees(self, hauteur, largeur, margex, margey):
        """parcours en largeur : renvoie la liste des éléments
        de l'arbre parcouru en largeur avec passes (on indique
        la hauteur de chaque noeud)"""
        
        assert not self.est_vide()
        Nf = self.nombre_feuilles()
        H = self.hauteur()
        if Nf > 1:
            dx = (largeur - 2 * margey) / (Nf - 1)
        else :
            dx = 0
        dy = (hauteur - 2 * margex)/H
        #ordonnées de la feuille la plus à gauche
        y = margey
        x = margex
        self.ordonnees(y, dy)
        self.abscisses_feuilles(x, dx)
        self.abscisses()

    
    def dessine(self, hauteur = 500,largeur = 500, \
                margex = 40, margey = 40,\
                police='Courrier', tailletexte=12,\
                coulfond = 'black', coulnoeud = 'gray', \
                coultexte = 'black', coulligne = 'yellow',\
                taillenoeud = 30):
        assert not self.est_vide()
        self.coordonnees(hauteur, largeur, margex, margey)
        self.parents()
        pile = []
        fen = Tk()
        can = Canvas(fen, width=largeur, height=hauteur, bg = coulfond)
        pile.append(self)
        r = taillenoeud#hauteur / 5 / self.hauteur()
        while pile != []:
            noeud = pile.pop()
            x, y = noeud.x , noeud.y
            try :#eviter le cas de la racine qui n'a pas de parent
                px, py = noeud.parent.x, noeud.parent.y
                can.create_line(x, y, px, py, width = 2, fill = coulligne)
            except :
                pass
            for f in noeud.fils() :
                pile.append(f)
        pile.append(self)
        while pile != []:
            noeud = pile.pop()
            x, y = noeud.x, noeud.y
            can.create_oval(x-r/2,y-r/2,x+r/2,y+r/2,\
                            fill = coulnoeud, outline = coulligne, width=2)
            can.create_text(x,y,text=str(noeud.val()),width=3*r/4,\
                            font=(police, tailletexte), fill = coultexte)
            
            for f in noeud.fils() :
                pile.append(f)
        can.pack()
        fen.mainloop()
        

if __name__ == "__main__" :
    
    #arbre 1 evaluation d'une expression
    a = Arbre(4)
    b = Arbre(3)
    c = Arbre(2)
    d = Arbre(1)
    e = Arbre(5)
    f = Arbre(6)
    n = Arbre(8)
    g = Arbre('+', [b, c])
    h = Arbre(1)
    i = Arbre('*', [e, f])
    j = Arbre('f', [g, h, i])
    k = Arbre('+', [a, j])
    l = Arbre(2)
    tree = Arbre('g', [k, l])
    tree.ajout_noeud(n)
    tree.ajout_noeud(Arbre(10))
    
    tree.dessine(taillenoeud = 40, tailletexte = 20)
    print(tree)
    

        
