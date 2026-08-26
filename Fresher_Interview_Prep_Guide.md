# Fresher-Level Interview Prep: JavaScript, React, Python, SQL

Each section has 30 questions mixing **conceptual**, **output-based ("find the output")**, and **scenario-based** questions, with answers/explanations. A machine test / coding round section is added at the end.

---

## 1. JavaScript (30 Questions)

**Conceptual**

1. **What is the difference between `var`, `let`, and `const`?**
   `var` is function-scoped and hoisted with `undefined`; `let`/`const` are block-scoped and hoisted but not initialized (temporal dead zone). `const` can't be reassigned.

2. **What is hoisting?**
   JS moves variable/function declarations to the top of their scope before execution; only declarations are hoisted, not initializations.

3. **Explain `==` vs `===`.**
   `==` compares with type coercion; `===` compares value and type (strict equality).

4. **What is a closure?**
   A function that retains access to its outer scope's variables even after the outer function has returned.

5. **What is the event loop?**
   The mechanism that handles async callbacks — call stack executes sync code, then microtasks (Promises) run before macrotasks (setTimeout, etc.).

6. **Difference between `null` and `undefined`.**
   `undefined` = variable declared but not assigned; `null` = explicitly assigned "no value."

7. **What are Promises?**
   Objects representing eventual completion/failure of an async operation, with `.then()`, `.catch()`, `.finally()`.

8. **Difference between `async/await` and Promises.**
   `async/await` is syntactic sugar over Promises, making async code look synchronous.

9. **What is the difference between `map()`, `filter()`, and `reduce()`?**
   `map` transforms each element (returns new array), `filter` selects elements matching a condition, `reduce` accumulates into a single value.

10. **What is destructuring?**
    Extracting values from arrays/objects into variables, e.g. `const {a, b} = obj;`

11. **Explain `this` keyword in JS.**
    Refers to the object that invokes the function; behaves differently in regular functions vs arrow functions (arrow functions inherit `this` from enclosing scope).

12. **What is the difference between call, apply, and bind?**
    All set `this` explicitly; `call`/`apply` invoke immediately (args as list vs array), `bind` returns a new function for later invocation.

13. **What are template literals?**
    Strings using backticks allowing embedded expressions: `` `Hello ${name}` ``.

14. **What is event bubbling and capturing?**
    Bubbling: event propagates from target element up to ancestors. Capturing: propagates from ancestors down to target.

15. **What is a higher-order function?**
    A function that takes another function as an argument or returns a function.

16. **What is prototypal inheritance?**
    Objects inherit properties/methods from other objects via the prototype chain.

17. **What is the difference between synchronous and asynchronous code?**
    Sync executes line by line, blocking; async allows other code to run while waiting (e.g., API calls).

18. **What is debouncing vs throttling?**
    Debounce delays execution until after a pause in events; throttle limits execution to once per interval.

19. **What is NaN and how do you check for it?**
    "Not a Number" — check using `Number.isNaN(value)` (avoid global `isNaN` due to coercion).

20. **What are JS data types?**
    Primitives: string, number, boolean, null, undefined, symbol, bigint. Reference: object (includes arrays, functions).

**Output-Based**

21. **What is the output?**
```js
console.log(1 + '2');
console.log('1' + 2);
console.log(1 + 2 + '3');
console.log('1' + 2 + 3);
```
**Answer:** `"12"`, `"12"`, `"33"`, `"123"` — string concatenation happens once a string is involved, left to right.

22. **What is the output?**
```js
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
```
**Answer:** `"object"` (a long-standing JS quirk), `"undefined"`, `"number"`.

23. **What is the output?**
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
**Answer:** `3 3 3` — `var` is function-scoped, so all callbacks share the same `i`, which is 3 after the loop ends.

24. **What is the output of the same code using `let` instead of `var`?**
**Answer:** `0 1 2` — `let` creates a new binding per iteration.

25. **What is the output?**
```js
console.log([1, 2, 3] + [4, 5, 6]);
```
**Answer:** `"1,2,34,5,6"` — arrays are converted to strings and concatenated.

