import numpy as np, matplotlib.pyplot as plt

x,y = np.meshgrid(np.linspace(-180,180,30), np.linspace(-90,90,15))
u = np.cos(np.radians(y))
v = np.sin(np.radians(x))

plt.quiver(x,y,u,v)
plt.title('Global Ocean Current')
plt.show()