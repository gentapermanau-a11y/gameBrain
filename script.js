/* ============================================================================
   QUIZ BATTLE: BOSS RUSH — Vanilla JavaScript Game Engine
   ============================================================================ */

const STORAGE_KEY = 'quiz_battle_boss_rush_v1';

/* ----------------------------------------------------------------------------
   1. BOSS DATABASE (25 UNIQUE BOSSES)
   ---------------------------------------------------------------------------- */
const BOSSES = [
  { id: 1, level: 1, name: 'Shadow Knight', hp: 120, atk: 16, difficulty: 'Novice', aura: '#60a5fa', body: '#1e293b', trim: '#64748b', eye: '#38bdf8', archetype: 'knight', desc: 'A spectral sentinel guarding the outer gate of knowledge.' },
  { id: 2, level: 2, name: 'Cyber Reaper', hp: 135, atk: 17, difficulty: 'Novice', aura: '#22d3ee', body: '#0f172a', trim: '#06b6d4', eye: '#67e8f9', archetype: 'reaper', desc: 'Slices through sloppy logic with a neon data scythe.' },
  { id: 3, level: 3, name: 'Flame Tyrant', hp: 150, atk: 18, difficulty: 'Novice', aura: '#f97316', body: '#7c2d12', trim: '#fb923c', eye: '#fde047', archetype: 'horn_lord', desc: 'Forged in volcanic servers, burning with relentless heat.' },
  { id: 4, level: 4, name: 'Frost Queen', hp: 165, atk: 19, difficulty: 'Novice', aura: '#7dd3fc', body: '#1e3a8a', trim: '#bae6fd', eye: '#e0f2fe', archetype: 'queen', desc: 'Commands glacial precision and freezes slow thinkers.' },
  { id: 5, level: 5, name: 'Thunder Beast', hp: 180, atk: 20, difficulty: 'Adept', aura: '#facc15', body: '#312e81', trim: '#fde047', eye: '#fef08a', archetype: 'beast', desc: 'Strikes with high-voltage reflexes across the arena.' },
  { id: 6, level: 6, name: 'Void Samurai', hp: 195, atk: 21, difficulty: 'Adept', aura: '#818cf8', body: '#1e1b4b', trim: '#a5b4fc', eye: '#f43f5e', archetype: 'samurai', desc: 'Master of disciplined code and razor-sharp katana strikes.' },
  { id: 7, level: 7, name: 'Iron Golem', hp: 215, atk: 22, difficulty: 'Adept', aura: '#94a3b8', body: '#334155', trim: '#cbd5e1', eye: '#fbbf24', archetype: 'golem', desc: 'An armored bastion built from heavy legacy hardware.' },
  { id: 8, level: 8, name: 'Dark Mage', hp: 225, atk: 23, difficulty: 'Adept', aura: '#a855f7', body: '#2e1065', trim: '#c084fc', eye: '#f0abfc', archetype: 'mage', desc: 'Weaves arcane algorithms and bewildering illusions.' },
  { id: 9, level: 9, name: 'Plasma Dragon', hp: 245, atk: 24, difficulty: 'Adept', aura: '#38bdf8', body: '#0c4a6e', trim: '#38bdf8', eye: '#fde047', archetype: 'dragon', desc: 'Soars above data streams, breathing superheated plasma.' },
  { id: 10, level: 10, name: 'Toxic Mutant', hp: 260, atk: 25, difficulty: 'Veteran', aura: '#4ade80', body: '#14532d', trim: '#86efac', eye: '#bef264', archetype: 'mutant', desc: 'Corrupted by rogue bugs and hazardous syntax leaks.' },
  { id: 11, level: 11, name: 'Crimson Demon', hp: 275, atk: 26, difficulty: 'Veteran', aura: '#ef4444', body: '#450a0a', trim: '#f87171', eye: '#fef08a', archetype: 'demon', desc: 'A ruthless fiend that punishes every hesitation.' },
  { id: 12, level: 12, name: 'Cyber Ninja', hp: 290, atk: 26, difficulty: 'Veteran', aura: '#2dd4bf', body: '#111827', trim: '#14b8a6', eye: '#5eead4', archetype: 'ninja', desc: 'Moves unseen between packets, striking at weak spots.' },
  { id: 13, level: 13, name: 'Storm Lord', hp: 305, atk: 27, difficulty: 'Veteran', aura: '#60a5fa', body: '#172554', trim: '#93c5fd', eye: '#fef08a', archetype: 'storm', desc: 'Summons tempests of static and roaring thunderclaps.' },
  { id: 14, level: 14, name: 'Ancient Guardian', hp: 320, atk: 28, difficulty: 'Veteran', aura: '#fbbf24', body: '#422006', trim: '#fcd34d', eye: '#60a5fa', archetype: 'guardian', desc: 'Relic automaton inscribed with primordial logic runes.' },
  { id: 15, level: 15, name: 'Blood Moon Warrior', hp: 335, atk: 29, difficulty: 'Master', aura: '#f43f5e', body: '#4c0519', trim: '#fb7185', eye: '#fde047', archetype: 'moon_warrior', desc: 'Draws relentless strength from the crimson eclipse.' },
  { id: 16, level: 16, name: 'Phantom King', hp: 350, atk: 30, difficulty: 'Master', aura: '#a78bfa', body: '#1e1b4b', trim: '#ddd6fe', eye: '#38bdf8', archetype: 'phantom', desc: 'Sovereign of forgotten archives and haunted memory.' },
  { id: 17, level: 17, name: 'Lava Titan', hp: 365, atk: 31, difficulty: 'Master', aura: '#fb923c', body: '#431407', trim: '#fdba74', eye: '#fef08a', archetype: 'titan', desc: 'Colossus of molten core rock and seismic impact.' },
  { id: 18, level: 18, name: 'Ice Dragon', hp: 380, atk: 31, difficulty: 'Master', aura: '#67e8f9', body: '#164e63', trim: '#a5f3fc', eye: '#ffffff', archetype: 'ice_dragon', desc: 'Apex wyrm of eternal frost and crystalline scales.' },
  { id: 19, level: 19, name: 'Mechanical Beast', hp: 395, atk: 32, difficulty: 'Master', aura: '#f59e0b', body: '#27272a', trim: '#fbbf24', eye: '#ef4444', archetype: 'mech_beast', desc: 'Steam-driven clockwork predator calibrated for combat.' },
  { id: 20, level: 20, name: 'Chaos Lord', hp: 410, atk: 33, difficulty: 'Legend', aura: '#c084fc', body: '#3b0764', trim: '#e879f9', eye: '#fde047', archetype: 'chaos', desc: 'Bends arena rules with unstable dark singularity orbs.' },
  { id: 21, level: 21, name: 'Moon Rabbit', hp: 420, atk: 33, difficulty: 'Cute Mythic', aura: '#f9a8d4', body: '#f8fafc', trim: '#fbcfe8', eye: '#ec4899', archetype: 'rabbit', cute: true, desc: 'Adorable lunar guardian swinging a star-powered mochi mallet.' },
  { id: 22, level: 22, name: 'Cute Slime King', hp: 430, atk: 34, difficulty: 'Cute Mythic', aura: '#34d399', body: '#10b981', trim: '#a7f3d0', eye: '#0f172a', archetype: 'slime_king', cute: true, desc: 'Bouncy royal jelly monarch wearing a tiny gleaming crown.' },
  { id: 23, level: 23, name: 'Little Ghost', hp: 445, atk: 34, difficulty: 'Cute Mythic', aura: '#93c5fd', body: '#e2e8f0', trim: '#bfdbfe', eye: '#1e293b', archetype: 'little_ghost', cute: true, desc: 'Bashful spectral cutie with rosy cheeks and spooky charm.' },
  { id: 24, level: 24, name: 'Magical Cat Boss', hp: 460, atk: 35, difficulty: 'Cute Mythic', aura: '#fde047', body: '#fed7aa', trim: '#fb923c', eye: '#3b82f6', archetype: 'cat_boss', cute: true, desc: 'Enchanted feline sorceress casting cosmic whisker beams.' },
  { id: 25, level: 25, name: 'Final Overlord', hp: 500, atk: 38, difficulty: 'Final Boss', aura: '#facc15', body: '#090d16', trim: '#ef4444', eye: '#facc15', archetype: 'overlord', desc: 'Supreme Sovereign of Boss Rush. Only true masters prevail.' }
];

/* ----------------------------------------------------------------------------
   2. QUIZ CATEGORIES & QUESTION BANK (300 QUESTIONS)
   ---------------------------------------------------------------------------- */
const MATERIALS = [
  { id: 'ALL MATERIAL', name: 'ALL MATERIAL', desc: 'Random mix drawn from all 10 knowledge realms.', icon: 'layers' },
  { id: 'RPL', name: 'RPL', desc: 'Software engineering, SDLC, UML, testing, and agile methods.', icon: 'wrench' },
  { id: 'Programming', name: 'Programming', desc: 'Algorithms, data structures, OOP, and coding fundamentals.', icon: 'code' },
  { id: 'Technology', name: 'Technology', desc: 'Cloud computing, AI, IoT, cybersecurity, and modern tech.', icon: 'cpu' },
  { id: 'Database', name: 'Database', desc: 'SQL queries, normalization, keys, ACID, and NoSQL.', icon: 'database' },
  { id: 'HTML & CSS', name: 'HTML & CSS', desc: 'Semantic markup, Flexbox, Grid, responsive UI, and styling.', icon: 'layout' },
  { id: 'JavaScript', name: 'JavaScript', desc: 'ES6+, DOM events, closures, async/await, and browser APIs.', icon: 'terminal' },
  { id: 'Computer', name: 'Computer', desc: 'CPU architecture, RAM, OS kernels, binary, and hardware.', icon: 'monitor' },
  { id: 'Networking', name: 'Networking', desc: 'TCP/IP, DNS, HTTP, OSI layers, routers, and subnetting.', icon: 'globe' },
  { id: 'School Subjects', name: 'School Subjects', desc: 'Mathematics, physics, biology, chemistry, and history.', icon: 'book' },
  { id: 'General Knowledge', name: 'General Knowledge', desc: 'World geography, culture, landmarks, and notable facts.', icon: 'compass' }
];