26. **What is the output?**
```js
function foo() {
  console.log(a);
  var a = 10;
}
foo();
```
**Answer:** `undefined` — `var a` is hoisted (declaration only), so it exists but is `undefined` at the console.log line.

27. **What is the output?**
```js
console.log(0.1 + 0.2 === 0.3);
```
**Answer:** `false` — floating-point precision issue; `0.1+0.2` = `0.30000000000000004`.

28. **What is the output?**
```js
let obj = {a: 1};
let obj2 = obj;
obj2.a = 2;
console.log(obj.a);
```
**Answer:** `2` — objects are assigned by reference, so `obj2` and `obj` point to the same object.

29. **What is the output?**
```js
console.log([1,2,3].map(num => num * 2).filter(num => num > 3));
```
**Answer:** `[4, 6]` — map doubles to `[2,4,6]`, filter keeps values > 3.

30. **What is the output?**
```js
async function test() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  await Promise.resolve();
  console.log(3);
}
test();
console.log(4);
```
**Answer:** `1 4 3 2` — sync code (1, 4) runs first, then microtask (`await` continuation → 3), then macrotask (`setTimeout` → 2).

**Scenario-Based**

- **You need to make an API call and use the result elsewhere without blocking the UI. How would you do it?**
  Use `fetch`/`axios` with `async/await` inside a try/catch, or `.then().catch()`, keeping it non-blocking so the UI stays responsive.

- **You have a search input that triggers an API call on every keystroke, causing performance issues. How do you fix it?**
  Add debouncing — delay the API call until the user stops typing for e.g. 300ms.

- **Your app throws "Cannot read property of undefined" intermittently. How do you debug it?**
  Add optional chaining (`obj?.prop`), check async data-loading timing, and add null/undefined guards before accessing nested properties.

- **How would you deep clone a JS object?**
  `structuredClone(obj)` (modern) or `JSON.parse(JSON.stringify(obj))` (with limitations for functions/dates), or a recursive clone / library like lodash `cloneDeep`.

- **You're given an array of objects and need to remove duplicates based on an `id` field. How?**
  Use a `Map` or `Set` keyed by `id`, e.g. `[...new Map(arr.map(item => [item.id, item])).values()]`.

---

## 2. ReactJS (30 Questions)

**Conceptual**

1. **What is React and why is it used?**
   A JS library for building UIs using a component-based architecture and virtual DOM for efficient rendering.

2. **What is JSX?**
   A syntax extension that lets you write HTML-like code in JavaScript; compiled to `React.createElement` calls.

3. **What is the Virtual DOM?**
   An in-memory representation of the real DOM; React diffs it against the previous version and updates only the changed parts.

4. **Difference between functional and class components.**
   Functional components are plain functions (use hooks for state/lifecycle); class components use `this.state` and lifecycle methods.

5. **What are props vs state?**
   Props are read-only data passed from parent to child; state is local, mutable data managed within a component.

6. **What is the `useState` hook?**
   Lets functional components hold local state: `const [count, setCount] = useState(0)`.

7. **What is `useEffect` used for?**
   Runs side effects (data fetching, subscriptions, DOM manipulation) after render; dependency array controls when it re-runs.

8. **What is the dependency array in `useEffect`?**
   Controls re-execution: `[]` = run once on mount, `[dep]` = run when `dep` changes, omitted = run on every render.

9. **What is prop drilling and how do you avoid it?**
   Passing props through many intermediate components; avoided using Context API or state management libraries (Redux, Zustand).

10. **What is the Context API?**
    A way to share data across the component tree without manually passing props at every level.

11. **What is a key prop in lists and why is it important?**
    A unique identifier React uses to track list items across renders for efficient reconciliation; avoid using array index if list order can change.

12. **What is the difference between controlled and uncontrolled components?**
    Controlled: form data handled by React state. Uncontrolled: form data handled by the DOM itself, accessed via refs.

13. **What is `useRef` used for?**
    Accessing DOM nodes directly, or persisting a mutable value across renders without causing re-render.

14. **What is `useMemo` vs `useCallback`?**
    `useMemo` memoizes a computed value; `useCallback` memoizes a function reference — both to avoid unnecessary recalculation/re-renders.

