// comment block

const obj = {
  _id: '1',
  reactorImage:
    'https://i.pinimg.com/236x/35/19/b1/3519b1ba45a73dad3ab3c90d9fe11f89.jpg',
  reactorName: 'ransi charles',
  authorImage:
    'https://i.pinimg.com/236x/f7/a4/90/f7a490291de0bd7158268c8e7c5552dd.jpg',
  authorName: 'Rahul Singh',
  jobTitle: 'Marketing',
  postTime: '5 months ago',
  postDescription:
    "The hardest part about being an entrepreneur is that you'll fail ten times for every success.",
  image:
    'https://i.pinimg.com/236x/69/ea/6f/69ea6f9d2e0f78160a7fd99497d7960e.jpg',
  reactionCount: '2600',
  repostCount: '645',
  comments: [
    {
      commentatorImage:
        'https://i.pinimg.com/236x/66/e0/83/66e0837f82ae6e86c5386dc25869c964.jpg',
      commentatorName: 'Daya Don',
      commentatorDesignation: 'Pro player',
      comment: 'Im pro',
      commentTime: '27m',
      commentLikes: '69',
      _id: 'comment',
    },
  ],
};

obj.comments.map((comment) => {
  if (comment.length == 0) {
    console.log("i am empty")
  } else {
    console.log("comment")
  }
})