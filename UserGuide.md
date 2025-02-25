# User Guide

## Anonymous Posting

### Instructions
1. Create a topic and enter the topic discussion
2. Write something in the quick reply box
3. Check the "Post Anonymously" button next to the Quick Reply button
4. Post the post
5. Display name of the poster should be "Anonymous" instead of their username

### Screenshots
Indicate anonymous checkbox
![image](https://github.com/user-attachments/assets/f8a48aab-8494-4c8a-8769-9e3558d54c0d)

Reply is anonymous
![image](https://github.com/user-attachments/assets/ea93e48b-66ba-425f-ba2e-33bce61117ef)

### Testing
2 automated tests in `test\topics.js`.
- Posts an unanonymous reply, retrieves the post, and verifies that it is unanonymous.
- Posts an anonymous reply, retrieves the post, and verifies that it is anonymous.
These tests are sufficient for seeing if the backend correctly stores the data. Pre-existing tests also verify the schema of the anonymous field.
`npm run lint` and `npm run test` are working.

## Auto-Content filter

### Instructions
1. Log into an admin account
2. Enter the admin dashboard http://localhost:4567/admin
3. On the left hand tab, go to Settings -> Posts
4. Scroll down to Posting Restrictions -> Banned Words
5. Input a few banned words (e.g. "apple, strawberry")
6. Save your changes
7. Navigate back to NodeBB Forum
8. Create a new topic with the banned words
9. Post the topic
10. Banned words should be starred out (e.g. "a\*\*\*e", "s\*\*\*\*\*\*\*\*y")

### Screenshots
Admin sets banned words in settings
![image](https://github.com/user-attachments/assets/c3db57dc-979b-458d-b1ba-c8c4b4026b94)

User wants to post something with banned words
![image](https://github.com/user-attachments/assets/8f4735b1-1aee-4ccd-b522-fc77e476969a)

Resulting post
![image](https://github.com/user-attachments/assets/d6181ede-5e53-4dc7-ad58-666976e47e15)


### Testing
Added automated tests in `test/topics.js` to test `censorBannedText` and `censorBannedMarkdown`.
These tests set a list of banned words, post a post with the banned word both in title and in content, and verify the result contains the starred out words.
These tests verify the accuracy of the functions and the censoring for both plaintext and markdown.
`npm run lint` and `npm run test` are working.
