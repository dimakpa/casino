print("""
        ++++++++++++++++++++++++++++++++++++++++
        +                                      +
        + ===Добро пожаловать в Джойказино!=== +
        + ====Делай ставку и бросай кубик!==== +
        +                                      +
        ++++++++++++++++++++++++++++++++++++++++
        """)

import random

die = random.randint(1, 6)

bet = int(input("Введи число от 1 до 6: "))

fart = ""  # степень везучести
case = "попыток!"  # падеж слова "попытки"

while True:
    if bet > 6:
        print("\nТупой! Ставка не может быть больше 6!")
    elif bet < 1:
        print("\nТупой! Ставка не может быть меньше 1!")
    else:
        break
    bet = int(input("Сделай ставку еще раз: "))

attempt = 1  # счетчик попыток

while bet != die:
    if attempt >= 3:
        print("\nХа! Лузер! Выпало", str(die) + "! \nС телками небось тоже не фартит!")
        break
    elif bet > die:
        print("\nМеньше...")
        attempt += 1
    else:
        print("\nБольше...")
        attempt += 1
    bet = int(input("Сделай ставку еще раз: "))

if attempt == 1:
    fart = "фартовый пацан!"
    case = "попытки!"
elif attempt == 2:
    fart = "пацан средней фартовости!"
elif attempt == 3:
    fart = "на грани нефартовости :)"

if bet == die:
    print("\nХорош!\n" + str(die), "выпало с", attempt, case, "Ты", fart)

input("\nЖмякни Enter")

# прописать case, чтобы просклонять очко
# возможность выбора игрового стола (21, кости, рулетка)