const QUESTION_BANK = [
  // ===========================================================================
  // 1. RPL (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'RPL', difficulty: 'easy', question: 'What does SDLC stand for in software engineering?', choices: ['Software Development Life Cycle', 'System Data Logic Control', 'Structured Design Language Code', 'Server Deployment Load Check'], correctIndex: 0, explanation: 'SDLC stands for Software Development Life Cycle, the structured process for building software.' },
  { category: 'RPL', difficulty: 'easy', question: 'Which SDLC model executes phases strictly one after another like a cascade?', choices: ['Waterfall Model', 'Agile Scrum', 'Spiral Model', 'Kanban Flow'], correctIndex: 0, explanation: 'The Waterfall model progresses sequentially through requirements, design, implementation, and testing.' },
  { category: 'RPL', difficulty: 'easy', question: 'Which UML diagram illustrates actors interacting with system features?', choices: ['Use Case Diagram', 'Sequence Diagram', 'Deployment Diagram', 'Component Diagram'], correctIndex: 0, explanation: 'Use Case diagrams capture functional requirements by showing actors and their interactions with use cases.' },
  { category: 'RPL', difficulty: 'easy', question: 'What is the main purpose of version control systems like Git?', choices: ['Track and manage code changes over time', 'Compile binary executables faster', 'Design database schemas visually', 'Host web pages without HTML'], correctIndex: 0, explanation: 'Git tracks file history, enables branching, and coordinates collaborative software development.' },
  { category: 'RPL', difficulty: 'easy', question: 'What does UML stand for in software modeling?', choices: ['Unified Modeling Language', 'Universal Machine Logic', 'User Management Layer', 'Unit Module Linker'], correctIndex: 0, explanation: 'UML (Unified Modeling Language) is a standardized visual language for designing software systems.' },
  { category: 'RPL', difficulty: 'easy', question: 'Which role in Scrum represents the voice of the customer and manages the Product Backlog?', choices: ['Product Owner', 'Database Admin', 'Network Engineer', 'Hardware Tester'], correctIndex: 0, explanation: 'The Product Owner prioritizes backlog items to maximize product value.' },
  { category: 'RPL', difficulty: 'easy', question: 'What is a "bug" in software development?', choices: ['An error or flaw causing unexpected behavior', 'A hardware cooling fan', 'A shortcut key in an editor', 'A type of cloud server'], correctIndex: 0, explanation: 'A software bug is a defect in code or design that produces incorrect results.' },
  { category: 'RPL', difficulty: 'easy', question: 'Which Git command downloads a remote repository to your local machine for the first time?', choices: ['git clone', 'git commit', 'git merge', 'git status'], correctIndex: 0, explanation: 'git clone creates a local copy of an existing remote repository.' },
  { category: 'RPL', difficulty: 'easy', question: 'What is the first phase of the Software Development Life Cycle?', choices: ['Requirements Gathering & Analysis', 'Maintenance', 'Final Deployment', 'Decommissioning'], correctIndex: 0, explanation: 'SDLC begins by gathering and analyzing user and business requirements.' },
  { category: 'RPL', difficulty: 'easy', question: 'Which document captures a quick clickable preview of a user interface before coding?', choices: ['Wireframe / Prototype', 'Kernel Dump', 'Binary Patch', 'DNS Zone File'], correctIndex: 0, explanation: 'Wireframes and prototypes visualize UI layout and flow early in the design phase.' },

  // Medium (10)
  { category: 'RPL', difficulty: 'medium', question: 'In Agile Scrum, how long does a typical Sprint usually last?', choices: ['1 to 4 weeks', '6 to 12 months', '1 to 2 hours', '100 working days'], correctIndex: 0, explanation: 'Scrum Sprints are time-boxed iterations typically lasting between 1 and 4 weeks.' },
  { category: 'RPL', difficulty: 'medium', question: 'Which testing technique evaluates software behavior without looking at internal source code?', choices: ['Black-Box Testing', 'White-Box Testing', 'Unit Profiling', 'Static Linting'], correctIndex: 0, explanation: 'Black-box testing validates inputs and outputs against specifications without inspecting internal code.' },
  { category: 'RPL', difficulty: 'medium', question: 'What does SRS stand for in requirements engineering?', choices: ['Software Requirements Specification', 'System Runtime Standard', 'Structured Repository Service', 'Sequential Release Schedule'], correctIndex: 0, explanation: 'An SRS document formally defines the functional and non-functional requirements of a software system.' },
  { category: 'RPL', difficulty: 'medium', question: 'Which UML diagram focuses on the time-ordered exchange of messages between objects?', choices: ['Sequence Diagram', 'Class Diagram', 'State Machine Diagram', 'Package Diagram'], correctIndex: 0, explanation: 'Sequence diagrams visualize lifelines and chronological message passing between objects.' },
  { category: 'RPL', difficulty: 'medium', question: 'What does CI/CD stand for in modern DevOps workflows?', choices: ['Continuous Integration / Continuous Delivery', 'Central Index / Code Deployment', 'Compiled Interface / Cache Data', 'Client Input / Console Debug'], correctIndex: 0, explanation: 'CI/CD automates building, testing, and deploying code changes reliably.' },
  { category: 'RPL', difficulty: 'medium', question: 'Which UML diagram shows classes, attributes, methods, and relationships like inheritance?', choices: ['Class Diagram', 'Activity Diagram', 'Timing Diagram', 'Object Diagram'], correctIndex: 0, explanation: 'Class diagrams model static object-oriented structure and class relationships.' },
  { category: 'RPL', difficulty: 'medium', question: 'What is the purpose of Unit Testing?', choices: ['Verify individual functions or modules work in isolation', 'Test server rack power consumption', 'Check user satisfaction surveys', 'Compress deployment bundles'], correctIndex: 0, explanation: 'Unit tests validate small, isolated units of code for correctness.' },
  { category: 'RPL', difficulty: 'medium', question: 'In Kanban boards, what does a WIP limit control?', choices: ['Maximum tasks allowed in a workflow stage at once', 'Maximum file upload size', 'Minimum password length', 'Number of database tables'], correctIndex: 0, explanation: 'Work-In-Progress (WIP) limits prevent bottlenecks and encourage finishing tasks.' },
  { category: 'RPL', difficulty: 'medium', question: 'What is "Code Refactoring"?', choices: ['Improving internal code structure without changing external behavior', 'Deleting all automated tests', 'Rewriting an app in assembly language', 'Changing UI font colors only'], correctIndex: 0, explanation: 'Refactoring cleans up code readability and design while preserving functionality.' },
  { category: 'RPL', difficulty: 'medium', question: 'Which Agile ceremony happens daily for ~15 minutes to sync team progress and blockers?', choices: ['Daily Stand-up', 'Sprint Retrospective', 'Backlog Grooming', 'Release Postmortem'], correctIndex: 0, explanation: 'The Daily Stand-up aligns the team quickly on yesterday, today, and any blockers.' },

  // Hard (10)
  { category: 'RPL', difficulty: 'hard', question: 'In SOLID principles, what does the "O" stand for?', choices: ['Open/Closed Principle', 'Object-Oriented Binding', 'Operational Override', 'Optimal Output Pattern'], correctIndex: 0, explanation: 'The Open/Closed Principle states software entities should be open for extension but closed for modification.' },
  { category: 'RPL', difficulty: 'hard', question: 'Which software metric measures the number of linearly independent paths through code?', choices: ['Cyclomatic Complexity', 'Coupling Index', 'Bus Factor', 'Halstead Volume'], correctIndex: 0, explanation: 'McCabe Cyclomatic Complexity counts independent execution paths to assess code testability.' },
  { category: 'RPL', difficulty: 'hard', question: 'What is Regression Testing designed to verify?', choices: ['New changes did not break existing features', 'Hardware meets thermal limits', 'UI colors match brand guidelines', 'Users can register without email'], correctIndex: 0, explanation: 'Regression testing re-runs existing tests after updates to ensure no unintended side effects occurred.' },
  { category: 'RPL', difficulty: 'hard', question: 'In software architecture, high cohesion and low coupling lead to what outcome?', choices: ['More maintainable and modular code', 'Tightly locked global dependencies', 'Slower compilation speed', 'Single-file monolithic scripts'], correctIndex: 0, explanation: 'High cohesion keeps related logic together while low coupling minimizes dependencies between modules.' },
  { category: 'RPL', difficulty: 'hard', question: 'Which design pattern ensures a class has only one instance and provides a global access point?', choices: ['Singleton Pattern', 'Observer Pattern', 'Strategy Pattern', 'Decorator Pattern'], correctIndex: 0, explanation: 'The Singleton pattern restricts instantiation of a class to a single shared object.' },
  { category: 'RPL', difficulty: 'hard', question: 'What does the Liskov Substitution Principle (LSP) require?', choices: ['Subtypes must be substitutable for their base types without breaking behavior', 'Every class must have at least two constructors', 'Interfaces must contain private fields', 'Database calls must run inside controllers'], correctIndex: 0, explanation: 'LSP guarantees derived classes honor the contract of their parent class.' },
  { category: 'RPL', difficulty: 'hard', question: 'Which testing pyramid layer sits at the base with the highest count and fastest execution?', choices: ['Unit Tests', 'End-to-End UI Tests', 'Manual Exploratory Tests', 'Penetration Audits'], correctIndex: 0, explanation: 'Unit tests form the wide base of the testing pyramid because they are fast and inexpensive.' },
  { category: 'RPL', difficulty: 'hard', question: 'What is "Technical Debt" in software engineering?', choices: ['Future rework cost caused by choosing quick shortcuts over clean design', 'Unpaid cloud hosting invoices', 'Expired SSL certificates', 'Hardware depreciation on developer laptops'], correctIndex: 0, explanation: 'Technical debt accumulates when teams trade long-term maintainability for short-term speed.' },
  { category: 'RPL', difficulty: 'hard', question: 'Which pattern decouples event publishers from subscribers using one-to-many notifications?', choices: ['Observer Pattern', 'Builder Pattern', 'Adapter Pattern', 'Flyweight Pattern'], correctIndex: 0, explanation: 'The Observer pattern notifies registered dependents automatically when subject state changes.' },
  { category: 'RPL', difficulty: 'hard', question: 'What does "Mutation Testing" evaluate?', choices: ['Whether a test suite can detect small injected faults in code', 'How fast CSS animations render', 'How many branches exist in Git', 'Database backup compression ratios'], correctIndex: 0, explanation: 'Mutation testing introduces tiny code changes (mutants) to verify test effectiveness.' },

  // ===========================================================================
  // 2. Programming (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'Programming', difficulty: 'easy', question: 'Which data structure follows the LIFO (Last In, First Out) principle?', choices: ['Stack', 'Queue', 'Linked List', 'Hash Table'], correctIndex: 0, explanation: 'A Stack pushes and pops elements from the top, so the last item added is removed first.' },
  { category: 'Programming', difficulty: 'easy', question: 'What is a variable in programming?', choices: ['A named storage location for data', 'A physical cable inside a PC', 'A syntax error in a compiler', 'A type of monitor display'], correctIndex: 0, explanation: 'Variables store values in memory under an identifier so programs can read and modify them.' },
  { category: 'Programming', difficulty: 'easy', question: 'Which loop guarantees the body executes at least once before checking the condition?', choices: ['do-while loop', 'for loop', 'while loop', 'foreach loop'], correctIndex: 0, explanation: 'A do-while loop runs its block first and evaluates the loop condition afterward.' },
  { category: 'Programming', difficulty: 'easy', question: 'What boolean result does (true && false) evaluate to?', choices: ['false', 'true', 'null', '1'], correctIndex: 0, explanation: 'Logical AND (&&) returns true only when both operands are true.' },
  { category: 'Programming', difficulty: 'easy', question: 'In zero-indexed arrays, what index points to the first element?', choices: ['0', '1', '-1', '2'], correctIndex: 0, explanation: 'Most programming languages index arrays starting at 0.' },
  { category: 'Programming', difficulty: 'easy', question: 'What is a "comment" in source code used for?', choices: ['Explaining code to humans without affecting execution', 'Speeding up CPU clock cycles', 'Connecting to Wi-Fi networks', 'Generating SQL tables automatically'], correctIndex: 0, explanation: 'Comments are ignored by compilers and interpreters and document intent for developers.' },
  { category: 'Programming', difficulty: 'easy', question: 'Which data type typically stores whole numbers without decimals?', choices: ['Integer (int)', 'Float', 'Boolean', 'String'], correctIndex: 0, explanation: 'Integers represent whole numbers such as -5, 0, and 42.' },
  { category: 'Programming', difficulty: 'easy', question: 'What does the modulo operator (%) return?', choices: ['The remainder of integer division', 'The square root of a number', 'The percentage of CPU load', 'The average of two numbers'], correctIndex: 0, explanation: 'For example, 10 % 3 returns 1 because 10 divided by 3 leaves a remainder of 1.' },
  { category: 'Programming', difficulty: 'easy', question: 'Which control statement chooses between true and false branches?', choices: ['if-else statement', 'break statement', 'import statement', 'return statement'], correctIndex: 0, explanation: 'An if-else statement executes code conditionally based on a boolean expression.' },
  { category: 'Programming', difficulty: 'easy', question: 'What does a Compiler do?', choices: ['Translates high-level source code into machine code', 'Cools down the processor', 'Formats JSON text in browsers', 'Encrypts USB drives'], correctIndex: 0, explanation: 'Compilers translate source code into executable binary instructions ahead of execution.' },

  // Medium (10)
  { category: 'Programming', difficulty: 'medium', question: 'What is the average time complexity of Binary Search on a sorted array?', choices: ['O(log n)', 'O(n)', 'O(n^2)', 'O(1)'], correctIndex: 0, explanation: 'Binary search halves the search interval on every comparison, yielding O(log n) complexity.' },
  { category: 'Programming', difficulty: 'medium', question: 'Which OOP concept lets a child class provide its own implementation of a parent method?', choices: ['Polymorphism / Overriding', 'Encapsulation', 'Compilation', 'Serialization'], correctIndex: 0, explanation: 'Method overriding enables runtime polymorphism so subclasses specialize inherited behavior.' },
  { category: 'Programming', difficulty: 'medium', question: 'Which data structure uses FIFO (First In, First Out) ordering?', choices: ['Queue', 'Stack', 'Binary Heap', 'Trie'], correctIndex: 0, explanation: 'A Queue enqueues items at the rear and dequeues them from the front in FIFO order.' },
  { category: 'Programming', difficulty: 'medium', question: 'What happens when a recursive function lacks a base case?', choices: ['Infinite recursion / Stack Overflow', 'Automatic loop optimization', 'Immediate garbage collection', 'Syntax warning only'], correctIndex: 0, explanation: 'Without a stopping base case, recursive calls keep pushing stack frames until memory overflows.' },
  { category: 'Programming', difficulty: 'medium', question: 'What is Encapsulation in Object-Oriented Programming?', choices: ['Bundling data and methods while restricting direct external access', 'Inheriting from five parent classes', 'Running loops in parallel threads', 'Converting integers to strings'], correctIndex: 0, explanation: 'Encapsulation hides internal state behind controlled public interfaces.' },
  { category: 'Programming', difficulty: 'medium', question: 'What is the worst-case time complexity of Linear Search on an unsorted list of size n?', choices: ['O(n)', 'O(1)', 'O(log n)', 'O(n log n)'], correctIndex: 0, explanation: 'Linear search may inspect every element up to n times if the target is last or absent.' },
  { category: 'Programming', difficulty: 'medium', question: 'In a Singly Linked List, what does each node store?', choices: ['Data and a pointer/reference to the next node', 'Only an array index', 'Two child trees and a hash', 'Compiled bytecode'], correctIndex: 0, explanation: 'Each linked list node holds a value and a reference pointing to the subsequent node.' },
  { category: 'Programming', difficulty: 'medium', question: 'What is the difference between a parameter and an argument?', choices: ['Parameters are in function definitions; arguments are actual values passed', 'Parameters are only numbers; arguments are only strings', 'They are identical keywords in C++', 'Arguments exist only in SQL'], correctIndex: 0, explanation: 'Functions declare parameters, and callers supply arguments when invoking them.' },
  { category: 'Programming', difficulty: 'medium', question: 'Which traversal visits Left Subtree, Root, then Right Subtree in a Binary Search Tree to yield sorted values?', choices: ['In-order Traversal', 'Pre-order Traversal', 'Post-order Traversal', 'Level-order Traversal'], correctIndex: 0, explanation: 'In-order traversal of a valid BST visits nodes in ascending sorted order.' },
  { category: 'Programming', difficulty: 'medium', question: 'What is Exception Handling (try/catch) designed for?', choices: ['Gracefully handling runtime errors without crashing', 'Deleting unused variables', 'Accelerating network downloads', 'Bypassing type checking'], correctIndex: 0, explanation: 'try/catch blocks intercept runtime exceptions so programs can recover cleanly.' },

  // Hard (10)
  { category: 'Programming', difficulty: 'hard', question: 'Which sorting algorithm has O(n log n) worst-case time complexity?', choices: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Insertion Sort'], correctIndex: 0, explanation: 'Merge Sort consistently divides and merges arrays in O(n log n) time even in the worst case.' },
  { category: 'Programming', difficulty: 'hard', question: 'In graph traversal, which algorithm explores neighbors level by level using a Queue?', choices: ['Breadth-First Search (BFS)', 'Depth-First Search (DFS)', 'Topological Sort', 'Prim Algorithm'], correctIndex: 0, explanation: 'BFS visits all nodes at depth d before moving to depth d+1 using a FIFO queue.' },
  { category: 'Programming', difficulty: 'hard', question: 'What does memoization accomplish in dynamic programming?', choices: ['Caches expensive function results to avoid recomputation', 'Compresses source files into ZIP archives', 'Encrypts memory pointers at runtime', 'Converts recursive trees into SQL tables'], correctIndex: 0, explanation: 'Memoization stores subproblem outputs so repeated calls return cached results in O(1) time.' },
  { category: 'Programming', difficulty: 'hard', question: 'Which structure offers O(1) average lookup by key?', choices: ['Hash Table', 'Singly Linked List', 'Binary Search Tree', 'Adjacency Matrix'], correctIndex: 0, explanation: 'Hash Tables map keys through a hash function to array buckets for constant-time average access.' },
  { category: 'Programming', difficulty: 'hard', question: 'Which algorithm finds shortest paths from a source vertex in a graph with non-negative edge weights?', choices: ['Dijkstra Algorithm', 'Kruskal Algorithm', 'Floyd-Warshall Cycle Check', 'Counting Sort'], correctIndex: 0, explanation: 'Dijkstra’s greedy algorithm uses a priority queue to find shortest paths with non-negative weights.' },
  { category: 'Programming', difficulty: 'hard', question: 'What causes a Deadlock in concurrent multithreaded programming?', choices: ['Two or more threads waiting forever for locks held by each other', 'A loop running 100 times', 'Using too many local integers', 'Sorting an empty array'], correctIndex: 0, explanation: 'Deadlock occurs when circular lock dependencies prevent any involved thread from proceeding.' },
  { category: 'Programming', difficulty: 'hard', question: 'Which data structure is ideal for fast prefix-based autocomplete searches?', choices: ['Trie (Prefix Tree)', 'Min-Heap', 'Circular Queue', 'Adjacency List'], correctIndex: 0, explanation: 'A Trie stores characters along tree edges so prefix lookups scale with word length.' },
  { category: 'Programming', difficulty: 'hard', question: 'What is Tail Call Optimization (TCO)?', choices: ['Reusing the current stack frame when a function returns a direct recursive call', 'Removing comments at runtime', 'Splitting arrays into chunks of 4', 'Converting recursion into global variables'], correctIndex: 0, explanation: 'TCO prevents stack growth for tail-recursive calls by replacing the active frame.' },
  { category: 'Programming', difficulty: 'hard', question: 'What does a Min-Heap guarantee about its root element?', choices: ['The root always holds the minimum key in the heap', 'The root is always the median value', 'All leaves are sorted left to right', 'Lookup for arbitrary keys is O(1)'], correctIndex: 0, explanation: 'In a Min-Heap, every parent node is less than or equal to its children, keeping the minimum at the root.' },
  { category: 'Programming', difficulty: 'hard', question: 'In Big-O notation, which growth rate dominates as n approaches infinity?', choices: ['O(2^n)', 'O(n^3)', 'O(n log n)', 'O(n^2)'], correctIndex: 0, explanation: 'Exponential growth O(2^n) grows vastly faster than any polynomial time complexity.' },

  // ===========================================================================
  // 3. Technology (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'Technology', difficulty: 'easy', question: 'What does IoT stand for?', choices: ['Internet of Things', 'Input Output Terminal', 'Integrated Optical Tech', 'Internal Operating Tool'], correctIndex: 0, explanation: 'IoT refers to physical devices embedded with sensors and software that exchange data over networks.' },
  { category: 'Technology', difficulty: 'easy', question: 'Which wireless technology is commonly used for short-range audio headsets?', choices: ['Bluetooth', 'Fiber Optics', 'Ethernet', 'Satellite Dish'], correctIndex: 0, explanation: 'Bluetooth provides low-power, short-range wireless communication between nearby devices.' },
  { category: 'Technology', difficulty: 'easy', question: 'What does AI stand for in computer science?', choices: ['Artificial Intelligence', 'Automated Interface', 'Analog Integration', 'Advanced Index'], correctIndex: 0, explanation: 'Artificial Intelligence is the simulation of human-like reasoning, learning, and problem solving by machines.' },
  { category: 'Technology', difficulty: 'easy', question: 'Cloud storage allows users to save files where?', choices: ['On remote servers accessed via the internet', 'Only on floppy disks', 'Inside the keyboard buffer', 'Strictly inside CPU registers'], correctIndex: 0, explanation: 'Cloud storage hosts data across managed remote servers accessible from anywhere online.' },
  { category: 'Technology', difficulty: 'easy', question: 'What does USB stand for?', choices: ['Universal Serial Bus', 'Unified System Backup', 'Ultra Speed Bridge', 'User Storage Block'], correctIndex: 0, explanation: 'USB is the Universal Serial Bus standard for connecting and powering peripherals.' },
  { category: 'Technology', difficulty: 'easy', question: 'Which technology uses satellites to determine geographic location on Earth?', choices: ['GPS', 'NFC', 'HDMI', 'VGA'], correctIndex: 0, explanation: 'The Global Positioning System (GPS) calculates coordinates from satellite signals.' },
  { category: 'Technology', difficulty: 'easy', question: 'What is a "Firewall" in cybersecurity?', choices: ['A barrier that filters incoming and outgoing network traffic', 'A physical fire extinguisher near servers', 'A monitor brightness setting', 'A type of SSD connector'], correctIndex: 0, explanation: 'Firewalls enforce security rules to block unauthorized network traffic.' },
  { category: 'Technology', difficulty: 'easy', question: 'What does PDF stand for?', choices: ['Portable Document Format', 'Personal Data File', 'Printed Display Frame', 'Public Domain Font'], correctIndex: 0, explanation: 'PDF preserves document formatting consistently across devices and operating systems.' },
  { category: 'Technology', difficulty: 'easy', question: 'Which short-range technology enables contactless tap-to-pay on smartphones?', choices: ['NFC (Near Field Communication)', 'Dial-up Modem', 'Infrared Printer Port', 'Coaxial Cable'], correctIndex: 0, explanation: 'NFC allows secure data exchange over distances of a few centimeters.' },
  { category: 'Technology', difficulty: 'easy', question: 'What is "Phishing" in digital security?', choices: ['Deceptive messages tricking users into revealing sensitive info', 'Overclocking a graphics card', 'Backing up photos to the cloud', 'Updating an antivirus database'], correctIndex: 0, explanation: 'Phishing impersonates trusted entities to steal passwords, cards, or credentials.' },

  // Medium (10)
  { category: 'Technology', difficulty: 'medium', question: 'What does 2FA stand for in account security?', choices: ['Two-Factor Authentication', 'Two-File Archive', 'Tiered Firewall Access', 'Token Format Algorithm'], correctIndex: 0, explanation: '2FA adds a second verification layer (like an OTP or security key) beyond just a password.' },
  { category: 'Technology', difficulty: 'medium', question: 'Which cloud model provides virtualized computing infrastructure like VMs and storage?', choices: ['IaaS', 'SaaS', 'BIOS', 'SMTP'], correctIndex: 0, explanation: 'Infrastructure as a Service (IaaS) supplies fundamental compute, storage, and networking resources.' },
  { category: 'Technology', difficulty: 'medium', question: 'What is a QR code primarily used for?', choices: ['Encoding data such as URLs in a 2D matrix barcode', 'Increasing Wi-Fi signal strength', 'Cooling smartphone batteries', 'Compressing 4K video streams'], correctIndex: 0, explanation: 'Quick Response (QR) codes store alphanumeric data optically for fast camera scanning.' },
  { category: 'Technology', difficulty: 'medium', question: 'What does API stand for?', choices: ['Application Programming Interface', 'Automated Protocol Index', 'Active Process Integration', 'Array Pointer Instruction'], correctIndex: 0, explanation: 'An API defines rules and endpoints that allow different software applications to communicate.' },
  { category: 'Technology', difficulty: 'medium', question: 'Which cloud service model delivers ready-to-use applications directly in a browser (like Gmail)?', choices: ['SaaS (Software as a Service)', 'IaaS', 'Bare Metal', 'RAID'], correctIndex: 0, explanation: 'SaaS delivers fully managed applications over the internet without local installation.' },
  { category: 'Technology', difficulty: 'medium', question: 'What is a VPN primarily used for?', choices: ['Creating an encrypted tunnel for private network traffic', 'Increasing monitor refresh rate', 'Charging wireless keyboards', 'Defragmenting optical discs'], correctIndex: 0, explanation: 'A Virtual Private Network encrypts traffic and masks IP addresses over public networks.' },
  { category: 'Technology', difficulty: 'medium', question: 'What does "Open Source" software mean?', choices: ['Source code is publicly available to inspect, modify, and share', 'Software only runs without electricity', 'Software is permanently offline', 'Software cannot be updated'], correctIndex: 0, explanation: 'Open-source licenses grant access to the underlying source code for collaboration.' },
  { category: 'Technology', difficulty: 'medium', question: 'What is Augmented Reality (AR)?', choices: ['Overlaying digital elements onto the real-world camera view', 'Replacing reality completely inside a dark room', 'Printing 3D plastic parts', 'Storing backups on tape'], correctIndex: 0, explanation: 'AR blends computer-generated visuals with the user’s physical environment in real time.' },
  { category: 'Technology', difficulty: 'medium', question: 'In Machine Learning, what is Supervised Learning?', choices: ['Training a model on labeled input-output pairs', 'Running code with zero training data', 'Manually writing every if-else rule', 'Sorting files alphabetically'], correctIndex: 0, explanation: 'Supervised learning uses labeled examples so models learn to map inputs to known targets.' },
  { category: 'Technology', difficulty: 'medium', question: 'What does "Latency" measure in digital systems and networks?', choices: ['The time delay between a request and its response', 'Total hard drive capacity', 'Screen pixel density', 'Battery voltage'], correctIndex: 0, explanation: 'Latency measures round-trip or processing delay, typically in milliseconds.' },

  // Hard (10)
  { category: 'Technology', difficulty: 'hard', question: 'What distinguishes Edge Computing from traditional Cloud Computing?', choices: ['Processing data closer to the source device to reduce latency', 'Storing all backups on magnetic tape', 'Running only monochrome terminals', 'Disabling encryption on local networks'], correctIndex: 0, explanation: 'Edge computing handles computation near data-generating sensors for ultra-low latency.' },
  { category: 'Technology', difficulty: 'hard', question: 'What is Containerization (such as Docker) designed to solve?', choices: ['Consistent app packaging with isolated dependencies across environments', 'Replacing Ethernet cables with lasers', 'Overclocking GPU shaders automatically', 'Eliminating the need for operating systems'], correctIndex: 0, explanation: 'Containers bundle an app with its runtime libraries so it runs identically everywhere.' },
  { category: 'Technology', difficulty: 'hard', question: 'In Machine Learning, what is "Overfitting"?', choices: ['Model memorizes training noise and performs poorly on unseen data', 'Model trains too fast on small GPUs', 'Dataset has zero missing columns', 'Loss function reaches 0 on test sets'], correctIndex: 0, explanation: 'Overfitting occurs when a model captures training-set quirks instead of generalizable patterns.' },
  { category: 'Technology', difficulty: 'hard', question: 'Which cryptographic concept uses a public key to encrypt and a private key to decrypt?', choices: ['Asymmetric Encryption', 'Symmetric Hashing', 'Caesar Shift', 'Parity Bit Check'], correctIndex: 0, explanation: 'Asymmetric (public-key) cryptography pairs a shareable public key with a secret private key.' },
  { category: 'Technology', difficulty: 'hard', question: 'What is a "Zero-Day Vulnerability"?', choices: ['A security flaw unknown to the vendor with no official patch yet', 'A bug that disappears after midnight', 'An expired domain name', 'A password shorter than 8 characters'], correctIndex: 0, explanation: 'Zero-day vulnerabilities are exploited before developers have time ("zero days") to release a fix.' },
  { category: 'Technology', difficulty: 'hard', question: 'What is the purpose of a Cryptographic Hash Function (e.g., SHA-256)?', choices: ['Produce a fixed-size, one-way digest to verify data integrity', 'Compress 4K movies losslessly', 'Recover plaintext passwords instantly', 'Route packets across ocean cables'], correctIndex: 0, explanation: 'Cryptographic hashes deterministically map arbitrary data to fixed digests that cannot be reversed.' },
  { category: 'Technology', difficulty: 'hard', question: 'What does "Zero Trust Architecture" assume?', choices: ['No user or device is trusted by default, even inside the network', 'Internal LAN traffic never needs encryption', 'Passwords never expire', 'Only external visitors require authentication'], correctIndex: 0, explanation: 'Zero Trust verifies every request continuously regardless of network location.' },
  { category: 'Technology', difficulty: 'hard', question: 'In Distributed Systems, what does the CAP Theorem state?', choices: ['A distributed store can guarantee at most two of Consistency, Availability, and Partition Tolerance', 'Every server must use three CPUs', 'Cloud backups triple storage costs', 'APIs must respond within 10ms'], correctIndex: 0, explanation: 'During a network partition, distributed databases must trade off strict consistency against availability.' },
  { category: 'Technology', difficulty: 'hard', question: 'What is "Differential Privacy" used for in data analytics?', choices: ['Adding calibrated statistical noise to protect individual identity in aggregate datasets', 'Deleting all rows from SQL tables', 'Encrypting monitor cables', 'Doubling training epochs'], correctIndex: 0, explanation: 'Differential privacy allows useful aggregate insights while mathematically bounding individual exposure.' },
  { category: 'Technology', difficulty: 'hard', question: 'Which consensus property ensures blockchain blocks cannot be silently altered once finalized?', choices: ['Cryptographic hash chaining across immutable blocks', 'Manual spreadsheet approval', 'Single-server RAM caching', 'Unencrypted UDP broadcasts'], correctIndex: 0, explanation: 'Each block embeds the cryptographic hash of the previous block, making tampering detectable.' },

  // ===========================================================================
  // 4. Database (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'Database', difficulty: 'easy', question: 'Which SQL command retrieves data from a table?', choices: ['SELECT', 'INSERT', 'DROP', 'ALTER'], correctIndex: 0, explanation: 'SELECT queries rows and columns from one or more relational tables.' },
  { category: 'Database', difficulty: 'easy', question: 'What uniquely identifies each row in a relational database table?', choices: ['Primary Key', 'Foreign Index', 'Comment Field', 'View Alias'], correctIndex: 0, explanation: 'A Primary Key uniquely identifies every record and cannot contain NULL values.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL clause filters rows based on a condition?', choices: ['WHERE', 'ORDER BY', 'GROUP BY', 'LIMIT'], correctIndex: 0, explanation: 'The WHERE clause filters records that satisfy a specified condition.' },
  { category: 'Database', difficulty: 'easy', question: 'What does SQL stand for?', choices: ['Structured Query Language', 'Simple Queue Logic', 'System Quality Layer', 'Sequential Quick List'], correctIndex: 0, explanation: 'SQL stands for Structured Query Language, the standard language for relational databases.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL statement adds new rows into an existing table?', choices: ['INSERT INTO', 'SELECT FROM', 'DROP TABLE', 'CREATE INDEX'], correctIndex: 0, explanation: 'INSERT INTO inserts new records into a specified table.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL keyword sorts query results in ascending or descending order?', choices: ['ORDER BY', 'GROUP BY', 'HAVING', 'JOIN'], correctIndex: 0, explanation: 'ORDER BY sorts result rows using ASC (default) or DESC.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL statement modifies existing records in a table?', choices: ['UPDATE', 'ALTER', 'TRUNCATE', 'FETCH'], correctIndex: 0, explanation: 'UPDATE changes column values in existing rows matching a WHERE filter.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL keyword removes duplicate values from a SELECT result?', choices: ['DISTINCT', 'UNIQUE', 'SINGLE', 'FILTER'], correctIndex: 0, explanation: 'SELECT DISTINCT returns only unique combinations of the selected columns.' },
  { category: 'Database', difficulty: 'easy', question: 'In a relational table, what represents a single entity record?', choices: ['Row (Tuple)', 'Column (Attribute)', 'Schema', 'Trigger'], correctIndex: 0, explanation: 'Rows (tuples) represent individual records, while columns represent attributes.' },
  { category: 'Database', difficulty: 'easy', question: 'Which SQL statement deletes a table and all its schema permanently?', choices: ['DROP TABLE', 'DELETE ROW', 'CLEAR TABLE', 'REMOVE SCHEMA'], correctIndex: 0, explanation: 'DROP TABLE completely removes both the table data and its definition.' },

  // Medium (10)
  { category: 'Database', difficulty: 'medium', question: 'Which SQL command removes all rows from a table while keeping its structure?', choices: ['TRUNCATE TABLE', 'DROP TABLE', 'CREATE TABLE', 'RENAME TABLE'], correctIndex: 0, explanation: 'TRUNCATE TABLE clears all records rapidly without deleting the table schema itself.' },
  { category: 'Database', difficulty: 'medium', question: 'What is a Foreign Key used for?', choices: ['Linking a record to a Primary Key in another table', 'Encrypting database backups', 'Sorting strings alphabetically', 'Deleting duplicate columns'], correctIndex: 0, explanation: 'A Foreign Key enforces referential integrity between related tables.' },
  { category: 'Database', difficulty: 'medium', question: 'Which JOIN returns only rows that have matching values in both tables?', choices: ['INNER JOIN', 'LEFT OUTER JOIN', 'CROSS JOIN', 'FULL JOIN'], correctIndex: 0, explanation: 'INNER JOIN outputs the intersection where join keys match in both tables.' },
  { category: 'Database', difficulty: 'medium', question: 'What is the purpose of a Database Index?', choices: ['Speed up data retrieval queries', 'Prevent users from logging in', 'Convert SQL into HTML', 'Reduce column names to 1 letter'], correctIndex: 0, explanation: 'Indexes build fast lookup structures (like B-Trees) to accelerate SELECT queries.' },
  { category: 'Database', difficulty: 'medium', question: 'Which SQL aggregate function counts the number of matching rows?', choices: ['COUNT()', 'SUM()', 'AVG()', 'MAX()'], correctIndex: 0, explanation: 'COUNT() tallies rows or non-NULL column values in a query.' },
  { category: 'Database', difficulty: 'medium', question: 'Which JOIN returns all rows from the left table and matched rows from the right table?', choices: ['LEFT JOIN', 'INNER JOIN', 'RIGHT JOIN', 'SELF JOIN'], correctIndex: 0, explanation: 'LEFT JOIN preserves all left-table rows, filling unmatched right columns with NULL.' },
  { category: 'Database', difficulty: 'medium', question: 'What does an ERD (Entity Relationship Diagram) illustrate?', choices: ['Tables, attributes, and relationships in a database design', 'CSS grid breakpoints', 'CPU instruction pipelines', 'Network firewall rules'], correctIndex: 0, explanation: 'ERDs visually model entities and their cardinality before database creation.' },
  { category: 'Database', difficulty: 'medium', question: 'Which SQL operator matches patterns using wildcards like % and _?', choices: ['LIKE', 'BETWEEN', 'IN', 'IS NULL'], correctIndex: 0, explanation: 'LIKE performs pattern matching where % matches any sequence and _ matches one character.' },
  { category: 'Database', difficulty: 'medium', question: 'What is a Database "View"?', choices: ['A virtual table defined by a stored SQL query', 'A physical backup tape', 'A primary key constraint', 'A database server monitor'], correctIndex: 0, explanation: 'Views present saved SELECT queries as virtual tables without duplicating data.' },
  { category: 'Database', difficulty: 'medium', question: 'Why should SQL queries use Parameterized Statements instead of string concatenation?', choices: ['To prevent SQL Injection attacks', 'To make column names uppercase', 'To disable indexes', 'To skip transactions'], correctIndex: 0, explanation: 'Parameterized queries separate SQL syntax from user data, neutralizing SQL injection.' },

  // Hard (10)
  { category: 'Database', difficulty: 'hard', question: 'In ACID properties, what does the "I" stand for?', choices: ['Isolation', 'Integrity', 'Indexing', 'Inheritance'], correctIndex: 0, explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability.' },
  { category: 'Database', difficulty: 'hard', question: 'Which Normal Form eliminates transitive dependencies of non-key attributes?', choices: ['Third Normal Form (3NF)', 'First Normal Form (1NF)', 'Unnormalized Form (0NF)', 'Denormalized Form'], correctIndex: 0, explanation: '3NF ensures non-key attributes depend only on the primary key, not on other non-key columns.' },
  { category: 'Database', difficulty: 'hard', question: 'Which SQL clause filters aggregated groups created by GROUP BY?', choices: ['HAVING', 'WHERE', 'DISTINCT', 'UNION'], correctIndex: 0, explanation: 'HAVING filters grouped aggregate results, whereas WHERE filters individual rows before grouping.' },
  { category: 'Database', difficulty: 'hard', question: 'Which type of database stores flexible JSON-like documents instead of fixed tables?', choices: ['Document NoSQL (e.g., MongoDB)', 'Relational SQL', 'Hierarchical Tape', 'Flat CSV'], correctIndex: 0, explanation: 'Document-oriented NoSQL databases store semi-structured records such as BSON/JSON documents.' },
  { category: 'Database', difficulty: 'hard', question: 'What does "Atomicity" in a database transaction guarantee?', choices: ['All operations succeed together or the entire transaction rolls back', 'Tables are automatically backed up to cloud', 'Queries run without indexes', 'Rows are stored in alphabetical order'], correctIndex: 0, explanation: 'Atomicity ensures transactions are all-or-nothing, preventing partial updates on failure.' },
  { category: 'Database', difficulty: 'hard', question: 'What is "Database Sharding"?', choices: ['Horizontally partitioning rows across multiple separate database servers', 'Renaming columns to shorter strings', 'Deleting old log files', 'Encrypting passwords with MD5'], correctIndex: 0, explanation: 'Sharding distributes data across independent nodes to scale write throughput and storage.' },
  { category: 'Database', difficulty: 'hard', question: 'Which data structure do most relational databases use by default for indexes?', choices: ['B-Tree / B+ Tree', 'Stack', 'Circular Buffer', 'Bloom Filter'], correctIndex: 0, explanation: 'B+ Trees keep keys balanced and sorted, supporting fast range scans and lookups.' },
  { category: 'Database', difficulty: 'hard', question: 'What is a "Dirty Read" in transaction concurrency?', choices: ['Reading uncommitted data from another transaction that might roll back', 'Querying a table without a WHERE clause', 'Using lowercase SQL keywords', 'Forgetting to close a terminal'], correctIndex: 0, explanation: 'Dirty reads happen under weak isolation levels when uncommitted changes are exposed.' },
  { category: 'Database', difficulty: 'hard', question: 'What is the difference between UNION and UNION ALL in SQL?', choices: ['UNION removes duplicate rows while UNION ALL keeps all rows', 'UNION ALL only works on integers', 'UNION sorts descending by default', 'They are identical'], correctIndex: 0, explanation: 'UNION deduplicates combined result sets, whereas UNION ALL appends rows without deduplication overhead.' },
  { category: 'Database', difficulty: 'hard', question: 'What is "Denormalization" intentionally used for?', choices: ['Trading some data redundancy for faster read query performance', 'Removing all primary keys', 'Converting SQL into XML', 'Preventing backups'], correctIndex: 0, explanation: 'Denormalization reduces expensive joins on read-heavy analytical workloads.' },

  // ===========================================================================
  // 5. HTML & CSS (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which HTML tag creates a hyperlink?', choices: ['<a>', '<link>', '<href>', '<url>'], correctIndex: 0, explanation: 'The anchor tag <a> with an href attribute defines clickable hyperlinks.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'What does CSS stand for?', choices: ['Cascading Style Sheets', 'Computer Style Syntax', 'Creative Screen System', 'Coded Sheet Structure'], correctIndex: 0, explanation: 'CSS stands for Cascading Style Sheets, used to style and lay out HTML documents.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which HTML tag displays the largest semantic heading?', choices: ['<h1>', '<h6>', '<head>', '<header>'], correctIndex: 0, explanation: '<h1> represents the top-level heading in a document hierarchy.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which CSS property changes the text color of an element?', choices: ['color', 'font-color', 'text-style', 'background'], correctIndex: 0, explanation: 'The CSS color property sets the foreground color of text content.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'What does HTML stand for?', choices: ['HyperText Markup Language', 'High Tech Machine Language', 'Hyperlink Text Management Layer', 'Home Tool Markup Logic'], correctIndex: 0, explanation: 'HTML is the standard markup language for structuring content on the web.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which HTML tag inserts an image on a webpage?', choices: ['<img>', '<picture-src>', '<media>', '<graphic>'], correctIndex: 0, explanation: 'The <img> element embeds an image using its src attribute.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which HTML tag creates an unordered (bulleted) list?', choices: ['<ul>', '<ol>', '<dl>', '<list>'], correctIndex: 0, explanation: '<ul> creates an unordered bulleted list containing <li> items.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which CSS property controls the background color of an element?', choices: ['background-color', 'fill-color', 'backdrop', 'surface-tint'], correctIndex: 0, explanation: 'background-color paints the solid background fill behind an element.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which HTML element defines a paragraph of text?', choices: ['<p>', '<para>', '<text>', '<pg>'], correctIndex: 0, explanation: 'The <p> tag defines a block-level paragraph.' },
  { category: 'HTML & CSS', difficulty: 'easy', question: 'Which CSS property changes the size of text?', choices: ['font-size', 'text-scale', 'size', 'font-weight'], correctIndex: 0, explanation: 'font-size specifies text height using units like px, rem, or em.' },

  // Medium (10)
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which CSS layout mode arranges items in one dimension (row or column)?', choices: ['Flexbox', 'CSS Grid', 'Float', 'Table'], correctIndex: 0, explanation: 'Flexbox (display: flex) is optimized for one-dimensional row or column alignment.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'In the CSS Box Model, what sits directly between the content and the border?', choices: ['Padding', 'Margin', 'Outline', 'Shadow'], correctIndex: 0, explanation: 'From inside out, the CSS Box Model layers are: Content -> Padding -> Border -> Margin.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which HTML attribute provides alternative text for an image if it fails to load?', choices: ['alt', 'title', 'src', 'caption'], correctIndex: 0, explanation: 'The alt attribute improves accessibility for screen readers and displays fallback text.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which CSS selector targets an element with id="hero"?', choices: ['#hero', '.hero', '*hero', '@hero'], correctIndex: 0, explanation: 'A hash (#) targets an element ID, whereas a dot (.) targets a class.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which semantic HTML5 tag is intended for the primary navigation links?', choices: ['<nav>', '<section>', '<aside>', '<footer>'], correctIndex: 0, explanation: '<nav> identifies a section of major navigation links for browsers and screen readers.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'In Flexbox, which property aligns items along the main axis?', choices: ['justify-content', 'align-items', 'flex-wrap', 'order'], correctIndex: 0, explanation: 'justify-content controls distribution along the main axis (horizontal in row direction).' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which CSS property rounds the corners of a box?', choices: ['border-radius', 'corner-style', 'box-round', 'edge-curve'], correctIndex: 0, explanation: 'border-radius curves the outer corners of an element border and background.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'What does position: sticky do in CSS?', choices: ['Acts as relative until a scroll threshold, then sticks like fixed inside its container', 'Locks an element permanently offscreen', 'Centers text vertically', 'Removes an element from the DOM'], correctIndex: 0, explanation: 'position: sticky toggles between relative and fixed positioning based on scroll offset.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which HTML input attribute forces a form field to be filled before submission?', choices: ['required', 'mandatory', 'mustfill', 'validate'], correctIndex: 0, explanation: 'The boolean required attribute enables built-in HTML5 form validation.' },
  { category: 'HTML & CSS', difficulty: 'medium', question: 'Which CSS pseudo-class styles an element while the user’s cursor is over it?', choices: [':hover', ':focus', ':active', ':visited'], correctIndex: 0, explanation: ':hover applies styles when a pointer hovers over the target element.' },

  // Hard (10)
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Which CSS property makes width and height include padding and border?', choices: ['box-sizing: border-box', 'display: inline-block', 'overflow: hidden', 'position: relative'], correctIndex: 0, explanation: 'box-sizing: border-box keeps padding and borders inside the declared width and height.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Which CSS Grid unit distributes remaining free space proportionally?', choices: ['fr', 'em', 'vh', 'px'], correctIndex: 0, explanation: 'The fr (fractional) unit allocates a share of available space in a CSS Grid container.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Which selector has the highest CSS specificity among these choices?', choices: ['#nav .item', '.nav .item', 'ul li a', 'div > p'], correctIndex: 0, explanation: 'An ID selector (#nav) carries higher specificity weight than classes or tag selectors.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Which CSS rule enables responsive styling based on viewport width?', choices: ['@media', '@keyframes', '@import', '@font-face'], correctIndex: 0, explanation: '@media queries apply conditional CSS rules when screen dimensions or features match.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'What is the difference between em and rem units in CSS?', choices: ['rem is relative to the root <html> font-size; em is relative to the current/parent font-size', 'em is always 16px; rem is always 10px', 'rem only works on padding', 'They are identical'], correctIndex: 0, explanation: 'rem ("root em") avoids compounding nested font sizes by referencing the root element.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Which CSS property creates a new Stacking Context when set alongside z-index (or opacity < 1)?', choices: ['position: relative with z-index', 'color: inherit', 'text-align: center', 'list-style: none'], correctIndex: 0, explanation: 'Positioned elements with a non-auto z-index (or transform/opacity < 1) create stacking contexts.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'What does the CSS clamp(min, preferred, max) function accomplish?', choices: ['Sets a fluid value bounded by a minimum and maximum limit', 'Clips overflowing text with ellipsis', 'Locks an image aspect ratio', 'Animates colors between frames'], correctIndex: 0, explanation: 'clamp() enables responsive fluid typography and spacing without multiple media queries.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'Why is animating transform and opacity preferred over top/left/width in CSS?', choices: ['transform and opacity run on the GPU compositor without triggering layout reflow', 'top and left are deprecated in HTML5', 'transform automatically caches images', 'opacity disables JavaScript events'], correctIndex: 0, explanation: 'Compositor-only properties avoid expensive layout recalculation and repainting.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'What does the aria-live="polite" attribute do for accessibility?', choices: ['Announces dynamic content updates to screen readers at the next pause', 'Plays background music automatically', 'Hides elements from keyboard focus', 'Reloads forms silently'], correctIndex: 0, explanation: 'ARIA live regions inform assistive technologies when page content updates asynchronously.' },
  { category: 'HTML & CSS', difficulty: 'hard', question: 'What is CSS Custom Property syntax for declaring and reading a theme variable?', choices: ['--accent: #3b82f6; and color: var(--accent);', '$accent: #3b82f6; and color: $accent;', '@accent: #3b82f6; and color: @accent;', 'var accent = #3b82f6;'], correctIndex: 0, explanation: 'Native CSS variables use the --prefix declaration and are accessed with var(--name).' },

  // ===========================================================================
  // 6. JavaScript (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'JavaScript', difficulty: 'easy', question: 'Which keyword declares a block-scoped variable whose binding cannot be reassigned?', choices: ['const', 'var', 'let', 'static'], correctIndex: 0, explanation: 'const creates a block-scoped constant reference that cannot be reassigned.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which method prints messages to the browser developer console?', choices: ['console.log()', 'print.screen()', 'alert.console()', 'system.out()'], correctIndex: 0, explanation: 'console.log() outputs debugging data to the browser console.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'How do you select an HTML element by its ID in the DOM?', choices: ['document.getElementById()', 'document.findClass()', 'window.selectTag()', 'dom.pickId()'], correctIndex: 0, explanation: 'document.getElementById("id") returns the matching DOM element.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'What data type is returned by typeof "Hello"?', choices: ['"string"', '"text"', '"char"', '"word"'], correctIndex: 0, explanation: 'In JavaScript, typeof applied to text literals returns "string".' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which symbol begins a single-line comment in JavaScript?', choices: ['//', '<!--', '#', '**'], correctIndex: 0, explanation: 'Double slashes // start a single-line comment in JavaScript.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which Array property returns the number of elements in an array?', choices: ['.length', '.size', '.count', '.items'], correctIndex: 0, explanation: 'array.length gives the total count of elements in the array.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which method adds an element to the end of a JavaScript array?', choices: ['push()', 'pop()', 'shift()', 'slice()'], correctIndex: 0, explanation: 'push() appends one or more elements to the end of an array.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'What does Math.floor(4.9) return?', choices: ['4', '5', '4.5', '4.9'], correctIndex: 0, explanation: 'Math.floor() rounds a number down to the nearest integer.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which literal syntax creates an empty JavaScript object?', choices: ['{}', '[]', '()', '<>'], correctIndex: 0, explanation: 'Curly braces {} create an object literal, whereas [] creates an array.' },
  { category: 'JavaScript', difficulty: 'easy', question: 'Which method converts a string to all uppercase letters?', choices: ['toUpperCase()', 'upper()', 'capitalize()', 'toCaps()'], correctIndex: 0, explanation: 'String.prototype.toUpperCase() returns a new uppercase string.' },

  // Medium (10)
  { category: 'JavaScript', difficulty: 'medium', question: 'What is the difference between == and === in JavaScript?', choices: ['=== checks both value and type without coercion', '== is faster than ===', '=== only works on numbers', 'There is no difference'], correctIndex: 0, explanation: 'Strict equality (===) compares both value and data type without implicit type conversion.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'Which Array method creates a new array by transforming every element?', choices: ['Array.prototype.map()', 'Array.prototype.forEach()', 'Array.prototype.push()', 'Array.prototype.pop()'], correctIndex: 0, explanation: 'map() invokes a callback on each element and returns a new transformed array.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'Which Web Storage API persists data even after closing the browser?', choices: ['localStorage', 'sessionStorage', 'tempMemory', 'consoleCache'], correctIndex: 0, explanation: 'localStorage retains key-value strings across browser restarts until explicitly cleared.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'What does JSON.parse() do?', choices: ['Converts a JSON string into a JavaScript object', 'Converts an object into CSS', 'Deletes keys from localStorage', 'Compresses an array'], correctIndex: 0, explanation: 'JSON.parse() deserializes a valid JSON string into native JavaScript values.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'Which Array method returns only elements that pass a predicate test?', choices: ['filter()', 'reduce()', 'sort()', 'splice()'], correctIndex: 0, explanation: 'filter() creates a shallow array containing elements for which the callback returns truthy.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'What is Template Literal syntax for string interpolation in ES6?', choices: ['Backticks with ${expression}', 'Single quotes with #{expression}', 'Double quotes with @expression', 'Parentheses with %expression'], correctIndex: 0, explanation: 'Template literals use backticks (`...`) and ${...} placeholders.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'Which method attaches an event handler without overwriting existing handlers?', choices: ['element.addEventListener()', 'element.setClick()', 'element.bindEvent()', 'element.listen()'], correctIndex: 0, explanation: 'addEventListener() registers multiple listeners cleanly on DOM nodes.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'What does the spread operator (...) do in const copy = [...arr];?', choices: ['Expands elements of arr into a new shallow-copied array', 'Deletes all duplicates from arr', 'Reverses arr in place', 'Freezes arr'], correctIndex: 0, explanation: 'Array spread unpacks iterable items into a new array literal.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'What does setTimeout(fn, 1000) do?', choices: ['Schedules fn to run once after roughly 1000 milliseconds', 'Repeats fn every 1000 milliseconds forever', 'Freezes the browser for 1 second', 'Cancels all active animations'], correctIndex: 0, explanation: 'setTimeout executes a callback once after the specified delay in milliseconds.' },
  { category: 'JavaScript', difficulty: 'medium', question: 'What value does Array.prototype.find() return when no element matches?', choices: ['undefined', '-1', 'false', '[]'], correctIndex: 0, explanation: 'find() returns the first matching element, or undefined if none satisfy the test.' },

  // Hard (10)
  { category: 'JavaScript', difficulty: 'hard', question: 'What is a Closure in JavaScript?', choices: ['A function that remembers variables from its outer lexical scope', 'A loop that terminates early', 'A CSS transition callback', 'An automatic syntax error'], correctIndex: 0, explanation: 'Closures allow inner functions to retain access to outer function variables even after the outer function returns.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'Which statement accurately describes async/await?', choices: ['Syntactic sugar over Promises for readable asynchronous code', 'Creates a new OS thread for every line', 'Prevents event listeners from firing', 'Replaces the DOM tree'], correctIndex: 0, explanation: 'async/await pauses execution inside an async function until a Promise settles without blocking the main thread.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'In the Event Loop, which queue runs before the next macrotask (setTimeout)?', choices: ['Microtask queue (Promise callbacks)', 'Render painting queue', 'Disk I/O queue', 'CSS animation queue'], correctIndex: 0, explanation: 'Microtasks (like Promise.then) are drained completely right after the current call stack clears.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'What does event.preventDefault() do inside an event handler?', choices: ['Stops the browser default action for that event', 'Deletes the DOM node immediately', 'Reloads the current webpage', 'Clears all timers'], correctIndex: 0, explanation: 'preventDefault() cancels default browser behavior such as form submission page reloads.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'What is Event Delegation in DOM programming?', choices: ['Attaching one listener to a parent container to handle child events via bubbling', 'Creating a new thread for each button', 'Preventing all clicks with CSS', 'Copying DOM elements into localStorage'], correctIndex: 0, explanation: 'Event delegation leverages event bubbling so a single parent handler serves many dynamic children.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'What does Promise.all([p1, p2, p3]) do if one Promise rejects?', choices: ['Rejects immediately with the first rejection reason', 'Waits and ignores the error', 'Returns an empty string', 'Retries the failed promise 3 times'], correctIndex: 0, explanation: 'Promise.all fails fast and rejects as soon as any input promise rejects.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'What is the difference between event.target and event.currentTarget?', choices: ['target is the originating element; currentTarget is the element running the listener', 'target is always window; currentTarget is always document', 'They are always identical', 'currentTarget only exists on keyboard events'], correctIndex: 0, explanation: 'event.target points to where the event began, while currentTarget points to the attached handler element.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'What does "Debouncing" an input handler accomplish?', choices: ['Delays execution until a burst of rapid events pauses for a set interval', 'Runs the function twice per click', 'Disables keyboard input permanently', 'Converts strings to numbers'], correctIndex: 0, explanation: 'Debouncing reduces redundant work on search boxes or resize events until activity settles.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'In JavaScript, what does typeof null evaluate to (due to a legacy spec quirk)?', choices: ['"object"', '"null"', '"undefined"', '"boolean"'], correctIndex: 0, explanation: 'Historically typeof null returns "object" in JavaScript.' },
  { category: 'JavaScript', difficulty: 'hard', question: 'Which feature allows an object to inherit properties directly from another object in JavaScript?', choices: ['Prototypal Inheritance (Prototype Chain)', 'Multiple Class Compilation', 'Static Header Linking', 'SQL Foreign Keys'], correctIndex: 0, explanation: 'JavaScript objects delegate property lookups up their [[Prototype]] chain.' },

  // ===========================================================================
  // 7. Computer (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'Computer', difficulty: 'easy', question: 'Which component is known as the "brain" of the computer?', choices: ['CPU (Central Processing Unit)', 'Power Supply Unit', 'Hard Disk Drive', 'Optical Mouse'], correctIndex: 0, explanation: 'The CPU fetches, decodes, and executes program instructions.' },
  { category: 'Computer', difficulty: 'easy', question: 'How many bits make up 1 Byte?', choices: ['8 bits', '4 bits', '16 bits', '32 bits'], correctIndex: 0, explanation: 'One byte consists of 8 binary bits.' },
  { category: 'Computer', difficulty: 'easy', question: 'Which type of memory loses its contents when power is turned off?', choices: ['RAM', 'SSD', 'ROM', 'USB Flash Drive'], correctIndex: 0, explanation: 'RAM is volatile memory that requires continuous power to retain data.' },
  { category: 'Computer', difficulty: 'easy', question: 'Which number system uses only the digits 0 and 1?', choices: ['Binary', 'Decimal', 'Hexadecimal', 'Octal'], correctIndex: 0, explanation: 'Binary (base-2) uses 0 and 1 to represent digital states.' },
  { category: 'Computer', difficulty: 'easy', question: 'What does GPU stand for?', choices: ['Graphics Processing Unit', 'General Power Utility', 'Global Port Uploader', 'Guided Program Unit'], correctIndex: 0, explanation: 'The GPU accelerates image rendering, parallel shaders, and compute tasks.' },
  { category: 'Computer', difficulty: 'easy', question: 'Which component connects the CPU, RAM, storage, and expansion slots together?', choices: ['Motherboard', 'Cooling Fan', 'Webcam', 'Printer'], correctIndex: 0, explanation: 'The motherboard is the main circuit board linking all core hardware subsystems.' },
  { category: 'Computer', difficulty: 'easy', question: 'Which of these is an Input Device?', choices: ['Keyboard', 'Monitor', 'Speaker', 'Projector'], correctIndex: 0, explanation: 'A keyboard sends user keystrokes into the computer, making it an input device.' },
  { category: 'Computer', difficulty: 'easy', question: 'What does OS stand for?', choices: ['Operating System', 'Optical Storage', 'Output Signal', 'Online Server'], correctIndex: 0, explanation: 'An Operating System (Windows, Linux, macOS) manages hardware and software resources.' },
  { category: 'Computer', difficulty: 'easy', question: 'How many kilobytes (binary IEC KiB / traditional KB) equal 1,024 bytes?', choices: ['1 KB / KiB', '10 KB', '100 KB', '1,000 MB'], correctIndex: 0, explanation: 'In binary computing, 2^10 = 1,024 bytes equals 1 KiB (historically called 1 KB).' },
  { category: 'Computer', difficulty: 'easy', question: 'Which unit typically measures a CPU clock speed today?', choices: ['Gigahertz (GHz)', 'Megabytes (MB)', 'Pixels (px)', 'Volts (V)'], correctIndex: 0, explanation: 'Modern CPU clock cycles are measured in billions of cycles per second (GHz).' },

  // Medium (10)
  { category: 'Computer', difficulty: 'medium', question: 'What is the decimal value of the binary number 1010?', choices: ['10', '8', '12', '6'], correctIndex: 0, explanation: '1010 in binary equals (1×8) + (0×4) + (1×2) + (0×1) = 10.' },
  { category: 'Computer', difficulty: 'medium', question: 'What does BIOS/UEFI do when a computer powers on?', choices: ['Initializes hardware and starts the OS bootloader', 'Renders 3D browser games', 'Encrypts Wi-Fi passwords', 'Defragments cloud storage'], correctIndex: 0, explanation: 'Firmware runs POST hardware checks and hands control over to the operating system bootloader.' },
  { category: 'Computer', difficulty: 'medium', question: 'Why is an SSD generally much faster than a traditional HDD?', choices: ['It uses flash memory with no moving mechanical parts', 'It spins platters at 1,000,000 RPM', 'It connects directly to the monitor', 'It bypasses the motherboard'], correctIndex: 0, explanation: 'Solid State Drives access flash memory electronically without mechanical read/write heads.' },
  { category: 'Computer', difficulty: 'medium', question: 'Which Operating System component directly manages hardware resources and processes?', choices: ['Kernel', 'Desktop Wallpaper', 'File Explorer', 'Web Browser'], correctIndex: 0, explanation: 'The OS kernel schedules CPU time, manages memory, and mediates hardware access.' },
  { category: 'Computer', difficulty: 'medium', question: 'What does ALU stand for inside a CPU?', choices: ['Arithmetic Logic Unit', 'Array Link Utility', 'Active Load Unit', 'Analog Line Unit'], correctIndex: 0, explanation: 'The ALU performs arithmetic calculations and bitwise logical operations.' },
  { category: 'Computer', difficulty: 'medium', question: 'What is the difference between a Process and a Thread?', choices: ['Processes have isolated memory spaces; threads share a process’s memory', 'Threads cannot run on multi-core CPUs', 'Processes exist only in browsers', 'They are identical terms'], correctIndex: 0, explanation: 'Threads are lightweight execution units sharing heap memory within a parent process.' },
  { category: 'Computer', difficulty: 'medium', question: 'Which storage interface delivers NVMe SSDs extreme speeds directly over motherboard lanes?', choices: ['PCIe (PCI Express)', 'IDE Ribbon', 'PS/2 Port', 'Parallel LPT'], correctIndex: 0, explanation: 'NVMe SSDs communicate directly with the CPU over high-bandwidth PCIe lanes.' },
  { category: 'Computer', difficulty: 'medium', question: 'What is the binary representation of decimal number 15?', choices: ['1111', '1010', '1100', '1001'], correctIndex: 0, explanation: '8 + 4 + 2 + 1 = 15, written as 1111 in binary.' },
  { category: 'Computer', difficulty: 'medium', question: 'What is the purpose of a CPU Heat Sink and Cooler?', choices: ['Dissipate thermal energy so the CPU avoids overheating and throttling', 'Boost internet download speed', 'Store BIOS settings', 'Convert AC to DC power'], correctIndex: 0, explanation: 'Effective thermal cooling keeps processors within safe operating temperatures.' },
  { category: 'Computer', difficulty: 'medium', question: 'What does ASCII encode?', choices: ['Text characters into numeric codes (0–127)', '3D polygon meshes', 'Audio waveforms', 'IPv6 routing tables'], correctIndex: 0, explanation: 'ASCII maps standard English letters, digits, and symbols to 7-bit integers.' },

  // Hard (10)
  { category: 'Computer', difficulty: 'hard', question: 'What is CPU Cache (L1/L2/L3) used for?', choices: ['Storing frequently accessed data ultra-close to CPU cores', 'Cooling the graphics card', 'Storing OS installation ISO files', 'Increasing monitor refresh rate'], correctIndex: 0, explanation: 'High-speed SRAM cache reduces latency by avoiding slow trips to main RAM.' },
  { category: 'Computer', difficulty: 'hard', question: 'What is Virtual Memory (Paging)?', choices: ['Using disk space to extend apparent RAM via page tables', 'Rendering VR headsets', 'Simulating a keyboard on screen', 'Running two monitors at once'], correctIndex: 0, explanation: 'Virtual memory maps virtual addresses to physical RAM or swap space on storage.' },
  { category: 'Computer', difficulty: 'hard', question: 'Which CPU register holds the memory address of the next instruction to execute?', choices: ['Program Counter (PC)', 'Accumulator', 'Stack Base', 'Flag Mask'], correctIndex: 0, explanation: 'The Program Counter tracks the address of the upcoming instruction in the fetch-execute cycle.' },
  { category: 'Computer', difficulty: 'hard', question: 'What is the hexadecimal representation of decimal 255?', choices: ['FF', 'FE', '100', 'A5'], correctIndex: 0, explanation: 'In base-16, F = 15, so FF = (15 × 16) + 15 = 255.' },
  { category: 'Computer', difficulty: 'hard', question: 'What does CPU Instruction Pipelining achieve?', choices: ['Overlaps fetch, decode, and execute stages across multiple instructions to boost throughput', 'Doubles RAM capacity automatically', 'Eliminates the need for an OS', 'Compresses files on SSDs'], correctIndex: 0, explanation: 'Pipelining keeps multiple CPU functional units busy simultaneously like an assembly line.' },
  { category: 'Computer', difficulty: 'hard', question: 'What is a "Context Switch" in an Operating System?', choices: ['Saving one process/thread state and loading another onto the CPU', 'Changing keyboard layout language', 'Switching monitor inputs', 'Formatting a USB drive'], correctIndex: 0, explanation: 'The OS scheduler performs context switches to multitask across processes.' },
  { category: 'Computer', difficulty: 'hard', question: 'In signed binary numbers, which method is standard in modern CPUs for representing negatives?', choices: ['Two’s Complement', 'Gray Code', 'BCD Packing', 'Parity Encoding'], correctIndex: 0, explanation: 'Two’s complement allows addition and subtraction using identical hardware circuitry.' },
  { category: 'Computer', difficulty: 'hard', question: 'What is a "Cache Miss" in computer architecture?', choices: ['Requested data is not in cache, forcing a slower fetch from main RAM', 'A broken pixel on a display', 'A dropped Wi-Fi packet', 'A corrupted BIOS chip'], correctIndex: 0, explanation: 'A cache miss incurs extra memory latency because lower levels or RAM must be queried.' },
  { category: 'Computer', difficulty: 'hard', question: 'What does DMA (Direct Memory Access) enable?', choices: ['Peripherals transfer data directly to RAM without constant CPU intervention', 'Users edit CPU microcode manually', 'Monitors render without a GPU', 'Keyboards run Python scripts'], correctIndex: 0, explanation: 'DMA frees the CPU from copying bulk I/O bytes between devices and memory.' },
  { category: 'Computer', difficulty: 'hard', question: 'Which RAID level provides disk mirroring for fault tolerance across two drives?', choices: ['RAID 1', 'RAID 0', 'RAID 50', 'JBOD'], correctIndex: 0, explanation: 'RAID 1 writes identical mirrored copies to two drives so data survives a single drive failure.' },

  // ===========================================================================
  // 8. Networking (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'Networking', difficulty: 'easy', question: 'What does IP stand for in IP Address?', choices: ['Internet Protocol', 'Internal Program', 'Integrated Port', 'Instant Packet'], correctIndex: 0, explanation: 'Internet Protocol (IP) addresses identify devices across interconnected networks.' },
  { category: 'Networking', difficulty: 'easy', question: 'Which system translates domain names like example.com into IP addresses?', choices: ['DNS', 'HTTP', 'USB', 'CSS'], correctIndex: 0, explanation: 'The Domain Name System (DNS) resolves human-readable hostnames to numeric IP addresses.' },
  { category: 'Networking', difficulty: 'easy', question: 'What is the default port for HTTPS encrypted web traffic?', choices: ['443', '80', '21', '25'], correctIndex: 0, explanation: 'HTTPS uses port 443 with TLS encryption, while plain HTTP uses port 80.' },
  { category: 'Networking', difficulty: 'easy', question: 'Which device forwards data packets between different networks?', choices: ['Router', 'Monitor', 'Printer', 'Scanner'], correctIndex: 0, explanation: 'Routers inspect destination IP addresses and route packets between networks.' },
  { category: 'Networking', difficulty: 'easy', question: 'What does LAN stand for?', choices: ['Local Area Network', 'Long Access Node', 'Linked Array Net', 'Logical Address Name'], correctIndex: 0, explanation: 'A LAN connects devices within a limited geographic area such as a home, school, or office.' },
  { category: 'Networking', difficulty: 'easy', question: 'Which cable type uses pulses of light for ultra-high-speed long-distance transmission?', choices: ['Fiber Optic Cable', 'Twisted Pair Copper', 'Coaxial TV Wire', 'Parallel Ribbon'], correctIndex: 0, explanation: 'Fiber-optic cables transmit light signals through glass strands with minimal attenuation.' },
  { category: 'Networking', difficulty: 'easy', question: 'What does URL stand for?', choices: ['Uniform Resource Locator', 'Universal Routing Link', 'User Request List', 'Unified Reference Layer'], correctIndex: 0, explanation: 'A URL specifies the web address and protocol used to locate a resource online.' },
  { category: 'Networking', difficulty: 'easy', question: 'Which command-line tool sends ICMP Echo packets to test if a host is reachable?', choices: ['ping', 'mkdir', 'chmod', 'grep'], correctIndex: 0, explanation: 'ping tests network connectivity and round-trip latency to a target host.' },
  { category: 'Networking', difficulty: 'easy', question: 'What is the default port for unencrypted HTTP web traffic?', choices: ['80', '443', '22', '53'], correctIndex: 0, explanation: 'Standard unencrypted HTTP runs on TCP port 80.' },
  { category: 'Networking', difficulty: 'easy', question: 'What does Wi-Fi allow devices to do?', choices: ['Connect to a local network and internet wirelessly via radio waves', 'Charge batteries without cables', 'Print 3D graphics', 'Store files inside monitors'], correctIndex: 0, explanation: 'Wi-Fi (IEEE 802.11) provides wireless local networking.' },

  // Medium (10)
  { category: 'Networking', difficulty: 'medium', question: 'How many layers are in the OSI reference model?', choices: ['7 layers', '4 layers', '5 layers', '10 layers'], correctIndex: 0, explanation: 'The OSI model consists of 7 layers, from Physical (Layer 1) to Application (Layer 7).' },
  { category: 'Networking', difficulty: 'medium', question: 'Which protocol guarantees reliable, ordered delivery via a 3-way handshake?', choices: ['TCP', 'UDP', 'ICMP', 'ARP'], correctIndex: 0, explanation: 'TCP establishes connections with SYN, SYN-ACK, ACK and retransmits lost packets.' },
  { category: 'Networking', difficulty: 'medium', question: 'Which loopback IPv4 address always refers to the local machine (localhost)?', choices: ['127.0.0.1', '192.168.1.1', '8.8.8.8', '255.255.255.0'], correctIndex: 0, explanation: '127.0.0.1 is the standard IPv4 loopback address pointing back to the host itself.' },
  { category: 'Networking', difficulty: 'medium', question: 'What does HTTP status code 404 indicate?', choices: ['Resource Not Found', 'Request Succeeded', 'Internal Server Error', 'Redirect Moved'], correctIndex: 0, explanation: 'HTTP 404 means the server could not find the requested resource.' },
  { category: 'Networking', difficulty: 'medium', question: 'Which protocol is lightweight and connectionless, favored for live gaming and streaming?', choices: ['UDP', 'TCP', 'FTP', 'SSH'], correctIndex: 0, explanation: 'UDP skips handshake and retransmission overhead for minimal latency.' },
  { category: 'Networking', difficulty: 'medium', question: 'Which secure protocol runs on port 22 for encrypted remote terminal login?', choices: ['SSH', 'Telnet', 'SMTP', 'POP3'], correctIndex: 0, explanation: 'SSH (Secure Shell) encrypts remote command-line sessions on TCP port 22.' },
  { category: 'Networking', difficulty: 'medium', question: 'What is the length of a standard IPv4 address in bits?', choices: ['32 bits', '64 bits', '128 bits', '16 bits'], correctIndex: 0, explanation: 'IPv4 addresses consist of 32 bits written as four decimal octets (e.g., 192.168.1.1).' },
  { category: 'Networking', difficulty: 'medium', question: 'What does a Network Switch primarily use to forward frames inside a LAN?', choices: ['MAC Addresses', 'Domain Names', 'URL Paths', 'SQL Keys'], correctIndex: 0, explanation: 'Layer 2 switches maintain MAC address tables to deliver frames to the exact port.' },
  { category: 'Networking', difficulty: 'medium', question: 'What does HTTP status code 200 represent?', choices: ['OK (Request Succeeded)', 'Unauthorized', 'Bad Gateway', 'Forbidden'], correctIndex: 0, explanation: 'HTTP 200 OK indicates the request succeeded normally.' },
  { category: 'Networking', difficulty: 'medium', question: 'Which protocol is used for sending outgoing email between mail servers?', choices: ['SMTP', 'IMAP', 'DNS', 'NTP'], correctIndex: 0, explanation: 'Simple Mail Transfer Protocol (SMTP) handles outgoing email transmission.' },

  // Hard (10)
  { category: 'Networking', difficulty: 'hard', question: 'At which OSI layer does a standard MAC address operate?', choices: ['Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 7 (Application)'], correctIndex: 0, explanation: 'MAC addresses identify interfaces on a local segment at Layer 2 (Data Link).' },
  { category: 'Networking', difficulty: 'hard', question: 'How many usable host addresses exist in a /24 IPv4 subnet?', choices: ['254', '256', '255', '128'], correctIndex: 0, explanation: 'A /24 subnet has 256 total addresses minus 1 network address and 1 broadcast address = 254.' },
  { category: 'Networking', difficulty: 'hard', question: 'Which protocol automatically assigns IP addresses to devices joining a network?', choices: ['DHCP', 'SNMP', 'SSH', 'FTP'], correctIndex: 0, explanation: 'DHCP dynamically leases IP addresses, subnet masks, and gateway info to clients.' },
  { category: 'Networking', difficulty: 'hard', question: 'What does NAT (Network Address Translation) primarily enable?', choices: ['Multiple private LAN devices sharing a public IP address', 'Compressing HTML images in transit', 'Doubling fiber-optic cable length', 'Replacing TLS certificates'], correctIndex: 0, explanation: 'NAT translates private internal IP addresses to a public IP when communicating on the internet.' },
  { category: 'Networking', difficulty: 'hard', question: 'Which protocol resolves a known IPv4 address into its corresponding local MAC address?', choices: ['ARP (Address Resolution Protocol)', 'DNS', 'BGP', 'OSPF'], correctIndex: 0, explanation: 'ARP broadcasts a query on a local subnet to map an IPv4 address to a physical MAC address.' },
  { category: 'Networking', difficulty: 'hard', question: 'How many bits are in an IPv6 address?', choices: ['128 bits', '32 bits', '64 bits', '256 bits'], correctIndex: 0, explanation: 'IPv6 expands address space to 128 bits written in hexadecimal colon groups.' },
  { category: 'Networking', difficulty: 'hard', question: 'What is the subnet mask for a /26 IPv4 CIDR block?', choices: ['255.255.255.192', '255.255.255.0', '255.255.255.128', '255.255.255.224'], correctIndex: 0, explanation: '/26 sets 2 extra network bits in the final octet: 128 + 64 = 192.' },
  { category: 'Networking', difficulty: 'hard', question: 'Which routing protocol exchanges reachability across Autonomous Systems on the global Internet?', choices: ['BGP (Border Gateway Protocol)', 'RIP', 'ARP', 'STP'], correctIndex: 0, explanation: 'BGP is the inter-domain path-vector protocol powering global internet routing.' },
  { category: 'Networking', difficulty: 'hard', question: 'What does a TLS Handshake verify before HTTPS transmits encrypted HTTP data?', choices: ['Server identity via certificate and shared session key negotiation', 'HTML font loading speed', 'Client monitor resolution', 'Database table schema'], correctIndex: 0, explanation: 'The TLS handshake authenticates certificates and agrees on symmetric session keys.' },
  { category: 'Networking', difficulty: 'hard', question: 'What is the purpose of a VLAN (Virtual Local Area Network)?', choices: ['Logically segment one physical switch network into isolated broadcast domains', 'Double Wi-Fi transmission power', 'Convert IPv4 into MAC addresses', 'Replace DNS servers'], correctIndex: 0, explanation: 'VLANs isolate broadcast traffic and enforce security boundaries across logical groups.' },

  // ===========================================================================
  // 9. School Subjects (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'School Subjects', difficulty: 'easy', question: 'What is the value of 12 × 12?', choices: ['144', '124', '132', '156'], correctIndex: 0, explanation: '12 multiplied by 12 equals 144.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'Which gas do plants primarily absorb for photosynthesis?', choices: ['Carbon Dioxide (CO2)', 'Nitrogen', 'Helium', 'Argon'], correctIndex: 0, explanation: 'Plants take in carbon dioxide and water using sunlight to produce glucose and oxygen.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'What is the chemical symbol for Water?', choices: ['H2O', 'O2', 'CO2', 'NaCl'], correctIndex: 0, explanation: 'Each water molecule contains two hydrogen atoms and one oxygen atom (H2O).' },
  { category: 'School Subjects', difficulty: 'easy', question: 'How many degrees are in the interior angles of a triangle?', choices: ['180 degrees', '90 degrees', '360 degrees', '270 degrees'], correctIndex: 0, explanation: 'The three interior angles of any Euclidean triangle always sum to 180 degrees.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'What is the boiling point of pure water at standard sea-level pressure?', choices: ['100 °C', '50 °C', '0 °C', '212 °C'], correctIndex: 0, explanation: 'Water boils at 100 degrees Celsius (212 degrees Fahrenheit) at 1 atm.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'Which organ pumps blood throughout the human body?', choices: ['Heart', 'Lungs', 'Liver', 'Kidney'], correctIndex: 0, explanation: 'The muscular heart circulates oxygenated and deoxygenated blood through blood vessels.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'What is the perimeter of a square whose sides each measure 7 cm?', choices: ['28 cm', '49 cm', '14 cm', '21 cm'], correctIndex: 0, explanation: 'A square has four equal sides, so 4 × 7 cm = 28 cm.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'Which force pulls objects toward the center of Earth?', choices: ['Gravity', 'Magnetism', 'Friction', 'Buoyancy'], correctIndex: 0, explanation: 'Gravitational attraction pulls masses toward one another.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'What is 25% of 200?', choices: ['50', '25', '75', '100'], correctIndex: 0, explanation: '25% equals one quarter, and 200 / 4 = 50.' },
  { category: 'School Subjects', difficulty: 'easy', question: 'Which gas makes up roughly 78% of Earth’s atmosphere?', choices: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Hydrogen'], correctIndex: 0, explanation: 'Earth’s atmosphere is about 78% nitrogen and 21% oxygen.' },

  // Medium (10)
  { category: 'School Subjects', difficulty: 'medium', question: 'What is the SI unit of electrical resistance?', choices: ['Ohm', 'Volt', 'Watt', 'Ampere'], correctIndex: 0, explanation: 'Electrical resistance is measured in Ohms (Ω), named after Georg Simon Ohm.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'Which organelle is called the powerhouse of the eukaryotic cell?', choices: ['Mitochondria', 'Ribosome', 'Golgi Apparatus', 'Lysosome'], correctIndex: 0, explanation: 'Mitochondria generate most of a cell’s ATP chemical energy.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'Solve for x: 3x + 7 = 22', choices: ['x = 5', 'x = 4', 'x = 6', 'x = 7'], correctIndex: 0, explanation: 'Subtract 7 to get 3x = 15, then divide by 3 to obtain x = 5.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'According to Newton’s Second Law, Force equals what?', choices: ['Mass × Acceleration (F = ma)', 'Mass / Velocity', 'Energy × Time', 'Pressure + Volume'], correctIndex: 0, explanation: 'Newton’s Second Law states that net force equals mass multiplied by acceleration.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'What pH value represents a neutral solution such as pure water at 25 °C?', choices: ['7', '1', '14', '0'], correctIndex: 0, explanation: 'On the 0–14 pH scale, 7 is neutral, below 7 is acidic, and above 7 is basic.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'What is the area of a triangle with base 10 cm and height 6 cm?', choices: ['30 cm^2', '60 cm^2', '16 cm^2', '20 cm^2'], correctIndex: 0, explanation: 'Triangle area = (1/2) × base × height = 0.5 × 10 × 6 = 30 cm^2.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'In biology, what molecule carries genetic instructions for living organisms?', choices: ['DNA', 'Glucose', 'Hemoglobin', 'Insulin'], correctIndex: 0, explanation: 'Deoxyribonucleic acid (DNA) encodes hereditary genetic instructions.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'Using Ohm’s Law (V = I × R), what voltage drives 2 Amperes through 6 Ohms?', choices: ['12 Volts', '3 Volts', '8 Volts', '4 Volts'], correctIndex: 0, explanation: 'V = I × R = 2 A × 6 Ω = 12 Volts.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'What historical period marked the transition from hand tools to mechanized factory production?', choices: ['Industrial Revolution', 'Bronze Age', 'Renaissance', 'Classical Antiquity'], correctIndex: 0, explanation: 'The Industrial Revolution (18th–19th century) mechanized manufacturing and transport.' },
  { category: 'School Subjects', difficulty: 'medium', question: 'What is the value of log10(1000)?', choices: ['3', '2', '10', '100'], correctIndex: 0, explanation: '10 raised to the power of 3 equals 1,000, so log10(1000) = 3.' },

  // Hard (10)
  { category: 'School Subjects', difficulty: 'hard', question: 'What is the derivative of f(x) = x^3 with respect to x?', choices: ['3x^2', 'x^2', '3x', 'x^4 / 4'], correctIndex: 0, explanation: 'By the power rule, d/dx(x^n) = n·x^(n-1), so d/dx(x^3) = 3x^2.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'Which subatomic particle determines the atomic number of an element?', choices: ['Proton', 'Neutron', 'Photon', 'Positron'], correctIndex: 0, explanation: 'An element’s atomic number equals the number of protons in its nucleus.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'In what year did humans first land on the Moon during Apollo 11?', choices: ['1969', '1965', '1972', '1959'], correctIndex: 0, explanation: 'Apollo 11 landed on the Moon on July 20, 1969.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'If a right triangle has legs of 6 and 8, what is its hypotenuse?', choices: ['10', '12', '14', '9'], correctIndex: 0, explanation: 'By the Pythagorean theorem: sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'What is the kinetic energy (KE = 1/2 m v^2) of a 4 kg object moving at 5 m/s?', choices: ['50 Joules', '20 Joules', '100 Joules', '10 Joules'], correctIndex: 0, explanation: 'KE = 0.5 × 4 × 5^2 = 2 × 25 = 50 Joules.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'Solve the quadratic equation x^2 - 5x + 6 = 0.', choices: ['x = 2 or x = 3', 'x = -2 or x = -3', 'x = 1 or x = 6', 'x = 0 or x = 5'], correctIndex: 0, explanation: 'Factoring gives (x - 2)(x - 3) = 0, so the roots are x = 2 and x = 3.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'Which cellular division process produces gametes with half the chromosome count?', choices: ['Meiosis', 'Mitosis', 'Binary Fission', 'Osmosis'], correctIndex: 0, explanation: 'Meiosis reduces diploid cells into haploid reproductive gametes.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'Which law of thermodynamics states that total entropy in an isolated system never decreases?', choices: ['Second Law of Thermodynamics', 'Zeroth Law of Thermodynamics', 'First Law of Thermodynamics', 'Boyle Law'], correctIndex: 0, explanation: 'The Second Law states entropy of an isolated system tends to increase over time.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'What is the definite integral of 2x from x = 0 to x = 4?', choices: ['16', '8', '4', '32'], correctIndex: 0, explanation: 'The antiderivative of 2x is x^2; evaluating 4^2 - 0^2 gives 16.' },
  { category: 'School Subjects', difficulty: 'hard', question: 'Which chemical bond forms through the sharing of electron pairs between atoms?', choices: ['Covalent Bond', 'Ionic Bond', 'Hydrogen Bridge', 'Metallic Lattice'], correctIndex: 0, explanation: 'Covalent bonding occurs when atoms share valence electron pairs.' },

  // ===========================================================================
  // 10. General Knowledge (30 Questions: 10 Easy, 10 Medium, 10 Hard)
  // ===========================================================================
  // Easy (10)
  { category: 'General Knowledge', difficulty: 'easy', question: 'Which planet is known as the Red Planet?', choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correctIndex: 0, explanation: 'Mars looks reddish due to iron oxide dust covering much of its surface.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'What is the largest ocean on Earth?', choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], correctIndex: 0, explanation: 'The Pacific Ocean covers roughly one-third of Earth’s entire surface.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'What is the capital city of Japan?', choices: ['Tokyo', 'Kyoto', 'Osaka', 'Sapporo'], correctIndex: 0, explanation: 'Tokyo has been Japan’s capital city since 1868.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'How many continents are commonly recognized on Earth?', choices: ['7', '5', '6', '8'], correctIndex: 0, explanation: 'The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'Which mammal is the largest living animal on Earth?', choices: ['Blue Whale', 'African Elephant', 'Giraffe', 'Polar Bear'], correctIndex: 0, explanation: 'The Blue Whale can reach lengths over 30 meters and weights over 150 metric tons.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'Which country is famous for the Eiffel Tower in Paris?', choices: ['France', 'Italy', 'Spain', 'Germany'], correctIndex: 0, explanation: 'The Eiffel Tower stands on the Champ de Mars in Paris, France.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'How many days are there in a standard leap year?', choices: ['366', '365', '364', '360'], correctIndex: 0, explanation: 'Leap years add February 29, totaling 366 days.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'Which star lies at the center of our Solar System?', choices: ['The Sun', 'Sirius', 'Polaris', 'Proxima Centauri'], correctIndex: 0, explanation: 'All planets in our Solar System orbit the Sun.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'What is the primary language spoken in Brazil?', choices: ['Portuguese', 'Spanish', 'French', 'Italian'], correctIndex: 0, explanation: 'Brazil is the largest Portuguese-speaking nation in the world.' },
  { category: 'General Knowledge', difficulty: 'easy', question: 'Which continent is the Sahara Desert located on?', choices: ['Africa', 'Asia', 'Australia', 'South America'], correctIndex: 0, explanation: 'The Sahara spans most of Northern Africa.' },

  // Medium (10)
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which famous scientist formulated the theory of general relativity?', choices: ['Albert Einstein', 'Isaac Newton', 'Nikola Tesla', 'Marie Curie'], correctIndex: 0, explanation: 'Albert Einstein published the theory of general relativity in 1915.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which country is home to the ancient monument Machu Picchu?', choices: ['Peru', 'Mexico', 'Egypt', 'Greece'], correctIndex: 0, explanation: 'Machu Picchu is a 15th-century Inca citadel located in the Andes Mountains of Peru.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'What is the chemical symbol for Gold?', choices: ['Au', 'Ag', 'Gd', 'Go'], correctIndex: 0, explanation: 'Au comes from the Latin word for gold, "aurum".' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which instrument measures atmospheric pressure?', choices: ['Barometer', 'Thermometer', 'Anemometer', 'Hygrometer'], correctIndex: 0, explanation: 'A barometer measures air pressure to help forecast weather changes.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Who wrote the classic play "Romeo and Juliet"?', choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], correctIndex: 0, explanation: 'William Shakespeare wrote Romeo and Juliet around 1595.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which planet in our Solar System is famous for its prominent ring system?', choices: ['Saturn', 'Mercury', 'Venus', 'Mars'], correctIndex: 0, explanation: 'Saturn’s vast rings are composed mainly of ice particles and rocky debris.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'What is the currency of Japan?', choices: ['Yen', 'Won', 'Yuan', 'Baht'], correctIndex: 0, explanation: 'The Japanese Yen (JPY) is the official currency of Japan.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which mountain range separates Europe from Asia?', choices: ['Ural Mountains', 'Alps', 'Andes', 'Rockies'], correctIndex: 0, explanation: 'The Ural Mountains run north-to-south through western Russia as the traditional boundary.' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'Which scientist was the first person to win two Nobel Prizes in two different sciences (Physics & Chemistry)?', choices: ['Marie Curie', 'Niels Bohr', 'Ada Lovelace', 'Galileo Galilei'], correctIndex: 0, explanation: 'Marie Curie won Nobel Prizes in Physics (1903) and Chemistry (1911).' },
  { category: 'General Knowledge', difficulty: 'medium', question: 'What is the capital city of Australia?', choices: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], correctIndex: 0, explanation: 'Canberra was chosen as Australia’s federal capital in 1908 as a compromise between Sydney and Melbourne.' },

  // Hard (10)
  { category: 'General Knowledge', difficulty: 'hard', question: 'Which is the longest river in South America?', choices: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'], correctIndex: 0, explanation: 'The Amazon River stretches across South America and carries the largest water volume on Earth.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'Who painted "The Starry Night" in 1889?', choices: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Leonardo da Vinci'], correctIndex: 0, explanation: 'Vincent van Gogh painted The Starry Night while staying at Saint-Rémy-de-Provence.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'What is the smallest independent country in the world by land area?', choices: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'], correctIndex: 0, explanation: 'Vatican City covers approximately 0.49 square kilometers.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'Which element has the highest electrical conductivity at room temperature?', choices: ['Silver', 'Iron', 'Lead', 'Aluminum'], correctIndex: 0, explanation: 'Silver has the highest electrical conductivity of any element, followed closely by copper.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'Which strait separates Asia from North America between Russia and Alaska?', choices: ['Bering Strait', 'Strait of Gibraltar', 'Strait of Malacca', 'Bosporus Strait'], correctIndex: 0, explanation: 'The Bering Strait connects the Pacific and Arctic oceans between Russia and Alaska.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'In which city is the ancient Library of Celsus located?', choices: ['Ephesus (Turkey)', 'Alexandria (Egypt)', 'Athens (Greece)', 'Rome (Italy)'], correctIndex: 0, explanation: 'The Library of Celsus was built in the 2nd century CE in Ephesus, Anatolia.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'Which treaty signed in 1215 established that the English monarch was subject to the law?', choices: ['Magna Carta', 'Treaty of Versailles', 'Peace of Westphalia', 'Edict of Nantes'], correctIndex: 0, explanation: 'King John sealed the Magna Carta at Runnymede in 1215.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'What is the deepest known oceanic trench on Earth?', choices: ['Mariana Trench', 'Tonga Trench', 'Java Trench', 'Puerto Rico Trench'], correctIndex: 0, explanation: 'Challenger Deep in the Mariana Trench reaches nearly 11,000 meters below sea level.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'Which ancient civilization built the stone city of Petra carved into rose-red cliffs?', choices: ['Nabataeans', 'Phoenicians', 'Mycenaeans', 'Sumerians'], correctIndex: 0, explanation: 'The Nabataean Kingdom carved Petra in southern Jordan as a major caravan hub.' },
  { category: 'General Knowledge', difficulty: 'hard', question: 'What is the approximate speed of light in a vacuum?', choices: ['299,792 km/s', '150,000 km/s', '343 m/s', '1,080,000 km/s'], correctIndex: 0, explanation: 'Light travels in a vacuum at exactly 299,792,458 meters per second (~300,000 km/s).' }
];

/* ----------------------------------------------------------------------------
   2B. PLAYABLE HERO ROSTER (4 SELECTABLE HEROES FOR 2-CHARACTER SQUAD)
   ---------------------------------------------------------------------------- */
const HEROES = [
  {
    id: 0,
    nameKey: 'hero_0_name',
    roleKey: 'hero_0_role',
    weaponKey: 'hero_0_weapon',
    descKey: 'hero_0_desc',
    defaultName: 'Aegis Knight',
    projColor: '#60a5fa',
    auraColor: '#38bdf8'
  },
  {
    id: 1,
    nameKey: 'hero_1_name',
    roleKey: 'hero_1_role',
    weaponKey: 'hero_1_weapon',
    descKey: 'hero_1_desc',
    defaultName: 'Nova Valkyrie',
    projColor: '#fb7185',
    auraColor: '#fde047'
  },
  {
    id: 2,
    nameKey: 'hero_2_name',
    roleKey: 'hero_2_role',
    weaponKey: 'hero_2_weapon',
    descKey: 'hero_2_desc',
    defaultName: 'Volt Ronin',
    projColor: '#22d3ee',
    auraColor: '#4ade80'
  },
  {
    id: 3,
    nameKey: 'hero_3_name',
    roleKey: 'hero_3_role',
    weaponKey: 'hero_3_weapon',
    descKey: 'hero_3_desc',
    defaultName: 'Arcane Pyromancer',
    projColor: '#c084fc',
    auraColor: '#fb923c'
  }
];

/* ----------------------------------------------------------------------------
   2C. BILINGUAL DICTIONARY (ENGLISH & INDONESIAN)
   ---------------------------------------------------------------------------- */
const I18N = {
  en: {
    nav_home: 'HOME',
    nav_play: 'PLAY GAME',
    nav_bosses: 'BOSS COLLECTION',
    nav_heroes: 'HEROES',
    nav_materials: 'MATERIALS',
    nav_difficulty: 'DIFFICULTY',
    nav_scoreboard: 'SCOREBOARD',
    nav_history: 'BATTLE HISTORY',
    nav_settings: 'SETTINGS',
    sound_on: 'Sound: ON',
    sound_off: 'Sound: OFF',
    state_on: 'ON',
    state_off: 'OFF',
    lobby_subtitle: 'Prove your knowledge. Defeat the Boss.',
    btn_start_battle: 'START BATTLE',
    btn_continue: 'CONTINUE',
    btn_save: 'Save',
    btn_cancel: 'Cancel',
    label_level: 'Level',
    label_xp_progress: 'Experience Progress',
    stat_high_score: 'Highest Score',
    stat_total_wins: 'Total Victories',
    stat_bosses_defeated: 'Bosses Defeated',
    loadout_squad: 'Squad Heroes',
    loadout_target_boss: 'Target Boss',
    loadout_material: 'Material',
    loadout_difficulty: 'Difficulty',
    welcome_back: 'Welcome back, {name}',
    welcome_new: 'Welcome, {name}. Your trial awaits.',
    lobby_hero_meta: 'Lv. {level} · Change Squad',
    placeholder_name: 'Enter name...',
    hero_0_name: 'Aegis Knight',
    hero_0_role: 'Azure Vanguard',
    hero_0_weapon: 'Runic Broadsword',
    hero_0_desc: 'Steadfast guardian clad in sapphire steel, unleashing balanced arcane blade arcs.',
    hero_1_name: 'Nova Valkyrie',
    hero_1_role: 'Solar Lancer',
    hero_1_weapon: 'Crimson Halberd',
    hero_1_desc: 'Winged champion of dawn who cleaves foes with twin rose-gold crescent strikes.',
    hero_2_name: 'Volt Ronin',
    hero_2_role: 'Neon Blademaster',
    hero_2_weapon: 'Plasma Katana',
    hero_2_desc: 'Cybernetic duelist wielding high-voltage iaido slashes and emerald lightning.',
    hero_3_name: 'Arcane Pyromancer',
    hero_3_role: 'Astral Battlemage',
    hero_3_weapon: 'Ember Spellstaff',
    hero_3_desc: 'Mystic conjurer channeling violet starfire and scorching plasma bursts.',
    heroes_title: 'Squad Character Selection',
    heroes_desc: 'Choose your Lead Hero (Hero 1) and Backup Partner (Hero 2). If Hero 1 falls, Hero 2 enters for one final sudden-death attempt.',
    btn_next_bosses: 'Next: Bosses',
    btn_swap_heroes: 'Swap Order',
    hero_slot_1_badge: 'HERO 1 · LEAD',
    hero_slot_2_badge: 'HERO 2 · FINAL CHANCE',
    hero_pill_lead: 'HERO 1 · LEAD',
    hero_pill_partner: 'HERO 2 · PARTNER',
    hero_pill_avail: 'ROSTER',
    btn_set_lead: 'Set as Hero 1',
    btn_lead_selected: 'Hero 1 Active',
    btn_set_partner: 'Set as Hero 2',
    btn_partner_selected: 'Hero 2 Active',
    prep_squad: 'Squad',
    hero_role_sub: 'Hero {num} · {hero}',
    party_active: 'ACTIVE',
    party_standby: 'STANDBY',
    party_fallen: 'FALLEN',
    bosses_title: 'Boss Collection',
    bosses_desc: 'Select an unlocked Boss to challenge. Defeat each guardian to unlock the next tier up to Level 25.',
    filter_all_bosses: 'All (25)',
    filter_unlocked: 'Unlocked',
    filter_defeated: 'Defeated',
    filter_cute: 'Cute (21–24)',
    boss_empty: 'No bosses match this filter yet. Defeat unlocked bosses to expand your collection.',
    boss_status_locked: 'LOCKED',
    boss_status_defeated: 'DEFEATED',
    boss_status_unlocked: 'UNLOCKED',
    boss_btn_selected: 'SELECTED',
    boss_btn_challenge: 'CHALLENGE',
    boss_btn_locked: 'LOCKED',
    boss_locked_title: 'Locked Boss #{level}',
    boss_locked_desc: 'Defeat Boss Level {prev} to unlock this challenger.',
    materials_title: 'Quiz Materials',
    materials_desc: 'Choose a focused subject category or select All Material for a full-spectrum knowledge trial.',
    btn_next_difficulty: 'Next: Difficulty',
    mat_all_name: 'ALL MATERIAL',
    mat_all_desc: 'Random mix drawn from all 10 knowledge realms.',
    mat_RPL_desc: 'Software engineering, SDLC, UML, testing, and agile methods.',
    mat_Programming_desc: 'Algorithms, data structures, OOP, and coding fundamentals.',
    mat_Technology_desc: 'Cloud computing, AI, IoT, cybersecurity, and modern tech.',
    mat_Database_desc: 'SQL queries, normalization, keys, ACID, and NoSQL.',
    'mat_HTML & CSS_desc': 'Semantic markup, Flexbox, Grid, responsive UI, and styling.',
    mat_JavaScript_desc: 'ES6+, DOM events, closures, async/await, and browser APIs.',
    mat_Computer_desc: 'CPU architecture, RAM, OS kernels, binary, and hardware.',
    mat_Networking_desc: 'TCP/IP, DNS, HTTP, OSI layers, routers, and subnetting.',
    'mat_School Subjects_desc': 'Mathematics, physics, biology, chemistry, and history.',
    'mat_General Knowledge_desc': 'World geography, culture, landmarks, and notable facts.',
    questions_count: '{count} Questions',
    difficulty_title: 'Difficulty & Battle Prep',
    difficulty_desc: 'Timers scale with Boss Level (Lv.1 = 40s, Lv.2 = 39s, Lv.3 = 38s). Choose your combat intensity.',
    btn_enter_arena: 'Enter Arena',
    prep_selected_boss: 'Selected Boss',
    prep_material: 'Material',
    prep_questions: 'Questions',
    prep_questions_val: '10 Unique',
    prep_timer: 'Effective Timer',
    prep_timer_val: '{sec}s / question',
    diff_easy_label: 'EASY',
    diff_medium_label: 'MEDIUM',
    diff_hard_label: 'HARD',
    diff_easy_desc: 'Ideal for warming up. Higher hero attack power, gentler boss strikes, and accessible questions.',
    diff_medium_desc: 'Balanced tactical RPG combat with moderate questions and full level-scaled timers.',
    diff_hard_desc: 'For seasoned challengers. Tougher questions, fierce boss strikes, tighter timer, and top score rewards.',
    diff_stat_timer: 'Question Timer',
    diff_stat_hero: 'Hero Attack Power',
    diff_stat_boss: 'Boss Attack Power',
    diff_stat_mult: 'Score Multiplier',
    scoreboard_title: 'Scoreboard & Adventurer Record',
    scoreboard_desc: 'Persistent career combat metrics and progression across all boss encounters.',
    sb_standing: 'Adventurer Standing',
    sb_sub_meta: 'Level {level} · {earned} / {total} Achievements Earned',
    sb_challenge_btn: 'Challenge Next Boss',
    sb_high_score: 'Highest Battle Score',
    sb_total_score: 'Cumulative Total Score',
    sb_total_wins: 'Total Wins',
    sb_total_losses: 'Total Losses',
    sb_win_rate: 'Win Rate',
    sb_bosses_defeated: 'Bosses Defeated',
    sb_highest_boss: 'Highest Boss Unlocked',
    sb_total_battles: 'Total Battles',
    sb_achievements: 'Achievements',
    rank_overlord: 'Overlord Bane',
    rank_mythic: 'Mythic Legend',
    rank_champion: 'Grand Champion',
    rank_slayer: 'Boss Slayer',
    rank_knight: 'Arcane Knight',
    rank_apprentice: 'Apprentice Scholar',
    ach_first_title: 'First Victory',
    ach_first_desc: 'Defeat your first Boss in the arena.',
    ach_slayer_title: 'Boss Slayer',
    ach_slayer_desc: 'Defeat at least 5 unique Bosses.',
    ach_halfway_title: 'Halfway Sovereign',
    ach_halfway_desc: 'Defeat 12 unique Bosses.',
    ach_score_title: 'Score Prodigy',
    ach_score_desc: 'Achieve 3,000+ score in a single battle.',
    ach_cute_title: 'Cute Boss Tamer',
    ach_cute_desc: 'Defeat any Cute Mythic Boss (Lv. 21–24).',
    ach_overlord_title: 'Crown of Boss Rush',
    ach_overlord_desc: 'Defeat the Final Overlord (Lv. 25).',
    history_title: 'Battle History',
    history_desc: 'Chronological record of your past Boss Rush encounters.',
    filter_all: 'All',
    filter_victories: 'Victories',
    filter_defeats: 'Defeats',
    hist_empty: 'No battles recorded yet. Enter the arena to forge your legend.',
    hist_empty_btn: 'Start First Battle',
    hist_empty_filtered: 'No {filter} encounters recorded yet.',
    hist_score: 'Score',
    hist_correct: 'Correct',
    hist_accuracy: 'Accuracy',
    settings_title: 'Settings',
    settings_desc: 'Manage audio feedback, language, player profile, and saved browser data.',
    settings_name_title: 'Player Name',
    settings_name_desc: 'Displayed in the lobby, battle arena, and scoreboard.',
    btn_update_name: 'Update Name',
    settings_lang_title: 'Language',
    settings_lang_desc: 'Switch game interface language between English and Indonesian.',
    settings_sound_title: 'Sound Effects',
    settings_sound_desc: 'Synthesized Web Audio RPG attack, hit, timer warning, and victory sounds.',
    settings_reset_title: 'Reset Saved Progress',
    settings_reset_desc: 'Permanently erase all scores, unlocked bosses, battle history, and player profile from localStorage.',
    btn_reset_data: 'RESET DATA',
    intro_challenger: 'CHALLENGER APPROACHES',
    btn_skip_intro: 'Skip Intro',
    label_question: 'Question',
    btn_retreat: 'Retreat',
    label_score: 'Score',
    label_combo: 'Combo',
    label_dmg_mult: 'DMG Multiplier',
    mult_next_hint: '{rem} more for x{next} DMG',
    mult_active_hint: 'BOOST x{curr} · {rem} more for x{next}',
    battle_get_ready: 'Get ready for battle...',
    hp_ready: 'READY',
    hp_wounded: 'WOUNDED',
    hp_critical: 'CRITICAL',
    hp_fallen: 'FALLEN',
    sudden_death_notice: 'FINAL HERO: Running out of time causes INSTANT DEFEAT!',
    fb_correct: 'CORRECT!',
    fb_wrong: 'WRONG!',
    fb_timeout: 'TIME OUT!',
    fb_player_atk: 'HERO ATTACK!',
    fb_player_atk_boost: 'HERO ATTACK! (x{mult} DMG)',
    fb_boss_atk: 'BOSS ATTACK!',
    fb_second_chance_status: 'SECOND CHANCE!',
    fb_second_chance_action: 'HERO 2 ENTERS BATTLE!',
    fb_second_chance_exp: '{hero2} takes over with full 100 HP! Warning: if the timer expires on Hero 2, you lose immediately.',
    fb_hero2_timeout_status: 'TIME EXPIRED ON HERO 2!',
    fb_hero2_timeout_action: 'INSTANT DEFEAT!',
    fb_hero2_timeout_exp: 'Time ran out while {hero2} was fighting — sudden-death defeat triggered! {exp}',
    fb_hero2_ko_tag: 'TIME OUT KO!',
    callout_challenge: 'CHALLENGE ACCEPTED!',
    callout_evade: 'EVADE!',
    callout_battle_begins: 'THE BATTLE BEGINS!',
    intro_kicker_mythic: 'MYTHIC GUARDIAN',
    intro_stage_mythic: 'STARLIGHT DUEL',
    intro_kicker_overlord: 'SUPREME OVERLORD',
    intro_stage_overlord: 'FINAL JUDGMENT',
    intro_kicker_titan: 'APEX TITAN',
    intro_stage_titan: 'SKYWARD CLASH',
    intro_kicker_shadow: 'SHADOW ENCOUNTER',
    intro_stage_shadow: 'PHANTOM STRIKE',
    intro_kicker_boss: 'BOSS ENCOUNTER',
    intro_stage_arcane: 'ARCANE ARENA',
    intro_kicker_colossus: 'COLOSSUS GUARDIAN',
    intro_stage_seismic: 'SEISMIC DUEL',
    intro_kicker_predator: 'PREDATOR ASSAULT',
    intro_stage_voltage: 'HIGH VOLTAGE',
    intro_stage_elemental: 'ELEMENTAL CLASH',
    intro_stage_blade: 'BLADE SHOWDOWN',
    res_final_score: 'Final Battle Score',
    res_new_unlock: 'New Boss Unlocked:',
    res_k_outcome: 'Outcome',
    res_k_boss: 'Boss',
    res_k_boss_defeated: 'Boss Defeated',
    res_k_difficulty: 'Difficulty',
    res_k_correct: 'Correct Answers',
    res_k_wrong: 'Wrong Answers',
    res_k_accuracy: 'Accuracy',
    res_k_combo: 'Best Combo',
    res_k_dmg_dealt: 'Damage Dealt',
    res_k_dmg_taken: 'Damage Received',
    res_k_time: 'Total Time',
    res_k_material: 'Material',
    btn_play_again: 'PLAY AGAIN',
    btn_boss_select: 'BOSS SELECT',
    btn_main_menu: 'MAIN MENU',
    res_victory: 'VICTORY!',
    res_defeat: 'DEFEAT!',
    res_outcome_victory: 'VICTORY',
    res_outcome_defeat: 'DEFEAT',
    res_yes_defeated: 'BOSS DEFEATED',
    res_no: 'No',
    res_sub_victory: '{boss} (Lv. {level}) has been defeated!',
    res_sub_victory_second: '{hero2} rallied for a second-chance victory against {boss} (Lv. {level})!',
    res_sub_hero2_timeout: 'Timer expired while fighting as {hero2} — sudden-death defeat!',
    res_sub_defeat_hp: 'Both heroes fell before {boss} could be defeated.',
    res_sub_defeat_q: '10 questions completed, but {boss} survived with {hp} HP.',
    toast_boss_unlock: 'New Boss Unlocked',
    toast_level_up: 'Level Up!',
    toast_level_up_msg: 'You reached Adventurer Level {level}',
    toast_ach: 'Achievement Earned',
    toast_lang_title: 'Language Updated',
    toast_lang_msg: 'Interface switched to English.',
    modal_reset_title: 'Reset All Progress?',
    modal_reset_body: 'This will clear your player profile, high scores, battle history, and reset all unlocked bosses back to Level 1.',
    btn_confirm_reset: 'Confirm Reset'
  },
  id: {
    nav_home: 'BERANDA',
    nav_play: 'MAIN SEKARANG',
    nav_bosses: 'KOLEKSI BOSS',
    nav_heroes: 'KARAKTER',
    nav_materials: 'MATERI KUIS',
    nav_difficulty: 'KESULITAN',
    nav_scoreboard: 'PAPAN SKOR',
    nav_history: 'RIWAYAT TARUNG',
    nav_settings: 'PENGATURAN',
    sound_on: 'Suara: NYALA',
    sound_off: 'Suara: MATI',
    state_on: 'NYALA',
    state_off: 'MATI',
    lobby_subtitle: 'Buktikan pengetahuanmu. Kalahkan sang Boss.',
    btn_start_battle: 'MULAI TARUNG',
    btn_continue: 'LANJUTKAN',
    btn_save: 'Simpan',
    btn_cancel: 'Batal',
    label_level: 'Level',
    label_xp_progress: 'Progres Pengalaman',
    stat_high_score: 'Skor Tertinggi',
    stat_total_wins: 'Total Kemenangan',
    stat_bosses_defeated: 'Boss Dikalahkan',
    loadout_squad: 'Tim Karakter',
    loadout_target_boss: 'Target Boss',
    loadout_material: 'Materi',
    loadout_difficulty: 'Kesulitan',
    welcome_back: 'Selamat datang kembali, {name}',
    welcome_new: 'Selamat datang, {name}. Ujianmu menanti.',
    lobby_hero_meta: 'Lv. {level} · Pilih Tim',
    placeholder_name: 'Masukkan nama...',
    hero_0_name: 'Ksatria Aegis',
    hero_0_role: 'Garda Biru',
    hero_0_weapon: 'Pedang Rune',
    hero_0_desc: 'Penjaga tangguh berbaju baja safir yang melancarkan tebasan energi arkan seimbang.',
    hero_1_name: 'Valkyrie Nova',
    hero_1_role: 'Lancer Surya',
    hero_1_weapon: 'Tombak Crimson',
    hero_1_desc: 'Ksatria bersayap fajar yang membelah musuh dengan tebasan ganda mawar-emas.',
    hero_2_name: 'Ronin Volt',
    hero_2_role: 'Pendekar Neon',
    hero_2_weapon: 'Katana Plasma',
    hero_2_desc: 'Duelis sibernetik dengan tebasan iaido bertegangan tinggi dan kilat zamrud.',
    hero_3_name: 'Pyromancer Arkan',
    hero_3_role: 'Penyihir Tempur',
    hero_3_weapon: 'Tongkat Bara',
    hero_3_desc: 'Penyihir mistis yang menyalurkan api bintang ungu dan ledakan plasma panas.',
    heroes_title: 'Pilih Karakter Tim',
    heroes_desc: 'Pilih Karakter Utama (Hero 1) dan Cadangan (Hero 2). Jika Hero 1 gugur, Hero 2 masuk untuk kesempatan terakhir.',
    btn_next_bosses: 'Lanjut: Pilih Boss',
    btn_swap_heroes: 'Tukar Urutan',
    hero_slot_1_badge: 'KARAKTER 1 · UTAMA',
    hero_slot_2_badge: 'KARAKTER 2 · KESEMPATAN AKHIR',
    hero_pill_lead: 'HERO 1 · UTAMA',
    hero_pill_partner: 'HERO 2 · CADANGAN',
    hero_pill_avail: 'TERSEDIA',
    btn_set_lead: 'Pilih Jadi Hero 1',
    btn_lead_selected: 'Hero 1 Aktif',
    btn_set_partner: 'Pilih Jadi Hero 2',
    btn_partner_selected: 'Hero 2 Aktif',
    prep_squad: 'Tim Hero',
    hero_role_sub: 'Karakter {num} · {hero}',
    party_active: 'AKTIF',
    party_standby: 'SIAGA',
    party_fallen: 'GUGUR',
    bosses_title: 'Koleksi Boss',
    bosses_desc: 'Pilih Boss yang sudah terbuka untuk ditantang. Kalahkan tiap penjaga untuk membuka tingkat berikutnya hingga Level 25.',
    filter_all_bosses: 'Semua (25)',
    filter_unlocked: 'Terbuka',
    filter_defeated: 'Dikalahkan',
    filter_cute: 'Imut (21–24)',
    boss_empty: 'Belum ada boss yang cocok dengan filter ini. Kalahkan boss yang terbuka untuk memperluas koleksimu.',
    boss_status_locked: 'TERKUNCI',
    boss_status_defeated: 'DIKALAHKAN',
    boss_status_unlocked: 'TERBUKA',
    boss_btn_selected: 'DIPILIH',
    boss_btn_challenge: 'TANTANG',
    boss_btn_locked: 'TERKUNCI',
    boss_locked_title: 'Boss Terkunci #{level}',
    boss_locked_desc: 'Kalahkan Boss Level {prev} untuk membuka penantang ini.',
    materials_title: 'Materi Kuis',
    materials_desc: 'Pilih kategori pelajaran tertentu atau pilih Semua Materi untuk ujian pengetahuan lengkap.',
    btn_next_difficulty: 'Lanjut: Kesulitan',
    mat_all_name: 'SEMUA MATERI',
    mat_all_desc: 'Campuran acak dari seluruh 10 bidang pengetahuan.',
    mat_RPL_desc: 'Rekayasa perangkat lunak, SDLC, UML, pengujian, dan metode agile.',
    mat_Programming_desc: 'Algoritma, struktur data, OOP, dan dasar-dasar pemrograman.',
    mat_Technology_desc: 'Komputasi awan, AI, IoT, keamanan siber, dan teknologi modern.',
    mat_Database_desc: 'Kueri SQL, normalisasi, kunci relasi, ACID, dan NoSQL.',
    'mat_HTML & CSS_desc': 'Markup semantik, Flexbox, Grid, UI responsif, dan styling.',
    mat_JavaScript_desc: 'ES6+, event DOM, closure, async/await, dan API browser.',
    mat_Computer_desc: 'Arsitektur CPU, RAM, kernel OS, biner, dan perangkat keras.',
    mat_Networking_desc: 'TCP/IP, DNS, HTTP, lapisan OSI, router, dan subnetting.',
    'mat_School Subjects_desc': 'Matematika, fisika, biologi, kimia, dan sejarah.',
    'mat_General Knowledge_desc': 'Geografi dunia, budaya, landmark, dan fakta menarik.',
    questions_count: '{count} Soal',
    difficulty_title: 'Kesulitan & Persiapan Tarung',
    difficulty_desc: 'Waktu soal mengikuti Level Boss (Lv.1 = 40d, Lv.2 = 39d, Lv.3 = 38d). Pilih intensitas pertarunganmu.',
    btn_enter_arena: 'Masuk Arena',
    prep_selected_boss: 'Boss Terpilih',
    prep_material: 'Materi',
    prep_questions: 'Jumlah Soal',
    prep_questions_val: '10 Soal Unik',
    prep_timer: 'Waktu Efektif',
    prep_timer_val: '{sec}d / soal',
    diff_easy_label: 'MUDAH',
    diff_medium_label: 'SEDANG',
    diff_hard_label: 'SULIT',
    diff_easy_desc: 'Cocok untuk pemanasan. Serangan hero lebih kuat, serangan boss lebih ringan, dan soal dasar.',
    diff_medium_desc: 'Pertarungan RPG taktis yang seimbang dengan soal menengah dan timer sesuai level.',
    diff_hard_desc: 'Untuk penantang tangguh. Soal menantang, serangan boss mematikan, timer lebih ketat, dan skor tertinggi.',
    diff_stat_timer: 'Waktu per Soal',
    diff_stat_hero: 'Kekuatan Serang Hero',
    diff_stat_boss: 'Kekuatan Serang Boss',
    diff_stat_mult: 'Pengali Skor',
    scoreboard_title: 'Papan Skor & Catatan Petualang',
    scoreboard_desc: 'Statistik pertarungan karier dan progres permanen di seluruh pertemuan boss.',
    sb_standing: 'Gelar Petualang',
    sb_sub_meta: 'Level {level} · {earned} / {total} Pencapaian Diraih',
    sb_challenge_btn: 'Tantang Boss Berikutnya',
    sb_high_score: 'Skor Pertarungan Tertinggi',
    sb_total_score: 'Total Akumulasi Skor',
    sb_total_wins: 'Total Menang',
    sb_total_losses: 'Total Kalah',
    sb_win_rate: 'Rasio Kemenangan',
    sb_bosses_defeated: 'Boss Dikalahkan',
    sb_highest_boss: 'Boss Tertinggi Terbuka',
    sb_total_battles: 'Total Pertarungan',
    sb_achievements: 'Pencapaian',
    rank_overlord: 'Penakluk Overlord',
    rank_mythic: 'Legenda Mitos',
    rank_champion: 'Juara Agung',
    rank_slayer: 'Pembasmi Boss',
    rank_knight: 'Ksatria Arkan',
    rank_apprentice: 'Pelajar Pemula',
    ach_first_title: 'Kemenangan Pertama',
    ach_first_desc: 'Kalahkan Boss pertamamu di arena.',
    ach_slayer_title: 'Pembasmi Boss',
    ach_slayer_desc: 'Kalahkan minimal 5 Boss unik.',
    ach_halfway_title: 'Penguasa Setengah Jalan',
    ach_halfway_desc: 'Kalahkan 12 Boss unik.',
    ach_score_title: 'Prodigi Skor',
    ach_score_desc: 'Raih skor 3.000+ dalam satu pertarungan.',
    ach_cute_title: 'Penjinak Boss Imut',
    ach_cute_desc: 'Kalahkan Boss Mitos Imut mana saja (Lv. 21–24).',
    ach_overlord_title: 'Mahkota Boss Rush',
    ach_overlord_desc: 'Kalahkan Final Overlord (Lv. 25).',
    history_title: 'Riwayat Pertarungan',
    history_desc: 'Catatan kronologis pertarungan Boss Rush yang telah kamu jalani.',
    filter_all: 'Semua',
    filter_victories: 'Menang',
    filter_defeats: 'Kalah',
    hist_empty: 'Belum ada pertarungan tercatat. Masuk ke arena untuk mengukir legendamu.',
    hist_empty_btn: 'Mulai Tarung Pertama',
    hist_empty_filtered: 'Belum ada catatan pertarungan {filter}.',
    hist_score: 'Skor',
    hist_correct: 'Benar',
    hist_accuracy: 'Akurasi',
    settings_title: 'Pengaturan',
    settings_desc: 'Atur efek suara, bahasa permainan, profil pemain, dan data tersimpan di browser.',
    settings_name_title: 'Nama Pemain',
    settings_name_desc: 'Ditampilkan di lobi, arena pertarungan, dan papan skor.',
    btn_update_name: 'Ubah Nama',
    settings_lang_title: 'Bahasa',
    settings_lang_desc: 'Pilih bahasa antarmuka permainan antara Inggris dan Indonesia.',
    settings_sound_title: 'Efek Suara',
    settings_sound_desc: 'Efek audio sintetis Web Audio untuk serangan RPG, hantaman, peringatan waktu, dan kemenangan.',
    settings_reset_title: 'Reset Progres Tersimpan',
    settings_reset_desc: 'Hapus permanen semua skor, boss terbuka, riwayat tarung, dan profil pemain dari localStorage.',
    btn_reset_data: 'RESET DATA',
    intro_challenger: 'PENANTANG MENDATANG',
    btn_skip_intro: 'Lewati Intro',
    label_question: 'Soal',
    btn_retreat: 'Mundur',
    label_score: 'Skor',
    label_combo: 'Kombo',
    label_dmg_mult: 'Pengali DMG',
    mult_next_hint: '{rem} lagi untuk x{next} DMG',
    mult_active_hint: 'BOOST x{curr} · {rem} lagi ke x{next}',
    battle_get_ready: 'Bersiap untuk bertarung...',
    hp_ready: 'SIAP',
    hp_wounded: 'TERLUKA',
    hp_critical: 'KRITIS',
    hp_fallen: 'GUGUR',
    sudden_death_notice: 'KARAKTER KE-2: Jika waktu habis, kamu LANGSUNG KALAH!',
    fb_correct: 'BENAR!',
    fb_wrong: 'SALAH!',
    fb_timeout: 'WAKTU HABIS!',
    fb_player_atk: 'HERO MENYERANG!',
    fb_player_atk_boost: 'HERO MENYERANG! (x{mult} DMG)',
    fb_boss_atk: 'BOSS MENYERANG!',
    fb_second_chance_status: 'KESEMPATAN KEDUA!',
    fb_second_chance_action: 'KARAKTER 2 MASUK ARENA!',
    fb_second_chance_exp: '{hero2} maju menggantikan dengan 100 HP penuh! Peringatan: jika timer habis di Karakter 2, kamu langsung kalah.',
    fb_hero2_timeout_status: 'WAKTU HABIS DI KARAKTER 2!',
    fb_hero2_timeout_action: 'KALAH LANGSUNG!',
    fb_hero2_timeout_exp: 'Waktu habis saat {hero2} bertarung — kekalahan langsung terjadi! {exp}',
    fb_hero2_ko_tag: 'KALAH WAKTU!',
    callout_challenge: 'TANTANGAN DITERIMA!',
    callout_evade: 'HINDAR!',
    callout_battle_begins: 'PERTARUNGAN DIMULAI!',
    intro_kicker_mythic: 'PENJAGA MITOS',
    intro_stage_mythic: 'DUEL CAHAYA BINTANG',
    intro_kicker_overlord: 'PENGUASA TERTINGGI',
    intro_stage_overlord: 'PENGADILAN AKHIR',
    intro_kicker_titan: 'TITAN PUNCAK',
    intro_stage_titan: 'BENTROKAN LANGIT',
    intro_kicker_shadow: 'PERTEMUAN BAYANGAN',
    intro_stage_shadow: 'SERANGAN SILUMAN',
    intro_kicker_boss: 'PERTEMUAN BOSS',
    intro_stage_arcane: 'ARENA ARKAN',
    intro_kicker_colossus: 'PENJAGA RAKSASA',
    intro_stage_seismic: 'DUEL SEISMIK',
    intro_kicker_predator: 'SERBUAN PREDATOR',
    intro_stage_voltage: 'TEGANGAN TINGGI',
    intro_stage_elemental: 'BENTROK ELEMEN',
    intro_stage_blade: 'DUEL PEDANG',
    res_final_score: 'Skor Akhir Tarung',
    res_new_unlock: 'Boss Baru Terbuka:',
    res_k_outcome: 'Hasil',
    res_k_boss: 'Boss',
    res_k_boss_defeated: 'Boss Dikalahkan',
    res_k_difficulty: 'Kesulitan',
    res_k_correct: 'Jawaban Benar',
    res_k_wrong: 'Jawaban Salah',
    res_k_accuracy: 'Akurasi',
    res_k_combo: 'Kombo Terbaik',
    res_k_dmg_dealt: 'Damage Diberikan',
    res_k_dmg_taken: 'Damage Diterima',
    res_k_time: 'Total Waktu',
    res_k_material: 'Materi',
    btn_play_again: 'MAIN LAGI',
    btn_boss_select: 'PILIH BOSS',
    btn_main_menu: 'MENU UTAMA',
    res_victory: 'MENANG!',
    res_defeat: 'KALAH!',
    res_outcome_victory: 'MENANG',
    res_outcome_defeat: 'KALAH',
    res_yes_defeated: 'BOSS DIKALAHKAN',
    res_no: 'Tidak',
    res_sub_victory: '{boss} (Lv. {level}) berhasil dikalahkan!',
    res_sub_victory_second: '{hero2} bangkit memberi kemenangan kesempatan kedua melawan {boss} (Lv. {level})!',
    res_sub_hero2_timeout: 'Waktu habis saat memakai {hero2} — langsung kalah!',
    res_sub_defeat_hp: 'Kedua karakter telah gugur sebelum {boss} dikalahkan.',
    res_sub_defeat_q: '10 soal selesai, namun {boss} masih bertahan dengan {hp} HP.',
    toast_boss_unlock: 'Boss Baru Terbuka',
    toast_level_up: 'Naik Level!',
    toast_level_up_msg: 'Kamu mencapai Level Petualang {level}',
    toast_ach: 'Pencapaian Diraih',
    toast_lang_title: 'Bahasa Diperbarui',
    toast_lang_msg: 'Bahasa permainan diubah ke Bahasa Indonesia.',
    modal_reset_title: 'Reset Semua Progres?',
    modal_reset_body: 'Ini akan menghapus profil pemain, skor tertinggi, riwayat tarung, dan mengembalikan Boss terbuka ke Level 1.',
    btn_confirm_reset: 'Konfirmasi Reset'
  }
};

function getLang() {
  return player && player.language === 'id' ? 'id' : 'en';
}

function t(key, vars = null) {
  const lang = getLang();
  const dict = I18N[lang] || I18N.en;
  let str = dict[key] ?? I18N.en[key] ?? key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replaceAll(`{${k}}`, String(vars[k]));
    });
  }
  return str;
}

function getSlotHeroId(slotIndex = activeHeroIndex) {
  const heroId = slotIndex === 1 ? partnerHeroId : selectedHeroId;
  return HEROES[heroId] ? heroId : 0;
}

function getHeroObj(slotIndex = activeHeroIndex) {
  return HEROES[getSlotHeroId(slotIndex)] || HEROES[0];
}

function getHeroName(slotIndex = activeHeroIndex) {
  const hero = getHeroObj(slotIndex);
  return t(hero.nameKey);
}

function getHeroNameById(heroId) {
  const hero = HEROES[heroId] || HEROES[0];
  return t(hero.nameKey);
}

function getMaterialLabel(matId) {
  if (matId === 'ALL MATERIAL') return t('mat_all_name');
  return matId;
}

function getDiffLabel(diff) {
  if (diff === 'easy') return t('diff_easy_label');
  if (diff === 'hard') return t('diff_hard_label');
  return t('diff_medium_label');
}

function applyStaticTranslations() {
  document.documentElement.lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  const lobbyInput = document.getElementById('lobby-name-input');
  if (lobbyInput) lobbyInput.placeholder = t('placeholder_name');
}

/* ----------------------------------------------------------------------------
   3. GAME STATE
   ---------------------------------------------------------------------------- */
const DEFAULT_SAVE = {
  playerName: 'Player',
  language: 'en',
  level: 1,
  xp: 0,
  score: 0,
  highScore: 0,
  totalScore: 0,
  totalWins: 0,
  totalLosses: 0,
  defeatedBosses: [],
  unlockedBosses: [1],
  highestBossLevel: 1,
  battleHistory: [],
  soundEnabled: true,
  selectedBossId: 1,
  selectedHeroId: 0,
  partnerHeroId: 1,
  selectedMaterial: 'ALL MATERIAL',
  selectedDifficulty: 'medium'
};

let currentScreen = 'lobby';
let player = { ...DEFAULT_SAVE };
let selectedBoss = BOSSES[0];
let selectedHeroId = 0;
let partnerHeroId = 1;
let selectedMaterial = 'ALL MATERIAL';
let selectedDifficulty = 'medium';
let bossFilter = 'all';
let historyFilter = 'all';
let bossIntroTimer = null;

// Active battle state
let currentQuestion = 0;
let questions = [];
let activeHeroIndex = 0;
let heroHPs = [100, 100];
let secondChanceUsed = false;
let defeatReason = '';
let playerHP = 100;
let maxPlayerHP = 100;
let bossHP = 120;
let maxBossHP = 120;
let score = 0;
let combo = 0;
let maxCombo = 1;
let timer = 40;
let questionMaxTime = 40;
let timerInterval = null;
let correctAnswers = 0;
let wrongAnswers = 0;
let damageDealt = 0;
let damageReceived = 0;
let battleStartTime = 0;
let questionStartTime = 0;
let battleLocked = false;
let battleActive = false;
let battleSessionId = 0;
const battleTimeouts = new Set();

function clearBattleTimeouts() {
  battleTimeouts.forEach((id) => clearTimeout(id));
  battleTimeouts.clear();
}

function scheduleBattleTimeout(fn, delay, sessionId = battleSessionId) {
  const id = setTimeout(() => {
    battleTimeouts.delete(id);
    if (!battleActive || sessionId !== battleSessionId) return;
    fn();
  }, delay);
  battleTimeouts.add(id);
  return id;
}

// Animation states for sprites
const spriteAnim = {
  lobbyPlayer: { state: 'idle', timer: 0, specialAt: 3.5 },
  lobbyBoss: { state: 'idle', timer: 0, specialAt: 4.2 },
  battlePlayer: { state: 'idle', until: 0 },
  battleBoss: { state: 'idle', until: 0 },
  playerLunge: { active: false, start: 0, duration: 380, distX: 60, liftY: 10 },
  bossLunge: { active: false, start: 0, duration: 380, distX: -60, liftY: 10 }
};

function triggerCombatLunge(isPlayer, distX = 58, duration = 380) {
  const lunge = isPlayer ? spriteAnim.playerLunge : spriteAnim.bossLunge;
  lunge.active = true;
  lunge.start = performance.now();
  lunge.duration = duration;
  lunge.distX = distX;
  lunge.liftY = 10;
}

function resetCombatLunges() {
  spriteAnim.playerLunge.active = false;
  spriteAnim.bossLunge.active = false;
  const pWrap = document.getElementById('battle-player-wrap');
  const bWrap = document.getElementById('battle-boss-wrap');
  if (pWrap && !IntroCutscene.isActive()) pWrap.style.transform = '';
  if (bWrap && !IntroCutscene.isActive()) bWrap.style.transform = '';
}

/* ----------------------------------------------------------------------------
   4. WEB AUDIO API SOUND EFFECTS
   ---------------------------------------------------------------------------- */
const SoundFX = (() => {
  let ctx = null;

  function getCtx() {
    if (!player.soundEnabled) return null;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function tone(freq, duration, type = 'square', vol = 0.08, delay = 0, slideTo = null) {
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo) {
      osc.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
    }
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  return {
    click() {
      tone(540, 0.06, 'triangle', 0.06, 0, 720);
    },
    correct() {
      tone(523.25, 0.09, 'triangle', 0.09, 0);
      tone(659.25, 0.12, 'triangle', 0.09, 0.07);
      tone(783.99, 0.16, 'triangle', 0.1, 0.14);
    },
    wrong() {
      tone(240, 0.14, 'sawtooth', 0.08, 0, 170);
      tone(175, 0.22, 'sawtooth', 0.08, 0.12, 110);
    },
    playerAttack() {
      tone(320, 0.16, 'sawtooth', 0.09, 0, 920);
    },
    bossAttack() {
      tone(190, 0.22, 'square', 0.09, 0, 85);
    },
    hit() {
      tone(130, 0.11, 'square', 0.11, 0, 55);
    },
    timerWarn() {
      tone(880, 0.06, 'sine', 0.05, 0);
    },
    victory() {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        tone(f, 0.22, 'triangle', 0.1, idx * 0.11);
      });
    },
    bossDefeat() {
      tone(420, 0.15, 'sawtooth', 0.1, 0, 120);
      tone(220, 0.28, 'square', 0.1, 0.12, 60);
    },
    defeat() {
      [392, 349.23, 311.13, 261.63].forEach((f, idx) => {
        tone(f, 0.26, 'sawtooth', 0.08, idx * 0.14);
      });
    },
    bossIntro(boss = null) {
      if (boss && boss.cute) {
        tone(523.25, 0.14, 'triangle', 0.08, 0);
        tone(659.25, 0.14, 'triangle', 0.08, 0.09);
        tone(783.99, 0.22, 'sine', 0.09, 0.18);
        tone(1046.5, 0.28, 'triangle', 0.08, 0.27);
        return;
      }
      if (boss && boss.id === 25) {
        tone(98.0, 0.34, 'sawtooth', 0.11, 0, 82);
        tone(146.83, 0.28, 'square', 0.08, 0.1);
        tone(220.0, 0.38, 'sawtooth', 0.09, 0.22);
        return;
      }
      tone(146.83, 0.22, 'sawtooth', 0.09, 0);
      tone(220.0, 0.24, 'triangle', 0.08, 0.08);
      tone(293.66, 0.34, 'triangle', 0.09, 0.18);
    },
    dash() {
      tone(260, 0.14, 'triangle', 0.08, 0, 740);
      tone(420, 0.1, 'sine', 0.05, 0.03, 980);
    },
    slash() {
      tone(780, 0.12, 'sawtooth', 0.09, 0, 190);
      tone(520, 0.14, 'triangle', 0.07, 0.03, 140);
    },
    heavyHit() {
      tone(140, 0.18, 'square', 0.12, 0, 48);
      tone(92, 0.22, 'sawtooth', 0.1, 0.02, 38);
    },
    dodge() {
      tone(480, 0.13, 'sine', 0.07, 0, 960);
    },
    clash() {
      tone(620, 0.18, 'sawtooth', 0.1, 0, 220);
      tone(165, 0.28, 'square', 0.11, 0.02, 55);
      tone(880, 0.22, 'triangle', 0.08, 0.04, 440);
    },
    bossCharge(boss = null) {
      if (boss && boss.cute) {
        tone(440, 0.18, 'sine', 0.07, 0, 780);
        return;
      }
      tone(130, 0.28, 'sawtooth', 0.08, 0, 260);
      tone(195, 0.24, 'triangle', 0.06, 0.08, 330);
    },
    secondChance() {
      tone(440, 0.14, 'triangle', 0.09, 0);
      tone(587.33, 0.14, 'triangle', 0.09, 0.08);
      tone(880, 0.22, 'sine', 0.1, 0.16);
      tone(1174.66, 0.3, 'triangle', 0.09, 0.25);
    }
  };
})();

