import string

"""
Print words uppercase. Only prints words that start with E. Input dictionary with letters.

"""

# def print_upper_words(words):
#     for i in words:
#         print(i.upper())



def print_upper_words_with_e(words, starting_letters):
    for i in words:
        j = list(i)
        if j[0].lower() in starting_letters:
            print(i)