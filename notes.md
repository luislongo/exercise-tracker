____________________________________________________________________________________________________

"Error: CastError: Cast to ObjectId failed for value \"add\" (type string) at path \"_id\" for model \"Exercise\""

Happens when the id string in /users/:id is not a valid ObjectId (therefore cannot be cast) for Mongoose. To solve, add a match function for id to ensure it's valid:

    if (id.match(/^[0-9a-fA-F]{24}$/)) { ...do stuff } 

In this case, happened because postman request was setup as GET, not ADD.

____________________________________________________________________________________________________