/* ----------------------------------------------------------------------------
   5. 2D PIXEL ART SPRITE RENDERER (PLAYER + 25 UNIQUE BOSSES)
   ---------------------------------------------------------------------------- */
function drawPixelRect(ctx, px, py, w, h, color, unit) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(px * unit), Math.round(py * unit), Math.ceil(w * unit), Math.ceil(h * unit));
}

function renderPlayerSprite(canvas, timeSec, animState = 'idle', auraPhase = 0, heroIndex = 0) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.imageSmoothingEnabled = false;

  const u = Math.floor(Math.min(W, H) / 24);
  const ox = Math.floor((W - 24 * u) / 2);
  const oy = Math.floor((H - 24 * u) / 2);
  const isValkyrie = heroIndex === 1;
  const isRonin = heroIndex === 2;
  const isPyro = heroIndex === 3;

  let bob = Math.sin(timeSec * 3.1 + heroIndex * 1.1) * 1.1;
  let leanX = 0;
  let tilt = 0;
  let flash = false;
  let special = Math.floor((timeSec + heroIndex * 1.5) % 6) === 4;
  let swordBoost = false;

  if (animState === 'stance') {
    leanX = 1.4;
    bob = 1.6 + Math.sin(timeSec * 7) * 0.4;
    tilt = 0.04;
    swordBoost = true;
  } else if (animState === 'dash') {
    leanX = 4.2;
    bob = -0.8;
    tilt = 0.11;
    swordBoost = true;
  } else if (animState === 'attack') {
    leanX = 3.4;
    bob = -1.6;
    tilt = 0.06;
    swordBoost = true;
  } else if (animState === 'clash') {
    leanX = 4.0;
    bob = -1.2;
    tilt = 0.09;
    swordBoost = true;
  } else if (animState === 'dodge') {
    leanX = -3.4;
    bob = -2.8;
    tilt = -0.14;
  } else if (animState === 'hit') {
    leanX = -2.4;
    flash = Math.floor(timeSec * 24) % 2 === 0;
  } else if (animState === 'victory') {
    bob = -Math.abs(Math.sin(timeSec * 6)) * 2.4;
    special = true;
  } else if (animState === 'defeat') {
    bob = 3.2;
  }

  ctx.save();
  ctx.translate(ox + (12 + leanX) * u, oy + (12 + bob) * u);
  if (tilt !== 0) ctx.rotate(tilt);
  ctx.translate(-12 * u, -12 * u);

  // Subtle floating energy motes tailored to hero
  const moteSpeed = swordBoost ? 3.8 : 1.7;
  const moteCount = swordBoost ? 6 : 4;
  const moteColorA = isPyro ? '#c084fc' : isRonin ? '#22d3ee' : isValkyrie ? '#fb7185' : '#60a5fa';
  const moteColorB = isPyro ? '#fb923c' : isRonin ? '#4ade80' : isValkyrie ? '#fef08a' : '#fde047';
  for (let i = 0; i < moteCount; i++) {
    const angle = timeSec * moteSpeed + (i * Math.PI * 2) / moteCount + auraPhase;
    const mx = 12 + Math.cos(angle) * (swordBoost ? 10.6 : 9.5);
    const my = 12 + Math.sin(angle * 1.3) * (swordBoost ? 8.6 : 7.5);
    drawPixelRect(ctx, mx, my, 0.85, 0.85, i % 2 === 0 ? moteColorA : moteColorB, u);
  }

  const armor = flash ? '#ffffff' : isPyro ? '#6b21a8' : isRonin ? '#0f172a' : isValkyrie ? '#e11d48' : '#2563eb';
  const armorDark = flash ? '#e2e8f0' : isPyro ? '#3b0764' : isRonin ? '#164e63' : isValkyrie ? '#881337' : '#1e3a8a';
  const cape = flash ? '#ffffff' : isPyro ? '#9333ea' : isRonin ? '#0e7490' : isValkyrie ? '#f43f5e' : '#1d4ed8';
  const skin = flash ? '#ffffff' : '#fed7aa';
  const visor = flash ? '#ffffff' : isPyro ? '#fb923c' : isRonin ? '#4ade80' : isValkyrie ? '#fde047' : '#38bdf8';
  const gold = flash ? '#ffffff' : isPyro ? '#fb923c' : isRonin ? '#22d3ee' : isValkyrie ? '#fef08a' : '#facc15';
  const trimLight = flash ? '#ffffff' : isPyro ? '#e9d5ff' : isRonin ? '#67e8f9' : isValkyrie ? '#fbcfe8' : '#93c5fd';

  // Cape / Winged Mantle / Scarf
  const capeTrail = animState === 'dash' ? 2.2 : animState === 'stance' ? 0.8 : 0;
  drawPixelRect(ctx, 6 - capeTrail, 11, 4 + capeTrail, 8, cape, u);
  drawPixelRect(ctx, 5 - capeTrail, 13, 2 + capeTrail * 0.5, 6, armorDark, u);
  if (isValkyrie) {
    drawPixelRect(ctx, 6.2, 9.5, 2.4, 2.2, trimLight, u);
    drawPixelRect(ctx, 15.2, 9.5, 2.4, 2.2, trimLight, u);
  } else if (isRonin) {
    // Flowing neon scarf tail
    drawPixelRect(ctx, 4.2 - capeTrail * 1.2, 9.2, 4.5 + capeTrail, 1.8, visor, u);
    drawPixelRect(ctx, 7.5, 10.2, 2.2, 1.6, trimLight, u);
  } else if (isPyro) {
    // Mystic mantle trim
    drawPixelRect(ctx, 6.5, 10.2, 11, 1.6, gold, u);
  }

  // Boots / Legs
  if (animState === 'defeat') {
    drawPixelRect(ctx, 8, 19, 8, 2, armorDark, u);
  } else if (animState === 'stance' || animState === 'dash') {
    drawPixelRect(ctx, 7.8, 17, 2.8, 4, armorDark, u);
    drawPixelRect(ctx, 13.4, 17, 2.8, 4, armorDark, u);
    drawPixelRect(ctx, 7.2, 20, 3.2, 1.5, gold, u);
    drawPixelRect(ctx, 13.4, 20, 3.2, 1.5, gold, u);
  } else {
    drawPixelRect(ctx, 9, 17, 2.5, 4, armorDark, u);
    drawPixelRect(ctx, 12.5, 17, 2.5, 4, armorDark, u);
    drawPixelRect(ctx, 8.5, 20, 3, 1.5, gold, u);
    drawPixelRect(ctx, 12.5, 20, 3, 1.5, gold, u);
  }

  // Torso Armor
  drawPixelRect(ctx, 8.5, 10.5, 7, 6.8, armor, u);
  drawPixelRect(ctx, 10, 12, 4, 3.5, armorDark, u);
  drawPixelRect(ctx, 11, 12.5, 2, 2, gold, u);
  if (isValkyrie || isRonin || isPyro) {
    drawPixelRect(ctx, 9, 16, 6, 1.4, trimLight, u);
  }

  // Helmet / Hood / Head
  drawPixelRect(ctx, 8.5, 4.5, 7, 6, armor, u);
  drawPixelRect(ctx, 9.5, 3, 5, 2, armorDark, u);
  if (isValkyrie) {
    drawPixelRect(ctx, 7, 2.2, 2.2, 3, gold, u);
    drawPixelRect(ctx, 14.8, 2.2, 2.2, 3, gold, u);
    drawPixelRect(ctx, 11.2, 1.8, 1.6, 1.6, trimLight, u);
  } else if (isRonin) {
    // Kabuto horns & wide brim
    drawPixelRect(ctx, 7, 4.8, 10, 1.2, armorDark, u);
    drawPixelRect(ctx, 7.6, 2.4, 1.8, 2.4, gold, u);
    drawPixelRect(ctx, 14.6, 2.4, 1.8, 2.4, gold, u);
    drawPixelRect(ctx, 11, 3.4, 2, 1.5, visor, u);
  } else if (isPyro) {
    // Pointed battlemage hood + floating astral crest
    drawPixelRect(ctx, 9.5, 1.6, 5, 2.2, armor, u);
    drawPixelRect(ctx, 10.8, 0.8, 2.4, 1.4, gold, u);
    drawPixelRect(ctx, 8, 5, 8, 1.2, trimLight, u);
  } else {
    drawPixelRect(ctx, 11.5, 2, 1.5, 2, gold, u); // Knight crest plume
  }
  // Face / Visor
  drawPixelRect(ctx, 10, 6.5, 5, 3, '#0f172a', u);
  if (!isRonin) {
    drawPixelRect(ctx, 10.5, 8.2, 4, 1.3, skin, u);
  } else {
    drawPixelRect(ctx, 10.5, 8.2, 4, 1.4, armorDark, u); // Cyber ninja mask
  }

  // Blinking eyes
  const blinking = animState === 'idle' && Math.sin(timeSec * 1.4 + heroIndex * 0.7) > 0.96;
  if (!blinking && animState !== 'defeat') {
    drawPixelRect(ctx, 10.8, 7, 1.2, 1.1, visor, u);
    drawPixelRect(ctx, 13.2, 7, 1.2, 1.1, visor, u);
  } else {
    drawPixelRect(ctx, 10.8, 7.6, 1.2, 0.4, '#64748b', u);
    drawPixelRect(ctx, 13.2, 7.6, 1.2, 0.4, '#64748b', u);
  }

  // Weapon Arm & Blade / Halberd / Katana / Staff
  const swordRaise = animState === 'attack' || animState === 'clash' || special ? -2.4 : animState === 'stance' ? -1.1 : 0;
  const swordForward = animState === 'attack' || animState === 'clash' ? 1.6 : 0;
  drawPixelRect(ctx, 15.5 + swordForward * 0.4, 11 + swordRaise * 0.4, 2.5, 4, armorDark, u);
  // Hilt
  drawPixelRect(ctx, 17 + swordForward, 12 + swordRaise, 3, 1, gold, u);

  if (isPyro) {
    // Ember Spellstaff + floating orb
    drawPixelRect(ctx, 18.2 + swordForward, 5.2 + swordRaise, 1.2, 11, armorDark, u);
    drawPixelRect(ctx, 17.3 + swordForward, 3 + swordRaise, 3, 3, gold, u);
    drawPixelRect(ctx, 18 + swordForward, 3.7 + swordRaise, 1.6, 1.6, '#fef08a', u);
  } else {
    const bladeLen = animState === 'clash' ? 9.5 : isRonin ? 8.8 : isValkyrie ? 8.2 : 7;
    const bladeTop = animState === 'clash' ? 2.5 : isRonin ? 3.5 : isValkyrie ? 4.2 : 5;
    const bladeColor =
      special || swordBoost
        ? isRonin
          ? '#67e8f9'
          : isValkyrie
            ? '#fda4af'
            : '#93c5fd'
        : isRonin
          ? '#a7f3d0'
          : isValkyrie
            ? '#fecdd3'
            : '#e2e8f0';
    drawPixelRect(
      ctx,
      18 + swordForward,
      bladeTop + swordRaise,
      swordBoost ? 1.8 : 1.4,
      bladeLen,
      bladeColor,
      u
    );
    if (isValkyrie) {
      drawPixelRect(ctx, 17.2 + swordForward, bladeTop + 1.4 + swordRaise, 3.2, 1.2, gold, u);
    } else if (isRonin) {
      drawPixelRect(ctx, 18.7 + swordForward, bladeTop - 0.6 + swordRaise, 1.1, 2, visor, u);
    }
    drawPixelRect(ctx, 18.4 + swordForward, bladeTop - 1 + swordRaise, 0.8, bladeLen, '#ffffff', u);
  }

  ctx.restore();
}

