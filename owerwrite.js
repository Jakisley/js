const owerwriteLinks = (obj) => {
  let linkobj = obj;
  if (Array.isArray(linkobj)) {
    return [...linkobj.map(item => {
      owerwriteLinks(item);
    })]
  }else if (typeof object === 'object') {
    Object.entries(linkobj).forEach(([key, value]) => {
      linkobj[key] = owerwriteLinks(value)
    });
    return linkobj;

  } else return linkobj;
}
let users = {
  rooms: [1,2,3,4,5,6,7,8,9],
  user1:{
    name: "Иван",
    surname: "Грачев",
    sizes: {
      height: 182,
      width: 50,
    },
    status: "vip",
  },
  user2:{
    name: "Андрей",
    surname: "Комаров",
    sizes: {
      height: 170,
      width: 55,
    },
    status: "guest"
  },

};

console.log(owerwriteLinks(users));