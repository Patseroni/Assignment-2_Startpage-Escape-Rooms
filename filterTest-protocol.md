## FILTER FUNCTIONALITY TEST

## Challenge Type

# Test Case A: Type Online
1. Browse to the page
2. Click the button "Filter Challenges"
3. Check the "include online challenges" checkbox

Expected:
* The "include online challenges" checkbox should be checked
* The "include onsite challenges" checkbox should be unchecked
* The challenges displayed should only have titles without "(onsite)" next to it

# Test Case B: Type Onsite
1. Browse to the page
2. Click the button "Filter Challenges"
3. Check the "include onsite challenges" checkbox

Expected:
* The "include onsite challenges" checkbox should be checked
* The "include online challenges" checkbox should be unchecked
* The challenges displayed should only have "(onsite)" next to title

# Test Case C: Type None
1. Browse to the page
2. Click the button "Filter Challenges"
3. Do Test Case A and B without reloading page
4. Uncheck "include onsite challenges" checkbox and "include online challenges" checkbox

Expected:
* Both Test Case A and B should display as before
* All 30 challenges should be displayed when both are unchecked


## Challenge Rating

# Test Case A: Rating 1-5
1. Browse to the page
2. Click the button "Filter Challenges"
3. Make sure no other filter is activated before testing
4. Start by clicking on the first star on the left and the last star on the right

Expected: 
* On the left side only the first star should be filled
* On the right side all 5 stars should be filled
* Only challenges with rating between 1 and 5 stars should be displayed

# Test Case B: Rating 2-4
1. Make sure no other filter is activated before testing
2. Start by clicking on the second star on the left and the fourth star on the right

Expected: 
* On the left side only the 2 first stars should be filled
* On the right side the first 4 stars should be filled
* Only challenges with rating between 2 and 4 stars should be displayed

# Test Case C: Rating 3-3
1. Make sure no other filter is activated before testing
2. Start by clicking on the third star on the left and the third star on the right

Expected: 
* On the left side only the first 3 stars should be filled
* On the right side the first 3 stars should be filled
* Only challenges with rating 3 should be displayed

# Test Case D: Rating & Type
1. Browse to the page
2. Click the button "Filter Challenges"
3. Check the "include onsite challenges" checkbox
4. Click on the second star on the left and the fourth star on the right

Expected:
* The "include onsite challenges" checkbox should be checked
* The "include online challenges" checkbox should be unchecked
* The challenges displayed should only have "(onsite)" next to title
* On the left side only the 2 first stars should be filled
* On the right side the first 4 stars should be filled
* The challenges displayed should only have ratings between 2-4 and "(onsite)" next to title

## Challenge Search

# Test Case A: Search Title
1. Browse to the page
2. Click the button "Filter Challenges"
3. Make sure no other filter is activated before testing
4. Write the title of a challenge of your choise in the input box
5. Delete the text in the input box

Expected:
* The challenge displayed should have the title
* All challenges should be displayed when inputbox is empty

# Test Case B: Search Description
1. Browse to the page
2. Click the button "Filter Challenges"
3. Make sure no other filter is activated before testing
4. Write a word from the description of a challenge of your choise in the input box
5. Delete the text in the input box

Expected:
* The challenge displayed should have the word insde description or title
* All challenges should be displayed when inputbox is empty

# Test Case C: Search & Type
1. Browse to the page
2. Click the button "Filter Challenges"
3. Check the "include onsite challenges" checkbox
4. Write a word from the description or the title of a challenge of your choise in the input box
5. Delete the text in the input box

Expected:
* The "include onsite challenges" checkbox should be checked
* The "include online challenges" checkbox should be unchecked
* The challenges displayed should only have "(onsite)" next to title
* The challenge displayed should have the word insde description or title and "(onsite)" next to title

## Challenge Labels

# Test Case A: One label
1. Browse to the page
2. Click the button "Filter Challenges"
3. Open the API data (https://lernia-sjj-assignments.vercel.app/api/challenges) on a new window
4. Click on one label in the tag section
5. Make sure it turns dark blue when clicked
6. Now use inspect on one of the challenges displayed to find the "ID" value of that challenge
7. Find the matching "ID" value in the API data and look for labels
8. Check if the label you pressed on the page (the dark blue) exist in labels
9. Click the same label again
10. Check if all 30 challenges is displayed again

Expected: 
* When label is clicked the background color of the label should be changed to dark blue
* The API data with the same "ID" value as the challenge "ID" value should contain the label name you pressed that is dark blue
* When label is clicked again the dark blue background color should be gone and all challenges should be displayed again

# Test Case B: Multiple labels
1. Browse to the page
2. Click the button "Filter Challenges"
3. Open the API data (https://lernia-sjj-assignments.vercel.app/api/challenges) on a new window
4. Click on 3 labels of your choise 
5. Make sure all 3 turns dark blue when clicked
6. Find the matching "ID" value in the API data and look for labels (if no challenges is displayed check "Expected" further down in this document)
7. Check if the labels you pressed on the page (the dark blue) exist in labels
8. Click the same labels again
9. Check if all 30 challenges is displayed again

Expected: 
* When labels is clicked the background color of the label should be changed to dark blue
* If there is no challenges displayed there should not be any array of labels in the API data that contains all the tags you pressed
* The API data with the same "ID" value as the challenge "ID" value should contain the labels names you pressed that is dark blue
* When all the labels are clicked again the dark blue background color should be gone and all challenges should be displayed again


# Test Case C: One label and Rating
1. Browse to the page
2. Click the button "Filter Challenges"
3. Start by clicking on the second star on the left and the fourth star on the right
4. Open the API data (https://lernia-sjj-assignments.vercel.app/api/challenges) on a new window
5. Click on one label in the tag section
6. Make sure it turns dark blue when clicked
7. Now use inspect on one of the challenges displayed to find the "ID" value of that challenge
8. Find the matching "ID" value in the API data and look for labels
9. Check if the label you pressed on the page (the dark blue) exist in labels
10. Click the same label again
11. Check if all 30 challenges is displayed again

Expected: 
* On the left side only the 2 first stars should be filled
* On the right side the first 4 stars should be filled
* At first only challenges with rating between 2 and 4 stars should be displayed
* When label is clicked the background color of the label should be changed to dark blue
* The API data with the same "ID" value as the challenge "ID" value should contain the label name you pressed that is dark blue and the rating should be between 2-4
* When label is clicked again the dark blue background color should be gone and all challenges with rating between 2-4 should be displayed again