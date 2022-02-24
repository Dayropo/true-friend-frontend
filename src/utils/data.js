import Video1 from "../assets/videos/stories-01.mp4"
import Video2 from "../assets/videos/stories-02.mp4"
import Video3 from "../assets/videos/stories-03.mp4"
import Dodo from "../assets/images/dodo.jpg"

const content = [
  {
    id: 1,
    author: {
      name: "The Dodo",
      image: Dodo,
    },
    source: Video1,
    description:
      "Watch this tiny puppy grow to be 170 pounds and tower over his little boy. ",
    comments: [
      {
        name: "Rebecca Stilwell",
        comment: "Wow, what a big dog",
      },
      {
        name: "Conchita Minguez",
        comment: "Caucasian Shepherd, the best",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "The Dodo",
      image: Dodo,
    },
    source: Video2,
    description:
      "Mom looks at footage from cameras in her kid's rooms and sees the dog checking in on each of them every night.",
    comments: [
      {
        name: "Gail Pochop",
        comment: "What an amazing dog!!",
      },
      {
        name: "Phoebe Dinsmore",
        comment: "Angels on earth, We don't deserve them",
      },
    ],
  },
  {
    id: 3,
    author: {
      name: "The Dodo",
      image: Dodo,
    },
    source: Video3,
    description:
      "People track down a stray dog's puppies in the woods and find the most amazing little cave she built for them.",
    comments: [
      {
        name: "Amber Mehmood",
        comment: "The babies",
      },
      {
        name: "Catholic Lady",
        comment: "Those puppies are SO ADORABLE!",
      },
    ],
  },
]

export default content
