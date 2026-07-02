// ============================================
// COMPLETE SYLLABUS DATA
// Grammar Galaxy - Powered by Shree Parth Academy
// ============================================

const SYLLABUS = {
    8: {
        name: '8th Grade',
        menuItems: [
            { id: '8-grammar', icon: '📝', name: 'Grammar', count: '50+ Qs', page: 'cheat-sheet' },
            { id: '8-writing', icon: '✍️', name: 'Writing Skills', count: 'Formats', page: 'cheat-sheet' },
            { id: '8-reading', icon: '📖', name: 'Reading Passages', count: '5 Passages', page: 'cheat-sheet' },
            { id: '8-mixed', icon: '🎯', name: 'Mixed Test', count: 'All Topics', page: 'cheat-sheet' }
        ],
        topics: {
            '8-grammar': {
                title: 'Grammar - 8th Grade',
                description: 'Complete grammar guide with examples',
                cheatSheet: {
                    sections: [{
                        title: '📝 Parts of Speech',
                        rules: [
                            { title: 'Noun', desc: 'A person, place, thing, or idea. e.g., Ram, Mumbai, book, happiness' },
                            { title: 'Pronoun', desc: 'Replaces a noun. e.g., he, she, it, they, we' },
                            { title: 'Verb', desc: 'Action or state word. e.g., run, eat, is, are, was' },
                            { title: 'Adjective', desc: 'Describes a noun. e.g., beautiful, tall, red, happy' },
                            { title: 'Adverb', desc: 'Describes a verb, adjective, or adverb. e.g., quickly, very, well' },
                            { title: 'Preposition', desc: 'Shows relationship. e.g., in, on, at, by, with' },
                            { title: 'Conjunction', desc: 'Connects words or clauses. e.g., and, but, or, so' },
                            { title: 'Interjection', desc: 'Expresses emotion. e.g., Wow!, Oh!, Alas!' }
                        ],
                        examples: [
                            { label: '✨ Example Sentence', text: '"The beautiful cat quickly ran across the road."\n• beautiful = Adjective\n• cat = Noun\n• quickly = Adverb\n• ran = Verb\n• across = Preposition' }
                        ]
                    }, {
                        title: '⏰ Tenses',
                        rules: [
                            { title: 'Present Simple', desc: 'Habitual actions. e.g., She goes to school daily.' },
                            { title: 'Present Continuous', desc: 'Ongoing actions. e.g., She is studying now.' },
                            { title: 'Present Perfect', desc: 'Past actions with present relevance. e.g., She has finished.' },
                            { title: 'Past Simple', desc: 'Completed past actions. e.g., She went to school yesterday.' },
                            { title: 'Past Continuous', desc: 'Ongoing past actions. e.g., She was studying.' },
                            { title: 'Past Perfect', desc: 'Past before another past. e.g., She had left before I arrived.' },
                            { title: 'Future Simple', desc: 'Future actions. e.g., She will go tomorrow.' },
                            { title: 'Future Continuous', desc: 'Ongoing future. e.g., She will be studying.' }
                        ],
                        examples: [
                            { label: '✨ Tense Table', text: 'Simple: I play, I played, I will play\nContinuous: I am playing, I was playing, I will be playing\nPerfect: I have played, I had played, I will have played' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'She _____ to school every day.', options: ['go', 'goes', 'going', 'went'], correct: 1, explanation: 'Third person singular needs -s.' },
                        { q: 'They _____ football yesterday.', options: ['play', 'played', 'playing', 'plays'], correct: 1, explanation: 'Past tense adds -ed.' },
                        { q: 'Identify the noun: "The cat sat on the mat."', options: ['cat', 'sat', 'on', 'the'], correct: 0, explanation: 'Cat is a thing.' },
                        { q: 'Which word is an adverb? "He spoke softly."', options: ['He', 'spoke', 'softly', 'None'], correct: 2, explanation: 'Softly modifies the verb.' },
                        { q: 'I _____ the book by next week.', options: ['finish', 'finished', 'will finish', 'have finished'], correct: 2, explanation: 'Future tense with will.' },
                        { q: 'Identify the pronoun: "They went to the park."', options: ['They', 'went', 'park', 'to'], correct: 0, explanation: 'They replaces a noun.' },
                        { q: 'The _____ flower bloomed.', options: ['beautiful', 'flower', 'bloomed', 'the'], correct: 0, explanation: 'Beautiful describes the flower.' },
                        { q: 'He _____ since morning.', options: ['studies', 'studied', 'has been studying', 'will study'], correct: 2, explanation: 'Present Perfect Continuous.' }
                    ]
                }
            },
            '8-writing': {
                title: 'Writing Skills - 8th Grade',
                description: 'Complete writing formats with examples',
                cheatSheet: {
                    sections: [{
                        title: '✍️ Letter Writing - Formal',
                        rules: [
                            { title: 'Format', desc: '1. Sender\'s Address\n2. Date\n3. Receiver\'s Address\n4. Subject\n5. Salutation\n6. Body\n7. Closing\n8. Signature' },
                            { title: 'Tips', desc: '• Be polite and formal\n• Use clear subject line\n• Keep paragraphs short\n• Use proper closing' }
                        ],
                        examples: [
                            { label: '📝 Sample Formal Letter', text: 'Sender\'s Address:\n123, Main Street\nMumbai - 400001\n\nDate: 1st January 2024\n\nReceiver\'s Address:\nThe Principal\nSt. Mary\'s School\nMumbai - 400001\n\nSubject: Request for Leave\n\nDear Sir/Madam,\n\nI am writing to request leave for 2 days from 2nd to 3rd January due to a family function. I will complete all pending work upon my return.\n\nThank you for your consideration.\n\nYours sincerely,\nRahul Sharma\nClass 8-A' }
                        ]
                    }, {
                        title: '✍️ Letter Writing - Informal',
                        rules: [
                            { title: 'Format', desc: '1. Sender\'s Address\n2. Date\n3. Salutation\n4. Body\n5. Closing\n6. Name' },
                            { title: 'Tips', desc: '• Use friendly tone\n• Personal touch\n• Share updates\n• Ask questions' }
                        ],
                        examples: [
                            { label: '📝 Sample Informal Letter', text: '123, Main Street\nMumbai - 400001\n\nDate: 1st January 2024\n\nDear Rohit,\n\nHow have you been? I hope you\'re doing well. I wanted to share some exciting news - I topped the class in the recent exams!\n\nWe also went on a family trip to Lonavala last weekend. It was beautiful there!\n\nLet me know how your studies are going. Looking forward to hearing from you.\n\nYour friend,\nRahul' }
                        ]
                    }, {
                        title: '📝 Essay Writing',
                        rules: [
                            { title: 'Structure', desc: '1. Introduction (Hook + Thesis)\n2. Body Paragraphs (3-5)\n3. Conclusion (Summary + Final thought)' },
                            { title: 'Tips', desc: '• Start with an interesting hook\n• Use topic sentences\n• Provide examples\n• Conclude strongly' }
                        ],
                        examples: [
                            { label: '📝 Sample Essay - Independence Day', text: 'Introduction:\nIndependence Day is celebrated on 15th August every year. It marks the day when India gained freedom from British rule in 1947. This day is important for every Indian.\n\nBody:\nThe day is celebrated with flag hoisting ceremonies, cultural programs, and patriotic songs. Schools and colleges organize special events. People remember the sacrifices of freedom fighters like Mahatma Gandhi, Bhagat Singh, and Subhash Chandra Bose.\n\nConclusion:\nIndependence Day reminds us of our duty towards the nation. We must work together to build a stronger and better India.' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'What is the correct format for a formal letter?', options: ['Sender\'s address, Date, Receiver\'s address, Subject, Body', 'Date, Sender\'s address, Subject, Body', 'Receiver\'s address, Subject, Date, Body', 'Body, Sender\'s address, Receiver\'s address'], correct: 0, explanation: 'Formal letters follow a specific order.' },
                        { q: 'What is an appropriate salutation for a formal letter?', options: ['Hi', 'Hello', 'Dear Sir/Madam', 'Hey'], correct: 2, explanation: 'Formal letters use "Dear" with title.' },
                        { q: 'What should the introduction of an essay contain?', options: ['Thesis statement', 'Conclusion', 'Examples', 'References'], correct: 0, explanation: 'Thesis is the main argument.' },
                        { q: 'What is the structure of an essay?', options: ['Introduction, Body, Conclusion', 'Body, Introduction, Conclusion', 'Conclusion, Introduction, Body', 'Introduction, Conclusion, Body'], correct: 0, explanation: 'Standard essay has three parts.' },
                        { q: 'Which is the correct way to write dialogue?', options: ['Rahul: Hello!', 'Rahul said hello', 'Rahul says hello', 'Rahul - Hello!'], correct: 0, explanation: 'Use colon after speaker name.' }
                    ]
                }
            },
            '8-reading': {
                title: 'Reading Passages - 8th Grade',
                description: 'Comprehension passages with questions',
                cheatSheet: {
                    sections: [{
                        title: '📖 Reading Comprehension',
                        rules: [
                            { title: 'How to Approach', desc: '1. Read the passage carefully\n2. Understand the main idea\n3. Identify key details\n4. Answer questions based on passage' },
                            { title: 'Tips', desc: '• Read questions first\n• Underline key points\n• Use context clues\n• Don\'t bring outside knowledge' }
                        ],
                        examples: [
                            { label: '📝 Passage 1: The Importance of Water', text: 'Water is essential for all living things. Without water, life cannot exist. Our body needs water to function properly. We should drink at least 8 glasses of water daily. Water is also used for farming, cooking, and cleaning. We must save water for future generations.\n\nQuestions:\n1. Why is water important?\n2. How much water should we drink daily?\n3. What are the uses of water?\n4. Why should we save water?' },
                            { label: '📝 Passage 2: The Power of Reading', text: 'Reading is a wonderful habit. It improves vocabulary, enhances knowledge, and reduces stress. Books are our best friends. They take us to new worlds and teach us valuable lessons. Everyone should develop a reading habit.\n\nQuestions:\n1. What are the benefits of reading?\n2. Why are books considered best friends?\n3. Who should develop a reading habit?' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'What is the main theme of the passage about water?', options: ['Importance of water', 'Farming methods', 'Cooking recipes', 'Cleaning tips'], correct: 0, explanation: 'The passage emphasizes water\'s importance.' },
                        { q: 'How much water should we drink daily according to the passage?', options: ['4 glasses', '6 glasses', '8 glasses', '10 glasses'], correct: 2, explanation: 'The passage recommends 8 glasses.' },
                        { q: 'What are the benefits of reading mentioned in the passage?', options: ['Improves vocabulary', 'Enhances knowledge', 'Reduces stress', 'All of the above'], correct: 3, explanation: 'All benefits are mentioned.' }
                    ]
                }
            },
            '8-mixed': {
                title: 'Mixed Test - 8th Grade',
                description: 'Questions from all topics',
                cheatSheet: {
                    sections: [{
                        title: '🎯 Mixed Practice Test',
                        rules: [
                            { title: 'Instructions', desc: '• Questions from all topics\n• Grammar, Writing, and Reading\n• Test your overall knowledge\n• Time yourself' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'She _____ to school every day.', options: ['go', 'goes', 'going', 'went'], correct: 1, explanation: 'Third person singular needs -s.' },
                        { q: 'Identify the noun: "The cat sat on the mat."', options: ['cat', 'sat', 'on', 'the'], correct: 0, explanation: 'Cat is a thing.' },
                        { q: 'What is the format of a formal letter?', options: ['Sender\'s address, Date, Receiver\'s address, Subject, Body', 'Date only', 'Subject only', 'Body only'], correct: 0, explanation: 'Formal letters have specific format.' },
                        { q: 'What should the introduction of an essay contain?', options: ['Thesis statement', 'Conclusion', 'Examples', 'References'], correct: 0, explanation: 'Thesis is the main argument.' },
                        { q: 'What is an appropriate salutation for a formal letter?', options: ['Hi', 'Hello', 'Dear Sir/Madam', 'Hey'], correct: 2, explanation: 'Use "Dear" with title.' },
                        { q: 'What is the main theme of the passage about water?', options: ['Importance of water', 'Farming methods', 'Cooking recipes', 'Cleaning tips'], correct: 0, explanation: 'Emphasizes water\'s importance.' }
                    ]
                }
            }
        }
    },
    9: {
        name: '9th Grade',
        menuItems: [
            { id: '9-grammar', icon: '📝', name: 'Advanced Grammar', count: '60+ Qs', page: 'cheat-sheet' },
            { id: '9-writing', icon: '✍️', name: 'Writing Skills', count: 'Formats', page: 'cheat-sheet' },
            { id: '9-reading', icon: '📖', name: 'Reading Passages', count: '5 Passages', page: 'cheat-sheet' },
            { id: '9-mixed', icon: '🎯', name: 'Mixed Test', count: 'All Topics', page: 'cheat-sheet' }
        ],
        topics: {
            '9-grammar': {
                title: 'Advanced Grammar - 9th Grade',
                description: 'Voice, Narration, Prepositions, Conjunctions',
                cheatSheet: {
                    sections: [{
                        title: '🔊 Voice (Active & Passive)',
                        rules: [
                            { title: 'Active Voice', desc: 'Subject performs the action.\nStructure: Subject + Verb + Object\nExample: She wrote a letter.' },
                            { title: 'Passive Voice', desc: 'Subject receives the action.\nStructure: Object + be + past participle + by + Subject\nExample: A letter was written by her.' },
                            { title: 'Rules', desc: '• Object becomes subject\n• Subject becomes agent\n• Verb becomes be + past participle\n• Tense changes accordingly' }
                        ],
                        examples: [
                            { label: '✨ Voice Conversion Examples', text: 'Active: She writes a letter.\nPassive: A letter is written by her.\n\nActive: They are playing cricket.\nPassive: Cricket is being played by them.\n\nActive: He has completed the work.\nPassive: The work has been completed by him.' }
                        ]
                    }, {
                        title: '💬 Narration (Direct & Indirect)',
                        rules: [
                            { title: 'Direct Speech', desc: 'Exact words with quotation marks.\nExample: She said, "I am happy."' },
                            { title: 'Indirect Speech', desc: 'Reported words without quotation marks.\nExample: She said that she was happy.' },
                            { title: 'Rules', desc: '• Change tense (present → past)\n• Change pronouns\n• Remove quotation marks\n• Use "that" for statements' }
                        ],
                        examples: [
                            { label: '✨ Narration Conversion Examples', text: 'Direct: She said, "I am happy."\nIndirect: She said that she was happy.\n\nDirect: He said, "I will come tomorrow."\nIndirect: He said that he would come the next day.\n\nDirect: "Please help me," she said.\nIndirect: She requested me to help her.' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'The book _____ by the author.', options: ['wrote', 'was written', 'is writing', 'has written'], correct: 1, explanation: 'Passive voice: be + past participle.' },
                        { q: 'She said, "I am happy." (Indirect)', options: ['She said she is happy', 'She said she was happy', 'She said I am happy', 'She said I was happy'], correct: 1, explanation: 'Past tense in indirect speech.' },
                        { q: 'She is good _____ mathematics.', options: ['in', 'at', 'on', 'with'], correct: 1, explanation: '"Good at" is correct.' }
                    ]
                }
            },
            '9-writing': {
                title: 'Writing Skills - 9th Grade',
                description: 'Advanced writing formats',
                cheatSheet: {
                    sections: [{
                        title: '📝 Report Writing',
                        rules: [
                            { title: 'Format', desc: '1. Title/Headline\n2. Byline (who wrote it)\n3. Introduction (what, when, where)\n4. Body (details, quotes)\n5. Conclusion (summary)' },
                            { title: 'Tips', desc: '• Use past tense\n• Be objective\n• Include key details\n• Quote people when possible' }
                        ],
                        examples: [
                            { label: '📝 Sample Report', text: 'ANNUAL SPORTS DAY CELEBRATED\n\nBy Staff Reporter\n\nMumbai, 15th January 2024: The Annual Sports Day was celebrated at St. Mary\'s School with great enthusiasm. The event started with a march past followed by various athletic events.\n\nThe students participated in races, long jump, and throwball. The chief guest, Mr. Sharma, distributed medals to the winners.\n\nThe event concluded with a vote of thanks. It was a day of great joy and sportsmanship.' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'What is the format for a notice?', options: ['Notice, Date, Body, Signature', 'Only Body', 'Only Date', 'Only Signature'], correct: 0, explanation: 'Notice has specific format.' },
                        { q: 'What is the purpose of a report?', options: ['To inform about an event', 'To share opinions', 'To tell a story', 'To write a letter'], correct: 0, explanation: 'Reports inform about events.' }
                    ]
                }
            },
            '9-reading': {
                title: 'Reading Passages - 9th Grade',
                description: 'Advanced comprehension passages',
                cheatSheet: {
                    sections: [{
                        title: '📖 Reading Comprehension',
                        rules: [
                            { title: 'How to Approach', desc: '1. Read the passage carefully\n2. Understand the main idea\n3. Identify key details\n4. Answer questions based on passage' },
                            { title: 'Tips', desc: '• Read questions first\n• Underline key points\n• Use context clues\n• Don\'t bring outside knowledge' }
                        ],
                        examples: [
                            { label: '📝 Passage: The Importance of Education', text: 'Education is the foundation of a successful life. It opens doors to opportunities and helps us grow as individuals. An educated person can think critically, solve problems, and contribute to society. Education is not just about learning facts; it\'s about learning how to think.\n\nQuestions:\n1. Why is education important?\n2. What does education help us with?\n3. What is education really about?\n4. Who can contribute to society?' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'What is the foundation of a successful life according to the passage?', options: ['Money', 'Education', 'Technology', 'Family'], correct: 1, explanation: 'Education is the foundation.' },
                        { q: 'What does education help us with?', options: ['Think critically', 'Solve problems', 'Contribute to society', 'All of the above'], correct: 3, explanation: 'All of these are benefits.' }
                    ]
                }
            },
            '9-mixed': {
                title: 'Mixed Test - 9th Grade',
                description: 'Questions from all advanced topics',
                cheatSheet: {
                    sections: [{
                        title: '🎯 Mixed Practice Test',
                        rules: [
                            { title: 'Instructions', desc: '• Questions from all topics\n• Grammar, Writing, and Reading\n• Test your overall knowledge\n• Time yourself' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'The book _____ by the author.', options: ['wrote', 'was written', 'is writing', 'has written'], correct: 1, explanation: 'Passive voice.' },
                        { q: 'She said, "I am happy." (Indirect)', options: ['She said she is happy', 'She said she was happy', 'She said I am happy', 'She said I was happy'], correct: 1, explanation: 'Past tense in indirect.' },
                        { q: 'She is good _____ mathematics.', options: ['in', 'at', 'on', 'with'], correct: 1, explanation: 'Good at is correct.' },
                        { q: 'What is the format for a notice?', options: ['Notice, Date, Body, Signature', 'Only Body', 'Only Date', 'Only Signature'], correct: 0, explanation: 'Notice has specific format.' }
                    ]
                }
            }
        }
    },
    10: {
        name: '10th Grade - Board Exam',
        menuItems: [
            { id: '10-grammar', icon: '⭐', name: 'Grammar Mastery', count: '80+ Qs', page: 'cheat-sheet' },
            { id: '10-writing', icon: '✍️', name: 'Writing Skills', count: 'Formats', page: 'cheat-sheet' },
            { id: '10-reading', icon: '📖', name: 'Reading Passages', count: '5 Passages', page: 'cheat-sheet' },
            { id: '10-mixed', icon: '🎯', name: 'Board Exam Prep', count: '100+ Qs', page: 'cheat-sheet' }
        ],
        topics: {
            '10-grammar': {
                title: 'Grammar Mastery - 10th Grade',
                description: 'Complete grammar for board exam',
                cheatSheet: {
                    sections: [{
                        title: '⭐ Tenses - Complete Guide',
                        rules: [
                            { title: 'Present Tense', desc: 'Simple: I play\nContinuous: I am playing\nPerfect: I have played\nPerfect Continuous: I have been playing' },
                            { title: 'Past Tense', desc: 'Simple: I played\nContinuous: I was playing\nPerfect: I had played\nPerfect Continuous: I had been playing' },
                            { title: 'Future Tense', desc: 'Simple: I will play\nContinuous: I will be playing\nPerfect: I will have played\nPerfect Continuous: I will have been playing' }
                        ],
                        examples: [
                            { label: '✨ Tense Conversion Table', text: 'Present Simple → Past Simple\nI play → I played\n\nPresent Continuous → Past Continuous\nI am playing → I was playing\n\nPresent Perfect → Past Perfect\nI have played → I had played' }
                        ]
                    }, {
                        title: '⭐ Clauses',
                        rules: [
                            { title: 'Noun Clause', desc: 'Acts as a noun.\nExample: I know that he is honest.' },
                            { title: 'Adjective Clause', desc: 'Acts as an adjective.\nExample: The book which I read is good.' },
                            { title: 'Adverb Clause', desc: 'Acts as an adverb.\nExample: He arrived when I was leaving.' }
                        ],
                        examples: [
                            { label: '✨ Clause Examples', text: 'Noun: She said that she would come.\nAdjective: The man who came is my uncle.\nAdverb: He left because he was tired.' }
                        ]
                    }, {
                        title: '⭐ Conditionals',
                        rules: [
                            { title: 'Zero Conditional', desc: 'General truths.\nIf + present, present\nExample: If you heat ice, it melts.' },
                            { title: 'First Conditional', desc: 'Possible future.\nIf + present, will + verb\nExample: If it rains, I will stay home.' },
                            { title: 'Second Conditional', desc: 'Unreal present.\nIf + past, would + verb\nExample: If I were rich, I would travel.' },
                            { title: 'Third Conditional', desc: 'Unreal past.\nIf + past perfect, would have + verb\nExample: If I had studied, I would have passed.' }
                        ],
                        examples: [
                            { label: '✨ Conditional Examples', text: 'Zero: If you mix red and blue, you get purple.\nFirst: If she studies, she will pass.\nSecond: If I knew the answer, I would tell you.\nThird: If he had arrived earlier, he would have seen it.' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'Identify the tense: "He has been studying for hours."', options: ['Present Continuous', 'Present Perfect', 'Present Perfect Continuous', 'Past Perfect'], correct: 2, explanation: 'has/have + been + -ing' },
                        { q: 'Choose the correct form: "I wish I _____ rich."', options: ['am', 'was', 'were', 'had been'], correct: 2, explanation: 'Use "were" for unreal present wishes.' },
                        { q: 'Identify the clause: "I know that he is honest."', options: ['Noun Clause', 'Adjective Clause', 'Adverb Clause', 'No Clause'], correct: 0, explanation: 'Acts as a noun.' }
                    ]
                }
            },
            '10-writing': {
                title: 'Writing Skills - 10th Grade',
                description: 'Complete writing for board exam',
                cheatSheet: {
                    sections: [{
                        title: '📝 Formal Letter Writing',
                        rules: [
                            { title: 'Complete Format', desc: 'Sender\'s Address\n(Leave a line)\nDate\n(Leave a line)\nReceiver\'s Address\n(Leave a line)\nSubject: ________\n(Leave a line)\nSir/Madam,\n(Leave a line)\nBody Paragraph 1: Introduction\nBody Paragraph 2: Details\nBody Paragraph 3: Conclusion\n(Leave a line)\nThank you,\nYours faithfully/sincerely,\n(Leave a line)\n(Your Name)\n(Designation)' },
                            { title: 'Types of Formal Letters', desc: '• Letter to Editor\n• Application for Leave\n• Complaint Letter\n• Job Application\n• Inquiry Letter' }
                        ],
                        examples: [
                            { label: '📝 Letter to the Editor', text: '123, Green Valley\nMumbai - 400001\n\nDate: 15th January 2024\n\nThe Editor\nTimes of India\nMumbai - 400001\n\nSubject: Increasing Traffic Congestion\n\nSir,\n\nI am writing to express my concern about the increasing traffic congestion in our city. The situation has become unbearable, with long hours spent in traffic.\n\nThe government must take immediate action. We need better road infrastructure and public transport facilities.\n\nI hope this letter will encourage the authorities to address this issue.\n\nThank you,\nYours faithfully,\nRahul Sharma' }
                        ]
                    }, {
                        title: '📝 Report Writing',
                        rules: [
                            { title: 'Complete Format', desc: 'Title (Capitalized)\n\nBy (Name)\n\nIntroduction: What, When, Where\n\nBody: Details, Quotes, Statistics\n\nConclusion: Summary, Outcome' },
                            { title: 'Tips', desc: '• Use past tense\n• Be objective\n• Include quotes\n• Use formal language' }
                        ],
                        examples: [
                            { label: '📝 Sample Report', text: 'SCIENCE EXHIBITION HELD AT SCHOOL\n\nBy Staff Reporter\n\nMumbai, 15th January 2024: The Annual Science Exhibition was held at St. Mary\'s School with great enthusiasm. More than 100 students participated in the event.\n\nStudents displayed innovative projects on topics like renewable energy, robotics, and environmental conservation. The chief guest, Dr. Sharma, praised the creativity of the students.\n\nThe exhibition was a great success and inspired many students to take up science.' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'What is the format for a formal letter?', options: ['Sender\'s address, Date, Receiver\'s address, Subject, Body', 'Only Body', 'Only Subject', 'Only Date'], correct: 0, explanation: 'Formal letter has specific format.' },
                        { q: 'What is the purpose of a letter to the editor?', options: ['To express opinion on public issues', 'To complain about personal issues', 'To write about family', 'To share a story'], correct: 0, explanation: 'Letters to editor address public issues.' }
                    ]
                }
            },
            '10-reading': {
                title: 'Reading Passages - 10th Grade',
                description: 'Board exam style passages',
                cheatSheet: {
                    sections: [{
                        title: '📖 Reading Comprehension - Board Exam Style',
                        rules: [
                            { title: 'How to Approach', desc: '1. Read the passage carefully\n2. Understand the main idea\n3. Identify key details\n4. Answer questions based on passage' },
                            { title: 'Tips', desc: '• Read questions first\n• Underline key points\n• Use context clues\n• Don\'t bring outside knowledge' }
                        ],
                        examples: [
                            { label: '📝 Passage: The Importance of Time Management', text: 'Time management is essential for success in life. It helps us organize our daily activities and achieve our goals. People who manage their time well are more productive and less stressed.\n\nTo manage time effectively, we should prioritize tasks, set deadlines, and avoid distractions. Time wasted cannot be recovered. Therefore, we must value every moment.\n\nSuccessful people around the world attribute their success to good time management.\n\nQuestions:\n1. Why is time management important?\n2. What are the benefits of time management?\n3. How can we manage time effectively?\n4. Why should we value every moment?' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'Why is time management important?', options: ['For success in life', 'For wasting time', 'For entertainment', 'For sleeping'], correct: 0, explanation: 'Essential for success.' },
                        { q: 'What are the benefits of time management?', options: ['More productive', 'Less stressed', 'Both A and B', 'None'], correct: 2, explanation: 'Both productivity and reduced stress.' }
                    ]
                }
            },
            '10-mixed': {
                title: 'Board Exam Preparation - 10th Grade',
                description: 'Complete board exam practice with mixed questions',
                cheatSheet: {
                    sections: [{
                        title: '🎯 Board Exam Preparation',
                        rules: [
                            { title: 'Paper Pattern', desc: 'Section 1: Reading Skills (40%)\nSection 2: Grammar (15%)\nSection 3: Writing Skills (25%)\nSection 4: Oral Test (20%)' },
                            { title: 'Tips', desc: '• Manage time well\n• Read questions carefully\n• Write clearly\n• Practice previous papers' }
                        ]
                    }],
                    practiceQuestions: [
                        { q: 'Identify the tense: "He has been studying for hours."', options: ['Present Continuous', 'Present Perfect', 'Present Perfect Continuous', 'Past Perfect'], correct: 2, explanation: 'has/have + been + -ing' },
                        { q: 'The book _____ by the author.', options: ['wrote', 'was written', 'is writing', 'has written'], correct: 1, explanation: 'Passive voice.' },
                        { q: 'She said, "I am happy." (Indirect)', options: ['She said she is happy', 'She said she was happy', 'She said I am happy', 'She said I was happy'], correct: 1, explanation: 'Past tense in indirect.' },
                        { q: 'What is the format for a formal letter?', options: ['Sender\'s address, Date, Receiver\'s address, Subject, Body', 'Only Body', 'Only Subject', 'Only Date'], correct: 0, explanation: 'Formal letter has specific format.' }
                    ]
                }
            }
        }
    }
};

// Helper functions
function getClassData(classNum) {
    return SYLLABUS[classNum] || SYLLABUS[8];
}

function getTopicData(classNum, topicId) {
    const classData = getClassData(classNum);
    if (!classData || !classData.topics) return null;
    return classData.topics[topicId] || null;
}

function getMenuItems(classNum) {
    const classData = getClassData(classNum);
    return classData.menuItems || [];
}

function getTopicQuestions(topicId, classNum) {
    const topicData = getTopicData(classNum, topicId);
    if (!topicData || !topicData.cheatSheet) return [];
    const sections = topicData.cheatSheet.sections || [];
    for (const section of sections) {
        if (section.practiceQuestions) {
            return section.practiceQuestions;
        }
    }
    return [];
}