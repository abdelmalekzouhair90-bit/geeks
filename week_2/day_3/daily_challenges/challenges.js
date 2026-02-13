// ====== Daily Challenge 1
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
  }
}

const video1 = new Video('Learn JavaScript', 'Alice', 300);
console.log(video1.watch());

const video2 = new Video('CSS Grid Tutorial', 'Bob', 450);
console.log(video2.watch());

const videoData = [
  { title: 'React Basics', uploader: 'Charlie', time: 600 },
  { title: 'Node.js Tutorial', uploader: 'Dana', time: 720 },
  { title: 'Python for Beginners', uploader: 'Eve', time: 900 },
  { title: 'Machine Learning Intro', uploader: 'Frank', time: 1200 },
  { title: 'HTML5 Crash Course', uploader: 'Grace', time: 400 }
];

const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));
videoInstances.forEach(video => console.log(video.watch()));


// ====== Daily Challenge 2

// ====== Daily Challenge 3