function renderBossSprite(canvas, boss, timeSec, animState = 'idle', isLocked = false) {
  if (!canvas || !boss) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.imageSmoothingEnabled = false;

  const u = Math.floor(Math.min(W, H) / 26);
  const ox = Math.floor((W - 26 * u) / 2);
  const oy = Math.floor((H - 26 * u) / 2);

  let bob = Math.sin(timeSec * 2.5 + boss.id) * 1.2;
  let leanX = 0;
  let tilt = 0;
  let flash = false;
  const special = Math.floor((timeSec + boss.id) % 5) === 3 || animState === 'charge';

  if (animState === 'charge') {
    leanX = 1.4;
    bob = -1.8 + Math.sin(timeSec * 12) * 0.7;
    tilt = 0.05;
  } else if (animState === 'attack' || animState === 'clash') {
    leanX = animState === 'clash' ? -4.0 : -3.4;
    bob = -1.6;
    tilt = -0.08;
  } else if (animState === 'hit') {
    leanX = 2.8;
    tilt = 0.1;
    flash = Math.floor(timeSec * 28) % 2 === 0;
  } else if (animState === 'defeat') {
    bob = 4;
  }

  ctx.save();
  ctx.translate(ox + (13 + leanX) * u, oy + (13 + bob) * u);
  if (tilt !== 0) ctx.rotate(tilt);
  ctx.translate(-13 * u, -13 * u);

  const body = isLocked ? '#0b1020' : flash ? '#ffffff' : boss.body;
  const trim = isLocked ? '#172038' : flash ? '#ffffff' : boss.trim;
  const eye = isLocked ? '#334155' : flash ? '#ffffff' : boss.eye;
  const aura = isLocked ? '#1e293b' : boss.aura;

  // Floating particles around unlocked bosses (intensified during charge/clash)
  if (!isLocked && animState !== 'defeat') {
    const isCharged = animState === 'charge' || animState === 'clash';
    const count = isCharged ? 10 : boss.id === 25 ? 8 : 5;
    const speed = isCharged ? 3.8 : 1.5;
    for (let i = 0; i < count; i++) {
      const ang = timeSec * speed + (i * Math.PI * 2) / count;
      const radX = isCharged ? 11.8 : 10.8;
      const radY = isCharged ? 9.5 : 8.5;
      const px = 13 + Math.cos(ang) * radX;
      const py = 13 + Math.sin(ang * 1.2) * radY;
      drawPixelRect(ctx, px, py, isCharged ? 1.15 : 0.9, isCharged ? 1.15 : 0.9, aura, u);
    }
  }

  const blinking = animState === 'idle' && Math.sin(timeSec * 1.6 + boss.id) > 0.965;
  const arch = boss.archetype;

  // --- CUTE BOSSES (21-24) ---
  if (arch === 'rabbit') {
    // Moon Rabbit (Lv 21)
    const earBob = special ? Math.sin(timeSec * 10) * 0.6 : 0;
    drawPixelRect(ctx, 8, 2 + earBob, 2.5, 6, body, u);
    drawPixelRect(ctx, 15.5, 2 - earBob, 2.5, 6, body, u);
    drawPixelRect(ctx, 8.7, 3 + earBob, 1.1, 4, trim, u);
    drawPixelRect(ctx, 16.2, 3 - earBob, 1.1, 4, trim, u);
    drawPixelRect(ctx, 7, 8, 12, 10, body, u);
    drawPixelRect(ctx, 8, 17, 10, 5, trim, u);
    drawPixelRect(ctx, 8.5, 13, 1.5, 1, '#f472b6', u);
    drawPixelRect(ctx, 16, 13, 1.5, 1, '#f472b6', u);
    if (!blinking) {
      drawPixelRect(ctx, 9.5, 11, 1.6, 1.8, eye, u);
      drawPixelRect(ctx, 14.9, 11, 1.6, 1.8, eye, u);
    }
    // Star wand
    drawPixelRect(ctx, 3.5, 10, 1.2, 9, '#fbbf24', u);
    drawPixelRect(ctx, 2.2, 7.5, 3.8, 3.2, '#fde047', u);
  } else if (arch === 'slime_king') {
    // Cute Slime King (Lv 22)
    const squish = Math.sin(timeSec * 4) * 0.6;
    drawPixelRect(ctx, 5 - squish * 0.5, 12 + squish, 16 + squish, 10 - squish, body, u);
    drawPixelRect(ctx, 6.5, 9 + squish, 13, 4, body, u);
    drawPixelRect(ctx, 7.5, 10.5 + squish, 3, 1.5, trim, u);
    // Royal Crown
    drawPixelRect(ctx, 9.5, 5 + squish, 7, 3.5, '#facc15', u);
    drawPixelRect(ctx, 9.5, 3.5 + squish, 1.5, 1.8, '#fde047', u);
    drawPixelRect(ctx, 12.2, 3 + squish, 1.6, 2.2, '#ef4444', u);
    drawPixelRect(ctx, 15, 3.5 + squish, 1.5, 1.8, '#fde047', u);
    // Cute face
    if (!blinking) {
      drawPixelRect(ctx, 9.5, 13.5 + squish, 1.6, 2, eye, u);
      drawPixelRect(ctx, 15, 13.5 + squish, 1.6, 2, eye, u);
    }
    drawPixelRect(ctx, 11.8, 16 + squish, 2.4, 1, '#064e3b', u);
  } else if (arch === 'little_ghost') {
    // Little Ghost (Lv 23)
    drawPixelRect(ctx, 7, 5, 12, 13, body, u);
    drawPixelRect(ctx, 9, 3.5, 8, 2, body, u);
    drawPixelRect(ctx, 6, 17, 2.5, 3.5, trim, u);
    drawPixelRect(ctx, 10, 17.5, 2.5, 4, trim, u);
    drawPixelRect(ctx, 14, 17.5, 2.5, 4, trim, u);
    drawPixelRect(ctx, 17.5, 17, 2.5, 3.5, trim, u);
    // Rosy cheeks + cute eyes
    drawPixelRect(ctx, 8, 12.5, 1.8, 1.2, '#fda4af', u);
    drawPixelRect(ctx, 16.2, 12.5, 1.8, 1.2, '#fda4af', u);
    if (!blinking) {
      drawPixelRect(ctx, 9.5, 10, 1.8, 2.2, eye, u);
      drawPixelRect(ctx, 14.7, 10, 1.8, 2.2, eye, u);
    }
    // Cute top bow
    drawPixelRect(ctx, 11, 2.5, 4, 1.5, '#60a5fa', u);
  } else if (arch === 'cat_boss') {
    // Magical Cat Boss (Lv 24)
    drawPixelRect(ctx, 7, 4, 3, 4, body, u);
    drawPixelRect(ctx, 16, 4, 3, 4, body, u);
    drawPixelRect(ctx, 7.8, 5, 1.5, 2.5, '#f472b6', u);
    drawPixelRect(ctx, 16.7, 5, 1.5, 2.5, '#f472b6', u);
    drawPixelRect(ctx, 7, 7, 12, 9, body, u);
    drawPixelRect(ctx, 8, 16, 10, 6, trim, u);
    // Tail wagging
    const tailY = Math.sin(timeSec * 5) * 1.2;
    drawPixelRect(ctx, 18.5, 14 + tailY, 3, 2, body, u);
    drawPixelRect(ctx, 20.5, 11 + tailY, 2, 4, trim, u);
    // Star Collar
    drawPixelRect(ctx, 9, 15.5, 8, 1.4, '#ef4444', u);
    drawPixelRect(ctx, 12, 16.5, 2, 2, '#fde047', u);
    if (!blinking) {
      drawPixelRect(ctx, 9.2, 10.5, 1.8, 2, eye, u);
      drawPixelRect(ctx, 15, 10.5, 1.8, 2, eye, u);
    }
    drawPixelRect(ctx, 12.3, 12.5, 1.4, 1, '#f472b6', u);
  } else {
    // --- EPIC & FINAL BOSS ARCHETYPES (1-20, 25) ---
    // Wings for winged bosses
    if (['dragon', 'ice_dragon', 'demon', 'overlord', 'chaos'].includes(arch)) {
      const flap = Math.sin(timeSec * 4) * 1.3;
      drawPixelRect(ctx, 1, 6 + flap, 5, 8, trim, u);
      drawPixelRect(ctx, 20, 6 + flap, 5, 8, trim, u);
      drawPixelRect(ctx, 2, 8 + flap, 3, 5, body, u);
      drawPixelRect(ctx, 21, 8 + flap, 3, 5, body, u);
    }

    // Horns / Crown / Hat / Helmets
    if (['horn_lord', 'demon', 'chaos', 'overlord', 'beast'].includes(arch)) {
      drawPixelRect(ctx, 6, 2, 2.5, 5, trim, u);
      drawPixelRect(ctx, 17.5, 2, 2.5, 5, trim, u);
    }
    if (['queen', 'phantom', 'overlord'].includes(arch)) {
      drawPixelRect(ctx, 9, 2, 8, 3, '#facc15', u);
      drawPixelRect(ctx, 12, 1, 2, 2, aura, u);
    }
    if (arch === 'mage') {
      drawPixelRect(ctx, 6, 5, 14, 2, trim, u);
      drawPixelRect(ctx, 9, 1, 8, 4.5, body, u);
    }
    if (arch === 'samurai') {
      drawPixelRect(ctx, 6, 4, 14, 3, body, u);
      drawPixelRect(ctx, 11.5, 1.5, 3, 3, '#facc15', u);
    }

    // Core Head + Torso
    drawPixelRect(ctx, 7.5, 5.5, 11, 7, body, u);
    drawPixelRect(ctx, 6.5, 12.5, 13, 8.5, body, u);
    drawPixelRect(ctx, 9, 13.5, 8, 5, trim, u);

    // Shoulder Pauldrons
    drawPixelRect(ctx, 4.5, 12, 3, 4.5, trim, u);
    drawPixelRect(ctx, 18.5, 12, 3, 4.5, trim, u);

    // Legs
    drawPixelRect(ctx, 8, 21, 3.5, 3, body, u);
    drawPixelRect(ctx, 14.5, 21, 3.5, 3, body, u);

    // Visor / Eyes (with eye-glow pulse)
    const eyeGlow = special ? 1.5 : 1.2;
    drawPixelRect(ctx, 9, 8, 8, 2.4, '#020617', u);
    if (!blinking && animState !== 'defeat') {
      drawPixelRect(ctx, 9.8, 8.4, 2, eyeGlow, eye, u);
      drawPixelRect(ctx, 14.2, 8.4, 2, eyeGlow, eye, u);
    }

    // Boss Weapon on left hand (facing Player)
    const swing = animState === 'attack' ? -2.5 : special ? -1 : 0;
    if (['reaper', 'mage', 'storm'].includes(arch)) {
      drawPixelRect(ctx, 2.5, 5 + swing, 1.4, 15, trim, u);
      drawPixelRect(ctx, 1, 4 + swing, 5, 2.2, aura, u);
    } else {
      drawPixelRect(ctx, 2.5, 6 + swing, 1.8, 11, trim, u);
      drawPixelRect(ctx, 1.8, 5 + swing, 3.2, 2, aura, u);
    }

    // Final Overlord Halo
    if (boss.id === 25 && !isLocked) {
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = Math.max(2, u * 0.5);
      ctx.beginPath();
      ctx.arc(13 * u, 9 * u, 11 * u, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  ctx.restore();
}

/* ----------------------------------------------------------------------------
   6. STARFIELD & PARTICLE BACKGROUND ENGINE
   ---------------------------------------------------------------------------- */
const Starfield = (() => {
  const stars = [];
  let canvas = null;
  let ctx = null;

  function init() {
    canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 85; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.16,
        vy: Math.random() * 0.25 + 0.08,
        alpha: Math.random() * 0.65 + 0.25
      });
    }
  }

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.x += s.vx;
      s.y += s.vy;
      if (s.y > canvas.height) {
        s.y = -4;
        s.x = Math.random() * canvas.width;
      }
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;

      ctx.fillStyle = `rgba(147, 197, 253, ${s.alpha})`;
      ctx.fillRect(s.x, s.y, s.r, s.r);
    }
  }

  return { init, draw };
})();

