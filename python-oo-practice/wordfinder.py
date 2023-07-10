"""Word Finder: finds random words from a dictionary."""
import random 

class WordFinder:
    
    def __init__(self, path):
        self.path = path
        words = self.read_words()
        print(f"{len(words)} words read")

    def read_words(self):
        file = open(self.path, "r")
        return [i.strip() for i in file]
        
        
    def random(self):
        file = open(self.path, "r")
        random_word = random.choice(file.read().split())
        file.close()
        return random_word

class SpecialWordFinder(WordFinder):
    def read_words(self):
        file = open(self.path, "r")
        return [i.strip() for i in file if i.strip() and not i.startswith('#')]



# import random


# class WordFinder:
#     def __init__(self, path):
#         self.path = path
#         self.words = self.read_words()
#         print(f"{len(self.words)} words read")

#     def read_words(self):
#         with open(self.path, "r") as file:
#             return [word.strip() for word in file]

#     def random(self):
#         return random.choice(self.words)


# class SpecialWordFinder(WordFinder):
#     def read_words(self):
#         with open(self.path, "r") as file:
#             return [word.strip() for word in file if word.strip() and not word.startswith("#")]
