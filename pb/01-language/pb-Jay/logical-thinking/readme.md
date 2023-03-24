## What is an Algorithm?

We are dipping into computer science theory, which is _not_ to focus point of the class, but some parts of it are useful to know at least a little! **IMPORTANT**: You do not need to be a master at algorithms to be a very successful developer!


An algorithm is an interesting concept. Wikipedia says an Algorithm is "a finite sequence of rigorous instructions, typically used to solve a class of specific problems". 

Often algorithms are compared to recipes - A step-by-step set of instructions to achieve the desired result/output (cake) from some starting condition or input (ingredients).


Often in programming an algorithm is scoped to one function or one feature of a program. Especially for features that are very technical or even mathematic in nature. You technically could think of entire programs themselves as algorithms as well, that usually isn't really useful.


Classic examples of algorithms in programming are sorting algorithms

- Sort products by name, alphabetically
- Sort products by publication date, newest first
- Sort products according to search  term...
    - If search term is a number, the matching product codes are first in results, even if marked as discontinued
    - Other products that are discontinued are not shown at all
    - Otherwise sort according to priority, highest priority first
    - For products with the same prioirty
        - Products marked as hilighted have 80% more weight than release dates in search results
            - If a product is hilighted, but very old some very new NOT-hilighted product should generally come first


The last example is from a real project when a product search engine was being developed (using Elasticsearch for those curious), but even that is actually simplified.

Another classic example of a very famous and very important algorithm is the Djikstra's Algorithm
- see https://www.youtube.com/watch?v=GazC3A4OQTE


## Analyzing problems: Input and Output

Whenever you have a problem to solve, think about what data you have and what do you need; what is your input and your output.

INPUT => ALGORITHM => OUTPUT


Whatever happens between the input and output -- that _is_ your algorithm.


```js

const numbers =[1,4,15,82,6]
const reverse = true

const sprtedBySize = ()=>{}      ////function or ur algos => output [82,15,6,4,1]

```

- What are the inputs?
- What is the output?


- Problem: I want to make a lentil soup? What are the steps? 
  - Grocery Shopping 
    - INPUT: Ingredients? Water, Lentils, Onion, Spice, Tomato sauce, Potatoes
     - Dice the onions and potatoes
     - Lightly fry the onions in your pot 
        - Add everything else into the pot 
        - Simmer until done
        - Eat!


        - Unlike a recipe to humans, we need to tell the computer each single step in order in exact details, The computer doesn't know anything!
- We can think, but the machine cannot. 
- If you don't how exactly to do a lasagna, search for a recipe! => get the algorithm!



- A lot of programming is about coming up with solutions to problems
    - Sometimes you can search for algorithms others have made, like Djikstra algorithm, or Bubble sorting, or....
    - We face a lot of problems D:


    ## Coming up with solutions: writing algorithms

    - Think of what output do you need

    - Think of what input(s) do you have and need
    - Think of a series of steps to get there (pseudocode or starting from comment can help!)

    - Remember, there are probably MANY, MANY ways of solving any single problem