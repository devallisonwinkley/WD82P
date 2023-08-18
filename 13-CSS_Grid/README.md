# RANDOM CODING NOTES/COMMENTS

# FLEXBOX WAY OF DOING A GRID (BEFORE START OF CODE-ALONG)

.flex-container {
display: flex;
flex-wrap: wrap;
}

.flex-container div {
background: peachpuff;
border: 4px solid brown;
height: 100px;
flex: 1;
width: 33.3%;
}

# Flex 1 enables us to distribute the flex items accordingly

# GRID IS A NEW FEATURE OF CSS, COMPARED TO FLEXBOX

.grid-container {
display: grid;
grid-template-columns: 75px 75px 75px;
grid-template-rows: 75px 75px 75px;
gap: 32px;
}

.grid-container div {
background: peachpuff;
border: 1px solid brown;
}

.flex-container {
display: flex;
flex-wrap: wrap;
}

.flex-container div {
background: peachpuff;
border: 4px solid brown;
height: 100px;
flex: 1;
width: 33.3%;
}

# Flex 1 enables us to distribute the flex items accordingly

# GRID IS A NEW FEATURE OF CSS, COMPARED TO FLEXBOX

.grid-container {
display: grid;
grid-template-columns: 75px 75px 75px;
grid-template-rows: 75px 75px 75px;
gap: 32px;
}

.grid-container div {
background: peachpuff;
border: 1px solid brown;
}

# GRID CONTAINER CODE EXAMPLE

.grid-container {
border: 1px solid black;

display: grid;
grid-template-columns: 50px 50px 50px;
grid-template-rows: 50px 50px;

gap: 15px;
justify-content: center;
}

.grid-container div {
background-color: antiquewhite;
}

# YOU CAN USE GRID LAYOUT FOR THE WHOLE PAGE/SITE INSTEAD OF USING FLEXBOX
