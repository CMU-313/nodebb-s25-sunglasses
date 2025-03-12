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

## Topic Tags

### Instructions

1. Create an account as a normal user
2. Create a topic and enter the topic discussion
3. You should see a User tag next to your post
4. Create an admin account
5. Create a topic and enter the topic discussion
6. You should see a User tag next to your post

### Screenshots

User Tag
![image](https://github.com/user-attachments/assets/3f3c869c-7b60-4ba0-b7e7-ee66165a5900)

### Testing

1 automated tests in `test\event.js`.

- Checks the role of the user is what is being stored
  `npm run lint` and `npm run test` are working.

## Admin Star

### Instructions

1. Create an account as a admin user
2. Create a topic and enter the topic discussion
3. You should see a blue star next to your name

### Screenshots

User Tag
![image](https://github.com/user-attachments/assets/77530c9d-850c-458c-ac49-f50a5ce1fceb)

### Testing

1 automated tests in `test\event.js`.

- Checks the role of the user is what is being stored and if it is admin give it a star
  `npm run lint` and `npm run test` are working.

## Endorse Posts

### Instructions

1. Create an account as a admin user
2. Navigate to any topic and enter the topic discussion
3. Hover over any reply and select the endorse/unendorse post tool
4. Toggle post endorsement as needed, and the changes will be visible to all users

![Screenshot 2025-02-27 at 11 51 10 PM](https://github.com/user-attachments/assets/1923d6bf-ecfe-49d4-ba91-1ee41f30adbf)
![Screenshot 2025-02-27 at 11 51 28 PM](https://github.com/user-attachments/assets/d9d8be9c-aad3-4d49-8bd3-ce5bb2577091)

### Testing

Added automated tests in `test/topics.js`

- Creates a topic, creates a reply to that topic
- Assumes the admin role, and then endorses the reply using the API
- Checks that the reply was endorsed using the API
- Unendorses the reply and checks again to verify the status
- Sufficient test because it checks the entire process: assumes the admin role, creates a dummy topic and reply, endorses and unendorses the reply, and checks the endorsement status from the database at each step.
  `npm run lint` and `npm run test` are working.

---

## Group Title in Chat Messages

### Instructions

1. Create two users: one with no assigned user group and another with an assigned group (e.g., "Administrators").
2. Start a chat conversation between the two users.
3. The first user (without a group) should send a message.
4. The second user (with a group) should send a message.
5. In the chat message display, the first user should have no group title shown, while the second user should have "Administrators" displayed.

### Screenshots

User with no group title vs User with group title
![chat with groups and no groups](https://github.com/user-attachments/assets/e42e63b1-2cfc-4b75-afaa-1410e90d0f8f)

User can change their group title  
![chat with groups changed](https://github.com/user-attachments/assets/d43c86b4-fafa-4e08-aad2-71f45228ea3d)

### Testing

Added automated tests in `test/messaging.js`:

- Sends a message from a user with no group title and verifies that `groupTitle` is empty.
- Sends a message from a user in the "Administrators" group and verifies that `groupTitle` is "Administrators".  
  These tests confirm that the correct group title is displayed in the chat interface.  
  `npm run lint` and `npm run test` are working.

## Translate Posts

### Instructions

1. Create an account (doesn't matter what kind).
2. Post a chat in a separate language.
3. Click the "translate this message" button under the post (only shows up if the message isn't in English).
4. Translation will show up under the button
5. Click the "Undo translation" button to hide the translation.

### Screenshots

![Screenshot 2025-02-27 at 8 24 59 PM](https://github.com/user-attachments/assets/3070eec9-a165-4f3d-9839-bbe6ca8466e8)
![Screenshot 2025-02-27 at 8 25 10 PM](https://github.com/user-attachments/assets/ddf4c804-91c4-4c9d-9dd1-d47c1da83724)
![Screenshot 2025-02-27 at 8 25 17 PM](https://github.com/user-attachments/assets/e28ca371-5342-4cb6-bc14-702a1c716ec9)

### Testing

One atuomated test:

- Posts a message in English with typos.  
  This test confirms that the translation will show only if the API detects a different language.  
  `npm run lint` and `npm run test` are working.