/* ----------------------------------------------------------------------------
   7. BATTLE FX PROJECTILE, SLASH, AFTERIMAGE & CUTSCENE PARTICLE ENGINE
   ---------------------------------------------------------------------------- */
function getOffsetCenterInStage(el, stage) {
  if (!el || !stage) return null;
  let x = el.offsetWidth / 2;
  let y = el.offsetHeight / 2;
  let cur = el;
  while (cur && cur !== stage) {
    x += cur.offsetLeft || 0;
    y += cur.offsetTop || 0;
    cur = cur.offsetParent;
  }
  return { x, y };
}

const BattleFX = (() => {
  const particles = [];
  const projectiles = [];
  const slashes = [];
  const shockwaves = [];
  const afterimages = [];
  const speedLines = [];
  const bolts = [];
  const weaponTrails = [];
  const impactFlashes = [];
  const MAX_PARTICLES = 360;
  let timeScale = 1;

  function pushParticle(pt) {
    if (particles.length >= MAX_PARTICLES) {
      particles.shift();
    }
    particles.push(pt);
  }

  function setTimeScale(scale) {
    timeScale = Math.max(0.15, Math.min(2, scale));
  }

  function clearCutsceneFX() {
    timeScale = 1;
    slashes.length = 0;
    shockwaves.length = 0;
    afterimages.length = 0;
    speedLines.length = 0;
    bolts.length = 0;
    weaponTrails.length = 0;
    impactFlashes.length = 0;
    particles.length = 0;
  }

  function clearAll() {
    clearCutsceneFX();
    projectiles.length = 0;
  }

  function getCanvasSize() {
    const canvas = document.getElementById('battle-fx-canvas');
    if (!canvas) return { canvas: null, w: 900, h: 420 };
    const w = canvas.offsetWidth || canvas.width || 900;
    const h = canvas.offsetHeight || canvas.height || 420;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    return { canvas, w, h };
  }

  function getAnchor(isBossTarget) {
    const { w, h } = getCanvasSize();
    const stage = document.getElementById('battle-camera-stage');
    const sprite = document.getElementById(isBossTarget ? 'battle-boss-canvas' : 'battle-player-canvas');
    const pt = getOffsetCenterInStage(sprite, stage);
    if (pt) return pt;
    return { x: isBossTarget ? w * 0.84 : w * 0.16, y: h * 0.55 };
  }

  function spawnProjectile(fromPlayer, color, onImpact, options = {}) {
    const { canvas } = getCanvasSize();
    if (!canvas) {
      if (onImpact) onImpact();
      return;
    }
    const start = getAnchor(!fromPlayer);
    const end = getAnchor(fromPlayer);
    const offsetX = fromPlayer ? 28 : -28;

    projectiles.push({
      x: start.x + offsetX,
      y: start.y,
      startX: start.x + offsetX,
      endX: end.x,
      startY: start.y,
      endY: end.y,
      progress: 0,
      speed: options.speed || 0.095,
      size: options.size || 22,
      arcHeight: options.arcHeight !== undefined ? options.arcHeight : 28,
      spin: 0,
      fromPlayer,
      trail: [],
      color,
      coreColor: options.coreColor || '#ffffff',
      onImpact
    });
  }

  function spawnDashFX(fromPlayer, color = '#38bdf8', intensity = 1) {
    const { canvas } = getCanvasSize();
    if (!canvas) return;
    const anchor = getAnchor(!fromPlayer);
    const dir = fromPlayer ? 1 : -1;
    const countScale = Math.max(0.7, Math.min(2, intensity));

    // Staggered phantom afterimages behind dash path
    for (let i = 0; i < 3; i++) {
      afterimages.push({
        x: anchor.x + dir * (i * 18 - 10),
        y: anchor.y - Math.sin((i / 3) * Math.PI) * 8,
        vx: dir * (1.8 + i * 0.7),
        color,
        w: fromPlayer ? 60 : 74,
        h: fromPlayer ? 82 : 94,
        life: 0.8 - i * 0.14
      });
    }

    // Directional dash wind/energy streaks
    const streakCount = Math.round(18 * countScale);
    for (let i = 0; i < streakCount; i++) {
      const spreadY = (Math.random() - 0.5) * 86;
      const spd = Math.random() * 8.5 + 5.5;
      pushParticle({
        mode: 'streak',
        x: anchor.x + dir * (Math.random() * 24 - 16),
        y: anchor.y + spreadY,
        vx: -dir * spd,
        vy: (Math.random() - 0.5) * 1.8,
        len: Math.random() * 26 + 16,
        size: Math.random() * 2.5 + 1.8,
        life: 1,
        decay: 0.055 + Math.random() * 0.03,
        color: i % 3 === 0 ? '#ffffff' : color
      });
    }

    // Floor launch dust & spark kick-up
    const dustCount = Math.round(12 * countScale);
    for (let i = 0; i < dustCount; i++) {
      pushParticle({
        mode: 'spark',
        x: anchor.x - dir * (10 + Math.random() * 20),
        y: anchor.y + 42 + (Math.random() - 0.5) * 12,
        vx: -dir * (Math.random() * 6.5 + 2.5),
        vy: -(Math.random() * 3.8 + 1.0),
        gravity: 0.24,
        drag: 0.94,
        life: 0.95,
        decay: 0.048,
        size: Math.random() * 4 + 2.5,
        color: i % 2 === 0 ? color : '#e2e8f0'
      });
    }

    // Speed lines along dash lane
    spawnSpeedLines(dir, color, Math.round(10 * countScale));
  }

  function spawnWeaponTrail(x, y, color = '#60a5fa', options = {}) {
    const { canvas } = getCanvasSize();
    if (!canvas) return;
    const sweep = options.sweep !== undefined ? options.sweep : Math.PI * 0.95;
    const startAngle = options.startAngle !== undefined ? options.startAngle : -Math.PI * 0.58;
    const dir = options.flip ? -1 : 1;
    weaponTrails.push({
      x,
      y,
      color,
      coreColor: options.coreColor || '#ffffff',
      rx: options.rx || 76,
      ry: options.ry || 54,
      tilt: options.tilt !== undefined ? options.tilt : -0.35,
      startAngle,
      endAngle: startAngle + sweep * dir,
      progress: 0,
      speed: options.speed || 0.14,
      life: 1,
      decay: options.decay || 0.065,
      width: options.width || 14,
      nodes: []
    });
  }

  function spawnImpactFlash(isBossTarget, color = '#facc15', options = {}) {
    const { canvas } = getCanvasSize();
    if (!canvas) return;
    const anchor = getAnchor(isBossTarget);
    const cx = options.x !== undefined ? options.x : anchor.x;
    const cy = options.y !== undefined ? options.y : anchor.y;
    const radius = options.radius || 96;
    const rays = options.rays || 8;
    const screenAlpha = options.screenAlpha !== undefined ? options.screenAlpha : 0.16;

    impactFlashes.push({
      x: cx,
      y: cy,
      color,
      coreColor: options.coreColor || '#ffffff',
      maxRadius: radius,
      radius: radius * 0.28,
      rays,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() < 0.5 ? -1 : 1) * 0.045,
      screenAlpha,
      life: 1,
      decay: options.decay || 0.085
    });

    // High-velocity razor sparks bursting outward
    const sparkCount = options.sparkCount || 18;
    for (let i = 0; i < sparkCount; i++) {
      const ang = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.35;
      const spd = Math.random() * 9.5 + 4.5;
      pushParticle({
        mode: 'spark',
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        gravity: 0.16,
        drag: 0.93,
        life: 1,
        decay: 0.04 + Math.random() * 0.025,
        size: Math.random() * 3.5 + 2.5,
        color: i % 3 === 0 ? '#ffffff' : color
      });
    }
  }

  function spawnBurst(isBossTarget, color, customX = null, customY = null, count = 22) {
    const anchor = getAnchor(isBossTarget);
    const cx = customX !== null ? customX : anchor.x;
    const cy = customY !== null ? customY : anchor.y;

    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 6.8 + 2.4;
      const isSpark = i % 2 === 0;
      pushParticle({
        mode: isSpark ? 'spark' : 'pixel',
        x: cx,
        y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        gravity: isSpark ? 0.18 : 0.07,
        drag: isSpark ? 0.94 : 0.97,
        life: 1,
        decay: 0.032 + Math.random() * 0.015,
        size: Math.random() * 5 + 2.8,
        color: i % 5 === 0 ? '#ffffff' : color
      });
    }
  }

  function spawnSlashArc(x, y, color, angle = -0.6, radius = 78, flip = false) {
    slashes.push({
      x,
      y,
      color,
      angle,
      radius,
      flip,
      life: 1,
      decay: 0.075
    });
    spawnWeaponTrail(x, y, color, {
      rx: radius,
      ry: radius * 0.72,
      tilt: angle,
      flip,
      startAngle: -Math.PI * 0.5,
      sweep: Math.PI * 0.96,
      width: 12
    });
    for (let i = 0; i < 14; i++) {
      const spread = angle + (Math.random() - 0.5) * 1.4;
      const spd = Math.random() * 6.5 + 3;
      pushParticle({
        mode: 'spark',
        x,
        y,
        vx: Math.cos(spread) * spd * (flip ? -1 : 1),
        vy: Math.sin(spread) * spd,
        gravity: 0.12,
        drag: 0.95,
        life: 0.9,
        decay: 0.045,
        size: Math.random() * 4 + 2.5,
        color: i % 3 === 0 ? '#ffffff' : color
      });
    }
  }

  function spawnShockwave(x, y, color, maxRadius = 150) {
    shockwaves.push({
      x,
      y,
      color,
      radius: 12,
      maxRadius,
      life: 1
    });
  }

  function spawnAfterimage(x, y, color, isPlayer = true) {
    afterimages.push({
      x,
      y,
      vx: 0,
      color,
      w: isPlayer ? 62 : 76,
      h: isPlayer ? 84 : 96,
      life: 0.72
    });
  }

  function spawnSpeedLines(direction = 1, color = '#93c5fd', count = 14) {
    const { w, h } = getCanvasSize();
    for (let i = 0; i < count; i++) {
      speedLines.push({
        x: direction > 0 ? Math.random() * w * 0.45 : w * 0.55 + Math.random() * w * 0.45,
        y: h * 0.14 + Math.random() * h * 0.72,
        len: Math.random() * 140 + 80,
        vx: direction * (Math.random() * 24 + 20),
        life: 0.85,
        color
      });
    }
  }

  function spawnAmbientEmber(color) {
    const { w, h } = getCanvasSize();
    pushParticle({
      mode: 'pixel',
      x: Math.random() * w,
      y: h - 10,
      vx: (Math.random() - 0.5) * 0.9,
      vy: -(Math.random() * 2.2 + 0.9),
      life: 1,
      decay: 0.016,
      size: Math.random() * 3.5 + 2,
      color
    });
  }

  function spawnBolt(x1, y1, x2, y2, color) {
    const segments = 7;
    const pts = [{ x: x1, y: y1 }];
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      pts.push({
        x: x1 + (x2 - x1) * t + (Math.random() - 0.5) * 26,
        y: y1 + (y2 - y1) * t + (Math.random() - 0.5) * 44
      });
    }
    pts.push({ x: x2, y: y2 });
    bolts.push({ pts, color, life: 1 });
  }

  function spawnBossCounterFX(attackType, boss, bx, by, px, py) {
    const aura = boss.aura || '#ef4444';
    if (attackType === 'slash') {
      spawnSlashArc(px + 28, py, aura, 0.55, 92, true);
      spawnSlashArc(px + 28, py - 10, '#ffffff', -0.45, 72, true);
    } else if (attackType === 'bolt') {
      spawnBolt(bx, by - 12, px + 24, py, aura);
      spawnBolt(bx, by + 10, px + 24, py + 8, '#ffffff');
      spawnBurst(false, aura, px + 24, py, 20);
    } else if (attackType === 'breath') {
      for (let i = 0; i < 18; i++) {
        const t = i / 17;
        const ox = bx + (px - bx) * t * 0.88;
        const oy = by + (py - by) * t * 0.88 + (Math.random() - 0.5) * 26;
        particles.push({
          x: ox,
          y: oy,
          vx: -3.8 - Math.random() * 3,
          vy: (Math.random() - 0.5) * 2.4,
          life: 0.95,
          decay: 0.036,
          size: Math.random() * 8 + 5,
          color: i % 3 === 0 ? '#ffffff' : aura
        });
      }
      spawnShockwave(px + 26, py, aura, 110);
    } else if (attackType === 'slam') {
      spawnShockwave(bx - 40, by + 35, aura, 175);
      spawnShockwave(px + 34, py + 32, boss.trim || aura, 120);
      spawnBurst(false, aura, px + 30, py + 24, 24);
    } else if (attackType === 'cute_blast') {
      spawnBolt(bx, by, px + 24, py, aura);
      spawnBurst(false, '#fde047', px + 24, py, 16);
      spawnBurst(false, aura, px + 24, py, 16);
      spawnShockwave(px + 24, py, '#fde047', 118);
    } else if (attackType === 'eclipse') {
      spawnSlashArc(px + 20, py, '#ef4444', 0.72, 108, true);
      spawnSlashArc(px + 20, py, '#facc15', -0.72, 108, true);
      spawnShockwave(px + 20, py, '#facc15', 145);
    } else {
      // 'orb'
      spawnShockwave(bx, by, aura, 95);
      spawnBurst(false, aura, px + 24, py, 24);
      spawnSlashArc(px + 24, py, aura, 0.25, 76, true);
    }
  }

  function step() {
    const { canvas, w, h } = getCanvasSize();
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    // 1. Speed lines
    for (let i = speedLines.length - 1; i >= 0; i--) {
      const sl = speedLines[i];
      sl.x += sl.vx * timeScale;
      sl.life -= 0.065 * timeScale;
      if (sl.life <= 0) {
        speedLines.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, sl.life * 0.75);
      ctx.fillStyle = sl.color;
      ctx.fillRect(sl.x, sl.y, sl.len, 2.5);
      ctx.restore();
    }

    // 2. Dash Afterimages
    for (let i = afterimages.length - 1; i >= 0; i--) {
      const ag = afterimages[i];
      ag.x += (ag.vx || 0) * timeScale;
      ag.life -= 0.065 * timeScale;
      if (ag.life <= 0) {
        afterimages.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = Math.max(0, ag.life * 0.36);
      const grad = ctx.createLinearGradient(ag.x - ag.w * 0.5, ag.y - ag.h * 0.5, ag.x + ag.w * 0.5, ag.y + ag.h * 0.5);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.5, ag.color);
      grad.addColorStop(1, '#ffffff');
      ctx.fillStyle = grad;
      ctx.fillRect(ag.x - ag.w * 0.5, ag.y - ag.h * 0.5, ag.w, ag.h);
      ctx.restore();
    }

    // 3. Shockwave rings
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += (sw.maxRadius - sw.radius) * 0.22 * timeScale + 2 * timeScale;
      sw.life -= 0.055 * timeScale;
      if (sw.life <= 0) {
        shockwaves.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, sw.life * 0.85);
      ctx.strokeStyle = sw.color;
      ctx.lineWidth = Math.max(2, 6 * sw.life);
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Jagged Lightning / Beam Bolts
    for (let i = bolts.length - 1; i >= 0; i--) {
      const b = bolts[i];
      b.life -= 0.07 * timeScale;
      if (b.life <= 0) {
        bolts.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, b.life);
      ctx.strokeStyle = b.color;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 5 * b.life + 1.5;
      ctx.beginPath();
      b.pts.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
      ctx.restore();
    }

    // 5. Sweeping Weapon Trails
    for (let i = weaponTrails.length - 1; i >= 0; i--) {
      const wt = weaponTrails[i];
      if (wt.progress < 1) {
        wt.progress = Math.min(1, wt.progress + wt.speed * timeScale);
        const eased = 1 - Math.pow(1 - wt.progress, 2.2);
        const ang = wt.startAngle + (wt.endAngle - wt.startAngle) * eased;
        const localX = Math.cos(ang) * wt.rx;
        const localY = Math.sin(ang) * wt.ry;
        const cosT = Math.cos(wt.tilt);
        const sinT = Math.sin(wt.tilt);
        const px = wt.x + localX * cosT - localY * sinT;
        const py = wt.y + localX * sinT + localY * cosT;
        wt.nodes.push({ x: px, y: py });
        if (wt.nodes.length > 14) wt.nodes.shift();

        // Shed weapon trail spark particles off the sweeping tip
        if (Math.random() < 0.85) {
          const tangentAng = ang + (wt.endAngle > wt.startAngle ? 1.57 : -1.57) + wt.tilt;
          const spd = Math.random() * 3.5 + 1.5;
          pushParticle({
            mode: 'spark',
            x: px,
            y: py,
            vx: Math.cos(tangentAng) * spd + (Math.random() - 0.5) * 1.6,
            vy: Math.sin(tangentAng) * spd + (Math.random() - 0.5) * 1.6,
            gravity: 0.08,
            drag: 0.94,
            life: 0.78,
            decay: 0.06,
            size: Math.random() * 3 + 2,
            color: Math.random() < 0.4 ? wt.coreColor : wt.color
          });
        }
      } else {
        wt.life -= wt.decay * timeScale;
      }

      if (wt.life <= 0) {
        weaponTrails.splice(i, 1);
        continue;
      }

      if (wt.nodes.length >= 2) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let j = 1; j < wt.nodes.length; j++) {
          const t = j / wt.nodes.length;
          const p0 = wt.nodes[j - 1];
          const p1 = wt.nodes[j];
          ctx.globalAlpha = Math.max(0, wt.life * t * 0.85);
          ctx.strokeStyle = wt.color;
          ctx.shadowColor = wt.color;
          ctx.shadowBlur = 14;
          ctx.lineWidth = Math.max(1.5, wt.width * t * wt.life);
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();

          ctx.shadowBlur = 0;
          ctx.globalAlpha = Math.max(0, wt.life * t * 0.95);
          ctx.strokeStyle = wt.coreColor;
          ctx.lineWidth = Math.max(1, wt.width * 0.38 * t * wt.life);
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
        const tip = wt.nodes[wt.nodes.length - 1];
        ctx.globalAlpha = Math.max(0, wt.life);
        ctx.fillStyle = wt.coreColor;
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, Math.max(2, 4.5 * wt.life), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // 6. Slash arcs
    for (let i = slashes.length - 1; i >= 0; i--) {
      const s = slashes[i];
      s.life -= s.decay * timeScale;
      if (s.life <= 0) {
        slashes.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.translate(s.x, s.y);
      if (s.flip) ctx.scale(-1, 1);
      ctx.rotate(s.angle);
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.strokeStyle = s.color;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 18;
      ctx.lineWidth = 10 * s.life + 2;
      ctx.beginPath();
      ctx.arc(0, 0, s.radius * (1.12 - s.life * 0.2), -Math.PI * 0.42, Math.PI * 0.42);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4 * s.life + 1;
      ctx.beginPath();
      ctx.arc(4, 0, s.radius * (1.12 - s.life * 0.2), -Math.PI * 0.34, Math.PI * 0.34);
      ctx.stroke();
      ctx.restore();
    }

    // 7. Weapon-Energy Projectiles with Continuous Ribbon Trails
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const p = projectiles[i];
      const prevX = p.x;
      const prevY = p.trail.length ? p.trail[p.trail.length - 1].y : p.startY;
      p.progress += (p.speed || 0.095) * timeScale;
      p.spin += 0.38 * timeScale;
      const t = Math.min(1, p.progress);
      p.x = p.startX + (p.endX - p.startX) * t;
      const baseY = p.startY + (p.endY - p.startY) * t;
      const arcY = baseY - Math.sin(t * Math.PI) * (p.arcHeight ?? 28);

      p.trail.push({ x: p.x, y: arcY });
      if (p.trail.length > 11) p.trail.shift();

      // Render tapered weapon energy ribbon trail
      if (p.trail.length >= 2) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        for (let j = 1; j < p.trail.length; j++) {
          const frac = j / p.trail.length;
          const a = p.trail[j - 1];
          const b = p.trail[j];
          ctx.globalAlpha = frac * 0.85;
          ctx.strokeStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 14;
          ctx.lineWidth = Math.max(2, frac * 16);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          ctx.shadowBlur = 0;
          ctx.globalAlpha = frac * 0.9;
          ctx.strokeStyle = p.coreColor;
          ctx.lineWidth = Math.max(1, frac * 6);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Render spinning crescent weapon slash head
      const flightAngle = Math.atan2(arcY - prevY, p.x - prevX);
      ctx.save();
      ctx.translate(p.x, arcY);
      ctx.rotate(flightAngle);
      ctx.globalCompositeOperation = 'lighter';
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 18;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(-4, 0, p.size * 0.82, -Math.PI * 0.44, Math.PI * 0.44);
      ctx.stroke();

      ctx.strokeStyle = p.coreColor;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.arc(-2, 0, p.size * 0.78, -Math.PI * 0.36, Math.PI * 0.36);
      ctx.stroke();

      // Spinning inner blade star
      ctx.rotate(p.spin);
      ctx.fillStyle = p.coreColor;
      ctx.fillRect(-5, -5, 10, 10);
      ctx.restore();

      // Shed velocity-aligned weapon sparks along trajectory
      for (let s = 0; s < 2; s++) {
        pushParticle({
          mode: 'spark',
          x: p.x + (Math.random() - 0.5) * 10,
          y: arcY + (Math.random() - 0.5) * 10,
          vx: (p.fromPlayer ? -1 : 1) * (Math.random() * 2.4 + 0.8),
          vy: (Math.random() - 0.5) * 2.6,
          gravity: 0.05,
          drag: 0.94,
          life: 0.75,
          decay: 0.055,
          size: Math.random() * 3 + 2,
          color: s === 0 ? p.coreColor : p.color
        });
      }

      if (p.progress >= 1) {
        const cb = p.onImpact;
        projectiles.splice(i, 1);
        if (cb) cb();
      }
    }

    // 8. Impact Flashes (Radial Bloom + Cross-Flare Starburst + Screen Tint Wash)
    for (let i = impactFlashes.length - 1; i >= 0; i--) {
      const fl = impactFlashes[i];
      fl.radius += (fl.maxRadius - fl.radius) * 0.34 * timeScale;
      fl.rotation += fl.rotSpeed * timeScale;
      fl.life -= fl.decay * timeScale;
      if (fl.life <= 0) {
        impactFlashes.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // Subtle full-arena impact flash wash
      if (fl.screenAlpha > 0) {
        ctx.globalAlpha = Math.max(0, fl.life * fl.screenAlpha);
        const wash = ctx.createRadialGradient(fl.x, fl.y, 12, fl.x, fl.y, Math.max(w, h) * 0.75);
        wash.addColorStop(0, fl.color);
        wash.addColorStop(1, 'transparent');
        ctx.fillStyle = wash;
        ctx.fillRect(0, 0, w, h);
      }

      // Core radial impact flash
      ctx.globalAlpha = Math.max(0, fl.life * 0.95);
      const grad = ctx.createRadialGradient(fl.x, fl.y, 0, fl.x, fl.y, fl.radius);
      grad.addColorStop(0, fl.coreColor);
      grad.addColorStop(0.28, fl.color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(fl.x, fl.y, fl.radius, 0, Math.PI * 2);
      ctx.fill();

      // Anisotropic cross-flare starburst rays
      ctx.translate(fl.x, fl.y);
      ctx.rotate(fl.rotation);
      for (let r = 0; r < fl.rays; r++) {
        const isMain = r % 2 === 0;
        const rayLen = fl.radius * (isMain ? 1.55 : 0.95) * (0.55 + fl.life * 0.6);
        const rayWidth = Math.max(1.2, (isMain ? 12 : 6) * fl.life);
        ctx.rotate((Math.PI * 2) / fl.rays);
        ctx.globalAlpha = Math.max(0, fl.life * (isMain ? 0.92 : 0.7));
        ctx.fillStyle = isMain ? fl.coreColor : fl.color;
        ctx.beginPath();
        ctx.moveTo(0, -rayWidth * 0.5);
        ctx.lineTo(rayLen, 0);
        ctx.lineTo(0, rayWidth * 0.5);
        ctx.lineTo(-rayLen * 0.25, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    // 9. Particles (Pixels, Velocity-Aligned Sparks, and Dash Streaks)
    for (let i = particles.length - 1; i >= 0; i--) {
      const pt = particles[i];
      if (pt.drag) {
        pt.vx *= pt.drag;
        pt.vy *= pt.drag;
      }
      if (pt.gravity) {
        pt.vy += pt.gravity * timeScale;
      }
      pt.x += pt.vx * timeScale;
      pt.y += pt.vy * timeScale;
      pt.life -= (pt.decay || 0.035) * timeScale;
      if (pt.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, pt.life);
      if (pt.mode === 'streak') {
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = pt.color;
        ctx.lineWidth = Math.max(1, pt.size * pt.life);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(pt.x - pt.vx * 2.2, pt.y - pt.vy * 2.2);
        ctx.stroke();
      } else if (pt.mode === 'spark') {
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = pt.color;
        ctx.lineWidth = Math.max(1.2, pt.size * 0.65 * pt.life);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(pt.x - pt.vx * 1.9, pt.y - pt.vy * 1.9);
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(pt.x - 1, pt.y - 1, 2, 2);
      } else {
        ctx.fillStyle = pt.color;
        ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
      }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  return {
    setTimeScale,
    clearCutsceneFX,
    clearAll,
    getAnchor,
    spawnProjectile,
    spawnDashFX,
    spawnWeaponTrail,
    spawnImpactFlash,
    spawnBurst,
    spawnSlashArc,
    spawnShockwave,
    spawnAfterimage,
    spawnSpeedLines,
    spawnAmbientEmber,
    spawnBolt,
    spawnBossCounterFX,
    step
  };
})();

/* ----------------------------------------------------------------------------
   8. RESULT CELEBRATION PARTICLES
   ---------------------------------------------------------------------------- */
const ResultFX = (() => {
  const confetti = [];
  let active = false;

  function launch(isVictory) {
    const canvas = document.getElementById('result-particles-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    confetti.length = 0;
    active = isVictory;
    if (!isVictory) return;

    const palette = ['#facc15', '#60a5fa', '#10b981', '#ffffff', '#f472b6'];
    for (let i = 0; i < 65; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4 - 40,
        vx: (Math.random() - 0.5) * 2.4,
        vy: Math.random() * 2.8 + 1.4,
        size: Math.random() * 6 + 4,
        color: palette[i % palette.length]
      });
    }
  }

  function step() {
    const canvas = document.getElementById('result-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!active) return;

    for (const c of confetti) {
      c.x += c.vx;
      c.y += c.vy;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.size, c.size);
    }
  }

  function stop() {
    active = false;
  }

  return { launch, step, stop };
})();

/* ----------------------------------------------------------------------------
   9. STORAGE FUNCTIONS (saveGame, loadGame)
   ---------------------------------------------------------------------------- */
function saveGame() {
  const payload = {
    ...player,
    selectedBossId: selectedBoss.id,
    selectedHeroId,
    partnerHeroId,
    selectedMaterial,
    selectedDifficulty
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    // Also mirror individual keys for full transparency
    localStorage.setItem('playerName', player.playerName);
    localStorage.setItem('score', String(player.score));
    localStorage.setItem('highScore', String(player.highScore));
    localStorage.setItem('totalScore', String(player.totalScore));
    localStorage.setItem('totalWins', String(player.totalWins));
    localStorage.setItem('totalLosses', String(player.totalLosses));
    localStorage.setItem('defeatedBosses', JSON.stringify(player.defeatedBosses));
    localStorage.setItem('unlockedBosses', JSON.stringify(player.unlockedBosses));
    localStorage.setItem('highestBossLevel', String(player.highestBossLevel));
    localStorage.setItem('battleHistory', JSON.stringify(player.battleHistory));
    localStorage.setItem('soundEnabled', String(player.soundEnabled));
    localStorage.setItem('language', getLang());
    localStorage.setItem('selectedHeroId', String(selectedHeroId));
    localStorage.setItem('partnerHeroId', String(partnerHeroId));
  } catch (err) {
    console.warn('Unable to save progress to localStorage:', err);
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      player = { ...DEFAULT_SAVE, ...parsed };
    } else {
      player = { ...DEFAULT_SAVE };
    }
  } catch {
    player = { ...DEFAULT_SAVE };
  }

  player.language = ['en', 'id'].includes(player.language) ? player.language : 'en';

  if (!Array.isArray(player.unlockedBosses) || player.unlockedBosses.length === 0) {
    player.unlockedBosses = [1];
  }
  if (!Array.isArray(player.defeatedBosses)) {
    player.defeatedBosses = [];
  }
  if (!Array.isArray(player.battleHistory)) {
    player.battleHistory = [];
  }

  selectedBoss = BOSSES.find((b) => b.id === player.selectedBossId && player.unlockedBosses.includes(b.id)) || BOSSES[0];
  selectedHeroId = HEROES.some((h) => h.id === Number(player.selectedHeroId)) ? Number(player.selectedHeroId) : 0;
  partnerHeroId = HEROES.some((h) => h.id === Number(player.partnerHeroId)) ? Number(player.partnerHeroId) : 1;
  if (partnerHeroId === selectedHeroId) {
    partnerHeroId = (selectedHeroId + 1) % HEROES.length;
  }
  selectedMaterial = MATERIALS.some((m) => m.id === player.selectedMaterial) ? player.selectedMaterial : 'ALL MATERIAL';
  selectedDifficulty = ['easy', 'medium', 'hard'].includes(player.selectedDifficulty) ? player.selectedDifficulty : 'medium';
}

/* ----------------------------------------------------------------------------
   10. NAVIGATION & SCREEN CONTROLLERS
   ---------------------------------------------------------------------------- */
function switchScreen(screenId, navKey) {
  currentScreen = screenId;
  document.querySelectorAll('.screen').forEach((el) => {
    el.classList.toggle('active', el.id === `screen-${screenId}`);
  });

  const appShell = document.getElementById('app-shell');
  appShell.classList.toggle('in-battle', screenId === 'battle');

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.nav === (navKey || screenId));
  });

  // Close mobile drawer if open
  closeMobileSidebar();

  if (screenId !== 'result') {
    ResultFX.stop();
  }
}

function showLobby() {
  stopTimer();
  battleSessionId += 1;
  battleActive = false;
  clearBattleTimeouts();
  BattleFX.clearAll();
  IntroCutscene.cancel();
  resetCombatLunges();
  switchScreen('lobby', 'lobby');
  renderLobby();
}

function showBossSelect() {
  switchScreen('bosses', 'bosses');
  renderBossGrid();
}

function showHeroSelect() {
  switchScreen('heroes', 'heroes');
  renderHeroGrid();
}

function showMaterialSelect() {
  switchScreen('materials', 'materials');
  renderMaterialGrid();
}

function showDifficultySelect() {
  switchScreen('difficulty', 'difficulty');
  renderDifficultyGrid();
}

function showScoreboard() {
  switchScreen('scoreboard', 'scoreboard');
  renderScoreboard();
}

function showHistory() {
  switchScreen('history', 'history');
  renderBattleHistory();
}

function showSettings() {
  switchScreen('settings', 'settings');
  renderSettings();
}

function startGame() {
  SoundFX.click();
  showBossSelect();
}

/* ----------------------------------------------------------------------------
   11. UI RENDERERS
   ---------------------------------------------------------------------------- */
function updateSoundIcons() {
  const iconSvg = player.soundEnabled
    ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;

  document.querySelectorAll('.sound-icon-slot').forEach((slot) => {
    slot.innerHTML = iconSvg;
  });

  const miniLabel = document.getElementById('sidebar-sound-label');
  if (miniLabel) miniLabel.textContent = player.soundEnabled ? t('sound_on') : t('sound_off');

  const settingsToggle = document.getElementById('settings-sound-toggle');
  const settingsText = document.getElementById('settings-sound-text');
  if (settingsToggle) settingsToggle.setAttribute('aria-pressed', String(player.soundEnabled));
  if (settingsText) settingsText.textContent = player.soundEnabled ? t('state_on') : t('state_off');
}

function getAdventurerRank() {
  const defeated = player.defeatedBosses.length;
  if (defeated >= 25) return t('rank_overlord');
  if (defeated >= 20) return t('rank_mythic');
  if (defeated >= 14) return t('rank_champion');
  if (defeated >= 8) return t('rank_slayer');
  if (defeated >= 3) return t('rank_knight');
  return t('rank_apprentice');
}

function getAchievements() {
  return [
    {
      id: 'first_blood',
      title: t('ach_first_title'),
      desc: t('ach_first_desc'),
      earned: player.totalWins >= 1
    },
    {
      id: 'boss_slayer',
      title: t('ach_slayer_title'),
      desc: t('ach_slayer_desc'),
      earned: player.defeatedBosses.length >= 5
    },
    {
      id: 'veteran_rush',
      title: t('ach_halfway_title'),
      desc: t('ach_halfway_desc'),
      earned: player.defeatedBosses.length >= 12
    },
    {
      id: 'high_scorer',
      title: t('ach_score_title'),
      desc: t('ach_score_desc'),
      earned: player.highScore >= 3000
    },
    {
      id: 'cute_tamer',
      title: t('ach_cute_title'),
      desc: t('ach_cute_desc'),
      earned: [21, 22, 23, 24].some((id) => player.defeatedBosses.includes(id))
    },
    {
      id: 'overlord_bane',
      title: t('ach_overlord_title'),
      desc: t('ach_overlord_desc'),
      earned: player.defeatedBosses.includes(25)
    }
  ];
}

function showAchievementToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'rpg-toast';
  toast.innerHTML = `
    <div class="rpg-toast-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/>
      </svg>
    </div>
    <div>
      <span class="rpg-toast-title">${title}</span>
      <span class="rpg-toast-msg">${message}</span>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 260);
  }, 3400);
}

function renderLobby() {
  const hasProgress =
    player.totalWins > 0 || player.battleHistory.length > 0 || player.unlockedBosses.length > 1;

  document.getElementById('lobby-welcome-msg').textContent = hasProgress
    ? t('welcome_back', { name: player.playerName })
    : t('welcome_new', { name: player.playerName });

  const rankEl = document.getElementById('lobby-rank-title');
  if (rankEl) rankEl.textContent = getAdventurerRank();

  document.getElementById('lobby-player-name').textContent = player.playerName;
  document.getElementById('lobby-hero-tag').textContent = `${getHeroName(0)} & ${getHeroName(1)}`;
  document.getElementById('lobby-hero-lv').textContent = t('lobby_hero_meta', { level: player.level });
  document.getElementById('lobby-player-level').textContent = String(player.level);
  document.getElementById('lobby-high-score').textContent = player.highScore.toLocaleString();
  document.getElementById('lobby-total-wins').textContent = String(player.totalWins);
  document.getElementById('lobby-bosses-defeated').textContent = `${player.defeatedBosses.length} / 25`;

  // XP progress within current level (180 XP per level)
  const xpInLevel = player.xp % 180;
  const xpPct = Math.min(100, Math.round((xpInLevel / 180) * 100));
  const xpTextEl = document.getElementById('lobby-xp-text');
  const xpFillEl = document.getElementById('lobby-xp-fill');
  if (xpTextEl) xpTextEl.textContent = `${xpInLevel} / 180 XP`;
  if (xpFillEl) xpFillEl.style.width = `${xpPct}%`;

  const lobbyHeroesEl = document.getElementById('lobby-selected-heroes');
  if (lobbyHeroesEl) lobbyHeroesEl.textContent = `${getHeroName(0)} + ${getHeroName(1)}`;
  document.getElementById('lobby-selected-boss').textContent = `Lv.${selectedBoss.level} ${selectedBoss.name}`;
  document.getElementById('lobby-selected-material').textContent = getMaterialLabel(selectedMaterial);
  document.getElementById('lobby-selected-difficulty').textContent = getDiffLabel(selectedDifficulty);

  document.getElementById('lobby-boss-title').textContent = selectedBoss.name;
  document.getElementById('lobby-boss-meta').textContent = `Lv. ${selectedBoss.level} · ${selectedBoss.hp} HP`;

  const spotlight = document.getElementById('lobby-boss-spotlight');
  if (spotlight) {
    spotlight.style.background = `radial-gradient(circle, ${selectedBoss.aura}66, transparent 72%)`;
  }

  const silhouetteCanvas = document.getElementById('lobby-boss-silhouette');
  if (silhouetteCanvas) {
    renderBossSprite(silhouetteCanvas, selectedBoss, 0.5, 'idle', true);
  }

  const continueBtn = document.getElementById('btn-continue-game');
  if (continueBtn) {
    continueBtn.classList.toggle('hidden', !hasProgress);
  }
}

function renderBossGrid() {
  const grid = document.getElementById('boss-grid');
  if (!grid) return;

  const filtered = BOSSES.filter((b) => {
    const isUnlocked = player.unlockedBosses.includes(b.id);
    const isDefeated = player.defeatedBosses.includes(b.id);
    if (bossFilter === 'unlocked') return isUnlocked;
    if (bossFilter === 'defeated') return isDefeated;
    if (bossFilter === 'cute') return Boolean(b.cute);
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="history-empty">${t('boss_empty')}</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((b) => {
      const unlocked = player.unlockedBosses.includes(b.id);
      const defeated = player.defeatedBosses.includes(b.id);
      const isSelected = selectedBoss.id === b.id;

      let statusLabel = t('boss_status_locked');
      let statusCls = 'boss-status-locked';
      if (defeated) {
        statusLabel = t('boss_status_defeated');
        statusCls = 'boss-status-defeated';
      } else if (unlocked) {
        statusLabel = t('boss_status_unlocked');
        statusCls = 'boss-status-unlocked';
      }

      return `
        <article class="boss-card ${unlocked ? 'unlocked' : 'locked'} ${defeated ? 'defeated' : ''} ${isSelected ? 'selected' : ''}" style="--boss-aura: ${b.aura}">
          <div class="boss-card-head">
            <h3 class="boss-card-title">${unlocked ? b.name : t('boss_locked_title', { level: b.level })}</h3>
            <span class="boss-card-lv tabular-nums">Lv. ${b.level}</span>
          </div>
          <div class="boss-card-meta">
            <span class="tabular-nums">${b.hp} HP</span>
            <span aria-hidden="true">·</span>
            <span class="tabular-nums">${b.atk} ATK</span>
            <span aria-hidden="true">·</span>
            <span>${b.difficulty}</span>
          </div>
          <div class="boss-preview-stage" style="${unlocked ? `box-shadow: inset 0 0 36px ${b.aura}22` : ''}">
            <canvas class="pixel-canvas boss-preview-canvas" data-boss-id="${b.id}" data-locked="${!unlocked}" width="120" height="120"></canvas>
          </div>
          <p class="boss-card-desc">${unlocked ? b.desc : t('boss_locked_desc', { prev: b.level - 1 })}</p>
          <div class="boss-card-footer">
            <span class="boss-status-text ${statusCls}">${statusLabel}</span>
            <button type="button" class="btn-boss-select ${isSelected ? 'is-selected' : ''}" data-select-boss="${b.id}" ${unlocked ? '' : 'disabled'}>
              ${isSelected ? t('boss_btn_selected') : unlocked ? t('boss_btn_challenge') : t('boss_btn_locked')}
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  // Paint every boss card preview canvas
  grid.querySelectorAll('.boss-preview-canvas').forEach((c) => {
    const id = Number(c.dataset.bossId);
    const locked = c.dataset.locked === 'true';
    const b = BOSSES.find((item) => item.id === id);
    if (b) renderBossSprite(c, b, 0.8, 'idle', locked);
  });

  grid.querySelectorAll('[data-select-boss]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.selectBoss);
      const boss = BOSSES.find((item) => item.id === id);
      if (!boss || !player.unlockedBosses.includes(id)) return;
      SoundFX.click();
      selectedBoss = boss;
      saveGame();
      showMaterialSelect();
    });
  });
}

