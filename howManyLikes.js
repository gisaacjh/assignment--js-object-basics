var photo = {
  name: "",
  likes: 20,

  howManyLikes: function() {
   return this.likes
  },
  like: function() {
    return this.likes + 1
  }
}



console.log(photo.howManyLikes()); // => 20
console.log(photo.like());
console.log(photo.howManyLikes()); // => 21
