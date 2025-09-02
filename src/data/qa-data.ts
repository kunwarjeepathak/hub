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
  "title": "K-Nearest Neighbors (KNN) — Story-Driven Comprehensive Guide",
  "subItems": [
    {
      "question": "Explain K-Nearest Neighbors (KNN) in depth including concepts, formulas, examples, challenges, optimizations, and advanced topics.",
      "answerMd": `
# 🏡 K-Nearest Neighbors (KNN) — Story-Driven Comprehensive Guide

## 👥 Main Actors & Their Roles

| Actor                | Role                                                                 |
|----------------------|----------------------------------------------------------------------|
| Newcomer             | A point with unknown label arriving in FeatureVille                  |
| Townsfolk            | Training points with known labels representing the community         |
| Distance Metric      | The map’s ruler measuring closeness (Euclidean, Manhattan, etc.)     |
| Town Elder (KNN)     | The guide who polls the K closest Townsfolk to decide the newcomer’s label |
| FeatureVille         | The landscape (feature space) where everyone resides                 |

---

## 📖 Narrative

Imagine FeatureVille, a town where every resident (data point) wears a badge indicating their category (label). A visitor (new query point) arrives, wondering “Which badge should I wear?” The Town Elder (KNN algorithm) measures travel distances to every resident using a chosen Distance Metric, selects the K nearest neighbors, and asks for their badges. If most wear blue, the visitor picks blue; if most wear red, the visitor chooses red. This “ask your neighbors” process is the essence of KNN.  

---

## 🎯 Goals & Guarantees

| Goal                    | Detail                                                                                             |
|-------------------------|----------------------------------------------------------------------------------------------------|
| 🔍 Local Consistency    | Assign labels that align with the immediate neighborhood                                          |
| ⚖️ Bias–Variance Balance | Small K captures local patterns (low bias, high variance); large K smooths noise (high bias, low variance) |
| 🚀 Simplicity           | No complex training phase—just store data and compute at query time                                |
| 🔄 Versatility          | Works for classification (majority vote) and regression (average of neighbors)                     |
| 🛡️ Interpretability      | Transparent: you see exactly which neighbors influenced each decision                             |

---

## 🗺️ Process Overview (ASCII)

\`\`\`
 Newcomer (x, y)
       │
       ▼
 Compute distance to all townsfolk ──▶ Sort by distance
       │                                     │
       ▼                                     ▼
 Select K nearest neighbors              Poll their labels
       │                                     │
       ▼                                     ▼
     Majority vote (or average) ──▶ Assign label to newcomer
\`\`\`

---

## 🔄 Core Steps to Compute KNN

1. **Choose the Number of Neighbors (K)**  
   - Small K (e.g., 3): sensitive to noise/outliers  
   - Large K: produces smoother, more general decision boundaries  

2. **Compute Distances**  
   - Euclidean (most common):  
     \[
       d(A,B) = \sqrt{\sum_i (A_i - B_i)^2}
     \]  
   - Other metrics: Manhattan, Minkowski, Hamming  

3. **Identify the K Nearest Neighbors**  
   - Sort all distances in ascending order  
   - Pick the top K points  

4. **Determine the Majority Class (or Mean Value)**  
   - Classification: choose the mode of neighbor labels  
   - Regression: compute the mean of neighbor values  

5. **Assign the Label to the Query Point**  

---

## 🎲 Toy Dataset Example

| X | Y | Label |
|---|---|-------|
| 1 | 2 | 0     |
| 2 | 3 | 0     |
| 3 | 3 | 0     |
| 6 | 8 | 1     |
| 7 | 8 | 1     |
| 8 | 7 | 1     |

Query at (5,5), K=3:

| Point  | Distance | Label |
|--------|----------|-------|
| (3,3)  | 2.83     | 0     |
| (6,8)  | 3.16     | 1     |
| (2,3)  | 3.61     | 0     |

3 nearest labels: [0,1,0] → majority **0**.  

---

## 📏 Key Characteristics of KNN

- **Non-parametric**: no assumptions about data distribution  
- **Lazy learner**: stores data and defers computation until query time  
- **Intuitive**: decision based on direct neighbor votes  
- **Scales poorly** on large datasets without optimization  

---

## ⚠️ Failure Cases & Challenges

1. **High Computational Cost**  
   - Stores all training data  
   - \(O(N \times D)\) distance computations per query  

2. **Curse of Dimensionality**  
   - In high-dimensional spaces, distances become less meaningful  

3. **Sensitive to Noisy Data**  
   - Outliers and mislabeled points distort neighbor votes  

4. **Imbalanced Data**  
   - Majority class can dominate vote if classes are skewed  

5. **Wrong K Selection**  
   - Too small K → overfitting; too large K → underfitting  

---

## 📐 Distance Measures in Machine Learning

### Euclidean Distance (L2 Norm)
\[
d(A, B) \;=\; \sqrt{\sum_i (A_i - B_i)^2}
\]

Example: For \(A = (2,3)\) and \(B = (5,7)\),
\[
d = \sqrt{(5-2)^2 + (7-3)^2}
  = \sqrt{9 + 16}
  = 5
\]

---


2. **Manhattan Distance (L1 Norm)**  
   \[
     d(A,B) = \sum_i |A_i - B_i|
   \]  
   *Example:* A(2,3), B(5,7) → \(3+4=7\)

3. **Minkowski Distance**  
   \[
     d(A,B) = \Bigl(\sum_i |A_i - B_i|^p\Bigr)^{1/p}
   \]  
   *Example (p=3):* \((27+64)^{1/3}\approx4.64\)

4. **Hamming Distance**  
   \[
     d(A,B)=\sum_i \mathbf{1}(A_i \neq B_i)
   \]  
   *Example:* “1011101” vs “1001001” → 3

5. **L1 Norm (Taxicab Norm)**  
   \[
     \|A\|_1=\sum_i |A_i|
   \]  
   *Example:* A=(3,-4,5) → 12

6. **L2 Norm (Euclidean Norm)**  
   \[
     \|A\|_2=\sqrt{\sum_i A_i^2}
   \]  
   *Example:* A=(3,-4,5) → \(\sqrt{50}\approx7.07\)

### Summary of Distance Metrics

| Metric               | Formula                                 | Example             |
|----------------------|-----------------------------------------|---------------------|
| Euclidean (L2)       | \(\sqrt{\sum (A_i - B_i)^2}\)           | 5                   |
| Manhattan (L1)       | \(\sum |A_i - B_i|\)                    | 7                   |
| Minkowski (p=3)      | \((\sum |A_i - B_i|^3)^{1/3}\)           | ≈4.64               |
| Hamming              | \(\sum \mathbf{1}(A_i \neq B_i)\)       | 3                   |
| L1 Norm              | \(\sum |A_i|\)                          | 12                  |
| L2 Norm              | \(\sqrt{\sum A_i^2}\)                   | ≈7.07               |

---

## 🔄 Cosine Similarity & Distance

- **Cosine Similarity**:  
  \(\displaystyle \frac{A \cdot B}{\|A\|\|B\|}\)  
- **Cosine Distance**:  
  \(1 - \text{cosine\_similarity}\)  
- **Relation to Euclidean** (normalized vectors):  
  \(d_{\text{Euclid}}^2 = 2(1 - \cos\theta)\)  

*Example:* A(3,4), B(4,3) → dot=24, \(\|A\|=\|B\|=5\), sim=0.96, dist=0.04  

---

## 🚀 Performance for 364K Amazon Reviews

| Aspect         | Challenge                                      | Mitigation                                    |
|----------------|------------------------------------------------|-----------------------------------------------|
| Time           | Brute-force \(O(N·d)\) per query               | ANN (FAISS, Annoy, HNSW); KD-trees             |
| Memory         | TF-IDF (3–5 GB), Word2Vec (400 MB), BERT (2.2 GB) | Dimensionality Reduction (PCA, UMAP, t-SNE)   |
| Bottlenecks    | Minutes/query, high RAM usage                  | Use Approximate Nearest Neighbors, reduce dims|
| Alternative    | Better for interpretability if optimized       | Consider Naïve Bayes, SVM, Transformers        |

**Conclusion:** KNN is not ideal for real-time on 364K raw reviews, but viable with ANN and reduction. For scale, prefer SVM or transformer-based models.

---

## 📊 Decision Boundary & the Impact of K

| K  | Boundary Shape           | Effect                                   |
|----|--------------------------|------------------------------------------|
| 1  | Highly jagged            | Overfits—captures noise                  |
| 3  | Moderately smooth        | Good bias–variance trade-off             |
| 5  | Smooth                   | Generalizes well                         |
| 10 | Very smooth, almost linear | Underfits—misses fine details            |

\`\`\`
K=1: hugs every point
K=3: balanced
K=5+: smooth
K=10: too smooth
\`\`\`

**Choose K** via cross-validation; rule of thumb \(K\approx\sqrt{N}\).

---

## 🎭 Overfitting vs Underfitting

- **Underfitting:** model too simple, poor training & test performance.  
  *Analogy:* student guessing without study.  
- **Overfitting:** model too complex, memorizes noise, fails on new data.  
  *Analogy:* student memorizing answers but can’t generalize.  
- **Good Fit:** balances complexity, learns patterns without noise.  
  *Example:* K=5 or 10 in moderate-sized data.  

---

## 🕒 Time & Space Complexity & KD-Tree

- **KNN Training Space:** \(O(n·d)\)  
- **KNN Training Time:** \(O(n·d)\) (storing data)  
- **KNN Query Time:** \(O(n·k·d)\)  
- **KD-Tree / Ball-Tree:** reduces query to \(O(\log n)\) in low dimensions  

---

## 📜 Assumptions of KNN

- Similar points exist near each other in feature space.  
- Features are scaled comparably.  
- No rapid prediction requirement for large datasets.  

---

## ⚖️ Importance of Normalization

Without feature scaling, variables with larger ranges dominate distance calculations. Always normalize or standardize features before using KNN to ensure fair neighbor selection.

---

## 🌟 Weighted KNN — A Smarter Poll

- **Motivation:** nearer neighbors should have more say.  
- **Weighting:** \(w_i = 1/d_i\) or \(1/d_i^2\)  
- **Prediction:**  
  \[
    \hat{y} = \frac{\sum_{i=1}^K w_i \, y_i}{\sum_{i=1}^K w_i}
  \]  
- **Advantages:** higher accuracy, reduced outlier impact, better reliability.

---

## ❓ Bias & Variance in KNN

1. **Bias & K**  
   - Increase K → bias increases (simpler model) ✅  
   - Decrease K → bias decreases ❌  

2. **Variance & K**  
   - Increase K → variance decreases ❌  
   - Decrease K → variance increases (captures noise) ✅  

---

KNN’s magic lies in its simplicity: “ask your neighbors” and trust their vote. With careful K selection, distance metric choice, and optimizations, it remains a foundational algorithm for both learning and teaching machine learning concepts.
`
    }
  ]
},{
    category: "machineLearning",
    title: "RAG Pipeline — Modular, Story-Driven Guide",
    subItems: [
      {
        question: "📚 What is Retrieval-Augmented Generation (RAG)?",
        answerMd: `
# Retrieval-Augmented Generation (RAG)

RAG is a hybrid architecture that combines **information retrieval** with **language generation**. Instead of relying solely on a model’s internal knowledge, it retrieves relevant external documents and uses them to generate grounded, context-aware answers.

**Why it matters:**  
- Reduces hallucinations  
- Enables domain-specific Q&A  
- Keeps models lightweight and interpretable  
        `
      },
      {
        question: "🧱 What are the core components of a RAG pipeline?",
        answerMd: `
# Core Modules in RAG

| Module         | Role                                  | Example Tool           |
|----------------|----------------------------------------|------------------------|
| Loader         | Ingest raw documents                   | Python, LangChain      |
| Chunker        | Split into semantic segments           | LangChain, custom      |
| Embedder       | Convert chunks to vectors              | SentenceTransformers   |
| Vector Store   | Store and search embeddings            | FAISS, Pinecone        |
| Retriever      | Find relevant chunks for a query       | FAISS search           |
| Prompt Builder | Construct input for LLM                | Templates, LangChain   |
| Generator      | Produce final answer using LLM         | Flan-T5, GPT, Claude   |
        `
      },
      {
        question: "🔄 How does the data flow through the pipeline?",
        answerMd: `
# RAG Data Flow

\`\`\`
[Documents] → [Chunking] → [Embedding] → [Vector Store]
      ↑                                 ↓
   [Query] → [Query Embedding] → [Retriever] → [Prompt Builder] → [LLM] → [Response]
\`\`\`

Each module transforms the input and passes it forward. Retrieval ensures the LLM sees only the most relevant context.
        `
      },
      {
        question: "🧠 How do embeddings work and why are they important?",
        answerMd: `
# Embeddings

Embeddings are **dense vector representations** of text. They capture semantic meaning and allow similarity search.

## Example: SentenceTransformer

\`\`\`python
from sentence_transformers import SentenceTransformer
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(["What is RAG?", "How does FAISS work?"])
\`\`\`

These vectors are stored in a vector DB and retrieved based on query similarity.
        `
      },
      {
        question: "📦 How is FAISS used for retrieval?",
        answerMd: `
# FAISS — Fast Approximate Nearest Neighbor Search

FAISS indexes embeddings and allows fast similarity search.

## Example

\`\`\`python
import faiss
index = faiss.IndexFlatL2(384)
index.add(embeddings)
D, I = index.search(query_embedding, k=5)
\`\`\`

- **D**: distances  
- **I**: indices of top-k similar chunks  
        `
      },
      {
        question: "🧾 How is the prompt constructed for the LLM?",
        answerMd: `
# Prompt Construction

Combine retrieved chunks with the user query to form a structured prompt.

## Example

\`\`\`python
def build_prompt(query, contexts):
    return f"Context:\\n{contexts}\\n\\nQuestion: {query}\\nAnswer:"
\`\`\`

This prompt is passed to the LLM for grounded generation.
        `
      },
      {
        question: "🔮 How does the LLM generate the final answer?",
        answerMd: `
# Generation with LLM

Use a model like Flan-T5 or GPT to generate answers based on the prompt.

## Example

\`\`\`python
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("google/flan-t5-base")
tokenizer = AutoTokenizer.from_pretrained("google/flan-t5-base")

inputs = tokenizer(prompt, return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=300)
answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
\`\`\`
        `
      },
      {
        question: "🧪 How can we verify and extend the pipeline?",
        answerMd: `
# Verification & Extensions

## ✅ Verification Steps
- Check chunk overlap and token limits
- Validate embedding dimensionality
- Test retrieval accuracy with known queries

## 🔧 Extensions
- Swap FAISS with Pinecone or Weaviate
- Add metadata filtering
- Integrate with FastAPI or Streamlit for UI
        `
      },{
        question: "🧠 What are embeddings and why do we need them?",
        answerMd: `
# Embeddings — Semantic DNA of Text

Embeddings are **dense vector representations** of text. They capture meaning, context, and relationships between words or sentences in a way that machines can understand.

## Why use embeddings?
- They allow **semantic search** — finding similar meanings, not just keywords.
- They compress text into a **fixed-size numerical format**.
- They enable **fast similarity comparison** using vector math.

> Think of embeddings as the “fingerprint” of a sentence — unique, compact, and comparable.
        `
      },
      {
        question: "🧪 How are embeddings generated?",
        answerMd: `
# Generating Embeddings

Embeddings are created using **pretrained transformer models** like Sentence-BERT or MiniLM.

## Example: Using SentenceTransformers

\`\`\`python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
texts = ["What is RAG?", "How does FAISS work?"]
embeddings = model.encode(texts)
\`\`\`

- Each text becomes a vector of ~384 dimensions.
- These vectors are **numerically similar** if the texts are semantically similar.
        `
      },
      {
        question: "📦 What is a vector store and how does it work?",
        answerMd: `
# Vector Store — Semantic Memory Bank

A vector store is a **database optimized for similarity search**. It stores embeddings and allows fast retrieval based on how “close” vectors are.

## Popular Options
- **FAISS** (local, fast, open-source)
- **Pinecone** (cloud-native, scalable)
- **Weaviate**, **Qdrant**, **Milvus** (feature-rich alternatives)

## Core Idea
- Store each chunk’s embedding
- When a query comes in, embed it too
- Find the **top-k most similar vectors** using distance metrics

> It’s like asking: “Which memory is closest to this question?”
        `
      },
      {
        question: "📐 What distance metrics are used for similarity?",
        answerMd: `
# Similarity Metrics

To compare embeddings, we use **distance functions**:

| Metric         | Description                            | Use Case              |
|----------------|----------------------------------------|------------------------|
| Cosine Similarity | Measures angle between vectors         | Semantic similarity    |
| L2 Distance    | Euclidean distance                      | FAISS default          |
| Dot Product    | Magnitude-weighted similarity           | Some transformer models

## Example: Cosine Similarity

\`\`\`python
from sklearn.metrics.pairwise import cosine_similarity
similarity = cosine_similarity([query_embedding], [doc_embedding])
\`\`\`

> Higher similarity = more relevant chunk
        `
      },
      {
        question: "⚡ How do we use FAISS for fast retrieval?",
        answerMd: `
# FAISS — Fast Approximate Nearest Neighbor Search

FAISS builds an index of embeddings and allows fast lookup of similar vectors.

## Example: Flat Index

\`\`\`python
import faiss

dim = 384  # embedding dimension
index = faiss.IndexFlatL2(dim)
index.add(embeddings)  # Add document vectors

D, I = index.search(query_embedding, k=5)
\`\`\`

- **D**: distances
- **I**: indices of top-k similar chunks
- Use **I** to fetch the original text chunks

> FAISS is blazing fast and works offline — perfect for local RAG apps.
        `
      },
      {
        question: "🔄 How does retrieval work end-to-end?",
        answerMd: `
# Retrieval Flow

1. **Embed the query** using the same model as documents
2. **Search the vector store** for top-k similar chunks
3. **Return the matching texts** to build the prompt

## Example

\`\`\`python
query_embedding = model.encode(["What is RAG?"])
D, I = index.search(query_embedding, k=3)
retrieved_chunks = [chunks[i] for i in I[0]]
\`\`\`

> Retrieval is the bridge between user intent and model context.
        `
      },
      {
        question: "🧩 How do embeddings and vector stores fit into the RAG pipeline?",
        answerMd: `
# Embedding & Retrieval in RAG

\`\`\`
[Chunks] → [Embedding Model] → [Vector Store]
      ↑                                ↓
   [Query] → [Query Embedding] → [Retriever] → [Prompt Builder]
\`\`\`

- Embeddings make text searchable
- Vector stores make retrieval fast
- Together, they enable **context-aware generation**
        `
      },{
        question: "✅ How do we evaluate the quality of retrieval?",
        answerMd: `
# Retrieval Evaluation Metrics

Evaluating retrieval helps ensure your RAG pipeline returns **relevant, diverse, and accurate** context chunks.

## Key Metrics

| Metric         | Description                                | Tooling                     |
|----------------|--------------------------------------------|-----------------------------|
| Precision@k    | % of top-k results that are relevant        | Manual or labeled queries   |
| Recall@k       | % of relevant chunks retrieved              | Requires ground truth       |
| MRR            | Mean Reciprocal Rank of first relevant hit | Useful for ranked results   |
| NDCG           | Normalized Discounted Cumulative Gain      | Weighs relevance by rank    |

## Example: Precision@k

\`\`\`python
def precision_at_k(retrieved, relevant, k=5):
    return len(set(retrieved[:k]) & set(relevant)) / k
\`\`\`

> Use labeled queries or synthetic QA pairs to benchmark retrieval accuracy.
        `
      },{
        question: "🔗 What are multi-vector fusion strategies?",
        answerMd: `
# Multi-Vector Fusion — Smarter Context Aggregation

Instead of using a single vector per chunk, fusion strategies combine multiple vectors to improve retrieval or generation.

## Strategies

| Strategy        | Description                                  | Use Case                  |
|-----------------|----------------------------------------------|---------------------------|
| Mean Pooling    | Average multiple embeddings                  | Chunk-level aggregation   |
| Max Pooling     | Take max across dimensions                   | Emphasize strong signals  |
| FiD (Fusion-in-Decoder) | Retrieve multiple chunks, fuse during generation | GPT-style models          |
| FiE (Fusion-in-Encoder) | Fuse chunks before encoding            | T5-style models           |

## Example: Mean Pooling

\`\`\`python
import numpy as np
fused_vector = np.mean([vec1, vec2, vec3], axis=0)
\`\`\`

> Fusion improves robustness and reduces retrieval noise.
        `
      },{
        question: "🧪 How can we benchmark different embedding models?",
        answerMd: `
# Embedding Model Benchmarking

Compare models like MiniLM, BGE, E5, or OpenAI Ada using:

- Retrieval accuracy (Precision@k)
- Embedding speed (tokens/sec)
- Vector quality (clustering, separation)
- Token limit and cost (for hosted APIs)

## Example: Model Comparison Table

| Model             | Dim | Speed | Precision@5 | Notes                  |
|-------------------|-----|-------|-------------|------------------------|
| MiniLM-L6-v2      | 384 | Fast  | 0.82        | Lightweight, local     |
| BGE-base-en       | 768 | Medium| 0.87        | Good for QA tasks      |
| OpenAI Ada v2     | 1536| Fast  | 0.89        | API-based, scalable    |

> Use synthetic QA pairs and labeled queries for fair benchmarking.
        `
      },
    {
      question: "How did you chunk your documents and why?",
      answerMd: `
### Chunking Strategy

- Used **recursive character-based chunking** with configurable \`chunk_size = 500\` and \`chunk_overlap = 50\`.
- Overlap ensures **semantic continuity** across chunks, reducing context fragmentation.
- Evaluated paragraph-based vs recursive splitting — recursive gave better control over token budgets and retrieval granularity.
- Verified chunk quality using synthetic QA relevance and retrieval precision.
      `
    },
    {
      question: "What embedding model did you use and how did you evaluate its performance?",
      answerMd: `
### Embedding Model & Evaluation

- Used **\`all-MiniLM-L6-v2\` from SentenceTransformers** for local, fast, cost-free inference.
- Compared with OpenAI’s \`text-embedding-ada-002\`:
  - MiniLM: 384 dims, CPU-friendly, decent semantic fidelity.
  - Ada-002: 1536 dims, better semantic coverage, but API-bound.
- Benchmarked using **Precision@k**, cosine similarity, and relevance scoring on synthetic QA pairs.
      `
    },
    {
      question: "How did you handle prompt construction and context length limits?",
      answerMd: `
### Prompt Construction & Truncation Logic

- Used structured prompt template:
  \`\`\`
  You are a helpful assistant.

  Context:
  [retrieved chunks]

  Question:
  [user query]
  \`\`\`
- Enforced token limits (e.g., 2048 for Flan-T5) using:
  - Token estimation via \`tiktoken\` or HuggingFace tokenizer.
  - Truncation of context based on top-k similarity scores.
  - Optional fallback to summary-based compression if needed.
      `
    },
    {
      question: "What was your strategy for grounding answers in retrieved context?",
      answerMd: `
### Grounding & Hallucination Mitigation

- Retrieval ensures grounding: only top-k relevant chunks passed to LLM.
- Prompt boundaries strictly enforced — no open-ended generation.
- Verified answers using keyword matching and citation injection.
- Tested adversarial queries to ensure context-bound responses.
      `
    },{
      question: "How does your hybrid search work under the hood?",
      answerMd: `
### Hybrid Search Architecture

- Combined **dense vector search (FAISS)** with **sparse keyword search (Whoosh/Elastic)**.
- Vector search retrieves semantically similar chunks using cosine similarity.
- Keyword search boosts exact matches and domain-specific terms.
- Results from both are merged using a **weighted union strategy**:
  - Vector hits: ranked by similarity score.
  - Keyword hits: ranked by TF-IDF or BM25.
- Final ranking balances semantic relevance and lexical precision.
      `
    },
    {
      question: "What ranking or scoring mechanism did you use to merge keyword and vector results?",
      answerMd: `
### Merge Strategy & Scoring

- Used **weighted rank fusion**:
  - Normalize scores from FAISS and keyword index.
  - Assign weights (e.g., 0.7 vector, 0.3 keyword) based on domain needs.
- Applied **deduplication** by chunk ID or hash.
- Optional fallback: if keyword hits are sparse, rely more on vector scores.
- Evaluated merged results using **Precision@k**, **Recall@k**, and **QA relevance**.
      `
    },
    {
      question: "How do you filter results using metadata?",
      answerMd: `
### Metadata Filtering Logic

- Each chunk indexed with metadata:
  - \`tags: string[]\`
  - \`source: string\`
  - \`date: ISO timestamp\`
- Applied filters post-retrieval or during index query:
  - Example: \`tags.includes("aws") && date > "2023-01-01"\`
- Enabled **faceted search** and **context scoping** (e.g., only docs from trusted sources).
- Used metadata to enforce **answer provenance** and reduce hallucination risk.
      `
    },{
      question: "How did you generate synthetic QA pairs and validate them?",
      answerMd: `
### Synthetic QA Generation

- Used **FLAN-T5-base** for generating question–answer pairs from chunked context.
- Prompt format:
  \`\`\`
  Generate a question and answer based on the following context:
  [chunk]
  \`\`\`
- Applied filtering heuristics:
  - Removed trivial or overly generic questions.
  - Ensured answers were extractive and context-grounded.
- Validation:
  - **Manual spot-checking** for semantic fidelity and answer correctness.
  - **Automated checks** for answer containment within source chunk.
      `
    },
    {
      question: "What metrics did you use to evaluate retrieval quality?",
      answerMd: `
### Retrieval Evaluation Metrics

- Used standard IR metrics:
  - **Precision@k**: proportion of relevant chunks in top-k.
  - **Recall@k**: coverage of all relevant chunks.
  - **MRR (Mean Reciprocal Rank)**: how early the first relevant chunk appears.
- Custom scoring:
  - **Answer containment score**: does the retrieved chunk contain the gold answer?
  - **Semantic similarity** between retrieved context and QA pair.
- Benchmarked across multiple chunking strategies and embedding models.
      `
    },
    {
      question: "Did you benchmark against any ground truth or gold dataset?",
      answerMd: `
### Ground Truth Benchmarking

- Used **synthetic QA pairs** as pseudo-gold for internal benchmarking.
- For external validation:
  - Compared retrieval performance on **SQuAD-style datasets** and **domain-specific corpora**.
  - Evaluated answer correctness using **exact match** and **fuzzy matching**.
- Maintained a small **curated gold set** for regression testing and pipeline tuning.
      `
    },{
      question: "How is your pipeline structured? Is it reusable and testable?",
      answerMd: `
### Modular Pipeline Design

- Core modules:
  - \`rag_pipeline.py\`: orchestrates chunking, embedding, retrieval, and prompt construction.
  - \`synthetic_qa.py\`: handles QA generation and evaluation.
  - \`config.py\`: centralizes toggles for model selection, chunking, and retrieval modes.
- Each module exposes **clean interfaces** for unit testing and reuse.
- Pipeline is **functionally decomposed**:
  - Embedding → Retrieval → Prompt → Generation → Evaluation
- Testable via:
  - Pytest suites for each module
  - Mocked inputs for retrieval and generation
  - Regression tests using synthetic QA pairs
      `
    },
    {
      question: "How do you handle errors, retries, and logging?",
      answerMd: `
### Robustness & Observability

- Wrapped critical steps in **try–except blocks** with custom error classes.
- Implemented **retry logic** for transient failures (e.g., model timeouts, disk I/O).
- Logging via Python’s \`logging\` module:
  - Configurable verbosity (INFO, DEBUG, ERROR)
  - Separate logs for retrieval, generation, and evaluation
- Optional integration with **Streamlit dashboard** for live status and metrics.
- Caching:
  - Embeddings and retrieval results stored in local cache (e.g., \`joblib\`, \`pickle\`)
  - Reduces redundant computation across runs
      `
    },
    {
      question: "Can you swap out components (e.g., embedding model, retriever) easily?",
      answerMd: `
### Component Swappability

- Embedding model abstracted via \`EmbedderInterface\`:
  - Supports SentenceTransformers, HuggingFace, OpenAI, Cohere, etc.
- Retriever logic modular:
  - \`VectorRetriever\`, \`KeywordRetriever\`, \`HybridRetriever\`
  - Config-driven toggle: \`retrieval_mode = "hybrid"\`
- Prompt templates stored as external files or config entries.
- Easy to plug in:
  - New chunking strategies
  - Different LLMs (e.g., Flan-T5, Mistral, GPT-J)
  - Evaluation metrics or QA validators
      `
    },{
      question: "What does your Streamlit dashboard show?",
      answerMd: `
### Dashboard Overview

- **Query input box** for user questions.
- **Retrieved context viewer**: shows top-k chunks with metadata.
- **Generated answer panel**: displays LLM response grounded in context.
- **Sidebar controls**:
  - Retrieval mode toggle (vector, keyword, hybrid)
  - Chunk size and overlap sliders
  - Embedding model selector
- Optional: QA evaluation metrics and debug logs.
      `
    },
    {
      question: "How do you visualize retrieved chunks and generated answers?",
      answerMd: `
### Visualization Strategy

- Retrieved chunks shown in **expandable cards** with:
  - Source metadata (tags, date, source)
  - Highlighted query terms
  - Chunk similarity score
- Generated answer shown with:
  - Context citation markers (e.g., [1], [2])
  - Option to toggle between raw and formatted view
- Used **color-coded highlighting** to show context–answer alignment.
      `
    },
    {
      question: "Can non-technical users interact with it?",
      answerMd: `
### Usability for Non-Technical Users

- Streamlit UI is **fully interactive** and **no-code**.
- Designed with:
  - Clear labels and tooltips
  - Default presets for retrieval and generation
  - Export options (e.g., download answer, copy context)
- Optional: guided walkthrough mode for onboarding.
      `
    }, {
      question: "How would you scale this for millions of documents?",
      answerMd: `
### Scaling Strategy

- **Index sharding**: split FAISS index by topic or time window.
- **Async retrieval**: parallelize vector + keyword search using \`asyncio\` or \`Ray\`.
- **Chunk pre-filtering**: use metadata to narrow candidate pool before embedding.
- **Batch embedding**: GPU-accelerated embedding for bulk ingestion.
- Optional: move to **distributed vector DBs** like Weaviate or Qdrant.
      `
    },
    {
      question: "What trade-offs exist between latency and accuracy?",
      answerMd: `
### Latency vs Accuracy Trade-offs

- **Fast models** (e.g., MiniLM): lower latency, lower semantic fidelity.
- **Accurate models** (e.g., BGE, Ada-002): higher latency, better grounding.
- Retrieval:
  - Fewer chunks = faster prompt, less context
  - More chunks = better grounding, risk of truncation
- Tuned via:
  - Top-k selection
  - Token budget allocation
  - Prompt compression heuristics
      `
    },
    {
      question: "How would you secure the pipeline (e.g., auth, rate limits)?",
      answerMd: `
### Security & Usage Controls

- **Auth**: token-based access control for API endpoints.
- **Rate limiting**: per-user or per-IP throttling via middleware (e.g., FastAPI + Redis).
- **Input sanitization**: prevent prompt injection or malformed queries.
- **Audit logging**: track usage patterns and anomalies.
- Optional: integrate with **OAuth2**, **API keys**, or **JWT** for enterprise-grade access.
      `
    }


    ]
  }
];

export default data;