function getMaterialIconSvg(icon) {
  const icons = {
    layers: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    wrench: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
    database: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    layout: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    terminal: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    monitor: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    book: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    compass: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
  };
  return icons[icon] || icons.layers;
}

function renderMaterialGrid() {
  const grid = document.getElementById('material-grid');
  if (!grid) return;

  grid.innerHTML = MATERIALS.map((mat) => {
    const count =
      mat.id === 'ALL MATERIAL'
        ? QUESTION_BANK.length
        : QUESTION_BANK.filter((q) => q.category === mat.id).length;
    const isSelected = selectedMaterial === mat.id;
    const label = mat.id === 'ALL MATERIAL' ? t('mat_all_name') : mat.name;
    const descKey = mat.id === 'ALL MATERIAL' ? 'mat_all_desc' : `mat_${mat.id}_desc`;

    return `
      <button type="button" class="material-card ${isSelected ? 'selected' : ''}" data-material-id="${mat.id}">
        <div class="material-icon-box">${getMaterialIconSvg(mat.icon)}</div>
        <div class="material-name">${label}</div>
        <div class="material-meta tabular-nums">${t('questions_count', { count })}</div>
        <p class="material-desc">${t(descKey)}</p>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('[data-material-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      selectedMaterial = btn.dataset.materialId;
      saveGame();
      renderMaterialGrid();
    });
  });
}

function computeQuestionTimer(bossLevel, difficulty) {
  const baseScaled = Math.max(20, 41 - bossLevel); // Lv 1 = 40s, Lv 2 = 39s, Lv 3 = 38s ...
  if (difficulty === 'hard') {
    return Math.max(15, baseScaled - 5);
  }
  return baseScaled;
}

function selectSquadHero(heroId, slot = 0) {
  const id = Number(heroId);
  if (!HEROES[id]) return;
  if (slot === 0) {
    if (partnerHeroId === id) {
      partnerHeroId = selectedHeroId;
    }
    selectedHeroId = id;
  } else {
    if (selectedHeroId === id) {
      selectedHeroId = partnerHeroId;
    }
    partnerHeroId = id;
  }
  saveGame();
  renderLobby();
  if (currentScreen === 'heroes') renderHeroGrid();
  if (currentScreen === 'difficulty') renderDifficultyGrid();
}

function swapSquadOrder() {
  const prevLead = selectedHeroId;
  selectedHeroId = partnerHeroId;
  partnerHeroId = prevLead;
  saveGame();
  renderLobby();
  if (currentScreen === 'heroes') renderHeroGrid();
  if (currentScreen === 'difficulty') renderDifficultyGrid();
}

function renderHeroGrid() {
  const leadHero = getHeroObj(0);
  const partnerHero = getHeroObj(1);

  const name0 = document.getElementById('squad-name-0');
  const role0 = document.getElementById('squad-role-0');
  const name1 = document.getElementById('squad-name-1');
  const role1 = document.getElementById('squad-role-1');
  if (name0) name0.textContent = t(leadHero.nameKey);
  if (role0) role0.textContent = `${t(leadHero.roleKey)} · ${t(leadHero.weaponKey)}`;
  if (name1) name1.textContent = t(partnerHero.nameKey);
  if (role1) role1.textContent = `${t(partnerHero.roleKey)} · ${t(partnerHero.weaponKey)}`;

  renderPlayerSprite(document.getElementById('squad-preview-0'), 0.4, 'stance', 0, leadHero.id);
  renderPlayerSprite(document.getElementById('squad-preview-1'), 0.4, 'idle', 1, partnerHero.id);

  const grid = document.getElementById('hero-grid');
  if (!grid) return;

  grid.innerHTML = HEROES.map((h) => {
    const isLead = selectedHeroId === h.id;
    const isPartner = partnerHeroId === h.id;
    const pillClass = isLead ? 'pill-lead' : isPartner ? 'pill-partner' : 'pill-idle';
    const pillText = isLead ? t('hero_pill_lead') : isPartner ? t('hero_pill_partner') : t('hero_pill_avail');

    return `
      <article class="hero-card ${isLead ? 'is-lead' : ''} ${isPartner ? 'is-partner' : ''}" style="--hero-accent: ${h.projColor}">
        <div class="hero-card-head">
          <div>
            <h3 class="hero-card-title">${t(h.nameKey)}</h3>
            <span class="hero-card-role">${t(h.roleKey)}</span>
          </div>
          <span class="hero-slot-pill ${pillClass}">${pillText}</span>
        </div>
        <div class="hero-preview-stage" style="box-shadow: inset 0 0 34px ${h.projColor}24">
          <canvas class="pixel-canvas hero-preview-canvas" width="128" height="128" data-hero-id="${h.id}"></canvas>
        </div>
        <div class="hero-weapon-meta">${t(h.weaponKey)}</div>
        <p class="hero-card-desc">${t(h.descKey)}</p>
        <div class="hero-actions-row">
          <button
            type="button"
            class="btn-hero-slot ${isLead ? 'active-lead' : ''}"
            data-pick-hero="${h.id}"
            data-pick-slot="0"
          >${isLead ? t('btn_lead_selected') : t('btn_set_lead')}</button>
          <button
            type="button"
            class="btn-hero-slot ${isPartner ? 'active-partner' : ''}"
            data-pick-hero="${h.id}"
            data-pick-slot="1"
          >${isPartner ? t('btn_partner_selected') : t('btn_set_partner')}</button>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.hero-preview-canvas').forEach((canvas) => {
    const hId = Number(canvas.dataset.heroId || 0);
    renderPlayerSprite(canvas, 0.3, hId === selectedHeroId ? 'stance' : 'idle', hId * 0.8, hId);
  });

  grid.querySelectorAll('[data-pick-hero]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      selectSquadHero(Number(btn.dataset.pickHero), Number(btn.dataset.pickSlot));
    });
  });
}

function renderDifficultyGrid() {
  const grid = document.getElementById('difficulty-grid');
  if (!grid) return;

  const timerPreview = computeQuestionTimer(selectedBoss.level, selectedDifficulty);
  const prepHeroEl = document.getElementById('prep-hero-label');
  if (prepHeroEl) prepHeroEl.textContent = `${getHeroName(0)} + ${getHeroName(1)}`;
  document.getElementById('prep-boss-label').textContent = `Lv.${selectedBoss.level} ${selectedBoss.name}`;
  document.getElementById('prep-material-label').textContent = getMaterialLabel(selectedMaterial);
  document.getElementById('prep-timer-label').textContent = t('prep_timer_val', { sec: timerPreview });

  const tiers = [
    {
      id: 'easy',
      name: t('diff_easy_label'),
      cls: 'diff-easy',
      desc: t('diff_easy_desc'),
      timer: `${computeQuestionTimer(selectedBoss.level, 'easy')}s`,
      playerDmg: '125%',
      bossDmg: '72%',
      scoreBonus: 'x1.0'
    },
    {
      id: 'medium',
      name: t('diff_medium_label'),
      cls: 'diff-medium',
      desc: t('diff_medium_desc'),
      timer: `${computeQuestionTimer(selectedBoss.level, 'medium')}s`,
      playerDmg: '100%',
      bossDmg: '100%',
      scoreBonus: 'x1.25'
    },
    {
      id: 'hard',
      name: t('diff_hard_label'),
      cls: 'diff-hard',
      desc: t('diff_hard_desc'),
      timer: `${computeQuestionTimer(selectedBoss.level, 'hard')}s`,
      playerDmg: '85%',
      bossDmg: '130%',
      scoreBonus: 'x1.6'
    }
  ];

  grid.innerHTML = tiers
    .map(
      (tier) => `
    <button type="button" class="difficulty-card ${selectedDifficulty === tier.id ? 'selected' : ''}" data-diff="${tier.id}">
      <div class="diff-title ${tier.cls}">${tier.name}</div>
      <p class="diff-desc">${tier.desc}</p>
      <ul class="diff-stats-list">
        <li><span>${t('diff_stat_timer')}</span><strong>${tier.timer}</strong></li>
        <li><span>${t('diff_stat_hero')}</span><strong>${tier.playerDmg}</strong></li>
        <li><span>${t('diff_stat_boss')}</span><strong>${tier.bossDmg}</strong></li>
        <li><span>${t('diff_stat_mult')}</span><strong>${tier.scoreBonus}</strong></li>
      </ul>
    </button>
  `
    )
    .join('');

  grid.querySelectorAll('[data-diff]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      selectedDifficulty = btn.dataset.diff;
      saveGame();
      renderDifficultyGrid();
    });
  });
}

