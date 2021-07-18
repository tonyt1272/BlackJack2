import json
cash = 7140


def bank_levels(cash):
    height = 9
    bank = [0, 0, 0, 0, 0, 0, 0]
    for i in range(7):
        if i == 0 and cash >= 5 and bank[i] < height:
            bank[i] += 1
            cash -= 5
        if i == 1 and cash >= 10 and bank[i] < height:
            bank[i] += 1
            cash -= 10
        if i == 2 and cash >= 25 and bank[i] < height:
            bank[i] += 1
            cash -= 25
        if i == 3 and cash >= 50 and bank[i] < height:
            bank[i] += 1
            cash -= 50
        if i == 4 and cash >= 100 and bank[i] < height:
            bank[i] += 1
            cash -= 100
        if i == 5 and cash >= 500 and bank[i] < height:
            bank[i] += 1
            cash -= 500
        if i == 6 and cash >= 500 and bank[i] < height:
            bank[i] += 1
            cash -= 500
    for i in range(6, -1, -1):
        while i == 6 and cash >= 500 and bank[i] < height:
            bank[i] += 1
            cash -= 500
        while i == 5 and cash >= 500 and bank[i] < height:
            bank[i] += 1
            cash -= 500
        while i == 4 and cash >= 100 and bank[i] < height:
            bank[i] += 1
            cash -= 100
        while i == 3 and cash >= 50 and bank[i] < height:
            bank[i] += 1
            cash -= 50
        while i == 2 and cash >= 25 and bank[i] < height:
            bank[i] += 1
            cash -= 25
        while i == 1 and cash >= 10 and bank[i] < height:
            bank[i] += 1
            cash -= 10
        while i == 0 and cash >= 5 and bank[i] < height:
            bank[i] += 1
            cash -= 5
    return cash, bank


print(bank_levels(cash))
bank_dict = {}
for i in range(0, 11000):
    levels = bank_levels(i)
    print(f'bank amount: {i}', f'levels: {levels[1]}', f'remainder: {levels[0]}')
    bank_dict[i] = levels

# with open("BlackJack/static/bank_levels.json", "w") as outfile:
#     json.dump(bank_dict, outfile)




