print('Welcome to the Mad Libs game!')
print('Fill i  the blanks to carte a funny storie. \n')
adjective1 = input('Entre an adjective :- ')
noun1 = input('Entre an Noun :- ')
verb_Past =input('Entre an ver (past tense) :- ')
adverb = input('Entre another adverb :- ')
adjective2 = input('Entre another adjective :- ')
noun2 = input('Entre another noun :- ')

story = f"""
Today was a very {adjective1} day !
I went to the Park and saw a gaint {noun1}.
It {verb_Past} {adverb} across the field.
Everyone thought it was {adjective2} , but I just wanted to give it a {noun2}
"""

print("\n --- Your Story ---")
print(story)