function renderScoreboard() {
  const box = document.getElementById('scoreboard-content');
  if (!box) return;

  const totalBattles = player.totalWins + player.totalLosses;
  const winRate = totalBattles > 0 ? Math.round((player.totalWins / totalBattles) * 100) : 0;
  const rankTitle = getAdventurerRank();
  const achievements = getAchievements();
  const earnedCount = achievements.filter((a) => a.earned).length;

  box.innerHTML = `
    <div class="rank-hero-card rpg-frame">
      <div class="rank-hero-left">
        <div class="rank-crest-box" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"/>
          </svg>
        </div>
        <div>
          <span class="profile-label">${t('sb_standing')}</span>
          <div class="rank-title-text">${player.playerName} · ${rankTitle}</div>
          <p class="rank-sub-meta tabular-nums">${t('sb_sub_meta', { level: player.level, earned: earnedCount, total: achievements.length })}</p>
        </div>
      </div>
      <button type="button" class="btn-primary-gold btn-compact" id="scoreboard-play-btn">${t('sb_challenge_btn')}</button>
    </div>

    <div class="scoreboard-grid">
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_high_score')}</span>
        <strong class="score-tile-val text-gold tabular-nums">${player.highScore.toLocaleString()}</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_total_score')}</span>
        <strong class="score-tile-val text-blue tabular-nums">${player.totalScore.toLocaleString()}</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_total_wins')}</span>
        <strong class="score-tile-val text-green tabular-nums">${player.totalWins}</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_total_losses')}</span>
        <strong class="score-tile-val text-red tabular-nums">${player.totalLosses}</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_win_rate')}</span>
        <strong class="score-tile-val tabular-nums">${winRate}%</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_bosses_defeated')}</span>
        <strong class="score-tile-val tabular-nums">${player.defeatedBosses.length} / 25</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_highest_boss')}</span>
        <strong class="score-tile-val tabular-nums">Lv. ${player.highestBossLevel}</strong>
      </div>
      <div class="score-tile">
        <span class="score-tile-label">${t('sb_total_battles')}</span>
        <strong class="score-tile-val tabular-nums">${totalBattles}</strong>
      </div>
    </div>

    <h3 class="achievements-heading">${t('sb_achievements')}</h3>
    <div class="achievements-grid">
      ${achievements
        .map(
          (ach) => `
        <div class="achievement-card ${ach.earned ? 'earned' : ''}">
          <div class="ach-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/>
            </svg>
          </div>
          <div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  document.getElementById('scoreboard-play-btn')?.addEventListener('click', () => {
    SoundFX.click();
    showBossSelect();
  });
}

