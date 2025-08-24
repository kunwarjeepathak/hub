declare module 'mermaid';
export interface SubItemData {
question: string;
answerMd: string;
}

export interface QACardData {
category: string;
title: string;
subItems: SubItemData[];
}

const data: QACardData[] = [{
  "category": "python",
  "title": "Python Code-Backed Q&A",
  "subItems": [
    {
      "question": "How do you define functions and use *args/**kwargs?",
      "answerMd": `
# Function Definitions

## Basic Function
\`\`\`python
def greet(name: str) -> None:
    print(f"Hello, {name}")
\`\`\`

## Variable Arguments with *args and **kwargs
\`\`\`python
def var_args(*args, **kwargs):
    print("Positional args:", args)
    print("Keyword args:", kwargs)

var_args(1, 2, x=3, y=4)
\`\`\`
`
    },
    {
      "question": "How do you read and write files using open and with?",
      "answerMd": `
# File I/O

## Reading a File
\`\`\`python
with open("input.txt", "r") as f:
    contents = f.read()
    print(contents)
\`\`\`

## Writing to a File
\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello, world!")
\`\`\`
`
    },
    {
      "question": "How do you define classes, methods, and inheritance?",
      "answerMd": `
# Classes & Inheritance

## Defining a Class and Instance
\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

dog = Animal("Rover")
print(dog.name)  # Rover
\`\`\`

## Instance, Class, and Static Methods
\`\`\`python
class MyClass:
    def instance_method(self):
        print("Called instance_method()", self)

    @classmethod
    def class_method(cls):
        print("Called class_method()", cls)

    @staticmethod
    def static_method():
        print("Called static_method()")

MyClass().instance_method()
MyClass.class_method()
MyClass.static_method()
\`\`\`

## Inheritance
\`\`\`python
class Bird(Animal):
    def fly(self):
        print(f"{self.name} is flying")

sparrow = Bird("Jack")
sparrow.fly()  # Jack is flying
\`\`\`
`
    },
    {
      "question": "How do decorators and context managers work?",
      "answerMd": `
# Decorators & Context Managers

## Decorator Example
\`\`\`python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before call")
        result = func(*args, **kwargs)
        print("After call")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}")

say_hello("Alice")
\`\`\`

## Context Manager Example
\`\`\`python
class FileOpener:
    def __init__(self, filename, mode):
        self.file = open(filename, mode)
    def __enter__(self):
        return self.file
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

with FileOpener("sample.txt", "w") as f:
    f.write("Context managers rock!")
\`\`\`
`
    },
    {
      "question": "What are iterators and how do generator functions work?",
      "answerMd": `
# Iterators & Generators

## Iterator Protocol
\`\`\`python
class CountDown:
    def __init__(self, start):
        self.current = start
    def __iter__(self):
        return self
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for num in CountDown(3):
    print(num)
\`\`\`

## Generator Function
\`\`\`python
def countdown(start):
    while start > 0:
        yield start
        start -= 1

for num in countdown(3):
    print(num)
\`\`\`
`
    },
    {
      "question": "How do you use threading and async/await for concurrency?",
      "answerMd": `
# Concurrency

## Threading Example
\`\`\`python
import threading

def worker(name):
    print(f"Worker {name} is running")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
\`\`\`

## Async/Await Example
\`\`\`python
import asyncio

async def say_after(delay, message):
    await asyncio.sleep(delay)
    print(message)

async def main():
    await asyncio.gather(
        say_after(1, "Hello"),
        say_after(2, "World")
    )

asyncio.run(main())
\`\`\`
`
    }
  ]
},
{
  "category": "machineLearning",
  "title": "K-Nearest Neighbors (KNN) — A Gentle Story-Driven Guide",
  "subItems": [
    {
      "question": "What is K-Nearest Neighbors (KNN) and how can a beginner understand it?",
      "answerMd": `
# 🏡 K-Nearest Neighbors (KNN) — A Beginner’s Story

## 👥 Who’s Who?

| Character         | Role                                           |
|-------------------|------------------------------------------------|
| Newcomer          | A question mark arriving in Town DataSpace     |
| Townsfolk         | Points with known labels (their identities)    |
| Map & Ruler       | The way we measure closeness (distance metric) |
| Town Elder (KNN)  | The guide who asks the K closest Townsfolk     |
| Town DataSpace    | The flat land where everyone lives            |

---

## 📖 The Story

Imagine a small town where every resident wears a colored badge—red or blue. A new visitor arrives and wonders, “Which badge should I wear?” The Town Elder measures how far the visitor is from each resident, then visits the K closest people and asks for advice. If most wear red, the visitor puts on red; if most wear blue, the visitor chooses blue. Simple, right? That’s the heart of K-Nearest Neighbors.

---

## 🎯 What Are We Trying to Achieve?

| Goal                   | Why It Matters                                |
|------------------------|-----------------------------------------------|
| Local Similarity       | Visitor matches the look of their nearest neighbors |
| Simplicity             | No complicated training—just remember and compare |
| Flexibility            | Works for categories (badges) and numbers (ages)    |
| Transparency           | You can see exactly which neighbors decided the outcome |

---

## 🗺️ The KNN Process in 5 Easy Steps

\`\`\`
Newcomer appears
      │
      ▼
Measure distance to every Townsfolk
      │
      ▼
Sort distances from nearest to farthest
      │
      ▼
Pick the top K closest residents
      │
      ▼
Take a vote (or average) and decide the newcomer’s badge
\`\`\`

1. **Pick K**  
   Decide how many neighbors to ask. A small K (like 3) listens to only a few residents. A larger K (like 10) takes more opinions.

2. **Measure Distance**  
   Use a simple ruler:  
   - If it’s a flat town, use the straight-line distance (Euclidean):  
     \\\\\\\\[
       d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
     \\\\\\\\]

3. **Find Neighbors**  
   Sort all residents by their distance.

4. **Vote or Average**  
   - For badges (classification): see which color appears most.  
   - For numbers (regression): take the average of neighbors’ values.

5. **Assign to Newcomer**  
   The visitor leaves with the badge or number decided by the group.

---

## 🎲 A Simple Town Example

| X  | Y  | Badge (Label) |
|----|----|---------------|
| 1  | 2  | Red           |
| 2  | 3  | Red           |
| 3  | 3  | Red           |
| 6  | 8  | Blue          |
| 7  | 8  | Blue          |
| 8  | 7  | Blue          |

A visitor stands at (5, 5). Let K = 3.

| Neighbor  | Distance | Badge |
|-----------|----------|-------|
| (3,3)     | 2.83     | Red   |
| (6,8)     | 3.16     | Blue  |
| (2,3)     | 3.61     | Red   |

The 3 closest badges: Red, Blue, Red → 2 Reds vs 1 Blue → Visitor gets **Red**.

---

## 🔍 Why KNN Feels Intuitive

- You are “asking the neighbors” rather than relying on a hidden formula.
- No big training phase—computations happen when the visitor arrives.
- You can draw the town and see exactly why the decision was made.

---

## 💡 Tips for Beginners

- **Choosing K**  
  - Try small values (3, 5) first.  
  - If K is too small, one noisy neighbor can mislead.  
  - If K is too large, you might ignore local details.

- **Feature Scaling**  
  Make sure your map’s axes (features) use the same units, or one measurement might dominate.

- **Visualize It**  
  Plot your points on a graph and draw circles around your visitor for different K values to see how neighbors change.

---

With this story in mind, you can now explore KNN in code or on paper—simply by measuring distances and asking your closest friends for advice!`
    }
  ]
}
];

export default data;