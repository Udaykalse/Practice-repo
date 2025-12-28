from turtle import *; speed(0);

bgcolor('black');ht()
colors=['red','yellow','cyan','magenta','white']

for r in range(36):
    color(colors[r%5])
    circle(120);left(10)
up();goto(0,-10);color('white')
write('Udaysinh',font=('Arial',18,'bold'))
done()
