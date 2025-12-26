import calendar

year=int(input('Entre Year :- '))
month=int(input('Entre Month :- '))

cal=calendar.monthcalendar(year,month)

print('Mo Tu We Th Fr Sa Su')
for week in cal:
    for day in week:
        if day == 0:
            print(" ",end=" ")
        else:
            print(f"{day:2}",end=" ")
    print()

