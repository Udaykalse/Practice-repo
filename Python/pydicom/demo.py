import pydicom
import matplotlib.pyplot as plt

ds = pydicom.dcmread(pydicom.data.get_testdata_file("CT_small.dcm"))
plt.imshow(ds.pixel_array,cmap='grey')
plt.title('CT Slice')
plt.show()
