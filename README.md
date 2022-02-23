Data contract
4 tables

## Pets
## Humans
## Pet_likes
## Pet_matches


## pets :
id - incremental number -primary key
name - string
breed - string
owner id - number
temperament - string
energy_levels - number (1-5)
description  - string
images - array
treats - number
pats - number

## humans : 
id - incremental number (reference key for owner id) -primary key
auth0id - string
token - string
name - string
email - string
// gender - NB/F/M/Prefer not to say
// gender_pref - NB/F/M/All
post_code - number
// flag - boolean
// reviews - array of strings

## pet_likes
id - number incremental
pet_id - number references pets.id
liked_pet_id - number also references pets.id

1 - 10001 - 10005
2 - 10005 - 10001

## pet_matches
id - number incremental
pet_one - number references pets.id
pet_two - number references pets.id

1 - 10005 - 10001

—---

MVP:
Kate’s wireframe includes:
Sign up page (with form to add deets)
front page where you can like a random dog (displays dog image and like button and arrows to move between dogs)
Dog profile page that includes all doggy details (edit button should be included on owner's pet profile page)
chat page where matched pet owners can chat and shit
navigation thingy with: your pets && matches && chat && barkmates && log out 
yay you've matched page

Stretch:
Flagging/reviews
Distance away
Owner verification
Image swiping
Uploading images (instead of hard coding)
Treats and pats
Dog of the month!
Human profile page with review
Gender preference filtering
notification when you have a new match

Building DB with Knex