15. **What are React Fragments?**
    `<React.Fragment>` or `<>...</>` lets you group elements without adding an extra DOM node.

16. **What is component lifecycle (in class components)?**
    Mounting (`componentDidMount`), updating (`componentDidUpdate`), unmounting (`componentWillUnmount`).

17. **What is lifting state up?**
    Moving shared state to the closest common ancestor so multiple child components can access/update it via props.

18. **What is React Router used for?**
    Client-side routing/navigation in single-page React apps without full page reloads.

19. **What is the difference between `useEffect` and `useLayoutEffect`?**
    `useEffect` runs asynchronously after paint; `useLayoutEffect` runs synchronously before the browser paints (used for DOM measurements).

20. **What are custom hooks?**
    Reusable functions starting with `use` that encapsulate stateful logic shareable across components.

**Output-Based**

21. **What will this render, and how many times does the console.log fire?**
```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  console.log('render');
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
**Answer:** Logs "render" once on initial mount, then once every time the button is clicked (state update triggers re-render).

22. **What is wrong/what happens here?**
```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```
**Answer:** Infinite loop — updating `count` inside an effect that depends on `count` re-triggers the effect endlessly.

23. **What does this log on mount?**
```jsx
useEffect(() => {
  console.log('mounted');
  return () => console.log('unmounted');
}, []);
```
**Answer:** Logs `"mounted"` once when the component mounts; `"unmounted"` logs only when the component is removed from the DOM.

24. **What's the output order?**
```jsx
console.log('A');
useEffect(() => console.log('B'));
console.log('C');
```
**Answer:** `A`, `C`, `B` — the render body runs first (A, C are synchronous), then `useEffect` runs after paint.

25. **Given this state update, what value does `count` log?**
```jsx
const [count, setCount] = useState(0);
const handleClick = () => {
  setCount(count + 1);
  console.log(count);
};
```
**Answer:** Logs the **old** value (e.g., `0` on first click) — `setCount` is asynchronous and doesn't update `count` in the current closure immediately.

**Scenario-Based**

26. **A list re-renders entirely every time you add one item, causing lag. How do you optimize it?**
   Use proper unique `key` props, wrap list items in `React.memo`, and avoid inline function/object props that break memoization.

27. **You need to fetch data when a component mounts and clean up a subscription when it unmounts. How?**
   Use `useEffect` with `[]` dependency, and return a cleanup function that unsubscribes/cancels the request (e.g., `AbortController`).

28. **Two sibling components need to share and update the same state. How do you structure this?**
   Lift the state up to their common parent and pass it down via props, or use Context/a state library if it gets deeply nested.

29. **Your app has a large form with 20 fields, and every keystroke re-renders the entire form. How do you fix it?**
   Split into smaller controlled components, use `React.memo`, or use a library like React Hook Form which minimizes re-renders via uncontrolled refs.

30. **How would you conditionally render a component only if a user is logged in?**
   `{isLoggedIn ? <Dashboard /> : <Login />}` or `{isLoggedIn && <Dashboard />}`, typically driven by auth state from Context or props.

---

## 3. Python (30 Questions)

**Conceptual**

1. **What is the difference between a list and a tuple?**
   Lists are mutable, tuples are immutable; tuples are slightly faster and hashable (can be dict keys).

2. **What is a dictionary in Python?**
   An unordered (insertion-ordered since 3.7) collection of key-value pairs, `{key: value}`.

3. **Difference between `is` and `==`.**
   `==` compares values; `is` compares object identity (same memory reference).

4. **What are `*args` and `**kwargs`?**
   `*args` collects extra positional arguments as a tuple; `**kwargs` collects extra keyword arguments as a dict.

5. **What is a lambda function?**
   An anonymous, single-expression function: `lambda x: x * 2`.

6. **What is list comprehension?**
   A concise way to create lists: `[x*2 for x in range(5)]`.

7. **What is the difference between `deepcopy` and `copy`?**
   `copy` creates a shallow copy (nested objects still referenced); `deepcopy` recursively copies everything.

8. **What are Python decorators?**
   Functions that wrap another function to extend its behavior without modifying its code, using `@decorator` syntax.

9. **What is the GIL (Global Interpreter Lock)?**
   A mutex allowing only one thread to execute Python bytecode at a time, limiting true multithreading for CPU-bound tasks.

10. **Difference between `range()` in Python 2 vs Python 3.**
    Python 2's `range()` returns a list; Python 3's returns a lazy iterator (generator-like), `xrange` was the Python 2 equivalent.

11. **What is a generator?**
    A function using `yield` that produces values lazily, one at a time, saving memory.

12. **What is exception handling in Python?**
    Using `try/except/else/finally` blocks to catch and handle runtime errors gracefully.

13. **What is the difference between `@staticmethod` and `@classmethod`?**
    `staticmethod` doesn't receive `self`/`cls`; `classmethod` receives `cls` and can access/modify class state.

14. **What is `__init__` in a class?**
    The constructor method, called automatically when an object is instantiated.

15. **What is inheritance in Python?**
    A class (child) can inherit attributes/methods from another class (parent) using `class Child(Parent):`.

16. **What are Python's mutable and immutable data types?**
    Mutable: list, dict, set. Immutable: int, float, string, tuple, bool.

17. **What is the difference between `append()` and `extend()` on lists?**
    `append()` adds a single element (even if it's a list, as one item); `extend()` adds each element of an iterable individually.

18. **What is PEP 8?**
    Python's official style guide for writing readable, consistent code.

19. **What is a virtual environment and why use one?**
    An isolated Python environment for managing project-specific dependencies without conflicts.

20. **What is the difference between `__str__` and `__repr__`?**
    `__str__` gives a readable string for end users; `__repr__` gives an unambiguous representation for debugging/developers.

**Output-Based**

21. **What is the output?**
```python
def add(a, b=[]):
    b.append(a)
    return b
