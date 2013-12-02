

file = process.argv[2]
dictionary = require "#{file}"

alphabet = 'abcdefghijklmnopqrstuvwxyz'

pt_matrix = {}
a_matrix = {}

for letter, i in alphabet
  a_matrix[letter] = i+1
  pt_matrix[letter] = (i%9)+1

String::to_value = (matrix)->
  sum = 0
  for i in [0..@length]
    char = @charAt(i).toLowerCase()
    sum += matrix[char] if matrix[char]?
  return sum

# console.log "JESUS CHRISt".to_value(pt_matrix)

format = (word, description)->
  console.log "\n" + word + " : " + description

for word, description of dictionary
  pt = word.to_value(pt_matrix)
  a = word.to_value(a_matrix)

  if pt==63
    format word, description

  # if pt==43 or a==43
  #   console.log "\n\n" + word + " : " + description