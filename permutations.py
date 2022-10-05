# Iterative function to generate all permutations of a string in Python
def permutations(s):
 
    # base case
    if not s:
        return []
 
    # create a list to store (partial) permutations
    partial = []
 
    # initialize the list with the first character of the string
    partial.append(s[0])
 
    # do for every character of the specified string
    for i in range(1, len(s)):
 
        # consider previously constructed partial permutation one by one
 
        # iterate backward
        for j in reversed(range(len(partial))):
 
            # remove the current partial permutation from the list
            curr = partial.pop(j)
 
            # Insert the next character of the specified string into all
            # possible positions of current partial permutation.
            # Then insert each of these newly constructed strings into the list
 
            for k in range(len(curr) + 1):
                partial.append(curr[:k] + s[i] + curr[k:])
 
    print(partial, end='')
 
 
if __name__ == '__main__':
 
    s = input()
    permutations(s)