import  numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0,2*np.pi,400)
plt.plot(np.cos(theta),
         np.sin(theta))
plt.scatter([1,0,-1],[0,0,0],c='orange')
plt.text(0,0,'Sun'); plt.text(1,0,'Earth')
plt.text(-1,0,'L1')
plt.axis('equal'); plt.title('Larrange Points')
plt.show()