print(add(1))
print(add(2))
```
**Answer:** `[1]` then `[1, 2]` — default mutable arguments persist across calls (classic Python gotcha).

22. **What is the output?**
```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```
**Answer:** `[1, 2, 3, 4]` — lists are mutable and assigned by reference; `y` and `x` point to the same list.

23. **What is the output?**
```python
print(2 == 2.0)
print(2 is 2.0)
```
**Answer:** `True` then `False` — value equality holds, but they're different types/objects in memory.

24. **What is the output?**
```python
for i in range(3):
    if i == 1:
        continue
    print(i)
```
**Answer:** `0` then `2` — `continue` skips the print when `i == 1`.

25. **What is the output?**
```python
print("abc"[::-1])
```
**Answer:** `"cba"` — slice notation `[::-1]` reverses the string.

26. **What is the output?**
```python
a = (1, 2, 3)
a[0] = 5
```
**Answer:** Raises `TypeError: 'tuple' object does not support item assignment` — tuples are immutable.

27. **What is the output?**
```python
print(bool(""), bool("0"), bool(0), bool([]))
```
**Answer:** `False True False False` — empty string/0/empty list are falsy, but `"0"` is a non-empty string, so it's truthy.

28. **What is the output?**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 1
        return x
    return inner()
print(outer())
```
**Answer:** `11` — `nonlocal` lets `inner()` modify the enclosing scope's `x`.

29. **What is the output?**
```python
print(sorted([3, 1, 2], reverse=True))
```
**Answer:** `[3, 2, 1]`.

30. **What is the output?**
```python
try:
    print(1/0)
except ZeroDivisionError:
    print("Error")
finally:
    print("Done")
```
**Answer:** `Error` then `Done` — exception caught, then `finally` always executes.

**Scenario-Based**

- **You need to read a huge file without loading it fully into memory. How?**
  Use a generator or iterate line by line: `for line in open('file.txt'): process(line)`, or use `yield` in a custom reader.

- **You need to remove duplicates from a list while preserving order. How?**
  `list(dict.fromkeys(my_list))` — dicts preserve insertion order and keys are unique.

- **You're given a list of dictionaries and need to sort by a specific key. How?**
  `sorted(data, key=lambda x: x['field'])`.