function renderBattleHistory() {
  const container = document.getElementById('history-container');
  if (!container) return;

  const list = player.battleHistory.filter((entry) => {
    if (historyFilter === 'all') return true;
    return entry.result === historyFilter;
  });

  if (!player.battleHistory.length) {
    container.innerHTML = `
      <div class="history-empty">
        <p style="margin-bottom:16px">${t('hist_empty')}</p>
        <button type="button" class="btn-primary-gold btn-compact" id="history-empty-start">${t('hist_empty_btn')}</button>
      </div>
    `;
    document.getElementById('history-empty-start')?.addEventListener('click', () => {
      SoundFX.click();
      showBossSelect();
    });
    return;
  }

  if (!list.length) {
    const filterName = historyFilter === 'VICTORY' ? t('filter_victories') : t('filter_defeats');
    container.innerHTML = `
      <div class="history-empty">
        <p>${t('hist_empty_filtered', { filter: filterName.toLowerCase() })}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="history-cards-grid">
      ${list
        .slice(0, 40)
        .map(
          (entry) => `
        <article class="history-card ${entry.result === 'VICTORY' ? 'is-victory' : 'is-defeat'}">
          <div class="history-card-top">
            <span class="history-boss-name">${entry.bossName}</span>
            <span class="history-outcome ${entry.result === 'VICTORY' ? 'text-green' : 'text-red'}">${entry.result === 'VICTORY' ? t('res_outcome_victory') : t('res_outcome_defeat')}</span>
          </div>
          <div class="history-meta-line">
            <span class="tabular-nums">Lv. ${entry.level}</span>
            <span aria-hidden="true">·</span>
            <span>${getDiffLabel(entry.difficulty || 'medium')}</span>
            <span aria-hidden="true">·</span>
            <span class="tabular-nums">${entry.date}</span>
          </div>
          <div class="history-metrics-row">
            <div>
              <span class="h-stat-k">${t('hist_score')}</span>
              <span class="h-stat-v text-gold tabular-nums">${entry.score.toLocaleString()}</span>
            </div>
            <div>
              <span class="h-stat-k">${t('hist_correct')}</span>
              <span class="h-stat-v tabular-nums">${entry.correctAnswers} / 10</span>
            </div>
            <div>
              <span class="h-stat-k">${t('hist_accuracy')}</span>
              <span class="h-stat-v tabular-nums">${Math.round((entry.correctAnswers / 10) * 100)}%</span>
            </div>
          </div>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function renderSettings() {
  const input = document.getElementById('settings-name-input');
  if (input) input.value = player.playerName;
  const lang = getLang();
  document.querySelectorAll('#settings-lang-toggle [data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  updateSoundIcons();
}

function setLanguage(lang) {
  const normalized = lang === 'id' ? 'id' : 'en';
  player.language = normalized;
  saveGame();
  applyStaticTranslations();
  updateSoundIcons();
  renderLobby();
  renderSettings();
  if (currentScreen === 'bosses') renderBossGrid();
  else if (currentScreen === 'heroes') renderHeroGrid();
  else if (currentScreen === 'materials') renderMaterialGrid();
  else if (currentScreen === 'difficulty') renderDifficultyGrid();
  else if (currentScreen === 'scoreboard') renderScoreboard();
  else if (currentScreen === 'history') renderBattleHistory();
  else if (currentScreen === 'battle' && battleActive) {
    updatePartyHUD();
    updateHP();
    updateScore();
  }
  showAchievementToast(t('toast_lang_title'), t('toast_lang_msg'));
}

/* ----------------------------------------------------------------------------
   12. BATTLE ENGINE (startBattle, loadQuestion, selectAnswer, ATTACKS, TIMER)
   ---------------------------------------------------------------------------- */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function isValidQuestion(q) {
  return (
    q &&
    typeof q.question === 'string' &&
    q.question.trim().length > 0 &&
    Array.isArray(q.choices) &&
    q.choices.length === 4 &&
    q.choices.every((c) => typeof c === 'string' && c.trim().length > 0) &&
    new Set(q.choices.map((c) => c.trim().toLowerCase())).size === 4 &&
    Number.isInteger(q.correctIndex) &&
    q.correctIndex >= 0 &&
    q.correctIndex < 4
  );
}

function buildBattleDeck() {
  const validBank = QUESTION_BANK.filter(isValidQuestion);

  let pool =
    selectedMaterial === 'ALL MATERIAL'
      ? [...validBank]
      : validBank.filter((q) => q.category === selectedMaterial);

  if (pool.length < 10) {
    pool = [...pool, ...validBank.filter((q) => q.category !== selectedMaterial)];
  }

  // Strictly match selected difficulty first, deduplicated by question text
  const primary = shuffleArray(pool.filter((q) => q.difficulty === selectedDifficulty));
  const fallback = shuffleArray(pool.filter((q) => q.difficulty !== selectedDifficulty));

  const seen = new Set();
  const chosen = [];
  for (const q of [...primary, ...fallback]) {
    if (seen.has(q.question)) continue;
    seen.add(q.question);
    chosen.push(q);
    if (chosen.length === 10) break;
  }

  return chosen.map((q) => {
    const indexed = q.choices.map((text, idx) => ({ text, isCorrect: idx === q.correctIndex }));
    const shuffled = shuffleArray(indexed);
    const correctIndex = shuffled.findIndex((c) => c.isCorrect);
    return {
      category: q.category,
      difficulty: q.difficulty,
      question: q.question,
      explanation: q.explanation || '',
      choices: shuffled.map((c) => c.text),
      correctIndex: correctIndex >= 0 ? correctIndex : 0
    };
  });
}

function getBossIntroProfile(boss) {
  const arch = boss?.archetype || 'knight';
  if (['rabbit', 'slime_king', 'little_ghost', 'cat_boss'].includes(arch)) {
    return {
      entranceType: 'bounce',
      attackType: 'cute_blast',
      stageBadge: t('intro_stage_mythic'),
      kicker: t('intro_kicker_mythic')
    };
  }
  if (arch === 'overlord') {
    return {
      entranceType: 'descend',
      attackType: 'eclipse',
      stageBadge: t('intro_stage_overlord'),
      kicker: t('intro_kicker_overlord')
    };
  }
  if (['dragon', 'ice_dragon', 'demon'].includes(arch)) {
    return {
      entranceType: 'descend',
      attackType: arch === 'demon' ? 'orb' : 'breath',
      stageBadge: t('intro_stage_titan'),
      kicker: t('intro_kicker_titan')
    };
  }
  if (['reaper', 'ninja', 'phantom', 'chaos'].includes(arch)) {
    return {
      entranceType: 'blink',
      attackType: ['reaper', 'ninja'].includes(arch) ? 'slash' : 'orb',
      stageBadge: t('intro_stage_shadow'),
      kicker: t('intro_kicker_shadow')
    };
  }
  if (['mage', 'queen', 'storm', 'moon_warrior'].includes(arch)) {
    return {
      entranceType: 'arcane',
      attackType: arch === 'storm' ? 'bolt' : arch === 'moon_warrior' ? 'slash' : 'orb',
      stageBadge: t('intro_stage_arcane'),
      kicker: t('intro_kicker_boss')
    };
  }
  if (['golem', 'titan', 'guardian'].includes(arch)) {
    return {
      entranceType: 'march',
      attackType: 'slam',
      stageBadge: t('intro_stage_seismic'),
      kicker: t('intro_kicker_colossus')
    };
  }
  if (['beast', 'mech_beast'].includes(arch)) {
    return {
      entranceType: 'pounce',
      attackType: 'bolt',
      stageBadge: t('intro_stage_voltage'),
      kicker: t('intro_kicker_predator')
    };
  }
  if (['horn_lord', 'mutant'].includes(arch)) {
    return {
      entranceType: 'pounce',
      attackType: 'breath',
      stageBadge: t('intro_stage_elemental'),
      kicker: t('intro_kicker_boss')
    };
  }
  // knight, samurai
  return {
    entranceType: arch === 'samurai' ? 'pounce' : 'march',
    attackType: 'slash',
    stageBadge: t('intro_stage_blade'),
    kicker: t('intro_kicker_boss')
  };
}

const IntroCutscene = (() => {
  let active = false;
  let startTime = 0;
  let rafId = null;
  let profile = null;
  let flags = {};

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function triggerImpactFlash() {
    const flashEl = document.getElementById('cinematic-impact-flash');
    if (!flashEl) return;
    flashEl.classList.remove('flash-active');
    void flashEl.offsetWidth;
    flashEl.classList.add('flash-active');
  }

  function showCallout(text) {
    const box = document.getElementById('cinematic-callout');
    const txt = document.getElementById('cinematic-callout-text');
    if (!box || !txt) return;
    txt.textContent = text;
    box.classList.remove('hidden');
    requestAnimationFrame(() => box.classList.add('visible'));
  }

  function hideCallout() {
    const box = document.getElementById('cinematic-callout');
    if (!box) return;
    box.classList.remove('visible');
  }

  function setPose(who, state, durationMs = 600) {
    const until = performance.now() + durationMs;
    if (who === 'player') spriteAnim.battlePlayer = { state, until };
    else spriteAnim.battleBoss = { state, until };
  }

  function resetTransforms() {
    const pWrap = document.getElementById('battle-player-wrap');
    const bWrap = document.getElementById('battle-boss-wrap');
    const camStage = document.getElementById('battle-camera-stage');
    if (pWrap) pWrap.style.transform = '';
    if (bWrap) bWrap.style.transform = '';
    if (camStage) camStage.style.transform = '';

    spriteAnim.battlePlayer = { state: 'idle', until: 0 };
    spriteAnim.battleBoss = { state: 'idle', until: 0 };
    BattleFX.clearCutsceneFX();

    const overlay = document.getElementById('boss-intro-overlay');
    if (overlay) overlay.classList.remove('slowmo-active', 'bars-in');
    document.getElementById('cinematic-title-card')?.classList.remove('visible', 'exit');
    document.getElementById('cinematic-callout')?.classList.add('hidden');
    document.getElementById('cinematic-callout')?.classList.remove('visible');
    document.getElementById('screen-battle')?.classList.remove('intro-active');
  }

  function computeSpanX() {
    const stage = document.getElementById('battle-camera-stage');
    const pAnchor = getOffsetCenterInStage(document.getElementById('battle-player-canvas'), stage);
    const bAnchor = getOffsetCenterInStage(document.getElementById('battle-boss-canvas'), stage);
    if (!pAnchor || !bAnchor) return 440;
    return Math.max(180, bAnchor.x - pAnchor.x);
  }

  function stepFrame(nowMs) {
    if (!active) return;

    const elapsed = nowMs - startTime;
    const totalDuration = 5250;
    const pWrap = document.getElementById('battle-player-wrap');
    const bWrap = document.getElementById('battle-boss-wrap');
    const camStage = document.getElementById('battle-camera-stage');
    const overlay = document.getElementById('boss-intro-overlay');
    const titleCard = document.getElementById('cinematic-title-card');

    const spanX = computeSpanX();
    const attackDist = spanX * 0.72;
    const clashDist = spanX * 0.36;
    const isNarrow = window.innerWidth <= 1024;
    const camScaleMax = isNarrow ? 1.09 : 1.2;

    let px = 0;
    let py = 0;
    let pRot = 0;
    let pScale = 1;

    let bx = 0;
    let by = 0;
    let bRot = 0;
    let bScale = 1;

    let camX = 0;
    let camY = 0;
    let camZoom = 1;
    let slowMo = false;

    const pBase = BattleFX.getAnchor(false);
    const bBase = BattleFX.getAnchor(true);

    // Subtle ambient battlefield embers throughout Scene 1 & Scene 2
    if (elapsed < 4500 && Math.random() < 0.32) {
      BattleFX.spawnAmbientEmber(Math.random() < 0.6 ? selectedBoss.aura : '#60a5fa');
    }

    // --- SCENE 1: BATTLE ENTRANCE (0 - 1350ms) ---
    if (elapsed < 1350) {
      const enterT = easeOutCubic(clamp01((elapsed - 120) / 820));
      px = lerp(-240, 0, enterT);
      py = Math.sin(enterT * Math.PI) * -14;

      if (profile.entranceType === 'descend') {
        bx = lerp(160, 0, enterT);
        by = lerp(-150, 0, enterT);
      } else if (profile.entranceType === 'blink') {
        bx = enterT < 0.45 ? 180 : lerp(90, 0, (enterT - 0.45) / 0.55);
        bScale = enterT < 0.45 ? 0.65 : lerp(1.12, 1, (enterT - 0.45) / 0.55);
      } else if (profile.entranceType === 'bounce') {
        bx = lerp(240, 0, enterT);
        by = -Math.abs(Math.sin(enterT * Math.PI * 2.5)) * 42 * (1 - enterT * 0.5);
      } else if (profile.entranceType === 'arcane') {
        bx = lerp(180, 0, enterT);
        by = -Math.sin(enterT * Math.PI) * 28;
        bScale = lerp(0.75, 1, enterT);
      } else {
        // march / pounce
        bx = lerp(250, 0, enterT);
        by = profile.entranceType === 'pounce' ? -Math.sin(enterT * Math.PI) * 38 : -Math.abs(Math.sin(enterT * Math.PI * 3)) * 10;
      }

      camZoom = lerp(1.03, 1.09, easeInOutCubic(clamp01(elapsed / 1350)));
      setPose('player', enterT < 0.9 ? 'dash' : 'stance', 120);
      setPose('boss', enterT < 0.85 ? 'idle' : 'charge', 120);

      if (!flags.entranceBurst && enterT >= 0.82) {
        flags.entranceBurst = true;
        BattleFX.spawnShockwave(bBase.x, bBase.y, selectedBoss.aura, 120);
        BattleFX.spawnBurst(true, selectedBoss.aura, bBase.x, bBase.y, 16);
      }
      if (!flags.titleShown && elapsed >= 280) {
        flags.titleShown = true;
        titleCard?.classList.add('visible');
      }
    }
    // --- SCENE 2 BEAT 1: PLAYER FIGHTING STANCE (1350 - 1750ms) ---
    else if (elapsed < 1750) {
      const prog = easeInOutCubic((elapsed - 1350) / 400);
      camX = lerp(0, isNarrow ? 24 : 62, prog);
      camZoom = lerp(1.09, camScaleMax - 0.04, prog);
      setPose('player', 'stance', 140);
      setPose('boss', 'idle', 140);

      if (!flags.titleExit) {
        flags.titleExit = true;
        titleCard?.classList.add('exit');
      }
      if (!flags.stanceCue) {
        flags.stanceCue = true;
        showCallout(t('callout_challenge'));
        BattleFX.spawnShockwave(pBase.x, pBase.y, '#60a5fa', 95);
        SoundFX.click();
      }
    }
    // --- SCENE 2 BEAT 2: BOSS PREPARES ATTACK (1750 - 2300ms) ---
    else if (elapsed < 2300) {
      const prog = easeInOutCubic((elapsed - 1750) / 550);
      camX = lerp(isNarrow ? 24 : 62, isNarrow ? -24 : -62, prog);
      camZoom = camScaleMax - 0.02;
      bx = Math.sin(prog * Math.PI * 5) * 4;
      bScale = 1 + Math.sin(prog * Math.PI) * 0.07;
      setPose('player', 'stance', 140);
      setPose('boss', 'charge', 140);

      if (!flags.bossCharge) {
        flags.bossCharge = true;
        hideCallout();
        SoundFX.bossCharge(selectedBoss);
        BattleFX.spawnBurst(true, selectedBoss.aura, bBase.x, bBase.y, 18);
      }
    }
    // --- SCENE 2 BEAT 3: PLAYER QUICK DASH TOWARD BOSS (2300 - 2620ms) ---
    else if (elapsed < 2620) {
      const prog = easeOutCubic((elapsed - 2300) / 320);
      px = lerp(0, attackDist, prog);
      py = -Math.sin(prog * Math.PI) * 18;
      pRot = 7;
      camX = lerp(isNarrow ? -24 : -62, isNarrow ? -28 : -84, prog);
      camZoom = lerp(camScaleMax - 0.02, camScaleMax + 0.04, prog);
      setPose('player', 'dash', 120);
      setPose('boss', 'charge', 120);

      if (!flags.dashCue) {
        flags.dashCue = true;
        SoundFX.dash();
        const leadHeroObj = getHeroObj(0);
        BattleFX.spawnDashFX(true, leadHeroObj.projColor || '#38bdf8', 1.25);
      }
      if (Math.random() < 0.65) {
        BattleFX.spawnAfterimage(pBase.x + px, pBase.y + py, getHeroObj(0).auraColor || '#38bdf8', true);
      }
    }
    // --- SCENE 2 BEAT 4 & 5: PLAYER SLASH + SLOW-MO HIT & BOSS KNOCKBACK (2620 - 3080ms) ---
    else if (elapsed < 3080) {
      const local = elapsed - 2620;
      const hitT = easeOutCubic(clamp01(local / 260));
      px = attackDist + (local < 180 ? 12 : lerp(12, -16, (local - 180) / 280));
      py = local < 180 ? -8 : 0;
      bx = lerp(0, 38, hitT);
      by = -Math.sin(hitT * Math.PI) * 12;
      bRot = lerp(0, 9, hitT) * (1 - clamp01((local - 260) / 200));
      camX = isNarrow ? -28 : -84;
      camZoom = camScaleMax + 0.05;
      slowMo = local >= 20 && local <= 230;

      setPose('player', local < 250 ? 'attack' : 'stance', 120);
      setPose('boss', 'hit', 140);

      if (!flags.playerSlash) {
        flags.playerSlash = true;
        SoundFX.slash();
        SoundFX.heavyHit();
        BattleFX.spawnSlashArc(bBase.x - 10, bBase.y, '#60a5fa', -0.62, 92, false);
        BattleFX.spawnSlashArc(bBase.x + 8, bBase.y + 4, '#facc15', 0.48, 76, false);
        BattleFX.spawnImpactFlash(true, '#facc15', { x: bBase.x, y: bBase.y, radius: 112, rays: 8, screenAlpha: 0.16, sparkCount: 22 });
        BattleFX.spawnShockwave(bBase.x, bBase.y, '#fde047', 135);
        BattleFX.spawnBurst(true, '#facc15', bBase.x, bBase.y, 26);
        triggerImpactFlash();
        triggerArenaImpact(false);
      }
    }
    // --- SCENE 2 BEAT 6 & 7: BOSS COUNTERATTACK + PLAYER DODGE (3080 - 3700ms) ---
    else if (elapsed < 3700) {
      const local = elapsed - 3080;
      const prog = clamp01(local / 620);

      if (local < 220) {
        const prep = easeOutCubic(local / 220);
        px = lerp(attackDist - 16, attackDist * 0.25, prep);
        bx = lerp(38, -28, prep);
        setPose('player', 'stance', 120);
        setPose('boss', 'attack', 140);
      } else {
        const dodgeT = easeOutCubic(clamp01((local - 200) / 360));
        px = lerp(attackDist * 0.25, -36, dodgeT);
        py = -Math.sin(dodgeT * Math.PI) * 38;
        pRot = -11 * Math.sin(dodgeT * Math.PI);
        bx = lerp(-28, 0, dodgeT);
        setPose('player', 'dodge', 140);
        setPose('boss', local < 380 ? 'attack' : 'idle', 140);

        if (!flags.dodgeCue) {
          flags.dodgeCue = true;
          SoundFX.dodge();
          showCallout(t('callout_evade'));
          BattleFX.spawnSpeedLines(-1, '#60a5fa', 12);
        }
        if (dodgeT < 0.8 && Math.random() < 0.6) {
          BattleFX.spawnAfterimage(pBase.x + px, pBase.y + py, '#60a5fa', true);
        }
      }

      if (!flags.bossCounter && local >= 150) {
        flags.bossCounter = true;
        SoundFX.bossAttack();
        BattleFX.spawnBossCounterFX(profile.attackType, selectedBoss, bBase.x - 24, bBase.y, pBase.x + 28, pBase.y);
        triggerArenaImpact(true);
      }

      camX = lerp(isNarrow ? -28 : -84, 0, easeInOutCubic(prog));
      camZoom = lerp(camScaleMax + 0.05, camScaleMax - 0.04, prog);
    }
    // --- SCENE 2 BEAT 8: FINAL DRAMATIC CLASH BEFORE SEPARATING (3700 - 4450ms) ---
    else if (elapsed < 4450) {
      const local = elapsed - 3700;
      if (local < 250) {
        if (!flags.hideDodge) {
          flags.hideDodge = true;
          hideCallout();
        }
        const rush = easeOutCubic(local / 250);
        px = lerp(-36, clashDist, rush);
        bx = lerp(0, -clashDist, rush);
        py = -Math.sin(rush * Math.PI) * 14;
        by = -Math.sin(rush * Math.PI) * 14;
        setPose('player', 'dash', 120);
        setPose('boss', 'attack', 120);
      } else {
        const hold = clamp01((local - 250) / 500);
        const recoil = easeOutCubic(clamp01((local - 380) / 370));
        px = clashDist - recoil * 44;
        bx = -clashDist + recoil * 44;
        slowMo = hold < 0.55;
        setPose('player', 'clash', 140);
        setPose('boss', 'clash', 140);

        if (!flags.finalClash) {
          flags.finalClash = true;
          const midX = (pBase.x + bBase.x) * 0.5;
          const midY = (pBase.y + bBase.y) * 0.5;
          SoundFX.clash();
          showCallout(t('callout_battle_begins'));
          triggerImpactFlash();
          triggerArenaImpact(false);
          BattleFX.spawnSlashArc(midX, midY, '#facc15', -0.55, 108, false);
          BattleFX.spawnSlashArc(midX, midY, selectedBoss.aura, 0.55, 108, true);
          BattleFX.spawnImpactFlash(true, '#fde047', { x: midX, y: midY, radius: 136, rays: 10, screenAlpha: 0.22, sparkCount: 28 });
          BattleFX.spawnShockwave(midX, midY, '#ffffff', 180);
          BattleFX.spawnShockwave(midX, midY, selectedBoss.aura, 130);
          BattleFX.spawnBurst(true, '#fde047', midX, midY, 24);
          BattleFX.spawnBurst(false, selectedBoss.aura, midX, midY, 20);
        }
      }
      camX = 0;
      camZoom = camScaleMax + 0.04;
    }
    // --- SCENE 4: RETURN TO ORIGINAL POSITIONS (4450 - 5250ms) ---
    else {
      const retT = easeOutCubic(clamp01((elapsed - 4450) / 720));
      px = lerp(clashDist - 44, 0, retT);
      bx = lerp(-clashDist + 44, 0, retT);
      py = 0;
      by = 0;
      pRot = 0;
      bRot = 0;
      camX = 0;
      camY = 0;
      camZoom = lerp(camScaleMax + 0.04, 1, retT);

      setPose('player', retT < 0.4 ? 'dodge' : 'idle', 120);
      setPose('boss', 'idle', 120);

      if (!flags.barsOut && elapsed >= 4680) {
        flags.barsOut = true;
        hideCallout();
        overlay?.classList.remove('bars-in');
      }
    }

    BattleFX.setTimeScale(slowMo ? 0.32 : 1);
    overlay?.classList.toggle('slowmo-active', slowMo);

    if (pWrap) {
      pWrap.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${pScale.toFixed(3)}) rotate(${pRot.toFixed(1)}deg)`;
    }
    if (bWrap) {
      bWrap.style.transform = `translate3d(${bx.toFixed(1)}px, ${by.toFixed(1)}px, 0) scale(${bScale.toFixed(3)}) rotate(${bRot.toFixed(1)}deg)`;
    }
    if (camStage) {
      camStage.style.transform = `translate3d(${camX.toFixed(1)}px, ${camY.toFixed(1)}px, 0) scale(${camZoom.toFixed(3)})`;
    }

    if (elapsed >= totalDuration) {
      active = false;
      rafId = null;
      resetTransforms();
      finishBossIntro();
      return;
    }

    rafId = requestAnimationFrame(stepFrame);
  }

  function start(boss) {
    cancel();
    profile = getBossIntroProfile(boss);
    flags = {};
    active = true;
    startTime = performance.now();

    const screen = document.getElementById('screen-battle');
    const overlay = document.getElementById('boss-intro-overlay');
    const titleCard = document.getElementById('cinematic-title-card');

    screen?.classList.add('intro-active');
    const horizon = document.getElementById('arena-horizon-glow');
    if (horizon) {
      horizon.style.setProperty('--cutscene-aura', `${boss.aura}55`);
    }

    if (overlay) {
      overlay.classList.remove('hidden', 'fading-out', 'slowmo-active');
      requestAnimationFrame(() => overlay.classList.add('bars-in'));
    }

    const kickerEl = document.getElementById('boss-intro-kicker');
    if (kickerEl) kickerEl.textContent = profile.kicker;
    const badgeEl = document.getElementById('boss-intro-stage-badge');
    if (badgeEl) badgeEl.textContent = profile.stageBadge;

    document.getElementById('boss-intro-name').textContent = boss.name;
    document.getElementById('boss-intro-meta').textContent = `Lv. ${boss.level} · ${boss.difficulty} · ${boss.hp} HP`;
    document.getElementById('boss-intro-desc').textContent = boss.desc;

    const glow = document.getElementById('boss-intro-glow');
    if (glow) glow.style.background = `radial-gradient(circle, ${boss.aura}77, transparent 70%)`;

    titleCard?.classList.remove('visible', 'exit');

    const hpBar = document.getElementById('boss-intro-hp-fill');
    if (hpBar) {
      hpBar.style.width = '0%';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hpBar.style.width = '100%';
        });
      });
    }

    SoundFX.bossIntro(boss);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      titleCard?.classList.add('visible');
      bossIntroTimer = setTimeout(() => {
        active = false;
        resetTransforms();
        finishBossIntro();
      }, 950);
      return;
    }

    rafId = requestAnimationFrame(stepFrame);
  }

  function cancel() {
    active = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (bossIntroTimer) {
      clearTimeout(bossIntroTimer);
      bossIntroTimer = null;
    }
    resetTransforms();
    const overlay = document.getElementById('boss-intro-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.classList.remove('fading-out', 'bars-in', 'slowmo-active');
    }
  }

  return {
    start,
    cancel,
    isActive: () => active
  };
})();

function finishBossIntro() {
  if (bossIntroTimer) {
    clearTimeout(bossIntroTimer);
    bossIntroTimer = null;
  }
  if (IntroCutscene.isActive()) {
    IntroCutscene.cancel();
  } else {
    document.getElementById('screen-battle')?.classList.remove('intro-active');
  }

  const sessionId = battleSessionId;
  const overlay = document.getElementById('boss-intro-overlay');
  if (!overlay || overlay.classList.contains('hidden')) {
    if (battleActive && sessionId === battleSessionId && currentQuestion === 0 && !timerInterval) {
      loadQuestion();
    }
    return;
  }

  overlay.classList.add('fading-out');
  scheduleBattleTimeout(() => {
    overlay.classList.add('hidden');
    overlay.classList.remove('fading-out', 'bars-in', 'slowmo-active');
    if (currentQuestion === 0 && !timerInterval) {
      loadQuestion();
    }
  }, 320, sessionId);
}

function playBossIntro() {
  const overlay = document.getElementById('boss-intro-overlay');
  if (!overlay) {
    loadQuestion();
    return;
  }
  IntroCutscene.start(selectedBoss);
}

function updatePartyHUD() {
  const heroLabel = document.getElementById('battle-active-hero-label');
  if (heroLabel) {
    heroLabel.textContent = t('hero_role_sub', { num: activeHeroIndex + 1, hero: getHeroName(activeHeroIndex) });
    heroLabel.classList.toggle('is-hero-2', activeHeroIndex === 1);
  }

  const slot0 = document.getElementById('party-slot-0');
  const slot1 = document.getElementById('party-slot-1');
  const name0 = document.getElementById('party-name-0');
  const name1 = document.getElementById('party-name-1');
  const state0 = document.getElementById('party-state-0');
  const state1 = document.getElementById('party-state-1');

  if (name0) name0.textContent = getHeroName(0);
  if (name1) name1.textContent = getHeroName(1);

  if (slot0 && state0) {
    slot0.className = `party-slot ${activeHeroIndex === 0 && heroHPs[0] > 0 ? 'active' : 'fallen'}`;
    state0.textContent = activeHeroIndex === 0 && heroHPs[0] > 0 ? t('party_active') : t('party_fallen');
  }
  if (slot1 && state1) {
    if (activeHeroIndex === 1) {
      slot1.className = `party-slot ${playerHP > 0 ? 'active is-second-hero' : 'fallen'}`;
      state1.textContent = playerHP > 0 ? t('party_active') : t('party_fallen');
    } else {
      slot1.className = 'party-slot standby';
      state1.textContent = t('party_standby');
    }
  }

  const boxEl = document.getElementById('timer-box');
  const noticeEl = document.getElementById('hero2-sudden-death-notice');
  const isHero2 = activeHeroIndex === 1;
  if (boxEl) boxEl.classList.toggle('final-hero-warning', isHero2);
  if (noticeEl) {
    noticeEl.textContent = t('sudden_death_notice');
    noticeEl.classList.toggle('hidden', !isHero2);
  }
}

function startBattle() {
  stopTimer();
  battleSessionId += 1;
  clearBattleTimeouts();
  BattleFX.clearAll();
  IntroCutscene.cancel();
  resetCombatLunges();
  SoundFX.click();

  questions = buildBattleDeck();
  currentQuestion = 0;
  activeHeroIndex = 0;
  heroHPs = [100, 100];
  secondChanceUsed = false;
  defeatReason = '';
  maxPlayerHP = 100;
  playerHP = 100;
  maxBossHP = selectedBoss.hp;
  bossHP = selectedBoss.hp;
  score = 0;
  combo = 0;
  maxCombo = 1;
  correctAnswers = 0;
  wrongAnswers = 0;
  damageDealt = 0;
  damageReceived = 0;
  battleStartTime = Date.now();
  battleLocked = false;
  battleActive = true;

  spriteAnim.battlePlayer = { state: 'idle', until: 0 };
  spriteAnim.battleBoss = { state: 'idle', until: 0 };

  document.getElementById('battle-boss-badge').textContent = `${selectedBoss.name} · Lv. ${selectedBoss.level}`;
  document.getElementById('battle-material-label').textContent = getMaterialLabel(selectedMaterial);
  document.getElementById('battle-difficulty-label').textContent = getDiffLabel(selectedDifficulty);

  document.getElementById('battle-player-name').textContent = player.playerName;
  document.getElementById('battle-player-lv').textContent = `Lv. ${player.level}`;
  document.getElementById('battle-boss-name').textContent = selectedBoss.name;
  document.getElementById('battle-boss-lv').textContent = `Lv. ${selectedBoss.level}`;
  document.getElementById('boss-atk-text').textContent = `ATK: ${selectedBoss.atk}`;

  const bossFloor = document.getElementById('battle-boss-floor');
  if (bossFloor) {
    bossFloor.style.background = `radial-gradient(circle, ${selectedBoss.aura}66, rgba(0,0,0,0.75))`;
  }

  document.getElementById('battle-q-counter').textContent = '1 / 10';
  document.getElementById('battle-question-text').textContent = t('battle_get_ready');
  document.getElementById('battle-answers-grid').innerHTML = '';
  document.getElementById('battle-feedback')?.classList.add('hidden');
  document.getElementById('battle-timer-num').textContent = `${computeQuestionTimer(selectedBoss.level, selectedDifficulty)}s`;
  document.getElementById('battle-timer-fill').style.width = '100%';

  switchScreen('battle', 'play');
  updatePartyHUD();
  updateHP();
  updateScore();
  playBossIntro();
}

function loadQuestion() {
  if (!battleActive) return;
  if (currentQuestion >= questions.length || playerHP <= 0 || bossHP <= 0) {
    endBattle();
    return;
  }

  battleLocked = false;
  const q = questions[currentQuestion];
  questionStartTime = Date.now();

  document.getElementById('battle-q-counter').textContent = `${currentQuestion + 1} / 10`;
  document.getElementById('question-category-tag').textContent = `${q.category} · ${getDiffLabel(q.difficulty)}`;
  document.getElementById('battle-question-text').textContent = q.question;

  const feedback = document.getElementById('battle-feedback');
  feedback.classList.add('hidden');
  feedback.classList.remove('is-correct', 'is-wrong');

  const grid = document.getElementById('battle-answers-grid');
  const keys = ['A', 'B', 'C', 'D'];
  grid.innerHTML = q.choices
    .map(
      (choice, idx) => `
      <button type="button" class="answer-btn" data-choice-idx="${idx}">
        <span class="answer-key">${keys[idx]}</span>
        <span>${choice}</span>
      </button>
    `
    )
    .join('');

  grid.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectAnswer(Number(btn.dataset.choiceIdx));
    });
  });

  startTimer();
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  stopTimer();
  questionMaxTime = computeQuestionTimer(selectedBoss.level, selectedDifficulty);
  timer = questionMaxTime;
  renderTimerUI();

  timerInterval = setInterval(() => {
    if (!battleActive || battleLocked) return;
    timer -= 1;
    renderTimerUI();

    if (timer <= 5 && timer > 0) {
      SoundFX.timerWarn();
    }

    if (timer <= 0) {
      stopTimer();
      selectAnswer(-1, true); // Time expired
    }
  }, 1000);
}

function renderTimerUI() {
  const numEl = document.getElementById('battle-timer-num');
  const fillEl = document.getElementById('battle-timer-fill');
  const boxEl = document.getElementById('timer-box');

  const clamped = Math.max(0, timer);
  const pct = Math.max(0, Math.min(100, (clamped / questionMaxTime) * 100));

  numEl.textContent = `${clamped}s`;
  fillEl.style.width = `${pct}%`;

  boxEl.classList.toggle('timer-warning', clamped <= 10 && clamped > 5);
  boxEl.classList.toggle('timer-critical', clamped <= 5);
  boxEl.classList.toggle('final-hero-warning', activeHeroIndex === 1);
}

function selectAnswer(choiceIndex, timedOut = false) {
  if (!battleActive || battleLocked) return;
  battleLocked = true;
  stopTimer();

  const q = questions[currentQuestion];
  const isCorrect = !timedOut && choiceIndex === q.correctIndex;
  const elapsedSec = Math.max(0.5, (Date.now() - questionStartTime) / 1000);

  const buttons = document.querySelectorAll('#battle-answers-grid .answer-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) btn.classList.add('correct');
    else if (idx === choiceIndex && !isCorrect) btn.classList.add('wrong');
  });

  const feedback = document.getElementById('battle-feedback');
  const statusEl = document.getElementById('feedback-status');
  const actionEl = document.getElementById('feedback-action');
  const expEl = document.getElementById('feedback-explanation');

  feedback.classList.remove('hidden', 'is-correct', 'is-wrong');
  expEl.textContent = q.explanation;

  if (isCorrect) {
    correctAnswers += 1;
    combo += 1;
    if (combo > maxCombo) maxCombo = combo;

    feedback.classList.add('is-correct');
    statusEl.textContent = t('fb_correct');
    const dmgMult = getComboDamageMultiplier(combo);
    actionEl.textContent = dmgMult > 1 ? t('fb_player_atk_boost', { mult: dmgMult.toFixed(1) }) : t('fb_player_atk');
    SoundFX.correct();

    // Score calculation: Base +100 + Speed Bonus + Difficulty + Boss Level + Combo Multiplier
    const speedBonus = Math.max(0, Math.round(timer * 3));
    const diffMult = selectedDifficulty === 'hard' ? 1.6 : selectedDifficulty === 'medium' ? 1.25 : 1.0;
    const bossBonus = selectedBoss.level * 12;
    const gained = Math.round((100 + speedBonus + bossBonus) * diffMult * combo);
    score += gained;
    updateScore();

    playerAttack(elapsedSec);
  } else if (timedOut && activeHeroIndex === 1) {
    // Character 2 Sudden-Death Rule: Running out of time loses immediately
    wrongAnswers += 1;
    combo = 0;
    defeatReason = 'hero2_timeout';

    feedback.classList.add('is-wrong');
    statusEl.textContent = t('fb_hero2_timeout_status');
    actionEl.textContent = t('fb_hero2_timeout_action');
    expEl.textContent = t('fb_hero2_timeout_exp', {
      hero2: getHeroName(1),
      exp: q.explanation
    });
    SoundFX.wrong();
    updateScore();

    spriteAnim.battleBoss = { state: 'attack', until: performance.now() + 450 };
    triggerCombatLunge(false, -64, 400);
    SoundFX.bossAttack();
    const bAnchorStart = BattleFX.getAnchor(true);
    BattleFX.spawnDashFX(false, '#ef4444', 1.35);
    BattleFX.spawnWeaponTrail(bAnchorStart.x - 16, bAnchorStart.y, '#ef4444', {
      rx: 76,
      ry: 58,
      tilt: 0.45,
      flip: true,
      width: 15
    });

    const sessionId = battleSessionId;
    BattleFX.spawnProjectile(false, '#ef4444', () => {
      if (!battleActive || sessionId !== battleSessionId) return;
      SoundFX.heavyHit();
      const pAnchorHit = BattleFX.getAnchor(false);
      BattleFX.spawnImpactFlash(false, '#ef4444', { radius: 118, rays: 8, screenAlpha: 0.24, sparkCount: 24 });
      BattleFX.spawnWeaponTrail(pAnchorHit.x + 8, pAnchorHit.y, '#ef4444', {
        rx: 78,
        ry: 54,
        tilt: 0.55,
        flip: true,
        width: 14
      });
      BattleFX.spawnShockwave(pAnchorHit.x, pAnchorHit.y, '#ef4444', 135);
      BattleFX.spawnBurst(false, '#ef4444', pAnchorHit.x, pAnchorHit.y, 26);
      triggerArenaImpact(true);
      const koDmg = Math.max(playerHP, selectedBoss.atk);
      playerHP = 0;
      heroHPs[1] = 0;
      damageReceived += koDmg;
      spawnFloatingDamage('player', t('fb_hero2_ko_tag'));
      spriteAnim.battlePlayer = { state: 'defeat', until: performance.now() + 4000 };
      updateHP();
      updatePartyHUD();
      scheduleBattleTimeout(() => endBattle(), 950, sessionId);
    }, { speed: 0.1, size: 26 });
  } else {
    wrongAnswers += 1;
    combo = 0;

    feedback.classList.add('is-wrong');
    statusEl.textContent = timedOut ? t('fb_timeout') : t('fb_wrong');
    actionEl.textContent = t('fb_boss_atk');
    SoundFX.wrong();
    updateScore();

    bossAttack();
  }
}

function spawnFloatingDamage(target, amountText) {
  const layer = document.getElementById('damage-layer');
  if (!layer) return;
  const el = document.createElement('div');
  el.className = `floating-dmg ${target === 'boss' ? 'dmg-to-boss' : 'dmg-to-player'}`;
  el.textContent = amountText;
  el.style.left = target === 'boss' ? '83%' : '17%';
  el.style.top = '44%';
  layer.appendChild(el);
  setTimeout(() => el.remove(), 980);
}

function triggerArenaImpact(flashHit = false) {
  const arena = document.getElementById('battle-arena');
  if (!arena) return;
  arena.classList.remove('shake', 'flash-hit');
  void arena.offsetWidth;
  arena.classList.add('shake');
  if (flashHit) arena.classList.add('flash-hit');
  setTimeout(() => {
    arena.classList.remove('shake', 'flash-hit');
  }, 360);
}

function getComboDamageMultiplier(streak = combo) {
  const tier = Math.floor(Math.max(0, streak) / 5);
  return 1 + tier * 0.5;
}

function playerAttack(elapsedSec) {
  const diffMult = selectedDifficulty === 'easy' ? 1.25 : selectedDifficulty === 'hard' ? 0.85 : 1.0;
  const baseStrike = maxBossHP / 7.2; // Balanced so ~6-8 hits defeat Boss in 10 questions
  const comboMult = getComboDamageMultiplier(combo);
  const speedFactor = elapsedSec <= 6 ? 1.12 : 1.0;
  const dmg = Math.max(18, Math.round(baseStrike * diffMult * comboMult * speedFactor));

  spriteAnim.battlePlayer = { state: 'attack', until: performance.now() + 380 };
  const activeHero = getHeroObj(activeHeroIndex);
  const isComboBoost = comboMult > 1;
  const heroColor = isComboBoost ? '#facc15' : activeHero.projColor || '#60a5fa';
  const secondaryTrailColor = activeHero.auraColor || '#38bdf8';

  triggerCombatLunge(true, isComboBoost ? 72 : 56, 360);
  SoundFX.dash();
  SoundFX.playerAttack();

  const pAnchorStart = BattleFX.getAnchor(false);
  BattleFX.spawnDashFX(true, heroColor, isComboBoost ? 1.4 : 1.05);
  BattleFX.spawnWeaponTrail(pAnchorStart.x + 22, pAnchorStart.y, heroColor, {
    rx: 72,
    ry: 52,
    tilt: -0.45,
    width: isComboBoost ? 16 : 12
  });

  const sessionId = battleSessionId;
  BattleFX.spawnProjectile(true, heroColor, () => {
    if (!battleActive || sessionId !== battleSessionId) return;
    SoundFX.hit();
    SoundFX.slash();
    spriteAnim.battleBoss = { state: 'hit', until: performance.now() + 360 };
    const bAnchor = BattleFX.getAnchor(true);

    // Sweeping weapon slash trails across the boss on impact
    BattleFX.spawnWeaponTrail(bAnchor.x - 8, bAnchor.y, heroColor, {
      rx: 84,
      ry: 58,
      tilt: -0.58,
      width: isComboBoost ? 17 : 13
    });
    if (isComboBoost || activeHeroIndex === 1) {
      BattleFX.spawnWeaponTrail(bAnchor.x + 6, bAnchor.y + 4, secondaryTrailColor, {
        rx: 76,
        ry: 52,
        tilt: 0.52,
        startAngle: Math.PI * 0.52,
        sweep: -Math.PI * 0.96,
        width: 13
      });
    }

    // Impact flash + sparks + shockwave burst
    const isFinisher = bossHP - dmg <= 0;
    BattleFX.spawnImpactFlash(true, isComboBoost ? '#fb7185' : '#facc15', {
      radius: isFinisher ? 132 : isComboBoost ? 114 : 92,
      rays: isFinisher || isComboBoost ? 10 : 8,
      screenAlpha: isFinisher ? 0.24 : isComboBoost ? 0.16 : 0.1,
      sparkCount: isComboBoost ? 24 : 18
    });
    BattleFX.spawnBurst(true, isComboBoost ? '#fb7185' : '#facc15', bAnchor.x, bAnchor.y, isComboBoost ? 26 : 18);
    if (isComboBoost || isFinisher) {
      BattleFX.spawnShockwave(bAnchor.x, bAnchor.y, '#facc15', isFinisher ? 165 : 140);
    }
    triggerArenaImpact(false);

    bossHP = Math.max(0, bossHP - dmg);
    damageDealt += dmg;
    const dmgTag = comboMult > 1 ? `-${dmg} (${comboMult.toFixed(1)}x!)` : `-${dmg}`;
    spawnFloatingDamage('boss', dmgTag);
    updateHP();

    if (bossHP <= 0) {
      spriteAnim.battleBoss = { state: 'defeat', until: performance.now() + 4000 };
      spriteAnim.battlePlayer = { state: 'victory', until: performance.now() + 4000 };
      SoundFX.bossDefeat();
      scheduleBattleTimeout(() => endBattle(), 900, sessionId);
    } else {
      scheduleBattleTimeout(() => advanceQuestionOrEnd(), 1050, sessionId);
    }
  }, { speed: isComboBoost ? 0.11 : 0.095, size: isComboBoost ? 26 : 22 });
}

function activateSecondHero() {
  if (!battleActive || secondChanceUsed) return;
  const sessionId = battleSessionId;
  secondChanceUsed = true;
  activeHeroIndex = 1;
  playerHP = maxPlayerHP;
  heroHPs[1] = maxPlayerHP;

  SoundFX.secondChance();
  spriteAnim.battlePlayer = { state: 'victory', until: performance.now() + 750 };
  const pAnchor = BattleFX.getAnchor(false);
  BattleFX.spawnShockwave(pAnchor.x, pAnchor.y, '#fb7185', 145);
  BattleFX.spawnBurst(false, '#facc15', pAnchor.x, pAnchor.y, 24);
  spawnFloatingDamage('player', `+${maxPlayerHP} HP`);

  const feedback = document.getElementById('battle-feedback');
  const statusEl = document.getElementById('feedback-status');
  const actionEl = document.getElementById('feedback-action');
  const expEl = document.getElementById('feedback-explanation');
  if (feedback && statusEl && actionEl && expEl) {
    feedback.classList.remove('hidden', 'is-wrong');
    feedback.classList.add('is-correct');
    statusEl.textContent = t('fb_second_chance_status');
    actionEl.textContent = t('fb_second_chance_action');
    expEl.textContent = t('fb_second_chance_exp', { hero2: getHeroName(1) });
  }

  updateHP();
  updatePartyHUD();
  renderTimerUI();

  scheduleBattleTimeout(() => advanceQuestionOrEnd(), 1450, sessionId);
}

function bossAttack() {
  const diffMult = selectedDifficulty === 'easy' ? 0.72 : selectedDifficulty === 'hard' ? 1.3 : 1.0;
  const dmg = Math.max(10, Math.round(selectedBoss.atk * diffMult));

  spriteAnim.battleBoss = { state: 'attack', until: performance.now() + 380 };
  triggerCombatLunge(false, -58, 360);
  SoundFX.bossAttack();

  const bossColor = selectedBoss.aura || '#ef4444';
  const bAnchorStart = BattleFX.getAnchor(true);
  BattleFX.spawnDashFX(false, bossColor, 1.15);
  BattleFX.spawnWeaponTrail(bAnchorStart.x - 18, bAnchorStart.y, bossColor, {
    rx: 74,
    ry: 54,
    tilt: 0.42,
    flip: true,
    width: 13
  });

  const sessionId = battleSessionId;
  BattleFX.spawnProjectile(false, bossColor, () => {
    if (!battleActive || sessionId !== battleSessionId) return;
    SoundFX.hit();
    spriteAnim.battlePlayer = { state: 'hit', until: performance.now() + 360 };
    const pAnchorHit = BattleFX.getAnchor(false);
    BattleFX.spawnWeaponTrail(pAnchorHit.x + 8, pAnchorHit.y, bossColor, {
      rx: 78,
      ry: 52,
      tilt: 0.55,
      flip: true,
      width: 14
    });
    BattleFX.spawnImpactFlash(false, '#ef4444', {
      radius: 102,
      rays: 8,
      screenAlpha: 0.16,
      sparkCount: 20
    });
    BattleFX.spawnShockwave(pAnchorHit.x, pAnchorHit.y, bossColor, 120);
    BattleFX.spawnBurst(false, '#ef4444', pAnchorHit.x, pAnchorHit.y, 22);
    triggerArenaImpact(true);

    playerHP = Math.max(0, playerHP - dmg);
    heroHPs[activeHeroIndex] = playerHP;
    damageReceived += dmg;
    spawnFloatingDamage('player', `-${dmg}`);
    updateHP();

    if (playerHP <= 0) {
      spriteAnim.battlePlayer = { state: 'defeat', until: performance.now() + 700 };
      if (activeHeroIndex === 0 && !secondChanceUsed) {
        updatePartyHUD();
        scheduleBattleTimeout(() => activateSecondHero(), 700, sessionId);
      } else {
        defeatReason = 'both_defeated';
        updatePartyHUD();
        spriteAnim.battlePlayer = { state: 'defeat', until: performance.now() + 4000 };
        scheduleBattleTimeout(() => endBattle(), 900, sessionId);
      }
    } else {
      scheduleBattleTimeout(() => advanceQuestionOrEnd(), 1050, sessionId);
    }
  });
}

function advanceQuestionOrEnd() {
  if (!battleActive) return;
  currentQuestion += 1;
  if (currentQuestion >= questions.length || playerHP <= 0 || bossHP <= 0) {
    endBattle();
  } else {
    loadQuestion();
  }
}

function updateHP() {
  const pPct = Math.max(0, Math.min(100, (playerHP / maxPlayerHP) * 100));
  const bPct = Math.max(0, Math.min(100, (bossHP / maxBossHP) * 100));

  document.getElementById('player-hp-fill').style.width = `${pPct}%`;
  const pTrail = document.getElementById('player-hp-trail');
  if (pTrail) pTrail.style.width = `${pPct}%`;

  document.getElementById('player-hp-text').textContent = `${playerHP} / ${maxPlayerHP} HP`;
  document.getElementById('player-hp-state').textContent =
    playerHP <= 0 ? t('hp_fallen') : playerHP <= 25 ? t('hp_critical') : playerHP <= 55 ? t('hp_wounded') : t('hp_ready');

  document.getElementById('boss-hp-fill').style.width = `${bPct}%`;
  const bTrail = document.getElementById('boss-hp-trail');
  if (bTrail) bTrail.style.width = `${bPct}%`;

  document.getElementById('boss-hp-text').textContent = `${bossHP} / ${maxBossHP} HP`;
}

function updateScore() {
  document.getElementById('battle-score').textContent = score.toLocaleString();
  document.getElementById('battle-combo').textContent = `x${combo}`;

  const tier = Math.floor(Math.max(0, combo) / 5);
  const mult = getComboDamageMultiplier(combo);
  const nextMult = 1 + (tier + 1) * 0.5;
  const remainder = 5 - (combo % 5);
  const filledPips = combo > 0 && combo % 5 === 0 ? 5 : combo % 5;

  const meter = document.getElementById('combo-multiplier-meter');
  const badge = document.getElementById('battle-dmg-mult');
  const hint = document.getElementById('combo-mult-hint');
  const pips = document.querySelectorAll('#combo-streak-pips .streak-pip');

  if (badge) badge.textContent = `x${mult.toFixed(1)}`;
  if (meter) {
    meter.classList.remove('tier-1', 'tier-2', 'is-milestone');
    if (tier >= 2) meter.classList.add('tier-2');
    else if (tier === 1) meter.classList.add('tier-1');
    if (combo > 0 && combo % 5 === 0) {
      void meter.offsetWidth;
      meter.classList.add('is-milestone');
    }
  }
  pips.forEach((pip, idx) => {
    pip.classList.toggle('filled', idx < filledPips);
  });
  if (hint) {
    hint.textContent =
      tier >= 1
        ? t('mult_active_hint', { curr: mult.toFixed(1), rem: remainder, next: nextMult.toFixed(1) })
        : t('mult_next_hint', { rem: remainder, next: nextMult.toFixed(1) });
  }
}

/* ----------------------------------------------------------------------------
   13. BATTLE END & RESULT SCREEN
   ---------------------------------------------------------------------------- */
function endBattle() {
  if (!battleActive) return;
  battleActive = false;
  battleSessionId += 1;
  clearBattleTimeouts();
  BattleFX.clearAll();
  resetCombatLunges();
  stopTimer();
  updatePartyHUD();

  const totalTimeSec = Math.max(1, Math.round((Date.now() - battleStartTime) / 1000));
  const isVictory = bossHP <= 0 && playerHP > 0;
  const totalAnswered = correctAnswers + wrongAnswers;
  const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;

  let victoryReward = 0;
  let newlyUnlockedBoss = null;
  const prevLevel = player.level;
  const prevAchievements = getAchievements().filter((a) => a.earned).map((a) => a.id);

  if (isVictory) {
    victoryReward = selectedBoss.level * 150 + playerHP * 4;
    score += victoryReward;
    player.totalWins += 1;
    player.xp += 50 + selectedBoss.level * 15;
    player.level = Math.max(1, 1 + Math.floor(player.xp / 180));

    if (!player.defeatedBosses.includes(selectedBoss.id)) {
      player.defeatedBosses.push(selectedBoss.id);
    }

    const nextId = selectedBoss.id + 1;
    if (nextId <= BOSSES.length && !player.unlockedBosses.includes(nextId)) {
      player.unlockedBosses.push(nextId);
      newlyUnlockedBoss = BOSSES.find((b) => b.id === nextId);
      if (nextId > player.highestBossLevel) {
        player.highestBossLevel = nextId;
      }
    }
    SoundFX.victory();
  } else {
    player.totalLosses += 1;
    SoundFX.defeat();
  }

  player.score = score;
  player.totalScore += score;
  if (score > player.highScore) {
    player.highScore = score;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  player.battleHistory.unshift({
    bossName: selectedBoss.name,
    level: selectedBoss.level,
    score,
    result: isVictory ? 'VICTORY' : 'DEFEAT',
    correctAnswers,
    difficulty: selectedDifficulty,
    date: dateStr
  });
  if (player.battleHistory.length > 50) {
    player.battleHistory.length = 50;
  }

  saveGame();

  // Populate Result Screen
  switchScreen('result', 'play');

  const titleEl = document.getElementById('result-banner-title');
  titleEl.textContent = isVictory ? t('res_victory') : t('res_defeat');
  titleEl.className = `result-title ${isVictory ? 'victory' : 'defeat'}`;

  let subtitleText = '';
  if (isVictory) {
    subtitleText =
      activeHeroIndex === 1
        ? t('res_sub_victory_second', { hero2: getHeroName(1), boss: selectedBoss.name, level: selectedBoss.level })
        : t('res_sub_victory', { boss: selectedBoss.name, level: selectedBoss.level });
  } else if (defeatReason === 'hero2_timeout') {
    subtitleText = t('res_sub_hero2_timeout', { hero2: getHeroName(1) });
  } else if (playerHP <= 0) {
    subtitleText = t('res_sub_defeat_hp', { boss: selectedBoss.name });
  } else {
    subtitleText = t('res_sub_defeat_q', { boss: selectedBoss.name, hp: bossHP });
  }
  document.getElementById('result-subtitle').textContent = subtitleText;

  document.getElementById('res-outcome').textContent = isVictory ? t('res_outcome_victory') : t('res_outcome_defeat');
  document.getElementById('res-outcome').className = `res-v ${isVictory ? 'text-green' : 'text-red'}`;
  document.getElementById('res-boss').textContent = `${selectedBoss.name} (Lv.${selectedBoss.level})`;
  document.getElementById('res-boss-defeated').textContent = isVictory ? t('res_yes_defeated') : t('res_no');
  document.getElementById('res-difficulty').textContent = getDiffLabel(selectedDifficulty);
  document.getElementById('res-correct').textContent = `${correctAnswers} / 10`;
  document.getElementById('res-wrong').textContent = String(wrongAnswers);
  document.getElementById('res-accuracy').textContent = `${accuracy}%`;
  document.getElementById('res-combo').textContent = `x${maxCombo}`;
  document.getElementById('res-dmg-dealt').textContent = String(damageDealt);
  document.getElementById('res-dmg-taken').textContent = String(damageReceived);
  document.getElementById('res-time').textContent = `${totalTimeSec}s`;
  document.getElementById('res-material').textContent = getMaterialLabel(selectedMaterial);

  const unlockBanner = document.getElementById('res-unlock-banner');
  if (newlyUnlockedBoss) {
    document.getElementById('res-unlock-name').textContent = `Lv.${newlyUnlockedBoss.level} ${newlyUnlockedBoss.name}`;
    unlockBanner.classList.remove('hidden');
  } else {
    unlockBanner.classList.add('hidden');
  }

  // Animated score counter
  const scoreEl = document.getElementById('res-score');
  let displayed = 0;
  const stepAmt = Math.max(1, Math.ceil(score / 28));
  const countTimer = setInterval(() => {
    displayed = Math.min(score, displayed + stepAmt);
    scoreEl.textContent = displayed.toLocaleString();
    if (displayed >= score) clearInterval(countTimer);
  }, 22);

  // Render result sprite
  const resCanvas = document.getElementById('result-sprite-canvas');
  if (isVictory) {
    renderPlayerSprite(resCanvas, 0.5, 'victory', 0, getSlotHeroId(activeHeroIndex));
  } else {
    renderBossSprite(resCanvas, selectedBoss, 0.5, 'idle', false);
  }

  ResultFX.launch(isVictory);

  // Achievement / Level Up / Boss Unlock notifications
  if (newlyUnlockedBoss) {
    showAchievementToast(t('toast_boss_unlock'), `Lv.${newlyUnlockedBoss.level} ${newlyUnlockedBoss.name}`);
  }
  if (player.level > prevLevel) {
    showAchievementToast(t('toast_level_up'), t('toast_level_up_msg', { level: player.level }));
  }
  const newAchievements = getAchievements().filter((a) => a.earned && !prevAchievements.includes(a.id));
  newAchievements.forEach((ach, idx) => {
    setTimeout(() => {
      showAchievementToast(t('toast_ach'), ach.title);
    }, (idx + 1) * 450);
  });
}

/* ----------------------------------------------------------------------------
   14. MOBILE DRAWER & EVENT WIRING
   ---------------------------------------------------------------------------- */
function openMobileSidebar() {
  document.getElementById('sidebar')?.classList.add('open');
  document.getElementById('sidebar-backdrop')?.classList.add('open');
  document.getElementById('mobile-menu-toggle')?.setAttribute('aria-expanded', 'true');
}

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-backdrop')?.classList.remove('open');
  document.getElementById('mobile-menu-toggle')?.setAttribute('aria-expanded', 'false');
}

function toggleSound() {
  player.soundEnabled = !player.soundEnabled;
  saveGame();
  updateSoundIcons();
  if (player.soundEnabled) SoundFX.click();
}

function updatePlayerName(newName) {
  const trimmed = newName.trim().slice(0, 18);
  if (!trimmed) return;
  player.playerName = trimmed;
  saveGame();
  renderLobby();
  renderSettings();
}

function bindEvents() {
  // Sidebar navigation
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      const target = btn.dataset.nav;
      if (target === 'lobby') showLobby();
      else if (target === 'play') startGame();
      else if (target === 'bosses') showBossSelect();
      else if (target === 'heroes') showHeroSelect();
      else if (target === 'materials') showMaterialSelect();
      else if (target === 'difficulty') showDifficultySelect();
      else if (target === 'scoreboard') showScoreboard();
      else if (target === 'history') showHistory();
      else if (target === 'settings') showSettings();
    });
  });

  // Mobile menu
  document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
    const isOpen = document.getElementById('sidebar')?.classList.contains('open');
    if (isOpen) closeMobileSidebar();
    else openMobileSidebar();
  });
  document.getElementById('sidebar-backdrop')?.addEventListener('click', closeMobileSidebar);

  // Sound toggles
  document.getElementById('sidebar-sound-btn')?.addEventListener('click', toggleSound);
  document.getElementById('mobile-sound-toggle')?.addEventListener('click', toggleSound);
  document.getElementById('battle-sound-btn')?.addEventListener('click', toggleSound);
  document.getElementById('settings-sound-toggle')?.addEventListener('click', toggleSound);

  // Lobby CTA buttons
  document.getElementById('btn-start-battle')?.addEventListener('click', startGame);
  document.getElementById('btn-continue-game')?.addEventListener('click', () => {
    SoundFX.click();
    const frontierId = Math.max(...player.unlockedBosses);
    selectedBoss = BOSSES.find((b) => b.id === frontierId) || BOSSES[0];
    saveGame();
    startBattle();
  });

  // Lobby quick links
  document.getElementById('lobby-pedestal-heroes-btn')?.addEventListener('click', () => {
    SoundFX.click();
    showHeroSelect();
  });
  document.getElementById('lobby-quick-heroes')?.addEventListener('click', () => {
    SoundFX.click();
    showHeroSelect();
  });
  document.getElementById('lobby-quick-boss')?.addEventListener('click', () => {
    SoundFX.click();
    showBossSelect();
  });
  document.getElementById('lobby-quick-material')?.addEventListener('click', () => {
    SoundFX.click();
    showMaterialSelect();
  });
  document.getElementById('lobby-quick-difficulty')?.addEventListener('click', () => {
    SoundFX.click();
    showDifficultySelect();
  });

  // Character selection controls
  document.getElementById('btn-swap-squad')?.addEventListener('click', () => {
    SoundFX.click();
    swapSquadOrder();
  });
  document.getElementById('btn-heroes-next')?.addEventListener('click', () => {
    SoundFX.click();
    showBossSelect();
  });
  document.getElementById('btn-prep-heroes')?.addEventListener('click', () => {
    SoundFX.click();
    showHeroSelect();
  });

  // Lobby inline player name edit
  const nameForm = document.getElementById('lobby-name-form');
  const nameInput = document.getElementById('lobby-name-input');
  document.getElementById('btn-edit-name-lobby')?.addEventListener('click', () => {
    SoundFX.click();
    nameInput.value = player.playerName;
    nameForm.classList.remove('hidden');
    nameInput.focus();
  });
  document.getElementById('lobby-name-cancel')?.addEventListener('click', () => {
    nameForm.classList.add('hidden');
  });
  nameForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    SoundFX.click();
    updatePlayerName(nameInput.value);
    nameForm.classList.add('hidden');
  });

  // Settings player name form & language toggle
  document.getElementById('settings-name-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    SoundFX.click();
    const val = document.getElementById('settings-name-input').value;
    updatePlayerName(val);
  });

  document.querySelectorAll('#settings-lang-toggle [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      setLanguage(btn.dataset.lang);
    });
  });

  // Boss collection filters
  document.querySelectorAll('[data-boss-filter]').forEach((tab) => {
    tab.addEventListener('click', () => {
      SoundFX.click();
      bossFilter = tab.dataset.bossFilter;
      document.querySelectorAll('[data-boss-filter]').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderBossGrid();
    });
  });

  // History filters
  document.querySelectorAll('[data-history-filter]').forEach((tab) => {
    tab.addEventListener('click', () => {
      SoundFX.click();
      historyFilter = tab.dataset.historyFilter;
      document.querySelectorAll('[data-history-filter]').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderBattleHistory();
    });
  });

  // Setup flow Next / Launch buttons
  document.getElementById('btn-material-next')?.addEventListener('click', () => {
    SoundFX.click();
    showDifficultySelect();
  });
  document.getElementById('btn-launch-battle')?.addEventListener('click', startBattle);

  // Skip boss intro button
  document.getElementById('btn-skip-intro')?.addEventListener('click', () => {
    SoundFX.click();
    finishBossIntro();
  });

  // Battle retreat
  document.getElementById('btn-retreat-battle')?.addEventListener('click', () => {
    SoundFX.click();
    showLobby();
  });

  // Result screen buttons
  document.getElementById('btn-play-again')?.addEventListener('click', startBattle);
  document.getElementById('btn-result-bosses')?.addEventListener('click', () => {
    SoundFX.click();
    showBossSelect();
  });
  document.getElementById('btn-result-menu')?.addEventListener('click', () => {
    SoundFX.click();
    showLobby();
  });

  // Reset Data Modal
  const modal = document.getElementById('reset-modal');
  document.getElementById('btn-open-reset-modal')?.addEventListener('click', () => {
    SoundFX.click();
    modal.classList.remove('hidden');
  });
  document.getElementById('btn-cancel-reset')?.addEventListener('click', () => {
    SoundFX.click();
    modal.classList.add('hidden');
  });
  document.getElementById('btn-confirm-reset')?.addEventListener('click', () => {
    SoundFX.click();
    const keepLang = getLang();
    localStorage.removeItem(STORAGE_KEY);
    player = { ...DEFAULT_SAVE, language: keepLang, unlockedBosses: [1], defeatedBosses: [], battleHistory: [] };
    selectedBoss = BOSSES[0];
    selectedHeroId = 0;
    partnerHeroId = 1;
    selectedMaterial = 'ALL MATERIAL';
    selectedDifficulty = 'medium';
    saveGame();
    modal.classList.add('hidden');
    applyStaticTranslations();
    updateSoundIcons();
    renderSettings();
    showLobby();
  });

  // Keyboard shortcuts 1-4 during active battle (after intro finishes)
  document.addEventListener('keydown', (e) => {
    if (currentScreen !== 'battle' || !battleActive || battleLocked) return;
    if (IntroCutscene.isActive() || !timerInterval) return;
    const idx = ['1', '2', '3', '4'].indexOf(e.key);
    if (idx !== -1) {
      selectAnswer(idx);
    }
  });
}

/* ----------------------------------------------------------------------------
   15. MAIN ANIMATION LOOP (60FPS LIGHTWEIGHT SPRITES + PARTICLES)
   ---------------------------------------------------------------------------- */
function animationLoop(nowMs) {
  const timeSec = nowMs / 1000;

  Starfield.draw();

  if (currentScreen === 'lobby') {
    const lobbyPlayerCanvas = document.getElementById('lobby-player-canvas');
    const lobbyPartnerCanvas = document.getElementById('lobby-partner-canvas');
    const lobbyBossCanvas = document.getElementById('lobby-boss-canvas');
    renderPlayerSprite(lobbyPartnerCanvas, timeSec, 'idle', 1.2, partnerHeroId);
    renderPlayerSprite(lobbyPlayerCanvas, timeSec, 'idle', 0, selectedHeroId);
    renderBossSprite(lobbyBossCanvas, selectedBoss, timeSec, 'idle', false);
  } else if (currentScreen === 'heroes') {
    renderPlayerSprite(document.getElementById('squad-preview-0'), timeSec, 'stance', 0, selectedHeroId);
    renderPlayerSprite(document.getElementById('squad-preview-1'), timeSec, 'idle', 1.2, partnerHeroId);
    document.querySelectorAll('#hero-grid .hero-preview-canvas').forEach((canvas) => {
      const hId = Number(canvas.dataset.heroId || 0);
      renderPlayerSprite(canvas, timeSec, hId === selectedHeroId ? 'stance' : 'idle', hId * 0.8, hId);
    });
  } else if (currentScreen === 'battle') {
    const pState = nowMs < spriteAnim.battlePlayer.until ? spriteAnim.battlePlayer.state : 'idle';
    const bState = nowMs < spriteAnim.battleBoss.until ? spriteAnim.battleBoss.state : 'idle';

    if (!IntroCutscene.isActive()) {
      const pWrap = document.getElementById('battle-player-wrap');
      if (pWrap) {
        if (spriteAnim.playerLunge.active) {
          const t = (nowMs - spriteAnim.playerLunge.start) / spriteAnim.playerLunge.duration;
          if (t >= 1) {
            spriteAnim.playerLunge.active = false;
            pWrap.style.transform = '';
          } else {
            const curve = Math.sin(Math.pow(t, 0.72) * Math.PI);
            const dx = spriteAnim.playerLunge.distX * curve;
            const dy = -spriteAnim.playerLunge.liftY * curve;
            const tilt = 6.5 * curve;
            pWrap.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) rotate(${tilt.toFixed(1)}deg)`;
          }
        }
      }
      const bWrap = document.getElementById('battle-boss-wrap');
      if (bWrap) {
        if (spriteAnim.bossLunge.active) {
          const t = (nowMs - spriteAnim.bossLunge.start) / spriteAnim.bossLunge.duration;
          if (t >= 1) {
            spriteAnim.bossLunge.active = false;
            bWrap.style.transform = '';
          } else {
            const curve = Math.sin(Math.pow(t, 0.72) * Math.PI);
            const dx = spriteAnim.bossLunge.distX * curve;
            const dy = -spriteAnim.bossLunge.liftY * curve;
            const tilt = -6.5 * curve;
            bWrap.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) rotate(${tilt.toFixed(1)}deg)`;
          }
        }
      }
    }

    renderPlayerSprite(document.getElementById('battle-player-canvas'), timeSec, pState, 0, getSlotHeroId(activeHeroIndex));
    renderBossSprite(document.getElementById('battle-boss-canvas'), selectedBoss, timeSec, bState, false);
    BattleFX.step();
  } else if (currentScreen === 'result') {
    ResultFX.step();
  }

  requestAnimationFrame(animationLoop);
}

function runOpeningSequence() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;

  if (prefersReduced) {
    body.classList.remove('opening-active');
    return;
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      body.classList.remove('opening-active');
      body.classList.add('opening-phase-1');
    }, 120);
    setTimeout(() => body.classList.add('opening-phase-2'), 320);
    setTimeout(() => body.classList.add('opening-phase-3'), 540);
    setTimeout(() => body.classList.add('opening-phase-4'), 740);
    setTimeout(() => {
      body.classList.remove('opening-phase-1', 'opening-phase-2', 'opening-phase-3', 'opening-phase-4');
    }, 1650);
  });
}

function initLobbyParallax() {
  const stage = document.getElementById('lobby-stage');
  if (!stage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let rafPending = false;
  let targetX = 0;
  let targetY = 0;

  stage.addEventListener('pointermove', (e) => {
    if (window.innerWidth < 1024 || currentScreen !== 'lobby') return;
    const rect = stage.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        stage.querySelectorAll('[data-parallax]').forEach((el) => {
          const depth = Number(el.dataset.parallax || 0);
          el.style.transform = `translate3d(${(targetX * depth).toFixed(1)}px, ${(targetY * depth * 0.6).toFixed(1)}px, 0)`;
        });
      });
    }
  });

  stage.addEventListener('pointerleave', () => {
    stage.querySelectorAll('[data-parallax]').forEach((el) => {
      el.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

/* ----------------------------------------------------------------------------
   16. BOOTSTRAP
   ---------------------------------------------------------------------------- */
function init() {
  loadGame();
  applyStaticTranslations();
  Starfield.init();
  bindEvents();
  updateSoundIcons();
  renderSettings();
  showLobby();
  initLobbyParallax();
  runOpeningSequence();
  requestAnimationFrame(animationLoop);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
