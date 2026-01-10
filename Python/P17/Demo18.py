from ete3 import Tree, TreeStyle

t = Tree("(Human,(Chimp, Mouse))")
ts = TreeStyle()
ts.show_leaf_name =True
# t.show(tree_style = ts)
t.render("tree.png", tree_style=ts)