- **How would you handle a function that might raise multiple different exceptions?**
  Use multiple `except` blocks (or a tuple of exception types) to handle each case distinctly, with a generic `except Exception` as a fallback.

---

## 4. SQL (30 Questions)

**Conceptual**

1. **What is the difference between `WHERE` and `HAVING`?**
   `WHERE` filters rows before grouping; `HAVING` filters groups after `GROUP BY`.

2. **Difference between `INNER JOIN` and `LEFT JOIN`.**
   `INNER JOIN` returns only matching rows in both tables; `LEFT JOIN` returns all rows from the left table plus matches from the right (NULL if no match).

3. **What is a primary key vs foreign key?**
   Primary key uniquely identifies a row in its table; foreign key references a primary key in another table to enforce referential integrity.

4. **What is normalization?**
   Organizing data to reduce redundancy and improve integrity, typically through 1NF, 2NF, 3NF forms.

5. **What is an index and why use one?**
   A data structure that speeds up data retrieval on a table at the cost of extra storage and slower writes.

6. **Difference between `DELETE`, `TRUNCATE`, and `DROP`.**
   `DELETE` removes rows (can be rolled back, triggers fire), `TRUNCATE` removes all rows fast (can't filter, resets identity), `DROP` removes the entire table/object.

7. **What is a subquery?**
   A query nested inside another query, used in `SELECT`, `WHERE`, or `FROM` clauses.

8. **What is the difference between `UNION` and `UNION ALL`?**
   `UNION` combines results and removes duplicates; `UNION ALL` keeps all rows including duplicates (faster).

9. **What are aggregate functions?**
   Functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` that operate on a set of rows to return a single value.

10. **What is a self join?**
    A table joined with itself, often used for hierarchical/comparative data (e.g., employees and managers in the same table).

11. **What is a `GROUP BY` clause used for?**
    Groups rows sharing a value in specified columns so aggregate functions can be applied per group.

12. **What is the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`?**
    `ROW_NUMBER()` gives unique sequential numbers; `RANK()` gives same rank to ties but skips subsequent numbers; `DENSE_RANK()` gives same rank to ties without skipping.

13. **What is a view in SQL?**
    A virtual table based on a stored query, used to simplify complex queries or restrict data access.

14. **What is a stored procedure?**
    A precompiled set of SQL statements stored in the database, callable by name, often used for reusable business logic.

15. **What is ACID in databases?**
    Atomicity, Consistency, Isolation, Durability — properties ensuring reliable transaction processing.

16. **What is a composite key?**
    A primary key made up of two or more columns together uniquely identifying a row.

17. **What is the difference between `CHAR` and `VARCHAR`?**
    `CHAR` is fixed-length (padded with spaces); `VARCHAR` is variable-length (uses only as much space as needed).

18. **What is a `NULL` value and how is it handled in comparisons?**
    Represents missing/unknown data; can't be compared with `=`, must use `IS NULL` / `IS NOT NULL`.

19. **What is the difference between clustered and non-clustered index?**
    Clustered index determines the physical order of data in the table (one per table); non-clustered index is a separate structure pointing to data (multiple allowed).

20. **What is a transaction?**
    A sequence of operations executed as a single unit — either all succeed (`COMMIT`) or all fail (`ROLLBACK`).

**Output/Query-Based**

21. **Given `Employees(id, name, salary, dept_id)`, write a query to find the 2nd highest salary.**
```sql
SELECT MAX(salary) FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);
```

22. **Write a query to find duplicate emails in a `Users(id, email)` table.**
```sql
SELECT email, COUNT(*) FROM Users
GROUP BY email
HAVING COUNT(*) > 1;
```

23. **Given this table, what is the output of `SELECT dept, COUNT(*) FROM Employees GROUP BY dept;`**
   (Table: 3 rows in "HR", 2 rows in "IT")
**Answer:** `HR | 3` and `IT | 2` — one row per distinct group with its count.

24. **What does this query return?**
```sql
SELECT * FROM Employees WHERE salary IS NULL;
```
**Answer:** All rows where `salary` has no value (NULL) — note `salary = NULL` would NOT work and always returns no rows.

25. **Find employees who earn more than the average salary.**
```sql
SELECT * FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);
```

26. **What's the difference in row count: `INNER JOIN` vs `LEFT JOIN` when the right table has no matches for some left rows?**
**Answer:** `INNER JOIN` excludes unmatched left rows entirely; `LEFT JOIN` includes them with NULLs for right-table columns — so `LEFT JOIN` returns equal or more rows.

27. **Write a query to get the top 3 highest-paid employees per department.**
```sql
SELECT * FROM (
  SELECT *, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
  FROM Employees
) t
WHERE rnk <= 3;
```

28. **What is the output of `SELECT COUNT(*) FROM Employees WHERE dept_id IS NULL;`?**
**Answer:** The count of rows where `dept_id` has no value assigned.

29. **Write a query to find employees who have not made any orders (using `Employees` and `Orders` tables).**
```sql
SELECT e.* FROM Employees e
LEFT JOIN Orders o ON e.id = o.emp_id
WHERE o.id IS NULL;
```

30. **Write a query to count how many employees joined each year, given a `join_date` column.**
```sql
SELECT YEAR(join_date) AS year, COUNT(*) 
FROM Employees
GROUP BY YEAR(join_date);
```

**Scenario-Based**

- **A query that used to run fast is now slow after the table grew to millions of rows. What do you check first?**
  Check if the columns in `WHERE`/`JOIN` are indexed, review the execution plan, and check for unnecessary `SELECT *` or missing `LIMIT`.

- **You need to merge data from two tables where IDs might not always match. Which join and why?**
  `FULL OUTER JOIN` if you need all records from both sides regardless of match, or `LEFT`/`RIGHT JOIN` if you only care about one side plus matches.

- **How do you prevent duplicate rows from being inserted into a table?**
  Add a `UNIQUE` constraint (or primary key) on the relevant column(s), or use `INSERT ... ON DUPLICATE KEY UPDATE` / `ON CONFLICT DO NOTHING`.

---

## 5. Machine / Coding Test Questions (Practical Round)

Common fresher coding-round problems — practice writing these in your strongest language (JS or Python):

1. Reverse a string without using built-in reverse functions.
2. Check if a string is a palindrome.
3. Find the factorial of a number (iterative and recursive).
4. Find the Fibonacci sequence up to N terms.
5. Check if a number is prime.
6. Find the largest/smallest element in an array without built-in functions.
7. Remove duplicates from an array.
8. Find the second largest number in an array.
9. Count the frequency of each character in a string.
10. Check if two strings are anagrams of each other.
11. Find the missing number in an array of 1 to N.
12. Merge two sorted arrays into one sorted array.
13. Implement binary search on a sorted array.
14. Implement bubble sort / selection sort from scratch.
15. Find all pairs in an array that sum to a target value (Two Sum problem).
16. Flatten a nested array.
17. Find the maximum sum of a contiguous subarray (Kadane's Algorithm).
18. Rotate an array by K positions.
19. Check for balanced parentheses in a string using a stack.
20. Implement a function to find the intersection of two arrays.
21. Write a function to debounce another function (JS-specific).
22. Implement a simple LRU cache.
23. Count vowels/consonants in a string.
24. Find the longest word in a sentence.
25. Convert a list of tuples into a dictionary (Python-specific).
26. Write a SQL query and a script to find the Nth highest value programmatically (without SQL).
27. Implement FizzBuzz (print Fizz for multiples of 3, Buzz for 5, FizzBuzz for both).
28. Find duplicate elements in an array and their count.
29. Implement a queue using two stacks.
30. Write a function to check if a linked list has a cycle.

**Tips for the machine test round:**
- Practice explaining your approach out loud before coding (interviewers grade thought process, not just correct output).
- Know Big-O complexity of your solution — always be ready to say "this is O(n)" etc.
- Test your code mentally with edge cases: empty input, single element, duplicates, negative numbers.
- If stuck, start with a brute-force solution first, then optimize — a working O(n²) beats a broken "smart" solution.

---

*Total: 120 core questions (30 x 4 topics) + 30 coding-round problems. Practice writing code by hand or on a whiteboard occasionally — many companies still do this in interviews.*
