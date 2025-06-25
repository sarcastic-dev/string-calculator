# 🧮 String Calculator - TDD

This project is a solution to the **String Calculator** using **Test-Driven Development (TDD)** in JavaScript. The goal is to incrementally build a calculator that parses and sums numbers in a string with various delimiters, while writing tests before code and committing at each step.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/string-calculator.git
cd string-calculator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

---

## ✅ Features Implemented

- ✅ Return `0` for empty string
- ✅ Return number if only one is provided
- ✅ Support comma-separated numbers: `"1,2"`
- ✅ Support any number of comma-separated numbers: `"1,2,3,4"`
- ✅ Support newlines as delimiters: `"1\n2,3"`
- ✅ Support custom single-character delimiters: `"//;\n1;2"`
- ✅ Throw exception on negative numbers, listing all negatives: `"1,-2,-5"` → `"negatives not allowed: -2,-5"`

---

## 📁 Project Structure

```
string-calculator/
├── src/
│   └── stringCalculator.js        # Core logic
├── test/
│   └── stringCalculator.test.js   # Unit tests using Jest
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 Tech Stack

- **Language**: JavaScript (ES6)
- **Test Runner**: [Jest](https://jestjs.io/)

---

## 🧠 TDD Workflow

The project was built using the TDD cycle:

1. Write a failing test
2. Write minimal code to pass
3. Refactor while keeping tests green
4. Commit after each meaningful step

---

## 📬 Author

**Shubham Jain**
