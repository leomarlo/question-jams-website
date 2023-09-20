import random, os

DEFAULT = 'either-or'

# def _load_questions(which):
    
def get_random_sentence_from_file(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        sentences = file.readlines()
    return random.choice(sentences).strip()

def generate_new_question():
    # _load_questions(which=DEFAULT)
    # subjects = ["John", "Anna", "The cat", "A ghost", "The team"]
    # verbs = ["eats", "jumps", "runs", "listens", "plays"]
    # objects = ["an apple", "a ball", "loud music", "the piano", "a game"]

    # subject = random.choice(subjects)
    # verb = random.choice(verbs)
    # obj = random.choice(objects)
    question_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '100_eitherorkierkegaard_output.txt'))
    return get_random_sentence_from_file(question_path)
    # return f"{subject} {verb} {obj}."