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
}

];

export default data;