import base64
import os
import cv2
data_path = os.path.join('C:\\Users','Anthony','Desktop','BlackJack','Cards','1a.png')
data_path2 = os.path.join('C:\\Users', 'Anthony', 'Desktop','JS','Section20','JsProjectSection20','static','encode.bin')
# im = cv2.imread(data_path)
#
# cv2.imshow('1', im)
#
# cv2.waitKey(0)
# cv2.destroyAllWindows()

with open(data_path, "rb") as ace_spades:
    ace_spades_string = base64.b64encode(ace_spades.read())
print(ace_spades_string)

with open(data_path2, "wb") as file:
    file.write(ace_spades_string)

