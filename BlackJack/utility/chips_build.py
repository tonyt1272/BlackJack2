import pandas as pd


x = {1005: [5, 1000, 0],
    1010: [10, 1000, 0],
    1012.50: [10, 1000, 2.50],
    1015: [15, 1000, 0],
    1020: [20, 1000, 0],
    1025: [25, 1000, 0],
    1030: [25, 1000, 5],
    1035: [25, 1000, 10],
    1037.50: [30, 1000, 7.50],
    1040: [25, 1000, 15],
    1045: [25, 1000, 20],
    1050: [50, 1000, 0],
    1055: [50, 1000, 5],
    1060: [50, 1000, 10],
    1062.50: [60, 1000, 2.50],
    1065: [50, 1000, 15],
    1070: [50, 1000, 20],
    1075: [75, 1000, 0],
    1080: [75, 1000, 5],
    1085: [75, 1000, 10],
    1087.50: [75, 1000, 12.50],
    1090: [75, 1000, 15],
    1095: [75, 1000, 20],
    1100: [100,1000,0],
    1105: [100, 1000, 5],
    1110: [100, 1000, 10],
    1112.50: [100, 1000, 12.50],
    1115: [100, 1000, 15],
    1120: [100, 1000, 20],
    1125: [100, 1000, 25],
    1130: [100, 1000, 30],
    1135: [100, 1000, 35],
    1137.50: [100, 1000, 37.50],
    1140: [100, 1000, 40],
    1145: [100, 1000, 45],
    1150: [100, 1000, 50],
    1155: [100, 1000, 55],
    1160: [100, 1000, 60],
    1162.50: [100, 1000, 62.50],
    1165: [100, 1000, 65],
    1170: [100, 1000, 70],
    1175: [100, 1000, 75],
    1180: [100, 1000, 80],
    1185: [100, 1000, 85],
    1187.50: [100, 1000, 87.50],
    1190: [100, 1000, 90],
    1195: [100, 1000, 95],
    1200: [200, 1000, 0],
    1205: [200, 1000, 5],
    1210: [200, 1000, 10],
    1212.50: [200, 1000, 12.50],
    1215: [200, 1000, 15],
    1220: [200, 1000, 20],
    1225: [200, 1000, 25],
    1230: [200, 1000, 30],
    1235: [200, 1000, 35],
    1237.50: [200, 1000, 37.50],
    1240: [200, 1000, 40],
    1245: [200, 1000, 45],
    1250: [200, 1000, 50],
    1255: [200, 1000, 55],
    1260: [200, 1000, 60],
    1262.50: [200, 1000, 62.50],
    1265: [200, 1000, 65],
    1270: [200, 1000, 70],
    1275: [200, 1000, 75],
    1280: [200, 1000, 80],
    1285: [200, 1000, 85],
    1287.50: [200, 1000, 87.50],
    1290: [300, 1000, 90],
    1295: [300, 1000, 95],
    1300: [300, 1000, 0],
    1305: [300, 1000, 5],
    1310: [300, 1000, 10],
    1312.50: [300, 1000, 12.50],
    1315: [300, 1000, 15],
    1320: [300, 1000, 20],
    1325: [300, 1000, 25],
    1330: [300, 1000, 30],
    1335: [300, 1000, 35],
    1337.50: [300, 1000, 37.50],
    1340: [300, 1000, 40],
    1345: [300, 1000, 45],
    1350: [300, 1000, 50],
    1355: [300, 1000, 55],
    1360: [300, 1000, 60],
    1362.50: [300, 1000, 62.50],
    1365: [300, 1000, 65],
    1370: [300, 1000, 70],
    1375: [300, 1000, 75],
    1380: [300, 1000, 80],
    1385: [300, 1000, 85],
    1387.50: [300, 1000, 87.50],
    1390: [300, 1000, 90],
    1395: [300, 1000, 95],
    1400: [400, 1000, 0],
    1405: [400, 1000, 5],
    1410: [400, 1000, 10],
    1412.50: [400, 1000, 12.50],
    1415: [400, 1000, 15],
    1420: [400, 1000, 20],
    1425: [400, 1000, 25],
    1430: [400, 1000, 30],
    1435: [400, 1000, 35],
    1437.50: [400, 1000, 37.50],
    1440: [400, 1000, 40],
    1445: [400, 1000, 45],
    1450: [400, 1000, 50],
    1455: [400, 1000, 55],
    1460: [400, 1000, 60],
    1462.50: [400, 1000, 62.50],
    1465: [400, 1000, 65],
    1470: [400, 1000, 70],
    1475: [400, 1000, 75],
    1480: [400, 1000, 80],
    1485: [400, 1000, 85],
    1487.50: [400, 1000, 87.50],
    1490: [400, 1000, 90],
    1495: [400, 1000, 95],
    1500: [500, 1000, 0],
    1505: [500, 1000, 5],
    1510: [500, 1000, 10],
    1512.50: [500, 1000, 12.50],
    1515: [500, 1000, 15],
    1520: [500, 1000, 20],
    1525: [500, 1000, 25],
    1530: [500, 1000, 30],
    1535: [500, 1000, 35],
    1537.50: [500, 1000, 37.50],
    1540: [500, 1000, 40],
    1545: [500, 1000, 45],
    1550: [500, 1000, 50],
    1555: [500, 1000, 55],
    1560: [500, 1000, 60],
    1562.50: [500, 1000, 62.50],
    1565: [500, 1000, 65],
    1570: [500, 1000, 70],
    1575: [500, 1000, 75],
    1580: [500, 1000, 80],
    1585: [500, 1000, 85],
    1587.50: [500, 1000, 87.50],
    1590: [500, 1000, 90],
    1595: [500, 1000, 95],
    1600: [600, 1000, 0],
    1605: [600, 1000, 5],
    1610: [600, 1000, 10],
    1612.50: [600, 1000, 12.50],
    1615: [600, 1000, 15],
    1620: [600, 1000, 20],
    1625: [600, 1000, 25],
    1630: [600, 1000, 30],
    1635: [600, 1000, 35],
    1637.50: [600, 1000, 37.50],
    1640: [600, 1000, 40],
    1645: [600, 1000, 45],
    1650: [600, 1000, 50],
    1655: [600, 1000, 55],
    1660: [600, 1000, 60],
    1662.50: [600, 1000, 62.50],
    1665: [600, 1000, 65],
    1670: [600, 1000, 70],
    1675: [600, 1000, 75],
    1680: [600, 1000, 80],
    1685: [600, 1000, 85],
    1687.50: [600, 1000, 87.50],
    1690: [600, 1000, 90],
    1695: [600, 1000, 95],
    1700: [700, 1000, 0],
    1705: [700, 1000, 5],
    1710: [700, 1000, 10],
    1712.50: [700, 1000, 12.50],
    1715: [700, 1000, 15],
    1720: [700, 1000, 20],
    1725: [700, 1000, 25],
    1730: [700, 1000, 30],
    1735: [700, 1000, 35],
    1737.50: [700, 1000, 37.50],
    1740: [700, 1000, 40],
    1745: [700, 1000, 45],
    1750: [700, 1000, 50],
    1755: [700, 1000, 55],
    1760: [700, 1000, 60],
    1762.50: [700, 1000, 62.50],
    1765: [700, 1000, 65],
    1770: [700, 1000, 70],
    1775: [700, 1000, 75],
    1780: [700, 1000, 80],
    1785: [700, 1000, 85],
    1787.50: [700, 1000, 87.50],
    1790: [700, 1000, 90],
    1795: [700, 1000, 95],
    1800: [800, 1000, 0],
    1805: [800, 1000, 5],
    1810: [800, 1000, 10],
    1812.50: [800, 1000, 12.50],
    1815: [800, 1000, 15],
    1820: [800, 1000, 20],
    1825: [800, 1000, 25],
    1830: [800, 1000, 30],
    1835: [800, 1000, 35],
    1837.50: [800, 1000, 37.50],
    1840: [800, 1000, 40],
    1845: [800, 1000, 45],
    1850: [800, 1000, 50],
    1855: [800, 1000, 55],
    1860: [800, 1000, 60],
    1862.50: [800, 1000, 62.50],
    1865: [800, 1000, 65],
    1870: [800, 1000, 70],
    1875: [800, 1000, 75],
    1880: [800, 1000, 80],
    1885: [800, 1000, 85],
    1887.50: [800, 1000, 87.50],
    1890: [800, 1000, 90],
    1895: [800, 1000, 95],
    1900: [900, 1000, 0],
    1905: [900, 1000, 5],
    1910: [900, 1000, 10],
    1912.50: [900, 1000, 12.50],
    1915: [900, 1000, 15],
    1920: [900, 1000, 20],
    1925: [900, 1000, 25],
    1930: [900, 1000, 30],
    1935: [900, 1000, 35],
    1937.50: [900, 1000, 37.50],
    1940: [900, 1000, 40],
    1945: [900, 1000, 45],
    1950: [900, 1000, 50],
    1955: [900, 1000, 55],
    1960: [900, 1000, 60],
    1962.50: [900, 1000, 62.50],
    1965: [900, 1000, 65],
    1970: [900, 1000, 70],
    1975: [900, 1000, 75],
    1980: [900, 1000, 80],
    1985: [900, 1000, 85],
    1987.50: [900, 1000, 87.50],
    1990: [900, 1000, 90],
    1995: [900, 1000, 95]}

df = pd.DataFrame(x)
print(df.head())

df.columns = df.columns + 2000

df[1:2] = df[1:2]+2000

print(df.head())

my_cols = df.columns
my_list = []
for col in my_cols:
    colstr = str(col)
    value = str(df[col][2])
    value0 = str(df[col][0])
    value1 = str(df[col][1])
    if colstr[-1] == '0':
        colstr = colstr[:-2]
    if colstr[-2]+colstr[-1] == '.5':
        colstr = colstr+'0'
    try:
        if value[-2]+value[-1] == '.5':
            value = value+'0'
            value0 = value0[:-2]
            value1 = value1[:-2]
    except Exception:
        pass
    my_list.append(f'{colstr}: [{value0}, {value1}, {value}],')

for item in my_list:
    print(item)