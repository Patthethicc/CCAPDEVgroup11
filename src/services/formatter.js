/*
 COMMENTING OUT HARDCODES
 const imgSrc = [
  "https://i.pinimg.com/736x/e4/47/0b/e4470b9552dcbe56ec14483360595e7e.jpg",
  "https://i.pinimg.com/736x/1f/42/a4/1f42a478b7d4e85360622d74f181d37a.jpg",
  "https://i.pinimg.com/736x/25/62/c5/2562c50d5906c92f066038d4d5d3cdf2.jpg",
  "https://i.pinimg.com/736x/db/5c/6c/db5c6c6dce7e4757d213c43091abb9f2.jpg",
  "https://i.pinimg.com/736x/5a/0d/49/5a0d491f63512931b939a7363c2f7bf7.jpg",
  "https://i.pinimg.com/736x/ac/6d/02/ac6d02998530cdbffb5b85cb04e4bea6.jpg",
  "https://i.pinimg.com/736x/35/d3/9f/35d39fb0304308d2c2a3e610c636915a.jpg",
];

const getRandImg = function () {
  const index = Math.floor(Math.random() * imgSrc.length);
  return imgSrc[index];
}; */

const actionIcons = [
  "fa fa-arrow-up mx-1",
  "fa fa-arrow-down mx-1",
  "fa fa-comments mx-1",
];

const formatPostData = function (rawData) {
  return {
    meta: {
      imgSrc: getRandImg(),
      username: rawData.meta.username,
      time: rawData.meta.time,
    },
    header: {
      title: rawData.header.title,
      deadline: rawData.header.deadline,
    },
    tags: {
      text: rawData.tags.text,
      className: rawData.tags.className,
    },
    body: rawData.body,
    actions: rawData.actions.map((count, index) => ({
      label: count,
      icon: actionIcons[index],
    })),
  };
};

export default formatPostData;
